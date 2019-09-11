/* Generated source, do not modify! */

import { NorthwindModelTerritoryCreate } from "./NorthwindModelTerritoryCreate";

export interface NorthwindModelRegionCreate {
  /**
   * format: int32
   */
  RegionID: number;

  /**
   * maxLength: 50
   */
  RegionDescription?: string;

  Territories?: Array<NorthwindModelTerritoryCreate>;
}
