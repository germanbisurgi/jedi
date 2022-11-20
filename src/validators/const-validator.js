import utils from '../utils'

class ConstValidator {
  constructor () {
    this.errors = []
  }

  validate (key, schema, value, path) {
    this.errors = []
    const _const = schema.const
    const hasConstConstrain = utils.isSet(_const)
    if (!hasConstConstrain) return
    const valueIsNotEqualConst = (JSON.stringify(value) !== JSON.stringify(_const))
    const invalid = (hasConstConstrain && valueIsNotEqualConst)
    const field = schema.title || key

    if (invalid) {
      this.errors.push({
        message: field + ' must have value: ' + JSON.stringify(_const),
        path: path
      })
    }

    return this.errors
  }
}

export default ConstValidator
