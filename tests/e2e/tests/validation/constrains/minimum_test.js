/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('minimum')

Scenario('@minimum should display validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minimum')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be at least 100', '[data-path="#/number"]')
  I._waitForText('Must be at least 100', '[data-path="#/integer"]')
  I.fillField('[id="#/number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="#/integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('Must be at least 100', '[data-path="#/number"]')
  I.dontSee('Must be at least 100', '[data-path="#/integer"]')
  I.fillField('[id="#/number"]', 99)
  I.pressKey('Tab')
  I.fillField('[id="#/integer"]', 99)
  I.pressKey('Tab')
  I._waitForText('Must be at least 100', '[data-path="#/number"]')
  I._waitForText('Must be at least 100', '[data-path="#/integer"]')
})
