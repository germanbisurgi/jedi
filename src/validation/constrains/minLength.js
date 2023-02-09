import { isSet, isString } from '../../utils'

export const _minLength = (validator, value, schema, key, path) => {
  const errors = []

  if (isString(value) && isSet(schema.minLength())) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length < schema.minLength())

    if (invalid) {
      errors.push({
        message: 'Must be at least ' + schema.minLength() + ' characters long',
        path: path
      })
    }
  }

  return errors
}
