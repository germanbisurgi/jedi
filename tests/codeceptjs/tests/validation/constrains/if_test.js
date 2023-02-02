/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('if')

Scenario('should display @if validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/if')
})
