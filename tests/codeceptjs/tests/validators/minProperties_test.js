/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('minProperties')

Scenario('should display minProperties validation errors @minProperties', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/minProperties')
  I.waitForElement('.jedi-ready')
  I.waitForText('minProperties must have at least 1 properties', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    test: 'test'
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('minProperties must have at least 1 properties', '[data-path="root"]')
})
