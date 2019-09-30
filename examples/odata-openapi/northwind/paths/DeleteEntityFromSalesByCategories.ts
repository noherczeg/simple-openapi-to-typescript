/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  /**
   * description: key: CategoryID
   */
  CategoryID: number;

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
    ? `${baseUrl}/Sales_by_Categories(CategoryID=${pathParams.CategoryID},CategoryName='${pathParams.CategoryName}',ProductName='${pathParams.ProductName}')`
    : `Sales_by_Categories(CategoryID=${pathParams.CategoryID},CategoryName='${pathParams.CategoryName}',ProductName='${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
