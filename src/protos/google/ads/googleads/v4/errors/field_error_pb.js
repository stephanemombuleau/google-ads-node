var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.FieldErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.FieldErrorEnum.FieldError",null,global),proto.google.ads.googleads.v4.errors.FieldErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.FieldErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.FieldErrorEnum.displayName="proto.google.ads.googleads.v4.errors.FieldErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.FieldErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.FieldErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.FieldErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.FieldErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.FieldErrorEnum;return proto.google.ads.googleads.v4.errors.FieldErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.FieldErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.FieldErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.FieldErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.FieldErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.FieldErrorEnum.FieldError={UNSPECIFIED:0,UNKNOWN:1,REQUIRED:2,IMMUTABLE_FIELD:3,INVALID_VALUE:4,VALUE_MUST_BE_UNSET:5,REQUIRED_NONEMPTY_LIST:6,FIELD_CANNOT_BE_CLEARED:7,BLACKLISTED_VALUE:8},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);