/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('oneOf')

Scenario('@constrain @oneOf should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/oneOf')
  I.selectOption('#show-errors', 'always')
  I._waitForText('Must validate against exactly one of the provided schemas. It currently validates against 2 of the schemas', '[data-path="#/number"]')
  I.fillField('[id="root-number"]', 3)
  I.pressKey('Tab')
  I.dontSee('Must validate against exactly one of the provided schemas. It currently validates against 2 of the schemas', '[data-path="#/number"]')
  I.fillField('[id="root-number"]', 15)
  I.pressKey('Tab')
  I._waitForText('Must validate against exactly one of the provided schemas. It currently validates against 2 of the schemas', '[data-path="#/number"]')
  I.fillField('[id="root-number"]', 5)
  I.pressKey('Tab')
  I.dontSee('Must validate against exactly one of the provided schemas. It currently validates against 2 of the schemas', '[data-path="#/number"]')
})
