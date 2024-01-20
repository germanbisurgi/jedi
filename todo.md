## Todo

- whether or not to create properties by default
- instances active state should be tracked only in object instances (activeProperties?)
- async loading of schemas with fetch. Also to make it cross platform (node and browser). Or make interface
- position and dry of errors (not, patternProperties)
- multiple: switch only if fittest editor has no errors?
- disabled states with classes too
- items validation message
- option "multiple": true/false for schemas with anyOf and oneOf, if-then-else, allOf
- fix recursive problem with meta schema
- Configurable i18n via options
- multiple error messages (oneOf, anyOf, not, any, type undefined, etc)
- prefixItems test and error messages
- additionalProperties false by default in UI
- actions activate / deactivate
- avoid floating elements (actions)
- scope switcher options and titles in editors and not in instances
- resolvers in editor
- template / titles / descriptions as html with xss lib option
- active item after array add/move/etc (min an max items) + test
- active item after object add/
- option hideButton labels
- fix destroy whole editor console error

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
- array grid
- array table
- header: false
- title: false
- nested if-then-else
- allOf if-then-else
- readonly, should not set value?
- documentation mode
- showErrors options as string enum
- aria attributes
- use names options
- plugins examples
- edit object values
- edit array values
- filter by field (using tags)
- formats
- use schema to evaluate annotations and options


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