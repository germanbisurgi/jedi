class Utils {
  clone (thing) {
    return JSON.parse(JSON.stringify(thing))
  }

  equal (a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  different (a, b) {
    return JSON.stringify(a) !== JSON.stringify(b)
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

  getSchemaEnumTitles (schema) {
    return (schema && schema.options && schema.options.enumTitles && this.isArray(schema.options.enumTitles)) ? schema.options.enumTitles : false
  }

  getSchemaEnum (schema) {
    return (schema && schema.enum && this.isArray(schema.enum)) ? schema.enum : false
  }

  getSchemaTitle (schema) {
    return (schema && schema.title) ? schema.title : ''
  }

  hasNumericType (schema) {
    return schema.type === 'number' || schema.type === 'integer'
  }

  hasFormatRadio (schema) {
    return schema.format && schema.format === 'radio'
  }

  hasFormatSelect (schema) {
    return schema.format && schema.format === 'select'
  }
}

export default new Utils()
