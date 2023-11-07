import { isString, isArray, isNumber, isInteger, isBoolean, isObject } from './utils'

export function getSchemaX (schema, keyword) {
  const key = 'x-' + keyword
  return schema[key]
}

export function getSchemaSchema (schema) {
  return isString(schema.$schema) ? schema.$schema : undefined
}

export function getSchemaAdditionalProperties (schema) {
  return isObject(schema.additionalProperties) || isBoolean(schema.additionalProperties) ? schema.additionalProperties : undefined
}

export function getSchemaAllOf (schema) {
  return isArray(schema.allOf) ? schema.allOf : undefined
}

export function getSchemaAnyOf (schema) {
  return isArray(schema.anyOf) ? schema.anyOf : undefined
}

export function getSchemaConst (schema) {
  return schema.const
}

export function getSchemaContains (schema) {
  return (isObject(schema.contains) || isBoolean(schema.contains)) ? schema.contains : undefined
}

export function getSchemaDefault (schema) {
  return schema.default
}

export function getSchemaDependentRequired (schema) {
  return isObject(schema.dependentRequired) ? schema.dependentRequired : undefined
}

export function getSchemaDependentSchemas (schema) {
  return isObject(schema.dependentSchemas) ? schema.dependentSchemas : undefined
}

export function getSchemaDescription (schema) {
  return isString(schema.description) ? schema.description : undefined
}

export function getSchemaElse (schema) {
  return (isObject(schema.else) || isBoolean(schema.else)) ? schema.else : undefined
}

export function getSchemaEnum (schema) {
  if (isArray(schema.enum) && schema.enum.length > 0) {
    return schema.enum
  }

  return undefined
}

export function getSchemaExclusiveMaximum (schema) {
  return isNumber(schema.exclusiveMaximum) ? schema.exclusiveMaximum : undefined
}

export function getSchemaExclusiveMinimum (schema) {
  return isNumber(schema.exclusiveMinimum) ? schema.exclusiveMinimum : undefined
}

export function getSchemaFormat (schema) {
  return isString(schema.format) ? schema.format : undefined
}

export function getSchemaIf (schema) {
  if (isObject(schema.if)) {
    return schema.if
  }

  if (isBoolean(schema.if)) {
    return schema.if
  }

  return undefined
}

export function getSchemaItems (schema) {
  return isObject(schema.items) || isBoolean(schema.items) ? schema.items : undefined
}

export function getSchemaMaximum (schema) {
  return isNumber(schema.maximum) ? schema.maximum : undefined
}

export function getSchemaMaxContains (schema) {
  if (isInteger(schema.maxContains) && schema.maxContains >= 0) {
    return schema.maxContains
  }

  return undefined
}

export function getSchemaMaxItems (schema) {
  if (isInteger(schema.maxItems) && schema.maxItems >= 0) {
    return schema.maxItems
  }

  return undefined
}

export function getSchemaMaxLength (schema) {
  if (isInteger(schema.maxLength) && schema.maxLength >= 0) {
    return schema.maxLength
  }

  return undefined
}

export function getSchemaMaxProperties (schema) {
  if (isInteger(schema.maxProperties)) {
    return schema.maxProperties
  }

  return undefined
}

export function getSchemaMinimum (schema) {
  return isNumber(schema.minimum) ? schema.minimum : undefined
}

export function getSchemaMinContains (schema) {
  if (isInteger(schema.minContains) && schema.minContains >= 0) {
    return schema.minContains
  }

  return undefined
}

export function getSchemaMinItems (schema) {
  if (isInteger(schema.minItems) && schema.minItems >= 0) {
    return schema.minItems
  }

  return undefined
}

export function getSchemaMinLength (schema) {
  if (isInteger(schema.minLength) && schema.minLength >= 0) {
    return schema.minLength
  }

  return undefined
}

export function getSchemaMinProperties (schema) {
  if (isInteger(schema.minProperties) && schema.minProperties >= 0) {
    return schema.minProperties
  }

  return undefined
}

export function getSchemaMultipleOf (schema) {
  if (isNumber(schema.multipleOf) && schema.multipleOf >= 0) {
    return schema.multipleOf
  }

  return undefined
}

export function getSchemaNot (schema) {
  return (isObject(schema.not) || isBoolean(schema.not)) ? schema.not : undefined
}

export function getSchemaOption (schema, option) {
  return (schema.options && schema.options[option]) ? schema.options[option] : undefined
}

export function getSchemaPattern (schema) {
  return isString(schema.pattern) ? schema.pattern : undefined
}

export function getSchemaPatternProperties (schema) {
  return isObject(schema.patternProperties) ? schema.patternProperties : undefined
}

export function getSchemaPrefixItems (schema) {
  return isArray(schema.prefixItems) ? schema.prefixItems : undefined
}

export function getSchemaProperties (schema) {
  return isObject(schema.properties) ? schema.properties : undefined
}

export function getSchemaReadOnly (schema) {
  return isBoolean(schema.readOnly) ? schema.readOnly : undefined
}

export function getSchemaRequired (schema) {
  return isArray(schema.required) ? [...new Set(schema.required)] : undefined
}

export function getSchemaThen (schema) {
  return (isObject(schema.then) || isBoolean(schema.then)) ? schema.then : undefined
}

export function getSchemaTitle (schema) {
  return isString(schema.title) ? schema.title : undefined
}

export function getSchemaType (schema) {
  if (isString(schema.type) || isArray(schema.type)) {
    return schema.type
  }

  return undefined
}

export function getSchemaOneOf (schema) {
  return isArray(schema.oneOf) ? schema.oneOf : undefined
}

export function getSchemaUniqueItems (schema) {
  return isBoolean(schema.uniqueItems) ? schema.uniqueItems : undefined
}
