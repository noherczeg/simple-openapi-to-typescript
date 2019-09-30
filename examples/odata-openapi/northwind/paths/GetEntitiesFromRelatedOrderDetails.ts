/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { HttpHeaders } from "../constants/HttpHeaders";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  OrderID = "OrderID",
  OrderIDDesc = "OrderID desc",
  ProductID = "ProductID",
  ProductIDDesc = "ProductID desc",
  UnitPrice = "UnitPrice",
  UnitPriceDesc = "UnitPrice desc",
  Quantity = "Quantity",
  QuantityDesc = "Quantity desc",
  Discount = "Discount",
  DiscountDesc = "Discount desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  OrderID = "OrderID",
  ProductID = "ProductID",
  UnitPrice = "UnitPrice",
  Quantity = "Quantity",
  Discount = "Discount"
}

/**
 * description: Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)
 */
export enum ExpandEnum {
  _ALL_ = "*",
  Order = "Order",
  Product = "Product"
}

export interface PathParams {
  /**
   * description: key: ProductID
   */
  ProductID: number;
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
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

export const method: HttpMethods = HttpMethods.GET;

export const headers: Record<string, string> = {
  [HttpHeaders.ACCEPT]: MediaTypes.APPLICATION_JSON
};
