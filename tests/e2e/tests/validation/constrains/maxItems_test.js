/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('maxItems')

Scenario('@constrain-maxItems should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/maxItems.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('must have at most 3 items', '[data-path="#/array"]')
  I._click('.jedi-array-add')
  I._waitForText('must have at most 3 items', '[data-path="#/array"]')
})
