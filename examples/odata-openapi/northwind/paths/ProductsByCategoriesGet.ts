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
  QuantityPerUnit = "QuantityPerUnit",
  QuantityPerUnitDesc = "QuantityPerUnit desc",
  UnitsInStock = "UnitsInStock",
  UnitsInStockDesc = "UnitsInStock desc",
  Discontinued = "Discontinued",
  DiscontinuedDesc = "Discontinued desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  CategoryName = "CategoryName",
  ProductName = "ProductName",
  QuantityPerUnit = "QuantityPerUnit",
  UnitsInStock = "UnitsInStock",
  Discontinued = "Discontinued"
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
}

export function createPath(): string {
  return `/Products_by_Categories`;
}

export const method: HttpMethods = HttpMethods.GET;
