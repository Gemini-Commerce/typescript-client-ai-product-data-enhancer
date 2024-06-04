import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AiproductdataenhancerFillProductDataRequest } from '../models/AiproductdataenhancerFillProductDataRequest';
import { AiproductdataenhancerFillProductDataResponse } from '../models/AiproductdataenhancerFillProductDataResponse';
import { AiproductdataenhancerLanguageCode } from '../models/AiproductdataenhancerLanguageCode';
import { AiproductdataenhancerProductInformation } from '../models/AiproductdataenhancerProductInformation';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';

import { AiProductDataEnhancerApiRequestFactory, AiProductDataEnhancerApiResponseProcessor} from "../apis/AiProductDataEnhancerApi";
export class ObservableAiProductDataEnhancerApi {
    private requestFactory: AiProductDataEnhancerApiRequestFactory;
    private responseProcessor: AiProductDataEnhancerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AiProductDataEnhancerApiRequestFactory,
        responseProcessor?: AiProductDataEnhancerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AiProductDataEnhancerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AiProductDataEnhancerApiResponseProcessor();
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerFillProductDataWithHttpInfo(body: AiproductdataenhancerFillProductDataRequest, _options?: Configuration): Observable<HttpInfo<AiproductdataenhancerFillProductDataResponse>> {
        const requestContextPromise = this.requestFactory.aiProductDataEnhancerFillProductData(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.aiProductDataEnhancerFillProductDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerFillProductData(body: AiproductdataenhancerFillProductDataRequest, _options?: Configuration): Observable<AiproductdataenhancerFillProductDataResponse> {
        return this.aiProductDataEnhancerFillProductDataWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<AiproductdataenhancerFillProductDataResponse>) => apiResponse.data));
    }

}
