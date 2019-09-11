const {
  statusCodesValues, httpHeaderValues, mediaTypeValues, httpMethodValues,
} = require('./generators/enum/enum-values');
const { writeEnum } = require('./generators/enum/write-enum');
const { writeCommon } = require('./generators/common/write-common');
const { writeResponse } = require('./generators/response/write-response');
const { writeSchema } = require('./generators/schema/write-schema');
const { writePath } = require('./generators/operation/write-operation');

const validPathMethodTypes = Object.keys(httpMethodValues).map((k) => k.toLowerCase());

function processModel(model, target, prettierOpts) {
  // enums
  writeEnum('StatusCodes', statusCodesValues, target, prettierOpts);
  writeEnum('HttpMethods', httpMethodValues, target, prettierOpts);
  writeEnum('HttpHeaders', httpHeaderValues, target, prettierOpts);
  writeEnum('MediaTypes', mediaTypeValues, target, prettierOpts);

  // common
  writeCommon(model, target, prettierOpts);

  // responses
  Object.entries((model.components && model.components.responses) || {})
    .forEach(([key, response]) => writeResponse(key, response, model, target, prettierOpts));

  // schemas
  Object.entries((model.components && model.components.schemas) || {})
    .forEach(([key, schema]) => writeSchema(key, schema, model, target, prettierOpts));

  // paths
  Object.entries(model.paths).forEach(([key, path]) => {
    Object.entries(path)
      .filter(([m]) => validPathMethodTypes.includes(m))
      .forEach(
        ([method, pathData]) => writePath(key, method, pathData, path, model, target, prettierOpts),
      );
  });
}

module.exports = {
  processModel,
};
