/* global Feature Scenario */

const theme = process.env.THEME || 'barebones'
const pathToSchema = 'plugins/flatpickr'
const value = 'value set'
const valueWithErrors = 'a'
const valueDefault = '2024-08-27'

Feature('Flatpickr')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@plugin @string-flatpickr should have @title', ({I}) => {
  I._waitForText('Flatpickr', 'label.jedi-title')
})

Scenario('@plugin @string-flatpickr should have a @description', ({I}) => {
  I._waitForText('Flatpickr is a lightweight and powerful datetime picker.', '.jedi-description')
})

Scenario('@plugin @string-flatpickr should have a @default value', ({I}) => {
  I.waitForValue('[id="jedi-hidden-input"]', valueDefault)
})

Scenario('@plugin @string-flatpickr should @disable', ({I}) => {
  I.click('#disable-editor')
  I._waitForElement('#root:disabled')
})

Scenario('@plugin @string-flatpickr should @enable', ({I}) => {
  I.click('#enable-editor')
  I.dontSeeElement('#root:disabled')
})

Scenario('@plugin @string-flatpickr should @setValue', async ({I}) => {
  I.fillField('#editor-value', JSON.stringify(value))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(value))
})

Scenario('@plugin @string-flatpickr should @showErrors', async ({I}) => {
  I.fillField('#editor-value', JSON.stringify(valueWithErrors))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I._waitForElement('.jedi-error-message')
})

Scenario('@plugin @string-flatpickr should @destroy', ({I}) => {
  I.click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
