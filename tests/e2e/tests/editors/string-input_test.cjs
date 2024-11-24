/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/string-input'
const invalidValue = 'abcdefghijklmnopqrstuvwxyz'
const defaultValue = 'test'

Feature('string')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@editor @string-input should have @title and @description', ({ I }) => {
  I._waitForText('String', 'label')
  I._waitForText('The string type is used for strings of text. It may contain Unicode characters.')
})

Scenario('@editor @string-input should have a @default value', ({I}) => {
  // instance
  I.waitForValue('[id="jedi-hidden-input"]', defaultValue)

  // editor
  I.waitForValue('[id="root"]', defaultValue)
})

Scenario('@editor @string-input should @setValue and @showValidationErrors', ({I}) => {
  // instance
  I.fillField('#editor-value', JSON.stringify(invalidValue))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', invalidValue)

  // editor
  I.waitForValue('[id="root"]', invalidValue)
  I._waitForText('Must be at most 8 characters long.', '.jedi-error-message')
})

Scenario('@editor @string-input should @disable', ({I}) => {
  I._click('#disable-editor')
  I._waitForElement('#root:disabled')
})

Scenario('@editor @string-input should @enable', ({I}) => {
  I._click('#enable-editor')
  I.dontSeeElement('#root:disabled')
})

Scenario('@editor @string-input should @destroy', ({I}) => {
  I._click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
