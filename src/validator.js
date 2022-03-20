class Validator {
  constructor () {
    /**
     * Functions that return an error object if the the validation condition is not met.
     */
    this.validators = {
      type: (schema, value, path) => {
        const types = {
          string: value => typeof value === 'string',
          number: value => typeof value === 'number',
          integer: value => typeof value === 'number' && value === Math.floor(value),
          boolean: value => typeof value === 'boolean',
          array: value => Array.isArray(value),
          object: value => value !== null && !(Array.isArray(value)) && typeof value === 'object',
          null: value => value === null
        }
        const valid = types[schema.type](value)
        if (!valid) {
          return {
            message: 'Must be of type ' + schema.type,
            path: path
          }
        }
        return false
      },
      const: (schema, value, path) => {
        if (typeof schema.const !== 'undefined' && JSON.stringify(schema.const) !== JSON.stringify(value)) {
          return {
            message: 'error const',
            path: path
          }
        }
        return false
      }
    }
  }

  /**
   * Adds a validator function
   */
  addValidator (name, validator) {
    this.validators[name] = validator
  }

  /**
   * returns the first editor class that matches the passed schema.
   */
  validate (schema, value, path) {
    const errors = []
    Object.keys(this.validators).forEach((key) => {
      const validator = this.validators[key]
      const error = validator(schema, value, path)
      if (error) {
        errors.push(error)
      }
    })
    return errors
  }
}

export default Validator
