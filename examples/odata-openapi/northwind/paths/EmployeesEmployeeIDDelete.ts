/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  EmployeeID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Employees(${pathParams.EmployeeID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
