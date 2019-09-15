/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  ProductID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Products(${pathParams.ProductID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
