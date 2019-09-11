/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  CustomerTypeID: string;
}

export function createPath(pathParams: PathParams): string {
  return `/CustomerDemographics('${pathParams.CustomerTypeID}')/Customers`;
}

export const method: HttpMethods = HttpMethods.POST;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
