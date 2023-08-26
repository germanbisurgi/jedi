/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('format')

Scenario('@constrain-format should display validation error', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/format.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForText('must be a valid email', '[data-path="#/email"]')
  I.fillField('[id="root-email"]', 'some@email.com')
  I.pressKey('Tab')
  I.dontSee('must be a valid email', '[data-path="#/email"]')
})
