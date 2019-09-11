/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  OrderID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Order_Subtotals(${pathParams.OrderID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
