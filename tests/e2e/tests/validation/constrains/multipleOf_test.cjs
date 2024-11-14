/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('multipleOf')

Scenario('@constrain-multipleOf should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/multipleOf')
  I.selectOption('#show-errors', 'always')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must be multiple of 10', '[data-path="#/number"]')
  I.dontSee('Must be multiple of 10', '[data-path="#/integer"]')
  I.fillField('[id="root-number"]', 9)
  I.pressKey('Tab')
  I.fillField('[id="root-integer"]', 9)
  I.pressKey('Tab')
  I._waitForText('Must be multiple of 10', '[data-path="#/number"]')
  I._waitForText('Must be multiple of 10', '[data-path="#/integer"]')
  I.fillField('[id="root-number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root-integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('Must be multiple of 10', '[data-path="#/number"]')
  I.dontSee('Must be multiple of 10', '[data-path="#/integer"]')
})
