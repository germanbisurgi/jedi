[![Tests](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml/badge.svg)](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml)

# Jedi - JSON Editing and Data Inspection

Jedi is a versatile JavaScript library that simplifies JSON data handling in web applications.
Validate JSON data effortlessly with custom schemas or generate dynamic forms for seamless JSON editing. 

## Key Features

- JSON Validation: Ensure JSON data integrity using JSON schemas.

- JSON Editing: Generate accessible user-friendly forms for quick JSON editing.

- Lightweight $ref parser: Dereferences JSON Schema $ref pointers.

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

## Development

Install dependencies:
```bash
yarn install
```

Start dev server, watch for changes and opens the playground page in the browser.

```bash
yarn dev
```

Builds the production-ready version of the library.

```bash
yarn build
```

Runs end-to-end tests using CodeceptJS with the barebones theme.

```bash
yarn e2e
```

Runs end-to-end tests using CodeceptJS with the bootstrap 3 theme.

```bash
yarn e2e:b3
```

Runs end-to-end tests using CodeceptJS with the bootstrap 4 theme.

```bash
yarn e2e:b4
```

Runs end-to-end tests using CodeceptJS with the bootstrap 5 theme.

```bash
yarn e2e:b5
```

Runs end-to-end tests using CodeceptJS with all the themes.

```bash
yarn e2e:*
```

Runs unit tests using Jest.

```bash
yarn unit
```

Runs ESLint to check for linting errors.

```bash
yarn lint
```

Runs ESLint with the --fix option to automatically fix linting errors.
```bash
yarn lint:fix
```

## License

Jedi is released under the MIT License, making it free for commercial and non-commercial use.

## Resources
* [Understanding JSON Schema](https://json-schema.org/understanding-json-schema)
* [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite)
