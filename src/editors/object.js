import Editor from './editor'
import { isSet } from '../utils'

class ObjectEditor extends Editor {
  build () {
    this.setContainer()
    this.container.appendChild(this.messagesSlot)
    this.container.appendChild(this.childEditorsSlot)
    this.container.appendChild(this.actionsSlot)

    if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
      const label = this.theme.getLabel({
        textContent: 'Property Name',
        for: 'jedi-add-property-input-' + this.instance.path
      })

      const input = this.theme.getInput({
        type: 'text',
        id: 'jedi-add-property-input-' + this.instance.path
      })

      const addBtn = this.theme.getButton({
        textContent: 'Add property'
      })

      addBtn.addEventListener('click', () => {
        const key = input.value

        // if not property name was given return
        if (key.length === 0) {
          return
        }

        // if property exist return
        if (isSet(this.instance.value[key])) {
          return
        }

        this.instance.createChildInstance({ type: 'any' }, key)
        this.instance.setValue(this.instance.value)
        input.value = ''
      })

      this.instance.childEditors.forEach((instance) => {
        const id = 'property-' + instance.getKey()

        const checkboxContainer = this.theme.getCheckboxContainer()

        const label = this.theme.getCheckboxLabel({
          for: id,
          textContent: instance.getKey()
        })

        const checkbox = this.theme.getCheckbox({
          id: id
        })

        checkbox.checked = true

        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {

          } else {
            this.instance.deleteChildInstance(instance.getKey())
          }
        })

        // appends
        this.actionsSlot.appendChild(checkboxContainer)
        checkboxContainer.appendChild(checkbox)
        checkboxContainer.appendChild(label)
      })

      this.actionsSlot.appendChild(label)
      this.actionsSlot.appendChild(input)
      this.actionsSlot.appendChild(addBtn)
    }
  }

  // addChildEditor (schema, key) {
  //   const editor = this.instance.jedi.createEditor({
  //     jedi: this.instance.jedi,
  //     schema: new Schema(schema),
  //     path: this.instance.path + '.' + key,
  //     parent: this.instance
  //   })
  //
  //   // removeBtn
  //   const notRequired = !this.instance.isRequired(key)
  //   const notDependentRequired = !this.instance.isDependentRequired(key)
  //   const editableProperties = this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')
  //
  //   if (notRequired && notDependentRequired && editableProperties) {
  //     const removeBtn = this.theme.getButton({
  //       textContent: 'Remove property'
  //     })
  //     editor.container.appendChild(removeBtn)
  //     removeBtn.addEventListener('click', () => {
  //       delete this.instance.value[key]
  //       this.instance.setValue(this.instance.value)
  //     })
  //   }
  //
  //   this.instance.childEditors.push(editor)
  //   this.instance.value[key] = editor.getValue()
  // }

  refreshUI () {
    const value = this.instance.getValue()

    Object.keys(value).forEach((key) => {
      const childEditor = this.instance.getChildInstance(key)

      this.childEditorsSlot.appendChild(childEditor.ui.container)

      if (childEditor) {
        if (this.disabled) {
          childEditor.ui.disable()
        } else {
          childEditor.ui.enable()
        }
      }
    })
  }

  setContainer () {
    this.container = this.theme.getFieldset()

    // title
    this.container.appendChild(this.theme.getLegend({
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    }))

    // description
    if (this.instance.schema.description()) {
      this.container.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }
}

export default ObjectEditor
