import { compileTemplate, isArray, isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaPrefixItems } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function prefixItems (validator, value, schema, key, path) {
  const errors = []
  const prefixItems = getSchemaPrefixItems(schema)

  if (isArray(value) && isSet(prefixItems)) {
    prefixItems.forEach((itemSchema, index) => {
      const itemValue = value[index]

      if (isSet(itemValue)) {
        const tmpEditor = new Jedi({ refParser: validator.refParser,  XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: itemSchema, data: itemValue })
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
