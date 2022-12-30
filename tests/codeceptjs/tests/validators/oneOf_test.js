/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('oneOf')

Scenario('should display oneOf validation errors @oneOf', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/oneOf')
  I.waitForText('number must validate against exactly one of the provided schemas. It currently validates against 2 of the schemas.', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 3)
  I.pressKey('Tab')
  I.dontSee('number must validate against at least one of the provided schemas', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 15)
  I.pressKey('Tab')
  I.waitForText('number must validate against exactly one of the provided schemas. It currently validates against 2 of the schemas.', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 5)
  I.pressKey('Tab')
  I.dontSee('number must validate against at least one of the provided schemas', '[data-path="root.number"]')
})
