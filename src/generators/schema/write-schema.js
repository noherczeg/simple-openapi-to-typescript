const fse = require('fs-extra');
const prettier = require('prettier');
const { pureName, fileName } = require('../../utils/naming');
const { consolidateImports } = require('../../utils/imports');
const { propMapper } = require('./utils');
const schemaTemplate = require('./schema-template');

function mapProps(input, $$name, imports, $$properties, readonly) {
  Object.entries(input.properties || {}).forEach(([name, prop]) => {
    const entry = propMapper(name, prop, input, $$name, readonly);

    imports.push(...entry.imports);
    $$properties.push(entry.data);
  });
}

function writeSchema(key, schema, model, target, prettierOpts, readonly) {
  const imports = [];
  const $$name = pureName(key);
  const $$consolidatedImports = [];
  const $$docs = [];
  const $$properties = [];
  const $$arrayBase = schema.type && schema.type === 'array' ? fileName(schema.items.$ref) : null;
  const $$extend = [];

  if (schema.discriminator) {
    $$docs.push({ name: 'discriminator', value: schema.discriminator.propertyName });
  }

  if (schema.type) {
    if (schema.type === 'array') {
      const baseName = fileName(schema.items.$ref);
      imports.push({ ref: baseName, fileName: baseName });
    } else if (schema.type === 'object') {
      mapProps(schema, $$name, imports, $$properties, readonly);
    }
  } else if (schema.allOf) {
    schema.allOf
      .filter((a) => a.$ref)
      .map((a) => fileName(a.$ref))
      .forEach((fn) => {
        imports.push({ ref: fn, fileName: fn });
        $$extend.push(fn);
      });

    schema.allOf.filter((a) => !a.$ref).forEach((allOf) => {
      if (allOf.type === 'object') {
        mapProps(allOf, $$name, imports, $$properties, readonly);
      }
    });
  }

  $$consolidatedImports.push(...consolidateImports(imports, $$name));

  const data = schemaTemplate({
    $$name,
    $$arrayBase,
    $$extend,
    $$consolidatedImports,
    $$docs,
    $$properties,
    readonly,
  });
  const filePath = `${target}/components/schemas/${$$name}.ts`;
  const formatted = prettier.format(data, prettierOpts);
  fse.outputFileSync(filePath, formatted);
}

module.exports = {
  writeSchema,
};
