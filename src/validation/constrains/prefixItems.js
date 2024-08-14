import { compileTemplate, isArray, isSet } from '../../helpers/utils.js'
import Validator from '../../validator.js'
import { getSchemaPrefixItems } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function prefixItems (validator, value, schema, key, path) {
  const errors = []
  const prefixItems = getSchemaPrefixItems(schema)

  if (isArray(value) && isSet(prefixItems)) {
    prefixItems.forEach((itemSchema, index) => {
      const itemValue = value[index]

      if (isSet(itemValue)) {
        const tmpEditor = new Validator({ refParser: validator.refParser, schema: itemSchema, data: itemValue })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()

        if (tmpErrors.length > 0) {
          errors.push({
            messages: [
              compileTemplate(i18n.errorPrefixItems, {
                index: index
              })
            ],
            path: path,
            constrain: 'prefixItems'
          })
        }
      }
    })
  }

  return errors
}
