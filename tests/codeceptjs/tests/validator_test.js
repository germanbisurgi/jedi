/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('validator')

Scenario('should display @message validation error', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/message')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForText('5 chars please.', '[data-path="root.string"]')
})
