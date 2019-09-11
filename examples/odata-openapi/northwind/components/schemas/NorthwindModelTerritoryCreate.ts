/* Generated source, do not modify! */

import { NorthwindModelRegionCreate } from "./NorthwindModelRegionCreate";
import { NorthwindModelEmployeeCreate } from "./NorthwindModelEmployeeCreate";

export interface NorthwindModelTerritoryCreate {
  /**
   * maxLength: 20
   */
  TerritoryID: string;

  /**
   * maxLength: 50
   */
  TerritoryDescription?: string;

  /**
   * format: int32
   */
  RegionID?: number;

  Region?: NorthwindModelRegionCreate;

  Employees?: Array<NorthwindModelEmployeeCreate>;
}
