/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('dependentSchemas')

Scenario('@constrain-dependentSchemas should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/dependentSchemas.json')
  I.selectOption('#show-errors', 'always')
  I._scrollTo('[data-path="#"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('must have the required properties: billing_address')

  I.fillField('#editor-value', JSON.stringify({
    "name": "John Doe",
    "credit_card": 5555555555555555,
    "billing_address": "555 Debtor's Lane"
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.dontSee('must have the required properties: billing_address')

  I.fillField('#editor-value', JSON.stringify({
    "name": "John Doe",
    "credit_card": 5555555555555555
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I._waitForText('must have the required properties: billing_address')

  I.fillField('#editor-value', JSON.stringify({
    "name": "John Doe",
    "billing_address": "555 Debtor's Lane"
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.dontSee('must have the required properties: billing_address')
})
