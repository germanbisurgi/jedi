/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('enum')

Scenario('should display @enum validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/enum')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForText('Must be one of the enumerated values: [{"string":"Albert"},{"string":"Betti"}]', '[data-path="root"]')
  I.fillField('[id="root.string"]', 'Albert')
  I.pressKey('Tab')
  I.dontSee('Must be one of the enumerated values: [{"string":"Albert"},{"string":"Betti"}]', '[data-path="root"]')
})
