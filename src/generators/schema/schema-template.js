const { EOL } = require('os');

module.exports = (schema) => `
/* Generated source, do not modify! */

${schema.$$consolidatedImports && schema.$$consolidatedImports.map((imp) => `import { ${imp.imports.map((i) => `${i},`).join('')} } from './${imp.fileName}';`).join('')}

${schema.$$docs && schema.$$docs.length ? `
  /**
   ${schema.$$docs.map((d) => `* ${d.name}: ${d.value}`).join(EOL)}
  */
` : ''}export interface ${schema.$$name} ${schema.$$arrayBase ? `extends Array<${schema.$$arrayBase}>` : ''} ${schema.$$extend.length ? `extends ${schema.$$extend.join(', ')}` : ''}{
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
