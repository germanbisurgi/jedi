import { isArray, isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaPrefixItems } from '../../helpers/schema'

export function prefixItems (validator, value, schema, key, path) {
  const errors = []
  const schemaPrefixItems = getSchemaPrefixItems(schema)

  if (isArray(value) && isSet(schemaPrefixItems)) {
    schemaPrefixItems.forEach((itemSchema, index) => {
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
