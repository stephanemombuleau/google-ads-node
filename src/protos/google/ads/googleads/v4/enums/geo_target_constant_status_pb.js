var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.GeoTargetConstantStatus",null,global),proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.displayName="proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.toObject=function(o,e){var t={};return o&&(t.$jspbMessageInstance=e),t}),proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),t=new proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum;return proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.deserializeBinaryFromReader(t,e)},proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.GeoTargetConstantStatusEnum.GeoTargetConstantStatus={UNSPECIFIED:0,UNKNOWN:1,ENABLED:2,REMOVAL_PLANNED:3},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);