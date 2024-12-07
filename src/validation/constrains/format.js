import { compileTemplate, isSet, isString } from '../../helpers/utils.js'
import { getSchemaFormat, getSchemaXOption } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function format (validator, value, schema, key, path) {
  const errors = []
  const format = getSchemaFormat(schema)
  let assertFormat = validator.assertFormat

  if (getSchemaXOption(schema, 'assertFormat')) {
    assertFormat = schema.options.assertFormat
  }

  if (isSet(format) && isString(value) && assertFormat) {
    let regexp

    if (format === 'email') {
      regexp = new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/i)
    }

    if (format === 'url') {
      regexp = new RegExp(/^(?:https?|ftp):\/\/(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:[^\s:@](?:[^\s:@-]*[^\s:@])?\.?)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3})(?::\d{2,5})?(?:\/[^\s]*)?$/i)
    }

    if (format === 'uuid') {
      regexp = new RegExp(/^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/i)
    }

    const invalid = isSet(regexp) && !regexp.test(value)

    if (invalid) {
      errors.push({
        path: path,
        constrain: 'format',
        messages: [
          compileTemplate(i18n.errorFormat, { format: format })
        ]
      })
    }
  }

  return errors
}
