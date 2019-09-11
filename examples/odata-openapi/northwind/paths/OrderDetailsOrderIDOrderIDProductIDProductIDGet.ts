/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

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
  OrderID: number;

  ProductID: number;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Order_Details(OrderID=${pathParams.OrderID},ProductID=${pathParams.ProductID})`;
}

export const method: HttpMethods = HttpMethods.GET;
