import { isSet, different } from '../../helpers/utils'
import { getSchemaConst } from '../../helpers/schema'

export function _const (validator, value, schema, key, path) {
  const errors = []
  const schemaConst = getSchemaConst(schema)

  if (isSet(schemaConst)) {
    const valueIsNotEqualConst = different(value, schemaConst)
    const invalid = (valueIsNotEqualConst)

    if (invalid) {
      errors.push({
        messages: [
          'Must be: ' + JSON.stringify(schemaConst)
        ],
        path: path
      })
    }
  }

  return errors
}
