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

module.exports = {
  consolidateImports,
};
