import Jedison from '../../jedison.js'
import { isSet, notSet } from '../../helpers/utils.js'
import { getSchemaElse, getSchemaIf, getSchemaThen } from '../../helpers/schema.js'

export function ifThenElse (context) {
  const errors = []
  const schemaIf = getSchemaIf(context.schema)
  const schemaThen = getSchemaThen(context.schema)
  const schemaElse = getSchemaElse(context.schema)

  if (isSet(schemaIf)) {
    if (notSet(schemaThen) && notSet(schemaElse)) {
      return errors
    }

    const ifEditor = new Jedison({ refParser: context.validator.refParser, schema: schemaIf, data: context.value })
    const ifErrors = ifEditor.getErrors()
    ifEditor.destroy()

    let thenErrors = []
    let elseErrors = []

    if (isSet(schemaThen)) {
      const thenEditor = new Jedison({ refParser: context.validator.refParser, schema: schemaThen, data: context.value })
      thenErrors = thenEditor.getErrors()
      thenEditor.destroy()
    }

    if (isSet(schemaElse)) {
      const elseEditor = new Jedison({ refParser: context.validator.refParser, schema: schemaElse, data: context.value })
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
