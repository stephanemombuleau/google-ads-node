var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_enums_manager_link_status_pb=require("../../../../../google/ads/googleads/v4/enums/manager_link_status_pb.js");goog.object.extend(proto,google_ads_googleads_v4_enums_manager_link_status_pb);var google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.CustomerClientLink",null,global),proto.google.ads.googleads.v4.resources.CustomerClientLink=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.CustomerClientLink,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.CustomerClientLink.displayName="proto.google.ads.googleads.v4.resources.CustomerClientLink"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.toObject=function(e){return proto.google.ads.googleads.v4.resources.CustomerClientLink.toObject(e,this)},proto.google.ads.googleads.v4.resources.CustomerClientLink.toObject=function(e,o){var r,t={resourceName:jspb.Message.getFieldWithDefault(o,1,""),clientCustomer:(r=o.getClientCustomer())&&google_protobuf_wrappers_pb.StringValue.toObject(e,r),managerLinkId:(r=o.getManagerLinkId())&&google_protobuf_wrappers_pb.Int64Value.toObject(e,r),status:jspb.Message.getFieldWithDefault(o,5,0),hidden:(r=o.getHidden())&&google_protobuf_wrappers_pb.BoolValue.toObject(e,r)};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.resources.CustomerClientLink.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),r=new proto.google.ads.googleads.v4.resources.CustomerClientLink;return proto.google.ads.googleads.v4.resources.CustomerClientLink.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.resources.CustomerClientLink.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var r=o.readString();e.setResourceName(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;o.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),e.setClientCustomer(r);break;case 4:r=new google_protobuf_wrappers_pb.Int64Value;o.readMessage(r,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),e.setManagerLinkId(r);break;case 5:r=o.readEnum();e.setStatus(r);break;case 6:r=new google_protobuf_wrappers_pb.BoolValue;o.readMessage(r,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),e.setHidden(r);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.CustomerClientLink.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.resources.CustomerClientLink.serializeBinaryToWriter=function(e,o){var r=void 0;0<(r=e.getResourceName()).length&&o.writeString(1,r),null!=(r=e.getClientCustomer())&&o.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=e.getManagerLinkId())&&o.writeMessage(4,r,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(r=e.getStatus())&&o.writeEnum(5,r),null!=(r=e.getHidden())&&o.writeMessage(6,r,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.getClientCustomer=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.setClientCustomer=function(e){return jspb.Message.setWrapperField(this,3,e)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.clearClientCustomer=function(){return this.setClientCustomer(void 0)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.hasClientCustomer=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.getManagerLinkId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,4)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.setManagerLinkId=function(e){return jspb.Message.setWrapperField(this,4,e)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.clearManagerLinkId=function(){return this.setManagerLinkId(void 0)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.hasManagerLinkId=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.setStatus=function(e){return jspb.Message.setProto3EnumField(this,5,e)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.getHidden=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,6)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.setHidden=function(e){return jspb.Message.setWrapperField(this,6,e)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.clearHidden=function(){return this.setHidden(void 0)},proto.google.ads.googleads.v4.resources.CustomerClientLink.prototype.hasHidden=function(){return null!=jspb.Message.getField(this,6)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);