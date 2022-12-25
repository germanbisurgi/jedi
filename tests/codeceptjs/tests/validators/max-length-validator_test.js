/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('minLength')

Scenario('should display minLength validation errors @maxLength', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'maxLength')
  I.waitForElement('.jedi-ready')
  I.scrollTo('[data-path="root.string"]', 0, -300)
  I.dontSee('string must be at most 5 characters long', '[data-path="root.string"]')
  I.click('#editor-value')
  I.fillField('#editor-value', JSON.stringify({
    string: 'string'
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root.string"]', 0, -300)
  I.waitForText('string must be at most 5 characters long', '[data-path="root.string"]')
})
