import Jedi from '../../jedi'
import { isSet, notSet } from '../../helpers/utils'
import { getSchemaElse, getSchemaIf, getSchemaThen } from '../../helpers/schema'

export function _if (validator, value, schema, key, path) {
  const errors = []
  const schemaIf = getSchemaIf(schema)
  const schemaThen = getSchemaThen(schema)
  const schemaElse = getSchemaElse(schema)

  if (isSet(schemaIf)) {
    if (notSet(schemaThen) && notSet(schemaElse)) {
      return errors
    }

    const ifEditor = new Jedi({ schema: schemaIf, startValue: value, refParser: false })
    const ifErrors = ifEditor.getErrors()
    ifEditor.destroy()

    let thenErrors = []
    let elseErrors = []

    if (isSet(schemaThen)) {
      const thenEditor = new Jedi({ schema: schemaThen, startValue: value, refParser: false })
      thenErrors = thenEditor.getErrors()
      thenEditor.destroy()
    }

    if (isSet(schemaElse)) {
      const elseEditor = new Jedi({ schema: schemaElse, startValue: value, refParser: false })
      elseErrors = elseEditor.getErrors()
      elseEditor.destroy()
    }

    if (schemaIf === true) {
      return thenErrors
    }

    if (schemaIf === false) {
      return elseErrors
    }

    if (ifErrors.length === 0) {
      return thenErrors
    }

    if (ifErrors.length > 0) {
      return elseErrors
    }
  }

  return errors
}
