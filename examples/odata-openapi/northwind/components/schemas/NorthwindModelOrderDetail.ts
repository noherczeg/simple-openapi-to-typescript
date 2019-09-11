/* Generated source, do not modify! */

import { NorthwindModelOrder } from "./NorthwindModelOrder";
import { NorthwindModelProduct } from "./NorthwindModelProduct";

export interface NorthwindModelOrderDetail {
  /**
   * format: int32
   */
  OrderID?: number;

  /**
   * format: int32
   */
  ProductID?: number;

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

  Order?: NorthwindModelOrder;

  Product?: NorthwindModelProduct;
}
