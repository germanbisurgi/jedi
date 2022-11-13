import utils from '../utils'

class PatternValidator {
  validate (schema, value, path) {
    const errors = []
    const isStringType = schema.type === 'string'
    if (!isStringType) return
    const pattern = schema.pattern
    const hasPatternConstrain = utils.isSet(pattern) && utils.isString(pattern)
    if (!hasPatternConstrain) return
    const regexp = new RegExp(pattern)
    const matchPattern = regexp.test(value)
    const invalid = (hasPatternConstrain && !matchPattern)

    if (invalid) {
      errors.push({
        message: 'Must be the pattern: ' + pattern,
        path: path
      })
    }

    return errors
  }
}

export default PatternValidator
