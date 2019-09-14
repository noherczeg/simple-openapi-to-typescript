function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/\s+/g, '');
}

function pureName(def, lowerFirst) {
  const name = camelize(def.replace(/[#.\-/({})=,'_]/g, ' '));
  return lowerFirst ? `${name.charAt(0).toLowerCase()}${name.slice(1)}` : name;
}

function fileName(def) {
  return pureName(def.split('/').pop());
}

function ucFirst(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function operationName(method, path) {
  const safePath = path === '/' ? 'root' : path;
  return `${safePath.match(/[a-z0-9]+/gi).map((part) => ucFirst(part)).join('')}${ucFirst(method)}`;
}

function enumName(name) {
  return `${ucFirst(name.replace(/[^a-zA-Z0-9]/gi, ''))}Enum`;
}

module.exports = {
  enumName,
  pureName,
  fileName,
  ucFirst,
  operationName,
};
