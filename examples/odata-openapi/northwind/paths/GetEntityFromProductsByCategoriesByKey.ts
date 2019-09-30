/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { HttpHeaders } from "../constants/HttpHeaders";

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

export interface PathParams {
  /**
   * description: key: CategoryName
   * maxLength: 15
   */
  CategoryName: string;

  /**
   * description: key: Discontinued
   */
  Discontinued: boolean;

  /**
   * description: key: ProductName
   * maxLength: 40
   */
  ProductName: string;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Products_by_Categories(CategoryName='${pathParams.CategoryName}',Discontinued='${pathParams.Discontinued}',ProductName='${pathParams.ProductName}')`
    : `Products_by_Categories(CategoryName='${pathParams.CategoryName}',Discontinued='${pathParams.Discontinued}',ProductName='${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.GET;

export const headers: Record<string, string> = {
  [HttpHeaders.ACCEPT]: MediaTypes.APPLICATION_JSON
};
