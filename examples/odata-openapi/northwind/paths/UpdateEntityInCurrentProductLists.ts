/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  ProductID: number;

  ProductName: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Current_Product_Lists(ProductID=${pathParams.ProductID},ProductName='${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
