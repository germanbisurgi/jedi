import { compileTemplate, isArray, isSet } from '../../helpers/utils.js'
import Jedi from '../../jedi.js'
import { getSchemaPrefixItems } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function prefixItems (validator, value, schema, key, path) {
  const errors = []
  const prefixItems = getSchemaPrefixItems(schema)

  if (isArray(value) && isSet(prefixItems)) {
    prefixItems.forEach((itemSchema, index) => {
      const itemValue = value[index]

      if (isSet(itemValue)) {
        const tmpEditor = new Jedi({ refParser: validator.refParser, schema: itemSchema, data: itemValue })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()

        if (tmpErrors.length > 0) {
          errors.push({
            path: path,
            constrain: 'prefixItems',
            messages: [
              compileTemplate(i18n.errorPrefixItems, {
                index: index
              })
            ]
          })
        }
      }
    })
  }

  return errors
}
