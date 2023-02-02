/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('format')

Scenario('should display @format validation error', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/format')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForText('E-Mail must be a valid email address', '[data-path="root.email"]')
  I.fillField('[id="root.email"]', 'some@email.com')
  I.pressKey('Tab')
  I.dontSee('E-Mail must be a valid email address', '[data-path="root.email"]')
})
