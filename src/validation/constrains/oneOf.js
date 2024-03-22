import { compileTemplate, isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaOneOf } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function oneOf (validator, value, schema, key, path) {
  const errors = []
  const oneOf = getSchemaOneOf(schema)

  if (isSet(oneOf)) {
    let counter = 0

    oneOf.forEach((schema) => {
      const oneOfEditor = new Jedi({ refParser: validator.refParser,  XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schema, data: value })
      const oneOfErrors = oneOfEditor.getErrors()
      oneOfEditor.destroy()

      if (oneOfErrors.length === 0) {
        counter++
      }
    })

    if (counter !== 1) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorOneOf, {
            counter: counter
          })
        ],
        path: path,
        constrain: 'oneOf'
      })
    }
  }

  return errors
}
