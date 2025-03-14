import draft04 from './drafts/draft-04.js'
import draft06 from './drafts/draft-06.js'
import draft07 from './drafts/draft-07.js'
import draft201909 from './drafts/draft-2019-09.js'
import draft202012 from './drafts/draft-2020-12.js'
import { hasOwn, isBoolean, clone, isSet } from '../helpers/utils.js'
import { getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a Validator instance.
 */
class Validator {
  constructor (config = {}) {
    this.refParser = config.refParser
    this.assertFormat = config.assertFormat ? config.assertFormat : false
    this.translator = config.translator ? config.translator : false
    this.draft = draft202012

    this.jsonSchemaDrafts = {
      'http://json-schema.org/draft-04/schema#': draft04,
      'http://json-schema.org/draft-06/schema#': draft06,
      'http://json-schema.org/draft-07/schema#': draft07,
      'https://json-schema.org/draft/2019-09/schema': draft201909,
      'https://json-schema.org/draft/2020-12/schema': draft202012
    }
  }

  /**
   * Validates a value against it's schema
   */
  getErrors (value, schema, key, path) {
    let schemaErrors = []
    const schemaOptionsMessages = getSchemaXOption(schema, 'messages')

    const schemaClone = clone(schema)

    if (isBoolean(schemaClone) && schemaClone === true) {
      return schemaErrors
    }

    if (isBoolean(schemaClone) && schemaClone === false) {
      return [{
        messages: isSet(schemaOptionsMessages) ? schemaOptionsMessages : ['invalid'],
        path: path
      }]
    }

    Object.keys(this.draft).forEach((constrain) => {
      if (hasOwn(schemaClone, constrain)) {
        const validator = this.draft[constrain]
        const validatorErrors = validator(this, value, schema, key, path)

        if (validatorErrors) {
          schemaErrors = [...schemaErrors, ...validatorErrors]
        }
      }
    })

    if (schemaErrors.length > 0 && schemaOptionsMessages) {
      schemaErrors = [
        {
          messages: schemaOptionsMessages,
          path: path
        }
      ]
    }

    return schemaErrors
  }
}

export default Validator
