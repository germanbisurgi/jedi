import utils from '../utils'

class ConstValidator {
  validate (key, schema, value, path) {
    const errors = []
    const _const = schema.const
    const hasConstConstrain = utils.isSet(_const)
    if (!hasConstConstrain) return
    const valueIsNotEqualConst = (JSON.stringify(value) !== JSON.stringify(_const))
    const invalid = (hasConstConstrain && valueIsNotEqualConst)
    const field = schema.title || key

    if (invalid) {
      errors.push({
        message: field + ' must have value: ' + JSON.stringify(_const),
        path: path
      })
    }

    return errors
  }
}

export default ConstValidator
