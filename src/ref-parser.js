import { isArray, isObject, isSet, isString } from './utils'

class RefParser {
  constructor () {
    this.iterations = 5
    this.defs = {}
  }

  dereference (schema) {
    this.defs = schema['$defs'] || schema['definitions']

    for (let i = 0; i < this.iterations; i++) {
      this.traverse(this.defs)
      this.traverse(schema)
    }

    console.log('....dereferenced schema')
    console.log(JSON.stringify(schema, null, 2))
    return schema
  }

  define (ref) {
    if (!isString(ref)) {
      return ref
    }

    if (ref.startsWith('#/$defs') || ref.startsWith('#/definitions')) {
      const refParts = ref.split('/')
      const defName = refParts.pop()

      if (isSet(this.defs[defName])) {
        return this.defs[defName]
      }
    }

    return ref
  }

  traverse (value, thing, index) {
    if (isObject(value)) {
      if (isSet(value['$ref']) && isSet(thing)) {
        thing[index] = this.define(value['$ref'])
      } else {
        for (const index in value) {
          if (!Object.prototype.hasOwnProperty.call(value, index)) {
            continue
          }

          this.traverse(value[index], value, index)
        }
      }
    }

    if (isArray(value)) {
      value.forEach((item, index) => {
        this.traverse(item, value, index)
      })
    }
  }
}

export default RefParser
