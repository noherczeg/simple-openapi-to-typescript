/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  /**
   * description: key: Discount
   */
  Discount: undefined;

  /**
   * description: key: OrderID
   */
  OrderID: number;

  /**
   * description: key: ProductID
   */
  ProductID: number;

  /**
   * description: key: ProductName
   * maxLength: 40
   */
  ProductName: string;

  /**
   * description: key: Quantity
   */
  Quantity: number;

  /**
   * description: key: UnitPrice
   */
  UnitPrice: undefined;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Order_Details_Extendeds(Discount=${pathParams.Discount},OrderID=${pathParams.OrderID},ProductID=${pathParams.ProductID},ProductName='${pathParams.ProductName}',Quantity=${pathParams.Quantity},UnitPrice='${pathParams.UnitPrice}')`
    : `Order_Details_Extendeds(Discount=${pathParams.Discount},OrderID=${pathParams.OrderID},ProductID=${pathParams.ProductID},ProductName='${pathParams.ProductName}',Quantity=${pathParams.Quantity},UnitPrice='${pathParams.UnitPrice}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
