var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.UserListCrmDataSourceType",null,global),proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.displayName="proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.toObject=function(o,e){var r={};return o&&(r.$jspbMessageInstance=e),r}),proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),r=new proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum;return proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.deserializeBinaryFromReader(r,e)},proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.UserListCrmDataSourceTypeEnum.UserListCrmDataSourceType={UNSPECIFIED:0,UNKNOWN:1,FIRST_PARTY:2,THIRD_PARTY_CREDIT_BUREAU:3,THIRD_PARTY_VOTER_FILE:4},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);