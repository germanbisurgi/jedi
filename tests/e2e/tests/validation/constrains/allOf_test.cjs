/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('allOf')

Scenario('@constrain @allOf should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/allOf')
  I._waitForElement('.jedi-ready')
  I.selectOption('#show-errors', 'always')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be at least 1 characters long', '[data-path="#/string"]')
  I._waitForText('Must have value of: "test"', '[data-path="#/string"]')
  I.fillField('[id="root-string"]', 't')
  I.pressKey('Tab')
  I.dontSee('Must be at least 1 characters long', '[data-path="#/string"]')
  I._waitForText('Must have value of: "test"', '[data-path="#/string"]')
  I.fillField('[id="root-string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('Must be at least 1 characters long', '[data-path="#/string"]')
  I.dontSee('Must have value of: "test"', '[data-path="#/string"]')
})
