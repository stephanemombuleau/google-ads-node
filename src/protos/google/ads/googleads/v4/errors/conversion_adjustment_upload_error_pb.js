var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadError",null,global),proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.displayName="proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum;return proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadError={UNSPECIFIED:0,UNKNOWN:1,TOO_RECENT_CONVERSION_ACTION:2,INVALID_CONVERSION_ACTION:3,CONVERSION_ALREADY_RETRACTED:4,CONVERSION_NOT_FOUND:5,CONVERSION_EXPIRED:6,ADJUSTMENT_PRECEDES_CONVERSION:7,MORE_RECENT_RESTATEMENT_FOUND:8,TOO_RECENT_CONVERSION:9,CANNOT_RESTATE_CONVERSION_ACTION_THAT_ALWAYS_USES_DEFAULT_CONVERSION_VALUE:10,TOO_MANY_ADJUSTMENTS_IN_REQUEST:11,TOO_MANY_ADJUSTMENTS:12},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);