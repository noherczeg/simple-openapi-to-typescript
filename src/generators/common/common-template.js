const { EOL } = require('os');

module.exports = (constants) => `
/* Generated source, do not modify! */

export interface ServerVariableObject {
  enum?: string[],
  default: string,
  description?: string,
}

export interface ServerObject {
  url: string,
  description?: string,
  variables?: Map<string, ServerVariableObject>,
}

export type HostNameMapper = (servers: ServerObject[]) => string;

export const servers: ServerObject[] = [${constants.servers.map((server) => `
  {
    ${server.url ? `url: '${server.url.replace(/{/g, '${')}',` : ''}
    ${server.description ? `description: '${server.description}',` : ''}
    ${server.variables ? `
      variables: new Map<string, ServerVariableObject>([
          ${Object.entries(server.variables).map(([variable, vData]) => `
            ['${variable}', {
              ${vData.default ? `default: '${vData.default}',` : ''}
              ${vData.description ? `description: '${vData.description}',` : ''}
              ${vData.enum && vData.enum.length ? `enum: ['${vData.enum.join('\', \'')}'],` : ''}
            }],
          `).join(EOL)}
      ]),
    ` : ''}
  }
`).join('')}];

export function createHostName(mapper: HostNameMapper): string {
  return mapper(servers);
}
`;
