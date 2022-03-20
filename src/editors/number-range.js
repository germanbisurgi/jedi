import Editor from '../editor'

class NumberRangeEditor extends Editor {
  build () {
    // label
    const labelText = this.schema.title
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    let min = this.schema.minimum || 0
    if (typeof this.schema.exclusiveMinimum !== 'undefined') min += 1

    let max = this.schema.maximum || 100
    if (typeof this.schema.exclusiveMaximum !== 'undefined') max -= 1

    this.input = this.jedi.theme.getInput({
      type: 'range',
      id: this.path,
      step: this.schema.step || 1,
      min: min,
      max: max
    })

    this.container.appendChild(this.input)

    // output
    this.output = this.jedi.theme.getOutput({
      for: this.path
    })
    this.output.value = this.getValue()
    this.container.appendChild(this.output)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.value)
    })
  }

  sanitize (value) {
    return Number(value)
  }

  refreshUI () {
    this.input.value = this.getValue()
    this.output.value = this.getValue()
  }
}

export default NumberRangeEditor
