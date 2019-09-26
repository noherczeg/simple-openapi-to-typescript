/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(baseUrl?: string): string {
  return baseUrl ? `${baseUrl}/$batch` : `$batch`;
}

export const method: HttpMethods = HttpMethods.POST;
