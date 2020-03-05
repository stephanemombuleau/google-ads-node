"use strict";var grpc=require("grpc"),google_ads_googleads_v3_services_ad_group_ad_asset_view_service_pb=require("../../../../../google/ads/googleads/v3/services/ad_group_ad_asset_view_service_pb.js"),google_ads_googleads_v3_resources_ad_group_ad_asset_view_pb=require("../../../../../google/ads/googleads/v3/resources/ad_group_ad_asset_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");function serialize_google_ads_googleads_v3_resources_AdGroupAdAssetView(arg){if(!(arg instanceof google_ads_googleads_v3_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView))throw new Error("Expected argument of type google.ads.googleads.v3.resources.AdGroupAdAssetView");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_resources_AdGroupAdAssetView(buffer_arg){return google_ads_googleads_v3_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v3_services_GetAdGroupAdAssetViewRequest(arg){if(!(arg instanceof google_ads_googleads_v3_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest))throw new Error("Expected argument of type google.ads.googleads.v3.services.GetAdGroupAdAssetViewRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v3_services_GetAdGroupAdAssetViewRequest(buffer_arg){return google_ads_googleads_v3_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest.deserializeBinary(new Uint8Array(buffer_arg))}var AdGroupAdAssetViewServiceService=exports.AdGroupAdAssetViewServiceService={getAdGroupAdAssetView:{path:"/google.ads.googleads.v3.services.AdGroupAdAssetViewService/GetAdGroupAdAssetView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v3_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest,responseType:google_ads_googleads_v3_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView,requestSerialize:serialize_google_ads_googleads_v3_services_GetAdGroupAdAssetViewRequest,requestDeserialize:deserialize_google_ads_googleads_v3_services_GetAdGroupAdAssetViewRequest,responseSerialize:serialize_google_ads_googleads_v3_resources_AdGroupAdAssetView,responseDeserialize:deserialize_google_ads_googleads_v3_resources_AdGroupAdAssetView}};exports.AdGroupAdAssetViewServiceClient=grpc.makeGenericClientConstructor(AdGroupAdAssetViewServiceService);