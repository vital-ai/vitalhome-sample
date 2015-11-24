if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var humor_app_1_0_1_schema = [ {
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "degree" : {
      "type" : "number"
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
    "sessionId" : {
      "type" : "string"
    },
    "sessionNew" : {
      "type" : "boolean"
    },
    "timestamp" : {
      "type" : "number"
    },
    "userId" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "degree" : {
      "type" : "number"
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
    "sessionId" : {
      "type" : "string"
    },
    "sessionNew" : {
      "type" : "boolean"
    },
    "timestamp" : {
      "type" : "number"
    },
    "userId" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "degree" : {
      "type" : "number"
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
    "sessionId" : {
      "type" : "string"
    },
    "sessionNew" : {
      "type" : "boolean"
    },
    "timestamp" : {
      "type" : "number"
    },
    "userId" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "cardContent" : {
      "type" : "string"
    },
    "cardTitle" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "outputSpeechText" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "repromptOutputSpeechText" : {
      "type" : "string"
    },
    "shouldEndSession" : {
      "type" : "boolean"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "degree" : {
      "type" : "number"
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
    "reason" : {
      "type" : "string"
    },
    "sessionId" : {
      "type" : "string"
    },
    "sessionNew" : {
      "type" : "boolean"
    },
    "timestamp" : {
      "type" : "number"
    },
    "userId" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "degree" : {
      "type" : "number"
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
    "slotType" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "value" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "body" : {
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

 VITAL_JSON_SCHEMAS.push(humor_app_1_0_1_schema);