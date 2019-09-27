/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  ProductID = "ProductID",
  ProductIDDesc = "ProductID desc",
  ProductName = "ProductName",
  ProductNameDesc = "ProductName desc",
  SupplierID = "SupplierID",
  SupplierIDDesc = "SupplierID desc",
  CategoryID = "CategoryID",
  CategoryIDDesc = "CategoryID desc",
  QuantityPerUnit = "QuantityPerUnit",
  QuantityPerUnitDesc = "QuantityPerUnit desc",
  UnitPrice = "UnitPrice",
  UnitPriceDesc = "UnitPrice desc",
  UnitsInStock = "UnitsInStock",
  UnitsInStockDesc = "UnitsInStock desc",
  UnitsOnOrder = "UnitsOnOrder",
  UnitsOnOrderDesc = "UnitsOnOrder desc",
  ReorderLevel = "ReorderLevel",
  ReorderLevelDesc = "ReorderLevel desc",
  Discontinued = "Discontinued",
  DiscontinuedDesc = "Discontinued desc",
  CategoryName = "CategoryName",
  CategoryNameDesc = "CategoryName desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  ProductID = "ProductID",
  ProductName = "ProductName",
  SupplierID = "SupplierID",
  CategoryID = "CategoryID",
  QuantityPerUnit = "QuantityPerUnit",
  UnitPrice = "UnitPrice",
  UnitsInStock = "UnitsInStock",
  UnitsOnOrder = "UnitsOnOrder",
  ReorderLevel = "ReorderLevel",
  Discontinued = "Discontinued",
  CategoryName = "CategoryName"
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
    ? `${baseUrl}/Alphabetical_list_of_products`
    : `Alphabetical_list_of_products`;
}

export const method: HttpMethods = HttpMethods.GET;

export const headers: Record<string, string> = {
  Accept: MediaTypes.APPLICATION_JSON
};
