/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  OrderID = "OrderID",
  CustomerID = "CustomerID",
  EmployeeID = "EmployeeID",
  OrderDate = "OrderDate",
  RequiredDate = "RequiredDate",
  ShippedDate = "ShippedDate",
  ShipVia = "ShipVia",
  Freight = "Freight",
  ShipName = "ShipName",
  ShipAddress = "ShipAddress",
  ShipCity = "ShipCity",
  ShipRegion = "ShipRegion",
  ShipPostalCode = "ShipPostalCode",
  ShipCountry = "ShipCountry",
  CompanyName = "CompanyName",
  Address = "Address",
  City = "City",
  Region = "Region",
  PostalCode = "PostalCode",
  Country = "Country"
}

export interface PathParams {
  CompanyName: string;

  OrderID: number;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Orders_Qries(CompanyName='${pathParams.CompanyName}',OrderID=${pathParams.OrderID})`;
}

export const method: HttpMethods = HttpMethods.GET;
