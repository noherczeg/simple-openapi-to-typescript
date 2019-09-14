/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

/**
 * description: Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
 */
export enum OrderbyEnum {
  ProductID = "ProductID",
  ProductIDDesc = "ProductID desc",
  ProductName = "ProductName",
  ProductNameDesc = "ProductName desc",
  SupplierID = "SupplierID",
  SupplierIDDesc = "SupplierID desc",
  CategoryID = "CategoryID",
  CategoryIDDesc = "CategoryID desc",
  QuantityPerUnit = "QuantityPerUnit",
  QuantityPerUnitDesc = "QuantityPerUnit desc",
  UnitPrice = "UnitPrice",
  UnitPriceDesc = "UnitPrice desc",
  UnitsInStock = "UnitsInStock",
  UnitsInStockDesc = "UnitsInStock desc",
  UnitsOnOrder = "UnitsOnOrder",
  UnitsOnOrderDesc = "UnitsOnOrder desc",
  ReorderLevel = "ReorderLevel",
  ReorderLevelDesc = "ReorderLevel desc",
  Discontinued = "Discontinued",
  DiscontinuedDesc = "Discontinued desc"
}

/**
 * description: Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
 */
export enum SelectEnum {
  ProductID = "ProductID",
  ProductName = "ProductName",
  SupplierID = "SupplierID",
  CategoryID = "CategoryID",
  QuantityPerUnit = "QuantityPerUnit",
  UnitPrice = "UnitPrice",
  UnitsInStock = "UnitsInStock",
  UnitsOnOrder = "UnitsOnOrder",
  ReorderLevel = "ReorderLevel",
  Discontinued = "Discontinued"
}

/**
 * description: Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)
 */
export enum ExpandEnum {
  _ALL_ = "*",
  Category = "Category",
  OrderDetails = "Order_Details",
  Supplier = "Supplier"
}

export interface PathParams {
  CategoryID: number;
}

export interface RequestSearchParams {
  $filter?: string;
  $orderby?: Set<OrderbyEnum>;
  $select?: Set<SelectEnum>;
  $expand?: Set<ExpandEnum>;
}

export function createPath(pathParams: PathParams): string {
  return `/Categories(${pathParams.CategoryID})/Products`;
}

export const method: HttpMethods = HttpMethods.GET;
