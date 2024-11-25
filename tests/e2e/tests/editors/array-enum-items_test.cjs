/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/array-enum-items'
const valueWithErrors = []
const valueDefault = ["value1"]

Feature('array-enum-items')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@editor @array-enum-items should have @title and @description', ({I}) => {
  I._waitForText('array-enum-titles', 'legend .jedi-editor-legend-text')
  I._waitForText('Array of unique values wich item types can be string, number or integer', '.jedi-description')
})

Scenario('@editor @array-enum-items should have a @default value', ({I}) => {
  // instance
  I.waitForValue('[id="jedi-hidden-input"]', valueDefault)

  // editor
  I.seeCheckboxIsChecked('[id="root-0"]')
  I.dontSeeCheckboxIsChecked('[id="root-1"]')
})

Scenario('@editor @array-enum-items should @setValue and @showValidationErrors', ({I}) => {
  // instance
  I.fillField('#editor-value', JSON.stringify(valueWithErrors))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(valueWithErrors))

  // editor
  I.dontSeeCheckboxIsChecked('[id="root-0"]')
  I.dontSeeCheckboxIsChecked('[id="root-1"]')

  I._waitForText('array-enum-titles: Must have at least 1 items.', '.jedi-error-message')
})

Scenario('@editor @array-enum-items should @disable', ({I}) => {
  I._click('#disable-editor')
  I._waitForElement('#root-0:disabled')
  I._waitForElement('#root-1:disabled')
})

Scenario('@editor @array-enum-items should @enable', ({I}) => {
  I._click('#enable-editor')
  I.dontSeeElement('#root-0:disabled')
  I.dontSeeElement('#root-1:disabled')
})

Scenario('@editor @array-enum-items should @destroy', ({I}) => {
  I._click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
