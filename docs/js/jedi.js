(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Jedi"] = factory();
	else
		root["Jedi"] = factory();
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
var equal = function equal(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};
var different = function different(a, b) {
  return JSON.stringify(a) !== JSON.stringify(b);
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
    type = 'number';
  } else if (isInteger(value)) {
    type = 'integer';
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
      return utils_isObject(this.schema.additionalProperties) || isBoolean(this.schema.additionalProperties) ? this.schema.additionalProperties : false;
    }
  }, {
    key: "allOf",
    value: function allOf() {
      return isArray(this.schema.allOf) ? this.schema.allOf : false;
    }
  }, {
    key: "anyOf",
    value: function anyOf() {
      return isArray(this.schema.anyOf) ? this.schema.anyOf : false;
    }
  }, {
    key: "const",
    value: function _const() {
      return this.schema["const"] ? this.schema["const"] : false;
    }
  }, {
    key: "clone",
    value: function clone() {
      return JSON.parse(JSON.stringify(this.schema));
    }
  }, {
    key: "default",
    value: function _default() {
      return this.schema["default"] ? this.schema["default"] : false;
    }
  }, {
    key: "dependentRequired",
    value: function dependentRequired() {
      return utils_isObject(this.schema.dependentRequired) ? this.schema.dependentRequired : false;
    }
  }, {
    key: "description",
    value: function description() {
      return isString(this.schema.description) ? this.schema.description : false;
    }
  }, {
    key: "else",
    value: function _else() {
      return utils_isObject(this.schema["else"]) ? this.schema["else"] : false;
    }
  }, {
    key: "enum",
    value: function _enum() {
      if (isArray(this.schema["enum"]) && this.schema["enum"].length > 0) {
        return this.schema["enum"];
      }

      return false;
    }
  }, {
    key: "exclusiveMaximum",
    value: function exclusiveMaximum() {
      return isNumber(this.schema.exclusiveMaximum) ? this.schema.exclusiveMaximum : false;
    }
  }, {
    key: "exclusiveMinimum",
    value: function exclusiveMinimum() {
      return isNumber(this.schema.exclusiveMinimum) ? this.schema.exclusiveMinimum : false;
    }
  }, {
    key: "format",
    value: function format() {
      return isString(this.schema.format) ? this.schema.format : false;
    }
  }, {
    key: "formatIs",
    value: function formatIs(value) {
      return this.format() && this.format() === value;
    }
  }, {
    key: "if",
    value: function _if() {
      return utils_isObject(this.schema["if"]) ? this.schema["if"] : false;
    }
  }, {
    key: "items",
    value: function items() {
      return utils_isObject(this.schema.items) ? this.schema.items : false;
    }
  }, {
    key: "maximum",
    value: function maximum() {
      return this.schema.maximum ? this.schema.maximum : false;
    }
  }, {
    key: "maxItems",
    value: function maxItems() {
      if (isInteger(this.schema.maxItems) && this.schema.maxItems >= 0) {
        return this.schema.maxItems;
      }

      return false;
    }
  }, {
    key: "maxLength",
    value: function maxLength() {
      if (isInteger(this.schema.maxLength) && this.schema.maxLength >= 0) {
        return this.schema.maxLength;
      }

      return false;
    }
  }, {
    key: "maxProperties",
    value: function maxProperties() {
      if (isInteger(this.schema.maxProperties) && this.schema.maxProperties >= 0) {
        return this.schema.maxProperties;
      }

      return false;
    }
  }, {
    key: "minimum",
    value: function minimum() {
      return isNumber(this.schema.minimum) ? this.schema.minimum : false;
    }
  }, {
    key: "minItems",
    value: function minItems() {
      if (isInteger(this.schema.minItems) && this.schema.minItems >= 0) {
        return this.schema.minItems;
      }

      return false;
    }
  }, {
    key: "minLength",
    value: function minLength() {
      if (isInteger(this.schema.minLength) && this.schema.minLength >= 0) {
        return this.schema.minLength;
      }

      return false;
    }
  }, {
    key: "minProperties",
    value: function minProperties() {
      if (isInteger(this.schema.minProperties) && this.schema.minProperties >= 0) {
        return this.schema.minProperties;
      }

      return false;
    }
  }, {
    key: "multipleOf",
    value: function multipleOf() {
      if (isNumber(this.schema.multipleOf) && this.schema.multipleOf >= 0) {
        return this.schema.multipleOf;
      }

      return false;
    }
  }, {
    key: "not",
    value: function not() {
      return utils_isObject(this.schema.not) ? this.schema.not : false;
    }
  }, {
    key: "option",
    value: function option(_option) {
      return this.schema.options && this.schema.options[_option] ? this.schema.options[_option] : false;
    }
  }, {
    key: "pattern",
    value: function pattern() {
      return isString(this.schema.pattern) ? this.schema.pattern : false;
    }
  }, {
    key: "patternProperties",
    value: function patternProperties() {
      return utils_isObject(this.schema.patternProperties) ? this.schema.patternProperties : false;
    }
  }, {
    key: "property",
    value: function property(key) {
      return this.properties && this.schema.properties[key] ? this.schema.properties[key] : false;
    }
  }, {
    key: "properties",
    value: function properties() {
      return this.schema.properties ? this.schema.properties : false;
    }
  }, {
    key: "required",
    value: function required() {
      return isArray(this.schema.required) ? toConsumableArray_default()(new Set(this.schema.required)) : false;
    }
  }, {
    key: "then",
    value: function then() {
      return utils_isObject(this.schema.then) ? this.schema.then : false;
    }
  }, {
    key: "title",
    value: function title() {
      return isString(this.schema.title) ? this.schema.title : false;
    }
  }, {
    key: "type",
    value: function type() {
      if (isString(this.schema.type) || isArray(this.schema.type)) {
        return this.schema.type;
      }

      return false;
    }
  }, {
    key: "typeIs",
    value: function typeIs(value) {
      return this.type() && this.type() === value;
    }
  }, {
    key: "types",
    value: function types() {
      return isArray(this.schema.type);
    }
  }, {
    key: "typeIsNumeric",
    value: function typeIsNumeric() {
      return this.typeIs('number') || this.typeIs('integer');
    }
  }, {
    key: "oneOf",
    value: function oneOf() {
      return isArray(this.schema.oneOf) ? this.schema.oneOf : false;
    }
  }, {
    key: "uniqueItems",
    value: function uniqueItems() {
      return isBoolean(this.schema.uniqueItems) ? this.schema.uniqueItems : false;
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

  if (schema.allOf()) {
    schema.allOf().forEach(function (schema) {
      var allOfErrors = validator.validate(value, new src_schema(schema), key, path);
      errors = [].concat(toConsumableArray_default()(errors), toConsumableArray_default()(allOfErrors));
    });
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/minLength.js

var minLength_minLength = function _minLength(validator, value, schema, key, path) {
  var errors = [];

  if (isString(value) && schema.minLength()) {
    var invalid = value.length < schema.minLength();

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be at least ' + schema.minLength() + ' characters long',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/const.js
var _const = function _const(validator, value, schema, key, path) {
  var errors = [];

  if (schema["const"]()) {
    var valueIsNotEqualConst = JSON.stringify(value) !== JSON.stringify(schema["const"]());
    var invalid = valueIsNotEqualConst;

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must have value: ' + JSON.stringify(schema["const"]()),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/anyOf.js

var anyOf_anyOf = function _anyOf(validator, value, schema, key, path) {
  var errors = [];

  if (schema.anyOf()) {
    var valid = schema.anyOf().some(function (schema) {
      var anyOfErrors = validator.validate(value, new src_schema(schema), key, path);
      return anyOfErrors.length === 0;
    });

    if (!valid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + '  must validate against at least one of the provided schemas',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/dependentRequired.js

var dependentRequired_dependentRequired = function _dependentRequired(validator, value, schema, key, path) {
  var errors = [];

  if (utils_isObject(value) && schema.dependentRequired()) {
    var missingProperties = [];
    Object.keys(schema.dependentRequired()).forEach(function (key) {
      if (isSet(value[key])) {
        var requiredProperties = schema.dependentRequired()[key];
        missingProperties = requiredProperties.filter(function (property) {
          return !Object.hasOwn(value, property);
        });
      }
    });
    var invalid = missingProperties.length > 0;

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + '  is missing the required properties: ' + missingProperties.join(', '),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/enum.js
var enum_enum = function _enum(validator, value, schema, key, path) {
  var errors = [];

  if (schema["enum"]()) {
    var invalid = !schema["enum"]().some(function (e) {
      return JSON.stringify(value) === JSON.stringify(e);
    });

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be one of the enumerated values: ' + JSON.stringify(schema["enum"]()),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/exclusiveMaximum.js

var exclusiveMaximum_exclusiveMaximum = function _exclusiveMaximum(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && schema.exclusiveMaximum()) {
    var computedMaximum = schema.exclusiveMaximum() - 1;
    var invalid = value > computedMaximum;

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be less than ' + computedMaximum,
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/exclusiveMinimum.js

var exclusiveMinimum_exclusiveMinimum = function _exclusiveMinimum(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && schema.exclusiveMinimum()) {
    var computedMinimum = schema.exclusiveMinimum() + 1;
    var invalid = value < computedMinimum;

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be at least ' + computedMinimum,
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/format.js
var _format = function _format(validator, value, schema, key, path) {
  var errors = [];

  if (schema.format()) {
    var invalid = false;

    if (schema.formatIs('email')) {
      var regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
      invalid = !regexp.test(value);
    }

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be a valid email address',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/if.js

var if_if = function _if(validator, value, schema) {
  var errors = [];

  if (schema["if"]()) {
    if (!schema.then() && !schema["else"]()) {
      return errors;
    }

    var ifEditor = new src({
      schema: schema["if"](),
      startValue: value
    });
    var ifErrors = ifEditor.validate();

    if (ifErrors.length === 0) {
      if (schema.then()) {
        var thenEditor = new src({
          schema: schema.then(),
          startValue: value
        });
        errors = thenEditor.validate();
        thenEditor.destroy();
      } else {
        return errors;
      }
    } else {
      if (schema["else"]()) {
        var elseEditor = new src({
          schema: schema["else"](),
          startValue: value
        });
        errors = elseEditor.validate();
        elseEditor.destroy();
      } else {
        return errors;
      }
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/maxItems.js

var maxItems_maxItems = function _maxItems(validator, value, schema, key, path) {
  var errors = [];

  if (isArray(value) && schema.maxItems()) {
    var invalid = value.length > schema.maxItems();

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must have at most ' + schema.maxItems() + ' items',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/maxLength.js

var maxLength_maxLength = function _maxLength(validator, value, schema, key, path) {
  var errors = [];

  if (isString(value) && schema.maxLength()) {
    var invalid = value.length > schema.maxLength();

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be at most ' + schema.maxLength() + ' characters long',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/maxProperties.js

var maxProperties_maxProperties = function _maxProperties(validator, value, schema, key, path) {
  var errors = [];

  if (utils_isObject(value) && schema.maxProperties()) {
    var propertiesCount = Object.keys(value).length;
    var invalid = propertiesCount > schema.maxProperties();

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must have at most ' + schema.maxProperties() + ' properties',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/minimum.js

var minimum_minimum = function _minimum(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && schema.minimum()) {
    var computedMinimum = schema.minimum();
    var invalid = value < computedMinimum;

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be at least ' + computedMinimum,
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/minItems.js

var minItems_minItems = function _minItems(validator, value, schema, key, path) {
  var errors = [];

  if (isArray(value) && schema.minItems()) {
    var invalid = value.length < schema.minItems();

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must have at least ' + schema.minItems() + ' items',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/minProperties.js

var minProperties_minProperties = function _minProperties(validator, value, schema, key, path) {
  var errors = [];

  if (utils_isObject(value) && schema.minProperties()) {
    var propertiesCount = Object.keys(value).length;
    var invalid = propertiesCount < schema.minProperties();

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must have at least ' + schema.minProperties() + ' properties',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/multipleOf.js

var multipleOf_multipleOf = function _multipleOf(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && schema.multipleOf()) {
    var isMultipleOf = value / schema.multipleOf() === Math.floor(value / schema.multipleOf());
    var invalid = !isMultipleOf;

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be multiple of ' + schema.multipleOf(),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/not.js

var not_not = function _not(validator, value, schema, key, path) {
  var errors = [];

  if (schema.not()) {
    var notErrors = validator.validate(value, new src_schema(schema.not()), key, path);
    var invalid = notErrors.length === 0;

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must not validate against the provided schema ' + JSON.stringify(schema.not()),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/oneOf.js

var oneOf_oneOf = function _oneOf(validator, value, schema, key, path) {
  var errors = [];

  if (schema.oneOf()) {
    var counter = 0;
    schema.oneOf().forEach(function (schema) {
      var oneOfErrors = validator.validate(value, new src_schema(schema), key, path);

      if (oneOfErrors.length === 0) {
        counter++;
      }
    });

    if (counter !== 1) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must validate against exactly one of the provided schemas. It currently validates against ' + counter + ' of the schemas.',
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/pattern.js

var pattern_pattern = function _pattern(validator, value, schema, key, path) {
  var errors = [];

  if (isString(value) && schema.pattern()) {
    var regexp = new RegExp(schema.pattern());
    var invalid = !regexp.test(value);

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be the pattern: ' + schema.pattern(),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/patternProperties.js



var patternProperties_patternProperties = function _patternProperties(validator, value, schema) {
  var errors = [];

  if (utils_isObject(value) && schema.patternProperties()) {
    var patternProperties = schema.patternProperties();
    Object.keys(value).forEach(function (propertyName) {
      Object.keys(patternProperties).forEach(function (pattern) {
        var regexp = new RegExp(pattern);

        if (regexp.test(propertyName)) {
          var _schema = patternProperties[pattern];
          _schema.title = propertyName;
          var editor = new src({
            schema: _schema,
            startValue: value[propertyName]
          });
          errors = [].concat(toConsumableArray_default()(errors), toConsumableArray_default()(editor.validate()));
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

  if (utils_isObject(value) && schema.required()) {
    var missingProperties = [];
    var keys = Object.keys(value);
    schema.required().forEach(function (key) {
      if (!keys.includes(key)) {
        missingProperties.push(key);
      }
    });
    var invalid = missingProperties.length > 0;

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + '  is missing the required properties: ' + missingProperties.join(', '),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/type.js

var type_type = function _type(validator, value, schema, key, path) {
  var errors = [];

  if (schema.types()) {
    return errors;
  }

  if (schema.typeIs('any')) {
    return errors;
  }

  if (schema.type()) {
    var valid = schema.type() === getType(value);

    if (!valid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be of type ' + schema.type(),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/maximum.js

var maximum_maximum = function _maximum(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && schema.maximum()) {
    var computedMaximum = schema.maximum();
    var invalid = value > computedMaximum;

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be less than ' + computedMaximum,
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/uniqueItems.js

var uniqueItems_uniqueItems = function _uniqueItems(validator, value, schema, key, path) {
  var errors = [];

  if (isArray(value) && schema.uniqueItems()) {
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
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must have unique items',
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
    var properties = schema.properties();
    var additionalProperties = schema.additionalProperties();

    if (properties) {
      Object.keys(value).forEach(function (property) {
        if (additionalProperties === false && !Object.hasOwn(properties, property)) {
          errors.push({
            message: "Property \"".concat(property, "\" has not been defined and the schema does not allow additional properties."),
            path: path
          });
        }

        if (utils_isObject(additionalProperties) && !Object.hasOwn(properties, property)) {
          var editor = new src({
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


























/* harmony default export */ var draft_2020_12 = ([additionalProperties_additionalProperties, allOf_allOf, anyOf_anyOf, _const, dependentRequired_dependentRequired, enum_enum, exclusiveMaximum_exclusiveMaximum, exclusiveMinimum_exclusiveMinimum, _format, if_if, maximum_maximum, maxItems_maxItems, maxLength_maxLength, maxProperties_maxProperties, minimum_minimum, minItems_minItems, minLength_minLength, minProperties_minProperties, multipleOf_multipleOf, not_not, oneOf_oneOf, pattern_pattern, patternProperties_patternProperties, required_required, type_type, uniqueItems_uniqueItems]);
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
// CONCATENATED MODULE: ./src/ref-parser.js




var ref_parser_RefParser = /*#__PURE__*/function () {
  function RefParser() {
    classCallCheck_default()(this, RefParser);

    this.iterations = 5;
    this.defs = {};
  }

  createClass_default()(RefParser, [{
    key: "dereference",
    value: function dereference(schema) {
      this.defs = schema['$defs'];

      for (var i = 0; i < this.iterations; i++) {
        this.traverse(this.defs);
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
          Object.keys(value).forEach(function (index) {
            _this.traverse(value[index], value, index);
          });
        }
      }

      if (isArray(value)) {
        value.forEach(function (item, index) {
          _this.traverse(item, value, index);
        });
      }
    }
  }]);

  return RefParser;
}();

/* harmony default export */ var ref_parser = (ref_parser_RefParser);
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
      this.setDefaultValue();
      this.prepare();

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
    key: "setDefaultValue",
    value: function setDefaultValue() {
      var value;
      if (this.schema.type() === 'boolean') value = false;
      if (this.schema.type() === 'number') value = 0.0;
      if (this.schema.type() === 'integer') value = 0;
      if (this.schema.type() === 'string') value = '';
      if (this.schema.type() === 'array') value = [];
      if (this.schema.type() === 'object') value = {};
      if (this.schema.type() === 'null') value = null; // if (this.schema.enum()) {
      //   value = this.schema.enum()[0]
      // }

      if (this.schema["default"]()) {
        if (this.schema["enum"]() && !this.schema["enum"]().includes(this.schema["default"]())) {
          return;
        }

        value = this.schema["default"]();
      }

      this.value = value;
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
     * Transforms the input value if necessary before value set
     */

  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return value;
    }
    /**
     * Sets the instance value
     */

  }, {
    key: "setValue",
    value: function setValue(newValue) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.jedi.options.isEditor) {
        newValue = this.sanitize(newValue);
      }

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
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-info';
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
    key: "getCheckboxContainer",
    value: function getCheckboxContainer() {
      var checkboxContainer = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getCheckboxContainer", this).call(this);

      checkboxContainer.classList.add('form-group');
      return checkboxContainer;
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
    key: "getInput",
    value: function getInput(config) {
      var input = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getInput", this).call(this, config);

      input.classList.add('mb-3');
      return input;
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

      if (this.instance.schema.type()) {
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
        _this2.messagesSlot.appendChild(_this2.theme.getAlert({
          message: error.message
        }));
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

          _this.instance.switchEditor(index);
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

      var oldEditor = this.instance.editors[this.instance.lastIndex];

      if (oldEditor.ui.container.parentNode) {
        this.container.removeChild(oldEditor.ui.container);
      }

      this.container.appendChild(this.instance.activeEditor.ui.container);
      var buttons = this.container.querySelectorAll('button');

      if (this.disabled) {
        this.instance.activeEditor.ui.disable();
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      } else {
        this.instance.activeEditor.ui.enable();
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

      this.instance.activeEditor.ui.showValidationErrors();
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

      this.editors = [];
      this.activeEditor = null;
      this.lastIndex = 0;
      this.index = 0;
      this.schemas = [];
      this.switcherOptionValues = [];
      this.switcherOptionsLabels = [];

      if (this.schema.anyOf() || this.schema.oneOf()) {
        var schemasOf = this.schema.anyOf() ? this.schema.anyOf() : this.schema.oneOf();
        var cloneSchema = this.schema.clone();
        delete cloneSchema['anyOf'];
        delete cloneSchema['oneOf'];
        delete cloneSchema['options'];
        schemasOf.forEach(function (schema, index) {
          var _schema$options;

          schema = _objectSpread(_objectSpread({}, cloneSchema), schema); // merge allOf

          if (schema.allOf) {
            var merged = {};
            schema.allOf.forEach(function (allOfSchema) {
              merged = utils_mergeDeep(merged, allOfSchema);
            });
            schema = merged;
          }

          if (isSet(cloneSchema.title)) {
            schema.title = cloneSchema.title;
          }

          _this.switcherOptionValues.push(index);

          var switcherOptionsLabel = ((_schema$options = schema.options) === null || _schema$options === void 0 ? void 0 : _schema$options.switcherTitle) || 'Option-' + (index + 1);

          _this.switcherOptionsLabels.push(switcherOptionsLabel);

          _this.schemas.push(schema);
        });
      } else if (this.schema.types()) {
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
        var schemaClone = this.schema.clone();
        this.schemas = [_objectSpread(_objectSpread({}, schemaClone), {
          type: 'string'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'number'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'integer'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'boolean'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'array'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'object'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'null'
        })];
        this.schemas.forEach(function (schema, index) {
          _this.switcherOptionValues.push(index);
        });
        this.switcherOptionsLabels = ['String', 'Number', 'Integer', 'Boolean', 'Array', 'Object', 'Null'];
      } // Editors


      this.schemas.forEach(function (schema) {
        var editor = _this.jedi.createInstance({
          jedi: _this.jedi,
          schema: new src_schema(schema),
          path: _this.path,
          parent: _this.parent
        });

        editor.unregister();
        editor.on('change', function () {
          _this.emit('change');
        });

        _this.editors.push(editor);
      });

      if (isSet(this.editors[0])) {
        this.switchEditor(0, false);
      }
    }
  }, {
    key: "switchEditor",
    value: function switchEditor(newIndex) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.lastIndex = this.index;
      this.index = newIndex;
      this.activeEditor = this.editors[this.index];
      this.setValue(this.getValue(), triggersChange);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.activeEditor.getValue();
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return this.activeEditor.sanitize(value);
    }
  }, {
    key: "matchEditor",
    value: function matchEditor(value, editors) {
      var index = 0;

      var _iterator = _createForOfIteratorHelper(editors),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var editor = _step.value;

          if (editor.editors) {
            editor.setValue(value);
          }

          if (equal(editor.sanitize(value), value)) {
            this.switchEditor(index);
            break;
          }

          index++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // if value matches the active editor type set the value. Else switch to the first
      // editor that match the value.
      if (different(this.activeEditor.sanitize(value), value)) {
        this.matchEditor(value, this.editors);
      }

      this.activeEditor.setValue(value, triggersChange);

      if (triggersChange) {
        this.emit('change');
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.editors.forEach(function (editor) {
        editor.destroy();
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

      this.container.appendChild(this.messagesSlot); // checkbox container

      var checkboxContainer = this.theme.getCheckboxContainer(); // label

      var label = this.theme.getCheckboxLabel({
        "for": this.instance.path,
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }); // input

      this.input = this.theme.getCheckbox({
        id: this.instance.path
      }); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.checked);
      }); // description

      if (this.instance.schema.description()) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      } // appends


      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(checkboxContainer);
      checkboxContainer.appendChild(this.input);
      checkboxContainer.appendChild(label);
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
      this.container.appendChild(this.messagesSlot);
      this.radioInputs = []; // legend

      this.controlSlot.appendChild(this.theme.getRadioLegend({
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey()
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
      this.container.appendChild(this.controlSlot); // description

      if (this.instance.schema.description()) {
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

      this.container.appendChild(this.messagesSlot); // label

      this.label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
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

      if (this.instance.schema.description()) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }

      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.label);
      this.controlSlot.appendChild(this.input);
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
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return Boolean(value);
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

      this.fieldset = this.theme.getFieldset(); // title

      this.fieldset.appendChild(this.theme.getLegend({
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // description

      if (this.instance.schema.description()) {
        this.fieldset.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }

      this.fieldset.appendChild(this.activatorsSlot);
      this.fieldset.appendChild(this.actionsSlot);
      this.fieldset.appendChild(this.messagesSlot);
      this.fieldset.appendChild(this.childrenSlot);
      this.container.appendChild(this.fieldset);
      var label = this.theme.getLabel({
        textContent: 'Property Name',
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
        var key = _this.addPropertyInput.value; // if not property name was given return

        if (key.length === 0) {
          return;
        } // if property exist return


        if (isSet(_this.instance.value[key])) {
          return;
        }

        _this.instance.createChild({
          type: 'any'
        }, key);

        _this.instance.setValue(_this.instance.value);

        _this.addPropertyInput.value = '';
      });

      if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
        this.actionsSlot.appendChild(label);
        this.actionsSlot.appendChild(this.addPropertyInput);
        this.actionsSlot.appendChild(this.addPropertyBtn);
      }
    }
  }, {
    key: "refreshActivators",
    value: function refreshActivators() {
      var _this2 = this;

      if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
        while (this.activatorsSlot.firstChild) {
          this.activatorsSlot.removeChild(this.activatorsSlot.lastChild);
        }

        this.instance.children.forEach(function (child) {
          var activatorId = child.path + '-activator';

          var activatorContainer = _this2.theme.getCheckboxContainer();

          var activatorLabel = _this2.theme.getCheckboxLabel({
            "for": activatorId,
            textContent: child.schema.title() ? child.schema.title() : child.getKey()
          });

          var activatorInput = _this2.theme.getCheckbox({
            id: activatorId
          });

          activatorInput.checked = Object.hasOwn(_this2.instance.getValue(), child.getKey());

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

      var value = this.instance.getValue();
      Object.keys(value).forEach(function (key) {
        var child = _this3.instance.getChild(key);

        if (child.isActive) {
          _this3.childrenSlot.appendChild(child.ui.container);

          if (child) {
            if (_this3.disabled) {
              child.ui.disable();
            } else {
              child.ui.enable();
            }
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

/* harmony default export */ var object = (object_ObjectEditor);
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
      this.ui = new object(this);
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this = this;

      if (this.schema.properties()) {
        Object.keys(this.schema.properties()).forEach(function (key) {
          var schema = _this.schema.property(key);

          _this.createChild(schema, key);
        });
      }

      this.on('set-value', function () {
        _this.onSetValue();
      });
    }
    /**
     * Returns true if the property is required
     */

  }, {
    key: "isRequired",
    value: function isRequired(property) {
      return this.schema.required() && this.schema.required().includes(property);
    }
    /**
     * Returns true if the property is dependent required
     */

  }, {
    key: "isDependentRequired",
    value: function isDependentRequired(property) {
      var _this2 = this;

      var dependentRequired = this.schema.dependentRequired();

      if (dependentRequired) {
        var missingProperties = [];
        Object.keys(dependentRequired).forEach(function (key) {
          if (isSet(_this2.value[key])) {
            var requiredProperties = dependentRequired[key];
            missingProperties = requiredProperties.filter(function (property) {
              return !Object.hasOwn(_this2.value, property);
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
    key: "sanitize",
    value: function sanitize(value) {
      if (utils_isObject(value)) {
        return value;
      }

      return {};
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

      if (!properties) {
        return false;
      }

      return Object.keys(properties).includes(propertyName);
    }
  }, {
    key: "onSetValue",
    value: function onSetValue() {
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
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // description

      if (this.instance.schema.description()) {
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

/* harmony default export */ var array = (array_ArrayEditor);
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
      this.ui = new array(this);
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
      var schema = this.schema.items() ? this.schema.items() : {
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
      value.forEach(function (itemValue) {
        var child = _this2.createItemInstance(itemValue);

        _this2.children.push(child);
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

      this.container.appendChild(this.messagesSlot); // label

      var label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
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
      } // fix color picker bug


      if (this.instance.schema.formatIs('color') && this.instance.value.length === 0) {
        this.instance.setValue('#000000', false);
      }

      this.container.appendChild(this.controlSlot);

      if (!this.instance.schema.formatIs('hidden')) {
        this.controlSlot.appendChild(label);
      }

      this.controlSlot.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // description

      if (this.instance.schema.description()) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
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

/* harmony default export */ var string = (string_StringEditor);
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
      this.container.appendChild(this.messagesSlot);
      this.radioInputs = []; // legend

      this.controlSlot.appendChild(this.theme.getRadioLegend({
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey()
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
      this.container.appendChild(this.controlSlot); // description

      if (this.instance.schema.description()) {
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
}(string);

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
      this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues;
      this.container.appendChild(this.messagesSlot); // label

      var label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }); // input

      this.input = this.theme.getSelect({
        optionValues: this.optionValues,
        optionsLabels: this.optionsLabels,
        id: this.instance.path
      });
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // description

      if (this.instance.schema.description()) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
    }
  }]);

  return StringEnumSelectEditor;
}(string);

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
      if (this.schema.typeIs('string') && this.schema["enum"]() && this.schema.formatIs('radio')) {
        this.ui = new string_enum_radio(this);
      } else if (this.schema.typeIs('string') && this.schema["enum"]()) {
        this.ui = new string_enum_select(this);
      } else if (this.schema.typeIs('string')) {
        this.ui = new string(this);
      }
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return String(value);
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

      this.container.appendChild(this.messagesSlot); // label

      var label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }); // input

      this.input = this.theme.getInput({
        type: 'number',
        id: this.instance.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // description

      if (this.instance.schema.description()) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }

      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input);
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
      this.input.value = this.instance.getValue();

      if (this.disabled) {
        this.input.setAttribute('disabled', 'disabled');
      } else {
        this.input.removeAttribute('disabled');
      }
    }
  }]);

  return NumberEditor;
}(editors_editor);

/* harmony default export */ var number = (number_NumberEditor);
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
      this.container.appendChild(this.messagesSlot);
      this.radioInputs = []; // legend

      this.controlSlot.appendChild(this.theme.getRadioLegend({
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey()
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
      this.container.appendChild(this.controlSlot); // description

      if (this.instance.schema.description()) {
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
}(number);

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
      this.container.appendChild(this.messagesSlot);
      var label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
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

      if (this.instance.schema.description()) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }

      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input);
    }
  }]);

  return NumberEnumSelectEditor;
}(number);

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
      if (this.schema.typeIsNumeric() && this.schema["enum"]() && this.schema.formatIs('radio')) {
        this.ui = new number_enum_radio(this);
      } else if (this.schema.typeIsNumeric() && this.schema["enum"]()) {
        this.ui = new number_enum_select(this);
      } else if (this.schema.typeIsNumeric()) {
        this.ui = new number(this);
      }
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      if (this.schema.typeIs('integer')) {
        return Math.floor(Number(value));
      } else {
        return Number(value);
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
      this.container.appendChild(this.messagesSlot); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
    }
  }, {
    key: "sanitize",
    value: function sanitize() {
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
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return null;
    }
  }]);

  return NullInstance;
}(instances_instance);

/* harmony default export */ var instances_null = (null_NullInstance);
// CONCATENATED MODULE: ./src/index.js







function src_createSuper(Derived) { var hasNativeReflectConstruct = src_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function src_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }














var src_Jedi = /*#__PURE__*/function (_EventEmitter) {
  inherits_default()(Jedi, _EventEmitter);

  var _super = src_createSuper(Jedi);

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
    _this.refParser = null;
    _this.schema = null;

    _this.init();

    return _this;
  }

  createClass_default()(Jedi, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.validator = new validation_validator();
      this.refParser = new ref_parser();
      this.schema = new src_schema(this.options.schema);
      this.refParser.dereference(this.schema.schema);
      this.root = this.createInstance({
        jedi: this,
        schema: this.schema
      });

      if (this.options.startValue) {
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

      if (config.schema.anyOf() || config.schema.oneOf() || config.schema.typeIs('any') || config.schema.types() || !config.schema.type()) {
        if (!config.schema.type() && config.schema["default"]()) {
          var originalSchema = config.schema.clone();
          originalSchema.type = getType(config.schema["default"]());
          var newSchema = new src_schema(originalSchema);
          return this.resolve(newSchema);
        } else {
          instance = new instances_multiple(config);
        }
      }

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

/* harmony default export */ var src = __webpack_exports__["default"] = (src_Jedi);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXF1YWwiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsInZhbHVlIiwiaXNTZXQiLCJub3RTZXQiLCJpc051bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiaXNPYmplY3QiLCJnZXRUeXBlIiwidHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsInNvdXJjZXMiLCJsZW5ndGgiLCJzb3VyY2UiLCJzaGlmdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYXNzaWduIiwiU2NoZW1hIiwic2NoZW1hIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsImFueU9mIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIl9hbGxPZiIsInZhbGlkYXRvciIsInBhdGgiLCJlcnJvcnMiLCJhbGxPZkVycm9ycyIsInZhbGlkYXRlIiwiX21pbkxlbmd0aCIsImludmFsaWQiLCJmaWVsZCIsInB1c2giLCJtZXNzYWdlIiwiX2NvbnN0IiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJfYW55T2YiLCJ2YWxpZCIsInNvbWUiLCJhbnlPZkVycm9ycyIsIl9kZXBlbmRlbnRSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyIiwicHJvcGVydHkiLCJoYXNPd24iLCJqb2luIiwiX2VudW0iLCJlIiwiX2V4Y2x1c2l2ZU1heGltdW0iLCJjb21wdXRlZE1heGltdW0iLCJfZXhjbHVzaXZlTWluaW11bSIsImNvbXB1dGVkTWluaW11bSIsIl9mb3JtYXQiLCJmb3JtYXRJcyIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJfaWYiLCJpZkVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwiaWZFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZGVzdHJveSIsImVsc2VFZGl0b3IiLCJfbWF4SXRlbXMiLCJfbWF4TGVuZ3RoIiwiX21heFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzQ291bnQiLCJfbWluaW11bSIsIl9taW5JdGVtcyIsIl9taW5Qcm9wZXJ0aWVzIiwiX211bHRpcGxlT2YiLCJpc011bHRpcGxlT2YiLCJfbm90Iiwibm90RXJyb3JzIiwiX29uZU9mIiwiY291bnRlciIsIm9uZU9mRXJyb3JzIiwiX3BhdHRlcm4iLCJfcGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3IiLCJfcmVxdWlyZWQiLCJpbmNsdWRlcyIsIl90eXBlIiwidHlwZXMiLCJfbWF4aW11bSIsIl91bmlxdWVJdGVtcyIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJpIiwiaXRlbSIsIl9hZGRpdGlvbmFsUHJvcGVydGllcyIsInJvb3ROYW1lIiwiYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzIiwibWFwIiwiZXJyb3IiLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInZhbGlkYXRvckVycm9ycyIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJkZWZzIiwidHJhdmVyc2UiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVmUGFydHMiLCJzcGxpdCIsImRlZk5hbWUiLCJwb3AiLCJpbmRleCIsImRlZmluZSIsIkV2ZW50RW1pdHRlciIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJjb25maWciLCJqZWRpIiwidW5kZWZpbmVkIiwiaXNBY3RpdmUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInVpIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwicHJlcGFyZSIsImlzRWRpdG9yIiwic2V0VUkiLCJvbiIsIm9uQ2hpbGRDaGFuZ2UiLCJ1bnJlZ2lzdGVyIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsInNhbml0aXplIiwiZW1pdCIsImdldFZhbHVlIiwiZ2V0S2V5IiwiY2hpbGQiLCJUaGVtZUJhcmVib25lcyIsImFsZXJ0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhY3RpdmF0b3JzU2xvdCIsImFjdGlvbnNTbG90cyIsImNoaWxkcmVuU2xvdCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2VzU2xvdCIsImNvbnRyb2xTbG90IiwiY2hlY2tib3hMYWJlbCIsInNyT25seSIsInJhZGlvTGVnZW5kIiwicmFkaW9MYWJlbCIsImxhYmVsIiwibGVnZW5kIiwiaW5wdXQiLCJpZCIsImNoZWNrYm94IiwicmFkaW8iLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvblZhbHVlcyIsIm9wdGlvbnNMYWJlbHMiLCJhcHBlbmRDaGlsZCIsIlRoZW1lV2lyZWZyYW1lIiwiYnRuR3JvdXAiLCJjaGVja2JveENvbnRhaW5lciIsImZpZWxkc2V0IiwicmFkaW9Db250YWluZXIiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJFZGl0b3IiLCJpbnN0YW5jZSIsInRoZW1lIiwiYWN0aW9uc1Nsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsImdldENvbnRhaW5lciIsImdldEFjdGl2YXRvcnNTbG90IiwiZ2V0Q29udHJvbFNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldENoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsImdldEFsZXJ0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiTXVsdGlwbGVFZGl0b3IiLCJzd2l0Y2hlckJ1dHRvbnMiLCJzd2l0Y2hlciIsImdldEJ0bkdyb3VwIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJnZXRCdXR0b24iLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiTnVtYmVyIiwic3dpdGNoRWRpdG9yIiwib2xkRWRpdG9yIiwiZWRpdG9ycyIsImxhc3RJbmRleCIsImFjdGl2ZUVkaXRvciIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzYWJsZSIsImVuYWJsZSIsImdldEJ1dHRvbkFjdGl2ZUNsYXNzIiwicmVtb3ZlIiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwic2NoZW1hQ2xvbmUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwiY3JlYXRlSW5zdGFuY2UiLCJuZXdJbmRleCIsInNldFZhbHVlIiwibWF0Y2hFZGl0b3IiLCJCb29sZWFuRWRpdG9yIiwiZ2V0Q2hlY2tib3hDb250YWluZXIiLCJnZXRDaGVja2JveExhYmVsIiwiZ2V0Q2hlY2tib3giLCJjaGVja2VkIiwiZ2V0RGVzY3JpcHRpb24iLCJCb29sZWFuIiwicmVtb3ZlQXR0cmlidXRlIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsInJhZGlvSW5wdXRzIiwiZ2V0UmFkaW9MZWdlbmQiLCJnZXRSYWRpb0NvbnRhaW5lciIsImdldFJhZGlvIiwicmFkaW9WYWx1ZSIsImdldExhYmVsIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3QiLCJCb29sZWFuSW5zdGFuY2UiLCJPYmplY3RFZGl0b3IiLCJnZXRGaWVsZHNldCIsImdldExlZ2VuZCIsImFkZFByb3BlcnR5SW5wdXQiLCJnZXRJbnB1dCIsImFkZFByb3BlcnR5QnRuIiwiY3JlYXRlQ2hpbGQiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiYWN0aXZhdG9ySWQiLCJhY3RpdmF0b3JDb250YWluZXIiLCJhY3RpdmF0b3JMYWJlbCIsImFjdGl2YXRvcklucHV0IiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJnZXRDaGlsZCIsInJlZnJlc2hBY3RpdmF0b3JzIiwicmVmcmVzaEVkaXRvcnMiLCJPYmplY3RJbnN0YW5jZSIsIm9uU2V0VmFsdWUiLCJzcGxpY2UiLCJmaW5kIiwiaGFzUHJvcGVydHkiLCJkZWxldGVDaGlsZCIsIm9sZFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiQXJyYXlFZGl0b3IiLCJhZGRCdG4iLCJhZGRJdGVtIiwiZGVsZXRlQWxsQnRuIiwiY29uZmlybSIsIml0ZW1JbmRleCIsImRlbGV0ZUJ0biIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiQXJyYXlJbnN0YW5jZSIsInJlZnJlc2hDaGlsZHJlbiIsImZyb21JbmRleCIsInRlbXBFZGl0b3IiLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJjdXJyZW50VmFsdWUiLCJpdGVtVmFsdWUiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWEiLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiU3RyaW5nSW5zdGFuY2UiLCJTdHJpbmciLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVySW5zdGFuY2UiLCJ0eXBlSXNOdW1lcmljIiwiTnVsbEVkaXRvciIsIk51bGxJbnN0YW5jZSIsInNob3dSZXF1aXJlZE9ubHkiLCJpbnN0YW5jZXMiLCJyb290IiwicmVmUGFyc2VyIiwiZGVyZWZlcmVuY2UiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbklucHV0Iiwib3JpZ2luYWxTY2hl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QTJCO1FBQ3pCLEtBQUt3QixTQUFMLENBQWV5QyxTQUFmLEdBQTJCLEVBQTNCO01BQ0Q7O01BRURwTixNQUFNLENBQUNDLElBQVAsQ0FBWSxJQUFaLEVBQWtCQyxPQUFsQixDQUEwQixVQUFDQyxHQUFELEVBQVM7UUFDakMsT0FBTyxNQUFJLENBQUNBLEdBQUQsQ0FBWDtNQUNELENBRkQ7SUFHRDs7OztFQWxOZ0IrSCxhOztBQXFOSnZELGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgIT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3Qgbm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2ludGVnZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWRkaXRpb25hbFByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IGZhbHNlXG4gIH1cblxuICBhbnlPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYW55T2YpID8gdGhpcy5zY2hlbWEuYW55T2YgOiBmYWxzZVxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdCA/IHRoaXMuc2NoZW1hLmNvbnN0IDogZmFsc2VcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdCA/IHRoaXMuc2NoZW1hLmRlZmF1bHQgOiBmYWxzZVxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IGZhbHNlXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogZmFsc2VcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiBmYWxzZVxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm1hdCgpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pZikgPyB0aGlzLnNjaGVtYS5pZiA6IGZhbHNlXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgPyB0aGlzLnNjaGVtYS5ub3QgOiBmYWxzZVxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydHkgKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldID8gdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldIDogZmFsc2VcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICByZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQpXSA6IGZhbHNlXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgPyB0aGlzLnNjaGVtYS50aGVuIDogZmFsc2VcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiBmYWxzZVxuICB9XG5cbiAgdHlwZSAoKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLnR5cGUoKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlcyAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSlcbiAgfVxuXG4gIHR5cGVJc051bWVyaWMgKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVJcygnbnVtYmVyJykgfHwgdGhpcy50eXBlSXMoJ2ludGVnZXInKVxuICB9XG5cbiAgb25lT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLm9uZU9mKSA/IHRoaXMuc2NoZW1hLm9uZU9mIDogZmFsc2VcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcblxuZXhwb3J0IGNvbnN0IF9hbGxPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmFsbE9mKCkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFsbE9mRXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFsbE9mRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbkxlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1pbkxlbmd0aCgpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJleHBvcnQgY29uc3QgX2NvbnN0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5jb25zdCgpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSAoSlNPTi5zdHJpbmdpZnkodmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSkpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIHZhbHVlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX2FueU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5hbnlPZigpKSB7XG4gICAgY29uc3QgdmFsaWQgPSBzY2hlbWEuYW55T2YoKS5zb21lKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgIHJldHVybiBhbnlPZkVycm9ycy5sZW5ndGggPT09IDBcbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBtdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9kZXBlbmRlbnRSZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFPYmplY3QuaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImV4cG9ydCBjb25zdCBfZW51bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoc2NoZW1hLmVudW0oKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkgLSAxKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gKHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkgKyAxKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJleHBvcnQgY29uc3QgX2Zvcm1hdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEuZm9ybWF0KCkpIHtcbiAgICBsZXQgaW52YWxpZCA9IGZhbHNlXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgICAgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IF9pZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5pZigpKSB7XG4gICAgaWYgKCFzY2hlbWEudGhlbigpICYmICFzY2hlbWEuZWxzZSgpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoc2NoZW1hLnRoZW4oKSkge1xuICAgICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICAgIGVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgICB0aGVuRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2NoZW1hLmVsc2UoKSkge1xuICAgICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICAgIGVycm9ycyA9IGVsc2VFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWF4SXRlbXMoKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWF4TGVuZ3RoKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWF4UHJvcGVydGllcygpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1pbmltdW0oKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS5taW5JdGVtcygpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMoKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tdWx0aXBsZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubXVsdGlwbGVPZigpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZilcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcblxuZXhwb3J0IGNvbnN0IF9ub3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLm5vdCgpKSB7XG4gICAgY29uc3Qgbm90RXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcblxuZXhwb3J0IGNvbnN0IF9vbmVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEub25lT2YoKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEucGF0dGVybigpKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHByb3BlcnR5TmFtZVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3JlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEucmVxdWlyZWQoKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3R5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLnR5cGVzKCkpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoc2NoZW1hLnR5cGUoKSkge1xuICAgIGNvbnN0IHZhbGlkID0gc2NoZW1hLnR5cGUoKSA9PT0gZ2V0VHlwZSh2YWx1ZSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWF4aW11bSgpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3VuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS51bmlxdWVJdGVtcygpKSB7XG4gICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHNjaGVtYS5wcm9wZXJ0aWVzKClcbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGlmIChhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIU9iamVjdC5oYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogYFByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSBkb2VzIG5vdCBhbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXMuYCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhT2JqZWN0Lmhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByb290TmFtZTogcHJvcGVydHksXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBfYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgX21pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IF9hbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBfZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IF9leGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgX2Zvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IF9tYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBfbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBfbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IF9taW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgX21pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IF9taW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX211bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBfbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBfb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgX3BhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBfcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX3JlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IF90eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgX21heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyBfdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBfYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIF9hbGxPZixcbiAgX2FueU9mLFxuICBfY29uc3QsXG4gIF9kZXBlbmRlbnRSZXF1aXJlZCxcbiAgX2VudW0sXG4gIF9leGNsdXNpdmVNYXhpbXVtLFxuICBfZXhjbHVzaXZlTWluaW11bSxcbiAgX2Zvcm1hdCxcbiAgX2lmLFxuICBfbWF4aW11bSxcbiAgX21heEl0ZW1zLFxuICBfbWF4TGVuZ3RoLFxuICBfbWF4UHJvcGVydGllcyxcbiAgX21pbmltdW0sXG4gIF9taW5JdGVtcyxcbiAgX21pbkxlbmd0aCxcbiAgX21pblByb3BlcnRpZXMsXG4gIF9tdWx0aXBsZU9mLFxuICBfbm90LFxuICBfb25lT2YsXG4gIF9wYXR0ZXJuLFxuICBfcGF0dGVyblByb3BlcnRpZXMsXG4gIF9yZXF1aXJlZCxcbiAgX3R5cGUsXG4gIF91bmlxdWVJdGVtc1xuXVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnRcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICB0aGlzLmRyYWZ0LmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IDVcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgdGhpcy50cmF2ZXJzZSh0aGlzLmRlZnMpXG4gICAgICB0aGlzLnRyYXZlcnNlKHNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIy8kZGVmcycpKSB7XG4gICAgICBjb25zdCByZWZQYXJ0cyA9IHJlZi5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZWZOYW1lID0gcmVmUGFydHMucG9wKClcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmc1tkZWZOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmc1tkZWZOYW1lXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIHRyYXZlcnNlICh2YWx1ZSwgdGhpbmcsIGluZGV4KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlWyckcmVmJ10pICYmIGlzU2V0KHRoaW5nKSkge1xuICAgICAgICB0aGluZ1tpbmRleF0gPSB0aGlzLmRlZmluZSh2YWx1ZVsnJHJlZiddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmF2ZXJzZSh2YWx1ZVtpbmRleF0sIHZhbHVlLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoaXRlbSwgdmFsdWUsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5vcHRpb25zLnJvb3ROYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J1Mgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgbmV3VmFsdWUgPSB0aGlzLnNhbml0aXplKG5ld1ZhbHVlKVxuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGFsZXJ0LnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gYWxlcnRcbiAgfVxuXG4gIGdldEFjdGl2YXRvcnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3RpdmF0b3JzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aXZhdG9yc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBhY3RpdmF0b3JzU2xvdFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGFjdGlvbnNTbG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aW9uc1Nsb3RzLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gYWN0aW9uc1Nsb3RzXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hpbGRyZW5TbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gY2hpbGRyZW5TbG90XG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgbWVzc2FnZXNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gbWVzc2FnZXNTbG90XG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgY2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJhZGlvTGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgcmFkaW9MZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJhZGlvTGVnZW5kXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICByYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiByYWRpb0xhYmVsXG4gIH1cblxuICBnZXRMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6IGF1dG87JylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0SW5wdXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBzdXBlci5nZXRDaGVja2JveENvbnRhaW5lcigpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBzdXBlci5nZXRGaWVsZHNldCgpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBzdXBlci5nZXRDaGVja2JveExhYmVsKGNvbmZpZylcbiAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiByYWRpb0NvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVdpcmVmcmFtZVxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBhbGVydCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBhbGVydFxuICB9XG5cbiAgZ2V0SW5wdXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGlucHV0ID0gc3VwZXIuZ2V0SW5wdXQoY29uZmlnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBzdXBlci5nZXRGaWVsZHNldCgpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdweS0wJylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBzdXBlci5nZXRDaGVja2JveExhYmVsKGNvbmZpZylcbiAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gc3VwZXIuZ2V0UmFkaW9MYWJlbChjb25maWcpXG4gICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gc3VwZXIuZ2V0UmFkaW9Db250YWluZXIoKVxuICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiByYWRpb0NvbnRhaW5lclxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gc3VwZXIuZ2V0Q2hlY2tib3goY29uZmlnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gc3VwZXIuZ2V0UmFkaW8oY29uZmlnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gc3VwZXIuZ2V0VGV4dGFyZWEoY29uZmlnKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IHN1cGVyLmdldFNlbGVjdChjb25maWcpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcblxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdteS0zJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuLWZvY3VzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gc3VwZXIuZ2V0TGFiZWwoY29uZmlnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKVxuICAgIHJldHVybiBsYWJlbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lV2lyZWZyYW1lIGZyb20gJy4uL3RoZW1lcy93aXJlZnJhbWUnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmFjdGl2YXRvcnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY29udHJvbFNsb3QgPSBudWxsXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IG51bGxcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnd2lyZWZyYW1lJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5hY3RpdmF0b3JzU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aXZhdG9yc1Nsb3QoKVxuICAgIHRoaXMuY29udHJvbFNsb3QgPSB0aGlzLnRoZW1lLmdldENvbnRyb2xTbG90KClcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSB0aGlzLnRoZW1lLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLm1lc3NhZ2VzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gc3dpdGNoZXIgYnV0dG9uc1xuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zID0gW11cbiAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgdGhpcy5zd2l0Y2hlci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyBidXR0b25cbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgdmFsdWU6IGluZGV4XG4gICAgICB9KVxuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGJ1dHRvbi52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLnB1c2goYnV0dG9uKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRFZGl0b3IgPSB0aGlzLmluc3RhbmNlLmVkaXRvcnNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkRWRpdG9yLnVpLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRFZGl0b3IudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmNvbnRhaW5lcilcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmRpc2FibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuZW5hYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQsIGVxdWFsLCBkaWZmZXJlbnQsIG1lcmdlRGVlcCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmVkaXRvcnMgPSBbXVxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuYW55T2YoKSB8fCB0aGlzLnNjaGVtYS5vbmVPZigpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSB0aGlzLnNjaGVtYS5hbnlPZigpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKHNjaGVtYS5hbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlcygpKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlKCkuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ0FycmF5JywgJ09iamVjdCcsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEVkaXRvcnNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGVkaXRvci51bnJlZ2lzdGVyKClcblxuICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuZWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuZWRpdG9yc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKDAsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEVkaXRvciAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gdGhpcy5lZGl0b3JzW3RoaXMuaW5kZXhdXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUVkaXRvci5nZXRWYWx1ZSgpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpXG4gIH1cblxuICBtYXRjaEVkaXRvciAodmFsdWUsIGVkaXRvcnMpIHtcbiAgICBsZXQgaW5kZXggPSAwXG5cbiAgICBmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG4gICAgICBpZiAoZWRpdG9yLmVkaXRvcnMpIHtcbiAgICAgICAgZWRpdG9yLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoZXF1YWwoZWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUgKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgZWRpdG9yIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gZWRpdG9yIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgIHRoaXMubWF0Y2hFZGl0b3IodmFsdWUsIHRoaXMuZWRpdG9ycylcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBjaGVja2JveCBjb250YWluZXJcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMubGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2YXRvcnNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcblxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnR5IE5hbWUnLFxuICAgICAgZm9yOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWVcblxuICAgICAgLy8gaWYgbm90IHByb3BlcnR5IG5hbWUgd2FzIGdpdmVuIHJldHVyblxuICAgICAgaWYgKGtleS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHByb3BlcnR5IGV4aXN0IHJldHVyblxuICAgICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoeyB0eXBlOiAnYW55JyB9LCBrZXkpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJykpIHtcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlJbnB1dClcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG4gIH1cblxuICByZWZyZXNoQWN0aXZhdG9ycyAoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpKSB7XG4gICAgICB3aGlsZSAodGhpcy5hY3RpdmF0b3JzU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QucmVtb3ZlQ2hpbGQodGhpcy5hY3RpdmF0b3JzU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZhdG9ySWQgPSBjaGlsZC5wYXRoICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdG9yQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdG9yTGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgICAgIGZvcjogYWN0aXZhdG9ySWQsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IGNoaWxkLnNjaGVtYS50aXRsZSgpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvcklucHV0ID0gdGhpcy50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICAgICAgaWQ6IGFjdGl2YXRvcklkXG4gICAgICAgIH0pXG5cbiAgICAgICAgYWN0aXZhdG9ySW5wdXQuY2hlY2tlZCA9IE9iamVjdC5oYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgYWN0aXZhdG9ySW5wdXQuZGlzYWJsZWQgPSBpc1JlcXVpcmVkIHx8IGlzRGVwZW5kZW50UmVxdWlyZWQgfHwgZGlzYWJsZWRcblxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2YXRvcklucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZHNcbiAgICAgICAgdGhpcy5hY3RpdmF0b3JzU2xvdC5hcHBlbmRDaGlsZChhY3RpdmF0b3JDb250YWluZXIpXG4gICAgICAgIGFjdGl2YXRvckNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3RpdmF0b3JJbnB1dClcbiAgICAgICAgYWN0aXZhdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2YXRvckxhYmVsKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmdldENoaWxkKGtleSlcblxuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQWN0aXZhdG9ycygpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucmVxdWlyZWQoKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGRlcGVuZGVudFJlcXVpcmVkKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGhhc1Byb3BlcnR5IChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpXG5cbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5pbmNsdWRlcyhwcm9wZXJ0eU5hbWUpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuXG4gICAgLy8gYnRuIGdyb3VwXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90KVxuXG4gICAgICB3aGlsZSAoY2hpbGQudWkuYWN0aW9uc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBjaGlsZC51aS5hY3Rpb25zU2xvdC5yZW1vdmVDaGlsZChjaGlsZC51aS5hY3Rpb25zU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgIC8vIGRlbGV0ZVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgICAgfSlcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnVpLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGlzU2V0LCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5pdGVtcygpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgLy8gdG9kbyBmaWxlLCByYW5nZSBzaG91bGQgYmUgaGFuZGxlZCBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9XG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuXG5jbGFzcyBTdHJpbmdJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHRoaXMuc2NoZW1hLmVudW0oKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcblxuY2xhc3MgTnVtYmVySW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIHRoaXMuc2NoZW1hLmVudW0oKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG5jbGFzcyBOdWxsSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE51bGxFZGl0b3IodGhpcylcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGdldFR5cGUsIGlzU2V0IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnd2lyZWZyYW1lJyxcbiAgICAgIHJvb3ROYW1lOiAncm9vdCdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcigpXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5zY2hlbWEuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS5hbnlPZigpIHx8IGNvbmZpZy5zY2hlbWEub25lT2YoKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgY29uZmlnLnNjaGVtYS50eXBlcygpIHx8ICFjb25maWcuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgaWYgKCFjb25maWcuc2NoZW1hLnR5cGUoKSAmJiBjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IGNvbmZpZy5zY2hlbWEuY2xvbmUoKVxuICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShjb25maWcuc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgY29uc3QgbmV3U2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShuZXdTY2hlbWEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBPYmplY3RJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdW1iZXJJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHNldFRoZW1lICh0aGVtZSkge1xuICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQnUyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=