/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  TerritoryID: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Territories('${pathParams.TerritoryID}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
