/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  CategoryName: string;

  Discontinued: boolean;

  ProductID: number;

  ProductName: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Alphabetical_list_of_products(CategoryName='${pathParams.CategoryName}',Discontinued='${pathParams.Discontinued}',ProductID=${pathParams.ProductID},ProductName='${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
