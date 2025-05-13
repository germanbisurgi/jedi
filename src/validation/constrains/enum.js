import { compileTemplate, isSet } from '../../helpers/utils.js'
import { getSchemaEnum } from '../../helpers/schema.js'

export function _enum (context) {
  const errors = []
  const schemaEnum = getSchemaEnum(context.schema)

  if (isSet(schemaEnum)) {
    const invalid = !schemaEnum.some(e => JSON.stringify(context.value) === JSON.stringify(e))

    if (invalid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'enum',
        messages: [
          compileTemplate(context.translator.translate('errorEnum'), {
            enum: JSON.stringify(schemaEnum)
          })
        ]
      })
    }
  }
  return errors
}
