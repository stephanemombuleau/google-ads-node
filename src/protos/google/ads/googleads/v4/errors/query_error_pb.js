var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.QueryErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.QueryErrorEnum.QueryError",null,global),proto.google.ads.googleads.v4.errors.QueryErrorEnum=function(E){jspb.Message.initialize(this,E,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.QueryErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.QueryErrorEnum.displayName="proto.google.ads.googleads.v4.errors.QueryErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.QueryErrorEnum.prototype.toObject=function(E){return proto.google.ads.googleads.v4.errors.QueryErrorEnum.toObject(E,this)},proto.google.ads.googleads.v4.errors.QueryErrorEnum.toObject=function(E,o){var r={};return E&&(r.$jspbMessageInstance=o),r}),proto.google.ads.googleads.v4.errors.QueryErrorEnum.deserializeBinary=function(E){var o=new jspb.BinaryReader(E),r=new proto.google.ads.googleads.v4.errors.QueryErrorEnum;return proto.google.ads.googleads.v4.errors.QueryErrorEnum.deserializeBinaryFromReader(r,o)},proto.google.ads.googleads.v4.errors.QueryErrorEnum.deserializeBinaryFromReader=function(E,o){for(;o.nextField()&&!o.isEndGroup();){o.getFieldNumber();o.skipField()}return E},proto.google.ads.googleads.v4.errors.QueryErrorEnum.prototype.serializeBinary=function(){var E=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.QueryErrorEnum.serializeBinaryToWriter(this,E),E.getResultBuffer()},proto.google.ads.googleads.v4.errors.QueryErrorEnum.serializeBinaryToWriter=function(E,o){},proto.google.ads.googleads.v4.errors.QueryErrorEnum.QueryError={UNSPECIFIED:0,UNKNOWN:1,QUERY_ERROR:50,BAD_ENUM_CONSTANT:18,BAD_ESCAPE_SEQUENCE:7,BAD_FIELD_NAME:12,BAD_LIMIT_VALUE:15,BAD_NUMBER:5,BAD_OPERATOR:3,BAD_PARAMETER_NAME:61,BAD_PARAMETER_VALUE:62,BAD_RESOURCE_TYPE_IN_FROM_CLAUSE:45,BAD_SYMBOL:2,BAD_VALUE:4,DATE_RANGE_TOO_WIDE:36,DATE_RANGE_TOO_NARROW:60,EXPECTED_AND:30,EXPECTED_BY:14,EXPECTED_DIMENSION_FIELD_IN_SELECT_CLAUSE:37,EXPECTED_FILTERS_ON_DATE_RANGE:55,EXPECTED_FROM:44,EXPECTED_LIST:41,EXPECTED_REFERENCED_FIELD_IN_SELECT_CLAUSE:16,EXPECTED_SELECT:13,EXPECTED_SINGLE_VALUE:42,EXPECTED_VALUE_WITH_BETWEEN_OPERATOR:29,INVALID_DATE_FORMAT:38,INVALID_STRING_VALUE:57,INVALID_VALUE_WITH_BETWEEN_OPERATOR:26,INVALID_VALUE_WITH_DURING_OPERATOR:22,INVALID_VALUE_WITH_LIKE_OPERATOR:56,OPERATOR_FIELD_MISMATCH:35,PROHIBITED_EMPTY_LIST_IN_CONDITION:28,PROHIBITED_ENUM_CONSTANT:54,PROHIBITED_FIELD_COMBINATION_IN_SELECT_CLAUSE:31,PROHIBITED_FIELD_IN_ORDER_BY_CLAUSE:40,PROHIBITED_FIELD_IN_SELECT_CLAUSE:23,PROHIBITED_FIELD_IN_WHERE_CLAUSE:24,PROHIBITED_RESOURCE_TYPE_IN_FROM_CLAUSE:43,PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE:48,PROHIBITED_RESOURCE_TYPE_IN_WHERE_CLAUSE:58,PROHIBITED_METRIC_IN_SELECT_OR_WHERE_CLAUSE:49,PROHIBITED_SEGMENT_IN_SELECT_OR_WHERE_CLAUSE:51,PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE:53,LIMIT_VALUE_TOO_LOW:25,PROHIBITED_NEWLINE_IN_STRING:8,PROHIBITED_VALUE_COMBINATION_IN_LIST:10,PROHIBITED_VALUE_COMBINATION_WITH_BETWEEN_OPERATOR:21,STRING_NOT_TERMINATED:6,TOO_MANY_SEGMENTS:34,UNEXPECTED_END_OF_QUERY:9,UNEXPECTED_FROM_CLAUSE:47,UNRECOGNIZED_FIELD:32,UNEXPECTED_INPUT:11,REQUESTED_METRICS_FOR_MANAGER:59},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);