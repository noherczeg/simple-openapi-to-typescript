/* Generated source, do not modify! */

export interface NorthwindModelInvoice {
  /**
   * maxLength: 40
   */
  readonly ShipName?: string;

  /**
   * maxLength: 60
   */
  readonly ShipAddress?: string;

  /**
   * maxLength: 15
   */
  readonly ShipCity?: string;

  /**
   * maxLength: 15
   */
  readonly ShipRegion?: string;

  /**
   * maxLength: 10
   */
  readonly ShipPostalCode?: string;

  /**
   * maxLength: 15
   */
  readonly ShipCountry?: string;

  /**
   * maxLength: 5
   */
  readonly CustomerID?: string;

  /**
   * maxLength: 40
   */
  readonly CustomerName?: string;

  /**
   * maxLength: 60
   */
  readonly Address?: string;

  /**
   * maxLength: 15
   */
  readonly City?: string;

  /**
   * maxLength: 15
   */
  readonly Region?: string;

  /**
   * maxLength: 10
   */
  readonly PostalCode?: string;

  /**
   * maxLength: 15
   */
  readonly Country?: string;

  /**
   * maxLength: 31
   */
  readonly Salesperson?: string;

  /**
   * format: int32
   */
  readonly OrderID?: number;

  /**
   * format: date-time
   */
  readonly OrderDate?: string;

  /**
   * format: date-time
   */
  readonly RequiredDate?: string;

  /**
   * format: date-time
   */
  readonly ShippedDate?: string;

  /**
   * maxLength: 40
   */
  readonly ShipperName?: string;

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

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  readonly Freight?: number | string;
}
