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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(10);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
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

var superPropBase = __webpack_require__(18);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(16);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(7)["default"];
var assertThisInitialized = __webpack_require__(17);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(11);
var iterableToArray = __webpack_require__(12);
var unsupportedIterableToArray = __webpack_require__(13);
var nonIterableSpread = __webpack_require__(14);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(10);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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
/* 9 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(7)["default"];
var toPrimitive = __webpack_require__(15);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(7)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
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
/* 19 */
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
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(5);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(0);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(8);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(7);
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
      var subSchemaEditor = new jedi({
        schema: schema,
        startValue: value,
        rootName: key,
        refParser: false
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
      var anyOfEditor = new jedi({
        schema: schema,
        startValue: value,
        refParser: false
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
    var message;
    var regexp;
    if (schema.formatIs('email')) {
      regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
      message = 'Must be a valid email address';
    }
    if (schema.formatIs('url')) {
      regexp = new RegExp(/^(?:http[s\u017F]?|ftp):\/\/(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!(?:10|127)(?:\.[0-9]{1,3}){3})(?!(?:169\.254|192\.168)(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])*)?$/i);
      message = 'Must be a valid email url';
    }
    if (schema.formatIs('uuid')) {
      regexp = new RegExp(/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i);
      message = 'Must be a valid email uuid';
    }
    var invalid = isSet(regexp) && !regexp.test(value);
    if (invalid) {
      errors.push({
        message: message,
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
    var ifEditor = new jedi({
      schema: schema["if"](),
      startValue: value,
      refParser: false
    });
    var ifErrors = ifEditor.validate();
    ifEditor.destroy();
    var thenErrors = [];
    var elseErrors = [];
    if (isSet(schema.then())) {
      var thenEditor = new jedi({
        schema: schema.then(),
        startValue: value,
        refParser: false
      });
      thenErrors = thenEditor.validate();
      thenEditor.destroy();
    }
    if (isSet(schema["else"]())) {
      var elseEditor = new jedi({
        schema: schema["else"](),
        startValue: value,
        refParser: false
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
      var oneOfEditor = new jedi({
        schema: schema,
        startValue: value,
        refParser: false
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
          var editor = new jedi({
            schema: _schema,
            startValue: value[propertyName],
            refParser: false
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
          var editor = new jedi({
            rootName: property,
            schema: additionalProperties,
            startValue: value[property],
            refParser: false
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
var get = __webpack_require__(3);
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
    key: "getContainer",
    value: function getContainer() {
      var container = document.createElement('div');
      container.classList.add('jedi-editor-container');
      return container;
    }
  }, {
    key: "getContainerHead",
    value: function getContainerHead(config) {
      var html = document.createElement('legend');
      html.textContent = config.textContent;
      html.classList.add('jedi-container-head');
      if (config.srOnly) {
        html.classList.add('sr-only');
      }
      return html;
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-properties-slot');
      return html;
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-actions-slot');
      return html;
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-child-editors-slot');
      return html;
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
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var html = this.getButton(config);
      html.classList.add('jedi-properties-toggle');
      return html;
    }
  }, {
    key: "getPropertiesActivators",
    value: function getPropertiesActivators() {
      var html = document.createElement('div');
      html.classList.add('jedi-properties-container');
      return html;
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
      if (config.id) {
        button.setAttribute('id', config.value);
      }
      button.textContent = config.textContent;
      return button;
    }
  }, {
    key: "getArrayBtnAdd",
    value: function getArrayBtnAdd(config) {
      var html = this.getButton(config);
      html.classList.add('jedi-array-add');
      return html;
    }
  }, {
    key: "getArrayBtnDeleteAll",
    value: function getArrayBtnDeleteAll(config) {
      var html = this.getButton(config);
      html.classList.add('jedi-array-delete-all');
      return html;
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-info';
    }
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      return document.createElement('fieldset');
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var description = document.createElement('small');
      description.textContent = config.textContent;
      return description;
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
    key: "getAlert",
    value: function getAlert(config) {
      var html = document.createElement('p');
      html.classList.add('jedi-error-message');
      html.textContent = config.message;
      return html;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = document.createElement('div');
      html.classList.add('jedi-error-message');
      html.textContent = config.message;
      return html;
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
      var html = document.createElement('div');
      html.classList.add('card');
      return html;
    }
  }, {
    key: "getContainerHead",
    value: function getContainerHead(config) {
      var html = document.createElement('div');
      html.textContent = config.textContent;
      html.classList.add('card-header');
      if (config.srOnly) {
        html.classList.add('sr-only');
      }
      return html;
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
// CONCATENATED MODULE: ./src/themes/bootstrap3.js






function bootstrap3_createSuper(Derived) { var hasNativeReflectConstruct = bootstrap3_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function bootstrap3_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var bootstrap3_ThemeBootstrap3 = /*#__PURE__*/function (_ThemeBarebones) {
  inherits_default()(ThemeBootstrap3, _ThemeBarebones);
  var _super = bootstrap3_createSuper(ThemeBootstrap3);
  function ThemeBootstrap3() {
    classCallCheck_default()(this, ThemeBootstrap3);
    return _super.apply(this, arguments);
  }
  createClass_default()(ThemeBootstrap3, [{
    key: "getAlert",
    value: function getAlert(config) {
      var alert = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getAlert", this).call(this, config);
      alert.classList.add('alert');
      alert.classList.add('alert-danger');
      return alert;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var invalidFeedback = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getInvalidFeedback", this).call(this, config);
      invalidFeedback.classList.add('invalid-feedback');
      invalidFeedback.classList.add('d-block');
      return invalidFeedback;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var btnGroup = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getBtnGroup", this).call(this);
      btnGroup.classList.add('btn-group');
      btnGroup.classList.add('mb-3');
      return btnGroup;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getButton", this).call(this, config);
      html.classList.add('btn');
      html.classList.add('btn-xs');
      html.classList.add('btn-default');
      return html;
    }
  }, {
    key: "getArrayBtnAdd",
    value: function getArrayBtnAdd(config) {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getArrayBtnAdd", this).call(this, config);
    }
  }, {
    key: "getArrayBtnDeleteAll",
    value: function getArrayBtnDeleteAll(config) {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getArrayBtnAdd", this).call(this, config);
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getActionsSlot", this).call(this);
      html.classList.add('pull-right');
      return html;
    }
  }, {
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var html = this.getButton(config);
      html.setAttribute('data-toggle', 'collapse');
      html.setAttribute('data-target', '#' + config.id);
      html.classList.add('jedi-properties-toggle');
      html.classList.add('pull-right');
      return html;
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getChildrenSlot", this).call(this);
      html.classList.add('panel-body');
      return html;
    }
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      var html = document.createElement('div');
      html.classList.add('panel');
      html.classList.add('panel-default');
      return html;
    }
  }, {
    key: "getContainerHead",
    value: function getContainerHead(config) {
      var html = document.createElement('div');
      html.textContent = config.textContent;
      html.classList.add('jedi-container-head');
      html.classList.add('panel-heading');
      if (config.srOnly) {
        html.classList.add('sr-only');
      }
      return html;
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getPropertiesSlot", this).call(this);
      html.classList.add('collapse');
      html.classList.add('panel-body');
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getCheckboxLabel",
    value: function getCheckboxLabel(config) {
      var checkboxLabel = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getCheckboxLabel", this).call(this, config);
      checkboxLabel.classList.add('form-check-label');
      return checkboxLabel;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var radioLabel = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getRadioLabel", this).call(this, config);
      radioLabel.classList.add('form-check-label');
      return radioLabel;
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var controlSlot = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getControlSlot", this).call(this);
      controlSlot.classList.add('form-group');
      return controlSlot;
    }
  }, {
    key: "getCheckboxContainer",
    value: function getCheckboxContainer() {
      var checkboxContainer = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getCheckboxContainer", this).call(this);
      checkboxContainer.classList.add('form-check');
      return checkboxContainer;
    }
  }, {
    key: "getRadioContainer",
    value: function getRadioContainer() {
      var radioContainer = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getRadioContainer", this).call(this);
      radioContainer.classList.add('form-check');
      return radioContainer;
    }
  }, {
    key: "getCheckbox",
    value: function getCheckbox(config) {
      var checkbox = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getCheckbox", this).call(this, config);
      checkbox.classList.add('form-check-input');
      return checkbox;
    }
  }, {
    key: "getRadio",
    value: function getRadio(config) {
      var radio = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getRadio", this).call(this, config);
      radio.classList.add('form-check-input');
      return radio;
    }
  }, {
    key: "getTextarea",
    value: function getTextarea(config) {
      var textarea = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getTextarea", this).call(this, config);
      textarea.classList.add('form-control');
      return textarea;
    }
  }, {
    key: "getSelect",
    value: function getSelect(config) {
      var select = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getSelect", this).call(this, config);
      select.classList.add('form-control');
      return select;
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-primary';
    }
  }]);
  return ThemeBootstrap3;
}(barebones);
/* harmony default export */ var bootstrap3 = (bootstrap3_ThemeBootstrap3);
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
      return btnGroup;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getButton", this).call(this, config);
      html.classList.add('btn');
      html.classList.add('btn-sm');
      html.classList.add('btn-light');
      return html;
    }
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      var html = document.createElement('div');
      html.classList.add('card');
      html.classList.add('mb-3');
      return html;
    }
  }, {
    key: "getContainerHead",
    value: function getContainerHead(config) {
      var html = document.createElement('div');
      html.textContent = config.textContent;
      html.classList.add('jedi-container-head');
      html.classList.add('card-header');
      html.classList.add('d-flex');
      html.classList.add('justify-content-between');
      html.classList.add('align-items-center');
      html.classList.add('py-1');
      if (config.srOnly) {
        html.classList.add('sr-only');
      }
      return html;
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getActionsSlot", this).call(this);
    }
  }, {
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var html = this.getButton(config);
      html.setAttribute('data-toggle', 'collapse');
      html.setAttribute('data-target', '#' + config.id);
      html.classList.add('jedi-properties-toggle');
      return html;
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getPropertiesSlot", this).call(this);
      html.classList.add('collapse');
      html.classList.add('card-body');
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getChildrenSlot", this).call(this);
      html.classList.add('card-body');
      return html;
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
    key: "getLabel",
    value: function getLabel(config) {
      var label = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getLabel", this).call(this, config);
      label.classList.add('form-label');
      return label;
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getActionsSlot", this).call(this);
    }
  }, {
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var html = this.getButton(config);
      html.setAttribute('data-bs-toggle', 'collapse');
      html.setAttribute('data-bs-target', '#' + config.id);
      html.classList.add('jedi-properties-toggle');
      return html;
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
    _this.propertiesSlot = null;
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
        case 'bootstrap3':
          this.theme = new bootstrap3();
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
      this.propertiesSlot = this.theme.getPropertiesSlot({
        id: 'properties-slot-' + this.instance.path.replace('.', '-')
      });
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
      this.container.appendChild(this.messagesSlot);

      // switcher buttons
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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
          schema = _objectSpread(_objectSpread({}, cloneSchema), schema);

          // merge allOf
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
      }

      // Instances
      this.schemas.forEach(function (schema) {
        var instance = _this.jedi.createInstance({
          jedi: _this.jedi,
          schema: schema,
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
      var value = this.value;

      // if value matches the active instance type set the value. Else switch to the first
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
      var checkboxContainer = this.theme.getCheckboxContainer();

      // label
      var label = this.theme.getCheckboxLabel({
        "for": this.instance.path,
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });

      // input
      this.input = this.theme.getCheckbox({
        id: this.instance.path
      });

      // events
      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.checked);
      });

      // description
      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }

      // appends
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
      this.radioInputs = [];

      // legend
      this.controlSlot.appendChild(this.theme.getRadioLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey()
      }));

      // radios
      this.optionValues.forEach(function (value, index) {
        // radio container
        var radioContainer = _this.theme.getRadioContainer();

        // radio
        var radio = _this.theme.getRadio({
          value: value,
          id: _this.instance.path + '.' + index
        });
        radioContainer.appendChild(radio);
        radio.addEventListener('change', function () {
          var radioValue = radio.value === 'true';
          _this.instance.setValue(radioValue);
        });
        _this.radioInputs.push(radio);

        // label
        radioContainer.appendChild(_this.theme.getLabel({
          "for": _this.instance.path + '.' + index,
          textContent: _this.optionsLabels[index],
          srOnly: _this.instance.schema.option('hideTitle')
        }));
        _this.controlSlot.appendChild(radioContainer);
      });
      this.controlSlot.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot);

      // description
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
      });

      // input
      this.input = this.theme.getSelect({
        optionValues: ['false', 'true'],
        optionsLabels: this.instance.schema.option('enumTitles') || ['false', 'true'],
        id: this.instance.path
      });
      this.input.addEventListener('change', function () {
        var value = _this.input.value === 'true';
        _this.instance.setValue(value);
      });

      // description
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
      this.legend = this.theme.getContainerHead({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });
      this.propertiesToggle = this.theme.getPropertiesToggle({
        textContent: 'Properties',
        id: 'properties-slot-' + this.instance.path.replace('.', '-')
      });
      this.propertiesContainer = this.theme.getPropertiesActivators();
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
      this.addPropertyBtn.classList.add('jedi-object-add');
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
        var child = _this.instance.createChild(schema, key);
        child.activate();
        _this.instance.setValue(_this.instance.value);
        _this.addPropertyInput.value = '';
      });
      this.fieldset.appendChild(this.legend);
      this.legend.appendChild(this.actionsSlot);
      this.fieldset.appendChild(this.propertiesSlot);
      this.fieldset.appendChild(this.messagesSlot);
      this.fieldset.appendChild(this.childrenSlot);
      this.container.appendChild(this.fieldset);
      if (isSet(this.instance.schema.description())) {
        this.fieldset.appendChild(this.description);
      }
      if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
        this.actionsSlot.appendChild(this.propertiesToggle);
        this.propertiesSlot.appendChild(this.propertiesContainer);
        this.propertiesSlot.appendChild(this.addPropertyLabel);
        this.propertiesSlot.appendChild(this.addPropertyInput);
        this.propertiesSlot.appendChild(this.addPropertyBtn);
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
    key: "refreshPropertiesSlot",
    value: function refreshPropertiesSlot() {
      var _this2 = this;
      if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
        while (this.propertiesContainer.firstChild) {
          this.propertiesContainer.removeChild(this.propertiesContainer.lastChild);
        }
        this.instance.children.forEach(function (child) {
          var id = child.path + '-activator';
          var checkboxContainer = _this2.theme.getCheckboxContainer();
          var checkboxLabel = _this2.theme.getCheckboxLabel({
            "for": id,
            textContent: isSet(child.schema.title()) ? child.schema.title() : child.getKey()
          });
          var checkbox = _this2.theme.getCheckbox({
            id: id
          });
          checkbox.checked = hasOwn(_this2.instance.getValue(), child.getKey());
          var isRequired = _this2.instance.isRequired(child.getKey());
          var isDependentRequired = _this2.instance.isDependentRequired(child.getKey());
          var disabled = _this2.disabled;
          checkbox.disabled = isRequired || isDependentRequired || disabled;
          checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
              child.activate();
            } else {
              child.deactivate();
            }
          });

          // appends
          _this2.propertiesContainer.appendChild(checkboxContainer);
          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(checkboxLabel);
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
      this.refreshPropertiesSlot();
      this.refreshEditors();
      if (this.disabled) {
        this.propertiesToggle.setAttribute('disabled', 'disabled');
        this.addPropertyBtn.setAttribute('disabled', 'disabled');
        this.addPropertyInput.setAttribute('disabled', 'disabled');
      } else {
        this.propertiesToggle.removeAttribute('disabled');
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
        schema: schema,
        path: this.path + '.' + key,
        parent: this
      });
      this.children.push(instance);
      this.value[key] = instance.getValue();
      var isNotRequired = !this.isRequired(key);
      var shouldStartDeactivated = this.jedi.options.deactivateProperties || this.schema.option('deactivateProperties');
      if (isNotRequired && shouldStartDeactivated) {
        instance.deactivate();
      }
      return instance;
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
    key: "refreshInstances",
    value: function refreshInstances() {
      var _this3 = this;
      var value = this.getValue();

      // remove any children that are not included in the value
      for (var i = this.children.length - 1; i >= 0; i--) {
        var instance = this.children[i];
        var key = instance.getKey();
        if (notSet(value[key])) {
          if (this.getChild(key)) {
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
        var child = _this3.getChild(key);

        // If a value has a already a child instance
        if (child) {
          var oldValue = child.getValue();
          var newValue = value[child.getKey()];

          // update child value if the old value and the new value are different
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
      this.fieldset = this.theme.getFieldset();

      // title
      this.legend = this.theme.getContainerHead({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });

      // description
      if (isSet(this.instance.schema.description())) {
        this.fieldset.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.messagesSlot);
      this.fieldset.appendChild(this.childrenSlot);
      this.legend.appendChild(this.actionsSlot);
      this.container.appendChild(this.fieldset);

      // btn group
      var btnGroup = this.theme.getBtnGroup();

      // addBtn
      this.addBtn = this.theme.getArrayBtnAdd({
        textContent: 'Add item'
      });
      this.addBtn.addEventListener('click', function () {
        _this.instance.addItem();
      });

      // deleteAll
      this.deleteAllBtn = this.theme.getArrayBtnDeleteAll({
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
        var itemIndex = Number(child.getKey());

        // delete
        var deleteBtn = _this2.theme.getButton({
          textContent: 'Delete item'
        });
        deleteBtn.classList.add('jedi-array-delete');
        deleteBtn.addEventListener('click', function () {
          var itemIndex = Number(child.path.split('.').pop());
          _this2.instance.deleteItem(itemIndex);
        });
        btnGroup.appendChild(deleteBtn);

        // move up
        if (_this2.instance.children.length !== 0) {
          var moveUpBtn = _this2.theme.getButton({
            textContent: 'Move up'
          });
          moveUpBtn.classList.add('jedi-array-move-up');
          moveUpBtn.addEventListener('click', function () {
            var toIndex = itemIndex - 1;
            _this2.instance.move(itemIndex, toIndex);
          });
          btnGroup.appendChild(moveUpBtn);
        }

        // move down
        if (_this2.instance.getValue().length - 1 !== itemIndex) {
          var moveDownBtn = _this2.theme.getButton({
            textContent: 'Move down'
          });
          moveDownBtn.classList.add('jedi-array-move-down');
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
        schema: schema,
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
        srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden')
      });

      // input
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
      }

      // events
      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      });

      // fix color picker bug
      if (this.instance.schema.formatIs('color') && this.instance.value.length === 0) {
        this.instance.setValue('#000000', false);
      }
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot);

      // description
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
      this.radioInputs = [];

      // legend
      this.controlSlot.appendChild(this.theme.getRadioLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey()
      }));

      // radios
      this.optionValues.forEach(function (value, index) {
        // radio container
        var radioContainer = _this.theme.getRadioContainer();

        // radio
        var radio = _this.theme.getRadio({
          value: value,
          id: _this.instance.path + '.' + index
        });
        radioContainer.appendChild(radio);
        radio.addEventListener('change', function () {
          _this.instance.setValue(radio.value);
        });
        _this.radioInputs.push(radio);

        // label
        radioContainer.appendChild(_this.theme.getLabel({
          "for": _this.instance.path + '.' + index,
          textContent: _this.optionsLabels[index],
          srOnly: _this.instance.schema.option('hideTitle')
        }));
        _this.controlSlot.appendChild(radioContainer);
      });
      this.controlSlot.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot);

      // description
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
      this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues;

      // label
      var label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });

      // input
      this.input = this.theme.getSelect({
        optionValues: this.optionValues,
        optionsLabels: this.optionsLabels,
        id: this.instance.path
      });
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot);

      // events
      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      });

      // description
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
      });

      // input
      this.input = this.theme.getInput({
        type: 'number',
        id: this.instance.path
      });
      this.container.appendChild(this.input);

      // events
      this.input.addEventListener('change', function () {
        var value = _this.sanitize(_this.input.value);
        _this.instance.setValue(value);
      });

      // description
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
      this.radioInputs = [];

      // legend
      this.controlSlot.appendChild(this.theme.getRadioLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey()
      }));

      // radios
      this.optionValues.forEach(function (value, index) {
        // radio container
        var radioContainer = _this.theme.getRadioContainer();

        // radio
        var radio = _this.theme.getRadio({
          value: value,
          id: _this.instance.path + '.' + index
        });
        radioContainer.appendChild(radio);
        radio.addEventListener('change', function () {
          _this.instance.setValue(radio.value);
        });
        _this.radioInputs.push(radio);

        // label
        radioContainer.appendChild(_this.theme.getLabel({
          "for": _this.instance.path + '.' + index,
          textContent: _this.optionsLabels[index],
          srOnly: _this.instance.schema.option('hideTitle')
        }));
        _this.controlSlot.appendChild(radioContainer);
      });
      this.controlSlot.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot);

      // description
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
      });

      // input
      this.input = this.theme.getSelect({
        optionValues: this.optionValues,
        optionsLabels: this.optionsLabels,
        id: this.instance.path
      });

      // events
      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      });

      // description
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
      this.container.appendChild(this.controlSlot);

      // description
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
// CONCATENATED MODULE: ./src/ref-parser.js


