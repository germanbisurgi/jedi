/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('exclusiveMinimum')

Scenario('should display @exclusiveMinimum validation errors', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/exclusiveMinimum')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be greater than 100', '[data-path="root.number"]')
  I._waitForText('Must be greater than 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 101)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 101)
  I.pressKey('Tab')
  I.dontSee('Must be greater than 100', '[data-path="root.number"]')
  I.dontSee('Must be greater than 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I._waitForText('Must be greater than 100', '[data-path="root.number"]')
  I._waitForText('Must be greater than 100', '[data-path="root.integer"]')
})
