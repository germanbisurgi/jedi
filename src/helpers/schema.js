import { isString, isArray, isNumber, isInteger, isBoolean, isObject, isSet } from './utils'

export function getSchema (schema) {
  return isString(schema.$schema) ? schema.$schema : undefined
}

export function getAdditionalProperties (schema) {
  return isObject(schema.additionalProperties) || isBoolean(schema.additionalProperties) ? schema.additionalProperties : true
}

export function getAllOf (schema) {
  return isArray(schema.allOf) ? schema.allOf : undefined
}

export function getAnyOf (schema) {
  return isArray(schema.anyOf) ? schema.anyOf : undefined
}

export function getConst (schema) {
  return schema.const
}

export function getContains (schema) {
  return (isObject(schema.contains) || isBoolean(schema.contains)) ? schema.contains : undefined
}

export function getDefault (schema) {
  return schema.default
}

export function getDependentRequired (schema) {
  return isObject(schema.dependentRequired) ? schema.dependentRequired : undefined
}

export function getDependentSchemas (schema) {
  return isObject(schema.dependentSchemas) ? schema.dependentSchemas : undefined
}

export function getDescription (schema) {
  return isString(schema.description) ? schema.description : undefined
}

export function getElse (schema) {
  return (isObject(schema.else) || isBoolean(schema.else)) ? schema.else : undefined
}

export function getEnum (schema) {
  if (isArray(schema.enum) && schema.enum.length > 0) {
    return schema.enum
  }

  return undefined
}

export function getExclusiveMaximum (schema) {
  return isNumber(schema.exclusiveMaximum) ? schema.exclusiveMaximum : undefined
}

export function getExclusiveMinimum (schema) {
  return isNumber(schema.exclusiveMinimum) ? schema.exclusiveMinimum : undefined
}

export function getFormat (schema) {
  return isString(schema.format) ? schema.format : undefined
}

export function getFormatIs (value) {
  return (isSet(this.format(schema)) && this.format(schema) === value)
}

export function getIf (schema) {
  if (isObject(schema.if)) {
    return schema.if
  }

  if (isBoolean(schema.if)) {
    return schema.if
  }

  return undefined
}

export function getItems (schema) {
  return isObject(schema.items) || isBoolean(schema.items) ? schema.items : undefined
}

export function getMaximum (schema) {
  return isNumber(schema.maximum) ? schema.maximum : undefined
}

export function getMaxContains (schema) {
  if (isInteger(schema.maxContains) && schema.maxContains >= 0) {
    return schema.maxContains
  }

  return undefined
}

export function getMaxItems (schema) {
  if (isInteger(schema.maxItems) && schema.maxItems >= 0) {
    return schema.maxItems
  }

  return undefined
}

export function getMaxLength (schema) {
  if (isInteger(schema.maxLength) && schema.maxLength >= 0) {
    return schema.maxLength
  }

  return undefined
}

export function getMaxProperties (schema) {
  if (isInteger(schema.maxProperties)) {
    return schema.maxProperties
  }

  return undefined
}

export function getMinimum (schema) {
  return isNumber(schema.minimum) ? schema.minimum : undefined
}

export function getMinContains (schema) {
  if (isInteger(schema.minContains) && schema.minContains >= 0) {
    return schema.minContains
  }

  return undefined
}

export function getMinItems (schema) {
  if (isInteger(schema.minItems) && schema.minItems >= 0) {
    return schema.minItems
  }

  return undefined
}

export function getMinLength (schema) {
  if (isInteger(schema.minLength) && schema.minLength >= 0) {
    return schema.minLength
  }

  return undefined
}

export function getMinProperties (schema) {
  if (isInteger(schema.minProperties) && schema.minProperties >= 0) {
    return schema.minProperties
  }

  return undefined
}

export function getMultipleOf (schema) {
  if (isNumber(schema.multipleOf) && schema.multipleOf >= 0) {
    return schema.multipleOf
  }

  return undefined
}

export function getNot (schema) {
  return (isObject(schema.not) || isBoolean(schema.not)) ? schema.not : undefined
}

export function getOption (option) {
  return (schema.options && schema.options[option]) ? schema.options[option] : false
}

export function getPattern (schema) {
  return isString(schema.pattern) ? schema.pattern : undefined
}

export function getPatternProperties (schema) {
  return isObject(schema.patternProperties) ? schema.patternProperties : undefined
}

export function getPrefixItems (schema) {
  return isArray(schema.prefixItems) ? schema.prefixItems : undefined
}

export function getProperties (schema) {
  return isObject(schema.properties) ? schema.properties : undefined
}

export function getReadOnly (schema) {
  return isBoolean(schema.readOnly) ? schema.readOnly : undefined
}

export function getRequired (schema) {
  return isArray(schema.required) ? [...new Set(schema.required)] : undefined
}

export function getThen (schema) {
  return (isObject(schema.then) || isBoolean(schema.then)) ? schema.then : undefined
}

export function getTitle (schema) {
  return isString(schema.title) ? schema.title : undefined
}

export function getType (schema) {
  if (isString(schema.type) || isArray(schema.type)) {
    return schema.type
  }

  return undefined
}

export function getTypeIs (value) {
  return (isSet(this.type(schema)) && this.type(schema) === value)
}

export function getTypeIsNumeric () {
  return this.typeIs('number') || this.typeIs('integer')
}

export function getOneOf (schema) {
  return isArray(schema.oneOf) ? schema.oneOf : undefined
}

export function getUniqueItems (schema) {
  return isBoolean(schema.uniqueItems) ? schema.uniqueItems : undefined
}
