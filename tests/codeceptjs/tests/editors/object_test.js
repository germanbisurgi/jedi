/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('object')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/object')
  I.waitForElement('.jedi-ready')
  I.waitForText('Object', 'legend')
  I.waitForText('Objects are the mapping type in JSON. They map “keys” to “values”. In JSON, the “keys” must always be strings. Each of these pairs is conventionally referred to as a “property”.')
})

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
  I.click('Remove property')
  I.dontSee('[id="root.test"]')
})
