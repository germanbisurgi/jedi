/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('type')

Scenario('should display @type validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/type')
  I.fillField('#editor-value', JSON.stringify({
    string: 1,
    number: 'test',
    integer: 'test',
    boolean: 'test',
    null: 'test',
    array: 'test',
    object: 'test'
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I._waitForText('must be of type string', '[data-path="root.string"]')
  I._waitForText('must be of type number', '[data-path="root.number"]')
  I._waitForText('must be of type integer', '[data-path="root.integer"]')
  I._waitForText('must be of type boolean', '[data-path="root.boolean"]')
  I._waitForText('must be of type null', '[data-path="root.null"]')
  I._waitForText('must be of type array', '[data-path="root.array"]')
  I._waitForText('must be of type object', '[data-path="root.object"]')
})
