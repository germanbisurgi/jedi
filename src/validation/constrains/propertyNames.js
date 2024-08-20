/**
 * constrains propertyNames
 */

import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import Jedi from '../../jedi.js'
import {
  getSchemaPropertyNames
} from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function propertyNames (validator, value, schema, key, path) {
  const errors = []
  const schemaPropertyNames = getSchemaPropertyNames(schema)

  if (isObject(value) && isSet(schemaPropertyNames)) {
    Object.keys(value).forEach((propertyName) => {
      const editor = new Jedi({
        refParser: validator.refParser,
        schema: schemaPropertyNames,
        data: propertyName
      })

      const invalid = editor.getErrors().length > 0

      if (invalid) {
        errors.push({
          messages: [
            compileTemplate(i18n.errorPropertyNames, { propertyName: propertyName })
          ],
          path: path,
          constrain: 'propertyNames'
        })
      }
    })
  }

  return errors
}
