/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('pattern')

Scenario('should display @pattern validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/pattern')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be the pattern: ^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$', '[data-path="#"]')
  I.fillField('[id="#/string"]', 'test@test.com')
  I.pressKey('Tab')
  I.dontSee('Must be the pattern: ^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$', '[data-path="#"]')
})
