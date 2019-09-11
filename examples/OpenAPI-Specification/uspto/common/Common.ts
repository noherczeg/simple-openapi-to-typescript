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
    url: "${scheme}://developer.uspto.gov/ds-api",

    variables: new Map<string, ServerVariableObject>([
      [
        "scheme",
        {
          default: "https",
          description: "The Data Set API is accessible via https and http",
          enum: ["https", "http"]
        }
      ]
    ])
  }
];

export function createHostName(mapper: HostNameMapper): string {
  return mapper(servers);
}
