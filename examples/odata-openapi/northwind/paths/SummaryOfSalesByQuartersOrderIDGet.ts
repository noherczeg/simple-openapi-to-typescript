/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  ShippedDate = "ShippedDate",
  OrderID = "OrderID",
  Subtotal = "Subtotal"
}

export interface PathParams {
  OrderID: number;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Summary_of_Sales_by_Quarters(${pathParams.OrderID})`;
}

export const method: HttpMethods = HttpMethods.GET;
