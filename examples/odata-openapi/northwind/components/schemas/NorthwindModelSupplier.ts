/* Generated source, do not modify! */

import { NorthwindModelProduct } from "./NorthwindModelProduct";

export interface NorthwindModelSupplier {
  /**
   * format: int32
   */
  SupplierID?: number;

  /**
   * maxLength: 40
   */
  CompanyName?: string;

  /**
   * maxLength: 30
   */
  ContactName?: string;

  /**
   * maxLength: 30
   */
  ContactTitle?: string;

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
  Phone?: string;

  /**
   * maxLength: 24
   */
  Fax?: string;

  HomePage?: string;

  Products?: Array<NorthwindModelProduct>;
}
