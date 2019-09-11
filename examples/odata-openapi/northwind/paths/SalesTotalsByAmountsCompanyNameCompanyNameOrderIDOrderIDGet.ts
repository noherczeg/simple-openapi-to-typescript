/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  SaleAmount = "SaleAmount",
  OrderID = "OrderID",
  CompanyName = "CompanyName",
  ShippedDate = "ShippedDate"
}

export interface PathParams {
  CompanyName: string;

  OrderID: number;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Sales_Totals_by_Amounts(CompanyName='${pathParams.CompanyName}',OrderID=${pathParams.OrderID})`;
}

export const method: HttpMethods = HttpMethods.GET;
