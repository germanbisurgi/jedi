[![Tests](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/germanbisurgi/jedi/actions/workflows/main.yml)

# Jedi - JSON Editing and Data Integrity

Generates forms from JSON schemas. Can be used in backend to validate JSON data too.

Check Out the [PLAYGROUND](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5)

# Table of Contents

- [Key Features](#key-features)
- [Getting Started](#getting-started)
    - [As a Validator](#as-a-validator)
    - [As an Editor](#as-an-editor)
    - [Instance Methods](#instance-methods)
    - [Instance event listeners](#instance-event-listeners)
- [RefParser](#refParser)
- [Instance Options](#instance-options)
- [Editors](#editors)
    - [Array](#array-editors)
      - [Array](#array-list)
      - [Array checkboxes](#array-checkboxes)
      - [Array choices](#array-choices)
      - [Array nav](#array-nav)
      - [Array table](#array-table)
    - [Boolean](#boolean-editors)
      - [Boolean checkbox](#boolean-checkbox)
      - [Boolean radios](#boolean-radios)
      - [Boolean select](#boolean-select)
    - [Number](#number-editors)
      - [Number input](#number-input)
      - [Number radios](#number-radios)
      - [Number select](#number-select)
      - [Number select](#number-select)
    - [Object](#object-editors)
      - [Object select](#object)
      - [Object grid](#object-grid)
      - [Object nav](#object-nav)
    - [String](#string-editors)
      - [String input](#string-input)
      - [String radios](#string-radios)
      - [String select](#string-select)
      - [String textarea](#string-textarea)
      - [String IMask](#string-imask)
    - [Null](#null-editors)
      - [Null](#null)
- [Language and Translations](#language-and-translations)
- [Annotations](#annotations)
  - [Markdown](#markdown)
- [Schema Options](#schema-options)
    - [x-addPropertyContent](#x-addPropertyContent)
    - [x-arrayAdd](#x-arrayAdd)
    - [x-arrayAddContent](#x-arrayAddContent)
    - [x-arrayDelete](#x-arrayDelete)
    - [x-arrayDeleteContent](#x-arrayDeleteContent)
    - [x-arrayDragContent](#x-arrayDragContent)
    - [x-arrayMove](#x-arrayMove)
    - [x-arrayMoveDownContent](#x-arrayMoveDownContent)
    - [x-arrayMoveUpContent](#x-arrayMoveUpContent)
    - [x-assertFormat](#x-assertformat)
    - [x-collapseToggleContent](#x-collapseToggleContent)
    - [x-containerAttributes](#x-containerAttributes)
    - [x-deactivateNonRequired](#x-deactivateNonRequired)
    - [x-enableCollapseToggle](#x-enableCollapseToggle)
    - [x-enforceConst](#x-enforceconst)
    - [x-enforceEnum](#x-enforceenum)
    - [x-enumTitles](#x-enumtitles)
    - [x-format](#x-format)
    - [x-grid](#x-grid)
    - [x-hidden](#x-hidden)
    - [x-info](#x-info)
    - [x-inputAttributes](#x-inputattributes)
    - [x-messages](#x-messages)
    - [x-propertiesToggleContent](#x-propertiesToggleContent)
    - [x-showErrors](#x-showerrors)
    - [x-sortable](#x-sortable)
    - [x-startCollapsed](#x-startCollapsed)
    - [x-switcherTitle](#x-switchertitle)
    - [x-titleHidden](#x-titlehidden)
    - [x-titleIconClass](#x-titleiconclass)
    - [x-titleTemplate](#x-titleTemplate)
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

// emitted when a new item to an array instance
jedi.editor.on('item-add', (initiator, newInstance) => {

})

// emitted when an item is removed from an array instance
jedi.editor.on('item-delete', (initiator) => {

})

// emitted when a new item is move up or down in an array instance
jedi.editor.on('item-move', (initiator) => {

})
```

The argument `ìnitiator`can have one of the two values:
- `"api"`: indicates that the change came from a call of a method like `setValue()` or from internal mechanism of this library.
- `"user"`: indicates that the change came from a user interaction.


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
      <td><code>language</code></td>
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
      <td><code>btnContents</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>If buttons texts should be displayed</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>btnIcons</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>If buttons icons should be displayed</td>
      <td>no</td>
    </tr>
    <tr align="left">
      <td><code>enforceEnum</code></td>
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
    <tr align="left">
      <td><code>arrayDelete</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>If array delete buttons should be displayed</td>
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>arrayMove</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>If array move up and move down buttons should be displayed</td>
      <td>yes</td>
    </tr>
    <tr align="left">
      <td><code>arrayAdd</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>If array add buttons should be displayed</td>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Editors

An editor is a UI that allows users to input data and finally edit the relative json instance.
Editors can be as simple as a checkbox input filed for a boolean, or as complex as a wysiwyg rich text editor
for a string representing html.
The type of editor greatly depends on the type of json data that it's connected to and the keywords
present in it's json schema.

Virtually all editors can have the following features:

- [x-assertFormat](#x-assertFormat)
- [x-containerAttributes](#x-containerAttributes)
- [x-enforceConst](#x-enforceconst)
- [x-enforceEnum](#x-enforceEnum)
- [x-hidden](#x-hidden)
- [x-info](#x-info)
- [x-inputAttributes](#x-inputattributes) (if any)
- [x-messages](#x-messages)
- [x-showErrors](#x-showerrors)
- [x-titleHidden](#x-titlehidden)
- [x-titleIconClass](#x-titleiconclass)

```json
{
  "type": "string",
  "title": "label text for this editor",
  "description": "description text for this editor",
  "x-info": {
    "variant": "modal",
    "title": "<h4>Info Button title</h4>",
    "content": "<p>Info button content</p>"
  },
  "x-inputAttributes": {
    "placeholder": "placeholder text"
  }
}
```

### Array editors

Options:

- [x-arrayAdd](#x-arrayAdd)
- [x-arrayAddContent](#x-arrayAddContent)
- [x-arrayDelete](#x-arrayDelete)
- [x-arrayDeleteContent](#x-arrayDeleteContent)
- [x-arrayDragContent](#x-arrayDragContent)
- [x-arrayMove](#x-arrayMove)
- [x-arrayMoveDownContent](#x-arrayMoveDownContent)
- [x-arrayMoveUpContent](#x-arrayMoveUpContent)
- [x-collapseToggleContent](#x-collapseToggleContent)
- [x-enableCollapseToggle](#x-enableCollapseToggle)
- [x-sortable](#x-sortable)
- [x-startCollapsed](#x-startCollapsed)
- [x-titleTemplate](#x-titleTemplate)

#### Array list

A fieldset that can contain list of editors. Each child editor correspond to an items in the array.
Child editors are placed from top to bottom.

```json
{
  "type": "array",
  "title": "Array",
  "description": "Arrays are used for ordered elements. In JSON, each element in an array may be of a different type.",
  "items": {
    "title": "I am an array item editor",
    "type": "string"
  }
}
```

#### Array checkboxes

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
  "x-format": "checkboxes-inline",
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
  }
}
```

#### Array choices

A fieldset containing a list of enumerated editors. Each editor is represented by an item in the choices input.
Works only if the items are of type `string`, `number` or `integer`.
Choices.js musst be installed and available as `window.Choices` for this to work.

```json
{
  "x-format": "choices",
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
    "x-enumTitles": [
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
  },
  "default": [
    "US"
  ],
  "minItems": 1
}
```

#### Array nav

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
  "x-format": "nav-vertical",
  "x-titleTemplate": "{{ i1 }} {{ value.name }}",
  "type": "array",
  "title": "People",
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
  "x-format": "nav-horizontal",
  "x-titleTemplate": "{{ i1 }} {{ value.name }}",
  "type": "array",
  "title": "People",
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

#### Array table

A table where each item editor is rendered in a new table row.

```json
{
  "x-format": "table",
  "title": "users",
  "type": "array",
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

### Boolean editors

#### Boolean checkbox

Renders a type checkbox input

```json
{
  "x-format": "checkbox",
  "type": "boolean",
  "title": "Boolean"
}
```

#### Boolean radios

Renders two type radio inputs. The radio labels can be customized with the
`enumTitles` option.

```json
{
  "x-format": "radios",
  "type": "boolean",
  "title": "Boolean",
  "x-enumTitles": [
    "Yes",
    "No"
  ]
}
```

Inline variant

```json
{
  "x-format": "radios-inline",
  "type": "boolean",
  "title": "Boolean",
  "x-enumTitles": [
    "Yes",
    "No"
  ]
}
```

#### Boolean select

Renders type select input with 2 options. The options labels can be customized with the
`enumTitles` option.

```json
{
  "x-format": "select",
  "type": "boolean",
  "title": "Boolean",
  "x-enumTitles": [
    "Yes",
    "No"
  ]
}
```

### Number editors

#### Number input

Renders type number input. Handles `number`and `integer` types.

```json
{
  "type": "number",
  "title": "Number"
}
```

#### Number radios

Renders as many radio type inputs as values in the `enum` constraint. The radio labels can be customized with the
`enumTitles` option. Handles `number`and `integer` types.

```json
{
  "x-format": "radios",
  "type": "number",
  "title": "Quantity",
  "enum": [
    0,
    1,
    2
  ],
  "x-enumTitles": [
    "None",
    "One",
    "A pair"
  ]
}
```

Inline variant

```json
{
  "x-format": "radios-inline",
  "type": "number",
  "title": "Quantity",
  "enum": [
    0,
    1,
    2
  ],
  "x-enumTitles": [
    "None",
    "One",
    "A pair"
  ]
}
```

#### Number select

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
  "x-enumTitles": [
    "None",
    "One",
    "A pair"
  ]
}
```

#### Number Raty

Renders a star rating input using Raty.js if installed and available as `window.Raty`.

```json
{
  "title": "Raty",
  "type": "number",
  "description": "Raty - A Star Rating Plugin",
  "default": 3,
  "minimum": 0.5,
  "x-raty": {
    "half": true,
    "starType": "i"
  }
}
```

### Object editors

options:

- [x-addPropertyContent](#x-addPropertyContent)
- [x-collapseToggleContent](#x-collapseToggleContent)
- [x-deactivateNonRequired](#x-deactivateNonRequired)
- [x-enableCollapseToggle](#x-enableCollapseToggle)
- [x-propertiesToggleContent](#x-propertiesToggleContent)
- [x-startCollapsed](#x-startCollapsed)
- [x-titleTemplate](#x-titleTemplate)

#### Object

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

#### Object grid

Renders a fieldset that will contain it properties editors and use a grid system to position
its property editors. The fieldset can be collapsed or expanded.
Property editors can have more options:

- `columns`: How many columns should the editor occupy.
- `offset`: How many columns should the editor be offset.
- `newRow`: Whether the editor should be put in a new row.

```json
{
  "x-format": "grid",
  "type": "object",
  "title": "Login",
  "properties": {
    "email": {
      "title": "E-Mail",
      "type": "string",
      "format": "email",
      "x-grid": {
        "columns": 6
      }
    },
    "password": {
      "title": "Password",
      "type": "string",
      "minLength": 8,
      "x-grid": {
        "columns": 6
      }
    }
  }
}
```

#### Object nav

Renders a fieldset that will contain it properties editors.
The fieldset can be collapsed or expanded.

With vertical nav

```json
{
  "x-format": "nav-vertical",
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
  "x-format": "nav-horizontal",
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

### String editors

#### String input

Renders type text input.

```json
{
  "type": "string",
  "title": "String"
}
```

#### String radios

Renders as many radio type inputs as values in the `enum` constraint. The radio labels can be customized with the
`enumTitles` option.

```json
{
  "x-format": "radios",
  "type": "string",
  "title": "String radios",
  "enum": [
    "albert",
    "betti",
    "carl"
  ],
  "x-enumTitles": [
    "Albert",
    "Betti",
    "Carl"
  ]
}
```

Inline variant

```json
{
  "x-format": "radios-inline",
  "type": "string",
  "title": "String radios",
  "enum": [
    "albert",
    "betti",
    "carl"
  ],
  "x-enumTitles": [
    "Albert",
    "Betti",
    "Carl"
  ]
}
```

#### String select

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
  "x-enumTitles": [
    "Albert",
    "Betti",
    "Carl"
  ]
}
```

#### String textarea

Renders textarea input.

```json
{
  "x-format": "textarea",
  "type": "string",
  "title": "String"
}
```

#### String awesomplete

Renders a autocomplete featured text input using Awesomplete.js if installed and available as `window.Awesomplete`.

```json
{
  "title": "Awesomplete",
  "type": "string",
  "description": "Awesomplete is an ultra lightweight, customizable, simple autocomplete widget with zero dependencies, built with modern standards for modern browsers.",
  "default": "Awesomplete default",
  "minLength": 1,
  "x-awesomplete": {
    "list": [
      "JavaScript",
      "Java",
      "Python",
      "Ruby",
      "C++",
      "C#",
      "PHP",
      "Swift",
      "Go",
      "Kotlin"
    ],
    "minChars": 1,
    "maxItems": 5,
    "autoFirst": true
  }
}
```

#### String flatpickr

Renders a datetime picker using flatpickr.js if installed and available as `window.flatpickr`.

```json
{
  "title": "Flatpickr",
  "type": "string",
  "description": "Flatpickr is a lightweight and powerful datetime picker.",
  "default": "2024-08-27",
  "minLength": 3,
  "x-flatpickr": {}
}
```

#### String imask

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

#### String Jodit

Renders a WYSIWYG editor using Jodit.js if installed and available as `window.Jodit`.

```json
{
  "title": "Jodit",
  "type": "string",
  "description": "Jodit - Best WYSIWYG Editor for You.",
  "default": "Jodit default",
  "minLength": 20,
  "x-jodit": {}
}
```

#### String Quill

Renders a WYSIWYG editor using Quill.js if installed and available as `window.Quill`.

```json
{
  "title": "Quill",
  "type": "string",
  "description": "Quill is a modern WYSIWYG editor built for compatibility and extensibility.",
  "default": "Quill default",
  "minLength": 3,
  "x-quill": {
    "theme": "snow"
  }
}
```

### Null editors

#### Null

No input is rendered.

```json
{
  "type": "null",
  "title": "Null"
}
```

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
      errorUniqueItems: 'Muss eindeutige Elemente haben.',
      arrayDelete: 'Element löschen',
      arrayMoveUp: 'Nach oben verschieben',
      arrayMoveDown: 'Nach unten verschieben',
      arrayDrag: 'Ziehen',
      arrayAdd: 'Element hinzufügen',
      arrayConfirmDelete: 'Möchten Sie dieses Element wirklich löschen?',
      objectAddProperty: 'Eigenschaft hinzufügen',
      objectPropertyAdded: 'Feld wurde dem Formular hinzugefügt',
      objectPropertyRemoved: 'Feld wurde aus dem Formular entfernt',
      propertiesToggle: 'Eigenschaften',
      collapseToggle: 'Einklappen'
    }
  }
})
```

The text between brackets like `{{ minimum }}` or `{{ minLength }}` are templates.
This templates will be replaced dynamically with values specified in constraints.

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

## Schema options

The `x-` or `x-options` [custom annotation](https://json-schema.org/blog/posts/custom-annotations-will-continue#what's-the-solution)
can be used in JSON Schemas to changes how instances and editors behave.
Schema `x-` options override global options.

```json
{
  "title": "Message",
  "type": "string",
  "x-showErrors": "always"
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
  "x-enumTitles": [
    "Black",
    "White"
  ]
}
```

### `x-addPropertyContent`

- Type: `boolean`
- Default: -
- Description: Text content for "add property" buttons.

### `x-arrayAdd`

- Type: `boolean`
- Default: `true`
- Description: If array add buttons should be displayed.

### `x-arrayAddContent`

- Type: `boolean`
- Default: -
- Description: Text content for array "add" buttons.

### `x-arrayDelete`

- Type: `boolean`
- Default: `true`
- Description: If array delete buttons should be displayed.

### `x-arrayDeleteContent`

- Type: `boolean`
- Default: -
- Description: Text content for array "delete" buttons.

### `x-arrayDragContent`,

- Type: `boolean`
- Default: -
- Description: Text content for array "drag" buttons.

### `x-arrayMove`

- Type: `boolean`
- Default: `true`
- Description: If array move up and move down buttons should be displayed.

### `x-arrayMoveDownContent`

- Type: `boolean`
- Default: -
- Description: Text content for array "move down" buttons.

### `x-arrayMoveUpContent`

- Type: `boolean`
- Default: -
- Description: Text content for array "move up" buttons.

### `x-assertFormat`

- Type: `boolean`
- Default: `"false"`
- Options: `"never"`, `"change"`, `"always"`
- Description: Treats `"format"` as a validator rather than just an annotation.

Treat `"format": "email"` as a constraint keyword instead of an annotation.

```json
{
  "title": "Message",
  "type": "string",
  "format": "email",
  "x-assertFormat": true
}
```

### `x-collapseToggleContent`

- Type: `boolean`
- Default: -
- Description: Text content for "collapse" buttons.

### `x-containerAttributes`

- Type: `object`
- Description: Editors container HTML attributes can be set using the `x-containerAttributes` option. Attributes such as `class` or `data-*` will be applied to the container element.

```json
{
  "title": "`x-containerAttributes`",
  "type": "object",
  "description": "Editors container HTML attributes can be set using the `x-containerAttributes` option. Attributes such as `class` or `data-*` will be applied to the container element.",
  "x-containerAttributes": {
    "class": "a-class another-class",
    "data-custom": "custom-data"
  }
}
```

### `x-deactivateNonRequired`

- Type: `boolean`
- Description: Whether the editor should deactivate (hide) or activate (show) non required properties. Works on only with `object` type editors.

Only the property `name` is active

```json
{
  "title": "Person",
  "type": "object",
  "x-deactivateNonRequired": true,
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

### `x-enableCollapseToggle`

- Type: `boolean`
- Description: Display a collapse button used to collapse or expand editors that support collapse like `object` and `arrays`

### `x-enforceConst`

- Type: `boolean`
- Default: `true`
- Description: Value will remain whatever is defined in schema `"const"`.

Default value for this editor will be `"ff0000"`.

```json
{
  "title": "Color",
  "type": "string",
  "const": "ff0000",
  "x-enforceConst": true
}
```

### `x-enforceEnum`

- Type: `boolean`
- Default: `true`
- Description: Whether the editor initial value will be the first item in the `"enum"`.

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
  "x-enforceEnum": false
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
  "x-enforceEnum": true
}
```

### `x-enumTitles`

- Type: `string[]`
- Description: Used to display user-friendly labels in the editor instead of those listen in `"enum"`.

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
  "x-enumTitles": [
    "Red",
    "Green",
    "Blue"
  ]
}
```

### `x-format`

- Type: `string`
- Description: Determines which editor UI will be used to edit the json einstance.

Use radios editor to display color names instead of hex codes.

```json
{
  "title": "Color",
  "type": "string",
  "enum": [
    "Red",
    "Green",
    "Blue"
  ],
  "x-format": "radios"
}
```

### `x-grid`

- Type: `object`
- Description: A configuration object to determine the position of the property editor in the parent's grid.
- Options:
    - `columns`: How many columns should the editor occupy.
    - `offset`: How many columns should the editor be offsetted.
    - `newRow`: Whether the editor should be put in a new row.
- Examples:
    - [editors/object-grid](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-grid&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnum=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)

### `x-hidden`

- Type: `boolean`
- Description: Editors can be hidden using the `x-hidden` option. When set to `true`, the editor is hidden.

### `x-info`

- Type: `object`
- Description: Used to display extra information. If `markdown` is used to generate `html` content, it can be sanitized by DOMPurify is available, otherwise only the textContent will be displayed without any HTML tags.
- Options:
    - `variant`: `"modal"`
    - `title`: Plain text or `markdown`.
    - `content`:  Plain text or `markdown`.

Displays an info button right after the title, that opens a modal with title and content.

```json
{
  "title": "Message",
  "type": "string",
  "x-info": {
    "variant": "modal",
    "title": "### Info Button title",
    "content": "Info button content"
  }
}
```

### `x-inputAttributes`

- Type: `object`
- Description: Used to set attributes for the editor input.

Add `placeholder` attribute to textarea.

```json
{
  "title": "Message",
  "type": "string",
  "x-format": "textarea",
  "x-inputAttributes": {
    "placeholder": "Your message here..."
  }
}
```

### `x-messages`

- Type: `object` | `string[]`
- Description: Validation error messages can be customized using the `x-messages` option in the schema.

Validation error messages can be customized using the `x-messages` option in the schema. When defined as an object, messages can be applied by constraint (e.g., `minLength`, `const`).

```json
{
  "title": "`x-messages`",
  "description": "Validation error messages can be customized using the `x-messages` option in the schema. When defined as an object, messages can be applied by constraint (e.g., `minLength`, `const`).",
  "type": "object",
  "properties": {
    "string": {
      "type": "string",
      "minLength": 5,
      "const": "locoloco",
      "x-messages": {
        "minLength": "Need at least 5 sparks of brilliance.",
        "const": "Only 'locoloco' unlocks the magic here."
      }
    }
  }
}
```

Validation error messages can be customized using the `x-messages` option in the schema. When defined as an object, messages can be applied per language (e.g., `en`, `fr`) and constraint (e.g., `minLength`, `const`).

```json
{
  "title": "`x-messages`",
  "description": "Validation error messages can be customized using the `x-messages` option in the schema. When defined as an array, messages are defined per validation rule (e.g., `minLength`, `const`) and per language (e.g., `en`, `fr`).",
  "type": "object",
  "properties": {
    "string": {
      "type": "string",
      "minLength": 5,
      "const": "locoloco",
      "x-messages": {
        "en": {
          "minLength": "Need at least 5 sparks of brilliance.",
          "const": "Only 'locoloco' unlocks the magic here."
        }
      }
    }
  }
}
```

When defined as an array, the messages apply to all validation rules for the property.

```json
{
  "title": "`x-messages`",
  "description": "Validation error messages can be customized using the `x-messages` option in the schema. When defined as an array, the messages apply to all validation rules for the property.",
  "type": "object",
  "properties": {
    "string": {
      "type": "string",
      "minLength": 5,
      "x-messages": [
        "5 chars please."
      ]
    }
  }
}
```

### `x-propertiesToggleContent`

- Type: `boolean`
- Default: -
- Description: Text content for "properties" buttons.

### `x-showErrors`

- Type: `string`
- Default: `"change"`
- Options: `"never"`, `"change"`, `"always"`
- Description: Determines when to display validation errors.

Always show errors for this editor even if the value didn't change.

```json
{
  "title": "Message",
  "type": "string",
  "x-showErrors": "always"
}
```

### `x-sortable`

- Type: `boolean`
- Default: `false`
- Description: Items can be sort via drag and drop if Sortable.js.

### `x-startCollapsed`

- Type: `boolean`
- Description: Whether the editor should start expanded or collapsed. Works on editors that support collapse like `object` and `arrays`

### `x-switcherTitle`

- Type: `string`
- Default: property name or `"title"`.
- Description: The text displayed in the multiple editor switcher to select this sub-schema editor.

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
      "x-switcherTitle": "I want to pay with Credit Card"
    },
    {
      "title": "Email",
      "type": "string",
      "x-switcherTitle": "I want to pay with PayPal"
    }
  ]
}
```

### `x-titleHidden`

- Type: `boolean`
- Default: `false`
- Description: Hides the editor title.

### `x-titleIconClass`

- Type: `string`
- Description: Icon class to use in titles if using any.

Show a fontawesome envelope icon in the title.

```json
{
  "title": "Message",
  "type": "string",
  "x-titleIconClass": "fas fa-envelope"
}
```

### `x-titleTemplate`

- Type: `string`
- Description: A template to form titles dynamically.
- Examples:
    - [editors/object-nav-vertical](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-nav-vertical&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnum=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)
    - [editors/object-nav-horizontal](https://germanbisurgi.github.io/jedi/index.html?theme=bootstrap5&iconLib=fontawesome5&example=editors/object-nav-horizontal&showErrors=change&assertFormat=false&mergeAllOf=false&enforceEnum=true&includeTitlesInMessages=false&enablePropertiesToggle=true&enableCollapseToggle=true)


## License

Jedi is released under the MIT License, making it free for commercial and non-commercial use.

## Resources

* [Understanding JSON Schema](https://json-schema.org/understanding-json-schema)
* [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite)
