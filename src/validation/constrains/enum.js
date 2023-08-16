import { isSet } from '../../helpers/utils'
import { getSchemaEnum } from '../../helpers/schema'

export function _enum (validator, value, schema, key, path) {
  const errors = []
  const schemaEnum = getSchemaEnum(schema)

  if (isSet(schemaEnum)) {
    const invalid = !schemaEnum.some(e => JSON.stringify(value) === JSON.stringify(e))

    if (invalid) {
      errors.push({
        messages: [
          'Must be one of the enumerated values: ' + JSON.stringify(schemaEnum)
        ],
        path: path
      })
    }
  }
  return errors
}
