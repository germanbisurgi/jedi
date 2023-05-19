/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('exclusiveMinimum')

Scenario('should display @exclusiveMinimum validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/exclusiveMinimum')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must be greater than 100', '[data-path="#/number"]')
  I._waitForText('Must be greater than 100', '[data-path="#/integer"]')
  I.fillField('[id="#/number"]', 101)
  I.pressKey('Tab')
  I.fillField('[id="#/integer"]', 101)
  I.pressKey('Tab')
  I.dontSee('Must be greater than 100', '[data-path="#/number"]')
  I.dontSee('Must be greater than 100', '[data-path="#/integer"]')
  I.fillField('[id="#/number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="#/integer"]', 100)
  I.pressKey('Tab')
  I._waitForText('Must be greater than 100', '[data-path="#/number"]')
  I._waitForText('Must be greater than 100', '[data-path="#/integer"]')
})
