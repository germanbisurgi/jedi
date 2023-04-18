/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('if')

Scenario('should display @if validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/if')
})
