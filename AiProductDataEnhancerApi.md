# .AiProductDataEnhancerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aiProductDataEnhancerFillProductData**](AiProductDataEnhancerApi.md#aiProductDataEnhancerFillProductData) | **POST** /aiproductdataenhancer.AiProductDataEnhancer/FillProductData | 
[**aiProductDataEnhancerTranslateData**](AiProductDataEnhancerApi.md#aiProductDataEnhancerTranslateData) | **POST** /aiproductdataenhancer.AiProductDataEnhancer/TranslateData | 


# **aiProductDataEnhancerFillProductData**
> AiproductdataenhancerFillProductDataResponse aiProductDataEnhancerFillProductData(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AiProductDataEnhancerApi(configuration);

let body:.AiProductDataEnhancerApiAiProductDataEnhancerFillProductDataRequest = {
  // AiproductdataenhancerFillProductDataRequest
  body: {
    tenantId: "tenantId_example",
    languageCode: "LANGUAGE_CODE_UNKNOWN",
    productInformation: {
      brand: "brand_example",
      code: "code_example",
      title: "title_example",
    },
    productDataToFill: [
      {
        name: "name_example",
        valueSet: [
          "valueSet_example",
        ],
      },
    ],
    domainsToInclude: [
      "domainsToInclude_example",
    ],
    domainsToExclude: [
      "domainsToExclude_example",
    ],
  },
};

apiInstance.aiProductDataEnhancerFillProductData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AiproductdataenhancerFillProductDataRequest**|  |


### Return type

**AiproductdataenhancerFillProductDataResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **aiProductDataEnhancerTranslateData**
> AiproductdataenhancerTranslateDataResponse aiProductDataEnhancerTranslateData(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AiProductDataEnhancerApi(configuration);

let body:.AiProductDataEnhancerApiAiProductDataEnhancerTranslateDataRequest = {
  // AiproductdataenhancerTranslateDataRequest
  body: {
    tenantId: "tenantId_example",
    languageCode: "LANGUAGE_CODE_UNKNOWN",
    dataToTranslate: [
      {
        name: "name_example",
        value: "value_example",
      },
    ],
  },
};

apiInstance.aiProductDataEnhancerTranslateData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AiproductdataenhancerTranslateDataRequest**|  |


### Return type

**AiproductdataenhancerTranslateDataResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


