/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('pattern')

Scenario('@constrain-pattern should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/pattern')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be the pattern: ^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$', '[data-path="#"]')
  I.fillField('[id="root-string"]', 'test@test.com')
  I.pressKey('Tab')
  I.dontSee('Must be the pattern: ^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$', '[data-path="#"]')
})
