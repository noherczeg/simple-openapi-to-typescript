function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/\s+/g, '');
}

function hashCodeAsString(str) {
  // eslint-disable-next-line no-bitwise
  const code = str.split('').reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
  return code === 0 ? '' : code.toString();
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

function convertOperationName(inputName) {
  return inputName.match(/([a-z0-9]+)/gi).map((part) => ucFirst(part)).join('');
}

function operationName(method, path, pathData) {
  if (pathData.operationId) {
    return convertOperationName(pathData.operationId);
  }

  if (pathData.summary) {
    return convertOperationName(pathData.summary);
  }

  const safePath = path === '/' ? 'root' : path;
  const split = safePath.match(/(\w+)/gi);
  const validStart = split.shift();
  const suffix = hashCodeAsString(split.join(''));
  return `${convertOperationName(validStart)}${suffix}${ucFirst(method)}`;
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
