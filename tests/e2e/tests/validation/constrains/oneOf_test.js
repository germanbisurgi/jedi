/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('oneOf')

Scenario('should display @oneOf validation errors', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/oneOf')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForText('Must validate against exactly one of the provided schemas. It currently validates against 2 of the schemas.', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 3)
  I.pressKey('Tab')
  I.dontSee('Must validate against at least one of the provided schemas', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 15)
  I.pressKey('Tab')
  I._waitForText('Must validate against exactly one of the provided schemas. It currently validates against 2 of the schemas.', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 5)
  I.pressKey('Tab')
  I.dontSee('Must validate against at least one of the provided schemas', '[data-path="root.number"]')
})
