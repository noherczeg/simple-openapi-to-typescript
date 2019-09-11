/* Generated source, do not modify! */

import { NorthwindModelProduct } from "./NorthwindModelProduct";

export interface NorthwindModelCategory {
  /**
   * format: int32
   */
  CategoryID?: number;

  /**
   * maxLength: 15
   */
  CategoryName?: string;

  Description?: string;

  /**
   * format: base64url
   */
  Picture?: string;

  Products?: Array<NorthwindModelProduct>;
}
