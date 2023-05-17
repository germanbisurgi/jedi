import { _allOf } from '../constrains/allOf'
import { _minLength } from '../constrains/minLength'
import { _const } from '../constrains/const'
import { _contains } from '../constrains/contains'
import { _anyOf } from '../constrains/anyOf'
import { _dependentRequired } from '../constrains/dependentRequired'
import { _enum } from '../constrains/enum'
import { _exclusiveMaximum } from '../constrains/exclusiveMaximum'
import { _exclusiveMinimum } from '../constrains/exclusiveMinimum'
import { _format } from '../constrains/format'
import { _if } from '../constrains/if'
import { _maxItems } from '../constrains/maxItems'
import { _maxLength } from '../constrains/maxLength'
import { _maxProperties } from '../constrains/maxProperties'
import { _minimum } from '../constrains/minimum'
import { _minItems } from '../constrains/minItems'
import { _minProperties } from '../constrains/minProperties'
import { _multipleOf } from '../constrains/multipleOf'
import { _not } from '../constrains/not'
import { _oneOf } from '../constrains/oneOf'
import { _pattern } from '../constrains/pattern'
import { _patternProperties } from '../constrains/patternProperties'
import { _required } from '../constrains/required'
import { _type } from '../constrains/type'
import { _maximum } from '../constrains/maximum'
import { _uniqueItems } from '../constrains/uniqueItems'
import { _additionalProperties } from '../constrains/additionalProperties'

export default [
  _additionalProperties,
  _allOf,
  _anyOf,
  _const,
  _contains,
  _dependentRequired,
  _enum,
  _exclusiveMaximum,
  _exclusiveMinimum,
  _format,
  _if,
  _maximum,
  _maxItems,
  _maxLength,
  _maxProperties,
  _minimum,
  _minItems,
  _minLength,
  _minProperties,
  _multipleOf,
  _not,
  _oneOf,
  _pattern,
  _patternProperties,
  _required,
  _type,
  _uniqueItems
]
