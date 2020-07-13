"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_mobile_device_constant_service_pb=require("../../../../../google/ads/googleads/v4/services/mobile_device_constant_service_pb.js"),google_ads_googleads_v4_resources_mobile_device_constant_pb=require("../../../../../google/ads/googleads/v4/resources/mobile_device_constant_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_MobileDeviceConstant(e){if(!(e instanceof google_ads_googleads_v4_resources_mobile_device_constant_pb.MobileDeviceConstant))throw new Error("Expected argument of type google.ads.googleads.v4.resources.MobileDeviceConstant");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_MobileDeviceConstant(e){return google_ads_googleads_v4_resources_mobile_device_constant_pb.MobileDeviceConstant.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetMobileDeviceConstantRequest(e){if(!(e instanceof google_ads_googleads_v4_services_mobile_device_constant_service_pb.GetMobileDeviceConstantRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetMobileDeviceConstantRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetMobileDeviceConstantRequest(e){return google_ads_googleads_v4_services_mobile_device_constant_service_pb.GetMobileDeviceConstantRequest.deserializeBinary(new Uint8Array(e))}var MobileDeviceConstantServiceService=exports.MobileDeviceConstantServiceService={getMobileDeviceConstant:{path:"/google.ads.googleads.v4.services.MobileDeviceConstantService/GetMobileDeviceConstant",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_mobile_device_constant_service_pb.GetMobileDeviceConstantRequest,responseType:google_ads_googleads_v4_resources_mobile_device_constant_pb.MobileDeviceConstant,requestSerialize:serialize_google_ads_googleads_v4_services_GetMobileDeviceConstantRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetMobileDeviceConstantRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_MobileDeviceConstant,responseDeserialize:deserialize_google_ads_googleads_v4_resources_MobileDeviceConstant}};exports.MobileDeviceConstantServiceClient=grpc.makeGenericClientConstructor(MobileDeviceConstantServiceService);