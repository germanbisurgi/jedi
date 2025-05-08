import { compileTemplate, isArray, isSet } from '../../helpers/utils.js'
import Jedison from '../../jedison.js'
import { getSchemaContains, getSchemaMaxContains, getSchemaMinContains } from '../../helpers/schema.js'

export function contains (validator, value, schema, key, path) {
  const errors = []
  const contains = getSchemaContains(schema)
  const minContains = getSchemaMinContains(schema)
  const maxContains = getSchemaMaxContains(schema)

  if (isArray(value) && isSet(contains)) {
    let counter = 0

    value.forEach((item) => {
      const containsEditor = new Jedison({ refParser: validator.refParser, schema: contains, data: item })
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
          path: path,
          constraint: 'minContains',
          messages: [
            compileTemplate(validator.translator.translate('errorMinContains'), {
              counter: counter,
              minContains: minContains
            })
          ]
        })
      }
    } else {
      if (containsInvalid) {
        errors.push({
          path: path,
          constraint: 'contains',
          messages: [validator.translator.translate('errorContains')]
        })
      }
    }

    if (isSet(maxContains)) {
      const maxContainsInvalid = (counter > maxContains)

      if (maxContainsInvalid) {
        errors.push({
          path: path,
          constraint: 'maxContains',
          messages: [
            compileTemplate(validator.translator.translate('errorMaxContains'), {
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
