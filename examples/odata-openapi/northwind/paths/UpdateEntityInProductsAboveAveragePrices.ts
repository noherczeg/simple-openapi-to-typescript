/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  ProductName: string;
}

export function createPath(pathParams: PathParams): string {
  return `/Products_Above_Average_Prices('${pathParams.ProductName}')`;
}

export const method: HttpMethods = HttpMethods.PATCH;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
