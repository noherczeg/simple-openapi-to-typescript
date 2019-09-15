module.exports = (response) => `
/* Generated source, do not modify! */

export interface ${response.name} {${response.schema.$$properties.map((prop) => `
  ${prop.key} ${prop.required ? '' : '?'}: ${prop.type};
`).join('')}
}
`;
