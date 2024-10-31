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

### Options

### Options Properties

| Property                    | Type          | Default     | Example                                     | Description                                                                                         |
|-----------------------------|---------------|-------------|---------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `container`                 | `HTMLElement` | `null`      | `document.querySelector('#jedi-container')` | The HTML element that will contain the generated form.                                              |
| `iconLib`                   | `string`      | `string`    | `'fontawesome'`                             | The icon library to use for UI components.                                                          |
| `theme`                     | `Theme`       | `null`      | `new Jedi.ThemeBootstrap3()`                | The theme to apply to the UI.                                                                       |
| `refParser`                 | `RefParser`   | `null`      | `new Jedi.RefParser()`                      | A `RefParser` instance to dereference `'$ref'` keywords.                                            |
| `enablePropertiesToggle`     | `boolean`     | `false`     | `true`                                      | Enables a toggle to show/hide properties in the UI.                                                 |
| `enableCollapseToggle`      | `boolean`     | `false`     | `true`                                      | Allows sections to be collapsible in the UI.                                                        |
| `startCollapsed`            | `boolean`     | `false`     | `true`                                      | If `true`, the UI starts in a collapsed state.                                                      |
| `deactivateNonRequired`     | `boolean`     | `false`     | `true`                                      | Deactivates non-required properties.                                                                |
| `schema`                    | `object`      | `{}`        | `{type: 'object', properties: {}}`         | A JSON schema.                                                                                     |
| `showErrors`                | `string`      | `'change'`  | `'always'`                                  | Determines when to show validation errors. Possible values are `'$never'`, `'$change'`, `'$always'`. |
| `data`                      | `object`      | `undefined` | `{name: 'John', age: 30}`                  | The initial data to populate the form.                                                              |
| `validateFormat`            | `boolean`     | `false`     | `true`                                      | Treats `'format'` as a validator and not just an annotation.                                        |
| `mergeAllOf`                | `boolean`     | `false`     | `true`                                      | If `true`, merges all `allOf` schemas into one.                                                     |
| `enforceConst`              | `boolean`     | `false`     | `true`                                      | Enforces the `const` keyword value in editors.                                                      |
| `customEditors`             | `array`       | `[]`        | `[MyEditor]`                                | An array of custom editor classes.                                                                   |
| `hiddenInputAttributes`     | `object`      | `{}`        | `{class: 'hidden', style: 'display:none;'}` | Attributes for hidden inputs in the form.                                                           |


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
