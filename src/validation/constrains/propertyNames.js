/**
 * constrains propertyNames
 */

import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import Jedison from '../../jedison.js'
import {
  getSchemaPropertyNames
} from '../../helpers/schema.js'

export function propertyNames (context) {
  const errors = []
  const schemaPropertyNames = getSchemaPropertyNames(context.schema)

  if (isObject(context.value) && isSet(schemaPropertyNames)) {
    Object.keys(context.value).forEach((propertyName) => {
      const editor = new Jedison({
        refParser: context.validator.refParser,
        schema: schemaPropertyNames,
        data: propertyName
      })

      const invalid = editor.getErrors().length > 0

      if (invalid) {
        errors.push({
          type: 'error',
          path: context.path,
          constraint: 'propertyNames',
          messages: [
            compileTemplate(context.translator.translate('errorPropertyNames'), { propertyName: propertyName })
          ]
        })
      }
    })
  }

  return errors
}
