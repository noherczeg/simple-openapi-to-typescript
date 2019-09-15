/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
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
  return `/Product_Sales_for_1997`;
}

export const method: HttpMethods = HttpMethods.GET;
