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
    const any = this.schema.anyOf ? 'anyOf' : 'oneOf'
    const anyValue = this.schema[any]

    if (this.schema.anyOf || this.schema.oneOf) {
      schemas = this.schema.anyOf || this.schema.oneOf

      delete this.schema[any]

      schemas.forEach((schema, index) => {
        schema = Object.assign(schema, this.schema)
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push('Option-' + (index + 1))
      })

      this.schema[any] = anyValue
    } else if (utils.isArray(this.schema.type)) {
      this.schema.type.forEach((type) => {
        schemas.push({
          type: type
        })
      })

      schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(...schemas.map((schema) => schema.type))
      })
    } else if (this.schema.type === 'any' || !utils.isSet(this.schema.type)) {
      schemas = [
        { type: 'string' },
        { type: 'number' },
        { type: 'integer' },
        { type: 'boolean' },
        { type: 'array' },
        { type: 'object' },
        { type: 'null' }
      ]

      schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(...schemas.map((schema) => schema.type))
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
      this.editors.push(editor)
    })

    // switcher radios
    this.switcherRadios = []
    this.switcher = this.jedi.theme.getFieldset()

    // legend
    const legend = this.jedi.theme.getLegend('Options')
    this.switcher.appendChild(legend)

    this.switcherOptionValues.forEach((value, index) => {
      // radio
      const radio = this.jedi.theme.getRadio()
      radio.setAttribute('value', value)
      radio.setAttribute('id', this.path + '.switcher' + '.' + index)

      radio.addEventListener('change', () => {
        const index = Number(radio.value)
        this.switchEditor(index)
      })

      this.switcherRadios.push(radio)
      this.switcher.appendChild(radio)

      // label
      const label = this.jedi.theme.getLabel(this.switcherOptionsLabels[index], {
        for: this.path + '.switcher' + '.' + index
      })

      this.switcher.appendChild(label)
    })

    this.container.appendChild(this.switcher)

    if (utils.isSet(this.editors[0])) {
      this.switchEditor(0)
    }

    // switcher select
    // const labelText = 'Options'
    // const label = this.jedi.theme.getLabel(labelText, {
    //   for: this.path + '.switcher'
    // })
    // this.container.appendChild(label)
    //
    // this.switcher = this.jedi.theme.getMultipleSelect(this.switcherOptionValues, this.switcherOptionsLabels, {
    //   id: this.path + '.switcher'
    // })
    // this.container.appendChild(this.switcher)
    //
    // // switcher events
    // this.switcher.addEventListener('change', (event) => {
    //   const index = this.switcher.value
    //   this.switchEditor(index)
    // })
    //
    // this.container.appendChild(this.switcher)
  }

  switchEditor (newIndex) {
    this.lastIndex = this.index
    this.index = newIndex
    this.activeEditor = this.editors[this.index]
    this.setValue(this.getValue())
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

  setValue (value, triggersChange = true) {
    // if value matches the active editor type set the value. Else switch to the first
    // editor that match the value.
    if (utils.equal(this.activeEditor.sanitize(value), value)) {
      this.activeEditor.setValue(value, triggersChange)
    } else {
      let index = 0
      for (const editor of this.editors) {
        if (utils.equal(editor.sanitize(value), value)) {
          this.switchEditor(index)
          break
        }
        index++
      }
    }

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
