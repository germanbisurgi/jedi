/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('const')

Scenario('should display @const validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/const')
  I.checkOption('[id="alwaysShowErrors"]')

  // string
  I._scrollTo('[data-path="root.string"]')
  I._waitForText('Must be: "test"', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: "test"', '[data-path="root.string"]')

  // number
  I._scrollTo('[data-path="root.number"]')
  I._waitForText('Must be: 2.5', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 2.50)
  I.pressKey('Tab')
  I.dontSee('Must be: 2.5', '[data-path="root.number"]')

  // integer
  I._scrollTo('[data-path="root.integer"]')
  I._waitForText('Must be: 3', '[data-path="root.integer"]')
  I.fillField('[id="root.integer"]', 3)
  I.pressKey('Tab')
  I.dontSee('Must be: 3', '[data-path="root.integer"]')

  // boolean
  I._scrollTo('[data-path="root.boolean"]')
  I._waitForText('Must be: true', '[data-path="root.boolean"]')
  I.checkOption('[id="root.boolean"]')
  I.pressKey('Tab')
  I.dontSee('Must be: true', '[data-path="root.boolean"]')

  // array
  I._scrollTo('[data-path="root.array"]')
  I._waitForText('Must be: ["test"]', '[data-path="root.array"]')
  I._click('.jedi-array-add')
  I.fillField('[id="root.array.0"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: ["test"]', '[data-path="root.array"]')

  // object
  I._scrollTo('[data-path="root.object"]')
  I._waitForText('Must be: {"test":"test"}', '[data-path="root.object"]')
  I.fillField('[id="root.object.test"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: {"test":"test"}', '[data-path="root.object"]')

  // multiple
  I._scrollTo('[data-path="root.multiple"]')
  I._waitForText('Must be: "test"', '[data-path="root.multiple"]')
  I.fillField('[id="root.multiple"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: "test"', '[data-path="root.multiple"]')
})
