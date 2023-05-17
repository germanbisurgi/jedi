/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('additionalProperties')

Scenario('should display @additionalProperties validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/additionalProperties')
  I.checkOption('[id="alwaysShowErrors"]')
  I._waitForElement('.jedi-ready')
  I.fillField('#editor-value', JSON.stringify({
    boolean: {
      builtin: 0,
      additional: 'test'
    },
    schema: {
      builtin: 0,
      additional: 42
    }
  }))
  I._click('#set-value')
  I._scrollTo('[data-path="root"]')
  I._waitForText('Property "additional" has not been defined and the schema does not allow additional properties.', '[data-path="root.boolean"]')
  I._waitForText('Must be of type string', '[data-path="root.schema"]')
})