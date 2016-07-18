if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var whiskies_1_0_1_schema = {
  "domainURI" : "http://vital.ai/ontology/whiskies",
  "name" : "whiskies-1.0.1",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/whiskies#Whisky",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/whiskies#Whisky",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/whiskies#Whisky",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/whiskies#Whisky" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
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
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/whiskies#hasBody" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasClusterDistance" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasClusterID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasFloral" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasFruity" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasHoney" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasMalty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasMedicinal" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasNutty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasPostcode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/whiskies#hasSmoky" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasSpicy" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasSweetness" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasTobacco" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/whiskies#hasWiney" : {
        "type" : "number"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/whiskies#WhiskyPreferenceFact",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/whiskies#WhiskyPreferenceFact",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/whiskies#WhiskyPreferenceFact",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/whiskies#WhiskyPreferenceFact" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#isEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/whiskies#hasWhiskyURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/whiskies#isLiked" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/whiskies#WhiskyRecommendedFact",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/whiskies#WhiskyRecommendedFact",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/whiskies#WhiskyRecommendedFact",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/whiskies#WhiskyRecommendedFact" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#isEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/whiskies#hasWhiskyURI" : {
        "type" : "string"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/whiskies#hasBody",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "body",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasClusterDistance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "clusterDistance",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasClusterID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "clusterID",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasFloral",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "floral",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasFruity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "fruity",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasHoney",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "honey",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "latitude",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "longitude",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasMalty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "malty",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasMedicinal",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "medicinal",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasNutty",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "nutty",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasPostcode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "postcode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasSmoky",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "smoky",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasSpicy",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "spicy",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasSweetness",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "sweetness",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasTobacco",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "tobacco",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasWhiskyURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#WhiskyPreferenceFact", "http://vital.ai/ontology/whiskies#WhiskyRecommendedFact" ],
    "shortName" : "whiskyURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#hasWiney",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#Whisky" ],
    "shortName" : "winey",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/whiskies#isLiked",
    "domainClassesURIs" : [ "http://vital.ai/ontology/whiskies#WhiskyPreferenceFact" ],
    "shortName" : "liked",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(whiskies_1_0_1_schema);