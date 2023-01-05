import { isString, isArray, isNumber, isInteger, isBoolean, isObject } from './utils'

class Schema {
  constructor (schema) {
    this.schema = schema
  }

  allOf () {
    return isArray(this.schema.allOf) ? this.schema.allOf : false
  }

  anyOf () {
    return isArray(this.schema.anyOf) ? this.schema.anyOf : false
  }

  const () {
    return this.schema.const ? this.schema.const : false
  }

  clone () {
    return JSON.parse(JSON.stringify(this.schema))
  }

  default () {
    return this.schema.default ? this.schema.default : false
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
    return isNumber(this.schema.exclusiveMaximum) ? this.schema.exclusiveMaximum : false
  }

  exclusiveMinimum () {
    return isNumber(this.schema.exclusiveMinimum) ? this.schema.exclusiveMinimum : false
  }

  format () {
    return isString(this.schema.format) ? this.schema.format : false
  }

  formatIs (value) {
    return (this.format() && this.format() === value)
  }

  if () {
    return isObject(this.schema.if) ? this.schema.if : false
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
    if (isInteger(this.schema.maxProperties) && this.schema.maxProperties >= 0) {
      return this.schema.maxProperties
    }

    return false
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

    return false
  }

  typeIs (value) {
    return (this.type() && this.type() === value)
  }

  types () {
    return isArray(this.schema.type)
  }

  typeIsNumeric () {
    return this.typeIs('number') || this.typeIs('integer')
  }

  oneOf () {
    return isArray(this.schema.oneOf) ? this.schema.oneOf : false
  }

  uniqueItems () {
    return isBoolean(this.schema.uniqueItems) ? this.schema.uniqueItems : false
  }

  serialize () {
    return JSON.stringify(this.schema)
  }

  destroy () {
    for (const key in this) {
      if (!Object.prototype.hasOwnProperty.call(this, key)) {
        continue
      }

      delete this[key]
    }
  }
}

export default Schema
