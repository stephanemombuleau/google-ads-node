var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb=require("../../../../../google/ads/googleads/v4/resources/keyword_plan_ad_group_keyword_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js");goog.object.extend(proto,google_protobuf_field_mask_pb);var google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.object.extend(proto,google_rpc_status_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.OperationCase",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse",null,global),proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.displayName="proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest"),proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.displayName="proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest"),proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation=function(e){jspb.Message.initialize(this,e,0,-1,null,proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.displayName="proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation"),proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.displayName="proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse"),proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.displayName="proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.toObject=function(e,o){var r={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest;return proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r)},proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetKeywordPlanAdGroupKeywordRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.toObject=function(e,o){var r={customerId:jspb.Message.getFieldWithDefault(o,1,""),operationsList:jspb.Message.toObjectList(o.getOperationsList(),proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.toObject,e),partialFailure:jspb.Message.getBooleanFieldWithDefault(o,3,!1),validateOnly:jspb.Message.getBooleanFieldWithDefault(o,4,!1)};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest;return proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setCustomerId(r);break;case 2:r=new proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation;o.readMessage(r,proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.deserializeBinaryFromReader),e.addOperations(r);break;case 3:r=o.readBool();e.setPartialFailure(r);break;case 4:r=o.readBool();e.setValidateOnly(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getCustomerId()).length&&o.writeString(1,r),0<(r=e.getOperationsList()).length&&o.writeRepeatedMessage(2,r,proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.serializeBinaryToWriter),(r=e.getPartialFailure())&&o.writeBool(3,r),(r=e.getValidateOnly())&&o.writeBool(4,r)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.setCustomerId=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation,2)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.setOperationsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.addOperations=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation,o)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.clearOperationsList=function(){return this.setOperationsList([])},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.getPartialFailure=function(){return jspb.Message.getBooleanFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.setPartialFailure=function(e){return jspb.Message.setProto3BooleanField(this,3,e)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.getValidateOnly=function(){return jspb.Message.getBooleanFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsRequest.prototype.setValidateOnly=function(e){return jspb.Message.setProto3BooleanField(this,4,e)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.toObject(e,this)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.toObject=function(e,o){var r,s={updateMask:(r=o.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(e,r),create:(r=o.getCreate())&&google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword.toObject(e,r),update:(r=o.getUpdate())&&google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword.toObject(e,r),remove:jspb.Message.getFieldWithDefault(o,3,"")};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation;return proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 4:var r=new google_protobuf_field_mask_pb.FieldMask;o.readMessage(r,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),e.setUpdateMask(r);break;case 1:r=new google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword;o.readMessage(r,google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword.deserializeBinaryFromReader),e.setCreate(r);break;case 2:r=new google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword;o.readMessage(r,google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword.deserializeBinaryFromReader),e.setUpdate(r);break;case 3:r=o.readString();e.setRemove(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.serializeBinaryToWriter=function(e,o){var r=void 0;null!=(r=e.getUpdateMask())&&o.writeMessage(4,r,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(r=e.getCreate())&&o.writeMessage(1,r,google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword.serializeBinaryToWriter),null!=(r=e.getUpdate())&&o.writeMessage(2,r,google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword.serializeBinaryToWriter),null!=(r=jspb.Message.getField(e,3))&&o.writeString(3,r)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.setUpdateMask=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.clearUpdateMask=function(){return this.setUpdateMask(void 0)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword,1)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.setCreate=function(e){return jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.clearCreate=function(){return this.setCreate(void 0)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword,2)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.setUpdate=function(e){return jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.clearUpdate=function(){return this.setUpdate(void 0)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.setRemove=function(e){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.oneofGroups_[0],e)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.clearRemove=function(){return jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v4.services.KeywordPlanAdGroupKeywordOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.toObject=function(e,o){var r,s={partialFailureError:(r=o.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(e,r),resultsList:jspb.Message.toObjectList(o.getResultsList(),proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.toObject,e)};return e&&(s.$jspbMessageInstance=o),s}),proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse;return proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 3:var r=new google_rpc_status_pb.Status;o.readMessage(r,google_rpc_status_pb.Status.deserializeBinaryFromReader),e.setPartialFailureError(r);break;case 2:r=new proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult;o.readMessage(r,proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.deserializeBinaryFromReader),e.addResults(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.serializeBinaryToWriter=function(e,o){var r=void 0;null!=(r=e.getPartialFailureError())&&o.writeMessage(3,r,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(r=e.getResultsList()).length&&o.writeRepeatedMessage(2,r,proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.serializeBinaryToWriter)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.prototype.setPartialFailureError=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.prototype.clearPartialFailureError=function(){return this.setPartialFailureError(void 0)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult,2)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.prototype.setResultsList=function(e){return jspb.Message.setRepeatedWrapperField(this,2,e)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.prototype.addResults=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,2,e,proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult,o)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.toObject(e,this)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.toObject=function(e,o){var r={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult;return proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r)},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.MutateKeywordPlanAdGroupKeywordResult.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);