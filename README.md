# Simple OpenAPI to TypeScript
![npm](https://img.shields.io/npm/v/simple-openapi-to-typescript)
![GitHub](https://img.shields.io/github/license/noherczeg/simple-openapi-to-typescript)
[![Maintainability](https://api.codeclimate.com/v1/badges/cdf4cac5f5ef71c42de0/maintainability)](https://codeclimate.com/github/noherczeg/simple-openapi-to-typescript/maintainability)

Yet another TypeScript generator for OpenAPI specifications.

## About
What this package is intended to do:
- support multiple input formats
- support output formatting
- only generate most necessary types/interfaces, utils

What this package won't do:
- it won't generate code which relies on transitive dependencies (e.g.: axios, or browser API-s)
- it won't support all of the possible exotic features of OpenAPI, like composition for multiple
objects
- it won't generate sophisticated classes and services

For examples please check the [examples](./examples) folder.

### File names for Paths
Since OpenAPI does not specify any mandatory field which would serve as a unique identifier for
Paths, the current algorithm produces files names (converted to Pascal Case) from:
- If available: `operationId` 
- Otherwise if available: `summary`
- As a fallback, if none of the above are available we create a special name.

> Please refer to: [namings.js: operationName()](./src/utils/naming.js) for full details.

## Compatibility
- [Version 3.0.2](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md)

## Usage

```
sott generate $(SOURCE_FOR_SPEC_FILE)
```

`SOURCE_FOR_SPEC_FILE` can be either a file system path, or a http(s) URL. Supported file types:
YAML, JSON.

### Flags

#### --target
Target folder where sources will be generated.

- Type: string
- Default value: _./generated-sources_

#### --prettier-opts
Path to prettier configuration file (JSON).

- Type: string
- Default configuration object:
```json
{
  "parser": "typescript",
  "endOfLine": "lf"
}
```

> provided values are "spread onto" the default(s), so there is no need to duplicate options.

## Caveats:
__Deeply nested object types will not be mapped recursively__, the second level of any schema with a
type of `object` will be mapped as `any`.

__Composition is not supported.__ Instead currently the generator will produce interfaces which will
extend a base, and every other possible type definition will be ignored (only using first `allOf`).
This is an implementation limitation. Maybe in the future composition will be supported.

## Notes:

### uspto.yaml
Removed "example" section from the definition, because it contained illegal syntax, and did not even comply with their own schema.
