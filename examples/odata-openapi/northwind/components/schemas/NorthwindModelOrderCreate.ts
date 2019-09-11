/* Generated source, do not modify! */

import { NorthwindModelCustomerCreate } from "./NorthwindModelCustomerCreate";
import { NorthwindModelEmployeeCreate } from "./NorthwindModelEmployeeCreate";
import { NorthwindModelOrderDetailCreate } from "./NorthwindModelOrderDetailCreate";
import { NorthwindModelShipperCreate } from "./NorthwindModelShipperCreate";

export interface NorthwindModelOrderCreate {
  /**
   * format: int32
   */
  OrderID: number;

  /**
   * maxLength: 5
   */
  CustomerID?: string;

  /**
   * format: int32
   */
  EmployeeID?: number;

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
   * format: int32
   */
  ShipVia?: number;

  /**
   * format: decimal
   * multipleOf: 0.0001
   */
  Freight?: number | string;

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

  Customer?: NorthwindModelCustomerCreate;

  Employee?: NorthwindModelEmployeeCreate;

  Order_Details?: Array<NorthwindModelOrderDetailCreate>;

  Shipper?: NorthwindModelShipperCreate;
}
