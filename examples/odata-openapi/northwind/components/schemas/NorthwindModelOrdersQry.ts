/* Generated source, do not modify! */

export interface NorthwindModelOrdersQry {
  /**
   * format: int32
   */
  readonly OrderID?: number;

  /**
   * maxLength: 5
   */
  readonly CustomerID?: string;

  /**
   * format: int32
   */
  readonly EmployeeID?: number;

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
   * format: int32
   */
  readonly ShipVia?: number;

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  readonly Freight?: number | string;

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
   * maxLength: 40
   */
  readonly CompanyName?: string;

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
}
