import draft from './drafts/draft-2020-12'
import { hasOwn, isBoolean } from '../utils'

/**
 * Represents a Validator instance.
 */
class Validator {
  constructor () {
    this.draft = draft

    this.jsonSchemaDrafts = [
      'http://json-schema.org/draft-04/schema#',
      'http://json-schema.org/draft-06/schema#',
      'http://json-schema.org/draft-07/schema#',
      'https://json-schema.org/draft/2019-09/schema',
      'https://json-schema.org/draft/2020-12/schema'
    ]
  }

  /**
   * Validates a value against it's schema
   */
  getErrors (value, schema, key, path) {
    let schemaErrors = []

    const schemaClone = schema.clone()

    if (isBoolean(schemaClone) && schemaClone === true) {
      return schemaErrors
    }

    if (isBoolean(schemaClone) && schemaClone === false) {
      return [{
        messages: schema.option('messages') ? schema.option('messages') : ['invalid'],
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

    if (schemaErrors.length > 0 && schema.option('messages')) {
      schemaErrors = [
        {
          messages: schema.option('messages'),
          path: path
        }
      ]
    }

    return schemaErrors
  }
}

export default Validator
