/* Generated source, do not modify! */

import { NorthwindModelProductCreate } from "./NorthwindModelProductCreate";

export interface NorthwindModelCategoryCreate {
  /**
   * format: int32
   */
  CategoryID: number;

  /**
   * maxLength: 15
   */
  CategoryName?: string;

  Description?: string;

  /**
   * format: base64url
   */
  Picture?: string;

  Products?: Array<NorthwindModelProductCreate>;
}
