/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('exclusiveMaximum')

Scenario('should display exclusiveMaximum validation errors @exclusiveMaximum', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/exclusiveMaximum')
  I.waitForElement('.jedi-ready')
  I.dontSee('number must be less than 5', '[data-path="root.number"]')
  I.dontSee('integer must be less than 5', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 5)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 5)
  I.pressKey('Tab')
  I.waitForText('number must be less than 5', '[data-path="root.number"]')
  I.waitForText('integer must be less than 5', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 4)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 4)
  I.pressKey('Tab')
  I.dontSee('number must be less than 5', '[data-path="root.number"]')
  I.dontSee('integer must be less than 5', '[data-path="root.integer"]')
})
