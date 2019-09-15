/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  username: string;
}

export function createPath(pathParams: PathParams): string {
  return `/2.0/users/${pathParams.username}`;
}

export const method: HttpMethods = HttpMethods.GET;
