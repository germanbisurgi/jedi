/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('maxItems')

Scenario('should display @maxItems validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maxItems')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must have at most 3 items', '[data-path="root.array"]')
  I._click('.jedi-array-add')
  I._waitForText('Must have at most 3 items', '[data-path="root.array"]')
})