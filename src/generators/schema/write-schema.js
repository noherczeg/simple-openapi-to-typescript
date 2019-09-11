const fse = require('fs-extra');
const prettier = require('prettier');
const { EOL } = require('os');
const { pureName } = require('../../utils/naming');
const { consolidateImports } = require('../../utils/imports');
const { propMapper } = require('./utils');

const schemaTemplate = (schema) => `
/* Generated source, do not modify! */

${schema.$$consolidatedImports && schema.$$consolidatedImports.map((imp) => `import { ${imp.imports.map((i) => `${i},`).join('')} } from './${imp.fileName}';`).join('')}

${schema.$$docs && schema.$$docs.length ? `
  /**
   ${schema.$$docs.map((d) => `* ${d.name}: ${d.value}`).join(EOL)}
  */
` : ''}export interface ${schema.$$name} ${schema.$$arrayBase ? `extends Array<${schema.$$arrayBase}>` : ''} ${schema.$$extend ? `extends ${schema.$$extend}` : ''}{
  ${schema.$$properties.map((prop) => `
    ${prop.docs && prop.docs.length ? `
      /**
       ${prop.docs.map((d) => ` * ${d.name}: ${d.value}`).join(EOL)}
       */
    ` : ''}${prop.name} ${prop.required ? '' : '?'}: ${prop.types.map((type) => `
      ${type} ${prop.arrayTypeName ? `<${prop.arrayTypeName}>` : ''}
    `).join(' | ')}
  `).join('')}
}
`;

function writeSchema(key, schema, model, target, prettierOpts) {
  const imports = [];
  const $$name = pureName(key);
  const $$consolidatedImports = [];
  const $$docs = [];
  const $$properties = [];
  const $$arrayBase = schema.type && schema.type === 'array' ? pureName(schema.items.$ref.split('/').pop()) : null;
  let $$extend = null;

  if (schema.discriminator) {
    $$docs.push({ name: 'discriminator', value: schema.discriminator.propertyName });
  }

  if (schema.type) {
    if (schema.type === 'array') {
      const baseName = pureName(schema.items.$ref.split('/').pop());
      imports.push({ ref: baseName, fileName: baseName });
    } else if (schema.type === 'object') {
      Object.entries(schema.properties || {}).forEach(([name, prop]) => {
        const entry = propMapper(name, prop, schema);

        imports.push(...entry.imports);
        $$properties.push(entry.data);
      });
    }
  } else if (schema.allOf) {
    const refs = schema.allOf.filter((a) => a.$ref);

    if (refs.length > 1) {
      console.warn(`WARNING: Multiple $ref-s found for ${key}, extending based on first entry!`);
    }

    if (refs.length > 0 && !$$extend) {
      const toExtend = pureName(refs[0].$ref.split('/').pop());
      $$extend = toExtend;
      imports.push({ ref: toExtend, fileName: toExtend });
    }

    schema.allOf.filter((a) => !a.$ref).forEach((allOf) => {
      if (allOf.type === 'object') {
        Object.entries(allOf.properties || {}).forEach(([name, prop]) => {
          const entry = propMapper(name, prop, allOf);

          // hoist internal properties with their corresponding imports.
          imports.push(...entry.imports);
          $$properties.push(entry.data);
        });
      }
    });
  }

  $$consolidatedImports.push(...consolidateImports(imports));

  const data = schemaTemplate({
    $$name,
    $$arrayBase,
    $$extend,
    $$consolidatedImports,
    $$docs,
    $$properties,
  });
  const filePath = `${target}/components/schemas/${$$name}.ts`;
  const formatted = prettier.format(data, prettierOpts);
  fse.outputFileSync(filePath, formatted);
}

module.exports = {
  writeSchema,
};
