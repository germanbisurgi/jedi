import DictionaryEn from './dictionaries/dictionary-en'

class Translator {
  constructor () {
    this.dictionary = new DictionaryEn()
  }

  translate (word) {
    this.dictionary.getTranslation(word)
  }
}

export default Translator
