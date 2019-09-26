/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  SupplierID = "SupplierID",
  SupplierIDDesc = "SupplierID desc",
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
  FaxDesc = "Fax desc",
  HomePage = "HomePage",
  HomePageDesc = "HomePage desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  SupplierID = "SupplierID",
  CompanyName = "CompanyName",
  ContactName = "ContactName",
  ContactTitle = "ContactTitle",
  Address = "Address",
  City = "City",
  Region = "Region",
  PostalCode = "PostalCode",
  Country = "Country",
  Phone = "Phone",
  Fax = "Fax",
  HomePage = "HomePage"
}

/**
 * description: Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)
 */
export enum ExpandEnum {
  _ALL_ = "*",
  Products = "Products"
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
}

/**
 
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(baseUrl?: string): string {
  return baseUrl ? `${baseUrl}/Suppliers` : `Suppliers`;
}

export const method: HttpMethods = HttpMethods.GET;
