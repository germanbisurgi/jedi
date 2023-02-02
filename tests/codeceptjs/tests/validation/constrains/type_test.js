/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('type')

Scenario('should display @type validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/allOf')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForText('string must be at least 1 characters long', '[data-path="root.string"]')
  I._waitForText('string must have value: "test"', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 't')
  I.pressKey('Tab')
  I.dontSee('string must be at least 1 characters long', '[data-path="root.string"]')
  I._waitForText('string must have value: "test"', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('string must be at least 1 characters long', '[data-path="root.string"]')
  I.dontSee('string must have value: "test"', '[data-path="root.string"]')
})
