import Editor from '../editor'
import Schema from '../schema'
import { isSet, equal, mergeDeep } from '../utils'

class MultipleEditor extends Editor {
  prepare () {
    this.editors = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []
    this.activeEditor = null
    this.lastIndex = 0
    this.index = 0

    let schemas = []

    if (this.schema.anyOf() || this.schema.oneOf()) {
      const schemasOf = this.schema.anyOf() ? this.schema.anyOf() : this.schema.oneOf()
      const cloneSchema = this.schema.clone()
      delete cloneSchema['anyOf']
      delete cloneSchema['oneOf']
      delete cloneSchema['options']

      schemasOf.forEach((schema, index) => {
        schema = { ...cloneSchema, ...schema }

        // merge allOf
        if (schema.allOf) {
          let merged = {}

          schema.allOf.forEach((allOfSchema) => {
            merged = mergeDeep(merged, allOfSchema)
          })

          schema = merged
        }

        if (isSet(cloneSchema.title)) {
          schema.title = cloneSchema.title
        }

        this.switcherOptionValues.push(index)
        const switcherOptionsLabel = schema.options?.switcherTitle || 'Option-' + (index + 1)
        this.switcherOptionsLabels.push(switcherOptionsLabel)
        schemas.push(schema)
      })
    } else if (this.schema.types()) {
      this.schema.type().forEach((type, index) => {
        const schemaClone = this.schema.clone()

        const schema = {
          ...schemaClone,
          ...{ type: type, title: type[0].toUpperCase() + type.slice(1) }
        }

        if (isSet(schemaClone.title)) {
          schema.title = schemaClone.title
        }

        schemas.push(schema)

        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(type.charAt(0).toUpperCase() + type.slice(1))
      })
    } else if (this.schema.typeIs('any') || !this.schema.type()) {
      const schemaClone = this.schema.clone()

      schemas = [
        { ...schemaClone, ...{ type: 'string' } },
        { ...schemaClone, ...{ type: 'number' } },
        { ...schemaClone, ...{ type: 'integer' } },
        { ...schemaClone, ...{ type: 'boolean' } },
        { ...schemaClone, ...{ type: 'array' } },
        { ...schemaClone, ...{ type: 'object' } },
        { ...schemaClone, ...{ type: 'null' } }
      ]

      schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
      })

      this.switcherOptionsLabels = [
        'String', 'Number', 'Integer', 'Boolean', 'Array', 'Object', 'Null'
      ]
    }

    // Editors
    schemas.forEach((schema) => {
      const editor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: new Schema(schema),
        path: this.path,
        parent: this.parent
      })

      editor.unregister()

      editor.onChange = () => {
        this.onChange()
      }

      this.editors.push(editor)
    })
  }

  build () {
    this.container.appendChild(this.messagesSlot)

    // switcher buttons
    this.switcherButtons = []
    this.switcher = this.jedi.theme.getBtnGroup()
    this.switcher.classList.add('jedi-switcher')

    this.switcherOptionValues.forEach((value, index) => {
      // button
      const button = this.jedi.theme.getButton({
        textContent: this.switcherOptionsLabels[index],
        value: index
      })

      button.addEventListener('click', () => {
        const index = Number(button.value)
        this.switchEditor(index)
      })

      this.switcher.appendChild(button)
      this.switcherButtons.push(button)
    })

    this.container.appendChild(this.switcher)

    if (isSet(this.editors[0])) {
      this.switchEditor(0, false)
    }
  }

  switchEditor (newIndex, triggersChange = true) {
    this.lastIndex = this.index
    this.index = newIndex
    this.activeEditor = this.editors[this.index]
    this.setValue(this.getValue(), triggersChange)
  }

  setContainer () {
    this.container = this.jedi.theme.getFieldset()
    this.container.setAttribute('data-type', 'multiple')

    this.container.appendChild(this.jedi.theme.getLegend({
      textContent: this.schema.title() ? this.schema.title() : this.getKey(),
      srOnly: true
    }))
  }

  refreshUI () {
    const oldEditor = this.editors[this.lastIndex]

    if (oldEditor.container.parentNode) {
      this.container.removeChild(oldEditor.container)
    }

    this.container.appendChild(this.activeEditor.container)

    if (this.disabled) {
      this.activeEditor.disable()
      this.switcherButtons.forEach((button) => {
        button.disabled = true
      })
    } else {
      this.activeEditor.enable()
      this.switcherButtons.forEach((button) => {
        button.disabled = false
      })
    }

    this.switcherButtons.forEach((button) => {
      if ((Number(button.value) === Number(this.index))) {
        button.classList.add(this.jedi.theme.getButtonActiveClass())
      } else {
        button.classList.remove(this.jedi.theme.getButtonActiveClass())
      }
    })
  }

  getValue () {
    return this.activeEditor.getValue()
  }

  showValidationErrors () {
    super.showValidationErrors()
    this.activeEditor.showValidationErrors()
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

      if (equal(editor.sanitize(value), value)) {
        this.switchEditor(index)
        break
      }

      index++
    }
  }

  setValue (value, triggersChange = true) {
    // if value matches the active editor type set the value. Else switch to the first
    // editor that match the value.
    if (!equal(this.activeEditor.sanitize(value), value)) {
      this.matchEditor(value, this.editors)
    }

    this.activeEditor.setValue(value, triggersChange)

    if (triggersChange) {
      this.onChange()
    }

    this.refreshUI()
  }

  destroy () {
    this.editors.forEach((editor) => {
      editor.destroy()
    })

    super.destroy()
  }
}

export default MultipleEditor
