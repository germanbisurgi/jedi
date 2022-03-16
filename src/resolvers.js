const object = (schema) => !schema.type && schema.properties && 'object'

export default [
  object
]
