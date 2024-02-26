import Jedi from '../../jedi'
import { isSet, notSet } from '../../helpers/utils'
import { getSchemaElse, getSchemaIf, getSchemaThen } from '../../helpers/schema'

export function ifThenElse (validator, value, schema, key, path) {
  const errors = []
  const schemaIf = getSchemaIf(schema)
  const schemaThen = getSchemaThen(schema)
  const schemaElse = getSchemaElse(schema)

  if (isSet(schemaIf)) {
    if (notSet(schemaThen) && notSet(schemaElse)) {
      return errors
    }

    const ifEditor = new Jedi({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schemaIf, data: value })
    const ifErrors = ifEditor.getErrors()
    ifEditor.destroy()

    let thenErrors = []
    let elseErrors = []

    if (isSet(schemaThen)) {
      const thenEditor = new Jedi({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schemaThen, data: value })
      thenErrors = thenEditor.getErrors()
      thenEditor.destroy()
    }

    if (isSet(schemaElse)) {
      const elseEditor = new Jedi({ XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schemaElse, data: value })
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