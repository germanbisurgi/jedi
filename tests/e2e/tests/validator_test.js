/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('validator')

Scenario('should display @message validation error', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/messages')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForText('5 chars please.', '[data-path="#/string"]')
})
