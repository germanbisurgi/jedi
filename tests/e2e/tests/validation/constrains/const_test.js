/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('const')

Scenario('@constrain-const should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/const.json')
  I.selectOption('#show-errors', 'always')

  // string
  I._scrollTo('[data-path="#/string"]')
  I._waitForText('must have value of: "test"', '[data-path="#/string"]')
  I.fillField('[id="root-string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('must have value of: "test"', '[data-path="#/string"]')

  // number
  I._scrollTo('[data-path="#/number"]')
  I._waitForText('must have value of: 2.5', '[data-path="#/number"]')
  I.fillField('[id="root-number"]', 2.50)
  I.pressKey('Tab')
  I.dontSee('must have value of: 2.5', '[data-path="#/number"]')

  // integer
  I._scrollTo('[data-path="#/integer"]')
  I._waitForText('must have value of: 3', '[data-path="#/integer"]')
  I.fillField('[id="root-integer"]', 3)
  I.pressKey('Tab')
  I.dontSee('must have value of: 3', '[data-path="#/integer"]')

  // boolean
  I._scrollTo('[data-path="#/boolean"]')
  I._waitForText('must have value of: true', '[data-path="#/boolean"]')
  I._checkOption('[id="root-boolean"]')
  I.pressKey('Tab')
  I.dontSee('must have value of: true', '[data-path="#/boolean"]')

  // array
  I._scrollTo('[data-path="#/array"]')
  I._waitForText('must have value of: ["test"]', '[data-path="#/array"]')
  I._click('.jedi-array-add')
  I.fillField('[id="root-array-0"]', 'test')
  I.pressKey('Tab')
  I.dontSee('must have value of: ["test"]', '[data-path="#/array"]')

  // object
  I._scrollTo('[data-path="#/object"]')
  I._waitForText('must have value of: {"test":"test"}', '[data-path="#/object"]')
  I.fillField('[id="root-object-test"]', 'test')
  I.pressKey('Tab')
  I.dontSee('must have value of: {"test":"test"}', '[data-path="#/object"]')

  // multiple
  I._scrollTo('[data-path="#/multiple"]')
  I._waitForText('must have value of: "test"', '[data-path="#/multiple"]')
  I.selectOption('[id="root-multiple-switcher"]', 'String')
  I.fillField('[id="root-multiple"]', 'test')
  I.pressKey('Tab')
  I.dontSee('must have value of: "test"', '[data-path="#/multiple"]')
})
