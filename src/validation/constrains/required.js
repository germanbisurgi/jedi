import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import { getSchemaRequired } from '../../helpers/schema.js'

export function required (context) {
  const errors = []
  const required = getSchemaRequired(context.schema)

  if (isObject(context.value) && isSet(required)) {
    const missingProperties = []
    const keys = Object.keys(context.value)

    required.forEach((key) => {
      if (!keys.includes(key)) {
        missingProperties.push(key)
      }
    })

    const invalid = missingProperties.length > 0

    if (invalid) {
      errors.push({
        path: context.path,
        constraint: 'required',
        messages: [
          compileTemplate(context.translator.translate('errorRequired'), {
            required: missingProperties.join(', ')
          })
        ]
      })
    }
  }

  return errors
}
