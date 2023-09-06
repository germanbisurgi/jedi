const $RefParser = require("@apidevtools/json-schema-ref-parser")

const mySchema = {
  "anyOf": [
    {
      "$ref": "#/$defs/objectSchema"
    },
    {
      "title": "schema (boolean)",
      "type": "boolean",
      "options": {
        "switcherTitle": "schema (boolean)"
      }
    }
  ],
  "$defs": {
    "schema": {
      "anyOf": [
        {
          "$ref": "#/$defs/objectSchema"
        },
        {
          "title": "schema (boolean)",
          "type": "boolean",
          "options": {
            "switcherTitle": "schema (boolean)"
          }
        }
      ]
    },
    "booleanSchema": {
      "title": "schema (boolean)",
      "type": "boolean",
      "options": {
        "switcherTitle": "schema (boolean)"
      }
    },
    "objectSchema": {
      "format": "nav",
      "title": "schema (object)",
      "type": "object",
      "properties": {
        "additionalProperties": {
          "type": "boolean"
        },
        "type": {
          "type": "string",
          "enum": [
            "string",
            "integer",
            "number",
            "boolean",
            "array",
            "object",
            "null",
            "any"
          ],
          "default": "string"
        }
      },
      "additionalProperties": {
        "$ref": "#/$defs/schema"
      },
      "options": {
        "nav": {
          "type": "tabs",
          "cols": 12,
          "stacked": false
        },
        "editableProperties": true,
        "switcherTitle": "schema (object)",
        "deactivateNonRequired": true
      }
    }
  }
}



const init = async () => {
  try {
    let schema = await $RefParser.dereference(mySchema, {
      dereference: {
        circular: 'ignore'
      }
    })
    console.log(JSON.stringify(schema, null, 2))
  } catch (err) {
    console.error(err)
  }
}

init()
