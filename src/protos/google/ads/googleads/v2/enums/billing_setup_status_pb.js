var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.BillingSetupStatus",null,global),proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.displayName="proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum;return proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.BillingSetupStatusEnum.BillingSetupStatus={UNSPECIFIED:0,UNKNOWN:1,PENDING:2,APPROVED_HELD:3,APPROVED:4,CANCELLED:5},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);