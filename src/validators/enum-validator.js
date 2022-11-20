import utils from '../utils'

class EnumValidator {
  constructor () {
    this.errors = []
  }

  validate (key, schema, value, path) {
    this.errors = []
    const _enum = schema.enum
    const hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum)
    if (!hasEnumConstrain) return
    const valueNotInEnum = !_enum.some(e => JSON.stringify(value) === JSON.stringify(e))
    const invalid = (hasEnumConstrain && valueNotInEnum)
    const field = schema.title || key

    if (invalid) {
      this.errors.push({
        message: field + ' must be one of the enumerated values',
        path: path
      })
    }

    return this.errors
  }
}

export default EnumValidator
