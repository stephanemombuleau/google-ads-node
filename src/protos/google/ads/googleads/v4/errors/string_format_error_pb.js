var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.StringFormatErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.StringFormatError",null,global),proto.google.ads.googleads.v4.errors.StringFormatErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.StringFormatErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.displayName="proto.google.ads.googleads.v4.errors.StringFormatErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.StringFormatErrorEnum;return proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.StringFormatErrorEnum.StringFormatError={UNSPECIFIED:0,UNKNOWN:1,ILLEGAL_CHARS:2,INVALID_FORMAT:3},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);