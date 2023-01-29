import { isSet, getType } from './utils'
import ArrayInstance from './types/array'
import BooleanInstance from './types/boolean'
import ObjectInstance from './types/object'
import StringInstance from './types/string'
import MultipleInstance from './types/multiple'
import NumberInstance from './types/number'
import NullInstance from './types/null'
import Schema from './schema'

class InstanceResolver {
  constructor () {
    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [
      (schema, config) => {
        if (schema.anyOf() || schema.oneOf() || schema.typeIs('any') || schema.types() || !schema.type()) {
          if (!schema.type() && schema.default()) {
            const originalSchema = schema.clone()
            originalSchema.type = getType(schema.default())
            const newSchema = new Schema(originalSchema)
            return this.resolve(newSchema)
          } else {
            return new MultipleInstance(config)
          }
        }
      },
      (schema, config) => {
        if (schema.typeIs('boolean')) {
          return new BooleanInstance(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('object')) {
          return new ObjectInstance(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('array')) {
          return new ArrayInstance(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('string')) {
          return new StringInstance(config)
        }
      },
      (schema, config) => {
        if (schema.typeIsNumeric()) {
          return new NumberInstance(config)
        }
      },
      (schema, config) => {
        if (schema.typeIs('null')) {
          return new NullInstance(config)
        }
      }
    ]
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

export default InstanceResolver
