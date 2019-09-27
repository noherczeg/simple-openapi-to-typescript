/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { NorthwindModelTerritoryUpdate } from "../components/schemas/NorthwindModelTerritoryUpdate";
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
    ? `${baseUrl}/Territories('${pathParams.TerritoryID}')`
    : `Territories('${pathParams.TerritoryID}')`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const headers: Record<string, string> = {
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelTerritoryUpdate;
