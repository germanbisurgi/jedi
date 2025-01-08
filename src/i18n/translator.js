import defaultTranslations from './default-translations.js'
import translations from './translations.js'
import { notSet } from '../helpers/utils.js'

class Translator {
  constructor (config) {
    this.language = config.language || 'en'
    this.defaultTranslations = defaultTranslations
    this.translations = translations
  }

  translate (message) {
    let translation = this.translations[this.language][message]

    if (notSet(translation)) {
      translation = this.defaultTranslations[message]
    }

    return translation
  }

  /**
   * Deletes all properties of the class
   */
  destroy () {
    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Translator
