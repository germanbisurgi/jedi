/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('maxLength')

Scenario('@constrain-maxLength should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maxLength')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must be at most 5 characters long', '[data-path="#/string"]')
  I.fillField('[id="root-string"]', 'string')
  I.pressKey('Tab')
  I._waitForText('Must be at most 5 characters long', '[data-path="#/string"]')
})
