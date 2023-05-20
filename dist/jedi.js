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
  return path.replace('#', 'root').replace('/', '-');
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
      this.descriptionSlot = this.theme.getDescriptionSlot();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiXSwibmFtZXMiOlsiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImZha2VGb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsImluZGV4IiwibGVuZ3RoIiwicGF0aFRvQXR0cmlidXRlIiwicGF0aCIsInJlcGxhY2UiLCJoYXNPd24iLCJvYmoiLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwcmV0dHkiLCJ2YWx1ZSIsInJvdW5kMmRlY2ltYWxzIiwibnVtYmVyIiwiTWF0aCIsInJvdW5kIiwic29ydE9iamVjdCIsImtleXMiLCJzb3J0IiwicmVkdWNlIiwicmVzdWx0IiwiZXF1YWwiLCJhIiwiYiIsImlzT2JqZWN0IiwiZGlmZmVyZW50IiwiaXNOdWxsIiwiaXNTZXQiLCJub3RTZXQiLCJpc051bWJlciIsImlzSW50ZWdlciIsImZsb29yIiwiaXNTdHJpbmciLCJpc0Jvb2xlYW4iLCJpc0FycmF5IiwiQXJyYXkiLCJfdHlwZW9mIiwiZ2V0VHlwZSIsInR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsImZvckVhY2giLCJhc3NpZ24iLCJfZGVmaW5lUHJvcGVydHkiLCJhcHBseSIsImNvbmNhdCIsIlNjaGVtYSIsInNjaGVtYSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYWxsT2YiLCJ1bmRlZmluZWQiLCJhbnlPZiIsIl9jb25zdCIsImNvbnRhaW5zIiwiX2RlZmF1bHQiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiX2Vsc2UiLCJfZW51bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiZm9ybWF0SXMiLCJfaWYiLCJpdGVtcyIsIm1heGltdW0iLCJtYXhDb250YWlucyIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5Db250YWlucyIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJTZXQiLCJ0aGVuIiwidGl0bGUiLCJ0eXBlSXMiLCJ0eXBlSXNOdW1lcmljIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsImRlc3Ryb3kiLCJfdGhpcyIsInZhbGlkYXRvciIsImVycm9ycyIsInN1YlNjaGVtYUVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwicm9vdE5hbWUiLCJyZWZQYXJzZXIiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZGF0ZSIsImludmFsaWQiLCJwdXNoIiwibWVzc2FnZSIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiY291bnRlciIsIml0ZW0iLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwidmFsaWQiLCJhbnlPZkVkaXRvciIsImFueU9mRXJyb3JzIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsImpvaW4iLCJzb21lIiwiZSIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJpZkVkaXRvciIsImlmRXJyb3JzIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByb3BlcnRpZXNDb3VudCIsImNvbXB1dGVkTWluaW11bSIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yIiwiZWRpdG9yRXJyb3JzIiwibWFwIiwiZXJyb3IiLCJ0eXBlcyIsInN0cmluZyIsImludGVnZXIiLCJib29sZWFuIiwib2JqZWN0IiwiX251bGwiLCJjb21wdXRlZE1heGltdW0iLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsImRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIlZhbGlkYXRvciIsImRyYWZ0Iiwic2NoZW1hRXJyb3JzIiwic2NoZW1hQ2xvbmUiLCJjb25zdHJhaW4iLCJ2YWxpZGF0b3JFcnJvcnMiLCJFdmVudEVtaXR0ZXIiLCJsaXN0ZW5lcnMiLCJvbiIsIm5hbWUiLCJlbWl0IiwibGlzdGVuZXIiLCJJbnN0YW5jZSIsIl9FdmVudEVtaXR0ZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJjb25maWciLCJqZWRpIiwiaXNBY3RpdmUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInVpIiwiaW5pdCIsIl90aGlzMiIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwicHJlcGFyZSIsInNldERlZmF1bHRWYWx1ZSIsImlzRWRpdG9yIiwic2V0VUkiLCJvbkNoaWxkQ2hhbmdlIiwiZ2V0S2V5Iiwic3BsaXQiLCJwYXRoU2VwYXJhdG9yIiwicG9wIiwidW5yZWdpc3RlciIsImRlZmF1bHRFcnJvcnMiLCJ2YWxpZERlZmF1bHQiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsImNoaWxkIiwiVGhlbWVCYXJlYm9uZXMiLCJnZXRFZGl0b3JDb250YWluZXIiLCJodG1sIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0RmllbGRzZXQiLCJnZXRGaWVsZHNldEJvZHkiLCJnZXRMZWdlbmQiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiZm9udFNpemUiLCJzck9ubHkiLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEFjdGlvbnNTbG90IiwiZ2V0QXJyYXlBY3Rpb25zU2xvdCIsImdldENoaWxkcmVuU2xvdCIsImdldERlc2NyaXB0aW9uU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsImdldENvbnRyb2xTbG90IiwiZ2V0UHJvcGVydGllc1RvZ2dsZSIsImdldEJ1dHRvbiIsImdldFByb3BlcnRpZXNBY3RpdmF0b3JzIiwiZ2V0QnRuR3JvdXAiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImdldEFycmF5QnRuQWRkIiwiZ2V0QXJyYXlCdG5EZWxldGVBbGwiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsImdldERlc2NyaXB0aW9uIiwiZ2V0VGV4dGFyZWFDb250cm9sIiwiY29udHJvbCIsImlucHV0IiwibGFiZWwiLCJhcHBlbmRDaGlsZCIsImdldElucHV0Q29udHJvbCIsImdldFJhZGlvc0NvbnRyb2wiLCJsZWdlbmQiLCJpbnB1dHMiLCJ2YWx1ZXMiLCJyYWRpb0NvbnRyb2wiLCJyYWRpbyIsInRpdGxlcyIsImdldENoZWNrYm94Q29udHJvbCIsImdldFNlbGVjdENvbnRyb2wiLCJnZXRBbGVydCIsImdldEludmFsaWRGZWVkYmFjayIsIlRoZW1lQm9vdHN0cmFwMyIsIl9UaGVtZUJhcmVib25lcyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJsYWJlbFRleHQiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJjb250cm9sU2xvdCIsIkVkaXRvciIsImluc3RhbmNlIiwidGhlbWUiLCJjb250YWluZXIiLCJwcm9wZXJ0aWVzU2xvdCIsIm1lc3NhZ2VzU2xvdCIsImFjdGlvbnNTbG90IiwiYXJyYXlBY3Rpb25zU2xvdCIsImNoaWxkcmVuU2xvdCIsImRlc2NyaXB0aW9uU2xvdCIsImRpc2FibGVkIiwiYnVpbGQiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwicmVmcmVzaFVJIiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwiaW5uZXJIVE1MIiwiaW52YWxpZEZlZWRiYWNrIiwiZGlzYWJsZSIsImVuYWJsZSIsInNhbml0aXplIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiTXVsdGlwbGVFZGl0b3IiLCJfRWRpdG9yIiwiZmllbGRzZXQiLCJmaWVsZHNldEJvZHkiLCJzd2l0Y2hlckJ1dHRvbnMiLCJzd2l0Y2hlciIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwiYnV0dG9uIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk51bWJlciIsInN3aXRjaEluc3RhbmNlIiwib2xkSW5zdGFuY2UiLCJpbnN0YW5jZXMiLCJsYXN0SW5kZXgiLCJhY3RpdmVJbnN0YW5jZSIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwiTXVsdGlwbGVJbnN0YW5jZSIsIl9JbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJfc2NoZW1hJG9wdGlvbnMiLCJfc2NoZW1hJG9wdGlvbnMyIiwiX29iamVjdFNwcmVhZCIsIm1lcmdlQWxsT2YiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJjcmVhdGVJbnN0YW5jZSIsIm5ld0luZGV4IiwiZ2V0Rml0dGVzdEluZGV4IiwiZml0dGVzdEluZGV4IiwiY2hhbXBpb25FcnJvcnMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiaW5zdGFuY2VFcnJvcnMiLCJlcnIiLCJmIiwiQm9vbGVhbkVkaXRvciIsImNoZWNrZWQiLCJCb29sZWFuIiwicmVtb3ZlQXR0cmlidXRlIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsIl9Cb29sZWFuRWRpdG9yIiwicmFkaW9JbnB1dHMiLCJyYWRpb1ZhbHVlIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJCb29sZWFuSW5zdGFuY2UiLCJPYmplY3RFZGl0b3IiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwicHJvcGVydGllc0NvbnRhaW5lciIsImFkZFByb3BlcnR5Q29udHJvbCIsImFkZFByb3BlcnR5SW5wdXQiLCJhZGRQcm9wZXJ0eUJ0biIsInByb3BlcnR5TmFtZUVtcHR5IiwicHJvcGVydHlFeGlzdCIsImNyZWF0ZUNoaWxkIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwicmVmcmVzaFByb3BlcnRpZXNTbG90IiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImNoZWNib3hDb250cm9sIiwiY2hlY2tib3giLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsInJlZnJlc2hFZGl0b3JzIiwiT2JqZWN0SW5zdGFuY2UiLCJyZWZyZXNoSW5zdGFuY2VzIiwiaXNOb3RSZXF1aXJlZCIsInNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlUHJvcGVydGllcyIsImRlbGV0ZUNoaWxkIiwic3BsaWNlIiwiZ2V0Q2hpbGQiLCJmaW5kIiwiX3RoaXM0Iiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJBcnJheUVkaXRvciIsImJ0bkdyb3VwIiwiYWRkQnRuIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJpdGVtSW5kZXgiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsIkFycmF5SW5zdGFuY2UiLCJyZWZyZXNoQ2hpbGRyZW4iLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJmcm9tSW5kZXgiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwiaXRlbVZhbHVlIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsIlN0cmluZyIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIl9TdHJpbmdFZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwib3B0aW9uVmFsdWVzIiwiU3RyaW5nSW5zdGFuY2UiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJfTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckluc3RhbmNlIiwiTnVsbEVkaXRvciIsIk51bGxJbnN0YW5jZSIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJYTUxIdHRwUmVxdWVzdCIsImRlZmluaXRpb25zIiwiZGVyZWZlcmVuY2UiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWZPd25lciIsInByZXZWYWx1ZSIsInJlZiIsImlzQ2lyY3VsYXJQYXRoIiwiY29uc29sZSIsImxvZyIsImRlZmluZSIsIm91dHB1dCIsInN1YnN0cmluZyIsImhhbGYiLCJjZWlsIiwiZmlyc3RIYWxmIiwic2Vjb25kSGFsZiIsInN0YXJ0c1dpdGgiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzaG93UmVxdWlyZWRPbmx5Iiwicm9vdCIsImFwcGVuZEhpZGRlbklucHV0IiwiaGlkZGVuQ29udHJvbCIsImhpZGRlbklucHV0Iiwib3JpZ2luYWxTY2hlbWEiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJfdGhpczUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7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R0FBRyxFQUFLO1FBQ2pDLE9BQU84YixNQUFJLENBQUM5YixHQUFHLENBQUM7TUFDbEIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFvRyxJQUFBO0FBQUEsRUFwTmdCbUUsYUFBWTtBQXVOaEJuRSxtRkFBSSxFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkpO1xuIiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBmYWtlRm9yRWFjaCA9IChhcnJheSwgY2FsbGJhY2spID0+IHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwYXRoVG9BdHRyaWJ1dGUgPSAocGF0aCkgPT4ge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKCcjJywgJ3Jvb3QnKS5yZXBsYWNlKCcvJywgJy0nKVxufVxuXG5leHBvcnQgY29uc3QgaGFzT3duID0gKG9iaiwga2V5KSA9PiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbmV4cG9ydCBjb25zdCBwcmV0dHkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKVxufVxuXG5leHBvcnQgY29uc3Qgcm91bmQyZGVjaW1hbHMgPSAobnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDBcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRPYmplY3QgPSAob2JqKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwge30pXG59XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IChhLCBiKSA9PiB7XG4gIGlmIChpc09iamVjdChhKSAmJiBpc09iamVjdChiKSkge1xuICAgIGEgPSBzb3J0T2JqZWN0KGEpXG4gICAgYiA9IHNvcnRPYmplY3QoYilcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gIWVxdWFsKGEsIGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3Qgbm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSBpc0ludGVnZXIodmFsdWUpID8gJ2ludGVnZXInIDogJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ3N0cmluZydcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgdHlwZSA9ICdib29sZWFuJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSdcbiAgfSBlbHNlIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudWxsJ1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnb2JqZWN0J1xuICB9XG5cbiAgcmV0dXJuIHR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IG1lcmdlRGVlcCA9ICh0YXJnZXQsIC4uLnNvdXJjZXMpID0+IHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldFxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgICBba2V5XToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWRkaXRpb25hbFByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdHJ1ZVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBhbnlPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYW55T2YpID8gdGhpcy5zY2hlbWEuYW55T2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNvbnN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29uc3RcbiAgfVxuXG4gIGNvbnRhaW5zICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmNvbnRhaW5zKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuY29udGFpbnMpKSA/IHRoaXMuc2NoZW1hLmNvbnRhaW5zIDogdW5kZWZpbmVkXG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmVsc2UpKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMuZm9ybWF0KCkpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIGlmIChpc09iamVjdCh0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4odGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhDb250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhDb250YWlucykgJiYgdGhpcy5zY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Db250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Db250YWlucykgJiYgdGhpcy5zY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVhZE9ubHkgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEucmVhZE9ubHkpID8gdGhpcy5zY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS50aGVuKSkgPyB0aGlzLnNjaGVtYS50aGVuIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLnR5cGUoKSkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBhbGxPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKCkpKSB7XG4gICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5MZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5MZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2NvbnN0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuY29uc3QoKSkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IGRpZmZlcmVudCh2YWx1ZSwgc2NoZW1hLmNvbnN0KCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmNvbnRhaW5zKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluc0VkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuY29udGFpbnMoKSwgc3RhcnRWYWx1ZTogaXRlbSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgY29udGFpbnNFcnJvcnMgPSBjb250YWluc0VkaXRvci52YWxpZGF0ZSgpXG5cbiAgICAgIGlmIChjb250YWluc0Vycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5zRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluc0ludmFsaWQgPSAoY291bnRlciA9PT0gMClcblxuICAgIGlmIChpc1NldChzY2hlbWEubWluQ29udGFpbnMoKSkpIHtcbiAgICAgIGNvbnN0IG1pbkNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyIDwgc2NoZW1hLm1pbkNvbnRhaW5zKCkpXG5cbiAgICAgIGlmIChtaW5Db250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGBDb250YWlucyBtYXRjaCBjb3VudCAke2NvdW50ZXJ9IGlzIGxlc3MgdGhhbiBtaW5pbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1pbkNvbnRhaW5zKCl9YCxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6ICdObyBpdGVtcyBtYXRjaCBjb250YWlucycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWEubWF4Q29udGFpbnMoKSkpIHtcbiAgICAgIGNvbnN0IG1heENvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID4gc2NoZW1hLm1heENvbnRhaW5zKCkpXG5cbiAgICAgIGlmIChtYXhDb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGBDb250YWlucyBtYXRjaCBjb3VudCAke2NvdW50ZXJ9IGV4Y2VlZHMgbWF4aW11bSBjb250YWlucyBjb3VudCBvZiAke3NjaGVtYS5tYXhDb250YWlucygpfWAsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFueU9mKCkpKSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2YoKVxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZW51bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmVudW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYS5lbnVtKCkuc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmVudW0oKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGdyZWF0ZXIgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGZvcm1hdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuZm9ybWF0KCkpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCBtZXNzYWdlXG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXJsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1cmwnXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXVpZCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXVpZCdcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaXNTZXQocmVnZXhwKSAmJiAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfaWYgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5pZigpKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hLnRoZW4oKSkgJiYgbm90U2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS50aGVuKCkpKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB0aGVuRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgZWxzZUVycm9ycyA9IGVsc2VFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4SXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4TGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4UHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtdWx0aXBsZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubXVsdGlwbGVPZigpKSkge1xuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YgfHwgdmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3Qgbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5ub3QoKSkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBvbmVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEub25lT2YoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm4oKSkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcvJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5yZXF1aXJlZCgpKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHR5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB2YWxpZCA9IHNjaGVtYS50eXBlKCkuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgdW5pcXVlSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpKSB7XG4gICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gaXNTZXQoc2NoZW1hLnByb3BlcnRpZXMoKSkgPyBzY2hlbWEucHJvcGVydGllcygpIDoge31cbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBsZXQgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICAgIGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgUHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIGRvZXMgbm90IGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllcy5gLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByb290TmFtZTogcHJvcGVydHksXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0Jvb2xlYW4gfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdFxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gc2NoZW1hLmNsb25lKClcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpID8gc2NoZW1hLm9wdGlvbignbWVzc2FnZScpIDogJ2ludmFsaWQnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZHJhZnQpLmZvckVhY2goKGNvbnN0cmFpbikgPT4ge1xuICAgICAgaWYgKGhhc093bihzY2hlbWFDbG9uZSwgY29uc3RyYWluKSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmRyYWZ0W2NvbnN0cmFpbl1cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuICAgIHRoaXMudWkgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQnUyBzY2hlbWFcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiAhdGhpcy5zY2hlbWEuZW51bSgpLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgICAgIGNvbnN0IHZhbGlkRGVmYXVsdCA9IGRlZmF1bHRFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmICh2YWxpZERlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBkZWFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImNsYXNzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGh0bWwuc3R5bGUuZm9udFNpemUgPSAnaW5oZXJpdCdcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWRlc2NyaXB0aW9uLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG5cbiAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICBodG1sLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLnZhbHVlKVxuICAgIH1cblxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFkZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUtYWxsJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnamVkaS1hY3RpdmUtYnRuJ1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCBpbnB1dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy8nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBpbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH0pXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dHMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWhlYWRpbmcnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBnZXREZXNjcmlwdGlvblNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXREZXNjcmlwdGlvblNsb3QoKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0TWVzc2FnZXNTbG90KClcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi14cycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkFkZChjb25maWcpXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgaW5wdXRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgaW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLycgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQocmFkaW8pXG4gICAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgfSlcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0cyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsVGV4dC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgY29udHJvbC5pbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDaGlsZHJlblNsb3QoKVxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb25TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RGVzY3JpcHRpb25TbG90KClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldE1lc3NhZ2VzU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkFkZChjb25maWcpXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuRGVsZXRlQWxsKGNvbmZpZylcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQgfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCBpbnB1dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLycgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgaW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLycgKyBpbmRleClcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH0pXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dHMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29udHJvbC5jb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGNvbnRyb2wuaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldERlc2NyaXB0aW9uU2xvdCgpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRNZXNzYWdlc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5EZWxldGVBbGwoY29uZmlnKVxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IGlucHV0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBpbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2wpXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW8pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfSlcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0cyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0IH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0JylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgVGhlbWVCb290c3RyYXAzIGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXAzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi4vdGhlbWVzL2JhcmVib25lcydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IG51bGxcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gbnVsbFxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gbnVsbFxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5hcnJheUFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gbnVsbFxuICAgIHRoaXMuZGVzY3JpcHRpb25TbG90ID0gbnVsbFxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEVkaXRvckNvbnRhaW5lcigpXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgfSlcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gdGhpcy50aGVtZS5nZXRDb250cm9sU2xvdCgpXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSB0aGlzLnRoZW1lLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuYXJyYXlBY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSB0aGlzLnRoZW1lLmdldENoaWxkcmVuU2xvdCgpXG4gICAgdGhpcy5kZXNjcmlwdGlvblNsb3QgPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uU2xvdCgpXG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICBidWlsZCAoKSB7fVxuXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UudmFsaWRhdGUoKVxuXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soZXJyb3IubWVzc2FnZSlcbiAgICAgIHRoaXMubWVzc2FnZXNTbG90LmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmxlZ2VuZCA9IHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiAnT3B0aW9ucydcbiAgICB9KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgLy8gc3dpdGNoZXIgYnV0dG9uc1xuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zID0gW11cbiAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgdGhpcy5zd2l0Y2hlci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyBidXR0b25cbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgdmFsdWU6IGluZGV4XG4gICAgICB9KVxuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGJ1dHRvbi52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMucHVzaChidXR0b24pXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5sZWdlbmQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0Qm9keSlcbiAgICB0aGlzLmxlZ2VuZC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5maWVsZHNldEJvZHkucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udGFpbmVyKVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcbmltcG9ydCB7XG4gIGlzU2V0LFxuICBtZXJnZURlZXAsXG4gIGlzQXJyYXksXG4gIGRpZmZlcmVudCxcbiAgaXNPYmplY3QsXG4gIG5vdFNldFxufSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTXVsdGlwbGVJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTXVsdGlwbGVFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQodGhpcy5zY2hlbWEub25lT2YoKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZikgJiYgc2NoZW1hLm9wdGlvbnM/Lm1lcmdlQWxsT2YpIHtcbiAgICAgICAgICBsZXQgbWVyZ2VkID0ge31cblxuICAgICAgICAgIHNjaGVtYS5hbGxPZi5mb3JFYWNoKChhbGxPZlNjaGVtYSkgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VEZWVwKG1lcmdlZCwgYWxsT2ZTY2hlbWEpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHNjaGVtYSA9IG1lcmdlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KGNsb25lU2NoZW1hLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IGNsb25lU2NoZW1hLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS5vcHRpb25zPy5zd2l0Y2hlclRpdGxlIHx8ICdPcHRpb24tJyArIChpbmRleCArIDEpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlKCkuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ0FycmF5JywgJ09iamVjdCcsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEluc3RhbmNlc1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgIGNvbnN0IHNldFZhbHVlID0gaXNPYmplY3Qoc2NoZW1hQ2xvbmUpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZXNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKDAsIGZhbHNlLCBzZXRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSwgc2V0VmFsdWUgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMuaW5kZXhdXG5cbiAgICBpZiAoc2V0VmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgICB9XG4gIH1cblxuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBmaXR0ZXN0SW5kZXhcbiAgICBsZXQgY2hhbXBpb25FcnJvcnNcblxuICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5pbnN0YW5jZXMpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlRXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZVxuXG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGluc3RhbmNlIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gaW5zdGFuY2UgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIHZhbHVlKSkge1xuICAgICAgY29uc3QgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRGaXR0ZXN0SW5kZXgodmFsdWUpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleClcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gY29udHJvbC5pbnB1dHNcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLmlucHV0ID0gY29udHJvbC5pbnB1dFxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7XG4gIGVxdWFsLFxuICBoYXNPd24sXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgcGF0aFRvQXR0cmlidXRlXG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuZmllbGRzZXRCb2R5ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLnByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKVxuICAgIH0pXG5cbiAgICB0aGlzLnByb3BlcnRpZXNDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcblxuICAgIHRoaXMuYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQgPSB0aGlzLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNUb2dnbGUpXG4gICAgICB0aGlzLnByb3BlcnRpZXNTbG90LmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUNvbnRyb2wuY29udHJvbClcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnByb3BlcnRpZXNDb250YWluZXIubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gY2hpbGQucGF0aCArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgIGNvbnN0IGNoZWNib3hDb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBsYWJlbDogaXNTZXQoY2hpbGQuc2NoZW1hLnRpdGxlKCkpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBzck9ubHk6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVjYm94Q29udHJvbC5pbnB1dFxuXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBoYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSBpc1JlcXVpcmVkIHx8IGlzRGVwZW5kZW50UmVxdWlyZWQgfHwgZGlzYWJsZWRcblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZHNcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNib3hDb250cm9sLmNvbnRyb2wpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0LCBoYXNPd24gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5cbmNsYXNzIE9iamVjdEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBPYmplY3RFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGlzU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQgPSB0aGlzLmplZGkub3B0aW9ucy5kZWFjdGl2YXRlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2RlYWN0aXZhdGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChpc05vdFJlcXVpcmVkICYmIHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQpIHtcbiAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGQuZ2V0S2V5KCldXG5cbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHZhbHVlIGlmIHRoZSBvbGQgdmFsdWUgYW5kIHRoZSBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoZGlmZmVyZW50KG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGlsZC5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY2hpbGQgaW5zdGFuY2UgZm9yIHRoZSBuZXcgdmFsdWUgZW50cnkgaGF2aW5nIHRoZSB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoaW5pdGlhbFZhbHVlKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRlZmF1bHQ6IGluaXRpYWxWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEluc3RhbmNlXG4iLCIvKiBnbG9iYWwgY29uZmlybSAqL1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuZmllbGRzZXRCb2R5ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmxlZ2VuZCA9IHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5sZWdlbmQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0Qm9keSlcbiAgICB0aGlzLmxlZ2VuZC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMudGhlbWUuZ2V0QXJyYXlCdG5BZGQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QXJyYXlCdG5EZWxldGVBbGwoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgY2hpbGQudWkuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuYXJyYXlBY3Rpb25zU2xvdClcblxuICAgICAgd2hpbGUgKGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90LnJlbW92ZUNoaWxkKGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAvLyBkZWxldGVcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgfVxuXG4gICAgICBjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBnZXRUeXBlLCBpc1NldCwgY2xvbmUsIGlzQXJyYXksIG5vdFNldCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5pdGVtcygpKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7fVxuXG4gICAgaWYgKG5vdFNldChzY2hlbWEudHlwZSkpIHtcbiAgICAgIHNjaGVtYS50eXBlID0gaXNTZXQodmFsdWUpID8gZ2V0VHlwZSh2YWx1ZSkgOiAnYW55J1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG4gICAgbGV0IGNvbnRyb2xcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWFDb250cm9sKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJylcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2NvbG9yJykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gY29udHJvbC5pbnB1dHNcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvblNsb3QpXG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLmlucHV0ID0gY29udHJvbC5pbnB1dFxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IGNvbnRyb2wuaW5wdXRzXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TbG90LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLmlucHV0ID0gY29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ2JhcmVib25lcycsXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcbiAgICB0aGlzLnJlZlBhcnNlciA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlcikge1xuICAgICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKHtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHRoaXMub3B0aW9ucy5YTUxIdHRwUmVxdWVzdFxuICAgICAgfSlcblxuICAgICAgdGhpcy5vcHRpb25zLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIGNvbnN0IGhpZGRlbkNvbnRyb2wgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSBoaWRkZW5Db250cm9sLmlucHV0XG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIC8vIGNpcmN1bGFyICRyZWYgYXJlIG5vdCBpbml0aWFsbHkgZGVyZWZlcmVuY2VkIGFuZCBtdXN0IGJlIGRlZmluZWQgb24gY3JlYXRpb25cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlciAmJiBoYXNPd24oY29uZmlnLnNjaGVtYSwgJyRyZWYnKSkge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlZmluZShjb25maWcuc2NoZW1hWyckcmVmJ10pXG4gICAgfVxuXG4gICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEFycmF5SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ251bGwnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVsbEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoY29uZmlnLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLm9uZU9mKCkpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCBub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICBpZiAobm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSAmJiBpc1NldChjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKG9yaWdpbmFsU2NoZW1hKVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoaW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdTIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==