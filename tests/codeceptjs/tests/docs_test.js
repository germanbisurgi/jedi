Feature('Lib')

Scenario('should have class "jedi-ready" when ready @ready', ({ I }) => {
  I.amOnPage('index.html')
  I.waitForElement('.jedi-ready')
})

Scenario('Should create all kind of editors', ({ I }) => {
  I.amOnPage('index.html')
  I.waitForElement('.jedi-ready')
  I.waitForText('Editors', 'h3')
  I.waitForElement('[data-path="root"]')
  I.waitForElement('[data-path="root.booleans"]')
  I.waitForElement('[data-path="root.booleans.boolean"]')
  I.waitForElement('[data-path="root.booleans.boolean-enum"]')
  I.waitForElement('[data-path="root.booleans.boolean-enum-radio"]')
  I.waitForElement('[data-path="root.strings"]')
  I.waitForElement('[data-path="root.strings.string"]')
  I.waitForElement('[data-path="root.strings.string-textarea"]')
  I.waitForElement('[data-path="root.strings.string-enum-select"]')
  I.waitForElement('[data-path="root.strings.string-enum-radio"]')
  I.waitForElement('[data-path="root.numbers"]')
  I.waitForElement('[data-path="root.numbers.number"]')
  I.waitForElement('[data-path="root.numbers.number-enum-select"]')
  I.waitForElement('[data-path="root.numbers.number-enum-radio"]')
  I.waitForElement('[data-path="root.integers"]')
  I.waitForElement('[data-path="root.integers.integer"]')
  I.waitForElement('[data-path="root.integers.integer-enum-select"]')
  I.waitForElement('[data-path="root.integers.integer-enum-radio"]')
  I.waitForElement('[data-path="root.arrays"]')
  I.waitForElement('[data-path="root.arrays.string-array"]')
  I.waitForElement('[data-path="root.multiple"]')
  I.waitForElement('[data-path="root.multiple.oneof"]')
  I.waitForElement('[data-path="root.multiple.anyof"]')
  I.waitForElement('[data-path="root.multiple.type-array"]')
  I.waitForElement('[data-path="root.multiple.type-undefined"]')
  I.waitForElement('[data-path="root.multiple.type-any"]')
})

Scenario('should destroy', ({ I }) => {
  I.amOnPage('index.html')
  I.waitForElement('.jedi-ready')
  I.click('[href="#actions-tab"]')
  I.waitForElement('#destroy-editor')
  I.click('#destroy-editor')
  I.dontSeeElement('[data-schemapath="root"]')
})

Scenario('Should disable and enable', ({ I }) => {
  I.amOnPage('index.html')
  I.waitForElement('.jedi-ready')
  I.click('[href="#actions-tab"]')
  I.waitForElement('#disable-editor')
  I.click('#disable-editor')
  I.dontSeeElement('.jedi-ready input:not([disabled]')
  I.dontSeeElement('.jedi-ready textarea:not([disabled]')
  I.dontSeeElement('.jedi-ready select:not([disabled]')
  I.dontSeeElement('.jedi-ready button:not([disabled]')
  I.click('#enable-editor')
  I.dontSeeElement('.jedi-ready input[disabled]')
  I.dontSeeElement('.jedi-ready textarea[disabled]')
  I.dontSeeElement('.jedi-ready select[disabled]')
  I.dontSeeElement('.jedi-ready button[disabled]')
})

Scenario('should set value', async ({ I }) => {
  I.amOnPage('index.html')
  I.waitForElement('.jedi-ready')
  I.click('#editor-value')
  I.fillField('#editor-value', JSON.stringify({
      "booleans": {
        "boolean": true,
        "boolean-enum": true,
        "boolean-enum-radio": true
      },
      "strings": {
        "string": "test",
        "string-textarea": "test",
        "string-enum-select": "carl",
        "string-enum-radio": "carl"
      },
      "numbers": {
        "number": 69,
        "number-enum-select": 3.5,
        "number-enum-radio": 3.5
      },
      "integers": {
        "integer": 69,
        "integer-enum-select": 3,
        "integer-enum-radio": 3
      },
      "arrays": {
        "string-array": [
          "#226996",
          "#b02727"
        ]
      },
      "multiple": {
        "oneof": true,
        "anyof": true,
        "type-array": "test",
        "type-undefined": "test",
        "type-any": "test"
      }
    }
  ));
  I.click('#set-value')
  I.wait(1)
  I.seeCheckboxIsChecked('boolean');
  I.seeInField('boolean enum select', 'true');
  I.seeInField('string', 'test');
  I.seeInField('string textarea', 'test');
  I.seeInField('string enum select', 'carl');
  // I.seeInField('string enum radio', 'carl');
  I.seeInField('number', 69);
  I.seeInField('number enum select', '3.5');
  // I.seeInField('number enum radio', '3.5');
  I.seeInField('integer', 69);
  I.seeInField('integer enum select', '3.5');
  // I.seeInField('integer enum radio', '3.5');
  pause()
})
