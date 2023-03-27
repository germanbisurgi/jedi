/* global XMLHttpRequest */

import {
  isArray,
  isObject,
  isSet,
  isString,
  notSet,
  clone, equal
} from './utils'

class RefParser {
  constructor (options) {
    if (notSet(options)) {
      options = {}
    }

    this.iterations = options.iterations || 7
    this.XMLHttpRequest = options.XMLHttpRequest || XMLHttpRequest
    this.definitions = {}
  }

  dereference (schema) {
    for (let i = 0; i < this.iterations; i++) {
      // register definitions as long as they are not references
      this.traverse({
        value: schema,
        callback: (args) => {
          if (args.key !== '$ref') {
            this.definitions[args.path] = args.value
          }
        }
      })

      // dereference
      this.traverse({
        value: schema,
        callback: (args) => {
          if (!isObject(args.value)) {
            return
          }

          const refOwner = args.prevValue
          const ref = args.value['$ref']

          if (isSet(refOwner) && isSet(ref)) {
            if (this.isCircularPath(args.path)) {
              console.log('circular', args.path)
              return
            }

            refOwner[args.key] = this.define(ref)
          }
        }
      })
    }

    return schema
  }

  isCircularPath (path) {
    let output = false

    Object.keys(this.definitions).forEach((key) => {
      // remove #
      path = path.substring(1)

      if (path.length === 0) {
        return output
      }

      const half = Math.ceil(path.length / 2)
      const firstHalf = path.slice(0, half)
      const secondHalf = path.slice(half)

      if (equal(firstHalf, secondHalf)) {
        output = true
      }
    })

    return output
  }

  define (ref) {
    if (!isString(ref)) {
      return ref
    }

    // definitions
    if (ref.startsWith('#')) {
      if (isSet(this.definitions[ref])) {
        return clone(this.definitions[ref])
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
