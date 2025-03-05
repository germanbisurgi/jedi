/* global actor */

module.exports = function () {
  return actor({
    _scrollIntoView: function (locator) {
      this.executeScript(function (locator) {
        document.querySelector(locator).scrollIntoView()
      }, locator)
    },
    _waitForElement: function (locator) {
      this.waitForElement(locator, 5)
    },
    _waitForText: function (text, context) {
      this.waitForText(text, 5, context)
    },
    _scrollTo: function (locator) {
      this._scrollIntoView(locator)
      this.wait(1)
    },
    _click: function (locator) {
      this._scrollIntoView(locator)
      this.wait(1)
      this.click(locator)
    },
    _checkOption: function (locator) {
      this._scrollIntoView(locator)
      this.wait(1)
      this.checkOption(locator)
    },
    _uncheckOption: function (locator) {
      this._scrollIntoView(locator)
      this.wait(1)
      this.uncheckOption(locator)
    },
    _fillField: function (locator, value) {
      this.fillField(locator, value)
      this.pressKey('Tab')
    }
  })
}
