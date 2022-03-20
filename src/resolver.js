import ArrayEditor from './editors/array'
import BooleanCheckbox from './editors/boolean-checkbox'
import BooleanSelect from './editors/boolean-select'
import ObjectEditor from './editors/object'
import StringEditor from './editors/string'
import NumberEditor from './editors/number'
import NumberRangeEditor from './editors/number-range'

class Resolver {
  constructor () {
    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [
      (schema) => {
        if (schema.type === 'boolean' && schema.format === 'checkbox') {
          return BooleanCheckbox
        }
      },
      (schema) => {
        if (schema.type === 'boolean' && schema.format === 'select') {
          return BooleanSelect
        }
      },
      (schema) => {
        if (schema.type === 'boolean') {
          return BooleanCheckbox
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
        if (schema.type === 'number' && schema.format === 'range') {
          return NumberRangeEditor
        }
      },
      (schema) => {
        if (schema.type === 'number') {
          return NumberEditor
        }
      },
      (schema) => {
        if (schema.type === 'integer') {
          return NumberEditor
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
      if (typeof editorClass !== 'undefined') {
        return editorClass
      }
    }
  }
}

export default Resolver
