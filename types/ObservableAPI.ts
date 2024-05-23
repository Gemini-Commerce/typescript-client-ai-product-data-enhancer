import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

    /**
     * @param body 
     */
    public aiProductDataEnhancerFillProductDataCheckWithHttpInfo(body: AiproductdataenhancerFillProductDataCheckRequest, _options?: Configuration): Observable<HttpInfo<AiproductdataenhancerFillProductDataCheckResponse>> {
        const requestContextPromise = this.requestFactory.aiProductDataEnhancerFillProductDataCheck(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.aiProductDataEnhancerFillProductDataCheckWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerFillProductDataCheck(body: AiproductdataenhancerFillProductDataCheckRequest, _options?: Configuration): Observable<AiproductdataenhancerFillProductDataCheckResponse> {
        return this.aiProductDataEnhancerFillProductDataCheckWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<AiproductdataenhancerFillProductDataCheckResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerTranslateDataWithHttpInfo(body: AiproductdataenhancerTranslateDataRequest, _options?: Configuration): Observable<HttpInfo<AiproductdataenhancerTranslateDataResponse>> {
        const requestContextPromise = this.requestFactory.aiProductDataEnhancerTranslateData(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.aiProductDataEnhancerTranslateDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public aiProductDataEnhancerTranslateData(body: AiproductdataenhancerTranslateDataRequest, _options?: Configuration): Observable<AiproductdataenhancerTranslateDataResponse> {
        return this.aiProductDataEnhancerTranslateDataWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<AiproductdataenhancerTranslateDataResponse>) => apiResponse.data));
    }

}
