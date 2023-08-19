/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('uniqueItems')

Scenario('@constrain-uniqueItems should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/uniqueItems')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must be at least 5 characters long', '[data-path="#/array"]')
  I.fillField('[id="root-array-1"]', 'Albert')
  I.pressKey('Tab')
  I._waitForText('Must have unique items', '[data-path="#/array"]')
})
