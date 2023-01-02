/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('validator')

Scenario('should display message validation error @message', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/message')
  I.waitForText('If the string length is more than 5 characters, it must be "cinco", otherwise "dos".', '[data-path="root.string"]')
})

Scenario('should display allOf validation errors @allOf', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/allOf')
  I.waitForText('string must be at least 1 characters long', '[data-path="root.string"]')
  I.waitForText('string must have value: "test"', '[data-path="root.string"]')
  I.fillField('#editor-value', JSON.stringify({
    string: 't'
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root.string"]', 0, -300)
  I.dontSee('string must be at least 1 characters long', '[data-path="root.string"]')
  I.waitForText('string must have value: "test"', '[data-path="root.string"]')
  I.fillField('#editor-value', JSON.stringify({
    string: 'test'
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root.string"]', 0, -300)
  I.dontSee('string must be at least 1 characters long', '[data-path="root.string"]')
  I.dontSee('string must have value: "test"', '[data-path="root.string"]')
})

Scenario('should display anyOf validation errors @anyOf', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/anyOf')
  I.waitForText('string must validate against at least one of the provided schemas', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'Albert')
  I.pressKey('Tab')
  I.click('#set-value')
  I.dontSee('string must validate against at least one of the provided schemas', '[data-path="root.string"]')
})

Scenario('should display const validation errors @const', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/const')

  // string
  I.scrollTo('[data-path="root.string"]', 0, -300)
  I.waitForText('string must have value: "test"', 1, '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'test')
  I.pressKey('Tab')
  I.dontSee('string must have value: "test"', '[data-path="root.string"]')

  // number
  I.scrollTo('[data-path="root.number"]', 0, -300)
  I.waitForText('number must have value: 2.5', 1, '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 2.50)
  I.pressKey('Tab')
  I.dontSee('number must have value: 2.5', '[data-path="root.number"]')

  // integer
  I.scrollTo('[data-path="root.integer"]', 0, -300)
  I.waitForText('integer must have value: 3', 1, '[data-path="root.integer"]')
  I.fillField('[id="root.integer"]', 3)
  I.pressKey('Tab')
  I.dontSee('integer must have value: 3', '[data-path="root.integer"]')

  // boolean
  I.scrollTo('[data-path="root.boolean"]', 0, -300)
  I.waitForText('boolean must have value: true', 1, '[data-path="root.boolean"]')
  I.checkOption('[id="root.boolean"]')
  I.pressKey('Tab')
  I.dontSee('boolean must have value: true', '[data-path="root.boolean"]')

  // array
  I.scrollTo('[data-path="root.array"]', 0, -300)
  I.waitForText('array must have value: ["test"]', 1, '[data-path="root.array"]')
  I.click('Add Item', '[data-path="root.array"]')
  I.fillField('[id="root.array.0"]', 'test')
  I.pressKey('Tab')
  I.dontSee('array must have value: ["test"]', '[data-path="root.array"]')

  // object
  I.scrollTo('[data-path="root.object"]', 0, -300)
  I.waitForText('object must have value: {"test":"test"}', 1, '[data-path="root.object"]')
  I.fillField('[id="root.object.test"]', 'test')
  I.pressKey('Tab')
  I.dontSee('object must have value: {"test":"test"}', '[data-path="root.object"]')

  // multiple
  I.scrollTo('[data-path="root.multiple"]', 0, -300)
  I.waitForText('multiple must have value: "test"', 1, '[data-path="root.multiple"]')
  I.fillField('[id="root.multiple"]', 'test')
  I.pressKey('Tab')
  I.dontSee('multiple must have value: "test"', '[data-path="root.multiple"]')
})

Scenario('should display enum validation errors @enum', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/enum')
  I.waitForText('enum must be one of the enumerated values: [{"string":"Albert"},{"string":"Betti"}]', '[data-path="root"]')
  I.fillField('[id="root.string"]', 'Albert')
  I.pressKey('Tab')
  I.dontSee('enum must be one of the enumerated values: [{"string":"Albert"},{"string":"Betti"}]', '[data-path="root"]')
})

Scenario('should display exclusiveMaximum validation errors @exclusiveMaximum', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/exclusiveMaximum')
  I.waitForElement('.jedi-ready')
  I.dontSee('number must be less than 99', '[data-path="root.number"]')
  I.dontSee('integer must be less than 99', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I.waitForText('number must be less than 99', '[data-path="root.number"]')
  I.waitForText('integer must be less than 99', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 99)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 99)
  I.pressKey('Tab')
  I.dontSee('number must be less than 99', '[data-path="root.number"]')
  I.dontSee('integer must be less than 99', '[data-path="root.integer"]')
})

Scenario('should display exclusiveMinimum validation errors @exclusiveMinimum', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/exclusiveMinimum')
  I.waitForElement('.jedi-ready')
  I.waitForText('number must be at least 101', '[data-path="root.number"]')
  I.waitForText('integer must be at least 101', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 101)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 101)
  I.pressKey('Tab')
  I.dontSee('number must be at least 101', '[data-path="root.number"]')
  I.dontSee('integer must be at least 101', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I.waitForText('number must be at least 101', '[data-path="root.number"]')
  I.waitForText('integer must be at least 101', '[data-path="root.integer"]')
})
Scenario('should display maximum validation errors @maximum', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maximum')
  I.waitForElement('.jedi-ready')
  I.dontSee('number must be less than 100', '[data-path="root.number"]')
  I.dontSee('integer must be less than 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 101)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 101)
  I.pressKey('Tab')
  I.waitForText('number must be less than 100', '[data-path="root.number"]')
  I.waitForText('integer must be less than 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('number must be less than 100', '[data-path="root.number"]')
  I.dontSee('integer must be less than 100', '[data-path="root.integer"]')
})

Scenario('should display maxItems validation errors @maxItems', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maxItems')
  I.waitForElement('.jedi-ready')
  I.dontSee('array must have at most 3 items', '[data-path="root.array"]')
  I.click('Add Item')
  I.waitForText('array must have at most 3 items', '[data-path="root.array"]')
})

Scenario('should display maxLength validation errors @maxLength', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maxLength')
  I.waitForElement('.jedi-ready')
  I.dontSee('string must be at most 5 characters long', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'string')
  I.pressKey('Tab')
  I.waitForText('string must be at most 5 characters long', '[data-path="root.string"]')
})

Scenario('should display maxProperties validation errors @maxProperties', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/maxProperties')
  I.waitForElement('.jedi-ready')
  I.waitForText('maxProperties must have at most 1 properties', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    prop1: ''
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('maxProperties must have at most 1 properties', '[data-path="root"]')
})

Scenario('should display minimum validation errors @minimum', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minimum')
  I.waitForElement('.jedi-ready')
  I.waitForText('number must be at least 100', '[data-path="root.number"]')
  I.waitForText('integer must be at least 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('number must be at least 100', '[data-path="root.number"]')
  I.dontSee('integer must be at least 100', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 99)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 99)
  I.pressKey('Tab')
  I.waitForText('number must be at least 100', '[data-path="root.number"]')
  I.waitForText('integer must be at least 100', '[data-path="root.integer"]')
})

