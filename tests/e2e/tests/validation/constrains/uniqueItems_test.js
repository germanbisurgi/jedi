/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('uniqueItems')

Scenario('should display @uniqueItems validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/uniqueItems')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must be at least 5 characters long', '[data-path="root.array"]')
  I.fillField('[id="root.array.1"]', 'Albert')
  I.pressKey('Tab')
  I._waitForText('Must have unique items', '[data-path="root.array"]')
})
