import Editor from '../editor'
import utils from '../utils'

class MultipleEditor extends Editor {
  build () {
    this.editors = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []
    this.activeEditor = null
    this.lastIndex = 0
    this.index = 0

    let schemas = []
    const xOf = this.schema.anyOf ? 'anyOf' : 'oneOf'
    const xOfValue = this.schema[xOf]

    if (this.schema.anyOf || this.schema.oneOf) {
      schemas = this.schema.anyOf || this.schema.oneOf

      delete this.schema[xOf]

      schemas.forEach((schema, index) => {
        schema = { ...this.schema, ...schema }
        this.switcherOptionValues.push(index)
        const switcherOptionsLabel = utils.getSchemaTitle(schema) || 'Option-' + (index + 1)
        this.switcherOptionsLabels.push(switcherOptionsLabel)
      })

      this.schema[xOf] = xOfValue
    } else if (utils.isArray(this.schema.type)) {
      this.schema.type.forEach((type) => {
        schemas.push({
          type: type,
          title: type[0].toUpperCase() + type.slice(1)
        })
      })

      schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(...schemas.map((schema) => schema.title))
      })
    } else if (this.schema.type === 'any' || !utils.isSet(this.schema.type)) {
      schemas = [
        { type: 'string', title: 'String' },
        { type: 'number', title: 'Number' },
        { type: 'integer', title: 'Integer' },
        { type: 'boolean', title: 'Boolean' },
        { type: 'array', title: 'Array' },
        { type: 'object', title: 'Object' },
        { type: 'null', title: 'Null' }
      ]

      schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(...schemas.map((schema) => schema.title))
      })
    }

    // Editors
    schemas.forEach((schema) => {
      const editor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: schema,
        path: this.path,
        parent: this.parent
      })

      editor.unregister()

      editor.onChange = () => {
        this.onChange()
      }

      this.editors.push(editor)
    })

    // switcher radios
    this.switcherRadios = []
    this.switcher = this.jedi.theme.getFieldset()

    // legend
    const legendText = 'Options'
    const legend = this.jedi.theme.getLegend(legendText)
    this.switcher.appendChild(legend)

    this.switcherOptionValues.forEach((value, index) => {
      const uuid = utils.uuid()

      // radio
      const radio = this.jedi.theme.getRadio()
      radio.setAttribute('value', value)
      radio.setAttribute('id', this.path + '.switcher' + '.' + index + '.' + uuid)

      radio.addEventListener('change', () => {
        const index = Number(radio.value)
        this.switchEditor(index)
      })

      this.switcherRadios.push(radio)
      this.switcher.appendChild(radio)

      // label
      const label = this.jedi.theme.getLabel(this.switcherOptionsLabels[index], {
        for: this.path + '.switcher' + '.' + index + '.' + uuid
      })

      this.switcher.appendChild(label)
    })

    this.container.appendChild(this.switcher)

    if (utils.isSet(this.editors[0])) {
      this.switchEditor(0)
    }
  }

  switchEditor (newIndex) {
    this.lastIndex = this.index
    this.index = newIndex
    this.activeEditor = this.editors[this.index]
    this.setValue(this.getValue(), true)
  }

  setContainer () {
    this.container = this.jedi.theme.getFieldset()
    this.container.setAttribute('data-type', 'multiple')

    // legend
    const legendText = utils.getSchemaTitle(this.schema) || this.getKey()
    const legend = this.jedi.theme.getLegend(legendText)
    this.container.appendChild(legend)
  }

  setDebugContainer () {
  }

  refreshUI () {
    const oldEditor = this.editors[this.lastIndex]

    if (oldEditor.container.parentNode) {
      this.container.removeChild(oldEditor.container)
    }

    this.container.appendChild(this.activeEditor.container)

    if (this.disabled) {
      this.activeEditor.disable()
      this.switcher.disabled = true
    } else {
      this.activeEditor.enable()
      this.switcher.disabled = false
    }

    this.switcherRadios.forEach((radio) => {
      radio.checked = (Number(radio.value) === Number(this.index))
    })
  }

  getValue () {
    return this.activeEditor.getValue()
  }

  sanitize (value) {
    return this.activeEditor.sanitize(value)
  }

  matchEditor (value, editors) {
    let index = 0

    for (const editor of editors) {
      if (editor.editors) {
        editor.setValue(value)
      }

      if (utils.equal(editor.sanitize(value), value)) {
        this.switchEditor(index)
        break
      }

      index++
    }
  }

  setValue (value, triggersChange = true) {
    // if value matches the active editor type set the value. Else switch to the first
    // editor that match the value.
    if (!utils.equal(this.activeEditor.sanitize(value), value)) {
      this.matchEditor(value, this.editors)
    }

    this.activeEditor.setValue(value, triggersChange)

    if (triggersChange) {
      this.onChange()
    }

    this.refreshUI()
    this.refreshDebug()
    this.showValidationErrors()
  }

  destroy () {
    this.editors.forEach((editor) => {
      editor.destroy()
    })

    super.destroy()
  }
}

export default MultipleEditor
