/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  CustomerID: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Customers('${pathParams.CustomerID}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
