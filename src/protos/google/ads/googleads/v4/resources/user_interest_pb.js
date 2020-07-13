var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_common_criterion_category_availability_pb=require("../../../../../google/ads/googleads/v4/common/criterion_category_availability_pb.js");goog.object.extend(proto,google_ads_googleads_v4_common_criterion_category_availability_pb);var google_ads_googleads_v4_enums_user_interest_taxonomy_type_pb=require("../../../../../google/ads/googleads/v4/enums/user_interest_taxonomy_type_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_user_interest_taxonomy_type_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.UserInterest",null,global),proto.google.ads.googleads.v4.resources.UserInterest=function(e){jspb.Message.initialize(this,e,0,-1,proto.google.ads.googleads.v4.resources.UserInterest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v4.resources.UserInterest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.UserInterest.displayName="proto.google.ads.googleads.v4.resources.UserInterest"),proto.google.ads.googleads.v4.resources.UserInterest.repeatedFields_=[7],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.UserInterest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.UserInterest.toObject(e,this)},proto.google.ads.googleads.v4.resources.UserInterest.toObject=function(e,o){var r,t={resourceName:jspb.Message.getFieldWithDefault(o,1,""),taxonomyType:jspb.Message.getFieldWithDefault(o,2,0),userInterestId:(r=o.getUserInterestId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),name:(r=o.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),userInterestParent:(r=o.getUserInterestParent())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),launchedToAll:(r=o.getLaunchedToAll())&&google_protobuf_wrappers_pb.BoolValue.toObject(e,r),availabilitiesList:jspb.Message.toObjectList(o.getAvailabilitiesList(),google_ads_googleads_v4_common_criterion_category_availability_pb.CriterionCategoryAvailability.toObject,e)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.resources.UserInterest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.UserInterest;return proto.google.ads.googleads.v4.resources.UserInterest.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.UserInterest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 2:r=o.readEnum();e.setTaxonomyType(r);break;case 3:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setUserInterestId(r);break;case 4:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setName(r);break;case 5:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setUserInterestParent(r);break;case 6:r=new google_protobuf_wrappers_pb.BoolValue;o.readMessage(r,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),e.setLaunchedToAll(r);break;case 7:r=new google_ads_googleads_v4_common_criterion_category_availability_pb.CriterionCategoryAvailability;o.readMessage(r,google_ads_googleads_v4_common_criterion_category_availability_pb.CriterionCategoryAvailability.deserializeBinaryFromReader),e.addAvailabilities(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.UserInterest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.UserInterest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.UserInterest.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),0!==(r=e.getTaxonomyType())&&o.writeEnum(2,r),null!=(r=e.getUserInterestId())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(r=e.getName())&&o.writeMessage(4,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getUserInterestParent())&&o.writeMessage(5,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getLaunchedToAll())&&o.writeMessage(6,r,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),0<(r=e.getAvailabilitiesList()).length&&o.writeRepeatedMessage(7,r,google_ads_googleads_v4_common_criterion_category_availability_pb.CriterionCategoryAvailability.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.UserInterest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.getTaxonomyType=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.setTaxonomyType=function(e){return jspb.Message.setProto3EnumField(this,2,e)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.getUserInterestId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.setUserInterestId=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.clearUserInterestId=function(){return this.setUserInterestId(void 0)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.hasUserInterestId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.setName=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.clearName=function(){return this.setName(void 0)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.getUserInterestParent=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.setUserInterestParent=function(e){return jspb.Message.setWrapperField(this,5,e)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.clearUserInterestParent=function(){return this.setUserInterestParent(void 0)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.hasUserInterestParent=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.getLaunchedToAll=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,6)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.setLaunchedToAll=function(e){return jspb.Message.setWrapperField(this,6,e)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.clearLaunchedToAll=function(){return this.setLaunchedToAll(void 0)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.hasLaunchedToAll=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.getAvailabilitiesList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v4_common_criterion_category_availability_pb.CriterionCategoryAvailability,7)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.setAvailabilitiesList=function(e){return jspb.Message.setRepeatedWrapperField(this,7,e)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.addAvailabilities=function(e,o){return jspb.Message.addToRepeatedWrapperField(this,7,e,proto.google.ads.googleads.v4.common.CriterionCategoryAvailability,o)},proto.google.ads.googleads.v4.resources.UserInterest.prototype.clearAvailabilitiesList=function(){return this.setAvailabilitiesList([])},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);