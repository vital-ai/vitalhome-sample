if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var twentynews_1_0_1_schema = [ {
  "id" : "http://vital.ai/ontology/twentynews#Message",
  "parent" : "http://vital.ai/ontology/vital-nlp#Document",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/twentynews#Message",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/twentynews#Message",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/twentynews#Message" ]
    },
    "types" : {
      "type" : "array",
      "minItems" : 1,
      "items" : {
        "type" : "string"
      },
      "uniqueItems" : true
    },
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "body" : {
      "type" : "string"
    },
    "category" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "dmozPath" : {
      "type" : "string"
    },
    "extractedText" : {
      "type" : "string"
    },
    "extractedTitle" : {
      "type" : "string"
    },
    "lang" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "publicationDate" : {
      "type" : "number"
    },
    "sentimentMixed" : {
      "type" : "boolean"
    },
    "sentimentScore" : {
      "type" : "number"
    },
    "sourceDomain" : {
      "type" : "string"
    },
    "sourceName" : {
      "type" : "string"
    },
    "subject" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "title" : {
      "type" : "string"
    },
    "url" : {
      "type" : "string"
    },
    "urlRoot" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
} ];

 VITAL_JSON_SCHEMAS.push(twentynews_1_0_1_schema);