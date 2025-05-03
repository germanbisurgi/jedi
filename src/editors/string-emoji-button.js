import EditorString from './string.js'
import { isSet } from '../helpers/utils.js'
import { getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Emoji picker editor using Emoji Button library.
 * @extends EditorString
 */
class EditorStringEmojiButton extends EditorString {
  static resolves (schema) {
    return window.EmojiButton && getSchemaType(schema) === 'string' && isSet(getSchemaXOption(schema, 'emojiButton'))
  }

  build () {
    this.control = this.theme.getPlaceholderControl({
      title: this.getTitle(),
      description: this.getDescription(),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, 'titleIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      info: this.getInfo()
    })

    this.emojiButton = this.theme.getButton()
    this.emojiButton.classList.add('jedi-emoji-button')
    this.emojiButton.textContent = '😀'
    this.control.placeholder.appendChild(this.emojiButton)

    const options = Object.assign({
      theme: 'auto',
      autoHide: true,
      showPreview: false,
      showSearch: true
    }, getSchemaXOption(this.instance.schema, 'emojiButton'))

    this.picker = new window.EmojiButton(options)
  }

  addEventListeners () {
    this.picker.on('emoji', emoji => {
      this.emojiButton.textContent = emoji
      this.instance.setValue(emoji, true, 'user')
    })

    this.emojiButton.addEventListener('click', () => {
      this.picker.togglePicker(this.emojiButton)
    })
  }

  refreshUI () {
    this.refreshDisabledState()
    this.emojiButton.textContent = this.instance.getValue()
  }

  // sanitize (value) {
  //   const emojiRegex = /(\p{Extended_Pictographic})/gu
  //   const str = String(value)
  //   const match = str.match(emojiRegex)
  //   return match ? match[0] : ''
  // }

  destroy () {
    if (this.picker) this.picker.hidePicker()
    super.destroy()
  }
}

export default EditorStringEmojiButton
