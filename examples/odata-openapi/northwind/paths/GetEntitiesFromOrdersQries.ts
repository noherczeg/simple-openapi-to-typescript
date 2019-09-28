/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";
import { HttpHeaders } from "../constants/HttpHeaders";

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
  ShipCountryDesc = "ShipCountry desc",
  CompanyName = "CompanyName",
  CompanyNameDesc = "CompanyName desc",
  Address = "Address",
  AddressDesc = "Address desc",
  City = "City",
  CityDesc = "City desc",
  Region = "Region",
  RegionDesc = "Region desc",
  PostalCode = "PostalCode",
  PostalCodeDesc = "PostalCode desc",
  Country = "Country",
  CountryDesc = "Country desc"
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
  ShipCountry = "ShipCountry",
  CompanyName = "CompanyName",
  Address = "Address",
  City = "City",
  Region = "Region",
  PostalCode = "PostalCode",
  Country = "Country"
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
}

/**
 
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(baseUrl?: string): string {
  return baseUrl ? `${baseUrl}/Orders_Qries` : `Orders_Qries`;
}

export const method: HttpMethods = HttpMethods.GET;

export const headers: Record<string, string> = {
  [HttpHeaders.ACCEPT]: MediaTypes.APPLICATION_JSON
};
