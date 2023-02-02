import Editor from './editor'
import { isSet } from '../utils'

class ObjectEditor extends Editor {
  build () {
    this.fieldset = this.theme.getFieldset()

    // title
    this.fieldset.appendChild(this.theme.getLegend({
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    }))

    // description
    if (this.instance.schema.description()) {
      this.fieldset.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }

    this.fieldset.appendChild(this.activatorsSlot)
    this.fieldset.appendChild(this.actionsSlot)
    this.fieldset.appendChild(this.messagesSlot)
    this.fieldset.appendChild(this.childrenSlot)
    this.container.appendChild(this.fieldset)

    const label = this.theme.getLabel({
      textContent: 'Property Name',
      for: 'jedi-add-property-input-' + this.instance.path
    })

    this.addPropertyInput = this.theme.getInput({
      type: 'text',
      id: 'jedi-add-property-input-' + this.instance.path
    })

    this.addPropertyBtn = this.theme.getButton({
      textContent: 'Add property'
    })

    this.addPropertyBtn.addEventListener('click', () => {
      const key = this.addPropertyInput.value

      // if not property name was given return
      if (key.length === 0) {
        return
      }

      // if property exist return
      if (isSet(this.instance.value[key])) {
        return
      }

      this.instance.createChild({ type: 'any' }, key)
      this.instance.setValue(this.instance.value)
      this.addPropertyInput.value = ''
    })

    if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
      this.actionsSlot.appendChild(label)
      this.actionsSlot.appendChild(this.addPropertyInput)
      this.actionsSlot.appendChild(this.addPropertyBtn)
    }
  }

  refreshActivators () {
    if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
      while (this.activatorsSlot.firstChild) {
        this.activatorsSlot.removeChild(this.activatorsSlot.lastChild)
      }

      this.instance.children.forEach((child) => {
        const activatorId = child.path + '-activator'

        const activatorContainer = this.theme.getCheckboxContainer()

        const activatorLabel = this.theme.getCheckboxLabel({
          for: activatorId,
          textContent: child.schema.title() ? child.schema.title() : child.getKey()
        })

        const activatorInput = this.theme.getCheckbox({
          id: activatorId
        })

        activatorInput.checked = Object.hasOwn(this.instance.getValue(), child.getKey())

        const isRequired = this.instance.isRequired(child.getKey())
        const isDependentRequired = this.instance.isDependentRequired(child.getKey())
        const disabled = this.disabled
        activatorInput.disabled = isRequired || isDependentRequired || disabled

        activatorInput.addEventListener('change', () => {
          if (activatorInput.checked) {
            child.activate()
          } else {
            child.deactivate()
          }
        })

        // appends
        this.activatorsSlot.appendChild(activatorContainer)
        activatorContainer.appendChild(activatorInput)
        activatorContainer.appendChild(activatorLabel)
      })
    }
  }

  refreshEditors () {
    while (this.childrenSlot.firstChild) {
      this.childrenSlot.removeChild(this.childrenSlot.lastChild)
    }

    const value = this.instance.getValue()

    Object.keys(value).forEach((key) => {
      const child = this.instance.getChild(key)

      if (child.isActive) {
        this.childrenSlot.appendChild(child.ui.container)

        if (child) {
          if (this.disabled) {
            child.ui.disable()
          } else {
            child.ui.enable()
          }
        }
      }
    })
  }

  refreshUI () {
    this.refreshActivators()
    this.refreshEditors()

    if (this.disabled) {
      this.addPropertyBtn.setAttribute('disabled', 'disabled')
      this.addPropertyInput.setAttribute('disabled', 'disabled')
    } else {
      this.addPropertyBtn.removeAttribute('disabled')
      this.addPropertyInput.removeAttribute('disabled')
    }
  }
}

export default ObjectEditor
