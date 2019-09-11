/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  id: number;
}

export function createPath(pathParams: PathParams): string {
  return `/pets/${pathParams.id}`;
}

export const method: HttpMethods = HttpMethods.DELETE;
