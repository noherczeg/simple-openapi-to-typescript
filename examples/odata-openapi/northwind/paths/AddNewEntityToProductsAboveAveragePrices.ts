/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { NorthwindModelProductsAboveAveragePriceCreate } from "../components/schemas/NorthwindModelProductsAboveAveragePriceCreate";
import { MediaTypes } from "../constants/MediaTypes";

/**
 
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Products_Above_Average_Prices`
    : `Products_Above_Average_Prices`;
}

export const method: HttpMethods = HttpMethods.POST;

export const headers: Record<string, string> = {
  Accept: MediaTypes.APPLICATION_JSON,
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelProductsAboveAveragePriceCreate;
