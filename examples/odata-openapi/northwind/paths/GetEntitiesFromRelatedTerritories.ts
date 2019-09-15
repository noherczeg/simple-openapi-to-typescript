/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  TerritoryID = "TerritoryID",
  TerritoryIDDesc = "TerritoryID desc",
  TerritoryDescription = "TerritoryDescription",
  TerritoryDescriptionDesc = "TerritoryDescription desc",
  RegionID = "RegionID",
  RegionIDDesc = "RegionID desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  TerritoryID = "TerritoryID",
  TerritoryDescription = "TerritoryDescription",
  RegionID = "RegionID"
}

/**
 * description: Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)
 */
export enum ExpandEnum {
  _ALL_ = "*",
  Region = "Region",
  Employees = "Employees"
}

export interface PathParams {
  RegionID: number;
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Regions(${pathParams.RegionID})/Territories`;
}

export const method: HttpMethods = HttpMethods.GET;
