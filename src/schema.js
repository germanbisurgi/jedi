import refParser from '@apidevtools/json-schema-ref-parser'
import { isString, isArray, isNumber, isInteger, isBoolean } from './utils'

class Schema {
  constructor (schema) {
    this.schema = schema
  }

  async dereference () {
    this.schema = await refParser.dereference(this.schema)
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

  description () {
    return (this.schema.description) ? this.schema.description : false
  }

  enum () {
    return isArray(this.schema.enum) ? this.schema.enum : false
  }

  exclusiveMaximum () {
    return this.schema.exclusiveMaximum ? this.schema.exclusiveMaximum : false
  }

  exclusiveMinimum () {
    return this.schema.exclusiveMinimum ? this.schema.exclusiveMinimum : false
  }

  format () {
    return this.schema.format ? this.schema.format : false
  }

  formatIs (value) {
    return (this.format() && this.format() === value)
  }

  items () {
    return (this.schema.items) ? this.schema.items : false
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

  multipleOf () {
    if (isNumber(this.schema.multipleOf) && this.schema.multipleOf > 0) {
      return this.schema.multipleOf
    }

    return false
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

  title () {
    return (this.schema.title) ? this.schema.title : false
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
