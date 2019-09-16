const distinctImports = (value, index, self) => self.findIndex(
  (s) => s.ref === value.ref,
) === index;

function consolidateImports(imports = [], sourceName, importName = 'fileName') {
  const filtered = imports
    .filter((f) => !sourceName || f.fileName !== sourceName)
    .filter(distinctImports);
  const consolidated = {};
  filtered.forEach((imp) => {
    consolidated[imp.fileName] = [];
  });
  filtered.forEach((imp) => {
    if (consolidated[imp.fileName].indexOf(imp[importName]) === -1) {
      consolidated[imp.fileName].push(imp[importName]);
    }
  });
  return Object.entries(consolidated).map(([fileName, imps]) => ({ fileName, imports: imps }));
}

module.exports = {
  consolidateImports,
};
