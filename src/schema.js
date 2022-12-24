import refParser from '@apidevtools/json-schema-ref-parser'

class Schema {
  constructor (schema) {
    this.schema = schema
  }

  async dereference () {
    this.schema = await refParser.dereference(this.schema)
  }

  setSchema (schema) {
    this.schema = schema
  }

  getSchema () {
    return this.schema
  }

  clone () {
    return JSON.parse(JSON.stringify(this.schema))
  }

  type () {
    return this.schema.type ? this.schema.type : 'any'
  }

  typeIs (value) {
    return (this.type() && this.type() === value)
  }

  typeIsNumeric () {
    return this.typeIs('number') || this.typeIs('integer')
  }

  format () {
    return this.schema.format ? this.schema.format : false
  }

  formatIs (value) {
    return (this.format() && this.format() === value)
  }

  getRequired () {
    return this.schema.required ? this.schema.required : false
  }

  getProperties () {
    return this.schema.properties ? this.schema.properties : false
  }

  getDefault () {
    return this.schema.default ? this.schema.default : false
  }

  enum () {
    return (this.schema.enum && Array.isArray(this.schema.enum)) ? this.schema.enum : false
  }

  getTitle () {
    return (this.schema.title) ? this.schema.title : ''
  }

  getDescription () {
    return (this.schema.description) ? this.schema.description : false
  }

  anyOf () {
    return (this.schema.anyOf && Array.isArray(this.schema.anyOf)) ? this.schema.anyOf : false
  }

  oneOf () {
    return (this.schema.oneOf && Array.isArray(this.schema.oneOf)) ? this.schema.oneOf : false
  }

  typeEqualsAny () {
    return (this.schema.type && this.schema.type === 'any')
  }

  typeIsAnArray () {
    return (this.schema.type && Array.isArray(this.schema.type))
  }

  hasNumericType () {
    return this.schema.type === 'number' || this.schema.type === 'integer'
  }

  hasNoType () {
    return typeof this.schema.type === 'undefined'
  }

  hasFormatRadio () {
    return this.schema.format && this.schema.format === 'radio'
  }

  hasFormatSelect () {
    return this.schema.format && this.schema.format === 'select'
  }

  getOption (option) {
    return (this.schema.options && this.schema.options[option]) ? this.schema.options[option] : false
  }

  getEnumTitles () {
    return (this.schema.options && this.schema.options.enumTitles && Array.isArray(this.schema.options.enumTitles)) ? this.schema.options.enumTitles : false
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
