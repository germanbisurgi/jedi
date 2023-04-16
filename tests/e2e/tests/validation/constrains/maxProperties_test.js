/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('maxProperties')

Scenario('should display @maxProperties validation errors', ({ I }) => {
  I.amOnPage(`index.html?theme=${theme}`)
  I.fillField('#theme', theme)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maxProperties')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I._waitForText('Must have at most 1 properties', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    prop1: ''
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('Must have at most 1 properties', '[data-path="root"]')
})
