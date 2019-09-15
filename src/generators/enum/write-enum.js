const fse = require('fs-extra');
const prettier = require('prettier');
const enumTemplate = require('./enum-template');

function writeEnum(name, values, target, prettierOpts) {
  const templateData = {
    $$name: name,
    data: Object.entries(values).map(([code, value]) => ({
      code,
      value,
    })),
  };
  const data = enumTemplate(templateData);
  const filePath = `${target}/constants/${name}.ts`;
  const formatted = prettier.format(data, prettierOpts);
  fse.outputFileSync(filePath, formatted);
}

module.exports = {
  writeEnum,
};
