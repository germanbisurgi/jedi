/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('pattern')

Scenario('should display @pattern validation errors', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/pattern')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be the pattern: ^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$', '[data-path="root"]')
  I.fillField('[id="root.string"]', 'test@test.com')
  I.pressKey('Tab')
  I.dontSee('Must be the pattern: ^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$', '[data-path="root"]')
})
