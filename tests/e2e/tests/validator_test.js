/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('validator')

Scenario('should display @message validation error', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/messages.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForText('5 chars please.', '[data-path="#/string"]')
})
