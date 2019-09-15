/* Generated source, do not modify! */

import { HttpMethods } from '../constants/HttpMethods';

export interface PathParams {
    petId: string;
}

export function createPath(pathParams: PathParams): string {
    return `/pets/${pathParams.petId}`;
}

export const method: HttpMethods = HttpMethods.GET;
