/* Generated source, do not modify! */

export interface NorthwindModelAlphabeticalListOfProductUpdate {
  /**
   * format: int32
   */
  SupplierID?: number;

  /**
   * format: int32
   */
  CategoryID?: number;

  /**
   * maxLength: 20
   */
  QuantityPerUnit?: string;

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  UnitPrice?: number | string;

  /**
   * format: int16
   */
  UnitsInStock?: number;

  /**
   * format: int16
   */
  UnitsOnOrder?: number;

  /**
   * format: int16
   */
  ReorderLevel?: number;
}
