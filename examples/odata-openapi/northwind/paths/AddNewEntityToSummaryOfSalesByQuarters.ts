/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { NorthwindModelSummaryOfSalesByQuarterCreate } from "../components/schemas/NorthwindModelSummaryOfSalesByQuarterCreate";
import { MediaTypes } from "../constants/MediaTypes";

/**
 
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Summary_of_Sales_by_Quarters`
    : `Summary_of_Sales_by_Quarters`;
}

export const method: HttpMethods = HttpMethods.POST;

export const headers: Record<string, string> = {
  Accept: MediaTypes.APPLICATION_JSON,
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelSummaryOfSalesByQuarterCreate;
