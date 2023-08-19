/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('allOf')

Scenario('@constrain-allOf should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/allOf')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForText('Must be at least 1 characters long', '[data-path="#/string"]')
  I._waitForText('Must be: "test"', '[data-path="#/string"]')
  I.fillField('[id="root-string"]', 't')
  I.pressKey('Tab')
  I.dontSee('Must be at least 1 characters long', '[data-path="#/string"]')
  I._waitForText('Must be: "test"', '[data-path="#/string"]')
  I.fillField('[id="root-string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be at least 1 characters long', '[data-path="#/string"]')
  I.dontSee('Must be: "test"', '[data-path="#/string"]')
})
