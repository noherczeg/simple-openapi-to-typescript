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
    ${pp.docs && pp.docs.length ? `
      /**
       ${pp.docs.map((d) => `* ${d.name}: ${d.value}`).join(EOL)}
       */
    ` : ''}${pp.name}${pp.required ? '' : '?'}: ${pp.type} ${pp.subType ? `<${pp.subType}>` : ''}
  `).join(EOL)}
}` : ''}

${pathData.$$queryParameters && pathData.$$queryParameters.length ? `
export interface RequestSearchParams {
  ${pathData.$$queryParameters.map((qp) => `${qp.name}${qp.required ? '' : '?'}: ${qp.type} ${qp.subType ? `<${qp.subType}>` : ''}`).join(EOL)}
}` : ''}

/**
 ${pathData.$$pathParams && pathData.$$pathParams.length ? '* @param {PathParams} pathParams Object containing values which will be interpolated to the path segment' : ''}
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(${pathData.$$pathParams && pathData.$$pathParams.length ? 'pathParams: PathParams, ' : ''}baseUrl?: string): string {
  return baseUrl ? \`\${baseUrl}${pathData.$$path}\` : \`${pathData.$$path.replace(/^\/+/, '')}\`;
}

export const method: HttpMethods = HttpMethods.${pathData.$$method};

${pathData.$$requestContentType || pathData.$$requestAcceptType ? `export const headers: Record<string, string> = {
  ${pathData.$$requestAcceptType ? `[HttpHeaders.ACCEPT]: MediaTypes.${pathData.$$requestAcceptType},` : ''}
  ${pathData.$$requestContentType ? `[HttpHeaders.CONTENT_TYPE]: MediaTypes.${pathData.$$requestContentType},` : ''}
};` : ''}

${pathData.$$requestBodyType ? `export type RequestBody = ${pathData.$$requestBodyType}` : ''}

`;
