/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('validator')

Scenario('should display @messages-array validation error', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/messages-array')
  I.selectOption('#show-errors', 'always')
  I._waitForText('5 chars please.', '[data-path="#/string"]')
})
