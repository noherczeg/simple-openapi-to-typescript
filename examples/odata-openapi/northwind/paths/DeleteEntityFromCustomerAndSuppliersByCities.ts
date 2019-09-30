/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  /**
   * description: key: CompanyName
   * maxLength: 40
   */
  CompanyName: string;

  /**
   * description: key: Relationship
   * maxLength: 9
   */
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

export const method: HttpMethods = HttpMethods.DELETE;
