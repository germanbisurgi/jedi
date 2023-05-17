import { allOf } from '../constrains/allOf'
import { minLength } from '../constrains/minLength'
import { _const } from '../constrains/const'
import { contains } from '../constrains/contains'
import { anyOf } from '../constrains/anyOf'
import { dependentRequired } from '../constrains/dependentRequired'
import { _enum } from '../constrains/enum'
import { exclusiveMaximum } from '../constrains/exclusiveMaximum'
import { exclusiveMinimum } from '../constrains/exclusiveMinimum'
import { format } from '../constrains/format'
import { _if } from '../constrains/if'
import { maxItems } from '../constrains/maxItems'
import { maxLength } from '../constrains/maxLength'
import { maxProperties } from '../constrains/maxProperties'
import { minimum } from '../constrains/minimum'
import { minItems } from '../constrains/minItems'
import { minProperties } from '../constrains/minProperties'
import { multipleOf } from '../constrains/multipleOf'
import { not } from '../constrains/not'
import { oneOf } from '../constrains/oneOf'
import { pattern } from '../constrains/pattern'
import { patternProperties } from '../constrains/patternProperties'
import { required } from '../constrains/required'
import { type } from '../constrains/type'
import { maximum } from '../constrains/maximum'
import { uniqueItems } from '../constrains/uniqueItems'
import { additionalProperties } from '../constrains/additionalProperties'

export default {
  additionalProperties: additionalProperties,
  allOf: allOf,
  anyOf: anyOf,
  const: _const,
  contains: contains,
  dependentRequired: dependentRequired,
  enum: _enum,
  exclusiveMaximum: exclusiveMaximum,
  exclusiveMinimum: exclusiveMinimum,
  format: format,
  if: _if,
  maximum: maximum,
  maxItems: maxItems,
  maxLength: maxLength,
  maxProperties: maxProperties,
  minimum: minimum,
  minItems: minItems,
  minLength: minLength,
  minProperties: minProperties,
  multipleOf: multipleOf,
  not: not,
  oneOf: oneOf,
  pattern: pattern,
  patternProperties: patternProperties,
  required: required,
  type: type,
  uniqueItems: uniqueItems
}
