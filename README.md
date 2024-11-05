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

## Instance Options

#### `container`
- **Type:** `HTMLElement`
- **Default:** `null`
- **Example:** `document.querySelector('#jedi-container')`
- **Description:** The HTML element that will contain the generated form.

#### `iconLib`
- **Type:** `string`
- **Default:** `'null'`
- **Example:** `'fontawesome'`
- **Description:** Specifies the icon library to use for UI components. Valid options include:
  - `'glyphicons'`
  - `'bootstrapIcons'`
  - `'fontAwesome3'`
  - `'fontAwesome4'`
  - `'fontAwesome5'`
  - `'fontAwesome6'`

#### `theme`
- **Type:** `Theme`
- **Default:** `null`
- **Example:** `new Jedi.ThemeBootstrap3()`
- **Description:** An instance of `Theme` to apply to the UI. Valid options include:
  - `new Jedi.Theme()`
  - `new Jedi.ThemeBootstrap3()`
  - `new Jedi.ThemeBootstrap4()`
  - `new Jedi.ThemeBootstrap5()`

#### `refParser`
- **Type:** `new Jedi.RefParser`
- **Default:** `null`
- **Example:** "new Jedi.RefParser()"
- **Description:** An instance of `RefParser` to handle `'$ref'` keywords.

#### `enablePropertiesToggle`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Enables a toggle to show/hide properties in the UI.

#### `enableCollapseToggle`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Allows sections to be collapsible in the UI.

#### `startCollapsed`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If set to `true`, the UI starts in a collapsed state.

#### `deactivateNonRequired`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Deactivates non-required properties.

#### `schema`
- **Type:** `object`
- **Default:** `{}`
- **Example:** `{type: 'object', properties: {}}`
- **Description:** A JSON schema for the form.

#### `showErrors`
- **Type:** `string`
- **Default:** `'change'`
- **Example:** `'always'`
- **Description:** Determines when to display validation errors. Options include:
  - `'never'`
  - `'change'`
  - `'always'`

#### `data`
- **Type:** `object`
- **Default:** `undefined`
- **Example:** `{name: 'John', age: 30}`
- **Description:** Initial data to populate the form.

#### `validateFormat`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Treats `'format'` as a validator rather than just an annotation.

#### `mergeAllOf`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If set to `true`, merges all `allOf` schemas into one.

#### `enforceConst`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Enforces the `const` keyword value in editors.

#### `customEditors`
- **Type:** `array`
- **Default:** `[]`
- **Example:** `[MyEditor]`
- **Description:** An array of custom editor classes.

#### `hiddenInputAttributes`
- **Type:** `object`
- **Default:** `{}`
- **Example:** `{class: 'hidden', style: 'display:none;'}`
- **Description:** Attributes for hidden inputs in the form.

### Notes
- Ensure that all necessary properties are set according to your requirements for optimal functionality.


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
