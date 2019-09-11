/* Generated source, do not modify! */

import { NorthwindModelOrderCreate } from "./NorthwindModelOrderCreate";
import { NorthwindModelProductCreate } from "./NorthwindModelProductCreate";

export interface NorthwindModelOrderDetailCreate {
  /**
   * format: int32
   */
  OrderID: number;

  /**
   * format: int32
   */
  ProductID: number;

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  UnitPrice?: number | string;

  /**
   * format: int16
   */
  Quantity?: number;

  /**
   * format: float
   */
  Discount?: number | string;

  Order?: NorthwindModelOrderCreate;

  Product?: NorthwindModelProductCreate;
}
