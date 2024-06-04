// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AiproductdataenhancerFillProductDataRequest } from '../models/AiproductdataenhancerFillProductDataRequest';
import { AiproductdataenhancerFillProductDataResponse } from '../models/AiproductdataenhancerFillProductDataResponse';
import { RpcStatus } from '../models/RpcStatus';

/**
 * no description
 */
export class AiProductDataEnhancerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param body 
     */
    public async aiProductDataEnhancerFillProductData(body: AiproductdataenhancerFillProductDataRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("AiProductDataEnhancerApi", "aiProductDataEnhancerFillProductData", "body");
        }


        // Path Params
        const localVarPath = '/aiproductdataenhancer.AiProductDataEnhancer/FillProductData';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "AiproductdataenhancerFillProductDataRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AiProductDataEnhancerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aiProductDataEnhancerFillProductData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aiProductDataEnhancerFillProductDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AiproductdataenhancerFillProductDataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AiproductdataenhancerFillProductDataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AiproductdataenhancerFillProductDataResponse", ""
            ) as AiproductdataenhancerFillProductDataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RpcStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RpcStatus", ""
            ) as RpcStatus;
            throw new ApiException<RpcStatus>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AiproductdataenhancerFillProductDataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AiproductdataenhancerFillProductDataResponse", ""
            ) as AiproductdataenhancerFillProductDataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
