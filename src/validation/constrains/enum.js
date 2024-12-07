import { compileTemplate, isSet } from '../../helpers/utils.js'
import { getSchemaEnum } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function _enum (validator, value, schema, key, path) {
  const errors = []
  const schemaEnum = getSchemaEnum(schema)

  if (isSet(schemaEnum)) {
    const invalid = !schemaEnum.some(e => JSON.stringify(value) === JSON.stringify(e))

    if (invalid) {
      errors.push({
        path: path,
        constrain: 'enum',
        messages: [
          compileTemplate(i18n.errorEnum, {
            enum: JSON.stringify(schemaEnum)
          })
        ]
      })
    }
  }
  return errors
}
