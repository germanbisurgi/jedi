/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/array-enum-items'
const value = ["value2"]
const valueWithErrors = ["value1", "value2", "value2"]
const valueDefault = ["value1"]

Feature('array-enum-items')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@editor @some-editor should have @title', ({I}) => {
  I._waitForText('array-enum-titles', 'legend .jedi-editor-legend-text')
})

Scenario('@editor @some-editor should have a @description', ({I}) => {
  I._waitForText('Array of unique values wich item types can be string, number or integer', '.jedi-description')
})

Scenario('@editor @some-editor should have a @default value', ({I}) => {
  I.waitForValue('[id="jedi-hidden-input"]', valueDefault)
})

Scenario('@editor @some-editor should @readOnly', async ({ I }) => {
  // test x-options here
})

Scenario('@editor @some-editor should @disable', ({I}) => {
  I.click('#disable-editor')
  I._waitForElement('#root-0:disabled')
  I._waitForElement('#root-1:disabled')
})

Scenario('@editor @some-editor should @enable', ({I}) => {
  I.click('#enable-editor')
  I.dontSeeElement('#root-0:disabled')
  I.dontSeeElement('#root-1:disabled')
})

Scenario('@editor @some-editor should @setValue', async ({I}) => {
  // should set value of instance and hidden input
  I.fillField('#editor-value', JSON.stringify(value))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(value))

  // should update ui based on new value
})

Scenario('@editor @some-editor should @showErrors', async ({ I }) => {
  // on set value
  I.fillField('#editor-value', JSON.stringify(valueWithErrors))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I._waitForElement('.jedi-error-message')

  // on interaction

  // programmatically with showValidationErrors
})

Scenario('@editor @some-editor should @x-options', async ({ I }) => {
  // test x-options here
})

Scenario('@editor @some-editor should @destroy', ({I}) => {
  I.click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
