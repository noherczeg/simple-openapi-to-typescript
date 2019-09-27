/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { NorthwindModelEmployeeCreate } from "../components/schemas/NorthwindModelEmployeeCreate";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  TerritoryID: string;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Territories('${pathParams.TerritoryID}')/Employees`
    : `Territories('${pathParams.TerritoryID}')/Employees`;
}

export const method: HttpMethods = HttpMethods.POST;

export const headers: Record<string, string> = {
  Accept: MediaTypes.APPLICATION_JSON,
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelEmployeeCreate;
