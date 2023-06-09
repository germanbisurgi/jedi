import BooleanEditor from './boolean'
import { isSet, pathToAttribute } from '../utils'

class BooleanEnumRadioEditor extends BooleanEditor {
  build () {
    // control
    this.control = this.theme.getRadiosControl({
      values: ['false', 'true'],
      titles: this.instance.schema.option('enumTitles') || ['false', 'true'],
      id: pathToAttribute(this.instance.path),
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle'),
      description: this.instance.schema.description()
    })

    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const radioValue = radio.value === 'true'
        this.instance.setValue(radioValue)
      })
    })
  }

  refreshUI () {
    this.control.radios.forEach((radio) => {
      const radioValue = radio.value === 'true'
      radio.checked = radioValue === this.instance.getValue()
      radio.disabled = this.disabled
    })
  }
}

export default BooleanEnumRadioEditor
