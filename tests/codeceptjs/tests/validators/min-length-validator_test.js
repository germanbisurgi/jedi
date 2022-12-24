/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('minLength')

Scenario('should display minLength validation errors @minLength', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'minLength')
  I.waitForElement('.jedi-ready')
  I.click('#editor-value')
  I.waitForText('string must be at least 5 characters long', '[data-path="root.string"]')
  I.fillField('#editor-value', JSON.stringify({
    string: 'string'
  }))
  I.click('#set-value')
  I.dontSee('string must be at least 5 characters long', '[data-path="root.string"]')
})
