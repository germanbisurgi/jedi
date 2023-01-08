import { isSet, getType, mergeDeep } from './utils'
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
import Schema from './schema'

class Resolver {
  constructor () {
    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [
      (schema, config) => {
        if (schema.allOf()) {
          let merged = {}

          schema.allOf().forEach((allOfSchema) => {
            merged = mergeDeep(merged, allOfSchema)
          })

          config.schema = new Schema(merged)

          return this.resolve(config)
        }
      },
      (schema, config) => {
        if (schema.anyOf() || schema.oneOf() || schema.typeIs('any') || schema.types() || !schema.type()) {
          if (!schema.type() && schema.default()) {
            const originalSchema = schema.clone()
            originalSchema.type = getType(schema.default())
            const newSchema = new Schema(originalSchema)
            return this.resolve(newSchema)
          } else {
            return new MultipleEditor(config)
          }
        }
      },
      (schema, config) => {
        if (schema.typeIs('boolean') && schema.formatIs('radio')) {
          return new BooleanEnumRadioEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('boolean') && schema.formatIs('select')) {
          return new BooleanEnumSelectEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('boolean')) {
          return new BooleanEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('object')) {
          return new ObjectEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('array')) {
          return new ArrayEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('string') && schema.enum() && schema.formatIs('radio')) {
          return new StringEnumRadioEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('string') && schema.enum()) {
          return new StringEnumSelectEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('string')) {
          return new StringEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIsNumeric() && schema.enum() && schema.formatIs('radio')) {
          return new NumberEnumRadioEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIsNumeric() && schema.enum()) {
          return new NumberEnumSelectEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIsNumeric()) {
          return new NumberEditor(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('null')) {
          return new NullEditor(config)
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
  resolve (config) {
    for (const resolver of this.resolvers) {
      const editorClass = resolver(config.schema, config)
      if (isSet(editorClass)) {
        return editorClass
      }
    }
  }
}

export default Resolver
