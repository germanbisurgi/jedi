import { isSet } from '../../helpers/utils'
import { getSchemaNot } from '../../helpers/schema'

export function not (validator, value, schema, key, path) {
  let errors = []
  const not = getSchemaNot(schema)

  if (isSet(not)) {
    const notErrors = validator.getErrors(value, not, key, path)
    const invalid = notErrors.length === 0

    if (invalid) {
      const replaceText = (data) => {
        return data.map(item => {
          const newMessages = item.messages.map(message => message.replace('must', 'must NOT'))
          return {
            messages: newMessages,
            path: item.path
          }
        })
      }

      const notNotErrors = validator.getErrors(undefined, not, key, path)
      errors = [...errors, ...notNotErrors]
      errors = replaceText(errors)
    }
  }

  return errors
}
