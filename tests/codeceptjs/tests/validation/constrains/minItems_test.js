/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('minItems')

Scenario('should display @minItems validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minItems')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('array must have at least 1 items', '[data-path="root.array"]')
  I.click('Add item')
  I.dontSee('array must have at least 1 items', '[data-path="root.array"]')
})
