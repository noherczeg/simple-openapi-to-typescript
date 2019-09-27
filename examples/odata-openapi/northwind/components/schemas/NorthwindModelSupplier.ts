/* Generated source, do not modify! */

import { NorthwindModelProduct } from "./NorthwindModelProduct";

export interface NorthwindModelSupplier {
  /**
   * format: int32
   */
  readonly SupplierID?: number;

  /**
   * maxLength: 40
   */
  readonly CompanyName?: string;

  /**
   * maxLength: 30
   */
  readonly ContactName?: string;

  /**
   * maxLength: 30
   */
  readonly ContactTitle?: string;

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
  readonly Phone?: string;

  /**
   * maxLength: 24
   */
  readonly Fax?: string;

  readonly HomePage?: string;

  readonly Products?: ReadonlyArray<NorthwindModelProduct>;
}
