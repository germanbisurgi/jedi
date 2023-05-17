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
// CONCATENATED MODULE: ./src/validation/constrains/contains.js


var contains_contains = function _contains(validator, value, schema, key, path) {
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



























/* harmony default export */ var draft_2020_12 = ([additionalProperties_additionalProperties, allOf_allOf, anyOf_anyOf, const_const, contains_contains, dependentRequired_dependentRequired, enum_enum, exclusiveMaximum_exclusiveMaximum, exclusiveMinimum_exclusiveMinimum, format_format, if_if, maximum_maximum, maxItems_maxItems, maxLength_maxLength, maxProperties_maxProperties, minimum_minimum, minItems_minItems, minLength_minLength, minProperties_minProperties, multipleOf_multipleOf, not_not, oneOf_oneOf, pattern_pattern, patternProperties_patternProperties, required_required, type_type, uniqueItems_uniqueItems]);
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
    key: "getContainer",
    value: function getContainer() {
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
      var small = document.createElement('small');
      small.textContent = config.textContent;
      return small;
    }
  }, {
    key: "getLabel",
    value: function getLabel(config) {
      var html = document.createElement('label');
      html.setAttribute('for', config["for"]);
      html.textContent = config.textContent;
      if (config.srOnly) {
        html.classList.add('sr-only');
      }
      return html;
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

      // appends
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

      // appends
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
      // control
      var control = document.createElement('div');

      // legend
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
      // control
      var control = document.createElement('div');

      // input
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', config.id);

      // label
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }

      // appends
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
      // control
      var control = document.createElement('div');

      // input
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

      // label
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }

      // appends
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
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getLabel",
    value: function getLabel(config) {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getLabel", this).call(this, config);
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
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getControlSlot", this).call(this);
      html.classList.add('form-group');
      return html;
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
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getAlert", this).call(this, config);
      html.classList.add('alert');
      html.classList.add('alert-danger');
      return html;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getInvalidFeedback", this).call(this, config);
      html.classList.add('invalid-feedback');
      html.classList.add('d-block');
      return html;
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
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      return get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getChildrenSlot", this).call(this);
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getControlSlot", this).call(this);
      html.classList.add('form-group');
      return html;
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

      // appends
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
      var html = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getLabel", this).call(this, config);
      html.classList.add('form-label');
      return html;
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
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var control = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getSelectControl", this).call(this, config);
      control.control.classList.add('form-group');
      control.input.classList.add('form-select');
      return control;
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
      this.container = this.theme.getContainer();
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
      this.controlSlot.appendChild(this.descriptionSlot);
      this.controlSlot.appendChild(this.messagesSlot);
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
      this.controlSlot.appendChild(this.descriptionSlot);
      this.controlSlot.appendChild(this.messagesSlot);
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
      this.controlSlot.appendChild(this.descriptionSlot);
      this.controlSlot.appendChild(this.messagesSlot);
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
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      this.control.appendChild(this.messagesSlot);

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
      this.controlSlot.appendChild(this.descriptionSlot);
      this.controlSlot.appendChild(this.messagesSlot);
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
      this.controlSlot.appendChild(this.descriptionSlot);
      this.controlSlot.appendChild(this.messagesSlot);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiXSwibmFtZXMiOlsiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImZha2VGb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsImluZGV4IiwibGVuZ3RoIiwiaGFzT3duIiwib2JqIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHJldHR5IiwidmFsdWUiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsIk1hdGgiLCJyb3VuZCIsInNvcnRPYmplY3QiLCJrZXlzIiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImVxdWFsIiwiYSIsImIiLCJpc09iamVjdCIsImRpZmZlcmVudCIsImlzTnVsbCIsImlzU2V0Iiwibm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiX3R5cGVvZiIsImdldFR5cGUiLCJ0eXBlIiwibWVyZ2VEZWVwIiwidGFyZ2V0IiwiX2xlbiIsImFyZ3VtZW50cyIsInNvdXJjZXMiLCJfa2V5Iiwic291cmNlIiwic2hpZnQiLCJmb3JFYWNoIiwiYXNzaWduIiwiX2RlZmluZVByb3BlcnR5IiwiYXBwbHkiLCJjb25jYXQiLCJTY2hlbWEiLCJzY2hlbWEiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImFsbE9mIiwidW5kZWZpbmVkIiwiYW55T2YiLCJfY29uc3QiLCJjb250YWlucyIsIl9kZWZhdWx0IiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsIl9lbHNlIiwiX2VudW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsImZvcm1hdElzIiwiX2lmIiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4Q29udGFpbnMiLCJtYXhJdGVtcyIsIm1heExlbmd0aCIsIm1heFByb3BlcnRpZXMiLCJtaW5pbXVtIiwibWluQ29udGFpbnMiLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90Iiwib3B0aW9uIiwib3B0aW9ucyIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZWFkT25seSIsInJlcXVpcmVkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwidHlwZUlzTnVtZXJpYyIsIm9uZU9mIiwidW5pcXVlSXRlbXMiLCJkZXN0cm95IiwiX3RoaXMiLCJfYWxsT2YiLCJ2YWxpZGF0b3IiLCJwYXRoIiwiZXJyb3JzIiwic3ViU2NoZW1hRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJyb290TmFtZSIsInJlZlBhcnNlciIsInN1YlNjaGVtYUVycm9ycyIsInZhbGlkYXRlIiwiX21pbkxlbmd0aCIsInJlcGxhY2UiLCJpbnZhbGlkIiwicHVzaCIsIm1lc3NhZ2UiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsIl9jb250YWlucyIsImNvdW50ZXIiLCJpdGVtIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsIl9hbnlPZiIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsIl9kZXBlbmRlbnRSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyIiwicHJvcGVydHkiLCJqb2luIiwic29tZSIsImUiLCJfZXhjbHVzaXZlTWF4aW11bSIsIl9leGNsdXNpdmVNaW5pbXVtIiwiX2Zvcm1hdCIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJpZkVkaXRvciIsImlmRXJyb3JzIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsIl9tYXhJdGVtcyIsIl9tYXhMZW5ndGgiLCJfbWF4UHJvcGVydGllcyIsInByb3BlcnRpZXNDb3VudCIsIl9taW5pbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiX21pbkl0ZW1zIiwiX21pblByb3BlcnRpZXMiLCJfbXVsdGlwbGVPZiIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJfbm90Iiwibm90RXJyb3JzIiwiX29uZU9mIiwib25lT2ZFZGl0b3IiLCJvbmVPZkVycm9ycyIsIl9wYXR0ZXJuIiwiX3BhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yIiwiZWRpdG9yRXJyb3JzIiwibWFwIiwiZXJyb3IiLCJfcmVxdWlyZWQiLCJfdHlwZSIsInR5cGVzIiwic3RyaW5nIiwiaW50ZWdlciIsImJvb2xlYW4iLCJvYmplY3QiLCJfbnVsbCIsIl9tYXhpbXVtIiwiY29tcHV0ZWRNYXhpbXVtIiwiX3VuaXF1ZUl0ZW1zIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsImkiLCJfYWRkaXRpb25hbFByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInNjaGVtYUNsb25lIiwidmFsaWRhdG9yRXJyb3JzIiwiRXZlbnRFbWl0dGVyIiwibGlzdGVuZXJzIiwib24iLCJuYW1lIiwiZW1pdCIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJfRXZlbnRFbWl0dGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiY29uZmlnIiwiamVkaSIsImlzQWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJfdGhpczIiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInByZXBhcmUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInNldFVJIiwib25DaGlsZENoYW5nZSIsImdldEtleSIsInNwbGl0IiwicG9wIiwidW5yZWdpc3RlciIsImRlZmF1bHRFcnJvcnMiLCJ2YWxpZERlZmF1bHQiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsImNoaWxkIiwiVGhlbWVCYXJlYm9uZXMiLCJnZXRDb250YWluZXIiLCJodG1sIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0RmllbGRzZXQiLCJnZXRGaWVsZHNldEJvZHkiLCJnZXRMZWdlbmQiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiZm9udFNpemUiLCJzck9ubHkiLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEFjdGlvbnNTbG90IiwiZ2V0QXJyYXlBY3Rpb25zU2xvdCIsImdldENoaWxkcmVuU2xvdCIsImdldERlc2NyaXB0aW9uU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsImdldENvbnRyb2xTbG90IiwiZ2V0UHJvcGVydGllc1RvZ2dsZSIsImdldEJ1dHRvbiIsImdldFByb3BlcnRpZXNBY3RpdmF0b3JzIiwiZ2V0QnRuR3JvdXAiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImdldEFycmF5QnRuQWRkIiwiZ2V0QXJyYXlCdG5EZWxldGVBbGwiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsImdldERlc2NyaXB0aW9uIiwic21hbGwiLCJnZXRMYWJlbCIsImdldFRleHRhcmVhQ29udHJvbCIsImNvbnRyb2wiLCJpbnB1dCIsImxhYmVsIiwiYXBwZW5kQ2hpbGQiLCJnZXRJbnB1dENvbnRyb2wiLCJnZXRSYWRpb3NDb250cm9sIiwibGVnZW5kIiwiaW5wdXRzIiwidmFsdWVzIiwicmFkaW9Db250cm9sIiwicmFkaW8iLCJ0aXRsZXMiLCJnZXRDaGVja2JveENvbnRyb2wiLCJnZXRTZWxlY3RDb250cm9sIiwiZ2V0QWxlcnQiLCJnZXRJbnZhbGlkRmVlZGJhY2siLCJUaGVtZUJvb3RzdHJhcDMiLCJfVGhlbWVCYXJlYm9uZXMiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwibGFiZWxUZXh0IiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiX1RoZW1lQm9vdHN0cmFwIiwiRWRpdG9yIiwiaW5zdGFuY2UiLCJ0aGVtZSIsImNvbnRhaW5lciIsInByb3BlcnRpZXNTbG90IiwiY29udHJvbFNsb3QiLCJtZXNzYWdlc1Nsb3QiLCJhY3Rpb25zU2xvdCIsImFycmF5QWN0aW9uc1Nsb3QiLCJjaGlsZHJlblNsb3QiLCJkZXNjcmlwdGlvblNsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsImlubmVySFRNTCIsImludmFsaWRGZWVkYmFjayIsImRpc2FibGUiLCJlbmFibGUiLCJzYW5pdGl6ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk11bHRpcGxlRWRpdG9yIiwiX0VkaXRvciIsImZpZWxkc2V0IiwiZmllbGRzZXRCb2R5Iiwic3dpdGNoZXJCdXR0b25zIiwic3dpdGNoZXIiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsImJ1dHRvbiIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJOdW1iZXIiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJfSW5zdGFuY2UiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwiX3NjaGVtYSRvcHRpb25zIiwiX3NjaGVtYSRvcHRpb25zMiIsIl9vYmplY3RTcHJlYWQiLCJtZXJnZUFsbE9mIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwiY3JlYXRlSW5zdGFuY2UiLCJuZXdJbmRleCIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImluc3RhbmNlRXJyb3JzIiwiZXJyIiwiZiIsIkJvb2xlYW5FZGl0b3IiLCJjaGVja2VkIiwiQm9vbGVhbiIsInJlbW92ZUF0dHJpYnV0ZSIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJfQm9vbGVhbkVkaXRvciIsInJhZGlvSW5wdXRzIiwicmFkaW9WYWx1ZSIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiQm9vbGVhbkluc3RhbmNlIiwiT2JqZWN0RWRpdG9yIiwicHJvcGVydGllc1RvZ2dsZSIsInByb3BlcnRpZXNDb250YWluZXIiLCJhZGRQcm9wZXJ0eUNvbnRyb2wiLCJhZGRQcm9wZXJ0eUlucHV0IiwiYWRkUHJvcGVydHlCdG4iLCJwcm9wZXJ0eU5hbWVFbXB0eSIsInByb3BlcnR5RXhpc3QiLCJjcmVhdGVDaGlsZCIsImVkaXRhYmxlUHJvcGVydGllcyIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjaGVjYm94Q29udHJvbCIsImNoZWNrYm94IiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJyZWZyZXNoRWRpdG9ycyIsIk9iamVjdEluc3RhbmNlIiwicmVmcmVzaEluc3RhbmNlcyIsImlzTm90UmVxdWlyZWQiLCJzaG91bGRTdGFydERlYWN0aXZhdGVkIiwiZGVhY3RpdmF0ZVByb3BlcnRpZXMiLCJkZWxldGVDaGlsZCIsInNwbGljZSIsImdldENoaWxkIiwiZmluZCIsIm9sZFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiQXJyYXlFZGl0b3IiLCJidG5Hcm91cCIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwiaXRlbUluZGV4IiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJBcnJheUluc3RhbmNlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiZnJvbUluZGV4IiwidGVtcEVkaXRvciIsImN1cnJlbnRWYWx1ZSIsIml0ZW1WYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJTdHJpbmciLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJfU3RyaW5nRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIm9wdGlvblZhbHVlcyIsIlN0cmluZ0luc3RhbmNlIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiX051bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsIk51bGxFZGl0b3IiLCJOdWxsSW5zdGFuY2UiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiWE1MSHR0cFJlcXVlc3QiLCJkZWZpbml0aW9ucyIsImRlcmVmZXJlbmNlIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmT3duZXIiLCJwcmV2VmFsdWUiLCJyZWYiLCJpc0NpcmN1bGFyUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmUiLCJvdXRwdXQiLCJzdWJzdHJpbmciLCJoYWxmIiwiY2VpbCIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2hvd1JlcXVpcmVkT25seSIsInJvb3QiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbkNvbnRyb2wiLCJoaWRkZW5JbnB1dCIsIm9yaWdpbmFsU2NoZW1hIiwiX3RoaXMkcm9vdCIsImdldEluc3RhbmNlIiwiX3RoaXM0IiwiX3RoaXM1Il0sIm1hcHBpbmdzIjoiQUFB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Qy9CO01BRUFsVCxNQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzhCLE9BQU8sQ0FBQyxVQUFDMUMsR0FBRyxFQUFLO1FBQ2pDLE9BQU95ZCxNQUFJLENBQUN6ZCxHQUFHLENBQUM7TUFDbEIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFzRyxJQUFBO0FBQUEsRUFuTmdCMEYsYUFBWTtBQXNOaEIxRixtRkFBSSxFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkpO1xuIiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBmYWtlRm9yRWFjaCA9IChhcnJheSwgY2FsbGJhY2spID0+IHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhZGRpdGlvbmFsUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB0cnVlXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdFxuICB9XG5cbiAgY29udGFpbnMgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5jb250YWlucykpID8gdGhpcy5zY2hlbWEuY29udGFpbnMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuZWxzZSkpID8gdGhpcy5zY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy5mb3JtYXQoKSkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heENvbnRhaW5zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heENvbnRhaW5zKSAmJiB0aGlzLnNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4Q29udGFpbnNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkNvbnRhaW5zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zKSAmJiB0aGlzLnNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluQ29udGFpbnNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5ub3QpKSA/IHRoaXMuc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogdW5kZWZpbmVkXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IF9hbGxPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKCkpKSB7XG4gICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IF9jb250YWlucyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuY29udGFpbnMoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5jb250YWlucygpLCBzdGFydFZhbHVlOiBpdGVtLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBjb250YWluc0Vycm9ycyA9IGNvbnRhaW5zRWRpdG9yLnZhbGlkYXRlKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5taW5Db250YWlucygpKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBzY2hlbWEubWluQ29udGFpbnMoKSlcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gaXMgbGVzcyB0aGFuIG1pbmltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWluQ29udGFpbnMoKX1gLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogJ05vIGl0ZW1zIG1hdGNoIGNvbnRhaW5zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5tYXhDb250YWlucygpKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBzY2hlbWEubWF4Q29udGFpbnMoKSlcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gZXhjZWVkcyBtYXhpbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1heENvbnRhaW5zKCl9YCxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFueU9mKCkpKSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2YoKVxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGdyZWF0ZXIgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9mb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgbWVzc2FnZVxuICAgIGxldCByZWdleHBcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3VybCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXJsJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3V1aWQnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHV1aWQnXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuaWYoKSkpIHtcbiAgICBpZiAobm90U2V0KHNjaGVtYS50aGVuKCkpICYmIG5vdFNldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWEudGhlbigpKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4TGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX211bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5ub3QoKSkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBfb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVybigpKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcuJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3JlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucmVxdWlyZWQoKSkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWEudHlwZSgpKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHZhbGlkID0gc2NoZW1hLnR5cGUoKS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3VuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS51bmlxdWVJdGVtcygpKSkge1xuICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IF9hZGRpdGlvbmFsUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWEucHJvcGVydGllcygpKSA/IHNjaGVtYS5wcm9wZXJ0aWVzKCkgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBfYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgX21pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IF9jb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBfYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2RlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IF9mb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBfbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgX21heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgX21heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IF9taW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBfbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IF9tdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgX25vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgX29uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IF9wYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgX3BhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IF9yZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyBfdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IF9tYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgX3VuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IF9hZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBfYWxsT2YsXG4gIF9hbnlPZixcbiAgX2NvbnN0LFxuICBfY29udGFpbnMsXG4gIF9kZXBlbmRlbnRSZXF1aXJlZCxcbiAgX2VudW0sXG4gIF9leGNsdXNpdmVNYXhpbXVtLFxuICBfZXhjbHVzaXZlTWluaW11bSxcbiAgX2Zvcm1hdCxcbiAgX2lmLFxuICBfbWF4aW11bSxcbiAgX21heEl0ZW1zLFxuICBfbWF4TGVuZ3RoLFxuICBfbWF4UHJvcGVydGllcyxcbiAgX21pbmltdW0sXG4gIF9taW5JdGVtcyxcbiAgX21pbkxlbmd0aCxcbiAgX21pblByb3BlcnRpZXMsXG4gIF9tdWx0aXBsZU9mLFxuICBfbm90LFxuICBfb25lT2YsXG4gIF9wYXR0ZXJuLFxuICBfcGF0dGVyblByb3BlcnRpZXMsXG4gIF9yZXF1aXJlZCxcbiAgX3R5cGUsXG4gIF91bmlxdWVJdGVtc1xuXVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBpc0Jvb2xlYW4gfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdFxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gc2NoZW1hLmNsb25lKClcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpID8gc2NoZW1hLm9wdGlvbignbWVzc2FnZScpIDogJ2ludmFsaWQnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XVxuICAgIH1cblxuICAgIHRoaXMuZHJhZnQuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5vcHRpb25zLnJvb3ROYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIC8vIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAvLyAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICdpbmhlcml0J1xuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb25TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZGVzY3JpcHRpb24tc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGh0bWwudmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcudmFsdWUpXG4gICAgfVxuXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWRkJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZS1hbGwnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdqZWRpLWFjdGl2ZS1idG4nXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3Qgc21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXG4gICAgc21hbGwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gc21hbGxcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgLy8gbGVnZW5kXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IGlucHV0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLicgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIGlucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy4nICsgaW5kZXgpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2wpXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW8pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfSlcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0cyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIC8vIGNvbnRyb2xcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIC8vIGFwcGVuZHNcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4teHMnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDaGlsZHJlblNsb3QoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0TGFiZWwoY29uZmlnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWhlYWRpbmcnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IGlucHV0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLicgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIGlucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy4nICsgaW5kZXgpXG5cbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBjb250cm9sLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbClcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHJhZGlvKVxuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIH0pXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dHMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWxUZXh0LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250cm9sLmlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCBpbnB1dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLicgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgaW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLicgKyBpbmRleClcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH0pXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dHMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250cm9sLmlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7XG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGFiZWwoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250cm9sLmlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0JylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4uL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLnByb3BlcnRpZXNTbG90ID0gbnVsbFxuICAgIHRoaXMuY29udHJvbFNsb3QgPSBudWxsXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IG51bGxcbiAgICB0aGlzLmFycmF5QWN0aW9uc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSBudWxsXG4gICAgdGhpcy5kZXNjcmlwdGlvblNsb3QgPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIHRoaXMuaW5zdGFuY2UucGF0aC5yZXBsYWNlKCcuJywgJy0nKVxuICAgIH0pXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q29udHJvbFNsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmFycmF5QWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gdGhpcy50aGVtZS5nZXRDaGlsZHJlblNsb3QoKVxuICAgIHRoaXMuZGVzY3JpcHRpb25TbG90ID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvblNsb3QoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgYnVpbGQgKCkge31cblxuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLnZhbGlkYXRlKClcblxuICAgIHRoaXMubWVzc2FnZXNTbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKGVycm9yLm1lc3NhZ2UpXG4gICAgICB0aGlzLm1lc3NhZ2VzU2xvdC5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ09wdGlvbnMnXG4gICAgfSlcbiAgICB0aGlzLmZpZWxkc2V0Qm9keSA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIC8vIHN3aXRjaGVyIGJ1dHRvbnNcbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIHRoaXMuc3dpdGNoZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gYnV0dG9uXG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHZhbHVlOiBpbmRleFxuICAgICAgfSlcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihidXR0b24udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoSW5zdGFuY2UoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLnB1c2goYnV0dG9uKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoZXIpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IG9sZEluc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5pbnN0YW5jZXNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkSW5zdGFuY2UudWkuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRCb2R5LnJlbW92ZUNoaWxkKG9sZEluc3RhbmNlLnVpLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRhaW5lcilcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmICgoTnVtYmVyKGJ1dHRvbi52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmluZGV4KSkpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgc3VwZXIuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgbWVyZ2VEZWVwLFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIGlzT2JqZWN0LFxuICBub3RTZXRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KHRoaXMuc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChpc1NldChzY2hlbWEuYWxsT2YpICYmIHNjaGVtYS5vcHRpb25zPy5tZXJnZUFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW5jZXNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGlzT2JqZWN0KHNjaGVtYUNsb25lKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2VzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwLCBmYWxzZSwgc2V0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuXG4gICAgaWYgKHNldFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnN0YW5jZUVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBpbnN0YW5jZSB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGluc3RhbmNlIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHZhbHVlKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlSW5zdGFuY2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLmlucHV0ID0gY29udHJvbC5pbnB1dFxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gY29udHJvbC5pbnB1dHNcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRyb2wuaW5wdXRcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7XG4gIGVxdWFsLFxuICBoYXNPd24sXG4gIGlzT2JqZWN0LFxuICBpc1NldFxufSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keSA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIHRoaXMubGVnZW5kID0gdGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5wcm9wZXJ0aWVzVG9nZ2xlID0gdGhpcy50aGVtZS5nZXRQcm9wZXJ0aWVzVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydGllcycsXG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoLnJlcGxhY2UoJy4nLCAnLScpXG4gICAgfSlcblxuICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQgPSB0aGlzLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNUb2dnbGUpXG4gICAgICB0aGlzLnByb3BlcnRpZXNTbG90LmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUNvbnRyb2wuY29udHJvbClcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnByb3BlcnRpZXNDb250YWluZXIubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gY2hpbGQucGF0aCArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgIGNvbnN0IGNoZWNib3hDb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBsYWJlbDogaXNTZXQoY2hpbGQuc2NoZW1hLnRpdGxlKCkpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBzck9ubHk6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVjYm94Q29udHJvbC5pbnB1dFxuXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBoYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSBpc1JlcXVpcmVkIHx8IGlzRGVwZW5kZW50UmVxdWlyZWQgfHwgZGlzYWJsZWRcblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZHNcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNib3hDb250cm9sLmNvbnRyb2wpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0LCBoYXNPd24gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5cbmNsYXNzIE9iamVjdEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBPYmplY3RFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGlzU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IGlzTm90UmVxdWlyZWQgPSAhdGhpcy5pc1JlcXVpcmVkKGtleSlcbiAgICBjb25zdCBzaG91bGRTdGFydERlYWN0aXZhdGVkID0gdGhpcy5qZWRpLm9wdGlvbnMuZGVhY3RpdmF0ZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdkZWFjdGl2YXRlUHJvcGVydGllcycpXG5cbiAgICBpZiAoaXNOb3RSZXF1aXJlZCAmJiBzaG91bGRTdGFydERlYWN0aXZhdGVkKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KCcuJykucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMubGVnZW5kID0gdGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEFycmF5QnRuQWRkKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nXG4gICAgfSlcblxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLnRoZW1lLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QpXG5cbiAgICAgIHdoaWxlIChjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY2hpbGQudWkuYXJyYXlBY3Rpb25zU2xvdC5yZW1vdmVDaGlsZChjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgLy8gZGVsZXRlXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgICB9KVxuXG4gICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUnKVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICAgIC8vIG1vdmUgdXBcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVVcEJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtdXAnKVxuXG4gICAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGRvd25cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVEb3duQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS1kb3duJylcblxuICAgICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGdldFR5cGUsIGlzU2V0LCBjbG9uZSwgaXNBcnJheSwgbm90U2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLml0ZW1zKCkpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHt9XG5cbiAgICBpZiAobm90U2V0KHNjaGVtYS50eXBlKSkge1xuICAgICAgc2NoZW1hLnR5cGUgPSBpc1NldCh2YWx1ZSkgPyBnZXRUeXBlKHZhbHVlKSA6ICdhbnknXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG4gICAgbGV0IGNvbnRyb2xcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWFDb250cm9sKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJylcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnY29sb3InKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IGNvbnRyb2wuaW5wdXRzXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRyb2wuaW5wdXRcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IGNvbnRyb2wuaW5wdXRzXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRyb2wuaW5wdXRcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVySW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ2JhcmVib25lcycsXG4gICAgICByb290TmFtZTogJ3Jvb3QnLFxuICAgICAgcmVmUGFyc2VyOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcbiAgICB0aGlzLnJlZlBhcnNlciA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlcikge1xuICAgICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKHtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHRoaXMub3B0aW9ucy5YTUxIdHRwUmVxdWVzdFxuICAgICAgfSlcblxuICAgICAgdGhpcy5vcHRpb25zLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIGNvbnN0IGhpZGRlbkNvbnRyb2wgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSBoaWRkZW5Db250cm9sLmlucHV0XG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIC8vIGNpcmN1bGFyICRyZWYgYXJlIG5vdCBpbml0aWFsbHkgZGVyZWZlcmVuY2VkIGFuZCBtdXN0IGJlIGRlZmluZWQgb24gY3JlYXRpb25cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlciAmJiBoYXNPd24oY29uZmlnLnNjaGVtYSwgJyRyZWYnKSkge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlZmluZShjb25maWcuc2NoZW1hWyckcmVmJ10pXG4gICAgfVxuXG4gICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEFycmF5SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ251bGwnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVsbEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoY29uZmlnLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLm9uZU9mKCkpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCBub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICBpZiAobm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSAmJiBpc1NldChjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKG9yaWdpbmFsU2NoZW1hKVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoaW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdTIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==