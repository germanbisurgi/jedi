/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('patternProperties')

Scenario('should display @patternProperties validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/patternProperties')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.fillField('#editor-value', JSON.stringify({
    S: '',
    I: 0
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="root"]')
  I._waitForText('Must be: "test"', '[data-path="root"]')
  I._waitForText('Must be: 21', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    S: 'test',
    I: 21
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="root"]')
  I.dontSee('Must be: "test"', '[data-path="root"]')
  I.dontSee('Must be: 21', '[data-path="root"]')
})