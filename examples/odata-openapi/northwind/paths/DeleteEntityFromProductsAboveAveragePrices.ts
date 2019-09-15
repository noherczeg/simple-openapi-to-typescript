/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  ProductName: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Products_Above_Average_Prices('${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
