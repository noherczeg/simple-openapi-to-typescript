/* Generated source, do not modify! */

import { NorthwindModelRegion } from "./NorthwindModelRegion";
import { NorthwindModelEmployee } from "./NorthwindModelEmployee";

export interface NorthwindModelTerritory {
  /**
   * maxLength: 20
   */
  readonly TerritoryID?: string;

  /**
   * maxLength: 50
   */
  readonly TerritoryDescription?: string;

  /**
   * format: int32
   */
  readonly RegionID?: number;

  readonly Region?: NorthwindModelRegion;

  readonly Employees?: ReadonlyArray<NorthwindModelEmployee>;
}
