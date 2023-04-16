/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('minProperties')

Scenario('should display @minProperties validation errors', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minProperties')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must have at least 1 properties', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    test: 'test'
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('Must have at least 1 properties', '[data-path="root"]')
})
