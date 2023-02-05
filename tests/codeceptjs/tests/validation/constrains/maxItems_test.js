/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('maxItems')

Scenario('should display @maxItems validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maxItems')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('array must have at most 3 items', '[data-path="root.array"]')
  I.click('Add item')
  I._waitForText('array must have at most 3 items', '[data-path="root.array"]')
})