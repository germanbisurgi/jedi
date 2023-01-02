/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('object')

Scenario('should edit properties @editableProperties', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/object')
  I.waitForElement('.jedi-ready')
  I.click('Add property')
  I.dontSee('[id="root.test"]')
  I.fillField('#jedi-add-property-input-root', 'test')
  I.pressKey('Tab')
  I.click('Add property')
  I.waitForElement('[id="root.test"]')
})
