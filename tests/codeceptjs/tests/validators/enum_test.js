/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('enum')

Scenario('should display enum validation errors @enum', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/enum')
  I.waitForText('enum must be one of the enumerated values: [{"string":"Albert"},{"string":"Betti"}]', '[data-path="root"]')
  I.fillField('[id="root.string"]', 'Albert')
  I.pressKey('Tab')
  I.dontSee('enum must be one of the enumerated values: [{"string":"Albert"},{"string":"Betti"}]', '[data-path="root"]')
})
