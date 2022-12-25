/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('const')

Scenario('should display const validation errors @const', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/const')

  // string
  I.scrollTo('[data-path="root.string"]', 0, -300)
  I.waitForText('string must have value: "test"', 1, '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('string must have value: "test"', '[data-path="root.string"]')

  // number
  I.scrollTo('[data-path="root.number"]', 0, -300)
  I.waitForText('number must have value: 2.5', 1, '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 2.50)
  I.pressKey('Tab')
  I.dontSee('number must have value: 2.5', '[data-path="root.number"]')

  // integer
  I.scrollTo('[data-path="root.integer"]', 0, -300)
  I.waitForText('integer must have value: 3', 1, '[data-path="root.integer"]')
  I.fillField('[id="root.integer"]', 3)
  I.pressKey('Tab')
  I.dontSee('integer must have value: 3', '[data-path="root.integer"]')

  // boolean
  I.scrollTo('[data-path="root.boolean"]', 0, -300)
  I.waitForText('boolean must have value: true', 1, '[data-path="root.boolean"]')
  I.checkOption('[id="root.boolean"]')
  I.pressKey('Tab')
  I.dontSee('boolean must have value: true', '[data-path="root.boolean"]')

  // array
  I.scrollTo('[data-path="root.array"]', 0, -300)
  I.waitForText('array must have value: ["test"]', 1, '[data-path="root.array"]')
  I.click('Add Item', '[data-path="root.array"]')
  I.fillField('[id="root.array.0"]', 'test')
  I.pressKey('Tab')
  I.dontSee('array must have value: ["test"]', '[data-path="root.array"]')

  // object
  I.scrollTo('[data-path="root.object"]', 0, -300)
  I.waitForText('object must have value: {"test":"test"}', 1, '[data-path="root.object"]')
  I.fillField('[id="root.object.test"]', 'test')
  I.pressKey('Tab')
  I.dontSee('object must have value: {"test":"test"}', '[data-path="root.object"]')

  // multiple
  I.scrollTo('[data-path="root.multiple"]', 0, -300)
  I.waitForText('multiple must have value: "test"', 1, '[data-path="root.multiple"]')
  I.fillField('[id="root.multiple"]', 'test')
  I.pressKey('Tab')
  I.dontSee('multiple must have value: "test"', '[data-path="root.multiple"]')
})