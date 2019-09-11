/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  EmployeeID = "EmployeeID",
  EmployeeIDDesc = "EmployeeID desc",
  LastName = "LastName",
  LastNameDesc = "LastName desc",
  FirstName = "FirstName",
  FirstNameDesc = "FirstName desc",
  Title = "Title",
  TitleDesc = "Title desc",
  TitleOfCourtesy = "TitleOfCourtesy",
  TitleOfCourtesyDesc = "TitleOfCourtesy desc",
  BirthDate = "BirthDate",
  BirthDateDesc = "BirthDate desc",
  HireDate = "HireDate",
  HireDateDesc = "HireDate desc",
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
  HomePhone = "HomePhone",
  HomePhoneDesc = "HomePhone desc",
  Extension = "Extension",
  ExtensionDesc = "Extension desc",
  Photo = "Photo",
  PhotoDesc = "Photo desc",
  Notes = "Notes",
  NotesDesc = "Notes desc",
  ReportsTo = "ReportsTo",
  ReportsToDesc = "ReportsTo desc",
  PhotoPath = "PhotoPath",
  PhotoPathDesc = "PhotoPath desc"
}

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
  TerritoryID: string;
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Territories('${pathParams.TerritoryID}')/Employees`;
}

export const method: HttpMethods = HttpMethods.GET;
