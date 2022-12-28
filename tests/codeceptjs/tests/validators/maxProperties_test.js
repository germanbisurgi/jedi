/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('maxProperties')

Scenario('should display maxProperties validation errors @maxProperties', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/maxProperties')
  I.waitForElement('.jedi-ready')
  I.waitForText('maxProperties must have at most 1 properties', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    prop1: ''
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('maxProperties must have at most 1 properties', '[data-path="root"]')
})
