var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v4_resources_third_party_app_analytics_link_pb=require("../../../../../google/ads/googleads/v4/resources/third_party_app_analytics_link_pb.js");goog.object.extend(proto,google_ads_googleads_v4_resources_third_party_app_analytics_link_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_api_client_pb=require("../../../../../google/api/client_pb.js");goog.object.extend(proto,google_api_client_pb),goog.exportSymbol("proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest",null,global),proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest=function(e){jspb.Message.initialize(this,e,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.displayName="proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.prototype.toObject=function(e){return proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.toObject(e,this)},proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.toObject=function(e,o){var t={resourceName:jspb.Message.getFieldWithDefault(o,1,"")};return e&&(t.$jspbMessageInstance=o),t}),proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.deserializeBinary=function(e){var o=new jspb.BinaryReader(e),t=new proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest;return proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.deserializeBinaryFromReader(t,o)},proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.deserializeBinaryFromReader=function(e,o){for(;o.nextField()&&!o.isEndGroup();){switch(o.getFieldNumber()){case 1:var t=o.readString();e.setResourceName(t);break;default:o.skipField()}}return e},proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.prototype.serializeBinary=function(){var e=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.serializeBinaryToWriter=function(e,o){var t=void 0;0<(t=e.getResourceName()).length&&o.writeString(1,t)},proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.services.GetThirdPartyAppAnalyticsLinkRequest.prototype.setResourceName=function(e){return jspb.Message.setProto3StringField(this,1,e)},goog.object.extend(exports,proto.google.ads.googleads.v4.services);