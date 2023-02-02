/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('exclusiveMaximum')

Scenario('should display @exclusiveMaximum validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/exclusiveMaximum')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('number must be less than 99', '[data-path="root.number"]')
  I.dontSee('integer must be less than 99', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I._waitForText('number must be less than 99', '[data-path="root.number"]')
  I._waitForText('integer must be less than 99', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 99)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 99)
  I.pressKey('Tab')
  I.dontSee('number must be less than 99', '[data-path="root.number"]')
  I.dontSee('integer must be less than 99', '[data-path="root.integer"]')
})
