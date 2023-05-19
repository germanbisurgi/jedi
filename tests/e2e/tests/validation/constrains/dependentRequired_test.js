/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('dependentRequired')

Scenario('should display @dependentRequired validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/dependentRequired')
  I.checkOption('[id="alwaysShowErrors"]')
  I.checkOption('[id="showRequiredOnly"]')
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
