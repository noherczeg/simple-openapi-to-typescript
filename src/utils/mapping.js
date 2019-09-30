const { enumName, ucFirst } = require('./naming');
const { mediaTypeValues } = require('./enum-values');

function isEnum(element) {
  return element.schema && element.schema.items && element.schema.items.enum;
}

function isUniqueEnum(element) {
  return isEnum(element) && element.schema.uniqueItems;
}

function convertEnumName(e) {
  if (e === '*') {
    return '_ALL_';
  }
  return e.replace(/_/g, ' ').split(' ').map((p) => ucFirst(p)).join('');
}

const docsMapper = (host, ...itemNames) => {
  const docs = [];
  itemNames.forEach((name) => {
    if (
      Object.prototype.hasOwnProperty
        .call(host, name) && host[name] !== undefined && host[name] !== null
    ) {
      docs.push({ name, value: host[name] });
    }
  });

  return docs;
};

function typeMapper(type, readonly) {
  switch (type) {
    case 'array':
      return readonly ? 'ReadonlyArray' : 'Array';
    case 'object':
      return 'any';
    case 'integer':
      return 'number';
    default:
      return type;
  }
}

function subTypeMapper(param, readonly) {
  if (param.schema.items) {
    if (param.schema.items.enum) {
      return enumName(param.name);
    }

    return typeMapper(param.schema.items.type, readonly);
  }

  return null;
}

function paramMapper(param, readonly) {
  const {
    name, style, required, schema, description, example,
  } = param;
  const {
    format, maximum, exclusiveMaximum, minimum, exclusiveMinimum, maxLength, minLength, pattern,
  } = param.schema ? param.schema : {};

  return {
    name,
    style,
    required,
    type: isUniqueEnum(param) ? 'Set' : typeMapper(schema.type, readonly),
    subType: subTypeMapper(param, readonly),
    docs: docsMapper(
      {
        description,
        example,
        format,
        maximum,
        exclusiveMaximum,
        minimum,
        exclusiveMinimum,
        maxLength,
        minLength,
        pattern,
      },
      'description',
      'example',
      'maximum',
      'exclusiveMaximum',
      'minimum',
      'exclusiveMinimum',
      'maxLength',
      'minLength',
      'pattern',
    ),
  };
}

function enumFilter(param) {
  return param.schema.items && param.schema.items.enum;
}

function enumMapper(param, readonly) {
  return {
    name: subTypeMapper(param, readonly),
    docs: docsMapper(param, 'description'),
    items: param.schema.items.enum.map((e) => ({
      key: convertEnumName(e),
      value: e,
    })),
  };
}

function contentTypeEnumMapper(requestBodyContent) {
  return Object.keys(mediaTypeValues)[
    Object
      .values(mediaTypeValues)
      .findIndex((m) => m === Object.keys(requestBodyContent)[0])
  ];
}

module.exports = {
  docsMapper,
  typeMapper,
  paramMapper,
  enumFilter,
  enumMapper,
  contentTypeEnumMapper,
};