/* global XMLHttpRequest */


var ref_parser_RefParser = /*#__PURE__*/function () {
  function RefParser(options) {
    classCallCheck_default()(this, RefParser);
    if (notSet(options)) {
      options = {};
    }
    this.iterations = options.iterations || 7;
    this.XMLHttpRequest = options.XMLHttpRequest || XMLHttpRequest;
    this.definitions = {};
  }
  createClass_default()(RefParser, [{
    key: "dereference",
    value: function dereference(schema) {
      var _this = this;
      for (var i = 0; i < this.iterations; i++) {
        // register definitions as long as they are not references
        this.traverse({
          value: schema,
          callback: function callback(args) {
            if (args.key !== '$ref') {
              _this.definitions[args.path] = args.value;
            }
          }
        });

        // dereference
        this.traverse({
          value: schema,
          callback: function callback(args) {
            if (!utils_isObject(args.value)) {
              return;
            }
            var refOwner = args.prevValue;
            var ref = args.value['$ref'];
            if (isSet(refOwner) && isSet(ref)) {
              if (_this.isCircularPath(args.path)) {
                console.log('circular', args.path);
                return;
              }
              refOwner[args.key] = _this.define(ref);
            }
          }
        });
      }
      return schema;
    }
  }, {
    key: "isCircularPath",
    value: function isCircularPath(path) {
      var output = false;
      Object.keys(this.definitions).forEach(function (key) {
        // remove #
        path = path.substring(1);
        if (path.length === 0) {
          return output;
        }
        var half = Math.ceil(path.length / 2);
        var firstHalf = path.slice(0, half);
        var secondHalf = path.slice(half);
        if (equal(firstHalf, secondHalf)) {
          output = true;
        }
      });
      return output;
    }
  }, {
    key: "define",
    value: function define(ref) {
      if (!isString(ref)) {
        return ref;
      }

      // definitions
      if (ref.startsWith('#')) {
        if (isSet(this.definitions[ref])) {
          return clone(this.definitions[ref]);
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
      return undefined;
    }
  }, {
    key: "traverse",
    value: function traverse(args) {
      var _this2 = this;
      var value = args.value;
      var callback = args.callback;
      var path = isSet(args.path) ? args.path + '/' + args.key : '#';
      args.path = path;
      if (isSet(callback)) {
        callback(args);
      }
      if (utils_isObject(value)) {
        Object.keys(value).forEach(function (key) {
          args.value = value[key];
          args.key = key;
          args.path = path;
          args.prevValue = value;
          _this2.traverse(args);
        });
      }
      if (isArray(value)) {
        value.forEach(function (newValue, key) {
          args.value = newValue;
          args.key = key;
          args.path = path;
          args.prevValue = value;
          _this2.traverse(args);
        });
      }
    }
  }]);
  return RefParser;
}();
/* harmony default export */ var ref_parser = (ref_parser_RefParser);
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
      rootName: 'root',
      refParser: true
    }, options);
    _this.instances = {};
    _this.root = null;
    _this.theme = null;
    _this.validator = null;
    _this.schema = null;
    _this.refParser = null;
    _this.init();
    return _this;
  }
  createClass_default()(Jedi, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.validator = new validation_validator();
      if (this.options.refParser) {
        this.refParser = new ref_parser({
          XMLHttpRequest: this.options.XMLHttpRequest
        });
        this.options.schema = this.refParser.dereference(this.options.schema);
      }
      this.schema = new src_schema(this.options.schema);
      this.root = this.createInstance({
        jedi: this,
        schema: this.options.schema
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

      // circular $ref are not initially dereferenced and must be defined on creation
      if (this.options.refParser && hasOwn(config.schema, '$ref')) {
        config.schema = this.refParser.define(config.schema['$ref']);
      }
      config.schema = new src_schema(config.schema);
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
/* harmony default export */ var jedi = __webpack_exports__["default"] = (jedi_Jedi);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9qZWRpLmpzIl0sIm5hbWVzIjpbImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmYWtlRm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJpbmRleCIsImxlbmd0aCIsImhhc093biIsIm9iaiIsImtleSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInByZXR0eSIsInZhbHVlIiwicm91bmQyZGVjaW1hbHMiLCJudW1iZXIiLCJNYXRoIiwicm91bmQiLCJzb3J0T2JqZWN0Iiwia2V5cyIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJlcXVhbCIsImEiLCJiIiwiaXNPYmplY3QiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJpc1NldCIsIm5vdFNldCIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsIl90eXBlb2YiLCJnZXRUeXBlIiwidHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsIl9sZW4iLCJhcmd1bWVudHMiLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiZm9yRWFjaCIsImFzc2lnbiIsIl9kZWZpbmVQcm9wZXJ0eSIsImFwcGx5IiwiY29uY2F0IiwiU2NoZW1hIiwic2NoZW1hIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsInVuZGVmaW5lZCIsImFueU9mIiwiX2NvbnN0IiwiX2RlZmF1bHQiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiX2Vsc2UiLCJfZW51bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiZm9ybWF0SXMiLCJfaWYiLCJpdGVtcyIsIm1heGltdW0iLCJtYXhJdGVtcyIsIm1heExlbmd0aCIsIm1heFByb3BlcnRpZXMiLCJtaW5pbXVtIiwibWluSXRlbXMiLCJtaW5MZW5ndGgiLCJtaW5Qcm9wZXJ0aWVzIiwibXVsdGlwbGVPZiIsIm5vdCIsIm9wdGlvbiIsIm9wdGlvbnMiLCJwYXR0ZXJuIiwicGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJyZXF1aXJlZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIlNldCIsInRoZW4iLCJ0aXRsZSIsInR5cGVJcyIsInR5cGVJc051bWVyaWMiLCJvbmVPZiIsInVuaXF1ZUl0ZW1zIiwiZGVzdHJveSIsIl90aGlzIiwiX2FsbE9mIiwidmFsaWRhdG9yIiwicGF0aCIsImVycm9ycyIsInN1YlNjaGVtYUVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwicm9vdE5hbWUiLCJyZWZQYXJzZXIiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZGF0ZSIsIl9taW5MZW5ndGgiLCJyZXBsYWNlIiwiaW52YWxpZCIsInB1c2giLCJtZXNzYWdlIiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJfYW55T2YiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJfZGVwZW5kZW50UmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImZpbHRlciIsInByb3BlcnR5Iiwiam9pbiIsInNvbWUiLCJlIiwiX2V4Y2x1c2l2ZU1heGltdW0iLCJfZXhjbHVzaXZlTWluaW11bSIsIl9mb3JtYXQiLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0IiwiaWZFZGl0b3IiLCJpZkVycm9ycyIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJfbWF4SXRlbXMiLCJfbWF4TGVuZ3RoIiwiX21heFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzQ291bnQiLCJfbWluaW11bSIsImNvbXB1dGVkTWluaW11bSIsIl9taW5JdGVtcyIsIl9taW5Qcm9wZXJ0aWVzIiwiX211bHRpcGxlT2YiLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwiX25vdCIsIm5vdEVycm9ycyIsIl9vbmVPZiIsImNvdW50ZXIiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwiX3BhdHRlcm4iLCJfcGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3IiLCJlZGl0b3JFcnJvcnMiLCJtYXAiLCJlcnJvciIsIl9yZXF1aXJlZCIsIl90eXBlIiwidHlwZXMiLCJzdHJpbmciLCJpbnRlZ2VyIiwiYm9vbGVhbiIsIm9iamVjdCIsIl9udWxsIiwiX21heGltdW0iLCJjb21wdXRlZE1heGltdW0iLCJfdW5pcXVlSXRlbXMiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsIml0ZW0iLCJfYWRkaXRpb25hbFByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInNjaGVtYUNsb25lIiwidmFsaWRhdG9yRXJyb3JzIiwiRXZlbnRFbWl0dGVyIiwibGlzdGVuZXJzIiwib24iLCJuYW1lIiwiZW1pdCIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJfRXZlbnRFbWl0dGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiY29uZmlnIiwiamVkaSIsImlzQWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJfdGhpczIiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInByZXBhcmUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInNldFVJIiwib25DaGlsZENoYW5nZSIsImdldEtleSIsInNwbGl0IiwicG9wIiwidW5yZWdpc3RlciIsImRlZmF1bHRFcnJvcnMiLCJ2YWxpZERlZmF1bHQiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsImNoaWxkIiwiVGhlbWVCYXJlYm9uZXMiLCJnZXRDb250YWluZXIiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRDb250YWluZXJIZWFkIiwiaHRtbCIsInRleHRDb250ZW50Iiwic3JPbmx5IiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldENoaWxkcmVuU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsIm1lc3NhZ2VzU2xvdCIsImdldENvbnRyb2xTbG90IiwiY29udHJvbFNsb3QiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwiZ2V0QnV0dG9uIiwiZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMiLCJnZXRCdG5Hcm91cCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImlkIiwiZ2V0QXJyYXlCdG5BZGQiLCJnZXRBcnJheUJ0bkRlbGV0ZUFsbCIsImdldEJ1dHRvbkFjdGl2ZUNsYXNzIiwiZ2V0RmllbGRzZXQiLCJnZXREZXNjcmlwdGlvbiIsImdldENoZWNrYm94TGFiZWwiLCJjaGVja2JveExhYmVsIiwiZ2V0UmFkaW9MZWdlbmQiLCJyYWRpb0xlZ2VuZCIsImdldFJhZGlvTGFiZWwiLCJyYWRpb0xhYmVsIiwiZ2V0TGFiZWwiLCJsYWJlbCIsImdldENoZWNrYm94Q29udGFpbmVyIiwiZ2V0UmFkaW9Db250YWluZXIiLCJnZXRJbnB1dCIsImlucHV0IiwiZ2V0Q2hlY2tib3giLCJjaGVja2JveCIsImdldFJhZGlvIiwicmFkaW8iLCJnZXRUZXh0YXJlYSIsInRleHRhcmVhIiwiZ2V0U2VsZWN0Iiwic2VsZWN0Iiwib3B0aW9uVmFsdWVzIiwib3B0aW9uc0xhYmVscyIsImFwcGVuZENoaWxkIiwiZ2V0QWxlcnQiLCJnZXRJbnZhbGlkRmVlZGJhY2siLCJUaGVtZVdpcmVmcmFtZSIsIl9UaGVtZUJhcmVib25lcyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJpbnZhbGlkRmVlZGJhY2siLCJidG5Hcm91cCIsInJhZGlvQ29udGFpbmVyIiwiVGhlbWVCb290c3RyYXAzIiwiYWxlcnQiLCJjaGVja2JveENvbnRhaW5lciIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsIl9UaGVtZUJvb3RzdHJhcCIsIkVkaXRvciIsImluc3RhbmNlIiwidGhlbWUiLCJwcm9wZXJ0aWVzU2xvdCIsImFjdGlvbnNTbG90IiwiY2hpbGRyZW5TbG90IiwiZGlzYWJsZWQiLCJidWlsZCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJyZWZyZXNoVUkiLCJhbHdheXNTaG93RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJpbm5lckhUTUwiLCJkaXNhYmxlIiwiZW5hYmxlIiwic2FuaXRpemUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJNdWx0aXBsZUVkaXRvciIsIl9FZGl0b3IiLCJzd2l0Y2hlckJ1dHRvbnMiLCJzd2l0Y2hlciIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk51bWJlciIsInN3aXRjaEluc3RhbmNlIiwib2xkSW5zdGFuY2UiLCJpbnN0YW5jZXMiLCJsYXN0SW5kZXgiLCJhY3RpdmVJbnN0YW5jZSIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwiTXVsdGlwbGVJbnN0YW5jZSIsIl9JbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJfc2NoZW1hJG9wdGlvbnMiLCJfc2NoZW1hJG9wdGlvbnMyIiwiX29iamVjdFNwcmVhZCIsIm1lcmdlQWxsT2YiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJjcmVhdGVJbnN0YW5jZSIsIm5ld0luZGV4IiwiZ2V0Rml0dGVzdEluZGV4IiwiZml0dGVzdEluZGV4IiwiY2hhbXBpb25FcnJvcnMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiaW5zdGFuY2VFcnJvcnMiLCJlcnIiLCJmIiwiQm9vbGVhbkVkaXRvciIsImNoZWNrZWQiLCJCb29sZWFuIiwicmVtb3ZlQXR0cmlidXRlIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsIl9Cb29sZWFuRWRpdG9yIiwicmFkaW9JbnB1dHMiLCJyYWRpb1ZhbHVlIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJCb29sZWFuSW5zdGFuY2UiLCJPYmplY3RFZGl0b3IiLCJmaWVsZHNldCIsImxlZ2VuZCIsInByb3BlcnRpZXNUb2dnbGUiLCJwcm9wZXJ0aWVzQ29udGFpbmVyIiwiYWRkUHJvcGVydHlMYWJlbCIsImFkZFByb3BlcnR5SW5wdXQiLCJhZGRQcm9wZXJ0eUJ0biIsInByb3BlcnR5TmFtZUVtcHR5IiwicHJvcGVydHlFeGlzdCIsImNyZWF0ZUNoaWxkIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwicmVmcmVzaFByb3BlcnRpZXNTbG90IiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwicmVmcmVzaEVkaXRvcnMiLCJPYmplY3RJbnN0YW5jZSIsInJlZnJlc2hJbnN0YW5jZXMiLCJpc05vdFJlcXVpcmVkIiwic2hvdWxkU3RhcnREZWFjdGl2YXRlZCIsImRlYWN0aXZhdGVQcm9wZXJ0aWVzIiwiZGVsZXRlQ2hpbGQiLCJzcGxpY2UiLCJnZXRDaGlsZCIsImZpbmQiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIkFycmF5RWRpdG9yIiwiYWRkQnRuIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJpdGVtSW5kZXgiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsIkFycmF5SW5zdGFuY2UiLCJyZWZyZXNoQ2hpbGRyZW4iLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJmcm9tSW5kZXgiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwiaXRlbVZhbHVlIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsIlN0cmluZyIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIl9TdHJpbmdFZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiU3RyaW5nSW5zdGFuY2UiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJfTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckluc3RhbmNlIiwiTnVsbEVkaXRvciIsIk51bGxJbnN0YW5jZSIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJYTUxIdHRwUmVxdWVzdCIsImRlZmluaXRpb25zIiwiZGVyZWZlcmVuY2UiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWZPd25lciIsInByZXZWYWx1ZSIsInJlZiIsImlzQ2lyY3VsYXJQYXRoIiwiY29uc29sZSIsImxvZyIsImRlZmluZSIsIm91dHB1dCIsInN1YnN0cmluZyIsImhhbGYiLCJjZWlsIiwiZmlyc3RIYWxmIiwic2Vjb25kSGFsZiIsInN0YXJ0c1dpdGgiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzaG93UmVxdWlyZWRPbmx5Iiwicm9vdCIsImFwcGVuZEhpZGRlbklucHV0IiwiaGlkZGVuSW5wdXQiLCJvcmlnaW5hbFNjaGVtYSIsIl90aGlzJHJvb3QiLCJnZXRJbnN0YW5jZSIsIl90aGlzNCIsIl90aGlzNSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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QUNqQyxPQUFPOGMsTUFBSSxDQUFDOWMsR0FBRyxDQUFDO01BQ2xCLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQSxPQUFBbUcsSUFBQTtBQUFBLEVBbE5nQm9GLGFBQVk7QUFxTmhCcEYsbUZBQUksRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcbiIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZmFrZUZvckVhY2ggPSAoYXJyYXksIGNhbGxiYWNrKSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFzT3duID0gKG9iaiwga2V5KSA9PiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbmV4cG9ydCBjb25zdCBwcmV0dHkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKVxufVxuXG5leHBvcnQgY29uc3Qgcm91bmQyZGVjaW1hbHMgPSAobnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDBcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRPYmplY3QgPSAob2JqKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwge30pXG59XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IChhLCBiKSA9PiB7XG4gIGlmIChpc09iamVjdChhKSAmJiBpc09iamVjdChiKSkge1xuICAgIGEgPSBzb3J0T2JqZWN0KGEpXG4gICAgYiA9IHNvcnRPYmplY3QoYilcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gIWVxdWFsKGEsIGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3Qgbm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSBpc0ludGVnZXIodmFsdWUpID8gJ2ludGVnZXInIDogJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ3N0cmluZydcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgdHlwZSA9ICdib29sZWFuJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSdcbiAgfSBlbHNlIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudWxsJ1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnb2JqZWN0J1xuICB9XG5cbiAgcmV0dXJuIHR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IG1lcmdlRGVlcCA9ICh0YXJnZXQsIC4uLnNvdXJjZXMpID0+IHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldFxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgICBba2V5XToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWRkaXRpb25hbFByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdHJ1ZVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBhbnlPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYW55T2YpID8gdGhpcy5zY2hlbWEuYW55T2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNvbnN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29uc3RcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuZWxzZSkpID8gdGhpcy5zY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy5mb3JtYXQoKSkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVhZE9ubHkgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEucmVhZE9ubHkpID8gdGhpcy5zY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS50aGVuKSkgPyB0aGlzLnNjaGVtYS50aGVuIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLnR5cGUoKSkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBfYWxsT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZigpKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJvb3ROYW1lOiBrZXksIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVycm9ycyA9IHN1YlNjaGVtYUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbkxlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkxlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5jb25zdCgpKSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWEuY29uc3QoKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFueU9mKCkpKSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2YoKVxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGdyZWF0ZXIgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9mb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgbWVzc2FnZVxuICAgIGxldCByZWdleHBcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3VybCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXJsJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3V1aWQnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHV1aWQnXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuaWYoKSkpIHtcbiAgICBpZiAobm90U2V0KHNjaGVtYS50aGVuKCkpICYmIG5vdFNldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWEudGhlbigpKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4TGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX211bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5ub3QoKSkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBfb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVybigpKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcuJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3JlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucmVxdWlyZWQoKSkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWEudHlwZSgpKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHZhbGlkID0gc2NoZW1hLnR5cGUoKS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3VuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS51bmlxdWVJdGVtcygpKSkge1xuICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IF9hZGRpdGlvbmFsUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWEucHJvcGVydGllcygpKSA/IHNjaGVtYS5wcm9wZXJ0aWVzKCkgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBfYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgX21pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IF9hbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBfZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IF9leGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgX2Zvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IF9tYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBfbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBfbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IF9taW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgX21pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IF9taW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX211bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBfbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBfb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgX3BhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBfcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX3JlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IF90eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgX21heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyBfdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBfYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIF9hbGxPZixcbiAgX2FueU9mLFxuICBfY29uc3QsXG4gIF9kZXBlbmRlbnRSZXF1aXJlZCxcbiAgX2VudW0sXG4gIF9leGNsdXNpdmVNYXhpbXVtLFxuICBfZXhjbHVzaXZlTWluaW11bSxcbiAgX2Zvcm1hdCxcbiAgX2lmLFxuICBfbWF4aW11bSxcbiAgX21heEl0ZW1zLFxuICBfbWF4TGVuZ3RoLFxuICBfbWF4UHJvcGVydGllcyxcbiAgX21pbmltdW0sXG4gIF9taW5JdGVtcyxcbiAgX21pbkxlbmd0aCxcbiAgX21pblByb3BlcnRpZXMsXG4gIF9tdWx0aXBsZU9mLFxuICBfbm90LFxuICBfb25lT2YsXG4gIF9wYXR0ZXJuLFxuICBfcGF0dGVyblByb3BlcnRpZXMsXG4gIF9yZXF1aXJlZCxcbiAgX3R5cGUsXG4gIF91bmlxdWVJdGVtc1xuXVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBpc0Jvb2xlYW4gfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdFxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gc2NoZW1hLmNsb25lKClcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpID8gc2NoZW1hLm9wdGlvbignbWVzc2FnZScpIDogJ2ludmFsaWQnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XVxuICAgIH1cblxuICAgIHRoaXMuZHJhZnQuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5vcHRpb25zLnJvb3ROYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIC8vIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAvLyAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0Q29udGFpbmVySGVhZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250YWluZXItaGVhZCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgbWVzc2FnZXNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gbWVzc2FnZXNTbG90XG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG5cbiAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy52YWx1ZSlcbiAgICB9XG5cbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWRkJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZS1hbGwnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGNoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICByYWRpb0xlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHJhZGlvTGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiByYWRpb0xlZ2VuZFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICByYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0SW5wdXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVXaXJlZnJhbWUgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpXG4gICAgcmV0dXJuIGludmFsaWRGZWVkYmFja1xuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRhaW5lckhlYWQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gc3VwZXIuZ2V0Q2hlY2tib3hMYWJlbChjb25maWcpXG4gICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gc3VwZXIuZ2V0Q2hlY2tib3goY29uZmlnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gc3VwZXIuZ2V0UmFkaW9Db250YWluZXIoKVxuICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5saW5lJylcbiAgICByZXR1cm4gcmFkaW9Db250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBzdXBlci5nZXRSYWRpb0xhYmVsKGNvbmZpZylcbiAgICByYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiByYWRpb0xhYmVsXG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBzdXBlci5nZXRSYWRpbyhjb25maWcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBzdXBlci5nZXRUZXh0YXJlYShjb25maWcpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gc3VwZXIuZ2V0U2VsZWN0KGNvbmZpZylcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVdpcmVmcmFtZVxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDMgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBhbGVydCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gYWxlcnRcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4teHMnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRhaW5lckhlYWQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udGFpbmVyLWhlYWQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBzdXBlci5nZXRDaGVja2JveExhYmVsKGNvbmZpZylcbiAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gc3VwZXIuZ2V0UmFkaW9MYWJlbChjb25maWcpXG4gICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gc3VwZXIuZ2V0UmFkaW9Db250YWluZXIoKVxuICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiByYWRpb0NvbnRhaW5lclxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gc3VwZXIuZ2V0Q2hlY2tib3goY29uZmlnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gc3VwZXIuZ2V0UmFkaW8oY29uZmlnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gc3VwZXIuZ2V0VGV4dGFyZWEoY29uZmlnKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IHN1cGVyLmdldFNlbGVjdChjb25maWcpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXAzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBhbGVydFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGludmFsaWRGZWVkYmFja1xuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tbGlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250YWluZXJIZWFkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRhaW5lci1oZWFkJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gc3VwZXIuZ2V0Q2hlY2tib3hMYWJlbChjb25maWcpXG4gICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHN1cGVyLmdldENoZWNrYm94Q29udGFpbmVyKClcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gcmFkaW9Db250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7XG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IHN1cGVyLmdldExhYmVsKGNvbmZpZylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJylcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgVGhlbWVXaXJlZnJhbWUgZnJvbSAnLi4vdGhlbWVzL3dpcmVmcmFtZSdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDMgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IG51bGxcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gbnVsbFxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gbnVsbFxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ3dpcmVmcmFtZSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVXaXJlZnJhbWUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwMyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXAzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLnByb3BlcnRpZXNTbG90ID0gdGhpcy50aGVtZS5nZXRQcm9wZXJ0aWVzU2xvdCh7XG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoLnJlcGxhY2UoJy4nLCAnLScpXG4gICAgfSlcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gdGhpcy50aGVtZS5nZXRDb250cm9sU2xvdCgpXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSB0aGlzLnRoZW1lLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gdGhpcy50aGVtZS5nZXRDaGlsZHJlblNsb3QoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgYnVpbGQgKCkge31cblxuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLnZhbGlkYXRlKClcblxuICAgIHRoaXMubWVzc2FnZXNTbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKGVycm9yLm1lc3NhZ2UpXG4gICAgICB0aGlzLm1lc3NhZ2VzU2xvdC5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIHN3aXRjaGVyIGJ1dHRvbnNcbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIHRoaXMuc3dpdGNoZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gYnV0dG9uXG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHZhbHVlOiBpbmRleFxuICAgICAgfSlcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihidXR0b24udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoSW5zdGFuY2UoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLnB1c2goYnV0dG9uKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEluc3RhbmNlLnVpLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRJbnN0YW5jZS51aS5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5jb250YWluZXIpXG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoKE51bWJlcihidXR0b24udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5pbmRleCkpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBpc09iamVjdChzY2hlbWFDbG9uZSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoMCwgZmFsc2UsIHNldFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cblxuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICAgIH1cbiAgfVxuXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh2YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4KVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUluc3RhbmNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNoZWNrYm94IGNvbnRhaW5lclxuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lckhlYWQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5wcm9wZXJ0aWVzVG9nZ2xlID0gdGhpcy50aGVtZS5nZXRQcm9wZXJ0aWVzVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydGllcycsXG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoLnJlcGxhY2UoJy4nLCAnLScpXG4gICAgfSlcblxuICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnR5JyxcbiAgICAgIGZvcjogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5sZWdlbmQpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNUb2dnbGUpXG4gICAgICB0aGlzLnByb3BlcnRpZXNTbG90LmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUxhYmVsKVxuICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5SW5wdXQpXG4gICAgICB0aGlzLnByb3BlcnRpZXNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSkpIHtcbiAgICAgIHdoaWxlICh0aGlzLnByb3BlcnRpZXNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGNoaWxkLnBhdGggKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgICAgIGZvcjogaWQsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9KVxuXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBoYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSBpc1JlcXVpcmVkIHx8IGlzRGVwZW5kZW50UmVxdWlyZWQgfHwgZGlzYWJsZWRcblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZHNcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hMYWJlbClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hQcm9wZXJ0aWVzU2xvdCgpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzVG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzVG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGRpZmZlcmVudCwgaXNTZXQsIG5vdFNldCwgZ2V0VHlwZSwgaXNPYmplY3QsIGhhc093biB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVtrZXldXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gaXNTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQoKSkgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc093bih0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjcmVhdGVDaGlsZCAoc2NoZW1hLCBrZXkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQgPSB0aGlzLmplZGkub3B0aW9ucy5kZWFjdGl2YXRlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2RlYWN0aXZhdGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChpc05vdFJlcXVpcmVkICYmIHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQpIHtcbiAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQoJy4nKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lckhlYWQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcbiAgICB0aGlzLmxlZ2VuZC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEFycmF5QnRuQWRkKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nXG4gICAgfSlcblxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLnRoZW1lLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90KVxuXG4gICAgICB3aGlsZSAoY2hpbGQudWkuYWN0aW9uc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBjaGlsZC51aS5hY3Rpb25zU2xvdC5yZW1vdmVDaGlsZChjaGlsZC51aS5hY3Rpb25zU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgIC8vIGRlbGV0ZVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgICAgfSlcblxuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlJylcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgfVxuXG4gICAgICBjaGlsZC51aS5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLml0ZW1zKCkpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgLy8gdG9kbyBmaWxlLCByYW5nZSBzaG91bGQgYmUgaGFuZGxlZCBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnY29sb3InKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ3dpcmVmcmFtZScsXG4gICAgICByb290TmFtZTogJ3Jvb3QnLFxuICAgICAgcmVmUGFyc2VyOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcbiAgICB0aGlzLnJlZlBhcnNlciA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlcikge1xuICAgICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKHtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHRoaXMub3B0aW9ucy5YTUxIdHRwUmVxdWVzdFxuICAgICAgfSlcblxuICAgICAgdGhpcy5vcHRpb25zLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIC8vIGNpcmN1bGFyICRyZWYgYXJlIG5vdCBpbml0aWFsbHkgZGVyZWZlcmVuY2VkIGFuZCBtdXN0IGJlIGRlZmluZWQgb24gY3JlYXRpb25cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlciAmJiBoYXNPd24oY29uZmlnLnNjaGVtYSwgJyRyZWYnKSkge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlZmluZShjb25maWcuc2NoZW1hWyckcmVmJ10pXG4gICAgfVxuXG4gICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEFycmF5SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ251bGwnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVsbEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoY29uZmlnLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLm9uZU9mKCkpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCBub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICBpZiAobm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSAmJiBpc1NldChjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKG9yaWdpbmFsU2NoZW1hKVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoaW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdTIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==