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
    key: "contains",
    value: function contains() {
      return utils_isObject(this.schema.contains) || isBoolean(this.schema.contains) ? this.schema.contains : undefined;
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
    key: "maxContains",
    value: function maxContains() {
      if (isInteger(this.schema.maxContains) && this.schema.maxContains >= 0) {
        return this.schema.maxContains;
      }
      return undefined;
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
    key: "minContains",
    value: function minContains() {
      if (isInteger(this.schema.minContains) && this.schema.minContains >= 0) {
        return this.schema.minContains;
      }
      return undefined;
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



var allOf_allOf = function allOf(validator, value, schema, key, path) {
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

var minLength_minLength = function minLength(validator, value, schema, key, path) {
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
// CONCATENATED MODULE: ./src/validation/constrains/contains.js


var contains_contains = function contains(validator, value, schema, key, path) {
  var errors = [];
  if (isArray(value) && isSet(schema.contains())) {
    var counter = 0;
    value.forEach(function (item) {
      var containsEditor = new jedi({
        schema: schema.contains(),
        startValue: item,
        refParser: false
      });
      var containsErrors = containsEditor.validate();
      if (containsErrors.length === 0) {
        counter++;
      }
      containsEditor.destroy();
    });
    var containsInvalid = counter === 0;
    if (isSet(schema.minContains())) {
      var minContainsInvalid = counter < schema.minContains();
      if (minContainsInvalid) {
        errors.push({
          message: "Contains match count ".concat(counter, " is less than minimum contains count of ").concat(schema.minContains()),
          path: path
        });
      }
    } else {
      if (containsInvalid) {
        errors.push({
          message: 'No items match contains',
          path: path
        });
      }
    }
    if (isSet(schema.maxContains())) {
      var maxContainsInvalid = counter > schema.maxContains();
      if (maxContainsInvalid) {
        errors.push({
          message: "Contains match count ".concat(counter, " exceeds maximum contains count of ").concat(schema.maxContains()),
          path: path
        });
      }
    }
  }
  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/anyOf.js


var anyOf_anyOf = function anyOf(validator, value, schema, key, path) {
  var errors = [];
  if (isSet(schema.anyOf())) {
    var _anyOf = schema.anyOf();
    var valid = false;
    _anyOf.forEach(function (schema) {
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

var dependentRequired_dependentRequired = function dependentRequired(validator, value, schema, key, path) {
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

var exclusiveMaximum_exclusiveMaximum = function exclusiveMaximum(validator, value, schema, key, path) {
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

var exclusiveMinimum_exclusiveMinimum = function exclusiveMinimum(validator, value, schema, key, path) {
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

var format_format = function format(validator, value, schema, key, path) {
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

var maxItems_maxItems = function maxItems(validator, value, schema, key, path) {
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

var maxLength_maxLength = function maxLength(validator, value, schema, key, path) {
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

var maxProperties_maxProperties = function maxProperties(validator, value, schema, key, path) {
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

var minimum_minimum = function minimum(validator, value, schema, key, path) {
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

var minItems_minItems = function minItems(validator, value, schema, key, path) {
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

var minProperties_minProperties = function minProperties(validator, value, schema, key, path) {
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

var multipleOf_multipleOf = function multipleOf(validator, value, schema, key, path) {
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


var not_not = function not(validator, value, schema, key, path) {
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


var oneOf_oneOf = function oneOf(validator, value, schema, key, path) {
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

var pattern_pattern = function pattern(validator, value, schema, key, path) {
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



var patternProperties_patternProperties = function patternProperties(validator, value, schema, path) {
  var errors = [];
  if (utils_isObject(value) && isSet(schema.patternProperties())) {
    var _patternProperties = schema.patternProperties();
    Object.keys(value).forEach(function (propertyName) {
      Object.keys(_patternProperties).forEach(function (pattern) {
        var regexp = new RegExp(pattern);
        if (regexp.test(propertyName)) {
          var _schema = _patternProperties[pattern];
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

var required_required = function required(validator, value, schema, key, path) {
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

var type_type = function type(validator, value, schema, key, path) {
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

var maximum_maximum = function maximum(validator, value, schema, key, path) {
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

var uniqueItems_uniqueItems = function uniqueItems(validator, value, schema, key, path) {
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



var additionalProperties_additionalProperties = function additionalProperties(validator, value, schema, key, path) {
  var errors = [];
  if (utils_isObject(value) && isSet(schema.additionalProperties())) {
    var properties = isSet(schema.properties()) ? schema.properties() : {};
    var _additionalProperties = schema.additionalProperties();
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
        if (!definedInPatternProperty && _additionalProperties === false && !hasOwn(properties, property)) {
          errors.push({
            message: "Property \"".concat(property, "\" has not been defined and the schema does not allow additional properties."),
            path: path
          });
        }
        if (!definedInPatternProperty && utils_isObject(_additionalProperties) && !hasOwn(properties, property)) {
          var editor = new jedi({
            rootName: property,
            schema: _additionalProperties,
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



























/* harmony default export */ var draft_2020_12 = ({
  additionalProperties: additionalProperties_additionalProperties,
  allOf: allOf_allOf,
  anyOf: anyOf_anyOf,
  "const": const_const,
  contains: contains_contains,
  dependentRequired: dependentRequired_dependentRequired,
  "enum": enum_enum,
  exclusiveMaximum: exclusiveMaximum_exclusiveMaximum,
  exclusiveMinimum: exclusiveMinimum_exclusiveMinimum,
  format: format_format,
  "if": if_if,
  maximum: maximum_maximum,
  maxItems: maxItems_maxItems,
  maxLength: maxLength_maxLength,
  maxProperties: maxProperties_maxProperties,
  minimum: minimum_minimum,
  minItems: minItems_minItems,
  minLength: minLength_minLength,
  minProperties: minProperties_minProperties,
  multipleOf: multipleOf_multipleOf,
  not: not_not,
  oneOf: oneOf_oneOf,
  pattern: pattern_pattern,
  patternProperties: patternProperties_patternProperties,
  required: required_required,
  type: type_type,
  uniqueItems: uniqueItems_uniqueItems
});
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
      Object.keys(this.draft).forEach(function (constrain) {
        if (hasOwn(schemaClone, constrain)) {
          var validator = _this.draft[constrain];
          var validatorErrors = validator(_this, value, schema, key, path);
          if (validatorErrors) {
            schemaErrors = [].concat(toConsumableArray_default()(schemaErrors), toConsumableArray_default()(validatorErrors));
          }
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
    key: "getEditorContainer",
    value: function getEditorContainer() {
      var html = document.createElement('div');
      html.classList.add('jedi-editor-container');
      return html;
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
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-array-actions-slot');
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
      var html = document.createElement('button');
      html.setAttribute('type', 'button');
      if (config.value) {
        html.value = config.value;
      }
      if (config.id) {
        html.setAttribute('id', config.value);
      }
      html.textContent = config.textContent;
      return html;
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
      var description = document.createElement('div');
      description.textContent = config.textContent;
      return description;
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var control = document.createElement('div');
      var input = document.createElement('textarea');
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var control = document.createElement('div');
      var input = document.createElement('input');
      input.setAttribute('type', config.type);
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = document.createElement('div');
      var legend = document.createElement('label');
      legend.textContent = config.label;
      if (config.srOnly) {
        legend.classList.add('sr-only');
      }
      control.appendChild(legend);
      var inputs = [];
      config.values.forEach(function (value, index) {
        var radioControl = document.createElement('div');
        radioControl.classList.add('radio');
        var radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('id', config.id + '.' + index);
        radio.setAttribute('value', value);
        inputs.push(radio);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '.' + index);
        if (config.titles && config.titles[index]) {
          label.textContent = config.titles[index];
        }
        control.appendChild(radioControl);
        radioControl.appendChild(radio);
        radioControl.appendChild(label);
      });
      return {
        control: control,
        inputs: inputs
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var control = document.createElement('div');
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(input);
      control.appendChild(label);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var control = document.createElement('div');
      var input = document.createElement('select');
      input.setAttribute('id', config.id);
      config.values.forEach(function (value, index) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        if (config.titles && config.titles[index]) {
          option.textContent = config.titles[index];
        }
        input.appendChild(option);
      });
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      return {
        control: control,
        input: input
      };
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
    key: "getEditorContainer",
    value: function getEditorContainer() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getEditorContainer", this).call(this);
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
    key: "getLegend",
    value: function getLegend(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getLegend", this).call(this, config);
      html.classList.add('panel-heading');
      html.classList.add('pull-right');
      return html;
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getPropertiesSlot", this).call(this);
      html.classList.add('collapse');
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getActionsSlot", this).call(this);
      html.classList.add('pull-right');
      return html;
    }
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getArrayActionsSlot", this).call(this);
      html.classList.add('pull-right');
      return html;
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getChildrenSlot", this).call(this);
    }
  }, {
    key: "getDescriptionSlot",
    value: function getDescriptionSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getDescriptionSlot", this).call(this);
    }
  }, {
    key: "getMessagesSlot",
    value: function getMessagesSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getMessagesSlot", this).call(this);
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getControlSlot", this).call(this);
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
    key: "getPropertiesActivators",
    value: function getPropertiesActivators() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getPropertiesActivators", this).call(this);
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getBtnGroup", this).call(this);
      html.classList.add('btn-group');
      return html;
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
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-primary';
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getDescription", this).call(this, config);
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var control = document.createElement('div');
      control.classList.add('form-group');
      var input = document.createElement('textarea');
      input.setAttribute('id', config.id);
      input.classList.add('form-control');
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var control = document.createElement('div');
      control.classList.add('form-group');
      var input = document.createElement('input');
      input.setAttribute('type', config.type);
      input.setAttribute('id', config.id);
      input.classList.add('form-control');
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = document.createElement('div');
      control.classList.add('form-group');
      var legend = document.createElement('label');
      legend.textContent = config.label;
      if (config.srOnly) {
        legend.classList.add('sr-only');
      }
      control.appendChild(legend);
      var inputs = [];
      config.values.forEach(function (value, index) {
        var radioControl = document.createElement('div');
        radioControl.classList.add('radio');
        var radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('id', config.id + '.' + index);
        radio.setAttribute('value', value);
        inputs.push(radio);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '.' + index);
        var labelText = document.createElement('span');
        if (config.titles && config.titles[index]) {
          labelText.textContent = config.titles[index];
        }
        control.appendChild(radioControl);
        radioControl.appendChild(label);
        label.appendChild(radio);
        label.appendChild(labelText);
      });
      return {
        control: control,
        inputs: inputs
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var control = document.createElement('div');
      control.classList.add('checkbox');
      control.classList.add('form-group');
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        labelText.classList.add('sr-only');
      }
      control.appendChild(label);
      label.appendChild(input);
      label.appendChild(labelText);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var control = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getSelectControl", this).call(this, config);
      control.control.classList.add('form-group');
      control.input.classList.add('form-control');
      return control;
    }
  }, {
    key: "getAlert",
    value: function getAlert(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getAlert", this).call(this, config);
      html.classList.add('alert');
      html.classList.add('alert-danger');
      return html;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getInvalidFeedback", this).call(this, config);
      html.classList.add('text-danger');
      return html;
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
    key: "getEditorContainer",
    value: function getEditorContainer() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getEditorContainer", this).call(this);
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
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getPropertiesSlot", this).call(this);
      html.classList.add('collapse');
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getActionsSlot", this).call(this);
    }
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getArrayActionsSlot", this).call(this);
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getChildrenSlot", this).call(this);
    }
  }, {
    key: "getDescriptionSlot",
    value: function getDescriptionSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getDescriptionSlot", this).call(this);
    }
  }, {
    key: "getMessagesSlot",
    value: function getMessagesSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getMessagesSlot", this).call(this);
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getControlSlot", this).call(this);
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
    key: "getPropertiesActivators",
    value: function getPropertiesActivators() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getPropertiesActivators", this).call(this);
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getBtnGroup", this).call(this);
      html.classList.add('btn-group');
      return html;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getButton", this).call(this, config);
      html.classList.add('btn');
      html.classList.add('btn-sm');
      return html;
    }
  }, {
    key: "getArrayBtnAdd",
    value: function getArrayBtnAdd(config) {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getArrayBtnAdd", this).call(this, config);
    }
  }, {
    key: "getArrayBtnDeleteAll",
    value: function getArrayBtnDeleteAll(config) {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getArrayBtnDeleteAll", this).call(this, config);
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-primary';
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var description = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getDescription", this).call(this, config);
      description.classList.add('form-text');
      return description;
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var control = document.createElement('div');
      control.classList.add('form-group');
      var input = document.createElement('textarea');
      input.setAttribute('id', config.id);
      input.classList.add('form-control');
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var control = document.createElement('div');
      control.classList.add('form-group');
      var input = document.createElement('input');
      input.setAttribute('type', config.type);
      input.setAttribute('id', config.id);
      input.classList.add('form-control');
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = document.createElement('div');
      control.classList.add('form-group');
      var legend = document.createElement('label');
      legend.textContent = config.label;
      if (config.srOnly) {
        legend.classList.add('sr-only');
      }
      control.appendChild(legend);
      var inputs = [];
      config.values.forEach(function (value, index) {
        var radioControl = document.createElement('div');
        radioControl.classList.add('form-check');
        var radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('id', config.id + '.' + index);
        radio.setAttribute('value', value);
        radio.classList.add('form-check-input');
        inputs.push(radio);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '.' + index);
        label.classList.add('form-check-label');
        if (config.titles && config.titles[index]) {
          label.textContent = config.titles[index];
        }
        control.appendChild(radioControl);
        radioControl.appendChild(radio);
        radioControl.appendChild(label);
      });
      return {
        control: control,
        inputs: inputs
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var control = document.createElement('div');
      control.classList.add('form-check');
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', config.id);
      input.classList.add('form-check-input');
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      input.classList.add('form-check-label');
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(input);
      control.appendChild(label);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var control = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getSelectControl", this).call(this, config);
      control.control.classList.add('form-group');
      control.input.classList.add('form-control');
      return control;
    }
  }, {
    key: "getAlert",
    value: function getAlert(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getAlert", this).call(this, config);
      html.classList.add('alert');
      html.classList.add('alert-danger');
      return html;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getInvalidFeedback", this).call(this, config);
      html.classList.add('text-danger');
      html.classList.add('form-text');
      html.classList.add('d-block');
      return html;
    }
  }]);
  return ThemeBootstrap4;
}(barebones);
/* harmony default export */ var bootstrap4 = (bootstrap4_ThemeBootstrap4);
// CONCATENATED MODULE: ./src/themes/bootstrap5.js






function bootstrap5_createSuper(Derived) { var hasNativeReflectConstruct = bootstrap5_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function bootstrap5_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var bootstrap5_ThemeBootstrap5 = /*#__PURE__*/function (_ThemeBarebones) {
  inherits_default()(ThemeBootstrap5, _ThemeBarebones);
  var _super = bootstrap5_createSuper(ThemeBootstrap5);
  function ThemeBootstrap5() {
    classCallCheck_default()(this, ThemeBootstrap5);
    return _super.apply(this, arguments);
  }
  createClass_default()(ThemeBootstrap5, [{
    key: "getEditorContainer",
    value: function getEditorContainer() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getEditorContainer", this).call(this);
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
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getFieldsetBody", this).call(this);
      html.classList.add('card-body');
      return html;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getLegend", this).call(this, config);
      html.classList.add('card-header');
      html.classList.add('d-flex');
      html.classList.add('justify-content-between');
      html.classList.add('align-items-center');
      html.classList.add('py-1');
      html.classList.add('float-right');
      return html;
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getPropertiesSlot", this).call(this);
      html.classList.add('collapse');
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getActionsSlot", this).call(this);
    }
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getArrayActionsSlot", this).call(this);
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getChildrenSlot", this).call(this);
    }
  }, {
    key: "getDescriptionSlot",
    value: function getDescriptionSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getDescriptionSlot", this).call(this);
    }
  }, {
    key: "getMessagesSlot",
    value: function getMessagesSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getMessagesSlot", this).call(this);
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var controlSlot = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getControlSlot", this).call(this);
      controlSlot.classList.add('mb-3');
      return controlSlot;
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
  }, {
    key: "getPropertiesActivators",
    value: function getPropertiesActivators() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getPropertiesActivators", this).call(this);
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getBtnGroup", this).call(this);
      html.classList.add('btn-group');
      return html;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getButton", this).call(this, config);
      html.classList.add('btn');
      html.classList.add('btn-sm');
      return html;
    }
  }, {
    key: "getArrayBtnAdd",
    value: function getArrayBtnAdd(config) {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getArrayBtnAdd", this).call(this, config);
    }
  }, {
    key: "getArrayBtnDeleteAll",
    value: function getArrayBtnDeleteAll(config) {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getArrayBtnDeleteAll", this).call(this, config);
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-primary';
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var description = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getDescription", this).call(this, config);
      description.classList.add('form-text');
      return description;
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var control = document.createElement('div');
      var input = document.createElement('textarea');
      input.setAttribute('id', config.id);
      input.classList.add('form-control');
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var control = document.createElement('div');
      var input = document.createElement('input');
      input.setAttribute('type', config.type);
      input.setAttribute('id', config.id);
      input.classList.add('form-control');
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = document.createElement('div');
      var legend = document.createElement('label');
      legend.textContent = config.label;
      if (config.srOnly) {
        legend.classList.add('sr-only');
      }
      control.appendChild(legend);
      var inputs = [];
      config.values.forEach(function (value, index) {
        var radioControl = document.createElement('div');
        radioControl.classList.add('form-check');
        var radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('id', config.id + '.' + index);
        radio.setAttribute('value', value);
        radio.classList.add('form-check-input');
        inputs.push(radio);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '.' + index);
        label.classList.add('form-check-label');
        if (config.titles && config.titles[index]) {
          label.textContent = config.titles[index];
        }
        control.appendChild(radioControl);
        radioControl.appendChild(radio);
        radioControl.appendChild(label);
      });
      return {
        control: control,
        inputs: inputs
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var control = document.createElement('div');
      control.classList.add('form-check');
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', config.id);
      input.classList.add('form-check-input');
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      input.classList.add('form-check-label');
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(input);
      control.appendChild(label);
      return {
        control: control,
        input: input
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var control = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getSelectControl", this).call(this, config);
      control.input.classList.add('form-select');
      return control;
    }
  }, {
    key: "getAlert",
    value: function getAlert(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getAlert", this).call(this, config);
      html.classList.add('alert');
      html.classList.add('alert-danger');
      return html;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getInvalidFeedback", this).call(this, config);
      html.classList.add('text-danger');
      html.classList.add('d-block');
      html.classList.add('form-text');
      return html;
    }
  }]);
  return ThemeBootstrap5;
}(barebones);
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
    _this.arrayActionsSlot = null;
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
      this.container = this.theme.getEditorContainer();
      this.propertiesSlot = this.theme.getPropertiesSlot({
        id: 'properties-slot-' + this.instance.path.replace('.', '-')
      });
      this.controlSlot = this.theme.getControlSlot();
      this.messagesSlot = this.theme.getMessagesSlot();
      this.actionsSlot = this.theme.getActionsSlot();
      this.arrayActionsSlot = this.theme.getArrayActionsSlot();
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
      var control = this.theme.getCheckboxControl({
        id: this.instance.path,
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.control = control.control;
      this.input = control.input;

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
      this.control.appendChild(this.descriptionSlot);
      this.control.appendChild(this.messagesSlot);
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
      // control
      var control = this.theme.getRadiosControl({
        values: ['false', 'true'],
        titles: this.instance.schema.option('enumTitles') || ['false', 'true'],
        id: this.instance.path,
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.control = control.control;
      this.radioInputs = control.inputs;

      // events
      this.radioInputs.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var radioValue = radio.value === 'true';
          _this.instance.setValue(radioValue);
        });
      });

      // description
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      this.control.appendChild(this.descriptionSlot);
      this.control.appendChild(this.messagesSlot);
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
      // control
      var control = this.theme.getSelectControl({
        values: ['false', 'true'],
        titles: this.instance.schema.option('enumTitles') || ['false', 'true'],
        id: this.instance.path,
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.control = control.control;
      this.input = control.input;

      // events
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
      this.controlSlot.appendChild(this.control);
      this.control.appendChild(this.descriptionSlot);
      this.control.appendChild(this.messagesSlot);
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
      this.addPropertyControl = this.theme.getInputControl({
        type: 'text',
        id: 'jedi-add-property-input-' + this.instance.path,
        label: 'Property'
      });
      this.addPropertyInput = this.addPropertyControl.input;
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
        this.propertiesSlot.appendChild(this.addPropertyControl.control);
        this.addPropertyControl.control.appendChild(this.addPropertyBtn);
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
          var checboxControl = _this2.theme.getCheckboxControl({
            id: id,
            label: isSet(child.schema.title()) ? child.schema.title() : child.getKey(),
            srOnly: false
          });
          var checkbox = checboxControl.input;
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
          _this2.propertiesContainer.appendChild(checboxControl.control);
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
        child.ui.controlSlot.appendChild(child.ui.arrayActionsSlot);
        while (child.ui.arrayActionsSlot.firstChild) {
          child.ui.arrayActionsSlot.removeChild(child.ui.arrayActionsSlot.lastChild);
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
        child.ui.arrayActionsSlot.appendChild(btnGroup);
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
      var schema = isSet(this.schema.items()) ? this.schema.items() : {};
      if (notSet(schema.type)) {
        schema.type = isSet(value) ? getType(value) : 'any';
      }
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
      var inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week'];
      var control;
      if (this.instance.schema.formatIs('textarea')) {
        control = this.theme.getTextareaControl({
          id: this.instance.path,
          label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
          srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden')
        });
      } else {
        control = this.theme.getInputControl({
          type: inputTypes.includes(this.instance.schema.format()) ? this.instance.schema.format() : 'text',
          id: this.instance.path,
          label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
          srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden')
        });
      }
      this.control = control.control;
      this.input = control.input;

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
      this.controlSlot.appendChild(this.control);
      this.control.appendChild(this.descriptionSlot);
      this.control.appendChild(this.messagesSlot);
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
      // control
      var control = this.theme.getRadiosControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.instance.schema["enum"](),
        id: this.instance.path,
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.control = control.control;
      this.radioInputs = control.inputs;

      // events
      this.radioInputs.forEach(function (radio) {
        radio.addEventListener('change', function () {
          _this.instance.setValue(radio.value);
        });
      });

      // description
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      this.control.appendChild(this.descriptionSlot);
      this.control.appendChild(this.messagesSlot);
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
      // control
      var control = this.theme.getSelectControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.optionValues,
        id: this.instance.path,
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.control = control.control;
      this.input = control.input;

      // description
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // events
      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      });
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      this.control.appendChild(this.descriptionSlot);
      this.control.appendChild(this.messagesSlot);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
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
      var control = this.theme.getInputControl({
        type: 'number',
        id: this.instance.path,
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden')
      });
      this.control = control.control;
      this.input = control.input;

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
      this.controlSlot.appendChild(this.control);
      this.control.appendChild(this.descriptionSlot);
      this.control.appendChild(this.messagesSlot);
      if (isSet(this.instance.schema.description())) {
        this.descriptionSlot.appendChild(this.description);
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
      // control
      var control = this.theme.getRadiosControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.instance.schema["enum"](),
        id: this.instance.path,
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.control = control.control;
      this.radioInputs = control.inputs;

      // events
      this.radioInputs.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var value = _this.sanitize(radio.value);
          _this.instance.setValue(value);
        });
      });

      // description
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      this.control.appendChild(this.descriptionSlot);
      this.control.appendChild(this.messagesSlot);
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
      // control
      var control = this.theme.getSelectControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.optionValues,
        id: this.instance.path,
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.control = control.control;
      this.input = control.input;
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      this.control.appendChild(this.messagesSlot);

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
      this.container.appendChild(this.descriptionSlot);
      this.container.appendChild(this.messagesSlot);
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
      theme: 'barebones',
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
      var hiddenControl = this.root.ui.theme.getInputControl({
        type: 'hidden',
        id: 'jedi-hidden-input'
      });
      this.hiddenInput = hiddenControl.input;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiXSwibmFtZXMiOlsiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImZha2VGb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsImluZGV4IiwibGVuZ3RoIiwiaGFzT3duIiwib2JqIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHJldHR5IiwidmFsdWUiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsIk1hdGgiLCJyb3VuZCIsInNvcnRPYmplY3QiLCJrZXlzIiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImVxdWFsIiwiYSIsImIiLCJpc09iamVjdCIsImRpZmZlcmVudCIsImlzTnVsbCIsImlzU2V0Iiwibm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiX3R5cGVvZiIsImdldFR5cGUiLCJ0eXBlIiwibWVyZ2VEZWVwIiwidGFyZ2V0IiwiX2xlbiIsImFyZ3VtZW50cyIsInNvdXJjZXMiLCJfa2V5Iiwic291cmNlIiwic2hpZnQiLCJmb3JFYWNoIiwiYXNzaWduIiwiX2RlZmluZVByb3BlcnR5IiwiYXBwbHkiLCJjb25jYXQiLCJTY2hlbWEiLCJzY2hlbWEiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImFsbE9mIiwidW5kZWZpbmVkIiwiYW55T2YiLCJfY29uc3QiLCJjb250YWlucyIsIl9kZWZhdWx0IiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsIl9lbHNlIiwiX2VudW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsImZvcm1hdElzIiwiX2lmIiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4Q29udGFpbnMiLCJtYXhJdGVtcyIsIm1heExlbmd0aCIsIm1heFByb3BlcnRpZXMiLCJtaW5pbXVtIiwibWluQ29udGFpbnMiLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90Iiwib3B0aW9uIiwib3B0aW9ucyIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZWFkT25seSIsInJlcXVpcmVkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwidHlwZUlzTnVtZXJpYyIsIm9uZU9mIiwidW5pcXVlSXRlbXMiLCJkZXN0cm95IiwiX3RoaXMiLCJ2YWxpZGF0b3IiLCJwYXRoIiwiZXJyb3JzIiwic3ViU2NoZW1hRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJyb290TmFtZSIsInJlZlBhcnNlciIsInN1YlNjaGVtYUVycm9ycyIsInZhbGlkYXRlIiwicmVwbGFjZSIsImludmFsaWQiLCJwdXNoIiwibWVzc2FnZSIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiY291bnRlciIsIml0ZW0iLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwidmFsaWQiLCJhbnlPZkVkaXRvciIsImFueU9mRXJyb3JzIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsImpvaW4iLCJzb21lIiwiZSIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJpZkVkaXRvciIsImlmRXJyb3JzIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByb3BlcnRpZXNDb3VudCIsImNvbXB1dGVkTWluaW11bSIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yIiwiZWRpdG9yRXJyb3JzIiwibWFwIiwiZXJyb3IiLCJ0eXBlcyIsInN0cmluZyIsImludGVnZXIiLCJib29sZWFuIiwib2JqZWN0IiwiX251bGwiLCJjb21wdXRlZE1heGltdW0iLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsImRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIlZhbGlkYXRvciIsImRyYWZ0Iiwic2NoZW1hRXJyb3JzIiwic2NoZW1hQ2xvbmUiLCJjb25zdHJhaW4iLCJ2YWxpZGF0b3JFcnJvcnMiLCJFdmVudEVtaXR0ZXIiLCJsaXN0ZW5lcnMiLCJvbiIsIm5hbWUiLCJlbWl0IiwibGlzdGVuZXIiLCJJbnN0YW5jZSIsIl9FdmVudEVtaXR0ZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJjb25maWciLCJqZWRpIiwiaXNBY3RpdmUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInVpIiwiaW5pdCIsIl90aGlzMiIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwicHJlcGFyZSIsInNldERlZmF1bHRWYWx1ZSIsImlzRWRpdG9yIiwic2V0VUkiLCJvbkNoaWxkQ2hhbmdlIiwiZ2V0S2V5Iiwic3BsaXQiLCJwb3AiLCJ1bnJlZ2lzdGVyIiwiZGVmYXVsdEVycm9ycyIsInZhbGlkRGVmYXVsdCIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiX3RoaXMzIiwiY2hpbGQiLCJUaGVtZUJhcmVib25lcyIsImdldEVkaXRvckNvbnRhaW5lciIsImh0bWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRGaWVsZHNldCIsImdldEZpZWxkc2V0Qm9keSIsImdldExlZ2VuZCIsInRleHRDb250ZW50Iiwic3R5bGUiLCJmb250U2l6ZSIsInNyT25seSIsImdldFByb3BlcnRpZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRBcnJheUFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwiZ2V0RGVzY3JpcHRpb25TbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0Q29udHJvbFNsb3QiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwiZ2V0QnV0dG9uIiwiZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMiLCJnZXRCdG5Hcm91cCIsInNldEF0dHJpYnV0ZSIsImlkIiwiZ2V0QXJyYXlCdG5BZGQiLCJnZXRBcnJheUJ0bkRlbGV0ZUFsbCIsImdldEJ1dHRvbkFjdGl2ZUNsYXNzIiwiZ2V0RGVzY3JpcHRpb24iLCJnZXRUZXh0YXJlYUNvbnRyb2wiLCJjb250cm9sIiwiaW5wdXQiLCJsYWJlbCIsImFwcGVuZENoaWxkIiwiZ2V0SW5wdXRDb250cm9sIiwiZ2V0UmFkaW9zQ29udHJvbCIsImxlZ2VuZCIsImlucHV0cyIsInZhbHVlcyIsInJhZGlvQ29udHJvbCIsInJhZGlvIiwidGl0bGVzIiwiZ2V0Q2hlY2tib3hDb250cm9sIiwiZ2V0U2VsZWN0Q29udHJvbCIsImdldEFsZXJ0IiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwiVGhlbWVCb290c3RyYXAzIiwiX1RoZW1lQmFyZWJvbmVzIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsImxhYmVsVGV4dCIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsImNvbnRyb2xTbG90IiwiRWRpdG9yIiwiaW5zdGFuY2UiLCJ0aGVtZSIsImNvbnRhaW5lciIsInByb3BlcnRpZXNTbG90IiwibWVzc2FnZXNTbG90IiwiYWN0aW9uc1Nsb3QiLCJhcnJheUFjdGlvbnNTbG90IiwiY2hpbGRyZW5TbG90IiwiZGVzY3JpcHRpb25TbG90IiwiZGlzYWJsZWQiLCJidWlsZCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJyZWZyZXNoVUkiLCJhbHdheXNTaG93RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJpbm5lckhUTUwiLCJpbnZhbGlkRmVlZGJhY2siLCJkaXNhYmxlIiwiZW5hYmxlIiwic2FuaXRpemUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJNdWx0aXBsZUVkaXRvciIsIl9FZGl0b3IiLCJmaWVsZHNldCIsImZpZWxkc2V0Qm9keSIsInN3aXRjaGVyQnV0dG9ucyIsInN3aXRjaGVyIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJidXR0b24iLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiTnVtYmVyIiwic3dpdGNoSW5zdGFuY2UiLCJvbGRJbnN0YW5jZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsImFjdGl2ZUluc3RhbmNlIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmUiLCJNdWx0aXBsZUluc3RhbmNlIiwiX0luc3RhbmNlIiwic2NoZW1hcyIsIm9uU2V0VmFsdWUiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIl9zY2hlbWEkb3B0aW9ucyIsIl9zY2hlbWEkb3B0aW9uczIiLCJfb2JqZWN0U3ByZWFkIiwibWVyZ2VBbGxPZiIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImNyZWF0ZUluc3RhbmNlIiwibmV3SW5kZXgiLCJnZXRGaXR0ZXN0SW5kZXgiLCJmaXR0ZXN0SW5kZXgiLCJjaGFtcGlvbkVycm9ycyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJpbnN0YW5jZUVycm9ycyIsImVyciIsImYiLCJCb29sZWFuRWRpdG9yIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwiX0Jvb2xlYW5FZGl0b3IiLCJyYWRpb0lucHV0cyIsInJhZGlvVmFsdWUiLCJCb29sZWFuRW51bVNlbGVjdEVkaXRvciIsIkJvb2xlYW5JbnN0YW5jZSIsIk9iamVjdEVkaXRvciIsInByb3BlcnRpZXNUb2dnbGUiLCJwcm9wZXJ0aWVzQ29udGFpbmVyIiwiYWRkUHJvcGVydHlDb250cm9sIiwiYWRkUHJvcGVydHlJbnB1dCIsImFkZFByb3BlcnR5QnRuIiwicHJvcGVydHlOYW1lRW1wdHkiLCJwcm9wZXJ0eUV4aXN0IiwiY3JlYXRlQ2hpbGQiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJyZWZyZXNoUHJvcGVydGllc1Nsb3QiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiY2hlY2JveENvbnRyb2wiLCJjaGVja2JveCIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwicmVmcmVzaEVkaXRvcnMiLCJPYmplY3RJbnN0YW5jZSIsInJlZnJlc2hJbnN0YW5jZXMiLCJpc05vdFJlcXVpcmVkIiwic2hvdWxkU3RhcnREZWFjdGl2YXRlZCIsImRlYWN0aXZhdGVQcm9wZXJ0aWVzIiwiZGVsZXRlQ2hpbGQiLCJzcGxpY2UiLCJnZXRDaGlsZCIsImZpbmQiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIkFycmF5RWRpdG9yIiwiYnRuR3JvdXAiLCJhZGRCdG4iLCJhZGRJdGVtIiwiZGVsZXRlQWxsQnRuIiwiY29uZmlybSIsIml0ZW1JbmRleCIsImRlbGV0ZUJ0biIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiQXJyYXlJbnN0YW5jZSIsInJlZnJlc2hDaGlsZHJlbiIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsImZyb21JbmRleCIsInRlbXBFZGl0b3IiLCJjdXJyZW50VmFsdWUiLCJpdGVtVmFsdWUiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiU3RyaW5nIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiX1N0cmluZ0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJvcHRpb25WYWx1ZXMiLCJTdHJpbmdJbnN0YW5jZSIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIl9OdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVySW5zdGFuY2UiLCJOdWxsRWRpdG9yIiwiTnVsbEluc3RhbmNlIiwiUmVmUGFyc2VyIiwiaXRlcmF0aW9ucyIsIlhNTEh0dHBSZXF1ZXN0IiwiZGVmaW5pdGlvbnMiLCJkZXJlZmVyZW5jZSIsInRyYXZlcnNlIiwiYXJncyIsInJlZk93bmVyIiwicHJldlZhbHVlIiwicmVmIiwiaXNDaXJjdWxhclBhdGgiLCJjb25zb2xlIiwibG9nIiwiZGVmaW5lIiwib3V0cHV0Iiwic3Vic3RyaW5nIiwiaGFsZiIsImNlaWwiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwic3RhcnRzV2l0aCIsInJlcXVlc3QiLCJvcGVuIiwic2VuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNob3dSZXF1aXJlZE9ubHkiLCJyb290IiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJoaWRkZW5Db250cm9sIiwiaGlkZGVuSW5wdXQiLCJvcmlnaW5hbFNjaGVtYSIsIl90aGlzJHJvb3QiLCJnZXRJbnN0YW5jZSIsIl90aGlzNCIsIl90aGlzNSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QVEsRUFBRTtRQUN6QixJQUFJLENBQUM0RSxTQUFTLENBQUNhLFNBQVMsR0FBRyxFQUFFO01BQy9CO01BRUF4UixNQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzhCLE9BQU8sQ0FBQyxVQUFDMUMsR0FBRyxFQUFLO1FBQ2pDLE9BQU8rYixNQUFJLENBQUMvYixHQUFHLENBQUM7TUFDbEIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFxRyxJQUFBO0FBQUEsRUFuTmdCb0UsYUFBWTtBQXNOaEJwRSxtRkFBSSxFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkpO1xuIiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBmYWtlRm9yRWFjaCA9IChhcnJheSwgY2FsbGJhY2spID0+IHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhZGRpdGlvbmFsUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB0cnVlXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdFxuICB9XG5cbiAgY29udGFpbnMgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5jb250YWlucykpID8gdGhpcy5zY2hlbWEuY29udGFpbnMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuZWxzZSkpID8gdGhpcy5zY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy5mb3JtYXQoKSkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heENvbnRhaW5zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heENvbnRhaW5zKSAmJiB0aGlzLnNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4Q29udGFpbnNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkNvbnRhaW5zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zKSAmJiB0aGlzLnNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluQ29udGFpbnNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5ub3QpKSA/IHRoaXMuc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogdW5kZWZpbmVkXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGFsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYWxsT2YoKSkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5LCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkxlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkxlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5jb25zdCgpKSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWEuY29uc3QoKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuY29udGFpbnMoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5jb250YWlucygpLCBzdGFydFZhbHVlOiBpdGVtLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBjb250YWluc0Vycm9ycyA9IGNvbnRhaW5zRWRpdG9yLnZhbGlkYXRlKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5taW5Db250YWlucygpKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBzY2hlbWEubWluQ29udGFpbnMoKSlcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gaXMgbGVzcyB0aGFuIG1pbmltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWluQ29udGFpbnMoKX1gLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogJ05vIGl0ZW1zIG1hdGNoIGNvbnRhaW5zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5tYXhDb250YWlucygpKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBzY2hlbWEubWF4Q29udGFpbnMoKSlcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gZXhjZWVkcyBtYXhpbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1heENvbnRhaW5zKCl9YCxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBhbnlPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYW55T2YoKSkpIHtcbiAgICBjb25zdCBhbnlPZiA9IHNjaGVtYS5hbnlPZigpXG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9lbnVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuZW51bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGV4Y2x1c2l2ZU1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8PSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgZ3JlYXRlciB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZm9ybWF0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5mb3JtYXQoKSkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IG1lc3NhZ2VcbiAgICBsZXQgcmVnZXhwXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcydcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCd1cmwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/Omh0dHBzP3xmdHApOlxcL1xcLyg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykoPzpcXC4oPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykqKD86XFwuKD86W2EtelxcdXswMGExfS1cXHV7ZmZmZn1dezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvW15cXHNdKik/JC9pdSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHVybCdcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCd1dWlkJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzp1cm46dXVpZDopP1swLTlhLWZdezh9LSg/OlswLTlhLWZdezR9LSl7M31bMC05YS1mXXsxMn0kL2kpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1dWlkJ1xuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0LCBub3RTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9pZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmlmKCkpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWEudGhlbigpKSAmJiBub3RTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLnRoZW4oKSkpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIHRoZW5FcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhMZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG11bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBub3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm5vdCgpKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IG9uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5vbmVPZigpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVybigpKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy4nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnJlcXVpcmVkKCkpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWEudHlwZSgpKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHZhbGlkID0gc2NoZW1hLnR5cGUoKS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heGltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCB1bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEudW5pcXVlSXRlbXMoKSkpIHtcbiAgICBjb25zdCBzZWVuID0ge31cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWEucHJvcGVydGllcygpKSA/IHNjaGVtYS5wcm9wZXJ0aWVzKCkgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBzY2hlbWEuY2xvbmUoKVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykgPyBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykgOiAnaW52YWxpZCcsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5vcHRpb25zLnJvb3ROYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIC8vIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAvLyAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICdpbmhlcml0J1xuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb25TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZGVzY3JpcHRpb24tc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGh0bWwudmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcudmFsdWUpXG4gICAgfVxuXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWRkJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZS1hbGwnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdqZWRpLWFjdGl2ZS1idG4nXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IGlucHV0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLicgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIGlucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy4nICsgaW5kZXgpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2wpXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW8pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfSlcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0cyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldERlc2NyaXB0aW9uU2xvdCgpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRNZXNzYWdlc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkFkZChjb25maWcpXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCBpbnB1dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy4nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBpbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICcuJyArIGluZGV4KVxuXG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2wpXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICBsYWJlbC5hcHBlbmRDaGlsZChyYWRpbylcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXRzIH1cbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWxUZXh0LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250cm9sLmlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEVkaXRvckNvbnRhaW5lcigpXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFjdGlvbnNTbG90KClcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBnZXREZXNjcmlwdGlvblNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXREZXNjcmlwdGlvblNsb3QoKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0TWVzc2FnZXNTbG90KClcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5EZWxldGVBbGwoY29uZmlnKVxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IGlucHV0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICcuJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBpbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICcuJyArIGluZGV4KVxuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2wpXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW8pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfSlcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0cyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgY29udHJvbC5pbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDaGlsZHJlblNsb3QoKVxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb25TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RGVzY3JpcHRpb25TbG90KClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldE1lc3NhZ2VzU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkRlbGV0ZUFsbChjb25maWcpXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgaW5wdXRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy4nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGlucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy4nICsgaW5kZXgpXG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBjb250cm9sLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbClcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpbylcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXRzIH1cbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDMgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IG51bGxcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gbnVsbFxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gbnVsbFxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5hcnJheUFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gbnVsbFxuICAgIHRoaXMuZGVzY3JpcHRpb25TbG90ID0gbnVsbFxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdib290c3RyYXAzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDMoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdiYXJlYm9uZXMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRFZGl0b3JDb250YWluZXIoKVxuICAgIHRoaXMucHJvcGVydGllc1Nsb3QgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNTbG90KHtcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyB0aGlzLmluc3RhbmNlLnBhdGgucmVwbGFjZSgnLicsICctJylcbiAgICB9KVxuICAgIHRoaXMuY29udHJvbFNsb3QgPSB0aGlzLnRoZW1lLmdldENvbnRyb2xTbG90KClcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5hcnJheUFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRyZW5TbG90KClcbiAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdCA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb25TbG90KClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMubGVnZW5kID0gdGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdPcHRpb25zJ1xuICAgIH0pXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEluc3RhbmNlLnVpLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0Qm9keS5yZW1vdmVDaGlsZChvbGRJbnN0YW5jZS51aS5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5jb250YWluZXIpXG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoKE51bWJlcihidXR0b24udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5pbmRleCkpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBpc09iamVjdChzY2hlbWFDbG9uZSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoMCwgZmFsc2UsIHNldFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cblxuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICAgIH1cbiAgfVxuXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh2YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4KVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUluc3RhbmNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRyb2wuaW5wdXRcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IGNvbnRyb2wuaW5wdXRzXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLmlucHV0ID0gY29udHJvbC5pbnB1dFxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuZmllbGRzZXRCb2R5ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLnByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyB0aGlzLmluc3RhbmNlLnBhdGgucmVwbGFjZSgnLicsICctJylcbiAgICB9KVxuXG4gICAgdGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5Q29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiAnUHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmlucHV0XG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1vYmplY3QtYWRkJylcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7IHR5cGU6ICdhbnknIH1cblxuICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5Q29udHJvbC5jb250cm9sKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUNvbnRyb2wuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBjaGlsZC5wYXRoICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGxhYmVsOiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2JveENvbnRyb2wuY29udHJvbClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hQcm9wZXJ0aWVzU2xvdCgpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzVG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzVG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGRpZmZlcmVudCwgaXNTZXQsIG5vdFNldCwgZ2V0VHlwZSwgaXNPYmplY3QsIGhhc093biB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVtrZXldXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gaXNTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQoKSkgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc093bih0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjcmVhdGVDaGlsZCAoc2NoZW1hLCBrZXkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQgPSB0aGlzLmplZGkub3B0aW9ucy5kZWFjdGl2YXRlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2RlYWN0aXZhdGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChpc05vdFJlcXVpcmVkICYmIHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQpIHtcbiAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQoJy4nKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keSA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5sZWdlbmQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0Qm9keSlcbiAgICB0aGlzLmxlZ2VuZC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMudGhlbWUuZ2V0QXJyYXlCdG5BZGQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QXJyYXlCdG5EZWxldGVBbGwoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgY2hpbGQudWkuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuYXJyYXlBY3Rpb25zU2xvdClcblxuICAgICAgd2hpbGUgKGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90LnJlbW92ZUNoaWxkKGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAvLyBkZWxldGVcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICAgICAgLy8gbW92ZSB1cFxuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgdXAnXG4gICAgICAgIH0pXG5cbiAgICAgICAgbW92ZVVwQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS11cCcpXG5cbiAgICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICB9XG5cbiAgICAgIC8vIG1vdmUgZG93blxuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgICAgIH0pXG5cbiAgICAgICAgbW92ZURvd25CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLWRvd24nKVxuXG4gICAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIH1cblxuICAgICAgY2hpbGQudWkuYXJyYXlBY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5LCBub3RTZXQgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuXG5jbGFzcyBBcnJheUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBBcnJheUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEuaXRlbXMoKSkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDoge31cblxuICAgIGlmIChub3RTZXQoc2NoZW1hLnR5cGUpKSB7XG4gICAgICBzY2hlbWEudHlwZSA9IGlzU2V0KHZhbHVlKSA/IGdldFR5cGUodmFsdWUpIDogJ2FueSdcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cbiAgICBsZXQgY29udHJvbFxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICBjb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSA6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRyb2wuaW5wdXRcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IGNvbnRyb2wuaW5wdXRzXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBjb250cm9sLmlucHV0c1xuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUocmFkaW8udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLmlucHV0ID0gY29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCIvKiBnbG9iYWwgWE1MSHR0cFJlcXVlc3QgKi9cblxuaW1wb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBpc1N0cmluZyxcbiAgbm90U2V0LFxuICBjbG9uZSwgZXF1YWxcbn0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBpZiAobm90U2V0KG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdGlvbnMgPSBvcHRpb25zLml0ZXJhdGlvbnMgfHwgN1xuICAgIHRoaXMuWE1MSHR0cFJlcXVlc3QgPSBvcHRpb25zLlhNTEh0dHBSZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgLy8gcmVnaXN0ZXIgZGVmaW5pdGlvbnMgYXMgbG9uZyBhcyB0aGV5IGFyZSBub3QgcmVmZXJlbmNlc1xuICAgICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICAgIGlmIChhcmdzLmtleSAhPT0gJyRyZWYnKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmluaXRpb25zW2FyZ3MucGF0aF0gPSBhcmdzLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBkZXJlZmVyZW5jZVxuICAgICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICAgIGlmICghaXNPYmplY3QoYXJncy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlZk93bmVyID0gYXJncy5wcmV2VmFsdWVcbiAgICAgICAgICBjb25zdCByZWYgPSBhcmdzLnZhbHVlWyckcmVmJ11cblxuICAgICAgICAgIGlmIChpc1NldChyZWZPd25lcikgJiYgaXNTZXQocmVmKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaXJjdWxhclBhdGgoYXJncy5wYXRoKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2lyY3VsYXInLCBhcmdzLnBhdGgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWZPd25lclthcmdzLmtleV0gPSB0aGlzLmRlZmluZShyZWYpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGlzQ2lyY3VsYXJQYXRoIChwYXRoKSB7XG4gICAgbGV0IG91dHB1dCA9IGZhbHNlXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmluaXRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8vIHJlbW92ZSAjXG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMSlcblxuICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvdXRwdXRcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFsZiA9IE1hdGguY2VpbChwYXRoLmxlbmd0aCAvIDIpXG4gICAgICBjb25zdCBmaXJzdEhhbGYgPSBwYXRoLnNsaWNlKDAsIGhhbGYpXG4gICAgICBjb25zdCBzZWNvbmRIYWxmID0gcGF0aC5zbGljZShoYWxmKVxuXG4gICAgICBpZiAoZXF1YWwoZmlyc3RIYWxmLCBzZWNvbmRIYWxmKSkge1xuICAgICAgICBvdXRwdXQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgLy8gZGVmaW5pdGlvbnNcbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmaW5pdGlvbnNbcmVmXSkpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMuZGVmaW5pdGlvbnNbcmVmXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCByZWYuc3RhcnRzV2l0aCgnaHR0cHMnKSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB0aGlzLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcmVmLCBmYWxzZSkgLy8gYGZhbHNlYCBtYWtlcyB0aGUgcmVxdWVzdCBzeW5jaHJvbm91c1xuICAgICAgcmVxdWVzdC5zZW5kKG51bGwpXG5cbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignY2FuIG5vdCBsb2FkJywgcmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHRyYXZlcnNlIChhcmdzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhcmdzLnZhbHVlXG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLmNhbGxiYWNrXG4gICAgY29uc3QgcGF0aCA9IGlzU2V0KGFyZ3MucGF0aCkgPyBhcmdzLnBhdGggKyAnLycgKyBhcmdzLmtleSA6ICcjJ1xuICAgIGFyZ3MucGF0aCA9IHBhdGhcblxuICAgIGlmIChpc1NldChjYWxsYmFjaykpIHtcbiAgICAgIGNhbGxiYWNrKGFyZ3MpXG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKG5ld1ZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZQYXJzZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3InXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGdldFR5cGUsIGhhc093biwgaXNBcnJheSwgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTXVsdGlwbGVJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgQXJyYXlJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBTdHJpbmdJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IE51bGxJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnYmFyZWJvbmVzJyxcbiAgICAgIHJvb3ROYW1lOiAncm9vdCcsXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodGhpcy5vcHRpb25zLnNjaGVtYSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgY29uc3QgaGlkZGVuQ29udHJvbCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IGhpZGRlbkNvbnRyb2wuaW5wdXRcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZVxuXG4gICAgLy8gY2lyY3VsYXIgJHJlZiBhcmUgbm90IGluaXRpYWxseSBkZXJlZmVyZW5jZWQgYW5kIG11c3QgYmUgZGVmaW5lZCBvbiBjcmVhdGlvblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyICYmIGhhc093bihjb25maWcuc2NoZW1hLCAnJHJlZicpKSB7XG4gICAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVmaW5lKGNvbmZpZy5zY2hlbWFbJyRyZWYnXSlcbiAgICB9XG5cbiAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChjb25maWcuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KGNvbmZpZy5zY2hlbWEub25lT2YoKSkgfHwgY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8IGlzQXJyYXkoY29uZmlnLnNjaGVtYS50eXBlKCkpIHx8IG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIGlmIChub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpICYmIGlzU2V0KGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IGNvbmZpZy5zY2hlbWEuY2xvbmUoKVxuICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShjb25maWcuc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J1MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9