/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('patternProperties')

Scenario('should display @patternProperties validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/patternProperties')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.fillField('#editor-value', JSON.stringify({
    S: '',
    I: 0
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I._waitForText('S must have value: "test"', '[data-path="root"]')
  I._waitForText('I must have value: 21', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    S: 'test',
    I: 21
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('S must have value: "test"', '[data-path="root"]')
  I.dontSee('I must have value: 21', '[data-path="root"]')
})