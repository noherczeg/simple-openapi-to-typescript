/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  OrderID: number;

  ProductID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Order_Details(OrderID=${pathParams.OrderID},ProductID=${pathParams.ProductID})`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
