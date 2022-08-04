## fix

- getChildEditor(), removeChildEditor() [array and object]
- array refreshUI with anyOf
- if type is undefined guess type from value (objects?)

##json-schema
- when to show validation errors
- validators: allOf, anyOf, oneOf, not, disallow, items, maxProperties, properties, patternProperties, propertyNames, additionalProperties, dependencies 
- add property key input
- array enums
- load array of schemas
- array tuple (no type or arrays of types?)
- enum must have at least 1 item
- schema description
- objects and arrays hidden inputs
- refactor arrays and objects: onChildEditorChange() and getValue()

## custom
- container head, body and footer
- integration with css libs (multiple themes?)
- plugins
- enable / disable
- read only
- label or legend for multiple / any of / no type
- errors container and position (aka object)
- sanitize check before set value
- dry
- multiple control labels
- accessibility states
- name attributes vs configurable single hidden input json for requests
- tests

## tests

- default value
- getValue
- setValue
- format
- enums
- validation errors
