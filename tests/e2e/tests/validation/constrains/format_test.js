/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('format')

Scenario('should display @format validation error', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/format')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForText('Must be a valid email address', '[data-path="root.email"]')
  I.fillField('[id="root.email"]', 'some@email.com')
  I.pressKey('Tab')
  I.dontSee('Must be a valid email address', '[data-path="root.email"]')
})
