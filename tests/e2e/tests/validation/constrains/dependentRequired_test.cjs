/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('dependentRequired')

Scenario('@constrain @dependentRequired should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/dependentRequired')
  I._waitForElement('.jedi-ready')
  I.selectOption('#show-errors', 'always')
  I._waitForElement('.jedi-ready')
  I._uncheckOption('[id="enforceRequired"]')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="#"]')
  I._waitForElement('.jedi-ready')
  I.dontSee('Must have the required properties: address, telephone', '[data-path="#"]')
  I.fillField('#editor-value', JSON.stringify({
    creditCard: 0
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I._waitForText('Must have the required properties: address, telephone', '[data-path="#"]')
  I.fillField('#editor-value', JSON.stringify({}))
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I._waitForText('Must have the required properties: creditCard', '[data-path="#"]')
})
