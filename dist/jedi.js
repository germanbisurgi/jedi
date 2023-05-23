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
    key: "dependentSchemas",
    value: function dependentSchemas() {
      return utils_isObject(this.schema.dependentSchemas) ? this.schema.dependentSchemas : undefined;
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
// CONCATENATED MODULE: ./src/validation/constrains/dependentSchemas.js



var dependentSchemas_dependentSchemas = function dependentSchemas(validator, value, schema, key, path) {
  var errors = [];
  if (utils_isObject(value) && isSet(schema.dependentSchemas())) {
    Object.keys(schema.dependentSchemas()).forEach(function (key) {
      if (isSet(value[key])) {
        var dependentSchema = schema.dependentSchemas()[key];
        var tmpEditor = new jedi({
          schema: dependentSchema,
          startValue: value,
          refParser: false
        });
        var tmpErrors = tmpEditor.validate();
        tmpEditor.destroy();
        errors = [].concat(toConsumableArray_default()(errors), toConsumableArray_default()(tmpErrors));
      }
    });
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
  dependentSchemas: dependentSchemas_dependentSchemas,
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
      var container = document.createElement('div');
      var input = document.createElement('textarea');
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
        input.setAttribute('aria-describedby', descriptionId);
      }
      container.appendChild(label);
      container.appendChild(input);
      container.appendChild(description);
      label.appendChild(labelText);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var container = document.createElement('div');
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
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
        input.setAttribute('aria-describedby', descriptionId);
      }
      container.appendChild(label);
      container.appendChild(input);
      container.appendChild(description);
      label.appendChild(labelText);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var container = document.createElement('div');
      var legend = document.createElement('label');
      legend.textContent = config.label;
      if (config.srOnly) {
        legend.classList.add('sr-only');
      }
      container.appendChild(legend);
      var radioControls = [];
      var radios = [];
      var labels = [];
      var labelTexts = [];
      config.values.forEach(function (value, index) {
        var radioControl = document.createElement('div');
        radioControls.push(radioControl);
        var radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('id', config.id + '-' + index);
        radio.setAttribute('value', value);
        radios.push(radio);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '-' + index);
        var labelText = document.createElement('span');
        labelTexts.push(labelText);
        if (config.titles && config.titles[index]) {
          labelText.textContent = config.titles[index];
        }
        labels.push(label);
      });
      radioControls.forEach(function (radioControl, index) {
        container.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
      }
      container.appendChild(description);
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var container = document.createElement('div');
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
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
        input.setAttribute('aria-describedby', descriptionId);
      }
      container.appendChild(input);
      container.appendChild(label);
      label.appendChild(labelText);
      container.appendChild(description);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var container = document.createElement('div');
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
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
        input.setAttribute('aria-describedby', descriptionId);
      }
      container.appendChild(label);
      container.appendChild(input);
      label.appendChild(labelText);
      container.appendChild(description);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        container = _get$call.container,
        input = _get$call.input,
        label = _get$call.label,
        labelText = _get$call.labelText,
        description = _get$call.description;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var _get$call2 = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getInputControl", this).call(this, config),
        container = _get$call2.container,
        input = _get$call2.input,
        label = _get$call2.label,
        labelText = _get$call2.labelText,
        description = _get$call2.description;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var _get$call3 = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getRadiosControl", this).call(this, config),
        container = _get$call3.container,
        legend = _get$call3.legend,
        radios = _get$call3.radios,
        labels = _get$call3.labels,
        labelTexts = _get$call3.labelTexts,
        radioControls = _get$call3.radioControls,
        description = _get$call3.description;
      container.classList.add('form-group');
      radioControls.forEach(function (radioControl, index) {
        radioControl.classList.add('radio');
        container.appendChild(radioControls[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(radios[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      container.appendChild(description);
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var _get$call4 = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getCheckboxControl", this).call(this, config),
        container = _get$call4.container,
        input = _get$call4.input,
        label = _get$call4.label,
        labelText = _get$call4.labelText,
        description = _get$call4.description;
      container.classList.add('checkbox');
      container.classList.add('form-group');
      container.appendChild(label);
      label.appendChild(input);
      label.appendChild(labelText);
      container.appendChild(description);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var _get$call5 = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getSelectControl", this).call(this, config),
        container = _get$call5.container,
        input = _get$call5.input,
        label = _get$call5.label,
        labelText = _get$call5.labelText,
        description = _get$call5.description;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var _get$call6 = get_default()(getPrototypeOf_default()(ThemeBootstrap3.prototype), "getSwitcher", this).call(this, config),
        container = _get$call6.container,
        input = _get$call6.input,
        label = _get$call6.label,
        labelText = _get$call6.labelText,
        description = _get$call6.description;
      container.classList.remove('form-group');
      input.classList.remove('form-control');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        container = _get$call.container,
        input = _get$call.input,
        label = _get$call.label,
        labelText = _get$call.labelText,
        description = _get$call.description;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var _get$call2 = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getInputControl", this).call(this, config),
        container = _get$call2.container,
        input = _get$call2.input,
        label = _get$call2.label,
        labelText = _get$call2.labelText,
        description = _get$call2.description;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var _get$call3 = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getRadiosControl", this).call(this, config),
        container = _get$call3.container,
        legend = _get$call3.legend,
        radios = _get$call3.radios,
        labels = _get$call3.labels,
        labelTexts = _get$call3.labelTexts,
        radioControls = _get$call3.radioControls,
        description = _get$call3.description;
      container.classList.add('form-group');
      radioControls.forEach(function (radioControl, index) {
        radioControl.classList.add('form-check');
        radios[index].classList.add('form-check-input');
        labels[index].classList.add('form-check-label');
        container.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      container.appendChild(description);
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var _get$call4 = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getCheckboxControl", this).call(this, config),
        container = _get$call4.container,
        input = _get$call4.input,
        label = _get$call4.label,
        labelText = _get$call4.labelText,
        description = _get$call4.description;
      container.classList.add('form-group');
      container.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      container.appendChild(input);
      container.appendChild(label);
      container.appendChild(description);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var _get$call5 = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getSelectControl", this).call(this, config),
        container = _get$call5.container,
        input = _get$call5.input,
        label = _get$call5.label,
        labelText = _get$call5.labelText,
        description = _get$call5.description;
      container.classList.add('form-group');
      input.classList.add('form-control');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var _get$call6 = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getSwitcher", this).call(this, config),
        container = _get$call6.container,
        input = _get$call6.input,
        label = _get$call6.label,
        labelText = _get$call6.labelText,
        description = _get$call6.description;
      container.classList.remove('form-group');
      input.classList.remove('form-control');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        container = _get$call.container,
        input = _get$call.input,
        label = _get$call.label,
        labelText = _get$call.labelText,
        description = _get$call.description;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var _get$call2 = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getInputControl", this).call(this, config),
        container = _get$call2.container,
        input = _get$call2.input,
        label = _get$call2.label,
        labelText = _get$call2.labelText,
        description = _get$call2.description;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var _get$call3 = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getRadiosControl", this).call(this, config),
        container = _get$call3.container,
        legend = _get$call3.legend,
        radios = _get$call3.radios,
        labels = _get$call3.labels,
        labelTexts = _get$call3.labelTexts,
        radioControls = _get$call3.radioControls,
        description = _get$call3.description;
      container.classList.add('form-group');
      radioControls.forEach(function (radioControl, index) {
        radioControl.classList.add('form-check');
        radios[index].classList.add('form-check-input');
        labels[index].classList.add('form-check-label');
        container.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      container.appendChild(description);
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var _get$call4 = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getCheckboxControl", this).call(this, config),
        container = _get$call4.container,
        input = _get$call4.input,
        label = _get$call4.label,
        labelText = _get$call4.labelText,
        description = _get$call4.description;
      container.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      container.appendChild(input);
      container.appendChild(label);
      container.appendChild(description);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var _get$call5 = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getSelectControl", this).call(this, config),
        container = _get$call5.container,
        input = _get$call5.input,
        label = _get$call5.label,
        labelText = _get$call5.labelText,
        description = _get$call5.description;
      input.classList.add('form-select');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
      };
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var _get$call6 = get_default()(getPrototypeOf_default()(ThemeBootstrap5.prototype), "getSwitcher", this).call(this, config),
        container = _get$call6.container,
        input = _get$call6.input,
        label = _get$call6.label,
        labelText = _get$call6.labelText,
        description = _get$call6.description;
      input.classList.remove('form-select');
      label.classList.add('visually-hidden');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
      this.switcher.container.classList.add('jedi-switcher');
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
      this.actionsSlot.appendChild(this.switcher.container);
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
      this.control = this.theme.getCheckboxControl({
        id: pathToAttribute(this.instance.path),
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });

      // events
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.checked);
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return Boolean(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.control.input.checked = this.instance.getValue();
      if (this.disabled) {
        this.control.input.setAttribute('disabled', 'disabled');
      } else {
        this.control.input.removeAttribute('disabled');
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
      this.control = this.theme.getRadiosControl({
        values: ['false', 'true'],
        titles: this.instance.schema.option('enumTitles') || ['false', 'true'],
        id: pathToAttribute(this.instance.path),
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });

      // events
      this.control.radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var radioValue = radio.value === 'true';
          _this.instance.setValue(radioValue);
        });
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;
      this.control.radios.forEach(function (radio) {
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
      this.control = this.theme.getSelectControl({
        values: ['false', 'true'],
        titles: this.instance.schema.option('enumTitles') || ['false', 'true'],
        id: pathToAttribute(this.instance.path),
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });

      // events
      this.control.input.addEventListener('change', function () {
        var value = _this.control.input.value === 'true';
        _this.instance.setValue(value);
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.control.input.value = this.instance.getValue() === true ? 'true' : 'false';
      if (this.disabled) {
        this.control.input.setAttribute('disabled', 'disabled');
      } else {
        this.control.input.removeAttribute('disabled');
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
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });
      if (isSet(this.instance.schema.description())) {
        this.fieldsetBody.appendChild(this.description);
      }
      this.fieldsetBody.appendChild(this.propertiesSlot);
      this.fieldsetBody.appendChild(this.messagesSlot);
      this.fieldsetBody.appendChild(this.childrenSlot);
      if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
        this.actionsSlot.appendChild(this.propertiesToggle);
        this.propertiesSlot.appendChild(this.propertiesContainer);
        this.propertiesSlot.appendChild(this.addPropertyControl.container);
        this.addPropertyControl.container.appendChild(this.addPropertyBtn);
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
          var id = pathToAttribute(child.path) + '-activator';
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
          _this2.propertiesContainer.appendChild(checboxControl.container);
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
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });
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
      if (this.instance.schema.formatIs('textarea')) {
        this.control = this.theme.getTextareaControl({
          id: pathToAttribute(this.instance.path),
          label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
          srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
          description: this.instance.schema.description()
        });
      } else {
        this.control = this.theme.getInputControl({
          type: inputTypes.includes(this.instance.schema.format()) ? this.instance.schema.format() : 'text',
          id: pathToAttribute(this.instance.path),
          label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
          srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
          description: this.instance.schema.description()
        });
      }

      // events
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.value);
      });

      // fix color picker bug
      if (this.instance.schema.formatIs('color') && this.instance.value.length === 0) {
        this.instance.setValue('#000000', false);
      }

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return String(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.control.input.value = this.instance.getValue();
      if (this.disabled) {
        this.control.input.setAttribute('disabled', 'disabled');
      } else {
        this.control.input.removeAttribute('disabled');
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
      this.control = this.theme.getRadiosControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.instance.schema["enum"](),
        id: pathToAttribute(this.instance.path),
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });

      // events
      this.control.radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          _this.instance.setValue(radio.value);
        });
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;
      this.control.radios.forEach(function (radio) {
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
      this.control = this.theme.getSelectControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.optionValues,
        id: pathToAttribute(this.instance.path),
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });

      // events
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.value);
      });
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
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
      this.control = this.theme.getInputControl({
        type: 'number',
        id: pathToAttribute(this.instance.path),
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
        description: this.instance.schema.description()
      });

      // events
      this.control.input.addEventListener('change', function () {
        var value = _this.sanitize(_this.control.input.value);
        _this.instance.setValue(value);
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
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
        this.control.input.value = this.instance.getValue();
      }
      if (this.disabled) {
        this.control.input.setAttribute('disabled', 'disabled');
      } else {
        this.control.input.removeAttribute('disabled');
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
      this.control = this.theme.getRadiosControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.instance.schema["enum"](),
        id: pathToAttribute(this.instance.path),
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });

      // events
      this.control.radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var value = _this.sanitize(radio.value);
          _this.instance.setValue(value);
        });
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;
      this.control.radios.forEach(function (radio) {
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
      this.control = this.theme.getSelectControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.optionValues,
        id: pathToAttribute(this.instance.path),
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);

      // events
      this.control.input.addEventListener('change', function () {
        var value = _this.sanitize(_this.control.input.value);
        _this.instance.setValue(value);
      });
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
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXAzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmFrZUZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwiaW5kZXgiLCJsZW5ndGgiLCJwYXRoVG9BdHRyaWJ1dGUiLCJwYXRoIiwicmVwbGFjZUFsbCIsImhhc093biIsIm9iaiIsImtleSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInByZXR0eSIsInZhbHVlIiwicm91bmQyZGVjaW1hbHMiLCJudW1iZXIiLCJNYXRoIiwicm91bmQiLCJzb3J0T2JqZWN0Iiwia2V5cyIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJlcXVhbCIsImEiLCJiIiwiaXNPYmplY3QiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJpc1NldCIsIm5vdFNldCIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsIl90eXBlb2YiLCJnZXRUeXBlIiwidHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsIl9sZW4iLCJhcmd1bWVudHMiLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiZm9yRWFjaCIsImFzc2lnbiIsIl9kZWZpbmVQcm9wZXJ0eSIsImFwcGx5IiwiY29uY2F0IiwiU2NoZW1hIiwic2NoZW1hIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsInVuZGVmaW5lZCIsImFueU9mIiwiX2NvbnN0IiwiY29udGFpbnMiLCJfZGVmYXVsdCIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVwZW5kZW50U2NoZW1hcyIsImRlc2NyaXB0aW9uIiwiX2Vsc2UiLCJfZW51bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiZm9ybWF0SXMiLCJfaWYiLCJpdGVtcyIsIm1heGltdW0iLCJtYXhDb250YWlucyIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5Db250YWlucyIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJTZXQiLCJ0aGVuIiwidGl0bGUiLCJ0eXBlSXMiLCJ0eXBlSXNOdW1lcmljIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsImRlc3Ryb3kiLCJfdGhpcyIsInZhbGlkYXRvciIsImVycm9ycyIsInN1YlNjaGVtYUVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwicm9vdE5hbWUiLCJyZWZQYXJzZXIiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZGF0ZSIsInJlcGxhY2UiLCJpbnZhbGlkIiwicHVzaCIsIm1lc3NhZ2UiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImNvdW50ZXIiLCJpdGVtIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyIiwicHJvcGVydHkiLCJqb2luIiwiZGVwZW5kZW50U2NoZW1hIiwidG1wRWRpdG9yIiwidG1wRXJyb3JzIiwic29tZSIsImUiLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0IiwiaWZFZGl0b3IiLCJpZkVycm9ycyIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJwcm9wZXJ0aWVzQ291bnQiLCJjb21wdXRlZE1pbmltdW0iLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwibm90RXJyb3JzIiwib25lT2ZFZGl0b3IiLCJvbmVPZkVycm9ycyIsInByb3BlcnR5TmFtZSIsImVkaXRvciIsImVkaXRvckVycm9ycyIsIm1hcCIsImVycm9yIiwidHlwZXMiLCJzdHJpbmciLCJpbnRlZ2VyIiwiYm9vbGVhbiIsIm9iamVjdCIsIl9udWxsIiwiY29tcHV0ZWRNYXhpbXVtIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsImkiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInNjaGVtYUNsb25lIiwiY29uc3RyYWluIiwidmFsaWRhdG9yRXJyb3JzIiwiRXZlbnRFbWl0dGVyIiwibGlzdGVuZXJzIiwib24iLCJuYW1lIiwiZW1pdCIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJfRXZlbnRFbWl0dGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiY29uZmlnIiwiamVkaSIsImlzQWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJfdGhpczIiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInByZXBhcmUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInNldFVJIiwib25DaGlsZENoYW5nZSIsImdldEtleSIsInNwbGl0IiwicGF0aFNlcGFyYXRvciIsInBvcCIsInVucmVnaXN0ZXIiLCJkZWZhdWx0RXJyb3JzIiwidmFsaWREZWZhdWx0Iiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJfdGhpczMiLCJjaGlsZCIsIlRoZW1lQmFyZWJvbmVzIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwiaHRtbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImdldEZpZWxkc2V0IiwiZ2V0RmllbGRzZXRCb2R5IiwiZ2V0TGVnZW5kIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImZvbnRTaXplIiwic3JPbmx5IiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldEFycmF5QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRDb250cm9sU2xvdCIsImdldFByb3BlcnRpZXNUb2dnbGUiLCJnZXRCdXR0b24iLCJnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImdldEJ0bkdyb3VwIiwic2V0QXR0cmlidXRlIiwiaWQiLCJnZXRBcnJheUJ0bkFkZCIsImdldEFycmF5QnRuRGVsZXRlQWxsIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJnZXREZXNjcmlwdGlvbiIsImdldFRleHRhcmVhQ29udHJvbCIsImNvbnRhaW5lciIsImlucHV0IiwibGFiZWwiLCJsYWJlbFRleHQiLCJkZXNjcmlwdGlvbklkIiwiYXBwZW5kQ2hpbGQiLCJnZXRJbnB1dENvbnRyb2wiLCJnZXRSYWRpb3NDb250cm9sIiwibGVnZW5kIiwicmFkaW9Db250cm9scyIsInJhZGlvcyIsImxhYmVscyIsImxhYmVsVGV4dHMiLCJ2YWx1ZXMiLCJyYWRpb0NvbnRyb2wiLCJyYWRpbyIsInRpdGxlcyIsImdldENoZWNrYm94Q29udHJvbCIsImdldFNlbGVjdENvbnRyb2wiLCJnZXRTd2l0Y2hlciIsImdldEFsZXJ0IiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwiVGhlbWVCb290c3RyYXAzIiwiX1RoZW1lQmFyZWJvbmVzIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsIl9nZXQkY2FsbCIsIl9nZXQkY2FsbDIiLCJfZ2V0JGNhbGwzIiwiX2dldCRjYWxsNCIsIl9nZXQkY2FsbDUiLCJfZ2V0JGNhbGw2IiwicmVtb3ZlIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiY29udHJvbFNsb3QiLCJFZGl0b3IiLCJpbnN0YW5jZSIsInRoZW1lIiwicHJvcGVydGllc1Nsb3QiLCJtZXNzYWdlc1Nsb3QiLCJhY3Rpb25zU2xvdCIsImFycmF5QWN0aW9uc1Nsb3QiLCJjaGlsZHJlblNsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsImlubmVySFRNTCIsImludmFsaWRGZWVkYmFjayIsImRpc2FibGUiLCJlbmFibGUiLCJzYW5pdGl6ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk11bHRpcGxlRWRpdG9yIiwiX0VkaXRvciIsImZpZWxkc2V0IiwiZmllbGRzZXRCb2R5Iiwic3dpdGNoZXIiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJOdW1iZXIiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsInJlbW92ZUF0dHJpYnV0ZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJfSW5zdGFuY2UiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwiX3NjaGVtYSRvcHRpb25zIiwiX3NjaGVtYSRvcHRpb25zMiIsIl9vYmplY3RTcHJlYWQiLCJtZXJnZUFsbE9mIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwiY3JlYXRlSW5zdGFuY2UiLCJuZXdJbmRleCIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImluc3RhbmNlRXJyb3JzIiwiZXJyIiwiZiIsIkJvb2xlYW5FZGl0b3IiLCJjb250cm9sIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwiX0Jvb2xlYW5FZGl0b3IiLCJyYWRpb1ZhbHVlIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJCb29sZWFuSW5zdGFuY2UiLCJPYmplY3RFZGl0b3IiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwicHJvcGVydGllc0NvbnRhaW5lciIsImFkZFByb3BlcnR5Q29udHJvbCIsImFkZFByb3BlcnR5SW5wdXQiLCJhZGRQcm9wZXJ0eUJ0biIsInByb3BlcnR5TmFtZUVtcHR5IiwicHJvcGVydHlFeGlzdCIsImNyZWF0ZUNoaWxkIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwicmVmcmVzaFByb3BlcnRpZXNTbG90IiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImNoZWNib3hDb250cm9sIiwiY2hlY2tib3giLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsInJlZnJlc2hFZGl0b3JzIiwiT2JqZWN0SW5zdGFuY2UiLCJyZWZyZXNoSW5zdGFuY2VzIiwiaXNOb3RSZXF1aXJlZCIsInNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlUHJvcGVydGllcyIsImRlbGV0ZUNoaWxkIiwic3BsaWNlIiwiZ2V0Q2hpbGQiLCJmaW5kIiwiX3RoaXM0Iiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJBcnJheUVkaXRvciIsImJ0bkdyb3VwIiwiYWRkQnRuIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJpdGVtSW5kZXgiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsIkFycmF5SW5zdGFuY2UiLCJyZWZyZXNoQ2hpbGRyZW4iLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJmcm9tSW5kZXgiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwiaXRlbVZhbHVlIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsIlN0cmluZyIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIl9TdHJpbmdFZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwib3B0aW9uVmFsdWVzIiwiU3RyaW5nSW5zdGFuY2UiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJfTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckluc3RhbmNlIiwiTnVsbEVkaXRvciIsIk51bGxJbnN0YW5jZSIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJYTUxIdHRwUmVxdWVzdCIsImRlZmluaXRpb25zIiwiZGVyZWZlcmVuY2UiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWZPd25lciIsInByZXZWYWx1ZSIsInJlZiIsImlzQ2lyY3VsYXJQYXRoIiwiY29uc29sZSIsImxvZyIsImRlZmluZSIsIm91dHB1dCIsInN1YnN0cmluZyIsImhhbGYiLCJjZWlsIiwiZmlyc3RIYWxmIiwic2Vjb25kSGFsZiIsInN0YXJ0c1dpdGgiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzaG93UmVxdWlyZWRPbmx5Iiwicm9vdCIsImFwcGVuZEhpZGRlbklucHV0IiwiaGlkZGVuQ29udHJvbCIsImhpZGRlbklucHV0Iiwib3JpZ2luYWxTY2hlbWEiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJfdGhpczUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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TUFDL0I7TUFFQXJTLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOEIsT0FBTyxDQUFDLFVBQUMxQyxHQUFHLEVBQUs7UUFDakMsT0FBTzBjLE1BQUksQ0FBQzFjLEdBQUcsQ0FBQztNQUNsQixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQXFHLElBQUE7QUFBQSxFQXBOZ0J1RSxhQUFZO0FBdU5oQnZFLG1GQUFJLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IGZha2VGb3JFYWNoID0gKGFycmF5LCBjYWxsYmFjaykgPT4ge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY2FsbGJhY2soYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBhdGhUb0F0dHJpYnV0ZSA9IChwYXRoKSA9PiB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2VBbGwoJyMnLCAncm9vdCcpLnJlcGxhY2VBbGwoJy8nLCAnLScpXG59XG5cbmV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhZGRpdGlvbmFsUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB0cnVlXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdFxuICB9XG5cbiAgY29udGFpbnMgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5jb250YWlucykpID8gdGhpcy5zY2hlbWEuY29udGFpbnMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVwZW5kZW50U2NoZW1hcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuZWxzZSkpID8gdGhpcy5zY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy5mb3JtYXQoKSkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heENvbnRhaW5zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heENvbnRhaW5zKSAmJiB0aGlzLnNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4Q29udGFpbnNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkNvbnRhaW5zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zKSAmJiB0aGlzLnNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluQ29udGFpbnNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5ub3QpKSA/IHRoaXMuc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogdW5kZWZpbmVkXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGFsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYWxsT2YoKSkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5LCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkxlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkxlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5jb25zdCgpKSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWEuY29uc3QoKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuY29udGFpbnMoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5jb250YWlucygpLCBzdGFydFZhbHVlOiBpdGVtLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBjb250YWluc0Vycm9ycyA9IGNvbnRhaW5zRWRpdG9yLnZhbGlkYXRlKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5taW5Db250YWlucygpKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBzY2hlbWEubWluQ29udGFpbnMoKSlcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gaXMgbGVzcyB0aGFuIG1pbmltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWluQ29udGFpbnMoKX1gLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogJ05vIGl0ZW1zIG1hdGNoIGNvbnRhaW5zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5tYXhDb250YWlucygpKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBzY2hlbWEubWF4Q29udGFpbnMoKSlcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gZXhjZWVkcyBtYXhpbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1heENvbnRhaW5zKCl9YCxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBhbnlPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYW55T2YoKSkpIHtcbiAgICBjb25zdCBhbnlPZiA9IHNjaGVtYS5hbnlPZigpXG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgZGVwZW5kZW50U2NoZW1hcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKCkpKSB7XG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50U2NoZW1hID0gc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKVtrZXldXG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBkZXBlbmRlbnRTY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci52YWxpZGF0ZSgpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udG1wRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+PSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZXhjbHVzaXZlTWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDw9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgbWVzc2FnZVxuICAgIGxldCByZWdleHBcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3VybCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXJsJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3V1aWQnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHV1aWQnXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuaWYoKSkpIHtcbiAgICBpZiAobm90U2V0KHNjaGVtYS50aGVuKCkpICYmIG5vdFNldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWEudGhlbigpKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heEl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heExlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heExlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5pbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5JdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluSXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbXVsdGlwbGVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm11bHRpcGxlT2YoKSkpIHtcbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG5vdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEubm90KCkpKSB7XG4gICAgY29uc3Qgbm90RXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEubm90KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3Qgb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHBhdHRlcm4gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuKCkpKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLycgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucmVxdWlyZWQoKSkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCB0eXBlID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKGlzU2V0KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBpZiAoaXNBcnJheShzY2hlbWEudHlwZSgpKSkge1xuICAgICAgdmFsaWQgPSBzY2hlbWEudHlwZSgpLnNvbWUoKHR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS51bmlxdWVJdGVtcygpKSkge1xuICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYS5wcm9wZXJ0aWVzKCkpID8gc2NoZW1hLnByb3BlcnRpZXMoKSA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogYFByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSBkb2VzIG5vdCBhbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXMuYCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcm9vdE5hbWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBzY2hlbWEuY2xvbmUoKVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykgPyBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykgOiAnaW52YWxpZCcsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIC8vIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAvLyAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICdpbmhlcml0J1xuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgaHRtbC52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy52YWx1ZSlcbiAgICB9XG5cbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlLWFsbCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2plZGktYWN0aXZlLWJ0bidcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgcmFkaW9Db250cm9scyA9IFtdXG4gICAgY29uc3QgcmFkaW9zID0gW11cbiAgICBjb25zdCBsYWJlbHMgPSBbXVxuICAgIGNvbnN0IGxhYmVsVGV4dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2xzLnB1c2gocmFkaW9Db250cm9sKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpb3MucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuXG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGxhYmVsVGV4dHMucHVzaChsYWJlbFRleHQpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGxhYmVscy5wdXNoKGxhYmVsKVxuICAgIH0pXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGVnZW5kLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDMgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEVkaXRvckNvbnRhaW5lcigpXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDaGlsZHJlblNsb3QoKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0TWVzc2FnZXNTbG90KClcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi14cycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkFkZChjb25maWcpXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgbGVnZW5kLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGVnZW5kLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXAzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldE1lc3NhZ2VzU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkFkZChjb25maWcpXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuRGVsZXRlQWxsKGNvbmZpZylcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEVkaXRvckNvbnRhaW5lcigpXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFjdGlvbnNTbG90KClcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRNZXNzYWdlc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5EZWxldGVBbGwoY29uZmlnKVxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0JylcbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4uL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMucHJvcGVydGllc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IG51bGxcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuYXJyYXlBY3Rpb25zU2xvdCA9IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IG51bGxcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnYm9vdHN0cmFwMyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXAzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgICB0aGlzLnByb3BlcnRpZXNTbG90ID0gdGhpcy50aGVtZS5nZXRQcm9wZXJ0aWVzU2xvdCh7XG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aClcbiAgICB9KVxuICAgIHRoaXMuY29udHJvbFNsb3QgPSB0aGlzLnRoZW1lLmdldENvbnRyb2xTbG90KClcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5hcnJheUFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ09wdGlvbnMnXG4gICAgfSlcbiAgICB0aGlzLmZpZWxkc2V0Qm9keSA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldFN3aXRjaGVyKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCkgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSArICctc3dpdGNoZXInLFxuICAgICAgc3JPbmx5OiB0cnVlXG4gICAgfSlcblxuICAgIHRoaXMuc3dpdGNoZXIuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyLmNvbnRhaW5lcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5maWVsZHNldEJvZHkucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udGFpbmVyKVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXIuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBpc09iamVjdChzY2hlbWFDbG9uZSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoMCwgZmFsc2UsIHNldFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cblxuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICAgIH1cbiAgfVxuXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh2YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4KVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUluc3RhbmNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7XG4gIGVxdWFsLFxuICBoYXNPd24sXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgcGF0aFRvQXR0cmlidXRlXG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuZmllbGRzZXRCb2R5ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLnByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKVxuICAgIH0pXG5cbiAgICB0aGlzLnByb3BlcnRpZXNDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcblxuICAgIHRoaXMuYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQgPSB0aGlzLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5Q29udHJvbC5jb250YWluZXIpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5Q29udHJvbC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnByb3BlcnRpZXNDb250YWluZXIubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGxhYmVsOiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2JveENvbnRyb2wuY29udGFpbmVyKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnByb3BlcnRpZXNUb2dnbGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BlcnRpZXNUb2dnbGUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBpc1NldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCgpKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IGlzTm90UmVxdWlyZWQgPSAhdGhpcy5pc1JlcXVpcmVkKGtleSlcbiAgICBjb25zdCBzaG91bGRTdGFydERlYWN0aXZhdGVkID0gdGhpcy5qZWRpLm9wdGlvbnMuZGVhY3RpdmF0ZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdkZWFjdGl2YXRlUHJvcGVydGllcycpXG5cbiAgICBpZiAoaXNOb3RSZXF1aXJlZCAmJiBzaG91bGRTdGFydERlYWN0aXZhdGVkKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keSA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMudGhlbWUuZ2V0QXJyYXlCdG5BZGQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QXJyYXlCdG5EZWxldGVBbGwoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgY2hpbGQudWkuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuYXJyYXlBY3Rpb25zU2xvdClcblxuICAgICAgd2hpbGUgKGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90LnJlbW92ZUNoaWxkKGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAvLyBkZWxldGVcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgfVxuXG4gICAgICBjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBnZXRUeXBlLCBpc1NldCwgY2xvbmUsIGlzQXJyYXksIG5vdFNldCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5pdGVtcygpKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7fVxuXG4gICAgaWYgKG5vdFNldChzY2hlbWEudHlwZSkpIHtcbiAgICAgIHNjaGVtYS50eXBlID0gaXNTZXQodmFsdWUpID8gZ2V0VHlwZSh2YWx1ZSkgOiAnYW55J1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHJhZGlvLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVySW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCIvKiBnbG9iYWwgWE1MSHR0cFJlcXVlc3QgKi9cblxuaW1wb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBpc1N0cmluZyxcbiAgbm90U2V0LFxuICBjbG9uZSwgZXF1YWxcbn0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBpZiAobm90U2V0KG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdGlvbnMgPSBvcHRpb25zLml0ZXJhdGlvbnMgfHwgN1xuICAgIHRoaXMuWE1MSHR0cFJlcXVlc3QgPSBvcHRpb25zLlhNTEh0dHBSZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgLy8gcmVnaXN0ZXIgZGVmaW5pdGlvbnMgYXMgbG9uZyBhcyB0aGV5IGFyZSBub3QgcmVmZXJlbmNlc1xuICAgICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICAgIGlmIChhcmdzLmtleSAhPT0gJyRyZWYnKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmluaXRpb25zW2FyZ3MucGF0aF0gPSBhcmdzLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBkZXJlZmVyZW5jZVxuICAgICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICAgIGlmICghaXNPYmplY3QoYXJncy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlZk93bmVyID0gYXJncy5wcmV2VmFsdWVcbiAgICAgICAgICBjb25zdCByZWYgPSBhcmdzLnZhbHVlWyckcmVmJ11cblxuICAgICAgICAgIGlmIChpc1NldChyZWZPd25lcikgJiYgaXNTZXQocmVmKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaXJjdWxhclBhdGgoYXJncy5wYXRoKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2lyY3VsYXInLCBhcmdzLnBhdGgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWZPd25lclthcmdzLmtleV0gPSB0aGlzLmRlZmluZShyZWYpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGlzQ2lyY3VsYXJQYXRoIChwYXRoKSB7XG4gICAgbGV0IG91dHB1dCA9IGZhbHNlXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmluaXRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8vIHJlbW92ZSAjXG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMSlcblxuICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvdXRwdXRcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFsZiA9IE1hdGguY2VpbChwYXRoLmxlbmd0aCAvIDIpXG4gICAgICBjb25zdCBmaXJzdEhhbGYgPSBwYXRoLnNsaWNlKDAsIGhhbGYpXG4gICAgICBjb25zdCBzZWNvbmRIYWxmID0gcGF0aC5zbGljZShoYWxmKVxuXG4gICAgICBpZiAoZXF1YWwoZmlyc3RIYWxmLCBzZWNvbmRIYWxmKSkge1xuICAgICAgICBvdXRwdXQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgLy8gZGVmaW5pdGlvbnNcbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmaW5pdGlvbnNbcmVmXSkpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMuZGVmaW5pdGlvbnNbcmVmXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCByZWYuc3RhcnRzV2l0aCgnaHR0cHMnKSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB0aGlzLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcmVmLCBmYWxzZSkgLy8gYGZhbHNlYCBtYWtlcyB0aGUgcmVxdWVzdCBzeW5jaHJvbm91c1xuICAgICAgcmVxdWVzdC5zZW5kKG51bGwpXG5cbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignY2FuIG5vdCBsb2FkJywgcmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHRyYXZlcnNlIChhcmdzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhcmdzLnZhbHVlXG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLmNhbGxiYWNrXG4gICAgY29uc3QgcGF0aCA9IGlzU2V0KGFyZ3MucGF0aCkgPyBhcmdzLnBhdGggKyAnLycgKyBhcmdzLmtleSA6ICcjJ1xuICAgIGFyZ3MucGF0aCA9IHBhdGhcblxuICAgIGlmIChpc1NldChjYWxsYmFjaykpIHtcbiAgICAgIGNhbGxiYWNrKGFyZ3MpXG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKG5ld1ZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZQYXJzZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3InXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGdldFR5cGUsIGhhc093biwgaXNBcnJheSwgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTXVsdGlwbGVJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgQXJyYXlJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBTdHJpbmdJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IE51bGxJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnYmFyZWJvbmVzJyxcbiAgICAgIHJlZlBhcnNlcjogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJvb3ROYW1lID0gJyMnXG4gICAgdGhpcy5wYXRoU2VwYXJhdG9yID0gJy8nXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodGhpcy5vcHRpb25zLnNjaGVtYSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgY29uc3QgaGlkZGVuQ29udHJvbCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IGhpZGRlbkNvbnRyb2wuaW5wdXRcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZVxuXG4gICAgLy8gY2lyY3VsYXIgJHJlZiBhcmUgbm90IGluaXRpYWxseSBkZXJlZmVyZW5jZWQgYW5kIG11c3QgYmUgZGVmaW5lZCBvbiBjcmVhdGlvblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyICYmIGhhc093bihjb25maWcuc2NoZW1hLCAnJHJlZicpKSB7XG4gICAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVmaW5lKGNvbmZpZy5zY2hlbWFbJyRyZWYnXSlcbiAgICB9XG5cbiAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChjb25maWcuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KGNvbmZpZy5zY2hlbWEub25lT2YoKSkgfHwgY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8IGlzQXJyYXkoY29uZmlnLnNjaGVtYS50eXBlKCkpIHx8IG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIGlmIChub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpICYmIGlzU2V0KGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IGNvbmZpZy5zY2hlbWEuY2xvbmUoKVxuICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShjb25maWcuc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J1MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9