/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  RegionID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Regions(${pathParams.RegionID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
