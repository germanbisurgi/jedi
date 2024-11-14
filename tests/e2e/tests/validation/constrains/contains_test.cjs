/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('contains')

Scenario('@constrain-contains should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '/json/validator/contains.json')
  I.selectOption('#show-errors', 'always')
  I._scrollTo('[data-path="#"]')
  I._waitForText('Must contain at least one item matching the provided schema')
  I._click('.jedi-array-add')
  I.dontSee('Must contain at least one item matching the provided schema')
})

Scenario('@constrain-minContains should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '/json/validator/minContains.json')
  I.selectOption('#show-errors', 'always')
  I._scrollTo('[data-path="#"]')
  I.dontSee('Must contain at least one item matching the provided schema')
  I._waitForText('Must contain at least 2 items matching the provided schema. It currently contains 0')
  I._click('.jedi-array-add')
  I.dontSee('Must contain at least one item matching the provided schema')
  I._waitForText('Must contain at least 2 items matching the provided schema. It currently contains 1')
  I._click('.jedi-array-add')
  I.dontSee('Must contain at least one item matching the provided schema')
  I.dontSee('minimum contains count of 2')
})

Scenario('@constrain-maxContains should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '/json/validator/maxContains.json')
  I.selectOption('#show-errors', 'always')
  I._scrollTo('[data-path="#"]')
  I._waitForText('Must contain at least one item matching the provided schema')
  I._click('.jedi-array-add')
  I.dontSee('Must contain at least one item matching the provided schema')
  I._click('.jedi-array-add')
  I.dontSee('Must contain at least one item matching the provided schema')
  I._click('.jedi-array-add')
  I._waitForText('Must contain at most 2 items matching the provided schema. It currently contains 3')
})
