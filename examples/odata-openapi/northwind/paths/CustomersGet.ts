/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  CustomerID = "CustomerID",
  CustomerIDDesc = "CustomerID desc",
  CompanyName = "CompanyName",
  CompanyNameDesc = "CompanyName desc",
  ContactName = "ContactName",
  ContactNameDesc = "ContactName desc",
  ContactTitle = "ContactTitle",
  ContactTitleDesc = "ContactTitle desc",
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
  Phone = "Phone",
  PhoneDesc = "Phone desc",
  Fax = "Fax",
  FaxDesc = "Fax desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  CustomerID = "CustomerID",
  CompanyName = "CompanyName",
  ContactName = "ContactName",
  ContactTitle = "ContactTitle",
  Address = "Address",
  City = "City",
  Region = "Region",
  PostalCode = "PostalCode",
  Country = "Country",
  Phone = "Phone",
  Fax = "Fax"
}

/**
 * description: Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)
 */
export enum ExpandEnum {
  _ALL_ = "*",
  Orders = "Orders",
  CustomerDemographics = "CustomerDemographics"
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
}

export function createPath(): string {
  return `/Customers`;
}

export const method: HttpMethods = HttpMethods.GET;
