/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('object')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/object')
  I._waitForElement('.jedi-ready')
  I._waitForText('Object', 'legend')
  I._waitForText('Objects are the mapping type in JSON. They map “keys” to “values”. In JSON, the “keys” must always be strings. Each of these pairs is conventionally referred to as a “property”.')
})

Scenario('should edit properties @editableProperties', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/object')
  I._waitForElement('.jedi-ready')
  I.click('Add property')
  I.dontSee('[id="root.test"]')
  I.fillField('#jedi-add-property-input-root', 'test')
  I.pressKey('Tab')
  I.click('Add property')
  I._waitForElement('[id="root.test"]')
  I._waitForElement('[id="root.test"]')
  I.click('[id="root.test-activator"]')
  I.dontSee('[id="root.test"]')
})
