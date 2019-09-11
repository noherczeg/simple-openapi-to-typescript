/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  CategoryID = "CategoryID",
  CategoryName = "CategoryName",
  ProductName = "ProductName",
  ProductSales = "ProductSales"
}

export interface PathParams {
  CategoryID: number;

  CategoryName: string;

  ProductName: string;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Sales_by_Categories(CategoryID=${pathParams.CategoryID},CategoryName='${pathParams.CategoryName}',ProductName='${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.GET;
