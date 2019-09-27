/* Generated source, do not modify! */

import { NorthwindModelOrder } from "./NorthwindModelOrder";

export interface NorthwindModelShipper {
  /**
   * format: int32
   */
  readonly ShipperID?: number;

  /**
   * maxLength: 40
   */
  readonly CompanyName?: string;

  /**
   * maxLength: 24
   */
  readonly Phone?: string;

  readonly Orders?: ReadonlyArray<NorthwindModelOrder>;
}
