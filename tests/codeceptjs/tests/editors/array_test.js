/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('array')

Scenario('should edit properties @items', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/array')
  I.waitForElement('.jedi-ready')
  I.dontSee('[id="root.0"]')
  I.click('Add item')
  I.waitForElement('[id="root.0"]')
  I.click('Delete item')
  I.dontSee('[id="root.0"]')
})
