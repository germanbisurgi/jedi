class SchemaGenerator {
  static inferType (value) {
    if (Array.isArray(value)) return 'array'
    if (value === null) return 'null'
    return typeof value
  }

  static generate (obj) {
    if (typeof obj !== 'object' || obj === null) {
      return { type: this.inferType(obj) }
    }

    if (Array.isArray(obj)) {
      const itemSchemas = obj.map(item => this.generate(item))
      return {
        type: 'array',
        items: itemSchemas.length ? itemSchemas[0] : {}
      }
    }

    const properties = {}
    for (const key in obj) {
      properties[key] = this.generate(obj[key])
    }

    return {
      type: 'object',
      properties: properties
    }
  }
}

export default SchemaGenerator
