/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  dataset: string;

  version: string;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/${pathParams.dataset}/${pathParams.version}/fields`
    : `${pathParams.dataset}/${pathParams.version}/fields`;
}

export const method: HttpMethods = HttpMethods.GET;
