/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  dataset: string;

  version: string;
}

export function createPath(pathParams: PathParams): string {
  return `/${pathParams.dataset}/${pathParams.version}/fields`;
}

export const method: HttpMethods = HttpMethods.GET;
