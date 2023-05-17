import { isArray, isSet } from '../../utils'
import Jedi from '../../jedi'

export const _contains = (validator, value, schema, key, path) => {
  const errors = []

  if (isArray(value) && isSet(schema.contains())) {
    let counter = 0

    value.forEach((item) => {
      const containsEditor = new Jedi({ schema: schema.contains(), startValue: item, refParser: false })
      const containsErrors = containsEditor.validate()

      if (containsErrors.length === 0) {
        counter++
      }

      containsEditor.destroy()
    })

    const containsInvalid = (counter === 0)

    if (isSet(schema.minContains())) {
      const minContainsInvalid = (counter < schema.minContains())

      if (minContainsInvalid) {
        errors.push({
          message: `Contains match count ${counter} is less than minimum contains count of ${schema.minContains()}`,
          path: path
        })
      }
    } else {
      if (containsInvalid) {
        errors.push({
          message: 'No items match contains',
          path: path
        })
      }
    }

    if (isSet(schema.maxContains())) {
      const maxContainsInvalid = (counter > schema.maxContains())

      if (maxContainsInvalid) {
        errors.push({
          message: `Contains match count ${counter} exceeds maximum contains count of ${schema.maxContains()}`,
          path: path
        })
      }
    }
  }

  return errors
}
