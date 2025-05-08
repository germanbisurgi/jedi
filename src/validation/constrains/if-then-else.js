import Jedison from '../../jedison.js'
import { isSet, notSet } from '../../helpers/utils.js'
import { getSchemaElse, getSchemaIf, getSchemaThen } from '../../helpers/schema.js'

export function ifThenElse (validator, value, schema) {
  const errors = []
  const schemaIf = getSchemaIf(schema)
  const schemaThen = getSchemaThen(schema)
  const schemaElse = getSchemaElse(schema)

  if (isSet(schemaIf)) {
    if (notSet(schemaThen) && notSet(schemaElse)) {
      return errors
    }

    const ifEditor = new Jedison({ refParser: validator.refParser, schema: schemaIf, data: value })
    const ifErrors = ifEditor.getErrors()
    ifEditor.destroy()

    let thenErrors = []
    let elseErrors = []

    if (isSet(schemaThen)) {
      const thenEditor = new Jedison({ refParser: validator.refParser, schema: schemaThen, data: value })
      thenErrors = thenEditor.getErrors()
      thenEditor.destroy()
    }

    if (isSet(schemaElse)) {
      const elseEditor = new Jedison({ refParser: validator.refParser, schema: schemaElse, data: value })
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
