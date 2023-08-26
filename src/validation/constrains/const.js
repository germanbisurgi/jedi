import { isSet, different, compileTemplate } from '../../helpers/utils'
import { getSchemaConst } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function _const (validator, value, schema, key, path) {
  const errors = []
  const schemaConst = getSchemaConst(schema)

  if (isSet(schemaConst)) {
    const valueIsNotEqualConst = different(value, schemaConst)
    const invalid = (valueIsNotEqualConst)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorConst, {
            const: JSON.stringify(schemaConst)
          })
        ],
        path: path
      })
    }
  }

  return errors
}
