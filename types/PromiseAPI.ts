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
import { ObservableAiProductDataEnhancerApi } from './ObservableAPI';

import { AiProductDataEnhancerApiRequestFactory, AiProductDataEnhancerApiResponseProcessor} from "../apis/AiProductDataEnhancerApi";
export class PromiseAiProductDataEnhancerApi {
    private api: ObservableAiProductDataEnhancerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AiProductDataEnhancerApiRequestFactory,
        responseProcessor?: AiProductDataEnhancerApiResponseProcessor
    ) {
        this.api = new ObservableAiProductDataEnhancerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerFillProductDataWithHttpInfo(body: AiproductdataenhancerFillProductDataRequest, _options?: Configuration): Promise<HttpInfo<AiproductdataenhancerFillProductDataResponse>> {
        const result = this.api.aiProductDataEnhancerFillProductDataWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerFillProductData(body: AiproductdataenhancerFillProductDataRequest, _options?: Configuration): Promise<AiproductdataenhancerFillProductDataResponse> {
        const result = this.api.aiProductDataEnhancerFillProductData(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerFillProductDataCheckWithHttpInfo(body: AiproductdataenhancerFillProductDataCheckRequest, _options?: Configuration): Promise<HttpInfo<AiproductdataenhancerFillProductDataCheckResponse>> {
        const result = this.api.aiProductDataEnhancerFillProductDataCheckWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerFillProductDataCheck(body: AiproductdataenhancerFillProductDataCheckRequest, _options?: Configuration): Promise<AiproductdataenhancerFillProductDataCheckResponse> {
        const result = this.api.aiProductDataEnhancerFillProductDataCheck(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerTranslateDataWithHttpInfo(body: AiproductdataenhancerTranslateDataRequest, _options?: Configuration): Promise<HttpInfo<AiproductdataenhancerTranslateDataResponse>> {
        const result = this.api.aiProductDataEnhancerTranslateDataWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerTranslateData(body: AiproductdataenhancerTranslateDataRequest, _options?: Configuration): Promise<AiproductdataenhancerTranslateDataResponse> {
        const result = this.api.aiProductDataEnhancerTranslateData(body, _options);
        return result.toPromise();
    }


}



