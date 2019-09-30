/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { NorthwindModelOrderDetailCreate } from "../components/schemas/NorthwindModelOrderDetailCreate";
import { MediaTypes } from "../constants/MediaTypes";
import { HttpHeaders } from "../constants/HttpHeaders";

export interface PathParams {
  /**
   * description: key: ProductID
   */
  ProductID: number;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Products(${pathParams.ProductID})/Order_Details`
    : `Products(${pathParams.ProductID})/Order_Details`;
}

export const method: HttpMethods = HttpMethods.POST;

export const headers: Record<string, string> = {
  [HttpHeaders.ACCEPT]: MediaTypes.APPLICATION_JSON,
  [HttpHeaders.CONTENT_TYPE]: MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelOrderDetailCreate;
