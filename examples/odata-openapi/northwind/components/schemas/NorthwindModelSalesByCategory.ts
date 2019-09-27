/* Generated source, do not modify! */

export interface NorthwindModelSalesByCategory {
  /**
   * format: int32
   */
  readonly CategoryID?: number;

  /**
   * maxLength: 15
   */
  readonly CategoryName?: string;

  /**
   * maxLength: 40
   */
  readonly ProductName?: string;

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  readonly ProductSales?: number | string;
}
