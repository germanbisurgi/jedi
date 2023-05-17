import { isString, isArray, isNumber, isInteger, isBoolean, isObject, isSet } from './utils'

class Schema {
  constructor (schema) {
    this.schema = schema
  }

  additionalProperties () {
    return isObject(this.schema.additionalProperties) || isBoolean(this.schema.additionalProperties) ? this.schema.additionalProperties : true
  }

  allOf () {
    return isArray(this.schema.allOf) ? this.schema.allOf : undefined
  }

  anyOf () {
    return isArray(this.schema.anyOf) ? this.schema.anyOf : undefined
  }

  const () {
    return this.schema.const
  }

  contains () {
    return (isObject(this.schema.contains) || isBoolean(this.schema.contains)) ? this.schema.contains : undefined
  }

  clone () {
    return JSON.parse(JSON.stringify(this.schema))
  }

  default () {
    return this.schema.default
  }

  dependentRequired () {
    return isObject(this.schema.dependentRequired) ? this.schema.dependentRequired : undefined
  }

  description () {
    return isString(this.schema.description) ? this.schema.description : undefined
  }

  else () {
    return (isObject(this.schema.else) || isBoolean(this.schema.else)) ? this.schema.else : undefined
  }

  enum () {
    if (isArray(this.schema.enum) && this.schema.enum.length > 0) {
      return this.schema.enum
    }

    return undefined
  }

  exclusiveMaximum () {
    return isNumber(this.schema.exclusiveMaximum) ? this.schema.exclusiveMaximum : undefined
  }

  exclusiveMinimum () {
    return isNumber(this.schema.exclusiveMinimum) ? this.schema.exclusiveMinimum : undefined
  }

  format () {
    return isString(this.schema.format) ? this.schema.format : undefined
  }

  formatIs (value) {
    return (isSet(this.format()) && this.format() === value)
  }

  if () {
    if (isObject(this.schema.if)) {
      return this.schema.if
    }

    if (isBoolean(this.schema.if)) {
      return this.schema.if
    }

    return undefined
  }

  items () {
    return isObject(this.schema.items) ? this.schema.items : undefined
  }

  maximum () {
    return isNumber(this.schema.maximum) ? this.schema.maximum : undefined
  }

  maxContains () {
    if (isInteger(this.schema.maxContains) && this.schema.maxContains >= 0) {
      return this.schema.maxContains
    }

    return undefined
  }

  maxItems () {
    if (isInteger(this.schema.maxItems) && this.schema.maxItems >= 0) {
      return this.schema.maxItems
    }

    return undefined
  }

  maxLength () {
    if (isInteger(this.schema.maxLength) && this.schema.maxLength >= 0) {
      return this.schema.maxLength
    }

    return undefined
  }

  maxProperties () {
    if (isInteger(this.schema.maxProperties)) {
      return this.schema.maxProperties
    }

    return undefined
  }

  minimum () {
    return isNumber(this.schema.minimum) ? this.schema.minimum : undefined
  }

  minContains () {
    if (isInteger(this.schema.minContains) && this.schema.minContains >= 0) {
      return this.schema.minContains
    }

    return undefined
  }

  minItems () {
    if (isInteger(this.schema.minItems) && this.schema.minItems >= 0) {
      return this.schema.minItems
    }

    return undefined
  }

  minLength () {
    if (isInteger(this.schema.minLength) && this.schema.minLength >= 0) {
      return this.schema.minLength
    }

    return undefined
  }

  minProperties () {
    if (isInteger(this.schema.minProperties) && this.schema.minProperties >= 0) {
      return this.schema.minProperties
    }

    return undefined
  }

  multipleOf () {
    if (isNumber(this.schema.multipleOf) && this.schema.multipleOf >= 0) {
      return this.schema.multipleOf
    }

    return undefined
  }

  not () {
    return (isObject(this.schema.not) || isBoolean(this.schema.not)) ? this.schema.not : undefined
  }

  option (option) {
    return (this.schema.options && this.schema.options[option]) ? this.schema.options[option] : false
  }

  pattern () {
    return isString(this.schema.pattern) ? this.schema.pattern : undefined
  }

  patternProperties () {
    return isObject(this.schema.patternProperties) ? this.schema.patternProperties : undefined
  }

  properties () {
    return isObject(this.schema.properties) ? this.schema.properties : undefined
  }

  readOnly () {
    return isBoolean(this.schema.readOnly) ? this.schema.readOnly : undefined
  }

  required () {
    return isArray(this.schema.required) ? [...new Set(this.schema.required)] : undefined
  }

  then () {
    return (isObject(this.schema.then) || isBoolean(this.schema.then)) ? this.schema.then : undefined
  }

  title () {
    return isString(this.schema.title) ? this.schema.title : undefined
  }

  type () {
    if (isString(this.schema.type) || isArray(this.schema.type)) {
      return this.schema.type
    }

    return undefined
  }

  typeIs (value) {
    return (isSet(this.type()) && this.type() === value)
  }

  typeIsNumeric () {
    return this.typeIs('number') || this.typeIs('integer')
  }

  oneOf () {
    return isArray(this.schema.oneOf) ? this.schema.oneOf : undefined
  }

  uniqueItems () {
    return isBoolean(this.schema.uniqueItems) ? this.schema.uniqueItems : undefined
  }

  destroy () {
    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Schema
