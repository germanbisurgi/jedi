/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('message')

Scenario('should display message validation error @message', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/message')
  I.waitForText('If the string length is more than 5 characters, it must be "cinco", otherwise "dos".', '[data-path="root.string"]')
})
