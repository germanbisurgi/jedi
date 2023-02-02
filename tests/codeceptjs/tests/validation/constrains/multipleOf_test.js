/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('multipleOf')

Scenario('should display @multipleOf validation errors', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/multipleOf')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('number must be multiple of 10', '[data-path="root.number"]')
  I.dontSee('integer must be multiple of 10', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 9)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 9)
  I.pressKey('Tab')
  I._waitForText('number must be multiple of 10', '[data-path="root.number"]')
  I._waitForText('integer must be multiple of 10', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('number must be multiple of 10', '[data-path="root.number"]')
  I.dontSee('integer must be multiple of 10', '[data-path="root.integer"]')
})
