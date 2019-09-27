/* Generated source, do not modify! */

export interface NorthwindModelSalesTotalsByAmount {
  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  readonly SaleAmount?: number | string;

  /**
   * format: int32
   */
  readonly OrderID?: number;

  /**
   * maxLength: 40
   */
  readonly CompanyName?: string;

  /**
   * format: date-time
   */
  readonly ShippedDate?: string;
}
