/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('minItems')

Scenario('should display minItems validation errors @minItems', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/minItems')
  I.waitForElement('.jedi-ready')
  I.waitForText('array must have at least 1 items', '[data-path="root.array"]')
  I.click('Add Item')
  I.dontSee('array must have at least 1 items', '[data-path="root.array"]')
})
