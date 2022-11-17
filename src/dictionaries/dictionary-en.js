class DictionaryEn {
  constructor () {
    this.language = 'de'
    this.words = {}
  }

  getTranslation (word) {
    return this.words[word] || word
  }
}

export default DictionaryEn
