/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('required')

Scenario('should display required validation errors @required', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validators/required')
  I.waitForElement('.jedi-ready')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('Object is missing the required property: required', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    optional: ''
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.waitForText('Object is missing the required property: required', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    optional: '',
    required: ''
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('Object is missing the required property: required', '[data-path="root"]')
})
