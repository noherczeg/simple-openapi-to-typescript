/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  ProductName = "ProductName",
  UnitPrice = "UnitPrice"
}

export interface PathParams {
  ProductName: string;
}

export interface RequestSearchParams {
  $select?: Set<SelectEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Products_Above_Average_Prices('${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.GET;