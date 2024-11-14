/* global Feature Scenario */

const theme = process.env.THEME || 'barebones'
const pathToSchema = '/json/plugins/awesomplete.json'
const value = 'value set'
const valueWithErrors = ''
const valueDefault = 'Awesomplete default'

Feature('Awesomplete')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@plugin @string-awesomplete should have @title', ({I}) => {
  I._waitForText('Awesomplete', 'label.jedi-title')
})

Scenario('@plugin @string-awesomplete should have a @description', ({I}) => {
  I._waitForText('Awesomplete is an ultra lightweight, customizable, simple autocomplete widget with zero dependencies, built with modern standards for modern browsers.', '.jedi-description')
})

Scenario('@plugin @string-awesomplete should have a @default value', ({I}) => {
  I.waitForValue('[id="jedi-hidden-input"]', valueDefault)
})

Scenario('@plugin @string-awesomplete should @disable', ({I}) => {
  I.click('#disable-editor')
  I._waitForElement('#root:disabled')
})

Scenario('@plugin @string-awesomplete should @enable', ({I}) => {
  I.click('#enable-editor')
  I.dontSeeElement('#root:disabled')
})

Scenario('@plugin @string-awesomplete should @setValue', async ({I}) => {
  I.fillField('#editor-value', JSON.stringify(value))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(value))
})

Scenario('@plugin @string-awesomplete should @showErrors', async ({ I }) => {
  I.fillField('#editor-value', JSON.stringify(valueWithErrors))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I._waitForElement('.jedi-error-message')
})

Scenario('@plugin @string-awesomplete should @destroy', ({I}) => {
  I.click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
