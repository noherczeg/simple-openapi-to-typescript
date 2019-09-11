/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  CategoryName = "CategoryName",
  CategorySales = "CategorySales"
}

export interface PathParams {
  CategoryName: string;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Category_Sales_for_1997('${pathParams.CategoryName}')`;
}

export const method: HttpMethods = HttpMethods.GET;
