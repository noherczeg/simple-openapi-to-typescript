/* Generated source, do not modify! */

export interface ServerVariableObject {
  enum?: string[];
  default: string;
  description?: string;
}

export interface ServerObject {
  url: string;
  description?: string;
  variables?: Map<string, ServerVariableObject>;
}

export type HostNameMapper = (servers: ServerObject[]) => string;

export const servers: ServerObject[] = [
  {
    url: "http://petstore.swagger.io/v1"
  }
];

export function createHostName(mapper: HostNameMapper): string {
  return mapper(servers);
}
