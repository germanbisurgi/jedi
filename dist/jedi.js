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
/* 4 */
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
/* 5 */
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
var inherits = __webpack_require__(3);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
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
    key: "getPropertiesSlot",
    value: function getPropertiesSlot() {
      var slot = document.createElement('div');
      slot.classList.add('jedi-properties-slot');
      return slot;
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      var slot = document.createElement('div');
      slot.classList.add('jedi-actions-slot');
      return slot;
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      var slot = document.createElement('div');
      slot.classList.add('jedi-child-editors-slot');
      return slot;
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
      this.propertiesSlot = this.theme.getPropertiesSlot();
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
        var child = _this.instance.createChild(schema, key);
        child.activate();
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
        this.dropdownMenu.appendChild(this.propertiesSlot);
        this.dropdownMenu.appendChild(this.addPropertyLabel);
        this.dropdownMenu.appendChild(this.addPropertyInput);
        this.dropdownMenu.appendChild(this.addPropertyBtn);
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
        while (this.propertiesSlot.firstChild) {
          this.propertiesSlot.removeChild(this.propertiesSlot.lastChild);
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
          _this2.propertiesSlot.appendChild(checkboxContainer);
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
      this.fieldset.appendChild(this.theme.getLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }));

      // description
      if (isSet(this.instance.schema.description())) {
        this.fieldset.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
      this.fieldset.appendChild(this.messagesSlot);
      this.fieldset.appendChild(this.childrenSlot);
      this.fieldset.appendChild(this.actionsSlot);
      this.container.appendChild(this.fieldset);

      // btn group
      var btnGroup = this.theme.getBtnGroup();

      // addBtn
      this.addBtn = this.theme.getButton({
        textContent: 'Add item'
      });
      this.addBtn.addEventListener('click', function () {
        _this.instance.addItem();
      });

      // deleteAll
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
        var itemIndex = Number(child.getKey());

        // delete
        var deleteBtn = _this2.theme.getButton({
          textContent: 'Delete item'
        });
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
        srOnly: this.instance.schema.option('hideTitle')
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
      if (!this.instance.schema.formatIs('hidden')) {
        this.controlSlot.appendChild(label);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmFrZUZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwiaW5kZXgiLCJsZW5ndGgiLCJoYXNPd24iLCJvYmoiLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwcmV0dHkiLCJ2YWx1ZSIsInJvdW5kMmRlY2ltYWxzIiwibnVtYmVyIiwiTWF0aCIsInJvdW5kIiwic29ydE9iamVjdCIsImtleXMiLCJzb3J0IiwicmVkdWNlIiwicmVzdWx0IiwiZXF1YWwiLCJhIiwiYiIsImlzT2JqZWN0IiwiZGlmZmVyZW50IiwiaXNOdWxsIiwiaXNTZXQiLCJub3RTZXQiLCJpc051bWJlciIsImlzSW50ZWdlciIsImZsb29yIiwiaXNTdHJpbmciLCJpc0Jvb2xlYW4iLCJpc0FycmF5IiwiQXJyYXkiLCJfdHlwZW9mIiwiZ2V0VHlwZSIsInR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsImZvckVhY2giLCJhc3NpZ24iLCJfZGVmaW5lUHJvcGVydHkiLCJhcHBseSIsImNvbmNhdCIsIlNjaGVtYSIsInNjaGVtYSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYWxsT2YiLCJ1bmRlZmluZWQiLCJhbnlPZiIsIl9jb25zdCIsIl9kZWZhdWx0IiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsIl9lbHNlIiwiX2VudW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsImZvcm1hdElzIiwiX2lmIiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJTZXQiLCJ0aGVuIiwidGl0bGUiLCJ0eXBlSXMiLCJ0eXBlSXNOdW1lcmljIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsImRlc3Ryb3kiLCJfdGhpcyIsIl9hbGxPZiIsInZhbGlkYXRvciIsInBhdGgiLCJlcnJvcnMiLCJzdWJTY2hlbWFFZGl0b3IiLCJKZWRpIiwic3RhcnRWYWx1ZSIsInJvb3ROYW1lIiwicmVmUGFyc2VyIiwic3ViU2NoZW1hRXJyb3JzIiwidmFsaWRhdGUiLCJfbWluTGVuZ3RoIiwicmVwbGFjZSIsImludmFsaWQiLCJwdXNoIiwibWVzc2FnZSIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiX2FueU9mIiwidmFsaWQiLCJhbnlPZkVkaXRvciIsImFueU9mRXJyb3JzIiwiX2RlcGVuZGVudFJlcXVpcmVkIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsImpvaW4iLCJzb21lIiwiZSIsIl9leGNsdXNpdmVNYXhpbXVtIiwiX2V4Y2x1c2l2ZU1pbmltdW0iLCJfZm9ybWF0IiwicmVnZXhwIiwiUmVnRXhwIiwidGVzdCIsImlmRWRpdG9yIiwiaWZFcnJvcnMiLCJ0aGVuRXJyb3JzIiwiZWxzZUVycm9ycyIsInRoZW5FZGl0b3IiLCJlbHNlRWRpdG9yIiwiX21heEl0ZW1zIiwiX21heExlbmd0aCIsIl9tYXhQcm9wZXJ0aWVzIiwicHJvcGVydGllc0NvdW50IiwiX21pbmltdW0iLCJjb21wdXRlZE1pbmltdW0iLCJfbWluSXRlbXMiLCJfbWluUHJvcGVydGllcyIsIl9tdWx0aXBsZU9mIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsIl9ub3QiLCJub3RFcnJvcnMiLCJfb25lT2YiLCJjb3VudGVyIiwib25lT2ZFZGl0b3IiLCJvbmVPZkVycm9ycyIsIl9wYXR0ZXJuIiwiX3BhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yIiwiZWRpdG9yRXJyb3JzIiwibWFwIiwiZXJyb3IiLCJfcmVxdWlyZWQiLCJfdHlwZSIsInR5cGVzIiwic3RyaW5nIiwiaW50ZWdlciIsImJvb2xlYW4iLCJvYmplY3QiLCJfbnVsbCIsIl9tYXhpbXVtIiwiY29tcHV0ZWRNYXhpbXVtIiwiX3VuaXF1ZUl0ZW1zIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsImkiLCJpdGVtIiwiX2FkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZGVmaW5lZEluUGF0dGVyblByb3BlcnR5IiwiYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzIiwiVmFsaWRhdG9yIiwiZHJhZnQiLCJzY2hlbWFFcnJvcnMiLCJzY2hlbWFDbG9uZSIsInZhbGlkYXRvckVycm9ycyIsIkV2ZW50RW1pdHRlciIsImxpc3RlbmVycyIsIm9uIiwibmFtZSIsImVtaXQiLCJsaXN0ZW5lciIsIkluc3RhbmNlIiwiX0V2ZW50RW1pdHRlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImNvbmZpZyIsImplZGkiLCJpc0FjdGl2ZSIsInBhcmVudCIsImNoaWxkcmVuIiwidWkiLCJpbml0IiwiX3RoaXMyIiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJwcmVwYXJlIiwic2V0RGVmYXVsdFZhbHVlIiwiaXNFZGl0b3IiLCJzZXRVSSIsIm9uQ2hpbGRDaGFuZ2UiLCJnZXRLZXkiLCJzcGxpdCIsInBvcCIsInVucmVnaXN0ZXIiLCJkZWZhdWx0RXJyb3JzIiwidmFsaWREZWZhdWx0Iiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJfdGhpczMiLCJjaGlsZCIsIlRoZW1lQmFyZWJvbmVzIiwiZ2V0QWxlcnQiLCJhbGVydCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwiaW52YWxpZEZlZWRiYWNrIiwiZ2V0RHJvcGRvd24iLCJodG1sIiwiZ2V0RHJvcGRvd25Ub2dnbGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXREcm9wZG93bk1lbnUiLCJnZXRUb29sYmFyU2xvdCIsImdldFByb3BlcnRpZXNTbG90Iiwic2xvdCIsImdldEFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwiZ2V0QnRuR3JvdXAiLCJnZXRCdXR0b24iLCJidXR0b24iLCJnZXRDb250YWluZXIiLCJjb250YWluZXIiLCJnZXREZXNjcmlwdGlvbiIsImdldEZpZWxkc2V0IiwiZ2V0TWVzc2FnZXNTbG90IiwibWVzc2FnZXNTbG90IiwiZ2V0Q29udHJvbFNsb3QiLCJjb250cm9sU2xvdCIsImdldENoZWNrYm94TGFiZWwiLCJjaGVja2JveExhYmVsIiwic3JPbmx5IiwiZ2V0UmFkaW9MZWdlbmQiLCJyYWRpb0xlZ2VuZCIsImdldFJhZGlvTGFiZWwiLCJyYWRpb0xhYmVsIiwiZ2V0TGFiZWwiLCJsYWJlbCIsImdldENoZWNrYm94Q29udGFpbmVyIiwiZ2V0UmFkaW9Db250YWluZXIiLCJnZXRMZWdlbmQiLCJsZWdlbmQiLCJnZXRJbnB1dCIsImlucHV0IiwiaWQiLCJnZXRDaGVja2JveCIsImNoZWNrYm94IiwiZ2V0UmFkaW8iLCJyYWRpbyIsImdldFRleHRhcmVhIiwidGV4dGFyZWEiLCJnZXRTZWxlY3QiLCJzZWxlY3QiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwiYXBwZW5kQ2hpbGQiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsIlRoZW1lV2lyZWZyYW1lIiwiX1RoZW1lQmFyZWJvbmVzIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsImJ0bkdyb3VwIiwiZmllbGRzZXQiLCJyYWRpb0NvbnRhaW5lciIsIlRoZW1lQm9vdHN0cmFwNCIsImNoZWNrYm94Q29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA1IiwiX1RoZW1lQm9vdHN0cmFwIiwiRWRpdG9yIiwiaW5zdGFuY2UiLCJ0aGVtZSIsInByb3BlcnRpZXNTbG90IiwiYWN0aW9uc1Nsb3QiLCJjaGlsZHJlblNsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsInRvb2xiYXJTbG90IiwiaW5uZXJIVE1MIiwiZGlzYWJsZSIsImVuYWJsZSIsInNhbml0aXplIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiTXVsdGlwbGVFZGl0b3IiLCJfRWRpdG9yIiwic3dpdGNoZXJCdXR0b25zIiwic3dpdGNoZXIiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJOdW1iZXIiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJfSW5zdGFuY2UiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwiX3NjaGVtYSRvcHRpb25zIiwiX3NjaGVtYSRvcHRpb25zMiIsIl9vYmplY3RTcHJlYWQiLCJtZXJnZUFsbE9mIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwiY3JlYXRlSW5zdGFuY2UiLCJuZXdJbmRleCIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImluc3RhbmNlRXJyb3JzIiwiZXJyIiwiZiIsIkJvb2xlYW5FZGl0b3IiLCJjaGVja2VkIiwiQm9vbGVhbiIsInJlbW92ZUF0dHJpYnV0ZSIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJfQm9vbGVhbkVkaXRvciIsInJhZGlvSW5wdXRzIiwicmFkaW9WYWx1ZSIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiQm9vbGVhbkluc3RhbmNlIiwiT2JqZWN0RWRpdG9yIiwiZHJvcGRvd24iLCJkcm9wZG93blRvZ2dsZSIsImRyb3Bkb3duTWVudSIsImFkZFByb3BlcnR5TGFiZWwiLCJhZGRQcm9wZXJ0eUlucHV0IiwiYWRkUHJvcGVydHlCdG4iLCJwcm9wZXJ0eU5hbWVFbXB0eSIsInByb3BlcnR5RXhpc3QiLCJjcmVhdGVDaGlsZCIsImVkaXRhYmxlUHJvcGVydGllcyIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsInJlZnJlc2hFZGl0b3JzIiwiT2JqZWN0SW5zdGFuY2UiLCJyZWZyZXNoSW5zdGFuY2VzIiwiaXNOb3RSZXF1aXJlZCIsInNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlUHJvcGVydGllcyIsImRlbGV0ZUNoaWxkIiwic3BsaWNlIiwiZ2V0Q2hpbGQiLCJmaW5kIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJBcnJheUVkaXRvciIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwiaXRlbUluZGV4IiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJBcnJheUluc3RhbmNlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiZnJvbUluZGV4IiwidGVtcEVkaXRvciIsImN1cnJlbnRWYWx1ZSIsIml0ZW1WYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJTdHJpbmciLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJfU3RyaW5nRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0luc3RhbmNlIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiX051bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsIk51bGxFZGl0b3IiLCJOdWxsSW5zdGFuY2UiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiWE1MSHR0cFJlcXVlc3QiLCJkZWZpbml0aW9ucyIsImRlcmVmZXJlbmNlIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmT3duZXIiLCJwcmV2VmFsdWUiLCJyZWYiLCJpc0NpcmN1bGFyUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmUiLCJvdXRwdXQiLCJzdWJzdHJpbmciLCJoYWxmIiwiY2VpbCIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2hvd1JlcXVpcmVkT25seSIsInJvb3QiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbklucHV0Iiwib3JpZ2luYWxTY2hlbWEiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJfdGhpczQiLCJfdGhpczUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QU0sRUFBRTtJQUN2Qjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBcFQsR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQWtHLFNBQUEsRUFBWTtNQUFBLElBQUF1VyxNQUFBO01BQ1YsSUFBSTlXLE1BQU0sR0FBRyxFQUFFO01BRWZoRyxNQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNzVCxTQUFTLENBQUMsQ0FBQ3hSLE9BQU8sQ0FBQyxVQUFDMUMsR0FBRyxFQUFLO1FBQzNDLElBQU00SixNQUFNLEdBQUdtVCxNQUFJLENBQUM3SSxTQUFTLENBQUNsVSxHQUFHLENBQUM7UUFDbENpRyxNQUFNLE1BQUFuRCxNQUFBLENBQUFzQywyQkFBQSxDQUFPYSxNQUFNLEdBQUFiLDJCQUFBLENBQUt3RSxNQUFNLENBQUNwRCxRQUFRLEVBQUUsRUFBQztNQUM1QyxDQUFDLENBQUM7TUFFRixPQUFPUCxNQUFNO0lBQ2Y7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQWpHLEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUFzRixRQUFBLEVBQVc7TUFBQSxJQUFBb1gsTUFBQTtNQUNULElBQUksQ0FBQ1AsSUFBSSxDQUFDN1csT0FBTyxFQUFFO01BRW5CLElBQUksSUFBSSxDQUFDZCxPQUFPLENBQUNnSSxRQUFRLEVBQUU7UUFDekIsSUFBSSxDQUFDeUMsU0FBUyxDQUFDMkQsU0FBUyxHQUFHLEVBQUU7TUFDL0I7TUFFQWpULE1BQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOEIsT0FBTyxDQUFDLFVBQUMxQyxHQUFHLEVBQUs7UUFDakMsT0FBT2dkLE1BQUksQ0FBQ2hkLEdBQUcsQ0FBQztNQUNsQixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQW1HLElBQUE7QUFBQSxFQWxOZ0JvRixhQUFZO0FBcU5oQnBGLG1GQUFJLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IGZha2VGb3JFYWNoID0gKGFycmF5LCBjYWxsYmFjaykgPT4ge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY2FsbGJhY2soYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhc093biA9IChvYmosIGtleSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbn1cblxuZXhwb3J0IGNvbnN0IHJvdW5kMmRlY2ltYWxzID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0T2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmVsc2UpKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMuZm9ybWF0KCkpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIGlmIChpc09iamVjdCh0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4odGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLm5vdCkpID8gdGhpcy5zY2hlbWEubm90IDogdW5kZWZpbmVkXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlYWRPbmx5ICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnJlYWRPbmx5KSA/IHRoaXMuc2NoZW1hLnJlYWRPbmx5IDogdW5kZWZpbmVkXG4gIH1cblxuICByZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQpXSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdGhlbiAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudGhlbikpID8gdGhpcy5zY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdHlwZSAoKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHlwZUlzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy50eXBlKCkpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVJc051bWVyaWMgKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVJcygnbnVtYmVyJykgfHwgdGhpcy50eXBlSXMoJ2ludGVnZXInKVxuICB9XG5cbiAgb25lT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLm9uZU9mKSA/IHRoaXMuc2NoZW1hLm9uZU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICB1bmlxdWVJdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS51bmlxdWVJdGVtcykgPyB0aGlzLnNjaGVtYS51bmlxdWVJdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWFcbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgX2FsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYWxsT2YoKSkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5LCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5MZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5MZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2NvbnN0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuY29uc3QoKSkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IGRpZmZlcmVudCh2YWx1ZSwgc2NoZW1hLmNvbnN0KCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2FueU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbnlPZigpKSkge1xuICAgIGNvbnN0IGFueU9mID0gc2NoZW1hLmFueU9mKClcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGFueU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAoYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2RlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9lbnVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuZW51bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZXhjbHVzaXZlTWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZXhjbHVzaXZlTWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDw9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZm9ybWF0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5mb3JtYXQoKSkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IG1lc3NhZ2VcbiAgICBsZXQgcmVnZXhwXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcydcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCd1cmwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/Omh0dHBzP3xmdHApOlxcL1xcLyg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykoPzpcXC4oPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykqKD86XFwuKD86W2EtelxcdXswMGExfS1cXHV7ZmZmZn1dezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvW15cXHNdKik/JC9pdSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHVybCdcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCd1dWlkJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzp1cm46dXVpZDopP1swLTlhLWZdezh9LSg/OlswLTlhLWZdezR9LSl7M31bMC05YS1mXXsxMn0kL2kpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1dWlkJ1xuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0LCBub3RTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9pZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmlmKCkpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWEudGhlbigpKSAmJiBub3RTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLnRoZW4oKSkpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIHRoZW5FcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4SXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heExlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heExlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5JdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluSXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tdWx0aXBsZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubXVsdGlwbGVPZigpKSkge1xuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YgfHwgdmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX25vdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEubm90KCkpKSB7XG4gICAgY29uc3Qgbm90RXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEubm90KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgX29uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5vbmVPZigpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm4oKSkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVyblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLicgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9yZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnJlcXVpcmVkKCkpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3R5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB2YWxpZCA9IHNjaGVtYS50eXBlKCkuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF91bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEudW5pcXVlSXRlbXMoKSkpIHtcbiAgICBjb25zdCBzZWVuID0ge31cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBfYWRkaXRpb25hbFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gaXNTZXQoc2NoZW1hLnByb3BlcnRpZXMoKSkgPyBzY2hlbWEucHJvcGVydGllcygpIDoge31cbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBsZXQgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICAgIGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgUHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIGRvZXMgbm90IGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllcy5gLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByb290TmFtZTogcHJvcGVydHksXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgX2FsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IF9taW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBfYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2RlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IF9mb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBfbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgX21heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgX21heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IF9taW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBfbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IF9tdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgX25vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgX29uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IF9wYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgX3BhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IF9yZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyBfdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IF9tYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgX3VuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IF9hZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBfYWxsT2YsXG4gIF9hbnlPZixcbiAgX2NvbnN0LFxuICBfZGVwZW5kZW50UmVxdWlyZWQsXG4gIF9lbnVtLFxuICBfZXhjbHVzaXZlTWF4aW11bSxcbiAgX2V4Y2x1c2l2ZU1pbmltdW0sXG4gIF9mb3JtYXQsXG4gIF9pZixcbiAgX21heGltdW0sXG4gIF9tYXhJdGVtcyxcbiAgX21heExlbmd0aCxcbiAgX21heFByb3BlcnRpZXMsXG4gIF9taW5pbXVtLFxuICBfbWluSXRlbXMsXG4gIF9taW5MZW5ndGgsXG4gIF9taW5Qcm9wZXJ0aWVzLFxuICBfbXVsdGlwbGVPZixcbiAgX25vdCxcbiAgX29uZU9mLFxuICBfcGF0dGVybixcbiAgX3BhdHRlcm5Qcm9wZXJ0aWVzLFxuICBfcmVxdWlyZWQsXG4gIF90eXBlLFxuICBfdW5pcXVlSXRlbXNcbl1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnRcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHNjaGVtYS5jbG9uZSgpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA/IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA6ICdpbnZhbGlkJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICB0aGlzLmRyYWZ0LmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkub3B0aW9ucy5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQnUyBzY2hlbWFcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiAhdGhpcy5zY2hlbWEuZW51bSgpLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgICAgIGNvbnN0IHZhbGlkRGVmYXVsdCA9IGRlZmF1bHRFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmICh2YWxpZERlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBkZWFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImNsYXNzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBhbGVydC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaW52YWxpZEZlZWRiYWNrLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXREcm9wZG93biAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RHJvcGRvd25Ub2dnbGUgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gJ1Byb3BlcnRpZXMnXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWRyb3Bkb3duLXByb3BlcnRpZXMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREcm9wZG93bk1lbnUgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1tZW51JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0VG9vbGJhclNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLW5hdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXRvb2xiYXItc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gc2xvdFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBzbG90XG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBzbG90XG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVzc2FnZXNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIG1lc3NhZ2VzU2xvdFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGNoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICByYWRpb0xlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHJhZGlvTGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiByYWRpb0xlZ2VuZFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICByYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1pbmZvJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHN1cGVyLmdldEZpZWxkc2V0KClcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IHN1cGVyLmdldENoZWNrYm94TGFiZWwoY29uZmlnKVxuICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlubGluZScpXG4gICAgcmV0dXJuIHJhZGlvQ29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gc3VwZXIuZ2V0UmFkaW9MYWJlbChjb25maWcpXG4gICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gc3VwZXIuZ2V0UmFkaW8oY29uZmlnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gc3VwZXIuZ2V0VGV4dGFyZWEoY29uZmlnKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IHN1cGVyLmdldFNlbGVjdChjb25maWcpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gYWxlcnRcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gc3VwZXIuZ2V0RmllbGRzZXQoKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncHktMCcpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gc3VwZXIuZ2V0Q2hlY2tib3hMYWJlbChjb25maWcpXG4gICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHN1cGVyLmdldENoZWNrYm94Q29udGFpbmVyKClcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gcmFkaW9Db250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcblxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdteS0zJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuLWZvY3VzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gc3VwZXIuZ2V0TGFiZWwoY29uZmlnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKVxuICAgIHJldHVybiBsYWJlbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lV2lyZWZyYW1lIGZyb20gJy4uL3RoZW1lcy93aXJlZnJhbWUnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IG51bGxcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gbnVsbFxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gbnVsbFxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ3dpcmVmcmFtZSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVXaXJlZnJhbWUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdiYXJlYm9uZXMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDb250YWluZXIoKVxuICAgIHRoaXMudG9vbGJhclNsb3QgPSB0aGlzLnRoZW1lLmdldFRvb2xiYXJTbG90KClcbiAgICB0aGlzLnByb3BlcnRpZXNTbG90ID0gdGhpcy50aGVtZS5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q29udHJvbFNsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udGFpbmVyKVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcbmltcG9ydCB7XG4gIGlzU2V0LFxuICBtZXJnZURlZXAsXG4gIGlzQXJyYXksXG4gIGRpZmZlcmVudCxcbiAgaXNPYmplY3QsXG4gIG5vdFNldFxufSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTXVsdGlwbGVJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTXVsdGlwbGVFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQodGhpcy5zY2hlbWEub25lT2YoKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZikgJiYgc2NoZW1hLm9wdGlvbnM/Lm1lcmdlQWxsT2YpIHtcbiAgICAgICAgICBsZXQgbWVyZ2VkID0ge31cblxuICAgICAgICAgIHNjaGVtYS5hbGxPZi5mb3JFYWNoKChhbGxPZlNjaGVtYSkgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VEZWVwKG1lcmdlZCwgYWxsT2ZTY2hlbWEpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHNjaGVtYSA9IG1lcmdlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KGNsb25lU2NoZW1hLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IGNsb25lU2NoZW1hLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS5vcHRpb25zPy5zd2l0Y2hlclRpdGxlIHx8ICdPcHRpb24tJyArIChpbmRleCArIDEpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlKCkuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ0FycmF5JywgJ09iamVjdCcsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEluc3RhbmNlc1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgIGNvbnN0IHNldFZhbHVlID0gaXNPYmplY3Qoc2NoZW1hQ2xvbmUpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZXNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKDAsIGZhbHNlLCBzZXRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSwgc2V0VmFsdWUgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMuaW5kZXhdXG5cbiAgICBpZiAoc2V0VmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgICB9XG4gIH1cblxuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBmaXR0ZXN0SW5kZXhcbiAgICBsZXQgY2hhbXBpb25FcnJvcnNcblxuICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5pbnN0YW5jZXMpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlRXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZVxuXG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGluc3RhbmNlIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gaW5zdGFuY2UgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIHZhbHVlKSkge1xuICAgICAgY29uc3QgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRGaXR0ZXN0SW5kZXgodmFsdWUpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleClcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjaGVja2JveCBjb250YWluZXJcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7XG4gIGVxdWFsLFxuICBoYXNPd24sXG4gIGlzT2JqZWN0LFxuICBpc1NldFxufSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIHRoaXMubGVnZW5kID0gdGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5kcm9wZG93biA9IHRoaXMudGhlbWUuZ2V0RHJvcGRvd24oKVxuICAgIHRoaXMuZHJvcGRvd25Ub2dnbGUgPSB0aGlzLnRoZW1lLmdldERyb3Bkb3duVG9nZ2xlKClcbiAgICB0aGlzLmRyb3Bkb3duTWVudSA9IHRoaXMudGhlbWUuZ2V0RHJvcGRvd25NZW51KClcblxuICAgIHRoaXMuYWRkUHJvcGVydHlMYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0eScsXG4gICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWVFbXB0eSA9IGtleS5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHByb3BlcnR5TmFtZUVtcHR5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eUV4aXN0ID0gaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKVxuXG4gICAgICBpZiAocHJvcGVydHlFeGlzdCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IHNjaGVtYSA9IHsgdHlwZTogJ2FueScgfVxuXG4gICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcblxuICAgICAgaWYgKGlzU2V0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgICAgICBzY2hlbWEgPSBhZGRpdGlvbmFsUHJvcGVydGllc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50b29sYmFyU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgdGhpcy50b29sYmFyU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duKVxuICAgICAgdGhpcy5kcm9wZG93bi5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duVG9nZ2xlKVxuICAgICAgdGhpcy5kcm9wZG93bi5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duTWVudSlcbiAgICAgIHRoaXMuZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc1Nsb3QpXG4gICAgICB0aGlzLmRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5TGFiZWwpXG4gICAgICB0aGlzLmRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5SW5wdXQpXG4gICAgICB0aGlzLmRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5wcm9wZXJ0aWVzU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QucmVtb3ZlQ2hpbGQodGhpcy5wcm9wZXJ0aWVzU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBjaGlsZC5wYXRoICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgICAgICBjb25zdCBjaGVja2JveExhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgICAgICBmb3I6IGlkLFxuICAgICAgICAgIHRleHRDb250ZW50OiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfSlcblxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveExhYmVsKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBpc1NldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCgpKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCBpc05vdFJlcXVpcmVkID0gIXRoaXMuaXNSZXF1aXJlZChrZXkpXG4gICAgY29uc3Qgc2hvdWxkU3RhcnREZWFjdGl2YXRlZCA9IHRoaXMuamVkaS5vcHRpb25zLmRlYWN0aXZhdGVQcm9wZXJ0aWVzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignZGVhY3RpdmF0ZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKGlzTm90UmVxdWlyZWQgJiYgc2hvdWxkU3RhcnREZWFjdGl2YXRlZCkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGQuZ2V0S2V5KCldXG5cbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHZhbHVlIGlmIHRoZSBvbGQgdmFsdWUgYW5kIHRoZSBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoZGlmZmVyZW50KG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGlsZC5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY2hpbGQgaW5zdGFuY2UgZm9yIHRoZSBuZXcgdmFsdWUgZW50cnkgaGF2aW5nIHRoZSB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoaW5pdGlhbFZhbHVlKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRlZmF1bHQ6IGluaXRpYWxWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEluc3RhbmNlXG4iLCIvKiBnbG9iYWwgY29uZmlybSAqL1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nXG4gICAgfSlcblxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtcydcbiAgICB9KVxuXG4gICAgdGhpcy5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUFsbEJ0bilcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5hY3Rpb25zU2xvdClcblxuICAgICAgd2hpbGUgKGNoaWxkLnVpLmFjdGlvbnNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY2hpbGQudWkuYWN0aW9uc1Nsb3QucmVtb3ZlQ2hpbGQoY2hpbGQudWkuYWN0aW9uc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAvLyBkZWxldGVcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICAgICAgLy8gbW92ZSB1cFxuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgdXAnXG4gICAgICAgIH0pXG5cbiAgICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICB9XG5cbiAgICAgIC8vIG1vdmUgZG93blxuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgICAgIH0pXG5cbiAgICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgfVxuXG4gICAgICBjaGlsZC51aS5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLml0ZW1zKCkpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVySW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCIvKiBnbG9iYWwgWE1MSHR0cFJlcXVlc3QgKi9cblxuaW1wb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBpc1N0cmluZyxcbiAgbm90U2V0LFxuICBjbG9uZSwgZXF1YWxcbn0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBpZiAobm90U2V0KG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdGlvbnMgPSBvcHRpb25zLml0ZXJhdGlvbnMgfHwgN1xuICAgIHRoaXMuWE1MSHR0cFJlcXVlc3QgPSBvcHRpb25zLlhNTEh0dHBSZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgLy8gcmVnaXN0ZXIgZGVmaW5pdGlvbnMgYXMgbG9uZyBhcyB0aGV5IGFyZSBub3QgcmVmZXJlbmNlc1xuICAgICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICAgIGlmIChhcmdzLmtleSAhPT0gJyRyZWYnKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmluaXRpb25zW2FyZ3MucGF0aF0gPSBhcmdzLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBkZXJlZmVyZW5jZVxuICAgICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICAgIGlmICghaXNPYmplY3QoYXJncy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlZk93bmVyID0gYXJncy5wcmV2VmFsdWVcbiAgICAgICAgICBjb25zdCByZWYgPSBhcmdzLnZhbHVlWyckcmVmJ11cblxuICAgICAgICAgIGlmIChpc1NldChyZWZPd25lcikgJiYgaXNTZXQocmVmKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaXJjdWxhclBhdGgoYXJncy5wYXRoKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2lyY3VsYXInLCBhcmdzLnBhdGgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWZPd25lclthcmdzLmtleV0gPSB0aGlzLmRlZmluZShyZWYpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGlzQ2lyY3VsYXJQYXRoIChwYXRoKSB7XG4gICAgbGV0IG91dHB1dCA9IGZhbHNlXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmluaXRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8vIHJlbW92ZSAjXG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMSlcblxuICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvdXRwdXRcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFsZiA9IE1hdGguY2VpbChwYXRoLmxlbmd0aCAvIDIpXG4gICAgICBjb25zdCBmaXJzdEhhbGYgPSBwYXRoLnNsaWNlKDAsIGhhbGYpXG4gICAgICBjb25zdCBzZWNvbmRIYWxmID0gcGF0aC5zbGljZShoYWxmKVxuXG4gICAgICBpZiAoZXF1YWwoZmlyc3RIYWxmLCBzZWNvbmRIYWxmKSkge1xuICAgICAgICBvdXRwdXQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgLy8gZGVmaW5pdGlvbnNcbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmaW5pdGlvbnNbcmVmXSkpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMuZGVmaW5pdGlvbnNbcmVmXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCByZWYuc3RhcnRzV2l0aCgnaHR0cHMnKSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB0aGlzLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcmVmLCBmYWxzZSkgLy8gYGZhbHNlYCBtYWtlcyB0aGUgcmVxdWVzdCBzeW5jaHJvbm91c1xuICAgICAgcmVxdWVzdC5zZW5kKG51bGwpXG5cbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignY2FuIG5vdCBsb2FkJywgcmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHRyYXZlcnNlIChhcmdzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhcmdzLnZhbHVlXG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLmNhbGxiYWNrXG4gICAgY29uc3QgcGF0aCA9IGlzU2V0KGFyZ3MucGF0aCkgPyBhcmdzLnBhdGggKyAnLycgKyBhcmdzLmtleSA6ICcjJ1xuICAgIGFyZ3MucGF0aCA9IHBhdGhcblxuICAgIGlmIChpc1NldChjYWxsYmFjaykpIHtcbiAgICAgIGNhbGxiYWNrKGFyZ3MpXG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKG5ld1ZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZQYXJzZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3InXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGdldFR5cGUsIGhhc093biwgaXNBcnJheSwgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTXVsdGlwbGVJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgQXJyYXlJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBTdHJpbmdJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IE51bGxJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnd2lyZWZyYW1lJyxcbiAgICAgIHJvb3ROYW1lOiAncm9vdCcsXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodGhpcy5vcHRpb25zLnNjaGVtYSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZVxuXG4gICAgLy8gY2lyY3VsYXIgJHJlZiBhcmUgbm90IGluaXRpYWxseSBkZXJlZmVyZW5jZWQgYW5kIG11c3QgYmUgZGVmaW5lZCBvbiBjcmVhdGlvblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyICYmIGhhc093bihjb25maWcuc2NoZW1hLCAnJHJlZicpKSB7XG4gICAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVmaW5lKGNvbmZpZy5zY2hlbWFbJyRyZWYnXSlcbiAgICB9XG5cbiAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChjb25maWcuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KGNvbmZpZy5zY2hlbWEub25lT2YoKSkgfHwgY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8IGlzQXJyYXkoY29uZmlnLnNjaGVtYS50eXBlKCkpIHx8IG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIGlmIChub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpICYmIGlzU2V0KGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IGNvbmZpZy5zY2hlbWEuY2xvbmUoKVxuICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShjb25maWcuc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J1MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9