/* Generated source, do not modify! */

export interface NorthwindModelSalesTotalsByAmountCreate {
  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  SaleAmount?: number | string;

  /**
   * format: int32
   */
  OrderID: number;

  /**
   * maxLength: 40
   */
  CompanyName: string;

  /**
   * format: date-time
   */
  ShippedDate?: string;
}
