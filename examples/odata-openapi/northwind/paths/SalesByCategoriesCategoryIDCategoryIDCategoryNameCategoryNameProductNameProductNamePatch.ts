/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  CategoryID: number;

  CategoryName: string;

  ProductName: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Sales_by_Categories(CategoryID=${pathParams.CategoryID},CategoryName='${pathParams.CategoryName}',ProductName='${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
