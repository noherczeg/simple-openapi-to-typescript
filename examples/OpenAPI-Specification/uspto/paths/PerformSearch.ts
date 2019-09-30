/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { HttpHeaders } from "../constants/HttpHeaders";

export interface PathParams {
  /**
   * description: Version of the dataset.
   */
  version: string;

  /**
   * description: Name of the dataset. In this case, the default value is oa_citations
   */
  dataset: string;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/${pathParams.dataset}/${pathParams.version}/records`
    : `${pathParams.dataset}/${pathParams.version}/records`;
}

export const method: HttpMethods = HttpMethods.POST;

export const headers: Record<string, string> = {
  [HttpHeaders.ACCEPT]: MediaTypes.APPLICATION_JSON,
  [HttpHeaders.CONTENT_TYPE]: MediaTypes.APPLICATION_FORM_URLENCODED
};
