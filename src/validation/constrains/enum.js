import { compileTemplate, isSet } from '../../helpers/utils'
import { getSchemaEnum } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function _enum (validator, value, schema, key, path) {
  const errors = []
  const schemaEnum = getSchemaEnum(schema)

  if (isSet(schemaEnum)) {
    const invalid = !schemaEnum.some(e => JSON.stringify(value) === JSON.stringify(e))

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorEnum, {
            enum: JSON.stringify(schemaEnum)
          })
        ],
        path: path,
        constrain: 'enum'
      })
    }
  }
  return errors
}
