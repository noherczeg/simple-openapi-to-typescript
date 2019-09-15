const { EOL } = require('os');

module.exports = (pathData) => `
/* Generated source, do not modify! */

${pathData.$$consolidatedImports && pathData.$$consolidatedImports.map((imp) => `import { ${imp.imports.map((i) => `${i},`).join('')} } from '${imp.fileName}';`).join('')}

${pathData.$$enums && pathData.$$enums.length ? pathData.$$enums.map((e) => `
${e.docs && e.docs.length ? `
/**
 ${e.docs.map((d) => `* ${d.name}: ${d.value}`).join(EOL)}
 */
` : ''}export enum ${e.name} {
  ${e.items ? e.items.map((i) => `${i.key} = '${i.value}',`).join(EOL) : ''}
}
`).join(EOL) : ''}

${pathData.$$pathParams && pathData.$$pathParams.length ? `
export interface PathParams {
  ${pathData.$$pathParams.map((pp) => `
    ${pp.name}${pp.required ? '' : '?'}: ${pp.type} ${pp.subType ? `<${pp.subType}>` : ''}
  `).join('')}
}` : ''}

${pathData.$$queryParameters && pathData.$$queryParameters.length ? `
export interface RequestSearchParams {
  ${pathData.$$queryParameters.map((qp) => `${qp.name}${qp.required ? '' : '?'}: ${qp.type} ${qp.subType ? `<${qp.subType}>` : ''}`).join(EOL)}
}` : ''}

export function createPath(${pathData.$$pathParams && pathData.$$pathParams.length ? 'pathParams: PathParams' : ''}): string {
  return \`${pathData.$$path}\`;
}

export const method: HttpMethods = HttpMethods.${pathData.$$method};

${pathData.$$requestContentType ? `export const requestContentType: MediaTypes = MediaTypes.${pathData.$$requestContentType}` : ''}

`;
