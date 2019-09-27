/* Generated source, do not modify! */

import { NorthwindModelCategory } from "./NorthwindModelCategory";
import { NorthwindModelOrderDetail } from "./NorthwindModelOrderDetail";
import { NorthwindModelSupplier } from "./NorthwindModelSupplier";

export interface NorthwindModelProduct {
  /**
   * format: int32
   */
  readonly ProductID?: number;

  /**
   * maxLength: 40
   */
  readonly ProductName?: string;

  /**
   * format: int32
   */
  readonly SupplierID?: number;

  /**
   * format: int32
   */
  readonly CategoryID?: number;

  /**
   * maxLength: 20
   */
  readonly QuantityPerUnit?: string;

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  readonly UnitPrice?: number | string;

  /**
   * format: int16
   */
  readonly UnitsInStock?: number;

  /**
   * format: int16
   */
  readonly UnitsOnOrder?: number;

  /**
   * format: int16
   */
  readonly ReorderLevel?: number;

  readonly Discontinued?: boolean;

  readonly Category?: NorthwindModelCategory;

  readonly Order_Details?: ReadonlyArray<NorthwindModelOrderDetail>;

  readonly Supplier?: NorthwindModelSupplier;
}
