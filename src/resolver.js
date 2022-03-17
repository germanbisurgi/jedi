import StringEditor from './editors/string'
import ObjectEditor from './editors/object'

class Resolver {
  constructor () {
    this.classes = {
      string: StringEditor,
      object: ObjectEditor
    }

    this.resolvers = [
      (schema) => {
        if (typeof schema.type === 'string') {
          return this.classes[schema.type]
        }
      },
      (schema) => {
        if (!schema.type && schema.properties) {
          return this.classes['object']
        }
      }
    ]
  }

  addResolver (resolver) {
    // todo prevent doubles
    this.resolvers.unshift(resolver)
  }

  resolve (schema) {
    let className = false
    this.resolvers.forEach((resolver) => {
      if (resolver(schema)) {
        className = resolver(schema)
      }
    })
    return className
  }
}

export default Resolver
