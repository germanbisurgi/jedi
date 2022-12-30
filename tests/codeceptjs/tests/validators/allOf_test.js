/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('allOf')

Scenario('should display allOf validation errors @allOf', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/allOf')
  I.waitForText('string must be at least 1 characters long', '[data-path="root.string"]')
  I.waitForText('string must have value: "test"', '[data-path="root.string"]')
  I.fillField('#editor-value', JSON.stringify({
    string: 't'
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root.string"]', 0, -300)
  I.dontSee('string must be at least 1 characters long', '[data-path="root.string"]')
  I.waitForText('string must have value: "test"', '[data-path="root.string"]')
  I.fillField('#editor-value', JSON.stringify({
    string: 'test'
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root.string"]', 0, -300)
  I.dontSee('string must be at least 1 characters long', '[data-path="root.string"]')
  I.dontSee('string must have value: "test"', '[data-path="root.string"]')
})
