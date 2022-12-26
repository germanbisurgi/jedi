/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('uniqueItems')

Scenario('should display uniqueItems validation errors @uniqueItems', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/uniqueItems')
  I.waitForElement('.jedi-ready')
  I.waitForText('array must have unique items', '[data-path="root.array"]')
  I.fillField('[id="root.array.1"]', 'Betty')
  I.pressKey('Tab')
  I.dontSee('array must be at least 5 characters long', '[data-path="root.array"]')
})
