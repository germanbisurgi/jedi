/**
 * constrains propertyNames
 */

import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import Jedison from '../../jedison.js'
import {
  getSchemaPropertyNames
} from '../../helpers/schema.js'

export function propertyNames (validator, value, schema, key, path) {
  const errors = []
  const schemaPropertyNames = getSchemaPropertyNames(schema)

  if (isObject(value) && isSet(schemaPropertyNames)) {
    Object.keys(value).forEach((propertyName) => {
      const editor = new Jedison({
        refParser: validator.refParser,
        schema: schemaPropertyNames,
        data: propertyName
      })

      const invalid = editor.getErrors().length > 0

      if (invalid) {
        errors.push({
          path: path,
          constraint: 'propertyNames',
          messages: [
            compileTemplate(validator.translator.translate('errorPropertyNames'), { propertyName: propertyName })
          ]
        })
      }
    })
  }

  return errors
}
