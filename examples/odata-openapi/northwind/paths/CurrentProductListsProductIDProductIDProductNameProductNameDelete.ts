/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  ProductID: number;

  ProductName: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Current_Product_Lists(ProductID=${pathParams.ProductID},ProductName='${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
