import { isArray, isSet } from '../../utils'
import Jedi from '../../jedi'

export const prefixItems = (validator, value, schema, key, path) => {
  const errors = []

  if (isArray(value) && isSet(schema.prefixItems())) {
    schema.prefixItems().forEach((itemSchema, index) => {
      const itemValue = value[index]

      if (isSet(itemValue)) {
        const tmpEditor = new Jedi({ schema: itemSchema, startValue: itemValue, refParser: false })
        // const tmpEditor = validator.validate()
        const tmpErrors = tmpEditor.validate()
        tmpEditor.destroy()

        if (tmpErrors.length > 0) {
          errors.push({
            message: `Item ${index} fails validation.`,
            path: path
          })
        }
      }
    })
  }

  return errors
}
