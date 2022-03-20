class Validator {
  constructor () {
    /**
     * Functions that return an error object if the the validation condition is not met.
     */
    this.validators = {
      type: (schema, value, path) => {
        const types = {
          string: value => this.isString(value),
          number: value => this.isNumber(value),
          integer: value => this.isInteger(value),
          boolean: value => this.isBoolean(value),
          array: value => this.isArray(value),
          object: value => this.isObject(value),
          null: value => this.isNull(value)
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
      minimum: (schema, value, path) => {
        const isNumericType = schema.type === 'number' || schema.type === 'integer'
        const exclusiveMinimum = schema.exclusiveMinimum
        const minimum = schema.minimum
        const hasMinimum = this.isSet(minimum) && this.isNumber(minimum)
        const hasExclusiveMinimum = this.isSet(exclusiveMinimum) && exclusiveMinimum === true
        const finalMinimum = hasExclusiveMinimum ? minimum + 1 : minimum
        const invalid = (isNumericType && hasMinimum && value < finalMinimum)

        if (invalid) {
          return {
            message: 'Must be at least ' + finalMinimum,
            path: path
          }
        }

        return false
      },
      maximum: (schema, value, path) => {
        const isNumericType = schema.type === 'number' || schema.type === 'integer'
        const exclusiveMaximum = schema.exclusiveMaximum
        const maximum = schema.maximum
        const hasMaximum = this.isSet(maximum) && this.isNumber(maximum)
        const hasExclusiveMaximum = this.isSet(exclusiveMaximum) && exclusiveMaximum === true
        const finalMaximum = hasExclusiveMaximum ? maximum - 1 : maximum
        const invalid = (isNumericType && hasMaximum && value > finalMaximum)

        if (invalid) {
          return {
            message: 'Must be less than ' + finalMaximum,
            path: path
          }
        }

        return false
      },
      multipleOf: (schema, value, path) => {
        const isNumericType = schema.type === 'number' || schema.type === 'integer'
        const multipleOf = schema.multipleOf
        const hasMultipleOf = this.isSet(multipleOf) && this.isNumber(multipleOf)
        const isMultipleOf = (value / multipleOf === Math.floor(value / multipleOf))
        const invalid = (isNumericType && hasMultipleOf && !isMultipleOf)

        if (invalid) {
          return {
            message: 'Must be multiple of ' + multipleOf,
            path: path
          }
        }

        return false
      },
      const: (schema, value, path) => {
        const hasConst = this.isSet(schema.const)

        if (hasConst && JSON.stringify(schema.const) !== JSON.stringify(value)) {
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
   * Validates a value against it's schema
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

  isSet (value) {
    return typeof value !== 'undefined'
  }

  isNumber (value) {
    return typeof value === 'number'
  }

  isInteger (value) {
    return this.isNumber(value) && value === Math.floor(value)
  }

  isString (value) {
    return typeof value === 'string'
  }

  isBoolean (value) {
    return typeof value === 'boolean'
  }

  isArray (value) {
    return Array.isArray(value)
  }

  isObject (value) {
    return !this.isNull(value) && !this.isArray(value) && typeof value === 'object'
  }

  isNull (value) {
    return value === null
  }
}

export default Validator
