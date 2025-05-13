import { compileTemplate, isSet, isString } from '../../helpers/utils.js'
import { getSchemaMaxLength } from '../../helpers/schema.js'

export function maxLength (context) {
  const errors = []
  const maxLength = getSchemaMaxLength(context.schema)

  if (isString(context.value) && isSet(maxLength)) {
    context.value = context.value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (context.value.length > maxLength)

    if (invalid) {
      errors.push({
        path: context.path,
        constraint: 'maxLength',
        messages: [
          compileTemplate(context.translator.translate('errorMaxLength'), {
            maxLength: maxLength
          })
        ]
      })
    }
  }

  return errors
}
