import utils from './utils'

class Validator {
  constructor () {
    // const self = this

    /**
     * Functions that return an error object if the the validation condition is not met.
     */
    this.validators = {
      type: (schema, value, path) => {
        const errors = []

        if (typeof schema.type === 'undefined') {
          return errors
        }

        if (schema.type === 'any') {
          return errors
        }

        if (utils.isArray(schema.type)) {
          return errors
        }

        const types = {
          string: value => utils.isString(value),
          number: value => utils.isNumber(value),
          integer: value => utils.isInteger(value),
          boolean: value => utils.isBoolean(value),
          array: value => utils.isArray(value),
          object: value => utils.isObject(value),
          null: value => utils.isNull(value)
        }

        const valid = types[schema.type](value)

        if (!valid) {
          errors.push({
            message: 'Must be of type ' + schema.type,
            path: path
          })
        }

        return errors
      },
      uniqueItems: (schema, value, path) => {
        const errors = []

        const isArrayType = schema.type === 'array'
        if (!isArrayType) return
        const uniqueItems = schema.uniqueItems
        const hasUniqueItemsConstrain = utils.isSet(uniqueItems) && utils.isBoolean(uniqueItems)
        if (!hasUniqueItemsConstrain) return
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
          errors.push({
            message: 'Must have unique items',
            path: path
          })
        }

        return errors
      },
      minItems: (schema, value, path) => {
        const errors = []

        const isArrayType = schema.type === 'array'
        if (!isArrayType) return
        const minItems = schema.minItems
        const hasMinItemsConstrain = utils.isSet(minItems) && utils.isNumber(minItems)
        if (!hasMinItemsConstrain) return
        const invalid = (hasMinItemsConstrain && value.length < minItems)

        if (invalid) {
          errors.push({
            message: 'Must have at least ' + minItems + ' items',
            path: path
          })
        }

        return errors
      },
      maxItems: (schema, value, path) => {
        const errors = []
        const isArrayType = schema.type === 'array'
        if (!isArrayType) return
        const maxItems = schema.maxItems
        const hasMaxItemsConstrain = utils.isSet(maxItems) && utils.isNumber(maxItems)
        if (!hasMaxItemsConstrain) return
        const invalid = (hasMaxItemsConstrain && value.length > maxItems)

        if (invalid) {
          errors.push({
            message: 'Must have at most ' + maxItems + ' items',
            path: path
          })
        }

        return errors
      },
      minLength: (schema, value, path) => {
        const errors = []
        const isStringType = schema.type === 'string'
        if (!isStringType) return
        const minLength = schema.minLength
        const hasMinLengthConstrain = utils.isSet(minLength) && utils.isNumber(minLength)
        if (!hasMinLengthConstrain) return
        const invalid = (hasMinLengthConstrain && value.length < minLength)

        if (invalid) {
          errors.push({
            message: 'Must be at least ' + minLength + ' characters long',
            path: path
          })
        }

        return errors
      },
      maxLength: (schema, value, path) => {
        const errors = []
        const isStringType = schema.type === 'string'
        if (!isStringType) return
        const maxLength = schema.maxLength
        const hasMaxLengthConstrain = utils.isSet(maxLength) && utils.isNumber(maxLength)
        if (!hasMaxLengthConstrain) return
        const invalid = (hasMaxLengthConstrain && value.length > maxLength)

        if (invalid) {
          errors.push({
            message: 'Must be at most ' + maxLength + ' characters long',
            path: path
          })
        }

        return errors
      },
      pattern: (schema, value, path) => {
        const errors = []
        const isStringType = schema.type === 'string'
        if (!isStringType) return
        const pattern = schema.pattern
        const hasPatternConstrain = utils.isSet(pattern) && utils.isString(pattern)
        if (!hasPatternConstrain) return
        const regexp = new RegExp(pattern)
        const matchPattern = regexp.test(value)
        const invalid = (hasPatternConstrain && !matchPattern)

        if (invalid) {
          errors.push({
            message: 'Must be the pattern: ' + pattern,
            path: path
          })
        }

        return errors
      },
      minimum: (schema, value, path) => {
        const errors = []
        const isNumericType = schema.type === 'number' || schema.type === 'integer'
        if (!isNumericType) return
        const exclusiveMinimum = schema.exclusiveMinimum
        const minimum = schema.minimum
        const hasMinimumConstrain = utils.isSet(minimum) && utils.isNumber(minimum)
        if (!hasMinimumConstrain) return
        const hasExclusiveMinimumConstrain = utils.isSet(exclusiveMinimum) && exclusiveMinimum === true
        const finalMinimum = hasExclusiveMinimumConstrain ? minimum + 1 : minimum
        const invalid = (hasMinimumConstrain && value < finalMinimum)

        if (invalid) {
          errors.push({
            message: 'Must be at least ' + finalMinimum,
            path: path
          })
        }

        return errors
      },
      maximum: (schema, value, path) => {
        const errors = []
        const isNumericType = schema.type === 'number' || schema.type === 'integer'
        if (!isNumericType) return
        const exclusiveMaximum = schema.exclusiveMaximum
        const maximum = schema.maximum
        const hasMaximumConstrain = utils.isSet(maximum) && utils.isNumber(maximum)
        if (!hasMaximumConstrain) return
        const hasExclusiveMaximumConstrain = utils.isSet(exclusiveMaximum) && exclusiveMaximum === true
        const finalMaximum = hasExclusiveMaximumConstrain ? maximum - 1 : maximum
        const invalid = (hasMaximumConstrain && value > finalMaximum)

        if (invalid) {
          errors.push({
            message: 'Must be less than ' + finalMaximum,
            path: path
          })
        }

        return errors
      },
      multipleOf: (schema, value, path) => {
        const errors = []
        const isNumericType = schema.type === 'number' || schema.type === 'integer'
        if (!isNumericType) return
        const multipleOf = schema.multipleOf
        const hasMultipleOfConstrain = utils.isSet(multipleOf) && utils.isNumber(multipleOf)
        if (!hasMultipleOfConstrain) return
        const isMultipleOf = (value / multipleOf === Math.floor(value / multipleOf))
        const invalid = (hasMultipleOfConstrain && !isMultipleOf)

        if (invalid) {
          errors.push({
            message: 'Must be multiple of ' + multipleOf,
            path: path
          })
        }

        return errors
      },
      const: (schema, value, path) => {
        const errors = []
        const _const = schema.const
        const hasConstConstrain = utils.isSet(_const)
        if (!hasConstConstrain) return
        const valueIsNotEqualConst = (JSON.stringify(value) !== JSON.stringify(_const))
        const invalid = (hasConstConstrain && valueIsNotEqualConst)

        if (invalid) {
          errors.push({
            message: 'Must have value: ' + _const,
            path: path
          })
        }

        return errors
      },
      enum: (schema, value, path) => {
        const errors = []
        const _enum = schema.enum
        const hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum)
        if (!hasEnumConstrain) return
        const valueNotInEnum = !_enum.some(e => JSON.stringify(value) === JSON.stringify(e))
        const invalid = (hasEnumConstrain && valueNotInEnum)

        if (invalid) {
          errors.push({
            message: 'Value must be one of the enumerated values',
            path: path
          })
        }

        return errors
      },
      required: (schema, value, path) => {
        const errors = []
        const hasRequiredProperties = utils.isArray(schema.required)
        const missingProperties = []

        if (hasRequiredProperties) {
          const keys = Object.keys(value)

          schema.required.forEach((key) => {
            if (!keys.includes(key)) {
              missingProperties.push(key)
            }
          })
        }

        const invalid = missingProperties.length > 0

        if (invalid) {
          missingProperties.forEach((property) => {
            errors.push({
              message: 'Object is missing the required property: ' + property,
              path: path
            })
          })
        }

        return errors
      }
      // oneOf (schema, value, path) {
      //   const hasOneOf = utils.hasOneOf(schema)
      //
      //   if (!hasOneOf) {
      //     return
      //   }
      //
      //   console.log('oneOf validator', path)
      //
      //   const validSchemas = []
      //
      //   schema.oneOf.forEach((oneOfSchema) => {
      //     const errors = self.validate(oneOfSchema, value, path)
      //
      //     if (errors.length === 0) {
      //       validSchemas.push(oneOfSchema)
      //     }
      //   })
      //
      //   console.log('validSchemas', validSchemas)
      //
      //   const invalid = validSchemas.lenght !== 1
      //
      //   if (invalid) {
      //     return {
      //       message: 'oneOf error' + JSON.stringify(validSchemas),
      //       path: path
      //     }
      //   }
      //
      //   return false
      // }
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
    let schemaErrors = []

    Object.keys(this.validators).forEach((key) => {
      const validator = this.validators[key]
      const validatorErrors = validator(schema, value, path)

      if (validatorErrors) {
        schemaErrors = [...schemaErrors, ...validatorErrors]
      }
    })

    return schemaErrors
  }
}

export default Validator
