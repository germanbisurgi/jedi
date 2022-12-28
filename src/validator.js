import Type from './validators/type'
import UniqueItems from './validators/uniqueItems'
import MinItems from './validators/minItems'
import MaxItems from './validators/maxItems'
import MinLength from './validators/minLength'
import MaxLength from './validators/maxLength'
import Pattern from './validators/pattern'
import Minimum from './validators/minimum'
import Maximum from './validators/maximum'
import MultipleOf from './validators/multipleOf'
import Const from './validators/const'
import Enum from './validators/enum'
import Required from './validators/required'
import ExclusiveMaximum from './validators/exclusiveMaximum'
import ExclusiveMinimum from './validators/exclusiveMinimum'
import MinProperties from './validators/minProperties'
import MaxProperties from './validators/maxProperties'

class Validator {
  constructor () {
    this.validators = [
      new Type(),
      new UniqueItems(),
      new ExclusiveMaximum(),
      new ExclusiveMinimum(),
      new MinItems(),
      new MaxItems(),
      new MinLength(),
      new MaxLength(),
      new Pattern(),
      new Minimum(),
      new Maximum(),
      new MultipleOf(),
      new Const(),
      new Enum(),
      new Required(),
      new MinProperties(),
      new MaxProperties()
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
