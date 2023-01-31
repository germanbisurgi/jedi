import draft from './drafts/draft-2020-12'

class Validator {
  constructor () {
    this.draft = draft
  }

  /**
   * Validates a value against it's schema
   */
  validate (value, schema, key, path) {
    let schemaErrors = []

    this.draft.forEach((validator) => {
      const validatorErrors = validator(this, value, schema, key, path)

      if (validatorErrors) {
        schemaErrors = [...schemaErrors, ...validatorErrors]
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
