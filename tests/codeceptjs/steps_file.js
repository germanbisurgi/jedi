/* global actor */

module.exports = function () {
  return actor({
    _waitForElement: function (locator) {
      this.waitForElement(locator, 5)
    }
  })
}
