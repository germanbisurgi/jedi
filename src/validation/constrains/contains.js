import { compileTemplate, isArray, isSet } from '../../helpers/utils.js'
import Jedison from '../../jedison.js'
import { getSchemaContains, getSchemaMaxContains, getSchemaMinContains } from '../../helpers/schema.js'

export function contains (context) {
  const errors = []
  const contains = getSchemaContains(context.schema)
  const minContains = getSchemaMinContains(context.schema)
  const maxContains = getSchemaMaxContains(context.schema)

  if (isArray(context.value) && isSet(contains)) {
    let counter = 0

    context.value.forEach((item) => {
      const containsEditor = new Jedison({ refParser: context.validator.refParser, schema: contains, data: item })
      const containsErrors = containsEditor.getErrors()

      if (containsErrors.length === 0) {
        counter++
      }

      containsEditor.destroy()
    })

    const containsInvalid = (counter === 0)

    if (isSet(minContains)) {
      const minContainsInvalid = (counter < minContains)

      if (minContainsInvalid) {
        errors.push({
          type: 'error',
          path: context.path,
          constraint: 'minContains',
          messages: [
            compileTemplate(context.translator.translate('errorMinContains'), {
              counter: counter,
              minContains: minContains
            })
          ]
        })
      }
    } else {
      if (containsInvalid) {
        errors.push({
          type: 'error',
          path: context.path,
          constraint: 'contains',
          messages: [context.translator.translate('errorContains')]
        })
      }
    }

    if (isSet(maxContains)) {
      const maxContainsInvalid = (counter > maxContains)

      if (maxContainsInvalid) {
        errors.push({
          type: 'error',
          path: context.path,
          constraint: 'maxContains',
          messages: [
            compileTemplate(context.translator.translate('errorMaxContains'), {
              counter: counter,
              maxContains: maxContains
            })
          ]
        })
      }
    }
  }

  return errors
}
