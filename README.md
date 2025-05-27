[![Tests](https://github.com/germanbisurgi/jedison/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/germanbisurgi/jedison/actions/workflows/main.yml)

# Jedison

## 🚀 Quick Links

🎮 **[Playground](https://germanbisurgi.github.io/jedison/index.html?theme=bootstrap5)**  
Test and experiment with configuration options in a live environment.

📖 **[Documentation](https://germanbisurgi.github.io/jedison-docs/)**  
Learn how to use Jedison with detailed guides and interactive examples.

## What is Jedison

Jedison helps you validate JSON data on the backend and generate interactive forms from JSON Schemas on the frontend.

One common workflow looks like this:

1. Your backend sends the JSON Schema to the client
2. Jedison automatically renders a complete form based on the schema
3. Users interact with the form while getting instant client-side validation
4. Validated data gets submitted back to your server
5. The same schema validates the data again server-side for security

![Jedison use diagram](/mermaid-flow-transparent.svg)

But Jedison is flexible enough to support other patterns too - you might use it for:

- Standalone client-side forms without server validation
- Pure server-side JSON validation in your backend services
- Hybrid approaches where different parts of the schema are used in different contexts

## Install

### Using ES Module

npm
```bash
npm install jedison
```

yarn
```bash
yarn add jedison
```

```html
<div id="jedison-container"></div>

<script type="module">
    import Jedison from 'jedison'

    const jedison = new Jedison.Create({
        container: document.querySelector('#jedison-container'),
        theme: new Jedison.Theme(),
        schema: {
            "title": "Person",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The person's  name."
                },
                "age": {
                    "description": "Age in years which must be equal to or greater than zero.",
                    "type": "integer",
                    "minimum": 0
                }
            }
        }
    })
</script>
```

### Using fromCDN

```html
<script src="https://cdn.jsdelivr.net/npm/jedison@0.1.1/dist/umd/jedison.umd.js"></script>

<div id="jedison-container"></div>

<script>
    const jedison = new Jedison.Create({
        container: document.querySelector('#jedison-container'),
        theme: new Jedison.Theme(),
        schema: {
            "title": "Person",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The person's  name."
                },
                "age": {
                    "description": "Age in years which must be equal to or greater than zero.",
                    "type": "integer",
                    "minimum": 0
                }
            }
        }
    })
</script>
```

## License

Jedison is released under the MIT License, making it free for commercial and non-commercial use.

## Resources

* [Understanding JSON Schema](https://json-schema.org/understanding-json-schema)
* [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite)
