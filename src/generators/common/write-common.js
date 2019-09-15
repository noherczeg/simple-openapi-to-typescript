const fse = require('fs-extra');
const prettier = require('prettier');
const commonTemplate = require('./common-template');

function writeCommon(model, target, prettierOpts) {
  if (model.servers) {
    const utilsData = commonTemplate(model);
    const filePath = `${target}/common/Common.ts`;
    const formatted = prettier.format(utilsData, prettierOpts);
    fse.outputFileSync(filePath, formatted);
  }
}

module.exports = {
  writeCommon,
};
