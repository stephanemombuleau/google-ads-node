var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.AccessInvitationError",null,global),proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.displayName="proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum;return proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.AccessInvitationErrorEnum.AccessInvitationError={UNSPECIFIED:0,UNKNOWN:1,INVALID_EMAIL_ADDRESS:2,EMAIL_ADDRESS_ALREADY_HAS_ACCESS:3},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);