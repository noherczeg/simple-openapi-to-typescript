/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { NorthwindModelShipperCreate } from "../components/schemas/NorthwindModelShipperCreate";

/**
 
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(baseUrl?: string): string {
  return baseUrl ? `${baseUrl}/Shippers` : `Shippers`;
}

export const method: HttpMethods = HttpMethods.POST;

export const headers: Record<string, string> = {
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelShipperCreate;
