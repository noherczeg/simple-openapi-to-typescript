/* Generated source, do not modify! */

import { NorthwindModelOrderCreate } from "./NorthwindModelOrderCreate";
import { NorthwindModelCustomerDemographicCreate } from "./NorthwindModelCustomerDemographicCreate";

export interface NorthwindModelCustomerCreate {
  /**
   * maxLength: 5
   */
  CustomerID: string;

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

  Orders?: Array<NorthwindModelOrderCreate>;

  CustomerDemographics?: Array<NorthwindModelCustomerDemographicCreate>;
}
