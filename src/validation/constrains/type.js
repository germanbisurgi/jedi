import { getType, isArray } from '../../utils'

export const _type = (validator, value, schema, key, path) => {
  const errors = []

  if (isArray(schema.type())) {
    return errors
  }

  if (schema.typeIs('any')) {
    return errors
  }

  if (schema.type()) {
    const valid = schema.type() === getType(value)

    if (!valid) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must be of type ' + schema.type(),
        path: path
      })
    }
  }

  return errors
}
