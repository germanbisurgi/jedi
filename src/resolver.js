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
        if (schema.anyOf() || schema.oneOf() || schema.typeIs('any') || schema.types() || !schema.type()) {
          return MultipleEditor
        }
      },
      (schema) => {
        if (schema.typeIs('boolean') && schema.formatIs('radio')) {
          return BooleanEnumRadioEditor
        }
      },
      (schema) => {
        if (schema.typeIs('boolean') && schema.formatIs('select')) {
          return BooleanEnumSelectEditor
        }
      },
      (schema) => {
        if (schema.typeIs('boolean')) {
          return BooleanEditor
        }
      },
      (schema) => {
        if (schema.typeIs('object')) {
          return ObjectEditor
        }
      },
      (schema) => {
        if (schema.typeIs('array')) {
          return ArrayEditor
        }
      },
      (schema) => {
        if (schema.typeIs('string') && schema.enum() && schema.formatIs('radio')) {
          return StringEnumRadioEditor
        }
      },
      (schema) => {
        if (schema.typeIs('string') && schema.enum()) {
          return StringEnumSelectEditor
        }
      },
      (schema) => {
        if (schema.typeIs('string')) {
          return StringEditor
        }
      },
      (schema) => {
        if (schema.typeIsNumeric() && schema.enum() && schema.formatIs('radio')) {
          return NumberEnumRadioEditor
        }
      },
      (schema) => {
        if (schema.typeIsNumeric() && schema.enum()) {
          return NumberEnumSelectEditor
        }
      },
      (schema) => {
        if (schema.typeIsNumeric()) {
          return NumberEditor
        }
      },
      (schema) => {
        if (schema.typeIs('null')) {
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
