import Instance from './instance'
import Schema from '../schema'
import { isSet, equal, different, mergeDeep } from '../utils'
import MultipleEditor from '../editors/multiple'

class MultipleInstance extends Instance {
  setUI () {
    this.ui = new MultipleEditor(this)
  }

  prepare () {
    this.editors = []
    this.activeEditor = null
    this.lastIndex = 0
    this.index = 0
    this.schemas = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []

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

        this.schemas.push(schema)
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

        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(type.charAt(0).toUpperCase() + type.slice(1))

        this.schemas.push(schema)
      })
    } else if (this.schema.typeIs('any') || !this.schema.type()) {
      const schemaClone = this.schema.clone()

      this.schemas = [
        { ...schemaClone, ...{ type: 'string' } },
        { ...schemaClone, ...{ type: 'number' } },
        { ...schemaClone, ...{ type: 'integer' } },
        { ...schemaClone, ...{ type: 'boolean' } },
        { ...schemaClone, ...{ type: 'array' } },
        { ...schemaClone, ...{ type: 'object' } },
        { ...schemaClone, ...{ type: 'null' } }
      ]

      this.schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
      })

      this.switcherOptionsLabels = [
        'String', 'Number', 'Integer', 'Boolean', 'Array', 'Object', 'Null'
      ]
    }

    // Editors
    this.schemas.forEach((schema) => {
      const editor = this.jedi.createInstance({
        jedi: this.jedi,
        schema: new Schema(schema),
        path: this.path,
        parent: this.parent
      })

      editor.unregister()

      editor.on('change', () => {
        this.emit('change')
      })

      this.editors.push(editor)
    })

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
    if (different(this.activeEditor.sanitize(value), value)) {
      this.matchEditor(value, this.editors)
    }

    this.activeEditor.setValue(value, triggersChange)

    if (triggersChange) {
      this.emit('change')
    }
  }

  destroy () {
    this.editors.forEach((editor) => {
      editor.destroy()
    })

    super.destroy()
  }
}

export default MultipleInstance
