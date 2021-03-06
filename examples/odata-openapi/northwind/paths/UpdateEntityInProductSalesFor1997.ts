/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { NorthwindModelProductSalesFor1997Update } from "../components/schemas/NorthwindModelProductSalesFor1997Update";
import { MediaTypes } from "../constants/MediaTypes";
import { HttpHeaders } from "../constants/HttpHeaders";

export interface PathParams {
  /**
   * description: key: CategoryName
   * maxLength: 15
   */
  CategoryName: string;

  /**
   * description: key: ProductName
   * maxLength: 40
   */
  ProductName: string;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Product_Sales_for_1997(CategoryName='${pathParams.CategoryName}',ProductName='${pathParams.ProductName}')`
    : `Product_Sales_for_1997(CategoryName='${pathParams.CategoryName}',ProductName='${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const headers: Record<string, string> = {
  [HttpHeaders.CONTENT_TYPE]: MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelProductSalesFor1997Update;
