import draft from './drafts/draft-2020-12'
import { hasOwn, isBoolean } from '../utils'

class Validator {
  constructor () {
    this.draft = draft
  }

  /**
   * Validates a value against it's schema
   */
  validate (value, schema, key, path) {
    let schemaErrors = []

    const schemaClone = schema.clone()

    if (isBoolean(schemaClone) && schemaClone === true) {
      return schemaErrors
    }

    if (isBoolean(schemaClone) && schemaClone === false) {
      return [{
        message: schema.option('message') ? schema.option('message') : 'invalid',
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

    if (schemaErrors.length > 0 && schema.option('message')) {
      schemaErrors = [
        {
          message: schema.option('message'),
          path: path
        }
      ]
    }

    return schemaErrors
  }
}

export default Validator
