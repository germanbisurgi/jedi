[![Tests](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml/badge.svg)](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml)

# Jedi - JSON Editing and Data Integrity

Generates forms from JSON schemas. Can be used in backend to validate JSON data too.
[Check Out the Playground](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5)

## Key Features

- Dependency free
- JSON Schema Validation: Easily validate your JSON data using JSON schemas.
- JSON Editing: Generate user-friendly forms for smooth JSON editing in the browser.
- Dereferences JSON Schema <code>'$ref'</code> pointers.
- CSS libraries Integration:
    - Bootstrap 3
    - Bootstrap 4
    - Bootstrap 5
- Icon libraries Integration:
    - Glyphicons
    - Bootstrap icons
    - FontAwesome 3
    - FontAwesome 4
    - FontAwesome 5
    - FontAwesome 6
- Plugin Editors:
    - Quill
    - Flatpickr
    - Awesomplete
    - Jodit

## Getting Started

### As a Validator

```javascript
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

<table>
  <thead>
    <tr align="left">
      <th>Option</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr align="left">
      <td><code>container</code></td>
      <td><code>HTMLElement</code></td>
      <td><code>null</code></td>
      <td>The HTML element that will contain the generated form.</td>
    </tr>
    <tr align="left">
      <td><code>iconLib</code></td>
      <td><code>string</code></td>
      <td><code>null</code></td>
      <td>
        Specifies the icon library to use for UI components. Valid options include:
        <ul>
          <li><code>'glyphicons'</code></li>
          <li><code>'bootstrapIcons'</code></li>
          <li><code>'fontAwesome3'</code></li>
          <li><code>'fontAwesome4'</code></li>
          <li><code>'fontAwesome5'</code></li>
          <li><code>'fontAwesome6'</code></li>
        </ul>
      </td>
    </tr>
    <tr align="left">
      <td><code>theme</code></td>
      <td><code>Theme</code></td>
      <td><code>null</code></td>
      <td>
        An instance of <code>Theme</code> to apply to the UI. Valid options include:
        <ul>
          <li><code>new Jedi.Theme()</code></li>
          <li><code>new Jedi.ThemeBootstrap3()</code></li>
          <li><code>new Jedi.ThemeBootstrap4()</code></li>
          <li><code>new Jedi.ThemeBootstrap5()</code></li>
        </ul>
      </td>
    </tr>
    <tr align="left">
      <td><code>refParser</code></td>
      <td><code>new Jedi.RefParser</code></td>
      <td><code>null</code></td>
      <td>An instance of <code>RefParser</code> to handle <code>'$ref'</code> keywords.</td>
    </tr>
    <tr align="left">
      <td><code>enablePropertiesToggle</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Enables a toggle to show/hide properties in the UI.</td>
    </tr>
    <tr align="left">
      <td><code>enableCollapseToggle</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Allows sections to be collapsible in the UI.</td>
    </tr>
    <tr align="left">
      <td><code>startCollapsed</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>If set to <code>true</code>, the UI starts in a collapsed state.</td>
    </tr>
    <tr align="left">
      <td><code>deactivateNonRequired</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Deactivates non-required properties.</td>
    </tr>
    <tr align="left">
      <td><code>schema</code></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
      <td>A JSON schema for the form.</td>
    </tr>
    <tr align="left">
      <td><code>showErrors</code></td>
      <td><code>string</code></td>
      <td><code>'change'</code></td>
      <td>
        Determines when to display validation errors. Options include:
        <ul>
          <li><code>'never'</code></li>
          <li><code>'change'</code></li>
          <li><code>'always'</code></li>
        </ul>
      </td>
    </tr>
    <tr align="left">
      <td><code>data</code></td>
      <td><code>object</code></td>
      <td><code>undefined</code></td>
      <td>Initial data to populate the form.</td>
    </tr>
    <tr align="left">
      <td><code>validateFormat</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Treats <code>'format'</code> as a validator rather than just an annotation.</td>
    </tr>
    <tr align="left">
      <td><code>mergeAllOf</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>If set to <code>true</code>, merges all <code>allOf</code> schemas into one.</td>
    </tr>
    <tr align="left">
      <td><code>enforceConst</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Enforces the <code>const</code> keyword value in editors.</td>
    </tr>
    <tr align="left">
      <td><code>customEditors</code></td>
      <td><code>array</code></td>
      <td><code>[]</code></td>
      <td>An array of custom editor classes.</td>
    </tr>
    <tr align="left">
      <td><code>hiddenInputAttributes</code></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
      <td>Attributes for hidden inputs in the form.</td>
    </tr>
    <tr align="left">
      <td><code>enforceEnumDefault</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>When <code>true</code> uses the first item in the enum as the default value</td>
    </tr>
    <tr align="left">
      <td><code>id</code></td>
      <td><code>string</code></td>
      <td><code>''</code></td>
      <td>Used to prefix <code>id</code> and <code>for</code> attributes</td>
    </tr>
  </tbody>
</table>

## Events
coming soon

## Schema options
coming soon

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
