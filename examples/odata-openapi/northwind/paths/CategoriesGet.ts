/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  CategoryID = "CategoryID",
  CategoryIDDesc = "CategoryID desc",
  CategoryName = "CategoryName",
  CategoryNameDesc = "CategoryName desc",
  Description = "Description",
  DescriptionDesc = "Description desc",
  Picture = "Picture",
  PictureDesc = "Picture desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  CategoryID = "CategoryID",
  CategoryName = "CategoryName",
  Description = "Description",
  Picture = "Picture"
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

export function createPath(): string {
  return `/Categories`;
}

export const method: HttpMethods = HttpMethods.GET;
