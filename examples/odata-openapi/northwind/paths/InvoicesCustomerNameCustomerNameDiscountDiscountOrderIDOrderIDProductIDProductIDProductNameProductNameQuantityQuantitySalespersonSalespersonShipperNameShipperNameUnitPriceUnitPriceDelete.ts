/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  CustomerName: string;

  Discount: undefined;

  OrderID: number;

  ProductID: number;

  ProductName: string;

  Quantity: number;

  Salesperson: string;

  ShipperName: string;

  UnitPrice: undefined;
}

export function createPath(pathParams: PathParams): string {
  return `/Invoices(CustomerName='${pathParams.CustomerName}',Discount=${pathParams.Discount},OrderID=${pathParams.OrderID},ProductID=${pathParams.ProductID},ProductName='${pathParams.ProductName}',Quantity=${pathParams.Quantity},Salesperson='${pathParams.Salesperson}',ShipperName='${pathParams.ShipperName}',UnitPrice='${pathParams.UnitPrice}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
