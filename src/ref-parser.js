/* global XMLHttpRequest */

import {
  isArray,
  isObject,
  isSet,
  isString,
  notSet
} from './utils'

class RefParser {
  constructor (options) {
    if (notSet(options)) {
      options = {}
    }

    this.iterations = options.iterations || 5
    this.XMLHttpRequest = options.XMLHttpRequest || XMLHttpRequest
    this.pointers = {}
  }

  dereference (schema) {
    for (let i = 0; i < this.iterations; i++) {
      // register pointers
      this.traverse({
        value: schema,
        callback: (args) => {
          if (args.key !== '$ref' && isObject(args.value)) {
            this.pointers[args.path] = args.value
          }
        }
      })

      // dereference
      this.traverse({
        value: schema,
        callback: (args) => {
          if (isSet(args.value['$ref']) && isSet(args.prevValue)) {
            args.prevValue[args.key] = this.define(args.value['$ref'])
          }
        }
      })

      // this.defineRefs(schema)
    }

    return schema
  }

  define (ref) {
    if (!isString(ref)) {
      return ref
    }

    // pointers
    if (ref.startsWith('#')) {
      if (isSet(this.pointers[ref])) {
        return this.pointers[ref]
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

    return undefined
  }

  traverse (args) {
    const value = args.value
    const callback = args.callback
    const path = isSet(args.path) ? args.path + '/' + args.key : '#'
    args.path = path

    if (isSet(callback)) {
      callback(args)
    }

    if (isObject(value)) {
      Object.keys(value).forEach((key) => {
        args.value = value[key]
        args.key = key
        args.path = path
        args.prevValue = value
        this.traverse(args)
      })
    }

    if (isArray(value)) {
      value.forEach((newValue, key) => {
        args.value = newValue
        args.key = key
        args.path = path
        args.prevValue = value
        this.traverse(args)
      })
    }
  }
}

export default RefParser
