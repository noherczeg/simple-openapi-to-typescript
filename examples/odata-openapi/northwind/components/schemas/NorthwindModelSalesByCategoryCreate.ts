/* Generated source, do not modify! */

export interface NorthwindModelSalesByCategoryCreate {
  /**
   * format: int32
   */
  CategoryID: number;

  /**
   * maxLength: 15
   */
  CategoryName: string;

  /**
   * maxLength: 40
   */
  ProductName: string;

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  ProductSales?: number | string;
}
