/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('type')

Scenario('should display @type validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/type')
})
