import { isArray, isSet } from '../../utils'
import Jedi from '../../jedi'

export function prefixItems (validator, value, schema, key, path) {
  const errors = []

  if (isArray(value) && isSet(schema.prefixItems())) {
    schema.prefixItems().forEach((itemSchema, index) => {
      const itemValue = value[index]

      if (isSet(itemValue)) {
        const tmpEditor = new Jedi({ schema: itemSchema, startValue: itemValue, refParser: false })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()

        if (tmpErrors.length > 0) {
          errors.push({
            messages: [`Item ${index} fails validation.`],
            path: path
          })
        }
      }
    })
  }

  return errors
}
