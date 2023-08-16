import { isArray, isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaContains, getSchemaMaxContains, getSchemaMinContains } from '../../helpers/schema'

export function contains (validator, value, schema, key, path) {
  const errors = []
  const schemaContains = getSchemaContains(schema)
  const schemaMinContains = getSchemaMinContains(schema)
  const schemaMaxContains = getSchemaMaxContains(schema)

  if (isArray(value) && isSet(schemaContains)) {
    let counter = 0

    value.forEach((item) => {
      const containsEditor = new Jedi({ schema: schemaContains, startValue: item, refParser: false })
      const containsErrors = containsEditor.getErrors()

      if (containsErrors.length === 0) {
        counter++
      }

      containsEditor.destroy()
    })

    const containsInvalid = (counter === 0)

    if (isSet(schemaMinContains)) {
      const minContainsInvalid = (counter < schemaMinContains)

      if (minContainsInvalid) {
        errors.push({
          messages: [
            `Contains match count ${counter} is less than minimum contains count of ${schemaMinContains}`
          ],
          path: path
        })
      }
    } else {
      if (containsInvalid) {
        errors.push({
          messages: [
            'No items match contains'
          ],
          path: path
        })
      }
    }

    if (isSet(schemaMaxContains)) {
      const maxContainsInvalid = (counter > schemaMaxContains)

      if (maxContainsInvalid) {
        errors.push({
          messages: [
            `Contains match count ${counter} exceeds maximum contains count of ${schemaMaxContains}`
          ],
          path: path
        })
      }
    }
  }

  return errors
}
