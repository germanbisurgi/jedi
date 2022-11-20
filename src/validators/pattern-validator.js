import utils from '../utils'

class PatternValidator {
  validate (key, schema, value, path) {
    const errors = []
    const isStringType = schema.type === 'string'
    if (!isStringType) return
    const pattern = schema.pattern
    const hasPatternConstrain = utils.isSet(pattern) && utils.isString(pattern)
    if (!hasPatternConstrain) return
    const regexp = new RegExp(pattern)
    const matchPattern = regexp.test(value)
    const invalid = (hasPatternConstrain && !matchPattern)
    const field = schema.title || key

    if (invalid) {
      errors.push({
        message: field + ' must be the pattern: ' + pattern,
        path: path
      })
    }

    return errors
  }
}

export default PatternValidator
