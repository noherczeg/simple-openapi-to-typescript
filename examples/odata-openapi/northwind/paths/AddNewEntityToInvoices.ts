/* Generated source, do not modify! */

import { HttpMethods } from "../constants/HttpMethods";
import { NorthwindModelInvoiceCreate } from "../components/schemas/NorthwindModelInvoiceCreate";
import { MediaTypes } from "../constants/MediaTypes";

/**
 
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(baseUrl?: string): string {
  return baseUrl ? `${baseUrl}/Invoices` : `Invoices`;
}

export const method: HttpMethods = HttpMethods.POST;

export const headers: Record<string, string> = {
  Accept: MediaTypes.APPLICATION_JSON,
  "Content-Type": MediaTypes.APPLICATION_JSON
};

export type RequestBody = NorthwindModelInvoiceCreate;
