/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  ShipperID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Shippers(${pathParams.ShipperID})`;
}

export const method: HttpMethods = HttpMethods.DELETE;
