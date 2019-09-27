/* Generated source, do not modify! */

import { NorthwindModelOrder } from "./NorthwindModelOrder";
import { NorthwindModelTerritory } from "./NorthwindModelTerritory";

export interface NorthwindModelEmployee {
  /**
   * format: int32
   */
  readonly EmployeeID?: number;

  /**
   * maxLength: 20
   */
  readonly LastName?: string;

  /**
   * maxLength: 10
   */
  readonly FirstName?: string;

  /**
   * maxLength: 30
   */
  readonly Title?: string;

  /**
   * maxLength: 25
   */
  readonly TitleOfCourtesy?: string;

  /**
   * format: date-time
   */
  readonly BirthDate?: string;

  /**
   * format: date-time
   */
  readonly HireDate?: string;

  /**
   * maxLength: 60
   */
  readonly Address?: string;

  /**
   * maxLength: 15
   */
  readonly City?: string;

  /**
   * maxLength: 15
   */
  readonly Region?: string;

  /**
   * maxLength: 10
   */
  readonly PostalCode?: string;

  /**
   * maxLength: 15
   */
  readonly Country?: string;

  /**
   * maxLength: 24
   */
  readonly HomePhone?: string;

  /**
   * maxLength: 4
   */
  readonly Extension?: string;

  /**
   * format: base64url
   */
  readonly Photo?: string;

  readonly Notes?: string;

  /**
   * format: int32
   */
  readonly ReportsTo?: number;

  /**
   * maxLength: 255
   */
  readonly PhotoPath?: string;

  readonly Employees1?: ReadonlyArray<NorthwindModelEmployee>;

  readonly Employee1?: NorthwindModelEmployee;

  readonly Orders?: ReadonlyArray<NorthwindModelOrder>;

  readonly Territories?: ReadonlyArray<NorthwindModelTerritory>;
}
