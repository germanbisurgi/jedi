import { isSet, different, compileTemplate } from '../../helpers/utils.js'
import { getSchemaConst } from '../../helpers/schema.js'

export function _const (validator, value, schema, key, path) {
  const errors = []
  const schemaConst = getSchemaConst(schema)

  if (isSet(schemaConst)) {
    const valueIsNotEqualConst = different(value, schemaConst)
    const invalid = (valueIsNotEqualConst)

    if (invalid) {
      errors.push({
        path: path,
        constraint: 'const',
        messages: [
          compileTemplate(validator.translator.translate('errorConst'), {
            const: JSON.stringify(schemaConst)
          })
        ]
      })
    }
  }

  return errors
}
