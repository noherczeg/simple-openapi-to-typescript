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
    url: "https://services.odata.org/V4/Northwind/Northwind.svc"
  }
];

export function createBaseUrl(mapper: ServerMapper): string {
  return mapper(servers);
}
