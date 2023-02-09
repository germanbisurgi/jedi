/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('allOf')

Scenario('should display @allOf validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/allOf')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForText('Must be at least 1 characters long', '[data-path="root.string"]')
  I._waitForText('Must be: "test"', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 't')
  I.pressKey('Tab')
  I.dontSee('Must be at least 1 characters long', '[data-path="root.string"]')
  I._waitForText('Must be: "test"', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be at least 1 characters long', '[data-path="root.string"]')
  I.dontSee('Must be: "test"', '[data-path="root.string"]')
})
