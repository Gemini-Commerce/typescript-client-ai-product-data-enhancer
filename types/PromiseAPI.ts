import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AiproductdataenhancerFillProductDataRequest } from '../models/AiproductdataenhancerFillProductDataRequest';
import { AiproductdataenhancerFillProductDataResponse } from '../models/AiproductdataenhancerFillProductDataResponse';
import { AiproductdataenhancerLanguageCode } from '../models/AiproductdataenhancerLanguageCode';
import { AiproductdataenhancerProductDataToFill } from '../models/AiproductdataenhancerProductDataToFill';
import { AiproductdataenhancerProductInformation } from '../models/AiproductdataenhancerProductInformation';
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


}



