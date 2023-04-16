/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('if')

Scenario('should display @if validation errors', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/if')
})
