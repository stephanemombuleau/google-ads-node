var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderField",null,global),proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum;return proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,BUSINESS_NAME:2,ADDRESS_LINE_1:3,ADDRESS_LINE_2:4,CITY:5,PROVINCE:6,POSTAL_CODE:7,COUNTRY_CODE:8,PHONE_NUMBER:9,LANGUAGE_CODE:10,CHAIN_ID:11,CHAIN_NAME:12},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);