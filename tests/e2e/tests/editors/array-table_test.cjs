/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/array-table'
const valueWithErrors = [
  {
    "boolean-select": false,
    "boolean-radios": false,
    "boolean": false,
    "string": "Lorem eu laborum nostrud",
    "string-textarea": "ad reprehenderit exercitation est",
    "string-select": "carl",
    "string-radios": "betti",
    "number": 59176757.926051416,
    "number-select": 2.5,
    "number-radios": 1.5,
    "integer": 81128216,
    "integer-select": 2,
    "integer-radios": 1
  }
]
const valueDefault = [
  {
    "boolean-select": true,
    "boolean-radios": true,
    "boolean": true,
    "string": "ut Lorem laborum quis",
    "string-textarea": "non reprehenderit",
    "string-select": "albert",
    "string-radios": "betti",
    "number": 16348035.233686866,
    "number-select": 1.5,
    "number-radios": 1.5,
    "integer": 49878374,
    "integer-select": 3,
    "integer-radios": 1
  },
  {
    "boolean-select": false,
    "boolean-radios": false,
    "boolean": false,
    "string": "Lorem eu laborum nostrud",
    "string-textarea": "ad reprehenderit exercitation est",
    "string-select": "carl",
    "string-radios": "betti",
    "number": 59176757.926051416,
    "number-select": 2.5,
    "number-radios": 1.5,
    "integer": 81128216,
    "integer-select": 2,
    "integer-radios": 1
  }
]

Feature('array-table')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@editor @array-table should have @title and @description', ({I}) => {
  I._waitForText('Array', 'legend .jedi-editor-legend-text')
  I._waitForText('Arrays are used for ordered elements. In JSON, each element in an array may be of a different type.', '.jedi-description')
})

Scenario('@editor @array-table should have a @default value', ({I}) => {
  // instance
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(valueDefault))

  // editor
  I.seeInField('[id="root-0-boolean-select"]', 'true')
  I.seeInField('[id="root-1-boolean-select"]', 'false')
})

Scenario('@editor @array-table should @setValue and @showValidationErrors', ({I}) => {
  // instance
  I.fillField('#editor-value', JSON.stringify(valueWithErrors))
  I._scrollTo('#set-value')
  I._click('#set-value')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify(valueWithErrors))

  // editor
  I.seeInField('[id="root-0-boolean-select"]', 'false')
  I._waitForText('Must have at least 2 items.', '.jedi-error-message')
})

Scenario('@editor @array-table should @disable', ({I}) => {
  I._click('#disable-editor')
  // I._waitForElement('#root-0:disabled')
  // I._waitForElement('#root-1:disabled')

  I.dontSeeElement('.jedi-ready input:not(:disabled)')
  I.dontSeeElement('.jedi-ready textarea:not(:disabled)')
  I.dontSeeElement('.jedi-ready select:not(:disabled)')
  I.dontSeeElement('.jedi-ready button:not(:disabled)')
})

Scenario('@editor @array-table should @enable', ({I}) => {
  I._click('#enable-editor')
  // I.dontSeeElement('#root-0:disabled')
  // I.dontSeeElement('#root-1:disabled')

  I.dontSeeElement('.jedi-ready input[disabled]')
  I.dontSeeElement('.jedi-ready textarea[disabled]')
  I.dontSeeElement('.jedi-ready select[disabled]')
  I.dontSeeElement('.jedi-ready button[disabled]')
})

Scenario('@editor @array-table should @destroy', ({I}) => {
  I._click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})
