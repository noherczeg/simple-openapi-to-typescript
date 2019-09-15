/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  EmployeeID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Employees(${pathParams.EmployeeID})/Employees1`;
}

export const method: HttpMethods = HttpMethods.POST;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
