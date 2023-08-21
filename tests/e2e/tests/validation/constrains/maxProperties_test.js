/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('maxProperties')

Scenario('@constrain-maxProperties should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/maxProperties.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must have at most 1 properties', '[data-path="#"]')
  I.fillField('#editor-value', JSON.stringify({
    prop1: ''
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.dontSee('Must have at most 1 properties', '[data-path="#"]')
})
