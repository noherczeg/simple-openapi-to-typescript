/* Generated source, do not modify! */

import { NorthwindModelTerritory } from "./NorthwindModelTerritory";

export interface NorthwindModelRegion {
  /**
   * format: int32
   */
  RegionID?: number;

  /**
   * maxLength: 50
   */
  RegionDescription?: string;

  Territories?: Array<NorthwindModelTerritory>;
}
