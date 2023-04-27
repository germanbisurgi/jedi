## Todo

- future features:
    - theme checkbox
    - all themes extend from barebones
    - refactore path to look like '#/something/other'
    - ui required (not json required)
    - additionalProperties
    - readonly
    - refactor description and titles (duplicated code)
    - format categories
    - grid
    - plugins examples
    - collapse
    - array tabs
    - edit object values
    - edit array values
    - option exclude
    - filter by field
    - icons

- bugs:
    - object set value
    - when adding properties in meta schema the non required properties should be unchecked

- RefParser:
    - max deep ref parser
    - dereference schema first and the initialize editor

- instance:
    - additionalProperties
    - readonly
    - array enums
    - array tuple 

- e2e:
    - additionalProperties
    - array move up and down
    - sr-only titles
    - multiple
    
- unit:
    - 1 error: properties, patternProperties, additionalProperties interaction › property validates property
    
- validation
    - additionalProperties
    - display single error messages also when there are multiple?
    - use template literals in errors
    - contains
    - minContains
    - maxContains
    - prefixItems
    - propertyNames
    - formats
    - if
    - type

## Resources
* [Understanding JSON Schema](http://json-schema.org/understanding-json-schema/index.html)
* [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite)
