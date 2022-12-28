/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('exclusiveMinimum')

Scenario('should display exclusiveMinimum validation errors @exclusiveMinimum', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/exclusiveMinimum')
  I.waitForElement('.jedi-ready')
  I.waitForText('number must be at least 101', '[data-path="root.number"]')
  I.waitForText('integer must be at least 101', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 101)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 101)
  I.pressKey('Tab')
  I.dontSee('number must be at least 101', '[data-path="root.number"]')
  I.dontSee('integer must be at least 101', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I.waitForText('number must be at least 101', '[data-path="root.number"]')
  I.waitForText('integer must be at least 101', '[data-path="root.integer"]')
})
