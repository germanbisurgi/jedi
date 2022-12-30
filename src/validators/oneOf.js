import Schema from '../schema'

class OneOf {
  validate (value, schema, key, path, validator) {
    const errors = []

    if (schema.oneOf()) {
      let counter = 0

      schema.oneOf().forEach((schema) => {
        const oneOfErrors = validator.validate(value, new Schema(schema), key, path)

        if (oneOfErrors.length === 0) {
          counter++
        }
      })

      if (counter !== 1) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must validate against exactly one of the provided schemas. It currently validates against ' + counter + ' of the schemas.',
          path: path
        })
      }
    }

    return errors
  }
}

export default OneOf
