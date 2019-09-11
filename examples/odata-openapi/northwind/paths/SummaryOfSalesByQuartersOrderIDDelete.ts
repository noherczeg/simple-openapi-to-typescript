/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  OrderID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Summary_of_Sales_by_Quarters(${pathParams.OrderID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
