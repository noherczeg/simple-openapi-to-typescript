/* Generated source, do not modify! */

export interface NorthwindModelInvoice {
  /**
   * maxLength: 40
   */
  ShipName?: string;

  /**
   * maxLength: 60
   */
  ShipAddress?: string;

  /**
   * maxLength: 15
   */
  ShipCity?: string;

  /**
   * maxLength: 15
   */
  ShipRegion?: string;

  /**
   * maxLength: 10
   */
  ShipPostalCode?: string;

  /**
   * maxLength: 15
   */
  ShipCountry?: string;

  /**
   * maxLength: 5
   */
  CustomerID?: string;

  /**
   * maxLength: 40
   */
  CustomerName?: string;

  /**
   * maxLength: 60
   */
  Address?: string;

  /**
   * maxLength: 15
   */
  City?: string;

  /**
   * maxLength: 15
   */
  Region?: string;

  /**
   * maxLength: 10
   */
  PostalCode?: string;

  /**
   * maxLength: 15
   */
  Country?: string;

  /**
   * maxLength: 31
   */
  Salesperson?: string;

  /**
   * format: int32
   */
  OrderID?: number;

  /**
   * format: date-time
   */
  OrderDate?: string;

  /**
   * format: date-time
   */
  RequiredDate?: string;

  /**
   * format: date-time
   */
  ShippedDate?: string;

  /**
   * maxLength: 40
   */
  ShipperName?: string;

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

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  Freight?: number | string;
}
