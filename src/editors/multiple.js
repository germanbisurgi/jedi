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

    if (this.schema.anyOf || this.schema.oneOf) {
      schemas = this.schema.anyOf || this.schema.oneOf

      const type = this.schema.anyOf ? 'ANYOF' : 'ONEOF'

      schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(type + '-' + index)
      })
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

    if (utils.isSet(this.editors[0])) {
      this.switchEditor(0)
    }

    // Tabs
    this.switcher = this.jedi.theme.getTabs(this.path, this.switcherOptionValues, this.switcherOptionsLabels)
    this.container.appendChild(this.switcher)

    // events
    this.switcher.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index')
      this.switchEditor(index)
    })

    this.container.appendChild(this.switcher)
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

    if (this.activeEditor === oldEditor && this.activeEditor.container.parentNode) {
      return
    }

    if (oldEditor.container.parentNode) {
      this.container.removeChild(oldEditor.container)
    }

    this.container.appendChild(this.activeEditor.container)
  }

  getValue () {
    return this.activeEditor.getValue()
  }

  setValue (value, triggersChange = true) {
    // if value matches the editor type set the value. Else switch to the first
    // matching editor and set the value.
    if (utils.equal(this.activeEditor.sanitize(value), value)) {
      this.activeEditor.setValue(value, triggersChange)
    } else {
      this.editors.forEach((editor, index) => {
        if (utils.equal(editor.sanitize(value), value)) {
          this.switchEditor(index)
        }
      })
    }

    if (this.disabled) {
      this.activeEditor.disable()
    } else {
      this.activeEditor.enable()
    }
  }

  destroy () {
    this.editors.forEach((editor) => {
      editor.destroy()
    })

    super.destroy()
  }
}

export default MultipleEditor
