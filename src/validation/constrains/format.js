import { isString } from '../../utils'

export const _format = (validator, value, schema, key, path) => {
  const errors = []

  if (schema.format() && isString(value)) {
    let invalid = false

    if (schema.formatIs('email')) {
      const regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)
      invalid = !regexp.test(value)
    }

    if (invalid) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must be a valid email address',
        path: path
      })
    }
  }

  return errors
}
