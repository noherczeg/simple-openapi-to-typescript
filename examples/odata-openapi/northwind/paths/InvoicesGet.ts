/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
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
  CustomerID = "CustomerID",
  CustomerIDDesc = "CustomerID desc",
  CustomerName = "CustomerName",
  CustomerNameDesc = "CustomerName desc",
  Address = "Address",
  AddressDesc = "Address desc",
  City = "City",
  CityDesc = "City desc",
  Region = "Region",
  RegionDesc = "Region desc",
  PostalCode = "PostalCode",
  PostalCodeDesc = "PostalCode desc",
  Country = "Country",
  CountryDesc = "Country desc",
  Salesperson = "Salesperson",
  SalespersonDesc = "Salesperson desc",
  OrderID = "OrderID",
  OrderIDDesc = "OrderID desc",
  OrderDate = "OrderDate",
  OrderDateDesc = "OrderDate desc",
  RequiredDate = "RequiredDate",
  RequiredDateDesc = "RequiredDate desc",
  ShippedDate = "ShippedDate",
  ShippedDateDesc = "ShippedDate desc",
  ShipperName = "ShipperName",
  ShipperNameDesc = "ShipperName desc",
  ProductID = "ProductID",
  ProductIDDesc = "ProductID desc",
  ProductName = "ProductName",
  ProductNameDesc = "ProductName desc",
  UnitPrice = "UnitPrice",
  UnitPriceDesc = "UnitPrice desc",
  Quantity = "Quantity",
  QuantityDesc = "Quantity desc",
  Discount = "Discount",
  DiscountDesc = "Discount desc",
  ExtendedPrice = "ExtendedPrice",
  ExtendedPriceDesc = "ExtendedPrice desc",
  Freight = "Freight",
  FreightDesc = "Freight desc"
}

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

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
}

export function createPath(): string {
  return `/Invoices`;
}

export const method: HttpMethods = HttpMethods.GET;
