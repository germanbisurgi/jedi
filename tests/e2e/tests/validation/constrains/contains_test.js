/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('contains')

Scenario('@constrain-contains should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/contains.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._scrollTo('[data-path="#"]')
  I._waitForText('No items match contains')
  I._click('.jedi-array-add')
  I.dontSee('No items match contains')
})

Scenario('@constrain-minContains should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/minContains.json')
  I._checkOption('[id="alwaysShowErrors"]')
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

Scenario('@constrain-maxContains should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/maxContains.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._scrollTo('[data-path="#"]')
  I._waitForText('No items match contains')
  I._click('.jedi-array-add')
  I.dontSee('No items match contains')
  I._click('.jedi-array-add')
  I.dontSee('No items match contains')
  I._click('.jedi-array-add')
  I._waitForText('Contains match count 3 exceeds maximum contains count of 2')
})
