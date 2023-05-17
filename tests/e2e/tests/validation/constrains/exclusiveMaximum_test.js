/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('exclusiveMaximum')

Scenario('should display @exclusiveMaximum validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/exclusiveMaximum')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must be less than 100', '[data-path="root.number"]')
  I.dontSee('Must be less than 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I._waitForText('Must be less than 100', '[data-path="root.number"]')
  I._waitForText('Must be less than 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 99)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 99)
  I.pressKey('Tab')
  I.dontSee('Must be less than 100', '[data-path="root.number"]')
  I.dontSee('Must be less than 100', '[data-path="root.integer"]')
})