const { typeMapper, docsMapper } = require('../../utils/mapping');
const { pureName } = require('../../utils/naming');

const propTypesMapper = (...items) => {
  const types = [];
  const imports = [];
  items.forEach((a) => {
    let name = '';
    if (a.type) {
      name = typeMapper(a.type);
    } else if (a.$ref) {
      name = pureName(a.$ref.split('/').pop());
      imports.push({ ref: name, fileName: name });
    }
    types.push(name);
  });

  return { types, imports };
};

const propMapper = (name, prop, schema) => {
  const types = [];
  const imports = [];
  const required = prop.required || (schema.required || []).includes(name);
  const docs = docsMapper(prop, 'description', 'format', 'multipleOf', 'maximum', 'exclusiveMaximum', 'minimum', 'exclusiveMinimum', 'maxLength', 'minLength', 'pattern');
  let arrayTypeName = null;

  if (prop.type && prop.type === 'array') {
    const arrayType = prop.items && prop.items.$ref;
    if (arrayType) {
      arrayTypeName = pureName(arrayType.split('/').pop());
      imports.push({ ref: arrayTypeName, fileName: arrayTypeName });
    } else {
      console.warn(`Cannot map property "${name}" of schema "${schema.$$name}", because it's an inline object. Falling back to "any".`);
      arrayTypeName = 'any';
    }
  }

  const typeData = propTypesMapper(prop, ...(prop.anyOf || prop.allOf || prop.oneOf || []));
  types.push(...typeData.types);
  imports.push(...typeData.imports);

  if (!types.length) {
    types.push('any');
  }

  return {
    data: {
      name,
      required,
      types,
      arrayTypeName,
      docs,
    },
    imports,
  };
};

module.exports = {
  propMapper,
};
