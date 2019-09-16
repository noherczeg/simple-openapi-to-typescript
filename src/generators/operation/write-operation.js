const fse = require('fs-extra');
const prettier = require('prettier');
const { operationName } = require('../../utils/naming');
const { consolidateImports } = require('../../utils/imports');
const {
  paramMapper,
  enumFilter,
  enumMapper,
  contentTypeEnumMapper,
} = require('../../utils/mapping');
const operationTemplate = require('./operation-template');

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
  const $$queryParameters = queryParams.map(paramMapper);
  const $$pathParams = pathParams.map(paramMapper);
  const $$enums = [...queryParams, ...pathParams].filter(enumFilter).map(enumMapper);

  if ($$requestContentType) {
    imports.push({ ref: 'MediaTypes', fileName: '../constants/MediaTypes' });
  }

  $$consolidatedImports.push(...consolidateImports(imports, $$name, 'ref'));

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
