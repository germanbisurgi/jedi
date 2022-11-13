import TypeValidator from './validators/type-validator'
import UniqueItemsValidator from './validators/unique-items-validator'
import MinItemsValidator from './validators/min-items-validator'
import MaxItemsValidator from './validators/max-items-validator'
import MinLengthValidator from './validators/min-length-validator'
import MaxLengthValidator from './validators/max-length-validator'
import PatternValidator from './validators/pattern-validator'
import MinimumValidator from './validators/minimum-validator'
import MaximumValidator from './validators/maximum-validator'
import MultipleOfValidator from './validators/multiple-of-validator'
import ConstValidator from './validators/const-validator'
import EnumValidator from './validators/enum-validator'
import RequiredValidator from './validators/required-validator'

class Validator {
  constructor () {
    this.validators = [
      new TypeValidator(),
      new UniqueItemsValidator(),
      new MinItemsValidator(),
      new MaxItemsValidator(),
      new MinLengthValidator(),
      new MaxLengthValidator(),
      new PatternValidator(),
      new MinimumValidator(),
      new MaximumValidator(),
      new MultipleOfValidator(),
      new ConstValidator(),
      new EnumValidator(),
      new RequiredValidator()
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
  validate (schema, value, path) {
    let schemaErrors = []

    this.validators.forEach((validator) => {
      const validatorErrors = validator.validate(schema, value, path)

      if (validatorErrors) {
        schemaErrors = [...schemaErrors, ...validatorErrors]
      }
    })

    return schemaErrors
  }
}

export default Validator
