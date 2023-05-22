/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('required')

Scenario('@required should display validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/required')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="#"]')
  I.dontSee('Must have the required properties: required', '[data-path="#"]')
  I.fillField('#editor-value', JSON.stringify({
    optional: ''
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I._waitForText('Must have the required properties: required', '[data-path="#"]')
  I.fillField('#editor-value', JSON.stringify({
    optional: '',
    required: ''
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.dontSee('Must have the required properties: required', '[data-path="#"]')
})
