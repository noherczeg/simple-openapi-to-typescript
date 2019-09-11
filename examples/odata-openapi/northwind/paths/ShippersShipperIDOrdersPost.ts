/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  ShipperID: number;
}

export function createPath(pathParams: PathParams): string {
  return `/Shippers(${pathParams.ShipperID})/Orders`;
}

export const method: HttpMethods = HttpMethods.POST;

export const requestContentType: MediaTypes = MediaTypes.APPLICATION_JSON;
