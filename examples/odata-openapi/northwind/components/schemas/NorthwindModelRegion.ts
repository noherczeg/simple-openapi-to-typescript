/* Generated source, do not modify! */

import { NorthwindModelTerritory } from "./NorthwindModelTerritory";

export interface NorthwindModelRegion {
  /**
   * format: int32
   */
  readonly RegionID?: number;

  /**
   * maxLength: 50
   */
  readonly RegionDescription?: string;

  readonly Territories?: ReadonlyArray<NorthwindModelTerritory>;
}
