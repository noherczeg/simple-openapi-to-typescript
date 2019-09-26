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
    url: "${scheme}://developer.uspto.gov/ds-api",

    variables: {
      scheme: {
        default: "https",
        description: "The Data Set API is accessible via https and http",
        enum: ["https", "http"]
      }
    }
  }
];

export function createBaseUrl(mapper: ServerMapper): string {
  return mapper(servers);
}
