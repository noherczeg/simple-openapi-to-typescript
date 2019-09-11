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
    url: "https://services.odata.org/V4/Northwind/Northwind.svc"
  }
];

export function createHostName(mapper: HostNameMapper): string {
  return mapper(servers);
}
