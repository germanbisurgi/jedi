import utils from './utils'
import ArrayEditor from './editors/array'
import BooleanEditor from './editors/boolean'
import ObjectEditor from './editors/object'
import StringEditor from './editors/string'
import StringEnumEditor from './editors/string-enum'
import StringEnumRadioEditor from './editors/string-enum-radio'
import NumberEditor from './editors/number'
import NumberEnumEditor from './editors/number-enum'
import IntegerEditor from './editors/integer'
import IntegerEnumEditor from './editors/integer-enum'
import NullEditor from './editors/null'

class Resolver {
  constructor () {
    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [
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
        const _enum = schema.enum
        const hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum)
        const format = schema.format
        const hasFormatRadio = utils.isSet(format) && utils.isString(format) && format === 'radio'
        if (schema.type === 'string' && hasEnumConstrain && hasFormatRadio) {
          return StringEnumRadioEditor
        }
      },
      (schema) => {
        const _enum = schema.enum
        const hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum)
        if (schema.type === 'string' && hasEnumConstrain) {
          return StringEnumEditor
        }
      },
      (schema) => {
        if (schema.type === 'string') {
          return StringEditor
        }
      },
      (schema) => {
        const _enum = schema.enum
        const hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum)
        if (schema.type === 'number' && hasEnumConstrain) {
          return NumberEnumEditor
        }
      },
      (schema) => {
        if (schema.type === 'number') {
          return NumberEditor
        }
      },
      (schema) => {
        const _enum = schema.enum
        const hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum)
        if (schema.type === 'integer' && hasEnumConstrain) {
          return IntegerEnumEditor
        }
      },
      (schema) => {
        if (schema.type === 'integer') {
          return IntegerEditor
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