Scenario('should display minItems validation errors @minItems', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minItems')
  I.waitForElement('.jedi-ready')
  I.waitForText('array must have at least 1 items', '[data-path="root.array"]')
  I.click('Add Item')
  I.dontSee('array must have at least 1 items', '[data-path="root.array"]')
})

Scenario('should display minLength validation errors @minLength', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minLength')
  I.waitForElement('.jedi-ready')
  I.waitForText('string must be at least 5 characters long', '[data-path="root.string"]')
  I.fillField('[id="root.string"]', 'string')
  I.pressKey('Tab')
  I.dontSee('string must be at least 5 characters long', '[data-path="root.string"]')
})

Scenario('should display minProperties validation errors @minProperties', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/minProperties')
  I.waitForElement('.jedi-ready')
  I.waitForText('minProperties must have at least 1 properties', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    test: 'test'
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('minProperties must have at least 1 properties', '[data-path="root"]')
})

Scenario('should display multipleOf validation errors @multipleOf', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/multipleOf')
  I.waitForElement('.jedi-ready')
  I.dontSee('number must be multiple of 10', '[data-path="root.number"]')
  I.dontSee('integer must be multiple of 10', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 9)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 9)
  I.pressKey('Tab')
  I.waitForText('number must be multiple of 10', '[data-path="root.number"]')
  I.waitForText('integer must be multiple of 10', '[data-path="root.integer"]')
  I.fillField('[id="root.number"]', 100)
  I.pressKey('Tab')
  I.fillField('[id="root.integer"]', 100)
  I.pressKey('Tab')
  I.dontSee('number must be multiple of 10', '[data-path="root.number"]')
  I.dontSee('integer must be multiple of 10', '[data-path="root.integer"]')
})

Scenario('should display not validation errors @not', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/not')
  I.scrollTo('[data-path="root.test"]', 0, -300)
  I.waitForText('test must not validate against the provided schema {"type":"string"}', '[data-path="root.test"]')
  I.click('Number')
  I.dontSee('test must not validate against the provided schema {"type":"string"}', '[data-path="root.test"]')
})

Scenario('should display oneOf validation errors @oneOf', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/oneOf')
  I.waitForText('number must validate against exactly one of the provided schemas. It currently validates against 2 of the schemas.', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 3)
  I.pressKey('Tab')
  I.dontSee('number must validate against at least one of the provided schemas', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 15)
  I.pressKey('Tab')
  I.waitForText('number must validate against exactly one of the provided schemas. It currently validates against 2 of the schemas.', '[data-path="root.number"]')
  I.fillField('[id="root.number"]', 5)
  I.pressKey('Tab')
  I.dontSee('number must validate against at least one of the provided schemas', '[data-path="root.number"]')
})

Scenario('should display pattern validation errors @pattern', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/pattern')
  I.waitForElement('.jedi-ready')
  I.waitForText('string must be the pattern: ^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$', '[data-path="root"]')
  I.fillField('[id="root.string"]', 'test@test.com')
  I.pressKey('Tab')
  I.dontSee('string must be the pattern: ^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$', '[data-path="root"]')
})

Scenario('should display required validation errors @required', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/required')
  I.waitForElement('.jedi-ready')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('Object is missing the required property: required', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    optional: ''
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.waitForText('Object is missing the required property: required', '[data-path="root"]')
  I.fillField('#editor-value', JSON.stringify({
    optional: '',
    required: ''
  }))
  I.click('#set-value')
  I.scrollTo('[data-path="root"]', 0, -300)
  I.dontSee('Object is missing the required property: required', '[data-path="root"]')
})

Scenario('should display uniqueItems validation errors @uniqueItems', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/uniqueItems')
  I.waitForElement('.jedi-ready')
  I.waitForText('array must have unique items', '[data-path="root.array"]')
  I.fillField('[id="root.array.1"]', 'Betty')
  I.pressKey('Tab')
  I.dontSee('array must be at least 5 characters long', '[data-path="root.array"]')
})