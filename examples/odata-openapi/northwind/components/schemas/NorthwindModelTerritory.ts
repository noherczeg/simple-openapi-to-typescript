/* Generated source, do not modify! */

import { NorthwindModelRegion } from "./NorthwindModelRegion";
import { NorthwindModelEmployee } from "./NorthwindModelEmployee";

export interface NorthwindModelTerritory {
  /**
   * maxLength: 20
   */
  TerritoryID?: string;

  /**
   * maxLength: 50
   */
  TerritoryDescription?: string;

  /**
   * format: int32
   */
  RegionID?: number;

  Region?: NorthwindModelRegion;

  Employees?: Array<NorthwindModelEmployee>;
}
