/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('minItems')

Scenario('@minItems should display validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minItems')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must have at least 1 items', '[data-path="#/array"]')
  I._click('.jedi-array-add')
  I.dontSee('Must have at least 1 items', '[data-path="#/array"]')
})
