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
      uniqueItems: (schema, value, path) => {
        const isArrayType = schema.type === 'array'
        if (!isArrayType) return
        const uniqueItems = schema.uniqueItems
        const hasUniqueItemsConstrain = this.isSet(uniqueItems) && this.isBoolean(uniqueItems)
        const seen = {}
        let hasDuplicatedItems = false

        for (let i = 0; i < value.length; i++) {
          const item = JSON.stringify(value[i])
          if (seen[item]) {
            hasDuplicatedItems = true
            break
          }
          seen[item] = true
        }

        const invalid = (hasUniqueItemsConstrain && hasDuplicatedItems)

        if (invalid) {
          return {
            message: 'Must have unique items',
            path: path
          }
        }

        return false
      },
      minItems: (schema, value, path) => {
        const isArrayType = schema.type === 'array'
        if (!isArrayType) return
        const minItems = schema.minItems
        const hasMinItemsConstrain = this.isSet(minItems) && this.isNumber(minItems)
        const invalid = (hasMinItemsConstrain && value.length < minItems)

        if (invalid) {
          return {
            message: 'Must have at least ' + minItems + ' items',
            path: path
          }
        }

        return false
      },
      maxItems: (schema, value, path) => {
        const isArrayType = schema.type === 'array'
        if (!isArrayType) return
        const maxItems = schema.maxItems
        const hasMaxItemsConstrain = this.isSet(maxItems) && this.isNumber(maxItems)
        const invalid = (hasMaxItemsConstrain && value.length > maxItems)

        if (invalid) {
          return {
            message: 'Must have at most ' + maxItems + ' items',
            path: path
          }
        }

        return false
      },
      minLength: (schema, value, path) => {
        const isStringType = schema.type === 'string'
        if (!isStringType) return
        const minLength = schema.minLength
        const hasMinLengthConstrain = this.isSet(minLength) && this.isNumber(minLength)
        const invalid = (hasMinLengthConstrain && value.length < minLength)

        if (invalid) {
          return {
            message: 'Must be at least ' + minLength + ' characters long',
            path: path
          }
        }

        return false
      },
      maxLength: (schema, value, path) => {
        const isStringType = schema.type === 'string'
        if (!isStringType) return
        const maxLength = schema.maxLength
        const hasMaxLengthConstrain = this.isSet(maxLength) && this.isNumber(maxLength)
        const invalid = (hasMaxLengthConstrain && value.length > maxLength)

        if (invalid) {
          return {
            message: 'Must be at most ' + maxLength + ' characters long',
            path: path
          }
        }

        return false
      },
      pattern: (schema, value, path) => {
        const isStringType = schema.type === 'string'
        if (!isStringType) return
        const pattern = schema.pattern
        const hasPatternConstrain = this.isSet(pattern) && this.isString(pattern)
        const regexp = new RegExp(pattern)
        const matchPattern = regexp.test(value)
        const invalid = (hasPatternConstrain && !matchPattern)

        if (invalid) {
          return {
            message: 'Must be the pattern: ' + pattern,
            path: path
          }
        }

        return false
      },
      minimum: (schema, value, path) => {
        const isNumericType = schema.type === 'number' || schema.type === 'integer'
        if (!isNumericType) return
        const exclusiveMinimum = schema.exclusiveMinimum
        const minimum = schema.minimum
        const hasMinimumConstrain = this.isSet(minimum) && this.isNumber(minimum)
        const hasExclusiveMinimumConstrain = this.isSet(exclusiveMinimum) && exclusiveMinimum === true
        const finalMinimum = hasExclusiveMinimumConstrain ? minimum + 1 : minimum
        const invalid = (hasMinimumConstrain && value < finalMinimum)

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
        if (!isNumericType) return
        const exclusiveMaximum = schema.exclusiveMaximum
        const maximum = schema.maximum
        const hasMaximumConstrain = this.isSet(maximum) && this.isNumber(maximum)
        const hasExclusiveMaximumConstrain = this.isSet(exclusiveMaximum) && exclusiveMaximum === true
        const finalMaximum = hasExclusiveMaximumConstrain ? maximum - 1 : maximum
        const invalid = (hasMaximumConstrain && value > finalMaximum)

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
        if (!isNumericType) return
        const multipleOf = schema.multipleOf
        const hasMultipleOfConstrain = this.isSet(multipleOf) && this.isNumber(multipleOf)
        const isMultipleOf = (value / multipleOf === Math.floor(value / multipleOf))
        const invalid = (hasMultipleOfConstrain && !isMultipleOf)

        if (invalid) {
          return {
            message: 'Must be multiple of ' + multipleOf,
            path: path
          }
        }

        return false
      },
      const: (schema, value, path) => {
        const hasConstConstrain = this.isSet(schema.const)

        if (hasConstConstrain && JSON.stringify(schema.const) !== JSON.stringify(value)) {
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
