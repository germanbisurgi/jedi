/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('maxItems')

Scenario('should display maxItems validation errors @maxItems', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/maxItems')
  I.waitForElement('.jedi-ready')
  I.dontSee('array must have at most 3 items', '[data-path="root.array"]')
  I.click('Add Item')
  I.waitForText('array must have at most 3 items', '[data-path="root.array"]')
})
