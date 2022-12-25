/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('maximum')

Scenario('should display maximum validation errors @maximum', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/maximum')
  I.waitForElement('.jedi-ready')
  I.dontSee('number must be less than 5', '[data-path="root.number"]')
  I.dontSee('integer must be less than 5', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 6)
  I.fillField('[id="root.integer"]', 6)
  I.pressKey('Tab')
  I.waitForText('number must be less than 5', '[data-path="root.number"]')
  I.waitForText('integer must be less than 5', '[data-path="root.integer"]')
})
