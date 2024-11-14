/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('required')

Scenario('@constrain-required should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '/json/validator/required.json')
  I.selectOption('#show-errors', 'always')
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
