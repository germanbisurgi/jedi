import { isString, isArray, isNumber, isInteger, isBoolean, isObject, isSet } from './utils'

export function additionalProperties (schema) {
  return isObject(schema.additionalProperties) || isBoolean(schema.additionalProperties) ? schema.additionalProperties : true
}

export function allOf (schema) {
  return isArray(schema.allOf) ? schema.allOf : undefined
}

export function anyOf (schema) {
  return isArray(schema.anyOf) ? schema.anyOf : undefined
}

export function _const (schema) {
  return schema.const
}

export function contains (schema) {
  return (isObject(schema.contains) || isBoolean(schema.contains)) ? schema.contains : undefined
}

export function clone (schema) {
  return JSON.parse(JSON.stringify(schema))
}

export function _default (schema) {
  return schema.default
}

export function dependentRequired (schema) {
  return isObject(schema.dependentRequired) ? schema.dependentRequired : undefined
}

export function dependentSchemas (schema) {
  return isObject(schema.dependentSchemas) ? schema.dependentSchemas : undefined
}

export function description (schema) {
  return isString(schema.description) ? schema.description : undefined
}

export function _else (schema) {
  return (isObject(schema.else) || isBoolean(schema.else)) ? schema.else : undefined
}

export function _enum (schema) {
  if (isArray(schema.enum) && schema.enum.length > 0) {
    return schema.enum
  }

  return undefined
}

export function exclusiveMaximum (schema) {
  return isNumber(schema.exclusiveMaximum) ? schema.exclusiveMaximum : undefined
}

export function exclusiveMinimum (schema) {
  return isNumber(schema.exclusiveMinimum) ? schema.exclusiveMinimum : undefined
}

export function format (schema) {
  return isString(schema.format) ? schema.format : undefined
}

export function formatIs (value) {
  return (isSet(this.format(schema)) && this.format(schema) === value)
}

export function _if (schema) {
  if (isObject(schema.if)) {
    return schema.if
  }

  if (isBoolean(schema.if)) {
    return schema.if
  }

  return undefined
}

export function items (schema) {
  return isObject(schema.items) || isBoolean(schema.items) ? schema.items : undefined
}

export function maximum (schema) {
  return isNumber(schema.maximum) ? schema.maximum : undefined
}

export function maxContains (schema) {
  if (isInteger(schema.maxContains) && schema.maxContains >= 0) {
    return schema.maxContains
  }

  return undefined
}

export function maxItems (schema) {
  if (isInteger(schema.maxItems) && schema.maxItems >= 0) {
    return schema.maxItems
  }

  return undefined
}

export function maxLength (schema) {
  if (isInteger(schema.maxLength) && schema.maxLength >= 0) {
    return schema.maxLength
  }

  return undefined
}

export function maxProperties (schema) {
  if (isInteger(schema.maxProperties)) {
    return schema.maxProperties
  }

  return undefined
}

export function minimum (schema) {
  return isNumber(schema.minimum) ? schema.minimum : undefined
}

export function minContains (schema) {
  if (isInteger(schema.minContains) && schema.minContains >= 0) {
    return schema.minContains
  }

  return undefined
}

export function minItems (schema) {
  if (isInteger(schema.minItems) && schema.minItems >= 0) {
    return schema.minItems
  }

  return undefined
}

export function minLength (schema) {
  if (isInteger(schema.minLength) && schema.minLength >= 0) {
    return schema.minLength
  }

  return undefined
}

export function minProperties (schema) {
  if (isInteger(schema.minProperties) && schema.minProperties >= 0) {
    return schema.minProperties
  }

  return undefined
}

export function multipleOf (schema) {
  if (isNumber(schema.multipleOf) && schema.multipleOf >= 0) {
    return schema.multipleOf
  }

  return undefined
}

export function not (schema) {
  return (isObject(schema.not) || isBoolean(schema.not)) ? schema.not : undefined
}

export function option (option) {
  return (schema.options && schema.options[option]) ? schema.options[option] : false
}

export function pattern (schema) {
  return isString(schema.pattern) ? schema.pattern : undefined
}

export function patternProperties (schema) {
  return isObject(schema.patternProperties) ? schema.patternProperties : undefined
}

export function prefixItems (schema) {
  return isArray(schema.prefixItems) ? schema.prefixItems : undefined
}

export function properties (schema) {
  return isObject(schema.properties) ? schema.properties : undefined
}

export function readOnly (schema) {
  return isBoolean(schema.readOnly) ? schema.readOnly : undefined
}

export function required (schema) {
  return isArray(schema.required) ? [...new Set(schema.required)] : undefined
}

export function then (schema) {
  return (isObject(schema.then) || isBoolean(schema.then)) ? schema.then : undefined
}

export function title (schema) {
  return isString(schema.title) ? schema.title : undefined
}

export function type (schema) {
  if (isString(schema.type) || isArray(schema.type)) {
    return schema.type
  }

  return undefined
}

export function typeIs (value) {
  return (isSet(this.type(schema)) && this.type(schema) === value)
}

export function typeIsNumeric (schema) {
  return this.typeIs('number') || this.typeIs('integer')
}

export function oneOf (schema) {
  return isArray(schema.oneOf) ? schema.oneOf : undefined
}

export function uniqueItems (schema) {
  return isBoolean(schema.uniqueItems) ? schema.uniqueItems : undefined
}

export function destroy (schema) {
  Object.keys(this).forEach((key) => {
    delete this[key]
  })
}
