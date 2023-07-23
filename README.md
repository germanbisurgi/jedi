# Jedi - JavaScript Library for JSON Validation and Editing

Jedi is a versatile JavaScript library that simplifies JSON data handling in web applications. Validate JSON data effortlessly with custom schemas or generate dynamic forms for seamless JSON editing. 

## Key Features

- JSON Validation: Ensure JSON data integrity with easy-to-define schemas.

- JSON Editing: Generate accessible user-friendly forms for quick JSON editing.

- CSS libraries Integration: Seamlessly integrates with Bootstrap 3, 4, and 5. Integration with other popular libraries coming soon.


## Getting Started


### As a Validator

````javascript
const editor = new Jedi({
  schema: {
    "type": "string"
  }
})

editor.setValue(42)

const errors = editor.getErrors()
````

### As an Editor

````javascript
const editor = new Jedi({
  isEditor: true,
  container: document.querySelector('#jedi-container'),
  schema: {
    "type": "string"
  }
})
````

## License

Jedi is released under the MIT License, making it free for commercial and non-commercial use.

## Resources
* [Understanding JSON Schema](http://json-schema.org/understanding-json-schema/index.html)
* [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite)

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

