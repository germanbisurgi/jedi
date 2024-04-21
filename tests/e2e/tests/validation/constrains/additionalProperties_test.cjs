/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('additionalProperties')

Scenario('@constrain-additionalProperties should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/additionalProperties.json')
  I.selectOption('#show-errors', 'always')
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
  I._scrollTo('[data-path="#"]')
  I._waitForText('Has additional property "additional" but no additional properties are allowed', '[data-path="#/boolean"]')
  I._waitForText('Must be of type string', '[data-path="#/schema"]')
})
