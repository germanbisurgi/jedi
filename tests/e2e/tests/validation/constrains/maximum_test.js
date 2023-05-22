/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('maximum')

Scenario('@maximum should display validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maximum')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must be less than 100', '[data-path="#/number"]')
  I.dontSee('Must be less than 100', '[data-path="#/integer"]')
  I.fillField('[id="#/number"]', 101)
  I.pressKey('Tab')
  I.fillField('[id="#/integer"]', 101)
  I.pressKey('Tab')
  I._waitForText('Must be less than 100', '[data-path="#/number"]')
  I._waitForText('Must be less than 100', '[data-path="#/integer"]')
  I.fillField('[id="#/number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="#/integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('Must be less than 100', '[data-path="#/number"]')
  I.dontSee('Must be less than 100', '[data-path="#/integer"]')
})
