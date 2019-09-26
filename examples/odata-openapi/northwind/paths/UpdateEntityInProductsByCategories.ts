/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { NorthwindModelProductsByCategoryUpdate } from "../components/schemas/NorthwindModelProductsByCategoryUpdate";

export interface PathParams {
  CategoryName: string;

  Discontinued: boolean;

  ProductName: string;
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

export const method: HttpMethods = HttpMethods.PATCH;

export const headers: Record<string, string> = {
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelProductsByCategoryUpdate;
