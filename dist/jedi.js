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
    key: "getFieldset",
    value: function getFieldset() {
      return document.createElement('fieldset');
    }
  }, {
    key: "getFieldsetBody",
    value: function getFieldsetBody() {
      return document.createElement('div');
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var html = document.createElement('legend');
      html.textContent = config.textContent;
      html.style.fontSize = 'inherit';
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
    key: "getDescriptionSlot",
    value: function getDescriptionSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-description-slot');
      return html;
    }
  }, {
    key: "getMessagesSlot",
    value: function getMessagesSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-messages-slot');
      return html;
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-control-slot');
      return html;
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
      return 'jedi-active-btn';
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var html = document.createElement('p');
      var small = document.createElement('small');
      small.textContent = config.textContent;
      html.appendChild(small);
      return html;
    }
  }, {
    key: "getCheckboxLabel",
    value: function getCheckboxLabel(config) {
      var html = document.createElement('label');
      html.setAttribute('for', config["for"]);
      html.textContent = config.textContent;
      if (config.srOnly) {
        html.classList.add('sr-only');
      }
      return html;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var html = document.createElement('label');
      html.setAttribute('for', config["for"]);
      html.textContent = config.textContent;
      if (config.srOnly) {
        html.classList.add('sr-only');
      }
      return html;
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
    key: "getFakeLegend",
    value: function getFakeLegend(config) {
      var label = document.createElement('label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return label;
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
      invalidFeedback.classList.add('text-danger');
      return invalidFeedback;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var btnGroup = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getBtnGroup", this).call(this);
      btnGroup.classList.add('btn-group');
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
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getChildrenSlot", this).call(this);
    }
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      var html = document.createElement('fieldset');
      html.classList.add('panel');
      html.classList.add('panel-default');
      return html;
    }
  }, {
    key: "getFieldsetBody",
    value: function getFieldsetBody() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getFieldsetBody", this).call(this);
      html.classList.add('panel-body');
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
    key: "getLabel",
    value: function getLabel(config) {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getLabel", this).call(this, config);
    }
  }, {
    key: "getCheckboxLabel",
    value: function getCheckboxLabel(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getCheckboxLabel", this).call(this, config);
      html.classList.add('form-check-label');
      return html;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getRadioLabel", this).call(this, config);
      html.classList.add('form-check-label');
      return html;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getLegend", this).call(this, config);
      html.classList.add('panel-heading');
      html.classList.add('pull-right');
      return html;
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
      var html = document.createElement('fieldset');
      html.classList.add('card');
      html.classList.add('mb-3');
      return html;
    }
  }, {
    key: "getFieldsetBody",
    value: function getFieldsetBody() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getFieldsetBody", this).call(this);
      html.classList.add('card-body');
      return html;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getLegend", this).call(this, config);
      html.classList.add('card-header');
      html.classList.add('d-flex');
      html.classList.add('justify-content-between');
      html.classList.add('align-items-center');
      html.classList.add('py-1');
      html.classList.add('float-right');
      return html;
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
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getChildrenSlot", this).call(this);
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
    _this.descriptionSlot = null;
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
      this.descriptionSlot = this.theme.getDescriptionSlot();
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
      this.fieldset = this.theme.getFieldset();
      this.legend = this.theme.getLegend({
        textContent: 'Options'
      });
      this.fieldsetBody = this.theme.getFieldsetBody();

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

      // appends
      this.container.appendChild(this.fieldset);
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.fieldsetBody);
      this.legend.appendChild(this.actionsSlot);
      this.container.appendChild(this.messagesSlot);
      this.actionsSlot.appendChild(this.switcher);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;
      var oldInstance = this.instance.instances[this.instance.lastIndex];
      if (oldInstance.ui.container.parentNode) {
        this.fieldsetBody.removeChild(oldInstance.ui.container);
      }
      this.fieldsetBody.appendChild(this.instance.activeInstance.ui.container);
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
      this.control = this.theme.getCheckboxContainer();

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
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      this.controlSlot.appendChild(this.messagesSlot);
      this.controlSlot.appendChild(this.descriptionSlot);
      this.control.appendChild(this.input);
      this.control.appendChild(label);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
      }
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
      this.controlSlot.appendChild(this.theme.getFakeLegend({
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

      // description
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.messagesSlot);
      this.controlSlot.appendChild(this.descriptionSlot);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
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
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.label);
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot);
      this.controlSlot.appendChild(this.descriptionSlot);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
      }
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
      this.fieldsetBody = this.theme.getFieldsetBody();
      this.legend = this.theme.getLegend({
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
      this.container.appendChild(this.fieldset);
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.fieldsetBody);
      this.legend.appendChild(this.actionsSlot);
      this.fieldsetBody.appendChild(this.descriptionSlot);
      this.fieldsetBody.appendChild(this.propertiesSlot);
      this.fieldsetBody.appendChild(this.messagesSlot);
      this.fieldsetBody.appendChild(this.childrenSlot);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
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
      this.fieldsetBody = this.theme.getFieldsetBody();

      // title
      this.legend = this.theme.getLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });

      // description
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.fieldset);
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.fieldsetBody);
      this.legend.appendChild(this.actionsSlot);
      this.fieldsetBody.appendChild(this.descriptionSlot);
      this.fieldsetBody.appendChild(this.messagesSlot);
      this.fieldsetBody.appendChild(this.childrenSlot);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
      }

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

      // description
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // events
      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      });

      // fix color picker bug
      if (this.instance.schema.formatIs('color') && this.instance.value.length === 0) {
        this.instance.setValue('#000000', false);
      }

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot);
      this.controlSlot.appendChild(this.descriptionSlot);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
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
      this.controlSlot.appendChild(this.theme.getFakeLegend({
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

      // description
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.messagesSlot);
      this.controlSlot.appendChild(this.descriptionSlot);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
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
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot);
      this.controlSlot.appendChild(this.descriptionSlot);
      if (isSet(this.instance.schema.description())) {
        this.controlSlot.appendChild(this.description);
      }
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
      this.controlSlot.appendChild(this.theme.getFakeLegend({
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

      // description
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.messagesSlot);
      this.controlSlot.appendChild(this.descriptionSlot);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
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
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(label);
      this.controlSlot.appendChild(this.input);
      this.controlSlot.appendChild(this.messagesSlot);
      this.controlSlot.appendChild(this.descriptionSlot);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
      }
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
      // description
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.descriptionSlot);
      this.container.appendChild(this.controlSlot);
      if (isSet(this.instance.schema.description())) {
        this.container.appendChild(this.description);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9qZWRpLmpzIl0sIm5hbWVzIjpbImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmYWtlRm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJpbmRleCIsImxlbmd0aCIsImhhc093biIsIm9iaiIsImtleSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInByZXR0eSIsInZhbHVlIiwicm91bmQyZGVjaW1hbHMiLCJudW1iZXIiLCJNYXRoIiwicm91bmQiLCJzb3J0T2JqZWN0Iiwia2V5cyIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJlcXVhbCIsImEiLCJiIiwiaXNPYmplY3QiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJpc1NldCIsIm5vdFNldCIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsIl90eXBlb2YiLCJnZXRUeXBlIiwidHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsIl9sZW4iLCJhcmd1bWVudHMiLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiZm9yRWFjaCIsImFzc2lnbiIsIl9kZWZpbmVQcm9wZXJ0eSIsImFwcGx5IiwiY29uY2F0IiwiU2NoZW1hIiwic2NoZW1hIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsInVuZGVmaW5lZCIsImFueU9mIiwiX2NvbnN0IiwiX2RlZmF1bHQiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiX2Vsc2UiLCJfZW51bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiZm9ybWF0SXMiLCJfaWYiLCJpdGVtcyIsIm1heGltdW0iLCJtYXhJdGVtcyIsIm1heExlbmd0aCIsIm1heFByb3BlcnRpZXMiLCJtaW5pbXVtIiwibWluSXRlbXMiLCJtaW5MZW5ndGgiLCJtaW5Qcm9wZXJ0aWVzIiwibXVsdGlwbGVPZiIsIm5vdCIsIm9wdGlvbiIsIm9wdGlvbnMiLCJwYXR0ZXJuIiwicGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJyZXF1aXJlZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIlNldCIsInRoZW4iLCJ0aXRsZSIsInR5cGVJcyIsInR5cGVJc051bWVyaWMiLCJvbmVPZiIsInVuaXF1ZUl0ZW1zIiwiZGVzdHJveSIsIl90aGlzIiwiX2FsbE9mIiwidmFsaWRhdG9yIiwicGF0aCIsImVycm9ycyIsInN1YlNjaGVtYUVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwicm9vdE5hbWUiLCJyZWZQYXJzZXIiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZGF0ZSIsIl9taW5MZW5ndGgiLCJyZXBsYWNlIiwiaW52YWxpZCIsInB1c2giLCJtZXNzYWdlIiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJfYW55T2YiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJfZGVwZW5kZW50UmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImZpbHRlciIsInByb3BlcnR5Iiwiam9pbiIsInNvbWUiLCJlIiwiX2V4Y2x1c2l2ZU1heGltdW0iLCJfZXhjbHVzaXZlTWluaW11bSIsIl9mb3JtYXQiLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0IiwiaWZFZGl0b3IiLCJpZkVycm9ycyIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJfbWF4SXRlbXMiLCJfbWF4TGVuZ3RoIiwiX21heFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzQ291bnQiLCJfbWluaW11bSIsImNvbXB1dGVkTWluaW11bSIsIl9taW5JdGVtcyIsIl9taW5Qcm9wZXJ0aWVzIiwiX211bHRpcGxlT2YiLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwiX25vdCIsIm5vdEVycm9ycyIsIl9vbmVPZiIsImNvdW50ZXIiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwiX3BhdHRlcm4iLCJfcGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3IiLCJlZGl0b3JFcnJvcnMiLCJtYXAiLCJlcnJvciIsIl9yZXF1aXJlZCIsIl90eXBlIiwidHlwZXMiLCJzdHJpbmciLCJpbnRlZ2VyIiwiYm9vbGVhbiIsIm9iamVjdCIsIl9udWxsIiwiX21heGltdW0iLCJjb21wdXRlZE1heGltdW0iLCJfdW5pcXVlSXRlbXMiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsIml0ZW0iLCJfYWRkaXRpb25hbFByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInNjaGVtYUNsb25lIiwidmFsaWRhdG9yRXJyb3JzIiwiRXZlbnRFbWl0dGVyIiwibGlzdGVuZXJzIiwib24iLCJuYW1lIiwiZW1pdCIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJfRXZlbnRFbWl0dGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiY29uZmlnIiwiamVkaSIsImlzQWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJfdGhpczIiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInByZXBhcmUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInNldFVJIiwib25DaGlsZENoYW5nZSIsImdldEtleSIsInNwbGl0IiwicG9wIiwidW5yZWdpc3RlciIsImRlZmF1bHRFcnJvcnMiLCJ2YWxpZERlZmF1bHQiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsImNoaWxkIiwiVGhlbWVCYXJlYm9uZXMiLCJnZXRDb250YWluZXIiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRGaWVsZHNldCIsImdldEZpZWxkc2V0Qm9keSIsImdldExlZ2VuZCIsImh0bWwiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiZm9udFNpemUiLCJzck9ubHkiLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwiZ2V0RGVzY3JpcHRpb25TbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0Q29udHJvbFNsb3QiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwiZ2V0QnV0dG9uIiwiZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMiLCJnZXRCdG5Hcm91cCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImlkIiwiZ2V0QXJyYXlCdG5BZGQiLCJnZXRBcnJheUJ0bkRlbGV0ZUFsbCIsImdldEJ1dHRvbkFjdGl2ZUNsYXNzIiwiZ2V0RGVzY3JpcHRpb24iLCJzbWFsbCIsImFwcGVuZENoaWxkIiwiZ2V0Q2hlY2tib3hMYWJlbCIsImdldFJhZGlvTGFiZWwiLCJnZXRMYWJlbCIsImxhYmVsIiwiZ2V0Q2hlY2tib3hDb250YWluZXIiLCJnZXRSYWRpb0NvbnRhaW5lciIsImdldEZha2VMZWdlbmQiLCJnZXRJbnB1dCIsImlucHV0IiwiZ2V0Q2hlY2tib3giLCJjaGVja2JveCIsImdldFJhZGlvIiwicmFkaW8iLCJnZXRUZXh0YXJlYSIsInRleHRhcmVhIiwiZ2V0U2VsZWN0Iiwic2VsZWN0Iiwib3B0aW9uVmFsdWVzIiwib3B0aW9uc0xhYmVscyIsImdldEFsZXJ0IiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwiVGhlbWVXaXJlZnJhbWUiLCJfVGhlbWVCYXJlYm9uZXMiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwiaW52YWxpZEZlZWRiYWNrIiwiYnRuR3JvdXAiLCJjb250cm9sU2xvdCIsImdldENvbnRhaW5lckhlYWQiLCJjaGVja2JveExhYmVsIiwicmFkaW9Db250YWluZXIiLCJyYWRpb0xhYmVsIiwiVGhlbWVCb290c3RyYXAzIiwiYWxlcnQiLCJjaGVja2JveENvbnRhaW5lciIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsIl9UaGVtZUJvb3RzdHJhcCIsIkVkaXRvciIsImluc3RhbmNlIiwidGhlbWUiLCJwcm9wZXJ0aWVzU2xvdCIsIm1lc3NhZ2VzU2xvdCIsImFjdGlvbnNTbG90IiwiY2hpbGRyZW5TbG90IiwiZGVzY3JpcHRpb25TbG90IiwiZGlzYWJsZWQiLCJidWlsZCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJyZWZyZXNoVUkiLCJhbHdheXNTaG93RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJpbm5lckhUTUwiLCJkaXNhYmxlIiwiZW5hYmxlIiwic2FuaXRpemUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJNdWx0aXBsZUVkaXRvciIsIl9FZGl0b3IiLCJmaWVsZHNldCIsImxlZ2VuZCIsImZpZWxkc2V0Qm9keSIsInN3aXRjaGVyQnV0dG9ucyIsInN3aXRjaGVyIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiTnVtYmVyIiwic3dpdGNoSW5zdGFuY2UiLCJvbGRJbnN0YW5jZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsImFjdGl2ZUluc3RhbmNlIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmUiLCJNdWx0aXBsZUluc3RhbmNlIiwiX0luc3RhbmNlIiwic2NoZW1hcyIsIm9uU2V0VmFsdWUiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIl9zY2hlbWEkb3B0aW9ucyIsIl9zY2hlbWEkb3B0aW9uczIiLCJfb2JqZWN0U3ByZWFkIiwibWVyZ2VBbGxPZiIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImNyZWF0ZUluc3RhbmNlIiwibmV3SW5kZXgiLCJnZXRGaXR0ZXN0SW5kZXgiLCJmaXR0ZXN0SW5kZXgiLCJjaGFtcGlvbkVycm9ycyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJpbnN0YW5jZUVycm9ycyIsImVyciIsImYiLCJCb29sZWFuRWRpdG9yIiwiY29udHJvbCIsImNoZWNrZWQiLCJCb29sZWFuIiwicmVtb3ZlQXR0cmlidXRlIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsIl9Cb29sZWFuRWRpdG9yIiwicmFkaW9JbnB1dHMiLCJyYWRpb1ZhbHVlIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJCb29sZWFuSW5zdGFuY2UiLCJPYmplY3RFZGl0b3IiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwicHJvcGVydGllc0NvbnRhaW5lciIsImFkZFByb3BlcnR5TGFiZWwiLCJhZGRQcm9wZXJ0eUlucHV0IiwiYWRkUHJvcGVydHlCdG4iLCJwcm9wZXJ0eU5hbWVFbXB0eSIsInByb3BlcnR5RXhpc3QiLCJjcmVhdGVDaGlsZCIsImVkaXRhYmxlUHJvcGVydGllcyIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsInJlZnJlc2hFZGl0b3JzIiwiT2JqZWN0SW5zdGFuY2UiLCJyZWZyZXNoSW5zdGFuY2VzIiwiaXNOb3RSZXF1aXJlZCIsInNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlUHJvcGVydGllcyIsImRlbGV0ZUNoaWxkIiwic3BsaWNlIiwiZ2V0Q2hpbGQiLCJmaW5kIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJBcnJheUVkaXRvciIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwiaXRlbUluZGV4IiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJBcnJheUluc3RhbmNlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiZnJvbUluZGV4IiwidGVtcEVkaXRvciIsImN1cnJlbnRWYWx1ZSIsIml0ZW1WYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJTdHJpbmciLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJfU3RyaW5nRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0luc3RhbmNlIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiX051bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsIk51bGxFZGl0b3IiLCJOdWxsSW5zdGFuY2UiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiWE1MSHR0cFJlcXVlc3QiLCJkZWZpbml0aW9ucyIsImRlcmVmZXJlbmNlIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmT3duZXIiLCJwcmV2VmFsdWUiLCJyZWYiLCJpc0NpcmN1bGFyUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmUiLCJvdXRwdXQiLCJzdWJzdHJpbmciLCJoYWxmIiwiY2VpbCIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2hvd1JlcXVpcmVkT25seSIsInJvb3QiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbklucHV0Iiwib3JpZ2luYWxTY2hlbWEiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJfdGhpczQiLCJfdGhpczUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QUE7TUFDVixJQUFJcFgsTUFBTSxHQUFHLEVBQUU7TUFFZmhHLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQzRULFNBQVMsQ0FBQyxDQUFDOVIsT0FBTyxDQUFDLFVBQUMxQyxHQUFHLEVBQUs7UUFDM0MsSUFBTTRKLE1BQU0sR0FBR3lULE1BQUksQ0FBQzdJLFNBQVMsQ0FBQ3hVLEdBQUcsQ0FBQztRQUNsQ2lHLE1BQU0sTUFBQW5ELE1BQUEsQ0FBQXNDLDJCQUFBLENBQU9hLE1BQU0sR0FBQWIsMkJBQUEsQ0FBS3dFLE1BQU0sQ0FBQ3BELFFBQVEsRUFBRSxFQUFDO01BQzVDLENBQUMsQ0FBQztNQUVGLE9BQU9QLE1BQU07SUFDZjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBakcsR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQXNGLFFBQUEsRUFBVztNQUFBLElBQUEwWCxNQUFBO01BQ1QsSUFBSSxDQUFDUCxJQUFJLENBQUNuWCxPQUFPLEVBQUU7TUFFbkIsSUFBSSxJQUFJLENBQUNkLE9BQU8sQ0FBQ2dJLFFBQVEsRUFBRTtRQUN6QixJQUFJLENBQUNtQixTQUFTLENBQUNvRixTQUFTLEdBQUcsRUFBRTtNQUMvQjtNQUVBcFQsTUFBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM4QixPQUFPLENBQUMsVUFBQzFDLEdBQUcsRUFBSztRQUNqQyxPQUFPc2QsTUFBSSxDQUFDdGQsR0FBRyxDQUFDO01BQ2xCLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQSxPQUFBbUcsSUFBQTtBQUFBLEVBbE5nQm9GLGFBQVk7QUFxTmhCcEYsbUZBQUksRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcbiIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZmFrZUZvckVhY2ggPSAoYXJyYXksIGNhbGxiYWNrKSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFzT3duID0gKG9iaiwga2V5KSA9PiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbmV4cG9ydCBjb25zdCBwcmV0dHkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKVxufVxuXG5leHBvcnQgY29uc3Qgcm91bmQyZGVjaW1hbHMgPSAobnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDBcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRPYmplY3QgPSAob2JqKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwge30pXG59XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IChhLCBiKSA9PiB7XG4gIGlmIChpc09iamVjdChhKSAmJiBpc09iamVjdChiKSkge1xuICAgIGEgPSBzb3J0T2JqZWN0KGEpXG4gICAgYiA9IHNvcnRPYmplY3QoYilcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gIWVxdWFsKGEsIGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3Qgbm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSBpc0ludGVnZXIodmFsdWUpID8gJ2ludGVnZXInIDogJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ3N0cmluZydcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgdHlwZSA9ICdib29sZWFuJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSdcbiAgfSBlbHNlIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudWxsJ1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnb2JqZWN0J1xuICB9XG5cbiAgcmV0dXJuIHR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IG1lcmdlRGVlcCA9ICh0YXJnZXQsIC4uLnNvdXJjZXMpID0+IHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldFxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgICBba2V5XToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWRkaXRpb25hbFByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdHJ1ZVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBhbnlPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYW55T2YpID8gdGhpcy5zY2hlbWEuYW55T2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNvbnN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29uc3RcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuZWxzZSkpID8gdGhpcy5zY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy5mb3JtYXQoKSkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVhZE9ubHkgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEucmVhZE9ubHkpID8gdGhpcy5zY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS50aGVuKSkgPyB0aGlzLnNjaGVtYS50aGVuIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLnR5cGUoKSkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBfYWxsT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZigpKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJvb3ROYW1lOiBrZXksIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVycm9ycyA9IHN1YlNjaGVtYUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbkxlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkxlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5jb25zdCgpKSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWEuY29uc3QoKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFueU9mKCkpKSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2YoKVxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGdyZWF0ZXIgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9mb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgbWVzc2FnZVxuICAgIGxldCByZWdleHBcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3VybCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXJsJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3V1aWQnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHV1aWQnXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuaWYoKSkpIHtcbiAgICBpZiAobm90U2V0KHNjaGVtYS50aGVuKCkpICYmIG5vdFNldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWEudGhlbigpKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4TGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX211bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5ub3QoKSkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBfb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVybigpKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcuJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3JlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucmVxdWlyZWQoKSkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWEudHlwZSgpKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHZhbGlkID0gc2NoZW1hLnR5cGUoKS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3VuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS51bmlxdWVJdGVtcygpKSkge1xuICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IF9hZGRpdGlvbmFsUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWEucHJvcGVydGllcygpKSA/IHNjaGVtYS5wcm9wZXJ0aWVzKCkgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBfYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgX21pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IF9hbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBfZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IF9leGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgX2Zvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IF9tYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBfbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBfbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IF9taW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgX21pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IF9taW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX211bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBfbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBfb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgX3BhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBfcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX3JlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IF90eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgX21heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyBfdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBfYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIF9hbGxPZixcbiAgX2FueU9mLFxuICBfY29uc3QsXG4gIF9kZXBlbmRlbnRSZXF1aXJlZCxcbiAgX2VudW0sXG4gIF9leGNsdXNpdmVNYXhpbXVtLFxuICBfZXhjbHVzaXZlTWluaW11bSxcbiAgX2Zvcm1hdCxcbiAgX2lmLFxuICBfbWF4aW11bSxcbiAgX21heEl0ZW1zLFxuICBfbWF4TGVuZ3RoLFxuICBfbWF4UHJvcGVydGllcyxcbiAgX21pbmltdW0sXG4gIF9taW5JdGVtcyxcbiAgX21pbkxlbmd0aCxcbiAgX21pblByb3BlcnRpZXMsXG4gIF9tdWx0aXBsZU9mLFxuICBfbm90LFxuICBfb25lT2YsXG4gIF9wYXR0ZXJuLFxuICBfcGF0dGVyblByb3BlcnRpZXMsXG4gIF9yZXF1aXJlZCxcbiAgX3R5cGUsXG4gIF91bmlxdWVJdGVtc1xuXVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBpc0Jvb2xlYW4gfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdFxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gc2NoZW1hLmNsb25lKClcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpID8gc2NoZW1hLm9wdGlvbignbWVzc2FnZScpIDogJ2ludmFsaWQnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XVxuICAgIH1cblxuICAgIHRoaXMuZHJhZnQuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5vcHRpb25zLnJvb3ROYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIC8vIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAvLyAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICdpbmhlcml0J1xuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1kZXNjcmlwdGlvbi1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLnZhbHVlKVxuICAgIH1cblxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlLWFsbCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2plZGktYWN0aXZlLWJ0bidcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3Qgc21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXG4gICAgc21hbGwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBodG1sLmFwcGVuZENoaWxkKHNtYWxsKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRGYWtlTGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250YWluZXJIZWFkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IHN1cGVyLmdldENoZWNrYm94TGFiZWwoY29uZmlnKVxuICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlubGluZScpXG4gICAgcmV0dXJuIHJhZGlvQ29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gc3VwZXIuZ2V0UmFkaW9MYWJlbChjb25maWcpXG4gICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gc3VwZXIuZ2V0UmFkaW8oY29uZmlnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gc3VwZXIuZ2V0VGV4dGFyZWEoY29uZmlnKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IHN1cGVyLmdldFNlbGVjdChjb25maWcpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkFkZChjb25maWcpXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDaGlsZHJlblNsb3QoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWJvZHknKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRMYWJlbChjb25maWcpXG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2hlY2tib3hMYWJlbChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBzdXBlci5nZXRDaGVja2JveENvbnRhaW5lcigpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIHJhZGlvQ29udGFpbmVyXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBzdXBlci5nZXRSYWRpbyhjb25maWcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBzdXBlci5nZXRUZXh0YXJlYShjb25maWcpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gc3VwZXIuZ2V0U2VsZWN0KGNvbmZpZylcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1saWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gc3VwZXIuZ2V0Q2hlY2tib3hMYWJlbChjb25maWcpXG4gICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHN1cGVyLmdldENoZWNrYm94Q29udGFpbmVyKClcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gcmFkaW9Db250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7XG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IHN1cGVyLmdldExhYmVsKGNvbmZpZylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJylcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lV2lyZWZyYW1lIGZyb20gJy4uL3RoZW1lcy93aXJlZnJhbWUnXG5pbXBvcnQgVGhlbWVCb290c3RyYXAzIGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXAzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi4vdGhlbWVzL2JhcmVib25lcydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMucHJvcGVydGllc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IG51bGxcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gbnVsbFxuICAgIHRoaXMuZGVzY3JpcHRpb25TbG90ID0gbnVsbFxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICd3aXJlZnJhbWUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lV2lyZWZyYW1lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIHRoaXMuaW5zdGFuY2UucGF0aC5yZXBsYWNlKCcuJywgJy0nKVxuICAgIH0pXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q29udHJvbFNsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRyZW5TbG90KClcbiAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdCA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb25TbG90KClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMubGVnZW5kID0gdGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdPcHRpb25zJ1xuICAgIH0pXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEluc3RhbmNlLnVpLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0Qm9keS5yZW1vdmVDaGlsZChvbGRJbnN0YW5jZS51aS5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5jb250YWluZXIpXG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoKE51bWJlcihidXR0b24udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5pbmRleCkpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBpc09iamVjdChzY2hlbWFDbG9uZSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoMCwgZmFsc2UsIHNldFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cblxuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICAgIH1cbiAgfVxuXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh2YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4KVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUluc3RhbmNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNoZWNrYm94IGNvbnRhaW5lclxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldEZha2VMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICB0aGlzLmxlZ2VuZCA9IHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZSA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIHRoaXMuaW5zdGFuY2UucGF0aC5yZXBsYWNlKCcuJywgJy0nKVxuICAgIH0pXG5cbiAgICB0aGlzLnByb3BlcnRpZXNDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcblxuICAgIHRoaXMuYWRkUHJvcGVydHlMYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0eScsXG4gICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLW9iamVjdC1hZGQnKVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWVFbXB0eSA9IGtleS5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHByb3BlcnR5TmFtZUVtcHR5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eUV4aXN0ID0gaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKVxuXG4gICAgICBpZiAocHJvcGVydHlFeGlzdCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IHNjaGVtYSA9IHsgdHlwZTogJ2FueScgfVxuXG4gICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcblxuICAgICAgaWYgKGlzU2V0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgICAgICBzY2hlbWEgPSBhZGRpdGlvbmFsUHJvcGVydGllc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5sZWdlbmQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0Qm9keSlcbiAgICB0aGlzLmxlZ2VuZC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuXG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSkpIHtcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzVG9nZ2xlKVxuICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICB0aGlzLnByb3BlcnRpZXNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlMYWJlbClcbiAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUlucHV0KVxuICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBjaGlsZC5wYXRoICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgICAgICBjb25zdCBjaGVja2JveExhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgICAgICBmb3I6IGlkLFxuICAgICAgICAgIHRleHRDb250ZW50OiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfSlcblxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94TGFiZWwpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0LCBoYXNPd24gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5cbmNsYXNzIE9iamVjdEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBPYmplY3RFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGlzU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IGlzTm90UmVxdWlyZWQgPSAhdGhpcy5pc1JlcXVpcmVkKGtleSlcbiAgICBjb25zdCBzaG91bGRTdGFydERlYWN0aXZhdGVkID0gdGhpcy5qZWRpLm9wdGlvbnMuZGVhY3RpdmF0ZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdkZWFjdGl2YXRlUHJvcGVydGllcycpXG5cbiAgICBpZiAoaXNOb3RSZXF1aXJlZCAmJiBzaG91bGRTdGFydERlYWN0aXZhdGVkKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KCcuJykucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMubGVnZW5kID0gdGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEFycmF5QnRuQWRkKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nXG4gICAgfSlcblxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLnRoZW1lLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90KVxuXG4gICAgICB3aGlsZSAoY2hpbGQudWkuYWN0aW9uc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBjaGlsZC51aS5hY3Rpb25zU2xvdC5yZW1vdmVDaGlsZChjaGlsZC51aS5hY3Rpb25zU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgIC8vIGRlbGV0ZVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgICAgfSlcblxuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlJylcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgfVxuXG4gICAgICBjaGlsZC51aS5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLml0ZW1zKCkpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgLy8gdG9kbyBmaWxlLCByYW5nZSBzaG91bGQgYmUgaGFuZGxlZCBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldEZha2VMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RmFrZUxlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG5cbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVySW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ3dpcmVmcmFtZScsXG4gICAgICByb290TmFtZTogJ3Jvb3QnLFxuICAgICAgcmVmUGFyc2VyOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcbiAgICB0aGlzLnJlZlBhcnNlciA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlcikge1xuICAgICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKHtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHRoaXMub3B0aW9ucy5YTUxIdHRwUmVxdWVzdFxuICAgICAgfSlcblxuICAgICAgdGhpcy5vcHRpb25zLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIC8vIGNpcmN1bGFyICRyZWYgYXJlIG5vdCBpbml0aWFsbHkgZGVyZWZlcmVuY2VkIGFuZCBtdXN0IGJlIGRlZmluZWQgb24gY3JlYXRpb25cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlciAmJiBoYXNPd24oY29uZmlnLnNjaGVtYSwgJyRyZWYnKSkge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlZmluZShjb25maWcuc2NoZW1hWyckcmVmJ10pXG4gICAgfVxuXG4gICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEFycmF5SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ251bGwnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVsbEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoY29uZmlnLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLm9uZU9mKCkpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCBub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICBpZiAobm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSAmJiBpc1NldChjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKG9yaWdpbmFsU2NoZW1hKVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoaW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdTIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==