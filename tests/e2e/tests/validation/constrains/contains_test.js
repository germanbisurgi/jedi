/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('contains')

Scenario('should display @contains validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/contains')
  I.checkOption('[id="alwaysShowErrors"]')
  I._scrollTo('[data-path="#"]')
  I._waitForText('No items match contains')
  I._click('.jedi-array-add')
  I.dontSee('No items match contains')
})

Scenario('should display @minContains validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minContains')
  I.checkOption('[id="alwaysShowErrors"]')
  I._scrollTo('[data-path="#"]')
  I.dontSee('No items match contains')
  I._waitForText('Contains match count 0 is less than minimum contains count of 2')
  I._click('.jedi-array-add')
  I.dontSee('No items match contains')
  I._waitForText('Contains match count 1 is less than minimum contains count of 2')
  I._click('.jedi-array-add')
  I.dontSee('No items match contains')
  I.dontSee('minimum contains count of 2')
})

Scenario('should display @maxContains validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maxContains')
  I.checkOption('[id="alwaysShowErrors"]')
  I._scrollTo('[data-path="#"]')
  I._waitForText('No items match contains')
  I._click('.jedi-array-add')
  I.dontSee('No items match contains')
  I._click('.jedi-array-add')
  I.dontSee('No items match contains')
  I._click('.jedi-array-add')
  I._waitForText('Contains match count 3 exceeds maximum contains count of 2')
})
