/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface RequestSearchParams {
  tags?: Array<string>;
  limit?: number;
}

/**
 
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(baseUrl?: string): string {
  return baseUrl ? `${baseUrl}/pets` : `pets`;
}

export const method: HttpMethods = HttpMethods.GET;
