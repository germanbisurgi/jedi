import BooleanCheckbox from './editors/boolean-checkbox'
import BooleanSelect from './editors/boolean-select'
import ObjectEditor from './editors/object'
import StringEditor from './editors/string'

class Resolver {
  constructor () {
    this.classes = {
      booleanCheckbox: BooleanCheckbox,
      booleanSelect: BooleanSelect,
      object: ObjectEditor,
      string: StringEditor
    }

    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [
      (schema) => {
        if (schema.type === 'boolean' && schema.format === 'checkbox') {
          return this.classes.booleanCheckbox
        }
      },
      (schema) => {
        if (schema.type === 'boolean' && schema.format === 'select') {
          return this.classes.booleanSelect
        }
      },
      (schema) => {
        if (schema.type === 'boolean') {
          return this.classes.booleanCheckbox
        }
      },
      (schema) => {
        if (!schema.type && schema.properties) {
          return this.classes.object
        }
      },
      (schema) => {
        if (schema.type === 'string') {
          return this.classes.string
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
      const className = resolver(schema)
      if (typeof className !== 'undefined') {
        return className
      }
    }
  }
}

export default Resolver
