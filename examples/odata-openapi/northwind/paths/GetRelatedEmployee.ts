/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  EmployeeID = "EmployeeID",
  LastName = "LastName",
  FirstName = "FirstName",
  Title = "Title",
  TitleOfCourtesy = "TitleOfCourtesy",
  BirthDate = "BirthDate",
  HireDate = "HireDate",
  Address = "Address",
  City = "City",
  Region = "Region",
  PostalCode = "PostalCode",
  Country = "Country",
  HomePhone = "HomePhone",
  Extension = "Extension",
  Photo = "Photo",
  Notes = "Notes",
  ReportsTo = "ReportsTo",
  PhotoPath = "PhotoPath"
}

/**
 * description: Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)
 */
export enum ExpandEnum {
  _ALL_ = "*",
  Employees1 = "Employees1",
  Employee1 = "Employee1",
  Orders = "Orders",
  Territories = "Territories"
}

export interface PathParams {
  OrderID: number;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
  return baseUrl
    ? `${baseUrl}/Orders(${pathParams.OrderID})/Employee`
    : `Orders(${pathParams.OrderID})/Employee`;
}

export const method: HttpMethods = HttpMethods.GET;
