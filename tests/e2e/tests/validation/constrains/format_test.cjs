/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('format')

Scenario('@constrain-format should display validation error', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/format.json')
  I.selectOption('#show-errors', 'always')
  I.dontSee('Must be a valid email', '[data-path="#/email"]')
  I._checkOption('[id="validateFormat"]')
  I._waitForText('Must be a valid email', '[data-path="#/email"]')
  I.fillField('[id="root-email"]', 'some@email.com')
  I.pressKey('Tab')
  I.dontSee('Must be a valid email', '[data-path="#/email"]')
})
