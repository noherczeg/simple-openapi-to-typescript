/* Generated source, do not modify! */

export interface NorthwindModelOrderDetailsExtended {
  /**
   * format: int32
   */
  OrderID?: number;

  /**
   * format: int32
   */
  ProductID?: number;

  /**
   * maxLength: 40
   */
  ProductName?: string;

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

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  ExtendedPrice?: number | string;
}
