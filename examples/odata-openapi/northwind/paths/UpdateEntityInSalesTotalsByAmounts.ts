/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { NorthwindModelSalesTotalsByAmountUpdate } from "../components/schemas/NorthwindModelSalesTotalsByAmountUpdate";

export interface PathParams {
  CompanyName: string;

  OrderID: number;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Sales_Totals_by_Amounts(CompanyName='${pathParams.CompanyName}',OrderID=${pathParams.OrderID})`
    : `Sales_Totals_by_Amounts(CompanyName='${pathParams.CompanyName}',OrderID=${pathParams.OrderID})`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const headers: Record<string, string> = {
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelSalesTotalsByAmountUpdate;
