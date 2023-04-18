/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('required')

Scenario('should display @required validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/required')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="root"]')
  I.dontSee('Must have the required properties: required', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    optional: ''
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="root"]')
  I._waitForText('Must have the required properties: required', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    optional: '',
    required: ''
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="root"]')
  I.dontSee('Must have the required properties: required', '[data-path="root"]')
})
