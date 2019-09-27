/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { NorthwindModelCustomerDemographicCreate } from "../components/schemas/NorthwindModelCustomerDemographicCreate";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  CustomerID: string;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Customers('${pathParams.CustomerID}')/CustomerDemographics`
    : `Customers('${pathParams.CustomerID}')/CustomerDemographics`;
}

export const method: HttpMethods = HttpMethods.POST;

export const headers: Record<string, string> = {
  Accept: MediaTypes.APPLICATION_JSON,
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelCustomerDemographicCreate;
