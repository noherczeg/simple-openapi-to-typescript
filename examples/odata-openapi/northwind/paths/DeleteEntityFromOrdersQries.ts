/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  CompanyName: string;

  OrderID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Orders_Qries(CompanyName='${pathParams.CompanyName}',OrderID=${pathParams.OrderID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
