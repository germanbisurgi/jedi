import Editor from '../editor'
import utils from '../utils'

class MultipleEditor extends Editor {
  build () {
    this.editors = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []
    this.activeEditor = null

    let schemas = []

    if (utils.isArray(this.schema.type)) {
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
    }

    if (this.schema.type === 'any' || !utils.isSet(this.schema.type)) {
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

    if (this.schema.anyOf) {
      schemas = this.schema.anyOf

      schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(schema.title || this.schema.type || JSON.stringify(schema))
      })
    }

    // Switcher
    this.switcher = this.jedi.theme.getSelect(this.switcherOptionValues, this.switcherOptionsLabels, {
      id: this.path + '.selector'
    })

    // events
    this.switcher.addEventListener('change', () => {
      this.switchEditor(this.switcher.value)
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
      this.setValue(this.activeEditor.getValue())
    }
  }

  getValue () {
    return this.activeEditor.getValue()
  }

  destroy () {
    this.editors.forEach((editor) => {
      editor.destroy()
    })

    super.destroy()
  }
}

export default MultipleEditor
