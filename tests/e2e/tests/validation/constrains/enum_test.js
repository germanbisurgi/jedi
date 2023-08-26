/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('enum')

Scenario('@constrain-enum should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/enum.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._scrollTo('[data-path="#"]')
  I.fillField('[id="root-string"]', 'not in enum')
  I.pressKey('Tab')
  I._waitForText('must be one of the enumerated values: [{"string":"Albert"},{"string":"Betti"}]', '[data-path="#"]')
  I.fillField('[id="root-string"]', 'Albert')
  I.pressKey('Tab')
  I.dontSee('must be one of the enumerated values: [{"string":"Albert"},{"string":"Betti"}]', '[data-path="#"]')
})
