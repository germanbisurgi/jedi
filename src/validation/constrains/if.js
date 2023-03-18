import SchemaTools from '../../index'
import { isSet, notSet } from '../../utils'

export const _if = (validator, value, schema) => {
  const errors = []

  if (isSet(schema.if())) {
    if (notSet(schema.then()) && notSet(schema.else())) {
      return errors
    }

    const ifEditor = new SchemaTools.Jedi({ schema: schema.if(), startValue: value })
    const ifErrors = ifEditor.validate()
    ifEditor.destroy()

    let thenErrors = []
    let elseErrors = []

    if (isSet(schema.then())) {
      const thenEditor = new SchemaTools.Jedi({ schema: schema.then(), startValue: value })
      thenErrors = thenEditor.validate()
      thenEditor.destroy()
    }

    if (isSet(schema.else())) {
      const elseEditor = new SchemaTools.Jedi({ schema: schema.else(), startValue: value })
      elseErrors = elseEditor.validate()
      elseEditor.destroy()
    }

    if (schema.if() === true) {
      return thenErrors
    }

    if (schema.if() === false) {
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
