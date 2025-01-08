[![Tests](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml/badge.svg)](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml)

# Jedi - JSON Editing and Data Integrity

Generates forms from JSON schemas. Can be used in backend to validate JSON data too.
[Check Out the Playground](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5)

# Table of Contents

- [Key Features](#key-features)
- [Getting Started](#getting-started)
    - [As a Validator](#as-a-validator)
    - [As an Editor](#as-an-editor)
- [Instance Options](#instance-options)
- [Schema Options](#schema-options)
    - [titleHidden](#titlehidden)
    - [titleIconClass](#titleiconclass)
    - [showErrors](#showerrors)
    - [assertFormat](#assertformat)
    - [messages](#messages)
    - [info](#info)
    - [inputAttributes](#inputattributes)
    - [enumTitles](#enumtitles)
    - [enforceEnumDefault](#enforceenumdefault)
    - [enforceConst](#enforceconst)
    - [switcherTitle](#switchertitle)
    - [format](#format)
- [License](#license)
- [Resources](#resources)


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
    - Quill - powerful rich text editor
    - Flatpickr - lightweight and powerful datetime picker
    - Awesomplete - Ultra lightweight, customizable, simple autocomplete widget with zero dependencies
    - Jodit - WYSIWYG Editor
    - Raty - star Rating Plugin

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
      <td><code>assertFormat</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Treats <code>'format'</code> as a validator rather than just an annotation.</td>
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

## Schema options

The `x-options` [custom annotation](https://json-schema.org/blog/posts/custom-annotations-will-continue#what's-the-solution)
can be used in JSON Schemas to changes how instances and editors behave. When setting the same option as
Jedi options and as `x-options`, the `x-options` one will be applied. `x-options` must be of type object.

```json
{
  "title": "Message",
  "type": "string",
  "x-options": {
    "format": "textarea"
  }
}
```

Some options depend on other options to be set. In the example the option `"nav"` depends on the schema having 
the option `"format": "nav"` set.

```json
{
  "title": "Person",
  "type": "object",
  "x-options": {
    "format": "nav",
    "nav": {
      "variant": "pills",
      "stacked": true
    }
  }
}
```

### `titleHidden`

- Type: `boolean`
- Default: `false`
- Description: Hides the editor title.
- Examples:

Hide editor title.

```json
{
  "title": "Message",
  "type": "string",
  "x-options": {
    "titleHidden": true
  }
}
```

### `titleIconClass`

- Type: `string`
- Description: Icon class to use in titles if using any.
- Examples:

Show a fontawesome envelope icon in the title.

```json
{
  "title": "Message",
  "type": "string",
  "x-options": {
    "titleIconClass": "fas fa-envelope"
  }
}
```

### `showErrors`

- Type: `string`
- Default: `"change"`
- Options: `"never"`, `"change"`, `"always"`
- Description: Determines when to display validation errors.
- Examples:

Always show errors for this editor even if the value didn't change.

```json
{
  "title": "Message",
  "type": "string",
  "x-options": {
    "showErrors": "always"
  }
}
```

### `assertFormat`

- Type: `boolean`
- Default: `"false"`
- Options: `"never"`, `"change"`, `"always"`
- Description: Treats `"format"` as a validator rather than just an annotation.
- Examples:

Treat `"format": "email"` as a constraint keyword instead of an annotation.

```json
{
  "title": "Message",
  "type": "string",
  "format": "email",
  "x-options": {
    "assertFormat": true
  }
}
```

### `messages`

- Type: `string[]`
- Description: Used to define custom error messages.
- Examples:

If editor has any error, displays 2 custom error messages.

```json
{
  "title": "Message",
  "type": "string",
  "minLength": "10",
  "maxLength": "100",
  "x-options": {
    "messages": [
      "Must be at least 10 characters long",
      "Must be at most 100 characters long"
    ]
  }
}
```

### `info`

- Type: `object`
- Description: Used to display extra information. If HTML will be rendered only DOMPurify is available, otherwise only the textContent will be displayed without any HTML tags.
- Options:
    - `variant`: `"modal"`
    - `title`: Plain text or HTML.
    - `content`:  Plain text or HTML.
- Examples:

Displays an info button right after the title, that opens a modal with title and content.

```json
{
  "title": "Message",
  "type": "string",
  "x-options": {
    "info": {
      "variant": "modal",
      "title": "<h4>Info Button title</h4>",
      "content": "<p>Info button content</p>"
    }
  }
}
```

### `inputAttributes`

- Type: `object`
- Description: Used to set attributes for the editor input.
- Examples:

Add `placeholder` attribute to textarea.

```json
{
  "title": "Message",
  "type": "string",
  "x-options": {
    "format": "textarea",
    "inputAttributes": {
      "placeholder": "Your message here..."
    }
  }
}
```

### `enumTitles`

- Type: `string[]`
- Depends on: `"enum"`
- Description: Used to display user-friendly labels in the editor instead of those listen in `"enum"`.
- Examples:

Display color names instead of hex codes.

```json
{
  "title": "Color",
  "type": "string",
  "enum": [
    "ff0000",
    "00ff00",
    "0000ff"
  ],
  "x-options": {
    "enumTitles": [
      "Red",
      "Green",
      "Blue"
    ]
  }
}
```

### `enforceEnumDefault`

- Type: `boolean`
- Default: `false`
- Depends on: `"enum"`
- Description: Whether the editor initial value will be the first item in the `"enum"`.
- Examples:

Default value for this editor will be  `""`.

```json
{
  "title": "Color",
  "type": "string",
  "enum": [
    "ff0000",
    "00ff00",
    "0000ff"
  ],
  "x-options": {
    "enforceEnumDefault": false
  }
}
```
Default value for this editor will be `"ff0000"`.

```json
{
  "title": "Color",
  "type": "string",
  "enum": [
    "ff0000",
    "00ff00",
    "0000ff"
  ],
  "x-options": {
    "enforceEnumDefault": true
  }
}
```

### `enforceConst`

- Type: `boolean`
- Default: `false`
- Depends on: `"const"`
- Description: Value will remain whatever is defined in schema `"const"`.
- Examples:

Default value for this editor will be `"ff0000"`.

```json
{
  "title": "Color",
  "type": "string",
  "const": "ff0000",
  "x-options": {
    "enforceConst": true
  }
}
```

### `switcherTitle`

- Type: `string`
- Default: "undefined". The property name or the title will be used instead.
- Depends on: `"oneOf"`, `"anyOf"`
- Description: The text displayed in the multiple editor switcher to select this sub-schema editor.
- Examples:

Switcher options displayed are:
- "I want to pay with Credit Card"
- "I want to pay with PayPal"

But in the sub-editors the titles remain:
- "Card Number"
- "Email"

```json
{
  "anyOf": [
    {
      "title": "Card Number",
      "type": "string",
      "x-options": {
        "switcherTitle": "I want to pay with Credit Card"
      }
    },
    {
      "title": "Email",
      "type": "string",
      "x-options": {
        "switcherTitle": "I want to pay with PayPal"
      }
    }
  ]
}
```

### `format`

- Type: `string`
- Description: Determines editor UI and behaviours. The effect of `"format"` depends on the schema `"type"` keyword.
- Options:
    - Boolean:
        - `"select"` (default)
        - `"radios"`
        - `"radios-inline"`
        - `"checkbox"`
    - String:
        - `"text"` (default)
        - `"hidden"`
        - `"color"`
        - `"date"`
        - `"datetime-local"`
        - `"email"`
        - `"number"`
        - `"month"`
        - `"password"`
        - `"search"`
        - `"time"`
        - `"tel"`
        - `"url"`
        - `"week"`
        - `"textarea"`
    - Number:
        - `"number"` (default)
        - `"select"`
        - `"radios"`
        - `"radios-inline"`
    - integer:
        - `"number"` (default)
        - `"select"`
        - `"radios"`
        - `"radios-inline"`
    - Array:
        - `"list"` (default)
        - `"nav"`
        - `"table"`
    - Object:
        - `"list"` (default)
        - `"nav"`
        - `"grid"`
- Examples:

Use radios to display color names instead of hex codes.

```json
{
  "title": "Color",
  "type": "string",
  "enum": [
    "Red",
    "Green",
    "Blue"
  ],
  "x-options": {
    "format": "radios"
  }
}
```

### `nav`

- Type: `object`
- Description: Extra configuration for `"format": "nav"` depends on the schema `"type"` keyword.
- Options:
    - `variant`: `"pills"` | `"tabs"`.
    - `stacked`: To stack nav items
    - `columns`:  Number of columns occupied by the nav items container
- Examples:
    - [editors/object-nav-pills](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-nav-pills&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)
    - [editors/object-nav-tabs](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-nav-tabs&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)

### `gridColumns`

- Type: `number`
- Description: Number of columns occupied by the editor when parent editor has `"format": "grid"`
- Examples:
    - [editors/object-grid](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-grid&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)

### `gridOffset`

- Type: `number`
- Description: Number of offset columns the editor when parent editor has `"format": "grid"`
- Examples:
    - [editors/object-grid](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-grid&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)

### `gridNewRow`

- Type: `boolean`
- Description: Whether the editor should be placed into a new row. Works only if parent editor has `"format": "grid"`
- Examples:
  - [editors/object-grid](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-grid&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)


### `enableCollapseToggle`

- Type: `boolean`
- Description: Display a collapse button used to collapse or expand editors that support collapse like `object` and `arrays`
- Examples:
    - [editors/object](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)
    - [editors/array](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/array&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)

### `startCollapsed`

- Type: `boolean`
- Description: Whether the editor should start expanded or collapsed. Works on editors that support collapse like `object` and `arrays`
- Examples:

```json
{
  "title": "Person",
  "type": "object",
  "x-options": {
    "startCollapsed": true
  },
  "properties": {
    "name": {
      "type": "string",
      "title": "Name"
    }
  }
}
```

### `deactivateNonRequired`

- Type: `boolean`
- Description: Whether the editor should deactivate (hide) or activate (show) non required properties. Works on only with `object` type editors.
- Examples:

```json
{
  "title": "Person",
  "type": "object",
  "x-options": {
    "deactivateNonRequired": true
  },
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "title": "Name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    }
  }
}
```

### `sortable`

- Type: `boolean`
- Description: Allows drag and drop if Sortable.js is installed. Works only with `array` type editors.
- Examples:

```json
{
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "title": "items",
      "items": {
        "title": "This is a number editor",
        "type": "number"
      },
      "x-options": {
        "sortable": true
      }
    }
  }
}
```

### `titleTemplate`

- Type: `string`
- Description: A template to form titles dynamically.
- Examples:
    - [editors/object-nav-pills](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-nav-pills&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)
    - [editors/object-nav-tabs](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-nav-tabs&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)

## License

Jedi is released under the MIT License, making it free for commercial and non-commercial use.

## Resources

* [Understanding JSON Schema](https://json-schema.org/understanding-json-schema)
* [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite)
