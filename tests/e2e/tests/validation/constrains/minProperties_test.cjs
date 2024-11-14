/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('minProperties')

Scenario('@constrain-minProperties should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/minProperties')
  I.selectOption('#show-errors', 'always')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must have at least 1 properties', '[data-path="#"]')
  I.fillField('#editor-value', JSON.stringify({
    test: 'test'
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.dontSee('Must have at least 1 properties', '[data-path="#"]')
})
