import Type from './validators/type'
import Uniqueitems from './validators/unique-items'
import Minitems from './validators/min-items'
import Maxitems from './validators/max-items'
import Minlength from './validators/min-length'
import Maxlength from './validators/max-length'
import Pattern from './validators/pattern'
import Minimum from './validators/minimum'
import Maximum from './validators/maximum'
import Multipleof from './validators/multiple-of'
import Const from './validators/const'
import Enum from './validators/enum'
import Required from './validators/required'

class Validator {
  constructor () {
    this.validators = [
      new Type(),
      new Uniqueitems(),
      new Minitems(),
      new Maxitems(),
      new Minlength(),
      new Maxlength(),
      new Pattern(),
      new Minimum(),
      new Maximum(),
      new Multipleof(),
      new Const(),
      new Enum(),
      new Required()
    ]
  }

  /**
   * Adds a validator function
   */
  addValidator (validator) {
    this.validators.push(validator)
  }

  /**
   * Validates a value against it's schema
   */
  validate (key, schema, value, path) {
    let schemaErrors = []

    this.validators.forEach((validator) => {
      const validatorErrors = validator.validate(key, schema, value, path)

      if (validatorErrors) {
        schemaErrors = [...schemaErrors, ...validatorErrors]
      }
    })

    return schemaErrors
  }
}

export default Validator
