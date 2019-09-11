/* Generated source, do not modify! */

import { NorthwindModelOrder } from "./NorthwindModelOrder";
import { NorthwindModelCustomerDemographic } from "./NorthwindModelCustomerDemographic";

export interface NorthwindModelCustomer {
  /**
   * maxLength: 5
   */
  CustomerID?: string;

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

  Orders?: Array<NorthwindModelOrder>;

  CustomerDemographics?: Array<NorthwindModelCustomerDemographic>;
}
