var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.CampaignFeedError",null,global),proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.displayName="proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum;return proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.CampaignFeedErrorEnum.CampaignFeedError={UNSPECIFIED:0,UNKNOWN:1,FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE:2,CANNOT_CREATE_FOR_REMOVED_FEED:4,CANNOT_CREATE_ALREADY_EXISTING_CAMPAIGN_FEED:5,CANNOT_MODIFY_REMOVED_CAMPAIGN_FEED:6,INVALID_PLACEHOLDER_TYPE:7,MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE:8,NO_EXISTING_LOCATION_CUSTOMER_FEED:9},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);