## Todo

- leverage editor addEventListeners method
- dynamically register icon libs in playground
- active item after array add/move/etc (min an max items) + test
- iconLib names all lowercase without separators
- array copy
- resolvers in editor
- option hideButton labels
- better editor type detection with specialized keywords
- fix destroy whole editor console error
- themes should be nested into editors and have resolver
- refactor getSchemaOption return

- If-Then-Else (7)
- dependencies (4) and dependentRequired / dependentSchemas (19)
- const (6)
- contains, minContains, maxContains (19)
- items in v4 behaves like prefixItems (19)
- propertyNames (6)
- Unevaluated Properties (19)
- In JSON Schema Draft 4, exclusiveMinimum and exclusiveMaximum 
- $schema
- id (4) and $id (6)
- dialects support tables


- drafts
- collapse card
- set first enum value as default in editor
- jsdoc
- private methods
- properties as dropdown
- array grid
- array table
- remember saved page
- header: false
- title: false
- schema helpers instead of schema object
- nested if-then-else
- allOf if-then-else

- readonly, should not set value?

- documentation mode

- arrays of objects test
- showErrors options
- arrays of arrays test
- arrays of multiples test
- aria attributes
- textarea standalone editor
- array accordion
- error messages texts
- use names options
- ui required (not json required)
- plugins examples
- edit object values
- edit array values
- filter by field (using tags)
- formats
- array enums
- translations
- use schema to evaluate annotations and options
- validation without Jedi creation
- allOf, oneOf and anyOf combination


```javascript
const drafts = {
  "draft-04": [
    "$schema",
    "id",
    "$ref",
    "title",
    "description",
    "type",
    "enum",
    "definitions",
    "properties",
    "patternProperties",
    "additionalProperties",
    "required",
    "dependencies",
    "items",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "minLength",
    "maxLength",
    "pattern",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "allOf",
    "anyOf",
    "oneOf",
    "not"
  ],
  "draft-06": [
    "$id",
    "$comment",
    "default",
    "const",
    "contains",
    "propertyNames",
    "if",
    "then",
    "else"
  ],
  "draft-07": [
    "$vocabulary",
    "$recursiveAnchor",
    "readOnly",
    "writeOnly",
    "contentMediaType",
    "contentEncoding",
    "if",
    "then",
    "else",
    "format"
  ],
  "draft-2019-09": [
    "dependentSchemas",
    "dependentRequired",
    "prefixItems",
    "unevaluatedItems",
    "unevaluatedProperties"
  ],
  "draft-2020-12": [
    "$dynamicAnchor",
    "$dynamicRef",
    "$dynamicDefs",
    "$recursiveRef",
    "$recursiveAnchor"
  ],
  "draft-2021-03": []
}
```
