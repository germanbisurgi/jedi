import Editor from '../editor'
import utils from '../utils'

class MultipleEditor extends Editor {
  build () {
    this.editors = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []
    this.activeEditor = null

    let schemas = []

    if (this.schema.anyOf || this.schema.oneOf) {
      schemas = this.schema.anyOf || this.schema.oneOf

      schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(...schemas.map((schema) => schema.type))
      })
    } else if (utils.isArray(this.schema.type)) {
      this.schema.type.forEach((type) => {
        const schema = {
          type: type
        }

        schemas.push(schema)
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

    // Tabs
    this.switcher = this.jedi.theme.getTabs(this.path, this.switcherOptionValues, this.switcherOptionsLabels)
    this.container.appendChild(this.switcher)

    // events
    this.switcher.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index')
      this.switchEditor(index)
    })

    this.container.appendChild(this.switcher)

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
  }

  setContainer () {
    this.container = this.jedi.theme.getDiv()
    this.container.setAttribute('data-type', 'multiple')
  }

  setDebugContainer () {}

  switchEditor (index) {
    if (utils.isSet(this.editors[index])) {
      if (this.activeEditor) {
        this.container.removeChild(this.activeEditor.container)
      }
      this.activeEditor = this.editors[index]
      this.container.appendChild(this.activeEditor.container)
      this.setValue(this.activeEditor.getValue(), false)
      this.switcher.value = index
    }
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
          this.activeEditor.setValue(value, triggersChange)
        }
      })
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
