/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  OrderID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Summary_of_Sales_by_Quarters(${pathParams.OrderID})`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
