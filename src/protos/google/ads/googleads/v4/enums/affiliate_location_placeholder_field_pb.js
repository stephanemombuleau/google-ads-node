var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderField",null,global),proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.toObject=function(o,e){var l={};return o&&(l.$jspbMessageInstance=e),l}),proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),l=new proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum;return proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.deserializeBinaryFromReader(l,e)},proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,BUSINESS_NAME:2,ADDRESS_LINE_1:3,ADDRESS_LINE_2:4,CITY:5,PROVINCE:6,POSTAL_CODE:7,COUNTRY_CODE:8,PHONE_NUMBER:9,LANGUAGE_CODE:10,CHAIN_ID:11,CHAIN_NAME:12},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);