/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  username: string;

  slug: string;

  pid: string;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/2.0/repositories/${pathParams.username}/${pathParams.slug}/pullrequests/${pathParams.pid}/merge`
    : `2.0/repositories/${pathParams.username}/${pathParams.slug}/pullrequests/${pathParams.pid}/merge`;
}

export const method: HttpMethods = HttpMethods.POST;
