const fse = require('fs-extra');
const { EOL } = require('os');
const prettier = require('prettier');
const { operationName } = require('../../utils/naming');
const {
  paramMapper,
  enumFilter,
  enumMapper,
  contentTypeEnumMapper,
} = require('../../utils/mapping');

const pathTemplate = (pathData) => `
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

function writePath(key, method, pathData, path, model, target, prettierOpts) {
  const allParams = [...(pathData.parameters || []), ...(path.parameters || [])];
  const queryParams = allParams.filter((p) => p.in === 'query');
  const pathParams = allParams.filter((p) => p.in === 'path');

  const $$name = operationName(method, key, pathData);
  const $$path = key.replace(/{/g, '${pathParams.');
  const $$method = method.toUpperCase();
  const $$requestContentType = pathData.requestBody
    && pathData.requestBody.content
    ? contentTypeEnumMapper(pathData.requestBody.content) : null;
  const $$queryParameters = queryParams.map(paramMapper);
  const $$pathParams = pathParams.map(paramMapper);
  const $$enums = [...queryParams, ...pathParams].filter(enumFilter).map(enumMapper);
  const $$consolidatedImports = [
    { fileName: '../constants/HttpMethods', imports: ['HttpMethods'] },
  ];

  if ($$requestContentType) {
    $$consolidatedImports.push({ fileName: '../constants/MediaTypes', imports: ['MediaTypes'] });
  }

  const data = pathTemplate({
    $$name,
    $$path,
    $$method,
    $$requestContentType,
    $$queryParameters,
    $$pathParams,
    $$consolidatedImports,
    $$enums,
  });
  const filePath = `${target}/paths/${$$name}.ts`;
  const formatted = prettier.format(data, prettierOpts);
  fse.outputFileSync(filePath, formatted);
}

module.exports = {
  writePath,
};
