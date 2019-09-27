/* Generated source, do not modify! */

import { NorthwindModelProduct } from "./NorthwindModelProduct";

export interface NorthwindModelCategory {
  /**
   * format: int32
   */
  readonly CategoryID?: number;

  /**
   * maxLength: 15
   */
  readonly CategoryName?: string;

  readonly Description?: string;

  /**
   * format: base64url
   */
  readonly Picture?: string;

  readonly Products?: ReadonlyArray<NorthwindModelProduct>;
}
