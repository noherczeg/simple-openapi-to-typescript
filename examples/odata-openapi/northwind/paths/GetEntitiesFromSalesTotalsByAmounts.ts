/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  SaleAmount = "SaleAmount",
  SaleAmountDesc = "SaleAmount desc",
  OrderID = "OrderID",
  OrderIDDesc = "OrderID desc",
  CompanyName = "CompanyName",
  CompanyNameDesc = "CompanyName desc",
  ShippedDate = "ShippedDate",
  ShippedDateDesc = "ShippedDate desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  SaleAmount = "SaleAmount",
  OrderID = "OrderID",
  CompanyName = "CompanyName",
  ShippedDate = "ShippedDate"
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
}

/**
 
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Sales_Totals_by_Amounts`
    : `Sales_Totals_by_Amounts`;
}

export const method: HttpMethods = HttpMethods.GET;

export const headers: Record<string, string> = {
  Accept: MediaTypes.APPLICATION_JSON
};
