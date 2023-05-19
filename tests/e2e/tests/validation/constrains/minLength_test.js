/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('minLength')

Scenario('should display @minLength validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minLength')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be at least 5 characters long', '[data-path="#/string"]')
  I.fillField('[id="#/string"]', 'string')
  I.pressKey('Tab')
  I.dontSee('Must be at least 5 characters long', '[data-path="#/string"]')
})
