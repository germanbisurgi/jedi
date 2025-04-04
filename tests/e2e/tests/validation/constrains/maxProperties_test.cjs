/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('maxProperties')

Scenario('@constrain @maxProperties should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/maxProperties')
  I._waitForElement('.jedi-ready')
  I.selectOption('#show-errors', 'always')
  I._waitForElement('.jedi-ready')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must have at most 1 properties', '[data-path="#"]')
  I.fillField('#editor-value', JSON.stringify({
    prop1: ''
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.dontSee('Must have at most 1 properties', '[data-path="#"]')
})
