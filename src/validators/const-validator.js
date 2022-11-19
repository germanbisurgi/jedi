import utils from '../utils'

class ConstValidator {
  constructor () {
    this.errors = []
  }

  validate (schema, value, path) {
    this.errors = []
    const _const = schema.const
    const hasConstConstrain = utils.isSet(_const)
    if (!hasConstConstrain) return
    const valueIsNotEqualConst = (JSON.stringify(value) !== JSON.stringify(_const))
    const invalid = (hasConstConstrain && valueIsNotEqualConst)

    if (invalid) {
      this.errors.push({
        message: 'Must have value: ' + JSON.stringify(_const),
        path: path
      })
    }

    return this.errors
  }
}

export default ConstValidator
