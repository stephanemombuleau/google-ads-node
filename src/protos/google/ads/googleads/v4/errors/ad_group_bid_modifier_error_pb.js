var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.AdGroupBidModifierError",null,global),proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.displayName="proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum;return proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.AdGroupBidModifierErrorEnum.AdGroupBidModifierError={UNSPECIFIED:0,UNKNOWN:1,CRITERION_ID_NOT_SUPPORTED:2,CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER:3},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);