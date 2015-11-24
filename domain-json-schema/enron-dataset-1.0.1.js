if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var enron_dataset_1_0_1_schema = [ {
  "id" : "http://vital.ai/ontology/enron-dataset#Edge_hasBCCRecipient",
  "parent" : "http://vital.ai/ontology/enron-dataset#Edge_hasRecipient",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/enron-dataset#Edge_hasBCCRecipient",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/enron-dataset#Edge_hasBCCRecipient",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/enron-dataset#EnronEmail" ],
  "destinationDomains" : [ "http://vital.ai/ontology/enron-dataset#EnronPerson" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/enron-dataset#Edge_hasBCCRecipient" ]
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
  "id" : "http://vital.ai/ontology/enron-dataset#Edge_hasCCRecipient",
  "parent" : "http://vital.ai/ontology/enron-dataset#Edge_hasRecipient",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/enron-dataset#Edge_hasCCRecipient",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/enron-dataset#Edge_hasCCRecipient",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/enron-dataset#EnronEmail" ],
  "destinationDomains" : [ "http://vital.ai/ontology/enron-dataset#EnronPerson" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/enron-dataset#Edge_hasCCRecipient" ]
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
  "id" : "http://vital.ai/ontology/enron-dataset#Edge_hasDirectRecipient",
  "parent" : "http://vital.ai/ontology/enron-dataset#Edge_hasRecipient",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/enron-dataset#Edge_hasDirectRecipient",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/enron-dataset#Edge_hasDirectRecipient",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/enron-dataset#EnronEmail" ],
  "destinationDomains" : [ "http://vital.ai/ontology/enron-dataset#EnronPerson" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/enron-dataset#Edge_hasDirectRecipient" ]
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
  "id" : "http://vital.ai/ontology/enron-dataset#Edge_hasRecipient",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/enron-dataset#Edge_hasRecipient",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/enron-dataset#Edge_hasRecipient",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/enron-dataset#EnronEmail" ],
  "destinationDomains" : [ "http://vital.ai/ontology/enron-dataset#EnronPerson" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/enron-dataset#Edge_hasRecipient" ]
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
  "id" : "http://vital.ai/ontology/enron-dataset#Edge_hasSender",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/enron-dataset#Edge_hasSender",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/enron-dataset#Edge_hasSender",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/enron-dataset#EnronEmail" ],
  "destinationDomains" : [ "http://vital.ai/ontology/enron-dataset#EnronPerson" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/enron-dataset#Edge_hasSender" ]
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
  "id" : "http://vital.ai/ontology/enron-dataset#EnronEmail",
  "parent" : "http://vital.ai/ontology/vital-nlp#Document",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/enron-dataset#EnronEmail",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/enron-dataset#EnronEmail",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/enron-dataset#EnronEmail" ]
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
    "emailSubject" : {
      "type" : "string"
    },
    "extractedText" : {
      "type" : "string"
    },
    "extractedTitle" : {
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
}, {
  "id" : "http://vital.ai/ontology/enron-dataset#EnronPerson",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/enron-dataset#EnronPerson",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/enron-dataset#EnronPerson",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/enron-dataset#EnronPerson" ]
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
    "emailAddress" : {
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
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
} ];

 VITAL_JSON_SCHEMAS.push(enron_dataset_1_0_1_schema);