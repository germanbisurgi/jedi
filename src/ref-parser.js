/* global XMLHttpRequest */

import {
  isArray,
  isObject,
  isSet,
  isString,
  fakeForEach,
  notSet
} from './utils'

class RefParser {
  constructor (options) {
    if (notSet(options)) {
      options = {}
    }

    this.iterations = options.iterations || 5
    this.XMLHttpRequest = options.XMLHttpRequest || XMLHttpRequest
    this.defs = {}
  }

  dereference (schema) {
    this.defs = schema['$defs']

    for (let i = 0; i < this.iterations; i++) {
      this.traverse(schema)
    }

    return schema
  }

  define (ref) {
    if (!isString(ref)) {
      return ref
    }

    if (ref.startsWith('#/$defs')) {
      const refParts = ref.split('/')
      const defName = refParts.pop()

      if (isSet(this.defs[defName])) {
        return this.defs[defName]
      }
    }

    if (ref.startsWith('http') || ref.startsWith('https')) {
      const request = new this.XMLHttpRequest()
      request.open('GET', ref, false) // `false` makes the request synchronous
      request.send(null)

      if (request.status === 200) {
        return JSON.parse(request.responseText)
      } else {
        console.error('can not load', ref)
      }
    }

    return ref
  }

  traverse (value, thing, index) {
    if (isObject(value)) {
      if (isSet(value['$ref']) && isSet(thing)) {
        thing[index] = this.define(value['$ref'])
      } else {
        fakeForEach(Object.keys(value), (item) => {
          this.traverse(value[item], value, item)
        })
      }
    }

    if (isArray(value)) {
      fakeForEach(value, (item, index) => {
        this.traverse(item, value, index)
      })
    }
  }
}

export default RefParser
