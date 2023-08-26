/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('allOf')

Scenario('@constrain-allOf should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/allOf.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForText('must be at least 1 characters long', '[data-path="#/string"]')
  I._waitForText('must have value of: "test"', '[data-path="#/string"]')
  I.fillField('[id="root-string"]', 't')
  I.pressKey('Tab')
  I.dontSee('must be at least 1 characters long', '[data-path="#/string"]')
  I._waitForText('must have value of: "test"', '[data-path="#/string"]')
  I.fillField('[id="root-string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('must be at least 1 characters long', '[data-path="#/string"]')
  I.dontSee('must have value of: "test"', '[data-path="#/string"]')
})
