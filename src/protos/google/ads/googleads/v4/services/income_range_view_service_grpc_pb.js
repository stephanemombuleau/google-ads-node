"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_income_range_view_service_pb=require("../../../../../google/ads/googleads/v4/services/income_range_view_service_pb.js"),google_ads_googleads_v4_resources_income_range_view_pb=require("../../../../../google/ads/googleads/v4/resources/income_range_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_IncomeRangeView(e){if(!(e instanceof google_ads_googleads_v4_resources_income_range_view_pb.IncomeRangeView))throw new Error("Expected argument of type google.ads.googleads.v4.resources.IncomeRangeView");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_IncomeRangeView(e){return google_ads_googleads_v4_resources_income_range_view_pb.IncomeRangeView.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetIncomeRangeViewRequest(e){if(!(e instanceof google_ads_googleads_v4_services_income_range_view_service_pb.GetIncomeRangeViewRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetIncomeRangeViewRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetIncomeRangeViewRequest(e){return google_ads_googleads_v4_services_income_range_view_service_pb.GetIncomeRangeViewRequest.deserializeBinary(new Uint8Array(e))}var IncomeRangeViewServiceService=exports.IncomeRangeViewServiceService={getIncomeRangeView:{path:"/google.ads.googleads.v4.services.IncomeRangeViewService/GetIncomeRangeView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_income_range_view_service_pb.GetIncomeRangeViewRequest,responseType:google_ads_googleads_v4_resources_income_range_view_pb.IncomeRangeView,requestSerialize:serialize_google_ads_googleads_v4_services_GetIncomeRangeViewRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetIncomeRangeViewRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_IncomeRangeView,responseDeserialize:deserialize_google_ads_googleads_v4_resources_IncomeRangeView}};exports.IncomeRangeViewServiceClient=grpc.makeGenericClientConstructor(IncomeRangeViewServiceService);