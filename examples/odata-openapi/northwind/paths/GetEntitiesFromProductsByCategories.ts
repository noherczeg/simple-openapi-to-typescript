/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { HttpHeaders } from "../constants/HttpHeaders";

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

/**
 
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Products_by_Categories`
    : `Products_by_Categories`;
}

export const method: HttpMethods = HttpMethods.GET;

export const headers: Record<string, string> = {
  [HttpHeaders.ACCEPT]: MediaTypes.APPLICATION_JSON
};
