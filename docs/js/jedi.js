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

  if (isArray(schema.type())) {
    return errors;
  }

  if (schema.typeIs('any')) {
    return errors;
  }

  if (schema.type()) {
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
    var valid = types[schema.type()](value);

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
    var properties = schema.properties() || {};
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
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var invalidFeedback = document.createElement('div');
      invalidFeedback.classList.add('jedi-error-message');
      invalidFeedback.textContent = config.message;
      return invalidFeedback;
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

      if (isSet(this.instances[0])) {
        this.switchInstance(0, false);
      }
    }
  }, {
    key: "switchInstance",
    value: function switchInstance(newIndex) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.lastIndex = this.index;
      this.index = newIndex;
      this.activeInstance = this.instances[this.index];
      this.setValue(this.getValue(), triggersChange);
    }
  }, {
    key: "matchInstance",
    value: function matchInstance(value) {
      var index = 0;

      var _iterator = _createForOfIteratorHelper(this.instances),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var instance = _step.value;

          if (instance.instances) {
            instance.setValue(value);
          }

          if (equal(instance.getValue(), value)) {
            this.switchInstance(index);
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
    key: "onSetValue",
    value: function onSetValue() {
      var value = this.value; // if value matches the active instance type set the value. Else switch to the first
      // instance that match the value.

      if (different(this.activeInstance.sanitize(value), value)) {
        this.matchInstance(value);
      }

      this.activeInstance.setValue(value, true);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.activeInstance.getValue();
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return this.activeInstance.sanitize(value);
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
      this.controlSlot.appendChild(this.messagesSlot);
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

      // label
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

      this.fieldset.appendChild(this.messagesSlot);
      this.fieldset.appendChild(this.activatorsSlot);
      this.fieldset.appendChild(this.actionsSlot);
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

      if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
        this.actionsSlot.appendChild(label);
        this.actionsSlot.appendChild(this.addPropertyInput);
        this.actionsSlot.appendChild(this.addPropertyBtn);
      }
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

      if (this.schema.properties()) {
        Object.keys(this.schema.properties()).forEach(function (key) {
          var schema = _this.schema.property(key);

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
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(message) {
      return this.theme.getAlert({
        message: message
      });
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

      if (!isArray(value)) {
        return;
      }

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

      // label
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
      this.controlSlot.appendChild(this.messagesSlot);
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
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot); // events

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
      if (this.schema.typeIs('string') && this.schema["enum"]() && this.schema.formatIs('radio')) {
        this.ui = new string_enum_radio(this);
      } else if (this.schema.typeIs('string') && this.schema["enum"]()) {
        this.ui = new string_enum_select(this);
      } else if (this.schema.typeIs('string')) {
        this.ui = new editors_string(this);
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

      // label
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
        var value = _this.sanitize(_this.input.value);

        _this.instance.setValue(value);
      }); // description

      if (this.instance.schema.description()) {
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
      this.controlSlot.appendChild(this.messagesSlot);
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
      if (this.schema.typeIsNumeric() && this.schema["enum"]() && this.schema.formatIs('radio')) {
        this.ui = new number_enum_radio(this);
      } else if (this.schema.typeIsNumeric() && this.schema["enum"]()) {
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

      if (config.schema.anyOf() || config.schema.oneOf() || config.schema.typeIs('any') || isArray(config.schema.type()) || !config.schema.type()) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXF1YWwiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsInZhbHVlIiwiaXNTZXQiLCJub3RTZXQiLCJpc051bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiaXNPYmplY3QiLCJnZXRUeXBlIiwidHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsInNvdXJjZXMiLCJsZW5ndGgiLCJzb3VyY2UiLCJzaGlmdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYXNzaWduIiwiU2NoZW1hIiwic2NoZW1hIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsImFueU9mIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIl9hbGxPZiIsInZhbGlkYXRvciIsInBhdGgiLCJlcnJvcnMiLCJhbGxPZkVycm9ycyIsInZhbGlkYXRlIiwiX21pbkxlbmd0aCIsImludmFsaWQiLCJmaWVsZCIsInB1c2giLCJtZXNzYWdlIiwiX2NvbnN0IiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJfYW55T2YiLCJ2YWxpZCIsInNvbWUiLCJhbnlPZkVycm9ycyIsIl9kZXBlbmRlbnRSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyIiwicHJvcGVydHkiLCJoYXNPd24iLCJqb2luIiwiX2VudW0iLCJlIiwiX2V4Y2x1c2l2ZU1heGltdW0iLCJjb21wdXRlZE1heGltdW0iLCJfZXhjbHVzaXZlTWluaW11bSIsImNvbXB1dGVkTWluaW11bSIsIl9mb3JtYXQiLCJmb3JtYXRJcyIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJfaWYiLCJpZkVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwiaWZFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZGVzdHJveSIsImVsc2VFZGl0b3IiLCJfbWF4SXRlbXMiLCJfbWF4TGVuZ3RoIiwiX21heFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzQ291bnQiLCJfbWluaW11bSIsIl9taW5JdGVtcyIsIl9taW5Qcm9wZXJ0aWVzIiwiX211bHRpcGxlT2YiLCJpc011bHRpcGxlT2YiLCJfbm90Iiwibm90RXJyb3JzIiwiX29uZU9mIiwiY291bnRlciIsIm9uZU9mRXJyb3JzIiwiX3BhdHRlcm4iLCJfcGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3IiLCJfcmVxdWlyZWQiLCJpbmNsdWRlcyIsIl90eXBlIiwidHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJpbnRlZ2VyIiwiYXJyYXkiLCJvYmplY3QiLCJfbWF4aW11bSIsIl91bmlxdWVJdGVtcyIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJpIiwiaXRlbSIsIl9hZGRpdGlvbmFsUHJvcGVydGllcyIsInJvb3ROYW1lIiwiYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzIiwibWFwIiwiZXJyb3IiLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInZhbGlkYXRvckVycm9ycyIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJkZWZzIiwidHJhdmVyc2UiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVmUGFydHMiLCJzcGxpdCIsImRlZk5hbWUiLCJwb3AiLCJpbmRleCIsImRlZmluZSIsIkV2ZW50RW1pdHRlciIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJjb25maWciLCJqZWRpIiwidW5kZWZpbmVkIiwiaXNBY3RpdmUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInVpIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwicHJlcGFyZSIsImlzRWRpdG9yIiwic2V0VUkiLCJvbiIsIm9uQ2hpbGRDaGFuZ2UiLCJ1bnJlZ2lzdGVyIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsImVtaXQiLCJnZXRWYWx1ZSIsImdldEtleSIsImNoaWxkIiwiVGhlbWVCYXJlYm9uZXMiLCJhbGVydCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiaW52YWxpZEZlZWRiYWNrIiwiYWN0aXZhdG9yc1Nsb3QiLCJhY3Rpb25zU2xvdHMiLCJjaGlsZHJlblNsb3QiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJtZXNzYWdlc1Nsb3QiLCJjb250cm9sU2xvdCIsImNoZWNrYm94TGFiZWwiLCJzck9ubHkiLCJyYWRpb0xlZ2VuZCIsInJhZGlvTGFiZWwiLCJsYWJlbCIsImxlZ2VuZCIsImlucHV0IiwiaWQiLCJjaGVja2JveCIsInJhZGlvIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwiYXBwZW5kQ2hpbGQiLCJUaGVtZVdpcmVmcmFtZSIsImJ0bkdyb3VwIiwiZmllbGRzZXQiLCJyYWRpb0NvbnRhaW5lciIsIlRoZW1lQm9vdHN0cmFwNCIsImNoZWNrYm94Q29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA1IiwiRWRpdG9yIiwiaW5zdGFuY2UiLCJ0aGVtZSIsImFjdGlvbnNTbG90IiwiZGlzYWJsZWQiLCJidWlsZCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJyZWZyZXNoVUkiLCJhbHdheXNTaG93RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJnZXRDb250YWluZXIiLCJnZXRBY3RpdmF0b3JzU2xvdCIsImdldENvbnRyb2xTbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJpbm5lckhUTUwiLCJnZXRJbnZhbGlkRmVlZGJhY2siLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJNdWx0aXBsZUVkaXRvciIsInN3aXRjaGVyQnV0dG9ucyIsInN3aXRjaGVyIiwiZ2V0QnRuR3JvdXAiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsImdldEJ1dHRvbiIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJOdW1iZXIiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc2FibGUiLCJlbmFibGUiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsInJlbW92ZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJzY2hlbWFDbG9uZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJjcmVhdGVJbnN0YW5jZSIsIm5ld0luZGV4Iiwic2V0VmFsdWUiLCJzYW5pdGl6ZSIsIm1hdGNoSW5zdGFuY2UiLCJCb29sZWFuRWRpdG9yIiwiZ2V0Q2hlY2tib3hDb250YWluZXIiLCJnZXRDaGVja2JveExhYmVsIiwiZ2V0Q2hlY2tib3giLCJjaGVja2VkIiwiZ2V0RGVzY3JpcHRpb24iLCJCb29sZWFuIiwicmVtb3ZlQXR0cmlidXRlIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsInJhZGlvSW5wdXRzIiwiZ2V0UmFkaW9MZWdlbmQiLCJnZXRSYWRpb0NvbnRhaW5lciIsImdldFJhZGlvIiwicmFkaW9WYWx1ZSIsImdldExhYmVsIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3QiLCJCb29sZWFuSW5zdGFuY2UiLCJPYmplY3RFZGl0b3IiLCJnZXRGaWVsZHNldCIsImdldExlZ2VuZCIsImFkZFByb3BlcnR5SW5wdXQiLCJnZXRJbnB1dCIsImFkZFByb3BlcnR5QnRuIiwiY3JlYXRlQ2hpbGQiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJnZXRBbGVydCIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJhY3RpdmF0b3JJZCIsImFjdGl2YXRvckNvbnRhaW5lciIsImFjdGl2YXRvckxhYmVsIiwiYWN0aXZhdG9ySW5wdXQiLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsInJlZnJlc2hBY3RpdmF0b3JzIiwicmVmcmVzaEVkaXRvcnMiLCJPYmplY3RJbnN0YW5jZSIsInJlZnJlc2hJbnN0YW5jZXMiLCJzcGxpY2UiLCJmaW5kIiwiaGFzUHJvcGVydHkiLCJkZWxldGVDaGlsZCIsImdldENoaWxkIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJBcnJheUVkaXRvciIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwiaXRlbUluZGV4IiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJBcnJheUluc3RhbmNlIiwicmVmcmVzaENoaWxkcmVuIiwiZnJvbUluZGV4IiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsImN1cnJlbnRWYWx1ZSIsIml0ZW1WYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJnZXRUZXh0YXJlYSIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJTdHJpbmdJbnN0YW5jZSIsIlN0cmluZyIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJOdWxsRWRpdG9yIiwiTnVsbEluc3RhbmNlIiwic2hvd1JlcXVpcmVkT25seSIsInJvb3QiLCJyZWZQYXJzZXIiLCJkZXJlZmVyZW5jZSIsImFwcGVuZEhpZGRlbklucHV0IiwiaGlkZGVuSW5wdXQiLCJvcmlnaW5hbFNjaGVtYSIsIm5ld1NjaGVtYSIsInJlc29sdmUiLCJhcmd1bWVudHMiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsK0c7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0c7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7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LEVBQTJCO1FBQ3pCLEtBQUt3QixTQUFMLENBQWV5QyxTQUFmLEdBQTJCLEVBQTNCO01BQ0Q7O01BQ0QsS0FBSzRILElBQUwsQ0FBVXRRLE9BQVY7TUFDQSxLQUFLcUUsSUFBTDtJQUNEOzs7V0FFRCxrQkFBVXVELEtBQVYsRUFBaUI7TUFDZixLQUFLaEwsT0FBTCxDQUFhZ0wsS0FBYixHQUFxQkEsS0FBckI7TUFDQSxLQUFLbUosS0FBTDtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsbUJBQVc7TUFBQTs7TUFDVCxLQUFLVCxJQUFMLENBQVV0USxPQUFWOztNQUVBLElBQUksS0FBS3BELE9BQUwsQ0FBYTZILFFBQWpCLEVBQTJCO1FBQ3pCLEtBQUt3QixTQUFMLENBQWV5QyxTQUFmLEdBQTJCLEVBQTNCO01BQ0Q7O01BRUR6TixNQUFNLENBQUNDLElBQVAsQ0FBWSxJQUFaLEVBQWtCQyxPQUFsQixDQUEwQixVQUFDQyxHQUFELEVBQVM7UUFDakMsT0FBTyxNQUFJLENBQUNBLEdBQUQsQ0FBWDtNQUNELENBRkQ7SUFHRDs7OztFQWxOZ0JvSSxhOztBQXFOSjVELGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgIT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3Qgbm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSBpc0ludGVnZXIodmFsdWUpID8gJ2ludGVnZXInIDogJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ3N0cmluZydcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgdHlwZSA9ICdib29sZWFuJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSdcbiAgfSBlbHNlIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudWxsJ1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnb2JqZWN0J1xuICB9XG5cbiAgcmV0dXJuIHR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IG1lcmdlRGVlcCA9ICh0YXJnZXQsIC4uLnNvdXJjZXMpID0+IHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldFxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgICBba2V5XToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhZGRpdGlvbmFsUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB0cnVlXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiBmYWxzZVxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29uc3QgPyB0aGlzLnNjaGVtYS5jb25zdCA6IGZhbHNlXG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHQgPyB0aGlzLnNjaGVtYS5kZWZhdWx0IDogZmFsc2VcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiBmYWxzZVxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IGZhbHNlXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogZmFsc2VcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy5mb3JtYXQoKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpID8gdGhpcy5zY2hlbWEuaWYgOiBmYWxzZVxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IGZhbHNlXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpID8gdGhpcy5zY2hlbWEubm90IDogZmFsc2VcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHByb3BlcnR5IChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucHJvcGVydGllcyA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiBmYWxzZVxuICB9XG5cbiAgdGhlbiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pID8gdGhpcy5zY2hlbWEudGhlbiA6IGZhbHNlXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogZmFsc2VcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdHlwZUlzICh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy50eXBlKCkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiBmYWxzZVxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWFcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX2FsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYWxsT2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWxsT2ZFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWluTGVuZ3RoKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmNvbnN0KCkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdmFsdWU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmFueU9mKCkpIHtcbiAgICBjb25zdCB2YWxpZCA9IHNjaGVtYS5hbnlPZigpLnNvbWUoKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgcmV0dXJuIGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMFxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2RlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiZXhwb3J0IGNvbnN0IF9lbnVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChzY2hlbWEuZW51bSgpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSAtIDEpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSArIDEpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImV4cG9ydCBjb25zdCBfZm9ybWF0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5mb3JtYXQoKSkge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2VcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgIH1cblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmlmKCkpIHtcbiAgICBpZiAoIXNjaGVtYS50aGVuKCkgJiYgIXNjaGVtYS5lbHNlKCkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChzY2hlbWEudGhlbigpKSB7XG4gICAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzY2hlbWEuZWxzZSgpKSB7XG4gICAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS5tYXhJdGVtcygpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5tYXhMZW5ndGgoKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWluaW11bSgpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1pbkl0ZW1zKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWluUHJvcGVydGllcygpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX211bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5tdWx0aXBsZU9mKCkpIHtcbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX25vdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEubm90KCkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEubm90KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX29uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5vbmVPZigpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm4gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuKCkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSB7XG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gcHJvcGVydHlOYW1lXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5yZXF1aXJlZCgpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKHNjaGVtYS50eXBlKCkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1heGltdW0oKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF91bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEudW5pcXVlSXRlbXMoKSkge1xuICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IF9hZGRpdGlvbmFsUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBzY2hlbWEucHJvcGVydGllcygpIHx8IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBpZiAoYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFPYmplY3QuaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIU9iamVjdC5oYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcm9vdE5hbWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgX2FsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IF9taW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBfYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2RlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IF9mb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBfbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgX21heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgX21heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IF9taW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBfbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IF9tdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgX25vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgX29uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IF9wYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgX3BhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IF9yZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyBfdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IF9tYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgX3VuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IF9hZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBfYWxsT2YsXG4gIF9hbnlPZixcbiAgX2NvbnN0LFxuICBfZGVwZW5kZW50UmVxdWlyZWQsXG4gIF9lbnVtLFxuICBfZXhjbHVzaXZlTWF4aW11bSxcbiAgX2V4Y2x1c2l2ZU1pbmltdW0sXG4gIF9mb3JtYXQsXG4gIF9pZixcbiAgX21heGltdW0sXG4gIF9tYXhJdGVtcyxcbiAgX21heExlbmd0aCxcbiAgX21heFByb3BlcnRpZXMsXG4gIF9taW5pbXVtLFxuICBfbWluSXRlbXMsXG4gIF9taW5MZW5ndGgsXG4gIF9taW5Qcm9wZXJ0aWVzLFxuICBfbXVsdGlwbGVPZixcbiAgX25vdCxcbiAgX29uZU9mLFxuICBfcGF0dGVybixcbiAgX3BhdHRlcm5Qcm9wZXJ0aWVzLFxuICBfcmVxdWlyZWQsXG4gIF90eXBlLFxuICBfdW5pcXVlSXRlbXNcbl1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgdGhpcy5kcmFmdC5mb3JFYWNoKCh2YWxpZGF0b3IpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hLm9wdGlvbignbWVzc2FnZScpKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLml0ZXJhdGlvbnMgPSA1XG4gICAgdGhpcy5kZWZzID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICB0aGlzLmRlZnMgPSBzY2hlbWFbJyRkZWZzJ11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIHRoaXMudHJhdmVyc2UodGhpcy5kZWZzKVxuICAgICAgdGhpcy50cmF2ZXJzZShzY2hlbWEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMvJGRlZnMnKSkge1xuICAgICAgY29uc3QgcmVmUGFydHMgPSByZWYuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZGVmTmFtZSA9IHJlZlBhcnRzLnBvcCgpXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZnNbZGVmTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZnNbZGVmTmFtZV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICB0cmF2ZXJzZSAodmFsdWUsIHRoaW5nLCBpbmRleCkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVsnJHJlZiddKSAmJiBpc1NldCh0aGluZykpIHtcbiAgICAgICAgdGhpbmdbaW5kZXhdID0gdGhpcy5kZWZpbmUodmFsdWVbJyRyZWYnXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudHJhdmVyc2UodmFsdWVbaW5kZXhdLCB2YWx1ZSwgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGl0ZW0sIHZhbHVlLCBpbmRleClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkub3B0aW9ucy5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgLy8gaWYgKHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgIC8vICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGFsZXJ0LnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gYWxlcnRcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBpbnZhbGlkRmVlZGJhY2sudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEFjdGl2YXRvcnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3RpdmF0b3JzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aXZhdG9yc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBhY3RpdmF0b3JzU2xvdFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGFjdGlvbnNTbG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aW9uc1Nsb3RzLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gYWN0aW9uc1Nsb3RzXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hpbGRyZW5TbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gY2hpbGRyZW5TbG90XG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVzc2FnZXNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIG1lc3NhZ2VzU2xvdFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGNoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICByYWRpb0xlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHJhZGlvTGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiByYWRpb0xlZ2VuZFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICByYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1pbmZvJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHN1cGVyLmdldEZpZWxkc2V0KClcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IHN1cGVyLmdldENoZWNrYm94TGFiZWwoY29uZmlnKVxuICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlubGluZScpXG4gICAgcmV0dXJuIHJhZGlvQ29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gc3VwZXIuZ2V0UmFkaW9MYWJlbChjb25maWcpXG4gICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gc3VwZXIuZ2V0UmFkaW8oY29uZmlnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gc3VwZXIuZ2V0VGV4dGFyZWEoY29uZmlnKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IHN1cGVyLmdldFNlbGVjdChjb25maWcpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gYWxlcnRcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gc3VwZXIuZ2V0RmllbGRzZXQoKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncHktMCcpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gc3VwZXIuZ2V0Q2hlY2tib3hMYWJlbChjb25maWcpXG4gICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHN1cGVyLmdldENoZWNrYm94Q29udGFpbmVyKClcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gcmFkaW9Db250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcblxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdteS0zJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuLWZvY3VzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gc3VwZXIuZ2V0TGFiZWwoY29uZmlnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKVxuICAgIHJldHVybiBsYWJlbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lV2lyZWZyYW1lIGZyb20gJy4uL3RoZW1lcy93aXJlZnJhbWUnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmFjdGl2YXRvcnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY29udHJvbFNsb3QgPSBudWxsXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IG51bGxcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnd2lyZWZyYW1lJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5hY3RpdmF0b3JzU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aXZhdG9yc1Nsb3QoKVxuICAgIHRoaXMuY29udHJvbFNsb3QgPSB0aGlzLnRoZW1lLmdldENvbnRyb2xTbG90KClcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSB0aGlzLnRoZW1lLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIHN3aXRjaGVyIGJ1dHRvbnNcbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIHRoaXMuc3dpdGNoZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gYnV0dG9uXG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHZhbHVlOiBpbmRleFxuICAgICAgfSlcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihidXR0b24udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoSW5zdGFuY2UoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLnB1c2goYnV0dG9uKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEluc3RhbmNlLnVpLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRJbnN0YW5jZS51aS5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5jb250YWluZXIpXG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoKE51bWJlcihidXR0b24udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5pbmRleCkpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0LCBlcXVhbCwgbWVyZ2VEZWVwLCBpc0FycmF5LCBkaWZmZXJlbnQgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLnNjaGVtYS5hbnlPZigpIHx8IHRoaXMuc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IHRoaXMuc2NoZW1hLmFueU9mKCkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoc2NoZW1hLmFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS5vcHRpb25zPy5zd2l0Y2hlclRpdGxlIHx8ICdPcHRpb24tJyArIChpbmRleCArIDEpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW5jZXNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZXNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKDAsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMuaW5kZXhdXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICB9XG5cbiAgbWF0Y2hJbnN0YW5jZSAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoZXF1YWwoaW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoaW5kZXgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBpbnN0YW5jZSB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGluc3RhbmNlIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5zYW5pdGl6ZSh2YWx1ZSksIHZhbHVlKSkge1xuICAgICAgdGhpcy5tYXRjaEluc3RhbmNlKHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2FuaXRpemUodmFsdWUpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIHRoaXMubGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBlcXVhbCwgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuYWN0aXZhdG9yc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcblxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnR5IE5hbWUnLFxuICAgICAgZm9yOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWVcblxuICAgICAgLy8gaWYgbm90IHByb3BlcnR5IG5hbWUgd2FzIGdpdmVuIHJldHVyblxuICAgICAgaWYgKGtleS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHByb3BlcnR5IGV4aXN0IHJldHVyblxuICAgICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoeyB0eXBlOiAnYW55JyB9LCBrZXkpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG5cbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUlucHV0KVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaEFjdGl2YXRvcnMgKCkge1xuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5hY3RpdmF0b3JzU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QucmVtb3ZlQ2hpbGQodGhpcy5hY3RpdmF0b3JzU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZhdG9ySWQgPSBjaGlsZC5wYXRoICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdG9yQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdG9yTGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgICAgIGZvcjogYWN0aXZhdG9ySWQsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IGNoaWxkLnNjaGVtYS50aXRsZSgpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvcklucHV0ID0gdGhpcy50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICAgICAgaWQ6IGFjdGl2YXRvcklkXG4gICAgICAgIH0pXG5cbiAgICAgICAgYWN0aXZhdG9ySW5wdXQuY2hlY2tlZCA9IE9iamVjdC5oYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgYWN0aXZhdG9ySW5wdXQuZGlzYWJsZWQgPSBpc1JlcXVpcmVkIHx8IGlzRGVwZW5kZW50UmVxdWlyZWQgfHwgZGlzYWJsZWRcblxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2YXRvcklucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZHNcbiAgICAgICAgdGhpcy5hY3RpdmF0b3JzU2xvdC5hcHBlbmRDaGlsZChhY3RpdmF0b3JDb250YWluZXIpXG4gICAgICAgIGFjdGl2YXRvckNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3RpdmF0b3JJbnB1dClcbiAgICAgICAgYWN0aXZhdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2YXRvckxhYmVsKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEFjdGl2YXRvcnMoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGRpZmZlcmVudCwgaXNTZXQsIG5vdFNldCwgZ2V0VHlwZSwgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5cbmNsYXNzIE9iamVjdEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBPYmplY3RFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnR5KGtleSlcbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoZGVwZW5kZW50UmVxdWlyZWQpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KCcuJykucG9wKClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgaGFzUHJvcGVydHkgKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClcblxuICAgIGlmICghcHJvcGVydGllcykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmluY2x1ZGVzKHByb3BlcnR5TmFtZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5oYXNQcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuXG4gICAgLy8gYnRuIGdyb3VwXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgY2hpbGQudWkuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuYWN0aW9uc1Nsb3QpXG5cbiAgICAgIHdoaWxlIChjaGlsZC51aS5hY3Rpb25zU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNoaWxkLnVpLmFjdGlvbnNTbG90LnJlbW92ZUNoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgLy8gZGVsZXRlXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgICB9KVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICAgIC8vIG1vdmUgdXBcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGRvd25cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIH1cblxuICAgICAgY2hpbGQudWkuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgLy8gdG9kbyBmaWxlLCByYW5nZSBzaG91bGQgYmUgaGFuZGxlZCBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnY29sb3InKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG5cbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgdGhpcy5zY2hlbWEuZW51bSgpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTXVsdGlwbGVJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgQXJyYXlJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBTdHJpbmdJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IE51bGxJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ3dpcmVmcmFtZScsXG4gICAgICByb290TmFtZTogJ3Jvb3QnXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcbiAgICB0aGlzLnJlZlBhcnNlciA9IG51bGxcbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoKVxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuICAgIHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMuc2NoZW1hLnNjaGVtYSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIGlmIChjb25maWcuc2NoZW1hLmFueU9mKCkgfHwgY29uZmlnLnNjaGVtYS5vbmVPZigpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCAhY29uZmlnLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGlmICghY29uZmlnLnNjaGVtYS50eXBlKCkgJiYgY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUobmV3U2NoZW1hKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMub3B0aW9ucy5zdGFydFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J1MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9