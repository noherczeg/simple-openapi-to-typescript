/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  CategoryName: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Category_Sales_for_1997('${pathParams.CategoryName}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
