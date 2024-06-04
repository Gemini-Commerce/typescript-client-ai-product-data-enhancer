/**
 * aiproductdataenhancer/service.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class AiproductdataenhancerFillProductDataResponse {
    'productDataFilled'?: { [key: string]: string; };
    'confidenceRate'?: number;
    'completionRate'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productDataFilled",
            "baseName": "productDataFilled",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "confidenceRate",
            "baseName": "confidenceRate",
            "type": "number",
            "format": "float"
        },
        {
            "name": "completionRate",
            "baseName": "completionRate",
            "type": "number",
            "format": "float"
        }    ];

    static getAttributeTypeMap() {
        return AiproductdataenhancerFillProductDataResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

