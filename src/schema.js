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

  clone () {
    return JSON.parse(JSON.stringify(this.schema))
  }

  default () {
    return this.schema.default
  }

  dependentRequired () {
    return isObject(this.schema.dependentRequired) ? this.schema.dependentRequired : false
  }

  description () {
    return isString(this.schema.description) ? this.schema.description : false
  }

  else () {
    return isObject(this.schema.else) ? this.schema.else : false
  }

  enum () {
    if (isArray(this.schema.enum) && this.schema.enum.length > 0) {
      return this.schema.enum
    }

    return false
  }

  exclusiveMaximum () {
    return isNumber(this.schema.exclusiveMaximum) ? this.schema.exclusiveMaximum : undefined
  }

  exclusiveMinimum () {
    return isNumber(this.schema.exclusiveMinimum) ? this.schema.exclusiveMinimum : undefined
  }

  format () {
    return isString(this.schema.format) ? this.schema.format : false
  }

  formatIs (value) {
    return (this.format() && this.format() === value)
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
    return isObject(this.schema.items) ? this.schema.items : false
  }

  maximum () {
    return (this.schema.maximum) ? this.schema.maximum : false
  }

  maxItems () {
    if (isInteger(this.schema.maxItems) && this.schema.maxItems >= 0) {
      return this.schema.maxItems
    }

    return false
  }

  maxLength () {
    if (isInteger(this.schema.maxLength) && this.schema.maxLength >= 0) {
      return this.schema.maxLength
    }

    return false
  }

  maxProperties () {
    if (isInteger(this.schema.maxProperties)) {
      return this.schema.maxProperties
    }

    return undefined
  }

  minimum () {
    return isNumber(this.schema.minimum) ? this.schema.minimum : false
  }

  minItems () {
    if (isInteger(this.schema.minItems) && this.schema.minItems >= 0) {
      return this.schema.minItems
    }

    return false
  }

  minLength () {
    if (isInteger(this.schema.minLength) && this.schema.minLength >= 0) {
      return this.schema.minLength
    }

    return false
  }

  minProperties () {
    if (isInteger(this.schema.minProperties) && this.schema.minProperties >= 0) {
      return this.schema.minProperties
    }

    return false
  }

  multipleOf () {
    if (isNumber(this.schema.multipleOf) && this.schema.multipleOf >= 0) {
      return this.schema.multipleOf
    }

    return false
  }

  not () {
    return isObject(this.schema.not) ? this.schema.not : false
  }

  option (option) {
    return (this.schema.options && this.schema.options[option]) ? this.schema.options[option] : false
  }

  pattern () {
    return isString(this.schema.pattern) ? this.schema.pattern : false
  }

  patternProperties () {
    return isObject(this.schema.patternProperties) ? this.schema.patternProperties : undefined
  }

  property (key) {
    return this.properties && this.schema.properties[key] ? this.schema.properties[key] : false
  }

  properties () {
    return this.schema.properties ? this.schema.properties : false
  }

  required () {
    return isArray(this.schema.required) ? [...new Set(this.schema.required)] : false
  }

  then () {
    return isObject(this.schema.then) ? this.schema.then : false
  }

  title () {
    return isString(this.schema.title) ? this.schema.title : false
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
