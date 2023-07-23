# JEDI
JSON Editing, Data Validation, and Integration

## As a Validator

````javascript
const editor = new Jedi({
  schema: {
    "type": "string"
  }
})

editor.setValue(42)

const errors = editor.getErrors()
````

## As an Editor

````javascript
const editor = new Jedi({
  isEditor: true,
  container: document.querySelector('#jedi-container'),
  schema: {
    "type": "string"
  }
})
````

## Todo

- rename barebones to theme
- collapse card
- set first enum value as default in editor
- jsdoc
- private methods
- properties as dropdown
- array grid
- array table
- remember saved page
- header: false
- title: false
- schema helpers instead of schema object
- nested if-then-else
- allOf if-then-else
- schema getter return undefined (options)
- refresh disable state
- icons
- readonly, should not set value
- readOnly mode
- arrays of objects test
- showErrors options
- arrays of arrays test
- arrays of multiples test
- aria attributes
- textarea standalone editor
- array accordion
- error messages texts
- use names options
- ui required (not json required)
- plugins examples
- edit object values
- edit array values
- filter by field (using tags)
- formats
- array enums
- translations
- use schema to evaluate annotations and options

## Resources
* [Understanding JSON Schema](http://json-schema.org/understanding-json-schema/index.html)
* [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite)
