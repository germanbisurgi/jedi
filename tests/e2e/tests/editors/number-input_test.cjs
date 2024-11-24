/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/number-input'
const invalidValue = -1
const defaultValue = 5.5

Feature('number')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
})

Scenario('@editor @number-input should have @title and @description', ({ I }) => {
  I._waitForText('Number', 'label')
  I._waitForText('The number type is used for any numeric type, either integers or floating point numbers.')
})

Scenario('@editor @number-input should have a @default value', ({I}) => {
  // instance
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(defaultValue))

  // editor
  I.waitForValue('[id="root"]', JSON.stringify(defaultValue))
})

Scenario('@editor @number-input should @setValue and @showValidationErrors', ({I}) => {
  // instance
  I.fillField('#editor-value', JSON.stringify(invalidValue))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(invalidValue))

  // editor
  I.waitForValue('[id="root"]', JSON.stringify(invalidValue))
  I._waitForText('Number: Must be at least 0.', '.jedi-error-message')
})

Scenario('@editor @number-input should @disable', ({I}) => {
  I._click('#disable-editor')
  I._waitForElement('#root:disabled')
})

Scenario('@editor @number-input should @enable', ({I}) => {
  I._click('#enable-editor')
  I.dontSeeElement('#root:disabled')
})

Scenario('@editor @number-input should @destroy', ({I}) => {
  I._click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
