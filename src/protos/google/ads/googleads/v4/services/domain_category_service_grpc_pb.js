"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_domain_category_service_pb=require("../../../../../google/ads/googleads/v4/services/domain_category_service_pb.js"),google_ads_googleads_v4_resources_domain_category_pb=require("../../../../../google/ads/googleads/v4/resources/domain_category_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_DomainCategory(e){if(!(e instanceof google_ads_googleads_v4_resources_domain_category_pb.DomainCategory))throw new Error("Expected argument of type google.ads.googleads.v4.resources.DomainCategory");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_DomainCategory(e){return google_ads_googleads_v4_resources_domain_category_pb.DomainCategory.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetDomainCategoryRequest(e){if(!(e instanceof google_ads_googleads_v4_services_domain_category_service_pb.GetDomainCategoryRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetDomainCategoryRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetDomainCategoryRequest(e){return google_ads_googleads_v4_services_domain_category_service_pb.GetDomainCategoryRequest.deserializeBinary(new Uint8Array(e))}var DomainCategoryServiceService=exports.DomainCategoryServiceService={getDomainCategory:{path:"/google.ads.googleads.v4.services.DomainCategoryService/GetDomainCategory",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_domain_category_service_pb.GetDomainCategoryRequest,responseType:google_ads_googleads_v4_resources_domain_category_pb.DomainCategory,requestSerialize:serialize_google_ads_googleads_v4_services_GetDomainCategoryRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetDomainCategoryRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_DomainCategory,responseDeserialize:deserialize_google_ads_googleads_v4_resources_DomainCategory}};exports.DomainCategoryServiceClient=grpc.makeGenericClientConstructor(DomainCategoryServiceService);