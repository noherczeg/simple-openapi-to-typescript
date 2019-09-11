/* Generated source, do not modify! */

import { NorthwindModelOrder } from "./NorthwindModelOrder";

export interface NorthwindModelShipper {
  /**
   * format: int32
   */
  ShipperID?: number;

  /**
   * maxLength: 40
   */
  CompanyName?: string;

  /**
   * maxLength: 24
   */
  Phone?: string;

  Orders?: Array<NorthwindModelOrder>;
}
