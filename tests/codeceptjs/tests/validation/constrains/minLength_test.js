/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('minLength')

Scenario('should display @minLength validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minLength')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('string must be at least 5 characters long', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'string')
  I.pressKey('Tab')
  I.dontSee('string must be at least 5 characters long', '[data-path="root.string"]')
})
