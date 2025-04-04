/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('minLength')

Scenario('@constrain @minLength should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/minLength')
  I._waitForElement('.jedi-ready')
  I.selectOption('#show-errors', 'always')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be at least 5 characters long', '[data-path="#/string"]')
  I.fillField('[id="root-string"]', 'string')
  I.pressKey('Tab')
  I.dontSee('Must be at least 5 characters long', '[data-path="#/string"]')
})
