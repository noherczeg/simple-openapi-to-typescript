/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { HttpHeaders } from "../constants/HttpHeaders";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  CategoryID = "CategoryID",
  CategoryIDDesc = "CategoryID desc",
  CategoryName = "CategoryName",
  CategoryNameDesc = "CategoryName desc",
  ProductName = "ProductName",
  ProductNameDesc = "ProductName desc",
  ProductSales = "ProductSales",
  ProductSalesDesc = "ProductSales desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  CategoryID = "CategoryID",
  CategoryName = "CategoryName",
  ProductName = "ProductName",
  ProductSales = "ProductSales"
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
  return baseUrl ? `${baseUrl}/Sales_by_Categories` : `Sales_by_Categories`;
}

export const method: HttpMethods = HttpMethods.GET;

export const headers: Record<string, string> = {
  [HttpHeaders.ACCEPT]: MediaTypes.APPLICATION_JSON
};
