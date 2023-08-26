/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('type')

Scenario('@constrain-type should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/type.json')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="#"]')
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
  I._scrollTo('[data-path="#"]')
  I._waitForText('must be of type string', '[data-path="#/string"]')
  I._waitForText('must be of type number', '[data-path="#/number"]')
  I._waitForText('must be of type integer', '[data-path="#/integer"]')
  I._waitForText('must be of type boolean', '[data-path="#/boolean"]')
  I._waitForText('must be of type null', '[data-path="#/null"]')
  I._waitForText('must be of type array', '[data-path="#/array"]')
  I._waitForText('must be of type object', '[data-path="#/object"]')
})
