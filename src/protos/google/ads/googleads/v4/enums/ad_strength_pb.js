var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AdStrengthEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AdStrengthEnum.AdStrength",null,global),proto.google.ads.googleads.v4.enums.AdStrengthEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.AdStrengthEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.AdStrengthEnum.displayName="proto.google.ads.googleads.v4.enums.AdStrengthEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.AdStrengthEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.AdStrengthEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.AdStrengthEnum.toObject=function(o,e){var g={};return o&&(g.$jspbMessageInstance=e),g}),proto.google.ads.googleads.v4.enums.AdStrengthEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),g=new proto.google.ads.googleads.v4.enums.AdStrengthEnum;return proto.google.ads.googleads.v4.enums.AdStrengthEnum.deserializeBinaryFromReader(g,e)},proto.google.ads.googleads.v4.enums.AdStrengthEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.AdStrengthEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.AdStrengthEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.AdStrengthEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.AdStrengthEnum.AdStrength={UNSPECIFIED:0,UNKNOWN:1,PENDING:2,NO_ADS:3,POOR:4,AVERAGE:5,GOOD:6,EXCELLENT:7},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);