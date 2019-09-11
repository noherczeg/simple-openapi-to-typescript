/* Generated source, do not modify! */

import { NorthwindModelEmployee } from "./NorthwindModelEmployee";
import { NorthwindModelOrder } from "./NorthwindModelOrder";
import { NorthwindModelTerritory } from "./NorthwindModelTerritory";

export interface NorthwindModelEmployee {
  /**
   * format: int32
   */
  EmployeeID?: number;

  /**
   * maxLength: 20
   */
  LastName?: string;

  /**
   * maxLength: 10
   */
  FirstName?: string;

  /**
   * maxLength: 30
   */
  Title?: string;

  /**
   * maxLength: 25
   */
  TitleOfCourtesy?: string;

  /**
   * format: date-time
   */
  BirthDate?: string;

  /**
   * format: date-time
   */
  HireDate?: string;

  /**
   * maxLength: 60
   */
  Address?: string;

  /**
   * maxLength: 15
   */
  City?: string;

  /**
   * maxLength: 15
   */
  Region?: string;

  /**
   * maxLength: 10
   */
  PostalCode?: string;

  /**
   * maxLength: 15
   */
  Country?: string;

  /**
   * maxLength: 24
   */
  HomePhone?: string;

  /**
   * maxLength: 4
   */
  Extension?: string;

  /**
   * format: base64url
   */
  Photo?: string;

  Notes?: string;

  /**
   * format: int32
   */
  ReportsTo?: number;

  /**
   * maxLength: 255
   */
  PhotoPath?: string;

  Employees1?: Array<NorthwindModelEmployee>;

  Employee1?: NorthwindModelEmployee;

  Orders?: Array<NorthwindModelOrder>;

  Territories?: Array<NorthwindModelTerritory>;
}
