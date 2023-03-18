(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SchemaTools"] = factory();
	else
		root["SchemaTools"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(14);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(8)["default"];

var assertThisInitialized = __webpack_require__(15);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(16);

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _get.apply(this, arguments);
}

module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(10);

var iterableToArray = __webpack_require__(11);

var unsupportedIterableToArray = __webpack_require__(12);

var nonIterableSpread = __webpack_require__(13);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(0);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(6);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(3);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(0);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(8);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/utils.js


var clone = function clone(thing) {
  return JSON.parse(JSON.stringify(thing));
};
var fakeForEach = function fakeForEach(array, callback) {
  for (var index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
};
var hasOwn = function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
var pretty = function pretty(value) {
  return JSON.stringify(value, null, 2);
};
var round2decimals = function round2decimals(number) {
  return Math.round(number * 100) / 100;
};
var sortObject = function sortObject(obj) {
  return Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
};
var equal = function equal(a, b) {
  if (utils_isObject(a) && utils_isObject(b)) {
    a = sortObject(a);
    b = sortObject(b);
  }

  return JSON.stringify(a) === JSON.stringify(b);
};
var different = function different(a, b) {
  return !equal(a, b);
};
var isNull = function isNull(value) {
  return value === null;
};
var isSet = function isSet(value) {
  return typeof value !== 'undefined';
};
var notSet = function notSet(value) {
  return typeof value === 'undefined';
};
var isNumber = function isNumber(value) {
  return typeof value === 'number';
};
var isInteger = function isInteger(value) {
  return isNumber(value) && value === Math.floor(value);
};
var isString = function isString(value) {
  return typeof value === 'string';
};
var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};
var isArray = function isArray(value) {
  return Array.isArray(value);
};
var utils_isObject = function isObject(value) {
  return !isNull(value) && !isArray(value) && typeof_default()(value) === 'object';
};
var getType = function getType(value) {
  var type = 'any';

  if (isNumber(value)) {
    type = isInteger(value) ? 'integer' : 'number';
  } else if (isString(value)) {
    type = 'string';
  } else if (isBoolean(value)) {
    type = 'boolean';
  } else if (isArray(value)) {
    type = 'array';
  } else if (isNull(value)) {
    type = 'null';
  } else if (utils_isObject(value)) {
    type = 'object';
  }

  return type;
};
var utils_mergeDeep = function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (utils_isObject(target) && utils_isObject(source)) {
    Object.keys(source).forEach(function (key) {
      if (utils_isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, defineProperty_default()({}, key, {}));
        }

        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, defineProperty_default()({}, key, source[key]));
      }
    });
  }

  return mergeDeep.apply(void 0, [target].concat(sources));
};
// CONCATENATED MODULE: ./src/schema.js





var schema_Schema = /*#__PURE__*/function () {
  function Schema(schema) {
    classCallCheck_default()(this, Schema);

    this.schema = schema;
  }

  createClass_default()(Schema, [{
    key: "additionalProperties",
    value: function additionalProperties() {
      return utils_isObject(this.schema.additionalProperties) || isBoolean(this.schema.additionalProperties) ? this.schema.additionalProperties : true;
    }
  }, {
    key: "allOf",
    value: function allOf() {
      return isArray(this.schema.allOf) ? this.schema.allOf : undefined;
    }
  }, {
    key: "anyOf",
    value: function anyOf() {
      return isArray(this.schema.anyOf) ? this.schema.anyOf : undefined;
    }
  }, {
    key: "const",
    value: function _const() {
      return this.schema["const"];
    }
  }, {
    key: "clone",
    value: function clone() {
      return JSON.parse(JSON.stringify(this.schema));
    }
  }, {
    key: "default",
    value: function _default() {
      return this.schema["default"];
    }
  }, {
    key: "dependentRequired",
    value: function dependentRequired() {
      return utils_isObject(this.schema.dependentRequired) ? this.schema.dependentRequired : undefined;
    }
  }, {
    key: "description",
    value: function description() {
      return isString(this.schema.description) ? this.schema.description : undefined;
    }
  }, {
    key: "else",
    value: function _else() {
      return utils_isObject(this.schema["else"]) || isBoolean(this.schema["else"]) ? this.schema["else"] : undefined;
    }
  }, {
    key: "enum",
    value: function _enum() {
      if (isArray(this.schema["enum"]) && this.schema["enum"].length > 0) {
        return this.schema["enum"];
      }

      return undefined;
    }
  }, {
    key: "exclusiveMaximum",
    value: function exclusiveMaximum() {
      return isNumber(this.schema.exclusiveMaximum) ? this.schema.exclusiveMaximum : undefined;
    }
  }, {
    key: "exclusiveMinimum",
    value: function exclusiveMinimum() {
      return isNumber(this.schema.exclusiveMinimum) ? this.schema.exclusiveMinimum : undefined;
    }
  }, {
    key: "format",
    value: function format() {
      return isString(this.schema.format) ? this.schema.format : undefined;
    }
  }, {
    key: "formatIs",
    value: function formatIs(value) {
      return isSet(this.format()) && this.format() === value;
    }
  }, {
    key: "if",
    value: function _if() {
      if (utils_isObject(this.schema["if"])) {
        return this.schema["if"];
      }

      if (isBoolean(this.schema["if"])) {
        return this.schema["if"];
      }

      return undefined;
    }
  }, {
    key: "items",
    value: function items() {
      return utils_isObject(this.schema.items) ? this.schema.items : undefined;
    }
  }, {
    key: "maximum",
    value: function maximum() {
      return isNumber(this.schema.maximum) ? this.schema.maximum : undefined;
    }
  }, {
    key: "maxItems",
    value: function maxItems() {
      if (isInteger(this.schema.maxItems) && this.schema.maxItems >= 0) {
        return this.schema.maxItems;
      }

      return undefined;
    }
  }, {
    key: "maxLength",
    value: function maxLength() {
      if (isInteger(this.schema.maxLength) && this.schema.maxLength >= 0) {
        return this.schema.maxLength;
      }

      return undefined;
    }
  }, {
    key: "maxProperties",
    value: function maxProperties() {
      if (isInteger(this.schema.maxProperties)) {
        return this.schema.maxProperties;
      }

      return undefined;
    }
  }, {
    key: "minimum",
    value: function minimum() {
      return isNumber(this.schema.minimum) ? this.schema.minimum : undefined;
    }
  }, {
    key: "minItems",
    value: function minItems() {
      if (isInteger(this.schema.minItems) && this.schema.minItems >= 0) {
        return this.schema.minItems;
      }

      return undefined;
    }
  }, {
    key: "minLength",
    value: function minLength() {
      if (isInteger(this.schema.minLength) && this.schema.minLength >= 0) {
        return this.schema.minLength;
      }

      return undefined;
    }
  }, {
    key: "minProperties",
    value: function minProperties() {
      if (isInteger(this.schema.minProperties) && this.schema.minProperties >= 0) {
        return this.schema.minProperties;
      }

      return undefined;
    }
  }, {
    key: "multipleOf",
    value: function multipleOf() {
      if (isNumber(this.schema.multipleOf) && this.schema.multipleOf >= 0) {
        return this.schema.multipleOf;
      }

      return undefined;
    }
  }, {
    key: "not",
    value: function not() {
      return utils_isObject(this.schema.not) || isBoolean(this.schema.not) ? this.schema.not : undefined;
    }
  }, {
    key: "option",
    value: function option(_option) {
      return this.schema.options && this.schema.options[_option] ? this.schema.options[_option] : false;
    }
  }, {
    key: "pattern",
    value: function pattern() {
      return isString(this.schema.pattern) ? this.schema.pattern : undefined;
    }
  }, {
    key: "patternProperties",
    value: function patternProperties() {
      return utils_isObject(this.schema.patternProperties) ? this.schema.patternProperties : undefined;
    }
  }, {
    key: "properties",
    value: function properties() {
      return utils_isObject(this.schema.properties) ? this.schema.properties : undefined;
    }
  }, {
    key: "readOnly",
    value: function readOnly() {
      return isBoolean(this.schema.readOnly) ? this.schema.readOnly : undefined;
    }
  }, {
    key: "required",
    value: function required() {
      return isArray(this.schema.required) ? toConsumableArray_default()(new Set(this.schema.required)) : undefined;
    }
  }, {
    key: "then",
    value: function then() {
      return utils_isObject(this.schema.then) || isBoolean(this.schema.then) ? this.schema.then : undefined;
    }
  }, {
    key: "title",
    value: function title() {
      return isString(this.schema.title) ? this.schema.title : undefined;
    }
  }, {
    key: "type",
    value: function type() {
      if (isString(this.schema.type) || isArray(this.schema.type)) {
        return this.schema.type;
      }

      return undefined;
    }
  }, {
    key: "typeIs",
    value: function typeIs(value) {
      return isSet(this.type()) && this.type() === value;
    }
  }, {
    key: "typeIsNumeric",
    value: function typeIsNumeric() {
      return this.typeIs('number') || this.typeIs('integer');
    }
  }, {
    key: "oneOf",
    value: function oneOf() {
      return isArray(this.schema.oneOf) ? this.schema.oneOf : undefined;
    }
  }, {
    key: "uniqueItems",
    value: function uniqueItems() {
      return isBoolean(this.schema.uniqueItems) ? this.schema.uniqueItems : undefined;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      Object.keys(this).forEach(function (key) {
        delete _this[key];
      });
    }
  }]);

  return Schema;
}();

/* harmony default export */ var src_schema = (schema_Schema);
// CONCATENATED MODULE: ./src/validation/constrains/allOf.js



