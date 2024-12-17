function getCircularReplacer() {
  const ancestors = [];
  return function(key, value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    while (ancestors.length > 0 && ancestors.at(-1) !== this) {
      ancestors.pop();
    }
    if (ancestors.includes(value)) {
      return "[Circular]";
    }
    ancestors.push(value);
    return value;
  };
}
function clone(thing) {
  if (typeof thing === "undefined") {
    return void 0;
  }
  return JSON.parse(JSON.stringify(thing, getCircularReplacer()));
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
function pathToAttribute(path) {
  return replaceAll(replaceAll(path, "#", "root"), "/", "-");
}
function hasOwn(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function sortObject(obj) {
  return Object.keys(obj).sort().reduce((result, key) => {
    result[key] = obj[key];
    return result;
  }, {});
}
function equal(a, b) {
  if (isObject(a) && isObject(b)) {
    a = sortObject(a);
    b = sortObject(b);
  }
  return JSON.stringify(a) === JSON.stringify(b);
}
function different(a, b) {
  return !equal(a, b);
}
function isNull(value) {
  return value === null;
}
function isSet(value) {
  return typeof value !== "undefined";
}
function notSet(value) {
  return typeof value === "undefined";
}
function isNumber(value) {
  return typeof value === "number";
}
function isInteger(value) {
  return isNumber(value) && value === Math.floor(value);
}
function isString(value) {
  return typeof value === "string";
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return !isNull(value) && !isArray(value) && typeof value === "object";
}
function getType(value) {
  let type2 = "any";
  if (isNumber(value)) {
    type2 = isInteger(value) ? "integer" : "number";
  } else if (isString(value)) {
    type2 = "string";
  } else if (isBoolean(value)) {
    type2 = "boolean";
  } else if (isArray(value)) {
    type2 = "array";
  } else if (isNull(value)) {
    type2 = "null";
  } else if (isObject(value)) {
    type2 = "object";
  }
  return type2;
}
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {
            [key]: {}
          });
        }
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    });
  }
  return mergeDeep(target, ...sources);
}
const overwriteExistingProperties = (obj1, obj2) => {
  Object.keys(obj2).forEach((key) => {
    if (key in obj1) {
      if (typeof obj1[key] === typeof obj2[key]) {
        if (isObject(obj1[key]) && isObject(obj2[key])) {
          overwriteExistingProperties(obj1[key], obj2[key]);
        } else {
          obj1[key] = obj2[key];
        }
      }
    }
  });
  return obj1;
};
function getValueByJSONPath(data, path) {
  const keys = path.split(".");
  let value = data;
  for (const key of keys) {
    if (Array.isArray(value) && /^\d+$/.test(key)) {
      const index2 = parseInt(key);
      if (index2 >= 0 && index2 < value.length) {
        value = value[index2];
      } else {
        return void 0;
      }
    } else if (hasOwn(value, key)) {
      value = value[key];
    } else {
      return void 0;
    }
  }
  return value;
}
function compileTemplate(template, data) {
  return template.replace(/{{(.*?)}}/g, (match) => {
    match = match.replace(/\s/g, "");
    const path = match.split(/{{|}}/)[1];
    return getValueByJSONPath(data, path);
  });
}
function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
function removeDuplicatesFromArray(arr) {
  const uniqueObjects = [];
  const uniqueValues = /* @__PURE__ */ new Set();
  for (const obj of arr) {
    const objString = JSON.stringify(obj);
    if (!uniqueValues.has(objString)) {
      uniqueValues.add(objString);
      uniqueObjects.push(obj);
    }
  }
  return uniqueObjects;
}
function generateRandomID(maxLength2) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomID = "";
  for (let i = 0; i < maxLength2; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomID += chars[randomIndex];
  }
  return randomID;
}
const Utils = {
  getCircularReplacer,
  clone,
  escapeRegExp,
  replaceAll,
  pathToAttribute,
  hasOwn,
  sortObject,
  equal,
  different,
  isNull,
  isSet,
  notSet,
  isNumber,
  isInteger,
  isString,
  isBoolean,
  isArray,
  isObject,
  getType,
  mergeDeep,
  overwriteExistingProperties,
  getValueByJSONPath,
  compileTemplate,
  clamp,
  removeDuplicatesFromArray,
  generateRandomID
};
function getSchemaX(schema, keyword) {
  const key = "x-" + keyword;
  return schema[key];
}
function getSchemaSchema(schema) {
  return isString(schema.$schema) ? schema.$schema : void 0;
}
function getSchemaAdditionalProperties(schema) {
  return isObject(schema.additionalProperties) || isBoolean(schema.additionalProperties) ? schema.additionalProperties : void 0;
}
function getSchemaPropertyNames(schema) {
  return isObject(schema.propertyNames) || isBoolean(schema.propertyNames) ? schema.propertyNames : void 0;
}
function getSchemaAllOf(schema) {
  return isArray(schema.allOf) ? schema.allOf : void 0;
}
function getSchemaAnyOf(schema) {
  return isArray(schema.anyOf) ? schema.anyOf : void 0;
}
function getSchemaConst(schema) {
  return schema.const;
}
function getSchemaContains(schema) {
  return isObject(schema.contains) || isBoolean(schema.contains) ? schema.contains : void 0;
}
function getSchemaDefault(schema) {
  return schema.default;
}
function getSchemaDependentRequired(schema) {
  return isObject(schema.dependentRequired) ? schema.dependentRequired : void 0;
}
function getSchemaDependentSchemas(schema) {
  return isObject(schema.dependentSchemas) ? schema.dependentSchemas : void 0;
}
function getSchemaDescription(schema) {
  return isString(schema.description) ? schema.description : void 0;
}
function getSchemaElse(schema) {
  return isObject(schema.else) || isBoolean(schema.else) ? schema.else : void 0;
}
function getSchemaEnum(schema) {
  if (isArray(schema.enum) && schema.enum.length > 0) {
    return schema.enum;
  }
  return void 0;
}
function getSchemaExclusiveMaximum(schema) {
  return isNumber(schema.exclusiveMaximum) ? schema.exclusiveMaximum : void 0;
}
function getSchemaExclusiveMinimum(schema) {
  return isNumber(schema.exclusiveMinimum) ? schema.exclusiveMinimum : void 0;
}
function getSchemaFormat(schema) {
  return isString(schema.format) ? schema.format : void 0;
}
function getSchemaIf(schema) {
  if (isObject(schema.if)) {
    return schema.if;
  }
  if (isBoolean(schema.if)) {
    return schema.if;
  }
  return void 0;
}
function getSchemaItems(schema) {
  return isObject(schema.items) || isBoolean(schema.items) ? schema.items : void 0;
}
function getSchemaMaximum(schema) {
  return isNumber(schema.maximum) ? schema.maximum : void 0;
}
function getSchemaMaxContains(schema) {
  if (isInteger(schema.maxContains) && schema.maxContains >= 0) {
    return schema.maxContains;
  }
  return void 0;
}
function getSchemaMaxItems(schema) {
  if (isInteger(schema.maxItems) && schema.maxItems >= 0) {
    return schema.maxItems;
  }
  return void 0;
}
function getSchemaMaxLength(schema) {
  if (isInteger(schema.maxLength) && schema.maxLength >= 0) {
    return schema.maxLength;
  }
  return void 0;
}
function getSchemaMaxProperties(schema) {
  if (isInteger(schema.maxProperties)) {
    return schema.maxProperties;
  }
  return void 0;
}
function getSchemaMinimum(schema) {
  return isNumber(schema.minimum) ? schema.minimum : void 0;
}
function getSchemaMinContains(schema) {
  if (isInteger(schema.minContains) && schema.minContains >= 0) {
    return schema.minContains;
  }
  return void 0;
}
function getSchemaMinItems(schema) {
  if (isInteger(schema.minItems) && schema.minItems >= 0) {
    return schema.minItems;
  }
  return void 0;
}
function getSchemaMinLength(schema) {
  if (isInteger(schema.minLength) && schema.minLength >= 0) {
    return schema.minLength;
  }
  return void 0;
}
function getSchemaMinProperties(schema) {
  if (isInteger(schema.minProperties) && schema.minProperties >= 0) {
    return schema.minProperties;
  }
  return void 0;
}
function getSchemaMultipleOf(schema) {
  if (isNumber(schema.multipleOf) && schema.multipleOf >= 0) {
    return schema.multipleOf;
  }
  return void 0;
}
function getSchemaNot(schema) {
  return isObject(schema.not) || isBoolean(schema.not) ? schema.not : void 0;
}
function getSchemaXOption(schema, option) {
  return schema["x-options"] && isSet(schema["x-options"][option]) ? schema["x-options"][option] : void 0;
}
function getSchemaPattern(schema) {
  return isString(schema.pattern) ? schema.pattern : void 0;
}
function getSchemaPatternProperties(schema) {
  return isObject(schema.patternProperties) ? schema.patternProperties : void 0;
}
function getSchemaPrefixItems(schema) {
  return isArray(schema.prefixItems) ? schema.prefixItems : void 0;
}
function getSchemaProperties(schema) {
  return isObject(schema.properties) ? schema.properties : void 0;
}
function getSchemaReadOnly(schema) {
  return isBoolean(schema.readOnly) ? schema.readOnly : void 0;
}
function getSchemaRequired(schema) {
  return isArray(schema.required) ? [...new Set(schema.required)] : void 0;
}
function getSchemaThen(schema) {
  return isObject(schema.then) || isBoolean(schema.then) ? schema.then : void 0;
}
function getSchemaTitle(schema) {
  return isString(schema.title) ? schema.title : void 0;
}
function getSchemaType(schema) {
  if (isString(schema.type) || isArray(schema.type)) {
    return schema.type;
  }
  return void 0;
}
function getSchemaOneOf(schema) {
  return isArray(schema.oneOf) ? schema.oneOf : void 0;
}
function getSchemaUnevaluatedProperties(schema) {
  return isBoolean(schema.unevaluatedProperties) ? schema.unevaluatedProperties : void 0;
}
function getSchemaUniqueItems(schema) {
  return isBoolean(schema.uniqueItems) ? schema.uniqueItems : void 0;
}
const Schema = {
  getSchemaX,
  getSchemaSchema,
  getSchemaAdditionalProperties,
  getSchemaPropertyNames,
  getSchemaAllOf,
  getSchemaAnyOf,
  getSchemaConst,
  getSchemaContains,
  getSchemaDefault,
  getSchemaDependentRequired,
  getSchemaDependentSchemas,
  getSchemaDescription,
  getSchemaElse,
  getSchemaEnum,
  getSchemaExclusiveMaximum,
  getSchemaExclusiveMinimum,
  getSchemaFormat,
  getSchemaIf,
  getSchemaItems,
  getSchemaMaximum,
  getSchemaMaxContains,
  getSchemaMaxItems,
  getSchemaMaxLength,
  getSchemaMaxProperties,
  getSchemaMinimum,
  getSchemaMinContains,
  getSchemaMinItems,
  getSchemaMinLength,
  getSchemaMinProperties,
  getSchemaMultipleOf,
  getSchemaNot,
  getSchemaXOption,
  getSchemaPattern,
  getSchemaPatternProperties,
  getSchemaPrefixItems,
  getSchemaProperties,
  getSchemaReadOnly,
  getSchemaRequired,
  getSchemaThen,
  getSchemaTitle,
  getSchemaType,
  getSchemaOneOf,
  getSchemaUnevaluatedProperties,
  getSchemaUniqueItems
};
function allOf(validator, value, schema, key, path) {
  let errors = [];
  const allOf2 = getSchemaAllOf(schema);
  if (isSet(allOf2)) {
    allOf2.forEach((schema2) => {
      const subSchemaEditor = new Jedi({ refParser: validator.refParser, schema: schema2, data: value, rootName: key });
      const subSchemaErrors = subSchemaEditor.getErrors();
      subSchemaEditor.destroy();
      subSchemaErrors.forEach((error) => {
        error.path = path;
      });
      errors.push(...subSchemaErrors);
    });
    errors = removeDuplicatesFromArray(errors);
  }
  return errors;
}
const i18n = {
  errorAdditionalProperties: 'Has additional property "{{ property }}" but no additional properties are allowed.',
  errorAnyOf: "Must validate against at least one of the provided schemas.",
  errorConst: "Must have value of: {{ const }}.",
  errorContains: "Must contain at least one item matching the provided schema.",
  errorDependentRequired: "Must have the required properties: {{ dependentRequired }}.",
  errorEnum: "Must be one of the enumerated values: {{ enum }}.",
  errorExclusiveMaximum: "Must be less than {{ exclusiveMaximum }}.",
  errorExclusiveMinimum: "Must be greater than {{ exclusiveMinimum }}.",
  errorFormat: "Must be a valid {{ format }}.",
  errorItems: "Must have items that validate against the provided schema.",
  errorMaximum: "Must be at most {{ maximum }}.",
  errorMaxItems: "Must have at most {{ maxItems }} items.",
  errorMaxLength: "Must be at most {{ maxLength }} characters long.",
  errorMaxProperties: "Must have at most {{ maxProperties }} properties.",
  errorMaxContains: "Must contain at most {{ maxContains }} items matching the provided schema. It currently contains {{ counter }}.",
  errorMinContains: "Must contain at least {{ minContains }} items matching the provided schema. It currently contains {{ counter }}.",
  errorMinimum: "Must be at least {{ minimum }}.",
  errorMinItems: "Must have at least {{ minItems }} items.",
  errorMinLength: "Must be at least {{ minLength }} characters long.",
  errorMinProperties: "Must have at least {{ minProperties }} properties.",
  errorMultipleOf: "Must be multiple of {{ multipleOf }}.",
  errorNot: "Must not validate against the provided schema.",
  errorOneOf: "Must validate against exactly one of the provided schemas. It currently validates against {{ counter }} of the schemas.",
  errorPattern: 'Must match the pattern: "{{ pattern }}".',
  errorPrefixItems: "Item {{ index }} fails validation.",
  errorPropertyNames: 'Property name "{{ propertyName }}" fails validation.',
  errorProperties: "The following properties do not comply with their schemas: {{ properties }}",
  errorRequired: "Must have the required properties: {{ required }}.",
  errorType: "Must be of type {{ type }}.",
  errorUnevaluatedProperties: 'Has invalid unevaluated property "{{ property }}"',
  errorUniqueItems: "Must have unique items."
};
function minLength(validator, value, schema, key, path) {
  const errors = [];
  const minLength2 = getSchemaMinLength(schema);
  if (isString(value) && isSet(minLength2)) {
    value = value.replace(/[\uDCA9]/g, "");
    const invalid = value.length < minLength2;
    if (invalid) {
      errors.push({
        path,
        constrain: "minLength",
        messages: [
          compileTemplate(i18n.errorMinLength, {
            minLength: minLength2
          })
        ]
      });
    }
  }
  return errors;
}
function anyOf(validator, value, schema, key, path) {
  const errors = [];
  const anyOf2 = getSchemaAnyOf(schema);
  if (isSet(anyOf2)) {
    let valid = false;
    anyOf2.forEach((schema2) => {
      const anyOfEditor = new Jedi({ refParser: validator.refParser, schema: schema2, data: value });
      const anyOfErrors = anyOfEditor.getErrors();
      anyOfEditor.destroy();
      if (anyOfErrors.length === 0) {
        valid = true;
      }
    });
    if (!valid) {
      errors.push({
        path,
        constrain: "anyOf",
        messages: [
          i18n.errorAnyOf
        ]
      });
    }
  }
  return errors;
}
function _enum(validator, value, schema, key, path) {
  const errors = [];
  const schemaEnum = getSchemaEnum(schema);
  if (isSet(schemaEnum)) {
    const invalid = !schemaEnum.some((e) => JSON.stringify(value) === JSON.stringify(e));
    if (invalid) {
      errors.push({
        path,
        constrain: "enum",
        messages: [
          compileTemplate(i18n.errorEnum, {
            enum: JSON.stringify(schemaEnum)
          })
        ]
      });
    }
  }
  return errors;
}
function exclusiveMaximum(validator, value, schema, key, path) {
  const errors = [];
  const exclusiveMaximum2 = getSchemaExclusiveMaximum(schema);
  if (isNumber(value) && isSet(exclusiveMaximum2)) {
    const invalid = value >= exclusiveMaximum2;
    if (invalid) {
      errors.push({
        path,
        constrain: "exclusiveMaximum",
        messages: [
          compileTemplate(i18n.errorExclusiveMaximum, {
            exclusiveMaximum: exclusiveMaximum2
          })
        ]
      });
    }
  }
  return errors;
}
function exclusiveMinimum(validator, value, schema, key, path) {
  const errors = [];
  const exclusiveMinimum2 = getSchemaExclusiveMinimum(schema);
  if (isNumber(value) && isSet(exclusiveMinimum2)) {
    const invalid = value <= exclusiveMinimum2;
    if (invalid) {
      errors.push({
        path,
        constrain: "exclusiveMinimum",
        messages: [
          compileTemplate(i18n.errorExclusiveMinimum, {
            exclusiveMinimum: exclusiveMinimum2
          })
        ]
      });
    }
  }
  return errors;
}
function format(validator, value, schema, key, path) {
  const errors = [];
  const format2 = getSchemaFormat(schema);
  let assertFormat = validator.assertFormat;
  if (getSchemaXOption(schema, "assertFormat")) {
    assertFormat = schema.options.assertFormat;
  }
  if (isSet(format2) && isString(value) && assertFormat) {
    let regexp;
    if (format2 === "email") {
      regexp = new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/i);
    }
    if (format2 === "url") {
      regexp = new RegExp(/^(?:https?|ftp):\/\/(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:[^\s:@](?:[^\s:@-]*[^\s:@])?\.?)+[a-zA-Z]{2,}|(?:\d{1,3}\.){3}\d{1,3})(?::\d{2,5})?(?:\/[^\s]*)?$/i);
    }
    if (format2 === "uuid") {
      regexp = new RegExp(/^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/i);
    }
    const invalid = isSet(regexp) && !regexp.test(value);
    if (invalid) {
      errors.push({
        path,
        constrain: "format",
        messages: [
          compileTemplate(i18n.errorFormat, { format: format2 })
        ]
      });
    }
  }
  return errors;
}
function items(validator, value, schema, key, path) {
  const errors = [];
  const items2 = getSchemaItems(schema);
  const prefixItems2 = getSchemaPrefixItems(schema);
  if (isArray(value) && isSet(items2)) {
    const prefixItemsSchemasCount = isSet(prefixItems2) ? prefixItems2.length : 0;
    if (items2 === false && value.length > 0 && value.length > prefixItemsSchemasCount) {
      errors.push({
        path,
        constrain: "items",
        messages: [i18n.errorItems]
      });
    }
  }
  return errors;
}
function maxItems(validator, value, schema, key, path) {
  const errors = [];
  const maxItems2 = getSchemaMaxItems(schema);
  if (isArray(value) && isSet(maxItems2)) {
    const invalid = value.length > maxItems2;
    if (invalid) {
      errors.push({
        path,
        constrain: "maxItems",
        messages: [
          compileTemplate(i18n.errorMaxItems, {
            maxItems: maxItems2
          })
        ]
      });
    }
  }
  return errors;
}
function maxLength(validator, value, schema, key, path) {
  const errors = [];
  const maxLength2 = getSchemaMaxLength(schema);
  if (isString(value) && isSet(maxLength2)) {
    value = value.replace(/[\uDCA9]/g, "");
    const invalid = value.length > maxLength2;
    if (invalid) {
      errors.push({
        path,
        constrain: "maxLength",
        messages: [
          compileTemplate(i18n.errorMaxLength, {
            maxLength: maxLength2
          })
        ]
      });
    }
  }
  return errors;
}
function maxProperties(validator, value, schema, key, path) {
  const errors = [];
  const maxProperties2 = getSchemaMaxProperties(schema);
  if (isObject(value) && isSet(maxProperties2)) {
    const propertiesCount = Object.keys(value).length;
    const invalid = propertiesCount > maxProperties2;
    if (invalid) {
      errors.push({
        path,
        constrain: "maxProperties",
        messages: [
          compileTemplate(i18n.errorMaxProperties, {
            maxProperties: maxProperties2
          })
        ]
      });
    }
  }
  return errors;
}
function minimum(validator, value, schema, key, path) {
  const errors = [];
  const minimum2 = getSchemaMinimum(schema);
  if (isNumber(value) && isSet(minimum2)) {
    const invalid = value < minimum2;
    if (invalid) {
      errors.push({
        path,
        constrain: "minimum",
        messages: [
          compileTemplate(i18n.errorMinimum, {
            minimum: minimum2
          })
        ]
      });
    }
  }
  return errors;
}
function minItems(validator, value, schema, key, path) {
  const errors = [];
  const minItems2 = getSchemaMinItems(schema);
  if (isArray(value) && isSet(minItems2)) {
    const invalid = value.length < minItems2;
    if (invalid) {
      errors.push({
        path,
        constrain: "minItems",
        messages: [
          compileTemplate(i18n.errorMinItems, {
            minItems: minItems2
          })
        ]
      });
    }
  }
  return errors;
}
function minProperties(validator, value, schema, key, path) {
  const errors = [];
  const minProperties2 = getSchemaMinProperties(schema);
  if (isObject(value) && isSet(minProperties2)) {
    const propertiesCount = Object.keys(value).length;
    const invalid = propertiesCount < minProperties2;
    if (invalid) {
      errors.push({
        path,
        constrain: "minProperties",
        messages: [
          compileTemplate(i18n.errorMinProperties, {
            minProperties: minProperties2
          })
        ]
      });
    }
  }
  return errors;
}
function multipleOf(validator, value, schema, key, path) {
  const errors = [];
  const multipleOf2 = getSchemaMultipleOf(schema);
  if (isNumber(value) && isSet(multipleOf2)) {
    if (value === 0) {
      return errors;
    }
    const isMultipleOf = value / multipleOf2 === Math.floor(value / multipleOf2);
    const invalid = !isMultipleOf || value.toString().includes("e");
    if (invalid) {
      errors.push({
        path,
        constrain: "multipleOf",
        messages: [
          compileTemplate(i18n.errorMultipleOf, {
            multipleOf: multipleOf2
          })
        ]
      });
    }
  }
  return errors;
}
function not(validator, value, schema, key, path) {
  const errors = [];
  const not2 = getSchemaNot(schema);
  if (isSet(not2)) {
    const notEditor = new Jedi({ refParser: validator.refParser, schema: not2, data: value });
    const notErrors = notEditor.getErrors();
    notEditor.destroy();
    const invalid = notErrors.length === 0;
    if (invalid) {
      errors.push({
        path,
        constrain: "not",
        messages: [
          compileTemplate(i18n.errorNot)
        ]
      });
    }
  }
  return errors;
}
function oneOf(validator, value, schema, key, path) {
  const errors = [];
  const oneOf2 = getSchemaOneOf(schema);
  if (isSet(oneOf2)) {
    let counter = 0;
    oneOf2.forEach((schema2) => {
      const oneOfEditor = new Jedi({ refParser: validator.refParser, schema: schema2, data: value });
      const oneOfErrors = oneOfEditor.getErrors();
      oneOfEditor.destroy();
      if (oneOfErrors.length === 0) {
        counter++;
      }
    });
    if (counter !== 1) {
      errors.push({
        path,
        constrain: "oneOf",
        messages: [
          compileTemplate(i18n.errorOneOf, {
            counter
          })
        ]
      });
    }
  }
  return errors;
}
function pattern(validator, value, schema, key, path) {
  const errors = [];
  const pattern2 = getSchemaPattern(schema);
  if (isString(value) && isSet(pattern2)) {
    const regexp = new RegExp(pattern2);
    const invalid = !regexp.test(value);
    if (invalid) {
      errors.push({
        path,
        constrain: "pattern",
        messages: [
          compileTemplate(i18n.errorPattern, {
            pattern: pattern2
          })
        ]
      });
    }
  }
  return errors;
}
function patternProperties(validator, value, schema, key, path) {
  let errors = [];
  const patternProperties2 = getSchemaPatternProperties(schema);
  if (isObject(value) && isSet(patternProperties2)) {
    Object.keys(value).forEach((propertyName) => {
      Object.keys(patternProperties2).forEach((pattern2) => {
        const regexp = new RegExp(pattern2);
        if (regexp.test(propertyName)) {
          const schema2 = patternProperties2[pattern2];
          const editor = new Jedi({
            refParser: validator.refParser,
            schema: schema2,
            data: value[propertyName]
          });
          const editorErrors = editor.getErrors().map((error) => {
            return {
              path: path + "/" + propertyName,
              constrain: "patternProperties",
              messages: error.messages
            };
          });
          errors = [...errors, ...editorErrors];
          editor.destroy();
        }
      });
    });
  }
  return errors;
}
function properties(validator, value, schema, key, path) {
  const schemaProperties = getSchemaProperties(schema);
  const invalidProperties = [];
  if (isObject(value) && isSet(schemaProperties)) {
    Object.keys(schemaProperties).forEach((propertyName) => {
      if (hasOwn(value, propertyName)) {
        const propertySchema = schemaProperties[propertyName];
        const editor = new Jedi({
          refParser: validator.refParser,
          schema: propertySchema,
          data: value[propertyName],
          rootName: path
        });
        if (editor.getErrors().length > 0) {
          invalidProperties.push(propertyName);
        }
        editor.destroy();
      }
    });
  }
  if (invalidProperties.length > 0) {
    return [{
      path,
      constraint: "properties",
      messages: [
        compileTemplate(i18n.errorProperties, { properties: invalidProperties.join(", ") })
      ]
    }];
  }
  return [];
}
function required(validator, value, schema, key, path) {
  const errors = [];
  const required2 = getSchemaRequired(schema);
  if (isObject(value) && isSet(required2)) {
    const missingProperties = [];
    const keys = Object.keys(value);
    required2.forEach((key2) => {
      if (!keys.includes(key2)) {
        missingProperties.push(key2);
      }
    });
    const invalid = missingProperties.length > 0;
    if (invalid) {
      errors.push({
        path,
        constrain: "required",
        messages: [
          compileTemplate(i18n.errorRequired, {
            required: missingProperties.join(", ")
          })
        ]
      });
    }
  }
  return errors;
}
function type(validator, value, schema, key, path) {
  const errors = [];
  const type2 = getSchemaType(schema);
  if (type2 === "any") {
    return errors;
  }
  if (isSet(type2)) {
    const types = {
      string: (value2) => isString(value2),
      number: (value2) => isNumber(value2),
      integer: (value2) => isInteger(value2),
      boolean: (value2) => isBoolean(value2),
      array: (value2) => isArray(value2),
      object: (value2) => isObject(value2),
      null: (value2) => isNull(value2)
    };
    let valid = true;
    if (isArray(type2)) {
      valid = type2.some((type3) => {
        return types[type3](value);
      });
    } else {
      valid = types[type2](value);
    }
    if (!valid) {
      errors.push({
        path,
        constrain: "type",
        messages: [
          compileTemplate(i18n.errorType, {
            type: type2,
            valueType: getType(value)
          })
        ]
      });
    }
  }
  return errors;
}
function maximum(validator, value, schema, key, path) {
  const errors = [];
  const maximum2 = getSchemaMaximum(schema);
  if (isNumber(value) && isSet(maximum2)) {
    const invalid = value > maximum2;
    if (invalid) {
      errors.push({
        path,
        constrain: "maximum",
        messages: [
          compileTemplate(i18n.errorMaximum, {
            maximum: maximum2
          })
        ]
      });
    }
  }
  return errors;
}
function uniqueItems(validator, value, schema, key, path) {
  const errors = [];
  const uniqueItems2 = getSchemaUniqueItems(schema);
  if (isArray(value) && isSet(uniqueItems2) && uniqueItems2 === true) {
    const seen = [];
    let hasDuplicatedItems = false;
    for (let i = 0; i < value.length; i++) {
      let item = value[i];
      if (isObject(item)) {
        item = sortObject(item);
      }
      const itemStringified = JSON.stringify(item);
      hasDuplicatedItems = seen.some((seen2) => seen2 === itemStringified);
      if (hasDuplicatedItems) {
        break;
      } else {
        seen.push(itemStringified);
      }
    }
    const invalid = hasDuplicatedItems;
    if (invalid) {
      errors.push({
        messages: [
          i18n.errorUniqueItems
        ],
        path,
        constrain: "uniqueItems"
      });
    }
  }
  return errors;
}
function additionalProperties(validator, value, schema, key, path) {
  const errors = [];
  const schemaAdditionalProperties = getSchemaAdditionalProperties(schema);
  const schemaPatternProperties = getSchemaPatternProperties(schema);
  const schemaProperties = getSchemaProperties(schema);
  if (isObject(value) && isSet(schemaAdditionalProperties)) {
    const properties2 = schemaProperties || {};
    const additionalProperties2 = schemaAdditionalProperties;
    const patternProperties2 = schemaPatternProperties || {};
    Object.keys(value).forEach((property) => {
      const definedInPatternProperty = Object.keys(patternProperties2).some((pattern2) => {
        const regexp = new RegExp(pattern2);
        return regexp.test(property);
      });
      const isDefinedInProperties = hasOwn(properties2, property);
      if (!definedInPatternProperty && !isDefinedInProperties) {
        if (additionalProperties2 === false) {
          errors.push({
            path,
            constrain: "additionalProperties",
            messages: [
              compileTemplate(i18n.errorAdditionalProperties, { property })
            ]
          });
        } else if (isObject(additionalProperties2)) {
          const editor = new Jedi({
            refParser: validator.refParser,
            schema: additionalProperties2,
            data: value[property]
          });
          const additionalPropertyErrors = editor.getErrors().map((error) => ({
            path: `${path}.${property}`,
            constrain: "additionalProperties",
            messages: error.messages
          }));
          errors.push(...additionalPropertyErrors);
          editor.destroy();
        }
      }
    });
  }
  return errors;
}
const draft04 = {
  additionalProperties,
  allOf,
  anyOf,
  enum: _enum,
  exclusiveMaximum,
  exclusiveMinimum,
  format,
  items,
  maximum,
  maxItems,
  maxLength,
  maxProperties,
  minimum,
  minItems,
  minLength,
  minProperties,
  multipleOf,
  not,
  oneOf,
  pattern,
  patternProperties,
  properties,
  required,
  type,
  uniqueItems
};
function _const(validator, value, schema, key, path) {
  const errors = [];
  const schemaConst = getSchemaConst(schema);
  if (isSet(schemaConst)) {
    const valueIsNotEqualConst = different(value, schemaConst);
    const invalid = valueIsNotEqualConst;
    if (invalid) {
      errors.push({
        path,
        constrain: "const",
        messages: [
          compileTemplate(i18n.errorConst, {
            const: JSON.stringify(schemaConst)
          })
        ]
      });
    }
  }
  return errors;
}
function contains(validator, value, schema, key, path) {
  const errors = [];
  const contains2 = getSchemaContains(schema);
  const minContains = getSchemaMinContains(schema);
  const maxContains = getSchemaMaxContains(schema);
  if (isArray(value) && isSet(contains2)) {
    let counter = 0;
    value.forEach((item) => {
      const containsEditor = new Jedi({ refParser: validator.refParser, schema: contains2, data: item });
      const containsErrors = containsEditor.getErrors();
      if (containsErrors.length === 0) {
        counter++;
      }
      containsEditor.destroy();
    });
    const containsInvalid = counter === 0;
    if (isSet(minContains)) {
      const minContainsInvalid = counter < minContains;
      if (minContainsInvalid) {
        errors.push({
          path,
          constrain: "minContains",
          messages: [
            compileTemplate(i18n.errorMinContains, {
              counter,
              minContains
            })
          ]
        });
      }
    } else {
      if (containsInvalid) {
        errors.push({
          path,
          constrain: "contains",
          messages: [i18n.errorContains]
        });
      }
    }
    if (isSet(maxContains)) {
      const maxContainsInvalid = counter > maxContains;
      if (maxContainsInvalid) {
        errors.push({
          path,
          constrain: "maxContains",
          messages: [
            compileTemplate(i18n.errorMaxContains, {
              counter,
              maxContains
            })
          ]
        });
      }
    }
  }
  return errors;
}
function dependentRequired(validator, value, schema, key, path) {
  const errors = [];
  const dependentRequired2 = getSchemaDependentRequired(schema);
  if (isObject(value) && isSet(dependentRequired2)) {
    let missingProperties = [];
    Object.keys(dependentRequired2).forEach((key2) => {
      if (isSet(value[key2])) {
        const requiredProperties = dependentRequired2[key2];
        missingProperties = requiredProperties.filter((property) => {
          return !hasOwn(value, property);
        });
      }
    });
    const invalid = missingProperties.length > 0;
    if (invalid) {
      errors.push({
        path,
        constrain: "dependentRequired",
        messages: [
          compileTemplate(i18n.errorDependentRequired, {
            dependentRequired: missingProperties.join(", ")
          })
        ]
      });
    }
  }
  return errors;
}
function dependentSchemas(validator, value, schema) {
  let errors = [];
  const dependentSchemas2 = getSchemaDependentSchemas(schema);
  if (isObject(value) && isSet(dependentSchemas2)) {
    Object.keys(dependentSchemas2).forEach((key) => {
      if (isSet(value[key])) {
        const dependentSchema = dependentSchemas2[key];
        const tmpEditor = new Jedi({ refParser: validator.refParser, schema: dependentSchema, data: value });
        const tmpErrors = tmpEditor.getErrors();
        tmpEditor.destroy();
        errors = [...errors, ...tmpErrors];
      }
    });
  }
  return errors;
}
function ifThenElse(validator, value, schema) {
  const errors = [];
  const schemaIf = getSchemaIf(schema);
  const schemaThen = getSchemaThen(schema);
  const schemaElse = getSchemaElse(schema);
  if (isSet(schemaIf)) {
    if (notSet(schemaThen) && notSet(schemaElse)) {
      return errors;
    }
    const ifEditor = new Jedi({ refParser: validator.refParser, schema: schemaIf, data: value });
    const ifErrors = ifEditor.getErrors();
    ifEditor.destroy();
    let thenErrors = [];
    let elseErrors = [];
    if (isSet(schemaThen)) {
      const thenEditor = new Jedi({ refParser: validator.refParser, schema: schemaThen, data: value });
      thenErrors = thenEditor.getErrors();
      thenEditor.destroy();
    }
    if (isSet(schemaElse)) {
      const elseEditor = new Jedi({ refParser: validator.refParser, schema: schemaElse, data: value });
      elseErrors = elseEditor.getErrors();
      elseEditor.destroy();
    }
    if (schemaIf === true) {
      return thenErrors;
    }
    if (schemaIf === false) {
      return elseErrors;
    }
    if (ifErrors.length === 0) {
      return thenErrors;
    }
    if (ifErrors.length > 0) {
      return elseErrors;
    }
  }
  return errors;
}
function prefixItems(validator, value, schema, key, path) {
  const errors = [];
  const prefixItems2 = getSchemaPrefixItems(schema);
  if (isArray(value) && isSet(prefixItems2)) {
    prefixItems2.forEach((itemSchema, index2) => {
      const itemValue = value[index2];
      if (isSet(itemValue)) {
        const tmpEditor = new Jedi({ refParser: validator.refParser, schema: itemSchema, data: itemValue });
        const tmpErrors = tmpEditor.getErrors();
        tmpEditor.destroy();
        if (tmpErrors.length > 0) {
          errors.push({
            path,
            constrain: "prefixItems",
            messages: [
              compileTemplate(i18n.errorPrefixItems, {
                index: index2
              })
            ]
          });
        }
      }
    });
  }
  return errors;
}
const draft06 = {
  additionalProperties,
  allOf,
  anyOf,
  const: _const,
  contains,
  dependentRequired,
  dependentSchemas,
  enum: _enum,
  exclusiveMaximum,
  exclusiveMinimum,
  format,
  if: ifThenElse,
  items,
  maximum,
  maxItems,
  maxLength,
  maxProperties,
  minimum,
  minItems,
  minLength,
  minProperties,
  multipleOf,
  not,
  oneOf,
  pattern,
  patternProperties,
  properties,
  prefixItems,
  required,
  type,
  uniqueItems
};
const draft07 = {
  additionalProperties,
  allOf,
  anyOf,
  const: _const,
  contains,
  dependentRequired,
  dependentSchemas,
  enum: _enum,
  exclusiveMaximum,
  exclusiveMinimum,
  format,
  if: ifThenElse,
  items,
  maximum,
  maxItems,
  maxLength,
  maxProperties,
  minimum,
  minItems,
  minLength,
  minProperties,
  multipleOf,
  not,
  oneOf,
  pattern,
  patternProperties,
  properties,
  prefixItems,
  required,
  type,
  uniqueItems
};
function unevaluatedProperties(validator, value, schema, key, path) {
  let errors = [];
  const schemaUnevaluatedProperties = getSchemaUnevaluatedProperties(schema);
  const schemaPatternProperties = getSchemaPatternProperties(schema);
  const schemaProperties = getSchemaProperties(schema);
  const schemaAllOf = getSchemaAllOf(schema);
  const schemaAnyOf = getSchemaAnyOf(schema);
  const schemaOneOf = getSchemaOneOf(schema);
  if (isObject(value) && isSet(schemaUnevaluatedProperties)) {
    let properties2 = isSet(schemaProperties) ? schemaProperties : {};
    const unevaluatedProperties2 = schemaUnevaluatedProperties;
    const patternProperties2 = schemaPatternProperties;
    const ofSchemas = [
      schemaAllOf,
      schemaAnyOf,
      schemaOneOf
    ];
    ofSchemas.forEach((subSchema) => {
      if (isSet(subSchema)) {
        subSchema.forEach((subschema) => {
          if (isSet(subschema["properties"])) {
            properties2 = { ...properties2, ...subschema["properties"] };
          }
        });
      }
    });
    if (properties2) {
      Object.keys(value).forEach((property) => {
        let definedInPatternProperty = false;
        if (isSet(patternProperties2)) {
          Object.keys(patternProperties2).forEach((pattern2) => {
            const regexp = new RegExp(pattern2);
            definedInPatternProperty = regexp.test(property);
          });
        }
        if (!definedInPatternProperty && unevaluatedProperties2 === false && !hasOwn(properties2, property)) {
          errors.push({
            path,
            constrain: "unevaluatedProperties",
            messages: [
              compileTemplate(i18n.errorUnevaluatedProperties, {
                property
              })
            ]
          });
        }
        if (!definedInPatternProperty && isObject(unevaluatedProperties2) && !hasOwn(properties2, property)) {
          const editor = new Jedi({
            refParser: validator.refParser,
            schema: unevaluatedProperties2,
            data: value[property]
          });
          const unevaluatedPropertiesErrors = editor.getErrors().map((error) => {
            return {
              path: property,
              constrain: "unevaluatedProperties",
              messages: error.messages
            };
          });
          errors = [...errors, ...unevaluatedPropertiesErrors];
          editor.destroy();
        }
      });
    }
  }
  return errors;
}
const draft201909 = {
  additionalProperties,
  allOf,
  anyOf,
  const: _const,
  contains,
  dependentRequired,
  dependentSchemas,
  enum: _enum,
  exclusiveMaximum,
  exclusiveMinimum,
  format,
  if: ifThenElse,
  items,
  maximum,
  maxItems,
  maxLength,
  maxProperties,
  minimum,
  minItems,
  minLength,
  minProperties,
  multipleOf,
  not,
  oneOf,
  pattern,
  patternProperties,
  propertie: properties,
  prefixItems,
  required,
  type,
  unevaluatedProperties,
  uniqueItems
};
function propertyNames(validator, value, schema, key, path) {
  const errors = [];
  const schemaPropertyNames = getSchemaPropertyNames(schema);
  if (isObject(value) && isSet(schemaPropertyNames)) {
    Object.keys(value).forEach((propertyName) => {
      const editor = new Jedi({
        refParser: validator.refParser,
        schema: schemaPropertyNames,
        data: propertyName
      });
      const invalid = editor.getErrors().length > 0;
      if (invalid) {
        errors.push({
          path,
          constrain: "propertyNames",
          messages: [
            compileTemplate(i18n.errorPropertyNames, { propertyName })
          ]
        });
      }
    });
  }
  return errors;
}
const draft202012 = {
  additionalProperties,
  allOf,
  anyOf,
  const: _const,
  contains,
  dependentRequired,
  dependentSchemas,
  enum: _enum,
  exclusiveMaximum,
  exclusiveMinimum,
  format,
  if: ifThenElse,
  items,
  maximum,
  maxItems,
  maxLength,
  maxProperties,
  minimum,
  minItems,
  minLength,
  minProperties,
  multipleOf,
  not,
  oneOf,
  pattern,
  patternProperties,
  prefixItems,
  propertyNames,
  properties,
  required,
  type,
  unevaluatedProperties,
  uniqueItems
};
class Validator {
  constructor(config = {}) {
    this.refParser = config.refParser;
    this.assertFormat = config.assertFormat ? config.assertFormat : false;
    this.draft = draft202012;
    this.jsonSchemaDrafts = {
      "http://json-schema.org/draft-04/schema#": draft04,
      "http://json-schema.org/draft-06/schema#": draft06,
      "http://json-schema.org/draft-07/schema#": draft07,
      "https://json-schema.org/draft/2019-09/schema": draft201909,
      "https://json-schema.org/draft/2020-12/schema": draft202012
    };
  }
  /**
   * Validates a value against it's schema
   */
  getErrors(value, schema, key, path) {
    let schemaErrors = [];
    const schemaOptionsMessages = getSchemaXOption(schema, "messages");
    const schemaClone = clone(schema);
    if (isBoolean(schemaClone) && schemaClone === true) {
      return schemaErrors;
    }
    if (isBoolean(schemaClone) && schemaClone === false) {
      return [{
        messages: isSet(schemaOptionsMessages) ? schemaOptionsMessages : ["invalid"],
        path
      }];
    }
    Object.keys(this.draft).forEach((constrain) => {
      if (hasOwn(schemaClone, constrain)) {
        const validator = this.draft[constrain];
        const validatorErrors = validator(this, value, schema, key, path);
        if (validatorErrors) {
          schemaErrors = [...schemaErrors, ...validatorErrors];
        }
      }
    });
    if (schemaErrors.length > 0 && schemaOptionsMessages) {
      schemaErrors = [
        {
          messages: schemaOptionsMessages,
          path
        }
      ];
    }
    return schemaErrors;
  }
}
class EventEmitter {
  constructor() {
    this.listeners = [];
  }
  /**
   * Adds a named event listener
   * @public
   * @param {string} name - The name of the event
   * @param {function} callback - A callback functions that will be executed when this event is emitted
   */
  on(name, callback) {
    this.listeners.push({ name, callback });
  }
  off(name) {
    this.listeners = this.listeners.filter((listener) => listener.name !== name);
  }
  /**
   * Triggers the callback function of a named event listener
   * @public
   * @param {string} name - The name of the event to be emitted
   * @param {...*} args - Arguments to be passed to the callback function
   */
  emit(name, ...args) {
    const listeners = this.listeners.filter((listener) => listener.name === name);
    listeners.forEach((listener) => {
      try {
        listener.callback(...args);
      } catch (error) {
        console.error(`Error in listener callback for event "${name}":`, error);
      }
    });
  }
  /**
   * Deletes all properties of the class
   */
  destroy() {
    Object.keys(this).forEach((key) => {
      delete this[key];
    });
  }
}
class Instance extends EventEmitter {
  constructor(config) {
    super();
    this.jedi = config.jedi;
    this.path = config.path || this.jedi.rootName;
    this.schema = config.schema;
    this.value = isSet(config.value) ? config.value : void 0;
    this.isActive = true;
    this.parent = config.parent || null;
    this.children = [];
    this.ui = null;
    this.isDirty = false;
    this.init();
  }
  /**
   * Initializes and register the instance
   */
  init() {
    this.register();
    this.setInitialValue();
    this.prepare();
    this.setDefaultValue();
    if (this.jedi.options.container) {
      this.setUI();
    }
    this.on("change", (context) => {
      if (this.parent) {
        this.parent.isDirty = true;
        this.parent.onChildChange(context);
      }
    });
  }
  /**
   * Sets the instance ui property. UI can be an editor instance or similar
   */
  setUI() {
    const EditorClass = this.jedi.uiResolver.getClass(this.schema);
    this.ui = new EditorClass(this);
  }
  /**
   * Return the last part of the instance path
   */
  getKey() {
    return this.path.split(this.jedi.pathSeparator).pop();
  }
  /**
   * Adds a child instance pointer to the instances list
   */
  register() {
    this.jedi.register(this);
    const registerChildRecursive = (child) => {
      this.jedi.register(child);
      child.children.forEach(registerChildRecursive);
    };
    this.children.forEach(registerChildRecursive);
  }
  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister() {
    this.jedi.unregister(this);
  }
  /**
   * Sets the default value of the instance based on it's type
   */
  setInitialValue() {
    if (notSet(this.value)) {
      let value;
      const schemaType = getSchemaType(this.schema);
      if (schemaType === "boolean") value = false;
      if (schemaType === "number") value = 0;
      if (schemaType === "integer") value = 0;
      if (schemaType === "string") value = "";
      if (schemaType === "array") value = [];
      if (schemaType === "object") value = {};
      if (schemaType === "null") value = null;
      this.value = value;
    }
  }
  setDefaultValue() {
    const schemaDefault = getSchemaDefault(this.schema);
    if (isSet(schemaDefault)) {
      this.setValue(schemaDefault, false);
    }
  }
  /**
   * Returns the value of the instance
   */
  getValue() {
    return clone(this.value);
  }
  /**
   * Sets the instance value
   */
  setValue(newValue, triggersChange = true, context = "instance") {
    const enforceConst = this.jedi.options.enforceConst || getSchemaXOption(this.schema, "enforceConst");
    if (isSet(enforceConst) && equal(enforceConst, true)) {
      const schemaConst = getSchemaConst(this.schema);
      if (isSet(schemaConst)) {
        newValue = schemaConst;
      }
    }
    this.value = newValue;
    this.emit("set-value", newValue, context);
    if (triggersChange) {
      this.isDirty = true;
      this.emit("change", context);
      this.jedi.emit("instance-change", this, context);
    }
  }
  /**
   * Fires when a child's instance state changes
   */
  onChildChange(context) {
  }
  /**
   * Returns an array of validation error messages
   */
  getErrors() {
    if (!this.isActive) {
      return [];
    }
    const errors = this.jedi.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path);
    return removeDuplicatesFromArray(errors);
  }
  /**
   * Prepare data before building the editor
   */
  prepare() {
  }
  /**
   * Activates the instance
   */
  activate() {
    if (this.isActive === false) {
      this.isActive = true;
      this.emit("change");
    }
  }
  /**
   * Deactivates the instance
   */
  deactivate() {
    if (this.isActive === true) {
      this.isActive = false;
      this.emit("change");
    }
  }
  /**
   * Returns true if this instance is read only
   */
  isReadOnly() {
    let readOnly = false;
    if (getSchemaReadOnly(this.schema) === true) {
      readOnly = true;
    }
    if (this.parent && this.parent.isReadOnly()) {
      readOnly = true;
    }
    return readOnly;
  }
  /**
   * Destroy the instance and it's children
   */
  destroy() {
    this.unregister();
    this.listeners = [];
    this.children.forEach((child) => {
      child.destroy();
    });
    if (this.ui) {
      this.ui.destroy();
    }
    Object.keys(this).forEach((key) => {
      delete this[key];
    });
    super.destroy();
  }
}
class Editor {
  constructor(instance) {
    this.instance = instance;
    this.theme = null;
    this.control = null;
    this.disabled = false;
    this.readOnly = this.instance.isReadOnly();
    this.showingValidationErrors = false;
    this.init();
    this.build();
    this.setAttributes();
    this.enforceEnumDefault();
    this.addEventListeners();
    this.setContainerAttributes();
    this.refreshUI();
    const alwaysShowErrors = this.instance.jedi.options.showErrors === "always" || getSchemaXOption(this.instance.schema, "showErrors") === "always";
    if (alwaysShowErrors) {
      this.showValidationErrors(this.instance.getErrors());
    }
    this.instance.on("set-value", () => {
      this.refreshUI();
      this.showValidationErrors(this.instance.getErrors());
    });
    this.instance.on("change", () => {
      this.refreshUI();
      this.showValidationErrors(this.instance.getErrors());
    });
  }
  static resolves(schema) {
  }
  /**
   * Initializes the editor
   */
  init() {
    this.theme = this.instance.jedi.theme;
  }
  /**
   * Sets container attributes like data-path and data-type
   */
  setContainerAttributes() {
    this.control.container.setAttribute("data-path", this.instance.path);
    this.control.container.setAttribute("data-type", getSchemaType(this.instance.schema));
  }
  /**
   * Builds the editor control and appends it to the editor container
   */
  build() {
  }
  adaptForTable() {
  }
  /**
   * Adds attributes to generated html elements if specified in schema x-options
   */
  setAttributes() {
    const input = this.control.input;
    if (isSet(input)) {
      const inputAttributes = getSchemaXOption(this.instance.schema, "inputAttributes");
      if (isObject(inputAttributes)) {
        for (const [key, value] of Object.entries(inputAttributes)) {
          input.setAttribute(key, value);
        }
      }
    }
  }
  getIdFromPath(path) {
    const optionId = this.instance.jedi.options.id;
    return optionId ? optionId + "-" + pathToAttribute(path) : pathToAttribute(path);
  }
  /**
   * Updates the value of the instance by making assumptions based on constrains
   */
  enforceEnumDefault() {
    const enforceEnumDefault = getSchemaXOption(this.instance.schema, "enforceEnumDefault") ?? this.instance.jedi.options.enforceEnumDefault;
    const schemaEnum = getSchemaEnum(this.instance.schema);
    if (isSet(schemaEnum) && !schemaEnum.includes(this.instance.getValue()) && isSet(schemaEnum[0]) && enforceEnumDefault) {
      this.instance.setValue(schemaEnum[0], false);
    }
  }
  /**
   * Add event listeners to ui elements
   */
  addEventListeners() {
  }
  /**
   * Shows validation messages in the editor container.
   */
  showValidationErrors(errors, force = false) {
    errors = errors.filter((error) => {
      return error.path === this.instance.path;
    });
    this.control.messages.innerHTML = "";
    this.showingValidationErrors = false;
    const neverShowErrors = this.instance.jedi.options.showErrors === "never" || getSchemaXOption(this.instance.schema, "showErrors") === "never";
    if (neverShowErrors && !force || errors.length === 0) {
      return;
    }
    const title = getSchemaTitle(this.instance.schema) || this.instance.getKey();
    const includeTitlesInMessages = getSchemaXOption(this.instance.schema, "includeTitlesInMessages") || this.instance.jedi.options.includeTitlesInMessages;
    errors.forEach((error) => {
      if (error.constraint === "properties") {
        return;
      }
      error.messages.forEach((message) => {
        const invalidFeedback = this.getInvalidFeedback({
          message: includeTitlesInMessages ? title + ": " + message : message
        });
        this.control.messages.appendChild(invalidFeedback);
      });
    });
    this.showingValidationErrors = true;
  }
  /**
   * Get an error message container
   */
  getInvalidFeedback(config) {
    return this.theme.getInvalidFeedback(config);
  }
  /**
   * Disables the editor
   */
  disable() {
    this.disabled = true;
    this.refreshUI();
  }
  /**
   * Enables the editor
   */
  enable() {
    this.disabled = false;
    this.refreshUI();
  }
  /**
   * Updates control UI when its state changes
   */
  refreshUI() {
    this.refreshInteractiveElements();
  }
  refreshInteractiveElements() {
    const interactiveElements = this.control.container.querySelectorAll("button, input, select, textarea");
    interactiveElements.forEach((element) => {
      if (this.disabled || this.readOnly) {
        element.setAttribute("disabled", "");
      } else {
        element.removeAttribute("disabled", "");
      }
    });
  }
  /**
   * Transforms the input value if necessary before value set
   */
  sanitize(value) {
    return value;
  }
  /**
   * Destroys the editor
   */
  destroy() {
    if (this.control.container && this.control.container.parentNode) {
      this.control.container.parentNode.removeChild(this.control.container);
    }
    Object.keys(this).forEach((key) => {
      delete this[key];
    });
  }
}
class EditorIfThenElse extends Editor {
  static resolves(schema) {
    const schemaIf = getSchemaIf(schema);
    return isSet(schemaIf);
  }
  build() {
    this.control = this.theme.getIfThenElseControl({
      title: "Options",
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      id: this.getIdFromPath(this.instance.path),
      description: getSchemaDescription(this.instance.schema)
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.childrenSlot.innerHTML = "";
    this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container);
    if (this.disabled || this.instance.isReadOnly()) {
      this.instance.activeInstance.ui.disable();
    } else {
      this.instance.activeInstance.ui.enable();
    }
  }
  getInvalidFeedback(config) {
    return this.theme.getAlert(config);
  }
}
class InstanceIfThenElse extends Instance {
  setUI() {
    this.ui = new EditorIfThenElse(this);
  }
  prepare() {
    this.instances = [];
    this.instanceStartingValues = [];
    this.instanceWithoutIf = null;
    this.activeInstance = null;
    this.index = 0;
    this.schemas = [];
    this.ifThenElseShemas = [];
    this.traverseSchema(this.schema);
    delete this.schema.if;
    delete this.schema.then;
    delete this.schema.else;
    this.ifThenElseShemas.forEach((item) => {
      if (isSet(item.then)) {
        this.schemas.push(mergeDeep({}, clone(this.schema), item.then));
      }
      if (isSet(item.else)) {
        this.schemas.push(mergeDeep({}, clone(this.schema), item.else));
      }
    });
    const schemaClone = clone(this.schema);
    delete schemaClone.if;
    delete schemaClone.then;
    delete schemaClone.else;
    this.instanceWithoutIf = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schemaClone,
      path: this.path,
      parent: this.parent
    });
    this.schemas.forEach((schema) => {
      const instance = this.jedi.createInstance({
        jedi: this.jedi,
        schema,
        path: this.path,
        parent: this.parent
      });
      this.instanceStartingValues.push(instance.getValue());
      instance.off("change");
      this.instances.push(instance);
    });
    this.on("set-value", (value, context) => {
      this.changeValue(value, context);
    });
    const ifValue = this.instanceWithoutIf.getValue();
    this.changeValue(ifValue);
  }
  changeValue(value, context = "instance") {
    const ifValue = this.getIfValueFromValue(value);
    const fittestIndex = this.getFittestIndex(ifValue);
    const indexChanged = fittestIndex !== this.index;
    this.index = fittestIndex;
    this.activeInstance = this.instances[fittestIndex];
    this.instances.forEach((instance, index2) => {
      instance.off("change");
      const startingValue = this.instanceStartingValues[index2];
      const currentValue = instance.getValue();
      let instanceValue = value;
      if (isObject(startingValue) && isObject(value)) {
        if (indexChanged) {
          instanceValue = overwriteExistingProperties(startingValue, ifValue);
        } else {
          instanceValue = overwriteExistingProperties(currentValue, value);
        }
        if (context === "instance") {
          instanceValue = overwriteExistingProperties(currentValue, value);
        }
      }
      instance.setValue(instanceValue, false, context);
      instance.on("change", (context2) => {
        const value2 = instance.getValue();
        this.changeValue(value2, context2);
      });
    });
    this.value = this.activeInstance.getValue();
    this.emit("change", context);
  }
  getIfValueFromValue(value) {
    let ifValue = this.instanceWithoutIf.getValue();
    if (isObject(ifValue) && isObject(value)) {
      ifValue = overwriteExistingProperties(ifValue, value);
    }
    return ifValue;
  }
  switchInstance(index2) {
    this.index = index2;
    this.activeInstance = this.instances[this.index];
  }
  traverseSchema(schema) {
    const schemaIf = getSchemaIf(schema);
    if (isSet(schemaIf)) {
      const schemaThen = getSchemaThen(schema);
      const schemaElse = getSchemaElse(schema);
      this.ifThenElseShemas.push({
        if: schemaIf,
        then: isSet(schemaThen) ? schemaThen : {}
      });
      this.ifThenElseShemas.push({
        if: schemaIf,
        else: isSet(schemaElse) ? schemaElse : {}
      });
    }
  }
  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex(value) {
    let fittestIndex = this.index;
    this.ifThenElseShemas.forEach((schema, index2) => {
      const ifValidator = new Jedi({
        schema: schema.if,
        data: value,
        refParser: this.jedi.refParser
      });
      const ifErrors = ifValidator.getErrors();
      ifValidator.destroy();
      if (ifErrors.length === 0 && schema.then) {
        fittestIndex = index2;
      }
      if (ifErrors.length > 0 && schema.else) {
        fittestIndex = index2;
      }
    });
    return fittestIndex;
  }
  destroy() {
    this.instances.forEach((instance) => {
      instance.destroy();
    });
    super.destroy();
  }
  getAllOfCombinations(schemas) {
    const result = [];
    const combineProperties = (schema1, schema2) => {
      return { ...schema1, ...schema2 };
    };
    const generateCombinations = (current, remaining) => {
      if (remaining.length === 0) {
        result.push(current);
        return;
      }
      const nextSchema = remaining[0];
      generateCombinations(combineProperties(current, nextSchema), remaining.slice(1));
      generateCombinations(current, remaining.slice(1));
    };
    for (let i = 0; i < schemas.length; i++) {
      generateCombinations(schemas[i], schemas.slice(i + 1));
    }
    result.sort((a, b) => Object.keys(a).length - Object.keys(b).length);
    return result;
  }
}
class InstanceMultiple extends Instance {
  prepare() {
    this.instances = [];
    this.activeInstance = null;
    this.lastIndex = 0;
    this.index = 0;
    this.schemas = [];
    this.switcherOptionValues = [];
    this.switcherOptionsLabels = [];
    this.on("set-value", () => {
      this.onSetValue();
    });
    const schemaType = getSchemaType(this.schema);
    if (isSet(getSchemaAnyOf(this.schema)) || isSet(getSchemaOneOf(this.schema))) {
      const schemasOf = isSet(getSchemaAnyOf(this.schema)) ? getSchemaAnyOf(this.schema) : getSchemaOneOf(this.schema);
      const schemaCopy = clone(this.schema);
      delete schemaCopy["anyOf"];
      delete schemaCopy["oneOf"];
      delete schemaCopy["options"];
      schemasOf.forEach((schema, index2) => {
        schema = { ...schemaCopy, ...schema };
        if (this.jedi.refParser) {
          schema = this.jedi.refParser.expand(schema);
        }
        let switcherOptionsLabel = "Option-" + (index2 + 1);
        const switcherTitle = getSchemaXOption(schema, "switcherTitle");
        const schemaTitle = getSchemaTitle(schema);
        if (isSet(schemaTitle)) {
          switcherOptionsLabel = schemaTitle;
        }
        if (isSet(switcherTitle)) {
          switcherOptionsLabel = switcherTitle;
        }
        this.switcherOptionValues.push(index2);
        this.switcherOptionsLabels.push(switcherOptionsLabel);
        this.schemas.push(schema);
      });
    } else if (isArray(schemaType)) {
      schemaType.forEach((type2, index2) => {
        const schemaClone = mergeDeep(this.schema);
        const schema = {
          ...schemaClone,
          ...{ type: type2, title: type2[0].toUpperCase() + type2.slice(1) }
        };
        if (isSet(schemaClone.title)) {
          schema.title = schemaClone.title;
        }
        this.switcherOptionValues.push(index2);
        this.switcherOptionsLabels.push(type2.charAt(0).toUpperCase() + type2.slice(1));
        this.schemas.push(schema);
      });
    } else if (schemaType === "any" || !schemaType) {
      const schemaClone = clone(this.schema);
      this.schemas = [
        { ...schemaClone, ...{ type: "object" } },
        { ...schemaClone, ...{ type: "array" } },
        { ...schemaClone, ...{ type: "string" } },
        { ...schemaClone, ...{ type: "number" } },
        { ...schemaClone, ...{ type: "integer" } },
        { ...schemaClone, ...{ type: "boolean" } },
        { ...schemaClone, ...{ type: "null" } }
      ];
      this.schemas.forEach((schema, index2) => {
        this.switcherOptionValues.push(index2);
      });
      this.switcherOptionsLabels = [
        "Object",
        "Array",
        "String",
        "Number",
        "Integer",
        "Boolean",
        "Null"
      ];
    }
    this.schemas.forEach((schema) => {
      const instance = this.jedi.createInstance({
        jedi: this.jedi,
        schema,
        path: this.path,
        parent: this.parent,
        value: clone(this.value)
      });
      if (isSet(this.value)) {
        instance.setValue(this.value, false);
      }
      instance.unregister();
      instance.off("change");
      instance.on("change", (context) => {
        this.value = this.activeInstance.getValue();
        this.emit("change", context);
      });
      this.instances.push(instance);
      this.register();
    });
    const fittestIndex = this.getFittestIndex(this.value);
    this.switchInstance(fittestIndex, this.value);
  }
  switchInstance(index2, value, context = "instance") {
    this.lastIndex = this.index;
    this.index = index2;
    this.activeInstance = this.instances[index2];
    if (isSet(value)) {
      this.activeInstance.setValue(value, false, context);
    }
    this.setValue(this.activeInstance.getValue(), true, context);
  }
  onSetValue() {
    if (different(this.activeInstance.getValue(), this.value)) {
      const fittestIndex = this.getFittestIndex(this.value);
      this.switchInstance(fittestIndex, this.value);
    }
  }
  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex(value) {
    let index2 = 0;
    let fittestIndex;
    let championErrors;
    for (const instance of this.instances) {
      const instanceErrors = this.jedi.validator.getErrors(value, instance.schema, instance.getKey(), instance.path);
      if (notSet(fittestIndex) || notSet(championErrors)) {
        fittestIndex = index2;
        championErrors = instanceErrors;
      }
      if (instanceErrors.length < championErrors.length) {
        fittestIndex = index2;
        championErrors = instanceErrors;
      }
      index2++;
    }
    return fittestIndex;
  }
  destroy() {
    this.instances.forEach((instance) => {
      instance.destroy();
    });
    super.destroy();
  }
}
class InstanceBoolean extends Instance {
}
class InstanceObject extends Instance {
  prepare() {
    this.properties = {};
    const schemaProperties = getSchemaProperties(this.schema);
    if (isSet(schemaProperties)) {
      Object.keys(schemaProperties).forEach((key) => {
        const schema = schemaProperties[key];
        this.properties[key] = { schema };
        let musstCreateChild = true;
        const optionsDeactivateNonRequired = this.jedi.options.deactivateNonRequired;
        const deactivateNonRequired = getSchemaXOption(this.schema, "deactivateNonRequired");
        const schemaDeactivateNonRequired = getSchemaXOption(schema, "deactivateNonRequired");
        if (this.isNotRequired(key) && isSet(optionsDeactivateNonRequired) && optionsDeactivateNonRequired === true) {
          musstCreateChild = false;
        }
        if (this.isNotRequired(key) && isSet(deactivateNonRequired) && deactivateNonRequired === true) {
          musstCreateChild = false;
        }
        if (this.isNotRequired(key) && isSet(schemaDeactivateNonRequired) && schemaDeactivateNonRequired === true) {
          musstCreateChild = false;
        }
        if (musstCreateChild) {
          this.createChild(schema, key);
        }
      });
    }
    this.refreshInstances();
    this.on("set-value", (value, context) => {
      this.refreshInstances(context);
    });
  }
  /**
   * Returns true if the property is required
   */
  isRequired(property) {
    const schemaRequired = getSchemaRequired(this.schema);
    return isSet(schemaRequired) && schemaRequired.includes(property);
  }
  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired(property) {
    const dependentRequired2 = getSchemaDependentRequired(this.schema);
    if (isSet(dependentRequired2)) {
      let missingProperties = [];
      Object.keys(dependentRequired2).forEach((key) => {
        if (isSet(this.value[key])) {
          const requiredProperties = dependentRequired2[key];
          missingProperties = requiredProperties.filter((property2) => {
            return !hasOwn(this.value, property2);
          });
        }
      });
      return missingProperties.includes(property);
    }
    return false;
  }
  createChild(schema, key, value, activate = false) {
    const instance = this.jedi.createInstance({
      jedi: this.jedi,
      schema,
      path: this.path + this.jedi.pathSeparator + key,
      parent: this,
      value: clone(value)
    });
    this.children.push(instance);
    this.value[key] = instance.getValue();
    const deactivateNonRequired = this.jedi.options.deactivateNonRequired || getSchemaXOption(this.schema, "deactivateNonRequired");
    if (this.isNotRequired(key) && isSet(deactivateNonRequired) && deactivateNonRequired === true && !activate) {
      instance.deactivate();
    }
    return instance;
  }
  isNotRequired(property) {
    return !this.isRequired(property) && !this.isDependentRequired(property);
  }
  deleteChild(key) {
    for (let i = this.children.length - 1; i >= 0; i--) {
      const instance = this.children[i];
      if (instance.getKey() === key) {
        instance.destroy();
        this.children.splice(i, 1);
        this.onChildChange();
      }
    }
  }
  getChild(key) {
    return this.children.find((instance) => {
      return key === instance.getKey().split(this.jedi.pathSeparator).pop();
    });
  }
  getPropertySchema(propertyName) {
    let schema;
    const schemaAdditionalProperties = getSchemaAdditionalProperties(this.schema);
    const schemaProperties = getSchemaProperties(this.schema);
    const schemaPatternProperties = getSchemaPatternProperties(this.schema);
    if (isSet(schemaProperties) && hasOwn(schemaProperties, propertyName)) {
      schema = schemaProperties[propertyName];
    } else if (isSet(schemaPatternProperties)) {
      Object.keys(schemaPatternProperties).forEach((pattern2) => {
        const regexp = new RegExp(pattern2);
        if (regexp.test(propertyName)) {
          schema = schemaPatternProperties[pattern2];
        }
      });
    }
    if (notSet(schema) && isSet(schemaAdditionalProperties)) {
      schema = schemaAdditionalProperties;
    }
    if (notSet(schema)) {
      schema = {};
    }
    return schema;
  }
  onChildChange(context) {
    const value = {};
    this.children.forEach((child) => {
      if (child.isActive) {
        value[child.getKey()] = child.getValue();
      }
    });
    this.value = value;
    this.emit("change", context);
  }
  /**
   * Sorts the children of the current instance based on their `propertyOrder` value in ascending order.
   * The sorting is done using the `propertyOrder` obtained from each child's schema, which should be a number.
   * If a child does not have a valid `propertyOrder` (i.e., the value is not a number), it will be placed after the child with a valid `propertyOrder`.
   * @returns {void} This function modifies the `children` array of the instance in place.
   */
  sortChildrenByPropertyOrder() {
    this.children = this.children.sort((a, b) => {
      const propertyOrderA = getSchemaXOption(a.schema, "propertyOrder");
      const propertyOrderB = getSchemaXOption(b.schema, "propertyOrder");
      const isValidNumberA = isNumber(propertyOrderA);
      const isValidNumberB = isNumber(propertyOrderB);
      if (!isValidNumberA && isValidNumberB) {
        return 1;
      }
      if (isValidNumberA && !isValidNumberB) {
        return -1;
      }
      if (propertyOrderA < propertyOrderB) {
        return -1;
      }
      if (propertyOrderA > propertyOrderB) {
        return 1;
      }
      return 0;
    });
  }
  refreshInstances(context) {
    const value = this.getValue();
    if (!isObject(value)) {
      return;
    }
    Object.keys(value).forEach((propertyName) => {
      const child = this.getChild(propertyName);
      if (child) {
        child.activate();
        const oldValue = child.getValue();
        const newValue = value[child.getKey()];
        if (different(oldValue, newValue)) {
          child.setValue(newValue, false, context);
        }
      } else {
        const schema = this.getPropertySchema(propertyName);
        this.createChild(schema, propertyName, value[propertyName], true);
      }
    });
    for (let i = this.children.length - 1; i >= 0; i--) {
      const instance = this.children[i];
      const propertyName = instance.getKey();
      if (notSet(value[propertyName])) {
        if (this.getChild(propertyName)) {
          instance.deactivate();
        } else {
          this.deleteChild(propertyName);
        }
      }
    }
    this.sortChildrenByPropertyOrder();
  }
}
class InstanceArray extends Instance {
  prepare() {
    this.refreshChildren();
    this.on("set-value", () => {
      this.refreshChildren();
    });
  }
  createItemInstance() {
    let schema;
    const itemsCount = this.children.length;
    const schemaItems = getSchemaItems(this.schema);
    const schemaPrefixItems = getSchemaPrefixItems(this.schema);
    schema = isSet(schemaItems) ? schemaItems : {};
    const hasPrefixItemsSchema = isSet(schemaPrefixItems) && isSet(schemaPrefixItems[itemsCount]);
    if (hasPrefixItemsSchema) {
      schema = schemaPrefixItems[itemsCount];
    }
    return this.jedi.createInstance({
      jedi: this.jedi,
      schema,
      path: this.path + this.jedi.pathSeparator + itemsCount,
      parent: this
    });
  }
  setDefaultValue() {
    const schemaDefault = getSchemaDefault(this.schema);
    if (isSet(schemaDefault)) {
      this.setValue(schemaDefault);
    }
  }
  move(fromIndex, toIndex) {
    const value = clone(this.getValue());
    const item = value[fromIndex];
    value.splice(fromIndex, 1);
    value.splice(toIndex, 0, item);
    this.setValue(value);
  }
  addItem() {
    const tempEditor = this.createItemInstance();
    const value = clone(this.getValue());
    value.push(tempEditor.getValue());
    tempEditor.destroy();
    this.setValue(value);
  }
  deleteItem(itemIndex) {
    const currentValue = clone(this.getValue());
    const newValue = currentValue.filter((item, index2) => index2 !== itemIndex);
    this.setValue(newValue);
  }
  onChildChange(context) {
    const value = [];
    this.children.forEach((child) => {
      value.push(child.getValue());
    });
    this.value = value;
    this.emit("change", true, context);
  }
  refreshChildren() {
    this.children = [];
    const value = this.getValue();
    if (!isArray(value)) {
      return;
    }
    value.forEach((itemValue) => {
      const child = this.createItemInstance(itemValue);
      this.children.push(child);
      child.setValue(itemValue, false);
    });
  }
}
class InstanceString extends Instance {
}
class InstanceNumber extends Instance {
}
class InstanceNull extends Instance {
}
const glyphicons = {
  properties: "glyphicon glyphicon-list",
  delete: "glyphicon glyphicon-trash",
  add: "glyphicon glyphicon-plus",
  moveUp: "glyphicon glyphicon-arrow-up",
  moveDown: "glyphicon glyphicon-arrow-down",
  collapse: "glyphicon glyphicon-chevron-down",
  drag: "glyphicon glyphicon-th",
  infoButton: "glyphicon glyphicon-question-sign",
  close: "glyphicon glyphicon-remove"
};
const bootstrapIcons = {
  properties: "bi bi-card-list",
  delete: "bi bi-trash2",
  add: "bi bi-plus",
  moveUp: "bi bi-arrow-up",
  moveDown: "bi bi-arrow-down",
  collapse: "bi bi-chevron-down",
  drag: "bi bi-grip-vertical",
  infoButton: "bi bi-question-circle",
  close: "bi bi-x"
};
const fontAwesome3 = {
  properties: "icon-list",
  delete: "icon-trash",
  add: "icon-plus",
  moveUp: "icon-arrow-up",
  moveDown: "icon-arrow-down",
  collapse: "icon-chevron-down",
  drag: "icon-th",
  infoButton: "icon-question-sign",
  close: "icon-remove"
};
const fontAwesome4 = {
  properties: "fa fa-list",
  delete: "fa fa-trash-o",
  add: "fa fa-plus",
  moveUp: "fa fa-arrow-up",
  moveDown: "fa fa-arrow-down",
  collapse: "fa fa-chevron-down",
  drag: "fa fa-th",
  infoButton: "fa fa-question-circle",
  close: "fa fa-times"
};
const fontAwesome5 = {
  properties: "fas fa-list",
  delete: "fas fa-trash",
  add: "fas fa-plus",
  moveUp: "fas fa-arrow-up",
  moveDown: "fas fa-arrow-down",
  collapse: "fas fa-chevron-down",
  drag: "fas fa-grip-vertical",
  infoButton: "fas fa-question-circle",
  close: "fas fa-times"
};
const fontAwesome6 = {
  properties: "fa-solid fa-list",
  delete: "fa-solid fa-trash",
  add: "fa-solid fa-plus",
  moveUp: "fa-solid fa-arrow-up",
  moveDown: "fa-solid fa-arrow-down",
  collapse: "fa-solid fa-chevron-down",
  drag: "fa-solid fa-grip-vertical",
  infoButton: "fa-solid fa-circle-question",
  close: "fa-solid fa-xmark"
};
class EditorBoolean extends Editor {
  sanitize(value) {
    return Boolean(value);
  }
}
class EditorRadios extends EditorBoolean {
  static resolves(schema) {
    return getSchemaType(schema) === "boolean" && getSchemaXOption(schema, "format") === "radios";
  }
  build() {
    this.control = this.theme.getRadiosControl({
      values: ["false", "true"],
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || ["false", "true"],
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      inline: getSchemaXOption(this.instance.schema, "radioInline") || this.instance.jedi.options.radioInline,
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  adaptForTable() {
    this.theme.adaptForTableRadiosControl(this.control);
  }
  addEventListeners() {
    this.control.radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        const radioValue = radio.value === "true";
        this.instance.setValue(radioValue, true, "editor");
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.radios.forEach((radio) => {
      const radioValue = radio.value === "true";
      radio.checked = radioValue === this.instance.getValue();
    });
  }
}
class EditorBooleanSelect extends EditorBoolean {
  static resolves(schema) {
    return getSchemaType(schema) === "boolean";
  }
  build() {
    this.control = this.theme.getSelectControl({
      values: ["false", "true"],
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || ["false", "true"],
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  adaptForTable() {
    this.theme.adaptForTableSelectControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const value = this.control.input.value === "true";
      this.instance.setValue(value, true, "editor");
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.input.value = this.instance.getValue() === true ? "true" : "false";
  }
}
class EditorBooleanCheckbox extends EditorBoolean {
  static resolves(schema) {
    return getSchemaType(schema) === "boolean" && getSchemaXOption(schema, "format") === "checkbox";
  }
  build() {
    this.control = this.theme.getCheckboxControl({
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  adaptForTable(td) {
    this.theme.adaptForTableCheckboxControl(this.control, td);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.checked, true, "editor");
    });
  }
  sanitize(value) {
    return Boolean(value);
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.input.checked = this.instance.getValue();
  }
}
class EditorString extends Editor {
  sanitize(value) {
    return String(value);
  }
}
class EditorStringRadios extends EditorString {
  static resolves(schema) {
    return getSchemaType(schema) === "string" && getSchemaXOption(schema, "format") === "radios";
  }
  build() {
    this.control = this.theme.getRadiosControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      inline: getSchemaXOption(this.instance.schema, "radioInline") || this.instance.jedi.options.radioInline,
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  adaptForTable() {
    this.theme.adaptForTableRadiosControl(this.control);
  }
  addEventListeners() {
    this.control.radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        this.instance.setValue(radio.value, true, "editor");
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.radios.forEach((radio) => {
      radio.checked = radio.value === this.instance.getValue();
    });
  }
}
class EditorStringSelect extends EditorString {
  static resolves(schema) {
    return getSchemaType(schema) === "string" && isSet(getSchemaEnum(schema));
  }
  build() {
    this.control = this.theme.getSelectControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  adaptForTable() {
    this.theme.adaptForTableSelectControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value, true, "editor");
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.input.value = this.instance.getValue();
  }
}
class EditorStringTextarea extends EditorString {
  static resolves(schema) {
    return getSchemaType(schema) === "string" && getSchemaXOption(schema, "format") === "textarea";
  }
  build() {
    this.control = this.theme.getTextareaControl({
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  adaptForTable() {
    this.theme.adaptForTableTextareaControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value, true, "editor");
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.input.value = this.instance.getValue();
  }
}
class EditorStringAwesomplete extends EditorString {
  static resolves(schema) {
    return window.Awesomplete && getSchemaType(schema) === "string" && isSet(getSchemaXOption(schema, "awesomplete"));
  }
  build() {
    this.control = this.theme.getInputControl({
      type: "text",
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
    try {
      this.awesomplete = new window.Awesomplete(this.control.input, getSchemaXOption(this.instance.schema, "awesomplete"));
      this.control.container.querySelector(".awesomplete").style.display = "block";
    } catch (e) {
      console.error("Awesomplete is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.control.input.addEventListener("awesomplete-selectcomplete", () => {
      this.instance.setValue(this.control.input.value, true, "editor");
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.input.value = this.instance.getValue();
  }
  destroy() {
    this.awesomplete.destroy();
    super.destroy();
  }
}
class EditorStringInput extends EditorString {
  static resolves(schema) {
    return getSchemaType(schema) === "string";
  }
  static getTypes() {
    return ["hidden", "color", "date", "datetime-local", "email", "number", "month", "password", "search", "time", "tel", "text", "url", "week"];
  }
  build() {
    const optionFormat = getSchemaXOption(this.instance.schema, "format");
    this.control = this.theme.getInputControl({
      type: EditorStringInput.getTypes().includes(optionFormat) ? optionFormat : "text",
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden") || optionFormat === "hidden",
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
    if (optionFormat === "color" && this.instance.value.length === 0) {
      this.instance.setValue("#000000", false, "editor");
    }
  }
  adaptForTable() {
    this.theme.adaptForTableInputControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value, true, "editor");
    });
  }
  sanitize(value) {
    return String(value);
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.input.value = this.instance.getValue();
  }
}
class EditorNumber extends Editor {
  sanitize(value) {
    if (getSchemaType(this.instance.schema) === "integer") {
      return Math.floor(Number(value));
    } else {
      return Number(value);
    }
  }
}
class EditorNumberRadios extends EditorNumber {
  static resolves(schema) {
    const schemaType = getSchemaType(schema);
    const schemaEnum = getSchemaEnum(schema);
    const optionFormat = getSchemaXOption(schema, "format");
    const typeIsNumeric = schemaType === "number" || schemaType === "integer";
    return typeIsNumeric && isSet(schemaEnum) && optionFormat === "radios";
  }
  build() {
    this.control = this.theme.getRadiosControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      inline: getSchemaXOption(this.instance.schema, "radioInline") || this.instance.jedi.options.radioInline,
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  adaptForTable() {
    this.theme.adaptForTableRadiosControl(this.control);
  }
  addEventListeners() {
    this.control.radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        const value = this.sanitize(radio.value);
        this.instance.setValue(value, true, "editor");
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.radios.forEach((radio) => {
      radio.checked = Number(radio.value) === Number(this.instance.getValue());
    });
  }
}
class EditorNumberSelect extends EditorNumber {
  static resolves(schema) {
    const schemaType = getSchemaType(schema);
    const typeIsNumeric = schemaType === "number" || schemaType === "integer";
    return typeIsNumeric && isSet(getSchemaEnum(schema));
  }
  build() {
    this.control = this.theme.getSelectControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  adaptForTable() {
    this.theme.adaptForTableSelectControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const value = this.sanitize(this.control.input.value);
      this.instance.setValue(value, true, "editor");
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const value = this.instance.getValue();
    if (isNumber(value)) {
      this.control.input.value = this.instance.getValue();
    }
  }
}
class EditorNumberInput extends EditorNumber {
  static resolves(schema) {
    const schemaType = getSchemaType(schema);
    return schemaType === "number" || schemaType === "integer";
  }
  build() {
    this.control = this.theme.getInputControl({
      type: "number",
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden") || getSchemaXOption(this.instance.schema, "format") === "hidden",
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
    this.control.input.setAttribute("step", "any");
  }
  adaptForTable() {
    this.theme.adaptForTableInputControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const value = this.sanitize(this.control.input.value);
      this.instance.setValue(value, true, "editor");
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const value = this.instance.getValue();
    if (isNumber(value)) {
      this.control.input.value = this.instance.getValue();
    }
  }
}
class EditorObject extends Editor {
  static resolves(schema) {
    return getSchemaType(schema) === "object";
  }
  build() {
    this.propertyActivators = {};
    const schemaOptions = this.instance.schema.options || {};
    let addProperty = true;
    const additionalProperties2 = getSchemaAdditionalProperties(this.instance.schema);
    if (isSet(additionalProperties2) && additionalProperties2 === false) {
      addProperty = false;
    }
    let enablePropertiesToggle = false;
    if (isSet(this.instance.jedi.options.enablePropertiesToggle)) {
      enablePropertiesToggle = this.instance.jedi.options.enablePropertiesToggle;
    }
    if (isSet(schemaOptions.enablePropertiesToggle)) {
      enablePropertiesToggle = schemaOptions.enablePropertiesToggle;
    }
    this.control = this.theme.getObjectControl({
      title: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      id: this.getIdFromPath(this.instance.path),
      description: getSchemaDescription(this.instance.schema),
      enablePropertiesToggle,
      addProperty,
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || getSchemaXOption(this.instance.schema, "enableCollapseToggle"),
      startCollapsed: this.instance.jedi.options.startCollapsed || getSchemaXOption(this.instance.schema, "startCollapsed"),
      readOnly: this.instance.isReadOnly(),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  addEventListeners() {
    this.control.addPropertyBtn.addEventListener("click", () => {
      const propertyName = this.control.addPropertyControl.input.value.split(" ").join("");
      const propertyNameEmpty = propertyName.length === 0;
      if (propertyNameEmpty) {
        return;
      }
      const propertyExist = isSet(this.instance.value[propertyName]);
      if (propertyExist) {
        return;
      }
      const schema = this.instance.getPropertySchema(propertyName);
      const child = this.instance.createChild(schema, propertyName);
      child.activate();
      this.instance.setValue(this.instance.value, true, "editor");
      this.control.addPropertyControl.input.value = "";
      const ariaLive = this.control.ariaLive;
      ariaLive.innerHTML = "";
      const schemaTitle = getSchemaTitle(child.schema);
      const label = isSet(schemaTitle) ? schemaTitle : propertyName;
      const ariaLiveMessage = this.theme.getAriaLiveMessage();
      ariaLiveMessage.textContent = label + " field was added to the form";
      ariaLive.appendChild(ariaLiveMessage);
      this.control.propertiesContainer.close();
      this.control.propertiesContainer.showModal();
    });
  }
  sanitize(value) {
    if (isObject(value)) {
      return value;
    }
    return {};
  }
  getInvalidFeedback(config) {
    return this.theme.getAlert(config);
  }
  refreshPropertiesSlot() {
    const schemaOptionEnablePropertiesToggle = getSchemaXOption(this.instance.schema, "enablePropertiesToggle");
    if (equal(this.instance.jedi.options.enablePropertiesToggle, true) || equal(schemaOptionEnablePropertiesToggle, true)) {
      const properties2 = this.instance.children.map((child) => child.getKey());
      while (this.control.propertiesActivators.firstChild) {
        this.control.propertiesActivators.removeChild(this.control.propertiesActivators.firstChild);
      }
      properties2.forEach((property) => {
        const isRequired = this.instance.isRequired(property);
        const isDependentRequired = this.instance.isDependentRequired(property);
        const notRequired = !isRequired && !isDependentRequired;
        const ariaLive = this.control.ariaLive;
        const schema = this.instance.getPropertySchema(property);
        const schemaTitle = getSchemaTitle(schema);
        const path = this.instance.path + this.instance.jedi.pathSeparator + property;
        const id = pathToAttribute(path) + "-activator";
        const label = isSet(schemaTitle) ? schemaTitle : property;
        if (notRequired) {
          const checkboxControl = this.theme.getCheckboxControl({
            id,
            label,
            titleHidden: false
          });
          const checkbox2 = checkboxControl.input;
          this.propertyActivators[property] = checkbox2;
          checkbox2.addEventListener("change", () => {
            ariaLive.innerHTML = "";
            const ariaLiveMessage = this.theme.getAriaLiveMessage();
            if (checkbox2.checked) {
              const child = this.instance.getChild(property);
              if (!child) {
                this.instance.createChild(schema, property);
              }
              this.instance.getChild(property).activate();
              ariaLiveMessage.textContent = label + " field was added to the form";
              ariaLive.appendChild(ariaLiveMessage);
            } else {
              this.instance.getChild(property).deactivate();
              ariaLiveMessage.textContent = label + " field was removed from the form";
              ariaLive.appendChild(ariaLiveMessage);
            }
            this.control.propertiesContainer.close();
            this.control.propertiesContainer.showModal();
          });
          this.control.propertiesActivators.appendChild(checkboxControl.container);
        }
        const checkbox = this.propertyActivators[property];
        if (checkbox) {
          checkbox.disabled = this.disabled;
          checkbox.checked = hasOwn(this.instance.getValue(), property);
        }
      });
    }
  }
  refreshEditors() {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.firstChild);
    }
    this.instance.children.forEach((child) => {
      if (child.isActive) {
        if (child.ui.control.container.parentNode === null) {
          this.control.childrenSlot.appendChild(child.ui.control.container);
        }
        if (this.disabled || this.instance.isReadOnly()) {
          child.ui.disable();
        } else {
          child.ui.enable();
        }
      } else {
        if (child.ui.control.container.parentNode) {
          child.ui.control.container.parentNode.removeChild(child.ui.control.container);
        }
      }
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.refreshPropertiesSlot();
    this.refreshEditors();
  }
}
class EditorObjectGrid extends EditorObject {
  static resolves(schema) {
    return getSchemaType(schema) === "object" && getSchemaXOption(schema, "format") === "grid";
  }
  refreshEditors() {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    }
    let row = this.theme.getRow();
    this.control.childrenSlot.appendChild(row);
    let colCount = 0;
    this.instance.children.forEach((child) => {
      if (child.isActive) {
        const columns = getSchemaXOption(child.schema, "gridColumns") || 12;
        const offset = getSchemaXOption(child.schema, "gridOffset") || 0;
        const col = this.theme.getCol(12, columns, offset);
        const newRow = getSchemaXOption(child.schema, "gridNewRow") || false;
        colCount += columns + offset;
        if (newRow) {
          row = this.theme.getRow();
          this.control.childrenSlot.appendChild(row);
          colCount = 0;
        }
        row.appendChild(col);
        col.appendChild(child.ui.control.container);
        if (colCount >= 12) {
          const clearfix = this.theme.getClearfix();
          row.appendChild(clearfix);
          colCount = 0;
        }
        if (this.disabled || this.instance.isReadOnly()) {
          child.ui.disable();
        } else {
          child.ui.enable();
        }
      }
    });
  }
}
class EditorObjectNav extends EditorObject {
  static resolves(schema) {
    return getSchemaType(schema) === "object" && getSchemaXOption(schema, "format") === "nav";
  }
  init() {
    super.init();
    this.activeTabIndex = 0;
  }
  refreshEditors() {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    }
    const row = this.theme.getRow();
    const cols = getSchemaXOption(this.instance.schema, "navColumns") || 4;
    const tabListCol = this.theme.getCol(12, cols);
    const tabContentCol = this.theme.getCol(12, 12 - cols);
    const tabContent = this.theme.getTabContent();
    const tabList = this.theme.getTabList({
      stacked: getSchemaXOption(this.instance.schema, "navStacked") || false,
      type: getSchemaXOption(this.instance.schema, "navType") || "pils"
    });
    this.control.childrenSlot.appendChild(row);
    row.appendChild(tabListCol);
    row.appendChild(tabContentCol);
    tabListCol.appendChild(tabList);
    tabContentCol.appendChild(tabContent);
    this.instance.children.forEach((child, index2) => {
      if (child.isActive) {
        const active = index2 === this.activeTabIndex;
        const id = pathToAttribute(child.path);
        const schemaTitle = getSchemaTitle(child.schema);
        const tab = this.theme.getTab({
          hasErrors: child.children.some((grandChild) => grandChild.ui.showingValidationErrors),
          title: isSet(schemaTitle) ? schemaTitle : child.getKey(),
          id,
          active
        });
        tab.list.addEventListener("click", () => {
          this.activeTabIndex = index2;
        });
        this.theme.setTabPaneAttributes(child.ui.control.container, active, id);
        tabList.appendChild(tab.list);
        tabContent.appendChild(child.ui.control.container);
        if (this.disabled || this.instance.isReadOnly()) {
          child.ui.disable();
        } else {
          child.ui.enable();
        }
      }
    });
  }
}
class EditorArray extends Editor {
  static resolves(schema) {
    return getSchemaType(schema) === "array";
  }
  build() {
    this.control = this.theme.getArrayControl({
      title: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      id: this.getIdFromPath(this.instance.path),
      description: getSchemaDescription(this.instance.schema),
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || getSchemaXOption(this.instance.schema, "enableCollapseToggle"),
      startCollapsed: this.instance.jedi.options.startCollapsed || getSchemaXOption(this.instance.schema, "startCollapsed"),
      readOnly: this.instance.isReadOnly(),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.instance.addItem();
    });
  }
  getInvalidFeedback(config) {
    return this.theme.getAlert(config);
  }
  sanitize(value) {
    if (isArray(value)) {
      return value;
    }
    return [];
  }
  isSortable() {
    return window.Sortable && isSet(getSchemaXOption(this.instance.schema, "sortable"));
  }
  refreshSortable(container) {
    if (this.isSortable()) {
      if (this.sortable) {
        this.sortable.destroy();
      }
      this.sortable = window.Sortable.create(container, {
        animation: 150,
        handle: ".jedi-array-drag",
        disabled: this.disabled || this.readOnly,
        onEnd: (evt) => {
          this.instance.move(evt.oldIndex, evt.newIndex);
        }
      });
    }
  }
  refreshUI() {
    const maxItems2 = getSchemaMaxItems(this.instance.schema);
    const minItems2 = getSchemaMinItems(this.instance.schema);
    this.control.childrenSlot.innerHTML = "";
    this.instance.children.forEach((child) => {
      const itemIndex = Number(child.getKey());
      const deleteBtn = this.theme.getDeleteItemBtn();
      const moveUpBtn = this.theme.getMoveUpItemBtn();
      const moveDownBtn = this.theme.getMoveDownItemBtn();
      const btnGroup = this.theme.getBtnGroup();
      const { container, arrayActions, body } = this.theme.getArrayItem({
        readOnly: this.instance.isReadOnly()
      });
      arrayActions.appendChild(btnGroup);
      btnGroup.appendChild(deleteBtn);
      btnGroup.appendChild(moveUpBtn);
      btnGroup.appendChild(moveDownBtn);
      if (this.isSortable()) {
        const dragBtn = this.theme.getDragItemBtn();
        btnGroup.appendChild(dragBtn);
      }
      this.control.childrenSlot.appendChild(container);
      body.appendChild(child.ui.control.container);
      deleteBtn.addEventListener("click", () => {
        const itemIndex2 = Number(child.path.split(this.instance.jedi.pathSeparator).pop());
        this.instance.deleteItem(itemIndex2);
      });
      moveUpBtn.addEventListener("click", () => {
        const toIndex = itemIndex - 1;
        this.instance.move(itemIndex, toIndex);
      });
      moveDownBtn.addEventListener("click", () => {
        const toIndex = itemIndex + 1;
        this.instance.move(itemIndex, toIndex);
      });
      if (this.disabled || this.instance.isReadOnly()) {
        child.ui.disable();
      } else {
        child.ui.enable();
      }
      if (isSet(minItems2) && this.instance.value.length <= minItems2) {
        deleteBtn.setAttribute("disabled", "");
      }
    });
    this.refreshInteractiveElements();
    this.refreshSortable(this.control.childrenSlot);
    if (isSet(maxItems2) && maxItems2 === this.instance.value.length) {
      this.control.addBtn.setAttribute("disabled", "");
    }
  }
}
class EditorArrayTable extends EditorArray {
  static resolves(schema) {
    return getSchemaType(schema) === "array" && getSchemaXOption(schema, "format") === "table";
  }
  init() {
    super.init();
    this.activeTabIndex = 0;
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.activeTabIndex = this.instance.value.length;
      this.instance.addItem();
    });
  }
  isSortable() {
    return window.Sortable && isSet(getSchemaXOption(this.instance.schema, "sortable"));
  }
  refreshUI() {
    this.control.childrenSlot.innerHTML = "";
    const table = this.theme.getTable();
    this.control.childrenSlot.appendChild(table.container);
    const th = this.theme.getTableHeader();
    th.style.minWidth = "100px";
    table.thead.appendChild(th);
    const tempEditor = this.instance.createItemInstance();
    const tableColWidth = getSchemaXOption(this.instance.schema, "tableColWidth");
    tempEditor.children.forEach((child) => {
      const itemTableColWidth = getSchemaXOption(child.schema, "tableColWidth");
      const th2 = this.theme.getTableHeader({
        minWidth: itemTableColWidth || tableColWidth || "auto"
      });
      if (child.ui.control.label) {
        th2.textContent = child.ui.control.label.textContent;
      }
      if (child.ui.control.legend) {
        th2.textContent = child.ui.control.legend.textContent;
      }
      table.thead.appendChild(th2);
    });
    tempEditor.destroy();
    this.instance.children.forEach((child, index2) => {
      const tbodyRow = document.createElement("tr");
      const buttonsTd = this.theme.getTableDefinition();
      const deleteBtn = this.theme.getDeleteItemBtn();
      const moveUpBtn = this.theme.getMoveUpItemBtn();
      const moveDownBtn = this.theme.getMoveDownItemBtn();
      const btnGroup = this.theme.getBtnGroup();
      deleteBtn.addEventListener("click", () => {
        this.activeTabIndex = clamp(index2 - 1, 0, this.instance.value.length - 1);
        this.instance.deleteItem(index2);
      });
      moveUpBtn.addEventListener("click", () => {
        const toIndex = index2 - 1;
        this.activeTabIndex = toIndex;
        this.instance.move(index2, toIndex);
      });
      moveDownBtn.addEventListener("click", () => {
        const toIndex = index2 + 1;
        this.activeTabIndex = toIndex;
        this.instance.move(index2, toIndex);
      });
      if (this.isSortable()) {
        const dragBtn = this.theme.getDragItemBtn();
        btnGroup.appendChild(dragBtn);
      }
      btnGroup.appendChild(moveUpBtn);
      btnGroup.appendChild(moveDownBtn);
      btnGroup.appendChild(deleteBtn);
      buttonsTd.appendChild(btnGroup);
      tbodyRow.appendChild(buttonsTd);
      if (child.children.length) {
        child.children.forEach((grandchild) => {
          const td = this.theme.getTableDefinition();
          grandchild.ui.adaptForTable(td);
          td.appendChild(grandchild.ui.control.container);
          tbodyRow.appendChild(td);
        });
      } else {
        const td = this.theme.getTableDefinition();
        child.ui.adaptForTable(td);
        td.appendChild(child.ui.control.container);
        tbodyRow.appendChild(td);
      }
      table.tbody.appendChild(tbodyRow);
    });
    this.refreshSortable(table.tbody);
    this.refreshInteractiveElements();
  }
  refreshSortable(container) {
    if (this.isSortable()) {
      if (this.sortable) {
        this.sortable.destroy();
      }
      this.sortable = window.Sortable.create(container, {
        animation: 150,
        handle: ".jedi-array-drag",
        disabled: this.disabled || this.readOnly,
        onEnd: (evt) => {
          this.instance.move(evt.oldIndex, evt.newIndex);
        }
      });
    }
  }
}
class EditorArrayNav extends EditorArray {
  static resolves(schema) {
    return getSchemaType(schema) === "array" && getSchemaXOption(schema, "format") === "nav";
  }
  init() {
    super.init();
    this.activeTabIndex = 0;
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.activeTabIndex = this.instance.value.length;
      this.instance.addItem();
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.childrenSlot.innerHTML = "";
    const row = this.theme.getRow();
    const cols = getSchemaXOption(this.instance.schema, "navColumns") || 4;
    const tabListCol = this.theme.getCol(12, cols);
    const tabContentCol = this.theme.getCol(12, 12 - cols);
    const tabContent = this.theme.getTabContent();
    const tabList = this.theme.getTabList({
      stacked: getSchemaXOption(this.instance.schema, "navStacked") || false,
      type: getSchemaXOption(this.instance.schema, "navType") || "pils"
    });
    this.control.childrenSlot.appendChild(row);
    row.appendChild(tabListCol);
    row.appendChild(tabContentCol);
    tabListCol.appendChild(tabList);
    tabContentCol.appendChild(tabContent);
    this.instance.children.forEach((child, index2) => {
      const deleteBtn = this.theme.getDeleteItemBtn();
      const moveUpBtn = this.theme.getMoveUpItemBtn();
      const moveDownBtn = this.theme.getMoveDownItemBtn();
      child.ui.control.arrayActions.innerHTML = "";
      child.ui.control.arrayActions.appendChild(deleteBtn);
      child.ui.control.arrayActions.appendChild(moveUpBtn);
      child.ui.control.arrayActions.appendChild(moveDownBtn);
      this.control.childrenSlot.appendChild(child.ui.control.container);
      let childTitle;
      const schemaOptionTitleTemplate = getSchemaXOption(this.instance.schema, "titleTemplate");
      if (schemaOptionTitleTemplate) {
        const template = schemaOptionTitleTemplate;
        const data = {
          i0: index2,
          i1: index2 + 1,
          value: child.getValue()
        };
        childTitle = compileTemplate(template, data);
      } else {
        const schemaTitle = getSchemaTitle(child.schema);
        childTitle = isSet(schemaTitle) ? schemaTitle + " " + (index2 + 1) : child.getKey();
      }
      deleteBtn.addEventListener("click", () => {
        this.activeTabIndex = clamp(index2 - 1, 0, this.instance.value.length - 1);
        this.instance.deleteItem(index2);
      });
      moveUpBtn.addEventListener("click", () => {
        const toIndex = index2 - 1;
        this.activeTabIndex = toIndex;
        this.instance.move(index2, toIndex);
      });
      moveDownBtn.addEventListener("click", () => {
        const toIndex = index2 + 1;
        this.activeTabIndex = toIndex;
        this.instance.move(index2, toIndex);
      });
      const active = index2 === this.activeTabIndex;
      const id = pathToAttribute(child.path);
      const tab = this.theme.getTab({
        hasErrors: child.children.some((grandChild) => grandChild.ui.showingValidationErrors),
        title: childTitle,
        id,
        active
      });
      tab.list.addEventListener("click", () => {
        this.activeTabIndex = index2;
      });
      this.theme.setTabPaneAttributes(child.ui.control.container, active, id);
      tabList.appendChild(tab.list);
      tabContent.appendChild(child.ui.control.container);
      if (this.disabled || this.instance.isReadOnly()) {
        child.ui.disable();
      } else {
        child.ui.enable();
      }
      if (index2 === 0) {
        moveUpBtn.setAttribute("disabled", "");
      }
      if (this.instance.value.length - 1 === index2) {
        moveDownBtn.setAttribute("disabled", "");
      }
    });
  }
}
class EditorMultiple extends Editor {
  static resolves(schema) {
    const schemaType = getSchemaType(schema);
    const schemaOneOf = getSchemaOneOf(schema);
    const schemaAnyOf = getSchemaAnyOf(schema);
    return isSet(schemaAnyOf) || isSet(schemaOneOf) || schemaType === "any" || isArray(schemaType) || notSet(schemaType);
  }
  build() {
    this.control = this.theme.getMultipleControl({
      title: "Options",
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      id: this.getIdFromPath(this.instance.path),
      description: getSchemaDescription(this.instance.schema),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels,
      switcher: true,
      readOnly: this.instance.isReadOnly()
    });
  }
  adaptForTable(td) {
    this.theme.adaptForTableMultipleControl(this.control, td);
  }
  addEventListeners() {
    this.control.switcher.input.addEventListener("change", () => {
      const index2 = Number(this.control.switcher.input.value);
      this.instance.switchInstance(index2, void 0, "editor");
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.control.childrenSlot.innerHTML = "";
    this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container);
    this.control.switcher.input.value = this.instance.index;
    if (this.disabled || this.instance.isReadOnly()) {
      this.instance.activeInstance.ui.disable();
    } else {
      this.instance.activeInstance.ui.enable();
    }
  }
  getInvalidFeedback(config) {
    return this.theme.getAlert(config);
  }
}
class EditorNull extends Editor {
  static resolves(schema) {
    return getSchemaType(schema) === "null";
  }
  build() {
    this.control = this.theme.getNullControl({
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden") || getSchemaXOption(this.instance.schema, "format") === "hidden",
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  sanitize() {
    return null;
  }
}
class EditorStringQuill extends EditorString {
  static resolves(schema) {
    return window.Quill && getSchemaType(schema) === "string" && isSet(getSchemaXOption(schema, "quill"));
  }
  build() {
    this.control = this.theme.getPlaceholderControl({
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
    try {
      this.quill = new window.Quill(this.control.placeholder, getSchemaXOption(this.instance.schema, "quill"));
    } catch (e) {
      console.error("Quill is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.quill.root.addEventListener("blur", () => {
      const quillText = this.quill.getText();
      if (quillText !== this.instance.getValue()) {
        this.instance.setValue(quillText, true, "editor");
      }
    });
  }
  refreshInteractiveElements() {
    if (this.disabled || this.readOnly) {
      this.quill.disable();
    } else {
      this.quill.enable();
    }
  }
  refreshUI() {
    super.refreshUI();
    this.quill.setText(this.instance.getValue());
  }
}
class EditorStringJodit extends EditorString {
  static resolves(schema) {
    return window.Jodit && getSchemaType(schema) === "string" && isSet(getSchemaXOption(schema, "jodit"));
  }
  build() {
    this.control = this.theme.getTextareaControl({
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
    try {
      this.jodit = window.Jodit.make(this.control.input, getSchemaXOption(this.instance.schema, "jodit"));
    } catch (e) {
      console.error("Jodit is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.jodit.events.on("change", () => {
      const joditValue = this.jodit.value;
      if (joditValue !== this.instance.getValue()) {
        this.instance.setValue(joditValue, true, "editor");
      }
    });
  }
  refreshInteractiveElements() {
    if (this.disabled || this.readOnly) {
      this.jodit.setReadOnly(true);
    } else {
      this.jodit.setReadOnly(false);
    }
  }
  refreshUI() {
    super.refreshUI();
    this.jodit.value = this.instance.getValue();
  }
  destroy() {
    this.jodit.destruct();
    super.destroy();
  }
}
class EditorStringFlatpickr extends EditorString {
  static resolves(schema) {
    return window.flatpickr && getSchemaType(schema) === "string" && isSet(getSchemaXOption(schema, "flatpickr"));
  }
  build() {
    this.control = this.theme.getInputControl({
      type: "text",
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
    try {
      this.flatpickr = window.flatpickr(this.control.input, getSchemaXOption(this.instance.schema, "flatpickr"));
    } catch (e) {
      console.error("Flatpickr is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value, true, "editor");
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    this.flatpickr.setDate(this.instance.getValue());
  }
  destroy() {
    this.flatpickr.destroy();
    super.destroy();
  }
}
class EditorNumberRaty extends EditorNumber {
  static resolves(schema) {
    return typeof Raty !== "undefined" && getSchemaType(schema) === "number" && isSet(getSchemaXOption(schema, "raty"));
  }
  build() {
    this.control = this.theme.getPlaceholderControl({
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, "labelIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
    try {
      this.raty = new Raty(this.control.placeholder, Object.assign({}, getSchemaXOption(this.instance.schema, "raty"), {
        click: (score) => {
          this.instance.setValue(score, true, "editor");
        }
      }));
      this.raty.init();
    } catch (e) {
      console.error("Raty is not available or not loaded correctly.", e);
    }
  }
  refreshInteractiveElements() {
    if (this.disabled || this.readOnly) {
      this.raty.readOnly(true);
    } else {
      this.raty.readOnly(false);
    }
  }
  refreshUI() {
    super.refreshUI();
    this.raty.score(this.instance.getValue());
  }
}
class EditorArrayCheckboxes extends Editor {
  static resolves(schema) {
    const schemaType = getSchemaType(schema);
    const schemaItems = getSchemaItems(schema);
    const schemaItemsType = isSet(schemaItems) && getSchemaType(schemaItems);
    const isArrayType = isSet(schemaType) && schemaType === "array";
    const isUniqueItems = getSchemaUniqueItems(schema) === true;
    const hasEnum = isSet(schemaItems) && isSet(getSchemaEnum(schema.items));
    const hasTypes = isSet(schemaItems) && isSet(schemaItemsType);
    const validTypes = ["string", "number", "integer"];
    const hasValidItemType = isSet(schemaItems) && isSet(schemaItemsType) && (validTypes.includes(schemaItemsType) || isArray(schemaItemsType) && schemaItemsType.some((type2) => validTypes.includes(type2)));
    return isArrayType && isUniqueItems && hasEnum && hasTypes && hasValidItemType;
  }
  build() {
    this.control = this.theme.getCheckboxesControl({
      values: getSchemaEnum(this.instance.schema.items),
      titles: getSchemaXOption(this.instance.schema.items, "enumTitles") || getSchemaEnum(this.instance.schema.items),
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      description: getSchemaDescription(this.instance.schema),
      infoButton: getSchemaXOption(this.instance.schema, "infoButton")
    });
  }
  adaptForTable(td) {
    this.theme.adaptForTableCheckboxesControl(this.control, td);
  }
  addEventListeners() {
    this.control.checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const value = this.instance.getValue();
        if (checkbox.checked) {
          value.push(checkbox.value);
        } else {
          const index2 = value.indexOf(checkbox.value);
          if (index2 > -1) {
            value.splice(index2, 1);
          }
        }
        this.instance.setValue(value, true, "editor");
      });
    });
  }
  refreshUI() {
    this.refreshInteractiveElements();
    const value = this.instance.getValue();
    this.control.checkboxes.forEach((checkbox) => {
      checkbox.checked = value.includes(checkbox.value);
    });
  }
}
class UiResolver {
  constructor(options) {
    this.customEditors = options.customEditors ?? [];
    this.editors = [
      EditorMultiple,
      EditorIfThenElse,
      EditorRadios,
      EditorBooleanCheckbox,
      EditorBooleanSelect,
      EditorStringRadios,
      EditorStringSelect,
      EditorStringTextarea,
      EditorStringAwesomplete,
      EditorStringQuill,
      EditorStringJodit,
      EditorStringFlatpickr,
      EditorStringInput,
      EditorNumberRaty,
      EditorNumberRadios,
      EditorNumberSelect,
      EditorNumberInput,
      EditorObjectGrid,
      EditorObjectNav,
      EditorObject,
      EditorArrayCheckboxes,
      EditorArrayTable,
      EditorArrayNav,
      EditorArray,
      EditorNull
    ];
  }
  getClass(schema) {
    for (const editor of this.customEditors) {
      if (editor.resolves(schema)) {
        return editor;
      }
    }
    for (const editor of this.editors) {
      if (editor.resolves(schema)) {
        return editor;
      }
    }
    return null;
  }
}
class Jedi extends EventEmitter {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   */
  constructor(options) {
    super();
    this.options = Object.assign({
      container: null,
      iconLib: null,
      theme: null,
      refParser: null,
      enablePropertiesToggle: false,
      enableCollapseToggle: false,
      startCollapsed: false,
      deactivateNonRequired: false,
      schema: {},
      showErrors: "change",
      data: void 0,
      assertFormat: false,
      mergeAllOf: false,
      enforceConst: false,
      enforceEnumDefault: true,
      customEditors: [],
      hiddenInputAttributes: {},
      id: "",
      radioInline: false,
      includeTitlesInMessages: false
    }, options);
    this.rootName = "#";
    this.pathSeparator = "/";
    this.instances = {};
    this.root = null;
    this.validator = null;
    this.schema = {};
    this.theme = null;
    this.uiResolver = null;
    this.refParser = this.options.refParser ? this.options.refParser : null;
    this.lastFocusedId = null;
    this.init();
    this.bindEventListeners();
  }
  /**
   * Initializes instance properties
   */
  init() {
    this.uiResolver = new UiResolver({
      customEditors: this.options.customEditors
    });
    this.theme = this.options.theme;
    if (isSet(this.options.iconLib)) {
      switch (this.options.iconLib) {
        case "glyphicons":
          this.theme.icons = glyphicons;
          break;
        case "bootstrap-icons":
          this.theme.icons = bootstrapIcons;
          break;
        case "fontawesome3":
          this.theme.icons = fontAwesome3;
          break;
        case "fontawesome4":
          this.theme.icons = fontAwesome4;
          break;
        case "fontawesome5":
          this.theme.icons = fontAwesome5;
          break;
        case "fontawesome6":
          this.theme.icons = fontAwesome6;
          break;
      }
    }
    this.schema = this.options.schema;
    this.validator = new Validator({ refParser: this.refParser, assertFormat: this.options.assertFormat });
    this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema,
      path: this.rootName
    });
    if (isSet(this.options.data)) {
      this.root.setValue(this.options.data, false);
    }
    if (this.options.container) {
      this.container = this.options.container;
      this.appendHiddenInput();
      this.container.appendChild(this.root.ui.control.container);
      this.container.classList.add("jedi-ready");
    }
  }
  bindEventListeners() {
    if (this.root) {
      this.root.on("change", (context) => {
        this.emit("change", context);
      });
    }
    if (this.hiddenInput) {
      this.on("change", (context) => {
        this.hiddenInput.value = JSON.stringify(this.getValue());
        if (context === "editor") {
          this.refreshFocus();
        }
      });
      document.addEventListener("focus", (event) => {
        this.lastFocusedId = event.target.id;
      }, true);
      document.addEventListener("keydown", (event) => {
        this.lastKeyEvent = event;
      });
    }
  }
  /**
   * Reapplies focus to the element that was removed and re-appended to the DOM
   * @type String
   */
  refreshFocus() {
    const el = document.getElementById(this.lastFocusedId);
    if (el) {
      el.focus();
      if (this.lastKeyEvent && this.lastKeyEvent.key === "Tab") {
        this.simulateTab(el, this.lastKeyEvent.shiftKey);
      }
    }
  }
  simulateTab(currentElement, shift) {
    const focusableElements = document.querySelectorAll('input, button, select, textarea, a[href], [tabindex]:not([tabindex="-1"])');
    const index2 = Array.prototype.indexOf.call(focusableElements, currentElement);
    if (index2 !== -1) {
      if (shift) {
        if (index2 > 0) {
          focusableElements[index2 - 1].focus();
        }
      } else {
        if (index2 + 1 < focusableElements.length) {
          focusableElements[index2 + 1].focus();
        }
      }
    }
  }
  /**
   * Appends a hidden input to the root container whose value will be the value
   * of the root instance.
   */
  appendHiddenInput() {
    const hiddenControl = this.root.ui.theme.getInputControl({
      type: "hidden",
      id: "jedi-hidden-input"
    });
    this.hiddenInput = hiddenControl.input;
    this.hiddenInput.setAttribute("name", "json");
    this.hiddenInput.removeAttribute("aria-describedby");
    if (this.options.hiddenInputAttributes && isObject(this.options.hiddenInputAttributes)) {
      Object.keys(this.options.hiddenInputAttributes).forEach((attr) => {
        this.hiddenInput.setAttribute(attr, this.options.hiddenInputAttributes[attr]);
      });
    }
    this.container.appendChild(this.hiddenInput);
    this.hiddenInput.value = JSON.stringify(this.getValue());
  }
  /**
   * Adds a child instance pointer to the instances list
   */
  register(instance) {
    this.instances[instance.path] = instance;
  }
  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister(instance) {
    this.instances[instance.path] = null;
    delete this.instances[instance.path];
  }
  /**
   * Creates a json instance and dereference schema on the fly if needed.
   */
  createInstance(config) {
    const mergeAllOf = this.options.mergeAllOf || getSchemaXOption(config.schema, "mergeAllOf");
    if (mergeAllOf) {
      const allOf2 = getSchemaAllOf(config.schema);
      if (isSet(allOf2)) {
        allOf2.forEach((subschema) => {
          config.schema = mergeDeep({}, config.schema, subschema);
        });
      }
    }
    if (this.refParser) {
      config.schema = this.refParser.expand(config.schema, config.path);
    }
    const schemaType = getSchemaType(config.schema);
    const schemaOneOf = getSchemaOneOf(config.schema);
    const schemaAnyOf = getSchemaAnyOf(config.schema);
    const schemaIf = getSchemaIf(config.schema);
    if (isSet(schemaAnyOf) || isSet(schemaOneOf) || schemaType === "any" || isArray(schemaType) || notSet(schemaType)) {
      return new InstanceMultiple(config);
    }
    if (isSet(schemaIf)) {
      return new InstanceIfThenElse(config);
    }
    if (schemaType === "object") {
      return new InstanceObject(config);
    }
    if (schemaType === "array") {
      return new InstanceArray(config);
    }
    if (schemaType === "string") {
      return new InstanceString(config);
    }
    if (schemaType === "number" || schemaType === "integer") {
      return new InstanceNumber(config);
    }
    if (schemaType === "boolean") {
      return new InstanceBoolean(config);
    }
    if (schemaType === "null") {
      return new InstanceNull(config);
    }
  }
  /**
   * Returns the value of the root instance
   * @return {*}
   */
  getValue() {
    return this.root.getValue();
  }
  /**
   * Sets the value of the root instance
   */
  setValue() {
    this.root.setValue(...arguments);
  }
  /**
   * Returns an instance by path
   * @return {*}
   */
  getInstance(path) {
    return this.instances[path];
  }
  /**
   * Disables the root instance and it's children user interfaces
   */
  disable() {
    this.root.ui.disable();
  }
  /**
   * Enables the root instance and it's children user interfaces
   */
  enable() {
    this.root.ui.enable();
  }
  /**
   * Returns an array of validation error messages
   */
  getErrors() {
    let errors = [];
    Object.keys(this.instances).forEach((key) => {
      const instance = this.instances[key];
      errors = [...errors, ...instance.getErrors()];
    });
    return errors;
  }
  /**
   * Displays validation errors in the respective editors.
   * If an errors list is passed, it will display these errors;
   * otherwise, it will retrieve existing errors from the instance.
   *
   * @param {Array|null} errorsList - An optional array containing error messages.
   * @returns {boolean} Returns `true` if the container exists and errors are displayed,
   * or `false` if there is no container and thus no errors are displayed.
   */
  showValidationErrors(errorsList = null) {
    if (!this.options.container) {
      return false;
    }
    const errors = errorsList || this.getErrors();
    Object.keys(this.instances).forEach((key) => {
      const instance = this.instances[key];
      instance.ui.showValidationErrors(errors, true);
    });
  }
  /**
   * Destroy the root instance and it's children
   */
  destroy() {
    this.root.destroy();
    if (this.options.container) {
      this.container.innerHTML = "";
    }
    Object.keys(this).forEach((key) => {
      delete this[key];
    });
  }
}
class RefParser {
  constructor() {
    this.refs = {};
    this.data = {};
    this.iterations = 0;
    this.maxIterations = 1e3;
  }
  async dereference(schema) {
    await this.collectRefs(schema);
    while (this.iterations < this.maxIterations) {
      if (this.refsResolved()) {
        break;
      }
      this.iterations++;
      await this.collectRefs(schema);
    }
    const missingRefs = Object.entries(this.refs).filter(([key, value]) => value === null).map(([key]) => key);
    if (missingRefs.length) {
      console.warn("Missing refs:", JSON.stringify(missingRefs));
    }
  }
  refsResolved() {
    return Object.values(this.refs).every((value) => {
      return value !== null;
    });
  }
  /**
   * Traverses the given schema recursively and for each schema with $ref
   * add a new property in the this.refs object with key being the json path to that schema.
   * If the ref has no value in data will be given a value of null. This value will be later
   * replaced in a future iteration. At that time the data will be available
   * @param schema
   * @param path
   */
  async collectRefs(schema, path = "#") {
    if (typeof schema !== "object" || schema === null) {
      return;
    }
    for (const [key, value] of Object.entries(schema)) {
      const nextPath = path ? `${path}/${key}` : `/${key}`;
      if (this.hasRef(schema)) {
        const ref = schema["$ref"];
        if (this.isExternalRef(ref)) {
          const resolvedSchema = await this.load(ref);
          this.refs[ref] = resolvedSchema;
          await this.collectRefs(resolvedSchema, nextPath);
        } else {
          this.refs[ref] = this.data[ref] ?? null;
        }
      }
      this.data[path] = schema;
      await this.collectRefs(value, nextPath);
    }
  }
  hasRef(schema) {
    return typeof schema["$ref"] !== "undefined" && typeof schema["$ref"] === "string";
  }
  isExternalRef(ref) {
    if (typeof ref !== "string") {
      return false;
    }
    return ref.startsWith("http") || ref.startsWith("https");
  }
  isObject(value) {
    return value !== null && typeof value === "object";
  }
  expand(schema) {
    const cloneSchema = JSON.parse(JSON.stringify(schema));
    if (this.isObject(cloneSchema) && this.hasRef(cloneSchema)) {
      const ref = cloneSchema.$ref;
      delete cloneSchema["$ref"];
      return this.expand(mergeDeep({}, this.refs[ref], cloneSchema));
    }
    return cloneSchema;
  }
  /**
   * Loads a schema with a synchronous http request
   * @param uri
   * @returns {any}
   */
  async load(uri) {
    try {
      const response = await fetch(uri);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error loading", uri, error);
      throw error;
    }
  }
}
class Theme {
  constructor(icons = null) {
    this.icons = icons;
    this.useToggleEvents = true;
    this.init();
  }
  /**
   * Inits some instance properties
   */
  init() {
    this.useToggleEvents = true;
  }
  /**
   * Used to wrap the editor UI elements
   */
  getEditorContainer() {
    const html = document.createElement("div");
    html.classList.add("jedi-editor-container");
    return html;
  }
  /**
   * Used to group several controls
   */
  getFieldset() {
    const html = document.createElement("fieldset");
    html.classList.add("jedi-editor-fieldset");
    return html;
  }
  /**
   * Represents a caption for the content of its parent fieldset
   */
  getLegend(config) {
    const legend = document.createElement("legend");
    const legendText = document.createElement("span");
    legend.classList.add("jedi-editor-legend");
    legendText.classList.add("jedi-editor-legend-text");
    legend.setAttribute("aria-labelledby", "#legend-" + config.id);
    legendText.innerHTML = this.purifyContent(config.textContent);
    legendText.setAttribute("id", "#legend-" + config.id);
    legend.appendChild(legendText);
    return { legend, legendText };
  }
  /**
   * Represents a caption for the content of its parent fieldset
   */
  getLabel(config) {
    const label = document.createElement("label");
    const labelText = document.createElement("span");
    const icon = this.getIcon(config.labelIconClass);
    label.setAttribute("for", config.for);
    labelText.innerHTML = this.purifyContent(config.text);
    label.classList.add("jedi-title");
    if (config.visuallyHidden) {
      this.visuallyHidden(label);
    }
    label.appendChild(icon);
    label.appendChild(labelText);
    return { label, labelText, icon };
  }
  getFakeLabel(config) {
    const label = document.createElement("span");
    const labelText = document.createElement("span");
    const icon = this.getIcon(config.labelIconClass);
    labelText.textContent = config.text;
    label.classList.add("jedi-title");
    if (config.visuallyHidden) {
      this.visuallyHidden(label);
    }
    label.appendChild(icon);
    label.appendChild(labelText);
    return { label, labelText, icon };
  }
  /**
   * Returns a icon element
   */
  getIcon(classes = "") {
    const icon = document.createElement("i");
    let iconClasses = classes.split(" ");
    iconClasses = iconClasses.filter((className) => className.length > 0);
    if (iconClasses) {
      iconClasses.forEach((className) => {
        icon.classList.add(className);
      });
    }
    return icon;
  }
  /**
   * Container for complex editors like arrays, objects and multiple
   */
  getCard() {
    const html = document.createElement("div");
    html.classList.add("jedi-editor-card");
    return html;
  }
  /**
   * Header for cards
   */
  getCardHeader() {
    const html = document.createElement("div");
    html.classList.add("jedi-editor-card-header");
    return html;
  }
  /**
   * A body for the cards
   */
  getCardBody() {
    const html = document.createElement("div");
    html.classList.add("jedi-editor-card-body");
    return html;
  }
  /**
   * Wrapper for editor actions buttons
   */
  getActionsSlot() {
    const html = document.createElement("div");
    html.classList.add("jedi-actions-slot");
    return html;
  }
  /**
   * Wrapper for editor array specific actions buttons
   */
  getArrayActionsSlot() {
    const html = document.createElement("span");
    html.classList.add("jedi-array-actions-slot");
    return html;
  }
  /**
   * Wrapper for child editors
   */
  getChildrenSlot() {
    const html = document.createElement("div");
    html.classList.add("jedi-children-slot");
    return html;
  }
  /**
   * Wrapper for error messages
   */
  getMessagesSlot(config = {}) {
    const html = document.createElement("div");
    html.classList.add("jedi-messages-slot");
    html.setAttribute("aria-atomic", "false");
    html.setAttribute("aria-live", "polite");
    if (config.id) {
      html.setAttribute("id", config.id);
    }
    return html;
  }
  /**
   * Wrapper for editor controls
   */
  getControlSlot() {
    const html = document.createElement("div");
    html.classList.add("jedi-control-slot");
    return html;
  }
  /**
   * Toggles the ObjectEditor properties wrapper visibility
   */
  getPropertiesToggle(config) {
    const toggle = this.getButton(config);
    toggle.classList.add("jedi-properties-toggle");
    toggle.addEventListener("click", () => {
      if (config.propertiesContainer.open) {
        config.propertiesContainer.close();
      } else {
        config.propertiesContainer.showModal();
      }
    });
    return toggle;
  }
  /**
   * Container that will collapse and expand to show and hide it contents
   */
  getCollapse(config) {
    const collapse = document.createElement("div");
    collapse.classList.add("jedi-collapse");
    collapse.setAttribute("id", config.id);
    if (this.useToggleEvents && config.startCollapsed) {
      collapse.style.display = "none";
    }
    return collapse;
  }
  /**
   * Toggle button for collapse
   */
  getCollapseToggle(config) {
    const toggle = this.getButton(config);
    toggle.classList.add("jedi-collapse-toggle");
    if (this.useToggleEvents) {
      toggle.addEventListener("click", () => {
        if (config.collapse.style.display === "none") {
          config.collapse.style.display = "block";
        } else {
          config.collapse.style.display = "none";
        }
      });
    }
    let collapsed = config.startCollapsed;
    toggle.style.transition = "transform 0.1s ease";
    if (collapsed) {
      toggle.style.transform = "rotate(90deg)";
    }
    toggle.addEventListener("click", () => {
      if (collapsed) {
        toggle.style.transform = "rotate(0deg)";
      } else {
        toggle.style.transform = "rotate(90deg)";
      }
      collapsed = !collapsed;
    });
    return toggle;
  }
  /**
   * Container for properties editing elements like property activators
   */
  getPropertiesSlot(config) {
    const html = document.createElement("dialog");
    html.classList.add("jedi-properties-slot");
    html.setAttribute("id", config.id);
    window.addEventListener("click", (event) => {
      if (event.target === html) {
        html.close();
      }
    });
    return html;
  }
  /**
   * Container for screen reader announced messages
   */
  getPropertiesAriaLive() {
    const html = document.createElement("div");
    html.classList.add("jedi-properties-aria-live");
    html.setAttribute("role", "status");
    html.setAttribute("aria-live", "polite");
    return html;
  }
  /**
   * A message that will be announced by screen reader
   */
  getAriaLiveMessage(message) {
    const html = document.createElement("p");
    html.classList.add("jedi-aria-live-message");
    html.textContent = message;
    this.visuallyHidden(html);
    return html;
  }
  /**
   * Wrapper for property activators
   */
  getPropertiesActivators() {
    const html = document.createElement("div");
    html.classList.add("jedi-properties-activators");
    return html;
  }
  /**
   * Wrapper buttons
   */
  getBtnGroup() {
    const html = document.createElement("span");
    html.classList.add("jedi-btn-group");
    return html;
  }
  /**
   * A button
   */
  getButton(config) {
    const button = document.createElement("button");
    button.classList.add("jedi-btn");
    button.setAttribute("type", "button");
    if (config.value) {
      button.value = config.value;
    }
    if (config.id) {
      button.setAttribute("id", config.id);
    }
    const text = document.createElement("span");
    text.textContent = config.textContent;
    if (this.icons && config.icon) {
      const icon = this.getIcon(this.icons[config.icon]);
      icon.setAttribute("title", config.textContent);
      button.appendChild(icon);
      this.visuallyHidden(text);
    }
    button.appendChild(text);
    return button;
  }
  /**
   * Array "add" item button
   */
  getArrayBtnAdd() {
    const html = this.getButton({
      textContent: "Add item",
      icon: "add"
    });
    html.classList.add("jedi-array-add");
    return html;
  }
  getAddPropertyButton() {
    const html = this.getButton({
      textContent: "Add property"
    });
    html.classList.add("jedi-add-property-btn");
    return html;
  }
  /**
   * Array "delete" item button
   */
  getDeleteItemBtn() {
    const deleteItemBtn = this.getButton({
      textContent: "Delete item",
      icon: "delete"
    });
    deleteItemBtn.classList.add("jedi-array-delete");
    return deleteItemBtn;
  }
  /**
   * Array "move up" item button
   */
  getMoveUpItemBtn() {
    const moveUpItemBtn = this.getButton({
      textContent: "Move up",
      icon: "moveUp"
    });
    moveUpItemBtn.classList.add("jedi-array-move-up");
    return moveUpItemBtn;
  }
  /**
   * Array "move down" item button
   */
  getMoveDownItemBtn() {
    const moveDownItemBtn = this.getButton({
      textContent: "Move down",
      icon: "moveDown"
    });
    moveDownItemBtn.classList.add("jedi-array-move-down");
    return moveDownItemBtn;
  }
  getDragItemBtn() {
    const dragItemBtn = this.getButton({
      textContent: "Drag",
      icon: "drag"
    });
    dragItemBtn.classList.add("jedi-array-drag");
    return dragItemBtn;
  }
  /**
   * Wrapper for the editor description
   */
  getDescription(config = {}) {
    const description = document.createElement("small");
    description.style.display = "block";
    description.classList.add("jedi-description");
    if (config.content) {
      description.innerHTML = this.purifyContent(config.content);
    }
    if (config.id) {
      description.setAttribute("id", config.id);
    }
    return description;
  }
  /**
   * Info button to display extra information
   */
  getInfoButton(config = {}) {
    const container = document.createElement("span");
    const infoButton = document.createElement("a");
    const infoButtonText = document.createElement("span");
    infoButton.setAttribute("href", "#");
    container.classList.add("jedi-info-button-container");
    infoButton.classList.add("jedi-info-button");
    container.style.display = "inline-block";
    infoButton.style.marginLeft = "4px";
    infoButtonText.textContent = "More information";
    this.visuallyHidden(infoButtonText);
    if (isObject(config.attributes)) {
      for (const [key, value] of Object.entries(config.attributes)) {
        infoButton.setAttribute(key, value);
      }
    }
    if (this.icons) {
      const icon = this.getIcon(this.icons["infoButton"]);
      icon.setAttribute("title", "More information");
      infoButton.appendChild(icon);
    }
    infoButton.appendChild(infoButtonText);
    container.appendChild(infoButton);
    return { container, infoButton };
  }
  /**
   * Dialog or modal that contains extra information about the control
   */
  infoButtonAsModal(infoButton, id, config = {}) {
    const dialog = document.createElement("dialog");
    const title = document.createElement("div");
    const content = document.createElement("div");
    const closeBtn = this.getButton({
      textContent: "Close",
      icon: "close"
    });
    dialog.classList.add("jedi-modal-dialog");
    title.classList.add("jedi-modal-title");
    content.classList.add("jedi-modal-content");
    closeBtn.classList.add("jedi-modal-close");
    infoButton.container.appendChild(dialog);
    dialog.appendChild(title);
    dialog.appendChild(content);
    dialog.appendChild(closeBtn);
    window.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
    closeBtn.addEventListener("click", () => {
      dialog.close();
    });
    infoButton.infoButton.addEventListener("click", () => {
      dialog.showModal();
    });
    if (isString(config.title)) {
      title.innerHTML = this.purifyContent(config.title);
    }
    if (isString(config.content)) {
      content.innerHTML = this.purifyContent(config.content);
    }
  }
  /**
   * Clean out HTML tags from txt
   */
  purifyContent(content) {
    if (window.DOMPurify) {
      const clean = window.DOMPurify.sanitize(content);
      if (window.DOMPurify.removed.length) {
        console.warn("DOMPurify removed the following elements:", window.DOMPurify.removed);
      }
      return clean;
    } else {
      const tmp = document.createElement("div");
      tmp.innerHTML = content;
      return tmp.textContent || tmp.innerText;
    }
  }
  getPlaceholderControl(config) {
    var _a;
    const container = document.createElement("div");
    const placeholder = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden,
      labelIconClass: config.labelIconClass
    });
    const descriptionId = config.id + "-description";
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const messagesId = config.id + "-messages";
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    const infoButton = this.getInfoButton(config.infoButton);
    if (((_a = config == null ? void 0 : config.infoButton) == null ? void 0 : _a.variant) === "modal") {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton);
    }
    container.appendChild(label);
    if (isObject(config.infoButton)) {
      label.appendChild(infoButton.container);
    }
    container.appendChild(placeholder);
    container.appendChild(description);
    container.appendChild(messages);
    container.appendChild(actions);
    actions.appendChild(arrayActions);
    return { container, placeholder, label, labelText, description, messages, actions, arrayActions };
  }
  /**
   * Object control is a card containing multiple editors.
   * Each editor is mapped to an object instance property.
   * Properties can be added, activated and deactivated depending on configuration
   */
  getObjectControl(config) {
    var _a;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const body = this.getCardBody();
    const ariaLive = this.getPropertiesAriaLive();
    const description = this.getDescription({
      content: config.description
    });
    const messages = this.getMessagesSlot();
    const childrenSlot = this.getChildrenSlot();
    const propertiesContainer = this.getPropertiesSlot({
      id: "properties-slot-" + config.id
    });
    const propertiesToggle = this.getPropertiesToggle({
      textContent: config.title + " properties",
      id: "properties-slot-toggle-" + config.id,
      icon: "properties",
      propertiesContainer
    });
    const collapseId = "collapse-" + config.id;
    const collapse = this.getCollapse({
      id: collapseId,
      startCollapsed: config.startCollapsed
    });
    const collapseToggle = this.getCollapseToggle({
      textContent: config.title + " properties",
      id: "collapse-toggle-" + config.id,
      icon: "collapse",
      collapseId,
      collapse,
      startCollapsed: config.startCollapsed
    });
    const propertiesActivators = this.getPropertiesActivators();
    const addPropertyControl = this.getInputControl({
      type: "text",
      id: "jedi-add-property-input-" + config.id,
      label: "Property"
    });
    const addPropertyBtn = this.getAddPropertyButton();
    const fieldset = this.getFieldset();
    const { legend, legendText } = this.getLegend({
      textContent: config.title,
      id: config.id
    });
    const infoButton = this.getInfoButton(config.infoButton);
    if (((_a = config == null ? void 0 : config.infoButton) == null ? void 0 : _a.variant) === "modal") {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton);
    }
    addPropertyBtn.classList.add("jedi-object-add");
    container.appendChild(fieldset);
    container.appendChild(propertiesContainer);
    fieldset.appendChild(legend);
    if (isObject(config.infoButton)) {
      legendText.appendChild(infoButton.container);
    }
    fieldset.appendChild(collapse);
    collapse.appendChild(body);
    if (config.description) {
      body.appendChild(description);
    }
    body.appendChild(messages);
    if (config.readOnly === false) {
      legend.appendChild(actions);
    }
    actions.appendChild(arrayActions);
    body.appendChild(childrenSlot);
    if (config.addProperty) {
      propertiesContainer.appendChild(addPropertyControl.container);
      propertiesContainer.appendChild(addPropertyBtn);
      propertiesContainer.appendChild(document.createElement("hr"));
    }
    if (config.enablePropertiesToggle) {
      actions.appendChild(propertiesToggle);
      propertiesContainer.appendChild(ariaLive);
      propertiesContainer.appendChild(propertiesActivators);
    }
    if (config.enableCollapseToggle) {
      actions.appendChild(collapseToggle);
    }
    return {
      container,
      collapse,
      collapseToggle,
      body,
      actions,
      messages,
      childrenSlot,
      propertiesToggle,
      propertiesContainer,
      addPropertyControl,
      addPropertyBtn,
      ariaLive,
      propertiesActivators,
      arrayActions
    };
  }
  /**
   * Array control is a card containing multiple editors.
   * Items can bve added, deleted or moved up or down.
   */
  getArrayControl(config) {
    var _a;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const body = this.getCardBody();
    const description = this.getDescription({
      content: config.description
    });
    const messages = this.getMessagesSlot();
    const childrenSlot = this.getChildrenSlot();
    const btnGroup = this.getBtnGroup();
    const addBtn = this.getArrayBtnAdd();
    const fieldset = this.getFieldset();
    const { legend, legendText } = this.getLegend({
      textContent: config.title,
      id: config.id
    });
    const collapseId = "collapse-" + config.id;
    const collapse = this.getCollapse({
      id: collapseId,
      startCollapsed: config.startCollapsed
    });
    const collapseToggle = this.getCollapseToggle({
      textContent: config.title + " properties",
      id: "collapse-toggle-" + config.id,
      icon: "collapse",
      collapseId,
      collapse,
      startCollapsed: config.startCollapsed
    });
    const infoButton = this.getInfoButton(config.infoButton);
    if (((_a = config == null ? void 0 : config.infoButton) == null ? void 0 : _a.variant) === "modal") {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton);
    }
    container.appendChild(fieldset);
    fieldset.appendChild(legend);
    if (isObject(config.infoButton)) {
      legendText.appendChild(infoButton.container);
    }
    fieldset.appendChild(collapse);
    collapse.appendChild(body);
    if (config.description) {
      body.appendChild(description);
    }
    body.appendChild(messages);
    if (config.readOnly === false) {
      legend.appendChild(actions);
    }
    actions.appendChild(btnGroup);
    btnGroup.appendChild(addBtn);
    actions.appendChild(arrayActions);
    body.appendChild(childrenSlot);
    if (config.enableCollapseToggle) {
      actions.appendChild(collapseToggle);
    }
    return {
      container,
      collapseToggle,
      collapse,
      body,
      actions,
      messages,
      childrenSlot,
      btnGroup,
      addBtn,
      arrayActions
    };
  }
  getArrayItem(config = {}) {
    const container = document.createElement("div");
    const card = this.getCard();
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const header = this.getCardHeader();
    const body = this.getCardBody();
    container.appendChild(card);
    card.appendChild(header);
    card.appendChild(body);
    if (config.readOnly === false) {
      header.appendChild(actions);
    }
    actions.appendChild(arrayActions);
    return {
      container,
      card,
      header,
      body,
      actions,
      arrayActions
    };
  }
  /**
   * Multiple control is a card containing multiple editors options that can be
   * selected with a switcher control. Only one editor can be active/visible
   * at a time
   */
  getMultipleControl(config = {}) {
    const container = document.createElement("div");
    const card = this.getCard();
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const header = this.getCardHeader({
      textContent: config.title,
      titleHidden: config.titleHidden
    });
    const body = this.getCardBody();
    const description = this.getDescription({
      content: config.description
    });
    const messages = this.getMessagesSlot();
    const childrenSlot = this.getChildrenSlot();
    const randomId = generateRandomID(5);
    const switcher = this.getSwitcher({
      values: config.switcherOptionValues,
      titles: config.switcherOptionsLabels,
      id: config.id + "-switcher-" + randomId,
      label: config.id + "-switcher-" + randomId,
      titleHidden: true,
      readOnly: config.readOnly
    });
    switcher.container.classList.add("jedi-switcher");
    container.appendChild(description);
    if (config.description) {
      container.appendChild(description);
    }
    container.appendChild(card);
    card.appendChild(header);
    card.appendChild(body);
    if (config.readOnly === false) {
      header.appendChild(actions);
    }
    if (config.switcher) {
      actions.appendChild(switcher.container);
    }
    actions.appendChild(arrayActions);
    body.appendChild(messages);
    body.appendChild(childrenSlot);
    return {
      container,
      card,
      header,
      body,
      actions,
      messages,
      childrenSlot,
      switcher,
      arrayActions
    };
  }
  adaptForTableMultipleControl(control, td) {
  }
  getIfThenElseControl(config) {
    const container = document.createElement("div");
    const card = this.getCard();
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const header = this.getCardHeader({
      textContent: config.title,
      titleHidden: config.titleHidden
    });
    const body = this.getCardBody();
    const description = this.getDescription({
      content: config.description
    });
    const messages = this.getMessagesSlot();
    const childrenSlot = this.getChildrenSlot();
    body.appendChild(description);
    container.appendChild(messages);
    container.appendChild(childrenSlot);
    return {
      container,
      card,
      header,
      body,
      actions,
      messages,
      childrenSlot,
      arrayActions
    };
  }
  /**
   * Control for NullEditor
   */
  getNullControl(config) {
    var _a;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const { label, labelText } = this.getFakeLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden,
      labelIconClass: config.labelIconClass
    });
    const descriptionId = config.id + "-description";
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const messages = this.getMessagesSlot();
    const br = document.createElement("br");
    const infoButton = this.getInfoButton(config.infoButton);
    if (((_a = config == null ? void 0 : config.infoButton) == null ? void 0 : _a.variant) === "modal") {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton);
    }
    container.appendChild(label);
    if (isObject(config.infoButton)) {
      label.appendChild(infoButton.container);
    }
    container.appendChild(br);
    container.appendChild(description);
    container.appendChild(messages);
    container.appendChild(actions);
    actions.appendChild(arrayActions);
    return { container, label, labelText, description, messages, actions, arrayActions };
  }
  /**
   * A Textarea
   */
  getTextareaControl(config) {
    var _a;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const input = document.createElement("textarea");
    input.setAttribute("id", config.id);
    input.style.width = "100%";
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    });
    const descriptionId = config.id + "-description";
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const messagesId = config.id + "-messages";
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    const describedBy = messagesId + " " + descriptionId;
    input.setAttribute("aria-describedby", describedBy);
    const infoButton = this.getInfoButton(config.infoButton);
    if (((_a = config == null ? void 0 : config.infoButton) == null ? void 0 : _a.variant) === "modal") {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton);
    }
    container.appendChild(label);
    if (isObject(config.infoButton)) {
      label.appendChild(infoButton.container);
    }
    container.appendChild(input);
    container.appendChild(description);
    container.appendChild(messages);
    container.appendChild(actions);
    actions.appendChild(arrayActions);
    return { container, input, label, labelText, description, messages, actions, arrayActions };
  }
  adaptForTableTextareaControl(control) {
    this.visuallyHidden(control.label);
    this.visuallyHidden(control.description);
    this.visuallyHidden(control.messages);
  }
  /**
   * An Input control
   */
  getInputControl(config) {
    var _a;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const input = document.createElement("input");
    input.setAttribute("type", config.type);
    input.setAttribute("id", config.id);
    input.style.width = "100%";
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden,
      labelIconClass: config.labelIconClass
    });
    const descriptionId = config.id + "-description";
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const messagesId = config.id + "-messages";
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    const describedBy = messagesId + " " + descriptionId;
    input.setAttribute("aria-describedby", describedBy);
    container.appendChild(label);
    const infoButton = this.getInfoButton(config.infoButton);
    if (((_a = config == null ? void 0 : config.infoButton) == null ? void 0 : _a.variant) === "modal") {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton);
    }
    if (isObject(config.infoButton)) {
      label.appendChild(infoButton.container);
    }
    container.appendChild(input);
    container.appendChild(description);
    container.appendChild(messages);
    container.appendChild(actions);
    actions.appendChild(arrayActions);
    return { container, input, label, infoButton, labelText, description, messages, actions, arrayActions };
  }
  adaptForTableInputControl(control) {
    this.visuallyHidden(control.label);
    this.visuallyHidden(control.description);
    this.visuallyHidden(control.messages);
  }
  /**
   * A radio group control
   */
  getRadiosControl(config) {
    var _a;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const fieldset = this.getFieldset();
    const body = this.getCardBody();
    const { legend, legendText } = this.getLegend({
      textContent: config.label,
      id: config.id
    });
    const messagesId = config.id + "-messages";
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    const descriptionId = config.id + "-description";
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const infoButton = this.getInfoButton(config.infoButton);
    if (((_a = config == null ? void 0 : config.infoButton) == null ? void 0 : _a.variant) === "modal") {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton);
    }
    if (config.titleHidden) {
      this.visuallyHidden(legend);
    }
    const radioControls = [];
    const radios = [];
    const labels = [];
    const labelTexts = [];
    config.values.forEach((value, index2) => {
      const radioControl = document.createElement("div");
      radioControls.push(radioControl);
      const radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("id", config.id + "-" + index2);
      radio.setAttribute("name", config.id);
      radio.setAttribute("value", value);
      radios.push(radio);
      const describedBy = messagesId + " " + descriptionId;
      radio.setAttribute("aria-describedby", describedBy);
      const label = document.createElement("label");
      label.setAttribute("for", config.id + "-" + index2);
      const labelText = document.createElement("span");
      labelTexts.push(labelText);
      if (isSet(config.titles) && isSet(config.titles[index2])) {
        labelText.textContent = config.titles[index2] ?? value;
      }
      labels.push(label);
    });
    container.appendChild(fieldset);
    container.appendChild(actions);
    fieldset.appendChild(legend);
    if (isObject(config.infoButton)) {
      legendText.appendChild(infoButton.container);
    }
    fieldset.appendChild(body);
    actions.appendChild(arrayActions);
    radioControls.forEach((radioControl, index2) => {
      body.appendChild(radioControls[index2]);
      radioControl.appendChild(radios[index2]);
      radioControl.appendChild(labels[index2]);
      labels[index2].appendChild(labelTexts[index2]);
    });
    fieldset.appendChild(description);
    fieldset.appendChild(messages);
    return {
      container,
      fieldset,
      legend,
      infoButton,
      body,
      radios,
      labels,
      labelTexts,
      radioControls,
      description,
      messages,
      actions,
      arrayActions
    };
  }
  adaptForTableRadiosControl(control) {
    this.visuallyHidden(control.legend);
    this.visuallyHidden(control.description);
    this.visuallyHidden(control.messages);
  }
  /**
   * A checkbox control
   */
  getCheckboxControl(config) {
    var _a;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const formGroup = document.createElement("span");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", config.id);
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    });
    const descriptionId = config.id + "-description";
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const messagesId = config.id + "-messages";
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    const describedBy = messagesId + " " + descriptionId;
    input.setAttribute("aria-describedby", describedBy);
    const infoButton = this.getInfoButton(config.infoButton);
    if (((_a = config == null ? void 0 : config.infoButton) == null ? void 0 : _a.variant) === "modal") {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton);
    }
    container.appendChild(formGroup);
    container.appendChild(actions);
    actions.appendChild(arrayActions);
    formGroup.appendChild(input);
    formGroup.appendChild(label);
    if (isObject(config.infoButton)) {
      formGroup.appendChild(infoButton.container);
    }
    formGroup.appendChild(description);
    formGroup.appendChild(messages);
    return { container, formGroup, input, label, infoButton, labelText, description, messages, actions, arrayActions };
  }
  adaptForTableCheckboxControl(control, td) {
    this.visuallyHidden(control.label);
    this.visuallyHidden(control.description);
    this.visuallyHidden(control.messages);
    td.style.textAlign = "center";
  }
  getCheckboxesControl(config) {
    var _a;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const fieldset = this.getFieldset();
    const body = this.getCardBody();
    const { legend, legendText } = this.getLegend({
      textContent: config.label,
      id: config.id
    });
    const messagesId = config.id + "-messages";
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    const descriptionId = config.id + "-description";
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    if (config.titleHidden) {
      this.visuallyHidden(legend);
    }
    const checkboxControls = [];
    const checkboxes = [];
    const labels = [];
    const labelTexts = [];
    config.values.forEach((value, index2) => {
      const checkboxControl = document.createElement("div");
      checkboxControls.push(checkboxControl);
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", config.id + "-" + index2);
      checkbox.setAttribute("value", value);
      checkboxes.push(checkbox);
      const describedBy = messagesId + " " + descriptionId;
      checkbox.setAttribute("aria-describedby", describedBy);
      const label = document.createElement("label");
      label.setAttribute("for", config.id + "-" + index2);
      const labelText = document.createElement("span");
      labelTexts.push(labelText);
      if (config.titles && config.titles[index2]) {
        labelText.textContent = config.titles[index2];
      }
      labels.push(label);
    });
    const infoButton = this.getInfoButton(config.infoButton);
    if (((_a = config == null ? void 0 : config.infoButton) == null ? void 0 : _a.variant) === "modal") {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton);
    }
    container.appendChild(fieldset);
    container.appendChild(actions);
    fieldset.appendChild(legend);
    if (isObject(config.infoButton)) {
      legendText.appendChild(infoButton.container);
    }
    fieldset.appendChild(body);
    actions.appendChild(arrayActions);
    checkboxControls.forEach((checkboxControl, index2) => {
      body.appendChild(checkboxControls[index2]);
      checkboxControl.appendChild(checkboxes[index2]);
      checkboxControl.appendChild(labels[index2]);
      labels[index2].appendChild(labelTexts[index2]);
    });
    body.appendChild(description);
    body.appendChild(messages);
    return {
      container,
      fieldset,
      legend,
      body,
      checkboxes,
      labels,
      labelTexts,
      checkboxControls,
      description,
      messages,
      actions,
      arrayActions
    };
  }
  adaptForTableCheckboxesControl(control, td) {
    this.visuallyHidden(control.legend);
    this.visuallyHidden(control.description);
    this.visuallyHidden(control.messages);
    td.style.textAlign = "center";
  }
  /**
   * A select control
   */
  getSelectControl(config) {
    var _a;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    const input = document.createElement("select");
    input.setAttribute("id", config.id);
    config.values.forEach((value, index2) => {
      const option = document.createElement("option");
      option.setAttribute("value", value);
      if (config.titles && config.titles[index2]) {
        option.textContent = config.titles[index2];
      }
      input.appendChild(option);
    });
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    });
    const descriptionId = config.id + "-description";
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const messagesId = config.id + "-messages";
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    const describedBy = messagesId + " " + descriptionId;
    input.setAttribute("aria-describedby", describedBy);
    const infoButton = this.getInfoButton(config.infoButton);
    if (((_a = config == null ? void 0 : config.infoButton) == null ? void 0 : _a.variant) === "modal") {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton);
    }
    container.appendChild(label);
    if (isObject(config.infoButton)) {
      label.appendChild(infoButton.container);
    }
    container.appendChild(input);
    container.appendChild(description);
    container.appendChild(messages);
    container.appendChild(actions);
    actions.appendChild(arrayActions);
    return { container, input, label, infoButton, labelText, description, messages, actions, arrayActions };
  }
  adaptForTableSelectControl(control) {
    this.visuallyHidden(control.label);
    this.visuallyHidden(control.description);
    this.visuallyHidden(control.messages);
  }
  /**
   * Control to switch between multiple editors options
   */
  getSwitcher(config) {
    const container = document.createElement("span");
    const input = document.createElement("select");
    input.setAttribute("id", config.id);
    config.values.forEach((value, index2) => {
      const option = document.createElement("option");
      option.setAttribute("value", value);
      if (config.titles && config.titles[index2]) {
        option.textContent = config.titles[index2];
      }
      input.appendChild(option);
    });
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    });
    container.appendChild(label);
    container.appendChild(input);
    return { container, input, label, labelText };
  }
  /**
   * Another type of error message container used for more complex editors like
   * object, array and multiple editors
   */
  getAlert(config) {
    return this.getInvalidFeedback(config);
  }
  /**
   * Error messages
   * @public
   */
  getInvalidFeedback(config) {
    const html = document.createElement("div");
    const invalidFeedbackText = document.createElement("span");
    const invalidFeedbackIcon = document.createElement("span");
    invalidFeedbackText.textContent = config.message;
    invalidFeedbackIcon.textContent = "⚠ ";
    invalidFeedbackIcon.classList.add("jedi-error-message");
    invalidFeedbackIcon.setAttribute("aria-hidden", "true");
    html.classList.add("jedi-error-message");
    html.appendChild(invalidFeedbackIcon);
    html.appendChild(invalidFeedbackText);
    return html;
  }
  /**
   * Container for columns
   */
  getRow() {
    const row = document.createElement("div");
    row.classList.add("jedi-row");
    return row;
  }
  /**
   * A column to contain content to a specific width
   */
  getCol(xs, md, offsetMd) {
    const col = document.createElement("div");
    col.classList.add("jedi-col-xs-" + xs);
    col.classList.add("jedi-col-md-" + md);
    if (offsetMd) {
      col.classList.add("jedi-col-md-offset-" + offsetMd);
    }
    return col;
  }
  /**
   * Clearfix fixes layout issues in some libraries like bootstrap 3
   */
  getClearfix() {
    const clearfix = document.createElement("div");
    clearfix.classList.add("clearfix");
    return clearfix;
  }
  /**
   * Tab list is a list of links that triggers tabs visibility ne at the time
   */
  getTabList() {
    const tabList = document.createElement("ul");
    tabList.classList.add("jedi-nav-list");
    return tabList;
  }
  /**
   * A Tab is a wrapper for content
   */
  getTab(config) {
    const list = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("jedi-nav-link");
    link.setAttribute("href", "#" + config.id);
    link.textContent = config.hasErrors ? "⚠ " + config.title : config.title;
    list.appendChild(link);
    return { list, link };
  }
  /**
   * Wrapper for tabs
   */
  getTabContent() {
    const tabContent = document.createElement("div");
    tabContent.classList.add("tab-content");
    return tabContent;
  }
  /**
   * A simple table layout
   */
  getTable() {
    const container = document.createElement("div");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
    return { container, table, thead, tbody };
  }
  /**
   * Returns a <td> element
   */
  getTableDefinition() {
    const td = document.createElement("td");
    td.style.verticalAlign = "middle";
    td.style.whiteSpace = "nowrap";
    return td;
  }
  /**
   * Returns a <th> element
   */
  getTableHeader(config = {}) {
    const th = document.createElement("th");
    th.style.paddingLeft = "12px";
    th.style.paddingRight = "12px";
    if (config.minWidth) {
      th.style.minWidth = config.minWidth;
    }
    return th;
  }
  /**
   * Set tab attributes to make it toggleable
   */
  setTabPaneAttributes(element, active, id) {
    element.setAttribute("id", id);
    element.classList.add("jedi-tab-pane");
  }
  /**
   * Makes an element visually hidden
   */
  visuallyHidden(element) {
    element.setAttribute("style", "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;");
  }
  /**
   * Reveals a visually hidden element
   */
  visuallyVisible(element) {
    element.removeAttribute("style");
  }
  /**
   * Makes an element physically hidden
   */
  physicallyHidden(element) {
    element.style.display = "none";
  }
}
class ThemeBootstrap3 extends Theme {
  init() {
    this.useToggleEvents = false;
  }
  getAddPropertyButton() {
    const btn = super.getAddPropertyButton();
    btn.classList.add("btn-primary");
    btn.classList.add("btn-block");
    return btn;
  }
  getCollapseToggle(config) {
    const toggle = super.getCollapseToggle(config);
    toggle.setAttribute("href", "#" + config.collapseId);
    toggle.setAttribute("data-toggle", "collapse");
    return toggle;
  }
  getCollapse(config) {
    const collapse = super.getCollapse(config);
    collapse.classList.add("collapse");
    if (!config.startCollapsed) {
      collapse.classList.add("in");
    }
    return collapse;
  }
  getFieldset() {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("panel");
    fieldset.classList.add("panel-default");
    return fieldset;
  }
  getLegend(config) {
    const superLegend = super.getLegend(config);
    const { legend } = superLegend;
    legend.classList.add("h5");
    legend.classList.add("panel-heading");
    legend.classList.add("pull-left");
    legend.setAttribute("style", "margin: 0; display: flex; justify-content: space-between; align-items: center;");
    return superLegend;
  }
  getLabel(config) {
    const labelObj = super.getLabel(config);
    if (labelObj.icon.classList) {
      labelObj.icon.setAttribute("style", "margin-right: 5px;");
    }
    return labelObj;
  }
  getCard() {
    const card = super.getCard();
    card.classList.add("panel");
    card.classList.add("panel-default");
    return card;
  }
  getCardHeader(config) {
    const header = super.getCardHeader(config);
    header.classList.add("panel-heading");
    header.classList.add("text-right");
    return header;
  }
  getCardBody() {
    const html = super.getCardBody();
    html.classList.add("panel-body");
    html.style.clear = "both";
    return html;
  }
  getBtnGroup() {
    const html = super.getBtnGroup();
    html.classList.add("btn-group");
    return html;
  }
  getButton(config) {
    const html = super.getButton(config);
    html.classList.add("btn");
    html.classList.add("btn-xs");
    html.classList.add("btn-default");
    return html;
  }
  getDescription(config) {
    const description = super.getDescription(config);
    description.classList.add("text-muted");
    description.style.marginBottom = "15px";
    return description;
  }
  getTextareaControl(config) {
    const control = super.getTextareaControl(config);
    const { container, input, label } = control;
    container.classList.add("form-group");
    input.classList.add("form-control");
    if (config.titleHidden) {
      this.visuallyHidden(label);
    }
    return control;
  }
  adaptForTableTextareaControl(control) {
    super.adaptForTableTextareaControl(control);
    control.container.classList.remove("form-group");
  }
  getInputControl(config) {
    const control = super.getInputControl(config);
    const { container, input, label } = control;
    container.classList.add("form-group");
    input.classList.add("form-control");
    if (config.titleHidden) {
      this.visuallyHidden(label);
    }
    return control;
  }
  adaptForTableInputControl(control, td) {
    super.adaptForTableInputControl(control, td);
    control.container.classList.remove("form-group");
  }
  getRadiosControl(config) {
    const control = super.getRadiosControl(config);
    const { body, radios, labels, labelTexts, radioControls, description, messages } = control;
    radioControls.forEach((radioControl, index2) => {
      radioControl.classList.add("radio");
      if (config.inline) {
        radioControl.style.display = "inline-flex";
        radioControl.style.alignItems = "center";
        radioControl.style.paddingLeft = "0";
        radioControl.style.marginRight = "30px";
      }
      body.appendChild(radioControls[index2]);
      radioControl.appendChild(labels[index2]);
      labels[index2].appendChild(radios[index2]);
      labels[index2].appendChild(labelTexts[index2]);
    });
    body.appendChild(description);
    body.appendChild(messages);
    return control;
  }
  adaptForTableRadiosControl(control, td) {
    super.adaptForTableRadiosControl(control, td);
    control.fieldset.classList.remove("panel");
    control.fieldset.classList.remove("panel-default");
    control.body.classList.remove("panel-body");
  }
  getCheckboxesControl(config) {
    const control = super.getCheckboxesControl(config);
    const { body, checkboxes, labels, labelTexts, checkboxControls } = control;
    checkboxControls.forEach((checkboxControl, index2) => {
      checkboxControl.classList.add("checkbox");
      body.appendChild(checkboxControls[index2]);
      checkboxControl.appendChild(labels[index2]);
      labels[index2].appendChild(checkboxes[index2]);
      labels[index2].appendChild(labelTexts[index2]);
    });
    return control;
  }
  adaptForTableCheckboxesControl(control, td) {
    super.adaptForTableCheckboxesControl(control, td);
    control.fieldset.classList.remove("panel");
    control.fieldset.classList.remove("panel-default");
    control.body.classList.remove("panel-body");
  }
  getCheckboxControl(config) {
    const control = super.getCheckboxControl(config);
    const { container, formGroup, description, messages } = control;
    container.appendChild(formGroup);
    container.appendChild(description);
    container.appendChild(messages);
    return control;
  }
  adaptForTableCheckboxControl(control, td) {
    super.adaptForTableCheckboxControl(control, td);
  }
  getSelectControl(config) {
    const control = super.getSelectControl(config);
    const { container, input, label } = control;
    container.classList.add("form-group");
    input.classList.add("form-control");
    if (config.titleHidden) {
      this.visuallyHidden(label);
    }
    return control;
  }
  adaptForTableSelectControl(control, td) {
    super.adaptForTableSelectControl(control, td);
    control.container.classList.remove("form-group");
  }
  adaptForTableMultipleControl(control, td) {
    super.adaptForTableMultipleControl(control, td);
  }
  getAlert(config) {
    const html = super.getAlert(config);
    html.classList.add("alert");
    html.classList.add("alert-danger");
    return html;
  }
  getInvalidFeedback(config) {
    const html = super.getInvalidFeedback(config);
    html.classList.add("text-danger");
    return html;
  }
  getRow() {
    const row = super.getRow();
    row.classList.add("row");
    return row;
  }
  getCol(xs, md, offsetMd) {
    const col = super.getRow();
    col.classList.add("col-xs-" + xs);
    col.classList.add("col-md-" + md);
    if (offsetMd) {
      col.classList.add("col-md-offset-" + offsetMd);
    }
    return col;
  }
  getTabList(config) {
    const tabList = super.getTabList(config);
    tabList.classList.add("nav");
    if (config.type === "tabs") {
      tabList.classList.add("nav-tabs");
    } else {
      tabList.classList.add("nav-pills");
    }
    tabList.classList.add("nav-stacked");
    if (config.stacked === false) {
      tabList.classList.remove("nav-stacked");
    }
    return tabList;
  }
  getTab(config) {
    const tab = super.getTab(config);
    if (config.active) {
      tab.list.classList.add("active");
    }
    tab.link.setAttribute("data-toggle", "tab");
    return tab;
  }
  /**
   * A simple table layout
   */
  getTable() {
    const container = document.createElement("div");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    container.classList.add("table-responsive");
    table.classList.add("table");
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
    return { container, table, thead, tbody };
  }
  setTabPaneAttributes(element, active, id) {
    super.setTabPaneAttributes(element, active, id);
    element.classList.add("tab-pane");
    if (active) {
      element.classList.add("in");
      element.classList.add("active");
    }
  }
  infoButtonAsModal(infoButton, id, config = {}) {
    const modal = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("div");
    const modalBody = document.createElement("div");
    const closeBtn = this.getButton({
      textContent: "Close",
      icon: "close"
    });
    const modalId = id + "-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("id", modalId);
    closeBtn.setAttribute("data-dismiss", "modal");
    infoButton.infoButton.setAttribute("data-toggle", "modal");
    infoButton.infoButton.setAttribute("data-target", "#" + modalId);
    modal.classList.add("modal");
    modal.classList.add("fade");
    modalDialog.classList.add("modal-dialog");
    modalContent.classList.add("modal-content");
    modalHeader.classList.add("modal-header");
    modalTitle.classList.add("modal-title");
    modalBody.classList.add("modal-body");
    closeBtn.classList.add("jedi-modal-close");
    closeBtn.classList.add("close");
    if (isString(config.title)) {
      modalTitle.innerHTML = this.purifyContent(config.title);
    }
    if (isString(config.content)) {
      modalBody.innerHTML = this.purifyContent(config.content);
    }
    infoButton.container.appendChild(modal);
    modal.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalHeader.appendChild(closeBtn);
    modalHeader.appendChild(modalTitle);
    modalContent.appendChild(modalBody);
  }
  visuallyHidden(element) {
    element.classList.add("sr-only");
  }
  visuallyVisible(element) {
    element.classList.remove("sr-only");
  }
}
class ThemeBootstrap4 extends Theme {
  init() {
    this.useToggleEvents = false;
  }
  getAddPropertyButton() {
    const btn = super.getAddPropertyButton();
    btn.classList.add("btn-primary");
    btn.classList.add("btn-block");
    return btn;
  }
  getCollapseToggle(config) {
    const toggle = super.getCollapseToggle(config);
    toggle.setAttribute("href", "#" + config.collapseId);
    toggle.setAttribute("data-toggle", "collapse");
    return toggle;
  }
  getCollapse(config) {
    const collapse = super.getCollapse(config);
    collapse.classList.add("collapse");
    if (!config.startCollapsed) {
      collapse.classList.add("show");
    }
    return collapse;
  }
  getFieldset() {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("card");
    fieldset.classList.add("mb-3");
    return fieldset;
  }
  getLegend(config) {
    const superLegend = super.getLegend(config);
    const { legend } = superLegend;
    legend.classList.add("h6");
    legend.classList.add("card-header");
    legend.classList.add("d-flex");
    legend.classList.add("justify-content-between");
    legend.classList.add("align-items-center");
    legend.classList.add("float-left");
    legend.classList.add("py-2");
    return superLegend;
  }
  getLabel(config) {
    const labelObj = super.getLabel(config);
    if (labelObj.icon.classList) {
      labelObj.icon.classList.add("mr-1");
    }
    return labelObj;
  }
  getCard() {
    const card = super.getCard();
    card.classList.add("card");
    card.classList.add("mb-3");
    return card;
  }
  getCardHeader(config) {
    const html = super.getCardHeader(config);
    html.classList.add("card-header");
    html.classList.add("d-flex");
    html.classList.add("justify-content-end");
    html.classList.add("align-items-center");
    html.classList.add("py-1");
    return html;
  }
  getCardBody() {
    const html = super.getCardBody();
    html.classList.add("card-body");
    html.classList.add("pb-0");
    return html;
  }
  getBtnGroup() {
    const html = super.getBtnGroup();
    html.classList.add("btn-group");
    return html;
  }
  getButton(config) {
    const html = super.getButton(config);
    html.classList.add("btn");
    html.classList.add("btn-sm");
    return html;
  }
  getDescription(config) {
    const description = super.getDescription(config);
    description.classList.add("text-muted");
    description.classList.add("mb-3");
    return description;
  }
  getTextareaControl(config) {
    const control = super.getTextareaControl(config);
    const { container, input, label } = control;
    container.classList.add("form-group");
    input.classList.add("form-control");
    if (config.titleHidden) {
      this.visuallyHidden(label);
    }
    return control;
  }
  adaptForTableTextareaControl(control) {
    super.adaptForTableTextareaControl(control);
    control.container.classList.remove("form-group");
  }
  getInputControl(config) {
    const control = super.getInputControl(config);
    const { container, input, label } = control;
    container.classList.add("form-group");
    input.classList.add("form-control");
    if (config.titleHidden) {
      this.visuallyHidden(label);
    }
    return control;
  }
  adaptForTableInputControl(control, td) {
    super.adaptForTableInputControl(control, td);
    control.container.classList.remove("form-group");
  }
  getRadiosControl(config) {
    const control = super.getRadiosControl(config);
    const { container, body, radios, labels, labelTexts, radioControls, description, messages } = control;
    container.classList.add("form-group");
    radioControls.forEach((radioControl, index2) => {
      radioControl.classList.add("form-check");
      radios[index2].classList.add("form-check-input");
      labels[index2].classList.add("form-check-label");
      if (config.inline) {
        radioControl.classList.add("form-check-inline");
      }
      body.appendChild(radioControls[index2]);
      radioControl.appendChild(radios[index2]);
      radioControl.appendChild(labels[index2]);
      labels[index2].appendChild(labelTexts[index2]);
    });
    body.appendChild(description);
    body.appendChild(messages);
    return control;
  }
  adaptForTableRadiosControl(control, td) {
    super.adaptForTableRadiosControl(control, td);
    control.container.classList.remove("form-group");
    control.fieldset.classList.remove("card");
    control.fieldset.classList.remove("mb-3");
    control.body.classList.remove("card-body");
  }
  getCheckboxesControl(config) {
    const control = super.getCheckboxesControl(config);
    const { checkboxes, labels, checkboxControls } = control;
    checkboxControls.forEach((checkboxControl, index2) => {
      checkboxControl.classList.add("form-group");
      checkboxControl.classList.add("form-check");
      checkboxes[index2].classList.add("form-check-input");
      labels[index2].classList.add("form-check-label");
    });
    return control;
  }
  adaptForTableCheckboxesControl(control, td) {
    super.adaptForTableCheckboxesControl(control, td);
    control.container.classList.remove("form-group");
    control.fieldset.classList.remove("card");
    control.fieldset.classList.remove("mb-3");
    control.body.classList.remove("card-body");
    control.body.classList.remove("card-body");
  }
  getCheckboxControl(config) {
    const control = super.getCheckboxControl(config);
    const { container, formGroup, input, label, infoButton, description, messages } = control;
    container.classList.add("form-group");
    formGroup.classList.add("form-check");
    input.classList.add("form-check-input");
    label.classList.add("form-check-label");
    container.appendChild(formGroup);
    formGroup.appendChild(input);
    formGroup.appendChild(label);
    if (isObject(config.infoButton)) {
      formGroup.appendChild(infoButton.container);
    }
    container.appendChild(description);
    container.appendChild(messages);
    return control;
  }
  adaptForTableCheckboxControl(control, td) {
    super.adaptForTableCheckboxControl(control, td);
    control.container.classList.remove("form-group");
    control.formGroup.classList.remove("form-check");
    control.input.classList.remove("form-check-input");
    control.label.classList.remove("form-check-label");
  }
  getSelectControl(config) {
    const control = super.getSelectControl(config);
    const { container, input } = control;
    container.classList.add("form-group");
    input.classList.add("form-control");
    return control;
  }
  adaptForTableSelectControl(control, td) {
    super.adaptForTableSelectControl(control, td);
    control.container.classList.remove("form-group");
  }
  adaptForTableMultipleControl(control, td) {
    super.adaptForTableMultipleControl(control, td);
    control.card.classList.remove("mb-3");
  }
  getAlert(config) {
    const html = super.getAlert(config);
    html.classList.add("alert");
    html.classList.add("alert-danger");
    return html;
  }
  getInvalidFeedback(config) {
    const html = super.getInvalidFeedback(config);
    html.classList.add("text-danger");
    html.classList.add("form-text");
    html.classList.add("d-block");
    return html;
  }
  getColumnClass(size, cols) {
    return "col-" + size + "-" + cols;
  }
  getRow() {
    const row = super.getRow();
    row.classList.add("row");
    return row;
  }
  getCol(xs, md, offsetMd) {
    const col = super.getRow(xs, md, offsetMd);
    col.classList.add("col-" + xs);
    col.classList.add("col-md-" + md);
    if (offsetMd) {
      col.classList.add("offset-md-" + offsetMd);
    }
    return col;
  }
  getTabList(config) {
    const tabList = super.getTabList();
    tabList.classList.add("nav");
    if (config.type === "tabs") {
      tabList.classList.add("nav-tabs");
    } else {
      tabList.classList.add("nav-pills");
    }
    tabList.classList.add("flex-column");
    if (config.stacked === false) {
      tabList.classList.remove("flex-column");
    }
    return tabList;
  }
  getTab(config) {
    const tab = super.getTab(config);
    tab.list.classList.add("nav-item");
    tab.link.classList.add("nav-link");
    tab.link.setAttribute("data-toggle", "tab");
    if (config.active) {
      tab.link.classList.add("active");
    }
    return tab;
  }
  /**
   * A simple table layout
   */
  getTable() {
    const container = document.createElement("div");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    container.classList.add("table-responsive");
    table.classList.add("table");
    table.classList.add("table-sm");
    table.classList.add("align-middle");
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
    return { container, table, thead, tbody };
  }
  setTabPaneAttributes(element, active, id) {
    super.setTabPaneAttributes(element, active, id);
    element.classList.add("tab-pane");
    if (active) {
      element.classList.add("active");
    }
  }
  infoButtonAsModal(infoButton, id, config = {}) {
    const modal = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("div");
    const modalBody = document.createElement("div");
    const closeBtn = this.getButton({
      textContent: "Close",
      icon: "close"
    });
    const modalId = id + "-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("id", modalId);
    closeBtn.setAttribute("data-dismiss", "modal");
    infoButton.infoButton.setAttribute("data-toggle", "modal");
    infoButton.infoButton.setAttribute("data-target", "#" + modalId);
    infoButton.container.classList.add("ml-1");
    modal.classList.add("modal");
    modal.classList.add("fade");
    modalDialog.classList.add("modal-dialog");
    modalContent.classList.add("modal-content");
    modalHeader.classList.add("modal-header");
    modalTitle.classList.add("modal-title");
    modalBody.classList.add("modal-body");
    closeBtn.classList.add("jedi-modal-close");
    closeBtn.classList.add("close");
    if (isString(config.title)) {
      modalTitle.innerHTML = this.purifyContent(config.title);
    }
    if (isString(config.content)) {
      modalBody.innerHTML = this.purifyContent(config.content);
    }
    infoButton.container.appendChild(modal);
    modal.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);
    modalContent.appendChild(modalBody);
  }
  visuallyHidden(element) {
    element.classList.add("sr-only");
  }
  visuallyVisible(element) {
    element.classList.remove("sr-only");
  }
}
class ThemeBootstrap5 extends Theme {
  init() {
    this.useToggleEvents = false;
  }
  getAddPropertyButton() {
    const btn = super.getAddPropertyButton();
    btn.classList.add("btn-primary");
    btn.classList.add("w-100");
    return btn;
  }
  getCollapseToggle(config) {
    const toggle = super.getCollapseToggle(config);
    toggle.setAttribute("href", "#" + config.collapseId);
    toggle.setAttribute("data-bs-toggle", "collapse");
    return toggle;
  }
  getCollapse(config) {
    const collapse = super.getCollapse(config);
    collapse.classList.add("collapse");
    if (!config.startCollapsed) {
      collapse.classList.add("show");
    }
    return collapse;
  }
  getFieldset() {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("card");
    fieldset.classList.add("mb-3");
    return fieldset;
  }
  getLegend(config) {
    const superLegend = super.getLegend(config);
    const { legend } = superLegend;
    legend.classList.add("h6");
    legend.classList.add("card-header");
    legend.classList.add("d-flex");
    legend.classList.add("justify-content-between");
    legend.classList.add("align-items-center");
    legend.classList.add("py-2");
    return superLegend;
  }
  getLabel(config) {
    const labelObj = super.getLabel(config);
    if (labelObj.icon.classList) {
      labelObj.icon.classList.add("me-1");
    }
    return labelObj;
  }
  getCard() {
    const card = super.getCard();
    card.classList.add("card");
    card.classList.add("mb-3");
    return card;
  }
  getCardHeader(config) {
    const html = super.getCardHeader(config);
    html.classList.add("card-header");
    html.classList.add("d-flex");
    html.classList.add("justify-content-end");
    html.classList.add("align-items-center");
    html.classList.add("py-1");
    return html;
  }
  getCardBody() {
    const html = super.getCardBody();
    html.classList.add("card-body");
    html.classList.add("pb-0");
    return html;
  }
  getControlSlot() {
    const controlSlot = super.getControlSlot();
    controlSlot.classList.add("mb-3");
    return controlSlot;
  }
  getBtnGroup() {
    const html = super.getBtnGroup();
    html.classList.add("btn-group");
    return html;
  }
  getButton(config) {
    const html = super.getButton(config);
    html.classList.add("btn");
    html.classList.add("btn-sm");
    return html;
  }
  getDescription(config) {
    const description = super.getDescription(config);
    description.classList.add("text-muted");
    description.classList.add("mb-3");
    return description;
  }
  getTextareaControl(config) {
    const control = super.getTextareaControl(config);
    const { container, input, label } = control;
    container.classList.add("mb-3");
    input.classList.add("form-control");
    if (config.titleHidden) {
      this.visuallyHidden(label);
    }
    return control;
  }
  adaptForTableTextareaControl(control) {
    super.adaptForTableTextareaControl(control);
    control.container.classList.remove("mb-3");
  }
  getInputControl(config) {
    const control = super.getInputControl(config);
    const { container, input, label } = control;
    container.classList.add("mb-3");
    input.classList.add("form-control");
    if (config.titleHidden) {
      this.visuallyHidden(label);
    }
    return control;
  }
  adaptForTableInputControl(control, td) {
    super.adaptForTableInputControl(control, td);
    control.container.classList.remove("mb-3");
  }
  getRadiosControl(config) {
    const control = super.getRadiosControl(config);
    const { container, body, radios, labels, labelTexts, radioControls, description, messages } = control;
    container.classList.add("mb-3");
    radioControls.forEach((radioControl, index2) => {
      radioControl.classList.add("form-check");
      radios[index2].classList.add("form-check-input");
      labels[index2].classList.add("form-check-label");
      if (config.inline) {
        radioControl.classList.add("form-check-inline");
      }
      body.appendChild(radioControls[index2]);
      radioControl.appendChild(radios[index2]);
      radioControl.appendChild(labels[index2]);
      labels[index2].appendChild(labelTexts[index2]);
    });
    body.appendChild(description);
    body.appendChild(messages);
    return control;
  }
  adaptForTableRadiosControl(control, td) {
    super.adaptForTableRadiosControl(control, td);
    control.container.classList.remove("mb-3");
    control.fieldset.classList.remove("card");
    control.fieldset.classList.remove("mb-3");
    control.body.classList.remove("card-body");
    control.body.classList.remove("pb-0");
  }
  getCheckboxesControl(config) {
    const control = super.getCheckboxesControl(config);
    const { checkboxes, labels, checkboxControls } = control;
    checkboxControls.forEach((checkboxControl, index2) => {
      checkboxControl.classList.add("mb-3");
      checkboxControl.classList.add("form-check");
      checkboxes[index2].classList.add("form-check-input");
      labels[index2].classList.add("form-check-label");
    });
    return control;
  }
  getCheckboxControl(config) {
    const control = super.getCheckboxControl(config);
    const { container, formGroup, input, label, infoButton, description, messages } = control;
    container.classList.add("mb-3");
    formGroup.classList.add("form-check");
    input.classList.add("form-check-input");
    label.classList.add("form-check-label");
    if (config.titleHidden) {
      this.visuallyHidden(label);
    }
    container.appendChild(formGroup);
    formGroup.appendChild(input);
    formGroup.appendChild(label);
    if (isObject(config.infoButton)) {
      formGroup.appendChild(infoButton.container);
    }
    container.appendChild(description);
    container.appendChild(messages);
    return control;
  }
  adaptForTableCheckboxControl(control, td) {
    super.adaptForTableCheckboxControl(control, td);
    control.container.classList.remove("mb-3");
    control.formGroup.classList.remove("form-check");
  }
  getSelectControl(config) {
    const control = super.getSelectControl(config);
    const { container, input } = control;
    container.classList.add("mb-3");
    input.classList.add("form-select");
    return control;
  }
  adaptForTableSelectControl(control, td) {
    super.adaptForTableSelectControl(control, td);
    control.container.classList.remove("mb-3");
  }
  adaptForTableMultipleControl(control, td) {
    super.adaptForTableMultipleControl(control, td);
    control.card.classList.remove("mb-3");
  }
  getAlert(config) {
    const html = super.getAlert(config);
    html.classList.add("alert");
    html.classList.add("alert-danger");
    return html;
  }
  getInvalidFeedback(config) {
    const html = super.getInvalidFeedback(config);
    html.classList.add("text-danger");
    html.classList.add("d-block");
    html.classList.add("form-text");
    html.classList.add("form-text");
    return html;
  }
  getRow() {
    const row = super.getRow();
    row.classList.add("row");
    return row;
  }
  getCol(xs, md, offsetMd) {
    const col = super.getRow(xs, md, offsetMd);
    col.classList.add("col-" + xs);
    col.classList.add("col-md-" + md);
    if (offsetMd) {
      col.classList.add("offset-md-" + offsetMd);
    }
    return col;
  }
  getTabList(config) {
    const tabList = super.getTabList(config);
    tabList.classList.add("nav");
    if (config.type === "tabs") {
      tabList.classList.add("nav-tabs");
    } else {
      tabList.classList.add("nav-pills");
    }
    tabList.classList.add("flex-column");
    if (config.stacked === false) {
      tabList.classList.remove("flex-column");
    }
    return tabList;
  }
  getTab(config) {
    const tab = super.getTab(config);
    tab.list.classList.add("nav-item");
    tab.link.classList.add("nav-link");
    tab.link.setAttribute("data-bs-toggle", "tab");
    if (config.active) {
      tab.link.classList.add("active");
    }
    return tab;
  }
  /**
   * A simple table layout
   */
  getTable() {
    const container = document.createElement("div");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    container.classList.add("table-responsive");
    table.classList.add("table");
    table.classList.add("table-sm");
    table.classList.add("align-middle");
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
    return { container, table, thead, tbody };
  }
  setTabPaneAttributes(element, active, id) {
    super.setTabPaneAttributes(element, active, id);
    element.classList.add("tab-pane");
    if (active) {
      element.classList.add("active");
    }
  }
  infoButtonAsModal(infoButton, id, config = {}) {
    const modal = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("div");
    const modalBody = document.createElement("div");
    const closeBtn = this.getButton({
      textContent: "Close",
      icon: "close"
    });
    const modalId = id + "-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("id", modalId);
    closeBtn.setAttribute("data-bs-dismiss", "modal");
    infoButton.infoButton.setAttribute("data-bs-toggle", "modal");
    infoButton.infoButton.setAttribute("data-bs-target", "#" + modalId);
    infoButton.container.classList.add("ms-1");
    modal.classList.add("modal");
    modal.classList.add("fade");
    modalDialog.classList.add("modal-dialog");
    modalContent.classList.add("modal-content");
    modalHeader.classList.add("modal-header");
    modalTitle.classList.add("modal-title");
    modalBody.classList.add("modal-body");
    closeBtn.classList.add("jedi-modal-close");
    if (isString(config.title)) {
      modalTitle.innerHTML = this.purifyContent(config.title);
    }
    if (isString(config.content)) {
      modalBody.innerHTML = this.purifyContent(config.content);
    }
    infoButton.container.appendChild(modal);
    modal.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);
    modalContent.appendChild(modalBody);
  }
  visuallyHidden(element) {
    element.classList.add("visually-hidden");
  }
  visuallyVisible(element) {
    element.classList.remove("visually-hidden");
  }
}
const index = {
  Schema,
  Utils,
  EditorBoolean,
  EditorBooleanRadios: EditorRadios,
  EditorBooleanSelect,
  EditorBooleanCheckbox,
  EditorString,
  EditorStringRadios,
  EditorStringSelect,
  EditorStringTextarea,
  EditorStringAwesomplete,
  EditorStringInput,
  EditorNumber,
  EditorNumberRadios,
  EditorNumberSelect,
  EditorNumberInput,
  EditorObjectGrid,
  EditorObjectNav,
  EditorObject,
  EditorArrayNav,
  EditorArray,
  EditorMultiple,
  EditorIfThenElse,
  EditorNull,
  Theme,
  ThemeBootstrap3,
  ThemeBootstrap4,
  ThemeBootstrap5,
  RefParser,
  Create: Jedi
};
export {
  index as default
};
//# sourceMappingURL=jedi.js.map
