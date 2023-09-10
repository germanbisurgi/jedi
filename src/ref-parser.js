/* global XMLHttpRequest */

import {
  isArray,
  isObject,
  isSet,
  notSet
} from './helpers/utils'
import {
  getSchemaAllOf,
  getSchemaAnyOf,
  getSchemaOneOf,
  getSchemaPrefixItems
} from './helpers/schema'

/**
 * Represents a RefParser instance.
 */
class RefParser {
  constructor (options) {
    if (notSet(options)) {
      options = {}
    }

    this.iterations = options.iterations || 1
    this.XMLHttpRequest = options.XMLHttpRequest || XMLHttpRequest
    this.refDefinitions = {}
  }

  dereference (schema) {
    this.traverse({
      value: schema,
      callback: (args) => {
        if (args.key === '$ref') {
          this.refDefinitions[args.value] = null
        }
      }
    })

    // define external refs
    Object.keys(this.refDefinitions).forEach((ref) => {
      if (ref.startsWith('http') || ref.startsWith('https')) {
        const request = new this.XMLHttpRequest()
        request.open('GET', ref, false) // `false` makes the request synchronous
        request.send(null)

        if (request.status === 200) {
          this.refDefinitions[ref] = JSON.parse(request.responseText)
        } else {
          console.error('can not load', ref)
        }
      }
    })

    // define internal refs
    this.traverse({
      value: schema,
      callback: (args) => {
        if (isSet(this.refDefinitions[args.path])) {
          this.refDefinitions[args.path] = args.value
        }
      }
    })

    // console.log(JSON.stringify(this.refDefinitions, null, 2))
    // console.log(JSON.stringify(schema, null, 2))

    return schema
  }

  expand (schema) {
    // console.log('EXPAND', JSON.stringify(schema, null, 2))
    if (isSet(schema['$ref'])) {
      return this.refDefinitions[schema['$ref']]
    }

    const anyOf = getSchemaAnyOf(schema)
    const oneOf = getSchemaOneOf(schema)
    const allOf = getSchemaAllOf(schema)
    const prefixItems = getSchemaPrefixItems(schema)

    if (isSet(anyOf)) {
      Object.entries(anyOf).forEach(([key, value]) => {
        schema.anyOf[key] = this.expand(value)
      })
    }

    if (isSet(oneOf)) {
      Object.entries(oneOf).forEach(([key, value]) => {
        schema.oneOf[key] = this.expand(value)
      })
    }

    if (isSet(allOf)) {
      Object.entries(allOf).forEach(([key, value]) => {
        schema.allOf[key] = this.expand(value)
      })
    }

    if (isSet(prefixItems)) {
      Object.entries(prefixItems).forEach(([key, value]) => {
        schema.prefixItems[key] = this.expand(value)
      })
    }

    return schema
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
