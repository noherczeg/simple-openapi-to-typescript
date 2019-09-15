/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  ShippedDate = "ShippedDate",
  ShippedDateDesc = "ShippedDate desc",
  OrderID = "OrderID",
  OrderIDDesc = "OrderID desc",
  Subtotal = "Subtotal",
  SubtotalDesc = "Subtotal desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  ShippedDate = "ShippedDate",
  OrderID = "OrderID",
  Subtotal = "Subtotal"
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
}

export function createPath(): string {
  return `/Summary_of_Sales_by_Years`;
}

export const method: HttpMethods = HttpMethods.GET;
