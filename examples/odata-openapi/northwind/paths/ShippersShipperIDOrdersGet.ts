/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  OrderID = "OrderID",
  OrderIDDesc = "OrderID desc",
  CustomerID = "CustomerID",
  CustomerIDDesc = "CustomerID desc",
  EmployeeID = "EmployeeID",
  EmployeeIDDesc = "EmployeeID desc",
  OrderDate = "OrderDate",
  OrderDateDesc = "OrderDate desc",
  RequiredDate = "RequiredDate",
  RequiredDateDesc = "RequiredDate desc",
  ShippedDate = "ShippedDate",
  ShippedDateDesc = "ShippedDate desc",
  ShipVia = "ShipVia",
  ShipViaDesc = "ShipVia desc",
  Freight = "Freight",
  FreightDesc = "Freight desc",
  ShipName = "ShipName",
  ShipNameDesc = "ShipName desc",
  ShipAddress = "ShipAddress",
  ShipAddressDesc = "ShipAddress desc",
  ShipCity = "ShipCity",
  ShipCityDesc = "ShipCity desc",
  ShipRegion = "ShipRegion",
  ShipRegionDesc = "ShipRegion desc",
  ShipPostalCode = "ShipPostalCode",
  ShipPostalCodeDesc = "ShipPostalCode desc",
  ShipCountry = "ShipCountry",
  ShipCountryDesc = "ShipCountry desc"
}

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
  ShipCountry = "ShipCountry"
}

/**
 * description: Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)
 */
export enum ExpandEnum {
  _ALL_ = "*",
  Customer = "Customer",
  Employee = "Employee",
  Order_Details = "Order_Details",
  Shipper = "Shipper"
}

export interface PathParams {
  ShipperID: number;
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Shippers(${pathParams.ShipperID})/Orders`;
}

export const method: HttpMethods = HttpMethods.GET;
