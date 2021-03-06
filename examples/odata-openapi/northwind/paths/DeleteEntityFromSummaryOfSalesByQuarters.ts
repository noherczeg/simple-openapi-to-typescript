/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  /**
   * description: key: OrderID
   */
  OrderID: number;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Summary_of_Sales_by_Quarters(${pathParams.OrderID})`
    : `Summary_of_Sales_by_Quarters(${pathParams.OrderID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
