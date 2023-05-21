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
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
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
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3);
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
var pathToAttribute = function pathToAttribute(path) {
  return path.replaceAll('#', 'root').replaceAll('/', '-');
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
              path: path + '/' + propertyName
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
var get = __webpack_require__(1);
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
    _this.path = config.path || _this.jedi.rootName;
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
      return this.path.split(this.jedi.pathSeparator).pop();
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
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      label.appendChild(labelText);
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
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
      var labelText = document.createElement('label');
      labelText.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      label.appendChild(labelText);
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
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
        radio.setAttribute('id', config.id + '/' + index);
        radio.setAttribute('value', value);
        inputs.push(radio);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '/' + index);
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
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(input);
      control.appendChild(label);
      label.appendChild(labelText);
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
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
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      control.appendChild(label);
      control.appendChild(input);
      label.appendChild(labelText);
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
      };
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      return this.getSelectControl(config);
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
      var _get$call = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getTextareaControl", this).call(this, config),
        control = _get$call.control,
        input = _get$call.input,
        label = _get$call.label,
        labelText = _get$call.labelText;
      control.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var _get$call2 = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getInputControl", this).call(this, config),
        control = _get$call2.control,
        input = _get$call2.input,
        label = _get$call2.label,
        labelText = _get$call2.labelText;
      control.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
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
        radio.setAttribute('id', config.id + '/' + index);
        radio.setAttribute('value', value);
        inputs.push(radio);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '/' + index);
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
      var _get$call3 = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getCheckboxControl", this).call(this, config),
        control = _get$call3.control,
        input = _get$call3.input,
        label = _get$call3.label,
        labelText = _get$call3.labelText;
      control.classList.add('checkbox');
      control.classList.add('form-group');
      control.appendChild(label);
      label.appendChild(input);
      label.appendChild(labelText);
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var _get$call4 = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getSelectControl", this).call(this, config),
        control = _get$call4.control,
        input = _get$call4.input,
        label = _get$call4.label,
        labelText = _get$call4.labelText;
      control.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
      };
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var _get$call5 = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getSwitcher", this).call(this, config),
        control = _get$call5.control,
        input = _get$call5.input,
        label = _get$call5.label,
        labelText = _get$call5.labelText;
      control.classList.remove('form-group');
      input.classList.remove('form-control');
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
      };
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
      var _get$call = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getTextareaControl", this).call(this, config),
        control = _get$call.control,
        input = _get$call.input,
        label = _get$call.label,
        labelText = _get$call.labelText;
      control.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var _get$call2 = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getInputControl", this).call(this, config),
        control = _get$call2.control,
        input = _get$call2.input,
        label = _get$call2.label,
        labelText = _get$call2.labelText;
      control.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
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
        radio.setAttribute('id', config.id + '/' + index);
        radio.setAttribute('value', value);
        radio.classList.add('form-check-input');
        inputs.push(radio);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '/' + index);
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
      var _get$call3 = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getCheckboxControl", this).call(this, config),
        control = _get$call3.control,
        input = _get$call3.input,
        label = _get$call3.label,
        labelText = _get$call3.labelText;
      control.classList.add('form-group');
      control.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      control.appendChild(input);
      control.appendChild(label);
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
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
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var _get$call4 = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getSwitcher", this).call(this, config),
        control = _get$call4.control,
        input = _get$call4.input,
        label = _get$call4.label,
        labelText = _get$call4.labelText;
      control.classList.remove('form-group');
      input.classList.remove('form-control');
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
      };
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
      var _get$call = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getTextareaControl", this).call(this, config),
        control = _get$call.control,
        input = _get$call.input,
        label = _get$call.label,
        labelText = _get$call.labelText;
      control.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var _get$call2 = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getInputControl", this).call(this, config),
        control = _get$call2.control,
        input = _get$call2.input,
        label = _get$call2.label,
        labelText = _get$call2.labelText;
      control.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = document.createElement('div');
      var legend = document.createElement('label');
      legend.textContent = config.label;
      if (config.srOnly) {
        legend.classList.add('visually-hidden');
      }
      control.appendChild(legend);
      var inputs = [];
      config.values.forEach(function (value, index) {
        var radioControl = document.createElement('div');
        radioControl.classList.add('form-check');
        var radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('id', config.id + '/' + index);
        radio.setAttribute('value', value);
        radio.classList.add('form-check-input');
        inputs.push(radio);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '/' + index);
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
      var _get$call3 = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getCheckboxControl", this).call(this, config),
        control = _get$call3.control,
        input = _get$call3.input,
        label = _get$call3.label,
        labelText = _get$call3.labelText;
      control.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      control.appendChild(input);
      control.appendChild(label);
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
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
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var _get$call4 = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getSwitcher", this).call(this, config),
        control = _get$call4.control,
        input = _get$call4.input,
        label = _get$call4.label,
        labelText = _get$call4.labelText;
      input.classList.remove('form-select');
      label.classList.add('visually-hidden');
      return {
        control: control,
        input: input,
        label: label,
        labelText: labelText
      };
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
    _this.description = null;
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
        id: 'properties-slot-' + pathToAttribute(this.instance.path)
      });
      this.controlSlot = this.theme.getControlSlot();
      this.messagesSlot = this.theme.getMessagesSlot();
      this.actionsSlot = this.theme.getActionsSlot();
      this.arrayActionsSlot = this.theme.getArrayActionsSlot();
      this.childrenSlot = this.theme.getChildrenSlot();
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });
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
      this.switcher = this.theme.getSwitcher({
        values: this.instance.switcherOptionValues,
        titles: this.instance.switcherOptionsLabels,
        id: pathToAttribute(this.instance.path) + '-switcher',
        label: pathToAttribute(this.instance.path) + '-switcher',
        srOnly: true
      });
      this.switcher.control.classList.add('jedi-switcher');
      this.switcher.input.addEventListener('change', function () {
        var index = Number(_this.switcher.input.value);
        _this.instance.switchInstance(index);
      });

      // appends
      this.container.appendChild(this.fieldset);
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.fieldsetBody);
      this.legend.appendChild(this.actionsSlot);
      this.container.appendChild(this.messagesSlot);
      this.actionsSlot.appendChild(this.switcher.control);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var oldInstance = this.instance.instances[this.instance.lastIndex];
      if (oldInstance.ui.container.parentNode) {
        this.fieldsetBody.removeChild(oldInstance.ui.container);
      }
      this.fieldsetBody.appendChild(this.instance.activeInstance.ui.container);
      var buttons = this.container.querySelectorAll('button');
      if (this.disabled) {
        this.instance.activeInstance.ui.disable();
        this.switcher.input.setAttribute('disabled', 'disabled');
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      } else {
        this.instance.activeInstance.ui.enable();
        this.switcher.input.removeAttribute('disabled', 'disabled');
        buttons.forEach(function (button) {
          button.disabled = false;
        });
      }
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

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      if (isSet(this.instance.schema.description())) {
        this.control.appendChild(this.description);
      }
      this.control.appendChild(this.messagesSlot);
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

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      if (isSet(this.instance.schema.description())) {
        this.control.appendChild(this.description);
      }
      this.control.appendChild(this.messagesSlot);
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

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      if (isSet(this.instance.schema.description())) {
        this.control.appendChild(this.description);
      }
      this.control.appendChild(this.messagesSlot);
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
      this.propertiesToggle = this.theme.getPropertiesToggle({
        textContent: 'Properties',
        id: 'properties-slot-' + pathToAttribute(this.instance.path)
      });
      this.propertiesContainer = this.theme.getPropertiesActivators();
      this.addPropertyControl = this.theme.getInputControl({
        type: 'text',
        id: 'jedi-add-property-input-' + pathToAttribute(this.instance.path),
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
      if (isSet(this.instance.schema.description())) {
        this.fieldsetBody.appendChild(this.description);
      }
      this.fieldsetBody.appendChild(this.propertiesSlot);
      this.fieldsetBody.appendChild(this.messagesSlot);
      this.fieldsetBody.appendChild(this.childrenSlot);
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
        path: this.path + this.jedi.pathSeparator + key,
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
      var _this3 = this;
      return this.children.find(function (instance) {
        return key === instance.getKey().split(_this3.jedi.pathSeparator).pop();
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
      var _this4 = this;
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
        var child = _this4.getChild(key);

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
          _this4.createChild(schema, key);
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

      // appends
      this.container.appendChild(this.fieldset);
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.fieldsetBody);
      this.legend.appendChild(this.actionsSlot);
      if (isSet(this.instance.schema.description())) {
        this.fieldsetBody.appendChild(this.description);
      }
      this.fieldsetBody.appendChild(this.messagesSlot);
      this.fieldsetBody.appendChild(this.childrenSlot);

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
          var itemIndex = Number(child.path.split(_this2.jedi.pathSeparator).pop());
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
        path: this.path + this.jedi.pathSeparator + this.children.length,
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
      if (isSet(this.instance.schema.description())) {
        this.control.appendChild(this.description);
      }
      this.control.appendChild(this.messagesSlot);
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

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      if (isSet(this.instance.schema.description())) {
        this.control.appendChild(this.description);
      }
      this.control.appendChild(this.messagesSlot);
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

      // events
      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      });
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      if (isSet(this.instance.schema.description())) {
        this.control.appendChild(this.description);
      }
      this.control.appendChild(this.messagesSlot);
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

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      if (isSet(this.instance.schema.description())) {
        this.control.appendChild(this.description);
      }
      this.control.appendChild(this.messagesSlot);
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

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control);
      if (isSet(this.instance.schema.description())) {
        this.control.appendChild(this.description);
      }
      this.control.appendChild(this.messagesSlot);
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
      // appends
      if (isSet(this.instance.schema.description())) {
        this.container.appendChild(this.description);
      }
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot);
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
      refParser: true
    }, options);
    _this.rootName = '#';
    _this.pathSeparator = '/';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiXSwibmFtZXMiOlsiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImZha2VGb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsImluZGV4IiwibGVuZ3RoIiwicGF0aFRvQXR0cmlidXRlIiwicGF0aCIsInJlcGxhY2VBbGwiLCJoYXNPd24iLCJvYmoiLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwcmV0dHkiLCJ2YWx1ZSIsInJvdW5kMmRlY2ltYWxzIiwibnVtYmVyIiwiTWF0aCIsInJvdW5kIiwic29ydE9iamVjdCIsImtleXMiLCJzb3J0IiwicmVkdWNlIiwicmVzdWx0IiwiZXF1YWwiLCJhIiwiYiIsImlzT2JqZWN0IiwiZGlmZmVyZW50IiwiaXNOdWxsIiwiaXNTZXQiLCJub3RTZXQiLCJpc051bWJlciIsImlzSW50ZWdlciIsImZsb29yIiwiaXNTdHJpbmciLCJpc0Jvb2xlYW4iLCJpc0FycmF5IiwiQXJyYXkiLCJfdHlwZW9mIiwiZ2V0VHlwZSIsInR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsImZvckVhY2giLCJhc3NpZ24iLCJfZGVmaW5lUHJvcGVydHkiLCJhcHBseSIsImNvbmNhdCIsIlNjaGVtYSIsInNjaGVtYSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYWxsT2YiLCJ1bmRlZmluZWQiLCJhbnlPZiIsIl9jb25zdCIsImNvbnRhaW5zIiwiX2RlZmF1bHQiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiX2Vsc2UiLCJfZW51bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiZm9ybWF0SXMiLCJfaWYiLCJpdGVtcyIsIm1heGltdW0iLCJtYXhDb250YWlucyIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5Db250YWlucyIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJTZXQiLCJ0aGVuIiwidGl0bGUiLCJ0eXBlSXMiLCJ0eXBlSXNOdW1lcmljIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsImRlc3Ryb3kiLCJfdGhpcyIsInZhbGlkYXRvciIsImVycm9ycyIsInN1YlNjaGVtYUVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwicm9vdE5hbWUiLCJyZWZQYXJzZXIiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZGF0ZSIsInJlcGxhY2UiLCJpbnZhbGlkIiwicHVzaCIsIm1lc3NhZ2UiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImNvdW50ZXIiLCJpdGVtIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyIiwicHJvcGVydHkiLCJqb2luIiwic29tZSIsImUiLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0IiwiaWZFZGl0b3IiLCJpZkVycm9ycyIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJwcm9wZXJ0aWVzQ291bnQiLCJjb21wdXRlZE1pbmltdW0iLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwibm90RXJyb3JzIiwib25lT2ZFZGl0b3IiLCJvbmVPZkVycm9ycyIsInByb3BlcnR5TmFtZSIsImVkaXRvciIsImVkaXRvckVycm9ycyIsIm1hcCIsImVycm9yIiwidHlwZXMiLCJzdHJpbmciLCJpbnRlZ2VyIiwiYm9vbGVhbiIsIm9iamVjdCIsIl9udWxsIiwiY29tcHV0ZWRNYXhpbXVtIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsImkiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInNjaGVtYUNsb25lIiwiY29uc3RyYWluIiwidmFsaWRhdG9yRXJyb3JzIiwiRXZlbnRFbWl0dGVyIiwibGlzdGVuZXJzIiwib24iLCJuYW1lIiwiZW1pdCIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJfRXZlbnRFbWl0dGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiY29uZmlnIiwiamVkaSIsImlzQWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJfdGhpczIiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInByZXBhcmUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInNldFVJIiwib25DaGlsZENoYW5nZSIsImdldEtleSIsInNwbGl0IiwicGF0aFNlcGFyYXRvciIsInBvcCIsInVucmVnaXN0ZXIiLCJkZWZhdWx0RXJyb3JzIiwidmFsaWREZWZhdWx0Iiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJfdGhpczMiLCJjaGlsZCIsIlRoZW1lQmFyZWJvbmVzIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwiaHRtbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImdldEZpZWxkc2V0IiwiZ2V0RmllbGRzZXRCb2R5IiwiZ2V0TGVnZW5kIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImZvbnRTaXplIiwic3JPbmx5IiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldEFycmF5QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRDb250cm9sU2xvdCIsImdldFByb3BlcnRpZXNUb2dnbGUiLCJnZXRCdXR0b24iLCJnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImdldEJ0bkdyb3VwIiwic2V0QXR0cmlidXRlIiwiaWQiLCJnZXRBcnJheUJ0bkFkZCIsImdldEFycmF5QnRuRGVsZXRlQWxsIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJnZXREZXNjcmlwdGlvbiIsImdldFRleHRhcmVhQ29udHJvbCIsImNvbnRyb2wiLCJpbnB1dCIsImxhYmVsIiwibGFiZWxUZXh0IiwiYXBwZW5kQ2hpbGQiLCJnZXRJbnB1dENvbnRyb2wiLCJnZXRSYWRpb3NDb250cm9sIiwibGVnZW5kIiwiaW5wdXRzIiwidmFsdWVzIiwicmFkaW9Db250cm9sIiwicmFkaW8iLCJ0aXRsZXMiLCJnZXRDaGVja2JveENvbnRyb2wiLCJnZXRTZWxlY3RDb250cm9sIiwiZ2V0U3dpdGNoZXIiLCJnZXRBbGVydCIsImdldEludmFsaWRGZWVkYmFjayIsIlRoZW1lQm9vdHN0cmFwMyIsIl9UaGVtZUJhcmVib25lcyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJfZ2V0JGNhbGwiLCJfZ2V0JGNhbGwyIiwiX2dldCRjYWxsMyIsIl9nZXQkY2FsbDQiLCJfZ2V0JGNhbGw1IiwicmVtb3ZlIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiY29udHJvbFNsb3QiLCJFZGl0b3IiLCJpbnN0YW5jZSIsInRoZW1lIiwiY29udGFpbmVyIiwicHJvcGVydGllc1Nsb3QiLCJtZXNzYWdlc1Nsb3QiLCJhY3Rpb25zU2xvdCIsImFycmF5QWN0aW9uc1Nsb3QiLCJjaGlsZHJlblNsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsImlubmVySFRNTCIsImludmFsaWRGZWVkYmFjayIsImRpc2FibGUiLCJlbmFibGUiLCJzYW5pdGl6ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk11bHRpcGxlRWRpdG9yIiwiX0VkaXRvciIsImZpZWxkc2V0IiwiZmllbGRzZXRCb2R5Iiwic3dpdGNoZXIiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJOdW1iZXIiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsInJlbW92ZUF0dHJpYnV0ZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJfSW5zdGFuY2UiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwiX3NjaGVtYSRvcHRpb25zIiwiX3NjaGVtYSRvcHRpb25zMiIsIl9vYmplY3RTcHJlYWQiLCJtZXJnZUFsbE9mIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwiY3JlYXRlSW5zdGFuY2UiLCJuZXdJbmRleCIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImluc3RhbmNlRXJyb3JzIiwiZXJyIiwiZiIsIkJvb2xlYW5FZGl0b3IiLCJjaGVja2VkIiwiQm9vbGVhbiIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJfQm9vbGVhbkVkaXRvciIsInJhZGlvSW5wdXRzIiwicmFkaW9WYWx1ZSIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiQm9vbGVhbkluc3RhbmNlIiwiT2JqZWN0RWRpdG9yIiwicHJvcGVydGllc1RvZ2dsZSIsInByb3BlcnRpZXNDb250YWluZXIiLCJhZGRQcm9wZXJ0eUNvbnRyb2wiLCJhZGRQcm9wZXJ0eUlucHV0IiwiYWRkUHJvcGVydHlCdG4iLCJwcm9wZXJ0eU5hbWVFbXB0eSIsInByb3BlcnR5RXhpc3QiLCJjcmVhdGVDaGlsZCIsImVkaXRhYmxlUHJvcGVydGllcyIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjaGVjYm94Q29udHJvbCIsImNoZWNrYm94IiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJyZWZyZXNoRWRpdG9ycyIsIk9iamVjdEluc3RhbmNlIiwicmVmcmVzaEluc3RhbmNlcyIsImlzTm90UmVxdWlyZWQiLCJzaG91bGRTdGFydERlYWN0aXZhdGVkIiwiZGVhY3RpdmF0ZVByb3BlcnRpZXMiLCJkZWxldGVDaGlsZCIsInNwbGljZSIsImdldENoaWxkIiwiZmluZCIsIl90aGlzNCIsIm9sZFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiQXJyYXlFZGl0b3IiLCJidG5Hcm91cCIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwiaXRlbUluZGV4IiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJBcnJheUluc3RhbmNlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiZnJvbUluZGV4IiwidGVtcEVkaXRvciIsImN1cnJlbnRWYWx1ZSIsIml0ZW1WYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJTdHJpbmciLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJfU3RyaW5nRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIm9wdGlvblZhbHVlcyIsIlN0cmluZ0luc3RhbmNlIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiX051bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsIk51bGxFZGl0b3IiLCJOdWxsSW5zdGFuY2UiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiWE1MSHR0cFJlcXVlc3QiLCJkZWZpbml0aW9ucyIsImRlcmVmZXJlbmNlIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmT3duZXIiLCJwcmV2VmFsdWUiLCJyZWYiLCJpc0NpcmN1bGFyUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmUiLCJvdXRwdXQiLCJzdWJzdHJpbmciLCJoYWxmIiwiY2VpbCIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2hvd1JlcXVpcmVkT25seSIsInJvb3QiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbkNvbnRyb2wiLCJoaWRkZW5JbnB1dCIsIm9yaWdpbmFsU2NoZW1hIiwiX3RoaXMkcm9vdCIsImdldEluc3RhbmNlIiwiX3RoaXM1Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7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USxFQUFFLEVBQUM7TUFDNUMsQ0FBQyxDQUFDO01BRUYsT0FBT1AsTUFBTTtJQUNmOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUFsRyxHQUFBO0lBQUFNLEtBQUEsRUFHQSxTQUFBeUYsUUFBQSxFQUFXO01BQUEsSUFBQW1XLE1BQUE7TUFDVCxJQUFJLENBQUNQLElBQUksQ0FBQzVWLE9BQU8sRUFBRTtNQUVuQixJQUFJLElBQUksQ0FBQ2QsT0FBTyxDQUFDOEcsUUFBUSxFQUFFO1FBQ3pCLElBQUksQ0FBQ21GLFNBQVMsQ0FBQ1ksU0FBUyxHQUFHLEVBQUU7TUFDL0I7TUFFQTdSLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOEIsT0FBTyxDQUFDLFVBQUMxQyxHQUFHLEVBQUs7UUFDakMsT0FBT2tjLE1BQUksQ0FBQ2xjLEdBQUcsQ0FBQztNQUNsQixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQW9HLElBQUE7QUFBQSxFQXBOZ0JvRSxhQUFZO0FBdU5oQnBFLG1GQUFJLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IGZha2VGb3JFYWNoID0gKGFycmF5LCBjYWxsYmFjaykgPT4ge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY2FsbGJhY2soYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBhdGhUb0F0dHJpYnV0ZSA9IChwYXRoKSA9PiB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2VBbGwoJyMnLCAncm9vdCcpLnJlcGxhY2VBbGwoJy8nLCAnLScpXG59XG5cbmV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhZGRpdGlvbmFsUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB0cnVlXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdFxuICB9XG5cbiAgY29udGFpbnMgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5jb250YWlucykpID8gdGhpcy5zY2hlbWEuY29udGFpbnMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuZWxzZSkpID8gdGhpcy5zY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy5mb3JtYXQoKSkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heENvbnRhaW5zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heENvbnRhaW5zKSAmJiB0aGlzLnNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4Q29udGFpbnNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkNvbnRhaW5zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zKSAmJiB0aGlzLnNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluQ29udGFpbnNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5ub3QpKSA/IHRoaXMuc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogdW5kZWZpbmVkXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGFsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYWxsT2YoKSkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5LCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkxlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkxlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5jb25zdCgpKSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWEuY29uc3QoKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuY29udGFpbnMoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5jb250YWlucygpLCBzdGFydFZhbHVlOiBpdGVtLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBjb250YWluc0Vycm9ycyA9IGNvbnRhaW5zRWRpdG9yLnZhbGlkYXRlKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5taW5Db250YWlucygpKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBzY2hlbWEubWluQ29udGFpbnMoKSlcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gaXMgbGVzcyB0aGFuIG1pbmltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWluQ29udGFpbnMoKX1gLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogJ05vIGl0ZW1zIG1hdGNoIGNvbnRhaW5zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5tYXhDb250YWlucygpKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBzY2hlbWEubWF4Q29udGFpbnMoKSlcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gZXhjZWVkcyBtYXhpbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1heENvbnRhaW5zKCl9YCxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBhbnlPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYW55T2YoKSkpIHtcbiAgICBjb25zdCBhbnlPZiA9IHNjaGVtYS5hbnlPZigpXG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9lbnVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuZW51bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGV4Y2x1c2l2ZU1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8PSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgZ3JlYXRlciB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZm9ybWF0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5mb3JtYXQoKSkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IG1lc3NhZ2VcbiAgICBsZXQgcmVnZXhwXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcydcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCd1cmwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/Omh0dHBzP3xmdHApOlxcL1xcLyg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykoPzpcXC4oPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykqKD86XFwuKD86W2EtelxcdXswMGExfS1cXHV7ZmZmZn1dezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvW15cXHNdKik/JC9pdSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHVybCdcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCd1dWlkJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzp1cm46dXVpZDopP1swLTlhLWZdezh9LSg/OlswLTlhLWZdezR9LSl7M31bMC05YS1mXXsxMn0kL2kpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1dWlkJ1xuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0LCBub3RTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9pZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmlmKCkpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWEudGhlbigpKSAmJiBub3RTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLnRoZW4oKSkpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIHRoZW5FcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhMZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG11bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBub3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm5vdCgpKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IG9uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5vbmVPZigpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVybigpKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy8nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnJlcXVpcmVkKCkpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWEudHlwZSgpKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHZhbGlkID0gc2NoZW1hLnR5cGUoKS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heGltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCB1bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEudW5pcXVlSXRlbXMoKSkpIHtcbiAgICBjb25zdCBzZWVuID0ge31cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWEucHJvcGVydGllcygpKSA/IHNjaGVtYS5wcm9wZXJ0aWVzKCkgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBzY2hlbWEuY2xvbmUoKVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykgPyBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykgOiAnaW52YWxpZCcsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIC8vIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAvLyAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICdpbmhlcml0J1xuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgaHRtbC52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy52YWx1ZSlcbiAgICB9XG5cbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlLWFsbCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2plZGktYWN0aXZlLWJ0bidcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgaW5wdXRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgaW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLycgKyBpbmRleClcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBjb250cm9sLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbClcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpbylcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXRzIH1cbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWhlYWRpbmcnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRNZXNzYWdlc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkFkZChjb25maWcpXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCBpbnB1dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy8nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBpbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuXG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2wpXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICBsYWJlbC5hcHBlbmRDaGlsZChyYWRpbylcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXRzIH1cbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfSA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDaGlsZHJlblNsb3QoKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0TWVzc2FnZXNTbG90KClcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5EZWxldGVBbGwoY29uZmlnKVxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IGlucHV0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBpbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2wpXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW8pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfSlcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0cyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfSA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29udHJvbC5jb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGNvbnRyb2wuaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfSA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldE1lc3NhZ2VzU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkRlbGV0ZUFsbChjb25maWcpXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH0gPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IGlucHV0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBpbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2wpXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW8pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfSlcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0cyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfSA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4uL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMucHJvcGVydGllc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IG51bGxcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuYXJyYXlBY3Rpb25zU2xvdCA9IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IG51bGxcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbnVsbFxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdib290c3RyYXAzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDMoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdiYXJlYm9uZXMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRFZGl0b3JDb250YWluZXIoKVxuICAgIHRoaXMucHJvcGVydGllc1Nsb3QgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNTbG90KHtcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKVxuICAgIH0pXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q29udHJvbFNsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmFycmF5QWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gdGhpcy50aGVtZS5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgYnVpbGQgKCkge31cblxuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLnZhbGlkYXRlKClcblxuICAgIHRoaXMubWVzc2FnZXNTbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKGVycm9yLm1lc3NhZ2UpXG4gICAgICB0aGlzLm1lc3NhZ2VzU2xvdC5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmxlZ2VuZCA9IHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiAnT3B0aW9ucydcbiAgICB9KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMudGhlbWUuZ2V0U3dpdGNoZXIoe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSArICctc3dpdGNoZXInLFxuICAgICAgbGFiZWw6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpICsgJy1zd2l0Y2hlcicsXG4gICAgICBzck9ubHk6IHRydWVcbiAgICB9KVxuXG4gICAgdGhpcy5zd2l0Y2hlci5jb250cm9sLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyLmNvbnRyb2wpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IG9sZEluc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5pbnN0YW5jZXNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkSW5zdGFuY2UudWkuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRCb2R5LnJlbW92ZUNoaWxkKG9sZEluc3RhbmNlLnVpLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRhaW5lcilcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlci5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcbmltcG9ydCB7XG4gIGlzU2V0LFxuICBtZXJnZURlZXAsXG4gIGlzQXJyYXksXG4gIGRpZmZlcmVudCxcbiAgaXNPYmplY3QsXG4gIG5vdFNldFxufSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTXVsdGlwbGVJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTXVsdGlwbGVFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQodGhpcy5zY2hlbWEub25lT2YoKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZikgJiYgc2NoZW1hLm9wdGlvbnM/Lm1lcmdlQWxsT2YpIHtcbiAgICAgICAgICBsZXQgbWVyZ2VkID0ge31cblxuICAgICAgICAgIHNjaGVtYS5hbGxPZi5mb3JFYWNoKChhbGxPZlNjaGVtYSkgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VEZWVwKG1lcmdlZCwgYWxsT2ZTY2hlbWEpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHNjaGVtYSA9IG1lcmdlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KGNsb25lU2NoZW1hLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IGNsb25lU2NoZW1hLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS5vcHRpb25zPy5zd2l0Y2hlclRpdGxlIHx8ICdPcHRpb24tJyArIChpbmRleCArIDEpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlKCkuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ0FycmF5JywgJ09iamVjdCcsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEluc3RhbmNlc1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgIGNvbnN0IHNldFZhbHVlID0gaXNPYmplY3Qoc2NoZW1hQ2xvbmUpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZXNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKDAsIGZhbHNlLCBzZXRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSwgc2V0VmFsdWUgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMuaW5kZXhdXG5cbiAgICBpZiAoc2V0VmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgICB9XG4gIH1cblxuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBmaXR0ZXN0SW5kZXhcbiAgICBsZXQgY2hhbXBpb25FcnJvcnNcblxuICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5pbnN0YW5jZXMpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlRXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZVxuXG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGluc3RhbmNlIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gaW5zdGFuY2UgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIHZhbHVlKSkge1xuICAgICAgY29uc3QgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRGaXR0ZXN0SW5kZXgodmFsdWUpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleClcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IGNvbnRyb2wuaW5wdXRzXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7XG4gIGVxdWFsLFxuICBoYXNPd24sXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgcGF0aFRvQXR0cmlidXRlXG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuZmllbGRzZXRCb2R5ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLnByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKVxuICAgIH0pXG5cbiAgICB0aGlzLnByb3BlcnRpZXNDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcblxuICAgIHRoaXMuYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQgPSB0aGlzLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5Q29udHJvbC5jb250cm9sKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUNvbnRyb2wuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBjaGlsZC5wYXRoICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGxhYmVsOiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2JveENvbnRyb2wuY29udHJvbClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hQcm9wZXJ0aWVzU2xvdCgpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzVG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzVG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGRpZmZlcmVudCwgaXNTZXQsIG5vdFNldCwgZ2V0VHlwZSwgaXNPYmplY3QsIGhhc093biB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVtrZXldXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gaXNTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQoKSkgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc093bih0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjcmVhdGVDaGlsZCAoc2NoZW1hLCBrZXkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCBpc05vdFJlcXVpcmVkID0gIXRoaXMuaXNSZXF1aXJlZChrZXkpXG4gICAgY29uc3Qgc2hvdWxkU3RhcnREZWFjdGl2YXRlZCA9IHRoaXMuamVkaS5vcHRpb25zLmRlYWN0aXZhdGVQcm9wZXJ0aWVzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignZGVhY3RpdmF0ZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKGlzTm90UmVxdWlyZWQgJiYgc2hvdWxkU3RhcnREZWFjdGl2YXRlZCkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMubGVnZW5kID0gdGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMudGhlbWUuZ2V0QXJyYXlCdG5BZGQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QXJyYXlCdG5EZWxldGVBbGwoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgY2hpbGQudWkuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuYXJyYXlBY3Rpb25zU2xvdClcblxuICAgICAgd2hpbGUgKGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90LnJlbW92ZUNoaWxkKGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAvLyBkZWxldGVcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgfVxuXG4gICAgICBjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBnZXRUeXBlLCBpc1NldCwgY2xvbmUsIGlzQXJyYXksIG5vdFNldCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5pdGVtcygpKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7fVxuXG4gICAgaWYgKG5vdFNldChzY2hlbWEudHlwZSkpIHtcbiAgICAgIHNjaGVtYS50eXBlID0gaXNTZXQodmFsdWUpID8gZ2V0VHlwZSh2YWx1ZSkgOiAnYW55J1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG4gICAgbGV0IGNvbnRyb2xcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWFDb250cm9sKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJylcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2NvbG9yJykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBjb250cm9sLmlucHV0c1xuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRyb2wuaW5wdXRcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gY29udHJvbC5pbnB1dHNcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHJhZGlvLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLmlucHV0ID0gY29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGFwcGVuZHNcbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG5jbGFzcyBOdWxsSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE51bGxFZGl0b3IodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsSW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xuXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nLFxuICBub3RTZXQsXG4gIGNsb25lLCBlcXVhbFxufSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIGlmIChub3RTZXQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCA3XG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLmRlZmluaXRpb25zID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAvLyByZWdpc3RlciBkZWZpbml0aW9ucyBhcyBsb25nIGFzIHRoZXkgYXJlIG5vdCByZWZlcmVuY2VzXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGFyZ3Mua2V5ICE9PSAnJHJlZicpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbnNbYXJncy5wYXRoXSA9IGFyZ3MudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIGRlcmVmZXJlbmNlXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc09iamVjdChhcmdzLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVmT3duZXIgPSBhcmdzLnByZXZWYWx1ZVxuICAgICAgICAgIGNvbnN0IHJlZiA9IGFyZ3MudmFsdWVbJyRyZWYnXVxuXG4gICAgICAgICAgaWYgKGlzU2V0KHJlZk93bmVyKSAmJiBpc1NldChyZWYpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NpcmN1bGFyUGF0aChhcmdzLnBhdGgpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaXJjdWxhcicsIGFyZ3MucGF0aClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZk93bmVyW2FyZ3Mua2V5XSA9IHRoaXMuZGVmaW5lKHJlZilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgaXNDaXJjdWxhclBhdGggKHBhdGgpIHtcbiAgICBsZXQgb3V0cHV0ID0gZmFsc2VcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmaW5pdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy8gcmVtb3ZlICNcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygxKVxuXG4gICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYWxmID0gTWF0aC5jZWlsKHBhdGgubGVuZ3RoIC8gMilcbiAgICAgIGNvbnN0IGZpcnN0SGFsZiA9IHBhdGguc2xpY2UoMCwgaGFsZilcbiAgICAgIGNvbnN0IHNlY29uZEhhbGYgPSBwYXRoLnNsaWNlKGhhbGYpXG5cbiAgICAgIGlmIChlcXVhbChmaXJzdEhhbGYsIHNlY29uZEhhbGYpKSB7XG4gICAgICAgIG91dHB1dCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICAvLyBkZWZpbml0aW9uc1xuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZpbml0aW9uc1tyZWZdKSkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcy5kZWZpbml0aW9uc1tyZWZdKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHJlZi5zdGFydHNXaXRoKCdodHRwcycpKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCByZWYsIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICByZXF1ZXN0LnNlbmQobnVsbClcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjYW4gbm90IGxvYWQnLCByZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHJhdmVyc2UgKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudmFsdWVcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MuY2FsbGJhY2tcbiAgICBjb25zdCBwYXRoID0gaXNTZXQoYXJncy5wYXRoKSA/IGFyZ3MucGF0aCArICcvJyArIGFyZ3Mua2V5IDogJyMnXG4gICAgYXJncy5wYXRoID0gcGF0aFxuXG4gICAgaWYgKGlzU2V0KGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soYXJncylcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaGFzT3duLCBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcblxuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICdiYXJlYm9uZXMnLFxuICAgICAgcmVmUGFyc2VyOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucm9vdE5hbWUgPSAnIydcbiAgICB0aGlzLnBhdGhTZXBhcmF0b3IgPSAnLydcbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG4gICAgdGhpcy5zY2hlbWEgPSBudWxsXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIpIHtcbiAgICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcih7XG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB0aGlzLm9wdGlvbnMuWE1MSHR0cFJlcXVlc3RcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMub3B0aW9ucy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICBjb25zdCBoaWRkZW5Db250cm9sID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICAvLyBjaXJjdWxhciAkcmVmIGFyZSBub3QgaW5pdGlhbGx5IGRlcmVmZXJlbmNlZCBhbmQgbXVzdCBiZSBkZWZpbmVkIG9uIGNyZWF0aW9uXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIgJiYgaGFzT3duKGNvbmZpZy5zY2hlbWEsICckcmVmJykpIHtcbiAgICAgIGNvbmZpZy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZWZpbmUoY29uZmlnLnNjaGVtYVsnJHJlZiddKVxuICAgIH1cblxuICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBPYmplY3RJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdW1iZXJJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGNvbmZpZy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5vbmVPZigpKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgaXNBcnJheShjb25maWcuc2NoZW1hLnR5cGUoKSkgfHwgbm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgaWYgKG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkgJiYgaXNTZXQoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2NoZW1hID0gY29uZmlnLnNjaGVtYS5jbG9uZSgpXG4gICAgICAgIG9yaWdpbmFsU2NoZW1hLnR5cGUgPSBnZXRUeXBlKGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQnUyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=