/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('dependentRequired')

Scenario('should display @dependentRequired validation errors', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/dependentRequired')
  I.checkOption('[id="alwaysShowErrors"]')
  I.checkOption('[id="showRequiredOnly"]')
  I.scrollTo('[data-path="root"]', 0, -300)
  I._waitForElement('.jedi-ready')
  I.dontSee('Must have the required properties: address, telephone', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    creditCard: 0
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I._waitForText('Must have the required properties: address, telephone', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({}))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I._waitForText('Must have the required properties: creditCard', '[data-path="root"]')
})
