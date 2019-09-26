/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  ShipName = "ShipName",
  ShipAddress = "ShipAddress",
  ShipCity = "ShipCity",
  ShipRegion = "ShipRegion",
  ShipPostalCode = "ShipPostalCode",
  ShipCountry = "ShipCountry",
  CustomerID = "CustomerID",
  CustomerName = "CustomerName",
  Address = "Address",
  City = "City",
  Region = "Region",
  PostalCode = "PostalCode",
  Country = "Country",
  Salesperson = "Salesperson",
  OrderID = "OrderID",
  OrderDate = "OrderDate",
  RequiredDate = "RequiredDate",
  ShippedDate = "ShippedDate",
  ShipperName = "ShipperName",
  ProductID = "ProductID",
  ProductName = "ProductName",
  UnitPrice = "UnitPrice",
  Quantity = "Quantity",
  Discount = "Discount",
  ExtendedPrice = "ExtendedPrice",
  Freight = "Freight"
}

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

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Invoices(CustomerName='${pathParams.CustomerName}',Discount=${pathParams.Discount},OrderID=${pathParams.OrderID},ProductID=${pathParams.ProductID},ProductName='${pathParams.ProductName}',Quantity=${pathParams.Quantity},Salesperson='${pathParams.Salesperson}',ShipperName='${pathParams.ShipperName}',UnitPrice='${pathParams.UnitPrice}')`
    : `Invoices(CustomerName='${pathParams.CustomerName}',Discount=${pathParams.Discount},OrderID=${pathParams.OrderID},ProductID=${pathParams.ProductID},ProductName='${pathParams.ProductName}',Quantity=${pathParams.Quantity},Salesperson='${pathParams.Salesperson}',ShipperName='${pathParams.ShipperName}',UnitPrice='${pathParams.UnitPrice}')`;
}

export const method: HttpMethods = HttpMethods.GET;
