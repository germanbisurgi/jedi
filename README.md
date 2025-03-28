[![Tests](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml)

# Jedi - JSON Editing and Data Integrity

Generates forms from JSON schemas. Can be used in backend to validate JSON data too.
[Check Out the Playground](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5)

# Table of Contents

- [Key Features](#key-features)
- [Getting Started](#getting-started)
    - [As a Validator](#as-a-validator)
    - [As an Editor](#as-an-editor)
    - [Instance Methods](#instance-methods)
    - [Instance event listeners](#instance-event-listeners)
- [RefParser](#refParser)
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
- [Language and Translations](#language-and-translations)
- [Editors](#editors)
    - [Array](#array)
    - [Array checkboxes](#array-checkboxes)
    - [Array choices](#array-choices)
    - [Array nav](#array-nav)
    - [Array table](#array-table)
    - [Boolean checkbox](#boolean-checkbox)
    - [Boolean radios](#boolean-radios)
    - [Boolean select](#boolean-select)
    - [Number input](#number-input)
    - [Number radios](#number-radios)
    - [Number select](#number-select)
    - [Number select](#number-select)
    - [Object select](#object)
    - [Object grid](#object-grid)
    - [Object nav](#object-nav)
    - [String input](#string-input)
    - [String radios](#string-radios)
    - [String select](#string-select)
    - [String textarea](#string-textarea)
    - [String IMask](#string-imask)
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
    - IMask - vanilla javascript input mask

## Getting Started

### As a Validator

```javascript
const schema = {
  "type": "string"
}

const refParser = new Jedi.RefParser()

const init = async () => {
  await refParser.dereference(schema)

  const jedi = new Jedi.Create({
    refParser: refParser,
    schema: schema
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
}

const refParser = new Jedi.RefParser()

const init = async () => {
  await refParser.dereference(schema)

  const jedi = new Jedi.Create({
    container: document.querySelector('#jedi-container'),
    theme: new Jedi.ThemeBootstrap3(),
    refParser: refParser,
    schema: schema
  })
}

init()
```

## Instance Methods

```javascript
    jedi.getValue() // returns the value of the editor
    jedi.setValue({name: "Marcus mille"}) // set the editor value
    jedi.getInstance('#/name') // gets the instance by json path
    jedi.showValidationErrors() // displays validation errors in the respective editors
    jedi.getErrors() // returns an array of validation error messages
    jedi.disable() // disables the editor
    jedi.enable() // enables the editor
    jedi.destroy() // destroys the editor
```

## Instance event listeners

```javascript
// emitted when the jedi instance changes (whole json value/instance/editor)
jedi.on('change', (initiator) => {
  
})

// emitted when an instance changes (parts of the value/instance/editor)
jedi.on('instance-change', (instance, initiator) => {

})
```

The argument `ìnitiator`can have one of the two values:
- `"api"`: indicates that the change came from a call of a method like `setValue()` or from internal mechanism of this library.
- `"user"`: indicates that the change came from an user interaction.


## RefParser

A `RefParser` resolves `$ref` references in JSON Schemas by dereferencing then.

```json
{
  "type": "object",
  "properties": {
    "user": {
      "$ref": "#/$defs/user"
    }
  },
  "$defs": {
    "user": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string",
          "format": "email"
        }
      }
    }
  }
}
```

translates to:

```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string",
          "format": "email"
        }
      }
    }
  }
}
```

## Instance Options

<table>
  <thead>
    <tr align="left">
      <th>Option</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
      <th>As schema "x-" option</th>
    </tr>
  </thead>
  <tbody>
    <tr align="left">
      <td><code>container</code></td>
      <td><code>HTMLElement</code></td>
      <td><code>null</code></td>
      <td>The HTML element that will contain the generated form.</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>iconLib</code></td>
      <td><code>string</code></td>
      <td><code>null</code></td>
      <td>
        Specifies the icon library to use for UI components. Valid options include:
        <ul>
          <li><code>'glyphicons'</code></li>
          <li><code>'bootstrap-icons'</code></li>
          <li><code>'fontawesome3'</code></li>
          <li><code>'fontawesome4'</code></li>
          <li><code>'fontawesome5'</code></li>
          <li><code>'fontawesome6'</code></li>
        </ul>
      </td>
    <td>no</td>
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
    <td>no</td>
    </tr>
    <tr align="left">
      <td><code>refParser</code></td>
      <td><code>new Jedi.RefParser</code></td>
      <td><code>null</code></td>
      <td>An instance of <code>RefParser</code> to handle <code>'$ref'</code> keywords.</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>translations</code></td>
      <td><code>object</code></td>
      <td><code>'{}'</code></td>
      <td>Used to add new translations or override the default ones.
<pre>translations: {
  en: {
    errorEnum: 'LOL'
  }
}</pre>
</td>
      <td>no</td>
    </tr>
<tr align="left">
      <td><code>parseMarkdown</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>
        Transform <code>markdown</code> to <code>html</code> in annotations like <code>title</code> and <code>description</code> if marked.js is available as <code>window.marked</code>.
      </td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>purifyHtml</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>
        Sanitizes <code>html</code> tags from annotations like if DOMPurify.js is available as <code>window.DOMPurify</code>.
      </td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>domPurifyOptions</code></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
      <td>
        DOMPurify options.
      </td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>schema</code></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
      <td>A JSON schema for the form.</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>id</code></td>
      <td><code>string</code></td>
      <td><code>''</code></td>
      <td>Used to prefix <code>id</code> and <code>for</code> attributes</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>laguage</code></td>
      <td><code>string</code></td>
      <td><code>'en'</code></td>
      <td>Set default language for error messages and UI texts</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>data</code></td>
      <td><code>object</code></td>
      <td><code>undefined</code></td>
      <td>Initial data to populate the form.</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>customEditors</code></td>
      <td><code>array</code></td>
      <td><code>[]</code></td>
      <td>An array of custom editor classes.</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>hiddenInputAttributes</code></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
      <td>Attributes for hidden inputs in the form.</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>settings</code></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
      <td>An object to store user data and functions. Useful for when there is the need to provide options to configure a plugin but the options can not be used in schemas because of JSON data limitations. Can be used in annotations when using templates</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>enforceEnumDefault</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>When <code>true</code> uses the first item in the enum as the default value</td>
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>enforceRequired</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>When <code>true</code> required properties are always displayed</td>
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>enforceAdditionalProperties</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>When <code>true</code> the editor removes all properties that are not listed in properties</td>
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>switcherInput</code></td>
      <td><code>string</code></td>
      <td><code>'select'</code></td>
      <td>
        Sets the input type that will be used to witch between multiple editors
        <ul>
          <li><code>select</code></li>
          <li><code>radios</code></li>
          <li><code>radios-inline</code></li>
        </ul>
      </td>
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>mergeAllOf</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>
        Merge <code>allOf</code> subschemas into it's owner schema. <b>WARNING</b>, merging schemas can lead to unwanted overrides. Use at your own risk.
      </td>
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>enablePropertiesToggle</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Enables a toggle to show/hide properties in the UI.</td>
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>enableCollapseToggle</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Allows sections to be collapsible in the UI.</td>
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>deactivateNonRequired</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Deactivates non-required properties.</td>
      <td>yes</td>
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
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>assertFormat</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Treats <code>'format'</code> as a validator rather than just an annotation.</td>
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>enforceConst</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Enforces the <code>const</code> keyword value in editors.</td>
      <td>yes</td>
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

More compact alternative:

```json
{
  "title": "Message",
  "type": "string",
  "x-format": "textarea"
}
```

Some options depend on other options to be set. In the example the option `"enumTitles"`
depends on the option `"enum"`.

```json
{
  "title": "Type",
  "type": "string",
  "enum": [
    "#000000",
    "#ffffff"
  ],
  "x-options": {
    "enumTitles": [
      "Black",
      "White"
    ]
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
- Description: Used to display extra information. If `markdown` is used to generate `html` content, it can be sanitized by DOMPurify is available, otherwise only the textContent will be displayed without any HTML tags.
- Options:
    - `variant`: `"modal"`
    - `title`: Plain text or `markdown`.
    - `content`:  Plain text or `markdown`.
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
        - `"nav-vertical"`
        - `"nav-horizontal"`
        - `"table"`
    - Object:
        - `"list"` (default)
        - `"nav-vertical"`
        - `"nav-horizontal"`
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

### `grid`

- Type: `object`
- Description: A configuration object to determine the position of the property editor in the parent's grid.
- Options:
    - `columns`: How many columns should the editor occupy.
    - `offset`: How many columns should the editor be offseted.
    - `newRow`: Whether the editor should be put in a new row.
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
- Description: Allows drag and drop if Sortable.js is installed and available as `window.Sortable`. Works only with `array` type editors.
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
    - [editors/object-nav-vertical](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-nav-vertical&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)
    - [editors/object-nav-horizontal](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-nav-horizontal&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnumDefault=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)

## Language and Translations

The default language for UI and error messages is `en` (english). The language can be set to any of
the supported languages in the instance options.

This will set german as the default language:

```javascript
  const jedi = new Jedi.Create({
  language: 'de'
})
```

Currently, the supported languages are `en` (english), `de` (german), `it` (italian) and `es` (spanish).
New languages can be added to the `translations` option. To use them the `language` options
should be set to the language specified.

The default translation can be overridden in the instance options as well.

```javascript
  const jedi = new Jedi.Create({
  language: 'de',
  translations: {
    de: {
      errorAdditionalProperties: 'Hat die zusätzliche Eigenschaft "{{ property }}", aber keine zusätzlichen Eigenschaften sind erlaubt.',
      errorAnyOf: 'Muss mindestens einem der bereitgestellten Schemata entsprechen.',
      errorConst: 'Muss den Wert {{ const }} haben.',
      errorContains: 'Muss mindestens ein Element enthalten, das dem bereitgestellten Schema entspricht.',
      errorDependentRequired: 'Muss die erforderlichen Eigenschaften haben: {{ dependentRequired }}.',
      errorEnum: 'Muss einer der aufgeführten Werte sein: {{ enum }}.',
      errorExclusiveMaximum: 'Muss kleiner als {{ exclusiveMaximum }} sein.',
      errorExclusiveMinimum: 'Muss größer als {{ exclusiveMinimum }} sein.',
      errorFormat: 'Muss ein gültiges {{ format }} sein.',
      errorItems: 'Muss Elemente enthalten, die dem bereitgestellten Schema entsprechen.',
      errorMaximum: 'Muss höchstens {{ maximum }} sein.',
      errorMaxItems: 'Darf höchstens {{ maxItems }} Elemente enthalten.',
      errorMaxLength: 'Darf höchstens {{ maxLength }} Zeichen lang sein.',
      errorMaxProperties: 'Darf höchstens {{ maxProperties }} Eigenschaften haben.',
      errorMaxContains: 'Darf höchstens {{ maxContains }} Elemente enthalten, die dem bereitgestellten Schema entsprechen. Aktuell enthält es {{ counter }}.',
      errorMinContains: 'Muss mindestens {{ minContains }} Elemente enthalten, die dem bereitgestellten Schema entsprechen. Aktuell enthält es {{ counter }}.',
      errorMinimum: 'Muss mindestens {{ minimum }} sein.',
      errorMinItems: 'Muss mindestens {{ minItems }} Elemente enthalten.',
      errorMinLength: 'Muss mindestens {{ minLength }} Zeichen lang sein.',
      errorMinProperties: 'Muss mindestens {{ minProperties }} Eigenschaften haben.',
      errorMultipleOf: 'Muss ein Vielfaches von {{ multipleOf }} sein.',
      errorNot: 'Darf nicht dem bereitgestellten Schema entsprechen.',
      errorOneOf: 'Muss genau einem der bereitgestellten Schemata entsprechen. Derzeit entspricht es {{ counter }} der Schemata.',
      errorPattern: 'Muss dem Muster "{{ pattern }}" entsprechen.',
      errorPrefixItems: 'Element {{ index }} entspricht nicht der Validierung.',
      errorPropertyNames: 'Der Eigenschaftsname "{{ propertyName }}" entspricht nicht der Validierung.',
      errorProperties: 'Die folgenden Eigenschaften entsprechen nicht ihren Schemata: {{ properties }}',
      errorRequired: 'Muss die erforderlichen Eigenschaften haben: {{ required }}.',
      errorType: 'Muss vom Typ {{ type }} sein.',
      errorUnevaluatedProperties: 'Hat eine ungültige nicht bewertete Eigenschaft "{{ property }}"',
      errorUniqueItems: 'Muss eindeutige Elemente haben.'
    }
  }
})
```

The text between brackets like `{{ minimum }}` or `{{ minLength }}` are templates.
This templates will be replaced dynamically with values specified in constrains.

The error message for the following schema will be "Muss mindestens `3` Zeichen lang sein."
because of the `minLength: 3`.

```json
{
  "title": "Email",
  "format": "email",
  "type": "string",
  "minLength": 3
}
```

## Editors

An editor is a UI that allows users to input data and finally edit the relative json instance.
Editors can be as simple as a checkbox input filed for a boolean, or as complex as a wysiwyg rich text editor
for a string representing html.
The type of editor greatly depends on the type of json data that it's connected to and the keywords
present in it's json schema.

Virtually all editors can have the following features:

- `title`: text for labels or legends
- `description`: text for descriptions
- `info`: `x-options` to configure extra info about the editor.
- `inputAttributes`: `x-options` to add or override input attributes if the editor has an input.

```json
{
  "type": "string",
  "title": "label text for this editor",
  "description": "description text for this editor",
  "x-options": {
    "info": {
      "variant": "modal",
      "title": "<h4>Info Button title</h4>",
      "content": "<p>Info button content</p>"
    },
    "inputAttributes": {
      "placeholder": "placeholder text"
    }
  }
}
```

### Array

A fieldset that can contain list of child editors. Each child editor correspond to an items in the array.
Child editors are placed from top to bottom and occupy the whole with available.

- Has buttons to add, delete and sort items.
- Can be collapsed and expanded.
- Items can be sort via drag and drop if Sortable.js is present and `"soratble": true` is set in `x-options`

```json
{
  "type": "array",
  "title": "Array",
  "description": "Arrays are used for ordered elements. In JSON, each element in an array may be of a different type.",
  "items": {
    "title": "I am an array item editor",
    "type": "string"
  },
  "x-options": {
    "sortable": true
  }
}
```

### Array checkboxes

A fieldset containing a list of enumerated editors. Each editor is represented by a checkboxes.
Works only if the items are of type `string`, `number` or `integer`.

```json
{
  "title": "Array",
  "description": "Array of unique values wich item types can be string, number or integer",
  "type": "array",
  "uniqueItems": true,
  "items": {
    "enum": [
      "value1",
      "value2"
    ]
  }
}
```

checkbox inline variant

```json
{
  "title": "Array",
  "description": "Array of unique values wich item types can be string, number or integer",
  "type": "array",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "enum": [
      "value1",
      "value2"
    ]
  },
  "x-options": {
    "format": "checkboxes-inline"
  }
}
```

### Array choices

A fieldset containing a list of enumerated editors. Each editor is represented by an item in the choices input.
Works only if the items are of type `string`, `number` or `integer`.
Choices.js musst be installed and available as `window.Choices` for this to work.

```json
{
  "title": "Choices",
  "description": "A vanilla JS customisable select box/text input plugin.",
  "type": "array",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "enum": [
      "US",
      "CA",
      "GB",
      "FR",
      "DE",
      "IT",
      "IN",
      "JP",
      "BR",
      "AU"
    ],
    "x-options": {
      "enumTitles": [
        "United States (US)",
        "Canada (CA)",
        "United Kingdom (GB)",
        "France (FR)",
        "Germany (DE)",
        "Italy (IT)",
        "India (IN)",
        "Japan (JP)",
        "Brazil (BR)",
        "Australia (AU)"
      ]
    }
  },
  "default": [
    "US"
  ],
  "minItems": 1,
  "x-options": {
    "format": "choices"
  }
}
```

### Array nav

A fieldset containing a list of enumerated editors. Each editor is represented by a checkboxes.
Works only if the items are of type `string`, `number` or `integer`.

options:

- `titleTemplate` is used to dynamically generate the nav items text. The parameters available are:
    - `{{ i0 }}` is the index of the item starting by 0.
    - `{{ i1 }}` is the index of the item starting by 1. More useful for end users.
    - `{{ value }}` The value of the items.

With vertical nav

```json
{
  "type": "array",
  "title": "People",
  "x-options": {
    "format": "nav-vertical",
    "titleTemplate": "{{ i1 }} {{ value.name }}"
  },
  "items": {
    "type": "object",
    "title": "Person",
    "properties": {
      "name": {
        "title": "Name",
        "type": "string"
      }
    }
  },
  "default": [
    {
      "name": "Albert"
    }
  ]
}
```

With horizontal nav

```json
{
  "type": "array",
  "title": "People",
  "x-options": {
    "format": "nav-horizontal",
    "titleTemplate": "{{ i1 }} {{ value.name }}"
  },
  "items": {
    "type": "object",
    "title": "Person",
    "properties": {
      "name": {
        "title": "Name",
        "type": "string"
      }
    }
  },
  "default": [
    {
      "name": "Albert"
    }
  ]
}
```

### Array table

A table where each item editor is rendered in a new table row. Useful for array of objects.

```json
{
  "title": "users",
  "type": "array",
  "x-options": {
    "sortable": true,
    "format": "table"
  },
  "items": {
    "type": "object",
    "title": "Person",
    "description": "User",
    "properties": {
      "name": {
        "type": "string",
        "title": "Name"
      }
    }
  },
  "default": [
    {
      "name": "Albert"
    },
    {
      "name": "Betti"
    }
  ]
}
```

### Boolean checkbox

Renders a type checkbox input

```json
{
  "type": "boolean",
  "title": "Boolean",
  "x-options": {
    "format": "checkbox"
  }
}
```

### Boolean radios

Renders two type radio inputs. The radio labels can be customized with the
`enumTitles` option.

```json
{
  "type": "boolean",
  "title": "Boolean",
  "x-options": {
    "format": "radios",
    "enumTitles": [
      "Yes",
      "No"
    ]
  }
}
```

Inline variant

```json
{
  "type": "boolean",
  "title": "Boolean",
  "x-options": {
    "format": "radios-inline",
    "enumTitles": [
      "Yes",
      "No"
    ]
  }
}
```

### Boolean select

Renders type select input with 2 options. The options labels can be customized with the
`enumTitles` option.

```json
{
  "type": "boolean",
  "title": "Boolean",
  "x-options": {
    "format": "select",
    "enumTitles": [
      "Yes",
      "No"
    ]
  }
}
```

### Number input

Renders type number input. Handles `number`and `integer` types.

```json
{
  "type": "number",
  "title": "Number"
}
```

### Number radios

Renders as many radio type inputs as values in the `enum` constraint. The radio labels can be customized with the
`enumTitles` option. Handles `number`and `integer` types.

```json
{
  "type": "number",
  "title": "Quantity",
  "enum": [
    0,
    1,
    2
  ],
  "x-options": {
    "format": "radios",
    "enumTitles": [
      "None",
      "One",
      "A pair"
    ]
  }
}
```

Inline variant

```json
{
  "type": "number",
  "title": "Quantity",
  "enum": [
    0,
    1,
    2
  ],
  "x-options": {
    "format": "radios-inline",
    "enumTitles": [
      "None",
      "One",
      "A pair"
    ]
  }
}
```

### Number select

Renders as many radio type inputs as values in the `enum` constraint. The options labels can be customized with the
`enumTitles` option. Handles `number`and `integer` types.

```json
{
  "type": "number",
  "title": "Quantity",
  "enum": [
    0,
    1,
    2
  ],
  "x-options": {
    "enumTitles": [
      "None",
      "One",
      "A pair"
    ]
  }
}
```

### Object

Renders a fieldset that will contain it properties editors.
The fieldset can be collapsed or expanded.

```json
{
  "type": "object",
  "title": "Login",
  "properties": {
    "email": {
      "title": "E-Mail",
      "type": "string",
      "format": "email"
    },
    "password": {
      "title": "Password",
      "type": "string",
      "minLength": 8
    }
  }
}
```

### Object grid

Renders a fieldset that will contain it properties editors and use a grid system to position
its property editors. The fieldset can be collapsed or expanded.

The object editor the option `grid` can be used to set a default columns size. It's child editors
can also have the option `grid`. The child option will override the parent option.

Child editors can have more options:

- `columns`: How many columns should the editor occupy.
- `offset`: How many columns should the editor be offset.
- `newRow`: Whether the editor should be put in a new row.

```json
{
  "type": "object",
  "title": "Login",
  "x-options": {
    "format": "grid",
    "grid": {
      "columns": 6
    }
  },
  "properties": {
    "email": {
      "title": "E-Mail",
      "type": "string",
      "format": "email",
      "x-options": {
        "grid": {
          "columns": 6
        }
      }
    },
    "password": {
      "title": "Password",
      "type": "string",
      "minLength": 8,
      "x-options": {
        "grid": {
          "columns": 6
        }
      }
    }
  }
}
```

### Object nav

Renders a fieldset that will contain it properties editors.
The fieldset can be collapsed or expanded.

With vertical nav

```json
{
  "x-options": {
    "format": "nav-vertical"
  },
  "type": "object",
  "title": "All Editors",
  "properties": {
    "personA": {
      "title": "Person A",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "age": {
          "type": "integer",
          "minimum": 0
        }
      }
    },
    "personB": {
      "title": "Person B",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "age": {
          "type": "integer",
          "minimum": 0
        }
      }
    }
  }
}
```

With horizontal nav

```json
{
  "x-options": {
    "format": "nav-horizontal"
  },
  "type": "object",
  "title": "All Editors",
  "properties": {
    "personA": {
      "title": "Person A",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "age": {
          "type": "integer",
          "minimum": 0
        }
      }
    },
    "personB": {
      "title": "Person B",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "age": {
          "type": "integer",
          "minimum": 0
        }
      }
    }
  }
}
```

### String input

Renders type text input.

```json
{
  "type": "string",
  "title": "String"
}
```

### String radios

Renders as many radio type inputs as values in the `enum` constraint. The radio labels can be customized with the
`enumTitles` option.

```json
{
  "type": "string",
  "title": "String radios",
  "enum": [
    "albert",
    "betti",
    "carl"
  ],
  "x-options": {
    "format": "radios",
    "enumTitles": [
      "Albert",
      "Betti",
      "Carl"
    ]
  }
}
```

Inline variant

```json
{
  "type": "string",
  "title": "String radios",
  "enum": [
    "albert",
    "betti",
    "carl"
  ],
  "x-options": {
    "format": "radios-inline",
    "enumTitles": [
      "Albert",
      "Betti",
      "Carl"
    ]
  }
}
```

### String select

Renders as many radio type inputs as values in the `enum` constraint. The options labels can be customized with the
`enumTitles` option.

```json
{
  "type": "string",
  "title": "String select",
  "enum": [
    "albert",
    "betti",
    "carl"
  ],
  "x-options": {
    "enumTitles": [
      "Albert",
      "Betti",
      "Carl"
    ]
  }
}
```

### String imask

Renders a masked text input using IMask.js if installed and available as `window.IMask`.


```json
{
  "title": "IBAN",
  "type": "string",
  "x-imask": {
    "mask": "DE00 0000 0000 0000 0000 00",
    "lazy": false
  }
}
```

This example feature configuration through the Jedi instance `settings` option due to the impossibility
of configuring the plugin with just JSON data. note that for custom options the prefix `x-` is still being used.

```json
{
  "title": "Date",
  "type": "string",
  "x-imask": {
    "x-settings": "imaskDate"
  }
}
```

```javascript
const options = {
  settings: {
    imaskDate: {
      mask: Date,
      min: new Date(1990, 0, 1),
      max: new Date(2020, 0, 1),
      lazy: false
    }
  }
}
```

## Annotations

### markdown
In schemas, `markdown` can be used in annotation to generate `html` content. This works only if
marked.js is installed and available as `window.marked`.

```json
{
  "type": "object",
  "title": "markdown annotations",
  "properties": {
    "name": {
      "title": "**markdown to html title**",
      "type": "string"
    }
  }
}
```

## License

Jedi is released under the MIT License, making it free for commercial and non-commercial use.

## Resources

* [Understanding JSON Schema](https://json-schema.org/understanding-json-schema)
* [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite)
