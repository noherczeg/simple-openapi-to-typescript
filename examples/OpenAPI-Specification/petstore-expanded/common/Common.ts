/* Generated source, do not modify! */

export interface ServerVariableObject {
  enum?: string[];
  default: string;
  description?: string;
}

export interface ServerObject {
  url: string;
  description?: string;
  variables?: Record<string, ServerVariableObject>;
}

export type ServerMapper = (servers: ServerObject[]) => string;

export const servers: ServerObject[] = [
  {
    url: "http://petstore.swagger.io/api"
  }
];

export function createBaseUrl(mapper: ServerMapper): string {
  return mapper(servers);
}
