/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";

export interface RequestSearchParams {
  tags?: Array<string>;
  limit?: number;
}

export function createPath(): string {
  return `/pets`;
}

export const method: HttpMethods = HttpMethods.GET;
