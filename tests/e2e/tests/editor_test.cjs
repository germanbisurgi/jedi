/* global Feature Scenario */
const jsonData = require('./fixtures/test')
const theme = process.env.THEME || 'barebones'

Feature('editor')

Scenario('@editor @ready should have class "jedi-ready" when ready', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/all')
  I._waitForElement('.jedi-ready')
})

Scenario('@editor @create should create all kind of editors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/all')
  I._waitForElement('.jedi-ready')
  I._waitForElement('[data-path="#"]')
  I._waitForElement('[data-path="#/booleans"]')
  I._waitForElement('[data-path="#/booleans/boolean"]')
  I._waitForElement('[data-path="#/booleans/boolean-select"]')
  I._waitForElement('[data-path="#/booleans/boolean-radios"]')
  I._waitForElement('[data-path="#/strings"]')
  I._waitForElement('[data-path="#/strings/string"]')
  I._waitForElement('[data-path="#/strings/string-textarea"]')
  I._waitForElement('[data-path="#/strings/string-select"]')
  I._waitForElement('[data-path="#/strings/string-radios"]')
  I._waitForElement('[data-path="#/numbers"]')
  I._waitForElement('[data-path="#/numbers/number"]')
  I._waitForElement('[data-path="#/numbers/number-select"]')
  I._waitForElement('[data-path="#/numbers/number-radios"]')
  I._waitForElement('[data-path="#/integers"]')
  I._waitForElement('[data-path="#/integers/integer"]')
  I._waitForElement('[data-path="#/integers/integer-select"]')
  I._waitForElement('[data-path="#/integers/integer-radios"]')
  I._waitForElement('[data-path="#/arrays"]')
  I._waitForElement('[data-path="#/arrays/string-array"]')
  I._waitForElement('[data-path="#/multiple"]')
  I._waitForElement('[data-path="#/multiple/oneof"]')
  I._waitForElement('[data-path="#/multiple/anyof"]')
  I._waitForElement('[data-path="#/multiple/type-array"]')
  I._waitForElement('[data-path="#/multiple/type-undefined"]')
  I._waitForElement('[data-path="#/multiple/type-any"]')
})

Scenario('@editor @destroy should destroy', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/all')
  I._waitForElement('.jedi-ready')
  I._scrollTo('#destroy-editor')
  I._click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})

Scenario('@editor @disable Should disable and enable', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/all')
  I._waitForElement('.jedi-ready')
  I._checkOption('[id="enablePropertiesToggle"]')
  I._waitForElement('.jedi-ready')
  I._waitForElement('#disable-editor')
  I._scrollTo('#disable-editor')
  I._click('#disable-editor')
  I.dontSeeElement('.jedi-ready input:not(:disabled)')
  I.dontSeeElement('.jedi-ready textarea:not(:disabled)')
  I.dontSeeElement('.jedi-ready select:not(:disabled)')
  I.dontSeeElement('.jedi-ready button:not(:disabled)')
  I._scrollTo('#enable-editor')
  I._click('#enable-editor')
  I.dontSeeElement('.jedi-ready input[disabled]:not([always-disabled])')
  I.dontSeeElement('.jedi-ready textarea[disabled]:not([always-disabled])')
  I.dontSeeElement('.jedi-ready select[disabled]:not([always-disabled])')
  I.dontSeeElement('.jedi-ready button[disabled]:not([always-disabled])')
})

Scenario('@editor @setValue() should set value', async ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/all')
  I._waitForElement('.jedi-ready')
  I._scrollTo('#editor-value')
  I.fillField('#editor-value', JSON.stringify(jsonData))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(jsonData))
  I.seeCheckboxIsChecked('[id="root-booleans-boolean"]')
  I.seeInField('[id="root-booleans-boolean-select"]', 'true')
  I.seeInField('[id="root-booleans-boolean-radios-1"]', 'true')
  I.seeInField('[id="root-strings-string"]', 'carl')
  I.seeInField('[id="root-strings-string-textarea"]', 'carl')
  I.seeInField('[id="root-strings-string-select"]', 'carl')
  I.seeInField('[id="root-strings-string-radios-2"]', 'carl')
  I.seeInField('[id="root-numbers-number"]', 3.5)
  I.seeInField('[id="root-numbers-number-select"]', '3.5')
  I.seeInField('[id="root-numbers-number-radios-2"]', '3.5')
  I.seeInField('[id="root-integers-integer"]', 3)
  I.seeInField('[id="root-integers-integer-select"]', '3')
  I.seeInField('[id="root-integers-integer-radios-2"]', '3')
})

Scenario('@editor @showErrors should determine if and when validation errors are displayed', async ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/all')
  I._waitForElement('.jedi-ready')
  I.selectOption('#show-errors', 'always')
  I._waitForElement('.jedi-ready')
  I._waitForElement('.jedi-error-message')
  I.selectOption('#show-errors', 'change')
  I._waitForElement('.jedi-ready')
  I.dontSeeElement('.jedi-error-message')
  I.selectOption('#root-booleans-boolean-select', 'true')
  I.dontSeeElement('.jedi-error-message')
  I.selectOption('#root-booleans-boolean-select', 'false')
  I._waitForElement('.jedi-ready')
  I.selectOption('#show-errors', 'never')
  I._waitForElement('.jedi-ready')
  I.dontSeeElement('.jedi-error-message')
  I.selectOption('#root-booleans-boolean-select', 'true')
  I.dontSeeElement('.jedi-error-message')
  I.selectOption('#root-booleans-boolean-select', 'false')
  I.dontSeeElement('.jedi-error-message')
})

Scenario('@editor @showValidationErrors should programmatically display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/const')
  I._click('#show-validation-errors')
  I._waitForText('Must have value of: "test"', '[data-path="#/string"]')
  I._waitForText('Must have value of: 2.5', '[data-path="#/number"]')
  I._waitForText('Must have value of: 3', '[data-path="#/integer"]')
  I._waitForText('Must have value of: true', '[data-path="#/boolean"]')
  I._waitForText('Must have value of: ["test"]', '[data-path="#/array"]')
  I._waitForText('Must have value of: {"test":"test"}', '[data-path="#/object"]')
  I._waitForText('Must have value of: "test"', '[data-path="#/multiple"]')
})
