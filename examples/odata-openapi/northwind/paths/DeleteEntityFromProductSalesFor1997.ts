/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  CategoryName: string;

  ProductName: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Product_Sales_for_1997(CategoryName='${pathParams.CategoryName}',ProductName='${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
