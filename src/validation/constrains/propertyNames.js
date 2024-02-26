/**
 * constrains propertyNames
 */

import { compileTemplate, isObject, isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import {
  getSchemaPropertyNames
} from '../../helpers/schema'
import { i18n } from '../../i18n'

export function propertyNames (validator, value, schema, key, path) {
  const errors = []
  const schemaPropertyNames = getSchemaPropertyNames(schema)

  if (isObject(value) && isSet(schemaPropertyNames)) {
    Object.keys(value).forEach((propertyName) => {
      const editor = new Jedi({
        XMLHttpRequest: validator.refParser.XMLHttpRequest,
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
