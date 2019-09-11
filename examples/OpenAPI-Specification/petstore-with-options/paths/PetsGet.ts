/* Generated source, do not modify! */

import { HttpMethods } from '../constants/HttpMethods';

export interface RequestSearchParams {
    limit?: number;
}

export function createPath(): string {
    return `/pets`;
}

export const method: HttpMethods = HttpMethods.GET;
