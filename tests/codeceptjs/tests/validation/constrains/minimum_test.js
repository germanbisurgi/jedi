/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('minimum')

Scenario('should display @minimum validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minimum')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be at least 100', '[data-path="root.number"]')
  I._waitForText('Must be at least 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('Must be at least 100', '[data-path="root.number"]')
  I.dontSee('Must be at least 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 99)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 99)
  I.pressKey('Tab')
  I._waitForText('Must be at least 100', '[data-path="root.number"]')
  I._waitForText('Must be at least 100', '[data-path="root.integer"]')
})
