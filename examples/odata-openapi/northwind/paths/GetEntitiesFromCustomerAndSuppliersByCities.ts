/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  City = "City",
  CityDesc = "City desc",
  CompanyName = "CompanyName",
  CompanyNameDesc = "CompanyName desc",
  ContactName = "ContactName",
  ContactNameDesc = "ContactName desc",
  Relationship = "Relationship",
  RelationshipDesc = "Relationship desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  City = "City",
  CompanyName = "CompanyName",
  ContactName = "ContactName",
  Relationship = "Relationship"
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
}

export function createPath(): string {
  return `/Customer_and_Suppliers_by_Cities`;
}

export const method: HttpMethods = HttpMethods.GET;
