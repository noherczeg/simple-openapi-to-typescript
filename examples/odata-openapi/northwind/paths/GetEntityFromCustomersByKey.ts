/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

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

export interface PathParams {
  CustomerID: string;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Customers('${pathParams.CustomerID}')`;
}

export const method: HttpMethods = HttpMethods.GET;
