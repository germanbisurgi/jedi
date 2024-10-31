[![Tests](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml/badge.svg)](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml)

# Jedi - JSON Editing and Data Integrity

Jedi is a lightweight, dependency-free JavaScript library that makes JSON handling simple.
Use it in the browser to generate forms for editing and validating JSON with JSON schemas,
or in Node.js as a powerful JSON schema validator.

[Check Out the Playground](https://germanbisurgi.github.io/jedi/views/playground.html?theme=bootstrap5)

## Key Features

- JSON Validation: Easily validate your JSON data using JSON schemas.
- JSON Editing: Generate user-friendly forms for smooth JSON editing in the browser.
- Lightweight $ref parser: Dereferences JSON Schema $ref pointers.
- CSS libraries Integration:
    - Bootstrap 3, 4, 5
- Icon libraries Integration:
    - Glyphicons
    - Bootstrap icons
    - FontAwesome 3, 4, 5, 6
- Plugin Editors:
    - Quill (Rich Text Editor)
    - Flatpickr (Date Picker)
    - Awesomplete (Autocomplete)
    - Jodit (Rich Text Editor)

## Getting Started

### As a Validator

```javascript
const schema = {
  "type": "string"
};

const refParser = new Jedi.RefParser()

const init = async () => {
  await refParser.dereference(schema)

  const jedi = new Jedi.Create({
    refParser: refParser,
    schema: {
      "type": "string"
    }
  })
}

init()
```

### As an Editor

```html

<div id="jedi-container"></div>
```

```javascript
const schema = {
  "type": "string"
};

const refParser = new Jedi.RefParser()

const init = async () => {
  await refParser.dereference(schema)

  const jedi = new Jedi.Create({
    container: document.querySelector('#jedi-container'),
    theme: new Jedi.ThemeBootstrap3(),
    refParser: refParser,
    schema: {
      "type": "string"
    }
  })
}

init()
```

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
