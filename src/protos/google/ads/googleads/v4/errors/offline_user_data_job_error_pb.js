var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.OfflineUserDataJobError",null,global),proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.displayName="proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum;return proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.OfflineUserDataJobErrorEnum.OfflineUserDataJobError={UNSPECIFIED:0,UNKNOWN:1,INVALID_USER_LIST_ID:3,INVALID_USER_LIST_TYPE:4,NOT_WHITELISTED_FOR_USER_ID:5,INCOMPATIBLE_UPLOAD_KEY_TYPE:6,MISSING_USER_IDENTIFIER:7,INVALID_MOBILE_ID_FORMAT:8,TOO_MANY_USER_IDENTIFIERS:9,NOT_WHITELISTED_FOR_STORE_SALES_DIRECT:10,NOT_WHITELISTED_FOR_UNIFIED_STORE_SALES:28,INVALID_PARTNER_ID:11,INVALID_ENCODING:12,INVALID_COUNTRY_CODE:13,INCOMPATIBLE_USER_IDENTIFIER:14,FUTURE_TRANSACTION_TIME:15,INVALID_CONVERSION_ACTION:16,MOBILE_ID_NOT_SUPPORTED:17,INVALID_OPERATION_ORDER:18,CONFLICTING_OPERATION:19,EXTERNAL_UPDATE_ID_ALREADY_EXISTS:21,JOB_ALREADY_STARTED:22,REMOVE_NOT_SUPPORTED:23,REMOVE_ALL_NOT_SUPPORTED:24,INVALID_SHA256_FORMAT:25,CUSTOM_KEY_DISABLED:26,CUSTOM_KEY_NOT_PREDEFINED:27,CUSTOM_KEY_NOT_SET:29,CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS:30},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);