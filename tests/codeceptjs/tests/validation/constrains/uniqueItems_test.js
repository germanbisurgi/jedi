/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('uniqueItems')

Scenario('should display @uniqueItems validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/uniqueItems')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('array must have unique items', '[data-path="root.array"]')
  I.fillField('[id="root.array.1"]', 'Betty')
  I.pressKey('Tab')
  I.dontSee('array must be at least 5 characters long', '[data-path="root.array"]')
})
