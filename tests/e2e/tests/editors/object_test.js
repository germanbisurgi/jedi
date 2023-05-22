/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('object')

Scenario('@description @title should have title and description', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/object')
  I._waitForElement('.jedi-ready')
  I._waitForText('Object', 'legend')
  I._waitForText('Objects are the mapping type in JSON. They map “keys” to “values”. In JSON, the “keys” must always be strings. Each of these pairs is conventionally referred to as a “property”.')
})

Scenario('@pbject-editor @editableProperties should add properties', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/object')
  I._waitForElement('.jedi-ready')
  I._click('.jedi-properties-toggle')
  I._click('.jedi-object-add')
  I.dontSee('[id="#/test"]')
  I.fillField('#jedi-add-property-input-root', 'test')
  I.pressKey('Tab')
  I._click('.jedi-object-add')
  I._waitForElement('[id="#/test"]')
  I._waitForElement('[id="#/test"]')
  I._click('[id="#/test-activator"]')
  I.dontSee('[id="#/test"]')
})

Scenario('@editableProperties should activate and deactivate properties', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/object')
  I._waitForElement('.jedi-ready')
  I._click('.jedi-properties-toggle')
  I._waitForElement('[id="#/required-activator"]:disabled')
  I._waitForElement('[id="#/notRequired-activator"]:not(:disabled)')
  I._waitForElement('[id="#/required"]')
  I._waitForElement('[id="#/notRequired"]')
  I._click('[id="#/notRequired-activator"]')
  I.dontSee('[id="#/notRequired"]')
  I._click('[id="#/notRequired-activator"]')
  I._waitForElement('[id="#/notRequired"]')
})
