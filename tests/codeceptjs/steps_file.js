/* global actor */

module.exports = function () {
  return actor({
    _waitForElement: function (locator) {
      this.waitForElement(locator, 5)
    },
    _waitForText: function (text, context) {
      this.waitForText(text, 5, context)
    }
  })
}
