var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod",null,global),proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.displayName="proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.prototype.toObject=function(e){return proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.toObject(e,this)},proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.toObject=function(e,o){var g={};return e&&(g.$jspbMessageInstance=o),g}),proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),g=new proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum;return proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.deserializeBinaryFromReader(g,o)},proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return e},proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.serializeBinaryToWriter=function(e,o){},proto.google.ads.googleads.v4.enums.BudgetDeliveryMethodEnum.BudgetDeliveryMethod={UNSPECIFIED:0,UNKNOWN:1,STANDARD:2,ACCELERATED:3},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);