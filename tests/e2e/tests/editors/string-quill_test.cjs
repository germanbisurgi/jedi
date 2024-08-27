/* global Feature Scenario */

const theme = process.env.THEME || 'barebones'
const pathToSchema = '../json/plugins/quill.json'
const value = 'value set'
const valueWithErrors = 'a'
const valueDefault = 'Quill default'

Feature('string')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@plugin @string-quill should have @title', ({I}) => {
  I._waitForText('Quill', 'label.jedi-title')
})

Scenario('@plugin @string-quill should have a @description', ({I}) => {
  I._waitForText('Quill is a modern WYSIWYG editor built for compatibility and extensibility.', '.jedi-description')
})

Scenario('@plugin @string-quill should have a @default value', ({I}) => {
  I.waitForValue('[id="jedi-hidden-input"]', valueDefault)
})

Scenario('@plugin @string-quill should @disable', ({I}) => {
  I.click('#disable-editor')
  I._waitForElement('.ql-disabled')
})

Scenario('@plugin @string-quill should @enable', ({I}) => {
  I.click('#enable-editor')
  I.dontSeeElement('.ql-disabled')
})

Scenario('@plugin @string-quill should @setValue', async ({I}) => {
  I.fillField('#editor-value', JSON.stringify(value))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(value))
})

Scenario('@plugin @string-quill should @showErrors', async ({I}) => {
  I.fillField('#editor-value', JSON.stringify(valueWithErrors))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I._waitForElement('.jedi-error-message')
})

Scenario('@plugin @string-quill should @destroy', ({I}) => {
  I.click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
