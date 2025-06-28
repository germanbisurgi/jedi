function clone(thing) {
  if (typeof thing === "undefined") {
    return void 0;
  }
  return JSON.parse(JSON.stringify(thing));
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
function combineDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();
  if (Array.isArray(target) && Array.isArray(source)) {
    target.push(...source);
  } else if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {
            [key]: {}
          });
        }
        combineDeep(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        if (!target[key]) {
          target[key] = [];
        }
        target[key].push(...source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    });
  }
  return combineDeep(target, ...sources);
}
const overwriteExistingProperties = (obj1, obj2) => {
  Object.keys(obj2).forEach((key) => {
    if (key in obj1) {
      if (isSet(obj1[key]) && isSet(obj2[key]) && (isObject(obj1[key]) && isObject(obj2[key]) || isArray(obj1[key]) && isArray(obj2[key]) || isString(obj1[key]) && isString(obj2[key]) || isNumber(obj1[key]) && isNumber(obj2[key]) || isBoolean(obj1[key]) && isBoolean(obj2[key]) || isNull(obj1[key]) && isNull(obj2[key]))) {
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
  combineDeep,
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
  return isString(schema.$schema) ? clone(schema.$schema) : void 0;
}
function getSchemaAdditionalProperties(schema) {
  return isObject(schema.additionalProperties) || isBoolean(schema.additionalProperties) ? clone(schema.additionalProperties) : void 0;
}
function getSchemaPropertyNames(schema) {
  return isObject(schema.propertyNames) || isBoolean(schema.propertyNames) ? clone(schema.propertyNames) : void 0;
}
function getSchemaAllOf(schema) {
  return isArray(schema.allOf) ? clone(schema.allOf) : void 0;
}
function getSchemaAnyOf(schema) {
  return isArray(schema.anyOf) ? clone(schema.anyOf) : void 0;
}
function getSchemaConst(schema) {
  return clone(schema.const);
}
function getSchemaContains(schema) {
  return isObject(schema.contains) || isBoolean(schema.contains) ? clone(schema.contains) : void 0;
}
function getSchemaDefault(schema) {
  return clone(schema.default);
}
function getSchemaDependentRequired(schema) {
  return isObject(schema.dependentRequired) ? clone(schema.dependentRequired) : void 0;
}
function getSchemaDependentSchemas(schema) {
  return isObject(schema.dependentSchemas) ? clone(schema.dependentSchemas) : void 0;
}
function getSchemaDescription(schema) {
  return isString(schema.description) ? clone(schema.description) : void 0;
}
function getSchemaElse(schema) {
  return isObject(schema.else) || isBoolean(schema.else) ? clone(schema.else) : void 0;
}
function getSchemaEnum(schema) {
  if (isArray(schema.enum) && schema.enum.length > 0) {
    return clone(schema.enum);
  }
  return void 0;
}
function getSchemaExclusiveMaximum(schema) {
  return isNumber(schema.exclusiveMaximum) ? clone(schema.exclusiveMaximum) : void 0;
}
function getSchemaExclusiveMinimum(schema) {
  return isNumber(schema.exclusiveMinimum) ? schema.exclusiveMinimum : void 0;
}
function getSchemaFormat(schema) {
  return isString(schema.format) ? clone(schema.format) : void 0;
}
function getSchemaIf(schema) {
  if (isObject(schema.if)) {
    return clone(schema.if);
  }
  if (isBoolean(schema.if)) {
    return clone(schema.if);
  }
  return void 0;
}
function getSchemaItems(schema) {
  return isObject(schema.items) || isBoolean(schema.items) ? clone(schema.items) : void 0;
}
function getSchemaMaximum(schema) {
  return isNumber(schema.maximum) ? clone(schema.maximum) : void 0;
}
function getSchemaMaxContains(schema) {
  if (isInteger(schema.maxContains) && schema.maxContains >= 0) {
    return clone(schema.maxContains);
  }
  return void 0;
}
function getSchemaMaxItems(schema) {
  if (isInteger(schema.maxItems) && schema.maxItems >= 0) {
    return clone(schema.maxItems);
  }
  return void 0;
}
function getSchemaMaxLength(schema) {
  if (isInteger(schema.maxLength) && schema.maxLength >= 0) {
    return clone(schema.maxLength);
  }
  return void 0;
}
function getSchemaMaxProperties(schema) {
  if (isInteger(schema.maxProperties)) {
    return clone(schema.maxProperties);
  }
  return void 0;
}
function getSchemaMinimum(schema) {
  return isNumber(schema.minimum) ? clone(schema.minimum) : void 0;
}
function getSchemaMinContains(schema) {
  if (isInteger(schema.minContains) && schema.minContains >= 0) {
    return clone(schema.minContains);
  }
  return void 0;
}
function getSchemaMinItems(schema) {
  if (isInteger(schema.minItems) && schema.minItems >= 0) {
    return clone(schema.minItems);
  }
  return void 0;
}
function getSchemaMinLength(schema) {
  if (isInteger(schema.minLength) && schema.minLength >= 0) {
    return clone(schema.minLength);
  }
  return void 0;
}
function getSchemaMinProperties(schema) {
  if (isInteger(schema.minProperties) && schema.minProperties >= 0) {
    return clone(schema.minProperties);
  }
  return void 0;
}
function getSchemaMultipleOf(schema) {
  if (isNumber(schema.multipleOf) && schema.multipleOf >= 0) {
    return clone(schema.multipleOf);
  }
  return void 0;
}
function getSchemaNot(schema) {
  return isObject(schema.not) || isBoolean(schema.not) ? clone(schema.not) : void 0;
}
function getSchemaXOption(schema, option) {
  const xOption = "x-" + option;
  if (isSet(schema[xOption])) {
    return schema[xOption];
  }
  return schema["x-options"] && isSet(schema["x-options"][option]) ? schema["x-options"][option] : void 0;
}
function getSchemaPattern(schema) {
  return isString(schema.pattern) ? clone(schema.pattern) : void 0;
}
function getSchemaPatternProperties(schema) {
  return isObject(schema.patternProperties) ? clone(schema.patternProperties) : void 0;
}
function getSchemaPrefixItems(schema) {
  return isArray(schema.prefixItems) ? clone(schema.prefixItems) : void 0;
}
function getSchemaProperties(schema) {
  return isObject(schema.properties) ? clone(schema.properties) : void 0;
}
function getSchemaReadOnly(schema) {
  return isBoolean(schema.readOnly) ? clone(schema.readOnly) : void 0;
}
function getSchemaRequired(schema) {
  return isArray(schema.required) ? [...new Set(schema.required)] : void 0;
}
function getSchemaThen(schema) {
  return isObject(schema.then) || isBoolean(schema.then) ? clone(schema.then) : void 0;
}
function getSchemaTitle(schema) {
  return isString(schema.title) ? clone(schema.title) : void 0;
}
function getSchemaType(schema) {
  if (isString(schema.type) || isArray(schema.type)) {
    return clone(schema.type);
  }
  return void 0;
}
function getSchemaOneOf(schema) {
  return isArray(schema.oneOf) ? clone(schema.oneOf) : void 0;
}
function getSchemaUnevaluatedProperties(schema) {
  return isBoolean(schema.unevaluatedProperties) ? clone(schema.unevaluatedProperties) : void 0;
}
function getSchemaUniqueItems(schema) {
  return isBoolean(schema.uniqueItems) ? clone(schema.uniqueItems) : void 0;
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
class SchemaGenerator {
  static inferType(value) {
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";
    return typeof value;
  }
  static generate(obj) {
    if (typeof obj !== "object" || obj === null) {
      return { type: this.inferType(obj) };
    }
    if (Array.isArray(obj)) {
      const itemSchemas = obj.map((item) => this.generate(item));
      return {
        type: "array",
        items: itemSchemas.length ? itemSchemas[0] : {}
      };
    }
    const properties2 = {};
    for (const key in obj) {
      properties2[key] = this.generate(obj[key]);
    }
    return {
      type: "object",
      properties: properties2
    };
  }
}
function allOf(context) {
  let errors = [];
  const allOf2 = getSchemaAllOf(context.schema);
  if (isSet(allOf2)) {
    allOf2.forEach((schema) => {
      const subSchemaEditor = new Jedison({ refParser: context.validator.refParser, schema, data: context.value, rootName: context.key });
      const subSchemaErrors = subSchemaEditor.getErrors();
      subSchemaEditor.destroy();
      subSchemaErrors.forEach((error) => {
        error.path = context.path;
      });
      errors.push(...subSchemaErrors);
    });
    errors = removeDuplicatesFromArray(errors);
  }
  return errors;
}
function minLength(context) {
  const errors = [];
  const minLength2 = getSchemaMinLength(context.schema);
  if (isString(context.value) && isSet(minLength2)) {
    context.value = context.value.replace(/[\uDCA9]/g, "");
    const invalid = context.value.length < minLength2;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "minLength",
        messages: [
          compileTemplate(context.translator.translate("errorMinLength"), {
            minLength: minLength2
          })
        ]
      });
    }
  }
  return errors;
}
function anyOf(context) {
  const errors = [];
  const anyOf2 = getSchemaAnyOf(context.schema);
  if (isSet(anyOf2)) {
    let valid = false;
    anyOf2.forEach((schema) => {
      const anyOfEditor = new Jedison({ refParser: context.validator.refParser, schema, data: context.value });
      const anyOfErrors = anyOfEditor.getErrors();
      anyOfEditor.destroy();
      if (anyOfErrors.length === 0) {
        valid = true;
      }
    });
    if (!valid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "anyOf",
        messages: [
          context.translator.translate("errorAnyOf")
        ]
      });
    }
  }
  return errors;
}
function _enum(context) {
  const errors = [];
  const schemaEnum = getSchemaEnum(context.schema);
  if (isSet(schemaEnum)) {
    const invalid = !schemaEnum.some((e) => JSON.stringify(context.value) === JSON.stringify(e));
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "enum",
        messages: [
          compileTemplate(context.translator.translate("errorEnum"), {
            enum: JSON.stringify(schemaEnum)
          })
        ]
      });
    }
  }
  return errors;
}
function exclusiveMaximum(context) {
  const errors = [];
  const exclusiveMaximum2 = getSchemaExclusiveMaximum(context.schema);
  if (isNumber(context.value) && isSet(exclusiveMaximum2)) {
    const invalid = context.value >= exclusiveMaximum2;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "exclusiveMaximum",
        messages: [
          compileTemplate(context.translator.translate("errorExclusiveMaximum"), {
            exclusiveMaximum: exclusiveMaximum2
          })
        ]
      });
    }
  }
  return errors;
}
function exclusiveMinimum(context) {
  const errors = [];
  const exclusiveMinimum2 = getSchemaExclusiveMinimum(context.schema);
  if (isNumber(context.value) && isSet(exclusiveMinimum2)) {
    const invalid = context.value <= exclusiveMinimum2;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "exclusiveMinimum",
        messages: [
          compileTemplate(context.translator.translate("errorExclusiveMinimum"), {
            exclusiveMinimum: exclusiveMinimum2
          })
        ]
      });
    }
  }
  return errors;
}
function format(context) {
  const errors = [];
  const format2 = getSchemaFormat(context.schema);
  let assertFormat = context.validator.assertFormat;
  if (getSchemaXOption(context.schema, "assertFormat")) {
    assertFormat = context.schema.options.assertFormat;
  }
  if (isSet(format2) && isString(context.value) && assertFormat) {
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
    const invalid = isSet(regexp) && !regexp.test(context.value);
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "format",
        messages: [
          compileTemplate(context.translator.translate("errorFormat"), { format: format2 })
        ]
      });
    }
  }
  return errors;
}
function items(context) {
  const errors = [];
  const items2 = getSchemaItems(context.schema);
  const prefixItems2 = getSchemaPrefixItems(context.schema);
  if (isArray(context.value) && isSet(items2)) {
    const prefixItemsSchemasCount = isSet(prefixItems2) ? prefixItems2.length : 0;
    if (items2 === false && context.value.length > 0 && context.value.length > prefixItemsSchemasCount) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "items",
        messages: [context.translator.translate("errorItems")]
      });
    }
  }
  return errors;
}
function maxItems(context) {
  const errors = [];
  const maxItems2 = getSchemaMaxItems(context.schema);
  if (isArray(context.value) && isSet(maxItems2)) {
    const invalid = context.value.length > maxItems2;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "maxItems",
        messages: [
          compileTemplate(context.translator.translate("errorMaxItems"), {
            maxItems: maxItems2
          })
        ]
      });
    }
  }
  return errors;
}
function maxLength(context) {
  const errors = [];
  const maxLength2 = getSchemaMaxLength(context.schema);
  if (isString(context.value) && isSet(maxLength2)) {
    context.value = context.value.replace(/[\uDCA9]/g, "");
    const invalid = context.value.length > maxLength2;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "maxLength",
        messages: [
          compileTemplate(context.translator.translate("errorMaxLength"), {
            maxLength: maxLength2
          })
        ]
      });
    }
  }
  return errors;
}
function maxProperties(context) {
  const errors = [];
  const maxProperties2 = getSchemaMaxProperties(context.schema);
  if (isObject(context.value) && isSet(maxProperties2)) {
    const propertiesCount = Object.keys(context.value).length;
    const invalid = propertiesCount > maxProperties2;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "maxProperties",
        messages: [
          compileTemplate(context.translator.translate("errorMaxProperties"), {
            maxProperties: maxProperties2
          })
        ]
      });
    }
  }
  return errors;
}
function minimum(context) {
  const errors = [];
  const minimum2 = getSchemaMinimum(context.schema);
  if (isNumber(context.value) && isSet(minimum2)) {
    const invalid = context.value < minimum2;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "minimum",
        messages: [
          compileTemplate(context.translator.translate("errorMinimum"), {
            minimum: minimum2
          })
        ]
      });
    }
  }
  return errors;
}
function minItems(context) {
  const errors = [];
  const minItems2 = getSchemaMinItems(context.schema);
  if (isArray(context.value) && isSet(minItems2)) {
    const invalid = context.value.length < minItems2;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "minItems",
        messages: [
          compileTemplate(context.translator.translate("errorMinItems"), {
            minItems: minItems2
          })
        ]
      });
    }
  }
  return errors;
}
function minProperties(context) {
  const errors = [];
  const minProperties2 = getSchemaMinProperties(context.schema);
  if (isObject(context.value) && isSet(minProperties2)) {
    const propertiesCount = Object.keys(context.value).length;
    const invalid = propertiesCount < minProperties2;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "minProperties",
        messages: [
          compileTemplate(context.translator.translate("errorMinProperties"), {
            minProperties: minProperties2
          })
        ]
      });
    }
  }
  return errors;
}
function multipleOf(context) {
  const errors = [];
  const multipleOf2 = getSchemaMultipleOf(context.schema);
  if (isNumber(context.value) && isSet(multipleOf2)) {
    if (context.value === 0) {
      return errors;
    }
    const isMultipleOf = context.value / multipleOf2 === Math.floor(context.value / multipleOf2);
    const invalid = !isMultipleOf || context.value.toString().includes("e");
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "multipleOf",
        messages: [
          compileTemplate(context.translator.translate("errorMultipleOf"), {
            multipleOf: multipleOf2
          })
        ]
      });
    }
  }
  return errors;
}
function not(context) {
  const errors = [];
  const not2 = getSchemaNot(context.schema);
  if (isSet(not2)) {
    const notEditor = new Jedison({ refParser: context.validator.refParser, schema: not2, data: context.value });
    const notErrors = notEditor.getErrors();
    notEditor.destroy();
    const invalid = notErrors.length === 0;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "not",
        messages: [
          compileTemplate(context.translator.translate("errorNot"))
        ]
      });
    }
  }
  return errors;
}
function oneOf(context) {
  const errors = [];
  const oneOf2 = getSchemaOneOf(context.schema);
  if (isSet(oneOf2)) {
    let counter = 0;
    oneOf2.forEach((schema) => {
      const oneOfEditor = new Jedison({ refParser: context.validator.refParser, schema, data: context.value });
      const oneOfErrors = oneOfEditor.getErrors();
      oneOfEditor.destroy();
      if (oneOfErrors.length === 0) {
        counter++;
      }
    });
    if (counter !== 1) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "oneOf",
        messages: [
          compileTemplate(context.translator.translate("errorOneOf"), {
            counter
          })
        ]
      });
    }
  }
  return errors;
}
function pattern(context) {
  const errors = [];
  const pattern2 = getSchemaPattern(context.schema);
  if (isString(context.value) && isSet(pattern2)) {
    const regexp = new RegExp(pattern2);
    const invalid = !regexp.test(context.value);
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "pattern",
        messages: [
          compileTemplate(context.translator.translate("errorPattern"), {
            pattern: pattern2
          })
        ]
      });
    }
  }
  return errors;
}
function patternProperties(context) {
  let errors = [];
  const patternProperties2 = getSchemaPatternProperties(context.schema);
  if (isObject(context.value) && isSet(patternProperties2)) {
    Object.keys(context.value).forEach((propertyName) => {
      Object.keys(patternProperties2).forEach((pattern2) => {
        const regexp = new RegExp(pattern2);
        if (regexp.test(propertyName)) {
          const schema = patternProperties2[pattern2];
          const editor = new Jedison({
            refParser: context.validator.refParser,
            schema,
            data: context.value[propertyName]
          });
          const editorErrors = editor.getErrors().map((error) => {
            return {
              type: "error",
              path: context.path + "/" + propertyName,
              constraint: "patternProperties",
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
function properties(context) {
  const schemaProperties = getSchemaProperties(context.schema);
  const invalidProperties = [];
  if (isObject(context.value) && isSet(schemaProperties)) {
    Object.keys(schemaProperties).forEach((propertyName) => {
      if (hasOwn(context.value, propertyName)) {
        const propertySchema = schemaProperties[propertyName];
        const editor = new Jedison({
          refParser: context.validator.refParser,
          schema: propertySchema,
          data: context.value[propertyName],
          rootName: context.path
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
      type: "error",
      path: context.path,
      constraint: "properties",
      messages: [
        compileTemplate(context.translator.translate("errorProperties"), { properties: invalidProperties.join(", ") })
      ]
    }];
  }
  return [];
}
function required(context) {
  const errors = [];
  const required2 = getSchemaRequired(context.schema);
  if (isObject(context.value) && isSet(required2)) {
    const missingProperties = [];
    const keys = Object.keys(context.value);
    required2.forEach((key) => {
      if (!keys.includes(key)) {
        missingProperties.push(key);
      }
    });
    const invalid = missingProperties.length > 0;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "required",
        messages: [
          compileTemplate(context.translator.translate("errorRequired"), {
            required: missingProperties.join(", ")
          })
        ]
      });
    }
  }
  return errors;
}
function type(context) {
  const errors = [];
  const type2 = getSchemaType(context.schema);
  if (type2 === "any") {
    return errors;
  }
  if (isSet(type2)) {
    const types = {
      string: (value) => isString(value),
      number: (value) => isNumber(value),
      integer: (value) => isInteger(value),
      boolean: (value) => isBoolean(value),
      array: (value) => isArray(value),
      object: (value) => isObject(value),
      null: (value) => isNull(value)
    };
    let valid = true;
    if (isArray(type2)) {
      valid = type2.some((type3) => {
        return types[type3](context.value);
      });
    } else {
      valid = types[type2](context.value);
    }
    if (!valid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "type",
        messages: [
          compileTemplate(context.translator.translate("errorType"), {
            type: type2,
            valueType: getType(context.value)
          })
        ]
      });
    }
  }
  return errors;
}
function maximum(context) {
  const errors = [];
  const maximum2 = getSchemaMaximum(context.schema);
  if (isNumber(context.value) && isSet(maximum2)) {
    const invalid = context.value > maximum2;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "maximum",
        messages: [
          compileTemplate(context.translator.translate("errorMaximum"), {
            maximum: maximum2
          })
        ]
      });
    }
  }
  return errors;
}
function uniqueItems(context) {
  const errors = [];
  const uniqueItems2 = getSchemaUniqueItems(context.schema);
  if (isArray(context.value) && isSet(uniqueItems2) && uniqueItems2 === true) {
    const seen = [];
    let hasDuplicatedItems = false;
    for (let i = 0; i < context.value.length; i++) {
      let item = context.value[i];
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
        type: "error",
        path: context.path,
        constraint: "uniqueItems",
        messages: [
          context.translator.translate("errorUniqueItems")
        ]
      });
    }
  }
  return errors;
}
function additionalProperties(context) {
  const errors = [];
  const schemaAdditionalProperties = getSchemaAdditionalProperties(context.schema);
  const schemaPatternProperties = getSchemaPatternProperties(context.schema);
  const schemaProperties = getSchemaProperties(context.schema);
  if (isObject(context.value) && isSet(schemaAdditionalProperties)) {
    const properties2 = schemaProperties || {};
    const additionalProperties2 = schemaAdditionalProperties;
    const patternProperties2 = schemaPatternProperties || {};
    Object.keys(context.value).forEach((property) => {
      const definedInPatternProperty = Object.keys(patternProperties2).some((pattern2) => {
        const regexp = new RegExp(pattern2);
        return regexp.test(property);
      });
      const isDefinedInProperties = hasOwn(properties2, property);
      if (!definedInPatternProperty && !isDefinedInProperties) {
        if (additionalProperties2 === false) {
          errors.push({
            type: "error",
            path: context.path,
            constraint: "additionalProperties",
            messages: [
              compileTemplate(context.translator.translate("errorAdditionalProperties"), { property })
            ]
          });
        } else if (isObject(additionalProperties2)) {
          const editor = new Jedison({
            refParser: context.validator.refParser,
            schema: additionalProperties2,
            data: context.value[property]
          });
          const additionalPropertyErrors = editor.getErrors().map((error) => ({
            type: "error",
            path: `${context.path}.${property}`,
            constraint: "additionalProperties",
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
function _const(context) {
  const errors = [];
  const schemaConst = getSchemaConst(context.schema);
  if (isSet(schemaConst)) {
    const valueIsNotEqualConst = different(context.value, schemaConst);
    const invalid = valueIsNotEqualConst;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "const",
        messages: [
          compileTemplate(context.translator.translate("errorConst"), {
            const: JSON.stringify(schemaConst)
          })
        ]
      });
    }
  }
  return errors;
}
function contains(context) {
  const errors = [];
  const contains2 = getSchemaContains(context.schema);
  const minContains = getSchemaMinContains(context.schema);
  const maxContains = getSchemaMaxContains(context.schema);
  if (isArray(context.value) && isSet(contains2)) {
    let counter = 0;
    context.value.forEach((item) => {
      const containsEditor = new Jedison({ refParser: context.validator.refParser, schema: contains2, data: item });
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
          type: "error",
          path: context.path,
          constraint: "minContains",
          messages: [
            compileTemplate(context.translator.translate("errorMinContains"), {
              counter,
              minContains
            })
          ]
        });
      }
    } else {
      if (containsInvalid) {
        errors.push({
          type: "error",
          path: context.path,
          constraint: "contains",
          messages: [context.translator.translate("errorContains")]
        });
      }
    }
    if (isSet(maxContains)) {
      const maxContainsInvalid = counter > maxContains;
      if (maxContainsInvalid) {
        errors.push({
          type: "error",
          path: context.path,
          constraint: "maxContains",
          messages: [
            compileTemplate(context.translator.translate("errorMaxContains"), {
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
function dependentRequired(context) {
  const errors = [];
  const dependentRequired2 = getSchemaDependentRequired(context.schema);
  if (isObject(context.value) && isSet(dependentRequired2)) {
    let missingProperties = [];
    Object.keys(dependentRequired2).forEach((key) => {
      if (isSet(context.value[key])) {
        const requiredProperties = dependentRequired2[key];
        missingProperties = requiredProperties.filter((property) => {
          return !hasOwn(context.value, property);
        });
      }
    });
    const invalid = missingProperties.length > 0;
    if (invalid) {
      errors.push({
        type: "error",
        path: context.path,
        constraint: "dependentRequired",
        messages: [
          compileTemplate(context.translator.translate("errorDependentRequired"), {
            dependentRequired: missingProperties.join(", ")
          })
        ]
      });
    }
  }
  return errors;
}
function dependentSchemas(context) {
  let errors = [];
  const dependentSchemas2 = getSchemaDependentSchemas(context.schema);
  if (isObject(context.value) && isSet(dependentSchemas2)) {
    Object.keys(dependentSchemas2).forEach((key) => {
      if (isSet(context.value[key])) {
        const dependentSchema = dependentSchemas2[key];
        const tmpEditor = new Jedison({ refParser: context.validator.refParser, schema: dependentSchema, data: context.value });
        const tmpErrors = tmpEditor.getErrors();
        tmpEditor.destroy();
        errors = [...errors, ...tmpErrors];
      }
    });
  }
  return errors;
}
function ifThenElse(context) {
  const errors = [];
  const schemaIf = getSchemaIf(context.schema);
  const schemaThen = getSchemaThen(context.schema);
  const schemaElse = getSchemaElse(context.schema);
  if (isSet(schemaIf)) {
    if (notSet(schemaThen) && notSet(schemaElse)) {
      return errors;
    }
    const ifEditor = new Jedison({ refParser: context.validator.refParser, schema: schemaIf, data: context.value });
    const ifErrors = ifEditor.getErrors();
    ifEditor.destroy();
    let thenErrors = [];
    let elseErrors = [];
    if (isSet(schemaThen)) {
      const thenEditor = new Jedison({ refParser: context.validator.refParser, schema: schemaThen, data: context.value });
      thenErrors = thenEditor.getErrors();
      thenEditor.destroy();
    }
    if (isSet(schemaElse)) {
      const elseEditor = new Jedison({ refParser: context.validator.refParser, schema: schemaElse, data: context.value });
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
function prefixItems(context) {
  const errors = [];
  const prefixItems2 = getSchemaPrefixItems(context.schema);
  if (isArray(context.value) && isSet(prefixItems2)) {
    prefixItems2.forEach((itemSchema, index2) => {
      const itemValue = context.value[index2];
      if (isSet(itemValue)) {
        const tmpEditor = new Jedison({ refParser: context.validator.refParser, schema: itemSchema, data: itemValue });
        const tmpErrors = tmpEditor.getErrors();
        tmpEditor.destroy();
        if (tmpErrors.length > 0) {
          errors.push({
            type: "error",
            path: context.path,
            constraint: "prefixItems",
            messages: [
              compileTemplate(context.translator.translate("errorPrefixItems"), {
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
function unevaluatedProperties(context) {
  let errors = [];
  const schemaUnevaluatedProperties = getSchemaUnevaluatedProperties(context.schema);
  const schemaPatternProperties = getSchemaPatternProperties(context.schema);
  const schemaProperties = getSchemaProperties(context.schema);
  const schemaAllOf = getSchemaAllOf(context.schema);
  const schemaAnyOf = getSchemaAnyOf(context.schema);
  const schemaOneOf = getSchemaOneOf(context.schema);
  if (isObject(context.value) && isSet(schemaUnevaluatedProperties)) {
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
      Object.keys(context.value).forEach((property) => {
        let definedInPatternProperty = false;
        if (isSet(patternProperties2)) {
          Object.keys(patternProperties2).forEach((pattern2) => {
            const regexp = new RegExp(pattern2);
            definedInPatternProperty = regexp.test(property);
          });
        }
        if (!definedInPatternProperty && unevaluatedProperties2 === false && !hasOwn(properties2, property)) {
          errors.push({
            type: "error",
            path: context.path,
            constraint: "unevaluatedProperties",
            messages: [
              compileTemplate(context.translator.translate("errorUnevaluatedProperties"), {
                property
              })
            ]
          });
        }
        if (!definedInPatternProperty && isObject(unevaluatedProperties2) && !hasOwn(properties2, property)) {
          const editor = new Jedison({
            refParser: context.validator.refParser,
            schema: unevaluatedProperties2,
            data: context.value[property]
          });
          const unevaluatedPropertiesErrors = editor.getErrors().map((error) => {
            return {
              type: "error",
              path: property,
              constraint: "unevaluatedProperties",
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
function propertyNames(context) {
  const errors = [];
  const schemaPropertyNames = getSchemaPropertyNames(context.schema);
  if (isObject(context.value) && isSet(schemaPropertyNames)) {
    Object.keys(context.value).forEach((propertyName) => {
      const editor = new Jedison({
        refParser: context.validator.refParser,
        schema: schemaPropertyNames,
        data: propertyName
      });
      const invalid = editor.getErrors().length > 0;
      if (invalid) {
        errors.push({
          type: "error",
          path: context.path,
          constraint: "propertyNames",
          messages: [
            compileTemplate(context.translator.translate("errorPropertyNames"), { propertyName })
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
    this.constraints = config.constraints ?? {};
    this.assertFormat = config.assertFormat ? config.assertFormat : false;
    this.translator = config.translator ? config.translator : false;
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
    const schemaClone = clone(schema);
    if (isBoolean(schemaClone) && schemaClone === true) {
      return schemaErrors;
    }
    if (isBoolean(schemaClone) && schemaClone === false) {
      return [{
        type: "error",
        messages: ["invalid"],
        path
      }];
    }
    const allConstraints = { ...this.draft, ...this.constraints };
    for (const [constraintName, constraint] of Object.entries(allConstraints)) {
      if (hasOwn(schemaClone, constraintName)) {
        const context = {
          validator: this,
          value,
          schema: schemaClone,
          key,
          path,
          translator: this.translator
        };
        const validatorErrors = constraint(context);
        if (validatorErrors) {
          schemaErrors = [...schemaErrors, ...validatorErrors];
        }
      }
    }
    const schemaOptionsMessages = getSchemaXOption(schema, "messages");
    if (isSet(schemaOptionsMessages)) {
      if (isObject(schemaOptionsMessages)) {
        schemaErrors.forEach((schemaError) => {
          var _a, _b;
          const schemaMessageListedByLanguage = (_b = schemaOptionsMessages == null ? void 0 : schemaOptionsMessages[(_a = this.translator) == null ? void 0 : _a.language]) == null ? void 0 : _b[schemaError == null ? void 0 : schemaError.constraint];
          const schemaMessageListedByConstraint = schemaOptionsMessages == null ? void 0 : schemaOptionsMessages[schemaError == null ? void 0 : schemaError.constraint];
          const schemaMessage = schemaMessageListedByLanguage ?? schemaMessageListedByConstraint;
          if (isSet(schemaMessage)) {
            schemaError.messages = [
              schemaMessage
            ];
          }
          return schemaError;
        });
      }
      if (isArray(schemaOptionsMessages) && schemaErrors.length > 0) {
        schemaErrors.forEach((schemaError) => {
          schemaError.messages = schemaOptionsMessages;
          return schemaError;
        });
      }
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
    this.jedison = config.jedison;
    this.path = config.path || this.jedison.rootName;
    this.schema = config.schema;
    this.value = isSet(config.value) ? config.value : void 0;
    this.isActive = true;
    this.parent = config.parent || null;
    this.children = [];
    this.ui = null;
    this.isDirty = false;
    this.watched = {};
    this.key = this.path.split(this.jedison.pathSeparator).pop();
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
    this.registerWatcher();
    this.setValueFormTemplate();
    if (this.jedison.options.container) {
      this.setUI();
    }
    this.on("notifyParent", (initiator) => {
      if (this.parent) {
        this.parent.isDirty = true;
        this.parent.onChildChange(initiator);
      }
    });
  }
  /**
   * Sets the instance ui property. UI can be an editor instance or similar
   */
  setUI() {
    if (this.jedison.isEditor) {
      const EditorClass = this.jedison.uiResolver.getClass(this.schema);
      this.ui = new EditorClass(this);
    }
  }
  /**
   * Return the last part of the instance path
   */
  getKey() {
    return this.key;
  }
  /**
   * Return the instance schema
   */
  getSchema() {
    return this.schema;
  }
  /**
   * Adds a child instance pointer to the instances list
   */
  register() {
    this.jedison.register(this);
    if (this.children.length === 0) return;
    const registerChildRecursive = (child) => {
      this.jedison.register(child);
      if (child.children.length > 0) {
        child.children.forEach(registerChildRecursive);
      }
    };
    this.children.forEach(registerChildRecursive);
  }
  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister() {
    this.jedison.unregister(this);
  }
  /**
   * Sets the default value of the instance based on it's type
   */
  setInitialValue() {
    const schemaEnforceEnumDefault = getSchemaXOption(this.schema, "enforceEnumDefault");
    const schemaEnforceEnum = getSchemaXOption(this.schema, "enforceEnum");
    const enforceEnumDefault = schemaEnforceEnumDefault ?? this.jedison.options.enforceEnumDefault;
    const enforceEnum = schemaEnforceEnum ?? this.jedison.options.enforceEnum;
    const finalEnforceEnum = isSet(schemaEnforceEnum) ? enforceEnum : enforceEnumDefault;
    const schemaEnum = getSchemaEnum(this.schema);
    if (isSet(schemaEnum) && !schemaEnum.includes(this.getValue()) && isSet(schemaEnum[0]) && finalEnforceEnum) {
      this.setValue(schemaEnum[0], false);
    }
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
    const enforceConst = getSchemaXOption(this.schema, "enforceConst") ?? this.jedison.options.enforceConst;
    if (isSet(enforceConst) && equal(enforceConst, true)) {
      const schemaConst = getSchemaConst(this.schema);
      if (isSet(schemaConst)) {
        this.setValue(schemaConst, false);
      }
    }
  }
  registerWatcher() {
    const watch = getSchemaXOption(this.schema, "watch");
    if (!isSet(watch)) return;
    Object.entries(watch).forEach(([name, path]) => {
      this.jedison.watch(path, () => {
        this.updateWatchedData(name, path);
      });
    });
  }
  updateWatchedData(name, path) {
    const instance = this.jedison.getInstance(path);
    if (!isSet(instance)) {
      return;
    }
    if (instance) {
      this.watched[name] = {
        value: instance.getValue(),
        schema: instance.getSchema(),
        properties: instance.schema.properties ? Object.keys(instance.schema.properties) : []
      };
    }
    this.setValueFormTemplate();
  }
  setValueFormTemplate() {
    const template = getSchemaXOption(this.schema, "template");
    if (!isSet(template)) return;
    if (template) {
      this.setValue(compileTemplate(template, this.watched));
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
  setValue(newValue, notifyParent = true, initiator = "api") {
    const enforceConst = getSchemaXOption(this.schema, "enforceConst") ?? this.jedison.options.enforceConst;
    if (isSet(enforceConst) && equal(enforceConst, true)) {
      const schemaConst = getSchemaConst(this.schema);
      if (isSet(schemaConst)) {
        newValue = schemaConst;
      }
    }
    const valueChanged = different(this.value, newValue);
    this.value = newValue;
    this.emit("set-value", newValue, initiator);
    if (valueChanged) {
      this.isDirty = true;
      this.emit("change", initiator);
      this.jedison.emit("instance-change", this, initiator);
      this.emit("notifyParent", initiator);
    }
  }
  /**
   * Fires when a child's instance state changes
   */
  onChildChange(initiator) {
  }
  /**
   * Returns an array of validation error messages
   */
  getErrors() {
    if (!this.isActive) {
      return [];
    }
    const errors = this.jedison.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path);
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
      this.emit("notifyParent");
    }
  }
  /**
   * Deactivates the instance
   */
  deactivate() {
    if (this.isActive === true) {
      this.isActive = false;
      this.emit("notifyParent");
    }
  }
  /**
   * Returns true if this instance is read only
   */
  isReadOnly() {
    if (getSchemaReadOnly(this.schema) === true) {
      return true;
    }
    return this.parent ? this.parent.isReadOnly() : false;
  }
  /**
   * Destroy the instance and it's children
   */
  destroy() {
    this.unregister();
    this.listeners = null;
    if (this.children.length > 0) {
      this.children.forEach((child) => child.destroy());
      this.children = [];
    }
    if (this.ui) {
      this.ui.destroy();
      this.ui = null;
    }
    Object.keys(this).forEach((key) => {
      this[key] = null;
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
    this.title = null;
    this.description = null;
    this.init();
    this.build();
    this.setAttributes();
    this.addEventListeners();
    this.setVisibility();
    this.setContainerAttributes();
    this.refreshUI();
    const alwaysShowErrors = this.instance.jedison.options.showErrors === "always" || getSchemaXOption(this.instance.schema, "showErrors") === "always";
    if (alwaysShowErrors) {
      this.showValidationErrors(this.instance.getErrors());
    }
    const valueChangeHandler = () => {
      this.refreshUI();
      this.showValidationErrors(this.instance.getErrors());
    };
    this.instance.on("change", valueChangeHandler);
  }
  static resolves(schema) {
  }
  /**
   * Initializes the editor
   */
  init() {
    this.theme = this.instance.jedison.theme;
  }
  /**
   * Gets the json path level by counting how many "/" it has
   */
  getLevel() {
    return (this.instance.path.match(/\//g) || []).length;
  }
  setVisibility() {
    const schemaOptionHidden = getSchemaXOption(this.instance.schema, "hidden");
    if (isSet(schemaOptionHidden) && schemaOptionHidden === true) {
      this.control.container.style.display = "none";
      this.control.container.setAttribute("aria-hidden", "true");
    }
  }
  /**
   * Sets container attributes like data-path and data-type
   */
  setContainerAttributes() {
    this.control.container.setAttribute("data-level", this.getLevel());
    this.control.container.setAttribute("data-path", this.instance.path);
    this.control.container.setAttribute("data-type", getSchemaType(this.instance.schema));
    const schemaContainerAttributes = getSchemaXOption(this.instance.schema, "containerAttributes");
    if (isSet(schemaContainerAttributes) && isObject(schemaContainerAttributes)) {
      for (const [key, value] of Object.entries(schemaContainerAttributes)) {
        if (key === "class") {
          const classes = value.split(" ");
          classes.forEach((cls) => {
            this.control.container.classList.add(cls);
          });
        } else {
          this.control.container.setAttribute(key, value);
        }
      }
    }
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
    const optionId = this.instance.jedison.options.id;
    return optionId ? optionId + "-" + pathToAttribute(path) : pathToAttribute(path);
  }
  /**
   * Add event listeners to ui elements
   */
  addEventListeners() {
  }
  /**
   * Shows validation error messages in the editor container.
   */
  showValidationErrors(errors, force = false) {
    errors = errors.filter((error) => {
      return error.path === this.instance.path;
    });
    this.control.messages.innerHTML = "";
    this.showingValidationErrors = false;
    const neverShowErrors = this.instance.jedison.options.showErrors === "never" || getSchemaXOption(this.instance.schema, "showErrors") === "never";
    if (neverShowErrors && !force || errors.length === 0) {
      return;
    }
    errors.forEach((error) => {
      if (error.constraint === "properties") {
        return;
      }
      error.messages.forEach((message) => {
        let invalidFeedback;
        if (error.type === "error") {
          invalidFeedback = this.getErrorFeedback({
            message
          });
        } else {
          invalidFeedback = this.getWarningFeedback({
            message
          });
        }
        this.control.messages.appendChild(invalidFeedback);
      });
    });
    this.showingValidationErrors = true;
  }
  /**
   * Get an error message container
   */
  getErrorFeedback(config) {
    return this.theme.getErrorFeedback(config);
  }
  /**
   * Get an error message container
   */
  getWarningFeedback(config) {
    return this.theme.getWarningFeedback(config);
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
   * Clean out HTML tags from txt
   */
  purifyContent(content, domPurifyOptions) {
    if (this.instance.jedison.options.purifyHtml && window.DOMPurify) {
      return window.DOMPurify.sanitize(content, domPurifyOptions);
    } else {
      const tmp = document.createElement("div");
      tmp.innerHTML = content;
      return tmp.textContent || tmp.innerText;
    }
  }
  getHtmlFromMarkdown(content) {
    if (this.instance.jedison.options.parseMarkdown && window.marked) {
      return window.marked.parse(content);
    }
    return content;
  }
  getTitle() {
    if (this.title) {
      return this.title;
    }
    this.title = this.instance.getKey();
    const schemaTitle = getSchemaTitle(this.instance.schema);
    if (isSet(schemaTitle)) {
      this.title = compileTemplate(schemaTitle, {
        value: this.instance.getValue(),
        settings: this.instance.jedison.options.settings
      });
      this.title = this.getHtmlFromMarkdown(this.title);
      const domPurifyOptions = combineDeep({}, this.instance.jedison.options.domPurifyOptions, {
        FORBID_TAGS: ["p"]
      });
      this.title = this.purifyContent(this.title, domPurifyOptions);
    }
    return this.title;
  }
  getDescription() {
    if (this.description) {
      return this.description;
    }
    const schemaDescription = getSchemaDescription(this.instance.schema);
    if (isSet(schemaDescription)) {
      this.description = compileTemplate(schemaDescription, {
        value: this.instance.getValue(),
        settings: this.instance.jedison.options.settings
      });
      this.description = this.getHtmlFromMarkdown(this.description);
      const domPurifyOptions = this.instance.jedison.options.domPurifyOptions;
      this.purifyContent(this.description, domPurifyOptions);
    }
    return this.description;
  }
  getInfo(schema = null) {
    const _schema = schema ?? this.instance.schema;
    const schemaInfo = getSchemaXOption(_schema, "info");
    if (!isSet(schemaInfo)) {
      return schemaInfo;
    }
    const domPurifyOptions = this.instance.jedison.options.domPurifyOptions;
    if (isSet(schemaInfo.title)) {
      schemaInfo.title = this.getHtmlFromMarkdown(schemaInfo.title);
      schemaInfo.title = this.purifyContent(schemaInfo.title, domPurifyOptions);
    }
    if (isSet(schemaInfo.content)) {
      schemaInfo.content = this.getHtmlFromMarkdown(schemaInfo.content);
      schemaInfo.content = this.purifyContent(schemaInfo.content, domPurifyOptions);
    }
    return schemaInfo;
  }
  /**
   * Updates control UI when its state changes
   */
  refreshUI() {
    this.refreshDisabledState();
    this.refreshTemplates();
  }
  refreshDisabledState() {
    const interactiveElements = this.control.container.querySelectorAll("button, input, select, textarea");
    interactiveElements.forEach((element) => {
      if (this.disabled || this.readOnly || element.hasAttribute("always-disabled")) {
        element.setAttribute("disabled", "");
      } else {
        element.removeAttribute("disabled", "");
      }
      if (element.hasAttribute("always-enabled")) {
        element.removeAttribute("disabled", "");
      }
    });
  }
  refreshTemplates() {
    if (this.control.legendText && this.getTitle()) {
      this.control.legendText.innerHTML = this.getTitle();
    }
    if (this.control.labelText && this.getTitle()) {
      this.control.labelText.innerHTML = this.getTitle();
    }
    if (this.control.description && this.getDescription()) {
      this.control.description.innerHTML = this.getDescription();
    }
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
    this.refreshDisabledState();
    this.control.childrenSlot.innerHTML = "";
    this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container);
    if (this.disabled || this.instance.isReadOnly()) {
      this.instance.activeInstance.ui.disable();
    } else {
      this.instance.activeInstance.ui.enable();
    }
  }
  getErrorFeedback(config) {
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
    this.instanceWithoutIf = this.jedison.createInstance({
      jedison: this.jedison,
      schema: schemaClone,
      path: this.path,
      parent: this.parent
    });
    this.schemas.forEach((schema) => {
      const instance = this.jedison.createInstance({
        jedison: this.jedison,
        schema,
        path: this.path,
        parent: this.parent
      });
      this.instanceStartingValues.push(instance.getValue());
      this.instances.push(instance);
    });
    this.on("set-value", (value, initiator) => {
      this.changeValue(value, initiator);
    });
    const ifValue = this.instanceWithoutIf.getValue();
    this.changeValue(ifValue);
  }
  changeValue(value, initiator = "api") {
    const withoutIf = this.getWithoutIfValueFromValue(value);
    const fittestIndex = this.getFittestIndex(withoutIf);
    const indexChanged = fittestIndex !== this.index;
    this.index = fittestIndex;
    this.activeInstance = this.instances[fittestIndex];
    this.activeInstance.register();
    this.instances.forEach((instance, index2) => {
      instance.off("notifyParent");
      if (instance.children && isObject(value)) {
        instance.children.forEach((child) => {
          const shouldUpdateValue = child.isMultiple && hasOwn(value, child.getKey());
          if (shouldUpdateValue) {
            child.setValue(value[child.getKey()], false, "api");
          }
        });
      }
      const startingValue = this.instanceStartingValues[index2];
      const currentValue = instance.getValue();
      let instanceValue = value;
      if (isObject(startingValue) && isObject(value)) {
        if (indexChanged) {
          instanceValue = overwriteExistingProperties(startingValue, withoutIf);
          this.jedison.updateInstancesWatchedData();
        } else {
          instanceValue = overwriteExistingProperties(currentValue, value);
        }
        if (initiator === "api") {
          instanceValue = overwriteExistingProperties(currentValue, value);
        }
      }
      instance.setValue(instanceValue, false, initiator);
      instance.on("notifyParent", (initiator2) => {
        const value2 = instance.getValue();
        this.changeValue(value2, initiator2);
        this.emit("notifyParent", initiator2);
        this.emit("change", initiator2);
      });
    });
    this.value = this.activeInstance.getValue();
  }
  getWithoutIfValueFromValue(value) {
    let withoutIf = this.instanceWithoutIf.getValue();
    if (isObject(withoutIf) && isObject(value)) {
      withoutIf = overwriteExistingProperties(withoutIf, value);
      return withoutIf;
    }
    return value;
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
      if (schema.if === true) {
        fittestIndex = 0;
      } else if (schema.if === false) {
        fittestIndex = 1;
      } else {
        const testSchema = clone(schema.if);
        if (isSet(this.schema.type)) {
          testSchema.type = this.schema.type;
        }
        const ifValidator = new Jedison({
          schema: testSchema,
          data: value,
          refParser: this.jedison.refParser
        });
        const ifErrors = ifValidator.getErrors();
        ifValidator.destroy();
        if (ifErrors.length === 0 && schema.then) {
          fittestIndex = index2;
        }
        if (ifErrors.length > 0 && schema.else) {
          fittestIndex = index2;
        }
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
    this.isMultiple = true;
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
        let switcherOptionsLabel = "Option-" + (index2 + 1);
        const switcherTitle = getSchemaXOption(schema, "switcherTitle");
        const schemaTitle = getSchemaTitle(schema);
        const schemaDescription = getSchemaDescription(schema);
        if (isSet(schemaDescription)) {
          switcherOptionsLabel = schemaDescription;
        }
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
        { ...schemaClone, ...{ type: "string" } },
        { ...schemaClone, ...{ type: "boolean" } },
        { ...schemaClone, ...{ type: "integer" } },
        { ...schemaClone, ...{ type: "number" } },
        { ...schemaClone, ...{ type: "array" } },
        { ...schemaClone, ...{ type: "object" } },
        { ...schemaClone, ...{ type: "null" } }
      ];
      this.schemas.forEach((schema, index2) => {
        this.switcherOptionValues.push(index2);
      });
      this.switcherOptionsLabels = [
        "String",
        "Boolean",
        "Integer",
        "Number",
        "Array",
        "Object",
        "Null"
      ];
    }
    this.schemas.forEach((schema) => {
      const instance = this.jedison.createInstance({
        jedison: this.jedison,
        schema,
        path: this.path,
        parent: this.parent,
        value: clone(this.value)
      });
      if (isSet(this.value)) {
        instance.setValue(this.value, false);
      }
      instance.unregister();
      instance.off("notifyParent");
      instance.on("notifyParent", (initiator) => {
        this.value = this.activeInstance.getValue();
        this.emit("notifyParent", initiator);
        this.emit("change", initiator);
      });
      this.instances.push(instance);
      this.register();
    });
    const fittestIndex = this.getFittestIndex(this.value);
    this.switchInstance(fittestIndex, this.value);
  }
  switchInstance(index2, value, initiator = "api") {
    this.lastIndex = this.index;
    this.index = index2;
    this.activeInstance = this.instances[index2];
    if (isSet(value)) {
      this.activeInstance.setValue(value, false, initiator);
    }
    this.setValue(this.activeInstance.getValue(), true, initiator);
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
    let fittestIndex;
    let championErrors;
    for (let index2 = 0; index2 < this.instances.length; index2++) {
      const instance = this.instances[index2];
      const instanceErrors = this.jedison.validator.getErrors(value, instance.schema, instance.getKey(), instance.path);
      if (instanceErrors.length === 0) {
        fittestIndex = index2;
        break;
      }
      if (fittestIndex === void 0 || championErrors === void 0 || instanceErrors.length < championErrors.length) {
        fittestIndex = index2;
        championErrors = instanceErrors;
      }
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
    this.requiredProperties = /* @__PURE__ */ new Set();
    const schemaProperties = getSchemaProperties(this.schema);
    const schemaRequired = getSchemaRequired(this.schema);
    if (isSet(schemaProperties)) {
      Object.keys(schemaProperties).forEach((key) => {
        const schema = schemaProperties[key];
        this.properties[key] = { schema };
        let musstCreateChild = true;
        const optionsDeactivateNonRequired = this.jedison.options.deactivateNonRequired;
        const deactivateNonRequired = getSchemaXOption(this.schema, "deactivateNonRequired");
        const schemaDeactivateNonRequired = getSchemaXOption(schema, "deactivateNonRequired");
        if (!this.isRequired(key) && isSet(optionsDeactivateNonRequired) && optionsDeactivateNonRequired === true) {
          musstCreateChild = false;
        }
        if (!this.isRequired(key) && isSet(deactivateNonRequired) && deactivateNonRequired === true) {
          musstCreateChild = false;
        }
        if (!this.isRequired(key) && isSet(schemaDeactivateNonRequired) && schemaDeactivateNonRequired === true) {
          musstCreateChild = false;
        }
        if (musstCreateChild) {
          this.createChild(schema, key);
        }
      });
    }
    if (isSet(schemaRequired) && this.jedison.isEditor && this.jedison.options.enforceRequired === true) {
      schemaRequired.forEach((requiredProperty) => {
        this.requiredProperties.add(requiredProperty);
        if (!hasOwn(this.properties, requiredProperty)) {
          this.properties[requiredProperty] = {};
          this.createChild({}, requiredProperty);
        }
      });
    }
    this.refreshInstances();
    this.on("set-value", (value, initiator) => {
      this.addMissingRequiredPropertiesToValue(value);
      this.removeNotListedPropertiesFromValue(value);
      this.refreshInstances(initiator);
    });
  }
  removeNotListedPropertiesFromValue(value) {
    const schemaEnforceAdditionalProperties = getSchemaXOption(this.schema, "enforceAdditionalProperties");
    const enforceAdditionalProperties = isSet(schemaEnforceAdditionalProperties) ? schemaEnforceAdditionalProperties : this.jedison.options.enforceAdditionalProperties;
    const schemaAdditionalProperties = getSchemaAdditionalProperties(this.schema);
    const schemaPatternProperties = getSchemaPatternProperties(this.schema) || {};
    if (this.jedison.isEditor && enforceAdditionalProperties && isSet(schemaAdditionalProperties) && schemaAdditionalProperties === false) {
      Object.keys(value).forEach((propertyName) => {
        const matchesPattern = Object.keys(schemaPatternProperties).some((pattern2) => new RegExp(pattern2).test(propertyName));
        if (!hasOwn(this.properties, propertyName) && !matchesPattern) {
          console.warn("deleting", propertyName);
          delete value[propertyName];
        }
      });
    }
  }
  addMissingRequiredPropertiesToValue(value) {
    const enforceRequired = getSchemaXOption(this.schema, "enforceRequired") ?? this.jedison.options.enforceRequired;
    if (this.jedison.isEditor && enforceRequired) {
      this.requiredProperties.forEach((propertyName) => {
        if (!hasOwn(value, propertyName)) {
          value[propertyName] = this.getChild(propertyName).getValue();
        }
      });
    }
  }
  /**
   * Returns true if the property is required
   */
  isRequired(property) {
    const schemaRequired = getSchemaRequired(this.schema);
    const inSchemaRequired = isSet(schemaRequired) && schemaRequired.includes(property);
    const inSchemaDependentRequired = this.isDependentRequired(property);
    return inSchemaRequired || inSchemaDependentRequired;
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
    const instance = this.jedison.createInstance({
      jedison: this.jedison,
      schema,
      path: this.path + this.jedison.pathSeparator + key,
      parent: this,
      value: clone(value)
    });
    this.children.push(instance);
    this.value[key] = instance.getValue();
    const deactivateNonRequired = getSchemaXOption(this.schema, "deactivateNonRequired") ?? this.jedison.options.deactivateNonRequired;
    if (!this.isRequired(key) && isSet(deactivateNonRequired) && deactivateNonRequired === true && !activate) {
      instance.deactivate();
    }
    this.onChildChange();
    return instance;
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
      return key === instance.getKey().split(this.jedison.pathSeparator).pop();
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
  onChildChange(initiator) {
    const value = {};
    this.children.forEach((child) => {
      if (child.isActive) {
        const propertyName = child.getKey();
        if (propertyName === "__proto__") {
          Object.defineProperty(value, propertyName, {
            value: child.getValue(),
            enumerable: true
          });
        } else {
          value[propertyName] = child.getValue();
        }
      }
    });
    this.value = value;
    this.jedison.emit("instance-change", this, initiator);
    this.emit("notifyParent", initiator);
    this.emit("change", initiator);
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
  refreshInstances(initiator) {
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
          child.setValue(newValue, false, initiator);
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
    const schemaMinItems = getSchemaMinItems(this.schema);
    const schemaEnforceMinItems = getSchemaXOption(this.schema, "enforceMinItems");
    const enforceMinItems = isSet(schemaEnforceMinItems) ? schemaEnforceMinItems : this.jedison.options.enforceMinItems;
    const isEditor = this.jedison.isEditor;
    const hasEnforceMinItems = isSet(enforceMinItems) && enforceMinItems === true;
    const hasMinItems = isSet(schemaMinItems);
    if (isEditor && hasEnforceMinItems && hasMinItems) {
      for (let i = 0; i < schemaMinItems; i++) {
        this.addItem();
      }
    }
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
    return this.jedison.createInstance({
      jedison: this.jedison,
      schema,
      path: this.path + this.jedison.pathSeparator + itemsCount,
      parent: this
    });
  }
  setDefaultValue() {
    const schemaDefault = getSchemaDefault(this.schema);
    if (isSet(schemaDefault)) {
      this.setValue(schemaDefault);
    }
  }
  move(fromIndex, toIndex, initiator) {
    const value = clone(this.getValue());
    const item = value[fromIndex];
    value.splice(fromIndex, 1);
    value.splice(toIndex, 0, item);
    this.setValue(value, true, initiator);
    this.emit("item-move", initiator);
    this.jedison.emit("item-move", initiator);
  }
  addItem(initiator) {
    const tempEditor = this.createItemInstance();
    const value = clone(this.getValue());
    value.push(tempEditor.getValue());
    tempEditor.destroy();
    this.setValue(value, true, initiator);
    const instance = this.children[this.children.length - 1];
    this.emit("item-add", initiator, instance);
    this.jedison.emit("item-add", initiator, instance);
  }
  deleteItem(itemIndex, initiator) {
    const currentValue = clone(this.getValue());
    const newValue = currentValue.filter((item, index2) => index2 !== itemIndex);
    this.setValue(newValue, true, initiator);
    this.emit("item-delete", initiator);
    this.jedison.emit("item-delete", initiator);
  }
  onChildChange(initiator) {
    const value = [];
    this.children.forEach((child) => {
      value.push(child.getValue());
    });
    this.value = value;
    this.jedison.emit("instance-change", this, initiator);
    this.emit("notifyParent", initiator);
    this.emit("change", initiator);
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
  expand: "glyphicon glyphicon-plus",
  // Expand set to plus
  drag: "glyphicon glyphicon-th",
  info: "glyphicon glyphicon-question-sign",
  close: "glyphicon glyphicon-remove"
};
const bootstrapIcons = {
  properties: "bi bi-card-list",
  delete: "bi bi-trash2",
  add: "bi bi-plus",
  moveUp: "bi bi-arrow-up",
  moveDown: "bi bi-arrow-down",
  collapse: "bi bi-chevron-down",
  expand: "bi bi-plus",
  drag: "bi bi-grip-vertical",
  info: "bi bi-question-circle",
  close: "bi bi-x"
};
const fontAwesome3 = {
  properties: "icon-list",
  delete: "icon-trash",
  add: "icon-plus",
  moveUp: "icon-arrow-up",
  moveDown: "icon-arrow-down",
  collapse: "icon-chevron-down",
  expand: "icon-plus",
  drag: "icon-th",
  info: "icon-question-sign",
  close: "icon-remove"
};
const fontAwesome4 = {
  properties: "fa fa-list",
  delete: "fa fa-trash-o",
  add: "fa fa-plus",
  moveUp: "fa fa-arrow-up",
  moveDown: "fa fa-arrow-down",
  collapse: "fa fa-chevron-down",
  expand: "fa fa-plus",
  drag: "fa fa-th",
  info: "fa fa-question-circle",
  close: "fa fa-times"
};
const fontAwesome5 = {
  properties: "fas fa-list",
  delete: "fas fa-trash",
  add: "fas fa-plus",
  moveUp: "fas fa-arrow-up",
  moveDown: "fas fa-arrow-down",
  collapse: "fas fa-chevron-down",
  expand: "fas fa-plus",
  drag: "fas fa-grip-vertical",
  info: "fas fa-question-circle",
  close: "fas fa-times"
};
const fontAwesome6 = {
  properties: "fa-solid fa-list",
  delete: "fa-solid fa-trash",
  add: "fa-solid fa-plus",
  moveUp: "fa-solid fa-arrow-up",
  moveDown: "fa-solid fa-arrow-down",
  collapse: "fa-solid fa-chevron-down",
  expand: "fa-solid fa-plus",
  drag: "fa-solid fa-grip-vertical",
  info: "fa-solid fa-circle-question",
  close: "fa-solid fa-xmark"
};
class EditorBoolean extends Editor {
  sanitize(value) {
    return Boolean(value);
  }
}
class EditorRadios extends EditorBoolean {
  static resolves(schema) {
    return getSchemaType(schema) === "boolean" && (getSchemaXOption(schema, "format") === "radios" || getSchemaXOption(schema, "format") === "radios-inline");
  }
  build() {
    this.control = this.theme.getRadiosControl({
      title: this.getTitle(),
      description: this.getDescription(),
      values: ["false", "true"],
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || ["false", "true"],
      id: this.getIdFromPath(this.instance.path),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      inline: getSchemaXOption(this.instance.schema, "format") === "radios-inline",
      info: this.getInfo()
    });
  }
  adaptForTable() {
    this.theme.adaptForTableRadiosControl(this.control);
  }
  addEventListeners() {
    this.control.radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        const radioValue = radio.value === "true";
        this.instance.setValue(radioValue, true, "user");
      });
    });
  }
  refreshUI() {
    this.refreshDisabledState();
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
      title: this.getTitle(),
      description: this.getDescription(),
      values: ["false", "true"],
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || ["false", "true"],
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
  }
  adaptForTable() {
    this.theme.adaptForTableSelectControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const value = this.control.input.value === "true";
      this.instance.setValue(value, true, "user");
    });
  }
  refreshUI() {
    this.refreshDisabledState();
    this.control.input.value = this.instance.getValue() === true ? "true" : "false";
  }
}
class EditorBooleanCheckbox extends EditorBoolean {
  static resolves(schema) {
    return getSchemaType(schema) === "boolean" && getSchemaXOption(schema, "format") === "checkbox";
  }
  build() {
    this.control = this.theme.getCheckboxControl({
      title: this.getTitle(),
      description: this.getDescription(),
      id: this.getIdFromPath(this.instance.path),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
  }
  adaptForTable(td) {
    this.theme.adaptForTableCheckboxControl(this.control, td);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.checked, true, "user");
    });
  }
  sanitize(value) {
    return Boolean(value);
  }
  refreshUI() {
    this.refreshDisabledState();
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
    return getSchemaType(schema) === "string" && (getSchemaXOption(schema, "format") === "radios" || getSchemaXOption(schema, "format") === "radios-inline");
  }
  build() {
    this.control = this.theme.getRadiosControl({
      title: this.getTitle(),
      description: this.getDescription(),
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      inline: getSchemaXOption(this.instance.schema, "format") === "radios-inline",
      info: this.getInfo()
    });
  }
  adaptForTable() {
    this.theme.adaptForTableRadiosControl(this.control);
  }
  addEventListeners() {
    this.control.radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        this.instance.setValue(radio.value, true, "user");
      });
    });
  }
  refreshUI() {
    this.refreshDisabledState();
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
      title: this.getTitle(),
      description: this.getDescription(),
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
  }
  adaptForTable() {
    this.theme.adaptForTableSelectControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value, true, "user");
    });
  }
  refreshUI() {
    this.refreshDisabledState();
    this.control.input.value = this.instance.getValue();
  }
}
class EditorStringTextarea extends EditorString {
  static resolves(schema) {
    return getSchemaType(schema) === "string" && getSchemaXOption(schema, "format") === "textarea";
  }
  build() {
    this.control = this.theme.getTextareaControl({
      title: this.getTitle(),
      description: this.getDescription(),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
  }
  adaptForTable() {
    this.theme.adaptForTableTextareaControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value, true, "user");
    });
  }
  refreshUI() {
    this.refreshDisabledState();
    this.control.input.value = this.instance.getValue();
  }
}
class EditorStringAwesomplete extends EditorString {
  static resolves(schema) {
    const format2 = getSchemaXOption(schema, "format");
    return isSet(format2) && format2 === "awesomplete" && window.Awesomplete && getSchemaType(schema) === "string";
  }
  build() {
    this.control = this.theme.getInputControl({
      title: this.getTitle(),
      description: this.getDescription(),
      type: "text",
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
    try {
      const awesompleteOptions = getSchemaXOption(this.instance.schema, "awesomplete") ?? {};
      this.awesomplete = new window.Awesomplete(this.control.input, awesompleteOptions);
      this.control.container.querySelector(".awesomplete").style.display = "block";
    } catch (e) {
      console.error("Awesomplete is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.control.input.addEventListener("awesomplete-selectcomplete", () => {
      this.instance.setValue(this.control.input.value, true, "user");
    });
  }
  refreshUI() {
    this.refreshDisabledState();
    this.control.input.value = this.instance.getValue();
  }
  destroy() {
    this.awesomplete.destroy();
    super.destroy();
  }
}
class EditorStringEmojiButton extends EditorString {
  static resolves(schema) {
    const format2 = getSchemaXOption(schema, "format");
    return isSet(format2) && format2 === "emojiButton" && window.EmojiButton && getSchemaType(schema) === "string";
  }
  build() {
    this.control = this.theme.getInputControl({
      type: "button",
      title: this.getTitle(),
      description: this.getDescription(),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
    this.control.input.classList.add("jedi-emoji-button");
    this.control.input.value = "😀";
    const emojiButtonOptions = getSchemaXOption(this.instance.schema, "emojiButton") ?? {};
    const options = Object.assign({
      theme: "auto",
      autoHide: true,
      showPreview: false,
      showSearch: true,
      zIndex: 1e4,
      position: "auto"
    }, emojiButtonOptions);
    this.emojiButton = new window.EmojiButton(options);
  }
  addEventListeners() {
    this.emojiButton.on("emoji", (emoji) => {
      this.control.input.value = emoji;
      let value = emoji;
      if (typeof emoji === "object") {
        value = emoji.emoji;
      }
      this.instance.setValue(value, true, "user");
    });
    this.control.input.addEventListener("click", () => {
      this.emojiButton.togglePicker(this.control.input);
    });
  }
  refreshUI() {
    this.refreshDisabledState();
    this.control.input.value = this.instance.getValue();
  }
  destroy() {
    if (this.emojiButton) {
      this.emojiButton = null;
    }
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
      title: this.getTitle(),
      description: this.getDescription(),
      type: EditorStringInput.getTypes().includes(optionFormat) ? optionFormat : "text",
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden") || optionFormat === "hidden",
      info: this.getInfo()
    });
    if (optionFormat === "color" && this.instance.value.length === 0) {
      this.instance.setValue("#000000", false, "user");
    }
  }
  adaptForTable() {
    this.theme.adaptForTableInputControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value, true, "user");
    });
  }
  sanitize(value) {
    return String(value);
  }
  refreshUI() {
    super.refreshUI();
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
    return typeIsNumeric && isSet(schemaEnum) && (optionFormat === "radios" || optionFormat === "radios-inline");
  }
  build() {
    this.control = this.theme.getRadiosControl({
      title: this.getTitle(),
      description: this.getDescription(),
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      inline: getSchemaXOption(this.instance.schema, "format") === "radios-inline",
      info: this.getInfo()
    });
  }
  adaptForTable() {
    this.theme.adaptForTableRadiosControl(this.control);
  }
  addEventListeners() {
    this.control.radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        const value = this.sanitize(radio.value);
        this.instance.setValue(value, true, "user");
      });
    });
  }
  refreshUI() {
    this.refreshDisabledState();
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
      title: this.getTitle(),
      description: this.getDescription(),
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, "enumTitles") || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
  }
  adaptForTable() {
    this.theme.adaptForTableSelectControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const value = this.sanitize(this.control.input.value);
      this.instance.setValue(value, true, "user");
    });
  }
  refreshUI() {
    this.refreshDisabledState();
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
      title: this.getTitle(),
      description: this.getDescription(),
      type: "number",
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden") || getSchemaXOption(this.instance.schema, "format") === "hidden",
      info: this.getInfo()
    });
    this.control.input.setAttribute("step", "any");
    const useConstraintAttributes = getSchemaXOption(this.instance.schema, "useConstraintAttributes") ?? this.instance.jedison.options.useConstraintAttributes;
    if (useConstraintAttributes === true) {
      const schemaMinimum = getSchemaMinimum(this.instance.schema);
      const schemaMaximum = getSchemaMaximum(this.instance.schema);
      if (isSet(schemaMinimum)) {
        this.control.input.setAttribute("min", schemaMinimum);
      }
      if (isSet(schemaMaximum)) {
        this.control.input.setAttribute("max", schemaMaximum);
      }
    }
  }
  adaptForTable() {
    this.theme.adaptForTableInputControl(this.control);
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const value = this.sanitize(this.control.input.value);
      this.instance.setValue(value, true, "user");
    });
    this.control.input.addEventListener("focus", () => {
      if (this.control.input.value === "0") {
        this.control.input.value = this.instance.getValue().toString;
      }
    });
    this.control.input.addEventListener("blur", () => {
      this.refreshUI();
    });
  }
  refreshUI() {
    super.refreshUI();
    const value = this.instance.getValue();
    if (isNumber(value)) {
      this.control.input.value = value;
    }
  }
}
class EditorNumberInputNullable extends EditorNumberInput {
  static resolves(schema) {
    const schemaType = getSchemaType(schema);
    const format2 = getSchemaXOption(schema, "format");
    return isSet(format2) && format2 === "number-nullable" && isSet(schemaType) && isArray(schemaType) && schemaType.length === 2 && schemaType.includes("null") && (schemaType.includes("number") || schemaType.includes("integer"));
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const value = this.sanitize(this.control.input.value);
      this.instance.setValue(value, true, "user");
    });
  }
  sanitize(value) {
    if (value === "") {
      return null;
    }
    const schemaType = getSchemaType(this.instance.schema);
    if (schemaType.includes("integer")) {
      return Math.floor(Number(value));
    } else {
      return Number(value);
    }
  }
  refreshUI() {
    super.refreshUI();
    const value = this.instance.getValue();
    if (value === null) {
      this.control.input.value = "";
    }
    if (isNumber(value)) {
      const schemaType = getSchemaType(this.instance.schema);
      if (schemaType.includes("integer")) {
        this.control.input.value = Math.floor(Number(value));
      } else {
        this.control.input.value = value;
      }
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
    if (isSet(this.instance.jedison.options.enablePropertiesToggle)) {
      enablePropertiesToggle = this.instance.jedison.options.enablePropertiesToggle;
    }
    if (isSet(schemaOptions.enablePropertiesToggle)) {
      enablePropertiesToggle = schemaOptions.enablePropertiesToggle;
    }
    this.control = this.theme.getObjectControl({
      title: this.getTitle(),
      description: this.getDescription(),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      id: this.getIdFromPath(this.instance.path),
      enablePropertiesToggle,
      addProperty,
      enableCollapseToggle: getSchemaXOption(this.instance.schema, "enableCollapseToggle") ?? this.instance.jedison.options.enableCollapseToggle,
      startCollapsed: getSchemaXOption(this.instance.schema, "startCollapsed") ?? this.instance.jedison.options.startCollapsed,
      readOnly: this.instance.isReadOnly(),
      info: this.getInfo(),
      propertiesToggleContent: getSchemaXOption(this.instance.schema, "propertiesToggleContent") ?? this.instance.jedison.translator.translate("propertiesToggle"),
      collapseToggleContent: getSchemaXOption(this.instance.schema, "collapseToggleContent") ?? this.instance.jedison.translator.translate("collapseToggle"),
      addPropertyContent: getSchemaXOption(this.instance.schema, "addPropertyContent") ?? this.instance.jedison.translator.translate("objectAddProperty")
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
      this.instance.setValue(this.instance.value, true, "user");
      this.control.addPropertyControl.input.value = "";
      const ariaLive = this.control.ariaLive;
      const schemaTitle = getSchemaTitle(child.schema);
      const label = isSet(schemaTitle) ? schemaTitle : propertyName;
      const ariaLiveMessage = this.theme.getAriaLiveMessage();
      ariaLiveMessage.textContent = label + " " + this.instance.jedison.translator.translate("objectPropertyAdded");
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
  getErrorFeedback(config) {
    return this.theme.getAlert(config);
  }
  refreshPropertiesSlot() {
    const schemaOptionEnablePropertiesToggle = getSchemaXOption(this.instance.schema, "enablePropertiesToggle") ?? this.instance.jedison.options.enablePropertiesToggle;
    if (equal(schemaOptionEnablePropertiesToggle, true)) {
      const declaredProperties = Object.keys(this.instance.properties);
      const instanceProperties = this.instance.children.map((child) => child.getKey());
      const properties2 = [.../* @__PURE__ */ new Set([...declaredProperties, ...instanceProperties])];
      while (this.control.propertiesActivators.firstChild) {
        this.control.propertiesActivators.removeChild(this.control.propertiesActivators.firstChild);
      }
      properties2.forEach((property) => {
        const isRequired = this.instance.isRequired(property);
        const ariaLive = this.control.ariaLive;
        const schema = this.instance.getPropertySchema(property);
        const schemaTitle = getSchemaTitle(schema);
        const path = this.instance.path + this.instance.jedison.pathSeparator + property;
        const id = pathToAttribute(path) + "-activator";
        const title = isSet(schemaTitle) ? schemaTitle : property;
        const checkboxControl = this.theme.getCheckboxControl({
          id,
          title,
          titleHidden: false
        });
        const checkbox = checkboxControl.input;
        this.propertyActivators[property] = checkbox;
        checkbox.addEventListener("change", () => {
          ariaLive.innerHTML = "";
          const ariaLiveMessage = this.theme.getAriaLiveMessage();
          if (checkbox.checked) {
            const child = this.instance.getChild(property);
            if (!child) {
              this.instance.createChild(schema, property);
            }
            this.instance.getChild(property).activate();
            ariaLiveMessage.textContent = title + " " + this.instance.jedison.translator.translate("objectPropertyAdded");
            ariaLive.appendChild(ariaLiveMessage);
          } else {
            this.instance.getChild(property).deactivate();
            ariaLiveMessage.textContent = title + " " + this.instance.jedison.translator.translate("objectPropertyRemoved");
            ariaLive.appendChild(ariaLiveMessage);
          }
          this.control.propertiesContainer.close();
          this.control.propertiesContainer.showModal();
        });
        this.control.propertiesActivators.appendChild(checkboxControl.container);
        checkbox.disabled = this.disabled || isRequired;
        checkbox.checked = hasOwn(this.instance.getValue(), property);
      });
    }
  }
  refreshEditors() {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.firstChild);
    }
    this.instance.children.forEach((child) => {
      const optIn = this.theme.getCheckboxControl({
        id: child.path + "-opt-in",
        title: child.path + "-opt-in",
        titleHidden: true
      });
      optIn.input.checked = child.isActive;
      optIn.input.addEventListener("change", () => {
        if (child.isActive) {
          child.deactivate();
        } else {
          child.activate();
        }
      });
      if (child.isActive) {
        if (child.ui.control.container.parentNode === null) {
          this.control.childrenSlot.appendChild(child.ui.control.container);
          if (child.ui.control.optInContainer) {
            child.ui.control.optInContainer.appendChild(optIn.container);
          }
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
    super.refreshUI();
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
        const childGridOptions = getSchemaXOption(child.schema, "grid") || {};
        const columns = childGridOptions.columns ?? getSchemaXOption(child.schema, "gridColumns") ?? 12;
        const offset = childGridOptions.offset ?? getSchemaXOption(child.schema, "gridOffset") ?? 0;
        const col = this.theme.getCol(12, columns, offset);
        const newRow = childGridOptions.newRow || false;
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
    const format2 = getSchemaXOption(schema, "format");
    const regex = /^nav-(horizontal|vertical(?:-\d+)?)$/;
    const hasNavFormat = regex.test(format2);
    return getSchemaType(schema) === "object" && hasNavFormat;
  }
  init() {
    super.init();
    this.activeTabIndex = 0;
  }
  refreshEditors() {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
    }
    const format2 = getSchemaXOption(this.instance.schema, "format");
    const formatParts = format2.split("-");
    const variant = formatParts[1];
    const columns = formatParts[2];
    const navColumns = variant === "horizontal" ? 12 : columns ?? 4;
    const row = this.theme.getRow();
    const tabListCol = this.theme.getCol(12, navColumns);
    const tabContentCol = this.theme.getCol(12, 12 - navColumns);
    const tabContent = this.theme.getTabContent();
    const tabList = this.theme.getTabList({
      variant
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
  init() {
    super.init();
    this.activeItemIndex = 0;
  }
  build() {
    this.control = this.theme.getArrayControl({
      title: this.getTitle(),
      description: this.getDescription(),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      id: this.getIdFromPath(this.instance.path),
      enableCollapseToggle: getSchemaXOption(this.instance.schema, "enableCollapseToggle") ?? this.instance.jedison.options.enableCollapseToggle,
      startCollapsed: getSchemaXOption(this.instance.schema, "startCollapsed") ?? this.instance.jedison.options.startCollapsed,
      readOnly: this.instance.isReadOnly(),
      info: this.getInfo(),
      arrayAdd: getSchemaXOption(this.instance.schema, "arrayAdd") ?? this.instance.jedison.options.arrayAdd,
      arrayAddContent: getSchemaXOption(this.instance.schema, "arrayAddContent") ?? this.instance.jedison.translator.translate("arrayAdd"),
      collapseToggleContent: getSchemaXOption(this.instance.schema, "collapseToggleContent") ?? this.instance.jedison.translator.translate("collapseToggle")
    });
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.instance.addItem("user");
    });
  }
  getErrorFeedback(config) {
    return this.theme.getAlert(config);
  }
  sanitize(value) {
    if (isArray(value)) {
      return value;
    }
    return [];
  }
  getButtons(index2) {
    const schemaDeleteContent = getSchemaXOption(this.instance.schema, "arrayDeleteContent");
    const schemaMoveUpContent = getSchemaXOption(this.instance.schema, "arrayMoveUpContent");
    const schemaMoveDownContent = getSchemaXOption(this.instance.schema, "arrayMoveDownContent");
    const schemaDragContent = getSchemaXOption(this.instance.schema, "arrayDragContent");
    const deleteBtn = this.theme.getDeleteItemBtn({
      content: schemaDeleteContent ?? this.instance.jedison.translator.translate("arrayDelete")
    });
    const moveUpBtn = this.theme.getMoveUpItemBtn({
      content: schemaMoveUpContent ?? this.instance.jedison.translator.translate("arrayMoveUp")
    });
    const moveDownBtn = this.theme.getMoveDownItemBtn({
      content: schemaMoveDownContent ?? this.instance.jedison.translator.translate("arrayMoveDown")
    });
    const dragBtn = this.theme.getDragItemBtn({
      content: schemaDragContent ?? this.instance.jedison.translator.translate("arrayDrag")
    });
    const btnGroup = this.theme.getBtnGroup();
    deleteBtn.addEventListener("click", () => {
      const confirmDeletion = window.confirm(this.instance.jedison.translator.translate("arrayConfirmDelete"));
      if (confirmDeletion) {
        this.activeItemIndex = clamp(index2 - 1, 0, this.instance.value.length - 1);
        this.instance.deleteItem(index2, "user");
      }
    });
    moveUpBtn.addEventListener("click", () => {
      const toIndex = index2 - 1;
      this.activeItemIndex = toIndex;
      this.instance.move(index2, toIndex, "user");
    });
    moveDownBtn.addEventListener("click", () => {
      const toIndex = index2 + 1;
      this.activeItemIndex = toIndex;
      this.instance.move(index2, toIndex, "user");
    });
    if (index2 === 0) {
      moveUpBtn.setAttribute("always-disabled", true);
    }
    if (index2 === this.instance.children.length - 1) {
      moveDownBtn.setAttribute("always-disabled", true);
    }
    return { deleteBtn, moveUpBtn, moveDownBtn, btnGroup, dragBtn };
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
    const arrayDelete = getSchemaXOption(this.instance.schema, "arrayDelete") ?? this.instance.jedison.options.arrayDelete;
    const arrayMove = getSchemaXOption(this.instance.schema, "arrayMove") ?? this.instance.jedison.options.arrayMove;
    this.control.childrenSlot.innerHTML = "";
    this.instance.children.forEach((child, index2) => {
      const { deleteBtn, moveUpBtn, moveDownBtn, dragBtn, btnGroup } = this.getButtons(index2);
      const { container, arrayActions, body } = this.theme.getArrayItem({
        readOnly: this.instance.isReadOnly(),
        index: index2
      });
      arrayActions.appendChild(btnGroup);
      if (isSet(arrayDelete) && arrayDelete === true) {
        btnGroup.appendChild(deleteBtn);
      }
      if (isSet(arrayMove) && arrayMove === true) {
        btnGroup.appendChild(moveUpBtn);
        btnGroup.appendChild(moveDownBtn);
      }
      if (this.isSortable()) {
        btnGroup.appendChild(dragBtn);
      }
      this.control.childrenSlot.appendChild(container);
      body.appendChild(child.ui.control.container);
      if (this.disabled || this.instance.isReadOnly()) {
        child.ui.disable();
      } else {
        child.ui.enable();
      }
      if (isSet(minItems2) && this.instance.value.length <= minItems2) {
        deleteBtn.setAttribute("disabled", "");
      }
    });
    this.refreshDisabledState();
    this.refreshSortable(this.control.childrenSlot);
    this.instance.children.forEach((child) => {
      child.ui.refreshUI();
    });
    if (isSet(maxItems2) && maxItems2 === this.instance.value.length) {
      this.control.addBtn.setAttribute("disabled", "");
    }
  }
}
class EditorArrayTable extends EditorArray {
  static resolves(schema, refParser) {
    return getSchemaType(schema) === "array" && getSchemaXOption(schema, "format") === "table";
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.activeItemIndex = this.instance.value.length;
      this.instance.addItem("user");
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
    const { label } = this.theme.getFakeLabel({
      content: "Controls",
      visuallyHidden: true
    });
    th.appendChild(label);
    table.thead.appendChild(th);
    if (this.instance.children.length) {
      const schemaItems = getSchemaItems(this.instance.schema);
      const thTitle = this.theme.getTableHeader();
      if (schemaItems.title) {
        const fakeLabel = this.theme.getFakeLabel({
          content: schemaItems.title
        });
        thTitle.appendChild(fakeLabel.label);
      }
      const schemaXInfo = getSchemaXOption(schemaItems, "info");
      if (isSet(schemaXInfo)) {
        const infoContent = this.getInfo(schemaItems);
        const info = this.theme.getInfo(infoContent);
        if (schemaXInfo.variant === "modal") {
          this.theme.infoAsModal(info, this.getIdFromPath(this.instance.path), infoContent);
        }
        thTitle.appendChild(info.container);
      }
      table.thead.appendChild(thTitle);
    }
    const arrayDelete = getSchemaXOption(this.instance.schema, "arrayDelete") ?? this.instance.jedison.options.arrayDelete;
    const arrayMove = getSchemaXOption(this.instance.schema, "arrayMove") ?? this.instance.jedison.options.arrayMove;
    this.instance.children.forEach((child, index2) => {
      const tbodyRow = document.createElement("tr");
      const buttonsTd = this.theme.getTableDefinition();
      const { deleteBtn, moveUpBtn, moveDownBtn, dragBtn, btnGroup } = this.getButtons(index2);
      if (this.isSortable()) {
        btnGroup.appendChild(dragBtn);
      }
      if (isSet(arrayDelete) && arrayDelete === true) {
        btnGroup.appendChild(deleteBtn);
      }
      if (isSet(arrayMove) && arrayMove === true) {
        btnGroup.appendChild(moveUpBtn);
        btnGroup.appendChild(moveDownBtn);
      }
      buttonsTd.appendChild(btnGroup);
      tbodyRow.appendChild(buttonsTd);
      const td = this.theme.getTableDefinition();
      child.ui.adaptForTable(child, td);
      td.appendChild(child.ui.control.container);
      tbodyRow.appendChild(td);
      table.tbody.appendChild(tbodyRow);
    });
    this.refreshSortable(table.tbody);
    this.refreshDisabledState();
    this.refreshScrollPosition(table.container);
    table.container.addEventListener("scroll", () => {
      this.lastScrollTop = table.container.scrollTop;
      this.lastScrollLeft = table.container.scrollLeft;
    });
  }
  refreshScrollPosition(element) {
    element.scroll({
      top: this.lastScrollTop,
      left: this.lastScrollLeft
    });
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
class EditorArrayTableObject extends EditorArray {
  static resolves(schema, refParser) {
    let schemaItems = getSchemaItems(schema);
    if (!schemaItems) {
      return false;
    }
    if (refParser) {
      schemaItems = refParser.expand(schemaItems);
    }
    const itemType = getSchemaType(schemaItems);
    if (!itemType) {
      return false;
    }
    return getSchemaType(schema) === "array" && itemType === "object" && getSchemaXOption(schema, "format") === "table-object";
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.activeItemIndex = this.instance.value.length;
      this.instance.addItem("user");
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
    const { label } = this.theme.getFakeLabel({
      content: "Controls",
      visuallyHidden: true
    });
    th.appendChild(label);
    table.thead.appendChild(th);
    let schemaItems = getSchemaItems(this.instance.schema);
    if (this.instance.jedison.refParser) {
      schemaItems = this.instance.jedison.refParser.expand(schemaItems);
    }
    const itemProperties = getSchemaProperties(schemaItems);
    Object.values(itemProperties).forEach((propertySchema) => {
      const th2 = this.theme.getTableHeader();
      if (propertySchema.title) {
        const fakeLabel = this.theme.getFakeLabel({
          content: propertySchema.title
        });
        th2.appendChild(fakeLabel.label);
      }
      const schemaXInfo = getSchemaXOption(propertySchema, "info");
      if (isSet(schemaXInfo)) {
        const infoContent = this.getInfo(propertySchema);
        const info = this.theme.getInfo(infoContent);
        if (schemaXInfo.variant === "modal") {
          this.theme.infoAsModal(info, this.getIdFromPath(this.instance.path), infoContent);
        }
        th2.appendChild(info.container);
      }
      table.thead.appendChild(th2);
    });
    const arrayDelete = getSchemaXOption(this.instance.schema, "arrayDelete") ?? this.instance.jedison.options.arrayDelete;
    const arrayMove = getSchemaXOption(this.instance.schema, "arrayMove") ?? this.instance.jedison.options.arrayMove;
    this.instance.children.forEach((child, index2) => {
      const tbodyRow = document.createElement("tr");
      const buttonsTd = this.theme.getTableDefinition();
      const { deleteBtn, moveUpBtn, moveDownBtn, dragBtn, btnGroup } = this.getButtons(index2);
      if (this.isSortable()) {
        btnGroup.appendChild(dragBtn);
      }
      if (isSet(arrayDelete) && arrayDelete === true) {
        btnGroup.appendChild(deleteBtn);
      }
      if (isSet(arrayMove) && arrayMove === true) {
        btnGroup.appendChild(moveUpBtn);
        btnGroup.appendChild(moveDownBtn);
      }
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
    this.refreshDisabledState();
    this.refreshScrollPosition(table.container);
    table.container.addEventListener("scroll", () => {
      this.lastScrollTop = table.container.scrollTop;
      this.lastScrollLeft = table.container.scrollLeft;
    });
  }
  refreshScrollPosition(element) {
    element.scroll({
      top: this.lastScrollTop,
      left: this.lastScrollLeft
    });
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
class EditorArrayChoices extends Editor {
  static resolves(schema) {
    const hasChoicesFormat = getSchemaXOption(schema, "format") === "choices";
    const choicesInstalled = window.Choices;
    const schemaType = getSchemaType(schema);
    const schemaItems = getSchemaItems(schema);
    const schemaItemsType = isSet(schemaItems) && getSchemaType(schemaItems);
    const isArrayType = isSet(schemaType) && schemaType === "array";
    const isUniqueItems = getSchemaUniqueItems(schema) === true;
    const hasTypes = isSet(schemaItems) && isSet(schemaItemsType);
    const validTypes = ["string", "number", "integer"];
    const hasValidItemType = isSet(schemaItems) && isSet(schemaItemsType) && (validTypes.includes(schemaItemsType) || isArray(schemaItemsType) && schemaItemsType.some((type2) => validTypes.includes(type2)));
    return hasChoicesFormat && choicesInstalled && isArrayType && isUniqueItems && hasTypes && hasValidItemType;
  }
  build() {
    this.control = this.theme.getSelectControl({
      title: this.getTitle(),
      description: this.getDescription(),
      values: [],
      titles: [],
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
    this.control.input.setAttribute("multiple", "");
    try {
      const value = this.instance.getValue();
      const itemEnum = this.instance.schema.items.enum ?? [];
      const itemEnumTitles = getSchemaXOption(this.instance.schema.items, "enumTitles") ?? this.instance.getValue();
      const choicesOptions = getSchemaXOption(this.instance.schema, "choicesOptions") ?? {};
      if (this.choicesInstance) {
        this.choicesInstance.destroy();
      }
      this.choices = itemEnum.map((item, index2) => ({
        value: item,
        label: itemEnumTitles[index2] || item,
        selected: value.includes(item)
      }));
      this.choicesInstance = new window.Choices(this.control.input, {
        duplicateItemsAllowed: false,
        removeItemButton: true,
        choices: this.choices,
        ...choicesOptions
      });
    } catch (e) {
      console.error("Choices is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      const value = this.choicesInstance.getValue(true);
      if (value !== this.instance.getValue()) {
        this.instance.setValue(value, true, "user");
      }
    });
  }
  refreshDisabledState() {
    if (this.disabled || this.readOnly) {
      this.choicesInstance.disable();
    } else {
      this.choicesInstance.enable();
    }
  }
  refreshUI() {
    super.refreshUI();
    const value = this.instance.getValue();
    this.choicesInstance.removeActiveItems();
    if (Array.isArray(value)) {
      value.forEach((val) => {
        this.choicesInstance.setChoiceByValue(val);
      });
    }
  }
  destroy() {
    this.choicesInstance.destroy();
    super.destroy();
  }
}
class EditorArrayNav extends EditorArray {
  static resolves(schema) {
    const format2 = getSchemaXOption(schema, "format");
    const regex = /^nav-(horizontal|vertical(?:-\d+)?)$/;
    const hasNavFormat = regex.test(format2);
    return getSchemaType(schema) === "array" && hasNavFormat;
  }
  addEventListeners() {
    this.control.addBtn.addEventListener("click", () => {
      this.activeItemIndex = this.instance.value.length;
      this.instance.addItem("user");
    });
  }
  refreshUI() {
    this.refreshDisabledState();
    this.control.childrenSlot.innerHTML = "";
    const format2 = getSchemaXOption(this.instance.schema, "format");
    const formatParts = format2.split("-");
    const variant = formatParts[1];
    const columns = formatParts[2];
    const navColumns = variant === "horizontal" ? 12 : columns ?? 4;
    const row = this.theme.getRow();
    const tabListCol = this.theme.getCol(12, navColumns);
    const tabContentCol = this.theme.getCol(12, 12 - navColumns);
    const tabContent = this.theme.getTabContent();
    const tabList = this.theme.getTabList({
      variant
    });
    const arrayDelete = getSchemaXOption(this.instance.schema, "arrayDelete") ?? this.instance.jedison.options.arrayDelete;
    const arrayMove = getSchemaXOption(this.instance.schema, "arrayMove") ?? this.instance.jedison.options.arrayMove;
    this.control.childrenSlot.appendChild(row);
    row.appendChild(tabListCol);
    row.appendChild(tabContentCol);
    tabListCol.appendChild(tabList);
    tabContentCol.appendChild(tabContent);
    this.instance.children.forEach((child, index2) => {
      const { deleteBtn, moveUpBtn, moveDownBtn, btnGroup } = this.getButtons(index2);
      if (isSet(arrayDelete) && arrayDelete === true) {
        btnGroup.appendChild(deleteBtn);
      }
      if (isSet(arrayMove) && arrayMove === true) {
        btnGroup.appendChild(moveUpBtn);
        btnGroup.appendChild(moveDownBtn);
      }
      this.control.childrenSlot.appendChild(child.ui.control.container);
      const schemaTitle = getSchemaTitle(child.schema);
      const childTitle = isSet(schemaTitle) ? schemaTitle + " " + (index2 + 1) : child.getKey();
      let titleTemplate;
      const schemaOptionTitleTemplate = getSchemaXOption(this.instance.schema, "titleTemplate");
      if (schemaOptionTitleTemplate) {
        const template = schemaOptionTitleTemplate;
        const data = {
          i0: index2,
          i1: index2 + 1,
          value: child.getValue(),
          settings: this.instance.jedison.options.settings
        };
        titleTemplate = compileTemplate(template, data) ?? childTitle;
      }
      const active = index2 === this.activeItemIndex;
      const id = pathToAttribute(child.path);
      const { list, arrayActions } = this.theme.getTab({
        hasErrors: child.children.some((grandChild) => grandChild.ui.showingValidationErrors),
        title: (titleTemplate == null ? void 0 : titleTemplate.length) ? titleTemplate : childTitle,
        id,
        active
      });
      arrayActions.appendChild(btnGroup);
      list.addEventListener("click", () => {
        this.activeItemIndex = index2;
      });
      this.theme.setTabPaneAttributes(child.ui.control.container, active, id);
      tabList.appendChild(list);
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
    this.switcherInput = getSchemaXOption(this.instance.schema, "switcherInput") ?? this.instance.jedison.options.switcherInput;
    this.control = this.theme.getMultipleControl({
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      id: this.getIdFromPath(this.instance.path),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels,
      switcher: this.switcherInput,
      readOnly: this.instance.isReadOnly()
    });
  }
  adaptForTable(td) {
    this.theme.adaptForTableMultipleControl(this.control, td);
  }
  addEventListeners() {
    if (this.switcherInput === "select") {
      this.control.switcher.input.addEventListener("change", () => {
        const index2 = Number(this.control.switcher.input.value);
        this.instance.switchInstance(index2, void 0, "user");
      });
    }
    if (this.switcherInput === "radios" || this.switcherInput === "radios-inline") {
      this.control.switcher.radios.forEach((radio) => {
        radio.addEventListener("change", () => {
          const index2 = Number(radio.value);
          this.instance.switchInstance(index2, void 0, "user");
        });
      });
    }
  }
  refreshUI() {
    this.refreshDisabledState();
    this.control.childrenSlot.innerHTML = "";
    this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container);
    if (this.switcherInput === "select") {
      this.control.switcher.input.value = this.instance.index;
    }
    if (this.switcherInput === "radios" || this.switcherInput === "radios-inline") {
      this.control.switcher.radios.forEach((radio) => {
        const radioIndex = Number(radio.value);
        radio.checked = radioIndex === this.instance.index;
      });
    }
    if (this.disabled || this.instance.isReadOnly()) {
      this.instance.activeInstance.ui.disable();
    } else {
      this.instance.activeInstance.ui.enable();
    }
  }
  getErrorFeedback(config) {
    return this.theme.getAlert(config);
  }
}
class EditorNull extends Editor {
  static resolves(schema) {
    return getSchemaType(schema) === "null";
  }
  build() {
    this.control = this.theme.getNullControl({
      title: this.getTitle(),
      description: this.getDescription(),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden") || getSchemaXOption(this.instance.schema, "format") === "hidden",
      info: this.getInfo()
    });
  }
  sanitize() {
    return null;
  }
}
class EditorStringQuill extends EditorString {
  static resolves(schema) {
    const format2 = getSchemaXOption(schema, "format");
    return isSet(format2) && format2 === "quill" && window.Quill && getSchemaType(schema) === "string";
  }
  build() {
    this.control = this.theme.getPlaceholderControl({
      title: this.getTitle(),
      description: this.getDescription(),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
    try {
      const quillOptions = getSchemaXOption(this.instance.schema, "quill") ?? {};
      this.quill = new window.Quill(this.control.placeholder, quillOptions);
    } catch (e) {
      console.error("Quill is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.quill.root.addEventListener("blur", () => {
      const quillText = this.quill.getText();
      if (quillText !== this.instance.getValue()) {
        this.instance.setValue(quillText, true, "user");
      }
    });
  }
  refreshDisabledState() {
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
    const format2 = getSchemaXOption(schema, "format");
    return isSet(format2) && format2 === "jodit" && window.Jodit && getSchemaType(schema) === "string";
  }
  build() {
    this.control = this.theme.getTextareaControl({
      title: this.getTitle(),
      description: this.getDescription(),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
    try {
      const joditOptions = getSchemaXOption(this.instance.schema, "jodit") ?? {};
      this.jodit = window.Jodit.make(this.control.input, joditOptions);
    } catch (e) {
      console.error("Jodit is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.jodit.events.on("change", () => {
      const joditValue = this.jodit.value;
      if (joditValue !== this.instance.getValue()) {
        this.instance.setValue(joditValue, true, "user");
      }
    });
  }
  refreshDisabledState() {
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
    const format2 = getSchemaXOption(schema, "format");
    return isSet(format2) && format2 === "flatpickr" && window.flatpickr && getSchemaType(schema) === "string";
  }
  build() {
    this.control = this.theme.getInputControl({
      title: this.getTitle(),
      description: this.getDescription(),
      type: "text",
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
    try {
      const flatpickrOptions = getSchemaXOption(this.instance.schema, "flatpickr") ?? {};
      this.flatpickr = window.flatpickr(this.control.input, flatpickrOptions);
    } catch (e) {
      console.error("Flatpickr is not available or not loaded correctly.", e);
    }
  }
  addEventListeners() {
    this.control.input.addEventListener("change", () => {
      this.instance.setValue(this.control.input.value, true, "user");
    });
  }
  refreshUI() {
    this.refreshDisabledState();
    this.flatpickr.setDate(this.instance.getValue());
  }
  destroy() {
    this.flatpickr.destroy();
    super.destroy();
  }
}
class EditorStringIMask extends EditorString {
  static resolves(schema) {
    const hasSchemaTypeString = getSchemaType(schema) === "string";
    const imaskAvailable = window.IMask;
    const format2 = getSchemaXOption(schema, "format");
    return isSet(format2) && format2 === "imask" && hasSchemaTypeString && imaskAvailable;
  }
  build() {
    this.control = this.theme.getInputControl({
      title: this.getTitle(),
      description: this.getDescription(),
      type: "text",
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
    try {
      const schemaImask = getSchemaXOption(this.instance.schema, "imask") ?? {};
      const schemaImaskSettings = schemaImask["x-settings"];
      const settings = schemaImaskSettings && this.instance.jedison.options.settings[schemaImaskSettings] ? this.instance.jedison.options.settings[schemaImaskSettings] : {};
      const imaskOptions = { ...schemaImask, ...settings };
      this.imask = window.IMask(this.control.input, imaskOptions);
      this.useMaskedValue = schemaImask["x-masked"] ?? false;
    } catch (e) {
      console.error("IMask is not available or not loaded or configured correctly.", e);
    }
  }
  addEventListeners() {
    this.imask.on("accept", () => {
      const value = this.useMaskedValue ? this.imask.value : this.imask.unmaskedValue;
      this.instance.setValue(value, true, "user");
    });
  }
  refreshUI() {
    this.refreshDisabledState();
    this.imask.value = this.instance.getValue();
  }
  destroy() {
    this.imask.destroy();
    super.destroy();
  }
}
class EditorNumberRaty extends EditorNumber {
  static resolves(schema) {
    const format2 = getSchemaXOption(schema, "format");
    return isSet(format2) && format2 === "raty" && typeof Raty !== "undefined" && getSchemaType(schema) === "number";
  }
  build() {
    this.control = this.theme.getPlaceholderControl({
      title: this.getTitle(),
      description: this.getDescription(),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, "titleIconClass"),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      info: this.getInfo()
    });
    try {
      const ratyOptions = getSchemaXOption(this.instance.schema, "raty") ?? {};
      this.raty = new Raty(this.control.placeholder, Object.assign({}, ratyOptions), {
        click: (score) => {
          this.instance.setValue(score, true, "user");
        }
      });
      this.raty.init();
    } catch (e) {
      console.error("Raty is not available or not loaded correctly.", e);
    }
  }
  refreshDisabledState() {
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
      title: this.getTitle(),
      description: this.getDescription(),
      values: getSchemaEnum(this.instance.schema.items),
      titles: getSchemaXOption(this.instance.schema.items, "enumTitles") || getSchemaEnum(this.instance.schema.items),
      id: this.getIdFromPath(this.instance.path),
      titleHidden: getSchemaXOption(this.instance.schema, "titleHidden"),
      inline: getSchemaXOption(this.instance.schema, "format") === "checkboxes-inline",
      info: this.getInfo()
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
        this.instance.setValue(value, true, "user");
      });
    });
  }
  refreshUI() {
    this.refreshDisabledState();
    const value = this.instance.getValue();
    this.control.checkboxes.forEach((checkbox) => {
      checkbox.checked = value.includes(checkbox.value);
    });
  }
}
class UiResolver {
  constructor(options) {
    this.customEditors = options.customEditors ?? [];
    this.refParser = options.refParser ?? null;
    this.editors = [
      EditorNumberInputNullable,
      EditorMultiple,
      EditorIfThenElse,
      EditorRadios,
      EditorBooleanCheckbox,
      EditorBooleanSelect,
      EditorStringRadios,
      EditorStringSelect,
      EditorStringTextarea,
      EditorStringAwesomplete,
      EditorStringEmojiButton,
      EditorStringQuill,
      EditorStringJodit,
      EditorStringFlatpickr,
      EditorStringIMask,
      EditorStringInput,
      EditorNumberRaty,
      EditorNumberRadios,
      EditorNumberSelect,
      EditorNumberInput,
      EditorObjectGrid,
      EditorObjectNav,
      EditorObject,
      EditorArrayChoices,
      EditorArrayCheckboxes,
      EditorArrayTableObject,
      EditorArrayTable,
      EditorArrayNav,
      EditorArray,
      EditorNull
    ];
  }
  getClass(schema) {
    for (const editor of this.customEditors) {
      if (editor.resolves(schema, this.refParser)) {
        return editor;
      }
    }
    for (const editor of this.editors) {
      if (editor.resolves(schema, this.refParser)) {
        return editor;
      }
    }
    return null;
  }
}
const defaultTranslations = {
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
  errorUniqueItems: "Must have unique items.",
  arrayDelete: "Delete item",
  arrayMoveUp: "Move up",
  arrayMoveDown: "Move down",
  arrayDrag: "Drag",
  arrayAdd: "Add item",
  arrayConfirmDelete: "Are you sure you want to delete this item?",
  objectAddProperty: "Add property",
  objectPropertyAdded: "field was added to the form",
  objectPropertyRemoved: "field was removed from the form",
  propertiesToggle: "Properties",
  collapseToggle: "Collapse"
};
const translations = {
  en: {
    errorAdditionalProperties: 'Has additional property "{{ property }}" but no additional properties are allowed.',
    errorAnyOf: "Must validate against at least one of the provided schemas.",
    errorConst: "Must have value of: {{ const }}.",
    errorContains: "Must contain at least one item matching the provided schema.",
    errorDependentRequired: "Must have the required properties: {{ dependentRequired }}.",
    errorEnum: "Must be one of the enumerated values: {{ enum }}.",
    errorExclusiveMaximum: "Must be less than {{ exclusiveMaximum }}.",
    errorExclusiveMinimum: "Must be greater than {{ exclusiveMinimum }}.",
    errorFormat: "Invalid format: {{ format }}.",
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
    errorUniqueItems: "Must have unique items.",
    arrayDelete: "Delete item",
    arrayMoveUp: "Move up",
    arrayMoveDown: "Move down",
    arrayDrag: "Drag",
    arrayAdd: "Add item",
    arrayConfirmDelete: "Are you sure you want to delete this item?",
    objectAddProperty: "Add property",
    objectPropertyAdded: "field was added to the form",
    objectPropertyRemoved: "field was removed from the form",
    propertiesToggle: "Properties",
    collapseToggle: "Collapse"
  },
  de: {
    errorAdditionalProperties: 'Hat die zusätzliche Eigenschaft "{{ property }}", aber keine zusätzlichen Eigenschaften sind erlaubt.',
    errorAnyOf: "Muss mindestens einem der bereitgestellten Schemata entsprechen.",
    errorConst: "Muss den Wert {{ const }} haben.",
    errorContains: "Muss mindestens ein Element enthalten, das dem bereitgestellten Schema entspricht.",
    errorDependentRequired: "Muss die erforderlichen Eigenschaften haben: {{ dependentRequired }}.",
    errorEnum: "Muss einer der aufgeführten Werte sein: {{ enum }}.",
    errorExclusiveMaximum: "Muss kleiner als {{ exclusiveMaximum }} sein.",
    errorExclusiveMinimum: "Muss größer als {{ exclusiveMinimum }} sein.",
    errorFormat: "Ungültiges Format: {{ format }}.",
    errorItems: "Muss Elemente enthalten, die dem bereitgestellten Schema entsprechen.",
    errorMaximum: "Darf höchstens {{ maximum }} sein.",
    errorMaxItems: "Darf höchstens {{ maxItems }} Elemente enthalten.",
    errorMaxLength: "Darf höchstens {{ maxLength }} Zeichen lang sein.",
    errorMaxProperties: "Darf höchstens {{ maxProperties }} Eigenschaften haben.",
    errorMaxContains: "Darf höchstens {{ maxContains }} Elemente enthalten, die dem bereitgestellten Schema entsprechen. Aktuell enthält es {{ counter }}.",
    errorMinContains: "Muss mindestens {{ minContains }} Elemente enthalten, die dem bereitgestellten Schema entsprechen. Aktuell enthält es {{ counter }}.",
    errorMinimum: "Muss mindestens {{ minimum }} sein.",
    errorMinItems: "Muss mindestens {{ minItems }} Elemente enthalten.",
    errorMinLength: "Muss mindestens {{ minLength }} Zeichen lang sein.",
    errorMinProperties: "Muss mindestens {{ minProperties }} Eigenschaften haben.",
    errorMultipleOf: "Muss ein Vielfaches von {{ multipleOf }} sein.",
    errorNot: "Darf nicht dem bereitgestellten Schema entsprechen.",
    errorOneOf: "Muss genau einem der bereitgestellten Schemata entsprechen. Derzeit entspricht es {{ counter }} der Schemata.",
    errorPattern: 'Muss dem Muster "{{ pattern }}" entsprechen.',
    errorPrefixItems: "Element {{ index }} entspricht nicht der Validierung.",
    errorPropertyNames: 'Der Eigenschaftsname "{{ propertyName }}" entspricht nicht der Validierung.',
    errorProperties: "Die folgenden Eigenschaften entsprechen nicht ihren Schemata: {{ properties }}",
    errorRequired: "Muss die erforderlichen Eigenschaften haben: {{ required }}.",
    errorType: "Muss vom Typ {{ type }} sein.",
    errorUnevaluatedProperties: 'Hat eine ungültige nicht bewertete Eigenschaft "{{ property }}"',
    errorUniqueItems: "Muss eindeutige Elemente haben.",
    arrayDelete: "Element löschen",
    arrayMoveUp: "Nach oben verschieben",
    arrayMoveDown: "Nach unten verschieben",
    arrayDrag: "Ziehen",
    arrayAdd: "Element hinzufügen",
    arrayConfirmDelete: "Möchten Sie dieses Element wirklich löschen?",
    objectAddProperty: "Eigenschaft hinzufügen",
    objectPropertyAdded: "Feld wurde dem Formular hinzugefügt",
    objectPropertyRemoved: "Feld wurde aus dem Formular entfernt",
    propertiesToggle: "Eigenschaften",
    collapseToggle: "Einklappen"
  },
  it: {
    errorAdditionalProperties: 'Ha la proprietà aggiuntiva "{{ property }}" ma non sono consentite proprietà aggiuntive.',
    errorAnyOf: "Deve rispettare almeno uno degli schemi forniti.",
    errorConst: "Deve avere il valore: {{ const }}.",
    errorContains: "Deve contenere almeno un elemento che rispetti lo schema fornito.",
    errorDependentRequired: "Deve avere le proprietà richieste: {{ dependentRequired }}.",
    errorEnum: "Deve essere uno dei valori elencati: {{ enum }}.",
    errorExclusiveMaximum: "Deve essere inferiore a {{ exclusiveMaximum }}.",
    errorExclusiveMinimum: "Deve essere maggiore di {{ exclusiveMinimum }}.",
    errorFormat: "Formato non valido: {{ format }}.",
    errorItems: "Deve avere elementi che rispettano lo schema fornito.",
    errorMaximum: "Deve essere al massimo {{ maximum }}.",
    errorMaxItems: "Deve avere al massimo {{ maxItems }} elementi.",
    errorMaxLength: "Deve avere al massimo {{ maxLength }} caratteri.",
    errorMaxProperties: "Deve avere al massimo {{ maxProperties }} proprietà.",
    errorMaxContains: "Deve contenere al massimo {{ maxContains }} elementi che rispettano lo schema fornito. Attualmente ne contiene {{ counter }}.",
    errorMinContains: "Deve contenere almeno {{ minContains }} elementi che rispettano lo schema fornito. Attualmente ne contiene {{ counter }}.",
    errorMinimum: "Deve essere almeno {{ minimum }}.",
    errorMinItems: "Deve avere almeno {{ minItems }} elementi.",
    errorMinLength: "Deve avere almeno {{ minLength }} caratteri.",
    errorMinProperties: "Deve avere almeno {{ minProperties }} proprietà.",
    errorMultipleOf: "Deve essere un multiplo di {{ multipleOf }}.",
    errorNot: "Non deve rispettare lo schema fornito.",
    errorOneOf: "Deve rispettare esattamente uno degli schemi forniti. Attualmente rispetta {{ counter }} degli schemi.",
    errorPattern: 'Deve rispettare il modello: "{{ pattern }}".',
    errorPrefixItems: "L'elemento {{ index }} non è valido.",
    errorPropertyNames: 'Il nome della proprietà "{{ propertyName }}" non è valido.',
    errorProperties: "Le seguenti proprietà non rispettano i loro schemi: {{ properties }}",
    errorRequired: "Deve avere le proprietà richieste: {{ required }}.",
    errorType: "Deve essere di tipo {{ type }}.",
    errorUnevaluatedProperties: 'Ha una proprietà non valutata non valida "{{ property }}"',
    errorUniqueItems: "Deve avere elementi univoci.",
    arrayDelete: "Elimina elemento",
    arrayMoveUp: "Sposta su",
    arrayMoveDown: "Sposta giù",
    arrayDrag: "Trascina",
    arrayAdd: "Aggiungi elemento",
    arrayConfirmDelete: "Sei sicuro di voler eliminare questo elemento?",
    objectAddProperty: "Aggiungi proprietà",
    objectPropertyAdded: "Campo aggiunto al modulo",
    objectPropertyRemoved: "Campo rimosso dal modulo",
    propertiesToggle: "Proprietà",
    collapseToggle: "Comprimi"
  },
  es: {
    errorAdditionalProperties: 'Tiene la propiedad adicional "{{ property }}" pero no se permiten propiedades adicionales.',
    errorAnyOf: "Debe cumplir con al menos uno de los esquemas proporcionados.",
    errorConst: "Debe tener el valor: {{ const }}.",
    errorContains: "Debe contener al menos un elemento que cumpla con el esquema proporcionado.",
    errorDependentRequired: "Debe tener las propiedades requeridas: {{ dependentRequired }}.",
    errorEnum: "Debe ser uno de los valores enumerados: {{ enum }}.",
    errorExclusiveMaximum: "Debe ser menor que {{ exclusiveMaximum }}.",
    errorExclusiveMinimum: "Debe ser mayor que {{ exclusiveMinimum }}.",
    errorFormat: "Formato no válido: {{ format }}.",
    errorItems: "Debe tener elementos que cumplan con el esquema proporcionado.",
    errorMaximum: "Debe ser como máximo {{ maximum }}.",
    errorMaxItems: "Debe tener como máximo {{ maxItems }} elementos.",
    errorMaxLength: "Debe tener como máximo {{ maxLength }} caracteres.",
    errorMaxProperties: "Debe tener como máximo {{ maxProperties }} propiedades.",
    errorMaxContains: "Debe contener como máximo {{ maxContains }} elementos que cumplan con el esquema proporcionado. Actualmente contiene {{ counter }}.",
    errorMinContains: "Debe contener al menos {{ minContains }} elementos que cumplan con el esquema proporcionado. Actualmente contiene {{ counter }}.",
    errorMinimum: "Debe ser al menos {{ minimum }}.",
    errorMinItems: "Debe tener al menos {{ minItems }} elementos.",
    errorMinLength: "Debe tener al menos {{ minLength }} caracteres.",
    errorMinProperties: "Debe tener al menos {{ minProperties }} propiedades.",
    errorMultipleOf: "Debe ser múltiplo de {{ multipleOf }}.",
    errorNot: "No debe cumplir con el esquema proporcionado.",
    errorOneOf: "Debe cumplir con exactamente uno de los esquemas proporcionados. Actualmente cumple con {{ counter }} de los esquemas.",
    errorPattern: 'Debe coincidir con el patrón: "{{ pattern }}".',
    errorPrefixItems: "El elemento {{ index }} no es válido.",
    errorPropertyNames: 'El nombre de la propiedad "{{ propertyName }}" no es válido.',
    errorProperties: "Las siguientes propiedades no cumplen con sus esquemas: {{ properties }}",
    errorRequired: "Debe tener las propiedades requeridas: {{ required }}.",
    errorType: "Debe ser del tipo {{ type }}.",
    errorUnevaluatedProperties: 'Tiene una propiedad no evaluada no válida "{{ property }}"',
    errorUniqueItems: "Debe tener elementos únicos.",
    arrayDelete: "Eliminar elemento",
    arrayMoveUp: "Mover hacia arriba",
    arrayMoveDown: "Mover hacia abajo",
    arrayDrag: "Arrastrar",
    arrayAdd: "Agregar elemento",
    arrayConfirmDelete: "¿Estás seguro de que deseas eliminar este elemento?",
    objectAddProperty: "Agregar propiedad",
    objectPropertyAdded: "campo fue añadido al formulario",
    objectPropertyRemoved: "campo fue eliminado del formulario",
    propertiesToggle: "Propiedades",
    collapseToggle: "Colapsar"
  }
};
class Translator {
  constructor(config) {
    this.language = config.language || "en";
    this.translations = mergeDeep({}, translations, config.translations);
    this.defaultTranslations = defaultTranslations;
  }
  translate(message) {
    let translation = this.translations[this.language][message];
    if (notSet(translation)) {
      translation = this.defaultTranslations[message];
    }
    return translation;
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
class JsonWalker {
  constructor(maxDepth = 200) {
    this.maxDepth = maxDepth;
  }
  traverse(data, callback, node = data, path = "#", depth = 0, parent = null, key = null, customData = {}) {
    if (!node || typeof node !== "object" || depth > this.maxDepth) {
      return;
    }
    const newNode = callback(node, path, parent, key, depth, customData);
    if (newNode !== void 0) {
      if (parent && key !== null) {
        parent[key] = newNode;
      } else if (path === "#") {
        Object.keys(data).forEach((k) => delete data[k]);
        Object.assign(data, newNode);
      }
      node = newNode;
    }
    if (typeof node === "object" && node !== null) {
      Object.entries(node).forEach(
        ([k, v]) => this.traverse(data, callback, v, `${path}/${k}`, depth + 1, node, k, customData)
      );
    }
  }
}
class Jedison extends EventEmitter {
  /**
   * Creates a Jedison instance.
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
      btnContents: true,
      btnIcons: true,
      arrayDelete: true,
      arrayMove: true,
      arrayAdd: true,
      startCollapsed: false,
      deactivateNonRequired: false,
      schema: {},
      showErrors: "change",
      switcherInput: "select",
      data: void 0,
      assertFormat: false,
      customEditors: [],
      constraints: [],
      hiddenInputAttributes: {},
      id: "",
      radiosInline: false,
      language: "en",
      translations: {},
      settings: {},
      useConstraintAttributes: true,
      parseMarkdown: false,
      purifyHtml: true,
      domPurifyOptions: {},
      mergeAllOf: false,
      enforceConst: false,
      enforceRequired: true,
      enforceEnumDefault: true,
      // todo: deprecated
      enforceAdditionalProperties: true,
      enforceMinItems: true,
      enforceEnum: true,
      debug: false
    }, options);
    this.rootName = "#";
    this.pathSeparator = "/";
    this.instances = {};
    this.root = null;
    this.translator = new Translator({
      language: this.options.language,
      translations: this.options.translations
    });
    this.validator = null;
    this.schema = {};
    this.watched = {};
    this.theme = null;
    this.uiResolver = null;
    this.refParser = this.options.refParser ? this.options.refParser : null;
    this.walker = new JsonWalker();
    this.lastFocusedId = null;
    this.isEditor = false;
    this.debug = false;
    this.init();
    this.bindEventListeners();
    this.updateInstancesWatchedData();
  }
  /**
   * Initializes instance properties
   */
  init() {
    if (this.options.container) {
      this.isEditor = true;
    }
    this.uiResolver = new UiResolver({
      customEditors: this.options.customEditors,
      refParser: this.refParser
    });
    this.theme = this.options.theme;
    if (this.theme) {
      this.theme.btnContents = this.options.btnContents;
      this.theme.btnIcons = this.options.btnIcons;
    }
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
    this.validator = new Validator({
      refParser: this.refParser,
      assertFormat: this.options.assertFormat,
      translator: this.translator,
      constraints: this.options.constraints
    });
    this.root = this.createInstance({
      jedison: this,
      schema: this.options.schema,
      path: this.rootName
    });
    if (isSet(this.options.data)) {
      this.root.setValue(this.options.data, false);
    }
    if (this.options.container) {
      this.isEditor = true;
      this.container = this.options.container;
      this.appendHiddenInput();
      this.container.appendChild(this.root.ui.control.container);
      this.container.classList.add("jedi-ready");
    }
  }
  bindEventListeners() {
    if (this.root) {
      this.root.on("change", (initiator) => {
        this.emit("change", initiator);
      });
    }
    this.on("instance-change", (instance) => {
      for (const [path, callbacks] of Object.entries(this.watched)) {
        if (instance.path === path) {
          callbacks.forEach((callback) => {
            callback();
          });
        }
      }
    });
    if (this.hiddenInput) {
      this.on("change", (initiator) => {
        this.hiddenInput.value = JSON.stringify(this.getValue());
        if (initiator === "user") {
          setTimeout(() => {
            this.refreshFocus();
          }, 0);
        }
      });
      document.addEventListener("focus", (event) => {
        this.lastKeyEvent = null;
        this.lastFocusedId = event.target.id;
      }, true);
      document.addEventListener("keydown", (event) => {
        this.lastKeyEvent = event;
      });
    }
  }
  updateInstancesWatchedData() {
    Object.values(this.watched).forEach((callbacks) => {
      callbacks.forEach((callback) => {
        callback();
      });
    });
  }
  /**
   * Reapplies focus to the element that was removed and re-appended to the DOM
   * @type String
   */
  refreshFocus() {
    if (!this.lastFocusedId) {
      return;
    }
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
    const hiddenControl = this.theme.getInputControl({
      type: "hidden",
      id: "jedi-hidden-input"
    });
    this.hiddenInput = hiddenControl.input;
    this.hiddenInput.setAttribute("name", "json");
    this.hiddenInput.removeAttribute("aria-describedby");
    this.hiddenInput.removeAttribute("aria-hidden", "true");
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
  logIfEditor(...params) {
    if (this.isEditor) {
      console.log(...params);
    }
  }
  warnIfEditor(...params) {
    if (this.isEditor) {
      console.warn(...params);
    }
  }
  /**
   * Creates a json instance and dereference schema on the fly if needed.
   */
  createInstance(config) {
    if (this.refParser) {
      config.schema = this.refParser.expand(config.schema);
      this.walker.traverse(config.schema, (node) => {
        if (node.allOf && Array.isArray(node.allOf)) {
          node.allOf.forEach((subschema, index2) => {
            node.allOf[index2] = this.refParser.expand(subschema);
          });
        }
        if (node.oneOf && Array.isArray(node.oneOf)) {
          node.oneOf.forEach((subschema, index2) => {
            node.oneOf[index2] = this.refParser.expand(subschema);
          });
        }
        if (node.oneOf && Array.isArray(node.oneOf)) {
          node.oneOf.forEach((subschema, index2) => {
            node.oneOf[index2] = this.refParser.expand(subschema);
          });
        }
      });
    }
    if (this.isEditor) {
      this.walker.traverse(config.schema, (node) => {
        if (node.allOf && Array.isArray(node.allOf)) {
          if (isSet(node["x-allOf-merged"])) {
            return;
          }
          const mergeAllOf = getSchemaXOption(node, "mergeAllOf") ?? this.options.mergeAllOf;
          const conditionals = [];
          let nodeFinal = clone(node);
          node.allOf.forEach((subschema) => {
            if (subschema.if && subschema.then) {
              conditionals.push({
                if: subschema.if,
                then: subschema.then,
                else: subschema.else || null
              });
            } else {
              nodeFinal = mergeAllOf ? combineDeep({}, nodeFinal, subschema) : nodeFinal;
            }
          });
          nodeFinal["x-allOf-merged"] = true;
          let sequentialIfThenElse = null;
          for (let i = conditionals.length - 1; i >= 0; i--) {
            if (sequentialIfThenElse === null) {
              sequentialIfThenElse = conditionals[i];
            } else {
              sequentialIfThenElse = {
                if: conditionals[i].if,
                then: conditionals[i].then,
                else: sequentialIfThenElse
              };
            }
          }
          if (sequentialIfThenElse) {
            Object.assign(nodeFinal, sequentialIfThenElse);
          }
          return nodeFinal;
        }
      });
      this.walker.traverse(config.schema, (node) => {
        if (node.oneOf && Array.isArray(node.oneOf)) {
          const nodeClone = clone(node);
          delete nodeClone.oneOf;
          node.oneOf = node.oneOf.map((subschema) => {
            return combineDeep({}, nodeClone, subschema);
          });
          return {
            oneOf: node.oneOf
          };
        }
      });
      this.walker.traverse(config.schema, (node) => {
        if (node.anyOf && Array.isArray(node.anyOf)) {
          const nodeClone = clone(node);
          delete nodeClone.anyOf;
          node.anyOf = node.anyOf.map((subschema) => {
            return combineDeep({}, nodeClone, subschema);
          });
          return {
            anyOf: node.anyOf
          };
        }
      });
      this.walker.traverse(config.schema, (node) => {
        if (node.not && isObject(node.not)) {
          const nodeClone = clone(node);
          delete nodeClone.not;
          node.not = combineDeep({}, nodeClone, node.not);
        }
      });
    }
    const schemaOneOf = getSchemaOneOf(config.schema);
    const schemaAnyOf = getSchemaAnyOf(config.schema);
    const schemaIf = getSchemaIf(config.schema);
    const schemaType = getSchemaType(config.schema);
    if (this.debug && notSet(schemaType) && !isSet(schemaOneOf) && !isSet(schemaAnyOf) && !isSet(schemaIf)) {
      console.warn("TYPE NOT SET", config.schema, config.path);
    }
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
    this.updateInstancesWatchedData();
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
   * Get an array of validation errors
   * @param {string[]} filters - Types to include, e.g., ['errors', 'warnings']
   * @returns {*[]}
   */
  getErrors(filters = ["error"]) {
    let results = [];
    Object.keys(this.instances).forEach((key) => {
      const instance = this.instances[key];
      results = [...results, ...instance.getErrors()];
    });
    return results.filter((error) => {
      return filters.includes(error.type.toLowerCase());
    });
  }
  export() {
    const results = [];
    Object.keys(this.instances).forEach((key) => {
      const instance = this.instances[key];
      results.push({
        path: instance.path ?? "-",
        type: instance.schema.type ?? "-",
        title: instance.ui.getTitle() ?? "-",
        value: instance.getValue() ?? "-"
      });
    });
    return results;
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
    const errors = errorsList ?? this.getErrors();
    Object.keys(this.instances).forEach((key) => {
      const instance = this.instances[key];
      instance.ui.showValidationErrors(errors, true);
    });
  }
  watch(path, callback) {
    if (!this.watched[path]) {
      this.watched[path] = [];
    }
    this.watched[path].push(callback);
  }
  unwatch(path, callback) {
    if (!this.watched[path]) {
      return;
    }
    this.watched[path] = this.watched[path].filter((cb) => cb !== callback);
    if (this.watched[path].length === 0) {
      delete this.watched[path];
    }
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
    this.cycles = [];
    this.walker = new JsonWalker();
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
    this.cycles = this.findRecursiveRefs(this.refs);
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
  findRecursiveRefs(defs) {
    const cycles = /* @__PURE__ */ new Set();
    function checkRef(path, visited, stack) {
      if (visited.has(path)) {
        const cycleStartIndex = stack.indexOf(path);
        if (cycleStartIndex !== -1) {
          const cyclePath = stack.slice(cycleStartIndex).concat(path);
          const minIndex = cyclePath.reduce((minIdx, ref, idx) => ref < cyclePath[minIdx] ? idx : minIdx, 0);
          const normalizedCycle = [...cyclePath.slice(minIndex), ...cyclePath.slice(0, minIndex)];
          const cycleSignature = normalizedCycle.join(" → ");
          cycles.add(cycleSignature);
        }
        return;
      }
      if (!defs[path]) return;
      visited.add(path);
      stack.push(path);
      function traverse(value) {
        if (typeof value === "object" && value !== null) {
          if (value.$ref) checkRef(value.$ref, visited, stack);
          for (const key in value) traverse(value[key]);
        }
      }
      traverse(defs[path]);
      visited.delete(path);
      stack.pop();
    }
    for (const key in defs) {
      checkRef(key, /* @__PURE__ */ new Set(), []);
    }
    return [...cycles];
  }
  hasRefCycles() {
    return this.cycles.length > 0;
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
  expandRecursive(schema) {
    let mustContinue = true;
    while (mustContinue) {
      mustContinue = false;
      this.walker.traverse(schema, (node, path, parent, key) => {
        if (node.$ref && typeof node.$ref === "string" && parent && key !== null) {
          parent[key] = this.expand(node);
          mustContinue = true;
        }
      });
    }
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
    this.btnContents = true;
    this.btnIcons = true;
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
    html.setAttribute("role", "group");
    return html;
  }
  /**
   * Represents a caption for the content of its parent fieldset
   */
  getLegend(config) {
    const left = document.createElement("div");
    const right = document.createElement("div");
    const legend = document.createElement("legend");
    const legendText = document.createElement("label");
    const infoContainer = document.createElement("span");
    const dummyInput = document.createElement("input");
    const legendLabelId = "legend-label-" + config.id;
    const dummyInputId = "legend-dummy-input-" + config.id;
    left.classList.add("jedi-editor-legend-left");
    right.classList.add("jedi-editor-legend-right");
    legend.classList.add("jedi-editor-legend");
    legend.style.fontSize = "inherit";
    legend.setAttribute("aria-labelledby", legendLabelId);
    legendText.classList.add("jedi-title");
    legendText.classList.add("jedi-legend");
    legendText.setAttribute("id", legendLabelId);
    legendText.innerHTML = config.content;
    infoContainer.classList.add("jedi-editor-info-container");
    infoContainer.setAttribute("for", dummyInputId);
    dummyInput.setAttribute("aria-hidden", "true");
    dummyInput.setAttribute("type", "hidden");
    dummyInput.setAttribute("id", dummyInputId);
    this.visuallyHidden(dummyInput);
    if (config.titleHidden) {
      this.visuallyHidden(legendText);
    }
    legend.appendChild(left);
    legend.appendChild(right);
    left.appendChild(legendText);
    left.appendChild(infoContainer);
    legendText.appendChild(dummyInput);
    return { left, right, legend, legendText, infoContainer };
  }
  /**
   * Used to group several controls
   */
  getRadioFieldset() {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("jedi-editor-radio-fieldset");
    fieldset.setAttribute("role", "group");
    fieldset.style.marginBottom = "15px";
    fieldset.style.fontSize = "inherit";
    return fieldset;
  }
  /**
   * Represents a caption for the content of its parent fieldset
   */
  getRadioLegend(config) {
    const legendLabelId = "legend-label-" + config.id;
    const legend = document.createElement("legend");
    const legendText = document.createElement("label");
    const dummyInput = document.createElement("input");
    legend.classList.add("jedi-editor-legend");
    legend.style.fontSize = "inherit";
    legend.setAttribute("aria-labelledby", legendLabelId);
    legendText.classList.add("jedi-title");
    legendText.classList.add("jedi-label");
    legendText.innerHTML = config.content;
    legendText.setAttribute("id", legendLabelId);
    dummyInput.setAttribute("aria-hidden", "true");
    dummyInput.setAttribute("type", "hidden");
    dummyInput.setAttribute("disabled", "");
    this.visuallyHidden(dummyInput);
    legend.appendChild(legendText);
    legendText.appendChild(dummyInput);
    return { legend, legendText };
  }
  /**
   * Represents a caption for the content of its parent fieldset
   */
  getLabel(config) {
    const label = document.createElement("label");
    const labelText = document.createElement("span");
    const icon = document.createElement("i");
    label.setAttribute("for", config.for);
    label.classList.add("jedi-title");
    label.classList.add("jedi-label");
    labelText.innerHTML = config.text;
    if (config.visuallyHidden) {
      this.visuallyHidden(label);
    }
    if (config.titleIconClass) {
      this.addIconClass(icon, config.titleIconClass);
    }
    if (config.titleIconClass) {
      label.appendChild(icon);
    }
    label.appendChild(labelText);
    return { label, labelText, icon };
  }
  getFakeLabel(config) {
    const label = document.createElement("label");
    const labelText = document.createElement("span");
    const icon = document.createElement("i");
    const dummyInput = document.createElement("input");
    label.setAttribute("for", config.for);
    label.classList.add("jedi-title");
    label.classList.add("jedi-label");
    if (config.visuallyHidden) {
      this.visuallyHidden(label);
    }
    labelText.innerHTML = config.content;
    if (config.titleIconClass) {
      this.addIconClass(icon, config.titleIconClass);
    }
    dummyInput.setAttribute("aria-hidden", "true");
    dummyInput.setAttribute("type", "hidden");
    dummyInput.setAttribute("disabled", "");
    dummyInput.setAttribute("id", config.for);
    this.visuallyHidden(dummyInput);
    label.appendChild(icon);
    label.appendChild(labelText);
    label.appendChild(dummyInput);
    return { label, labelText, icon, dummyInput };
  }
  /**
   * Returns a icon element
   */
  addIconClass(element, classes = "") {
    let iconClasses = classes.split(" ");
    iconClasses = iconClasses.filter((className) => className.length > 0);
    if (iconClasses) {
      iconClasses.forEach((className) => {
        element.classList.add(className);
      });
    }
  }
  getOptInWrapper() {
    const optInWrapper = document.createElement("span");
    const optInContainer = document.createElement("span");
    const otherContainer = document.createElement("span");
    optInWrapper.classList.add("jedi-opt-in-wrapper");
    optInWrapper.style.display = "flex";
    optInWrapper.style.alignItems = "center";
    optInContainer.classList.add("jedi-opt-in-container");
    otherContainer.classList.add("jedi-title-container");
    otherContainer.style.flexGrow = "1";
    optInWrapper.appendChild(otherContainer);
    optInWrapper.appendChild(optInContainer);
    return { optInWrapper, optInContainer, otherContainer };
  }
  /**
   * Container for complex editors like arrays and objects
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
    toggle.setAttribute("always-enabled", "");
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
    if (collapsed) {
      toggle.setAttribute("aria-expanded", "false");
    } else {
      toggle.setAttribute("aria-expanded", "true");
    }
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
  getButton(config = {}) {
    const button = document.createElement("button");
    const text = document.createElement("span");
    const icon = document.createElement("i");
    button.classList.add("jedi-btn");
    button.setAttribute("type", "button");
    if (config.value) {
      button.value = config.value;
    }
    if (config.id) {
      button.setAttribute("id", config.id);
    }
    text.textContent = " " + config.content;
    if (this.btnIcons && this.icons && config.icon) {
      this.addIconClass(icon, this.icons[config.icon]);
      icon.setAttribute("title", config.content);
    }
    if (!this.btnContents) {
      this.visuallyHidden(text);
    }
    if (this.icons && config.icon) {
      button.appendChild(icon);
    }
    button.appendChild(text);
    return button;
  }
  getAddPropertyButton(config) {
    const html = this.getButton(config);
    html.classList.add("jedi-add-property-btn");
    return html;
  }
  /**
   * Array "add" item button
   */
  getArrayBtnAdd(config) {
    const html = this.getButton({
      content: config.content,
      icon: "add"
    });
    html.classList.add("jedi-array-add");
    return html;
  }
  /**
   * Array "delete" item button
   */
  getDeleteItemBtn(config) {
    const deleteItemBtn = this.getButton({
      content: config.content,
      icon: "delete"
    });
    deleteItemBtn.classList.add("jedi-array-delete");
    return deleteItemBtn;
  }
  /**
   * Array "move up" item button
   */
  getMoveUpItemBtn(config) {
    const moveUpItemBtn = this.getButton({
      content: config.content,
      icon: "moveUp"
    });
    moveUpItemBtn.classList.add("jedi-array-move-up");
    return moveUpItemBtn;
  }
  /**
   * Array "move down" item button
   */
  getMoveDownItemBtn(config) {
    const moveDownItemBtn = this.getButton({
      content: config.content,
      icon: "moveDown"
    });
    moveDownItemBtn.classList.add("jedi-array-move-down");
    return moveDownItemBtn;
  }
  getDragItemBtn(config) {
    const dragItemBtn = this.getButton({
      content: config.content,
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
      description.innerHTML = config.content;
    }
    if (config.id) {
      description.setAttribute("id", config.id);
    }
    return description;
  }
  /**
   * Info button to display extra information
   */
  getInfo(config = {}) {
    const container = document.createElement("span");
    const info = document.createElement("a");
    const infoText = document.createElement("span");
    const icon = document.createElement("i");
    container.classList.add("jedi-info-button-container");
    container.style.display = "inline-block";
    info.setAttribute("href", "#");
    info.classList.add("jedi-info-button");
    info.style.marginLeft = "4px";
    if (isObject(config.attributes)) {
      for (const [key, value] of Object.entries(config.attributes)) {
        info.setAttribute(key, value);
      }
    }
    infoText.textContent = "Info";
    if (!this.btnContents && this.btnIcons) {
      this.visuallyHidden(infoText);
    }
    icon.setAttribute("title", "More information");
    if (this.icons) {
      this.addIconClass(icon, this.icons["info"]);
    }
    info.appendChild(icon);
    info.appendChild(infoText);
    container.appendChild(info);
    return { container, info };
  }
  /**
   * Dialog or modal that contains extra information about the control
   */
  infoAsModal(info, id, config = {}) {
    const dialog = document.createElement("dialog");
    const title = document.createElement("div");
    const content = document.createElement("div");
    const closeBtn = this.getButton({
      content: "Close",
      icon: "close"
    });
    dialog.classList.add("jedi-modal-dialog");
    title.classList.add("jedi-modal-title");
    if (isString(config.title)) {
      title.innerHTML = config.title;
    }
    content.classList.add("jedi-modal-content");
    if (isString(config.content)) {
      content.innerHTML = config.content;
    }
    closeBtn.classList.add("jedi-modal-close");
    closeBtn.setAttribute("always-enabled", "");
    window.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
    closeBtn.addEventListener("click", () => {
      dialog.close();
    });
    info.info.addEventListener("click", () => {
      dialog.showModal();
    });
    info.container.appendChild(dialog);
    dialog.appendChild(title);
    dialog.appendChild(content);
    dialog.appendChild(closeBtn);
  }
  getPlaceholderControl(config) {
    var _a;
    const descriptionId = config.id + "-description";
    const messagesId = config.id + "-messages";
    const container = document.createElement("div");
    const placeholder = document.createElement("div");
    const actions = this.getActionsSlot();
    const info = this.getInfo(config.info);
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.title,
      visuallyHidden: config.titleHidden,
      titleIconClass: config.titleIconClass
    });
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    if (((_a = config == null ? void 0 : config.info) == null ? void 0 : _a.variant) === "modal") {
      this.infoAsModal(info, config.id, config.info);
    }
    container.appendChild(label);
    if (isObject(config.info)) {
      label.appendChild(info.container);
    }
    container.appendChild(placeholder);
    container.appendChild(description);
    container.appendChild(messages);
    container.appendChild(actions);
    return { container, placeholder, label, labelText, description, messages, actions };
  }
  /**
   * Object control is a card containing multiple editors.
   * Each editor is mapped to an object instance property.
   * Properties can be added, activated and deactivated depending on configuration
   */
  getObjectControl(config) {
    var _a;
    const collapseId = "collapse-" + config.id;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const body = this.getCardBody();
    const ariaLive = this.getPropertiesAriaLive();
    const messages = this.getMessagesSlot();
    const childrenSlot = this.getChildrenSlot();
    const propertiesActivators = this.getPropertiesActivators();
    const info = this.getInfo(config.info);
    const description = this.getDescription({
      content: config.description
    });
    const propertiesContainer = this.getPropertiesSlot({
      id: "properties-slot-" + config.id
    });
    const propertiesToggle = this.getPropertiesToggle({
      content: config.propertiesToggleContent,
      id: "properties-slot-toggle-" + config.id,
      icon: "properties",
      propertiesContainer
    });
    const collapse = this.getCollapse({
      id: collapseId,
      startCollapsed: config.startCollapsed
    });
    const collapseToggle = this.getCollapseToggle({
      content: config.collapseToggleContent,
      id: "collapse-toggle-" + config.id,
      icon: "collapse",
      collapseId,
      collapse,
      startCollapsed: config.startCollapsed
    });
    const addPropertyControl = this.getInputControl({
      type: "text",
      id: "jedi-add-property-input-" + config.id,
      title: config.addPropertyContent
    });
    const addPropertyBtn = this.getAddPropertyButton({
      content: config.addPropertyContent,
      icon: "add"
    });
    const fieldset = this.getFieldset();
    const { legend, infoContainer } = this.getLegend({
      content: config.title,
      id: config.id,
      titleHidden: config.titleHidden
    });
    if (((_a = config == null ? void 0 : config.info) == null ? void 0 : _a.variant) === "modal") {
      this.infoAsModal(info, config.id, config.info);
    }
    addPropertyBtn.classList.add("jedi-object-add");
    container.appendChild(fieldset);
    container.appendChild(propertiesContainer);
    fieldset.appendChild(legend);
    if (isObject(config.info)) {
      infoContainer.appendChild(info.container);
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
      description,
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
      legend,
      infoContainer
    };
  }
  /**
   * Array control is a card containing multiple editors.
   * Items can bve added, deleted or moved up or down.
   */
  getArrayControl(config) {
    var _a;
    const collapseId = "collapse-" + config.id;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const body = this.getCardBody();
    const messages = this.getMessagesSlot();
    const childrenSlot = this.getChildrenSlot();
    const btnGroup = this.getBtnGroup();
    const addBtn = this.getArrayBtnAdd({
      content: config.arrayAddContent
    });
    const fieldset = this.getFieldset();
    const info = this.getInfo(config.info);
    const { legend, legendText } = this.getLegend({
      content: config.title,
      id: config.id,
      titleHidden: config.titleHidden
    });
    const description = this.getDescription({
      content: config.description
    });
    const collapse = this.getCollapse({
      id: collapseId,
      startCollapsed: config.startCollapsed
    });
    const collapseToggle = this.getCollapseToggle({
      content: config.collapseToggleContent,
      id: "collapse-toggle-" + config.id,
      icon: "collapse",
      collapseId,
      collapse,
      startCollapsed: config.startCollapsed
    });
    if (((_a = config == null ? void 0 : config.info) == null ? void 0 : _a.variant) === "modal") {
      this.infoAsModal(info, config.id, config.info);
    }
    container.appendChild(fieldset);
    fieldset.appendChild(legend);
    if (isObject(config.info)) {
      legendText.appendChild(info.container);
    }
    fieldset.appendChild(collapse);
    collapse.appendChild(body);
    if (config.description) {
      body.appendChild(description);
    }
    body.appendChild(messages);
    legend.appendChild(actions);
    actions.appendChild(btnGroup);
    if (isSet(config.arrayAdd) && config.arrayAdd === true) {
      btnGroup.appendChild(addBtn);
    }
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
      legend,
      legendText
    };
  }
  getArrayItem(config = {}) {
    const container = document.createElement("div");
    const body = document.createElement("div");
    const actions = this.getActionsSlot();
    const arrayActions = this.getArrayActionsSlot();
    actions.style.textAlign = "right";
    container.classList.add("jedi-array-item");
    body.classList.add("jedi-array-item-body");
    if (isSet(config.index)) {
      container.setAttribute("jedi-array-item-index", config.index);
    }
    actions.appendChild(arrayActions);
    container.appendChild(actions);
    container.appendChild(body);
    return {
      container,
      actions,
      arrayActions,
      body
    };
  }
  /**
   * Multiple control is a card containing multiple editors options that can be
   * selected with a switcher control. Only one editor can be active/visible
   * at a time
   */
  getMultipleControl(config = {}) {
    const container = document.createElement("div");
    const header = document.createElement("div");
    const body = document.createElement("div");
    const messages = this.getMessagesSlot();
    const childrenSlot = this.getChildrenSlot();
    const randomId = generateRandomID(5);
    let switcher;
    if (config.switcher === "select") {
      switcher = this.getSwitcherSelect({
        values: config.switcherOptionValues,
        titles: config.switcherOptionsLabels,
        title: config.id + "-switcher",
        id: config.id + "-switcher-" + randomId,
        label: config.id + "-switcher-" + randomId,
        titleHidden: true,
        readOnly: config.readOnly
      });
    }
    if (config.switcher === "radios" || config.switcher === "radios-inline") {
      switcher = this.getSwitcherRadios({
        values: config.switcherOptionValues,
        titles: config.switcherOptionsLabels,
        title: config.id + "-switcher",
        id: config.id + "-switcher-" + randomId,
        label: config.id + "-switcher-" + randomId,
        titleHidden: true,
        readOnly: config.readOnly,
        inline: config.switcher === "radios-inline"
      });
    }
    switcher.container.classList.add("jedi-switcher");
    container.appendChild(header);
    container.appendChild(body);
    header.appendChild(switcher.container);
    body.appendChild(messages);
    body.appendChild(childrenSlot);
    return {
      container,
      header,
      body,
      messages,
      childrenSlot,
      switcher
    };
  }
  adaptForTableMultipleControl(control, td) {
  }
  getIfThenElseControl(config) {
    const container = document.createElement("div");
    const card = this.getCard();
    const actions = this.getActionsSlot();
    const body = this.getCardBody();
    const messages = this.getMessagesSlot();
    const childrenSlot = this.getChildrenSlot();
    const header = this.getCardHeader({
      content: config.title,
      titleHidden: config.titleHidden
    });
    const description = this.getDescription({
      content: config.description
    });
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
      childrenSlot
    };
  }
  /**
   * Control for NullEditor
   */
  getNullControl(config) {
    var _a;
    const descriptionId = config.id + "-description";
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const messages = this.getMessagesSlot();
    const br = document.createElement("br");
    const info = this.getInfo(config.info);
    const { label, labelText } = this.getFakeLabel({
      for: config.id,
      content: config.title,
      visuallyHidden: config.titleHidden,
      titleIconClass: config.titleIconClass
    });
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    if (((_a = config == null ? void 0 : config.info) == null ? void 0 : _a.variant) === "modal") {
      this.infoAsModal(info, config.id, config.info);
    }
    container.appendChild(label);
    if (isObject(config.info)) {
      label.appendChild(info.container);
    }
    container.appendChild(br);
    container.appendChild(description);
    container.appendChild(messages);
    container.appendChild(actions);
    return { container, label, labelText, description, messages, actions };
  }
  /**
   * A Textarea
   */
  getTextareaControl(config) {
    var _a;
    const descriptionId = config.id + "-description";
    const messagesId = config.id + "-messages";
    const describedBy = messagesId + " " + descriptionId;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const input = document.createElement("textarea");
    const info = this.getInfo(config.info);
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.title,
      visuallyHidden: config.titleHidden
    });
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    input.setAttribute("aria-describedby", describedBy);
    input.setAttribute("id", config.id);
    input.setAttribute("name", config.id);
    input.style.width = "100%";
    if (((_a = config == null ? void 0 : config.info) == null ? void 0 : _a.variant) === "modal") {
      this.infoAsModal(info, config.id, config.info);
    }
    container.appendChild(label);
    if (isObject(config.info)) {
      label.appendChild(info.container);
    }
    container.appendChild(input);
    container.appendChild(description);
    container.appendChild(messages);
    container.appendChild(actions);
    return { container, input, label, labelText, description, messages, actions };
  }
  adaptForTableTextareaControl(control) {
    this.visuallyHidden(control.label);
    this.visuallyHidden(control.description);
    control.input.setAttribute("rows", "1");
  }
  /**
   * An Input control
   */
  getInputControl(config) {
    var _a;
    const messagesId = config.id + "-messages";
    const descriptionId = config.id + "-description";
    const describedBy = messagesId + " " + descriptionId;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const input = document.createElement("input");
    const info = this.getInfo(config.info);
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.title,
      visuallyHidden: config.titleHidden,
      titleIconClass: config.titleIconClass
    });
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    input.setAttribute("aria-describedby", describedBy);
    input.setAttribute("type", config.type);
    input.setAttribute("id", config.id);
    input.setAttribute("name", config.id);
    input.style.width = "100%";
    container.appendChild(label);
    if (((_a = config == null ? void 0 : config.info) == null ? void 0 : _a.variant) === "modal") {
      this.infoAsModal(info, config.id, config.info);
    }
    if (isObject(config.info)) {
      label.appendChild(info.container);
    }
    container.appendChild(input);
    container.appendChild(description);
    container.appendChild(messages);
    container.appendChild(actions);
    return { container, input, label, info, labelText, description, messages, actions };
  }
  adaptForTableInputControl(control) {
    this.visuallyHidden(control.label);
    this.visuallyHidden(control.description);
  }
  /**
   * A radio group control
   */
  getRadiosControl(config) {
    var _a;
    const messagesId = config.id + "-messages";
    const descriptionId = config.id + "-description";
    const container = document.createElement("div");
    const fieldset = this.getRadioFieldset();
    const info = this.getInfo(config.info);
    const { legend, legendText } = this.getRadioLegend({
      content: config.title,
      id: config.id,
      for: config.id
    });
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    if (((_a = config == null ? void 0 : config.info) == null ? void 0 : _a.variant) === "modal") {
      this.infoAsModal(info, config.id, config.info);
    }
    if (config.titleHidden) {
      this.visuallyHidden(legend);
    }
    const radioControls = [];
    const radios = [];
    const labels = [];
    const labelTexts = [];
    config.values.forEach((value, index2) => {
      const describedBy = messagesId + " " + descriptionId;
      const radioControl = document.createElement("div");
      const radio = document.createElement("input");
      const label = document.createElement("label");
      const labelText = document.createElement("span");
      radio.setAttribute("type", "radio");
      radio.setAttribute("id", config.id + "-" + index2);
      radio.setAttribute("name", config.id);
      radio.setAttribute("value", value);
      radio.setAttribute("aria-describedby", describedBy);
      label.setAttribute("for", config.id + "-" + index2);
      label.classList.add("jedi-title");
      label.classList.add("jedi-label");
      labelTexts.push(labelText);
      if (isSet(config.titles) && isSet(config.titles[index2])) {
        labelText.textContent = config.titles[index2] ?? value;
      }
      radioControls.push(radioControl);
      radios.push(radio);
      labels.push(label);
    });
    container.appendChild(fieldset);
    fieldset.appendChild(legend);
    if (isObject(config.info)) {
      legendText.appendChild(info.container);
    }
    radioControls.forEach((radioControl, index2) => {
      fieldset.appendChild(radioControls[index2]);
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
      legendText,
      info,
      radios,
      labels,
      labelTexts,
      radioControls,
      description,
      messages
    };
  }
  adaptForTableRadiosControl(control) {
    this.visuallyHidden(control.legend);
    this.visuallyHidden(control.description);
  }
  /**
   * A checkbox control
   */
  getCheckboxControl(config) {
    var _a;
    const descriptionId = config.id + "-description";
    const messagesId = config.id + "-messages";
    const describedBy = messagesId + " " + descriptionId;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const formGroup = document.createElement("span");
    const input = document.createElement("input");
    const info = this.getInfo(config.info);
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.title,
      visuallyHidden: config.titleHidden
    });
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", config.id);
    input.setAttribute("name", config.id);
    input.setAttribute("aria-describedby", describedBy);
    if (((_a = config == null ? void 0 : config.info) == null ? void 0 : _a.variant) === "modal") {
      this.infoAsModal(info, config.id, config.info);
    }
    container.appendChild(formGroup);
    container.appendChild(actions);
    formGroup.appendChild(input);
    formGroup.appendChild(label);
    if (isObject(config.info)) {
      label.appendChild(info.container);
    }
    formGroup.appendChild(description);
    formGroup.appendChild(messages);
    return { container, formGroup, input, label, info, labelText, description, messages, actions };
  }
  adaptForTableCheckboxControl(control, td) {
    this.visuallyHidden(control.label);
    this.visuallyHidden(control.description);
  }
  getCheckboxesControl(config) {
    var _a;
    const messagesId = config.id + "-messages";
    const descriptionId = config.id + "-description";
    const container = document.createElement("div");
    const fieldset = this.getRadioFieldset();
    const info = this.getInfo(config.info);
    const { legend, legendText } = this.getRadioLegend({
      content: config.title,
      id: config.id,
      for: config.id
    });
    const messages = this.getMessagesSlot({
      id: messagesId
    });
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
      const describedBy = messagesId + " " + descriptionId;
      const checkboxId = config.id + "-" + index2;
      const checkboxControl = document.createElement("div");
      const checkbox = document.createElement("input");
      const label = document.createElement("label");
      const labelText = document.createElement("span");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", checkboxId);
      checkbox.setAttribute("name", config.id);
      checkbox.setAttribute("value", value);
      checkbox.setAttribute("aria-describedby", describedBy);
      label.setAttribute("for", checkboxId);
      if (config.titles && config.titles[index2]) {
        labelText.textContent = config.titles[index2];
      }
      checkboxControls.push(checkboxControl);
      checkboxes.push(checkbox);
      labelTexts.push(labelText);
      labels.push(label);
    });
    if (((_a = config == null ? void 0 : config.info) == null ? void 0 : _a.variant) === "modal") {
      this.infoAsModal(info, config.id, config.info);
    }
    container.appendChild(fieldset);
    fieldset.appendChild(legend);
    if (isObject(config.info)) {
      legendText.appendChild(info.container);
    }
    checkboxControls.forEach((checkboxControl, index2) => {
      fieldset.appendChild(checkboxControls[index2]);
      checkboxControl.appendChild(checkboxes[index2]);
      checkboxControl.appendChild(labels[index2]);
      labels[index2].appendChild(labelTexts[index2]);
    });
    fieldset.appendChild(description);
    fieldset.appendChild(messages);
    return {
      container,
      fieldset,
      legend,
      legendText,
      checkboxes,
      labels,
      labelTexts,
      checkboxControls,
      description,
      messages
    };
  }
  adaptForTableCheckboxesControl(control, td) {
    this.visuallyHidden(control.legend);
    this.visuallyHidden(control.description);
  }
  /**
   * A select control
   */
  getSelectControl(config) {
    var _a;
    const descriptionId = config.id + "-description";
    const messagesId = config.id + "-messages";
    const describedBy = messagesId + " " + descriptionId;
    const container = document.createElement("div");
    const actions = this.getActionsSlot();
    const input = document.createElement("select");
    const info = this.getInfo(config.info);
    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.title,
      visuallyHidden: config.titleHidden
    });
    const messages = this.getMessagesSlot({
      id: messagesId
    });
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    });
    input.setAttribute("id", config.id);
    input.setAttribute("name", config.id);
    input.setAttribute("aria-describedby", describedBy);
    config.values.forEach((value, index2) => {
      const option = document.createElement("option");
      option.setAttribute("value", value);
      if (config.titles && config.titles[index2]) {
        option.textContent = config.titles[index2];
      }
      input.appendChild(option);
    });
    if (((_a = config == null ? void 0 : config.info) == null ? void 0 : _a.variant) === "modal") {
      this.infoAsModal(info, config.id, config.info);
    }
    container.appendChild(label);
    if (isObject(config.info)) {
      label.appendChild(info.container);
    }
    container.appendChild(input);
    container.appendChild(description);
    container.appendChild(messages);
    container.appendChild(actions);
    return { container, input, label, info, labelText, description, messages, actions };
  }
  adaptForTableSelectControl(control) {
    this.visuallyHidden(control.label);
    this.visuallyHidden(control.description);
  }
  /**
   * Control to switch between multiple editors options
   */
  getSwitcherSelect(config) {
    return this.getSelectControl(config);
  }
  /**
   * Control to switch between multiple editors options
   */
  getSwitcherRadios(config) {
    return this.getRadiosControl(config);
  }
  /**
   * Another type of error message container used for more complex editors like
   * object, array and multiple editors
   */
  getAlert(config) {
    return this.getErrorFeedback(config);
  }
  /**
   * Error messages
   * @public
   */
  getErrorFeedback(config) {
    const html = document.createElement("div");
    const invalidFeedbackText = document.createElement("small");
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
   * Error messages
   * @public
   */
  getWarningFeedback(config) {
    const html = document.createElement("div");
    const invalidFeedbackText = document.createElement("small");
    const invalidFeedbackIcon = document.createElement("span");
    invalidFeedbackText.textContent = config.message;
    invalidFeedbackIcon.textContent = "⚠ ";
    invalidFeedbackIcon.classList.add("jedi-warning-message");
    invalidFeedbackIcon.setAttribute("aria-hidden", "true");
    html.classList.add("jedi-warning-message");
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
    col.classList.add("jedi-col");
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
    const arrayActions = document.createElement("span");
    const text = document.createElement("span");
    link.classList.add("jedi-nav-link");
    link.setAttribute("href", "#" + config.id);
    text.classList.add("jedi-nav-text");
    text.textContent = config.hasErrors ? "⚠ " + config.title : config.title;
    link.appendChild(arrayActions);
    link.appendChild(text);
    list.appendChild(link);
    return { list, link, arrayActions, text };
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
    th.style.textWrap = "nowrap";
    th.style.verticalAlign = "bottom";
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
    element.style.position = "absolute";
    element.style.width = "1px";
    element.style.height = "1px";
    element.style.padding = "0";
    element.style.margin = "-1px";
    element.style.overflow = "hidden";
    element.style.clip = "rect(0,0,0,0)";
    element.style.border = "0";
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
  getAddPropertyButton(config) {
    const btn = super.getAddPropertyButton(config);
    btn.classList.add("btn-primary");
    btn.classList.add("btn-block");
    return btn;
  }
  getCollapseToggle(config) {
    const toggle = super.getCollapseToggle(config);
    toggle.setAttribute("href", "#" + config.collapseId);
    toggle.setAttribute("data-toggle", "collapse");
    toggle.setAttribute("always-enabled", "");
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
    const fieldset = super.getFieldset();
    fieldset.classList.add("panel");
    fieldset.classList.add("panel-default");
    fieldset.style.marginBottom = "15px";
    return fieldset;
  }
  getLegend(config) {
    const superLegend = super.getLegend(config);
    const { legend } = superLegend;
    legend.classList.add("panel-heading");
    legend.classList.add("pull-left");
    legend.style.margin = "0";
    legend.style.display = "flex";
    legend.style.justifyContent = "space-between";
    legend.style.alignItems = "center";
    return superLegend;
  }
  getRadioLegend(config) {
    const superRadioLegend = super.getRadioLegend(config);
    const { legend } = superRadioLegend;
    legend.style.fontWeight = "inherit";
    legend.style.border = "none";
    legend.style.marginBottom = "0";
    return superRadioLegend;
  }
  getLabel(config) {
    const labelObj = super.getLabel(config);
    if (labelObj.icon.classList) {
      labelObj.icon.style.marginRight = "5px";
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
    html.style.paddingBottom = "0";
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
    description.style.marginBottom = "5px";
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
    const { fieldset, radios, labels, labelTexts, radioControls, description, messages } = control;
    radioControls.forEach((radioControl, index2) => {
      radioControl.classList.add("radio");
      if (config.inline) {
        radioControl.style.display = "inline-flex";
        radioControl.style.alignItems = "center";
        radioControl.style.paddingLeft = "0";
        radioControl.style.marginRight = "15px";
      }
      fieldset.appendChild(radioControls[index2]);
      radioControl.appendChild(labels[index2]);
      labels[index2].appendChild(radios[index2]);
      labels[index2].appendChild(labelTexts[index2]);
    });
    fieldset.appendChild(description);
    fieldset.appendChild(messages);
    return control;
  }
  adaptForTableRadiosControl(control, td) {
    super.adaptForTableRadiosControl(control, td);
    control.fieldset.classList.remove("panel");
    control.fieldset.classList.remove("panel-default");
    control.fieldset.style.marginBottom = "0";
  }
  getCheckboxesControl(config) {
    const control = super.getCheckboxesControl(config);
    const { fieldset, checkboxes, labels, labelTexts, checkboxControls } = control;
    checkboxControls.forEach((checkboxControl, index2) => {
      checkboxControl.classList.add("checkbox");
      if (config.inline) {
        checkboxControl.style.display = "inline-flex";
        checkboxControl.style.alignItems = "center";
        checkboxControl.style.paddingLeft = "0";
        checkboxControl.style.marginRight = "30px";
      }
      fieldset.appendChild(checkboxControls[index2]);
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
  getErrorFeedback(config) {
    const html = super.getErrorFeedback(config);
    html.classList.add("text-danger");
    return html;
  }
  getWarningFeedback(config) {
    const html = super.getWarningFeedback(config);
    html.classList.add("text-warning");
    return html;
  }
  getRow() {
    const row = super.getRow();
    row.classList.add("row");
    return row;
  }
  getCol(xs, md, offsetMd) {
    const col = super.getCol();
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
    if (config.variant === "horizontal") {
      tabList.classList.add("nav-tabs");
    } else {
      tabList.classList.add("nav-pills");
      tabList.classList.add("nav-stacked");
    }
    return tabList;
  }
  getTab(config) {
    const tab = super.getTab(config);
    tab.text.style.marginLeft = "15px";
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
  infoAsModal(info, id, config = {}) {
    const modal = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("div");
    const modalBody = document.createElement("div");
    const closeBtn = this.getButton({
      content: "Close",
      icon: "close"
    });
    const modalId = id + "-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("id", modalId);
    closeBtn.setAttribute("data-dismiss", "modal");
    closeBtn.setAttribute("always-enabled", "");
    info.info.setAttribute("data-toggle", "modal");
    info.info.setAttribute("data-target", "#" + modalId);
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
      modalTitle.innerHTML = config.title;
    }
    if (isString(config.content)) {
      modalBody.innerHTML = config.content;
    }
    info.container.appendChild(modal);
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
  getAddPropertyButton(config) {
    const btn = super.getAddPropertyButton(config);
    btn.classList.add("btn-primary");
    btn.classList.add("btn-block");
    return btn;
  }
  getCollapseToggle(config) {
    const toggle = super.getCollapseToggle(config);
    toggle.setAttribute("href", "#" + config.collapseId);
    toggle.setAttribute("data-toggle", "collapse");
    toggle.setAttribute("always-enabled", "");
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
    fieldset.setAttribute("role", "group");
    fieldset.classList.add("card");
    fieldset.classList.add("mb-3");
    return fieldset;
  }
  getLegend(config) {
    const superLegend = super.getLegend(config);
    const { legend } = superLegend;
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
    description.classList.add("fs-sm");
    description.classList.add("mb-1");
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
    const { container, fieldset, radios, labels, labelTexts, radioControls, description, messages } = control;
    container.classList.add("form-group");
    radioControls.forEach((radioControl, index2) => {
      radioControl.classList.add("form-check");
      radios[index2].classList.add("form-check-input");
      labels[index2].classList.add("form-check-label");
      if (config.inline) {
        radioControl.classList.add("form-check-inline");
      }
      fieldset.appendChild(radioControls[index2]);
      radioControl.appendChild(radios[index2]);
      radioControl.appendChild(labels[index2]);
      labels[index2].appendChild(labelTexts[index2]);
    });
    fieldset.appendChild(description);
    fieldset.appendChild(messages);
    return control;
  }
  adaptForTableRadiosControl(control, td) {
    super.adaptForTableRadiosControl(control, td);
    control.container.classList.remove("form-group");
    control.fieldset.classList.remove("card");
    control.fieldset.style.marginBottom = "0";
  }
  getCheckboxesControl(config) {
    const control = super.getCheckboxesControl(config);
    const { checkboxes, labels, checkboxControls } = control;
    checkboxControls.forEach((checkboxControl, index2) => {
      checkboxControl.classList.add("form-group");
      checkboxControl.classList.add("form-check");
      checkboxes[index2].classList.add("form-check-input");
      labels[index2].classList.add("form-check-label");
      if (config.inline) {
        checkboxControl.classList.add("form-check-inline");
      }
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
    const { container, formGroup, input, label, info, description, messages } = control;
    container.classList.add("form-group");
    formGroup.classList.add("form-check");
    input.classList.add("form-check-input");
    label.classList.add("form-check-label");
    container.appendChild(formGroup);
    formGroup.appendChild(input);
    formGroup.appendChild(label);
    if (isObject(config.info)) {
      label.appendChild(info.container);
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
    control.container.classList.remove("mb-3");
  }
  getAlert(config) {
    const html = super.getAlert(config);
    html.classList.add("alert");
    html.classList.add("alert-danger");
    return html;
  }
  getErrorFeedback(config) {
    const html = super.getErrorFeedback(config);
    html.classList.add("text-danger");
    html.classList.add("form-text");
    html.classList.add("d-block");
    return html;
  }
  getWarningFeedback(config) {
    const html = super.getWarningFeedback(config);
    html.classList.add("text-warning");
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
    const col = super.getCol(xs, md, offsetMd);
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
    if (config.variant === "horizontal") {
      tabList.classList.add("nav-tabs");
    } else {
      tabList.classList.add("nav-pills");
      tabList.classList.add("flex-column");
    }
    return tabList;
  }
  getTab(config) {
    const tab = super.getTab(config);
    tab.list.classList.add("nav-item");
    tab.list.classList.add("mb-3");
    tab.text.classList.add("ml-3");
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
    table.classList.add("table-borderless");
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
  infoAsModal(info, id, config = {}) {
    const modal = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("div");
    const modalBody = document.createElement("div");
    const closeBtn = this.getButton({
      content: "Close",
      icon: "close"
    });
    const modalId = id + "-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("id", modalId);
    closeBtn.setAttribute("data-dismiss", "modal");
    closeBtn.setAttribute("always-enabled", "");
    info.info.setAttribute("data-toggle", "modal");
    info.info.setAttribute("data-target", "#" + modalId);
    info.container.classList.add("ml-1");
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
      modalTitle.innerHTML = config.title;
    }
    if (isString(config.content)) {
      modalBody.innerHTML = config.content;
    }
    info.container.appendChild(modal);
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
  getAddPropertyButton(config) {
    const btn = super.getAddPropertyButton(config);
    btn.classList.add("btn-primary");
    btn.classList.add("w-100");
    return btn;
  }
  getCollapseToggle(config) {
    const toggle = super.getCollapseToggle(config);
    toggle.setAttribute("href", "#" + config.collapseId);
    toggle.setAttribute("data-bs-toggle", "collapse");
    toggle.setAttribute("always-enabled", "");
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
    fieldset.setAttribute("role", "group");
    fieldset.classList.add("card");
    fieldset.classList.add("mb-3");
    return fieldset;
  }
  getLegend(config) {
    const superLegend = super.getLegend(config);
    const { legend } = superLegend;
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
    description.classList.add("mb-1");
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
    const { container, fieldset, radios, labels, labelTexts, radioControls, description, messages } = control;
    container.classList.add("mb-3");
    radioControls.forEach((radioControl, index2) => {
      radioControl.classList.add("form-check");
      radios[index2].classList.add("form-check-input");
      labels[index2].classList.add("form-check-label");
      if (config.inline) {
        radioControl.classList.add("form-check-inline");
      }
      fieldset.appendChild(radioControls[index2]);
      radioControl.appendChild(radios[index2]);
      radioControl.appendChild(labels[index2]);
      labels[index2].appendChild(labelTexts[index2]);
    });
    fieldset.appendChild(description);
    fieldset.appendChild(messages);
    return control;
  }
  adaptForTableRadiosControl(control, td) {
    super.adaptForTableRadiosControl(control, td);
    control.container.classList.remove("mb-3");
    control.fieldset.classList.remove("card");
    control.fieldset.style.marginBottom = "0";
  }
  getCheckboxesControl(config) {
    const control = super.getCheckboxesControl(config);
    const { checkboxes, labels, checkboxControls } = control;
    checkboxControls.forEach((checkboxControl, index2) => {
      checkboxControl.classList.add("mb-3");
      checkboxControl.classList.add("form-check");
      checkboxes[index2].classList.add("form-check-input");
      labels[index2].classList.add("form-check-label");
      if (config.inline) {
        checkboxControl.classList.add("form-check-inline");
      }
    });
    return control;
  }
  getCheckboxControl(config) {
    const control = super.getCheckboxControl(config);
    const { container, formGroup, input, label, info, description, messages } = control;
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
    if (isObject(config.info)) {
      label.appendChild(info.container);
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
    control.container.classList.remove("mb-3");
  }
  getAlert(config) {
    const html = super.getAlert(config);
    html.classList.add("alert");
    html.classList.add("alert-danger");
    return html;
  }
  getErrorFeedback(config) {
    const html = super.getErrorFeedback(config);
    html.classList.add("text-danger");
    html.classList.add("d-block");
    html.classList.add("form-text");
    return html;
  }
  getWarningFeedback(config) {
    const html = super.getWarningFeedback(config);
    html.classList.add("text-warning");
    html.classList.add("d-block");
    html.classList.add("form-text");
    return html;
  }
  getRow() {
    const row = super.getRow();
    row.classList.add("row");
    return row;
  }
  getCol(xs, md, offsetMd) {
    const col = super.getCol(xs, md, offsetMd);
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
    if (config.variant === "horizontal") {
      tabList.classList.add("nav-tabs");
    } else {
      tabList.classList.add("nav-pills");
      tabList.classList.add("flex-column");
    }
    return tabList;
  }
  getTab(config) {
    const tab = super.getTab(config);
    tab.list.classList.add("nav-item");
    tab.list.classList.add("mb-3");
    tab.text.classList.add("ms-3");
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
    table.classList.add("table-borderless");
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
  infoAsModal(info, id, config = {}) {
    const modal = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("div");
    const modalBody = document.createElement("div");
    const closeBtn = this.getButton({
      content: "Close",
      icon: "close"
    });
    const modalId = id + "-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("id", modalId);
    closeBtn.setAttribute("data-bs-dismiss", "modal");
    closeBtn.setAttribute("always-enabled", "");
    info.info.setAttribute("data-bs-toggle", "modal");
    info.info.setAttribute("data-bs-target", "#" + modalId);
    info.container.classList.add("ms-1");
    modal.classList.add("modal");
    modal.classList.add("fade");
    modalDialog.classList.add("modal-dialog");
    modalContent.classList.add("modal-content");
    modalHeader.classList.add("modal-header");
    modalTitle.classList.add("modal-title");
    modalBody.classList.add("modal-body");
    closeBtn.classList.add("jedi-modal-close");
    if (isString(config.title)) {
      modalTitle.innerHTML = config.title;
    }
    if (isString(config.content)) {
      modalBody.innerHTML = config.content;
    }
    info.container.appendChild(modal);
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
  EditorArrayChoices,
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
  Create: Jedison,
  SchemaGenerator
};
export {
  index as default
};
//# sourceMappingURL=jedison.js.map
