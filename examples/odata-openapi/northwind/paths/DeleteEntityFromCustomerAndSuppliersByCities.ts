/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  CompanyName: string;

  Relationship: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Customer_and_Suppliers_by_Cities(CompanyName='${pathParams.CompanyName}',Relationship='${pathParams.Relationship}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
