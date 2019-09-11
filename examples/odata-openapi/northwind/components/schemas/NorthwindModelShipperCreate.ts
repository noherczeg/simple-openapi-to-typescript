/* Generated source, do not modify! */

import { NorthwindModelOrderCreate } from "./NorthwindModelOrderCreate";

export interface NorthwindModelShipperCreate {
  /**
   * format: int32
   */
  ShipperID: number;

  /**
   * maxLength: 40
   */
  CompanyName?: string;

  /**
   * maxLength: 24
   */
  Phone?: string;

  Orders?: Array<NorthwindModelOrderCreate>;
}
