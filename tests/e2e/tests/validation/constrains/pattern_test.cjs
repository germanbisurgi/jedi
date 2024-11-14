/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('pattern')

Scenario('@constrain-pattern should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/pattern')
  I.selectOption('#show-errors', 'always')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must match the pattern: "^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"', '[data-path="#"]')
  I.fillField('[id="root-string"]', 'test@test.com')
  I.pressKey('Tab')
  I.dontSee('Must match the pattern: "^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"', '[data-path="#"]')
})
