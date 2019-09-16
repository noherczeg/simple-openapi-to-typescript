/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  TerritoryID: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Territories('${pathParams.TerritoryID}')/Employees`;
}

export const method: HttpMethods = HttpMethods.POST;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;