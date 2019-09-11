/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { MediaTypes } from "../constants/MediaTypes";

export interface PathParams {
  version: string;

  dataset: string;
}

export function createPath(pathParams: PathParams): string {
  return `/${pathParams.dataset}/${pathParams.version}/records`;
}

export const method: HttpMethods = HttpMethods.POST;

export const requestContentType: MediaTypes =
  MediaTypes.APPLICATION_FORM_URLENCODED;
