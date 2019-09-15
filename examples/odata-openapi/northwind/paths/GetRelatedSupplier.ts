/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

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

export interface PathParams {
  ProductID: number;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Products(${pathParams.ProductID})/Supplier`;
}

export const method: HttpMethods = HttpMethods.GET;
