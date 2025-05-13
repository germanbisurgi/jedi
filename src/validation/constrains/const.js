import { isSet, different, compileTemplate } from '../../helpers/utils.js'
import { getSchemaConst } from '../../helpers/schema.js'

export function _const (context) {
  const errors = []
  const schemaConst = getSchemaConst(context.schema)

  if (isSet(schemaConst)) {
    const valueIsNotEqualConst = different(context.value, schemaConst)
    const invalid = (valueIsNotEqualConst)

    if (invalid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'const',
        messages: [
          compileTemplate(context.translator.translate('errorConst'), {
            const: JSON.stringify(schemaConst)
          })
        ]
      })
    }
  }

  return errors
}
