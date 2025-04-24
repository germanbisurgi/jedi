/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('validator')

Scenario('should display @messages-by-language validation error', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/messages-by-language')
  I.selectOption('#show-errors', 'always')
  I._waitForText('Need at least 5 sparks of brilliance.', '[data-path="#/string"]')
  I._waitForText('Only \'locoloco\' unlocks the magic here.', '[data-path="#/string"]')
})
