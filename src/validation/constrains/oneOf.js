import { compileTemplate, isSet } from '../../helpers/utils.js'
import Jedi from '../../jedi.js'
import { getSchemaOneOf } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function oneOf (validator, value, schema, key, path) {
  const errors = []
  const oneOf = getSchemaOneOf(schema)

  if (isSet(oneOf)) {
    let counter = 0

    oneOf.forEach((schema) => {
      const oneOfEditor = new Jedi({ refParser: validator.refParser, schema: schema, data: value })
      const oneOfErrors = oneOfEditor.getErrors()
      oneOfEditor.destroy()

      if (oneOfErrors.length === 0) {
        counter++
      }
    })

    if (counter !== 1) {
      errors.push({
        path: path,
        constrain: 'oneOf',
        messages: [
          compileTemplate(i18n.errorOneOf, {
            counter: counter
          })
        ]
      })
    }
  }

  return errors
}
