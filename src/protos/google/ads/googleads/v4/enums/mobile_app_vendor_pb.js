var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.MobileAppVendorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.MobileAppVendor",null,global),proto.google.ads.googleads.v4.enums.MobileAppVendorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.MobileAppVendorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.displayName="proto.google.ads.googleads.v4.enums.MobileAppVendorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.toObject=function(o,e){var n={};return o&&(n.$jspbMessageInstance=e),n}),proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),n=new proto.google.ads.googleads.v4.enums.MobileAppVendorEnum;return proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.deserializeBinaryFromReader(n,e)},proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){e.getFieldNumber();e.skipField()}return o},proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.serializeBinaryToWriter=function(o,e){},proto.google.ads.googleads.v4.enums.MobileAppVendorEnum.MobileAppVendor={UNSPECIFIED:0,UNKNOWN:1,APPLE_APP_STORE:2,GOOGLE_APP_STORE:3},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);