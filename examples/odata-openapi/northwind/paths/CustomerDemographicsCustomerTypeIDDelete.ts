/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  CustomerTypeID: string;
}

export function createPath(pathParams: PathParams): string {
  return `/CustomerDemographics('${pathParams.CustomerTypeID}')`;
}

export const method: HttpMethods = HttpMethods.DELETE;
