/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { NorthwindModelCustomerAndSuppliersByCityUpdate } from "../components/schemas/NorthwindModelCustomerAndSuppliersByCityUpdate";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  CompanyName: string;

  Relationship: string;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Customer_and_Suppliers_by_Cities(CompanyName='${pathParams.CompanyName}',Relationship='${pathParams.Relationship}')`
    : `Customer_and_Suppliers_by_Cities(CompanyName='${pathParams.CompanyName}',Relationship='${pathParams.Relationship}')`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const headers: Record<string, string> = {
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelCustomerAndSuppliersByCityUpdate;
