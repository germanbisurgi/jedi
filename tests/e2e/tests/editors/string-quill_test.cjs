/* global Feature Scenario */

const theme = process.env.THEME || 'barebones'
const pathToSchema = 'plugins/quill'
const valueWithErrors = 'a'
const valueDefault = 'Quill default'

Feature('Quill')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@plugin @string-quill should have @title and @description', ({I}) => {
  I._waitForText('Quill', 'label.jedi-title')
  I._waitForText('Quill is a modern WYSIWYG editor built for compatibility and extensibility.', '.jedi-description')
})

Scenario('@plugin @string-quill should have a @default value', ({I}) => {
  // instance
  I.waitForValue('[id="jedi-hidden-input"]', valueDefault)

  // editor
  I._waitForText(valueDefault, '.ql-editor')
})

Scenario('@plugin @string-quill should @setValue and @showValidationErrors', ({I}) => {
  // instance
  I.fillField('#editor-value', JSON.stringify(valueWithErrors))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(valueWithErrors))

  // editor
  I._waitForText(valueWithErrors, '.ql-editor')
  I._waitForText('Quill: Must be at least 3 characters long.', '.jedi-error-message')
})

Scenario('@plugin @string-quill should @disable', ({I}) => {
  I._click('#disable-editor')
  I._waitForElement('.ql-disabled')
})

Scenario('@plugin @string-quill should @enable', ({I}) => {
  I._click('#enable-editor')
  I.dontSeeElement('.ql-disabled')
})

Scenario('@plugin @string-quill should @destroy', ({I}) => {
  I._click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})