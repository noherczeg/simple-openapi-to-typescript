/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  Discount: undefined;

  OrderID: number;

  ProductID: number;

  ProductName: string;

  Quantity: number;

  UnitPrice: undefined;
}

export function createPath(pathParams: PathParams): string {
  return `/Order_Details_Extendeds(Discount=${pathParams.Discount},OrderID=${pathParams.OrderID},ProductID=${pathParams.ProductID},ProductName='${pathParams.ProductName}',Quantity=${pathParams.Quantity},UnitPrice='${pathParams.UnitPrice}')`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
