# Jedi - JSON Editing and Data Inspection

Jedi is a versatile JavaScript library that simplifies JSON data handling in web applications.
Validate JSON data effortlessly with custom schemas or generate dynamic forms for seamless JSON editing. 

## Key Features

- JSON Validation: Ensure JSON data integrity using JSON schemas.

- JSON Editing: Generate accessible user-friendly forms for quick JSON editing.

- CSS libraries Integration: Seamlessly integrates with Bootstrap 3, 4, and 5.
Integration with other popular libraries coming soon.


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
