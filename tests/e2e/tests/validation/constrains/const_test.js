/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('const')

Scenario('should display @const validation errors', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/const')
  I.checkOption('[id="alwaysShowErrors"]')

  // string
  I.scrollTo('[data-path="root.string"]', 0, -300)
  I._waitForText('Must be: "test"', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: "test"', '[data-path="root.string"]')

  // number
  I.scrollTo('[data-path="root.number"]', 0, -300)
  I._waitForText('Must be: 2.5', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 2.50)
  I.pressKey('Tab')
  I.dontSee('Must be: 2.5', '[data-path="root.number"]')

  // integer
  I.scrollTo('[data-path="root.integer"]', 0, -300)
  I._waitForText('Must be: 3', '[data-path="root.integer"]')
  I.fillField('[id="root.integer"]', 3)
  I.pressKey('Tab')
  I.dontSee('Must be: 3', '[data-path="root.integer"]')

  // boolean
  I.scrollTo('[data-path="root.boolean"]', 0, -300)
  I._waitForText('Must be: true', '[data-path="root.boolean"]')
  I.checkOption('[id="root.boolean"]')
  I.pressKey('Tab')
  I.dontSee('Must be: true', '[data-path="root.boolean"]')

  // array
  I.scrollTo('[data-path="root.array"]', 0, -300)
  I._waitForText('Must be: ["test"]', '[data-path="root.array"]')
  I.click('Add item', '[data-path="root.array"]')
  I.fillField('[id="root.array.0"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: ["test"]', '[data-path="root.array"]')

  // object
  I.scrollTo('[data-path="root.object"]', 0, -300)
  I._waitForText('Must be: {"test":"test"}', '[data-path="root.object"]')
  I.fillField('[id="root.object.test"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: {"test":"test"}', '[data-path="root.object"]')

  // multiple
  I.scrollTo('[data-path="root.multiple"]', 0, -300)
  I._waitForText('Must be: "test"', '[data-path="root.multiple"]')
  I.fillField('[id="root.multiple"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be: "test"', '[data-path="root.multiple"]')
})
