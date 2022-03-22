import utils from './utils'
import ArrayEditor from './editors/array'
import BooleanEditor from './editors/boolean'
import ObjectEditor from './editors/object'
import StringEditor from './editors/string'
import NumberEditor from './editors/number'
import IntegerEditor from './editors/integer'
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
        if (schema.type === 'string') {
          return StringEditor
        }
      },
      (schema) => {
        if (schema.type === 'number') {
          return NumberEditor
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
