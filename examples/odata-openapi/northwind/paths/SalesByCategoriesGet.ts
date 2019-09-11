/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

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

export function createPath(): string {
  return `/Sales_by_Categories`;
}

export const method: HttpMethods = HttpMethods.GET;
