/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('maxLength')

Scenario('should display @maxLength validation errors', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maxLength')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must be at most 5 characters long', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'string')
  I.pressKey('Tab')
  I._waitForText('Must be at most 5 characters long', '[data-path="root.string"]')
})
