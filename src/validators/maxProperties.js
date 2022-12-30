import { isObject } from '../utils'

class MaxProperties {
  validate (value, schema, key, path) {
    const errors = []

    if (isObject(value) && schema.maxProperties()) {
      const propertiesCount = Object.keys(value).length
      const invalid = (propertiesCount > schema.maxProperties())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have at most ' + schema.maxProperties() + ' properties',
          path: path
        })
      }
    }

    return errors
  }
}

export default MaxProperties
