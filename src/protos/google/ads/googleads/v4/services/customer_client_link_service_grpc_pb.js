"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_customer_client_link_service_pb=require("../../../../../google/ads/googleads/v4/services/customer_client_link_service_pb.js"),google_ads_googleads_v4_resources_customer_client_link_pb=require("../../../../../google/ads/googleads/v4/resources/customer_client_link_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");function serialize_google_ads_googleads_v4_resources_CustomerClientLink(e){if(!(e instanceof google_ads_googleads_v4_resources_customer_client_link_pb.CustomerClientLink))throw new Error("Expected argument of type google.ads.googleads.v4.resources.CustomerClientLink");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_CustomerClientLink(e){return google_ads_googleads_v4_resources_customer_client_link_pb.CustomerClientLink.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetCustomerClientLinkRequest(e){if(!(e instanceof google_ads_googleads_v4_services_customer_client_link_service_pb.GetCustomerClientLinkRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetCustomerClientLinkRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetCustomerClientLinkRequest(e){return google_ads_googleads_v4_services_customer_client_link_service_pb.GetCustomerClientLinkRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateCustomerClientLinkRequest(e){if(!(e instanceof google_ads_googleads_v4_services_customer_client_link_service_pb.MutateCustomerClientLinkRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateCustomerClientLinkRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateCustomerClientLinkRequest(e){return google_ads_googleads_v4_services_customer_client_link_service_pb.MutateCustomerClientLinkRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateCustomerClientLinkResponse(e){if(!(e instanceof google_ads_googleads_v4_services_customer_client_link_service_pb.MutateCustomerClientLinkResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateCustomerClientLinkResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateCustomerClientLinkResponse(e){return google_ads_googleads_v4_services_customer_client_link_service_pb.MutateCustomerClientLinkResponse.deserializeBinary(new Uint8Array(e))}var CustomerClientLinkServiceService=exports.CustomerClientLinkServiceService={getCustomerClientLink:{path:"/google.ads.googleads.v4.services.CustomerClientLinkService/GetCustomerClientLink",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_customer_client_link_service_pb.GetCustomerClientLinkRequest,responseType:google_ads_googleads_v4_resources_customer_client_link_pb.CustomerClientLink,requestSerialize:serialize_google_ads_googleads_v4_services_GetCustomerClientLinkRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetCustomerClientLinkRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_CustomerClientLink,responseDeserialize:deserialize_google_ads_googleads_v4_resources_CustomerClientLink},mutateCustomerClientLink:{path:"/google.ads.googleads.v4.services.CustomerClientLinkService/MutateCustomerClientLink",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_customer_client_link_service_pb.MutateCustomerClientLinkRequest,responseType:google_ads_googleads_v4_services_customer_client_link_service_pb.MutateCustomerClientLinkResponse,requestSerialize:serialize_google_ads_googleads_v4_services_MutateCustomerClientLinkRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_MutateCustomerClientLinkRequest,responseSerialize:serialize_google_ads_googleads_v4_services_MutateCustomerClientLinkResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_MutateCustomerClientLinkResponse}};exports.CustomerClientLinkServiceClient=grpc.makeGenericClientConstructor(CustomerClientLinkServiceService);