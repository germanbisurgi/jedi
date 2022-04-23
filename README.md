# jedi

## Editors

### Supported types

- string
- object
- array
- boolean
- number
- string
- null

### Creating Editors

override methods:

- build()
- refreshUI()

#### build pipeline

- setContainer()
- build()
- setDefaultValue()
- register()

#### setValue pipeline

setValue() -> onChange() -> (if parent) parent onChildEditorChange() -> refreshUI() -> showValidationErrors()

## Links

[Understanding JSON Schema](http://json-schema.org/understanding-json-schema/index.html)
