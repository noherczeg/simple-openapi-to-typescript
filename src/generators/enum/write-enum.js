const fse = require('fs-extra');
const prettier = require('prettier');

const enumTemplate = (enumData) => `
/* Generated source, do not modify! */

export enum ${enumData.$$name} {
  ${enumData.data.map((status) => `
    ${status.code} = ${typeof status.value === 'string' ? `'${status.value}'` : status.value},
  `).join('')}
}

`;

async function writeEnum(name, values, target, prettierOpts) {
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
  await fse.outputFile(filePath, formatted);
}

module.exports = {
  writeEnum,
};