var allOf_allOf = function _allOf(validator, value, schema, key, path) {
  var errors = [];

  if (isSet(schema.allOf())) {
    schema.allOf().forEach(function (schema) {
      var subSchemaEditor = new src.Jedi({
        schema: schema,
        startValue: value,
        rootName: key
      });
      var subSchemaErrors = subSchemaEditor.validate();
      subSchemaEditor.destroy();
      errors = [].concat(toConsumableArray_default()(errors), toConsumableArray_default()(subSchemaErrors));
    });
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/minLength.js

var minLength_minLength = function _minLength(validator, value, schema, key, path) {
  var errors = [];

  if (isString(value) && isSet(schema.minLength())) {
    value = value.replace(/[\uDCA9]/g, ''); // remove Unicode code points

    var invalid = value.length < schema.minLength();

    if (invalid) {
      errors.push({
        message: 'Must be at least ' + schema.minLength() + ' characters long',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/const.js

var const_const = function _const(validator, value, schema, key, path) {
  var errors = [];

  if (isSet(schema["const"]())) {
    var valueIsNotEqualConst = different(value, schema["const"]());
    var invalid = valueIsNotEqualConst;

    if (invalid) {
      errors.push({
        message: 'Must be: ' + JSON.stringify(schema["const"]()),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/anyOf.js


var anyOf_anyOf = function _anyOf(validator, value, schema, key, path) {
  var errors = [];

  if (isSet(schema.anyOf())) {
    var anyOf = schema.anyOf();
    var valid = false;
    anyOf.forEach(function (schema) {
      var anyOfEditor = new src.Jedi({
        schema: schema,
        startValue: value
      });
      var anyOfErrors = anyOfEditor.validate();
      anyOfEditor.destroy();

      if (anyOfErrors.length === 0) {
        valid = true;
      }
    });

    if (!valid) {
      errors.push({
        message: 'Must validate against at least one of the provided schemas',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/dependentRequired.js

var dependentRequired_dependentRequired = function _dependentRequired(validator, value, schema, key, path) {
  var errors = [];

  if (utils_isObject(value) && isSet(schema.dependentRequired())) {
    var missingProperties = [];
    Object.keys(schema.dependentRequired()).forEach(function (key) {
      if (isSet(value[key])) {
        var requiredProperties = schema.dependentRequired()[key];
        missingProperties = requiredProperties.filter(function (property) {
          return !hasOwn(value, property);
        });
      }
    });
    var invalid = missingProperties.length > 0;

    if (invalid) {
      errors.push({
        message: 'Must have the required properties: ' + missingProperties.join(', '),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/enum.js

var enum_enum = function _enum(validator, value, schema, key, path) {
  var errors = [];

  if (isSet(schema["enum"]())) {
    var invalid = !schema["enum"]().some(function (e) {
      return JSON.stringify(value) === JSON.stringify(e);
    });

    if (invalid) {
      errors.push({
        message: 'Must be one of the enumerated values: ' + JSON.stringify(schema["enum"]()),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/exclusiveMaximum.js

var exclusiveMaximum_exclusiveMaximum = function _exclusiveMaximum(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && isSet(schema.exclusiveMaximum())) {
    var invalid = value >= schema.exclusiveMaximum();

    if (invalid) {
      errors.push({
        message: 'Must be less than ' + schema.exclusiveMaximum(),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/exclusiveMinimum.js

var exclusiveMinimum_exclusiveMinimum = function _exclusiveMinimum(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && isSet(schema.exclusiveMinimum())) {
    var invalid = value <= schema.exclusiveMinimum();

    if (invalid) {
      errors.push({
        message: 'Must be greater than ' + schema.exclusiveMinimum(),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/format.js

var format_format = function _format(validator, value, schema, key, path) {
  var errors = [];

  if (isSet(schema.format()) && isString(value)) {
    var invalid = false;

    if (schema.formatIs('email')) {
      var regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
      invalid = !regexp.test(value);
    }

    if (invalid) {
      errors.push({
        message: 'Must be a valid email address',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/if.js


var if_if = function _if(validator, value, schema) {
  var errors = [];

  if (isSet(schema["if"]())) {
    if (notSet(schema.then()) && notSet(schema["else"]())) {
      return errors;
    }

    var ifEditor = new src.Jedi({
      schema: schema["if"](),
      startValue: value
    });
    var ifErrors = ifEditor.validate();
    ifEditor.destroy();
    var thenErrors = [];
    var elseErrors = [];

    if (isSet(schema.then())) {
      var thenEditor = new src.Jedi({
        schema: schema.then(),
        startValue: value
      });
      thenErrors = thenEditor.validate();
      thenEditor.destroy();
    }

    if (isSet(schema["else"]())) {
      var elseEditor = new src.Jedi({
        schema: schema["else"](),
        startValue: value
      });
      elseErrors = elseEditor.validate();
      elseEditor.destroy();
    }

    if (schema["if"]() === true) {
      return thenErrors;
    }

    if (schema["if"]() === false) {
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
};
// CONCATENATED MODULE: ./src/validation/constrains/maxItems.js

var maxItems_maxItems = function _maxItems(validator, value, schema, key, path) {
  var errors = [];

  if (isArray(value) && isSet(schema.maxItems())) {
    var invalid = value.length > schema.maxItems();

    if (invalid) {
      errors.push({
        message: 'Must have at most ' + schema.maxItems() + ' items',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/maxLength.js

var maxLength_maxLength = function _maxLength(validator, value, schema, key, path) {
  var errors = [];

  if (isString(value) && isSet(schema.maxLength())) {
    value = value.replace(/[\uDCA9]/g, ''); // remove Unicode code points

    var invalid = value.length > schema.maxLength();

    if (invalid) {
      errors.push({
        message: 'Must be at most ' + schema.maxLength() + ' characters long',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/maxProperties.js

var maxProperties_maxProperties = function _maxProperties(validator, value, schema, key, path) {
  var errors = [];

  if (utils_isObject(value) && isSet(schema.maxProperties())) {
    var propertiesCount = Object.keys(value).length;
    var invalid = propertiesCount > schema.maxProperties();

    if (invalid) {
      errors.push({
        message: 'Must have at most ' + schema.maxProperties() + ' properties',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/minimum.js

var minimum_minimum = function _minimum(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && isSet(schema.minimum())) {
    var computedMinimum = schema.minimum();
    var invalid = value < computedMinimum;

    if (invalid) {
      errors.push({
        message: 'Must be at least ' + computedMinimum,
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/minItems.js

var minItems_minItems = function _minItems(validator, value, schema, key, path) {
  var errors = [];

  if (isArray(value) && isSet(schema.minItems())) {
    var invalid = value.length < schema.minItems();

    if (invalid) {
      errors.push({
        message: 'Must have at least ' + schema.minItems() + ' items',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/minProperties.js

var minProperties_minProperties = function _minProperties(validator, value, schema, key, path) {
  var errors = [];

  if (utils_isObject(value) && isSet(schema.minProperties())) {
    var propertiesCount = Object.keys(value).length;
    var invalid = propertiesCount < schema.minProperties();

    if (invalid) {
      errors.push({
        message: 'Must have at least ' + schema.minProperties() + ' properties',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/multipleOf.js

var multipleOf_multipleOf = function _multipleOf(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && isSet(schema.multipleOf())) {
    var isMultipleOf = value / schema.multipleOf() === Math.floor(value / schema.multipleOf());
    var invalid = !isMultipleOf || value.toString().includes('e');

    if (invalid) {
      errors.push({
        message: 'Must be multiple of ' + schema.multipleOf(),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/not.js


var not_not = function _not(validator, value, schema, key, path) {
  var errors = [];

  if (isSet(schema.not())) {
    var notErrors = validator.validate(value, new src_schema(schema.not()), key, path);
    var invalid = notErrors.length === 0;

    if (invalid) {
      errors.push({
        message: 'Must not validate against the provided schema ' + JSON.stringify(schema.not()),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/oneOf.js


var oneOf_oneOf = function _oneOf(validator, value, schema, key, path) {
  var errors = [];

  if (isSet(schema.oneOf())) {
    var counter = 0;
    schema.oneOf().forEach(function (schema) {
      var oneOfEditor = new src.Jedi({
        schema: schema,
        startValue: value
      });
      var oneOfErrors = oneOfEditor.validate();
      oneOfEditor.destroy();

      if (oneOfErrors.length === 0) {
        counter++;
      }
    });

    if (counter !== 1) {
      errors.push({
        message: 'Must validate against exactly one of the provided schemas. It currently validates against ' + counter + ' of the schemas.',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/pattern.js

var pattern_pattern = function _pattern(validator, value, schema, key, path) {
  var errors = [];

  if (isString(value) && isSet(schema.pattern())) {
    var regexp = new RegExp(schema.pattern());
    var invalid = !regexp.test(value);

    if (invalid) {
      errors.push({
        message: 'Must be the pattern: ' + schema.pattern(),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/patternProperties.js



var patternProperties_patternProperties = function _patternProperties(validator, value, schema, path) {
  var errors = [];

  if (utils_isObject(value) && isSet(schema.patternProperties())) {
    var patternProperties = schema.patternProperties();
    Object.keys(value).forEach(function (propertyName) {
      Object.keys(patternProperties).forEach(function (pattern) {
        var regexp = new RegExp(pattern);

        if (regexp.test(propertyName)) {
          var _schema = patternProperties[pattern];
          var editor = new src.Jedi({
            schema: _schema,
            startValue: value[propertyName]
          });
          var editorErrors = editor.validate().map(function (error) {
            return {
              message: error.message,
              path: path + '.' + propertyName
            };
          });
          errors = [].concat(toConsumableArray_default()(errors), toConsumableArray_default()(editorErrors));
          editor.destroy();
        }
      });
    });
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/required.js

var required_required = function _required(validator, value, schema, key, path) {
  var errors = [];

  if (utils_isObject(value) && isSet(schema.required())) {
    var missingProperties = [];
    var keys = Object.keys(value);
    schema.required().forEach(function (key) {
      if (!keys.includes(key)) {
        missingProperties.push(key);
      }
    });
    var invalid = missingProperties.length > 0;

    if (invalid) {
      errors.push({
        message: 'Must have the required properties: ' + missingProperties.join(', '),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/type.js

var type_type = function _type(validator, value, schema, key, path) {
  var errors = [];

  if (schema.typeIs('any')) {
    return errors;
  }

  if (isSet(schema.type())) {
    var types = {
      string: function string(value) {
        return isString(value);
      },
      number: function number(value) {
        return isNumber(value);
      },
      integer: function integer(value) {
        return isInteger(value);
      },
      "boolean": function boolean(value) {
        return isBoolean(value);
      },
      array: function array(value) {
        return isArray(value);
      },
      object: function object(value) {
        return utils_isObject(value);
      },
      "null": function _null(value) {
        return isNull(value);
      }
    };
    var valid = true;

    if (isArray(schema.type())) {
      valid = schema.type().some(function (type) {
        return types[type](value);
      });
    } else {
      valid = types[schema.type()](value);
    }

    if (!valid) {
      errors.push({
        message: 'Must be of type ' + schema.type(),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/maximum.js

var maximum_maximum = function _maximum(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && isSet(schema.maximum())) {
    var computedMaximum = schema.maximum();
    var invalid = value > computedMaximum;

    if (invalid) {
      errors.push({
        message: 'Must be less than ' + computedMaximum,
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/uniqueItems.js

var uniqueItems_uniqueItems = function _uniqueItems(validator, value, schema, key, path) {
  var errors = [];

  if (isArray(value) && isSet(schema.uniqueItems())) {
    var seen = {};
    var hasDuplicatedItems = false;

    for (var i = 0; i < value.length; i++) {
      var item = JSON.stringify(value[i]);

      if (seen[item]) {
        hasDuplicatedItems = true;
        break;
      }

      seen[item] = true;
    }

    var invalid = hasDuplicatedItems;

    if (invalid) {
      errors.push({
        message: 'Must have unique items',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/additionalProperties.js



var additionalProperties_additionalProperties = function _additionalProperties(validator, value, schema, key, path) {
  var errors = [];

  if (utils_isObject(value) && isSet(schema.additionalProperties())) {
    var properties = isSet(schema.properties()) ? schema.properties() : {};
    var additionalProperties = schema.additionalProperties();
    var patternProperties = schema.patternProperties();

    if (properties) {
      Object.keys(value).forEach(function (property) {
        var definedInPatternProperty = false;

        if (isSet(patternProperties)) {
          Object.keys(patternProperties).forEach(function (pattern) {
            var regexp = new RegExp(pattern);
            definedInPatternProperty = regexp.test(property);
          });
        }

        if (!definedInPatternProperty && additionalProperties === false && !hasOwn(properties, property)) {
          errors.push({
            message: "Property \"".concat(property, "\" has not been defined and the schema does not allow additional properties."),
            path: path
          });
        }

        if (!definedInPatternProperty && utils_isObject(additionalProperties) && !hasOwn(properties, property)) {
          var editor = new src.Jedi({
            rootName: property,
            schema: additionalProperties,
            startValue: value[property]
          });
          var additionalPropertyErrors = editor.validate().map(function (error) {
            return {
              message: error.message,
              path: property
            };
          });
          errors = [].concat(toConsumableArray_default()(errors), toConsumableArray_default()(additionalPropertyErrors));
          editor.destroy();
        }
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/drafts/draft-2020-12.js


























/* harmony default export */ var draft_2020_12 = ([additionalProperties_additionalProperties, allOf_allOf, anyOf_anyOf, const_const, dependentRequired_dependentRequired, enum_enum, exclusiveMaximum_exclusiveMaximum, exclusiveMinimum_exclusiveMinimum, format_format, if_if, maximum_maximum, maxItems_maxItems, maxLength_maxLength, maxProperties_maxProperties, minimum_minimum, minItems_minItems, minLength_minLength, minProperties_minProperties, multipleOf_multipleOf, not_not, oneOf_oneOf, pattern_pattern, patternProperties_patternProperties, required_required, type_type, uniqueItems_uniqueItems]);
// CONCATENATED MODULE: ./src/validation/validator.js






var validator_Validator = /*#__PURE__*/function () {
  function Validator() {
    classCallCheck_default()(this, Validator);

    this.draft = draft_2020_12;
  }
  /**
   * Validates a value against it's schema
   */


  createClass_default()(Validator, [{
    key: "validate",
    value: function validate(value, schema, key, path) {
      var _this = this;

      var schemaErrors = [];
      var schemaClone = schema.clone();

      if (isBoolean(schemaClone) && schemaClone === true) {
        return schemaErrors;
      }

      if (isBoolean(schemaClone) && schemaClone === false) {
        return [{
          message: schema.option('message') ? schema.option('message') : 'invalid',
          path: path
        }];
      }

      this.draft.forEach(function (validator) {
        var validatorErrors = validator(_this, value, schema, key, path);

        if (validatorErrors) {
          schemaErrors = [].concat(toConsumableArray_default()(schemaErrors), toConsumableArray_default()(validatorErrors));
        }
      });

      if (schemaErrors.length > 0 && schema.option('message')) {
        schemaErrors = [{
          message: schema.option('message'),
          path: path
        }];
      }

      return schemaErrors;
    }
  }]);

  return Validator;
}();

/* harmony default export */ var validation_validator = (validator_Validator);
// CONCATENATED MODULE: ./src/event-emitter.js



var event_emitter_EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    classCallCheck_default()(this, EventEmitter);

    this.listeners = [];
  }

  createClass_default()(EventEmitter, [{
    key: "on",
    value: function on(name, callback) {
      this.listeners.push({
        name: name,
        callback: callback
      });
    }
  }, {
    key: "emit",
    value: function emit(name) {
      var listeners = this.listeners.filter(function (listener) {
        return listener.name === name;
      });
      listeners.forEach(function (listener) {
        listener.callback();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      Object.keys(this).forEach(function (key) {
        delete _this[key];
      });
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ var event_emitter = (event_emitter_EventEmitter);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__(5);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// CONCATENATED MODULE: ./src/instances/instance.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var instance_Instance = /*#__PURE__*/function (_EventEmitter) {
  inherits_default()(Instance, _EventEmitter);

  var _super = _createSuper(Instance);

  function Instance(config) {
    var _this;

    classCallCheck_default()(this, Instance);

    _this = _super.call(this);
    _this.jedi = config.jedi;
    _this.schema = config.schema;
    _this.value = config.value || undefined;
    _this.isActive = true;
    _this.path = config.path || _this.jedi.options.rootName;
    _this.parent = config.parent || null;
    _this.children = [];
    _this.ui = null;

    _this.init();

    return _this;
  }
  /**
   * Initializes and register the instance
   */


  createClass_default()(Instance, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.register();
      this.setInitialValue();
      this.prepare();
      this.setDefaultValue();

      if (this.jedi.options.isEditor) {
        this.setUI();
      }

      this.on('change', function () {
        if (_this2.parent) {
          _this2.parent.onChildChange();
        }
      });
    }
    /**
     * Sets the instance ui property. UI can be an editor instance or similar
     */

  }, {
    key: "setUI",
    value: function setUI() {}
    /**
     * Return the last part of the instance path
     */

  }, {
    key: "getKey",
    value: function getKey() {
      return this.path.split('.').pop();
    }
    /**
     * Adds a child instance pointer to the instances list
     */

  }, {
    key: "register",
    value: function register() {
      this.jedi.register(this);
    }
    /**
     * Deletes a child instance pointer from the instances list
     */

  }, {
    key: "unregister",
    value: function unregister() {
      this.jedi.unregister(this);
    }
    /**
     * Sets the default value of the instance based on it'S schema
     */

  }, {
    key: "setInitialValue",
    value: function setInitialValue() {
      var value;
      if (this.schema.type() === 'boolean') value = false;
      if (this.schema.type() === 'number') value = 0.0;
      if (this.schema.type() === 'integer') value = 0;
      if (this.schema.type() === 'string') value = '';
      if (this.schema.type() === 'array') value = [];
      if (this.schema.type() === 'object') value = {};
      if (this.schema.type() === 'null') value = null;
      this.value = value;
    }
  }, {
    key: "setDefaultValue",
    value: function setDefaultValue() {
      // if (this.schema.enum()) {
      //   value = this.schema.enum()[0]
      // }
      if (isSet(this.schema["default"]())) {
        if (isSet(this.schema["enum"]()) && !this.schema["enum"]().includes(this.schema["default"]())) {
          return;
        }

        var defaultErrors = this.jedi.validator.validate(this.schema["default"](), this.schema, this.getKey(), this.path);
        var validDefault = defaultErrors.length === 0;

        if (validDefault) {
          this.setValue(this.schema["default"](), false);
        }
      }
    }
    /**
     * Returns the value of the instance
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
    /**
     * Sets the instance value
     */

  }, {
    key: "setValue",
    value: function setValue(newValue) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.value = newValue;
      this.emit('set-value');

      if (triggersChange) {
        this.emit('change');
      }
    }
    /**
     * Fires when a child's instance state changes
     */

  }, {
    key: "onChildChange",
    value: function onChildChange() {}
    /**
     * Returns an array of validation error messages
     */

  }, {
    key: "validate",
    value: function validate() {
      if (!this.isActive) {
        return [];
      }

      return this.jedi.validator.validate(this.getValue(), this.schema, this.getKey(), this.path);
    }
    /**
     * Prepare data before building the editor
     */

  }, {
    key: "prepare",
    value: function prepare() {}
    /**
     * Activates the instance
     */

  }, {
    key: "activate",
    value: function activate() {
      if (this.isActive === false) {
        this.isActive = true;
        this.emit('change');
      }
    }
    /**
     * Deactivates the instance
     */

  }, {
    key: "deactivate",
    value: function deactivate() {
      if (this.isActive === true) {
        this.isActive = false;
        this.emit('change');
      }
    }
    /**
     * Destroy the instance and it's children
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;

      this.children.forEach(function (child) {
        child.destroy();
      });
      this.unregister();

      if (this.ui) {
        this.ui.destroy();
      }

      Object.keys(this).forEach(function (key) {
        delete _this3[key];
      });
    }
  }]);

  return Instance;
}(event_emitter);

/* harmony default export */ var instances_instance = (instance_Instance);
// CONCATENATED MODULE: ./src/themes/barebones.js



var barebones_ThemeBarebones = /*#__PURE__*/function () {
  function ThemeBarebones() {
    classCallCheck_default()(this, ThemeBarebones);
  }

  createClass_default()(ThemeBarebones, [{
    key: "getAlert",
    value: function getAlert(config) {
      var alert = document.createElement('p');
      alert.classList.add('jedi-error-message');
      alert.textContent = config.message;
      return alert;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var invalidFeedback = document.createElement('div');
      invalidFeedback.classList.add('jedi-error-message');
      invalidFeedback.textContent = config.message;
      return invalidFeedback;
    }
  }, {
    key: "getDropdown",
    value: function getDropdown() {
      var html = document.createElement('li');
      html.classList.add('dropdown');
      return html;
    }
  }, {
    key: "getDropdownToggle",
    value: function getDropdownToggle() {
      var html = document.createElement('a');
      html.textContent = 'Properties';
      html.setAttribute('data-toggle', 'dropdown');
      html.classList.add('dropdown-toggle');
      html.classList.add('jedi-dropdown-properties');
      return html;
    }
  }, {
    key: "getDropdownMenu",
    value: function getDropdownMenu() {
      var html = document.createElement('ul');
      html.classList.add('dropdown-menu');
      return html;
    }
  }, {
    key: "getToolbarSlot",
    value: function getToolbarSlot() {
      var html = document.createElement('ul');
      html.classList.add('nav');
      html.classList.add('navbar-nav');
      html.classList.add('jedi-toolbar-slot');
      return html;
    }
  }, {
    key: "getActivatorsSlot",
    value: function getActivatorsSlot() {
      var activatorsSlot = document.createElement('div');
      activatorsSlot.classList.add('jedi-properties-slot');
      return activatorsSlot;
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      var actionsSlots = document.createElement('div');
      actionsSlots.classList.add('jedi-actions-slot');
      return actionsSlots;
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      var childrenSlot = document.createElement('div');
      childrenSlot.classList.add('jedi-child-editors-slot');
      return childrenSlot;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      return document.createElement('div');
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var button = document.createElement('button');
      button.setAttribute('type', 'button');

      if (config.value) {
        button.value = config.value;
      }

      button.textContent = config.textContent;
      return button;
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      var container = document.createElement('div');
      container.classList.add('jedi-editor-container');
      return container;
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var description = document.createElement('small');
      description.textContent = config.textContent;
      return description;
    }
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      return document.createElement('fieldset');
    }
  }, {
    key: "getMessagesSlot",
    value: function getMessagesSlot() {
      var messagesSlot = document.createElement('div');
      messagesSlot.classList.add('jedi-messages-slot');
      return messagesSlot;
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var controlSlot = document.createElement('div');
      controlSlot.classList.add('jedi-control-slot');
      return controlSlot;
    }
  }, {
    key: "getCheckboxLabel",
    value: function getCheckboxLabel(config) {
      var checkboxLabel = document.createElement('label');
      checkboxLabel.setAttribute('for', config["for"]);
      checkboxLabel.textContent = config.textContent;

      if (config.srOnly) {
        checkboxLabel.classList.add('sr-only');
      }

      return checkboxLabel;
    }
  }, {
    key: "getRadioLegend",
    value: function getRadioLegend(config) {
      var radioLegend = document.createElement('p');
      radioLegend.textContent = config.textContent;

      if (config.srOnly) {
        radioLegend.classList.add('sr-only');
      }

      return radioLegend;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var radioLabel = document.createElement('label');
      radioLabel.setAttribute('for', config["for"]);
      radioLabel.textContent = config.textContent;

      if (config.srOnly) {
        radioLabel.classList.add('sr-only');
      }

      return radioLabel;
    }
  }, {
    key: "getLabel",
    value: function getLabel(config) {
      var label = document.createElement('label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;

      if (config.srOnly) {
        label.classList.add('sr-only');
      }

      return label;
    }
  }, {
    key: "getCheckboxContainer",
    value: function getCheckboxContainer() {
      return document.createElement('div');
    }
  }, {
    key: "getRadioContainer",
    value: function getRadioContainer() {
      return document.createElement('div');
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var legend = document.createElement('legend');
      legend.textContent = config.textContent;
      legend.setAttribute('style', 'width: auto;');

      if (config.srOnly) {
        legend.classList.add('sr-only');
      }

      return legend;
    }
  }, {
    key: "getInput",
    value: function getInput(config) {
      var input = document.createElement('input');
      input.setAttribute('type', config.type);
      input.setAttribute('id', config.id);
      input.classList.add('form-control');
      return input;
    }
  }, {
    key: "getCheckbox",
    value: function getCheckbox(config) {
      var checkbox = document.createElement('input');
      checkbox.setAttribute('id', config.id);
      checkbox.setAttribute('type', 'checkbox');
      return checkbox;
    }
  }, {
    key: "getRadio",
    value: function getRadio(config) {
      var radio = document.createElement('input');
      radio.setAttribute('type', 'radio');
      radio.setAttribute('value', config.value);
      radio.setAttribute('id', config.id);
      return radio;
    }
  }, {
    key: "getTextarea",
    value: function getTextarea(config) {
      var textarea = document.createElement('textarea');
      textarea.setAttribute('id', config.id);
      return textarea;
    }
  }, {
    key: "getSelect",
    value: function getSelect(config) {
      var select = document.createElement('select');
      select.setAttribute('id', config.id);
      config.optionValues.forEach(function (value, index) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        option.textContent = config.optionsLabels[index];
        select.appendChild(option);
      });
      return select;
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-info';
    }
  }]);

  return ThemeBarebones;
}();

/* harmony default export */ var barebones = (barebones_ThemeBarebones);
// CONCATENATED MODULE: ./src/themes/wireframe.js







function wireframe_createSuper(Derived) { var hasNativeReflectConstruct = wireframe_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function wireframe_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var wireframe_ThemeWireframe = /*#__PURE__*/function (_ThemeBarebones) {
  inherits_default()(ThemeWireframe, _ThemeBarebones);

  var _super = wireframe_createSuper(ThemeWireframe);

  function ThemeWireframe() {
    classCallCheck_default()(this, ThemeWireframe);

    return _super.apply(this, arguments);
  }

  createClass_default()(ThemeWireframe, [{
    key: "getAlert",
    value: function getAlert(config) {
      var error = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getAlert", this).call(this, config);

      error.classList.add('alert');
      error.classList.add('alert-danger');
      return error;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var invalidFeedback = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getInvalidFeedback", this).call(this, config);

      invalidFeedback.classList.add('invalid-feedback');
      return invalidFeedback;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var btnGroup = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getBtnGroup", this).call(this);

      btnGroup.classList.add('btn-group');
      return btnGroup;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var button = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getButton", this).call(this, config);

      button.classList.add('btn');
      return button;
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var controlSlot = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getControlSlot", this).call(this);

      controlSlot.classList.add('form-group');
      return controlSlot;
    }
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      var fieldset = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getFieldset", this).call(this);

      fieldset.classList.add('card');
      fieldset.classList.add('card-body');
      return fieldset;
    }
  }, {
    key: "getCheckboxLabel",
    value: function getCheckboxLabel(config) {
      var checkboxLabel = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getCheckboxLabel", this).call(this, config);

      checkboxLabel.classList.add('form-check-label');
      return checkboxLabel;
    }
  }, {
    key: "getCheckbox",
    value: function getCheckbox(config) {
      var checkbox = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getCheckbox", this).call(this, config);

      checkbox.classList.add('form-check-input');
      return checkbox;
    }
  }, {
    key: "getRadioContainer",
    value: function getRadioContainer() {
      var radioContainer = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getRadioContainer", this).call(this);

      radioContainer.classList.add('form-check');
      radioContainer.classList.add('form-check-inline');
      return radioContainer;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var radioLabel = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getRadioLabel", this).call(this, config);

      radioLabel.classList.add('form-check-label');
      return radioLabel;
    }
  }, {
    key: "getRadio",
    value: function getRadio(config) {
      var radio = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getRadio", this).call(this, config);

      radio.classList.add('form-check-input');
      return radio;
    }
  }, {
    key: "getTextarea",
    value: function getTextarea(config) {
      var textarea = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getTextarea", this).call(this, config);

      textarea.classList.add('form-control');
      return textarea;
    }
  }, {
    key: "getSelect",
    value: function getSelect(config) {
      var select = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getSelect", this).call(this, config);

      select.classList.add('form-control');
      return select;
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-info';
    }
  }]);

  return ThemeWireframe;
}(barebones);

/* harmony default export */ var wireframe = (wireframe_ThemeWireframe);
// CONCATENATED MODULE: ./src/themes/bootstrap4.js







function bootstrap4_createSuper(Derived) { var hasNativeReflectConstruct = bootstrap4_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function bootstrap4_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var bootstrap4_ThemeBootstrap4 = /*#__PURE__*/function (_ThemeBarebones) {
  inherits_default()(ThemeBootstrap4, _ThemeBarebones);

  var _super = bootstrap4_createSuper(ThemeBootstrap4);

  function ThemeBootstrap4() {
    classCallCheck_default()(this, ThemeBootstrap4);

    return _super.apply(this, arguments);
  }

  createClass_default()(ThemeBootstrap4, [{
    key: "getAlert",
    value: function getAlert(config) {
      var alert = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getAlert", this).call(this, config);

      alert.classList.add('jedi-error-message');
      alert.classList.add('alert');
      alert.classList.add('alert-danger');
      return alert;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var invalidFeedback = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getInvalidFeedback", this).call(this, config);

      invalidFeedback.classList.add('invalid-feedback');
      invalidFeedback.classList.add('d-block');
      return invalidFeedback;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var btnGroup = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getBtnGroup", this).call(this);

      btnGroup.classList.add('btn-group');
      btnGroup.classList.add('mb-3');
      return btnGroup;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var button = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getButton", this).call(this, config);

      button.classList.add('btn');
      button.classList.add('btn-default');
      return button;
    }
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      var fieldset = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getFieldset", this).call(this);

      fieldset.classList.add('card');
      fieldset.classList.add('card-body');
      fieldset.classList.add('mb-3');
      fieldset.classList.add('py-0');
      return fieldset;
    }
  }, {
    key: "getCheckboxLabel",
    value: function getCheckboxLabel(config) {
      var checkboxLabel = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getCheckboxLabel", this).call(this, config);

      checkboxLabel.classList.add('form-check-label');
      return checkboxLabel;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var radioLabel = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getRadioLabel", this).call(this, config);

      radioLabel.classList.add('form-check-label');
      return radioLabel;
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var controlSlot = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getControlSlot", this).call(this);

      controlSlot.classList.add('form-group');
      return controlSlot;
    }
  }, {
    key: "getCheckboxContainer",
    value: function getCheckboxContainer() {
      var checkboxContainer = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getCheckboxContainer", this).call(this);

      checkboxContainer.classList.add('form-check');
      return checkboxContainer;
    }
  }, {
    key: "getRadioContainer",
    value: function getRadioContainer() {
      var radioContainer = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getRadioContainer", this).call(this);

      radioContainer.classList.add('form-check');
      return radioContainer;
    }
  }, {
    key: "getCheckbox",
    value: function getCheckbox(config) {
      var checkbox = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getCheckbox", this).call(this, config);

      checkbox.classList.add('form-check-input');
      return checkbox;
    }
  }, {
    key: "getRadio",
    value: function getRadio(config) {
      var radio = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getRadio", this).call(this, config);

      radio.classList.add('form-check-input');
      return radio;
    }
  }, {
    key: "getTextarea",
    value: function getTextarea(config) {
      var textarea = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getTextarea", this).call(this, config);

      textarea.classList.add('form-control');
      return textarea;
    }
  }, {
    key: "getSelect",
    value: function getSelect(config) {
      var select = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getSelect", this).call(this, config);

      select.classList.add('form-control');
      return select;
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-primary';
    }
  }]);

  return ThemeBootstrap4;
}(barebones);

/* harmony default export */ var bootstrap4 = (bootstrap4_ThemeBootstrap4);
// CONCATENATED MODULE: ./src/themes/bootstrap5.js







function bootstrap5_createSuper(Derived) { var hasNativeReflectConstruct = bootstrap5_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function bootstrap5_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var bootstrap5_ThemeBootstrap5 = /*#__PURE__*/function (_ThemeBootstrap) {
  inherits_default()(ThemeBootstrap5, _ThemeBootstrap);

  var _super = bootstrap5_createSuper(ThemeBootstrap5);

  function ThemeBootstrap5() {
    classCallCheck_default()(this, ThemeBootstrap5);

    return _super.apply(this, arguments);
  }

  createClass_default()(ThemeBootstrap5, [{
    key: "getLegend",
    value: function getLegend(config) {
      var legend = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getLegend", this).call(this, config);

      legend.classList.add('my-3');

      if (config.srOnly) {
        legend.classList.add('visually-hidden-focusable');
      }

      return legend;
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var controlSlot = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getControlSlot", this).call(this);

      controlSlot.classList.add('mb-3');
      return controlSlot;
    }
  }, {
    key: "getLabel",
    value: function getLabel(config) {
      var label = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getLabel", this).call(this, config);

      label.classList.add('form-label');
      return label;
    }
  }]);

  return ThemeBootstrap5;
}(bootstrap4);

/* harmony default export */ var bootstrap5 = (bootstrap5_ThemeBootstrap5);
// CONCATENATED MODULE: ./src/editors/editor.js






function editor_createSuper(Derived) { var hasNativeReflectConstruct = editor_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function editor_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var editor_Editor = /*#__PURE__*/function (_EventEmitter) {
  inherits_default()(Editor, _EventEmitter);

  var _super = editor_createSuper(Editor);

  function Editor(instance) {
    var _this;

    classCallCheck_default()(this, Editor);

    _this = _super.call(this);
    _this.instance = instance;
    _this.theme = null;
    _this.container = null;
    _this.activatorsSlot = null;
    _this.controlSlot = null;
    _this.messagesSlot = null;
    _this.actionsSlot = null;
    _this.childrenSlot = null;
    _this.disabled = false;

    _this.init();

    _this.build();

    _this.setContainerAttributes();

    _this.refreshUI();

    if (_this.instance.jedi.options.alwaysShowErrors || _this.instance.schema.option('alwaysShowErrors')) {
      _this.showValidationErrors();
    }

    _this.instance.on('set-value', function () {
      _this.refreshUI();

      _this.showValidationErrors();
    });

    _this.instance.on('change', function () {
      _this.showValidationErrors();
    });

    return _this;
  }

  createClass_default()(Editor, [{
    key: "init",
    value: function init() {
      switch (this.instance.jedi.options.theme) {
        case 'wireframe':
          this.theme = new wireframe();
          break;

        case 'bootstrap4':
          this.theme = new bootstrap4();
          break;

        case 'bootstrap5':
          this.theme = new bootstrap5();
          break;

        case 'barebones':
          this.theme = new barebones();
          break;

        default:
          this.theme = new barebones();
      }

      this.container = this.theme.getContainer();
      this.toolbarSlot = this.theme.getToolbarSlot();
      this.activatorsSlot = this.theme.getActivatorsSlot();
      this.controlSlot = this.theme.getControlSlot();
      this.messagesSlot = this.theme.getMessagesSlot();
      this.actionsSlot = this.theme.getActionsSlot();
      this.childrenSlot = this.theme.getChildrenSlot();
    }
  }, {
    key: "setContainerAttributes",
    value: function setContainerAttributes() {
      this.container.setAttribute('data-path', this.instance.path);

      if (isSet(this.instance.schema.type())) {
        this.container.setAttribute('data-type', this.instance.schema.type());
      }
    }
  }, {
    key: "build",
    value: function build() {}
  }, {
    key: "refreshUI",
    value: function refreshUI() {}
    /**
     * Shows validation messages in the editor container.
     */

  }, {
    key: "showValidationErrors",
    value: function showValidationErrors() {
      var _this2 = this;

      var errors = this.instance.validate();
      this.messagesSlot.innerHTML = '';
      errors.forEach(function (error) {
        var invalidFeedback = _this2.getInvalidFeedback(error.message);

        _this2.messagesSlot.appendChild(invalidFeedback);
      });
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(message) {
      return this.theme.getInvalidFeedback({
        message: message
      });
    }
    /**
     * Disables the editor
     */

  }, {
    key: "disable",
    value: function disable() {
      this.disabled = true;
      this.refreshUI();
    }
    /**
     * Enables the editor
     */

  }, {
    key: "enable",
    value: function enable() {
      this.disabled = false;
      this.refreshUI();
    }
    /**
     * Transforms the input value if necessary before value set
     */

  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return value;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;

      if (this.container && this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }

      Object.keys(this).forEach(function (key) {
        delete _this3[key];
      });
    }
  }]);

  return Editor;
}(event_emitter);

/* harmony default export */ var editors_editor = (editor_Editor);
// CONCATENATED MODULE: ./src/editors/multiple.js







function multiple_createSuper(Derived) { var hasNativeReflectConstruct = multiple_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function multiple_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var multiple_MultipleEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(MultipleEditor, _Editor);

  var _super = multiple_createSuper(MultipleEditor);

  function MultipleEditor() {
    classCallCheck_default()(this, MultipleEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(MultipleEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      this.container.appendChild(this.messagesSlot); // switcher buttons

      this.switcherButtons = [];
      this.switcher = this.theme.getBtnGroup();
      this.switcher.classList.add('jedi-switcher');
      this.instance.switcherOptionValues.forEach(function (value, index) {
        // button
        var button = _this.theme.getButton({
          textContent: _this.instance.switcherOptionsLabels[index],
          value: index
        });

        button.addEventListener('click', function () {
          var index = Number(button.value);

          _this.instance.switchInstance(index);
        });

        _this.switcher.appendChild(button);

        _this.switcherButtons.push(button);
      });
      this.container.appendChild(this.switcher);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;

      var oldInstance = this.instance.instances[this.instance.lastIndex];

      if (oldInstance.ui.container.parentNode) {
        this.container.removeChild(oldInstance.ui.container);
      }

      this.container.appendChild(this.instance.activeInstance.ui.container);
      var buttons = this.container.querySelectorAll('button');

      if (this.disabled) {
        this.instance.activeInstance.ui.disable();
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      } else {
        this.instance.activeInstance.ui.enable();
        buttons.forEach(function (button) {
          button.disabled = false;
        });
      }

      this.switcherButtons.forEach(function (button) {
        if (Number(button.value) === Number(_this2.instance.index)) {
          button.classList.add(_this2.theme.getButtonActiveClass());
        } else {
          button.classList.remove(_this2.theme.getButtonActiveClass());
        }
      });
    }
  }, {
    key: "showValidationErrors",
    value: function showValidationErrors() {
      get_default()(getPrototypeOf_default()(MultipleEditor.prototype), "showValidationErrors", this).call(this);

      this.instance.activeInstance.ui.showValidationErrors();
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(message) {
      return this.theme.getAlert({
        message: message
      });
    }
  }]);

  return MultipleEditor;
}(editors_editor);

/* harmony default export */ var multiple = (multiple_MultipleEditor);
// CONCATENATED MODULE: ./src/instances/multiple.js








function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function instances_multiple_createSuper(Derived) { var hasNativeReflectConstruct = instances_multiple_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function instances_multiple_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var multiple_MultipleInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(MultipleInstance, _Instance);

  var _super = instances_multiple_createSuper(MultipleInstance);

  function MultipleInstance() {
    classCallCheck_default()(this, MultipleInstance);

    return _super.apply(this, arguments);
  }

  createClass_default()(MultipleInstance, [{
    key: "setUI",
    value: function setUI() {
      this.ui = new multiple(this);
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this = this;

      this.instances = [];
      this.activeInstance = null;
      this.lastIndex = 0;
      this.index = 0;
      this.schemas = [];
      this.switcherOptionValues = [];
      this.switcherOptionsLabels = [];
      this.on('set-value', function () {
        _this.onSetValue();
      });

      if (isSet(this.schema.anyOf()) || isSet(this.schema.oneOf())) {
        var schemasOf = isSet(this.schema.anyOf()) ? this.schema.anyOf() : this.schema.oneOf();
        var cloneSchema = this.schema.clone();
        delete cloneSchema['anyOf'];
        delete cloneSchema['oneOf'];
        delete cloneSchema['options'];
        schemasOf.forEach(function (schema, index) {
          var _schema$options, _schema$options2;

          schema = _objectSpread(_objectSpread({}, cloneSchema), schema); // merge allOf

          if (isSet(schema.allOf) && (_schema$options = schema.options) !== null && _schema$options !== void 0 && _schema$options.mergeAllOf) {
            var merged = {};
            schema.allOf.forEach(function (allOfSchema) {
              merged = utils_mergeDeep(merged, allOfSchema);
            });
            schema = merged;
          }

          if (isSet(cloneSchema.title)) {
            schema.title = cloneSchema.title;
          }

          var switcherOptionsLabel = ((_schema$options2 = schema.options) === null || _schema$options2 === void 0 ? void 0 : _schema$options2.switcherTitle) || 'Option-' + (index + 1);

          _this.switcherOptionValues.push(index);

          _this.switcherOptionsLabels.push(switcherOptionsLabel);

          _this.schemas.push(schema);
        });
      } else if (isArray(this.schema.type())) {
        this.schema.type().forEach(function (type, index) {
          var schemaClone = _this.schema.clone();

          var schema = _objectSpread(_objectSpread({}, schemaClone), {
            type: type,
            title: type[0].toUpperCase() + type.slice(1)
          });

          if (isSet(schemaClone.title)) {
            schema.title = schemaClone.title;
          }

          _this.switcherOptionValues.push(index);

          _this.switcherOptionsLabels.push(type.charAt(0).toUpperCase() + type.slice(1));

          _this.schemas.push(schema);
        });
      } else if (this.schema.typeIs('any') || !this.schema.type()) {
        var _schemaClone = this.schema.clone();

        this.schemas = [_objectSpread(_objectSpread({}, _schemaClone), {
          type: 'string'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'number'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'integer'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'boolean'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'array'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'object'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'null'
        })];
        this.schemas.forEach(function (schema, index) {
          _this.switcherOptionValues.push(index);
        });
        this.switcherOptionsLabels = ['String', 'Number', 'Integer', 'Boolean', 'Array', 'Object', 'Null'];
      } // Instances


      this.schemas.forEach(function (schema) {
        var instance = _this.jedi.createInstance({
          jedi: _this.jedi,
          schema: new src_schema(schema),
          path: _this.path,
          parent: _this.parent
        });

        instance.unregister();
        instance.on('change', function () {
          _this.emit('change');
        });

        _this.instances.push(instance);

        _this.register();
      });
      var schemaClone = this.schema.clone();
      var setValue = utils_isObject(schemaClone);

      if (isSet(this.instances[0])) {
        this.switchInstance(0, false, setValue);
      }
    }
  }, {
    key: "switchInstance",
    value: function switchInstance(newIndex) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var setValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.lastIndex = this.index;
      this.index = newIndex;
      this.activeInstance = this.instances[this.index];

      if (setValue) {
        this.setValue(this.getValue(), triggersChange);
      }
    }
  }, {
    key: "getFittestIndex",
    value: function getFittestIndex(value) {
      var index = 0;
      var fittestIndex;
      var championErrors;

      var _iterator = _createForOfIteratorHelper(this.instances),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var instance = _step.value;

          if (instance.instances) {
            instance.setValue(value);
          }

          var instanceErrors = this.jedi.validator.validate(value, instance.schema, instance.getKey(), instance.path);

          if (notSet(fittestIndex) || notSet(championErrors)) {
            fittestIndex = index;
            championErrors = instanceErrors;
          }

          if (instanceErrors.length < championErrors.length) {
            fittestIndex = index;
            championErrors = instanceErrors;
          }

          index++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return fittestIndex;
    }
  }, {
    key: "onSetValue",
    value: function onSetValue() {
      var value = this.value; // if value matches the active instance type set the value. Else switch to the first
      // instance that match the value.

      if (different(this.activeInstance.getValue(), value)) {
        var fittestIndex = this.getFittestIndex(value);
        this.switchInstance(fittestIndex);
      }

      this.activeInstance.setValue(value, true);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (!this.activeInstance) {
        return;
      }

      return this.activeInstance.getValue();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.instances.forEach(function (instance) {
        instance.destroy();
      });

      get_default()(getPrototypeOf_default()(MultipleInstance.prototype), "destroy", this).call(this);
    }
  }]);

  return MultipleInstance;
}(instances_instance);

/* harmony default export */ var instances_multiple = (multiple_MultipleInstance);
// CONCATENATED MODULE: ./src/editors/boolean.js






function boolean_createSuper(Derived) { var hasNativeReflectConstruct = boolean_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var boolean_BooleanEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(BooleanEditor, _Editor);

  var _super = boolean_createSuper(BooleanEditor);

  function BooleanEditor() {
    classCallCheck_default()(this, BooleanEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // checkbox container
      var checkboxContainer = this.theme.getCheckboxContainer(); // label

      var label = this.theme.getCheckboxLabel({
        "for": this.instance.path,
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }); // input

      this.input = this.theme.getCheckbox({
        id: this.instance.path
      }); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.checked);
      }); // description

      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      } // appends


      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(checkboxContainer);
      checkboxContainer.appendChild(this.input);
      checkboxContainer.appendChild(label);
      this.controlSlot.appendChild(this.messagesSlot);
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return Boolean(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.checked = this.instance.getValue();

      if (this.disabled) {
        this.input.setAttribute('disabled', 'disabled');
      } else {
        this.input.removeAttribute('disabled');
      }
    }
  }]);

  return BooleanEditor;
}(editors_editor);

/* harmony default export */ var editors_boolean = (boolean_BooleanEditor);
// CONCATENATED MODULE: ./src/editors/boolean-enum-radio.js






function boolean_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = boolean_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var boolean_enum_radio_BooleanEnumRadioEditor = /*#__PURE__*/function (_BooleanEditor) {
  inherits_default()(BooleanEnumRadioEditor, _BooleanEditor);

  var _super = boolean_enum_radio_createSuper(BooleanEnumRadioEditor);

  function BooleanEnumRadioEditor() {
    classCallCheck_default()(this, BooleanEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      this.optionValues = ['false', 'true'];
      this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues;
      this.radioInputs = []; // legend

      this.controlSlot.appendChild(this.theme.getRadioLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey()
      })); // radios

      this.optionValues.forEach(function (value, index) {
        // radio container
        var radioContainer = _this.theme.getRadioContainer(); // radio


        var radio = _this.theme.getRadio({
          value: value,
          id: _this.instance.path + '.' + index
        });

        radioContainer.appendChild(radio);
        radio.addEventListener('change', function () {
          var radioValue = radio.value === 'true';

          _this.instance.setValue(radioValue);
        });

        _this.radioInputs.push(radio); // label


        radioContainer.appendChild(_this.theme.getLabel({
          "for": _this.instance.path + '.' + index,
          textContent: _this.optionsLabels[index],
          srOnly: _this.instance.schema.option('hideTitle')
        }));

        _this.controlSlot.appendChild(radioContainer);
      });
      this.controlSlot.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot); // description

      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;

      this.radioInputs.forEach(function (radio) {
        var radioValue = radio.value === 'true';
        radio.checked = radioValue === _this2.instance.getValue();
        radio.disabled = _this2.disabled;
      });
    }
  }]);

  return BooleanEnumRadioEditor;
}(editors_boolean);

/* harmony default export */ var boolean_enum_radio = (boolean_enum_radio_BooleanEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/boolean-enum-select.js






function boolean_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = boolean_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var boolean_enum_select_BooleanEnumSelectEditor = /*#__PURE__*/function (_BooleanEditor) {
  inherits_default()(BooleanEnumSelectEditor, _BooleanEditor);

  var _super = boolean_enum_select_createSuper(BooleanEnumSelectEditor);

  function BooleanEnumSelectEditor() {
    classCallCheck_default()(this, BooleanEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      this.label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }); // input

      this.input = this.theme.getSelect({
        optionValues: ['false', 'true'],
        optionsLabels: this.instance.schema.option('enumTitles') || ['false', 'true'],
        id: this.instance.path
      });
      this.input.addEventListener('change', function () {
        var value = _this.input.value === 'true';

        _this.instance.setValue(value);
      }); // description

      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }

      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.label);
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.instance.getValue() === true ? 'true' : 'false';

      if (this.disabled) {
        this.input.setAttribute('disabled', 'disabled');
      } else {
        this.input.removeAttribute('disabled');
      }
    }
  }]);

  return BooleanEnumSelectEditor;
}(editors_boolean);

/* harmony default export */ var boolean_enum_select = (boolean_enum_select_BooleanEnumSelectEditor);
// CONCATENATED MODULE: ./src/instances/boolean.js






function instances_boolean_createSuper(Derived) { var hasNativeReflectConstruct = instances_boolean_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function instances_boolean_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var boolean_BooleanInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(BooleanInstance, _Instance);

  var _super = instances_boolean_createSuper(BooleanInstance);

  function BooleanInstance() {
    classCallCheck_default()(this, BooleanInstance);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanInstance, [{
    key: "setUI",
    value: function setUI() {
      if (this.schema.typeIs('boolean') && this.schema.formatIs('radio')) {
        this.ui = new boolean_enum_radio(this);
      } else if (this.schema.typeIs('boolean') && this.schema.formatIs('select')) {
        this.ui = new boolean_enum_select(this);
      } else if (this.schema.typeIs('boolean')) {
        this.ui = new editors_boolean(this);
      }
    }
  }]);

  return BooleanInstance;
}(instances_instance);

/* harmony default export */ var instances_boolean = (boolean_BooleanInstance);
// CONCATENATED MODULE: ./src/editors/object.js






function object_createSuper(Derived) { var hasNativeReflectConstruct = object_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function object_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var object_ObjectEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(ObjectEditor, _Editor);

  var _super = object_createSuper(ObjectEditor);

  function ObjectEditor() {
    classCallCheck_default()(this, ObjectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(ObjectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      this.fieldset = this.theme.getFieldset();
      this.legend = this.theme.getLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });
      this.dropdown = this.theme.getDropdown();
      this.dropdownToggle = this.theme.getDropdownToggle();
      this.dropdownMenu = this.theme.getDropdownMenu();
      this.addPropertyLabel = this.theme.getLabel({
        textContent: 'Property',
        "for": 'jedi-add-property-input-' + this.instance.path
      });
      this.addPropertyInput = this.theme.getInput({
        type: 'text',
        id: 'jedi-add-property-input-' + this.instance.path
      });
      this.addPropertyBtn = this.theme.getButton({
        textContent: 'Add property'
      });
      this.addPropertyBtn.addEventListener('click', function () {
        var key = _this.addPropertyInput.value;
        var propertyNameEmpty = key.length === 0;

        if (propertyNameEmpty) {
          return;
        }

        var propertyExist = isSet(_this.instance.value[key]);

        if (propertyExist) {
          return;
        }

        var schema = {
          type: 'any'
        };

        var additionalProperties = _this.instance.schema.additionalProperties();

        if (isSet(additionalProperties)) {
          schema = additionalProperties;
        }

        _this.instance.createChild(schema, key);

        _this.instance.setValue(_this.instance.value);

        _this.addPropertyInput.value = '';
      });
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.toolbarSlot);
      this.fieldset.appendChild(this.messagesSlot);
      this.fieldset.appendChild(this.actionsSlot);
      this.fieldset.appendChild(this.childrenSlot);
      this.container.appendChild(this.fieldset);

      if (isSet(this.instance.schema.description())) {
        this.fieldset.appendChild(this.description);
      }

      if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
        this.toolbarSlot.appendChild(this.dropdown);
        this.dropdown.appendChild(this.dropdownToggle);
        this.dropdown.appendChild(this.dropdownMenu);
        this.dropdownMenu.appendChild(this.addPropertyLabel);
        this.dropdownMenu.appendChild(this.addPropertyInput);
        this.dropdownMenu.appendChild(this.addPropertyBtn);
        this.dropdownMenu.appendChild(this.activatorsSlot);
      }
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      if (utils_isObject(value)) {
        return value;
      }

      return {};
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(message) {
      return this.theme.getAlert({
        message: message
      });
    }
  }, {
    key: "refreshActivators",
    value: function refreshActivators() {
      var _this2 = this;

      if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
        while (this.activatorsSlot.firstChild) {
          this.activatorsSlot.removeChild(this.activatorsSlot.lastChild);
        }

        this.instance.children.forEach(function (child) {
          var activatorId = child.path + '-activator';

          var activatorContainer = _this2.theme.getCheckboxContainer();

          var activatorLabel = _this2.theme.getCheckboxLabel({
            "for": activatorId,
            textContent: isSet(child.schema.title()) ? child.schema.title() : child.getKey()
          });

          var activatorInput = _this2.theme.getCheckbox({
            id: activatorId
          });

          activatorInput.checked = hasOwn(_this2.instance.getValue(), child.getKey());

          var isRequired = _this2.instance.isRequired(child.getKey());

          var isDependentRequired = _this2.instance.isDependentRequired(child.getKey());

          var disabled = _this2.disabled;
          activatorInput.disabled = isRequired || isDependentRequired || disabled;
          activatorInput.addEventListener('change', function () {
            if (activatorInput.checked) {
              child.activate();
            } else {
              child.deactivate();
            }
          }); // appends

          _this2.activatorsSlot.appendChild(activatorContainer);

          activatorContainer.appendChild(activatorInput);
          activatorContainer.appendChild(activatorLabel);
        });
      }
    }
  }, {
    key: "refreshEditors",
    value: function refreshEditors() {
      var _this3 = this;

      while (this.childrenSlot.firstChild) {
        this.childrenSlot.removeChild(this.childrenSlot.lastChild);
      }

      this.instance.children.forEach(function (child) {
        if (child.isActive) {
          _this3.childrenSlot.appendChild(child.ui.container);

          if (_this3.disabled) {
            child.ui.disable();
          } else {
            child.ui.enable();
          }
        }
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.refreshActivators();
      this.refreshEditors();

      if (this.disabled) {
        this.addPropertyBtn.setAttribute('disabled', 'disabled');
        this.addPropertyInput.setAttribute('disabled', 'disabled');
      } else {
        this.addPropertyBtn.removeAttribute('disabled');
        this.addPropertyInput.removeAttribute('disabled');
      }
    }
  }]);

  return ObjectEditor;
}(editors_editor);

/* harmony default export */ var editors_object = (object_ObjectEditor);
// CONCATENATED MODULE: ./src/instances/object.js






function instances_object_createSuper(Derived) { var hasNativeReflectConstruct = instances_object_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function instances_object_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var object_ObjectInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(ObjectInstance, _Instance);

  var _super = instances_object_createSuper(ObjectInstance);

  function ObjectInstance() {
    classCallCheck_default()(this, ObjectInstance);

    return _super.apply(this, arguments);
  }

  createClass_default()(ObjectInstance, [{
    key: "setUI",
    value: function setUI() {
      this.ui = new editors_object(this);
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this = this;

      if (isSet(this.schema.properties())) {
        Object.keys(this.schema.properties()).forEach(function (key) {
          var schema = _this.schema.properties()[key];

          _this.createChild(schema, key);
        });
      }

      this.refreshInstances();
      this.on('set-value', function () {
        _this.refreshInstances();
      });
    }
    /**
     * Returns true if the property is required
     */

  }, {
    key: "isRequired",
    value: function isRequired(property) {
      return isSet(this.schema.required()) && this.schema.required().includes(property);
    }
    /**
     * Returns true if the property is dependent required
     */

  }, {
    key: "isDependentRequired",
    value: function isDependentRequired(property) {
      var _this2 = this;

      var dependentRequired = this.schema.dependentRequired();

      if (isSet(dependentRequired)) {
        var missingProperties = [];
        Object.keys(dependentRequired).forEach(function (key) {
          if (isSet(_this2.value[key])) {
            var requiredProperties = dependentRequired[key];
            missingProperties = requiredProperties.filter(function (property) {
              return !hasOwn(_this2.value, property);
            });
          }
        });
        return missingProperties.includes(property);
      }

      return false;
    }
  }, {
    key: "createChild",
    value: function createChild(schema, key) {
      var instance = this.jedi.createInstance({
        jedi: this.jedi,
        schema: new src_schema(schema),
        path: this.path + '.' + key,
        parent: this
      });
      this.children.push(instance);
      this.value[key] = instance.getValue();
    }
  }, {
    key: "deleteChild",
    value: function deleteChild(key) {
      for (var i = this.children.length - 1; i >= 0; i--) {
        var instance = this.children[i];

        if (instance.getKey() === key) {
          instance.destroy();
          this.children.splice(i, 1);
          this.onChildChange();
        }
      }
    }
  }, {
    key: "getChild",
    value: function getChild(key) {
      return this.children.find(function (instance) {
        return key === instance.getKey().split('.').pop();
      });
    }
  }, {
    key: "onChildChange",
    value: function onChildChange() {
      var value = {};
      this.children.forEach(function (child) {
        if (child.isActive) {
          value[child.getKey()] = child.getValue();
        }
      });
      this.setValue(value);
    }
  }, {
    key: "hasProperty",
    value: function hasProperty(propertyName) {
      var properties = this.schema.properties();

      if (notSet(properties)) {
        return false;
      }

      return Object.keys(properties).includes(propertyName);
    }
  }, {
    key: "refreshInstances",
    value: function refreshInstances() {
      var _this3 = this;

      var value = this.getValue(); // remove any children that are not included in the value

      for (var i = this.children.length - 1; i >= 0; i--) {
        var instance = this.children[i];
        var key = instance.getKey();

        if (notSet(value[key])) {
          if (this.hasProperty(key)) {
            instance.deactivate();
          } else {
            this.deleteChild(key);
          }
        }
      }

      if (!utils_isObject(value)) {
        return;
      }

      Object.keys(value).forEach(function (key) {
        var child = _this3.getChild(key); // If a value has a already a child instance


        if (child) {
          var oldValue = child.getValue();
          var newValue = value[child.getKey()]; // update child value if the old value and the new value are different

          if (different(oldValue, newValue)) {
            child.setValue(newValue, false);
          }
        } else {
          // create new child instance for the new value entry having the value as default
          var initialValue = value[key];
          var type = getType(initialValue);
          var schema = {
            type: type,
            "default": initialValue
          };

          _this3.createChild(schema, key);
        }
      });
    }
  }]);

  return ObjectInstance;
}(instances_instance);

/* harmony default export */ var instances_object = (object_ObjectInstance);
// CONCATENATED MODULE: ./src/editors/array.js






function array_createSuper(Derived) { var hasNativeReflectConstruct = array_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function array_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* global confirm */



var array_ArrayEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(ArrayEditor, _Editor);

  var _super = array_createSuper(ArrayEditor);

  function ArrayEditor() {
    classCallCheck_default()(this, ArrayEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(ArrayEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      this.fieldset = this.theme.getFieldset(); // title

      this.fieldset.appendChild(this.theme.getLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // description

      if (isSet(this.instance.schema.description())) {
        this.fieldset.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }

      this.fieldset.appendChild(this.messagesSlot);
      this.fieldset.appendChild(this.childrenSlot);
      this.fieldset.appendChild(this.actionsSlot);
      this.container.appendChild(this.fieldset); // btn group

      var btnGroup = this.theme.getBtnGroup(); // addBtn

      this.addBtn = this.theme.getButton({
        textContent: 'Add item'
      });
      this.addBtn.addEventListener('click', function () {
        _this.instance.addItem();
      }); // deleteAll

      this.deleteAllBtn = this.theme.getButton({
        textContent: 'Delete items'
      });
      this.deleteAllBtn.addEventListener('click', function () {
        if (confirm('Confirm to delete all')) {
          _this.instance.setValue([]);
        }
      });
      this.actionsSlot.appendChild(btnGroup);
      btnGroup.appendChild(this.addBtn);
      btnGroup.appendChild(this.deleteAllBtn);
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(message) {
      return this.theme.getAlert({
        message: message
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      if (isArray(value)) {
        return value;
      }

      return [];
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;

      this.instance.children.forEach(function (child) {
        _this2.childrenSlot.appendChild(child.ui.container);

        child.ui.controlSlot.appendChild(child.ui.actionsSlot);

        while (child.ui.actionsSlot.firstChild) {
          child.ui.actionsSlot.removeChild(child.ui.actionsSlot.lastChild);
        }

        var btnGroup = _this2.theme.getBtnGroup();

        var itemIndex = Number(child.getKey()); // delete

        var deleteBtn = _this2.theme.getButton({
          textContent: 'Delete item'
        });

        deleteBtn.addEventListener('click', function () {
          var itemIndex = Number(child.path.split('.').pop());

          _this2.instance.deleteItem(itemIndex);
        });
        btnGroup.appendChild(deleteBtn); // move up

        if (_this2.instance.children.length !== 0) {
          var moveUpBtn = _this2.theme.getButton({
            textContent: 'Move up'
          });

          moveUpBtn.addEventListener('click', function () {
            var toIndex = itemIndex - 1;

            _this2.instance.move(itemIndex, toIndex);
          });
          btnGroup.appendChild(moveUpBtn);
        } // move down


        if (_this2.instance.getValue().length - 1 !== itemIndex) {
          var moveDownBtn = _this2.theme.getButton({
            textContent: 'Move down'
          });

          moveDownBtn.addEventListener('click', function () {
            var toIndex = itemIndex + 1;

            _this2.instance.move(itemIndex, toIndex);
          });
          btnGroup.appendChild(moveDownBtn);
        }

        child.ui.actionsSlot.appendChild(btnGroup);

        var buttons = _this2.container.querySelectorAll('button');

        if (_this2.disabled) {
          child.ui.disable();
          buttons.forEach(function (button) {
            button.setAttribute('disabled', 'disabled');
          });
        } else {
          child.ui.enable();
          buttons.forEach(function (button) {
            button.removeAttribute('disabled');
          });
        }
      });
    }
  }]);

  return ArrayEditor;
}(editors_editor);

/* harmony default export */ var editors_array = (array_ArrayEditor);
// CONCATENATED MODULE: ./src/instances/array.js






function instances_array_createSuper(Derived) { var hasNativeReflectConstruct = instances_array_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function instances_array_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var array_ArrayInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(ArrayInstance, _Instance);

  var _super = instances_array_createSuper(ArrayInstance);

  function ArrayInstance() {
    classCallCheck_default()(this, ArrayInstance);

    return _super.apply(this, arguments);
  }

  createClass_default()(ArrayInstance, [{
    key: "setUI",
    value: function setUI() {
      this.ui = new editors_array(this);
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this = this;

      this.refreshChildren();
      this.on('set-value', function () {
        _this.refreshChildren();
      });
    }
  }, {
    key: "createItemInstance",
    value: function createItemInstance(value) {
      var schema = isSet(this.schema.items()) ? this.schema.items() : {
        type: getType(value)
      };
      var child = this.jedi.createInstance({
        jedi: this.jedi,
        schema: new src_schema(schema),
        path: this.path + '.' + this.children.length,
        parent: this
      });

      if (isSet(value)) {
        child.setValue(value, false);
      }

      return child;
    }
  }, {
    key: "move",
    value: function move(fromIndex, toIndex) {
      var value = clone(this.getValue());
      var item = value[fromIndex];
      value.splice(fromIndex, 1);
      value.splice(toIndex, 0, item);
      this.setValue(value);
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var tempEditor = this.createItemInstance();
      var value = clone(this.getValue());
      value.push(tempEditor.getValue());
      tempEditor.destroy();
      this.setValue(value);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(itemIndex) {
      var currentValue = clone(this.getValue());
      var newValue = currentValue.filter(function (item, index) {
        return index !== itemIndex;
      });
      this.setValue(newValue);
    }
  }, {
    key: "onChildChange",
    value: function onChildChange() {
      var value = [];
      this.children.forEach(function (child) {
        value.push(child.getValue());
      });
      this.setValue(value);
    }
  }, {
    key: "refreshChildren",
    value: function refreshChildren() {
      var _this2 = this;

      this.children.forEach(function (child) {
        child.destroy();
      });
      this.children = [];
      var value = this.getValue();

      if (!isArray(value)) {
        return;
      }

      value.forEach(function (itemValue) {
        var child = _this2.createItemInstance(itemValue);

        _this2.children.push(child);
      });
    }
  }]);

  return ArrayInstance;
}(instances_instance);

/* harmony default export */ var instances_array = (array_ArrayInstance);
// CONCATENATED MODULE: ./src/editors/string.js






function string_createSuper(Derived) { var hasNativeReflectConstruct = string_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var string_StringEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(StringEditor, _Editor);

  var _super = string_createSuper(StringEditor);

  function StringEditor() {
    classCallCheck_default()(this, StringEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }); // input
      // todo file, range should be handled differently

      var inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week'];

      if (this.instance.schema.formatIs('textarea')) {
        this.input = this.theme.getTextarea({
          id: this.instance.path
        });
      } else {
        this.input = this.theme.getInput({
          type: inputTypes.includes(this.instance.schema.format()) ? this.instance.schema.format() : 'text',
          id: this.instance.path
        });
      } // events


      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // fix color picker bug

      if (this.instance.schema.formatIs('color') && this.instance.value.length === 0) {
        this.instance.setValue('#000000', false);
      }

      this.container.appendChild(this.controlSlot);

      if (!this.instance.schema.formatIs('hidden')) {
        this.controlSlot.appendChild(label);
      }

      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot); // description

      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return String(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.instance.getValue();

      if (this.disabled) {
        this.input.setAttribute('disabled', 'disabled');
      } else {
        this.input.removeAttribute('disabled');
      }
    }
  }]);

  return StringEditor;
}(editors_editor);

/* harmony default export */ var editors_string = (string_StringEditor);
// CONCATENATED MODULE: ./src/editors/string-enum-radio.js






function string_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = string_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var string_enum_radio_StringEnumRadioEditor = /*#__PURE__*/function (_StringEditor) {
  inherits_default()(StringEnumRadioEditor, _StringEditor);

  var _super = string_enum_radio_createSuper(StringEnumRadioEditor);

  function StringEnumRadioEditor() {
    classCallCheck_default()(this, StringEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      this.optionValues = this.instance.schema["enum"]();
      this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues;
      this.radioInputs = []; // legend

      this.controlSlot.appendChild(this.theme.getRadioLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey()
      })); // radios

      this.optionValues.forEach(function (value, index) {
        // radio container
        var radioContainer = _this.theme.getRadioContainer(); // radio


        var radio = _this.theme.getRadio({
          value: value,
          id: _this.instance.path + '.' + index
        });

        radioContainer.appendChild(radio);
        radio.addEventListener('change', function () {
          _this.instance.setValue(radio.value);
        });

        _this.radioInputs.push(radio); // label


        radioContainer.appendChild(_this.theme.getLabel({
          "for": _this.instance.path + '.' + index,
          textContent: _this.optionsLabels[index],
          srOnly: _this.instance.schema.option('hideTitle')
        }));

        _this.controlSlot.appendChild(radioContainer);
      });
      this.controlSlot.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot); // description

      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;

      this.radioInputs.forEach(function (radio) {
        radio.checked = radio.value === _this2.instance.getValue();
        radio.disabled = _this2.disabled;
      });
    }
  }]);

  return StringEnumRadioEditor;
}(editors_string);

/* harmony default export */ var string_enum_radio = (string_enum_radio_StringEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/string-enum-select.js






function string_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = string_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var string_enum_select_StringEnumSelectEditor = /*#__PURE__*/function (_StringEditor) {
  inherits_default()(StringEnumSelectEditor, _StringEditor);

  var _super = string_enum_select_createSuper(StringEnumSelectEditor);

  function StringEnumSelectEditor() {
    classCallCheck_default()(this, StringEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      this.optionValues = this.instance.schema["enum"]();
      this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues; // label

      var label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }); // input

      this.input = this.theme.getSelect({
        optionValues: this.optionValues,
        optionsLabels: this.optionsLabels,
        id: this.instance.path
      });
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // description

      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
    }
  }]);

  return StringEnumSelectEditor;
}(editors_string);

/* harmony default export */ var string_enum_select = (string_enum_select_StringEnumSelectEditor);
// CONCATENATED MODULE: ./src/instances/string.js






function instances_string_createSuper(Derived) { var hasNativeReflectConstruct = instances_string_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function instances_string_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var string_StringInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(StringInstance, _Instance);

  var _super = instances_string_createSuper(StringInstance);

  function StringInstance() {
    classCallCheck_default()(this, StringInstance);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringInstance, [{
    key: "setUI",
    value: function setUI() {
      if (this.schema.typeIs('string') && isSet(this.schema["enum"]()) && this.schema.formatIs('radio')) {
        this.ui = new string_enum_radio(this);
      } else if (this.schema.typeIs('string') && isSet(this.schema["enum"]())) {
        this.ui = new string_enum_select(this);
      } else if (this.schema.typeIs('string')) {
        this.ui = new editors_string(this);
      }
    }
  }]);

  return StringInstance;
}(instances_instance);

/* harmony default export */ var instances_string = (string_StringInstance);
// CONCATENATED MODULE: ./src/editors/number.js






function number_createSuper(Derived) { var hasNativeReflectConstruct = number_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var number_NumberEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(NumberEditor, _Editor);

  var _super = number_createSuper(NumberEditor);

  function NumberEditor() {
    classCallCheck_default()(this, NumberEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }); // input

      this.input = this.theme.getInput({
        type: 'number',
        id: this.instance.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        var value = _this.sanitize(_this.input.value);

        _this.instance.setValue(value);
      }); // description

      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }

      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot);
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      if (this.instance.schema.typeIs('integer')) {
        return Math.floor(Number(value));
      } else {
        return Number(value);
      }
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var value = this.instance.getValue();

      if (isNumber(value)) {
        this.input.value = this.instance.getValue();
      }

      if (this.disabled) {
        this.input.setAttribute('disabled', 'disabled');
      } else {
        this.input.removeAttribute('disabled');
      }
    }
  }]);

  return NumberEditor;
}(editors_editor);

/* harmony default export */ var editors_number = (number_NumberEditor);
// CONCATENATED MODULE: ./src/editors/number-enum-radio.js






function number_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = number_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var number_enum_radio_NumberEnumRadioEditor = /*#__PURE__*/function (_NumberEditor) {
  inherits_default()(NumberEnumRadioEditor, _NumberEditor);

  var _super = number_enum_radio_createSuper(NumberEnumRadioEditor);

  function NumberEnumRadioEditor() {
    classCallCheck_default()(this, NumberEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      this.optionValues = this.instance.schema["enum"]();
      this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues;
      this.radioInputs = []; // legend

      this.controlSlot.appendChild(this.theme.getRadioLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey()
      })); // radios

      this.optionValues.forEach(function (value, index) {
        // radio container
        var radioContainer = _this.theme.getRadioContainer(); // radio


        var radio = _this.theme.getRadio({
          value: value,
          id: _this.instance.path + '.' + index
        });

        radioContainer.appendChild(radio);
        radio.addEventListener('change', function () {
          _this.instance.setValue(radio.value);
        });

        _this.radioInputs.push(radio); // label


        radioContainer.appendChild(_this.theme.getLabel({
          "for": _this.instance.path + '.' + index,
          textContent: _this.optionsLabels[index],
          srOnly: _this.instance.schema.option('hideTitle')
        }));

        _this.controlSlot.appendChild(radioContainer);
      });
      this.controlSlot.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot); // description

      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;

      this.radioInputs.forEach(function (radio) {
        radio.checked = Number(radio.value) === Number(_this2.instance.getValue());
        radio.disabled = _this2.disabled;
      });
    }
  }]);

  return NumberEnumRadioEditor;
}(editors_number);

/* harmony default export */ var number_enum_radio = (number_enum_radio_NumberEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/number-enum-select.js






function number_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = number_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var number_enum_select_NumberEnumSelectEditor = /*#__PURE__*/function (_NumberEditor) {
  inherits_default()(NumberEnumSelectEditor, _NumberEditor);

  var _super = number_enum_select_createSuper(NumberEnumSelectEditor);

  function NumberEnumSelectEditor() {
    classCallCheck_default()(this, NumberEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      this.optionValues = this.instance.schema["enum"]();
      this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues;
      var label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }); // input

      this.input = this.theme.getSelect({
        optionValues: this.optionValues,
        optionsLabels: this.optionsLabels,
        id: this.instance.path
      }); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // description

      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }

      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot);
    }
  }]);

  return NumberEnumSelectEditor;
}(editors_number);

/* harmony default export */ var number_enum_select = (number_enum_select_NumberEnumSelectEditor);
// CONCATENATED MODULE: ./src/instances/number.js






function instances_number_createSuper(Derived) { var hasNativeReflectConstruct = instances_number_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function instances_number_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var number_NumberInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(NumberInstance, _Instance);

  var _super = instances_number_createSuper(NumberInstance);

  function NumberInstance() {
    classCallCheck_default()(this, NumberInstance);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberInstance, [{
    key: "setUI",
    value: function setUI() {
      if (this.schema.typeIsNumeric() && isSet(this.schema["enum"]()) && this.schema.formatIs('radio')) {
        this.ui = new number_enum_radio(this);
      } else if (this.schema.typeIsNumeric() && isSet(this.schema["enum"]())) {
        this.ui = new number_enum_select(this);
      } else if (this.schema.typeIsNumeric()) {
        this.ui = new editors_number(this);
      }
    }
  }]);

  return NumberInstance;
}(instances_instance);

/* harmony default export */ var instances_number = (number_NumberInstance);
// CONCATENATED MODULE: ./src/editors/null.js






function null_createSuper(Derived) { var hasNativeReflectConstruct = null_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function null_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var null_NullEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(NullEditor, _Editor);

  var _super = null_createSuper(NullEditor);

  function NullEditor() {
    classCallCheck_default()(this, NullEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NullEditor, [{
    key: "build",
    value: function build() {
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot); // description

      if (isSet(this.instance.schema.description())) {
        this.container.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return null;
    }
  }]);

  return NullEditor;
}(editors_editor);

/* harmony default export */ var editors_null = (null_NullEditor);
// CONCATENATED MODULE: ./src/instances/null.js






function instances_null_createSuper(Derived) { var hasNativeReflectConstruct = instances_null_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function instances_null_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var null_NullInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(NullInstance, _Instance);

  var _super = instances_null_createSuper(NullInstance);

  function NullInstance() {
    classCallCheck_default()(this, NullInstance);

    return _super.apply(this, arguments);
  }

  createClass_default()(NullInstance, [{
    key: "setUI",
    value: function setUI() {
      this.ui = new editors_null(this);
    }
  }]);

  return NullInstance;
}(instances_instance);

/* harmony default export */ var instances_null = (null_NullInstance);
// CONCATENATED MODULE: ./src/jedi.js







function jedi_createSuper(Derived) { var hasNativeReflectConstruct = jedi_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function jedi_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var jedi_Jedi = /*#__PURE__*/function (_EventEmitter) {
  inherits_default()(Jedi, _EventEmitter);

  var _super = jedi_createSuper(Jedi);

  function Jedi(options) {
    var _this;

    classCallCheck_default()(this, Jedi);

    _this = _super.call(this);
    _this.options = Object.assign({
      container: null,
      isEditor: false,
      editableProperties: false,
      alwaysShowErrors: false,
      showRequiredOnly: false,
      schema: {},
      theme: 'wireframe',
      rootName: 'root'
    }, options);
    _this.instances = {};
    _this.root = null;
    _this.theme = null;
    _this.validator = null;
    _this.schema = null;

    _this.init();

    return _this;
  }

  createClass_default()(Jedi, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.validator = new validation_validator();
      this.schema = new src_schema(this.options.schema);
      this.root = this.createInstance({
        jedi: this,
        schema: this.schema
      });

      if (isSet(this.options.startValue)) {
        this.root.setValue(this.options.startValue);
      }

      if (this.options.isEditor && this.options.container) {
        this.container = this.options.container;
        this.appendHiddenInput();
        this.container.appendChild(this.root.ui.container);
        this.container.classList.add('jedi-ready');
      }

      this.root.on('change', function () {
        _this2.emit('change');
      });
    }
    /**
     * Appends a hidden input to the root container who's value will be the value
     * of the root instance.
     */

  }, {
    key: "appendHiddenInput",
    value: function appendHiddenInput() {
      var _this3 = this;

      this.hiddenInput = this.root.ui.theme.getInput({
        type: 'hidden',
        id: 'jedi-hidden-input'
      });
      this.hiddenInput.setAttribute('name', 'json');
      this.container.appendChild(this.hiddenInput);
      this.hiddenInput.value = JSON.stringify(this.getValue());
      this.on('change', function () {
        _this3.hiddenInput.value = JSON.stringify(_this3.getValue());
      });
    }
    /**
     * Adds a child instance pointer to the instances list
     */

  }, {
    key: "register",
    value: function register(instance) {
      this.instances[instance.path] = instance;
    }
    /**
     * Deletes a child instance pointer from the instances list
     */

  }, {
    key: "unregister",
    value: function unregister(instance) {
      this.instances[instance.path] = null;
      delete this.instances[instance.path];
    }
    /**
     * Creates an json instance
     */

  }, {
    key: "createInstance",
    value: function createInstance(config) {
      var instance;

      if (config.schema.typeIs('boolean')) {
        instance = new instances_boolean(config);
      }

      if (config.schema.typeIs('object')) {
        instance = new instances_object(config);
      }

      if (config.schema.typeIs('array')) {
        instance = new instances_array(config);
      }

      if (config.schema.typeIs('string')) {
        instance = new instances_string(config);
      }

      if (config.schema.typeIsNumeric()) {
        instance = new instances_number(config);
      }

      if (config.schema.typeIs('null')) {
        instance = new instances_null(config);
      }

      if (isSet(config.schema.anyOf()) || isSet(config.schema.oneOf()) || config.schema.typeIs('any') || isArray(config.schema.type()) || notSet(config.schema.type())) {
        if (notSet(config.schema.type()) && isSet(config.schema["default"]())) {
          var originalSchema = config.schema.clone();
          originalSchema.type = getType(config.schema["default"]());
          config.schema = new src_schema(originalSchema);
          return this.createInstance(config);
        } else {
          instance = new instances_multiple(config);
        }
      }

      if (isSet(instance)) {
        return instance;
      }
    }
    /**
     * Returns the value of the root instance
     * @return {*}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.root.getValue();
    }
    /**
     * Sets the value of the root instance
     * @return {*}
     */

  }, {
    key: "setValue",
    value: function setValue() {
      var _this$root;

      return (_this$root = this.root).setValue.apply(_this$root, arguments);
    }
    /**
     * Returns a instance by path
     * @return {*}
     */

  }, {
    key: "getInstance",
    value: function getInstance(path) {
      return this.instances[path];
    }
    /**
     * Disables the root instance and it's children user interfaces
     */

  }, {
    key: "disable",
    value: function disable() {
      this.root.ui.disable();
    }
    /**
     * Enables the root instance and it's children user interfaces
     */

  }, {
    key: "enable",
    value: function enable() {
      this.root.ui.enable();
    }
    /**
     * Returns an array of validation error messages
     */

  }, {
    key: "validate",
    value: function validate() {
      var _this4 = this;

      var errors = [];
      Object.keys(this.instances).forEach(function (key) {
        var editor = _this4.instances[key];
        errors = [].concat(toConsumableArray_default()(errors), toConsumableArray_default()(editor.validate()));
      });
      return errors;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.options.startValue = this.getValue();

      if (this.options.isEditor) {
        this.container.innerHTML = '';
      }

      this.root.destroy();
      this.init();
    }
  }, {
    key: "setTheme",
    value: function setTheme(theme) {
      this.options.theme = theme;
      this.reset();
    }
    /**
     * Destroy the root instance and it'S children
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      this.root.destroy();

      if (this.options.isEditor) {
        this.container.innerHTML = '';
      }

      Object.keys(this).forEach(function (key) {
        delete _this5[key];
      });
    }
  }]);

  return Jedi;
}(event_emitter);

/* harmony default export */ var jedi = (jedi_Jedi);
// CONCATENATED MODULE: ./src/ref-parser.js



/* global XMLHttpRequest */


var ref_parser_RefParser = /*#__PURE__*/function () {
  function RefParser(options) {
    classCallCheck_default()(this, RefParser);

    if (notSet(options)) {
      options = {};
    }

    this.iterations = options.iterations || 5;
    this.XMLHttpRequest = options.XMLHttpRequest || XMLHttpRequest;
    this.defs = {};
  }

  createClass_default()(RefParser, [{
    key: "dereference",
    value: function dereference(schema) {
      this.defs = schema['$defs'];

      for (var i = 0; i < this.iterations; i++) {
        this.traverse(schema);
      }

      return schema;
    }
  }, {
    key: "define",
    value: function define(ref) {
      if (!isString(ref)) {
        return ref;
      }

      if (ref.startsWith('#/$defs')) {
        var refParts = ref.split('/');
        var defName = refParts.pop();

        if (isSet(this.defs[defName])) {
          return this.defs[defName];
        }
      }

      if (ref.startsWith('http') || ref.startsWith('https')) {
        var request = new this.XMLHttpRequest();
        request.open('GET', ref, false); // `false` makes the request synchronous

        request.send(null);

        if (request.status === 200) {
          return JSON.parse(request.responseText);
        } else {
          console.error('can not load', ref);
        }
      }

      return ref;
    }
  }, {
    key: "traverse",
    value: function traverse(value, thing, index) {
      var _this = this;

      if (utils_isObject(value)) {
        if (isSet(value['$ref']) && isSet(thing)) {
          thing[index] = this.define(value['$ref']);
        } else {
          fakeForEach(Object.keys(value), function (item) {
            _this.traverse(value[item], value, item);
          });
        }
      }

      if (isArray(value)) {
        fakeForEach(value, function (item, index) {
          _this.traverse(item, value, index);
        });
      }
    }
  }]);

  return RefParser;
}();

/* harmony default export */ var ref_parser = (ref_parser_RefParser);
// CONCATENATED MODULE: ./src/index.js


var SchemaTools = {
  Jedi: jedi,
  RefParser: ref_parser
};
/* harmony default export */ var src = __webpack_exports__["default"] = (SchemaTools);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TY2hlbWFUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0uanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heEl0ZW1zLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbmltdW0uanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tdWx0aXBsZU9mLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3R5cGUuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvdGhlbWVzL3dpcmVmcmFtZS5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy9lZGl0b3JzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vU2NoZW1hVG9vbHMvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9TY2hlbWFUb29scy8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL1NjaGVtYVRvb2xzLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmYWtlRm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJpbmRleCIsImxlbmd0aCIsImhhc093biIsIm9iaiIsImtleSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInByZXR0eSIsInZhbHVlIiwicm91bmQyZGVjaW1hbHMiLCJudW1iZXIiLCJNYXRoIiwicm91bmQiLCJzb3J0T2JqZWN0Iiwia2V5cyIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJlcXVhbCIsImEiLCJiIiwiaXNPYmplY3QiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJpc1NldCIsIm5vdFNldCIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsImdldFR5cGUiLCJ0eXBlIiwibWVyZ2VEZWVwIiwidGFyZ2V0Iiwic291cmNlcyIsInNvdXJjZSIsInNoaWZ0IiwiZm9yRWFjaCIsImFzc2lnbiIsIlNjaGVtYSIsInNjaGVtYSIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYWxsT2YiLCJ1bmRlZmluZWQiLCJhbnlPZiIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsIml0ZW1zIiwibWF4aW11bSIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90Iiwib3B0aW9uIiwib3B0aW9ucyIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZWFkT25seSIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIl9hbGxPZiIsInZhbGlkYXRvciIsInBhdGgiLCJlcnJvcnMiLCJzdWJTY2hlbWFFZGl0b3IiLCJTY2hlbWFUb29scyIsIkplZGkiLCJzdGFydFZhbHVlIiwicm9vdE5hbWUiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZGF0ZSIsImRlc3Ryb3kiLCJfbWluTGVuZ3RoIiwicmVwbGFjZSIsImludmFsaWQiLCJwdXNoIiwibWVzc2FnZSIsIl9jb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiX2FueU9mIiwidmFsaWQiLCJhbnlPZkVkaXRvciIsImFueU9mRXJyb3JzIiwiX2RlcGVuZGVudFJlcXVpcmVkIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsImpvaW4iLCJfZW51bSIsInNvbWUiLCJlIiwiX2V4Y2x1c2l2ZU1heGltdW0iLCJfZXhjbHVzaXZlTWluaW11bSIsIl9mb3JtYXQiLCJmb3JtYXRJcyIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJfaWYiLCJpZkVkaXRvciIsImlmRXJyb3JzIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsIl9tYXhJdGVtcyIsIl9tYXhMZW5ndGgiLCJfbWF4UHJvcGVydGllcyIsInByb3BlcnRpZXNDb3VudCIsIl9taW5pbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiX21pbkl0ZW1zIiwiX21pblByb3BlcnRpZXMiLCJfbXVsdGlwbGVPZiIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJfbm90Iiwibm90RXJyb3JzIiwiX29uZU9mIiwiY291bnRlciIsIm9uZU9mRWRpdG9yIiwib25lT2ZFcnJvcnMiLCJfcGF0dGVybiIsIl9wYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnR5TmFtZSIsImVkaXRvciIsImVkaXRvckVycm9ycyIsIm1hcCIsImVycm9yIiwiX3JlcXVpcmVkIiwiX3R5cGUiLCJ0eXBlcyIsInN0cmluZyIsImludGVnZXIiLCJvYmplY3QiLCJfbWF4aW11bSIsImNvbXB1dGVkTWF4aW11bSIsIl91bmlxdWVJdGVtcyIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJpIiwiaXRlbSIsIl9hZGRpdGlvbmFsUHJvcGVydGllcyIsImRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIlZhbGlkYXRvciIsImRyYWZ0Iiwic2NoZW1hRXJyb3JzIiwic2NoZW1hQ2xvbmUiLCJ2YWxpZGF0b3JFcnJvcnMiLCJFdmVudEVtaXR0ZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwibGlzdGVuZXIiLCJJbnN0YW5jZSIsImNvbmZpZyIsImplZGkiLCJpc0FjdGl2ZSIsInBhcmVudCIsImNoaWxkcmVuIiwidWkiLCJpbml0IiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJwcmVwYXJlIiwic2V0RGVmYXVsdFZhbHVlIiwiaXNFZGl0b3IiLCJzZXRVSSIsIm9uIiwib25DaGlsZENoYW5nZSIsInNwbGl0IiwicG9wIiwidW5yZWdpc3RlciIsImRlZmF1bHRFcnJvcnMiLCJnZXRLZXkiLCJ2YWxpZERlZmF1bHQiLCJzZXRWYWx1ZSIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJlbWl0IiwiZ2V0VmFsdWUiLCJjaGlsZCIsIlRoZW1lQmFyZWJvbmVzIiwiYWxlcnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImludmFsaWRGZWVkYmFjayIsImh0bWwiLCJzZXRBdHRyaWJ1dGUiLCJhY3RpdmF0b3JzU2xvdCIsImFjdGlvbnNTbG90cyIsImNoaWxkcmVuU2xvdCIsImJ1dHRvbiIsImNvbnRhaW5lciIsIm1lc3NhZ2VzU2xvdCIsImNvbnRyb2xTbG90IiwiY2hlY2tib3hMYWJlbCIsInNyT25seSIsInJhZGlvTGVnZW5kIiwicmFkaW9MYWJlbCIsImxhYmVsIiwibGVnZW5kIiwiaW5wdXQiLCJpZCIsImNoZWNrYm94IiwicmFkaW8iLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvblZhbHVlcyIsIm9wdGlvbnNMYWJlbHMiLCJhcHBlbmRDaGlsZCIsIlRoZW1lV2lyZWZyYW1lIiwiYnRuR3JvdXAiLCJmaWVsZHNldCIsInJhZGlvQ29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA0IiwiY2hlY2tib3hDb250YWluZXIiLCJUaGVtZUJvb3RzdHJhcDUiLCJFZGl0b3IiLCJpbnN0YW5jZSIsInRoZW1lIiwiYWN0aW9uc1Nsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsImdldENvbnRhaW5lciIsInRvb2xiYXJTbG90IiwiZ2V0VG9vbGJhclNsb3QiLCJnZXRBY3RpdmF0b3JzU2xvdCIsImdldENvbnRyb2xTbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJpbm5lckhUTUwiLCJnZXRJbnZhbGlkRmVlZGJhY2siLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJNdWx0aXBsZUVkaXRvciIsInN3aXRjaGVyQnV0dG9ucyIsInN3aXRjaGVyIiwiZ2V0QnRuR3JvdXAiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsImdldEJ1dHRvbiIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJOdW1iZXIiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc2FibGUiLCJlbmFibGUiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsInJlbW92ZSIsImdldEFsZXJ0IiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJtZXJnZUFsbE9mIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwiY3JlYXRlSW5zdGFuY2UiLCJuZXdJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiaW5zdGFuY2VFcnJvcnMiLCJnZXRGaXR0ZXN0SW5kZXgiLCJCb29sZWFuRWRpdG9yIiwiZ2V0Q2hlY2tib3hDb250YWluZXIiLCJnZXRDaGVja2JveExhYmVsIiwiZ2V0Q2hlY2tib3giLCJjaGVja2VkIiwiZ2V0RGVzY3JpcHRpb24iLCJCb29sZWFuIiwicmVtb3ZlQXR0cmlidXRlIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsInJhZGlvSW5wdXRzIiwiZ2V0UmFkaW9MZWdlbmQiLCJnZXRSYWRpb0NvbnRhaW5lciIsImdldFJhZGlvIiwicmFkaW9WYWx1ZSIsImdldExhYmVsIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3QiLCJCb29sZWFuSW5zdGFuY2UiLCJPYmplY3RFZGl0b3IiLCJnZXRGaWVsZHNldCIsImdldExlZ2VuZCIsImRyb3Bkb3duIiwiZ2V0RHJvcGRvd24iLCJkcm9wZG93blRvZ2dsZSIsImdldERyb3Bkb3duVG9nZ2xlIiwiZHJvcGRvd25NZW51IiwiZ2V0RHJvcGRvd25NZW51IiwiYWRkUHJvcGVydHlMYWJlbCIsImFkZFByb3BlcnR5SW5wdXQiLCJnZXRJbnB1dCIsImFkZFByb3BlcnR5QnRuIiwicHJvcGVydHlOYW1lRW1wdHkiLCJwcm9wZXJ0eUV4aXN0IiwiY3JlYXRlQ2hpbGQiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiYWN0aXZhdG9ySWQiLCJhY3RpdmF0b3JDb250YWluZXIiLCJhY3RpdmF0b3JMYWJlbCIsImFjdGl2YXRvcklucHV0IiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJyZWZyZXNoQWN0aXZhdG9ycyIsInJlZnJlc2hFZGl0b3JzIiwiT2JqZWN0SW5zdGFuY2UiLCJyZWZyZXNoSW5zdGFuY2VzIiwic3BsaWNlIiwiZmluZCIsImhhc1Byb3BlcnR5IiwiZGVsZXRlQ2hpbGQiLCJnZXRDaGlsZCIsIm9sZFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiQXJyYXlFZGl0b3IiLCJhZGRCdG4iLCJhZGRJdGVtIiwiZGVsZXRlQWxsQnRuIiwiY29uZmlybSIsIml0ZW1JbmRleCIsImRlbGV0ZUJ0biIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiQXJyYXlJbnN0YW5jZSIsInJlZnJlc2hDaGlsZHJlbiIsImZyb21JbmRleCIsInRlbXBFZGl0b3IiLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJjdXJyZW50VmFsdWUiLCJpdGVtVmFsdWUiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWEiLCJTdHJpbmciLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiU3RyaW5nSW5zdGFuY2UiLCJOdW1iZXJFZGl0b3IiLCJzYW5pdGl6ZSIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJOdWxsRWRpdG9yIiwiTnVsbEluc3RhbmNlIiwic2hvd1JlcXVpcmVkT25seSIsInJvb3QiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbklucHV0Iiwib3JpZ2luYWxTY2hlbWEiLCJhcmd1bWVudHMiLCJyZXNldCIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJYTUxIdHRwUmVxdWVzdCIsImRlZnMiLCJ0cmF2ZXJzZSIsInJlZiIsInN0YXJ0c1dpdGgiLCJyZWZQYXJ0cyIsImRlZk5hbWUiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJjb25zb2xlIiwiZGVmaW5lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIs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LENBQUNoQixLQUFLLENBQUMsTUFBRCxDQUFOLENBQUwsSUFBd0JnQixLQUFLLENBQUNqQyxLQUFELENBQWpDLEVBQTBDO1VBQ3hDQSxLQUFLLENBQUNPLEtBQUQsQ0FBTCxHQUFlLEtBQUtnYSxNQUFMLENBQVl0WixLQUFLLENBQUMsTUFBRCxDQUFqQixDQUFmO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xiLFdBQVcsQ0FBQ1EsTUFBTSxDQUFDVyxJQUFQLENBQVlOLEtBQVosQ0FBRCxFQUFxQixVQUFDd0osSUFBRCxFQUFVO1lBQ3hDLEtBQUksQ0FBQ21QLFFBQUwsQ0FBYzNZLEtBQUssQ0FBQ3dKLElBQUQsQ0FBbkIsRUFBMkJ4SixLQUEzQixFQUFrQ3dKLElBQWxDO1VBQ0QsQ0FGVSxDQUFYO1FBR0Q7TUFDRjs7TUFFRCxJQUFJakksT0FBTyxDQUFDdkIsS0FBRCxDQUFYLEVBQW9CO1FBQ2xCYixXQUFXLENBQUNhLEtBQUQsRUFBUSxVQUFDd0osSUFBRCxFQUFPbEssS0FBUCxFQUFpQjtVQUNsQyxLQUFJLENBQUNxWixRQUFMLENBQWNuUCxJQUFkLEVBQW9CeEosS0FBcEIsRUFBMkJWLEtBQTNCO1FBQ0QsQ0FGVSxDQUFYO01BR0Q7SUFDRjs7Ozs7O0FBR1lpWixtRUFBZixFOztBQ2hGQTtBQUNBO0FBRUEsSUFBTTdULFdBQVcsR0FBRztFQUNsQkMsSUFBSSxFQUFKQSxJQURrQjtFQUVsQjRULFNBQVMsRUFBRUEsVUFBU0E7QUFGRixDQUFwQjtBQUtlN1Qsb0ZBQWYsRSIsImZpbGUiOiJzY2hlbWEtdG9vbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTY2hlbWFUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTY2hlbWFUb29sc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZmFrZUZvckVhY2ggPSAoYXJyYXksIGNhbGxiYWNrKSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFzT3duID0gKG9iaiwga2V5KSA9PiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbmV4cG9ydCBjb25zdCBwcmV0dHkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKVxufVxuXG5leHBvcnQgY29uc3Qgcm91bmQyZGVjaW1hbHMgPSAobnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDBcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRPYmplY3QgPSAob2JqKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwge30pXG59XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IChhLCBiKSA9PiB7XG4gIGlmIChpc09iamVjdChhKSAmJiBpc09iamVjdChiKSkge1xuICAgIGEgPSBzb3J0T2JqZWN0KGEpXG4gICAgYiA9IHNvcnRPYmplY3QoYilcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gIWVxdWFsKGEsIGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3Qgbm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSBpc0ludGVnZXIodmFsdWUpID8gJ2ludGVnZXInIDogJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ3N0cmluZydcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgdHlwZSA9ICdib29sZWFuJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSdcbiAgfSBlbHNlIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudWxsJ1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnb2JqZWN0J1xuICB9XG5cbiAgcmV0dXJuIHR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IG1lcmdlRGVlcCA9ICh0YXJnZXQsIC4uLnNvdXJjZXMpID0+IHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldFxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgICBba2V5XToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWRkaXRpb25hbFByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdHJ1ZVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBhbnlPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYW55T2YpID8gdGhpcy5zY2hlbWEuYW55T2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNvbnN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29uc3RcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuZWxzZSkpID8gdGhpcy5zY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy5mb3JtYXQoKSkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVhZE9ubHkgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEucmVhZE9ubHkpID8gdGhpcy5zY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS50aGVuKSkgPyB0aGlzLnNjaGVtYS50aGVuIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLnR5cGUoKSkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBTY2hlbWFUb29scyBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IF9hbGxPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKCkpKSB7XG4gICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgU2NoZW1hVG9vbHMuSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hVG9vbHMgZnJvbSAnLi4vLi4vaW5kZXgnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2FueU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbnlPZigpKSkge1xuICAgIGNvbnN0IGFueU9mID0gc2NoZW1hLmFueU9mKClcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBTY2hlbWFUb29scy5KZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGFueU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAoYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2RlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9lbnVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuZW51bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZXhjbHVzaXZlTWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZXhjbHVzaXZlTWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDw9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZm9ybWF0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5mb3JtYXQoKSkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IGludmFsaWQgPSBmYWxzZVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hVG9vbHMgZnJvbSAnLi4vLi4vaW5kZXgnXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfaWYgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5pZigpKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hLnRoZW4oKSkgJiYgbm90U2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgU2NoZW1hVG9vbHMuSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS50aGVuKCkpKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IFNjaGVtYVRvb2xzLkplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB0aGVuRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBTY2hlbWFUb29scy5KZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgZWxzZUVycm9ycyA9IGVsc2VFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heEl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhMZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4UHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5pbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbXVsdGlwbGVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm11bHRpcGxlT2YoKSkpIHtcbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9ub3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm5vdCgpKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IFNjaGVtYVRvb2xzIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX29uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5vbmVPZigpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBTY2hlbWFUb29scy5KZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm4oKSkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBTY2hlbWFUb29scyBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBTY2hlbWFUb29scy5KZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy4nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5yZXF1aXJlZCgpKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF90eXBlID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKGlzU2V0KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBpZiAoaXNBcnJheShzY2hlbWEudHlwZSgpKSkge1xuICAgICAgdmFsaWQgPSBzY2hlbWEudHlwZSgpLnNvbWUoKHR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heGltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfdW5pcXVlSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpKSB7XG4gICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgU2NoZW1hVG9vbHMgZnJvbSAnLi4vLi4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBfYWRkaXRpb25hbFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gaXNTZXQoc2NoZW1hLnByb3BlcnRpZXMoKSkgPyBzY2hlbWEucHJvcGVydGllcygpIDoge31cbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBsZXQgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICAgIGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgUHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIGRvZXMgbm90IGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllcy5gLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgU2NoZW1hVG9vbHMuSmVkaSh7XG4gICAgICAgICAgICByb290TmFtZTogcHJvcGVydHksXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBfYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgX21pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IF9hbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBfZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IF9leGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgX2Zvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IF9tYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBfbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBfbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IF9taW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgX21pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IF9taW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX211bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBfbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBfb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgX3BhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBfcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX3JlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IF90eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgX21heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyBfdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBfYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIF9hbGxPZixcbiAgX2FueU9mLFxuICBfY29uc3QsXG4gIF9kZXBlbmRlbnRSZXF1aXJlZCxcbiAgX2VudW0sXG4gIF9leGNsdXNpdmVNYXhpbXVtLFxuICBfZXhjbHVzaXZlTWluaW11bSxcbiAgX2Zvcm1hdCxcbiAgX2lmLFxuICBfbWF4aW11bSxcbiAgX21heEl0ZW1zLFxuICBfbWF4TGVuZ3RoLFxuICBfbWF4UHJvcGVydGllcyxcbiAgX21pbmltdW0sXG4gIF9taW5JdGVtcyxcbiAgX21pbkxlbmd0aCxcbiAgX21pblByb3BlcnRpZXMsXG4gIF9tdWx0aXBsZU9mLFxuICBfbm90LFxuICBfb25lT2YsXG4gIF9wYXR0ZXJuLFxuICBfcGF0dGVyblByb3BlcnRpZXMsXG4gIF9yZXF1aXJlZCxcbiAgX3R5cGUsXG4gIF91bmlxdWVJdGVtc1xuXVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBpc0Jvb2xlYW4gfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdFxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gc2NoZW1hLmNsb25lKClcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpID8gc2NoZW1hLm9wdGlvbignbWVzc2FnZScpIDogJ2ludmFsaWQnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XVxuICAgIH1cblxuICAgIHRoaXMuZHJhZnQuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5vcHRpb25zLnJvb3ROYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIC8vIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAvLyAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGFsZXJ0LnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gYWxlcnRcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBpbnZhbGlkRmVlZGJhY2sudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldERyb3Bkb3duICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREcm9wZG93blRvZ2dsZSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSAnUHJvcGVydGllcydcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tdG9nZ2xlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZHJvcGRvd24tcHJvcGVydGllcycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERyb3Bkb3duTWVudSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLW1lbnUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRUb29sYmFyU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ25hdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCduYXZiYXItbmF2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktdG9vbGJhci1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aXZhdG9yc1Nsb3QgKCkge1xuICAgIGNvbnN0IGFjdGl2YXRvcnNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhY3RpdmF0b3JzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgcmV0dXJuIGFjdGl2YXRvcnNTbG90XG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgYWN0aW9uc1Nsb3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhY3Rpb25zU2xvdHMuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBhY3Rpb25zU2xvdHNcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGlsZHJlblNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBjaGlsZHJlblNsb3RcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG5cbiAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgbWVzc2FnZXNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gbWVzc2FnZXNTbG90XG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgY2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJhZGlvTGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgcmFkaW9MZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJhZGlvTGVnZW5kXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICByYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiByYWRpb0xhYmVsXG4gIH1cblxuICBnZXRMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6IGF1dG87JylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0SW5wdXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVXaXJlZnJhbWUgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpXG4gICAgcmV0dXJuIGludmFsaWRGZWVkYmFja1xuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gc3VwZXIuZ2V0RmllbGRzZXQoKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gc3VwZXIuZ2V0Q2hlY2tib3hMYWJlbChjb25maWcpXG4gICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gc3VwZXIuZ2V0Q2hlY2tib3goY29uZmlnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gc3VwZXIuZ2V0UmFkaW9Db250YWluZXIoKVxuICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5saW5lJylcbiAgICByZXR1cm4gcmFkaW9Db250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBzdXBlci5nZXRSYWRpb0xhYmVsKGNvbmZpZylcbiAgICByYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiByYWRpb0xhYmVsXG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBzdXBlci5nZXRSYWRpbyhjb25maWcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBzdXBlci5nZXRUZXh0YXJlYShjb25maWcpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gc3VwZXIuZ2V0U2VsZWN0KGNvbmZpZylcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVdpcmVmcmFtZVxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBhbGVydCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBhbGVydFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGludmFsaWRGZWVkYmFja1xuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBzdXBlci5nZXRGaWVsZHNldCgpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdweS0wJylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBzdXBlci5nZXRDaGVja2JveExhYmVsKGNvbmZpZylcbiAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gc3VwZXIuZ2V0UmFkaW9MYWJlbChjb25maWcpXG4gICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gc3VwZXIuZ2V0UmFkaW9Db250YWluZXIoKVxuICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiByYWRpb0NvbnRhaW5lclxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gc3VwZXIuZ2V0Q2hlY2tib3goY29uZmlnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gc3VwZXIuZ2V0UmFkaW8oY29uZmlnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gc3VwZXIuZ2V0VGV4dGFyZWEoY29uZmlnKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IHN1cGVyLmdldFNlbGVjdChjb25maWcpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4vYm9vdHN0cmFwNCdcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCb290c3RyYXA0IHtcbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ215LTMnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4tZm9jdXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBzdXBlci5nZXRMYWJlbChjb25maWcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgVGhlbWVXaXJlZnJhbWUgZnJvbSAnLi4vdGhlbWVzL3dpcmVmcmFtZSdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4uL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmFjdGl2YXRvcnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY29udHJvbFNsb3QgPSBudWxsXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IG51bGxcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnd2lyZWZyYW1lJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy50b29sYmFyU2xvdCA9IHRoaXMudGhlbWUuZ2V0VG9vbGJhclNsb3QoKVxuICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGl2YXRvcnNTbG90KClcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gdGhpcy50aGVtZS5nZXRDb250cm9sU2xvdCgpXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSB0aGlzLnRoZW1lLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gdGhpcy50aGVtZS5nZXRDaGlsZHJlblNsb3QoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgYnVpbGQgKCkge31cblxuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLnZhbGlkYXRlKClcblxuICAgIHRoaXMubWVzc2FnZXNTbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKGVycm9yLm1lc3NhZ2UpXG4gICAgICB0aGlzLm1lc3NhZ2VzU2xvdC5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIHN3aXRjaGVyIGJ1dHRvbnNcbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIHRoaXMuc3dpdGNoZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gYnV0dG9uXG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHZhbHVlOiBpbmRleFxuICAgICAgfSlcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihidXR0b24udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoSW5zdGFuY2UoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLnB1c2goYnV0dG9uKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEluc3RhbmNlLnVpLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRJbnN0YW5jZS51aS5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5jb250YWluZXIpXG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoKE51bWJlcihidXR0b24udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5pbmRleCkpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgbWVyZ2VEZWVwLFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIGlzT2JqZWN0LFxuICBub3RTZXRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KHRoaXMuc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChpc1NldChzY2hlbWEuYWxsT2YpICYmIHNjaGVtYS5vcHRpb25zPy5tZXJnZUFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW5jZXNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGlzT2JqZWN0KHNjaGVtYUNsb25lKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2VzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwLCBmYWxzZSwgc2V0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuXG4gICAgaWYgKHNldFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnN0YW5jZUVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBpbnN0YW5jZSB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGluc3RhbmNlIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHZhbHVlKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlSW5zdGFuY2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIHRoaXMubGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICB0aGlzLmxlZ2VuZCA9IHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuZHJvcGRvd24gPSB0aGlzLnRoZW1lLmdldERyb3Bkb3duKClcbiAgICB0aGlzLmRyb3Bkb3duVG9nZ2xlID0gdGhpcy50aGVtZS5nZXREcm9wZG93blRvZ2dsZSgpXG4gICAgdGhpcy5kcm9wZG93bk1lbnUgPSB0aGlzLnRoZW1lLmdldERyb3Bkb3duTWVudSgpXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5TGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHknLFxuICAgICAgZm9yOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7IHR5cGU6ICdhbnknIH1cblxuICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5sZWdlbmQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLnRvb2xiYXJTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB0aGlzLnRvb2xiYXJTbG90LmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd24pXG4gICAgICB0aGlzLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd25Ub2dnbGUpXG4gICAgICB0aGlzLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd25NZW51KVxuICAgICAgdGhpcy5kcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUxhYmVsKVxuICAgICAgdGhpcy5kcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUlucHV0KVxuICAgICAgdGhpcy5kcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUJ0bilcbiAgICAgIHRoaXMuZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKHRoaXMuYWN0aXZhdG9yc1Nsb3QpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hBY3RpdmF0b3JzICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuYWN0aXZhdG9yc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRvcnNTbG90LnJlbW92ZUNoaWxkKHRoaXMuYWN0aXZhdG9yc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2YXRvcklkID0gY2hpbGQucGF0aCArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgICAgICBmb3I6IGFjdGl2YXRvcklkLFxuICAgICAgICAgIHRleHRDb250ZW50OiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdG9ySW5wdXQgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgICAgICBpZDogYWN0aXZhdG9ySWRcbiAgICAgICAgfSlcblxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgYWN0aXZhdG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmF0b3JJbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoYWN0aXZhdG9yQ29udGFpbmVyKVxuICAgICAgICBhY3RpdmF0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZhdG9ySW5wdXQpXG4gICAgICAgIGFjdGl2YXRvckNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3RpdmF0b3JMYWJlbClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hBY3RpdmF0b3JzKClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0LCBoYXNPd24gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5cbmNsYXNzIE9iamVjdEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBPYmplY3RFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGlzU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KCcuJykucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGhhc1Byb3BlcnR5IChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpXG5cbiAgICBpZiAobm90U2V0KHByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocHJvcGVydGllcykuaW5jbHVkZXMocHJvcGVydHlOYW1lKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1Byb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIC8vIGRlbGV0ZUFsbFxuICAgIHRoaXMuZGVsZXRlQWxsQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgY2hpbGQudWkuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuYWN0aW9uc1Nsb3QpXG5cbiAgICAgIHdoaWxlIChjaGlsZC51aS5hY3Rpb25zU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNoaWxkLnVpLmFjdGlvbnNTbG90LnJlbW92ZUNoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgLy8gZGVsZXRlXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgICB9KVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICAgIC8vIG1vdmUgdXBcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGRvd25cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIH1cblxuICAgICAgY2hpbGQudWkuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLml0ZW1zKCkpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVySW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnd2lyZWZyYW1lJyxcbiAgICAgIHJvb3ROYW1lOiAncm9vdCdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChjb25maWcuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KGNvbmZpZy5zY2hlbWEub25lT2YoKSkgfHwgY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8IGlzQXJyYXkoY29uZmlnLnNjaGVtYS50eXBlKCkpIHx8IG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIGlmIChub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpICYmIGlzU2V0KGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IGNvbmZpZy5zY2hlbWEuY2xvbmUoKVxuICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShjb25maWcuc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMub3B0aW9ucy5zdGFydFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J1MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iLCIvKiBnbG9iYWwgWE1MSHR0cFJlcXVlc3QgKi9cblxuaW1wb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBpc1N0cmluZyxcbiAgZmFrZUZvckVhY2gsXG4gIG5vdFNldFxufSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIGlmIChub3RTZXQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCA1XG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgdGhpcy50cmF2ZXJzZShzY2hlbWEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMvJGRlZnMnKSkge1xuICAgICAgY29uc3QgcmVmUGFydHMgPSByZWYuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZGVmTmFtZSA9IHJlZlBhcnRzLnBvcCgpXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZnNbZGVmTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZnNbZGVmTmFtZV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCByZWYuc3RhcnRzV2l0aCgnaHR0cHMnKSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB0aGlzLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcmVmLCBmYWxzZSkgLy8gYGZhbHNlYCBtYWtlcyB0aGUgcmVxdWVzdCBzeW5jaHJvbm91c1xuICAgICAgcmVxdWVzdC5zZW5kKG51bGwpXG5cbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignY2FuIG5vdCBsb2FkJywgcmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIHRyYXZlcnNlICh2YWx1ZSwgdGhpbmcsIGluZGV4KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlWyckcmVmJ10pICYmIGlzU2V0KHRoaW5nKSkge1xuICAgICAgICB0aGluZ1tpbmRleF0gPSB0aGlzLmRlZmluZSh2YWx1ZVsnJHJlZiddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmFrZUZvckVhY2goT2JqZWN0LmtleXModmFsdWUpLCAoaXRlbSkgPT4ge1xuICAgICAgICAgIHRoaXMudHJhdmVyc2UodmFsdWVbaXRlbV0sIHZhbHVlLCBpdGVtKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgZmFrZUZvckVhY2godmFsdWUsIChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGl0ZW0sIHZhbHVlLCBpbmRleClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi9qZWRpJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5cbmNvbnN0IFNjaGVtYVRvb2xzID0ge1xuICBKZWRpLFxuICBSZWZQYXJzZXI6IFJlZlBhcnNlclxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWFUb29sc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==