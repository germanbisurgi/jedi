import Jedi from '../../index'
import { isSet } from '../../utils'

export const _if = (validator, value, schema) => {
  const errors = []

  if (isSet(schema.if())) {
    if (!schema.then() && !schema.else()) {
      return errors
    }

    const ifEditor = new Jedi({ schema: schema.if(), startValue: value })
    const ifErrors = ifEditor.validate()

    console.log('ifErrors', ifErrors)

    let thenErrors = []
    let elseErrors = []

    if (schema.then()) {
      const thenEditor = new Jedi({ schema: schema.then(), startValue: value })
      thenErrors = thenEditor.validate()
      thenEditor.destroy()
    }

    if (schema.else()) {
      const elseEditor = new Jedi({ schema: schema.else(), startValue: value })
      elseErrors = elseEditor.validate()
      console.log(schema.else(), value, elseErrors)
    }

    if (schema.if() === true) {
      console.log('if true then')
      return thenErrors
    }

    if (schema.if() === false) {
      console.log('if false else')
      return elseErrors
    }

    if (ifErrors.length === 0) {
      console.log('then')
      return thenErrors
    }

    if (ifErrors.length > 0) {
      console.log('else')
      console.log('elseErrors', elseErrors)
      return elseErrors
    }
  }

  return errors
}
