/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('not')

Scenario('should display @not validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/not')
  I.checkOption('[id="alwaysShowErrors"]')
  I.scrollTo('[data-path="root.test"]', 0, -300)
  I._waitForText('test must not validate against the provided schema {"type":"string"}', '[data-path="root.test"]')
  I.click('Number')
  I.dontSee('test must not validate against the provided schema {"type":"string"}', '[data-path="root.test"]')
})
