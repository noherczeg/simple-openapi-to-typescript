/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { NorthwindModelOrderSubtotalUpdate } from "../components/schemas/NorthwindModelOrderSubtotalUpdate";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  OrderID: number;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Order_Subtotals(${pathParams.OrderID})`
    : `Order_Subtotals(${pathParams.OrderID})`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const headers: Record<string, string> = {
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelOrderSubtotalUpdate;
