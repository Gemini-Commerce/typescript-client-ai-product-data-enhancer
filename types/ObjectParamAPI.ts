import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AiproductdataenhancerFillProductDataRequest } from '../models/AiproductdataenhancerFillProductDataRequest';
import { AiproductdataenhancerFillProductDataResponse } from '../models/AiproductdataenhancerFillProductDataResponse';
import { AiproductdataenhancerLanguageCode } from '../models/AiproductdataenhancerLanguageCode';
import { AiproductdataenhancerProductInformation } from '../models/AiproductdataenhancerProductInformation';
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

}
