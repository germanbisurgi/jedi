import Jedi from '../../index'

export const _if = (validator, value, schema) => {
  let errors = []

  if (schema.if()) {
    if (!schema.then() && !schema.else()) {
      return errors
    }

    const ifEditor = new Jedi({ schema: schema.if(), startValue: value })
    const ifErrors = ifEditor.validate()

    if (ifErrors.length === 0) {
      if (schema.then()) {
        const thenEditor = new Jedi({ schema: schema.then(), startValue: value })
        errors = thenEditor.validate()
        thenEditor.destroy()
      } else {
        return errors
      }
    } else {
      if (schema.else()) {
        const elseEditor = new Jedi({ schema: schema.else(), startValue: value })
        errors = elseEditor.validate()
        elseEditor.destroy()
      } else {
        return errors
      }
    }
  }

  return errors
}
