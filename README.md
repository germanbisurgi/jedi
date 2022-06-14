## About The Project

A lite clone of the mighty [json-editor](https://github.com/json-editor/json-editor)

## Getting Started

```html
<form action="">
    <div id="jedi-container"></div>
</form>

<script src="./path/to/jedi.js"></script>

<script>
  const jedi = new Jedi({
    container: document.querySelector('#jedi-container'),
    schema: {
      "type": "object",
      "title": "root",
      "properties": {
        "boolean": {
          "type": "boolean",
          "title": "default"
        },
        "string": {
          "type": "string",
          "title": "default"
        },
        "number": {
          "type": "number",
          "title": "number"
        },
        "integer": {
          "type": "integer",
          "title": "integer"
        },
        "array": {
          "type": "array",
          "title": "strings color",
          "default": [
            "#6d80dd",
            "#b80f0f",
            "#280606"
          ],
          "items": {
            "type": "string",
            "title": "color",
            "format": "color"
          }
        }
      }
    }
  })
</script>
```

## Resources

* [Understanding JSON Schema](http://json-schema.org/understanding-json-schema/index.html)
* [json-editor/json-editor](https://github.com/json-editor/json-editor)
