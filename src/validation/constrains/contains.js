import { compileTemplate, isArray, isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaContains, getSchemaMaxContains, getSchemaMinContains } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function contains (validator, value, schema, key, path) {
  const errors = []
  const contains = getSchemaContains(schema)
  const minContains = getSchemaMinContains(schema)
  const maxContains = getSchemaMaxContains(schema)

  if (isArray(value) && isSet(contains)) {
    let counter = 0

    value.forEach((item) => {
      const containsEditor = new Jedi({ schema: contains, data: item })
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
          messages: [
            compileTemplate(i18n.errorMinContains, {
              counter: counter,
              minContains: minContains
            })
          ],
          path: path
        })
      }
    } else {
      if (containsInvalid) {
        errors.push({
          messages: [i18n.errorContains],
          path: path
        })
      }
    }

    if (isSet(maxContains)) {
      const maxContainsInvalid = (counter > maxContains)

      if (maxContainsInvalid) {
        errors.push({
          messages: [
            compileTemplate(i18n.errorMaxContains, {
              counter: counter,
              maxContains: maxContains
            })
          ],
          path: path
        })
      }
    }
  }

  return errors
}
