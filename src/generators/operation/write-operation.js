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
const { writeSchema } = require('../schema/write-schema');

let schemaRefCache = [];

function clearSchemaRefCache() {
  schemaRefCache = [];
}

function mapSchemaInOperation(content) {
  const format = Object.keys(content)[0];
  const type = content[format];
  const ref = type.schema && type.schema.$ref ? type.schema.$ref : null;

  if (ref) {
    return {
      ref,
      name: fileName(ref),
    };
  }

  return undefined;
}

function mapRequestBodyType(pathData) {
  if (pathData.requestBody && pathData.requestBody.content) {
    return mapSchemaInOperation(pathData.requestBody.content);
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
  let $$requestAcceptType = null;

  if ($$requestBodyType) {
    imports.push({ ref: $$requestBodyType.name, fileName: `../components/schemas/${$$requestBodyType.name}` });
    const refName = $$requestBodyType.ref.split('/').pop();
    writeSchema(refName, model.components.schemas[refName], model, target, prettierOpts);
  }

  if (pathData.responses) {
    const acceptType = Object.entries(pathData.responses).find(([code]) => {
      const codeAsNumber = Number(code);
      return Number.isInteger(codeAsNumber) && codeAsNumber >= 200 && codeAsNumber < 300;
    });

    if (acceptType && acceptType[1].content) {
      $$requestAcceptType = contentTypeEnumMapper(acceptType[1].content);
    }

    Object.values(pathData.responses)
      .filter((opDef) => opDef.content && mapSchemaInOperation(opDef.content))
      .map((opDef) => mapSchemaInOperation(opDef.content))
      .map(({ ref }) => {
        const refName = ref.split('/').pop();
        return { ref, refName, schema: model.components.schemas[refName] };
      })
      .forEach(({ ref, refName, schema }) => {
        if (!schemaRefCache.includes(ref)) {
          writeSchema(refName, schema, model, target, prettierOpts, true);
          schemaRefCache.push(ref);
        }
      });
  }

  if ($$requestContentType || $$requestAcceptType) {
    imports.push({ ref: 'MediaTypes', fileName: '../constants/MediaTypes' });
    imports.push({ ref: 'HttpHeaders', fileName: '../constants/HttpHeaders' });
  }

  $$consolidatedImports.push(...consolidateImports(imports, $$name, 'ref'));

  const data = operationTemplate({
    $$name,
    $$path,
    $$method,
    $$requestAcceptType,
    $$requestContentType,
    $$requestBodyType: $$requestBodyType && $$requestBodyType.name,
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
  clearSchemaRefCache,
  writePath,
};
