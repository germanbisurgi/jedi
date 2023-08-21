/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('minimum')

Scenario('@constrain-minimum should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/minimum.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be at least 100', '[data-path="#/number"]')
  I._waitForText('Must be at least 100', '[data-path="#/integer"]')
  I.fillField('[id="root-number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root-integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('Must be at least 100', '[data-path="#/number"]')
  I.dontSee('Must be at least 100', '[data-path="#/integer"]')
  I.fillField('[id="root-number"]', 99)
  I.pressKey('Tab')
  I.fillField('[id="root-integer"]', 99)
  I.pressKey('Tab')
  I._waitForText('Must be at least 100', '[data-path="#/number"]')
  I._waitForText('Must be at least 100', '[data-path="#/integer"]')
})
