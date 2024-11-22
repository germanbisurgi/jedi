/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/boolean-checkbox'
const invalidValue = false
const defaultValue = true

Feature('boolean')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@editor @boolean-checkbox should have @title and @description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
  I._waitForText('Boolean', 'label')
  I._waitForText('The boolean type matches only two special values: true and false. Note that values that evaluate to true or false, such as 1 and 0, are not accepted by the schema.')
})

Scenario('@editor @boolean-checkbox should have a @default value', ({I}) => {
  // instance
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(defaultValue))

  // editor
  I.seeCheckboxIsChecked('[id="root"]')
})

Scenario('@editor @boolean-checkbox should @setValue and @showValidationErrors', async ({I}) => {
  // instance
  I.fillField('#editor-value', JSON.stringify(invalidValue))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(invalidValue))

  // editor
  I.dontSeeCheckboxIsChecked('[id="root"]')
  I._waitForText('Boolean: Must have value of: true.', '.jedi-error-message')
})

Scenario('@editor @boolean-checkbox should @disable', ({I}) => {
  I._click('#disable-editor')
  I._waitForElement('#root:disabled')
})

Scenario('@editor @boolean-checkbox should @enable', ({I}) => {
  I._click('#enable-editor')
  I.dontSeeElement('#root:disabled')
})

Scenario('@editor @boolean-checkbox should @destroy', ({I}) => {
  I._click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
