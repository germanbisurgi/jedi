import { isSet, different, compileTemplate } from '../../helpers/utils.js'
import { getSchemaConst } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function _const (validator, value, schema, key, path) {
  const errors = []
  const schemaConst = getSchemaConst(schema)

  if (isSet(schemaConst)) {
    const valueIsNotEqualConst = different(value, schemaConst)
    const invalid = (valueIsNotEqualConst)

    if (invalid) {
      errors.push({
        path: path,
        constrain: 'const',
        messages: [
          compileTemplate(i18n.errorConst, {
            const: JSON.stringify(schemaConst)
          })
        ]
      })
    }
  }

  return errors
}
