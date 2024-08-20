class EditorStringCustom extends Jedi.EditorNull {
  static resolves (schema) {
    const schemaType = Jedi.Schema.getSchemaType(schema)
    const custom = Jedi.Schema.getSchemaXOption(schema, 'custom')
    return schemaType === 'null' && Jedi.Utils.isSet(custom)
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
