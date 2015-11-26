if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var humor_app_1_0_1_schema = {
  "domainURI" : "http://vital.ai/ontology/humor-app",
  "name" : "humor-app-1.0.1",
  "parents" : [ "http://vital.ai/ontology/vital-nlp" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/humor-app#EchoIntentRequest",
    "parent" : "http://vital.ai/ontology/humor-app#EchoRequest",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/humor-app#EchoIntentRequest",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/humor-app#EchoIntentRequest",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/humor-app#EchoIntentRequest" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/humor-app#hasSessionId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#hasUserId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#isSessionNew" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/humor-app#EchoLaunchRequest",
    "parent" : "http://vital.ai/ontology/humor-app#EchoRequest",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/humor-app#EchoLaunchRequest",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/humor-app#EchoLaunchRequest",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/humor-app#EchoLaunchRequest" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/humor-app#hasSessionId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#hasUserId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#isSessionNew" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/humor-app#EchoRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/humor-app#EchoRequest",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/humor-app#EchoRequest",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/humor-app#EchoRequest" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/humor-app#hasSessionId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#hasUserId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#isSessionNew" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/humor-app#EchoResponse",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/humor-app#EchoResponse",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/humor-app#EchoResponse",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/humor-app#EchoResponse" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/humor-app#hasCardContent" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#hasCardTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#hasOutputSpeechText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#hasRepromptOutputSpeechText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#isShouldEndSession" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/humor-app#EchoSessionEndedRequest",
    "parent" : "http://vital.ai/ontology/humor-app#EchoRequest",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/humor-app#EchoSessionEndedRequest",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/humor-app#EchoSessionEndedRequest",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/humor-app#EchoSessionEndedRequest" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/humor-app#hasReason" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#hasSessionId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#hasUserId" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#isSessionNew" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/humor-app#EchoSlot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/humor-app#EchoSlot",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/humor-app#EchoSlot",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/humor-app#EchoSlot" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/humor-app#hasSlotType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/humor-app#hasValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/humor-app#Edge_hasEchoSlot",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/humor-app#Edge_hasEchoSlot",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/humor-app#Edge_hasEchoSlot",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/humor-app#EchoIntentRequest" ],
    "destinationDomains" : [ "http://vital.ai/ontology/humor-app#EchoSlot" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/humor-app#Edge_hasEchoSlot" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/humor-app#Joke",
    "parent" : "http://vital.ai/ontology/vital-nlp#Document",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/humor-app#Joke",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/humor-app#Joke",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/humor-app#Joke" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasDmozPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractedText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractedTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasLang" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSentimentScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSourceDomain" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasSourceName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasUrlRoot" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#isSentimentMixed" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/humor-app#hasCardContent",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoResponse" ],
    "shortName" : "cardContent",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/humor-app#hasCardTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoResponse" ],
    "shortName" : "cardTitle",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/humor-app#hasOutputSpeechText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoResponse" ],
    "shortName" : "outputSpeechText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/humor-app#hasReason",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoSessionEndedRequest" ],
    "shortName" : "reason",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/humor-app#hasRepromptOutputSpeechText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoResponse" ],
    "shortName" : "repromptOutputSpeechText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/humor-app#hasSessionId",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoRequest" ],
    "shortName" : "sessionId",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/humor-app#hasSlotType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoSlot" ],
    "shortName" : "slotType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/humor-app#hasUserId",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoRequest" ],
    "shortName" : "userId",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/humor-app#hasValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoSlot" ],
    "shortName" : "value",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/humor-app#isSessionNew",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoRequest" ],
    "shortName" : "sessionNew",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/humor-app#isShouldEndSession",
    "domainClassesURIs" : [ "http://vital.ai/ontology/humor-app#EchoResponse" ],
    "shortName" : "shouldEndSession",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(humor_app_1_0_1_schema);