/* Generated source, do not modify! */

import { HttpMethods } from '../constants/HttpMethods';
import { MediaTypes } from '../constants/MediaTypes';

export interface PathParams {
    petId: string;
}

/**
 * @param {PathParams} pathParams Object containing values which will be interpolated to the path segment
 * @param {string} [baseUrl] If present, will be prepended to the URI. If missing, the result will be ensured to be a relative URL.
 */
export function createPath(pathParams: PathParams, baseUrl?: string): string {
    return baseUrl
        ? `${baseUrl}/pets/${pathParams.petId}`
        : `pets/${pathParams.petId}`;
}

export const method: HttpMethods = HttpMethods.GET;

export const headers: Record<string, string> = {
    Accept: MediaTypes.APPLICATION_JSON
};
