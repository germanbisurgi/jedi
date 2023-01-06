import Schema from './schema'
import Jedi from './index'
import { isArray, isBoolean, isInteger, isNull, isNumber, isObject, isSet, isString } from './utils'

class Validator {
  constructor () {
    this.validators = [
      'dependentRequired',
      'format',
      'if',
      'const',
      'not',
      'type',
      'uniqueItems',
      'exclusiveMaximum',
      'exclusiveMinimum',
      'minItems',
      'maxItems',
      'minLength',
      'maxLength',
      'minimum',
      'maximum',
      'multipleOf',
      'pattern',
      'patternProperties',
      'enum',
      'required',
      'minProperties',
      'maxProperties',
      'allOf',
      'anyOf',
      'oneOf'
    ]
  }

  allOf (value, schema, key, path) {
    let errors = []

    if (schema.allOf()) {
      schema.allOf().forEach((schema) => {
        const allOfErrors = this.validate(value, new Schema(schema), key, path)
        errors = [...errors, ...allOfErrors]
      })
    }

    return errors
  }

  anyOf (value, schema, key, path) {
    const errors = []

    if (schema.anyOf()) {
      const valid = schema.anyOf().some((schema) => {
        const anyOfErrors = this.validate(value, new Schema(schema), key, path)
        return anyOfErrors.length === 0
      })

      if (!valid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + '  must validate against at least one of the provided schemas',
          path: path
        })
      }
    }

    return errors
  }

  const (value, schema, key, path) {
    const errors = []

    if (schema.const()) {
      const valueIsNotEqualConst = (JSON.stringify(value) !== JSON.stringify(schema.const()))
      const invalid = (valueIsNotEqualConst)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have value: ' + JSON.stringify(schema.const()),
          path: path
        })
      }
    }

    return errors
  }

  dependentRequired (value, schema, key, path) {
    const errors = []

    if (isObject(value) && schema.dependentRequired()) {
      let missingProperties = []

      Object.keys(schema.dependentRequired()).forEach((key) => {
        if (isSet(value[key])) {
          const requiredProperties = schema.dependentRequired()[key]

          missingProperties = requiredProperties.filter((property) => {
            return !Object.prototype.hasOwnProperty.call(value, property)
          })
        }
      })

      const invalid = missingProperties.length > 0

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + '  is missing the required properties: ' + missingProperties.join(', '),
          path: path
        })
      }
    }

    return errors
  }

  enum (value, schema, key, path) {
    const errors = []

    if (schema.enum()) {
      const invalid = !schema.enum().some(e => JSON.stringify(value) === JSON.stringify(e))

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be one of the enumerated values: ' + JSON.stringify(schema.enum()),
          path: path
        })
      }
    }

    return errors
  }

  exclusiveMaximum (value, schema, key, path) {
    const errors = []

    if (isNumber(value) && schema.exclusiveMaximum()) {
      const computedMaximum = (schema.exclusiveMaximum() - 1)
      const invalid = (value > computedMaximum)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be less than ' + computedMaximum,
          path: path
        })
      }
    }

    return errors
  }

  exclusiveMinimum (value, schema, key, path) {
    const errors = []

    if (isNumber(value) && schema.exclusiveMinimum()) {
      const computedMinimum = (schema.exclusiveMinimum() + 1)
      const invalid = (value < computedMinimum)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be at least ' + computedMinimum,
          path: path
        })
      }
    }

    return errors
  }

  format (value, schema, key, path) {
    const errors = []

    if (schema.format()) {
      let invalid = false

      if (schema.formatIs('email')) {
        const regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)
        invalid = !regexp.test(value)
      }

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be a valid email address',
          path: path
        })
      }
    }

    return errors
  }

  if (value, schema, key, path) {
    let errors = []

    if (schema.if()) {
      if (!schema.then() || !schema.else()) {
        return errors
      }

      const ifEditor = new Jedi({ schema: schema.if(), startval: value })
      const ifErrors = ifEditor.validate()

      if (ifErrors.length === 0) {
        const thenEditor = new Jedi({ schema: schema.then(), startval: value })
        errors = thenEditor.validate()
      } else {
        const elseEditor = new Jedi({ schema: schema.else(), startval: value })
        errors = elseEditor.validate()
      }
    }

    return errors
  }

  maximum (value, schema, key, path) {
    const errors = []

    if (isNumber(value) && schema.maximum()) {
      const computedMaximum = schema.maximum()
      const invalid = (value > computedMaximum)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be less than ' + computedMaximum,
          path: path
        })
      }
    }

    return errors
  }

  maxItems (value, schema, key, path) {
    const errors = []

    if (isArray(value) && schema.maxItems()) {
      const invalid = (value.length > schema.maxItems())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have at most ' + schema.maxItems() + ' items',
          path: path
        })
      }
    }

    return errors
  }

  maxLength (value, schema, key, path) {
    const errors = []

    if (isString(value) && schema.maxLength()) {
      const invalid = (value.length > schema.maxLength())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be at most ' + schema.maxLength() + ' characters long',
          path: path
        })
      }
    }

    return errors
  }

  maxProperties (value, schema, key, path) {
    const errors = []

    if (isObject(value) && schema.maxProperties()) {
      const propertiesCount = Object.keys(value).length
      const invalid = (propertiesCount > schema.maxProperties())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have at most ' + schema.maxProperties() + ' properties',
          path: path
        })
      }
    }

    return errors
  }

  minimum (value, schema, key, path) {
    const errors = []

    if (isNumber(value) && schema.minimum()) {
      const computedMinimum = schema.minimum()
      const invalid = (value < computedMinimum)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be at least ' + computedMinimum,
          path: path
        })
      }
    }

    return errors
  }

  minItems (value, schema, key, path) {
    const errors = []

    if (isArray(value) && schema.minItems()) {
      const invalid = (value.length < schema.minItems())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have at least ' + schema.minItems() + ' items',
          path: path
        })
      }
    }

    return errors
  }

  minLength (value, schema, key, path) {
    const errors = []

    if (isString(value) && schema.minLength()) {
      const invalid = (value.length < schema.minLength())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be at least ' + schema.minLength() + ' characters long',
          path: path
        })
      }
    }

    return errors
  }

  minProperties (value, schema, key, path) {
    const errors = []

    if (isObject(value) && schema.minProperties()) {
      const propertiesCount = Object.keys(value).length
      const invalid = (propertiesCount < schema.minProperties())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have at least ' + schema.minProperties() + ' properties',
          path: path
        })
      }
    }

    return errors
  }

  multipleOf (value, schema, key, path) {
    const errors = []

    if (isNumber(value) && schema.multipleOf()) {
      const isMultipleOf = (value / schema.multipleOf() === Math.floor(value / schema.multipleOf()))
      const invalid = (!isMultipleOf)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be multiple of ' + schema.multipleOf(),
          path: path
        })
      }
    }

    return errors
  }

  not (value, schema, key, path) {
    const errors = []

    if (schema.not()) {
      const notErrors = this.validate(value, new Schema(schema.not()), key, path)

      const invalid = notErrors.length === 0

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must not validate against the provided schema ' + JSON.stringify(schema.not()),
          path: path
        })
      }
    }

    return errors
  }

  oneOf (value, schema, key, path) {
    const errors = []

    if (schema.oneOf()) {
      let counter = 0

      schema.oneOf().forEach((schema) => {
        const oneOfErrors = this.validate(value, new Schema(schema), key, path)

        if (oneOfErrors.length === 0) {
          counter++
        }
      })

      if (counter !== 1) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must validate against exactly one of the provided schemas. It currently validates against ' + counter + ' of the schemas.',
          path: path
        })
      }
    }

    return errors
  }

  pattern (value, schema, key, path) {
    const errors = []

    if (isString(value) && schema.pattern()) {
      const regexp = new RegExp(schema.pattern())
      const invalid = !regexp.test(value)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be the pattern: ' + schema.pattern(),
          path: path
        })
      }
    }

    return errors
  }

  patternProperties (value, schema, key, path) {
    let errors = []

    if (isObject(value) && schema.patternProperties()) {
      const patternProperties = schema.patternProperties()

      Object.keys(value).forEach((propertyName) => {
        Object.keys(patternProperties).forEach((pattern) => {
          const regexp = new RegExp(pattern)
          if (regexp.test(propertyName)) {
            const schema = patternProperties[pattern]
            schema.title = propertyName

            const editor = new Jedi({
              schema: schema,
              startval: value[propertyName]
            })

            errors = [...errors, ...editor.validate()]
          }
        })
      })
    }

    return errors
  }

  required (value, schema, key, path) {
    const errors = []

    if (isObject(value) && schema.required()) {
      const missingProperties = []
      const keys = Object.keys(value)

      schema.required().forEach((key) => {
        if (!keys.includes(key)) {
          missingProperties.push(key)
        }
      })

      const invalid = missingProperties.length > 0

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + '  is missing the required properties: ' + missingProperties.join(', '),
          path: path
        })
      }
    }

    return errors
  }

  type (value, schema, key, path) {
    const errors = []

    if (schema.types()) {
      return errors
    }

    if (schema.typeIs('any')) {
      return errors
    }

    if (schema.type()) {
      const types = {
        string: value => isString(value),
        number: value => isNumber(value),
        integer: value => isInteger(value),
        boolean: value => isBoolean(value),
        array: value => isArray(value),
        object: value => isObject(value),
        null: value => isNull(value)
      }

      const valid = types[schema.type()](value)

      if (!valid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be of type ' + schema.type(),
          path: path
        })
      }
    }

    return errors
  }

  uniqueItems (value, schema, key, path) {
    const errors = []

    if (isArray(value) && schema.uniqueItems()) {
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

      const invalid = (hasDuplicatedItems)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have unique items',
          path: path
        })
      }
    }

    return errors
  }

  /**
   * Adds a validator function
   */
  addValidator (validator) {
    this.validators.push(validator)
  }

  /**
   * Validates a value against it's schema
   */
  validate (value, schema, key, path) {
    let schemaErrors = []

    this.validators.forEach((validator) => {
      const validatorErrors = this[validator](value, schema, key, path)

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
