import {isObject} from "../helpers/utils";

class RefParser {
  constructor(config = {}) {
    this.XMLHttpRequest = config.XMLHttpRequest
    this.maxDepths = 3
    this.refs = {}
    this.circularRefs = {}
  }

  dereference(schema) {
    this.traverseExternal(schema)
    this.traverseLocal(schema)
    this.populateCircularRefs()
  }

  /**
   * Traverses the given schema recursively and for each schema with $ref
   * add a new property in the this.refs object with key being the json path to that schema.
   * Initially the added properties will habe a value of null. This value will be later
   * replaced with the resolved schema for that json path using resolveExternal() and resolveLocal().
   *
   * It also adds a new property in the this.refs object with key being the json path to that schema
   * and value being the schema.
   * @param schema
   * @param path
   */
  traverseExternal(schema, path = '#') {
    if (typeof schema !== 'object' || schema === null) {
      return
    }

    for (const [key, value] of Object.entries(schema)) {
      const nextPath = path ? `${path}/${key}` : `/${key}`

      if (this.hasRef(schema)) {
        const ref = schema['$ref']

        if (this.refs[ref]) {
          // console.log('Skipped $ref', ref)
          return
        }

        this.refs[ref] = null

        if (this.hasExternalRef(schema)) {
          const resolvedSchema = this.resolveExternal(schema)
          this.traverseExternal(resolvedSchema, nextPath)
        }
      }

      this.refs[path] = schema

      this.traverseExternal(value, nextPath)
    }
  }

  traverseLocal(schema, path = '#') {
    if (typeof schema !== 'object' || schema === null) {
      return
    }

    for (const [key, value] of Object.entries(schema)) {
      const nextPath = path ? `${path}/${key}` : `/${key}`

      if (this.hasRef(schema)) {
        const ref = schema['$ref']

        if (this.refs[ref]) {
          // console.log('Skipped $ref', ref)
          return
        }

        if (!this.hasExternalRef(schema)) {
          const resolvedSchema = this.resolveLocal(schema)
          this.traverseLocal(resolvedSchema, nextPath)
        }
      }

      this.traverseLocal(value, nextPath)
    }
  }

  populateCircularRefs() {
    Object.keys(this.refs).forEach((ref) => {
      if (this.isCircularRef(ref)) {
        this.circularRefs[ref] = {
          schema: schema,
          pathDepths: []
        }
      }
    })
  }

  /**
   * Iterates through the this.refs object keys. If the key is an uri containing "http" or "https" then
   * uses that key as the url in a http request to retrieve the external schema. The retrieved schema
   * will be used for the value of that property
   */
  resolveExternal(schema) {
    const ref = schema['$ref']
    const resolvedSchema = this.load(ref)
    this.refs[ref] = resolvedSchema
    return resolvedSchema
  }

  /**
   * Iterates through the this.refs object keys and resolve all schemas that can be found in this.refs object
   */
  resolveLocal(schema) {
    const ref = schema['$ref']

    let resolvedSchema = null

    if (this.refs[ref]) {
      resolvedSchema = this.refs[ref]
      this.refs[ref] = this.refs[ref]
    }

    return resolvedSchema
  }

  hasRef(schema) {
    return typeof schema['$ref'] !== 'undefined'
  }

  hasExternalRef(schema) {
    const ref = schema['$ref']

    if (typeof ref !== 'string') {
      return false
    }

    return ref.startsWith('http') || ref.startsWith('https')
  }

  isCircularRef(ref) {
    const test = `"$ref":"${ref}"`
    return JSON.stringify(this.refs[ref]).includes(test)
  }

  expand(schema, path) {
    const cloneSchema = JSON.parse(JSON.stringify(schema))

    if (isObject(cloneSchema) && '$ref' in cloneSchema) {
      const ref = cloneSchema.$ref

      if (this.circularRefs[ref]) {
        const pathDepth = path.split('/').length
        this.circularRefs[ref].pathDepths.push(pathDepth)
        this.circularRefs[ref].pathDepths = Array.from(new Set(this.circularRefs[ref].pathDepths))
        this.circularRefs[ref].pathDepths.splice(this.maxDepths)

        if (!this.circularRefs[ref].pathDepths.includes(pathDepth)) {
          return {
            type: 'null'
          }
        }
      }

      delete cloneSchema['$ref']
      return Object.assign({}, this.refs[ref], cloneSchema)
    }

    return cloneSchema
  }

  /**
   * Loads a schema with a synchronous http request
   * @param uri
   * @returns {any}
   */
  load(uri) {
    const request = this.XMLHttpRequest ? new this.XMLHttpRequest() : new XMLHttpRequest()
    request.open('GET', uri, false) // `false` makes the request synchronous
    request.send(null)

    if (request.status === 200) {
      return JSON.parse(request.responseText)
    } else {
      console.error('can not load', uri)
    }
  }
}

export default RefParser
