/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('maximum')

Scenario('@constrain @maximum should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/maximum')
  I.selectOption('#show-errors', 'always')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must be at most 100', '[data-path="#/number"]')
  I.dontSee('Must be at most 100', '[data-path="#/integer"]')
  I.fillField('[id="root-number"]', 101)
  I.pressKey('Tab')
  I.fillField('[id="root-integer"]', 101)
  I.pressKey('Tab')
  I._waitForText('Must be at most 100', '[data-path="#/number"]')
  I._waitForText('Must be at most 100', '[data-path="#/integer"]')
  I.fillField('[id="root-number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root-integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('Must be at most 100', '[data-path="#/number"]')
  I.dontSee('Must be at most 100', '[data-path="#/integer"]')
})
