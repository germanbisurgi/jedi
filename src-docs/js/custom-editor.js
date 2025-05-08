import Jedison from '../../src/index.js'

class EditorStringCustom extends Jedison.EditorNull {
  static resolves (schema) {
    const schemaType = Jedison.Schema.getSchemaType(schema)
    const custom = Jedison.Schema.getSchemaXOption(schema, 'custom')
    return schemaType === 'null' && Jedison.Utils.isSet(custom)
  }

  build () {
    super.build()

    const iframe = document.createElement('iframe')
    iframe.src = 'https://json-schema.org/'
    iframe.setAttribute('width', '100%')
    iframe.setAttribute('height', '1000px')
    this.control.container.appendChild(iframe)
  }
}

export default EditorStringCustom
