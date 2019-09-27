/* Generated source, do not modify! */

export interface NorthwindModelOrderDetailsExtended {
  /**
   * format: int32
   */
  readonly OrderID?: number;

  /**
   * format: int32
   */
  readonly ProductID?: number;

  /**
   * maxLength: 40
   */
  readonly ProductName?: string;

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

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  readonly ExtendedPrice?: number | string;
}
