import utils from '../utils'

class EnumValidator {
  validate (key, schema, value, path) {
    const errors = []
    const _enum = schema.enum
    const hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum)
    if (!hasEnumConstrain) return
    const valueNotInEnum = !_enum.some(e => JSON.stringify(value) === JSON.stringify(e))
    const invalid = (hasEnumConstrain && valueNotInEnum)
    const field = schema.title || key

    if (invalid) {
      errors.push({
        message: field + ' must be one of the enumerated values',
        path: path
      })
    }

    return errors
  }
}

export default EnumValidator
