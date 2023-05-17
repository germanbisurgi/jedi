/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('type')

Scenario('should display @type validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/type')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    string: 1,
    number: 'test',
    integer: 'test',
    boolean: 'test',
    null: 'test',
    array: 'test',
    object: 'test'
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="root"]')
  I._waitForText('Must be of type string', '[data-path="root.string"]')
  I._waitForText('Must be of type number', '[data-path="root.number"]')
  I._waitForText('Must be of type integer', '[data-path="root.integer"]')
  I._waitForText('Must be of type boolean', '[data-path="root.boolean"]')
  I._waitForText('Must be of type null', '[data-path="root.null"]')
  I._waitForText('Must be of type array', '[data-path="root.array"]')
  I._waitForText('Must be of type object', '[data-path="root.object"]')
})