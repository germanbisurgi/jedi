/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/integer-input'
const invalidValue = -1
const defaultValue = 5
Feature('integer')


BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
})

Scenario('@editor @integer-input should have @title and @description', ({ I }) => {
  pause()
  I._waitForText('Integer', '[data-path="#"] label')
  I._waitForText('The integer type is used for integral numbers.')
})

Scenario('@editor @integer-input should have @infoButton', ({I}) => {
  I._waitForElement('.jedi-info-button')
  I._click('.jedi-info-button')
  I._waitForText('Info Button title')
  I._waitForText('Info button content')
  I._click('.jedi-modal-close')
  I.waitForInvisible('Info Button title')
  I.waitForInvisible('Info button content')
})

Scenario('@editor @integer-input should have a @default value', ({I}) => {
  // instance
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(defaultValue))

  // editor
  I.waitForValue('[id="root"]', JSON.stringify(defaultValue))
})

Scenario('@editor @integer-input should @setValue and @showValidationErrors', ({I}) => {
  // instance
  I.fillField('#editor-value', JSON.stringify(invalidValue))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(invalidValue))

  // editor
  I.waitForValue('[id="root"]', JSON.stringify(invalidValue))
  I._waitForText('Must be at least 0.', '.jedi-error-message')
})

Scenario('@editor @integer-input should @disable', ({I}) => {
  I._click('#disable-editor')
  I._waitForElement('#root:disabled')
})

Scenario('@editor @integer-input should @enable', ({I}) => {
  I._click('#enable-editor')
  I.dontSeeElement('#root:disabled')
})

Scenario('@editor @integer-input should @destroy', ({I}) => {
  I._click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
