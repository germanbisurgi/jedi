import refParser from '@apidevtools/json-schema-ref-parser'

class Schema {
  constructor (schema) {
    this.schema = schema
  }

  async dereference () {
    this.schema = await refParser.dereference(this.schema)
  }

  anyOf () {
    return (this.schema.anyOf && Array.isArray(this.schema.anyOf)) ? this.schema.anyOf : false
  }

  const () {
    return this.schema.const ? this.schema.const : false
  }

  default () {
    return this.schema.default ? this.schema.default : false
  }

  description () {
    return (this.schema.description) ? this.schema.description : false
  }

  enum () {
    return (this.schema.enum && Array.isArray(this.schema.enum)) ? this.schema.enum : false
  }

  format () {
    return this.schema.format ? this.schema.format : false
  }

  formatIs (value) {
    return (this.format() && this.format() === value)
  }

  properties () {
    return this.schema.properties ? this.schema.properties : false
  }

  required () {
    return this.schema.required ? this.schema.required : false
  }

  title () {
    return (this.schema.title) ? this.schema.title : false
  }

  type () {
    return this.schema.type ? this.schema.type : false
  }

  typeIs (value) {
    return (this.type() && this.type() === value)
  }

  typeIsAnArray () {
    return (this.schema.type && Array.isArray(this.schema.type))
  }

  typeIsNumeric () {
    return this.typeIs('number') || this.typeIs('integer')
  }

  oneOf () {
    return (this.schema.oneOf && Array.isArray(this.schema.oneOf)) ? this.schema.oneOf : false
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
