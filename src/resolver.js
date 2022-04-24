import utils from './utils'
import ArrayEditor from './editors/array'
import BooleanEditor from './editors/boolean'
import BooleanEnumSelectEditor from './editors/boolean-enum-select'
import BooleanEnumRadioEditor from './editors/boolean-enum-radio'
import ObjectEditor from './editors/object'
import StringEditor from './editors/string'
import StringEnumSelectEditor from './editors/string-enum-select'
import StringEnumRadioEditor from './editors/string-enum-radio'
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
        const hasEnumConstrain = utils.getSchemaEnum(schema)
        const hasFormatRadio = utils.hasFormatRadio(schema)
        if (schema.type === 'string' && hasEnumConstrain && hasFormatRadio) {
          return StringEnumRadioEditor
        }
      },
      (schema) => {
        const hasEnumConstrain = utils.getSchemaEnum(schema)
        if (schema.type === 'string' && hasEnumConstrain) {
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
        const hasEnumConstrain = utils.getSchemaEnum(schema)
        const hasFormatRadio = utils.hasFormatRadio(schema)
        if (hasNumericType && hasEnumConstrain && hasFormatRadio) {
          return NumberEnumRadioEditor
        }
      },
      (schema) => {
        const hasNumericType = utils.hasNumericType(schema)
        const hasEnumConstrain = utils.getSchemaEnum(schema)
        if (hasNumericType && hasEnumConstrain) {
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
      }
    }
  }
}

export default Resolver
