/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { NorthwindModelCustomerCreate } from "../components/schemas/NorthwindModelCustomerCreate";

export interface PathParams {
  CustomerTypeID: string;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/CustomerDemographics('${pathParams.CustomerTypeID}')/Customers`
    : `CustomerDemographics('${pathParams.CustomerTypeID}')/Customers`;
}

export const method: HttpMethods = HttpMethods.POST;

export const headers: Record<string, string> = {
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelCustomerCreate;
