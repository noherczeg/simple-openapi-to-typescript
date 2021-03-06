/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { HttpHeaders } from "../constants/HttpHeaders";

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
  /**
   * description: key: CustomerName
   * maxLength: 40
   */
  CustomerName: string;

  /**
   * description: key: Discount
   */
  Discount: undefined;

  /**
   * description: key: OrderID
   */
  OrderID: number;

  /**
   * description: key: ProductID
   */
  ProductID: number;

  /**
   * description: key: ProductName
   * maxLength: 40
   */
  ProductName: string;

  /**
   * description: key: Quantity
   */
  Quantity: number;

  /**
   * description: key: Salesperson
   * maxLength: 31
   */
  Salesperson: string;

  /**
   * description: key: ShipperName
   * maxLength: 40
   */
  ShipperName: string;

  /**
   * description: key: UnitPrice
   */
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

export const headers: Record<string, string> = {
  [HttpHeaders.ACCEPT]: MediaTypes.APPLICATION_JSON
};
