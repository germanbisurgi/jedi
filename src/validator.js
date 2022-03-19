class Validator {
  constructor () {
    /**
     * Functions that return an error object if the the validation condition is not met.
     */
    this.validators = [
      (schema, value, path) => {
        if (schema.const && schema.const !== value) {
          return {
            message: 'error const',
            path: path
          }
        }
        return false
      }
    ]
  }

  /**
   * Adds a validator function
   */
  addValidator (validator) {
    this.validators.unshift(validator)
  }

  /**
   * returns the first editor class that matches the passed schema.
   */
  validate (schema, value, path) {
    const errors = []
    for (const validator of this.validators) {
      const error = validator(schema, value, path)
      if (error) {
        errors.push(error)
      }
    }
    return errors
  }
}

export default Validator
