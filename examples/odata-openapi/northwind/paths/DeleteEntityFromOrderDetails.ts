/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  /**
   * description: key: OrderID
   */
  OrderID: number;

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
    ? `${baseUrl}/Order_Details(OrderID=${pathParams.OrderID},ProductID=${pathParams.ProductID})`
    : `Order_Details(OrderID=${pathParams.OrderID},ProductID=${pathParams.ProductID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
