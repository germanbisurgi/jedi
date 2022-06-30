import utils from './utils'
import ArrayEditor from './editors/array'
import BooleanEditor from './editors/boolean'
import BooleanEnumSelectEditor from './editors/boolean-enum-select'
import BooleanEnumRadioEditor from './editors/boolean-enum-radio'
import ObjectEditor from './editors/object'
import StringEditor from './editors/string'
import StringEnumSelectEditor from './editors/string-enum-select'
import StringEnumRadioEditor from './editors/string-enum-radio'
import MultipleEditor from './editors/multiple'
import NumberEditor from './editors/number'
import NumberEnumSelectEditor from './editors/number-enum-select'
import NumberEnumRadioEditor from './editors/number-enum-radio'
import NullEditor from './editors/null'

class Resolver {
  constructor () {
    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [
      (schema) => {
        const hasNoType = !utils.isSet(schema.type)
        const hasTypeAny = utils.isSet(schema.type) && schema.type === 'any'
        const hasTypeIsArray = utils.isArray(schema.type)
        const hasOneOf = utils.hasOneOf(schema)
        const hasAnyOf = utils.hasAnyOf(schema)
        if (hasAnyOf || hasOneOf || hasTypeAny || hasTypeIsArray || hasNoType) {
          return MultipleEditor
        }
      },
      (schema) => {
        const hasFormatRadio = utils.hasFormatRadio(schema)
        if (schema.type === 'boolean' && hasFormatRadio) {
          return BooleanEnumRadioEditor
        }
      },
      (schema) => {
        const hasFormatSelect = utils.hasFormatSelect(schema)
        if (schema.type === 'boolean' && hasFormatSelect) {
          return BooleanEnumSelectEditor
        }
      },
      (schema) => {
        if (schema.type === 'boolean') {
          return BooleanEditor
        }
      },
      (schema) => {
        if (schema.type === 'object') {
          return ObjectEditor
        }
      },
      (schema) => {
        if (schema.type === 'array') {
          return ArrayEditor
        }
      },
      (schema) => {
        const hasEnum = utils.getSchemaEnum(schema)
        const hasFormatRadio = utils.hasFormatRadio(schema)
        if (schema.type === 'string' && hasEnum && hasFormatRadio) {
          return StringEnumRadioEditor
        }
      },
      (schema) => {
        const hasEnum = utils.getSchemaEnum(schema)
        if (schema.type === 'string' && hasEnum) {
          return StringEnumSelectEditor
        }
      },
      (schema) => {
        if (schema.type === 'string') {
          return StringEditor
        }
      },
      (schema) => {
        const hasNumericType = utils.hasNumericType(schema)
        const hasEnum = utils.getSchemaEnum(schema)
        const hasFormatRadio = utils.hasFormatRadio(schema)
        if (hasNumericType && hasEnum && hasFormatRadio) {
          return NumberEnumRadioEditor
        }
      },
      (schema) => {
        const hasNumericType = utils.hasNumericType(schema)
        const hasEnum = utils.getSchemaEnum(schema)
        if (hasNumericType && hasEnum) {
          return NumberEnumSelectEditor
        }
      },
      (schema) => {
        const hasNumericType = utils.hasNumericType(schema)
        if (hasNumericType) {
          return NumberEditor
        }
      },
      (schema) => {
        if (schema.type === 'null') {
          return NullEditor
        }
      }
    ]
  }

  /**
   * Adds a resolver function
   */
  addResolver (resolver) {
    this.resolvers.unshift(resolver)
  }

  /**
   * returns the first editor class that matches the passed schema.
   */
  resolve (schema) {
    for (const resolver of this.resolvers) {
      const editorClass = resolver(schema)
      if (utils.isSet(editorClass)) {
        return editorClass
      } else {

      }
    }
  }
}

export default Resolver
