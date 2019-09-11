/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  CategoryID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Categories(${pathParams.CategoryID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
