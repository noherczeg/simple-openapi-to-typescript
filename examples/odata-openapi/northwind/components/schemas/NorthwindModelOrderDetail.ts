/* Generated source, do not modify! */

import { NorthwindModelOrder } from "./NorthwindModelOrder";
import { NorthwindModelProduct } from "./NorthwindModelProduct";

export interface NorthwindModelOrderDetail {
  /**
   * format: int32
   */
  readonly OrderID?: number;

  /**
   * format: int32
   */
  readonly ProductID?: number;

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  readonly UnitPrice?: number | string;

  /**
   * format: int16
   */
  readonly Quantity?: number;

  /**
   * format: float
   */
  readonly Discount?: number | string;

  readonly Order?: NorthwindModelOrder;

  readonly Product?: NorthwindModelProduct;
}
