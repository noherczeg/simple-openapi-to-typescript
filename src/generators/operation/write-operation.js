const fse = require('fs-extra');
const prettier = require('prettier');
const { operationName } = require('../../utils/naming');
const {
  paramMapper,
  enumFilter,
  enumMapper,
  contentTypeEnumMapper,
} = require('../../utils/mapping');
const operationTemplate = require('./operation-template');

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

  const data = operationTemplate({
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
