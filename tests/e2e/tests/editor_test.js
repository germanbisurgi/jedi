/* global Feature Scenario */
const jsonData = require('./test')
const theme = process.env.THEME || 'barebones'

Feature('editor')

Scenario('should have class "jedi-ready" when ready @ready', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/all')
  I._waitForElement('.jedi-ready')
})

Scenario('Should create all kind of editors @create', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/all')
  I._waitForElement('.jedi-ready')
  I._waitForElement('[data-path="root"]')
  I._waitForElement('[data-path="root.booleans"]')
  I._waitForElement('[data-path="root.booleans.boolean"]')
  I._waitForElement('[data-path="root.booleans.boolean-enum-select"]')
  I._waitForElement('[data-path="root.booleans.boolean-enum-radio"]')
  I._waitForElement('[data-path="root.strings"]')
  I._waitForElement('[data-path="root.strings.string"]')
  I._waitForElement('[data-path="root.strings.string-textarea"]')
  I._waitForElement('[data-path="root.strings.string-enum-select"]')
  I._waitForElement('[data-path="root.strings.string-enum-radio"]')
  I._waitForElement('[data-path="root.numbers"]')
  I._waitForElement('[data-path="root.numbers.number"]')
  I._waitForElement('[data-path="root.numbers.number-enum-select"]')
  I._waitForElement('[data-path="root.numbers.number-enum-radio"]')
  I._waitForElement('[data-path="root.integers"]')
  I._waitForElement('[data-path="root.integers.integer"]')
  I._waitForElement('[data-path="root.integers.integer-enum-select"]')
  I._waitForElement('[data-path="root.integers.integer-enum-radio"]')
  I._waitForElement('[data-path="root.arrays"]')
  I._waitForElement('[data-path="root.arrays.string-array"]')
  I._waitForElement('[data-path="root.multiple"]')
  I._waitForElement('[data-path="root.multiple.oneof"]')
  I._waitForElement('[data-path="root.multiple.anyof"]')
  I._waitForElement('[data-path="root.multiple.type-array"]')
  I._waitForElement('[data-path="root.multiple.type-undefined"]')
  I._waitForElement('[data-path="root.multiple.type-any"]')
})

Scenario('should destroy @destroy', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/all')
  I._waitForElement('.jedi-ready')
  I._scrollTo('#destroy-editor')
  I._click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})

Scenario('Should disable and enable @disable', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/all')
  I._waitForElement('.jedi-ready')
  I.checkOption('[id="editableProperties"]')
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
  I.dontSeeElement('.jedi-ready input[disabled]')
  I.dontSeeElement('.jedi-ready textarea[disabled]')
  I.dontSeeElement('.jedi-ready select[disabled]')
  I.dontSeeElement('.jedi-ready button[disabled]')
})

Scenario('should set value @setValue', async ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/all')
  I._waitForElement('.jedi-ready')
  I._scrollTo('#editor-value')
  I._click('#editor-value')
  I.fillField('#editor-value', JSON.stringify(jsonData))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(jsonData))
  I.seeCheckboxIsChecked('[id="root.booleans.boolean"]')
  I.seeInField('[id="root.booleans.boolean-enum-select"]', 'true')
  I.seeInField('[id="root.booleans.boolean-enum-radio.1"]', 'true')
  I.seeInField('[id="root.strings.string"]', 'carl')
  I.seeInField('[id="root.strings.string-textarea"]', 'carl')
  I.seeInField('[id="root.strings.string-enum-select"]', 'carl')
  I.seeInField('[id="root.strings.string-enum-radio.2"]', 'carl')
  I.seeInField('[id="root.numbers.number"]', 3.5)
  I.seeInField('[id="root.numbers.number-enum-select"]', '3.5')
  I.seeInField('[id="root.numbers.number-enum-radio.2"]', '3.5')
  I.seeInField('[id="root.integers.integer"]', 3)
  I.seeInField('[id="root.integers.integer-enum-select"]', '3')
  I.seeInField('[id="root.integers.integer-enum-radio.2"]', '3')
})

Scenario('should set @rootName', async ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I.fillField('#schemas', 'editors/all')
  I._waitForElement('.jedi-ready')
  I.fillField('[id="rootName"]', '#')
  I.pressKey('Tab')
  I._waitForElement('[data-path="#"]')
})
