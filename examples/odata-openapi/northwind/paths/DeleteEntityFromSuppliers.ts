/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  SupplierID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Suppliers(${pathParams.SupplierID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
