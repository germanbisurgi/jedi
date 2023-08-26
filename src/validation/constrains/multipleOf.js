import { compileTemplate, isNumber, isSet } from '../../helpers/utils'
import { getSchemaMultipleOf } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function multipleOf (validator, value, schema, key, path) {
  const errors = []
  const multipleOf = getSchemaMultipleOf(schema)

  if (isNumber(value) && isSet(multipleOf)) {
    if (value === 0) {
      return errors
    }

    const isMultipleOf = (value / multipleOf === Math.floor(value / multipleOf))
    const invalid = (!isMultipleOf || value.toString().includes('e'))

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorMultipleOf, {
            multipleOf: multipleOf
          })
        ],
        path: path
      })
    }
  }

  return errors
}
