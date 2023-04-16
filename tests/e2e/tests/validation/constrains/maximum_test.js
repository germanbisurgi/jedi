/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('maximum')

Scenario('should display @maximum validation errors', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maximum')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must be less than 100', '[data-path="root.number"]')
  I.dontSee('Must be less than 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 101)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 101)
  I.pressKey('Tab')
  I._waitForText('Must be less than 100', '[data-path="root.number"]')
  I._waitForText('Must be less than 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('Must be less than 100', '[data-path="root.number"]')
  I.dontSee('Must be less than 100', '[data-path="root.integer"]')
})
