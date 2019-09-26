const fse = require('fs-extra');
const prettier = require('prettier');
const { operationName, fileName } = require('../../utils/naming');
const { consolidateImports } = require('../../utils/imports');
const {
  paramMapper,
  enumFilter,
  enumMapper,
  contentTypeEnumMapper,
} = require('../../utils/mapping');
const operationTemplate = require('./operation-template');

function mapRequestBodyType(pathData) {
  if (pathData.requestBody && pathData.requestBody.content) {
    console.log(pathData.requestBody.content);
    const format = Object.keys(pathData.requestBody.content)[0];
    const type = pathData.requestBody.content[format];
    const ref = type.schema && type.schema.$ref ? type.schema.$ref : null;

    if (ref) {
      return fileName(ref);
    }
  }

  return undefined;
}

function writePath(key, method, pathData, path, model, target, prettierOpts) {
  const imports = [
    { ref: 'HttpMethods', fileName: '../constants/HttpMethods' },
  ];
  const $$consolidatedImports = [];
  const allParams = [...(pathData.parameters || []), ...(path.parameters || [])];
  const queryParams = allParams.filter((p) => p.in === 'query');
  const pathParams = allParams.filter((p) => p.in === 'path');

  const $$name = operationName(method, key, pathData);
  const $$path = key.replace(/{/g, '${pathParams.');
  const $$method = method.toUpperCase();
  const $$requestContentType = pathData.requestBody
    && pathData.requestBody.content
    ? contentTypeEnumMapper(pathData.requestBody.content) : null;
  const $$requestBodyType = mapRequestBodyType(pathData);
  const $$queryParameters = queryParams.map(paramMapper);
  const $$pathParams = pathParams.map(paramMapper);
  const $$enums = [...queryParams, ...pathParams].filter(enumFilter).map(enumMapper);

  if ($$requestContentType) {
    imports.push({ ref: 'MediaTypes', fileName: '../constants/MediaTypes' });
  }

  if ($$requestBodyType) {
    imports.push({ ref: $$requestBodyType, fileName: `../components/schemas/${$$requestBodyType}` });
  }

  $$consolidatedImports.push(...consolidateImports(imports, $$name, 'ref'));

  const data = operationTemplate({
    $$name,
    $$path,
    $$method,
    $$requestContentType,
    $$requestBodyType,
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
