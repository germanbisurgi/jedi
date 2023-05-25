import Jedi from '../../jedi'
import { isSet, notSet } from '../../utils'

export const _if = (validator, value, schema, key, path) => {
  const errors = []

  if (isSet(schema.if())) {
    if (notSet(schema.then()) && notSet(schema.else())) {
      return errors
    }

    const ifEditor = new Jedi({ schema: schema.if(), startValue: value, refParser: false })
    const ifErrors = ifEditor.validate()
    ifEditor.destroy()

    let thenErrors = []
    let elseErrors = []

    if (isSet(schema.then())) {
      const thenEditor = new Jedi({ schema: schema.then(), startValue: value, refParser: false })
      thenErrors = thenEditor.validate()
      thenEditor.destroy()
    }

    if (isSet(schema.else())) {
      const elseEditor = new Jedi({ schema: schema.else(), startValue: value, refParser: false })
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
