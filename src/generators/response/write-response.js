const fse = require('fs-extra');
const prettier = require('prettier');
const { refResolve } = require('../../utils/ref-resolver');
const { ucFirst } = require('../../utils/naming');
const { typeMapper } = require('../../utils/mapping');
const responseTemplate = require('./response-template');

function writeResponse(responseKey, response, model, target, prettierOpts) {
  const name = ucFirst(responseKey);
  const schema = refResolve(model, response.content['application/json'].schema.$ref);
  schema.$$properties = Object.entries(schema.properties).map(([key, prop]) => ({
    key,
    type: typeMapper(prop.type),
    required: Object.values(schema.required).includes(key),
  }));
  const templateData = { name, schema };
  const data = responseTemplate(templateData);
  const filePath = `${target}/components/responses/${name}.ts`;
  const formatted = prettier.format(data, prettierOpts);
  fse.outputFileSync(filePath, formatted);
}

module.exports = {
  writeResponse,
};
