/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('required')

Scenario('should display @required validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/required')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('Must have the required properties: required', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    optional: ''
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I._waitForText('Must have the required properties: required', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    optional: '',
    required: ''
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('Must have the required properties: required', '[data-path="root"]')
})
