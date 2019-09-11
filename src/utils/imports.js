const { pureName } = require('./naming');

function consolidateImports(imports = [], importName = 'fileName') {
  const consolidated = {};
  imports.forEach((imp) => {
    consolidated[imp.fileName] = [];
  });
  imports.forEach((imp) => {
    if (consolidated[imp.fileName].indexOf(imp[importName]) === -1) {
      consolidated[imp.fileName].push(imp[importName]);
    }
  });
  return Object.entries(consolidated).map(([fileName, imps]) => ({ fileName, imports: imps }));
}

function importPathForRef(ref) {
  const split = ref.split('/');
  split.shift();
  split.push(pureName(split.pop()));
  return split.join('/');
}

module.exports = {
  consolidateImports,
  importPathForRef,
};
