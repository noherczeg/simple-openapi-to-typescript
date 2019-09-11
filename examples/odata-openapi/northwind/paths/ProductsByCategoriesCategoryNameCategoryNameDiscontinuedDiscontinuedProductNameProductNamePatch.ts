/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  CategoryName: string;

  Discontinued: boolean;

  ProductName: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Products_by_Categories(CategoryName='${pathParams.CategoryName}',Discontinued='${pathParams.Discontinued}',ProductName='${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
