import { compileTemplate, isSet } from '../../helpers/utils.js'
import { getSchemaEnum } from '../../helpers/schema.js'

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
          compileTemplate(validator.translator.translate('errorEnum'), {
            enum: JSON.stringify(schemaEnum)
          })
        ]
      })
    }
  }
  return errors
}
