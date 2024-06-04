import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AiproductdataenhancerDataToTranslate } from '../models/AiproductdataenhancerDataToTranslate';
import { AiproductdataenhancerError } from '../models/AiproductdataenhancerError';
import { AiproductdataenhancerFillProductDataCheckRequest } from '../models/AiproductdataenhancerFillProductDataCheckRequest';
import { AiproductdataenhancerFillProductDataCheckResponse } from '../models/AiproductdataenhancerFillProductDataCheckResponse';
import { AiproductdataenhancerFillProductDataRequest } from '../models/AiproductdataenhancerFillProductDataRequest';
import { AiproductdataenhancerFillProductDataResponse } from '../models/AiproductdataenhancerFillProductDataResponse';
import { AiproductdataenhancerJobStatus } from '../models/AiproductdataenhancerJobStatus';
import { AiproductdataenhancerLanguageCode } from '../models/AiproductdataenhancerLanguageCode';
import { AiproductdataenhancerProductDataToFill } from '../models/AiproductdataenhancerProductDataToFill';
import { AiproductdataenhancerProductInformation } from '../models/AiproductdataenhancerProductInformation';
import { AiproductdataenhancerTranslateDataRequest } from '../models/AiproductdataenhancerTranslateDataRequest';
import { AiproductdataenhancerTranslateDataResponse } from '../models/AiproductdataenhancerTranslateDataResponse';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';

import { ObservableAiProductDataEnhancerApi } from "./ObservableAPI";
import { AiProductDataEnhancerApiRequestFactory, AiProductDataEnhancerApiResponseProcessor} from "../apis/AiProductDataEnhancerApi";

export interface AiProductDataEnhancerApiAiProductDataEnhancerFillProductDataRequest {
    /**
     * 
     * @type AiproductdataenhancerFillProductDataRequest
     * @memberof AiProductDataEnhancerApiaiProductDataEnhancerFillProductData
     */
    body: AiproductdataenhancerFillProductDataRequest
}

export interface AiProductDataEnhancerApiAiProductDataEnhancerFillProductDataCheckRequest {
    /**
     * 
     * @type AiproductdataenhancerFillProductDataCheckRequest
     * @memberof AiProductDataEnhancerApiaiProductDataEnhancerFillProductDataCheck
     */
    body: AiproductdataenhancerFillProductDataCheckRequest
}

export interface AiProductDataEnhancerApiAiProductDataEnhancerTranslateDataRequest {
    /**
     * 
     * @type AiproductdataenhancerTranslateDataRequest
     * @memberof AiProductDataEnhancerApiaiProductDataEnhancerTranslateData
     */
    body: AiproductdataenhancerTranslateDataRequest
}

export class ObjectAiProductDataEnhancerApi {
    private api: ObservableAiProductDataEnhancerApi

    public constructor(configuration: Configuration, requestFactory?: AiProductDataEnhancerApiRequestFactory, responseProcessor?: AiProductDataEnhancerApiResponseProcessor) {
        this.api = new ObservableAiProductDataEnhancerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public aiProductDataEnhancerFillProductDataWithHttpInfo(param: AiProductDataEnhancerApiAiProductDataEnhancerFillProductDataRequest, options?: Configuration): Promise<HttpInfo<AiproductdataenhancerFillProductDataResponse>> {
        return this.api.aiProductDataEnhancerFillProductDataWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public aiProductDataEnhancerFillProductData(param: AiProductDataEnhancerApiAiProductDataEnhancerFillProductDataRequest, options?: Configuration): Promise<AiproductdataenhancerFillProductDataResponse> {
        return this.api.aiProductDataEnhancerFillProductData(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public aiProductDataEnhancerFillProductDataCheckWithHttpInfo(param: AiProductDataEnhancerApiAiProductDataEnhancerFillProductDataCheckRequest, options?: Configuration): Promise<HttpInfo<AiproductdataenhancerFillProductDataCheckResponse>> {
        return this.api.aiProductDataEnhancerFillProductDataCheckWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public aiProductDataEnhancerFillProductDataCheck(param: AiProductDataEnhancerApiAiProductDataEnhancerFillProductDataCheckRequest, options?: Configuration): Promise<AiproductdataenhancerFillProductDataCheckResponse> {
        return this.api.aiProductDataEnhancerFillProductDataCheck(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public aiProductDataEnhancerTranslateDataWithHttpInfo(param: AiProductDataEnhancerApiAiProductDataEnhancerTranslateDataRequest, options?: Configuration): Promise<HttpInfo<AiproductdataenhancerTranslateDataResponse>> {
        return this.api.aiProductDataEnhancerTranslateDataWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public aiProductDataEnhancerTranslateData(param: AiProductDataEnhancerApiAiProductDataEnhancerTranslateDataRequest, options?: Configuration): Promise<AiproductdataenhancerTranslateDataResponse> {
        return this.api.aiProductDataEnhancerTranslateData(param.body,  options).toPromise();
    }

}
