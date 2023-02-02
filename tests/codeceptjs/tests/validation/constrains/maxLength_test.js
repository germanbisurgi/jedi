/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('maxLength')

Scenario('should display @maxLength validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maxLength')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('string must be at most 5 characters long', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'string')
  I.pressKey('Tab')
  I._waitForText('string must be at most 5 characters long', '[data-path="root.string"]')
})
