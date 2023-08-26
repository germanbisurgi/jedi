/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('exclusiveMinimum')

Scenario('@constrain-exclusiveMinimum should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/exclusiveMinimum.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('must be greater than 100', '[data-path="#/number"]')
  I._waitForText('must be greater than 100', '[data-path="#/integer"]')
  I.fillField('[id="root-number"]', 101)
  I.pressKey('Tab')
  I.fillField('[id="root-integer"]', 101)
  I.pressKey('Tab')
  I.dontSee('must be greater than 100', '[data-path="#/number"]')
  I.dontSee('must be greater than 100', '[data-path="#/integer"]')
  I.fillField('[id="root-number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root-integer"]', 100)
  I.pressKey('Tab')
  I._waitForText('must be greater than 100', '[data-path="#/number"]')
  I._waitForText('must be greater than 100', '[data-path="#/integer"]')
})
