"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_batch_job_service_pb=require("../../../../../google/ads/googleads/v4/services/batch_job_service_pb.js"),google_ads_googleads_v4_resources_batch_job_pb=require("../../../../../google/ads/googleads/v4/resources/batch_job_pb.js"),google_ads_googleads_v4_services_google_ads_service_pb=require("../../../../../google/ads/googleads/v4/services/google_ads_service_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_longrunning_operations_pb=require("../../../../../google/longrunning/operations_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v4_resources_BatchJob(e){if(!(e instanceof google_ads_googleads_v4_resources_batch_job_pb.BatchJob))throw new Error("Expected argument of type google.ads.googleads.v4.resources.BatchJob");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_BatchJob(e){return google_ads_googleads_v4_resources_batch_job_pb.BatchJob.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_AddBatchJobOperationsRequest(e){if(!(e instanceof google_ads_googleads_v4_services_batch_job_service_pb.AddBatchJobOperationsRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.AddBatchJobOperationsRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_AddBatchJobOperationsRequest(e){return google_ads_googleads_v4_services_batch_job_service_pb.AddBatchJobOperationsRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_AddBatchJobOperationsResponse(e){if(!(e instanceof google_ads_googleads_v4_services_batch_job_service_pb.AddBatchJobOperationsResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.AddBatchJobOperationsResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_AddBatchJobOperationsResponse(e){return google_ads_googleads_v4_services_batch_job_service_pb.AddBatchJobOperationsResponse.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetBatchJobRequest(e){if(!(e instanceof google_ads_googleads_v4_services_batch_job_service_pb.GetBatchJobRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetBatchJobRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetBatchJobRequest(e){return google_ads_googleads_v4_services_batch_job_service_pb.GetBatchJobRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_ListBatchJobResultsRequest(e){if(!(e instanceof google_ads_googleads_v4_services_batch_job_service_pb.ListBatchJobResultsRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.ListBatchJobResultsRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_ListBatchJobResultsRequest(e){return google_ads_googleads_v4_services_batch_job_service_pb.ListBatchJobResultsRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_ListBatchJobResultsResponse(e){if(!(e instanceof google_ads_googleads_v4_services_batch_job_service_pb.ListBatchJobResultsResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.ListBatchJobResultsResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_ListBatchJobResultsResponse(e){return google_ads_googleads_v4_services_batch_job_service_pb.ListBatchJobResultsResponse.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateBatchJobRequest(e){if(!(e instanceof google_ads_googleads_v4_services_batch_job_service_pb.MutateBatchJobRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateBatchJobRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateBatchJobRequest(e){return google_ads_googleads_v4_services_batch_job_service_pb.MutateBatchJobRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_MutateBatchJobResponse(e){if(!(e instanceof google_ads_googleads_v4_services_batch_job_service_pb.MutateBatchJobResponse))throw new Error("Expected argument of type google.ads.googleads.v4.services.MutateBatchJobResponse");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_MutateBatchJobResponse(e){return google_ads_googleads_v4_services_batch_job_service_pb.MutateBatchJobResponse.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_RunBatchJobRequest(e){if(!(e instanceof google_ads_googleads_v4_services_batch_job_service_pb.RunBatchJobRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.RunBatchJobRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_RunBatchJobRequest(e){return google_ads_googleads_v4_services_batch_job_service_pb.RunBatchJobRequest.deserializeBinary(new Uint8Array(e))}function serialize_google_longrunning_Operation(e){if(!(e instanceof google_longrunning_operations_pb.Operation))throw new Error("Expected argument of type google.longrunning.Operation");return Buffer.from(e.serializeBinary())}function deserialize_google_longrunning_Operation(e){return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(e))}var BatchJobServiceService=exports.BatchJobServiceService={mutateBatchJob:{path:"/google.ads.googleads.v4.services.BatchJobService/MutateBatchJob",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_batch_job_service_pb.MutateBatchJobRequest,responseType:google_ads_googleads_v4_services_batch_job_service_pb.MutateBatchJobResponse,requestSerialize:serialize_google_ads_googleads_v4_services_MutateBatchJobRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_MutateBatchJobRequest,responseSerialize:serialize_google_ads_googleads_v4_services_MutateBatchJobResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_MutateBatchJobResponse},getBatchJob:{path:"/google.ads.googleads.v4.services.BatchJobService/GetBatchJob",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_batch_job_service_pb.GetBatchJobRequest,responseType:google_ads_googleads_v4_resources_batch_job_pb.BatchJob,requestSerialize:serialize_google_ads_googleads_v4_services_GetBatchJobRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetBatchJobRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_BatchJob,responseDeserialize:deserialize_google_ads_googleads_v4_resources_BatchJob},listBatchJobResults:{path:"/google.ads.googleads.v4.services.BatchJobService/ListBatchJobResults",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_batch_job_service_pb.ListBatchJobResultsRequest,responseType:google_ads_googleads_v4_services_batch_job_service_pb.ListBatchJobResultsResponse,requestSerialize:serialize_google_ads_googleads_v4_services_ListBatchJobResultsRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_ListBatchJobResultsRequest,responseSerialize:serialize_google_ads_googleads_v4_services_ListBatchJobResultsResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_ListBatchJobResultsResponse},runBatchJob:{path:"/google.ads.googleads.v4.services.BatchJobService/RunBatchJob",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_batch_job_service_pb.RunBatchJobRequest,responseType:google_longrunning_operations_pb.Operation,requestSerialize:serialize_google_ads_googleads_v4_services_RunBatchJobRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_RunBatchJobRequest,responseSerialize:serialize_google_longrunning_Operation,responseDeserialize:deserialize_google_longrunning_Operation},addBatchJobOperations:{path:"/google.ads.googleads.v4.services.BatchJobService/AddBatchJobOperations",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_batch_job_service_pb.AddBatchJobOperationsRequest,responseType:google_ads_googleads_v4_services_batch_job_service_pb.AddBatchJobOperationsResponse,requestSerialize:serialize_google_ads_googleads_v4_services_AddBatchJobOperationsRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_AddBatchJobOperationsRequest,responseSerialize:serialize_google_ads_googleads_v4_services_AddBatchJobOperationsResponse,responseDeserialize:deserialize_google_ads_googleads_v4_services_AddBatchJobOperationsResponse}};exports.BatchJobServiceClient=grpc.makeGenericClientConstructor(BatchJobServiceService);