/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface PathParams {
  username: string;

  slug: string;
}

export function createPath(pathParams: PathParams): string {
  return `/2.0/repositories/${pathParams.username}/${pathParams.slug}`;
}

export const method: HttpMethods = HttpMethods.GET;
