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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXAzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmFrZUZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwiaW5kZXgiLCJsZW5ndGgiLCJwYXRoVG9BdHRyaWJ1dGUiLCJwYXRoIiwicmVwbGFjZUFsbCIsImhhc093biIsIm9iaiIsImtleSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInByZXR0eSIsInZhbHVlIiwicm91bmQyZGVjaW1hbHMiLCJudW1iZXIiLCJNYXRoIiwicm91bmQiLCJzb3J0T2JqZWN0Iiwia2V5cyIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJlcXVhbCIsImEiLCJiIiwiaXNPYmplY3QiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJpc1NldCIsIm5vdFNldCIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsIl90eXBlb2YiLCJnZXRUeXBlIiwidHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsIl9sZW4iLCJhcmd1bWVudHMiLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiZm9yRWFjaCIsImFzc2lnbiIsIl9kZWZpbmVQcm9wZXJ0eSIsImFwcGx5IiwiY29uY2F0IiwiU2NoZW1hIiwic2NoZW1hIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsInVuZGVmaW5lZCIsImFueU9mIiwiX2NvbnN0IiwiY29udGFpbnMiLCJfZGVmYXVsdCIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVwZW5kZW50U2NoZW1hcyIsImRlc2NyaXB0aW9uIiwiX2Vsc2UiLCJfZW51bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiZm9ybWF0SXMiLCJfaWYiLCJpdGVtcyIsIm1heGltdW0iLCJtYXhDb250YWlucyIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5Db250YWlucyIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJTZXQiLCJ0aGVuIiwidGl0bGUiLCJ0eXBlSXMiLCJ0eXBlSXNOdW1lcmljIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsImRlc3Ryb3kiLCJfdGhpcyIsInZhbGlkYXRvciIsImVycm9ycyIsInN1YlNjaGVtYUVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwicm9vdE5hbWUiLCJyZWZQYXJzZXIiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZGF0ZSIsInJlcGxhY2UiLCJpbnZhbGlkIiwicHVzaCIsIm1lc3NhZ2UiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImNvdW50ZXIiLCJpdGVtIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyIiwicHJvcGVydHkiLCJqb2luIiwiZGVwZW5kZW50U2NoZW1hIiwidG1wRWRpdG9yIiwidG1wRXJyb3JzIiwic29tZSIsImUiLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0IiwiaWZFZGl0b3IiLCJpZkVycm9ycyIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJwcm9wZXJ0aWVzQ291bnQiLCJjb21wdXRlZE1pbmltdW0iLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwibm90RXJyb3JzIiwib25lT2ZFZGl0b3IiLCJvbmVPZkVycm9ycyIsInByb3BlcnR5TmFtZSIsImVkaXRvciIsImVkaXRvckVycm9ycyIsIm1hcCIsImVycm9yIiwidHlwZXMiLCJzdHJpbmciLCJpbnRlZ2VyIiwiYm9vbGVhbiIsIm9iamVjdCIsIl9udWxsIiwiY29tcHV0ZWRNYXhpbXVtIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsImkiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInNjaGVtYUNsb25lIiwiY29uc3RyYWluIiwidmFsaWRhdG9yRXJyb3JzIiwiRXZlbnRFbWl0dGVyIiwibGlzdGVuZXJzIiwib24iLCJuYW1lIiwiZW1pdCIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJfRXZlbnRFbWl0dGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiY29uZmlnIiwiamVkaSIsImlzQWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJfdGhpczIiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInByZXBhcmUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInNldFVJIiwib25DaGlsZENoYW5nZSIsImdldEtleSIsInNwbGl0IiwicGF0aFNlcGFyYXRvciIsInBvcCIsInVucmVnaXN0ZXIiLCJkZWZhdWx0RXJyb3JzIiwidmFsaWREZWZhdWx0Iiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJfdGhpczMiLCJjaGlsZCIsIlRoZW1lQmFyZWJvbmVzIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwiaHRtbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImdldEZpZWxkc2V0IiwiZ2V0RmllbGRzZXRCb2R5IiwiZ2V0TGVnZW5kIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImZvbnRTaXplIiwic3JPbmx5IiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldEFycmF5QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRDb250cm9sU2xvdCIsImdldFByb3BlcnRpZXNUb2dnbGUiLCJnZXRCdXR0b24iLCJnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImdldEJ0bkdyb3VwIiwic2V0QXR0cmlidXRlIiwiaWQiLCJnZXRBcnJheUJ0bkFkZCIsImdldEFycmF5QnRuRGVsZXRlQWxsIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJnZXREZXNjcmlwdGlvbiIsImdldFRleHRhcmVhQ29udHJvbCIsImNvbnRyb2wiLCJpbnB1dCIsImxhYmVsIiwibGFiZWxUZXh0IiwiYXBwZW5kQ2hpbGQiLCJnZXRJbnB1dENvbnRyb2wiLCJnZXRSYWRpb3NDb250cm9sIiwibGVnZW5kIiwiaW5wdXRzIiwidmFsdWVzIiwicmFkaW9Db250cm9sIiwicmFkaW8iLCJ0aXRsZXMiLCJnZXRDaGVja2JveENvbnRyb2wiLCJnZXRTZWxlY3RDb250cm9sIiwiZ2V0U3dpdGNoZXIiLCJnZXRBbGVydCIsImdldEludmFsaWRGZWVkYmFjayIsIlRoZW1lQm9vdHN0cmFwMyIsIl9UaGVtZUJhcmVib25lcyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJfZ2V0JGNhbGwiLCJfZ2V0JGNhbGwyIiwiX2dldCRjYWxsMyIsIl9nZXQkY2FsbDQiLCJfZ2V0JGNhbGw1IiwicmVtb3ZlIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiY29udHJvbFNsb3QiLCJFZGl0b3IiLCJpbnN0YW5jZSIsInRoZW1lIiwiY29udGFpbmVyIiwicHJvcGVydGllc1Nsb3QiLCJtZXNzYWdlc1Nsb3QiLCJhY3Rpb25zU2xvdCIsImFycmF5QWN0aW9uc1Nsb3QiLCJjaGlsZHJlblNsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsImlubmVySFRNTCIsImludmFsaWRGZWVkYmFjayIsImRpc2FibGUiLCJlbmFibGUiLCJzYW5pdGl6ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk11bHRpcGxlRWRpdG9yIiwiX0VkaXRvciIsImZpZWxkc2V0IiwiZmllbGRzZXRCb2R5Iiwic3dpdGNoZXIiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJOdW1iZXIiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsInJlbW92ZUF0dHJpYnV0ZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJfSW5zdGFuY2UiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwiX3NjaGVtYSRvcHRpb25zIiwiX3NjaGVtYSRvcHRpb25zMiIsIl9vYmplY3RTcHJlYWQiLCJtZXJnZUFsbE9mIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwiY3JlYXRlSW5zdGFuY2UiLCJuZXdJbmRleCIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImluc3RhbmNlRXJyb3JzIiwiZXJyIiwiZiIsIkJvb2xlYW5FZGl0b3IiLCJjaGVja2VkIiwiQm9vbGVhbiIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJfQm9vbGVhbkVkaXRvciIsInJhZGlvSW5wdXRzIiwicmFkaW9WYWx1ZSIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiQm9vbGVhbkluc3RhbmNlIiwiT2JqZWN0RWRpdG9yIiwicHJvcGVydGllc1RvZ2dsZSIsInByb3BlcnRpZXNDb250YWluZXIiLCJhZGRQcm9wZXJ0eUNvbnRyb2wiLCJhZGRQcm9wZXJ0eUlucHV0IiwiYWRkUHJvcGVydHlCdG4iLCJwcm9wZXJ0eU5hbWVFbXB0eSIsInByb3BlcnR5RXhpc3QiLCJjcmVhdGVDaGlsZCIsImVkaXRhYmxlUHJvcGVydGllcyIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjaGVjYm94Q29udHJvbCIsImNoZWNrYm94IiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJyZWZyZXNoRWRpdG9ycyIsIk9iamVjdEluc3RhbmNlIiwicmVmcmVzaEluc3RhbmNlcyIsImlzTm90UmVxdWlyZWQiLCJzaG91bGRTdGFydERlYWN0aXZhdGVkIiwiZGVhY3RpdmF0ZVByb3BlcnRpZXMiLCJkZWxldGVDaGlsZCIsInNwbGljZSIsImdldENoaWxkIiwiZmluZCIsIl90aGlzNCIsIm9sZFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiQXJyYXlFZGl0b3IiLCJidG5Hcm91cCIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwiaXRlbUluZGV4IiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJBcnJheUluc3RhbmNlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiZnJvbUluZGV4IiwidGVtcEVkaXRvciIsImN1cnJlbnRWYWx1ZSIsIml0ZW1WYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJTdHJpbmciLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJfU3RyaW5nRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIm9wdGlvblZhbHVlcyIsIlN0cmluZ0luc3RhbmNlIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiX051bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsIk51bGxFZGl0b3IiLCJOdWxsSW5zdGFuY2UiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiWE1MSHR0cFJlcXVlc3QiLCJkZWZpbml0aW9ucyIsImRlcmVmZXJlbmNlIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmT3duZXIiLCJwcmV2VmFsdWUiLCJyZWYiLCJpc0NpcmN1bGFyUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmUiLCJvdXRwdXQiLCJzdWJzdHJpbmciLCJoYWxmIiwiY2VpbCIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2hvd1JlcXVpcmVkT25seSIsInJvb3QiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbkNvbnRyb2wiLCJoaWRkZW5JbnB1dCIsIm9yaWdpbmFsU2NoZW1hIiwiX3RoaXMkcm9vdCIsImdldEluc3RhbmNlIiwiX3RoaXM1Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLCtHOzs7Ozs7QUNOQSxvQkFBb0IsbUJBQU8sQ0FBQyxFQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvRzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRzs7Ozs7O0FDTEEsb0JBQW9CLG1CQUFPLENBQUMsRUFBb0I7QUFDaEQ7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNEc7Ozs7OztBQ2xCQSxxQkFBcUIsbUJBQU8sQ0FBQyxFQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx5Rzs7Ozs7O0FDakJBLGNBQWMsbUJBQU8sQ0FBQyxDQUFhO0FBQ25DLDRCQUE0QixtQkFBTyxDQUFDLEVBQTRCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIOzs7Ozs7QUNWQSx3QkFBd0IsbUJBQU8sQ0FBQyxFQUF3QjtBQUN4RCxzQkFBc0IsbUJBQU8sQ0FBQyxFQUFzQjtBQUNwRCxpQ0FBaUMsbUJBQU8sQ0FBQyxFQUFpQztBQUMxRSx3QkFBd0IsbUJBQU8sQ0FBQyxFQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxrSDs7Ozs7O0FDUEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsdUc7Ozs7OztBQ1RBLG9CQUFvQixtQkFBTyxDQUFDLEVBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0c7Ozs7OztBQ2ZBO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0EsaUg7Ozs7OztBQ0xBLGNBQWMsbUJBQU8sQ0FBQyxDQUFhO0FBQ25DLGtCQUFrQixtQkFBTyxDQUFDLEVBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEc7Ozs7OztBQ05BLHVCQUF1QixtQkFBTyxDQUFDLENBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGtIOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQSxnSDs7Ozs7O0FDSEEsdUJBQXVCLG1CQUFPLENBQUMsQ0FBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJIOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQSxrSDs7Ozs7O0FDSEEsY0FBYyxtQkFBTyxDQUFDLENBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Rzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLCtHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSDs7Ozs7O0FDTkEscUJBQXFCLG1CQUFPLENBQUMsQ0FBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUlDLEtBQUssRUFBSztFQUM5QixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNILEtBQUssQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFTSxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7RUFDOUMsS0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxFQUFFQSxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csTUFBTSxFQUFFRCxLQUFLLEVBQUUsRUFBRTtJQUNqREQsUUFBUSxDQUFDRCxLQUFLLENBQUNFLEtBQUssQ0FBQyxFQUFFQSxLQUFLLEVBQUVGLEtBQUssQ0FBQztFQUN0QztBQUNGLENBQUM7QUFFTSxJQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLElBQUksRUFBSztFQUN2QyxPQUFPQSxJQUFJLENBQUNDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUNBLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQzFELENBQUM7QUFFTSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSUMsR0FBRyxFQUFFQyxHQUFHLEVBQUs7RUFDbEMsT0FBT0MsTUFBTSxDQUFDQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDTCxHQUFHLEVBQUVDLEdBQUcsQ0FBQztBQUN2RCxDQUFDO0FBRU0sSUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUlDLEtBQUssRUFBSztFQUMvQixPQUFPbkIsSUFBSSxDQUFDRSxTQUFTLENBQUNpQixLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRU0sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxNQUFNLEVBQUs7RUFDeEMsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNGLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO0FBQ3ZDLENBQUM7QUFFTSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSVosR0FBRyxFQUFLO0VBQ2pDLE9BQU9FLE1BQU0sQ0FBQ1csSUFBSSxDQUFDYixHQUFHLENBQUMsQ0FBQ2MsSUFBSSxFQUFFLENBQUNDLE1BQU0sQ0FBQyxVQUFDQyxNQUFNLEVBQUVmLEdBQUcsRUFBSztJQUNyRGUsTUFBTSxDQUFDZixHQUFHLENBQUMsR0FBR0QsR0FBRyxDQUFDQyxHQUFHLENBQUM7SUFDdEIsT0FBT2UsTUFBTTtFQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNSLENBQUM7QUFFTSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBSUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7RUFDN0IsSUFBSUMsY0FBUSxDQUFDRixDQUFDLENBQUMsSUFBSUUsY0FBUSxDQUFDRCxDQUFDLENBQUMsRUFBRTtJQUM5QkQsQ0FBQyxHQUFHTixVQUFVLENBQUNNLENBQUMsQ0FBQztJQUNqQkMsQ0FBQyxHQUFHUCxVQUFVLENBQUNPLENBQUMsQ0FBQztFQUNuQjtFQUNBLE9BQU8vQixJQUFJLENBQUNFLFNBQVMsQ0FBQzRCLENBQUMsQ0FBQyxLQUFLOUIsSUFBSSxDQUFDRSxTQUFTLENBQUM2QixDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVNLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJSCxDQUFDLEVBQUVDLENBQUMsRUFBSztFQUNqQyxPQUFPLENBQUNGLEtBQUssQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQUVNLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFJZixLQUFLLEVBQUs7RUFDL0IsT0FBT0EsS0FBSyxLQUFLLElBQUk7QUFDdkIsQ0FBQztBQUVNLElBQU1nQixLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBSWhCLEtBQUssRUFBSztFQUM5QixPQUFPLE9BQU9BLEtBQUssS0FBSyxXQUFXO0FBQ3JDLENBQUM7QUFFTSxJQUFNaUIsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUlqQixLQUFLLEVBQUs7RUFDL0IsT0FBTyxPQUFPQSxLQUFLLEtBQUssV0FBVztBQUNyQyxDQUFDO0FBRU0sSUFBTWtCLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJbEIsS0FBSyxFQUFLO0VBQ2pDLE9BQU8sT0FBT0EsS0FBSyxLQUFLLFFBQVE7QUFDbEMsQ0FBQztBQUVNLElBQU1tQixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSW5CLEtBQUssRUFBSztFQUNsQyxPQUFPa0IsUUFBUSxDQUFDbEIsS0FBSyxDQUFDLElBQUlBLEtBQUssS0FBS0csSUFBSSxDQUFDaUIsS0FBSyxDQUFDcEIsS0FBSyxDQUFDO0FBQ3ZELENBQUM7QUFFTSxJQUFNcUIsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlyQixLQUFLLEVBQUs7RUFDakMsT0FBTyxPQUFPQSxLQUFLLEtBQUssUUFBUTtBQUNsQyxDQUFDO0FBRU0sSUFBTXNCLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJdEIsS0FBSyxFQUFLO0VBQ2xDLE9BQU8sT0FBT0EsS0FBSyxLQUFLLFNBQVM7QUFDbkMsQ0FBQztBQUVNLElBQU11QixPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSXZCLEtBQUssRUFBSztFQUNoQyxPQUFPd0IsS0FBSyxDQUFDRCxPQUFPLENBQUN2QixLQUFLLENBQUM7QUFDN0IsQ0FBQztBQUVNLElBQU1hLGNBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJYixLQUFLLEVBQUs7RUFDakMsT0FBTyxDQUFDZSxNQUFNLENBQUNmLEtBQUssQ0FBQyxJQUFJLENBQUN1QixPQUFPLENBQUN2QixLQUFLLENBQUMsSUFBSXlCLGdCQUFBLENBQU96QixLQUFLLE1BQUssUUFBUTtBQUN2RSxDQUFDO0FBRU0sSUFBTTBCLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJMUIsS0FBSyxFQUFLO0VBQ2hDLElBQUkyQixJQUFJLEdBQUcsS0FBSztFQUVoQixJQUFJVCxRQUFRLENBQUNsQixLQUFLLENBQUMsRUFBRTtJQUNuQjJCLElBQUksR0FBR1IsU0FBUyxDQUFDbkIsS0FBSyxDQUFDLEdBQUcsU0FBUyxHQUFHLFFBQVE7RUFDaEQsQ0FBQyxNQUFNLElBQUlxQixRQUFRLENBQUNyQixLQUFLLENBQUMsRUFBRTtJQUMxQjJCLElBQUksR0FBRyxRQUFRO0VBQ2pCLENBQUMsTUFBTSxJQUFJTCxTQUFTLENBQUN0QixLQUFLLENBQUMsRUFBRTtJQUMzQjJCLElBQUksR0FBRyxTQUFTO0VBQ2xCLENBQUMsTUFBTSxJQUFJSixPQUFPLENBQUN2QixLQUFLLENBQUMsRUFBRTtJQUN6QjJCLElBQUksR0FBRyxPQUFPO0VBQ2hCLENBQUMsTUFBTSxJQUFJWixNQUFNLENBQUNmLEtBQUssQ0FBQyxFQUFFO0lBQ3hCMkIsSUFBSSxHQUFHLE1BQU07RUFDZixDQUFDLE1BQU0sSUFBSWQsY0FBUSxDQUFDYixLQUFLLENBQUMsRUFBRTtJQUMxQjJCLElBQUksR0FBRyxRQUFRO0VBQ2pCO0VBRUEsT0FBT0EsSUFBSTtBQUNiLENBQUM7QUFFTSxJQUFNQyxlQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsTUFBTSxFQUFpQjtFQUFBLFNBQUFDLElBQUEsR0FBQUMsU0FBQSxDQUFBM0MsTUFBQSxFQUFaNEMsT0FBTyxPQUFBUixLQUFBLENBQUFNLElBQUEsT0FBQUEsSUFBQSxXQUFBRyxJQUFBLE1BQUFBLElBQUEsR0FBQUgsSUFBQSxFQUFBRyxJQUFBO0lBQVBELE9BQU8sQ0FBQUMsSUFBQSxRQUFBRixTQUFBLENBQUFFLElBQUE7RUFBQTtFQUMxQyxJQUFJLENBQUNELE9BQU8sQ0FBQzVDLE1BQU0sRUFBRSxPQUFPeUMsTUFBTTtFQUNsQyxJQUFNSyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0csS0FBSyxFQUFFO0VBRTlCLElBQUl0QixjQUFRLENBQUNnQixNQUFNLENBQUMsSUFBSWhCLGNBQVEsQ0FBQ3FCLE1BQU0sQ0FBQyxFQUFFO0lBQ3hDdkMsTUFBTSxDQUFDVyxJQUFJLENBQUM0QixNQUFNLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLFVBQUMxQyxHQUFHLEVBQUs7TUFDbkMsSUFBSW1CLGNBQVEsQ0FBQ3FCLE1BQU0sQ0FBQ3hDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDekIsSUFBSSxDQUFDbUMsTUFBTSxDQUFDbkMsR0FBRyxDQUFDLEVBQUU7VUFDaEJDLE1BQU0sQ0FBQzBDLE1BQU0sQ0FBQ1IsTUFBTSxFQUFBUyx3QkFBQSxLQUNqQjVDLEdBQUcsRUFBRyxDQUFDLENBQUMsRUFDVDtRQUNKO1FBQ0FrQyxTQUFTLENBQUNDLE1BQU0sQ0FBQ25DLEdBQUcsQ0FBQyxFQUFFd0MsTUFBTSxDQUFDeEMsR0FBRyxDQUFDLENBQUM7TUFDckMsQ0FBQyxNQUFNO1FBQ0xDLE1BQU0sQ0FBQzBDLE1BQU0sQ0FBQ1IsTUFBTSxFQUFBUyx3QkFBQSxLQUNqQjVDLEdBQUcsRUFBR3dDLE1BQU0sQ0FBQ3hDLEdBQUcsQ0FBQyxFQUNsQjtNQUNKO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxPQUFPa0MsU0FBUyxDQUFBVyxLQUFBLFVBQUNWLE1BQU0sRUFBQVcsTUFBQSxDQUFLUixPQUFPLEVBQUM7QUFDdEMsQ0FBQyxDOzs7OztBQzNIMkY7QUFBQSxJQUV0RlMsYUFBTTtFQUNWLFNBQUFBLE9BQWFDLE1BQU0sRUFBRTtJQUFBQyx3QkFBQSxPQUFBRixNQUFBO0lBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCO0VBQUNFLHFCQUFBLENBQUFILE1BQUE7SUFBQS9DLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE2QyxxQkFBQSxFQUF3QjtNQUN0QixPQUFPaEMsY0FBUSxDQUFDLElBQUksQ0FBQzZCLE1BQU0sQ0FBQ0csb0JBQW9CLENBQUMsSUFBSXZCLFNBQVMsQ0FBQyxJQUFJLENBQUNvQixNQUFNLENBQUNHLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDSCxNQUFNLENBQUNHLG9CQUFvQixHQUFHLElBQUk7SUFDNUk7RUFBQztJQUFBbkQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQThDLE1BQUEsRUFBUztNQUNQLE9BQU92QixPQUFPLENBQUMsSUFBSSxDQUFDbUIsTUFBTSxDQUFDSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUNKLE1BQU0sQ0FBQ0ksS0FBSyxHQUFHQyxTQUFTO0lBQ25FO0VBQUM7SUFBQXJELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFnRCxNQUFBLEVBQVM7TUFDUCxPQUFPekIsT0FBTyxDQUFDLElBQUksQ0FBQ21CLE1BQU0sQ0FBQ00sS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDTixNQUFNLENBQUNNLEtBQUssR0FBR0QsU0FBUztJQUNuRTtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBaUQsT0FBQSxFQUFTO01BQ1AsT0FBTyxJQUFJLENBQUNQLE1BQU0sU0FBTTtJQUMxQjtFQUFDO0lBQUFoRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBa0QsU0FBQSxFQUFZO01BQ1YsT0FBUXJDLGNBQVEsQ0FBQyxJQUFJLENBQUM2QixNQUFNLENBQUNRLFFBQVEsQ0FBQyxJQUFJNUIsU0FBUyxDQUFDLElBQUksQ0FBQ29CLE1BQU0sQ0FBQ1EsUUFBUSxDQUFDLEdBQUksSUFBSSxDQUFDUixNQUFNLENBQUNRLFFBQVEsR0FBR0gsU0FBUztJQUMvRztFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBckIsTUFBQSxFQUFTO01BQ1AsT0FBT0UsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDLElBQUksQ0FBQzJELE1BQU0sQ0FBQyxDQUFDO0lBQ2hEO0VBQUM7SUFBQWhELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFtRCxTQUFBLEVBQVc7TUFDVCxPQUFPLElBQUksQ0FBQ1QsTUFBTSxXQUFRO0lBQzVCO0VBQUM7SUFBQWhELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFvRCxrQkFBQSxFQUFxQjtNQUNuQixPQUFPdkMsY0FBUSxDQUFDLElBQUksQ0FBQzZCLE1BQU0sQ0FBQ1UsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUNWLE1BQU0sQ0FBQ1UsaUJBQWlCLEdBQUdMLFNBQVM7SUFDNUY7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXFELGlCQUFBLEVBQW9CO01BQ2xCLE9BQU94QyxjQUFRLENBQUMsSUFBSSxDQUFDNkIsTUFBTSxDQUFDVyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQ1gsTUFBTSxDQUFDVyxnQkFBZ0IsR0FBR04sU0FBUztJQUMxRjtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBc0QsWUFBQSxFQUFlO01BQ2IsT0FBT2pDLFFBQVEsQ0FBQyxJQUFJLENBQUNxQixNQUFNLENBQUNZLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQ1osTUFBTSxDQUFDWSxXQUFXLEdBQUdQLFNBQVM7SUFDaEY7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXVELE1BQUEsRUFBUTtNQUNOLE9BQVExQyxjQUFRLENBQUMsSUFBSSxDQUFDNkIsTUFBTSxRQUFLLENBQUMsSUFBSXBCLFNBQVMsQ0FBQyxJQUFJLENBQUNvQixNQUFNLFFBQUssQ0FBQyxHQUFJLElBQUksQ0FBQ0EsTUFBTSxRQUFLLEdBQUdLLFNBQVM7SUFDbkc7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXdELE1BQUEsRUFBUTtNQUNOLElBQUlqQyxPQUFPLENBQUMsSUFBSSxDQUFDbUIsTUFBTSxRQUFLLENBQUMsSUFBSSxJQUFJLENBQUNBLE1BQU0sUUFBSyxDQUFDdEQsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM1RCxPQUFPLElBQUksQ0FBQ3NELE1BQU0sUUFBSztNQUN6QjtNQUVBLE9BQU9LLFNBQVM7SUFDbEI7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXlELGlCQUFBLEVBQW9CO01BQ2xCLE9BQU92QyxRQUFRLENBQUMsSUFBSSxDQUFDd0IsTUFBTSxDQUFDZSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQ2YsTUFBTSxDQUFDZSxnQkFBZ0IsR0FBR1YsU0FBUztJQUMxRjtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBMEQsaUJBQUEsRUFBb0I7TUFDbEIsT0FBT3hDLFFBQVEsQ0FBQyxJQUFJLENBQUN3QixNQUFNLENBQUNnQixnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQ2dCLGdCQUFnQixHQUFHWCxTQUFTO0lBQzFGO0VBQUM7SUFBQXJELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEyRCxPQUFBLEVBQVU7TUFDUixPQUFPdEMsUUFBUSxDQUFDLElBQUksQ0FBQ3FCLE1BQU0sQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2lCLE1BQU0sR0FBR1osU0FBUztJQUN0RTtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBNEQsU0FBVTVELEtBQUssRUFBRTtNQUNmLE9BQVFnQixLQUFLLENBQUMsSUFBSSxDQUFDMkMsTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUNBLE1BQU0sRUFBRSxLQUFLM0QsS0FBSztJQUN6RDtFQUFDO0lBQUFOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE2RCxJQUFBLEVBQU07TUFDSixJQUFJaEQsY0FBUSxDQUFDLElBQUksQ0FBQzZCLE1BQU0sTUFBRyxDQUFDLEVBQUU7UUFDNUIsT0FBTyxJQUFJLENBQUNBLE1BQU0sTUFBRztNQUN2QjtNQUVBLElBQUlwQixTQUFTLENBQUMsSUFBSSxDQUFDb0IsTUFBTSxNQUFHLENBQUMsRUFBRTtRQUM3QixPQUFPLElBQUksQ0FBQ0EsTUFBTSxNQUFHO01BQ3ZCO01BRUEsT0FBT0ssU0FBUztJQUNsQjtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBOEQsTUFBQSxFQUFTO01BQ1AsT0FBT2pELGNBQVEsQ0FBQyxJQUFJLENBQUM2QixNQUFNLENBQUNvQixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUNwQixNQUFNLENBQUNvQixLQUFLLEdBQUdmLFNBQVM7SUFDcEU7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQStELFFBQUEsRUFBVztNQUNULE9BQU83QyxRQUFRLENBQUMsSUFBSSxDQUFDd0IsTUFBTSxDQUFDcUIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDckIsTUFBTSxDQUFDcUIsT0FBTyxHQUFHaEIsU0FBUztJQUN4RTtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBZ0UsWUFBQSxFQUFlO01BQ2IsSUFBSTdDLFNBQVMsQ0FBQyxJQUFJLENBQUN1QixNQUFNLENBQUNzQixXQUFXLENBQUMsSUFBSSxJQUFJLENBQUN0QixNQUFNLENBQUNzQixXQUFXLElBQUksQ0FBQyxFQUFFO1FBQ3RFLE9BQU8sSUFBSSxDQUFDdEIsTUFBTSxDQUFDc0IsV0FBVztNQUNoQztNQUVBLE9BQU9qQixTQUFTO0lBQ2xCO0VBQUM7SUFBQXJELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFpRSxTQUFBLEVBQVk7TUFDVixJQUFJOUMsU0FBUyxDQUFDLElBQUksQ0FBQ3VCLE1BQU0sQ0FBQ3VCLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQ3ZCLE1BQU0sQ0FBQ3VCLFFBQVEsSUFBSSxDQUFDLEVBQUU7UUFDaEUsT0FBTyxJQUFJLENBQUN2QixNQUFNLENBQUN1QixRQUFRO01BQzdCO01BRUEsT0FBT2xCLFNBQVM7SUFDbEI7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQWtFLFVBQUEsRUFBYTtNQUNYLElBQUkvQyxTQUFTLENBQUMsSUFBSSxDQUFDdUIsTUFBTSxDQUFDd0IsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDeEIsTUFBTSxDQUFDd0IsU0FBUyxJQUFJLENBQUMsRUFBRTtRQUNsRSxPQUFPLElBQUksQ0FBQ3hCLE1BQU0sQ0FBQ3dCLFNBQVM7TUFDOUI7TUFFQSxPQUFPbkIsU0FBUztJQUNsQjtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBbUUsY0FBQSxFQUFpQjtNQUNmLElBQUloRCxTQUFTLENBQUMsSUFBSSxDQUFDdUIsTUFBTSxDQUFDeUIsYUFBYSxDQUFDLEVBQUU7UUFDeEMsT0FBTyxJQUFJLENBQUN6QixNQUFNLENBQUN5QixhQUFhO01BQ2xDO01BRUEsT0FBT3BCLFNBQVM7SUFDbEI7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQW9FLFFBQUEsRUFBVztNQUNULE9BQU9sRCxRQUFRLENBQUMsSUFBSSxDQUFDd0IsTUFBTSxDQUFDMEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDMUIsTUFBTSxDQUFDMEIsT0FBTyxHQUFHckIsU0FBUztJQUN4RTtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBcUUsWUFBQSxFQUFlO01BQ2IsSUFBSWxELFNBQVMsQ0FBQyxJQUFJLENBQUN1QixNQUFNLENBQUMyQixXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMzQixNQUFNLENBQUMyQixXQUFXLElBQUksQ0FBQyxFQUFFO1FBQ3RFLE9BQU8sSUFBSSxDQUFDM0IsTUFBTSxDQUFDMkIsV0FBVztNQUNoQztNQUVBLE9BQU90QixTQUFTO0lBQ2xCO0VBQUM7SUFBQXJELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFzRSxTQUFBLEVBQVk7TUFDVixJQUFJbkQsU0FBUyxDQUFDLElBQUksQ0FBQ3VCLE1BQU0sQ0FBQzRCLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQzVCLE1BQU0sQ0FBQzRCLFFBQVEsSUFBSSxDQUFDLEVBQUU7UUFDaEUsT0FBTyxJQUFJLENBQUM1QixNQUFNLENBQUM0QixRQUFRO01BQzdCO01BRUEsT0FBT3ZCLFNBQVM7SUFDbEI7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXVFLFVBQUEsRUFBYTtNQUNYLElBQUlwRCxTQUFTLENBQUMsSUFBSSxDQUFDdUIsTUFBTSxDQUFDNkIsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDN0IsTUFBTSxDQUFDNkIsU0FBUyxJQUFJLENBQUMsRUFBRTtRQUNsRSxPQUFPLElBQUksQ0FBQzdCLE1BQU0sQ0FBQzZCLFNBQVM7TUFDOUI7TUFFQSxPQUFPeEIsU0FBUztJQUNsQjtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBd0UsY0FBQSxFQUFpQjtNQUNmLElBQUlyRCxTQUFTLENBQUMsSUFBSSxDQUFDdUIsTUFBTSxDQUFDOEIsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDOUIsTUFBTSxDQUFDOEIsYUFBYSxJQUFJLENBQUMsRUFBRTtRQUMxRSxPQUFPLElBQUksQ0FBQzlCLE1BQU0sQ0FBQzhCLGFBQWE7TUFDbEM7TUFFQSxPQUFPekIsU0FBUztJQUNsQjtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBeUUsV0FBQSxFQUFjO01BQ1osSUFBSXZELFFBQVEsQ0FBQyxJQUFJLENBQUN3QixNQUFNLENBQUMrQixVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMvQixNQUFNLENBQUMrQixVQUFVLElBQUksQ0FBQyxFQUFFO1FBQ25FLE9BQU8sSUFBSSxDQUFDL0IsTUFBTSxDQUFDK0IsVUFBVTtNQUMvQjtNQUVBLE9BQU8xQixTQUFTO0lBQ2xCO0VBQUM7SUFBQXJELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEwRSxJQUFBLEVBQU87TUFDTCxPQUFRN0QsY0FBUSxDQUFDLElBQUksQ0FBQzZCLE1BQU0sQ0FBQ2dDLEdBQUcsQ0FBQyxJQUFJcEQsU0FBUyxDQUFDLElBQUksQ0FBQ29CLE1BQU0sQ0FBQ2dDLEdBQUcsQ0FBQyxHQUFJLElBQUksQ0FBQ2hDLE1BQU0sQ0FBQ2dDLEdBQUcsR0FBRzNCLFNBQVM7SUFDaEc7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTJFLE9BQVFBLE9BQU0sRUFBRTtNQUNkLE9BQVEsSUFBSSxDQUFDakMsTUFBTSxDQUFDa0MsT0FBTyxJQUFJLElBQUksQ0FBQ2xDLE1BQU0sQ0FBQ2tDLE9BQU8sQ0FBQ0QsT0FBTSxDQUFDLEdBQUksSUFBSSxDQUFDakMsTUFBTSxDQUFDa0MsT0FBTyxDQUFDRCxPQUFNLENBQUMsR0FBRyxLQUFLO0lBQ25HO0VBQUM7SUFBQWpGLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE2RSxRQUFBLEVBQVc7TUFDVCxPQUFPeEQsUUFBUSxDQUFDLElBQUksQ0FBQ3FCLE1BQU0sQ0FBQ21DLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQ25DLE1BQU0sQ0FBQ21DLE9BQU8sR0FBRzlCLFNBQVM7SUFDeEU7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQThFLGtCQUFBLEVBQXFCO01BQ25CLE9BQU9qRSxjQUFRLENBQUMsSUFBSSxDQUFDNkIsTUFBTSxDQUFDb0MsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUNwQyxNQUFNLENBQUNvQyxpQkFBaUIsR0FBRy9CLFNBQVM7SUFDNUY7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQStFLFdBQUEsRUFBYztNQUNaLE9BQU9sRSxjQUFRLENBQUMsSUFBSSxDQUFDNkIsTUFBTSxDQUFDcUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDckMsTUFBTSxDQUFDcUMsVUFBVSxHQUFHaEMsU0FBUztJQUM5RTtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBZ0YsU0FBQSxFQUFZO01BQ1YsT0FBTzFELFNBQVMsQ0FBQyxJQUFJLENBQUNvQixNQUFNLENBQUNzQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUN0QyxNQUFNLENBQUNzQyxRQUFRLEdBQUdqQyxTQUFTO0lBQzNFO0VBQUM7SUFBQXJELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFpRixTQUFBLEVBQVk7TUFDVixPQUFPMUQsT0FBTyxDQUFDLElBQUksQ0FBQ21CLE1BQU0sQ0FBQ3VDLFFBQVEsQ0FBQyxHQUFBQywyQkFBQSxDQUFPLElBQUlDLEdBQUcsQ0FBQyxJQUFJLENBQUN6QyxNQUFNLENBQUN1QyxRQUFRLENBQUMsSUFBSWxDLFNBQVM7SUFDdkY7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQW9GLEtBQUEsRUFBUTtNQUNOLE9BQVF2RSxjQUFRLENBQUMsSUFBSSxDQUFDNkIsTUFBTSxDQUFDMEMsSUFBSSxDQUFDLElBQUk5RCxTQUFTLENBQUMsSUFBSSxDQUFDb0IsTUFBTSxDQUFDMEMsSUFBSSxDQUFDLEdBQUksSUFBSSxDQUFDMUMsTUFBTSxDQUFDMEMsSUFBSSxHQUFHckMsU0FBUztJQUNuRztFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBcUYsTUFBQSxFQUFTO01BQ1AsT0FBT2hFLFFBQVEsQ0FBQyxJQUFJLENBQUNxQixNQUFNLENBQUMyQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMzQyxNQUFNLENBQUMyQyxLQUFLLEdBQUd0QyxTQUFTO0lBQ3BFO0VBQUM7SUFBQXJELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEyQixLQUFBLEVBQVE7TUFDTixJQUFJTixRQUFRLENBQUMsSUFBSSxDQUFDcUIsTUFBTSxDQUFDZixJQUFJLENBQUMsSUFBSUosT0FBTyxDQUFDLElBQUksQ0FBQ21CLE1BQU0sQ0FBQ2YsSUFBSSxDQUFDLEVBQUU7UUFDM0QsT0FBTyxJQUFJLENBQUNlLE1BQU0sQ0FBQ2YsSUFBSTtNQUN6QjtNQUVBLE9BQU9vQixTQUFTO0lBQ2xCO0VBQUM7SUFBQXJELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFzRixPQUFRdEYsS0FBSyxFQUFFO01BQ2IsT0FBUWdCLEtBQUssQ0FBQyxJQUFJLENBQUNXLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDQSxJQUFJLEVBQUUsS0FBSzNCLEtBQUs7SUFDckQ7RUFBQztJQUFBTixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBdUYsY0FBQSxFQUFpQjtNQUNmLE9BQU8sSUFBSSxDQUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3hEO0VBQUM7SUFBQTVGLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF3RixNQUFBLEVBQVM7TUFDUCxPQUFPakUsT0FBTyxDQUFDLElBQUksQ0FBQ21CLE1BQU0sQ0FBQzhDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQzlDLE1BQU0sQ0FBQzhDLEtBQUssR0FBR3pDLFNBQVM7SUFDbkU7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXlGLFlBQUEsRUFBZTtNQUNiLE9BQU9uRSxTQUFTLENBQUMsSUFBSSxDQUFDb0IsTUFBTSxDQUFDK0MsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDL0MsTUFBTSxDQUFDK0MsV0FBVyxHQUFHMUMsU0FBUztJQUNqRjtFQUFDO0lBQUFyRCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBMEYsUUFBQSxFQUFXO01BQUEsSUFBQUMsS0FBQTtNQUNUaEcsTUFBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM4QixPQUFPLENBQUMsVUFBQzFDLEdBQUcsRUFBSztRQUNqQyxPQUFPaUcsS0FBSSxDQUFDakcsR0FBRyxDQUFDO01BQ2xCLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQSxPQUFBK0MsTUFBQTtBQUFBO0FBR1lBLDREQUFNLEU7OztBQzlPYztBQUNOO0FBRXRCLElBQU1LLFdBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFJOEMsU0FBUyxFQUFFNUYsS0FBSyxFQUFFMEMsTUFBTSxFQUFFaEQsR0FBRyxFQUFFSixJQUFJLEVBQUs7RUFDNUQsSUFBSXVHLE1BQU0sR0FBRyxFQUFFO0VBRWYsSUFBSTdFLEtBQUssQ0FBQzBCLE1BQU0sQ0FBQ0ksS0FBSyxFQUFFLENBQUMsRUFBRTtJQUN6QkosTUFBTSxDQUFDSSxLQUFLLEVBQUUsQ0FBQ1YsT0FBTyxDQUFDLFVBQUNNLE1BQU0sRUFBSztNQUNqQyxJQUFNb0QsZUFBZSxHQUFHLElBQUlDLElBQUksQ0FBQztRQUFFckQsTUFBTSxFQUFFQSxNQUFNO1FBQUVzRCxVQUFVLEVBQUVoRyxLQUFLO1FBQUVpRyxRQUFRLEVBQUV2RyxHQUFHO1FBQUV3RyxTQUFTLEVBQUU7TUFBTSxDQUFDLENBQUM7TUFDeEcsSUFBTUMsZUFBZSxHQUFHTCxlQUFlLENBQUNNLFFBQVEsRUFBRTtNQUNsRE4sZUFBZSxDQUFDSixPQUFPLEVBQUU7TUFDekJHLE1BQU0sTUFBQXJELE1BQUEsQ0FBQTBDLDJCQUFBLENBQU9XLE1BQU0sR0FBQVgsMkJBQUEsQ0FBS2lCLGVBQWUsRUFBQztJQUMxQyxDQUFDLENBQUM7RUFDSjtFQUVBLE9BQU9OLE1BQU07QUFDZixDQUFDLEM7O0FDaEI0QztBQUV0QyxJQUFNdEIsbUJBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJcUIsU0FBUyxFQUFFNUYsS0FBSyxFQUFFMEMsTUFBTSxFQUFFaEQsR0FBRyxFQUFFSixJQUFJLEVBQUs7RUFDaEUsSUFBTXVHLE1BQU0sR0FBRyxFQUFFO0VBRWpCLElBQUl4RSxRQUFRLENBQUNyQixLQUFLLENBQUMsSUFBSWdCLEtBQUssQ0FBQzBCLE1BQU0sQ0FBQzZCLFNBQVMsRUFBRSxDQUFDLEVBQUU7SUFDaER2RSxLQUFLLEdBQUdBLEtBQUssQ0FBQ3FHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUM7SUFDdkMsSUFBTUMsT0FBTyxHQUFJdEcsS0FBSyxDQUFDWixNQUFNLEdBQUdzRCxNQUFNLENBQUM2QixTQUFTLEVBQUc7SUFFbkQsSUFBSStCLE9BQU8sRUFBRTtNQUNYVCxNQUFNLENBQUNVLElBQUksQ0FBQztRQUNWQyxPQUFPLEVBQUUsbUJBQW1CLEdBQUc5RCxNQUFNLENBQUM2QixTQUFTLEVBQUUsR0FBRyxrQkFBa0I7UUFDdEVqRixJQUFJLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBLE9BQU91RyxNQUFNO0FBQ2YsQ0FBQyxDOztBQ2xCNkM7QUFFdkMsSUFBTTVDLFdBQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFJMkMsU0FBUyxFQUFFNUYsS0FBSyxFQUFFMEMsTUFBTSxFQUFFaEQsR0FBRyxFQUFFSixJQUFJLEVBQUs7RUFDN0QsSUFBTXVHLE1BQU0sR0FBRyxFQUFFO0VBQ2pCLElBQUk3RSxLQUFLLENBQUMwQixNQUFNLFNBQU0sRUFBRSxDQUFDLEVBQUU7SUFDekIsSUFBTStELG9CQUFvQixHQUFHM0YsU0FBUyxDQUFDZCxLQUFLLEVBQUUwQyxNQUFNLFNBQU0sRUFBRSxDQUFDO0lBQzdELElBQU00RCxPQUFPLEdBQUlHLG9CQUFxQjtJQUV0QyxJQUFJSCxPQUFPLEVBQUU7TUFDWFQsTUFBTSxDQUFDVSxJQUFJLENBQUM7UUFDVkMsT0FBTyxFQUFFLFdBQVcsR0FBRzNILElBQUksQ0FBQ0UsU0FBUyxDQUFDMkQsTUFBTSxTQUFNLEVBQUUsQ0FBQztRQUNyRHBELElBQUksRUFBRUE7TUFDUixDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUEsT0FBT3VHLE1BQU07QUFDZixDQUFDLEM7O0FDakIyQztBQUNmO0FBRXRCLElBQU0zQyxpQkFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUkwQyxTQUFTLEVBQUU1RixLQUFLLEVBQUUwQyxNQUFNLEVBQUVoRCxHQUFHLEVBQUVKLElBQUksRUFBSztFQUMvRCxJQUFNdUcsTUFBTSxHQUFHLEVBQUU7RUFFakIsSUFBSXRFLE9BQU8sQ0FBQ3ZCLEtBQUssQ0FBQyxJQUFJZ0IsS0FBSyxDQUFDMEIsTUFBTSxDQUFDUSxRQUFRLEVBQUUsQ0FBQyxFQUFFO0lBQzlDLElBQUl3RCxPQUFPLEdBQUcsQ0FBQztJQUVmMUcsS0FBSyxDQUFDb0MsT0FBTyxDQUFDLFVBQUN1RSxJQUFJLEVBQUs7TUFDdEIsSUFBTUMsY0FBYyxHQUFHLElBQUliLElBQUksQ0FBQztRQUFFckQsTUFBTSxFQUFFQSxNQUFNLENBQUNRLFFBQVEsRUFBRTtRQUFFOEMsVUFBVSxFQUFFVyxJQUFJO1FBQUVULFNBQVMsRUFBRTtNQUFNLENBQUMsQ0FBQztNQUNsRyxJQUFNVyxjQUFjLEdBQUdELGNBQWMsQ0FBQ1IsUUFBUSxFQUFFO01BRWhELElBQUlTLGNBQWMsQ0FBQ3pILE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDL0JzSCxPQUFPLEVBQUU7TUFDWDtNQUVBRSxjQUFjLENBQUNsQixPQUFPLEVBQUU7SUFDMUIsQ0FBQyxDQUFDO0lBRUYsSUFBTW9CLGVBQWUsR0FBSUosT0FBTyxLQUFLLENBQUU7SUFFdkMsSUFBSTFGLEtBQUssQ0FBQzBCLE1BQU0sQ0FBQzJCLFdBQVcsRUFBRSxDQUFDLEVBQUU7TUFDL0IsSUFBTTBDLGtCQUFrQixHQUFJTCxPQUFPLEdBQUdoRSxNQUFNLENBQUMyQixXQUFXLEVBQUc7TUFFM0QsSUFBSTBDLGtCQUFrQixFQUFFO1FBQ3RCbEIsTUFBTSxDQUFDVSxJQUFJLENBQUM7VUFDVkMsT0FBTywwQkFBQWhFLE1BQUEsQ0FBMEJrRSxPQUFPLDhDQUFBbEUsTUFBQSxDQUEyQ0UsTUFBTSxDQUFDMkIsV0FBVyxFQUFFLENBQUU7VUFDekcvRSxJQUFJLEVBQUVBO1FBQ1IsQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLE1BQU07TUFDTCxJQUFJd0gsZUFBZSxFQUFFO1FBQ25CakIsTUFBTSxDQUFDVSxJQUFJLENBQUM7VUFDVkMsT0FBTyxFQUFFLHlCQUF5QjtVQUNsQ2xILElBQUksRUFBRUE7UUFDUixDQUFDLENBQUM7TUFDSjtJQUNGO0lBRUEsSUFBSTBCLEtBQUssQ0FBQzBCLE1BQU0sQ0FBQ3NCLFdBQVcsRUFBRSxDQUFDLEVBQUU7TUFDL0IsSUFBTWdELGtCQUFrQixHQUFJTixPQUFPLEdBQUdoRSxNQUFNLENBQUNzQixXQUFXLEVBQUc7TUFFM0QsSUFBSWdELGtCQUFrQixFQUFFO1FBQ3RCbkIsTUFBTSxDQUFDVSxJQUFJLENBQUM7VUFDVkMsT0FBTywwQkFBQWhFLE1BQUEsQ0FBMEJrRSxPQUFPLHlDQUFBbEUsTUFBQSxDQUFzQ0UsTUFBTSxDQUFDc0IsV0FBVyxFQUFFLENBQUU7VUFDcEcxRSxJQUFJLEVBQUVBO1FBQ1IsQ0FBQyxDQUFDO01BQ0o7SUFDRjtFQUNGO0VBRUEsT0FBT3VHLE1BQU07QUFDZixDQUFDLEM7O0FDckQ0QjtBQUNNO0FBRTVCLElBQU03QyxXQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBSTRDLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQzVELElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJN0UsS0FBSyxDQUFDMEIsTUFBTSxDQUFDTSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0lBQ3pCLElBQU1BLE1BQUssR0FBR04sTUFBTSxDQUFDTSxLQUFLLEVBQUU7SUFDNUIsSUFBSWlFLEtBQUssR0FBRyxLQUFLO0lBRWpCakUsTUFBSyxDQUFDWixPQUFPLENBQUMsVUFBQ00sTUFBTSxFQUFLO01BQ3hCLElBQU13RSxXQUFXLEdBQUcsSUFBSW5CLElBQUksQ0FBQztRQUFFckQsTUFBTSxFQUFFQSxNQUFNO1FBQUVzRCxVQUFVLEVBQUVoRyxLQUFLO1FBQUVrRyxTQUFTLEVBQUU7TUFBTSxDQUFDLENBQUM7TUFDckYsSUFBTWlCLFdBQVcsR0FBR0QsV0FBVyxDQUFDZCxRQUFRLEVBQUU7TUFDMUNjLFdBQVcsQ0FBQ3hCLE9BQU8sRUFBRTtNQUVyQixJQUFJeUIsV0FBVyxDQUFDL0gsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM1QjZILEtBQUssR0FBRyxJQUFJO01BQ2Q7SUFDRixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNBLEtBQUssRUFBRTtNQUNWcEIsTUFBTSxDQUFDVSxJQUFJLENBQUM7UUFDVkMsT0FBTyxFQUFFLDREQUE0RDtRQUNyRWxILElBQUksRUFBRUE7TUFDUixDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUEsT0FBT3VHLE1BQU07QUFDZixDQUFDLEM7O0FDN0JvRDtBQUU5QyxJQUFNekMsbUNBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSXdDLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQ3hFLElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJaEYsY0FBUSxDQUFDYixLQUFLLENBQUMsSUFBSWdCLEtBQUssQ0FBQzBCLE1BQU0sQ0FBQ1UsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFO0lBQ3hELElBQUlnRSxpQkFBaUIsR0FBRyxFQUFFO0lBRTFCekgsTUFBTSxDQUFDVyxJQUFJLENBQUNvQyxNQUFNLENBQUNVLGlCQUFpQixFQUFFLENBQUMsQ0FBQ2hCLE9BQU8sQ0FBQyxVQUFDMUMsR0FBRyxFQUFLO01BQ3ZELElBQUlzQixLQUFLLENBQUNoQixLQUFLLENBQUNOLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDckIsSUFBTTJILGtCQUFrQixHQUFHM0UsTUFBTSxDQUFDVSxpQkFBaUIsRUFBRSxDQUFDMUQsR0FBRyxDQUFDO1FBRTFEMEgsaUJBQWlCLEdBQUdDLGtCQUFrQixDQUFDQyxNQUFNLENBQUMsVUFBQ0MsUUFBUSxFQUFLO1VBQzFELE9BQU8sQ0FBQy9ILE1BQU0sQ0FBQ1EsS0FBSyxFQUFFdUgsUUFBUSxDQUFDO1FBQ2pDLENBQUMsQ0FBQztNQUNKO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBTWpCLE9BQU8sR0FBR2MsaUJBQWlCLENBQUNoSSxNQUFNLEdBQUcsQ0FBQztJQUU1QyxJQUFJa0gsT0FBTyxFQUFFO01BQ1hULE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1FBQ1ZDLE9BQU8sRUFBRSxxQ0FBcUMsR0FBR1ksaUJBQWlCLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0VsSSxJQUFJLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBLE9BQU91RyxNQUFNO0FBQ2YsQ0FBQyxDOzs7QUM3QjRDO0FBQ2hCO0FBRXRCLElBQU14QyxpQ0FBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJdUMsU0FBUyxFQUFFNUYsS0FBSyxFQUFFMEMsTUFBTSxFQUFFaEQsR0FBRyxFQUFFSixJQUFJLEVBQUs7RUFDdkUsSUFBSXVHLE1BQU0sR0FBRyxFQUFFO0VBRWYsSUFBSWhGLGNBQVEsQ0FBQ2IsS0FBSyxDQUFDLElBQUlnQixLQUFLLENBQUMwQixNQUFNLENBQUNXLGdCQUFnQixFQUFFLENBQUMsRUFBRTtJQUN2RDFELE1BQU0sQ0FBQ1csSUFBSSxDQUFDb0MsTUFBTSxDQUFDVyxnQkFBZ0IsRUFBRSxDQUFDLENBQUNqQixPQUFPLENBQUMsVUFBQzFDLEdBQUcsRUFBSztNQUN0RCxJQUFJc0IsS0FBSyxDQUFDaEIsS0FBSyxDQUFDTixHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3JCLElBQU0rSCxlQUFlLEdBQUcvRSxNQUFNLENBQUNXLGdCQUFnQixFQUFFLENBQUMzRCxHQUFHLENBQUM7UUFDdEQsSUFBTWdJLFNBQVMsR0FBRyxJQUFJM0IsSUFBSSxDQUFDO1VBQUVyRCxNQUFNLEVBQUUrRSxlQUFlO1VBQUV6QixVQUFVLEVBQUVoRyxLQUFLO1VBQUVrRyxTQUFTLEVBQUU7UUFBTSxDQUFDLENBQUM7UUFDNUYsSUFBTXlCLFNBQVMsR0FBR0QsU0FBUyxDQUFDdEIsUUFBUSxFQUFFO1FBQ3RDc0IsU0FBUyxDQUFDaEMsT0FBTyxFQUFFO1FBQ25CRyxNQUFNLE1BQUFyRCxNQUFBLENBQUEwQywyQkFBQSxDQUFPVyxNQUFNLEdBQUFYLDJCQUFBLENBQUt5QyxTQUFTLEVBQUM7TUFDcEM7SUFDRixDQUFDLENBQUM7RUFDSjtFQUVBLE9BQU85QixNQUFNO0FBQ2YsQ0FBQyxDOztBQ25Ca0M7QUFFNUIsSUFBTXJDLFNBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFJb0MsU0FBUyxFQUFFNUYsS0FBSyxFQUFFMEMsTUFBTSxFQUFFaEQsR0FBRyxFQUFFSixJQUFJLEVBQUs7RUFDNUQsSUFBTXVHLE1BQU0sR0FBRyxFQUFFO0VBQ2pCLElBQUk3RSxLQUFLLENBQUMwQixNQUFNLFFBQUssRUFBRSxDQUFDLEVBQUU7SUFDeEIsSUFBTTRELE9BQU8sR0FBRyxDQUFDNUQsTUFBTSxRQUFLLEVBQUUsQ0FBQ2tGLElBQUksQ0FBQyxVQUFBQyxDQUFDO01BQUEsT0FBSWhKLElBQUksQ0FBQ0UsU0FBUyxDQUFDaUIsS0FBSyxDQUFDLEtBQUtuQixJQUFJLENBQUNFLFNBQVMsQ0FBQzhJLENBQUMsQ0FBQztJQUFBLEVBQUM7SUFFckYsSUFBSXZCLE9BQU8sRUFBRTtNQUNYVCxNQUFNLENBQUNVLElBQUksQ0FBQztRQUNWQyxPQUFPLEVBQUUsd0NBQXdDLEdBQUczSCxJQUFJLENBQUNFLFNBQVMsQ0FBQzJELE1BQU0sUUFBSyxFQUFFLENBQUM7UUFDakZwRCxJQUFJLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUNBLE9BQU91RyxNQUFNO0FBQ2YsQ0FBQyxDOztBQ2Y0QztBQUV0QyxJQUFNcEMsaUNBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSW1DLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQ3ZFLElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJM0UsUUFBUSxDQUFDbEIsS0FBSyxDQUFDLElBQUlnQixLQUFLLENBQUMwQixNQUFNLENBQUNlLGdCQUFnQixFQUFFLENBQUMsRUFBRTtJQUN2RCxJQUFNNkMsT0FBTyxHQUFJdEcsS0FBSyxJQUFJMEMsTUFBTSxDQUFDZSxnQkFBZ0IsRUFBRztJQUVwRCxJQUFJNkMsT0FBTyxFQUFFO01BQ1hULE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1FBQ1ZDLE9BQU8sRUFBRSxvQkFBb0IsR0FBRzlELE1BQU0sQ0FBQ2UsZ0JBQWdCLEVBQUU7UUFDekRuRSxJQUFJLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBLE9BQU91RyxNQUFNO0FBQ2YsQ0FBQyxDOztBQ2pCNEM7QUFFdEMsSUFBTW5DLGlDQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlrQyxTQUFTLEVBQUU1RixLQUFLLEVBQUUwQyxNQUFNLEVBQUVoRCxHQUFHLEVBQUVKLElBQUksRUFBSztFQUN2RSxJQUFNdUcsTUFBTSxHQUFHLEVBQUU7RUFFakIsSUFBSTNFLFFBQVEsQ0FBQ2xCLEtBQUssQ0FBQyxJQUFJZ0IsS0FBSyxDQUFDMEIsTUFBTSxDQUFDZ0IsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFO0lBQ3ZELElBQU00QyxPQUFPLEdBQUl0RyxLQUFLLElBQUkwQyxNQUFNLENBQUNnQixnQkFBZ0IsRUFBRztJQUVwRCxJQUFJNEMsT0FBTyxFQUFFO01BQ1hULE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1FBQ1ZDLE9BQU8sRUFBRSx1QkFBdUIsR0FBRzlELE1BQU0sQ0FBQ2dCLGdCQUFnQixFQUFFO1FBQzVEcEUsSUFBSSxFQUFFQTtNQUNSLENBQUMsQ0FBQztJQUNKO0VBQ0Y7RUFFQSxPQUFPdUcsTUFBTTtBQUNmLENBQUMsQzs7QUNqQjRDO0FBRXRDLElBQU1sQyxhQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSWlDLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQzdELElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJN0UsS0FBSyxDQUFDMEIsTUFBTSxDQUFDaUIsTUFBTSxFQUFFLENBQUMsSUFBSXRDLFFBQVEsQ0FBQ3JCLEtBQUssQ0FBQyxFQUFFO0lBQzdDLElBQUl3RyxPQUFPO0lBQ1gsSUFBSXNCLE1BQU07SUFFVixJQUFJcEYsTUFBTSxDQUFDa0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO01BQzVCa0UsTUFBTSxHQUFHLElBQUlDLE1BQU0sQ0FBQywwSUFBMEksQ0FBQztNQUMvSnZCLE9BQU8sR0FBRywrQkFBK0I7SUFDM0M7SUFFQSxJQUFJOUQsTUFBTSxDQUFDa0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO01BQzFCa0UsTUFBTSxHQUFHLElBQUlDLE1BQU0sQ0FBQyw2aERBQW9kLENBQUM7TUFDemV2QixPQUFPLEdBQUcsMkJBQTJCO0lBQ3ZDO0lBRUEsSUFBSTlELE1BQU0sQ0FBQ2tCLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtNQUMzQmtFLE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUMsOERBQThELENBQUM7TUFDbkZ2QixPQUFPLEdBQUcsNEJBQTRCO0lBQ3hDO0lBRUEsSUFBTUYsT0FBTyxHQUFHdEYsS0FBSyxDQUFDOEcsTUFBTSxDQUFDLElBQUksQ0FBQ0EsTUFBTSxDQUFDRSxJQUFJLENBQUNoSSxLQUFLLENBQUM7SUFFcEQsSUFBSXNHLE9BQU8sRUFBRTtNQUNYVCxNQUFNLENBQUNVLElBQUksQ0FBQztRQUNWQyxPQUFPLEVBQUVBLE9BQU87UUFDaEJsSCxJQUFJLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBLE9BQU91RyxNQUFNO0FBQ2YsQ0FBQyxDOztBQ25DNEI7QUFDYztBQUVwQyxJQUFNaEMsS0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUkrQixTQUFTLEVBQUU1RixLQUFLLEVBQUUwQyxNQUFNLEVBQUs7RUFDL0MsSUFBTW1ELE1BQU0sR0FBRyxFQUFFO0VBRWpCLElBQUk3RSxLQUFLLENBQUMwQixNQUFNLE1BQUcsRUFBRSxDQUFDLEVBQUU7SUFDdEIsSUFBSXpCLE1BQU0sQ0FBQ3lCLE1BQU0sQ0FBQzBDLElBQUksRUFBRSxDQUFDLElBQUluRSxNQUFNLENBQUN5QixNQUFNLFFBQUssRUFBRSxDQUFDLEVBQUU7TUFDbEQsT0FBT21ELE1BQU07SUFDZjtJQUVBLElBQU1vQyxRQUFRLEdBQUcsSUFBSWxDLElBQUksQ0FBQztNQUFFckQsTUFBTSxFQUFFQSxNQUFNLE1BQUcsRUFBRTtNQUFFc0QsVUFBVSxFQUFFaEcsS0FBSztNQUFFa0csU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUFDO0lBQ3ZGLElBQU1nQyxRQUFRLEdBQUdELFFBQVEsQ0FBQzdCLFFBQVEsRUFBRTtJQUNwQzZCLFFBQVEsQ0FBQ3ZDLE9BQU8sRUFBRTtJQUVsQixJQUFJeUMsVUFBVSxHQUFHLEVBQUU7SUFDbkIsSUFBSUMsVUFBVSxHQUFHLEVBQUU7SUFFbkIsSUFBSXBILEtBQUssQ0FBQzBCLE1BQU0sQ0FBQzBDLElBQUksRUFBRSxDQUFDLEVBQUU7TUFDeEIsSUFBTWlELFVBQVUsR0FBRyxJQUFJdEMsSUFBSSxDQUFDO1FBQUVyRCxNQUFNLEVBQUVBLE1BQU0sQ0FBQzBDLElBQUksRUFBRTtRQUFFWSxVQUFVLEVBQUVoRyxLQUFLO1FBQUVrRyxTQUFTLEVBQUU7TUFBTSxDQUFDLENBQUM7TUFDM0ZpQyxVQUFVLEdBQUdFLFVBQVUsQ0FBQ2pDLFFBQVEsRUFBRTtNQUNsQ2lDLFVBQVUsQ0FBQzNDLE9BQU8sRUFBRTtJQUN0QjtJQUVBLElBQUkxRSxLQUFLLENBQUMwQixNQUFNLFFBQUssRUFBRSxDQUFDLEVBQUU7TUFDeEIsSUFBTTRGLFVBQVUsR0FBRyxJQUFJdkMsSUFBSSxDQUFDO1FBQUVyRCxNQUFNLEVBQUVBLE1BQU0sUUFBSyxFQUFFO1FBQUVzRCxVQUFVLEVBQUVoRyxLQUFLO1FBQUVrRyxTQUFTLEVBQUU7TUFBTSxDQUFDLENBQUM7TUFDM0ZrQyxVQUFVLEdBQUdFLFVBQVUsQ0FBQ2xDLFFBQVEsRUFBRTtNQUNsQ2tDLFVBQVUsQ0FBQzVDLE9BQU8sRUFBRTtJQUN0QjtJQUVBLElBQUloRCxNQUFNLE1BQUcsRUFBRSxLQUFLLElBQUksRUFBRTtNQUN4QixPQUFPeUYsVUFBVTtJQUNuQjtJQUVBLElBQUl6RixNQUFNLE1BQUcsRUFBRSxLQUFLLEtBQUssRUFBRTtNQUN6QixPQUFPMEYsVUFBVTtJQUNuQjtJQUVBLElBQUlGLFFBQVEsQ0FBQzlJLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDekIsT0FBTytJLFVBQVU7SUFDbkI7SUFFQSxJQUFJRCxRQUFRLENBQUM5SSxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3ZCLE9BQU9nSixVQUFVO0lBQ25CO0VBQ0Y7RUFFQSxPQUFPdkMsTUFBTTtBQUNmLENBQUMsQzs7QUNoRDJDO0FBRXJDLElBQU01QixpQkFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUkyQixTQUFTLEVBQUU1RixLQUFLLEVBQUUwQyxNQUFNLEVBQUVoRCxHQUFHLEVBQUVKLElBQUksRUFBSztFQUMvRCxJQUFNdUcsTUFBTSxHQUFHLEVBQUU7RUFFakIsSUFBSXRFLE9BQU8sQ0FBQ3ZCLEtBQUssQ0FBQyxJQUFJZ0IsS0FBSyxDQUFDMEIsTUFBTSxDQUFDdUIsUUFBUSxFQUFFLENBQUMsRUFBRTtJQUM5QyxJQUFNcUMsT0FBTyxHQUFJdEcsS0FBSyxDQUFDWixNQUFNLEdBQUdzRCxNQUFNLENBQUN1QixRQUFRLEVBQUc7SUFFbEQsSUFBSXFDLE9BQU8sRUFBRTtNQUNYVCxNQUFNLENBQUNVLElBQUksQ0FBQztRQUNWQyxPQUFPLEVBQUUsb0JBQW9CLEdBQUc5RCxNQUFNLENBQUN1QixRQUFRLEVBQUUsR0FBRyxRQUFRO1FBQzVEM0UsSUFBSSxFQUFFQTtNQUNSLENBQUMsQ0FBQztJQUNKO0VBQ0Y7RUFFQSxPQUFPdUcsTUFBTTtBQUNmLENBQUMsQzs7QUNqQjRDO0FBRXRDLElBQU0zQixtQkFBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUkwQixTQUFTLEVBQUU1RixLQUFLLEVBQUUwQyxNQUFNLEVBQUVoRCxHQUFHLEVBQUVKLElBQUksRUFBSztFQUNoRSxJQUFNdUcsTUFBTSxHQUFHLEVBQUU7RUFFakIsSUFBSXhFLFFBQVEsQ0FBQ3JCLEtBQUssQ0FBQyxJQUFJZ0IsS0FBSyxDQUFDMEIsTUFBTSxDQUFDd0IsU0FBUyxFQUFFLENBQUMsRUFBRTtJQUNoRGxFLEtBQUssR0FBR0EsS0FBSyxDQUFDcUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBQztJQUN2QyxJQUFNQyxPQUFPLEdBQUl0RyxLQUFLLENBQUNaLE1BQU0sR0FBR3NELE1BQU0sQ0FBQ3dCLFNBQVMsRUFBRztJQUVuRCxJQUFJb0MsT0FBTyxFQUFFO01BQ1hULE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1FBQ1ZDLE9BQU8sRUFBRSxrQkFBa0IsR0FBRzlELE1BQU0sQ0FBQ3dCLFNBQVMsRUFBRSxHQUFHLGtCQUFrQjtRQUNyRTVFLElBQUksRUFBRUE7TUFDUixDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUEsT0FBT3VHLE1BQU07QUFDZixDQUFDLEM7O0FDbEI0QztBQUV0QyxJQUFNMUIsMkJBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSXlCLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQ3BFLElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJaEYsY0FBUSxDQUFDYixLQUFLLENBQUMsSUFBSWdCLEtBQUssQ0FBQzBCLE1BQU0sQ0FBQ3lCLGFBQWEsRUFBRSxDQUFDLEVBQUU7SUFDcEQsSUFBTW9FLGVBQWUsR0FBRzVJLE1BQU0sQ0FBQ1csSUFBSSxDQUFDTixLQUFLLENBQUMsQ0FBQ1osTUFBTTtJQUNqRCxJQUFNa0gsT0FBTyxHQUFJaUMsZUFBZSxHQUFHN0YsTUFBTSxDQUFDeUIsYUFBYSxFQUFHO0lBRTFELElBQUltQyxPQUFPLEVBQUU7TUFDWFQsTUFBTSxDQUFDVSxJQUFJLENBQUM7UUFDVkMsT0FBTyxFQUFFLG9CQUFvQixHQUFHOUQsTUFBTSxDQUFDeUIsYUFBYSxFQUFFLEdBQUcsYUFBYTtRQUN0RTdFLElBQUksRUFBRUE7TUFDUixDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUEsT0FBT3VHLE1BQU07QUFDZixDQUFDLEM7O0FDbEI0QztBQUV0QyxJQUFNekIsZUFBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUl3QixTQUFTLEVBQUU1RixLQUFLLEVBQUUwQyxNQUFNLEVBQUVoRCxHQUFHLEVBQUVKLElBQUksRUFBSztFQUM5RCxJQUFNdUcsTUFBTSxHQUFHLEVBQUU7RUFFakIsSUFBSTNFLFFBQVEsQ0FBQ2xCLEtBQUssQ0FBQyxJQUFJZ0IsS0FBSyxDQUFDMEIsTUFBTSxDQUFDMEIsT0FBTyxFQUFFLENBQUMsRUFBRTtJQUM5QyxJQUFNb0UsZUFBZSxHQUFHOUYsTUFBTSxDQUFDMEIsT0FBTyxFQUFFO0lBQ3hDLElBQU1rQyxPQUFPLEdBQUl0RyxLQUFLLEdBQUd3SSxlQUFnQjtJQUV6QyxJQUFJbEMsT0FBTyxFQUFFO01BQ1hULE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1FBQ1ZDLE9BQU8sRUFBRSxtQkFBbUIsR0FBR2dDLGVBQWU7UUFDOUNsSixJQUFJLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBLE9BQU91RyxNQUFNO0FBQ2YsQ0FBQyxDOztBQ2xCMkM7QUFFckMsSUFBTXZCLGlCQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSXNCLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQy9ELElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJdEUsT0FBTyxDQUFDdkIsS0FBSyxDQUFDLElBQUlnQixLQUFLLENBQUMwQixNQUFNLENBQUM0QixRQUFRLEVBQUUsQ0FBQyxFQUFFO0lBQzlDLElBQU1nQyxPQUFPLEdBQUl0RyxLQUFLLENBQUNaLE1BQU0sR0FBR3NELE1BQU0sQ0FBQzRCLFFBQVEsRUFBRztJQUVsRCxJQUFJZ0MsT0FBTyxFQUFFO01BQ1hULE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1FBQ1ZDLE9BQU8sRUFBRSxxQkFBcUIsR0FBRzlELE1BQU0sQ0FBQzRCLFFBQVEsRUFBRSxHQUFHLFFBQVE7UUFDN0RoRixJQUFJLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBLE9BQU91RyxNQUFNO0FBQ2YsQ0FBQyxDOztBQ2pCNEM7QUFFdEMsSUFBTXJCLDJCQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlvQixTQUFTLEVBQUU1RixLQUFLLEVBQUUwQyxNQUFNLEVBQUVoRCxHQUFHLEVBQUVKLElBQUksRUFBSztFQUNwRSxJQUFNdUcsTUFBTSxHQUFHLEVBQUU7RUFFakIsSUFBSWhGLGNBQVEsQ0FBQ2IsS0FBSyxDQUFDLElBQUlnQixLQUFLLENBQUMwQixNQUFNLENBQUM4QixhQUFhLEVBQUUsQ0FBQyxFQUFFO0lBQ3BELElBQU0rRCxlQUFlLEdBQUc1SSxNQUFNLENBQUNXLElBQUksQ0FBQ04sS0FBSyxDQUFDLENBQUNaLE1BQU07SUFDakQsSUFBTWtILE9BQU8sR0FBSWlDLGVBQWUsR0FBRzdGLE1BQU0sQ0FBQzhCLGFBQWEsRUFBRztJQUUxRCxJQUFJOEIsT0FBTyxFQUFFO01BQ1hULE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1FBQ1ZDLE9BQU8sRUFBRSxxQkFBcUIsR0FBRzlELE1BQU0sQ0FBQzhCLGFBQWEsRUFBRSxHQUFHLGFBQWE7UUFDdkVsRixJQUFJLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBLE9BQU91RyxNQUFNO0FBQ2YsQ0FBQyxDOztBQ2xCNEM7QUFFdEMsSUFBTXBCLHFCQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSW1CLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQ2pFLElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJM0UsUUFBUSxDQUFDbEIsS0FBSyxDQUFDLElBQUlnQixLQUFLLENBQUMwQixNQUFNLENBQUMrQixVQUFVLEVBQUUsQ0FBQyxFQUFFO0lBQ2pELElBQU1nRSxZQUFZLEdBQUl6SSxLQUFLLEdBQUcwQyxNQUFNLENBQUMrQixVQUFVLEVBQUUsS0FBS3RFLElBQUksQ0FBQ2lCLEtBQUssQ0FBQ3BCLEtBQUssR0FBRzBDLE1BQU0sQ0FBQytCLFVBQVUsRUFBRSxDQUFFO0lBQzlGLElBQU02QixPQUFPLEdBQUksQ0FBQ21DLFlBQVksSUFBSXpJLEtBQUssQ0FBQzBJLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsR0FBRyxDQUFFO0lBRWpFLElBQUlyQyxPQUFPLEVBQUU7TUFDWFQsTUFBTSxDQUFDVSxJQUFJLENBQUM7UUFDVkMsT0FBTyxFQUFFLHNCQUFzQixHQUFHOUQsTUFBTSxDQUFDK0IsVUFBVSxFQUFFO1FBQ3JEbkYsSUFBSSxFQUFFQTtNQUNSLENBQUMsQ0FBQztJQUNKO0VBQ0Y7RUFFQSxPQUFPdUcsTUFBTTtBQUNmLENBQUMsQzs7QUNsQmdDO0FBQ0U7QUFFNUIsSUFBTW5CLE9BQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFJa0IsU0FBUyxFQUFFNUYsS0FBSyxFQUFFMEMsTUFBTSxFQUFFaEQsR0FBRyxFQUFFSixJQUFJLEVBQUs7RUFDMUQsSUFBTXVHLE1BQU0sR0FBRyxFQUFFO0VBRWpCLElBQUk3RSxLQUFLLENBQUMwQixNQUFNLENBQUNnQyxHQUFHLEVBQUUsQ0FBQyxFQUFFO0lBQ3ZCLElBQU1rRSxTQUFTLEdBQUdoRCxTQUFTLENBQUNRLFFBQVEsQ0FBQ3BHLEtBQUssRUFBRSxJQUFJeUMsVUFBTSxDQUFDQyxNQUFNLENBQUNnQyxHQUFHLEVBQUUsQ0FBQyxFQUFFaEYsR0FBRyxFQUFFSixJQUFJLENBQUM7SUFFaEYsSUFBTWdILE9BQU8sR0FBR3NDLFNBQVMsQ0FBQ3hKLE1BQU0sS0FBSyxDQUFDO0lBRXRDLElBQUlrSCxPQUFPLEVBQUU7TUFDWFQsTUFBTSxDQUFDVSxJQUFJLENBQUM7UUFDVkMsT0FBTyxFQUFFLGdEQUFnRCxHQUFHM0gsSUFBSSxDQUFDRSxTQUFTLENBQUMyRCxNQUFNLENBQUNnQyxHQUFHLEVBQUUsQ0FBQztRQUN4RnBGLElBQUksRUFBRUE7TUFDUixDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUEsT0FBT3VHLE1BQU07QUFDZixDQUFDLEM7O0FDcEJrQztBQUNOO0FBRXRCLElBQU1MLFdBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFJSSxTQUFTLEVBQUU1RixLQUFLLEVBQUUwQyxNQUFNLEVBQUVoRCxHQUFHLEVBQUVKLElBQUksRUFBSztFQUM1RCxJQUFNdUcsTUFBTSxHQUFHLEVBQUU7RUFFakIsSUFBSTdFLEtBQUssQ0FBQzBCLE1BQU0sQ0FBQzhDLEtBQUssRUFBRSxDQUFDLEVBQUU7SUFDekIsSUFBSWtCLE9BQU8sR0FBRyxDQUFDO0lBRWZoRSxNQUFNLENBQUM4QyxLQUFLLEVBQUUsQ0FBQ3BELE9BQU8sQ0FBQyxVQUFDTSxNQUFNLEVBQUs7TUFDakMsSUFBTW1HLFdBQVcsR0FBRyxJQUFJOUMsSUFBSSxDQUFDO1FBQUVyRCxNQUFNLEVBQUVBLE1BQU07UUFBRXNELFVBQVUsRUFBRWhHLEtBQUs7UUFBRWtHLFNBQVMsRUFBRTtNQUFNLENBQUMsQ0FBQztNQUNyRixJQUFNNEMsV0FBVyxHQUFHRCxXQUFXLENBQUN6QyxRQUFRLEVBQUU7TUFDMUN5QyxXQUFXLENBQUNuRCxPQUFPLEVBQUU7TUFFckIsSUFBSW9ELFdBQVcsQ0FBQzFKLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDNUJzSCxPQUFPLEVBQUU7TUFDWDtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUlBLE9BQU8sS0FBSyxDQUFDLEVBQUU7TUFDakJiLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1FBQ1ZDLE9BQU8sRUFBRSw0RkFBNEYsR0FBR0UsT0FBTyxHQUFHLGtCQUFrQjtRQUNwSXBILElBQUksRUFBRUE7TUFDUixDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUEsT0FBT3VHLE1BQU07QUFDZixDQUFDLEM7O0FDNUI0QztBQUV0QyxJQUFNaEIsZUFBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUllLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQzlELElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJeEUsUUFBUSxDQUFDckIsS0FBSyxDQUFDLElBQUlnQixLQUFLLENBQUMwQixNQUFNLENBQUNtQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO0lBQzlDLElBQU1pRCxNQUFNLEdBQUcsSUFBSUMsTUFBTSxDQUFDckYsTUFBTSxDQUFDbUMsT0FBTyxFQUFFLENBQUM7SUFDM0MsSUFBTXlCLE9BQU8sR0FBRyxDQUFDd0IsTUFBTSxDQUFDRSxJQUFJLENBQUNoSSxLQUFLLENBQUM7SUFFbkMsSUFBSXNHLE9BQU8sRUFBRTtNQUNYVCxNQUFNLENBQUNVLElBQUksQ0FBQztRQUNWQyxPQUFPLEVBQUUsdUJBQXVCLEdBQUc5RCxNQUFNLENBQUNtQyxPQUFPLEVBQUU7UUFDbkR2RixJQUFJLEVBQUVBO01BQ1IsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBLE9BQU91RyxNQUFNO0FBQ2YsQ0FBQyxDOzs7QUNsQjRDO0FBQ2hCO0FBRXRCLElBQU1mLG1DQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUljLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRXBELElBQUksRUFBSztFQUNuRSxJQUFJdUcsTUFBTSxHQUFHLEVBQUU7RUFFZixJQUFJaEYsY0FBUSxDQUFDYixLQUFLLENBQUMsSUFBSWdCLEtBQUssQ0FBQzBCLE1BQU0sQ0FBQ29DLGlCQUFpQixFQUFFLENBQUMsRUFBRTtJQUN4RCxJQUFNQSxrQkFBaUIsR0FBR3BDLE1BQU0sQ0FBQ29DLGlCQUFpQixFQUFFO0lBRXBEbkYsTUFBTSxDQUFDVyxJQUFJLENBQUNOLEtBQUssQ0FBQyxDQUFDb0MsT0FBTyxDQUFDLFVBQUMyRyxZQUFZLEVBQUs7TUFDM0NwSixNQUFNLENBQUNXLElBQUksQ0FBQ3dFLGtCQUFpQixDQUFDLENBQUMxQyxPQUFPLENBQUMsVUFBQ3lDLE9BQU8sRUFBSztRQUNsRCxJQUFNaUQsTUFBTSxHQUFHLElBQUlDLE1BQU0sQ0FBQ2xELE9BQU8sQ0FBQztRQUNsQyxJQUFJaUQsTUFBTSxDQUFDRSxJQUFJLENBQUNlLFlBQVksQ0FBQyxFQUFFO1VBQzdCLElBQU1yRyxPQUFNLEdBQUdvQyxrQkFBaUIsQ0FBQ0QsT0FBTyxDQUFDO1VBRXpDLElBQU1tRSxNQUFNLEdBQUcsSUFBSWpELElBQUksQ0FBQztZQUN0QnJELE1BQU0sRUFBRUEsT0FBTTtZQUNkc0QsVUFBVSxFQUFFaEcsS0FBSyxDQUFDK0ksWUFBWSxDQUFDO1lBQy9CN0MsU0FBUyxFQUFFO1VBQ2IsQ0FBQyxDQUFDO1VBRUYsSUFBTStDLFlBQVksR0FBR0QsTUFBTSxDQUFDNUMsUUFBUSxFQUFFLENBQUM4QyxHQUFHLENBQUMsVUFBQ0MsS0FBSyxFQUFLO1lBQ3BELE9BQU87Y0FDTDNDLE9BQU8sRUFBRTJDLEtBQUssQ0FBQzNDLE9BQU87Y0FDdEJsSCxJQUFJLEVBQUVBLElBQUksR0FBRyxHQUFHLEdBQUd5SjtZQUNyQixDQUFDO1VBQ0gsQ0FBQyxDQUFDO1VBRUZsRCxNQUFNLE1BQUFyRCxNQUFBLENBQUEwQywyQkFBQSxDQUFPVyxNQUFNLEdBQUFYLDJCQUFBLENBQUsrRCxZQUFZLEVBQUM7VUFFckNELE1BQU0sQ0FBQ3RELE9BQU8sRUFBRTtRQUNsQjtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUEsT0FBT0csTUFBTTtBQUNmLENBQUMsQzs7QUNyQzRDO0FBRXRDLElBQU1aLGlCQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSVcsU0FBUyxFQUFFNUYsS0FBSyxFQUFFMEMsTUFBTSxFQUFFaEQsR0FBRyxFQUFFSixJQUFJLEVBQUs7RUFDL0QsSUFBTXVHLE1BQU0sR0FBRyxFQUFFO0VBRWpCLElBQUloRixjQUFRLENBQUNiLEtBQUssQ0FBQyxJQUFJZ0IsS0FBSyxDQUFDMEIsTUFBTSxDQUFDdUMsUUFBUSxFQUFFLENBQUMsRUFBRTtJQUMvQyxJQUFNbUMsaUJBQWlCLEdBQUcsRUFBRTtJQUM1QixJQUFNOUcsSUFBSSxHQUFHWCxNQUFNLENBQUNXLElBQUksQ0FBQ04sS0FBSyxDQUFDO0lBRS9CMEMsTUFBTSxDQUFDdUMsUUFBUSxFQUFFLENBQUM3QyxPQUFPLENBQUMsVUFBQzFDLEdBQUcsRUFBSztNQUNqQyxJQUFJLENBQUNZLElBQUksQ0FBQ3FJLFFBQVEsQ0FBQ2pKLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCMEgsaUJBQWlCLENBQUNiLElBQUksQ0FBQzdHLEdBQUcsQ0FBQztNQUM3QjtJQUNGLENBQUMsQ0FBQztJQUVGLElBQU00RyxPQUFPLEdBQUdjLGlCQUFpQixDQUFDaEksTUFBTSxHQUFHLENBQUM7SUFFNUMsSUFBSWtILE9BQU8sRUFBRTtNQUNYVCxNQUFNLENBQUNVLElBQUksQ0FBQztRQUNWQyxPQUFPLEVBQUUscUNBQXFDLEdBQUdZLGlCQUFpQixDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdFbEksSUFBSSxFQUFFQTtNQUNSLENBQUMsQ0FBQztJQUNKO0VBQ0Y7RUFFQSxPQUFPdUcsTUFBTTtBQUNmLENBQUMsQzs7QUMxQnVHO0FBRWpHLElBQU1sRSxTQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBSWlFLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQzNELElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJbkQsTUFBTSxDQUFDNEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ3hCLE9BQU9PLE1BQU07RUFDZjtFQUVBLElBQUk3RSxLQUFLLENBQUMwQixNQUFNLENBQUNmLElBQUksRUFBRSxDQUFDLEVBQUU7SUFDeEIsSUFBTXlILEtBQUssR0FBRztNQUNaQyxNQUFNLEVBQUUsU0FBQUEsT0FBQXJKLEtBQUs7UUFBQSxPQUFJcUIsUUFBUSxDQUFDckIsS0FBSyxDQUFDO01BQUE7TUFDaENFLE1BQU0sRUFBRSxTQUFBQSxPQUFBRixLQUFLO1FBQUEsT0FBSWtCLFFBQVEsQ0FBQ2xCLEtBQUssQ0FBQztNQUFBO01BQ2hDc0osT0FBTyxFQUFFLFNBQUFBLFFBQUF0SixLQUFLO1FBQUEsT0FBSW1CLFNBQVMsQ0FBQ25CLEtBQUssQ0FBQztNQUFBO01BQ2xDLFdBQVMsU0FBQXVKLFFBQUF2SixLQUFLO1FBQUEsT0FBSXNCLFNBQVMsQ0FBQ3RCLEtBQUssQ0FBQztNQUFBO01BQ2xDZixLQUFLLEVBQUUsU0FBQUEsTUFBQWUsS0FBSztRQUFBLE9BQUl1QixPQUFPLENBQUN2QixLQUFLLENBQUM7TUFBQTtNQUM5QndKLE1BQU0sRUFBRSxTQUFBQSxPQUFBeEosS0FBSztRQUFBLE9BQUlhLGNBQVEsQ0FBQ2IsS0FBSyxDQUFDO01BQUE7TUFDaEMsUUFBTSxTQUFBeUosTUFBQXpKLEtBQUs7UUFBQSxPQUFJZSxNQUFNLENBQUNmLEtBQUssQ0FBQztNQUFBO0lBQzlCLENBQUM7SUFFRCxJQUFJaUgsS0FBSyxHQUFHLElBQUk7SUFFaEIsSUFBSTFGLE9BQU8sQ0FBQ21CLE1BQU0sQ0FBQ2YsSUFBSSxFQUFFLENBQUMsRUFBRTtNQUMxQnNGLEtBQUssR0FBR3ZFLE1BQU0sQ0FBQ2YsSUFBSSxFQUFFLENBQUNpRyxJQUFJLENBQUMsVUFBQ2pHLElBQUksRUFBSztRQUNuQyxPQUFPeUgsS0FBSyxDQUFDekgsSUFBSSxDQUFDLENBQUMzQixLQUFLLENBQUM7TUFDM0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxNQUFNO01BQ0xpSCxLQUFLLEdBQUdtQyxLQUFLLENBQUMxRyxNQUFNLENBQUNmLElBQUksRUFBRSxDQUFDLENBQUMzQixLQUFLLENBQUM7SUFDckM7SUFFQSxJQUFJLENBQUNpSCxLQUFLLEVBQUU7TUFDVnBCLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1FBQ1ZDLE9BQU8sRUFBRSxrQkFBa0IsR0FBRzlELE1BQU0sQ0FBQ2YsSUFBSSxFQUFFO1FBQzNDckMsSUFBSSxFQUFFQTtNQUNSLENBQUMsQ0FBQztJQUNKO0VBQ0Y7RUFFQSxPQUFPdUcsTUFBTTtBQUNmLENBQUMsQzs7QUN2QzRDO0FBRXRDLElBQU05QixlQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSTZCLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQzlELElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJM0UsUUFBUSxDQUFDbEIsS0FBSyxDQUFDLElBQUlnQixLQUFLLENBQUMwQixNQUFNLENBQUNxQixPQUFPLEVBQUUsQ0FBQyxFQUFFO0lBQzlDLElBQU0yRixlQUFlLEdBQUdoSCxNQUFNLENBQUNxQixPQUFPLEVBQUU7SUFDeEMsSUFBTXVDLE9BQU8sR0FBSXRHLEtBQUssR0FBRzBKLGVBQWdCO0lBRXpDLElBQUlwRCxPQUFPLEVBQUU7TUFDWFQsTUFBTSxDQUFDVSxJQUFJLENBQUM7UUFDVkMsT0FBTyxFQUFFLG9CQUFvQixHQUFHa0QsZUFBZTtRQUMvQ3BLLElBQUksRUFBRUE7TUFDUixDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUEsT0FBT3VHLE1BQU07QUFDZixDQUFDLEM7O0FDbEIyQztBQUVyQyxJQUFNSix1QkFBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlHLFNBQVMsRUFBRTVGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxFQUFLO0VBQ2xFLElBQU11RyxNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJdEUsT0FBTyxDQUFDdkIsS0FBSyxDQUFDLElBQUlnQixLQUFLLENBQUMwQixNQUFNLENBQUMrQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO0lBQ2pELElBQU1rRSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSUMsa0JBQWtCLEdBQUcsS0FBSztJQUU5QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzdKLEtBQUssQ0FBQ1osTUFBTSxFQUFFeUssQ0FBQyxFQUFFLEVBQUU7TUFDckMsSUFBTWxELElBQUksR0FBRzlILElBQUksQ0FBQ0UsU0FBUyxDQUFDaUIsS0FBSyxDQUFDNkosQ0FBQyxDQUFDLENBQUM7TUFDckMsSUFBSUYsSUFBSSxDQUFDaEQsSUFBSSxDQUFDLEVBQUU7UUFDZGlELGtCQUFrQixHQUFHLElBQUk7UUFDekI7TUFDRjtNQUNBRCxJQUFJLENBQUNoRCxJQUFJLENBQUMsR0FBRyxJQUFJO0lBQ25CO0lBRUEsSUFBTUwsT0FBTyxHQUFJc0Qsa0JBQW1CO0lBRXBDLElBQUl0RCxPQUFPLEVBQUU7TUFDWFQsTUFBTSxDQUFDVSxJQUFJLENBQUM7UUFDVkMsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQ2xILElBQUksRUFBRUE7TUFDUixDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUEsT0FBT3VHLE1BQU07QUFDZixDQUFDLEM7OztBQzdCb0Q7QUFDeEI7QUFFdEIsSUFBTWhELHlDQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUkrQyxTQUFTLEVBQUU1RixLQUFLLEVBQUUwQyxNQUFNLEVBQUVoRCxHQUFHLEVBQUVKLElBQUksRUFBSztFQUMzRSxJQUFJdUcsTUFBTSxHQUFHLEVBQUU7RUFFZixJQUFJaEYsY0FBUSxDQUFDYixLQUFLLENBQUMsSUFBSWdCLEtBQUssQ0FBQzBCLE1BQU0sQ0FBQ0csb0JBQW9CLEVBQUUsQ0FBQyxFQUFFO0lBQzNELElBQU1rQyxVQUFVLEdBQUcvRCxLQUFLLENBQUMwQixNQUFNLENBQUNxQyxVQUFVLEVBQUUsQ0FBQyxHQUFHckMsTUFBTSxDQUFDcUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLElBQU1sQyxxQkFBb0IsR0FBR0gsTUFBTSxDQUFDRyxvQkFBb0IsRUFBRTtJQUMxRCxJQUFNaUMsaUJBQWlCLEdBQUdwQyxNQUFNLENBQUNvQyxpQkFBaUIsRUFBRTtJQUVwRCxJQUFJQyxVQUFVLEVBQUU7TUFDZHBGLE1BQU0sQ0FBQ1csSUFBSSxDQUFDTixLQUFLLENBQUMsQ0FBQ29DLE9BQU8sQ0FBQyxVQUFDbUYsUUFBUSxFQUFLO1FBQ3ZDLElBQUl1Qyx3QkFBd0IsR0FBRyxLQUFLO1FBRXBDLElBQUk5SSxLQUFLLENBQUM4RCxpQkFBaUIsQ0FBQyxFQUFFO1VBQzVCbkYsTUFBTSxDQUFDVyxJQUFJLENBQUN3RSxpQkFBaUIsQ0FBQyxDQUFDMUMsT0FBTyxDQUFDLFVBQUN5QyxPQUFPLEVBQUs7WUFDbEQsSUFBTWlELE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUNsRCxPQUFPLENBQUM7WUFDbENpRix3QkFBd0IsR0FBR2hDLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDVCxRQUFRLENBQUM7VUFDbEQsQ0FBQyxDQUFDO1FBQ0o7UUFFQSxJQUFJLENBQUN1Qyx3QkFBd0IsSUFBSWpILHFCQUFvQixLQUFLLEtBQUssSUFBSSxDQUFDckQsTUFBTSxDQUFDdUYsVUFBVSxFQUFFd0MsUUFBUSxDQUFDLEVBQUU7VUFDaEcxQixNQUFNLENBQUNVLElBQUksQ0FBQztZQUNWQyxPQUFPLGdCQUFBaEUsTUFBQSxDQUFlK0UsUUFBUSxpRkFBNkU7WUFDM0dqSSxJQUFJLEVBQUVBO1VBQ1IsQ0FBQyxDQUFDO1FBQ0o7UUFFQSxJQUFJLENBQUN3Syx3QkFBd0IsSUFBSWpKLGNBQVEsQ0FBQ2dDLHFCQUFvQixDQUFDLElBQUksQ0FBQ3JELE1BQU0sQ0FBQ3VGLFVBQVUsRUFBRXdDLFFBQVEsQ0FBQyxFQUFFO1VBQ2hHLElBQU15QixNQUFNLEdBQUcsSUFBSWpELElBQUksQ0FBQztZQUN0QkUsUUFBUSxFQUFFc0IsUUFBUTtZQUNsQjdFLE1BQU0sRUFBRUcscUJBQW9CO1lBQzVCbUQsVUFBVSxFQUFFaEcsS0FBSyxDQUFDdUgsUUFBUSxDQUFDO1lBQzNCckIsU0FBUyxFQUFFO1VBQ2IsQ0FBQyxDQUFDO1VBRUYsSUFBTTZELHdCQUF3QixHQUFHZixNQUFNLENBQUM1QyxRQUFRLEVBQUUsQ0FBQzhDLEdBQUcsQ0FBQyxVQUFDQyxLQUFLLEVBQUs7WUFDaEUsT0FBTztjQUNMM0MsT0FBTyxFQUFFMkMsS0FBSyxDQUFDM0MsT0FBTztjQUN0QmxILElBQUksRUFBRWlJO1lBQ1IsQ0FBQztVQUNILENBQUMsQ0FBQztVQUVGMUIsTUFBTSxNQUFBckQsTUFBQSxDQUFBMEMsMkJBQUEsQ0FBT1csTUFBTSxHQUFBWCwyQkFBQSxDQUFLNkUsd0JBQXdCLEVBQUM7VUFFakRmLE1BQU0sQ0FBQ3RELE9BQU8sRUFBRTtRQUNsQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQ0Y7RUFFQSxPQUFPRyxNQUFNO0FBQ2YsQ0FBQyxDOztBQ3JEMEM7QUFDUTtBQUNQO0FBQ0s7QUFDTjtBQUN3QjtBQUNGO0FBQ3ZCO0FBQ3VCO0FBQ0E7QUFDcEI7QUFDUDtBQUNXO0FBQ0U7QUFDUTtBQUNaO0FBQ0U7QUFDVTtBQUNOO0FBQ2Q7QUFDSTtBQUNJO0FBQ29CO0FBQ2xCO0FBQ1I7QUFDTTtBQUNRO0FBQ2tCO0FBRTFEO0VBQ2JoRCxvQkFBb0IsRUFBRUEseUNBQW9CO0VBQzFDQyxLQUFLLEVBQUVBLFdBQUs7RUFDWkUsS0FBSyxFQUFFQSxXQUFLO0VBQ1osU0FBT0MsV0FBTTtFQUNiQyxRQUFRLEVBQUVBLGlCQUFRO0VBQ2xCRSxpQkFBaUIsRUFBRUEsbUNBQWlCO0VBQ3BDQyxnQkFBZ0IsRUFBRUEsaUNBQWdCO0VBQ2xDLFFBQU1HLFNBQUs7RUFDWEMsZ0JBQWdCLEVBQUVBLGlDQUFnQjtFQUNsQ0MsZ0JBQWdCLEVBQUVBLGlDQUFnQjtFQUNsQ0MsTUFBTSxFQUFFQSxhQUFNO0VBQ2QsTUFBSUUsS0FBRztFQUNQRSxPQUFPLEVBQUVBLGVBQU87RUFDaEJFLFFBQVEsRUFBRUEsaUJBQVE7RUFDbEJDLFNBQVMsRUFBRUEsbUJBQVM7RUFDcEJDLGFBQWEsRUFBRUEsMkJBQWE7RUFDNUJDLE9BQU8sRUFBRUEsZUFBTztFQUNoQkUsUUFBUSxFQUFFQSxpQkFBUTtFQUNsQkMsU0FBUyxFQUFFQSxtQkFBUztFQUNwQkMsYUFBYSxFQUFFQSwyQkFBYTtFQUM1QkMsVUFBVSxFQUFFQSxxQkFBVTtFQUN0QkMsR0FBRyxFQUFFQSxPQUFHO0VBQ1JjLEtBQUssRUFBRUEsV0FBSztFQUNaWCxPQUFPLEVBQUVBLGVBQU87RUFDaEJDLGlCQUFpQixFQUFFQSxtQ0FBaUI7RUFDcENHLFFBQVEsRUFBRUEsaUJBQVE7RUFDbEJ0RCxJQUFJLEVBQUVBLFNBQUk7RUFDVjhELFdBQVcsRUFBRUEsdUJBQVdBO0FBQzFCLENBQUMsRTs7Ozs7QUMxRHlDO0FBQ0U7QUFBQSxJQUV0Q3VFLG1CQUFTO0VBQ2IsU0FBQUEsVUFBQSxFQUFlO0lBQUFySCx3QkFBQSxPQUFBcUgsU0FBQTtJQUNiLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxhQUFLO0VBQ3BCOztFQUVBO0FBQ0Y7QUFDQTtFQUZFckgscUJBQUEsQ0FBQW9ILFNBQUE7SUFBQXRLLEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUFvRyxTQUFVcEcsS0FBSyxFQUFFMEMsTUFBTSxFQUFFaEQsR0FBRyxFQUFFSixJQUFJLEVBQUU7TUFBQSxJQUFBcUcsS0FBQTtNQUNsQyxJQUFJdUUsWUFBWSxHQUFHLEVBQUU7TUFFckIsSUFBTUMsV0FBVyxHQUFHekgsTUFBTSxDQUFDL0QsS0FBSyxFQUFFO01BRWxDLElBQUkyQyxTQUFTLENBQUM2SSxXQUFXLENBQUMsSUFBSUEsV0FBVyxLQUFLLElBQUksRUFBRTtRQUNsRCxPQUFPRCxZQUFZO01BQ3JCO01BRUEsSUFBSTVJLFNBQVMsQ0FBQzZJLFdBQVcsQ0FBQyxJQUFJQSxXQUFXLEtBQUssS0FBSyxFQUFFO1FBQ25ELE9BQU8sQ0FBQztVQUNOM0QsT0FBTyxFQUFFOUQsTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHakMsTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVM7VUFDeEVyRixJQUFJLEVBQUVBO1FBQ1IsQ0FBQyxDQUFDO01BQ0o7TUFFQUssTUFBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDMkosS0FBSyxDQUFDLENBQUM3SCxPQUFPLENBQUMsVUFBQ2dJLFNBQVMsRUFBSztRQUM3QyxJQUFJNUssTUFBTSxDQUFDMkssV0FBVyxFQUFFQyxTQUFTLENBQUMsRUFBRTtVQUNsQyxJQUFNeEUsU0FBUyxHQUFHRCxLQUFJLENBQUNzRSxLQUFLLENBQUNHLFNBQVMsQ0FBQztVQUN2QyxJQUFNQyxlQUFlLEdBQUd6RSxTQUFTLENBQUNELEtBQUksRUFBRTNGLEtBQUssRUFBRTBDLE1BQU0sRUFBRWhELEdBQUcsRUFBRUosSUFBSSxDQUFDO1VBRWpFLElBQUkrSyxlQUFlLEVBQUU7WUFDbkJILFlBQVksTUFBQTFILE1BQUEsQ0FBQTBDLDJCQUFBLENBQU9nRixZQUFZLEdBQUFoRiwyQkFBQSxDQUFLbUYsZUFBZSxFQUFDO1VBQ3REO1FBQ0Y7TUFDRixDQUFDLENBQUM7TUFFRixJQUFJSCxZQUFZLENBQUM5SyxNQUFNLEdBQUcsQ0FBQyxJQUFJc0QsTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ3ZEdUYsWUFBWSxHQUFHLENBQ2I7VUFDRTFELE9BQU8sRUFBRTlELE1BQU0sQ0FBQ2lDLE1BQU0sQ0FBQyxTQUFTLENBQUM7VUFDakNyRixJQUFJLEVBQUVBO1FBQ1IsQ0FBQyxDQUNGO01BQ0g7TUFFQSxPQUFPNEssWUFBWTtJQUNyQjtFQUFDO0VBQUEsT0FBQUYsU0FBQTtBQUFBO0FBR1lBLDRFQUFTLEU7Ozs7SUNuRGxCTSwwQkFBWTtFQUNoQixTQUFBQSxhQUFBLEVBQWU7SUFBQTNILHdCQUFBLE9BQUEySCxZQUFBO0lBQ2IsSUFBSSxDQUFDQyxTQUFTLEdBQUcsRUFBRTtFQUNyQjtFQUFDM0gscUJBQUEsQ0FBQTBILFlBQUE7SUFBQTVLLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF3SyxHQUFJQyxJQUFJLEVBQUV2TCxRQUFRLEVBQUU7TUFDbEIsSUFBSSxDQUFDcUwsU0FBUyxDQUFDaEUsSUFBSSxDQUFDO1FBQUVrRSxJQUFJLEVBQUpBLElBQUk7UUFBRXZMLFFBQVEsRUFBUkE7TUFBUyxDQUFDLENBQUM7SUFDekM7RUFBQztJQUFBUSxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBMEssS0FBTUQsSUFBSSxFQUFFO01BQ1YsSUFBTUYsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxDQUFDakQsTUFBTSxDQUFDLFVBQUFxRCxRQUFRO1FBQUEsT0FBSUEsUUFBUSxDQUFDRixJQUFJLEtBQUtBLElBQUk7TUFBQSxFQUFDO01BRTNFRixTQUFTLENBQUNuSSxPQUFPLENBQUMsVUFBQ3VJLFFBQVEsRUFBSztRQUM5QkEsUUFBUSxDQUFDekwsUUFBUSxFQUFFO01BQ3JCLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQVEsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTBGLFFBQUEsRUFBVztNQUFBLElBQUFDLEtBQUE7TUFDVGhHLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOEIsT0FBTyxDQUFDLFVBQUMxQyxHQUFHLEVBQUs7UUFDakMsT0FBT2lHLEtBQUksQ0FBQ2pHLEdBQUcsQ0FBQztNQUNsQixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQTRLLFlBQUE7QUFBQTtBQUdZQSw0RUFBWSxFOzs7Ozs7Ozs7Ozs7O0FDeEJnQjtBQUNYO0FBQUEsSUFFMUJNLGlCQUFRLDBCQUFBQyxhQUFBO0VBQUFDLGtCQUFBLENBQUFGLFFBQUEsRUFBQUMsYUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBQ1osU0FBQUEsU0FBYUssTUFBTSxFQUFFO0lBQUEsSUFBQXRGLEtBQUE7SUFBQWhELHdCQUFBLE9BQUFpSSxRQUFBO0lBQ25CakYsS0FBQSxHQUFBb0YsTUFBQSxDQUFBakwsSUFBQTtJQUNBNkYsS0FBQSxDQUFLdUYsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUk7SUFDdkJ2RixLQUFBLENBQUtqRCxNQUFNLEdBQUd1SSxNQUFNLENBQUN2SSxNQUFNO0lBQzNCaUQsS0FBQSxDQUFLM0YsS0FBSyxHQUFHaUwsTUFBTSxDQUFDakwsS0FBSyxJQUFJK0MsU0FBUztJQUN0QzRDLEtBQUEsQ0FBS3dGLFFBQVEsR0FBRyxJQUFJO0lBQ3BCeEYsS0FBQSxDQUFLckcsSUFBSSxHQUFHMkwsTUFBTSxDQUFDM0wsSUFBSSxJQUFJcUcsS0FBQSxDQUFLdUYsSUFBSSxDQUFDakYsUUFBUTtJQUM3Q04sS0FBQSxDQUFLeUYsTUFBTSxHQUFHSCxNQUFNLENBQUNHLE1BQU0sSUFBSSxJQUFJO0lBQ25DekYsS0FBQSxDQUFLMEYsUUFBUSxHQUFHLEVBQUU7SUFDbEIxRixLQUFBLENBQUsyRixFQUFFLEdBQUcsSUFBSTtJQUNkM0YsS0FBQSxDQUFLNEYsSUFBSSxFQUFFO0lBQUEsT0FBQTVGLEtBQUE7RUFDYjs7RUFFQTtBQUNGO0FBQ0E7RUFGRS9DLHFCQUFBLENBQUFnSSxRQUFBO0lBQUFsTCxHQUFBO0lBQUFNLEtBQUEsRUFHQSxTQUFBdUwsS0FBQSxFQUFRO01BQUEsSUFBQUMsTUFBQTtNQUNOLElBQUksQ0FBQ0MsUUFBUSxFQUFFO01BQ2YsSUFBSSxDQUFDQyxlQUFlLEVBQUU7TUFDdEIsSUFBSSxDQUFDQyxPQUFPLEVBQUU7TUFDZCxJQUFJLENBQUNDLGVBQWUsRUFBRTtNQUV0QixJQUFJLElBQUksQ0FBQ1YsSUFBSSxDQUFDdEcsT0FBTyxDQUFDaUgsUUFBUSxFQUFFO1FBQzlCLElBQUksQ0FBQ0MsS0FBSyxFQUFFO01BQ2Q7TUFFQSxJQUFJLENBQUN0QixFQUFFLENBQUMsUUFBUSxFQUFFLFlBQU07UUFDdEIsSUFBSWdCLE1BQUksQ0FBQ0osTUFBTSxFQUFFO1VBQ2ZJLE1BQUksQ0FBQ0osTUFBTSxDQUFDVyxhQUFhLEVBQUU7UUFDN0I7TUFDRixDQUFDLENBQUM7SUFDSjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBck0sR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQThMLE1BQUEsRUFBUyxDQUFDOztJQUVWO0FBQ0Y7QUFDQTtFQUZFO0lBQUFwTSxHQUFBO0lBQUFNLEtBQUEsRUFHQSxTQUFBZ00sT0FBQSxFQUFVO01BQ1IsT0FBTyxJQUFJLENBQUMxTSxJQUFJLENBQUMyTSxLQUFLLENBQUMsSUFBSSxDQUFDZixJQUFJLENBQUNnQixhQUFhLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO0lBQ3ZEOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUF6TSxHQUFBO0lBQUFNLEtBQUEsRUFHQSxTQUFBeUwsU0FBQSxFQUFZO01BQ1YsSUFBSSxDQUFDUCxJQUFJLENBQUNPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDMUI7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQS9MLEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUFvTSxXQUFBLEVBQWM7TUFDWixJQUFJLENBQUNsQixJQUFJLENBQUNrQixVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzVCOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUExTSxHQUFBO0lBQUFNLEtBQUEsRUFHQSxTQUFBMEwsZ0JBQUEsRUFBbUI7TUFDakIsSUFBSTFMLEtBQUs7TUFFVCxJQUFJLElBQUksQ0FBQzBDLE1BQU0sQ0FBQ2YsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFM0IsS0FBSyxHQUFHLEtBQUs7TUFDbkQsSUFBSSxJQUFJLENBQUMwQyxNQUFNLENBQUNmLElBQUksRUFBRSxLQUFLLFFBQVEsRUFBRTNCLEtBQUssR0FBRyxHQUFHO01BQ2hELElBQUksSUFBSSxDQUFDMEMsTUFBTSxDQUFDZixJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUUzQixLQUFLLEdBQUcsQ0FBQztNQUMvQyxJQUFJLElBQUksQ0FBQzBDLE1BQU0sQ0FBQ2YsSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFM0IsS0FBSyxHQUFHLEVBQUU7TUFDL0MsSUFBSSxJQUFJLENBQUMwQyxNQUFNLENBQUNmLElBQUksRUFBRSxLQUFLLE9BQU8sRUFBRTNCLEtBQUssR0FBRyxFQUFFO01BQzlDLElBQUksSUFBSSxDQUFDMEMsTUFBTSxDQUFDZixJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUUzQixLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQy9DLElBQUksSUFBSSxDQUFDMEMsTUFBTSxDQUFDZixJQUFJLEVBQUUsS0FBSyxNQUFNLEVBQUUzQixLQUFLLEdBQUcsSUFBSTtNQUUvQyxJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztJQUNwQjtFQUFDO0lBQUFOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE0TCxnQkFBQSxFQUFtQjtNQUNqQjtNQUNBO01BQ0E7O01BRUEsSUFBSTVLLEtBQUssQ0FBQyxJQUFJLENBQUMwQixNQUFNLFdBQVEsRUFBRSxDQUFDLEVBQUU7UUFDaEMsSUFBSTFCLEtBQUssQ0FBQyxJQUFJLENBQUMwQixNQUFNLFFBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUNBLE1BQU0sUUFBSyxFQUFFLENBQUNpRyxRQUFRLENBQUMsSUFBSSxDQUFDakcsTUFBTSxXQUFRLEVBQUUsQ0FBQyxFQUFFO1VBQ3BGO1FBQ0Y7UUFFQSxJQUFNMkosYUFBYSxHQUFHLElBQUksQ0FBQ25CLElBQUksQ0FBQ3RGLFNBQVMsQ0FBQ1EsUUFBUSxDQUFDLElBQUksQ0FBQzFELE1BQU0sV0FBUSxFQUFFLEVBQUUsSUFBSSxDQUFDQSxNQUFNLEVBQUUsSUFBSSxDQUFDc0osTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDMU0sSUFBSSxDQUFDO1FBQ2hILElBQU1nTixZQUFZLEdBQUdELGFBQWEsQ0FBQ2pOLE1BQU0sS0FBSyxDQUFDO1FBRS9DLElBQUlrTixZQUFZLEVBQUU7VUFDaEIsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDN0osTUFBTSxXQUFRLEVBQUUsRUFBRSxLQUFLLENBQUM7UUFDN0M7TUFDRjtJQUNGOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUFoRCxHQUFBO0lBQUFNLEtBQUEsRUFHQSxTQUFBd00sU0FBQSxFQUFZO01BQ1YsT0FBTyxJQUFJLENBQUN4TSxLQUFLO0lBQ25COztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUFOLEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUF1TSxTQUFVRSxRQUFRLEVBQXlCO01BQUEsSUFBdkJDLGNBQWMsR0FBQTNLLFNBQUEsQ0FBQTNDLE1BQUEsUUFBQTJDLFNBQUEsUUFBQWdCLFNBQUEsR0FBQWhCLFNBQUEsTUFBRyxJQUFJO01BQ3ZDLElBQUksQ0FBQy9CLEtBQUssR0FBR3lNLFFBQVE7TUFDckIsSUFBSSxDQUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQztNQUV0QixJQUFJZ0MsY0FBYyxFQUFFO1FBQ2xCLElBQUksQ0FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUM7TUFDckI7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBaEwsR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQStMLGNBQUEsRUFBaUIsQ0FDakI7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQXJNLEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUFvRyxTQUFBLEVBQVk7TUFDVixJQUFJLENBQUMsSUFBSSxDQUFDK0UsUUFBUSxFQUFFO1FBQ2xCLE9BQU8sRUFBRTtNQUNYO01BRUEsT0FBTyxJQUFJLENBQUNELElBQUksQ0FBQ3RGLFNBQVMsQ0FBQ1EsUUFBUSxDQUFDLElBQUksQ0FBQ29HLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQzlKLE1BQU0sRUFBRSxJQUFJLENBQUNzSixNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMxTSxJQUFJLENBQUM7SUFDN0Y7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQUksR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQTJMLFFBQUEsRUFBVyxDQUFDOztJQUVaO0FBQ0Y7QUFDQTtFQUZFO0lBQUFqTSxHQUFBO0lBQUFNLEtBQUEsRUFHQSxTQUFBMk0sU0FBQSxFQUFZO01BQ1YsSUFBSSxJQUFJLENBQUN4QixRQUFRLEtBQUssS0FBSyxFQUFFO1FBQzNCLElBQUksQ0FBQ0EsUUFBUSxHQUFHLElBQUk7UUFDcEIsSUFBSSxDQUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDO01BQ3JCO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQWhMLEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUE0TSxXQUFBLEVBQWM7TUFDWixJQUFJLElBQUksQ0FBQ3pCLFFBQVEsS0FBSyxJQUFJLEVBQUU7UUFDMUIsSUFBSSxDQUFDQSxRQUFRLEdBQUcsS0FBSztRQUNyQixJQUFJLENBQUNULElBQUksQ0FBQyxRQUFRLENBQUM7TUFDckI7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBaEwsR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQTBGLFFBQUEsRUFBVztNQUFBLElBQUFtSCxNQUFBO01BQ1QsSUFBSSxDQUFDeEIsUUFBUSxDQUFDakosT0FBTyxDQUFDLFVBQUMwSyxLQUFLLEVBQUs7UUFDL0JBLEtBQUssQ0FBQ3BILE9BQU8sRUFBRTtNQUNqQixDQUFDLENBQUM7TUFFRixJQUFJLENBQUMwRyxVQUFVLEVBQUU7TUFFakIsSUFBSSxJQUFJLENBQUNkLEVBQUUsRUFBRTtRQUNYLElBQUksQ0FBQ0EsRUFBRSxDQUFDNUYsT0FBTyxFQUFFO01BQ25CO01BRUEvRixNQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzhCLE9BQU8sQ0FBQyxVQUFDMUMsR0FBRyxFQUFLO1FBQ2pDLE9BQU9tTixNQUFJLENBQUNuTixHQUFHLENBQUM7TUFDbEIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFrTCxRQUFBO0FBQUEsRUE5S29CTixhQUFZO0FBaUxwQk0sd0VBQVEsRTs7OztJQ3BMakJtQyx3QkFBYztFQUFBLFNBQUFBLGVBQUE7SUFBQXBLLHdCQUFBLE9BQUFvSyxjQUFBO0VBQUE7RUFBQW5LLHFCQUFBLENBQUFtSyxjQUFBO0lBQUFyTixHQUFBO0lBQUFNLEtBQUEsRUFDbEIsU0FBQWdOLG1CQUFBLEVBQXNCO01BQ3BCLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzFDRixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixDQUFDO01BQzNDLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBc04sWUFBQSxFQUFlO01BQ2IsT0FBT0osUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQzNDO0VBQUM7SUFBQXpOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF1TixnQkFBQSxFQUFtQjtNQUNqQixPQUFPTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdEM7RUFBQztJQUFBek4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXdOLFVBQVd2QyxNQUFNLEVBQUU7TUFDakIsSUFBTWdDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO01BQzdDRixJQUFJLENBQUNRLFdBQVcsR0FBR3hDLE1BQU0sQ0FBQ3dDLFdBQVc7TUFDckNSLElBQUksQ0FBQ1MsS0FBSyxDQUFDQyxRQUFRLEdBQUcsU0FBUztNQUUvQixJQUFJMUMsTUFBTSxDQUFDMkMsTUFBTSxFQUFFO1FBQ2pCWCxJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUMvQjtNQUVBLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBNk4sa0JBQUEsRUFBcUI7TUFDbkIsSUFBTVosSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDMUNGLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7TUFDMUMsT0FBT0osSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE4TixlQUFBLEVBQWtCO01BQ2hCLElBQU1iLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzFDRixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO01BQ3ZDLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBK04sb0JBQUEsRUFBdUI7TUFDckIsSUFBTWQsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDMUNGLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUM7TUFDN0MsT0FBT0osSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFnTyxnQkFBQSxFQUFtQjtNQUNqQixJQUFNZixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMxQ0YsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQztNQUM3QyxPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQWlPLGdCQUFBLEVBQW1CO01BQ2pCLElBQU1oQixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMxQ0YsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4QyxPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQWtPLGVBQUEsRUFBa0I7TUFDaEIsSUFBTWpCLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzFDRixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO01BQ3ZDLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBbU8sb0JBQXFCbEQsTUFBTSxFQUFFO01BQzNCLElBQU1nQyxJQUFJLEdBQUcsSUFBSSxDQUFDbUIsU0FBUyxDQUFDbkQsTUFBTSxDQUFDO01BQ25DZ0MsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztNQUM1QyxPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXFPLHdCQUFBLEVBQTJCO01BQ3pCLElBQU1wQixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMxQ0YsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQztNQUMvQyxPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXNPLFlBQUEsRUFBZTtNQUNiLE9BQU9wQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdEM7RUFBQztJQUFBek4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQW9PLFVBQVduRCxNQUFNLEVBQUU7TUFDakIsSUFBTWdDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO01BQzdDRixJQUFJLENBQUNzQixZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztNQUVuQyxJQUFJdEQsTUFBTSxDQUFDakwsS0FBSyxFQUFFO1FBQ2hCaU4sSUFBSSxDQUFDak4sS0FBSyxHQUFHaUwsTUFBTSxDQUFDakwsS0FBSztNQUMzQjtNQUVBLElBQUlpTCxNQUFNLENBQUN1RCxFQUFFLEVBQUU7UUFDYnZCLElBQUksQ0FBQ3NCLFlBQVksQ0FBQyxJQUFJLEVBQUV0RCxNQUFNLENBQUNqTCxLQUFLLENBQUM7TUFDdkM7TUFFQWlOLElBQUksQ0FBQ1EsV0FBVyxHQUFHeEMsTUFBTSxDQUFDd0MsV0FBVztNQUNyQyxPQUFPUixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXlPLGVBQWdCeEQsTUFBTSxFQUFFO01BQ3RCLElBQU1nQyxJQUFJLEdBQUcsSUFBSSxDQUFDbUIsU0FBUyxDQUFDbkQsTUFBTSxDQUFDO01BQ25DZ0MsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwQyxPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTBPLHFCQUFzQnpELE1BQU0sRUFBRTtNQUM1QixJQUFNZ0MsSUFBSSxHQUFHLElBQUksQ0FBQ21CLFNBQVMsQ0FBQ25ELE1BQU0sQ0FBQztNQUNuQ2dDLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7TUFDM0MsT0FBT0osSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEyTyxxQkFBQSxFQUF3QjtNQUN0QixPQUFPLGlCQUFpQjtJQUMxQjtFQUFDO0lBQUFqUCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBNE8sZUFBZ0IzRCxNQUFNLEVBQUU7TUFDdEIsSUFBTTNILFdBQVcsR0FBRzRKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNqRDdKLFdBQVcsQ0FBQ21LLFdBQVcsR0FBR3hDLE1BQU0sQ0FBQ3dDLFdBQVc7TUFDNUMsT0FBT25LLFdBQVc7SUFDcEI7RUFBQztJQUFBNUQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTZPLG1CQUFvQjVELE1BQU0sRUFBRTtNQUMxQixJQUFNNkQsT0FBTyxHQUFHNUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BRTdDLElBQU00QixLQUFLLEdBQUc3QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7TUFDaEQ0QixLQUFLLENBQUNSLFlBQVksQ0FBQyxJQUFJLEVBQUV0RCxNQUFNLENBQUN1RCxFQUFFLENBQUM7TUFFbkMsSUFBTVEsS0FBSyxHQUFHOUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO01BQzdDNkIsS0FBSyxDQUFDVCxZQUFZLENBQUMsS0FBSyxFQUFFdEQsTUFBTSxDQUFDdUQsRUFBRSxDQUFDO01BRXBDLElBQU1TLFNBQVMsR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztNQUNoRDhCLFNBQVMsQ0FBQ3hCLFdBQVcsR0FBR3hDLE1BQU0sQ0FBQytELEtBQUs7TUFFcEMsSUFBSS9ELE1BQU0sQ0FBQzJDLE1BQU0sRUFBRTtRQUNqQm9CLEtBQUssQ0FBQzVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUNoQztNQUVBeUIsT0FBTyxDQUFDSSxXQUFXLENBQUNGLEtBQUssQ0FBQztNQUMxQkYsT0FBTyxDQUFDSSxXQUFXLENBQUNILEtBQUssQ0FBQztNQUMxQkMsS0FBSyxDQUFDRSxXQUFXLENBQUNELFNBQVMsQ0FBQztNQUU1QixPQUFPO1FBQUVILE9BQU8sRUFBUEEsT0FBTztRQUFFQyxLQUFLLEVBQUxBLEtBQUs7UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLFNBQVMsRUFBVEE7TUFBVSxDQUFDO0lBQzdDO0VBQUM7SUFBQXZQLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFtUCxnQkFBaUJsRSxNQUFNLEVBQUU7TUFDdkIsSUFBTTZELE9BQU8sR0FBRzVCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUU3QyxJQUFNNEIsS0FBSyxHQUFHN0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO01BQzdDNEIsS0FBSyxDQUFDUixZQUFZLENBQUMsTUFBTSxFQUFFdEQsTUFBTSxDQUFDdEosSUFBSSxDQUFDO01BQ3ZDb04sS0FBSyxDQUFDUixZQUFZLENBQUMsSUFBSSxFQUFFdEQsTUFBTSxDQUFDdUQsRUFBRSxDQUFDO01BRW5DLElBQU1RLEtBQUssR0FBRzlCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztNQUM3QzZCLEtBQUssQ0FBQ1QsWUFBWSxDQUFDLEtBQUssRUFBRXRELE1BQU0sQ0FBQ3VELEVBQUUsQ0FBQztNQUVwQyxJQUFNUyxTQUFTLEdBQUcvQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7TUFDakQ4QixTQUFTLENBQUN4QixXQUFXLEdBQUd4QyxNQUFNLENBQUMrRCxLQUFLO01BRXBDLElBQUkvRCxNQUFNLENBQUMyQyxNQUFNLEVBQUU7UUFDakJvQixLQUFLLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDaEM7TUFFQXlCLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDRixLQUFLLENBQUM7TUFDMUJGLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDSCxLQUFLLENBQUM7TUFDMUJDLEtBQUssQ0FBQ0UsV0FBVyxDQUFDRCxTQUFTLENBQUM7TUFFNUIsT0FBTztRQUFFSCxPQUFPLEVBQVBBLE9BQU87UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBO01BQVUsQ0FBQztJQUM3QztFQUFDO0lBQUF2UCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBb1AsaUJBQWtCbkUsTUFBTSxFQUFFO01BQ3hCLElBQU02RCxPQUFPLEdBQUc1QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFFN0MsSUFBTWtDLE1BQU0sR0FBR25DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztNQUM5Q2tDLE1BQU0sQ0FBQzVCLFdBQVcsR0FBR3hDLE1BQU0sQ0FBQytELEtBQUs7TUFFakMsSUFBSS9ELE1BQU0sQ0FBQzJDLE1BQU0sRUFBRTtRQUNqQnlCLE1BQU0sQ0FBQ2pDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUNqQztNQUVBeUIsT0FBTyxDQUFDSSxXQUFXLENBQUNHLE1BQU0sQ0FBQztNQUUzQixJQUFNQyxNQUFNLEdBQUcsRUFBRTtNQUVqQnJFLE1BQU0sQ0FBQ3NFLE1BQU0sQ0FBQ25OLE9BQU8sQ0FBQyxVQUFDcEMsS0FBSyxFQUFFYixLQUFLLEVBQUs7UUFDdEMsSUFBTXFRLFlBQVksR0FBR3RDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNsRHFDLFlBQVksQ0FBQ3BDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUVuQyxJQUFNb0MsS0FBSyxHQUFHdkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDc0MsS0FBSyxDQUFDbEIsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7UUFDbkNrQixLQUFLLENBQUNsQixZQUFZLENBQUMsSUFBSSxFQUFFdEQsTUFBTSxDQUFDdUQsRUFBRSxHQUFHLEdBQUcsR0FBR3JQLEtBQUssQ0FBQztRQUNqRHNRLEtBQUssQ0FBQ2xCLFlBQVksQ0FBQyxPQUFPLEVBQUV2TyxLQUFLLENBQUM7UUFDbENzUCxNQUFNLENBQUMvSSxJQUFJLENBQUNrSixLQUFLLENBQUM7UUFFbEIsSUFBTVQsS0FBSyxHQUFHOUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDNkIsS0FBSyxDQUFDVCxZQUFZLENBQUMsS0FBSyxFQUFFdEQsTUFBTSxDQUFDdUQsRUFBRSxHQUFHLEdBQUcsR0FBR3JQLEtBQUssQ0FBQztRQUVsRCxJQUFJOEwsTUFBTSxDQUFDeUUsTUFBTSxJQUFJekUsTUFBTSxDQUFDeUUsTUFBTSxDQUFDdlEsS0FBSyxDQUFDLEVBQUU7VUFDekM2UCxLQUFLLENBQUN2QixXQUFXLEdBQUd4QyxNQUFNLENBQUN5RSxNQUFNLENBQUN2USxLQUFLLENBQUM7UUFDMUM7UUFFQTJQLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDTSxZQUFZLENBQUM7UUFDakNBLFlBQVksQ0FBQ04sV0FBVyxDQUFDTyxLQUFLLENBQUM7UUFDL0JELFlBQVksQ0FBQ04sV0FBVyxDQUFDRixLQUFLLENBQUM7TUFDakMsQ0FBQyxDQUFDO01BRUYsT0FBTztRQUFFRixPQUFPLEVBQVBBLE9BQU87UUFBRVEsTUFBTSxFQUFOQTtNQUFPLENBQUM7SUFDNUI7RUFBQztJQUFBNVAsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTJQLG1CQUFvQjFFLE1BQU0sRUFBRTtNQUMxQixJQUFNNkQsT0FBTyxHQUFHNUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BRTdDLElBQU00QixLQUFLLEdBQUc3QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7TUFDN0M0QixLQUFLLENBQUNSLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO01BQ3RDUSxLQUFLLENBQUNSLFlBQVksQ0FBQyxJQUFJLEVBQUV0RCxNQUFNLENBQUN1RCxFQUFFLENBQUM7TUFFbkMsSUFBTVEsS0FBSyxHQUFHOUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO01BQzdDNkIsS0FBSyxDQUFDVCxZQUFZLENBQUMsS0FBSyxFQUFFdEQsTUFBTSxDQUFDdUQsRUFBRSxDQUFDO01BRXBDLElBQU1TLFNBQVMsR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztNQUNoRDhCLFNBQVMsQ0FBQ3hCLFdBQVcsR0FBR3hDLE1BQU0sQ0FBQytELEtBQUs7TUFFcEMsSUFBSS9ELE1BQU0sQ0FBQzJDLE1BQU0sRUFBRTtRQUNqQm9CLEtBQUssQ0FBQzVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUNoQztNQUVBeUIsT0FBTyxDQUFDSSxXQUFXLENBQUNILEtBQUssQ0FBQztNQUMxQkQsT0FBTyxDQUFDSSxXQUFXLENBQUNGLEtBQUssQ0FBQztNQUMxQkEsS0FBSyxDQUFDRSxXQUFXLENBQUNELFNBQVMsQ0FBQztNQUU1QixPQUFPO1FBQUVILE9BQU8sRUFBUEEsT0FBTztRQUFFQyxLQUFLLEVBQUxBLEtBQUs7UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLFNBQVMsRUFBVEE7TUFBVSxDQUFDO0lBQzdDO0VBQUM7SUFBQXZQLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE0UCxpQkFBa0IzRSxNQUFNLEVBQUU7TUFDeEIsSUFBTTZELE9BQU8sR0FBRzVCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUU3QyxJQUFNNEIsS0FBSyxHQUFHN0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO01BQzlDNEIsS0FBSyxDQUFDUixZQUFZLENBQUMsSUFBSSxFQUFFdEQsTUFBTSxDQUFDdUQsRUFBRSxDQUFDO01BRW5DdkQsTUFBTSxDQUFDc0UsTUFBTSxDQUFDbk4sT0FBTyxDQUFDLFVBQUNwQyxLQUFLLEVBQUViLEtBQUssRUFBSztRQUN0QyxJQUFNd0YsTUFBTSxHQUFHdUksUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQy9DeEksTUFBTSxDQUFDNEosWUFBWSxDQUFDLE9BQU8sRUFBRXZPLEtBQUssQ0FBQztRQUVuQyxJQUFJaUwsTUFBTSxDQUFDeUUsTUFBTSxJQUFJekUsTUFBTSxDQUFDeUUsTUFBTSxDQUFDdlEsS0FBSyxDQUFDLEVBQUU7VUFDekN3RixNQUFNLENBQUM4SSxXQUFXLEdBQUd4QyxNQUFNLENBQUN5RSxNQUFNLENBQUN2USxLQUFLLENBQUM7UUFDM0M7UUFFQTRQLEtBQUssQ0FBQ0csV0FBVyxDQUFDdkssTUFBTSxDQUFDO01BQzNCLENBQUMsQ0FBQztNQUVGLElBQU1xSyxLQUFLLEdBQUc5QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7TUFDN0M2QixLQUFLLENBQUNULFlBQVksQ0FBQyxLQUFLLEVBQUV0RCxNQUFNLENBQUN1RCxFQUFFLENBQUM7TUFFcEMsSUFBTVMsU0FBUyxHQUFHL0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO01BQ2hEOEIsU0FBUyxDQUFDeEIsV0FBVyxHQUFHeEMsTUFBTSxDQUFDK0QsS0FBSztNQUVwQyxJQUFJL0QsTUFBTSxDQUFDMkMsTUFBTSxFQUFFO1FBQ2pCb0IsS0FBSyxDQUFDNUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQ2hDO01BRUF5QixPQUFPLENBQUNJLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDO01BQzFCRixPQUFPLENBQUNJLFdBQVcsQ0FBQ0gsS0FBSyxDQUFDO01BQzFCQyxLQUFLLENBQUNFLFdBQVcsQ0FBQ0QsU0FBUyxDQUFDO01BRTVCLE9BQU87UUFBRUgsT0FBTyxFQUFQQSxPQUFPO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxLQUFLLEVBQUxBLEtBQUs7UUFBRUMsU0FBUyxFQUFUQTtNQUFVLENBQUM7SUFDN0M7RUFBQztJQUFBdlAsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTZQLFlBQWE1RSxNQUFNLEVBQUU7TUFDbkIsT0FBTyxJQUFJLENBQUMyRSxnQkFBZ0IsQ0FBQzNFLE1BQU0sQ0FBQztJQUN0QztFQUFDO0lBQUF2TCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBOFAsU0FBVTdFLE1BQU0sRUFBRTtNQUNoQixJQUFNZ0MsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7TUFDeENGLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENKLElBQUksQ0FBQ1EsV0FBVyxHQUFHeEMsTUFBTSxDQUFDekUsT0FBTztNQUNqQyxPQUFPeUcsSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUErUCxtQkFBb0I5RSxNQUFNLEVBQUU7TUFDMUIsSUFBTWdDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzFDRixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDSixJQUFJLENBQUNRLFdBQVcsR0FBR3hDLE1BQU0sQ0FBQ3pFLE9BQU87TUFDakMsT0FBT3lHLElBQUk7SUFDYjtFQUFDO0VBQUEsT0FBQUYsY0FBQTtBQUFBO0FBR1lBLHNFQUFjLEU7Ozs7Ozs7Ozs7QUN4Ulc7QUFBQSxJQUVsQ2lELDBCQUFlLDBCQUFBQyxlQUFBO0VBQUFuRixrQkFBQSxDQUFBa0YsZUFBQSxFQUFBQyxlQUFBO0VBQUEsSUFBQWxGLE1BQUEsR0FBQUMsc0JBQUEsQ0FBQWdGLGVBQUE7RUFBQSxTQUFBQSxnQkFBQTtJQUFBck4sd0JBQUEsT0FBQXFOLGVBQUE7SUFBQSxPQUFBakYsTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQW9OLGVBQUE7SUFBQXRRLEdBQUE7SUFBQU0sS0FBQSxFQUNuQixTQUFBZ04sbUJBQUEsRUFBc0I7TUFDcEIsT0FBQWtELGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQUgsZUFBQSxDQUFBcFEsU0FBQSwrQkFBQUUsSUFBQTtJQUNGO0VBQUM7SUFBQUosR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXNOLFlBQUEsRUFBZTtNQUNiLElBQU1MLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO01BQy9DRixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztNQUMzQkosSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7TUFDbkMsT0FBT0osSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF1TixnQkFBQSxFQUFtQjtNQUNqQixJQUFNTixJQUFJLEdBQUFpRCxhQUFBLENBQUFDLHdCQUFBLENBQUFILGVBQUEsQ0FBQXBRLFNBQUEsNEJBQUFFLElBQUEsTUFBMEI7TUFDcENtTixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNoQyxPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXdOLFVBQVd2QyxNQUFNLEVBQUU7TUFDakIsSUFBTWdDLElBQUksR0FBQWlELGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQUgsZUFBQSxDQUFBcFEsU0FBQSxzQkFBQUUsSUFBQSxPQUFtQm1MLE1BQU0sQ0FBQztNQUNwQ2dDLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BQ25DSixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNoQyxPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTZOLGtCQUFtQjVDLE1BQU0sRUFBRTtNQUN6QixJQUFNZ0MsSUFBSSxHQUFBaUQsYUFBQSxDQUFBQyx3QkFBQSxDQUFBSCxlQUFBLENBQUFwUSxTQUFBLDhCQUFBRSxJQUFBLE1BQTRCO01BQ3RDbU4sSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDOUJKLElBQUksQ0FBQ3NCLFlBQVksQ0FBQyxJQUFJLEVBQUV0RCxNQUFNLENBQUN1RCxFQUFFLENBQUM7TUFDbEMsT0FBT3ZCLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBOE4sZUFBQSxFQUFrQjtNQUNoQixJQUFNYixJQUFJLEdBQUFpRCxhQUFBLENBQUFDLHdCQUFBLENBQUFILGVBQUEsQ0FBQXBRLFNBQUEsMkJBQUFFLElBQUEsTUFBeUI7TUFDbkNtTixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNoQyxPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQStOLG9CQUFBLEVBQXVCO01BQ3JCLElBQU1kLElBQUksR0FBQWlELGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQUgsZUFBQSxDQUFBcFEsU0FBQSxnQ0FBQUUsSUFBQSxNQUE4QjtNQUN4Q21OLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ2hDLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBZ08sZ0JBQUEsRUFBbUI7TUFDakIsT0FBQWtDLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQUgsZUFBQSxDQUFBcFEsU0FBQSw0QkFBQUUsSUFBQTtJQUNGO0VBQUM7SUFBQUosR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQWlPLGdCQUFBLEVBQW1CO01BQ2pCLE9BQUFpQyxhQUFBLENBQUFDLHdCQUFBLENBQUFILGVBQUEsQ0FBQXBRLFNBQUEsNEJBQUFFLElBQUE7SUFDRjtFQUFDO0lBQUFKLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFrTyxlQUFBLEVBQWtCO01BQ2hCLE9BQUFnQyxhQUFBLENBQUFDLHdCQUFBLENBQUFILGVBQUEsQ0FBQXBRLFNBQUEsMkJBQUFFLElBQUE7SUFDRjtFQUFDO0lBQUFKLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFtTyxvQkFBcUJsRCxNQUFNLEVBQUU7TUFDM0IsSUFBTWdDLElBQUksR0FBRyxJQUFJLENBQUNtQixTQUFTLENBQUNuRCxNQUFNLENBQUM7TUFDbkNnQyxJQUFJLENBQUNzQixZQUFZLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQztNQUM1Q3RCLElBQUksQ0FBQ3NCLFlBQVksQ0FBQyxhQUFhLEVBQUUsR0FBRyxHQUFHdEQsTUFBTSxDQUFDdUQsRUFBRSxDQUFDO01BQ2pEdkIsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztNQUM1Q0osSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDaEMsT0FBT0osSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFxTyx3QkFBQSxFQUEyQjtNQUN6QixPQUFBNkIsYUFBQSxDQUFBQyx3QkFBQSxDQUFBSCxlQUFBLENBQUFwUSxTQUFBLG9DQUFBRSxJQUFBO0lBQ0Y7RUFBQztJQUFBSixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBc08sWUFBQSxFQUFlO01BQ2IsSUFBTXJCLElBQUksR0FBQWlELGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQUgsZUFBQSxDQUFBcFEsU0FBQSx3QkFBQUUsSUFBQSxNQUFzQjtNQUNoQ21OLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQy9CLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBb08sVUFBV25ELE1BQU0sRUFBRTtNQUNqQixJQUFNZ0MsSUFBSSxHQUFBaUQsYUFBQSxDQUFBQyx3QkFBQSxDQUFBSCxlQUFBLENBQUFwUSxTQUFBLHNCQUFBRSxJQUFBLE9BQW1CbUwsTUFBTSxDQUFDO01BQ3BDZ0MsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDekJKLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQzVCSixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUNqQyxPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXlPLGVBQWdCeEQsTUFBTSxFQUFFO01BQ3RCLE9BQUFpRixhQUFBLENBQUFDLHdCQUFBLENBQUFILGVBQUEsQ0FBQXBRLFNBQUEsMkJBQUFFLElBQUEsT0FBNEJtTCxNQUFNO0lBQ3BDO0VBQUM7SUFBQXZMLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEwTyxxQkFBc0J6RCxNQUFNLEVBQUU7TUFDNUIsT0FBQWlGLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQUgsZUFBQSxDQUFBcFEsU0FBQSwyQkFBQUUsSUFBQSxPQUE0Qm1MLE1BQU07SUFDcEM7RUFBQztJQUFBdkwsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTJPLHFCQUFBLEVBQXdCO01BQ3RCLE9BQU8sYUFBYTtJQUN0QjtFQUFDO0lBQUFqUCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBNE8sZUFBZ0IzRCxNQUFNLEVBQUU7TUFDdEIsT0FBQWlGLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQUgsZUFBQSxDQUFBcFEsU0FBQSwyQkFBQUUsSUFBQSxPQUE0Qm1MLE1BQU07SUFDcEM7RUFBQztJQUFBdkwsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTZPLG1CQUFvQjVELE1BQU0sRUFBRTtNQUMxQixJQUFBbUYsU0FBQSxHQUFBRixhQUFBLENBQUFDLHdCQUFBLENBQUFILGVBQUEsQ0FBQXBRLFNBQUEsK0JBQUFFLElBQUEsT0FBc0VtTCxNQUFNO1FBQXBFNkQsT0FBTyxHQUFBc0IsU0FBQSxDQUFQdEIsT0FBTztRQUFFQyxLQUFLLEdBQUFxQixTQUFBLENBQUxyQixLQUFLO1FBQUVDLEtBQUssR0FBQW9CLFNBQUEsQ0FBTHBCLEtBQUs7UUFBRUMsU0FBUyxHQUFBbUIsU0FBQSxDQUFUbkIsU0FBUztNQUN4Q0gsT0FBTyxDQUFDMUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ25DMEIsS0FBSyxDQUFDM0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BRW5DLElBQUlwQyxNQUFNLENBQUMyQyxNQUFNLEVBQUU7UUFDakJvQixLQUFLLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDaEM7TUFFQSxPQUFPO1FBQUV5QixPQUFPLEVBQVBBLE9BQU87UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBO01BQVUsQ0FBQztJQUM3QztFQUFDO0lBQUF2UCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBbVAsZ0JBQWlCbEUsTUFBTSxFQUFFO01BQ3ZCLElBQUFvRixVQUFBLEdBQUFILGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQUgsZUFBQSxDQUFBcFEsU0FBQSw0QkFBQUUsSUFBQSxPQUFtRW1MLE1BQU07UUFBakU2RCxPQUFPLEdBQUF1QixVQUFBLENBQVB2QixPQUFPO1FBQUVDLEtBQUssR0FBQXNCLFVBQUEsQ0FBTHRCLEtBQUs7UUFBRUMsS0FBSyxHQUFBcUIsVUFBQSxDQUFMckIsS0FBSztRQUFFQyxTQUFTLEdBQUFvQixVQUFBLENBQVRwQixTQUFTO01BQ3hDSCxPQUFPLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDbkMwQixLQUFLLENBQUMzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFFbkMsSUFBSXBDLE1BQU0sQ0FBQzJDLE1BQU0sRUFBRTtRQUNqQm9CLEtBQUssQ0FBQzVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUNoQztNQUVBLE9BQU87UUFBRXlCLE9BQU8sRUFBUEEsT0FBTztRQUFFQyxLQUFLLEVBQUxBLEtBQUs7UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLFNBQVMsRUFBVEE7TUFBVSxDQUFDO0lBQzdDO0VBQUM7SUFBQXZQLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFvUCxpQkFBa0JuRSxNQUFNLEVBQUU7TUFDeEIsSUFBTTZELE9BQU8sR0FBRzVCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUM3QzJCLE9BQU8sQ0FBQzFCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUVuQyxJQUFNZ0MsTUFBTSxHQUFHbkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO01BQzlDa0MsTUFBTSxDQUFDNUIsV0FBVyxHQUFHeEMsTUFBTSxDQUFDK0QsS0FBSztNQUVqQyxJQUFJL0QsTUFBTSxDQUFDMkMsTUFBTSxFQUFFO1FBQ2pCeUIsTUFBTSxDQUFDakMsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQ2pDO01BRUF5QixPQUFPLENBQUNJLFdBQVcsQ0FBQ0csTUFBTSxDQUFDO01BRTNCLElBQU1DLE1BQU0sR0FBRyxFQUFFO01BRWpCckUsTUFBTSxDQUFDc0UsTUFBTSxDQUFDbk4sT0FBTyxDQUFDLFVBQUNwQyxLQUFLLEVBQUViLEtBQUssRUFBSztRQUN0QyxJQUFNcVEsWUFBWSxHQUFHdEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ2xEcUMsWUFBWSxDQUFDcEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBRW5DLElBQU1vQyxLQUFLLEdBQUd2QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0NzQyxLQUFLLENBQUNsQixZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUNuQ2tCLEtBQUssQ0FBQ2xCLFlBQVksQ0FBQyxJQUFJLEVBQUV0RCxNQUFNLENBQUN1RCxFQUFFLEdBQUcsR0FBRyxHQUFHclAsS0FBSyxDQUFDO1FBQ2pEc1EsS0FBSyxDQUFDbEIsWUFBWSxDQUFDLE9BQU8sRUFBRXZPLEtBQUssQ0FBQztRQUNsQ3NQLE1BQU0sQ0FBQy9JLElBQUksQ0FBQ2tKLEtBQUssQ0FBQztRQUVsQixJQUFNVCxLQUFLLEdBQUc5QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0M2QixLQUFLLENBQUNULFlBQVksQ0FBQyxLQUFLLEVBQUV0RCxNQUFNLENBQUN1RCxFQUFFLEdBQUcsR0FBRyxHQUFHclAsS0FBSyxDQUFDO1FBRWxELElBQU04UCxTQUFTLEdBQUcvQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFFaEQsSUFBSWxDLE1BQU0sQ0FBQ3lFLE1BQU0sSUFBSXpFLE1BQU0sQ0FBQ3lFLE1BQU0sQ0FBQ3ZRLEtBQUssQ0FBQyxFQUFFO1VBQ3pDOFAsU0FBUyxDQUFDeEIsV0FBVyxHQUFHeEMsTUFBTSxDQUFDeUUsTUFBTSxDQUFDdlEsS0FBSyxDQUFDO1FBQzlDO1FBRUEyUCxPQUFPLENBQUNJLFdBQVcsQ0FBQ00sWUFBWSxDQUFDO1FBQ2pDQSxZQUFZLENBQUNOLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDO1FBQy9CQSxLQUFLLENBQUNFLFdBQVcsQ0FBQ08sS0FBSyxDQUFDO1FBQ3hCVCxLQUFLLENBQUNFLFdBQVcsQ0FBQ0QsU0FBUyxDQUFDO01BQzlCLENBQUMsQ0FBQztNQUVGLE9BQU87UUFBRUgsT0FBTyxFQUFQQSxPQUFPO1FBQUVRLE1BQU0sRUFBTkE7TUFBTyxDQUFDO0lBQzVCO0VBQUM7SUFBQTVQLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEyUCxtQkFBb0IxRSxNQUFNLEVBQUU7TUFDMUIsSUFBQXFGLFVBQUEsR0FBQUosYUFBQSxDQUFBQyx3QkFBQSxDQUFBSCxlQUFBLENBQUFwUSxTQUFBLCtCQUFBRSxJQUFBLE9BQXNFbUwsTUFBTTtRQUFwRTZELE9BQU8sR0FBQXdCLFVBQUEsQ0FBUHhCLE9BQU87UUFBRUMsS0FBSyxHQUFBdUIsVUFBQSxDQUFMdkIsS0FBSztRQUFFQyxLQUFLLEdBQUFzQixVQUFBLENBQUx0QixLQUFLO1FBQUVDLFNBQVMsR0FBQXFCLFVBQUEsQ0FBVHJCLFNBQVM7TUFDeENILE9BQU8sQ0FBQzFCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUNqQ3lCLE9BQU8sQ0FBQzFCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNuQ3lCLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDRixLQUFLLENBQUM7TUFDMUJBLEtBQUssQ0FBQ0UsV0FBVyxDQUFDSCxLQUFLLENBQUM7TUFDeEJDLEtBQUssQ0FBQ0UsV0FBVyxDQUFDRCxTQUFTLENBQUM7TUFDNUIsT0FBTztRQUFFSCxPQUFPLEVBQVBBLE9BQU87UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBO01BQVUsQ0FBQztJQUM3QztFQUFDO0lBQUF2UCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBNFAsaUJBQWtCM0UsTUFBTSxFQUFFO01BQ3hCLElBQUFzRixVQUFBLEdBQUFMLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQUgsZUFBQSxDQUFBcFEsU0FBQSw2QkFBQUUsSUFBQSxPQUFvRW1MLE1BQU07UUFBbEU2RCxPQUFPLEdBQUF5QixVQUFBLENBQVB6QixPQUFPO1FBQUVDLEtBQUssR0FBQXdCLFVBQUEsQ0FBTHhCLEtBQUs7UUFBRUMsS0FBSyxHQUFBdUIsVUFBQSxDQUFMdkIsS0FBSztRQUFFQyxTQUFTLEdBQUFzQixVQUFBLENBQVR0QixTQUFTO01BQ3hDSCxPQUFPLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDbkMwQixLQUFLLENBQUMzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFFbkMsSUFBSXBDLE1BQU0sQ0FBQzJDLE1BQU0sRUFBRTtRQUNqQm9CLEtBQUssQ0FBQzVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUNoQztNQUVBLE9BQU87UUFBRXlCLE9BQU8sRUFBUEEsT0FBTztRQUFFQyxLQUFLLEVBQUxBLEtBQUs7UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLFNBQVMsRUFBVEE7TUFBVSxDQUFDO0lBQzdDO0VBQUM7SUFBQXZQLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE2UCxZQUFhNUUsTUFBTSxFQUFFO01BQ25CLElBQUF1RixVQUFBLEdBQUFOLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQUgsZUFBQSxDQUFBcFEsU0FBQSx3QkFBQUUsSUFBQSxPQUErRG1MLE1BQU07UUFBN0Q2RCxPQUFPLEdBQUEwQixVQUFBLENBQVAxQixPQUFPO1FBQUVDLEtBQUssR0FBQXlCLFVBQUEsQ0FBTHpCLEtBQUs7UUFBRUMsS0FBSyxHQUFBd0IsVUFBQSxDQUFMeEIsS0FBSztRQUFFQyxTQUFTLEdBQUF1QixVQUFBLENBQVR2QixTQUFTO01BQ3hDSCxPQUFPLENBQUMxQixTQUFTLENBQUNxRCxNQUFNLENBQUMsWUFBWSxDQUFDO01BQ3RDMUIsS0FBSyxDQUFDM0IsU0FBUyxDQUFDcUQsTUFBTSxDQUFDLGNBQWMsQ0FBQztNQUN0QyxPQUFPO1FBQUUzQixPQUFPLEVBQVBBLE9BQU87UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBO01BQVUsQ0FBQztJQUM3QztFQUFDO0lBQUF2UCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBOFAsU0FBVTdFLE1BQU0sRUFBRTtNQUNoQixJQUFNZ0MsSUFBSSxHQUFBaUQsYUFBQSxDQUFBQyx3QkFBQSxDQUFBSCxlQUFBLENBQUFwUSxTQUFBLHFCQUFBRSxJQUFBLE9BQWtCbUwsTUFBTSxDQUFDO01BQ25DZ0MsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDM0JKLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQ2xDLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBK1AsbUJBQW9COUUsTUFBTSxFQUFFO01BQzFCLElBQU1nQyxJQUFJLEdBQUFpRCxhQUFBLENBQUFDLHdCQUFBLENBQUFILGVBQUEsQ0FBQXBRLFNBQUEsK0JBQUFFLElBQUEsT0FBNEJtTCxNQUFNLENBQUM7TUFDN0NnQyxJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUNqQyxPQUFPSixJQUFJO0lBQ2I7RUFBQztFQUFBLE9BQUErQyxlQUFBO0FBQUEsRUE5TTJCakQsU0FBYztBQWlON0JpRCx5RUFBZSxFOzs7Ozs7Ozs7O0FDbk5VO0FBQUEsSUFFbENVLDBCQUFlLDBCQUFBVCxlQUFBO0VBQUFuRixrQkFBQSxDQUFBNEYsZUFBQSxFQUFBVCxlQUFBO0VBQUEsSUFBQWxGLE1BQUEsR0FBQUMsc0JBQUEsQ0FBQTBGLGVBQUE7RUFBQSxTQUFBQSxnQkFBQTtJQUFBL04sd0JBQUEsT0FBQStOLGVBQUE7SUFBQSxPQUFBM0YsTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQThOLGVBQUE7SUFBQWhSLEdBQUE7SUFBQU0sS0FBQSxFQUNuQixTQUFBZ04sbUJBQUEsRUFBc0I7TUFDcEIsT0FBQWtELGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQU8sZUFBQSxDQUFBOVEsU0FBQSwrQkFBQUUsSUFBQTtJQUNGO0VBQUM7SUFBQUosR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXNOLFlBQUEsRUFBZTtNQUNiLElBQU1MLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO01BQy9DRixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUMxQkosSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDMUIsT0FBT0osSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF1TixnQkFBQSxFQUFtQjtNQUNqQixJQUFNTixJQUFJLEdBQUFpRCxhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsNEJBQUFFLElBQUEsTUFBMEI7TUFDcENtTixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztNQUMvQixPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXdOLFVBQVd2QyxNQUFNLEVBQUU7TUFDakIsSUFBTWdDLElBQUksR0FBQWlELGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQU8sZUFBQSxDQUFBOVEsU0FBQSxzQkFBQUUsSUFBQSxPQUFtQm1MLE1BQU0sQ0FBQztNQUNwQ2dDLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO01BQ2pDSixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUM1QkosSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQztNQUM3Q0osSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0osSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDMUJKLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO01BQ2pDLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBNk4sa0JBQW1CNUMsTUFBTSxFQUFFO01BQ3pCLElBQU1nQyxJQUFJLEdBQUFpRCxhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsOEJBQUFFLElBQUEsTUFBNEI7TUFDdENtTixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUM5QkosSUFBSSxDQUFDc0IsWUFBWSxDQUFDLElBQUksRUFBRXRELE1BQU0sQ0FBQ3VELEVBQUUsQ0FBQztNQUNsQyxPQUFPdkIsSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE4TixlQUFBLEVBQWtCO01BQ2hCLE9BQUFvQyxhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsMkJBQUFFLElBQUE7SUFDRjtFQUFDO0lBQUFKLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUErTixvQkFBQSxFQUF1QjtNQUNyQixPQUFBbUMsYUFBQSxDQUFBQyx3QkFBQSxDQUFBTyxlQUFBLENBQUE5USxTQUFBLGdDQUFBRSxJQUFBO0lBQ0Y7RUFBQztJQUFBSixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBZ08sZ0JBQUEsRUFBbUI7TUFDakIsT0FBQWtDLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQU8sZUFBQSxDQUFBOVEsU0FBQSw0QkFBQUUsSUFBQTtJQUNGO0VBQUM7SUFBQUosR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQWlPLGdCQUFBLEVBQW1CO01BQ2pCLE9BQUFpQyxhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsNEJBQUFFLElBQUE7SUFDRjtFQUFDO0lBQUFKLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFrTyxlQUFBLEVBQWtCO01BQ2hCLE9BQUFnQyxhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsMkJBQUFFLElBQUE7SUFDRjtFQUFDO0lBQUFKLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFtTyxvQkFBcUJsRCxNQUFNLEVBQUU7TUFDM0IsSUFBTWdDLElBQUksR0FBRyxJQUFJLENBQUNtQixTQUFTLENBQUNuRCxNQUFNLENBQUM7TUFDbkNnQyxJQUFJLENBQUNzQixZQUFZLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQztNQUM1Q3RCLElBQUksQ0FBQ3NCLFlBQVksQ0FBQyxhQUFhLEVBQUUsR0FBRyxHQUFHdEQsTUFBTSxDQUFDdUQsRUFBRSxDQUFDO01BQ2pEdkIsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztNQUM1QyxPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXFPLHdCQUFBLEVBQTJCO01BQ3pCLE9BQUE2QixhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsb0NBQUFFLElBQUE7SUFDRjtFQUFDO0lBQUFKLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFzTyxZQUFBLEVBQWU7TUFDYixJQUFNckIsSUFBSSxHQUFBaUQsYUFBQSxDQUFBQyx3QkFBQSxDQUFBTyxlQUFBLENBQUE5USxTQUFBLHdCQUFBRSxJQUFBLE1BQXNCO01BQ2hDbU4sSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFDL0IsT0FBT0osSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFvTyxVQUFXbkQsTUFBTSxFQUFFO01BQ2pCLElBQU1nQyxJQUFJLEdBQUFpRCxhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsc0JBQUFFLElBQUEsT0FBbUJtTCxNQUFNLENBQUM7TUFDcENnQyxJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztNQUN6QkosSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDNUIsT0FBT0osSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF5TyxlQUFnQnhELE1BQU0sRUFBRTtNQUN0QixPQUFBaUYsYUFBQSxDQUFBQyx3QkFBQSxDQUFBTyxlQUFBLENBQUE5USxTQUFBLDJCQUFBRSxJQUFBLE9BQTRCbUwsTUFBTTtJQUNwQztFQUFDO0lBQUF2TCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBME8scUJBQXNCekQsTUFBTSxFQUFFO01BQzVCLE9BQUFpRixhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsaUNBQUFFLElBQUEsT0FBa0NtTCxNQUFNO0lBQzFDO0VBQUM7SUFBQXZMLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEyTyxxQkFBQSxFQUF3QjtNQUN0QixPQUFPLGFBQWE7SUFDdEI7RUFBQztJQUFBalAsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTRPLGVBQWdCM0QsTUFBTSxFQUFFO01BQ3RCLElBQU0zSCxXQUFXLEdBQUE0TSxhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsMkJBQUFFLElBQUEsT0FBd0JtTCxNQUFNLENBQUM7TUFDaEQzSCxXQUFXLENBQUM4SixTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFDdEMsT0FBTy9KLFdBQVc7SUFDcEI7RUFBQztJQUFBNUQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTZPLG1CQUFvQjVELE1BQU0sRUFBRTtNQUMxQixJQUFBbUYsU0FBQSxHQUFBRixhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsK0JBQUFFLElBQUEsT0FBc0VtTCxNQUFNO1FBQXBFNkQsT0FBTyxHQUFBc0IsU0FBQSxDQUFQdEIsT0FBTztRQUFFQyxLQUFLLEdBQUFxQixTQUFBLENBQUxyQixLQUFLO1FBQUVDLEtBQUssR0FBQW9CLFNBQUEsQ0FBTHBCLEtBQUs7UUFBRUMsU0FBUyxHQUFBbUIsU0FBQSxDQUFUbkIsU0FBUztNQUN4Q0gsT0FBTyxDQUFDMUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ25DMEIsS0FBSyxDQUFDM0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BRW5DLElBQUlwQyxNQUFNLENBQUMyQyxNQUFNLEVBQUU7UUFDakJvQixLQUFLLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDaEM7TUFFQSxPQUFPO1FBQUV5QixPQUFPLEVBQVBBLE9BQU87UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBO01BQVUsQ0FBQztJQUM3QztFQUFDO0lBQUF2UCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBbVAsZ0JBQWlCbEUsTUFBTSxFQUFFO01BQ3ZCLElBQUFvRixVQUFBLEdBQUFILGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQU8sZUFBQSxDQUFBOVEsU0FBQSw0QkFBQUUsSUFBQSxPQUFtRW1MLE1BQU07UUFBakU2RCxPQUFPLEdBQUF1QixVQUFBLENBQVB2QixPQUFPO1FBQUVDLEtBQUssR0FBQXNCLFVBQUEsQ0FBTHRCLEtBQUs7UUFBRUMsS0FBSyxHQUFBcUIsVUFBQSxDQUFMckIsS0FBSztRQUFFQyxTQUFTLEdBQUFvQixVQUFBLENBQVRwQixTQUFTO01BQ3hDSCxPQUFPLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDbkMwQixLQUFLLENBQUMzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFFbkMsSUFBSXBDLE1BQU0sQ0FBQzJDLE1BQU0sRUFBRTtRQUNqQm9CLEtBQUssQ0FBQzVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUNoQztNQUVBLE9BQU87UUFBRXlCLE9BQU8sRUFBUEEsT0FBTztRQUFFQyxLQUFLLEVBQUxBLEtBQUs7UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLFNBQVMsRUFBVEE7TUFBVSxDQUFDO0lBQzdDO0VBQUM7SUFBQXZQLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFvUCxpQkFBa0JuRSxNQUFNLEVBQUU7TUFDeEIsSUFBTTZELE9BQU8sR0FBRzVCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUM3QzJCLE9BQU8sQ0FBQzFCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUVuQyxJQUFNZ0MsTUFBTSxHQUFHbkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO01BQzlDa0MsTUFBTSxDQUFDNUIsV0FBVyxHQUFHeEMsTUFBTSxDQUFDK0QsS0FBSztNQUVqQyxJQUFJL0QsTUFBTSxDQUFDMkMsTUFBTSxFQUFFO1FBQ2pCeUIsTUFBTSxDQUFDakMsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQ2pDO01BRUF5QixPQUFPLENBQUNJLFdBQVcsQ0FBQ0csTUFBTSxDQUFDO01BRTNCLElBQU1DLE1BQU0sR0FBRyxFQUFFO01BRWpCckUsTUFBTSxDQUFDc0UsTUFBTSxDQUFDbk4sT0FBTyxDQUFDLFVBQUNwQyxLQUFLLEVBQUViLEtBQUssRUFBSztRQUN0QyxJQUFNcVEsWUFBWSxHQUFHdEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ2xEcUMsWUFBWSxDQUFDcEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBRXhDLElBQU1vQyxLQUFLLEdBQUd2QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0NzQyxLQUFLLENBQUNsQixZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUNuQ2tCLEtBQUssQ0FBQ2xCLFlBQVksQ0FBQyxJQUFJLEVBQUV0RCxNQUFNLENBQUN1RCxFQUFFLEdBQUcsR0FBRyxHQUFHclAsS0FBSyxDQUFDO1FBQ2pEc1EsS0FBSyxDQUFDbEIsWUFBWSxDQUFDLE9BQU8sRUFBRXZPLEtBQUssQ0FBQztRQUNsQ3lQLEtBQUssQ0FBQ3JDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO1FBQ3ZDaUMsTUFBTSxDQUFDL0ksSUFBSSxDQUFDa0osS0FBSyxDQUFDO1FBRWxCLElBQU1ULEtBQUssR0FBRzlCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUM3QzZCLEtBQUssQ0FBQ1QsWUFBWSxDQUFDLEtBQUssRUFBRXRELE1BQU0sQ0FBQ3VELEVBQUUsR0FBRyxHQUFHLEdBQUdyUCxLQUFLLENBQUM7UUFDbEQ2UCxLQUFLLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUV2QyxJQUFJcEMsTUFBTSxDQUFDeUUsTUFBTSxJQUFJekUsTUFBTSxDQUFDeUUsTUFBTSxDQUFDdlEsS0FBSyxDQUFDLEVBQUU7VUFDekM2UCxLQUFLLENBQUN2QixXQUFXLEdBQUd4QyxNQUFNLENBQUN5RSxNQUFNLENBQUN2USxLQUFLLENBQUM7UUFDMUM7UUFFQTJQLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDTSxZQUFZLENBQUM7UUFDakNBLFlBQVksQ0FBQ04sV0FBVyxDQUFDTyxLQUFLLENBQUM7UUFDL0JELFlBQVksQ0FBQ04sV0FBVyxDQUFDRixLQUFLLENBQUM7TUFDakMsQ0FBQyxDQUFDO01BRUYsT0FBTztRQUFFRixPQUFPLEVBQVBBLE9BQU87UUFBRVEsTUFBTSxFQUFOQTtNQUFPLENBQUM7SUFDNUI7RUFBQztJQUFBNVAsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTJQLG1CQUFvQjFFLE1BQU0sRUFBRTtNQUMxQixJQUFBcUYsVUFBQSxHQUFBSixhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsK0JBQUFFLElBQUEsT0FBc0VtTCxNQUFNO1FBQXBFNkQsT0FBTyxHQUFBd0IsVUFBQSxDQUFQeEIsT0FBTztRQUFFQyxLQUFLLEdBQUF1QixVQUFBLENBQUx2QixLQUFLO1FBQUVDLEtBQUssR0FBQXNCLFVBQUEsQ0FBTHRCLEtBQUs7UUFBRUMsU0FBUyxHQUFBcUIsVUFBQSxDQUFUckIsU0FBUztNQUN4Q0gsT0FBTyxDQUFDMUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ25DeUIsT0FBTyxDQUFDMUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ25DMEIsS0FBSyxDQUFDM0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFDdkMyQixLQUFLLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztNQUN2Q3lCLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDSCxLQUFLLENBQUM7TUFDMUJELE9BQU8sQ0FBQ0ksV0FBVyxDQUFDRixLQUFLLENBQUM7TUFDMUIsT0FBTztRQUFFRixPQUFPLEVBQVBBLE9BQU87UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBO01BQVUsQ0FBQztJQUM3QztFQUFDO0lBQUF2UCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBNFAsaUJBQWtCM0UsTUFBTSxFQUFFO01BQ3hCLElBQU02RCxPQUFPLEdBQUFvQixhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsNkJBQUFFLElBQUEsT0FBMEJtTCxNQUFNLENBQUM7TUFDOUM2RCxPQUFPLENBQUNBLE9BQU8sQ0FBQzFCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUMzQ3lCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDM0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQzNDLE9BQU95QixPQUFPO0lBQ2hCO0VBQUM7SUFBQXBQLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE2UCxZQUFhNUUsTUFBTSxFQUFFO01BQ25CLElBQUFzRixVQUFBLEdBQUFMLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQU8sZUFBQSxDQUFBOVEsU0FBQSx3QkFBQUUsSUFBQSxPQUErRG1MLE1BQU07UUFBN0Q2RCxPQUFPLEdBQUF5QixVQUFBLENBQVB6QixPQUFPO1FBQUVDLEtBQUssR0FBQXdCLFVBQUEsQ0FBTHhCLEtBQUs7UUFBRUMsS0FBSyxHQUFBdUIsVUFBQSxDQUFMdkIsS0FBSztRQUFFQyxTQUFTLEdBQUFzQixVQUFBLENBQVR0QixTQUFTO01BQ3hDSCxPQUFPLENBQUMxQixTQUFTLENBQUNxRCxNQUFNLENBQUMsWUFBWSxDQUFDO01BQ3RDMUIsS0FBSyxDQUFDM0IsU0FBUyxDQUFDcUQsTUFBTSxDQUFDLGNBQWMsQ0FBQztNQUN0QyxPQUFPO1FBQUUzQixPQUFPLEVBQVBBLE9BQU87UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBO01BQVUsQ0FBQztJQUM3QztFQUFDO0lBQUF2UCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBOFAsU0FBVTdFLE1BQU0sRUFBRTtNQUNoQixJQUFNZ0MsSUFBSSxHQUFBaUQsYUFBQSxDQUFBQyx3QkFBQSxDQUFBTyxlQUFBLENBQUE5USxTQUFBLHFCQUFBRSxJQUFBLE9BQWtCbUwsTUFBTSxDQUFDO01BQ25DZ0MsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDM0JKLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQ2xDLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBK1AsbUJBQW9COUUsTUFBTSxFQUFFO01BQzFCLElBQU1nQyxJQUFJLEdBQUFpRCxhQUFBLENBQUFDLHdCQUFBLENBQUFPLGVBQUEsQ0FBQTlRLFNBQUEsK0JBQUFFLElBQUEsT0FBNEJtTCxNQUFNLENBQUM7TUFDN0NnQyxJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUNqQ0osSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFDL0JKLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzdCLE9BQU9KLElBQUk7SUFDYjtFQUFDO0VBQUEsT0FBQXlELGVBQUE7QUFBQSxFQTNNMkIzRCxTQUFjO0FBOE03QjJELHlFQUFlLEU7Ozs7Ozs7Ozs7QUNoTlU7QUFBQSxJQUVsQ0MsMEJBQWUsMEJBQUFWLGVBQUE7RUFBQW5GLGtCQUFBLENBQUE2RixlQUFBLEVBQUFWLGVBQUE7RUFBQSxJQUFBbEYsTUFBQSxHQUFBQyxzQkFBQSxDQUFBMkYsZUFBQTtFQUFBLFNBQUFBLGdCQUFBO0lBQUFoTyx3QkFBQSxPQUFBZ08sZUFBQTtJQUFBLE9BQUE1RixNQUFBLENBQUF4SSxLQUFBLE9BQUFSLFNBQUE7RUFBQTtFQUFBYSxxQkFBQSxDQUFBK04sZUFBQTtJQUFBalIsR0FBQTtJQUFBTSxLQUFBLEVBQ25CLFNBQUFnTixtQkFBQSxFQUFzQjtNQUNwQixPQUFBa0QsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLCtCQUFBRSxJQUFBO0lBQ0Y7RUFBQztJQUFBSixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBc04sWUFBQSxFQUFlO01BQ2IsSUFBTUwsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7TUFDL0NGLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzFCSixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUMxQixPQUFPSixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXVOLGdCQUFBLEVBQW1CO01BQ2pCLElBQU1OLElBQUksR0FBQWlELGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQVEsZUFBQSxDQUFBL1EsU0FBQSw0QkFBQUUsSUFBQSxNQUEwQjtNQUNwQ21OLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQy9CLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBd04sVUFBV3ZDLE1BQU0sRUFBRTtNQUNqQixJQUFNZ0MsSUFBSSxHQUFBaUQsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLHNCQUFBRSxJQUFBLE9BQW1CbUwsTUFBTSxDQUFDO01BQ3BDZ0MsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDakNKLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQzVCSixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixDQUFDO01BQzdDSixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDSixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUMxQkosSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDakMsT0FBT0osSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE2TixrQkFBbUI1QyxNQUFNLEVBQUU7TUFDekIsSUFBTWdDLElBQUksR0FBQWlELGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQVEsZUFBQSxDQUFBL1EsU0FBQSw4QkFBQUUsSUFBQSxNQUE0QjtNQUN0Q21OLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlCSixJQUFJLENBQUNzQixZQUFZLENBQUMsSUFBSSxFQUFFdEQsTUFBTSxDQUFDdUQsRUFBRSxDQUFDO01BQ2xDLE9BQU92QixJQUFJO0lBQ2I7RUFBQztJQUFBdk4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQThOLGVBQUEsRUFBa0I7TUFDaEIsT0FBQW9DLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQVEsZUFBQSxDQUFBL1EsU0FBQSwyQkFBQUUsSUFBQTtJQUNGO0VBQUM7SUFBQUosR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQStOLG9CQUFBLEVBQXVCO01BQ3JCLE9BQUFtQyxhQUFBLENBQUFDLHdCQUFBLENBQUFRLGVBQUEsQ0FBQS9RLFNBQUEsZ0NBQUFFLElBQUE7SUFDRjtFQUFDO0lBQUFKLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFnTyxnQkFBQSxFQUFtQjtNQUNqQixPQUFBa0MsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLDRCQUFBRSxJQUFBO0lBQ0Y7RUFBQztJQUFBSixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBaU8sZ0JBQUEsRUFBbUI7TUFDakIsT0FBQWlDLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQVEsZUFBQSxDQUFBL1EsU0FBQSw0QkFBQUUsSUFBQTtJQUNGO0VBQUM7SUFBQUosR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQWtPLGVBQUEsRUFBa0I7TUFDaEIsSUFBTTBDLFdBQVcsR0FBQVYsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLDJCQUFBRSxJQUFBLE1BQXlCO01BQzFDOFEsV0FBVyxDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ2pDLE9BQU91RCxXQUFXO0lBQ3BCO0VBQUM7SUFBQWxSLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFtTyxvQkFBcUJsRCxNQUFNLEVBQUU7TUFDM0IsSUFBTWdDLElBQUksR0FBRyxJQUFJLENBQUNtQixTQUFTLENBQUNuRCxNQUFNLENBQUM7TUFDbkNnQyxJQUFJLENBQUNzQixZQUFZLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDO01BQy9DdEIsSUFBSSxDQUFDc0IsWUFBWSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsR0FBR3RELE1BQU0sQ0FBQ3VELEVBQUUsQ0FBQztNQUNwRHZCLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7TUFDNUMsT0FBT0osSUFBSTtJQUNiO0VBQUM7SUFBQXZOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFxTyx3QkFBQSxFQUEyQjtNQUN6QixPQUFBNkIsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLG9DQUFBRSxJQUFBO0lBQ0Y7RUFBQztJQUFBSixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBc08sWUFBQSxFQUFlO01BQ2IsSUFBTXJCLElBQUksR0FBQWlELGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQVEsZUFBQSxDQUFBL1EsU0FBQSx3QkFBQUUsSUFBQSxNQUFzQjtNQUNoQ21OLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQy9CLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBb08sVUFBV25ELE1BQU0sRUFBRTtNQUNqQixJQUFNZ0MsSUFBSSxHQUFBaUQsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLHNCQUFBRSxJQUFBLE9BQW1CbUwsTUFBTSxDQUFDO01BQ3BDZ0MsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDekJKLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQzVCLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBeU8sZUFBZ0J4RCxNQUFNLEVBQUU7TUFDdEIsT0FBQWlGLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQVEsZUFBQSxDQUFBL1EsU0FBQSwyQkFBQUUsSUFBQSxPQUE0Qm1MLE1BQU07SUFDcEM7RUFBQztJQUFBdkwsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTBPLHFCQUFzQnpELE1BQU0sRUFBRTtNQUM1QixPQUFBaUYsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLGlDQUFBRSxJQUFBLE9BQWtDbUwsTUFBTTtJQUMxQztFQUFDO0lBQUF2TCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBMk8scUJBQUEsRUFBd0I7TUFDdEIsT0FBTyxhQUFhO0lBQ3RCO0VBQUM7SUFBQWpQLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE0TyxlQUFnQjNELE1BQU0sRUFBRTtNQUN0QixJQUFNM0gsV0FBVyxHQUFBNE0sYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLDJCQUFBRSxJQUFBLE9BQXdCbUwsTUFBTSxDQUFDO01BQ2hEM0gsV0FBVyxDQUFDOEosU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQ3RDLE9BQU8vSixXQUFXO0lBQ3BCO0VBQUM7SUFBQTVELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE2TyxtQkFBb0I1RCxNQUFNLEVBQUU7TUFDMUIsSUFBQW1GLFNBQUEsR0FBQUYsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLCtCQUFBRSxJQUFBLE9BQXNFbUwsTUFBTTtRQUFwRTZELE9BQU8sR0FBQXNCLFNBQUEsQ0FBUHRCLE9BQU87UUFBRUMsS0FBSyxHQUFBcUIsU0FBQSxDQUFMckIsS0FBSztRQUFFQyxLQUFLLEdBQUFvQixTQUFBLENBQUxwQixLQUFLO1FBQUVDLFNBQVMsR0FBQW1CLFNBQUEsQ0FBVG5CLFNBQVM7TUFDeENILE9BQU8sQ0FBQzFCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNuQzBCLEtBQUssQ0FBQzNCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUVuQyxJQUFJcEMsTUFBTSxDQUFDMkMsTUFBTSxFQUFFO1FBQ2pCb0IsS0FBSyxDQUFDNUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7TUFDeEM7TUFFQSxPQUFPO1FBQUV5QixPQUFPLEVBQVBBLE9BQU87UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBO01BQVUsQ0FBQztJQUM3QztFQUFDO0lBQUF2UCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBbVAsZ0JBQWlCbEUsTUFBTSxFQUFFO01BQ3ZCLElBQUFvRixVQUFBLEdBQUFILGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQVEsZUFBQSxDQUFBL1EsU0FBQSw0QkFBQUUsSUFBQSxPQUFtRW1MLE1BQU07UUFBakU2RCxPQUFPLEdBQUF1QixVQUFBLENBQVB2QixPQUFPO1FBQUVDLEtBQUssR0FBQXNCLFVBQUEsQ0FBTHRCLEtBQUs7UUFBRUMsS0FBSyxHQUFBcUIsVUFBQSxDQUFMckIsS0FBSztRQUFFQyxTQUFTLEdBQUFvQixVQUFBLENBQVRwQixTQUFTO01BQ3hDSCxPQUFPLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDbkMwQixLQUFLLENBQUMzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFFbkMsSUFBSXBDLE1BQU0sQ0FBQzJDLE1BQU0sRUFBRTtRQUNqQm9CLEtBQUssQ0FBQzVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO01BQ3hDO01BRUEsT0FBTztRQUFFeUIsT0FBTyxFQUFQQSxPQUFPO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxLQUFLLEVBQUxBLEtBQUs7UUFBRUMsU0FBUyxFQUFUQTtNQUFVLENBQUM7SUFDN0M7RUFBQztJQUFBdlAsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQW9QLGlCQUFrQm5FLE1BQU0sRUFBRTtNQUN4QixJQUFNNkQsT0FBTyxHQUFHNUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BRTdDLElBQU1rQyxNQUFNLEdBQUduQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7TUFDOUNrQyxNQUFNLENBQUM1QixXQUFXLEdBQUd4QyxNQUFNLENBQUMrRCxLQUFLO01BRWpDLElBQUkvRCxNQUFNLENBQUMyQyxNQUFNLEVBQUU7UUFDakJ5QixNQUFNLENBQUNqQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztNQUN6QztNQUVBeUIsT0FBTyxDQUFDSSxXQUFXLENBQUNHLE1BQU0sQ0FBQztNQUUzQixJQUFNQyxNQUFNLEdBQUcsRUFBRTtNQUVqQnJFLE1BQU0sQ0FBQ3NFLE1BQU0sQ0FBQ25OLE9BQU8sQ0FBQyxVQUFDcEMsS0FBSyxFQUFFYixLQUFLLEVBQUs7UUFDdEMsSUFBTXFRLFlBQVksR0FBR3RDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNsRHFDLFlBQVksQ0FBQ3BDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUV4QyxJQUFNb0MsS0FBSyxHQUFHdkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDc0MsS0FBSyxDQUFDbEIsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7UUFDbkNrQixLQUFLLENBQUNsQixZQUFZLENBQUMsSUFBSSxFQUFFdEQsTUFBTSxDQUFDdUQsRUFBRSxHQUFHLEdBQUcsR0FBR3JQLEtBQUssQ0FBQztRQUNqRHNRLEtBQUssQ0FBQ2xCLFlBQVksQ0FBQyxPQUFPLEVBQUV2TyxLQUFLLENBQUM7UUFDbEN5UCxLQUFLLENBQUNyQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUN2Q2lDLE1BQU0sQ0FBQy9JLElBQUksQ0FBQ2tKLEtBQUssQ0FBQztRQUVsQixJQUFNVCxLQUFLLEdBQUc5QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0M2QixLQUFLLENBQUNULFlBQVksQ0FBQyxLQUFLLEVBQUV0RCxNQUFNLENBQUN1RCxFQUFFLEdBQUcsR0FBRyxHQUFHclAsS0FBSyxDQUFDO1FBQ2xENlAsS0FBSyxDQUFDNUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7UUFFdkMsSUFBSXBDLE1BQU0sQ0FBQ3lFLE1BQU0sSUFBSXpFLE1BQU0sQ0FBQ3lFLE1BQU0sQ0FBQ3ZRLEtBQUssQ0FBQyxFQUFFO1VBQ3pDNlAsS0FBSyxDQUFDdkIsV0FBVyxHQUFHeEMsTUFBTSxDQUFDeUUsTUFBTSxDQUFDdlEsS0FBSyxDQUFDO1FBQzFDO1FBRUEyUCxPQUFPLENBQUNJLFdBQVcsQ0FBQ00sWUFBWSxDQUFDO1FBQ2pDQSxZQUFZLENBQUNOLFdBQVcsQ0FBQ08sS0FBSyxDQUFDO1FBQy9CRCxZQUFZLENBQUNOLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDO01BQ2pDLENBQUMsQ0FBQztNQUVGLE9BQU87UUFBRUYsT0FBTyxFQUFQQSxPQUFPO1FBQUVRLE1BQU0sRUFBTkE7TUFBTyxDQUFDO0lBQzVCO0VBQUM7SUFBQTVQLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEyUCxtQkFBb0IxRSxNQUFNLEVBQUU7TUFDMUIsSUFBQXFGLFVBQUEsR0FBQUosYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLCtCQUFBRSxJQUFBLE9BQXNFbUwsTUFBTTtRQUFwRTZELE9BQU8sR0FBQXdCLFVBQUEsQ0FBUHhCLE9BQU87UUFBRUMsS0FBSyxHQUFBdUIsVUFBQSxDQUFMdkIsS0FBSztRQUFFQyxLQUFLLEdBQUFzQixVQUFBLENBQUx0QixLQUFLO1FBQUVDLFNBQVMsR0FBQXFCLFVBQUEsQ0FBVHJCLFNBQVM7TUFDeENILE9BQU8sQ0FBQzFCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNuQzBCLEtBQUssQ0FBQzNCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO01BQ3ZDMkIsS0FBSyxDQUFDNUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFFdkMsSUFBSXBDLE1BQU0sQ0FBQzJDLE1BQU0sRUFBRTtRQUNqQm9CLEtBQUssQ0FBQzVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO01BQ3hDO01BQ0F5QixPQUFPLENBQUNJLFdBQVcsQ0FBQ0gsS0FBSyxDQUFDO01BQzFCRCxPQUFPLENBQUNJLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDO01BQzFCLE9BQU87UUFBRUYsT0FBTyxFQUFQQSxPQUFPO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxLQUFLLEVBQUxBLEtBQUs7UUFBRUMsU0FBUyxFQUFUQTtNQUFVLENBQUM7SUFDN0M7RUFBQztJQUFBdlAsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTRQLGlCQUFrQjNFLE1BQU0sRUFBRTtNQUN4QixJQUFNNkQsT0FBTyxHQUFBb0IsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLDZCQUFBRSxJQUFBLE9BQTBCbUwsTUFBTSxDQUFDO01BQzlDNkQsT0FBTyxDQUFDQyxLQUFLLENBQUMzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDMUMsT0FBT3lCLE9BQU87SUFDaEI7RUFBQztJQUFBcFAsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTZQLFlBQWE1RSxNQUFNLEVBQUU7TUFDbkIsSUFBQXNGLFVBQUEsR0FBQUwsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLHdCQUFBRSxJQUFBLE9BQStEbUwsTUFBTTtRQUE3RDZELE9BQU8sR0FBQXlCLFVBQUEsQ0FBUHpCLE9BQU87UUFBRUMsS0FBSyxHQUFBd0IsVUFBQSxDQUFMeEIsS0FBSztRQUFFQyxLQUFLLEdBQUF1QixVQUFBLENBQUx2QixLQUFLO1FBQUVDLFNBQVMsR0FBQXNCLFVBQUEsQ0FBVHRCLFNBQVM7TUFDeENGLEtBQUssQ0FBQzNCLFNBQVMsQ0FBQ3FELE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDckN6QixLQUFLLENBQUM1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztNQUN0QyxPQUFPO1FBQUV5QixPQUFPLEVBQVBBLE9BQU87UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBO01BQVUsQ0FBQztJQUM3QztFQUFDO0lBQUF2UCxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBOFAsU0FBVTdFLE1BQU0sRUFBRTtNQUNoQixJQUFNZ0MsSUFBSSxHQUFBaUQsYUFBQSxDQUFBQyx3QkFBQSxDQUFBUSxlQUFBLENBQUEvUSxTQUFBLHFCQUFBRSxJQUFBLE9BQWtCbUwsTUFBTSxDQUFDO01BQ25DZ0MsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDM0JKLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO01BQ2xDLE9BQU9KLElBQUk7SUFDYjtFQUFDO0lBQUF2TixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBK1AsbUJBQW9COUUsTUFBTSxFQUFFO01BQzFCLElBQU1nQyxJQUFJLEdBQUFpRCxhQUFBLENBQUFDLHdCQUFBLENBQUFRLGVBQUEsQ0FBQS9RLFNBQUEsK0JBQUFFLElBQUEsT0FBNEJtTCxNQUFNLENBQUM7TUFDN0NnQyxJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUNqQ0osSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDN0JKLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQy9CLE9BQU9KLElBQUk7SUFDYjtFQUFDO0VBQUEsT0FBQTBELGVBQUE7QUFBQSxFQTlNMkI1RCxTQUFjO0FBaU43QjRELHlFQUFlLEU7Ozs7Ozs7OztBQ25OYTtBQUNPO0FBQ0E7QUFDQTtBQUNGO0FBQ0M7QUFBQSxJQUUzQ0UsYUFBTSwwQkFBQWhHLGFBQUE7RUFBQUMsa0JBQUEsQ0FBQStGLE1BQUEsRUFBQWhHLGFBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLGtCQUFBLENBQUE2RixNQUFBO0VBQ1YsU0FBQUEsT0FBYUMsUUFBUSxFQUFFO0lBQUEsSUFBQW5MLEtBQUE7SUFBQWhELHdCQUFBLE9BQUFrTyxNQUFBO0lBQ3JCbEwsS0FBQSxHQUFBb0YsTUFBQSxDQUFBakwsSUFBQTtJQUNBNkYsS0FBQSxDQUFLbUwsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCbkwsS0FBQSxDQUFLb0wsS0FBSyxHQUFHLElBQUk7SUFDakJwTCxLQUFBLENBQUtxTCxTQUFTLEdBQUcsSUFBSTtJQUNyQnJMLEtBQUEsQ0FBS3NMLGNBQWMsR0FBRyxJQUFJO0lBQzFCdEwsS0FBQSxDQUFLaUwsV0FBVyxHQUFHLElBQUk7SUFDdkJqTCxLQUFBLENBQUt1TCxZQUFZLEdBQUcsSUFBSTtJQUN4QnZMLEtBQUEsQ0FBS3dMLFdBQVcsR0FBRyxJQUFJO0lBQ3ZCeEwsS0FBQSxDQUFLeUwsZ0JBQWdCLEdBQUcsSUFBSTtJQUM1QnpMLEtBQUEsQ0FBSzBMLFlBQVksR0FBRyxJQUFJO0lBQ3hCMUwsS0FBQSxDQUFLckMsV0FBVyxHQUFHLElBQUk7SUFDdkJxQyxLQUFBLENBQUsyTCxRQUFRLEdBQUcsS0FBSztJQUNyQjNMLEtBQUEsQ0FBSzRGLElBQUksRUFBRTtJQUNYNUYsS0FBQSxDQUFLNEwsS0FBSyxFQUFFO0lBQ1o1TCxLQUFBLENBQUs2TCxzQkFBc0IsRUFBRTtJQUM3QjdMLEtBQUEsQ0FBSzhMLFNBQVMsRUFBRTtJQUVoQixJQUFJOUwsS0FBQSxDQUFLbUwsUUFBUSxDQUFDNUYsSUFBSSxDQUFDdEcsT0FBTyxDQUFDOE0sZ0JBQWdCLElBQUkvTCxLQUFBLENBQUttTCxRQUFRLENBQUNwTyxNQUFNLENBQUNpQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRTtNQUNsR2dCLEtBQUEsQ0FBS2dNLG9CQUFvQixFQUFFO0lBQzdCO0lBRUFoTSxLQUFBLENBQUttTCxRQUFRLENBQUN0RyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQU07TUFDbEM3RSxLQUFBLENBQUs4TCxTQUFTLEVBQUU7TUFDaEI5TCxLQUFBLENBQUtnTSxvQkFBb0IsRUFBRTtJQUM3QixDQUFDLENBQUM7SUFFRmhNLEtBQUEsQ0FBS21MLFFBQVEsQ0FBQ3RHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBTTtNQUMvQjdFLEtBQUEsQ0FBS2dNLG9CQUFvQixFQUFFO0lBQzdCLENBQUMsQ0FBQztJQUFBLE9BQUFoTSxLQUFBO0VBQ0o7RUFBQy9DLHFCQUFBLENBQUFpTyxNQUFBO0lBQUFuUixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBdUwsS0FBQSxFQUFRO01BQ04sUUFBUSxJQUFJLENBQUN1RixRQUFRLENBQUM1RixJQUFJLENBQUN0RyxPQUFPLENBQUNtTSxLQUFLO1FBQ3RDLEtBQUssWUFBWTtVQUNmLElBQUksQ0FBQ0EsS0FBSyxHQUFHLElBQUlmLFVBQWUsRUFBRTtVQUNsQztRQUNGLEtBQUssWUFBWTtVQUNmLElBQUksQ0FBQ2UsS0FBSyxHQUFHLElBQUlMLFVBQWUsRUFBRTtVQUNsQztRQUNGLEtBQUssWUFBWTtVQUNmLElBQUksQ0FBQ0ssS0FBSyxHQUFHLElBQUlKLFVBQWUsRUFBRTtVQUNsQztRQUNGLEtBQUssV0FBVztVQUNkLElBQUksQ0FBQ0ksS0FBSyxHQUFHLElBQUloRSxTQUFjLEVBQUU7VUFDakM7UUFDRjtVQUNFLElBQUksQ0FBQ2dFLEtBQUssR0FBRyxJQUFJaEUsU0FBYyxFQUFFO01BQUE7TUFHckMsSUFBSSxDQUFDaUUsU0FBUyxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDL0Qsa0JBQWtCLEVBQUU7TUFDaEQsSUFBSSxDQUFDaUUsY0FBYyxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDbEQsaUJBQWlCLENBQUM7UUFDakRXLEVBQUUsRUFBRSxrQkFBa0IsR0FBR25QLGVBQWUsQ0FBQyxJQUFJLENBQUN5UixRQUFRLENBQUN4UixJQUFJO01BQzdELENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ3NSLFdBQVcsR0FBRyxJQUFJLENBQUNHLEtBQUssQ0FBQzdDLGNBQWMsRUFBRTtNQUM5QyxJQUFJLENBQUNnRCxZQUFZLEdBQUcsSUFBSSxDQUFDSCxLQUFLLENBQUM5QyxlQUFlLEVBQUU7TUFDaEQsSUFBSSxDQUFDa0QsV0FBVyxHQUFHLElBQUksQ0FBQ0osS0FBSyxDQUFDakQsY0FBYyxFQUFFO01BQzlDLElBQUksQ0FBQ3NELGdCQUFnQixHQUFHLElBQUksQ0FBQ0wsS0FBSyxDQUFDaEQsbUJBQW1CLEVBQUU7TUFDeEQsSUFBSSxDQUFDc0QsWUFBWSxHQUFHLElBQUksQ0FBQ04sS0FBSyxDQUFDL0MsZUFBZSxFQUFFO01BRWhELElBQUksQ0FBQzFLLFdBQVcsR0FBRyxJQUFJLENBQUN5TixLQUFLLENBQUNuQyxjQUFjLENBQUM7UUFDM0NuQixXQUFXLEVBQUUsSUFBSSxDQUFDcUQsUUFBUSxDQUFDcE8sTUFBTSxDQUFDWSxXQUFXO01BQy9DLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQTVELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF3Uix1QkFBQSxFQUEwQjtNQUN4QixJQUFJLENBQUNSLFNBQVMsQ0FBQ3pDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDdUMsUUFBUSxDQUFDeFIsSUFBSSxDQUFDO01BRTVELElBQUkwQixLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDZixJQUFJLEVBQUUsQ0FBQyxFQUFFO1FBQ3RDLElBQUksQ0FBQ3FQLFNBQVMsQ0FBQ3pDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDdUMsUUFBUSxDQUFDcE8sTUFBTSxDQUFDZixJQUFJLEVBQUUsQ0FBQztNQUN2RTtJQUNGO0VBQUM7SUFBQWpDLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF1UixNQUFBLEVBQVMsQ0FBQztFQUFDO0lBQUE3UixHQUFBO0lBQUFNLEtBQUEsRUFFWCxTQUFBeVIsVUFBQSxFQUFhLENBQUM7O0lBRWQ7QUFDRjtBQUNBO0VBRkU7SUFBQS9SLEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUEyUixxQkFBQSxFQUF3QjtNQUFBLElBQUFuRyxNQUFBO01BQ3RCLElBQU0zRixNQUFNLEdBQUcsSUFBSSxDQUFDaUwsUUFBUSxDQUFDMUssUUFBUSxFQUFFO01BRXZDLElBQUksQ0FBQzhLLFlBQVksQ0FBQ1UsU0FBUyxHQUFHLEVBQUU7TUFFaEMvTCxNQUFNLENBQUN6RCxPQUFPLENBQUMsVUFBQytHLEtBQUssRUFBSztRQUN4QixJQUFNMEksZUFBZSxHQUFHckcsTUFBSSxDQUFDdUUsa0JBQWtCLENBQUM1RyxLQUFLLENBQUMzQyxPQUFPLENBQUM7UUFDOURnRixNQUFJLENBQUMwRixZQUFZLENBQUNoQyxXQUFXLENBQUMyQyxlQUFlLENBQUM7TUFDaEQsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBblMsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQStQLG1CQUFvQnZKLE9BQU8sRUFBRTtNQUMzQixPQUFPLElBQUksQ0FBQ3VLLEtBQUssQ0FBQ2hCLGtCQUFrQixDQUFDO1FBQ25DdkosT0FBTyxFQUFFQTtNQUNYLENBQUMsQ0FBQztJQUNKOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUE5RyxHQUFBO0lBQUFNLEtBQUEsRUFHQSxTQUFBOFIsUUFBQSxFQUFXO01BQ1QsSUFBSSxDQUFDUixRQUFRLEdBQUcsSUFBSTtNQUNwQixJQUFJLENBQUNHLFNBQVMsRUFBRTtJQUNsQjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBL1IsR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQStSLE9BQUEsRUFBVTtNQUNSLElBQUksQ0FBQ1QsUUFBUSxHQUFHLEtBQUs7TUFDckIsSUFBSSxDQUFDRyxTQUFTLEVBQUU7SUFDbEI7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQS9SLEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUFnUyxTQUFVaFMsS0FBSyxFQUFFO01BQ2YsT0FBT0EsS0FBSztJQUNkO0VBQUM7SUFBQU4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTBGLFFBQUEsRUFBVztNQUFBLElBQUFtSCxNQUFBO01BQ1QsSUFBSSxJQUFJLENBQUNtRSxTQUFTLElBQUksSUFBSSxDQUFDQSxTQUFTLENBQUNpQixVQUFVLEVBQUU7UUFDL0MsSUFBSSxDQUFDakIsU0FBUyxDQUFDaUIsVUFBVSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDbEIsU0FBUyxDQUFDO01BQ3ZEO01BRUFyUixNQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzhCLE9BQU8sQ0FBQyxVQUFDMUMsR0FBRyxFQUFLO1FBQ2pDLE9BQU9tTixNQUFJLENBQUNuTixHQUFHLENBQUM7TUFDbEIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFtUixNQUFBO0FBQUEsRUFqSWtCdkcsYUFBWTtBQW9JbEJ1RyxnRUFBTSxFOzs7Ozs7Ozs7O0FDM0lRO0FBQ2E7QUFBQSxJQUVwQ3NCLHVCQUFjLDBCQUFBQyxPQUFBO0VBQUF0SCxrQkFBQSxDQUFBcUgsY0FBQSxFQUFBQyxPQUFBO0VBQUEsSUFBQXJILE1BQUEsR0FBQUMsb0JBQUEsQ0FBQW1ILGNBQUE7RUFBQSxTQUFBQSxlQUFBO0lBQUF4UCx3QkFBQSxPQUFBd1AsY0FBQTtJQUFBLE9BQUFwSCxNQUFBLENBQUF4SSxLQUFBLE9BQUFSLFNBQUE7RUFBQTtFQUFBYSxxQkFBQSxDQUFBdVAsY0FBQTtJQUFBelMsR0FBQTtJQUFBTSxLQUFBLEVBQ2xCLFNBQUF1UixNQUFBLEVBQVM7TUFBQSxJQUFBNUwsS0FBQTtNQUNQLElBQUksQ0FBQzBNLFFBQVEsR0FBRyxJQUFJLENBQUN0QixLQUFLLENBQUN6RCxXQUFXLEVBQUU7TUFDeEMsSUFBSSxDQUFDK0IsTUFBTSxHQUFHLElBQUksQ0FBQzBCLEtBQUssQ0FBQ3ZELFNBQVMsQ0FBQztRQUNqQ0MsV0FBVyxFQUFFO01BQ2YsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDNkUsWUFBWSxHQUFHLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQ3hELGVBQWUsRUFBRTtNQUVoRCxJQUFJLENBQUNnRixRQUFRLEdBQUcsSUFBSSxDQUFDeEIsS0FBSyxDQUFDbEIsV0FBVyxDQUFDO1FBQ3JDTixNQUFNLEVBQUUsSUFBSSxDQUFDdUIsUUFBUSxDQUFDMEIsb0JBQW9CO1FBQzFDOUMsTUFBTSxFQUFFLElBQUksQ0FBQ29CLFFBQVEsQ0FBQzJCLHFCQUFxQjtRQUMzQ2pFLEVBQUUsRUFBRW5QLGVBQWUsQ0FBQyxJQUFJLENBQUN5UixRQUFRLENBQUN4UixJQUFJLENBQUMsR0FBRyxXQUFXO1FBQ3JEMFAsS0FBSyxFQUFFM1AsZUFBZSxDQUFDLElBQUksQ0FBQ3lSLFFBQVEsQ0FBQ3hSLElBQUksQ0FBQyxHQUFHLFdBQVc7UUFDeERzTyxNQUFNLEVBQUU7TUFDVixDQUFDLENBQUM7TUFFRixJQUFJLENBQUMyRSxRQUFRLENBQUN6RCxPQUFPLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7TUFFcEQsSUFBSSxDQUFDa0YsUUFBUSxDQUFDeEQsS0FBSyxDQUFDMkQsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07UUFDbkQsSUFBTXZULEtBQUssR0FBR3dULE1BQU0sQ0FBQ2hOLEtBQUksQ0FBQzRNLFFBQVEsQ0FBQ3hELEtBQUssQ0FBQy9PLEtBQUssQ0FBQztRQUMvQzJGLEtBQUksQ0FBQ21MLFFBQVEsQ0FBQzhCLGNBQWMsQ0FBQ3pULEtBQUssQ0FBQztNQUNyQyxDQUFDLENBQUM7O01BRUY7TUFDQSxJQUFJLENBQUM2UixTQUFTLENBQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDbUQsUUFBUSxDQUFDO01BQ3pDLElBQUksQ0FBQ0EsUUFBUSxDQUFDbkQsV0FBVyxDQUFDLElBQUksQ0FBQ0csTUFBTSxDQUFDO01BQ3RDLElBQUksQ0FBQ2dELFFBQVEsQ0FBQ25ELFdBQVcsQ0FBQyxJQUFJLENBQUNvRCxZQUFZLENBQUM7TUFDNUMsSUFBSSxDQUFDakQsTUFBTSxDQUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDaUMsV0FBVyxDQUFDO01BQ3pDLElBQUksQ0FBQ0gsU0FBUyxDQUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQ2dDLFlBQVksQ0FBQztNQUM3QyxJQUFJLENBQUNDLFdBQVcsQ0FBQ2pDLFdBQVcsQ0FBQyxJQUFJLENBQUNxRCxRQUFRLENBQUN6RCxPQUFPLENBQUM7SUFDckQ7RUFBQztJQUFBcFAsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXlSLFVBQUEsRUFBYTtNQUNYLElBQU1vQixXQUFXLEdBQUcsSUFBSSxDQUFDL0IsUUFBUSxDQUFDZ0MsU0FBUyxDQUFDLElBQUksQ0FBQ2hDLFFBQVEsQ0FBQ2lDLFNBQVMsQ0FBQztNQUVwRSxJQUFJRixXQUFXLENBQUN2SCxFQUFFLENBQUMwRixTQUFTLENBQUNpQixVQUFVLEVBQUU7UUFDdkMsSUFBSSxDQUFDSyxZQUFZLENBQUNKLFdBQVcsQ0FBQ1csV0FBVyxDQUFDdkgsRUFBRSxDQUFDMEYsU0FBUyxDQUFDO01BQ3pEO01BRUEsSUFBSSxDQUFDc0IsWUFBWSxDQUFDcEQsV0FBVyxDQUFDLElBQUksQ0FBQzRCLFFBQVEsQ0FBQ2tDLGNBQWMsQ0FBQzFILEVBQUUsQ0FBQzBGLFNBQVMsQ0FBQztNQUV4RSxJQUFNaUMsT0FBTyxHQUFHLElBQUksQ0FBQ2pDLFNBQVMsQ0FBQ2tDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztNQUV6RCxJQUFJLElBQUksQ0FBQzVCLFFBQVEsRUFBRTtRQUNqQixJQUFJLENBQUNSLFFBQVEsQ0FBQ2tDLGNBQWMsQ0FBQzFILEVBQUUsQ0FBQ3dHLE9BQU8sRUFBRTtRQUN6QyxJQUFJLENBQUNTLFFBQVEsQ0FBQ3hELEtBQUssQ0FBQ1IsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDeEQwRSxPQUFPLENBQUM3USxPQUFPLENBQUMsVUFBQytRLE1BQU0sRUFBSztVQUMxQkEsTUFBTSxDQUFDN0IsUUFBUSxHQUFHLElBQUk7UUFDeEIsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDUixRQUFRLENBQUNrQyxjQUFjLENBQUMxSCxFQUFFLENBQUN5RyxNQUFNLEVBQUU7UUFDeEMsSUFBSSxDQUFDUSxRQUFRLENBQUN4RCxLQUFLLENBQUNxRSxlQUFlLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztRQUMzREgsT0FBTyxDQUFDN1EsT0FBTyxDQUFDLFVBQUMrUSxNQUFNLEVBQUs7VUFDMUJBLE1BQU0sQ0FBQzdCLFFBQVEsR0FBRyxLQUFLO1FBQ3pCLENBQUMsQ0FBQztNQUNKO0lBQ0Y7RUFBQztJQUFBNVIsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTJSLHFCQUFBLEVBQXdCO01BQ3RCekIsYUFBQSxDQUFBQyx3QkFBQSxDQUFBZ0MsY0FBQSxDQUFBdlMsU0FBQSxpQ0FBQUUsSUFBQTtNQUNBLElBQUksQ0FBQ2dSLFFBQVEsQ0FBQ2tDLGNBQWMsQ0FBQzFILEVBQUUsQ0FBQ3FHLG9CQUFvQixFQUFFO0lBQ3hEO0VBQUM7SUFBQWpTLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUErUCxtQkFBb0J2SixPQUFPLEVBQUU7TUFDM0IsT0FBTyxJQUFJLENBQUN1SyxLQUFLLENBQUNqQixRQUFRLENBQUM7UUFDekJ0SixPQUFPLEVBQUVBO01BQ1gsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUEyTCxjQUFBO0FBQUEsRUFuRTBCdEIsY0FBTTtBQXNFcEJzQixvRUFBYyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDekVJO0FBQ2U7QUFRL0I7QUFBQSxJQUVYa0IseUJBQWdCLDBCQUFBQyxTQUFBO0VBQUF4SSxrQkFBQSxDQUFBdUksZ0JBQUEsRUFBQUMsU0FBQTtFQUFBLElBQUF2SSxNQUFBLEdBQUFDLDhCQUFBLENBQUFxSSxnQkFBQTtFQUFBLFNBQUFBLGlCQUFBO0lBQUExUSx3QkFBQSxPQUFBMFEsZ0JBQUE7SUFBQSxPQUFBdEksTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQXlRLGdCQUFBO0lBQUEzVCxHQUFBO0lBQUFNLEtBQUEsRUFDcEIsU0FBQThMLE1BQUEsRUFBUztNQUNQLElBQUksQ0FBQ1IsRUFBRSxHQUFHLElBQUk2RyxRQUFjLENBQUMsSUFBSSxDQUFDO0lBQ3BDO0VBQUM7SUFBQXpTLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEyTCxRQUFBLEVBQVc7TUFBQSxJQUFBaEcsS0FBQTtNQUNULElBQUksQ0FBQ21OLFNBQVMsR0FBRyxFQUFFO01BQ25CLElBQUksQ0FBQ0UsY0FBYyxHQUFHLElBQUk7TUFDMUIsSUFBSSxDQUFDRCxTQUFTLEdBQUcsQ0FBQztNQUNsQixJQUFJLENBQUM1VCxLQUFLLEdBQUcsQ0FBQztNQUNkLElBQUksQ0FBQ29VLE9BQU8sR0FBRyxFQUFFO01BQ2pCLElBQUksQ0FBQ2Ysb0JBQW9CLEdBQUcsRUFBRTtNQUM5QixJQUFJLENBQUNDLHFCQUFxQixHQUFHLEVBQUU7TUFFL0IsSUFBSSxDQUFDakksRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFNO1FBQ3pCN0UsS0FBSSxDQUFDNk4sVUFBVSxFQUFFO01BQ25CLENBQUMsQ0FBQztNQUVGLElBQUl4UyxLQUFLLENBQUMsSUFBSSxDQUFDMEIsTUFBTSxDQUFDTSxLQUFLLEVBQUUsQ0FBQyxJQUFJaEMsS0FBSyxDQUFDLElBQUksQ0FBQzBCLE1BQU0sQ0FBQzhDLEtBQUssRUFBRSxDQUFDLEVBQUU7UUFDNUQsSUFBTWlPLFNBQVMsR0FBR3pTLEtBQUssQ0FBQyxJQUFJLENBQUMwQixNQUFNLENBQUNNLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDTixNQUFNLENBQUNNLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQ04sTUFBTSxDQUFDOEMsS0FBSyxFQUFFO1FBQ3hGLElBQU1rTyxXQUFXLEdBQUcsSUFBSSxDQUFDaFIsTUFBTSxDQUFDL0QsS0FBSyxFQUFFO1FBQ3ZDLE9BQU8rVSxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQzNCLE9BQU9BLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDM0IsT0FBT0EsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUU3QkQsU0FBUyxDQUFDclIsT0FBTyxDQUFDLFVBQUNNLE1BQU0sRUFBRXZELEtBQUssRUFBSztVQUFBLElBQUF3VSxlQUFBLEVBQUFDLGdCQUFBO1VBQ25DbFIsTUFBTSxHQUFBbVIsYUFBQSxDQUFBQSxhQUFBLEtBQVFILFdBQVcsR0FBS2hSLE1BQU0sQ0FBRTs7VUFFdEM7VUFDQSxJQUFJMUIsS0FBSyxDQUFDMEIsTUFBTSxDQUFDSSxLQUFLLENBQUMsS0FBQTZRLGVBQUEsR0FBSWpSLE1BQU0sQ0FBQ2tDLE9BQU8sY0FBQStPLGVBQUEsZUFBZEEsZUFBQSxDQUFnQkcsVUFBVSxFQUFFO1lBQ3JELElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFZnJSLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDVixPQUFPLENBQUMsVUFBQzRSLFdBQVcsRUFBSztjQUNwQ0QsTUFBTSxHQUFHblMsZUFBUyxDQUFDbVMsTUFBTSxFQUFFQyxXQUFXLENBQUM7WUFDekMsQ0FBQyxDQUFDO1lBRUZ0UixNQUFNLEdBQUdxUixNQUFNO1VBQ2pCO1VBRUEsSUFBSS9TLEtBQUssQ0FBQzBTLFdBQVcsQ0FBQ3JPLEtBQUssQ0FBQyxFQUFFO1lBQzVCM0MsTUFBTSxDQUFDMkMsS0FBSyxHQUFHcU8sV0FBVyxDQUFDck8sS0FBSztVQUNsQztVQUVBLElBQU00TyxvQkFBb0IsR0FBRyxFQUFBTCxnQkFBQSxHQUFBbFIsTUFBTSxDQUFDa0MsT0FBTyxjQUFBZ1AsZ0JBQUEsdUJBQWRBLGdCQUFBLENBQWdCTSxhQUFhLEtBQUksU0FBUyxJQUFJL1UsS0FBSyxHQUFHLENBQUMsQ0FBQztVQUNyRndHLEtBQUksQ0FBQzZNLG9CQUFvQixDQUFDak0sSUFBSSxDQUFDcEgsS0FBSyxDQUFDO1VBQ3JDd0csS0FBSSxDQUFDOE0scUJBQXFCLENBQUNsTSxJQUFJLENBQUMwTixvQkFBb0IsQ0FBQztVQUVyRHRPLEtBQUksQ0FBQzROLE9BQU8sQ0FBQ2hOLElBQUksQ0FBQzdELE1BQU0sQ0FBQztRQUMzQixDQUFDLENBQUM7TUFDSixDQUFDLE1BQU0sSUFBSW5CLE9BQU8sQ0FBQyxJQUFJLENBQUNtQixNQUFNLENBQUNmLElBQUksRUFBRSxDQUFDLEVBQUU7UUFDdEMsSUFBSSxDQUFDZSxNQUFNLENBQUNmLElBQUksRUFBRSxDQUFDUyxPQUFPLENBQUMsVUFBQ1QsSUFBSSxFQUFFeEMsS0FBSyxFQUFLO1VBQzFDLElBQU1nTCxXQUFXLEdBQUd4RSxLQUFJLENBQUNqRCxNQUFNLENBQUMvRCxLQUFLLEVBQUU7VUFFdkMsSUFBTStELE1BQU0sR0FBQW1SLGFBQUEsQ0FBQUEsYUFBQSxLQUNQMUosV0FBVyxHQUNYO1lBQUV4SSxJQUFJLEVBQUVBLElBQUk7WUFBRTBELEtBQUssRUFBRTFELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ3dTLFdBQVcsRUFBRSxHQUFHeFMsSUFBSSxDQUFDeVMsS0FBSyxDQUFDLENBQUM7VUFBRSxDQUFDLENBQ2hFO1VBRUQsSUFBSXBULEtBQUssQ0FBQ21KLFdBQVcsQ0FBQzlFLEtBQUssQ0FBQyxFQUFFO1lBQzVCM0MsTUFBTSxDQUFDMkMsS0FBSyxHQUFHOEUsV0FBVyxDQUFDOUUsS0FBSztVQUNsQztVQUVBTSxLQUFJLENBQUM2TSxvQkFBb0IsQ0FBQ2pNLElBQUksQ0FBQ3BILEtBQUssQ0FBQztVQUNyQ3dHLEtBQUksQ0FBQzhNLHFCQUFxQixDQUFDbE0sSUFBSSxDQUFDNUUsSUFBSSxDQUFDMFMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDRixXQUFXLEVBQUUsR0FBR3hTLElBQUksQ0FBQ3lTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUU3RXpPLEtBQUksQ0FBQzROLE9BQU8sQ0FBQ2hOLElBQUksQ0FBQzdELE1BQU0sQ0FBQztRQUMzQixDQUFDLENBQUM7TUFDSixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sQ0FBQzRDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzVDLE1BQU0sQ0FBQ2YsSUFBSSxFQUFFLEVBQUU7UUFDM0QsSUFBTXdJLFlBQVcsR0FBRyxJQUFJLENBQUN6SCxNQUFNLENBQUMvRCxLQUFLLEVBQUU7UUFFdkMsSUFBSSxDQUFDNFUsT0FBTyxHQUFHLENBQUFNLGFBQUEsQ0FBQUEsYUFBQSxLQUNSMUosWUFBVyxHQUFLO1VBQUV4SSxJQUFJLEVBQUU7UUFBUyxDQUFDLEdBQUFrUyxhQUFBLENBQUFBLGFBQUEsS0FDbEMxSixZQUFXLEdBQUs7VUFBRXhJLElBQUksRUFBRTtRQUFTLENBQUMsR0FBQWtTLGFBQUEsQ0FBQUEsYUFBQSxLQUNsQzFKLFlBQVcsR0FBSztVQUFFeEksSUFBSSxFQUFFO1FBQVUsQ0FBQyxHQUFBa1MsYUFBQSxDQUFBQSxhQUFBLEtBQ25DMUosWUFBVyxHQUFLO1VBQUV4SSxJQUFJLEVBQUU7UUFBVSxDQUFDLEdBQUFrUyxhQUFBLENBQUFBLGFBQUEsS0FDbkMxSixZQUFXLEdBQUs7VUFBRXhJLElBQUksRUFBRTtRQUFRLENBQUMsR0FBQWtTLGFBQUEsQ0FBQUEsYUFBQSxLQUNqQzFKLFlBQVcsR0FBSztVQUFFeEksSUFBSSxFQUFFO1FBQVMsQ0FBQyxHQUFBa1MsYUFBQSxDQUFBQSxhQUFBLEtBQ2xDMUosWUFBVyxHQUFLO1VBQUV4SSxJQUFJLEVBQUU7UUFBTyxDQUFDLEVBQ3RDO1FBRUQsSUFBSSxDQUFDNFIsT0FBTyxDQUFDblIsT0FBTyxDQUFDLFVBQUNNLE1BQU0sRUFBRXZELEtBQUssRUFBSztVQUN0Q3dHLEtBQUksQ0FBQzZNLG9CQUFvQixDQUFDak0sSUFBSSxDQUFDcEgsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ3NULHFCQUFxQixHQUFHLENBQzNCLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FDcEU7TUFDSDs7TUFFQTtNQUNBLElBQUksQ0FBQ2MsT0FBTyxDQUFDblIsT0FBTyxDQUFDLFVBQUNNLE1BQU0sRUFBSztRQUMvQixJQUFNb08sUUFBUSxHQUFHbkwsS0FBSSxDQUFDdUYsSUFBSSxDQUFDb0osY0FBYyxDQUFDO1VBQ3hDcEosSUFBSSxFQUFFdkYsS0FBSSxDQUFDdUYsSUFBSTtVQUNmeEksTUFBTSxFQUFFQSxNQUFNO1VBQ2RwRCxJQUFJLEVBQUVxRyxLQUFJLENBQUNyRyxJQUFJO1VBQ2Y4TCxNQUFNLEVBQUV6RixLQUFJLENBQUN5RjtRQUNmLENBQUMsQ0FBQztRQUVGMEYsUUFBUSxDQUFDMUUsVUFBVSxFQUFFO1FBRXJCMEUsUUFBUSxDQUFDdEcsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFNO1VBQzFCN0UsS0FBSSxDQUFDK0UsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFRi9FLEtBQUksQ0FBQ21OLFNBQVMsQ0FBQ3ZNLElBQUksQ0FBQ3VLLFFBQVEsQ0FBQztRQUU3Qm5MLEtBQUksQ0FBQzhGLFFBQVEsRUFBRTtNQUNqQixDQUFDLENBQUM7TUFFRixJQUFNdEIsV0FBVyxHQUFHLElBQUksQ0FBQ3pILE1BQU0sQ0FBQy9ELEtBQUssRUFBRTtNQUN2QyxJQUFNNE4sUUFBUSxHQUFHMUwsY0FBUSxDQUFDc0osV0FBVyxDQUFDO01BRXRDLElBQUluSixLQUFLLENBQUMsSUFBSSxDQUFDOFIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDNUIsSUFBSSxDQUFDRixjQUFjLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRXJHLFFBQVEsQ0FBQztNQUN6QztJQUNGO0VBQUM7SUFBQTdNLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE0UyxlQUFnQjJCLFFBQVEsRUFBMEM7TUFBQSxJQUF4QzdILGNBQWMsR0FBQTNLLFNBQUEsQ0FBQTNDLE1BQUEsUUFBQTJDLFNBQUEsUUFBQWdCLFNBQUEsR0FBQWhCLFNBQUEsTUFBRyxJQUFJO01BQUEsSUFBRXdLLFFBQVEsR0FBQXhLLFNBQUEsQ0FBQTNDLE1BQUEsUUFBQTJDLFNBQUEsUUFBQWdCLFNBQUEsR0FBQWhCLFNBQUEsTUFBRyxJQUFJO01BQzlELElBQUksQ0FBQ2dSLFNBQVMsR0FBRyxJQUFJLENBQUM1VCxLQUFLO01BQzNCLElBQUksQ0FBQ0EsS0FBSyxHQUFHb1YsUUFBUTtNQUNyQixJQUFJLENBQUN2QixjQUFjLEdBQUcsSUFBSSxDQUFDRixTQUFTLENBQUMsSUFBSSxDQUFDM1QsS0FBSyxDQUFDO01BRWhELElBQUlvTixRQUFRLEVBQUU7UUFDWixJQUFJLENBQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUNDLFFBQVEsRUFBRSxFQUFFRSxjQUFjLENBQUM7TUFDaEQ7SUFDRjtFQUFDO0lBQUFoTixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBd1UsZ0JBQWlCeFUsS0FBSyxFQUFFO01BQ3RCLElBQUliLEtBQUssR0FBRyxDQUFDO01BQ2IsSUFBSXNWLFlBQVk7TUFDaEIsSUFBSUMsY0FBYztNQUFBLElBQUFDLFNBQUEsR0FBQUMsMEJBQUEsQ0FFSyxJQUFJLENBQUM5QixTQUFTO1FBQUErQixLQUFBO01BQUE7UUFBckMsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFDLElBQUEsR0FBdUM7VUFBQSxJQUE1QmxFLFFBQVEsR0FBQStELEtBQUEsQ0FBQTdVLEtBQUE7VUFDakIsSUFBSThRLFFBQVEsQ0FBQ2dDLFNBQVMsRUFBRTtZQUN0QmhDLFFBQVEsQ0FBQ3ZFLFFBQVEsQ0FBQ3ZNLEtBQUssQ0FBQztVQUMxQjtVQUVBLElBQU1pVixjQUFjLEdBQUcsSUFBSSxDQUFDL0osSUFBSSxDQUFDdEYsU0FBUyxDQUFDUSxRQUFRLENBQUNwRyxLQUFLLEVBQUU4USxRQUFRLENBQUNwTyxNQUFNLEVBQUVvTyxRQUFRLENBQUM5RSxNQUFNLEVBQUUsRUFBRThFLFFBQVEsQ0FBQ3hSLElBQUksQ0FBQztVQUU3RyxJQUFJMkIsTUFBTSxDQUFDd1QsWUFBWSxDQUFDLElBQUl4VCxNQUFNLENBQUN5VCxjQUFjLENBQUMsRUFBRTtZQUNsREQsWUFBWSxHQUFHdFYsS0FBSztZQUNwQnVWLGNBQWMsR0FBR08sY0FBYztVQUNqQztVQUVBLElBQUlBLGNBQWMsQ0FBQzdWLE1BQU0sR0FBR3NWLGNBQWMsQ0FBQ3RWLE1BQU0sRUFBRTtZQUNqRHFWLFlBQVksR0FBR3RWLEtBQUs7WUFDcEJ1VixjQUFjLEdBQUdPLGNBQWM7VUFDakM7VUFFQTlWLEtBQUssRUFBRTtRQUNUO01BQUMsU0FBQStWLEdBQUE7UUFBQVAsU0FBQSxDQUFBOU0sQ0FBQSxDQUFBcU4sR0FBQTtNQUFBO1FBQUFQLFNBQUEsQ0FBQVEsQ0FBQTtNQUFBO01BRUQsT0FBT1YsWUFBWTtJQUNyQjtFQUFDO0lBQUEvVSxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBd1QsV0FBQSxFQUFjO01BQ1osSUFBTXhULEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUs7O01BRXhCO01BQ0E7TUFDQSxJQUFJYyxTQUFTLENBQUMsSUFBSSxDQUFDa1MsY0FBYyxDQUFDeEcsUUFBUSxFQUFFLEVBQUV4TSxLQUFLLENBQUMsRUFBRTtRQUNwRCxJQUFNeVUsWUFBWSxHQUFHLElBQUksQ0FBQ0QsZUFBZSxDQUFDeFUsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQzRTLGNBQWMsQ0FBQzZCLFlBQVksQ0FBQztNQUNuQztNQUVBLElBQUksQ0FBQ3pCLGNBQWMsQ0FBQ3pHLFFBQVEsQ0FBQ3ZNLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDM0M7RUFBQztJQUFBTixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBd00sU0FBQSxFQUFZO01BQ1YsSUFBSSxDQUFDLElBQUksQ0FBQ3dHLGNBQWMsRUFBRTtRQUN4QjtNQUNGO01BRUEsT0FBTyxJQUFJLENBQUNBLGNBQWMsQ0FBQ3hHLFFBQVEsRUFBRTtJQUN2QztFQUFDO0lBQUE5TSxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBMEYsUUFBQSxFQUFXO01BQ1QsSUFBSSxDQUFDb04sU0FBUyxDQUFDMVEsT0FBTyxDQUFDLFVBQUMwTyxRQUFRLEVBQUs7UUFDbkNBLFFBQVEsQ0FBQ3BMLE9BQU8sRUFBRTtNQUNwQixDQUFDLENBQUM7TUFFRndLLGFBQUEsQ0FBQUMsd0JBQUEsQ0FBQWtELGdCQUFBLENBQUF6VCxTQUFBLG9CQUFBRSxJQUFBO0lBQ0Y7RUFBQztFQUFBLE9BQUF1VCxnQkFBQTtBQUFBLEVBdEw0QnpJLGtCQUFRO0FBeUx4QnlJLGdGQUFnQixFOzs7Ozs7Ozs7QUNwTUY7QUFDRztBQUFBLElBRTFCK0IscUJBQWEsMEJBQUFoRCxPQUFBO0VBQUF0SCxrQkFBQSxDQUFBc0ssYUFBQSxFQUFBaEQsT0FBQTtFQUFBLElBQUFySCxNQUFBLEdBQUFDLG1CQUFBLENBQUFvSyxhQUFBO0VBQUEsU0FBQUEsY0FBQTtJQUFBelMsd0JBQUEsT0FBQXlTLGFBQUE7SUFBQSxPQUFBckssTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQXdTLGFBQUE7SUFBQTFWLEdBQUE7SUFBQU0sS0FBQSxFQUNqQixTQUFBdVIsTUFBQSxFQUFTO01BQUEsSUFBQTVMLEtBQUE7TUFDUCxJQUFNbUosT0FBTyxHQUFHLElBQUksQ0FBQ2lDLEtBQUssQ0FBQ3BCLGtCQUFrQixDQUFDO1FBQzVDbkIsRUFBRSxFQUFFLElBQUksQ0FBQ3NDLFFBQVEsQ0FBQ3hSLElBQUk7UUFDdEIwUCxLQUFLLEVBQUVoTyxLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDMkMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUNwTyxNQUFNLENBQUMyQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUM5RSxNQUFNLEVBQUU7UUFDbEc0QixNQUFNLEVBQUUsSUFBSSxDQUFDa0QsUUFBUSxDQUFDcE8sTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFdBQVc7TUFDakQsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDbUssT0FBTyxHQUFHQSxPQUFPLENBQUNBLE9BQU87TUFDOUIsSUFBSSxDQUFDQyxLQUFLLEdBQUdELE9BQU8sQ0FBQ0MsS0FBSzs7TUFFMUI7TUFDQSxJQUFJLENBQUNBLEtBQUssQ0FBQzJELGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO1FBQzFDL00sS0FBSSxDQUFDbUwsUUFBUSxDQUFDdkUsUUFBUSxDQUFDNUcsS0FBSSxDQUFDb0osS0FBSyxDQUFDc0csT0FBTyxDQUFDO01BQzVDLENBQUMsQ0FBQzs7TUFFRjtNQUNBLElBQUksQ0FBQ3JFLFNBQVMsQ0FBQzlCLFdBQVcsQ0FBQyxJQUFJLENBQUMwQixXQUFXLENBQUM7TUFDNUMsSUFBSSxDQUFDQSxXQUFXLENBQUMxQixXQUFXLENBQUMsSUFBSSxDQUFDSixPQUFPLENBQUM7TUFDMUMsSUFBSTlOLEtBQUssQ0FBQyxJQUFJLENBQUM4UCxRQUFRLENBQUNwTyxNQUFNLENBQUNZLFdBQVcsRUFBRSxDQUFDLEVBQUU7UUFDN0MsSUFBSSxDQUFDd0wsT0FBTyxDQUFDSSxXQUFXLENBQUMsSUFBSSxDQUFDNUwsV0FBVyxDQUFDO01BQzVDO01BQ0EsSUFBSSxDQUFDd0wsT0FBTyxDQUFDSSxXQUFXLENBQUMsSUFBSSxDQUFDZ0MsWUFBWSxDQUFDO0lBQzdDO0VBQUM7SUFBQXhSLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFnUyxTQUFVaFMsS0FBSyxFQUFFO01BQ2YsT0FBT3NWLE9BQU8sQ0FBQ3RWLEtBQUssQ0FBQztJQUN2QjtFQUFDO0lBQUFOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF5UixVQUFBLEVBQWE7TUFDWCxJQUFJLENBQUMxQyxLQUFLLENBQUNzRyxPQUFPLEdBQUcsSUFBSSxDQUFDdkUsUUFBUSxDQUFDdEUsUUFBUSxFQUFFO01BRTdDLElBQUksSUFBSSxDQUFDOEUsUUFBUSxFQUFFO1FBQ2pCLElBQUksQ0FBQ3ZDLEtBQUssQ0FBQ1IsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7TUFDakQsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDUSxLQUFLLENBQUNxRSxlQUFlLENBQUMsVUFBVSxDQUFDO01BQ3hDO0lBQ0Y7RUFBQztFQUFBLE9BQUFnQyxhQUFBO0FBQUEsRUFyQ3lCdkUsY0FBTTtBQXdDbkJ1RSx5RUFBYSxFOzs7Ozs7Ozs7QUMzQ1M7QUFDTDtBQUFBLElBRTFCRyx5Q0FBc0IsMEJBQUFDLGNBQUE7RUFBQTFLLGtCQUFBLENBQUF5SyxzQkFBQSxFQUFBQyxjQUFBO0VBQUEsSUFBQXpLLE1BQUEsR0FBQUMsOEJBQUEsQ0FBQXVLLHNCQUFBO0VBQUEsU0FBQUEsdUJBQUE7SUFBQTVTLHdCQUFBLE9BQUE0UyxzQkFBQTtJQUFBLE9BQUF4SyxNQUFBLENBQUF4SSxLQUFBLE9BQUFSLFNBQUE7RUFBQTtFQUFBYSxxQkFBQSxDQUFBMlMsc0JBQUE7SUFBQTdWLEdBQUE7SUFBQU0sS0FBQSxFQUMxQixTQUFBdVIsTUFBQSxFQUFTO01BQUEsSUFBQTVMLEtBQUE7TUFDUDtNQUNBLElBQU1tSixPQUFPLEdBQUcsSUFBSSxDQUFDaUMsS0FBSyxDQUFDM0IsZ0JBQWdCLENBQUM7UUFDMUNHLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7UUFDekJHLE1BQU0sRUFBRSxJQUFJLENBQUNvQixRQUFRLENBQUNwTyxNQUFNLENBQUNpQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQ3RFNkosRUFBRSxFQUFFLElBQUksQ0FBQ3NDLFFBQVEsQ0FBQ3hSLElBQUk7UUFDdEIwUCxLQUFLLEVBQUVoTyxLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDMkMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUNwTyxNQUFNLENBQUMyQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUM5RSxNQUFNLEVBQUU7UUFDbEc0QixNQUFNLEVBQUUsSUFBSSxDQUFDa0QsUUFBUSxDQUFDcE8sTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFdBQVc7TUFDakQsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDbUssT0FBTyxHQUFHQSxPQUFPLENBQUNBLE9BQU87TUFDOUIsSUFBSSxDQUFDMkcsV0FBVyxHQUFHM0csT0FBTyxDQUFDUSxNQUFNOztNQUVqQztNQUNBLElBQUksQ0FBQ21HLFdBQVcsQ0FBQ3JULE9BQU8sQ0FBQyxVQUFDcU4sS0FBSyxFQUFLO1FBQ2xDQSxLQUFLLENBQUNpRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtVQUNyQyxJQUFNZ0QsVUFBVSxHQUFHakcsS0FBSyxDQUFDelAsS0FBSyxLQUFLLE1BQU07VUFDekMyRixLQUFJLENBQUNtTCxRQUFRLENBQUN2RSxRQUFRLENBQUNtSixVQUFVLENBQUM7UUFDcEMsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDOztNQUVGO01BQ0EsSUFBSSxDQUFDMUUsU0FBUyxDQUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQzBCLFdBQVcsQ0FBQztNQUM1QyxJQUFJLENBQUNBLFdBQVcsQ0FBQzFCLFdBQVcsQ0FBQyxJQUFJLENBQUNKLE9BQU8sQ0FBQztNQUMxQyxJQUFJOU4sS0FBSyxDQUFDLElBQUksQ0FBQzhQLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ1ksV0FBVyxFQUFFLENBQUMsRUFBRTtRQUM3QyxJQUFJLENBQUN3TCxPQUFPLENBQUNJLFdBQVcsQ0FBQyxJQUFJLENBQUM1TCxXQUFXLENBQUM7TUFDNUM7TUFDQSxJQUFJLENBQUN3TCxPQUFPLENBQUNJLFdBQVcsQ0FBQyxJQUFJLENBQUNnQyxZQUFZLENBQUM7SUFDN0M7RUFBQztJQUFBeFIsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXlSLFVBQUEsRUFBYTtNQUFBLElBQUFqRyxNQUFBO01BQ1gsSUFBSSxDQUFDaUssV0FBVyxDQUFDclQsT0FBTyxDQUFDLFVBQUNxTixLQUFLLEVBQUs7UUFDbEMsSUFBTWlHLFVBQVUsR0FBR2pHLEtBQUssQ0FBQ3pQLEtBQUssS0FBSyxNQUFNO1FBQ3pDeVAsS0FBSyxDQUFDNEYsT0FBTyxHQUFHSyxVQUFVLEtBQUtsSyxNQUFJLENBQUNzRixRQUFRLENBQUN0RSxRQUFRLEVBQUU7UUFDdkRpRCxLQUFLLENBQUM2QixRQUFRLEdBQUc5RixNQUFJLENBQUM4RixRQUFRO01BQ2hDLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQSxPQUFBaUUsc0JBQUE7QUFBQSxFQXJDa0NILGVBQWE7QUF3Q25DRyxnR0FBc0IsRTs7Ozs7Ozs7O0FDM0NBO0FBQ0w7QUFBQSxJQUUxQkksMkNBQXVCLDBCQUFBSCxjQUFBO0VBQUExSyxrQkFBQSxDQUFBNkssdUJBQUEsRUFBQUgsY0FBQTtFQUFBLElBQUF6SyxNQUFBLEdBQUFDLCtCQUFBLENBQUEySyx1QkFBQTtFQUFBLFNBQUFBLHdCQUFBO0lBQUFoVCx3QkFBQSxPQUFBZ1QsdUJBQUE7SUFBQSxPQUFBNUssTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQStTLHVCQUFBO0lBQUFqVyxHQUFBO0lBQUFNLEtBQUEsRUFDM0IsU0FBQXVSLE1BQUEsRUFBUztNQUFBLElBQUE1TCxLQUFBO01BQ1A7TUFDQSxJQUFNbUosT0FBTyxHQUFHLElBQUksQ0FBQ2lDLEtBQUssQ0FBQ25CLGdCQUFnQixDQUFDO1FBQzFDTCxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQ3pCRyxNQUFNLEVBQUUsSUFBSSxDQUFDb0IsUUFBUSxDQUFDcE8sTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUN0RTZKLEVBQUUsRUFBRSxJQUFJLENBQUNzQyxRQUFRLENBQUN4UixJQUFJO1FBQ3RCMFAsS0FBSyxFQUFFaE8sS0FBSyxDQUFDLElBQUksQ0FBQzhQLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQzJDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDeUwsUUFBUSxDQUFDcE8sTUFBTSxDQUFDMkMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDeUwsUUFBUSxDQUFDOUUsTUFBTSxFQUFFO1FBQ2xHNEIsTUFBTSxFQUFFLElBQUksQ0FBQ2tELFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ2lDLE1BQU0sQ0FBQyxXQUFXO01BQ2pELENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ21LLE9BQU8sR0FBR0EsT0FBTyxDQUFDQSxPQUFPO01BQzlCLElBQUksQ0FBQ0MsS0FBSyxHQUFHRCxPQUFPLENBQUNDLEtBQUs7O01BRTFCO01BQ0EsSUFBSSxDQUFDQSxLQUFLLENBQUMyRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtRQUMxQyxJQUFNMVMsS0FBSyxHQUFHMkYsS0FBSSxDQUFDb0osS0FBSyxDQUFDL08sS0FBSyxLQUFLLE1BQU07UUFDekMyRixLQUFJLENBQUNtTCxRQUFRLENBQUN2RSxRQUFRLENBQUN2TSxLQUFLLENBQUM7TUFDL0IsQ0FBQyxDQUFDOztNQUVGO01BQ0EsSUFBSSxDQUFDZ1IsU0FBUyxDQUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQzBCLFdBQVcsQ0FBQztNQUM1QyxJQUFJLENBQUNBLFdBQVcsQ0FBQzFCLFdBQVcsQ0FBQyxJQUFJLENBQUNKLE9BQU8sQ0FBQztNQUMxQyxJQUFJOU4sS0FBSyxDQUFDLElBQUksQ0FBQzhQLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ1ksV0FBVyxFQUFFLENBQUMsRUFBRTtRQUM3QyxJQUFJLENBQUN3TCxPQUFPLENBQUNJLFdBQVcsQ0FBQyxJQUFJLENBQUM1TCxXQUFXLENBQUM7TUFDNUM7TUFDQSxJQUFJLENBQUN3TCxPQUFPLENBQUNJLFdBQVcsQ0FBQyxJQUFJLENBQUNnQyxZQUFZLENBQUM7SUFDN0M7RUFBQztJQUFBeFIsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXlSLFVBQUEsRUFBYTtNQUNYLElBQUksQ0FBQzFDLEtBQUssQ0FBQy9PLEtBQUssR0FBRyxJQUFJLENBQUM4USxRQUFRLENBQUN0RSxRQUFRLEVBQUUsS0FBSyxJQUFJLEdBQUcsTUFBTSxHQUFHLE9BQU87TUFFdkUsSUFBSSxJQUFJLENBQUM4RSxRQUFRLEVBQUU7UUFDakIsSUFBSSxDQUFDdkMsS0FBSyxDQUFDUixZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztNQUNqRCxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNRLEtBQUssQ0FBQ3FFLGVBQWUsQ0FBQyxVQUFVLENBQUM7TUFDeEM7SUFDRjtFQUFDO0VBQUEsT0FBQXVDLHVCQUFBO0FBQUEsRUFyQ21DUCxlQUFhO0FBd0NwQ08sbUdBQXVCLEU7Ozs7Ozs7OztBQzNDTDtBQUNpQztBQUNFO0FBQ3RCO0FBQUEsSUFFeENDLHVCQUFlLDBCQUFBdEMsU0FBQTtFQUFBeEksa0JBQUEsQ0FBQThLLGVBQUEsRUFBQXRDLFNBQUE7RUFBQSxJQUFBdkksTUFBQSxHQUFBQyw2QkFBQSxDQUFBNEssZUFBQTtFQUFBLFNBQUFBLGdCQUFBO0lBQUFqVCx3QkFBQSxPQUFBaVQsZUFBQTtJQUFBLE9BQUE3SyxNQUFBLENBQUF4SSxLQUFBLE9BQUFSLFNBQUE7RUFBQTtFQUFBYSxxQkFBQSxDQUFBZ1QsZUFBQTtJQUFBbFcsR0FBQTtJQUFBTSxLQUFBLEVBQ25CLFNBQUE4TCxNQUFBLEVBQVM7TUFDUCxJQUFJLElBQUksQ0FBQ3BKLE1BQU0sQ0FBQzRDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUM1QyxNQUFNLENBQUNrQixRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDbEUsSUFBSSxDQUFDMEgsRUFBRSxHQUFHLElBQUlpSyxrQkFBc0IsQ0FBQyxJQUFJLENBQUM7TUFDNUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDN1MsTUFBTSxDQUFDNEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQzVDLE1BQU0sQ0FBQ2tCLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMxRSxJQUFJLENBQUMwSCxFQUFFLEdBQUcsSUFBSXFLLG1CQUF1QixDQUFDLElBQUksQ0FBQztNQUM3QyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNqVCxNQUFNLENBQUM0QyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDeEMsSUFBSSxDQUFDZ0csRUFBRSxHQUFHLElBQUk4SixlQUFhLENBQUMsSUFBSSxDQUFDO01BQ25DO0lBQ0Y7RUFBQztFQUFBLE9BQUFRLGVBQUE7QUFBQSxFQVQyQmhMLGtCQUFRO0FBWXZCZ0wsNkVBQWUsRTs7Ozs7Ozs7O0FDakJEO0FBT1o7QUFBQSxJQUVYQyxtQkFBWSwwQkFBQXpELE9BQUE7RUFBQXRILGtCQUFBLENBQUErSyxZQUFBLEVBQUF6RCxPQUFBO0VBQUEsSUFBQXJILE1BQUEsR0FBQUMsa0JBQUEsQ0FBQTZLLFlBQUE7RUFBQSxTQUFBQSxhQUFBO0lBQUFsVCx3QkFBQSxPQUFBa1QsWUFBQTtJQUFBLE9BQUE5SyxNQUFBLENBQUF4SSxLQUFBLE9BQUFSLFNBQUE7RUFBQTtFQUFBYSxxQkFBQSxDQUFBaVQsWUFBQTtJQUFBblcsR0FBQTtJQUFBTSxLQUFBLEVBQ2hCLFNBQUF1UixNQUFBLEVBQVM7TUFBQSxJQUFBNUwsS0FBQTtNQUNQLElBQUksQ0FBQzBNLFFBQVEsR0FBRyxJQUFJLENBQUN0QixLQUFLLENBQUN6RCxXQUFXLEVBQUU7TUFDeEMsSUFBSSxDQUFDZ0YsWUFBWSxHQUFHLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQ3hELGVBQWUsRUFBRTtNQUVoRCxJQUFJLENBQUM4QixNQUFNLEdBQUcsSUFBSSxDQUFDMEIsS0FBSyxDQUFDdkQsU0FBUyxDQUFDO1FBQ2pDQyxXQUFXLEVBQUV6TSxLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDMkMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUNwTyxNQUFNLENBQUMyQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUM5RSxNQUFNLEVBQUU7UUFDeEc0QixNQUFNLEVBQUUsSUFBSSxDQUFDa0QsUUFBUSxDQUFDcE8sTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFdBQVc7TUFDakQsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDbVIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDL0UsS0FBSyxDQUFDNUMsbUJBQW1CLENBQUM7UUFDckRWLFdBQVcsRUFBRSxZQUFZO1FBQ3pCZSxFQUFFLEVBQUUsa0JBQWtCLEdBQUduUCxlQUFlLENBQUMsSUFBSSxDQUFDeVIsUUFBUSxDQUFDeFIsSUFBSTtNQUM3RCxDQUFDLENBQUM7TUFFRixJQUFJLENBQUN5VyxtQkFBbUIsR0FBRyxJQUFJLENBQUNoRixLQUFLLENBQUMxQyx1QkFBdUIsRUFBRTtNQUUvRCxJQUFJLENBQUMySCxrQkFBa0IsR0FBRyxJQUFJLENBQUNqRixLQUFLLENBQUM1QixlQUFlLENBQUM7UUFDbkR4TixJQUFJLEVBQUUsTUFBTTtRQUNaNk0sRUFBRSxFQUFFLDBCQUEwQixHQUFHblAsZUFBZSxDQUFDLElBQUksQ0FBQ3lSLFFBQVEsQ0FBQ3hSLElBQUksQ0FBQztRQUNwRTBQLEtBQUssRUFBRTtNQUNULENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ2lILGdCQUFnQixHQUFHLElBQUksQ0FBQ0Qsa0JBQWtCLENBQUNqSCxLQUFLO01BRXJELElBQUksQ0FBQ21ILGNBQWMsR0FBRyxJQUFJLENBQUNuRixLQUFLLENBQUMzQyxTQUFTLENBQUM7UUFDekNYLFdBQVcsRUFBRTtNQUNmLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ3lJLGNBQWMsQ0FBQzlJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO01BRXBELElBQUksQ0FBQzZJLGNBQWMsQ0FBQ3hELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ2xELElBQU1oVCxHQUFHLEdBQUdpRyxLQUFJLENBQUNzUSxnQkFBZ0IsQ0FBQ2pXLEtBQUs7UUFFdkMsSUFBTW1XLGlCQUFpQixHQUFHelcsR0FBRyxDQUFDTixNQUFNLEtBQUssQ0FBQztRQUUxQyxJQUFJK1csaUJBQWlCLEVBQUU7VUFDckI7UUFDRjtRQUVBLElBQU1DLGFBQWEsR0FBR3BWLEtBQUssQ0FBQzJFLEtBQUksQ0FBQ21MLFFBQVEsQ0FBQzlRLEtBQUssQ0FBQ04sR0FBRyxDQUFDLENBQUM7UUFFckQsSUFBSTBXLGFBQWEsRUFBRTtVQUNqQjtRQUNGO1FBRUEsSUFBSTFULE1BQU0sR0FBRztVQUFFZixJQUFJLEVBQUU7UUFBTSxDQUFDO1FBRTVCLElBQU1rQixvQkFBb0IsR0FBRzhDLEtBQUksQ0FBQ21MLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ0csb0JBQW9CLEVBQUU7UUFFeEUsSUFBSTdCLEtBQUssQ0FBQzZCLG9CQUFvQixDQUFDLEVBQUU7VUFDL0JILE1BQU0sR0FBR0csb0JBQW9CO1FBQy9CO1FBRUEsSUFBTWlLLEtBQUssR0FBR25ILEtBQUksQ0FBQ21MLFFBQVEsQ0FBQ3VGLFdBQVcsQ0FBQzNULE1BQU0sRUFBRWhELEdBQUcsQ0FBQztRQUNwRG9OLEtBQUssQ0FBQ0gsUUFBUSxFQUFFO1FBQ2hCaEgsS0FBSSxDQUFDbUwsUUFBUSxDQUFDdkUsUUFBUSxDQUFDNUcsS0FBSSxDQUFDbUwsUUFBUSxDQUFDOVEsS0FBSyxDQUFDO1FBQzNDMkYsS0FBSSxDQUFDc1EsZ0JBQWdCLENBQUNqVyxLQUFLLEdBQUcsRUFBRTtNQUNsQyxDQUFDLENBQUM7TUFFRixJQUFJLENBQUNnUixTQUFTLENBQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDbUQsUUFBUSxDQUFDO01BQ3pDLElBQUksQ0FBQ0EsUUFBUSxDQUFDbkQsV0FBVyxDQUFDLElBQUksQ0FBQ0csTUFBTSxDQUFDO01BQ3RDLElBQUksQ0FBQ2dELFFBQVEsQ0FBQ25ELFdBQVcsQ0FBQyxJQUFJLENBQUNvRCxZQUFZLENBQUM7TUFDNUMsSUFBSSxDQUFDakQsTUFBTSxDQUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDaUMsV0FBVyxDQUFDO01BRXpDLElBQUluUSxLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDWSxXQUFXLEVBQUUsQ0FBQyxFQUFFO1FBQzdDLElBQUksQ0FBQ2dQLFlBQVksQ0FBQ3BELFdBQVcsQ0FBQyxJQUFJLENBQUM1TCxXQUFXLENBQUM7TUFDakQ7TUFFQSxJQUFJLENBQUNnUCxZQUFZLENBQUNwRCxXQUFXLENBQUMsSUFBSSxDQUFDK0IsY0FBYyxDQUFDO01BQ2xELElBQUksQ0FBQ3FCLFlBQVksQ0FBQ3BELFdBQVcsQ0FBQyxJQUFJLENBQUNnQyxZQUFZLENBQUM7TUFDaEQsSUFBSSxDQUFDb0IsWUFBWSxDQUFDcEQsV0FBVyxDQUFDLElBQUksQ0FBQ21DLFlBQVksQ0FBQztNQUVoRCxJQUFJM1EsS0FBSyxDQUFDLElBQUksQ0FBQ29RLFFBQVEsQ0FBQzVGLElBQUksQ0FBQ3RHLE9BQU8sQ0FBQzBSLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJNVYsS0FBSyxDQUFDLElBQUksQ0FBQ29RLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ2lDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ2hJLElBQUksQ0FBQ3dNLFdBQVcsQ0FBQ2pDLFdBQVcsQ0FBQyxJQUFJLENBQUM0RyxnQkFBZ0IsQ0FBQztRQUNuRCxJQUFJLENBQUM3RSxjQUFjLENBQUMvQixXQUFXLENBQUMsSUFBSSxDQUFDNkcsbUJBQW1CLENBQUM7UUFDekQsSUFBSSxDQUFDOUUsY0FBYyxDQUFDL0IsV0FBVyxDQUFDLElBQUksQ0FBQzhHLGtCQUFrQixDQUFDbEgsT0FBTyxDQUFDO1FBQ2hFLElBQUksQ0FBQ2tILGtCQUFrQixDQUFDbEgsT0FBTyxDQUFDSSxXQUFXLENBQUMsSUFBSSxDQUFDZ0gsY0FBYyxDQUFDO01BQ2xFO0lBQ0Y7RUFBQztJQUFBeFcsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQWdTLFNBQVVoUyxLQUFLLEVBQUU7TUFDZixJQUFJYSxjQUFRLENBQUNiLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU9BLEtBQUs7TUFDZDtNQUVBLE9BQU8sQ0FBQyxDQUFDO0lBQ1g7RUFBQztJQUFBTixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBK1AsbUJBQW9CdkosT0FBTyxFQUFFO01BQzNCLE9BQU8sSUFBSSxDQUFDdUssS0FBSyxDQUFDakIsUUFBUSxDQUFDO1FBQ3pCdEosT0FBTyxFQUFFQTtNQUNYLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQTlHLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF1VyxzQkFBQSxFQUF5QjtNQUFBLElBQUEvSyxNQUFBO01BQ3ZCLElBQUk5SyxLQUFLLENBQUMsSUFBSSxDQUFDb1EsUUFBUSxDQUFDNUYsSUFBSSxDQUFDdEcsT0FBTyxDQUFDMFIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUk1VixLQUFLLENBQUMsSUFBSSxDQUFDb1EsUUFBUSxDQUFDcE8sTUFBTSxDQUFDaUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDaEksT0FBTyxJQUFJLENBQUNvUixtQkFBbUIsQ0FBQ1MsVUFBVSxFQUFFO1VBQzFDLElBQUksQ0FBQ1QsbUJBQW1CLENBQUM3RCxXQUFXLENBQUMsSUFBSSxDQUFDNkQsbUJBQW1CLENBQUNVLFNBQVMsQ0FBQztRQUMxRTtRQUVBLElBQUksQ0FBQzNGLFFBQVEsQ0FBQ3pGLFFBQVEsQ0FBQ2pKLE9BQU8sQ0FBQyxVQUFDMEssS0FBSyxFQUFLO1VBQ3hDLElBQU0wQixFQUFFLEdBQUcxQixLQUFLLENBQUN4TixJQUFJLEdBQUcsWUFBWTtVQUVwQyxJQUFNb1gsY0FBYyxHQUFHbEwsTUFBSSxDQUFDdUYsS0FBSyxDQUFDcEIsa0JBQWtCLENBQUM7WUFDbkRuQixFQUFFLEVBQUVBLEVBQUU7WUFDTlEsS0FBSyxFQUFFaE8sS0FBSyxDQUFDOEwsS0FBSyxDQUFDcEssTUFBTSxDQUFDMkMsS0FBSyxFQUFFLENBQUMsR0FBR3lILEtBQUssQ0FBQ3BLLE1BQU0sQ0FBQzJDLEtBQUssRUFBRSxHQUFHeUgsS0FBSyxDQUFDZCxNQUFNLEVBQUU7WUFDMUU0QixNQUFNLEVBQUU7VUFDVixDQUFDLENBQUM7VUFFRixJQUFNK0ksUUFBUSxHQUFHRCxjQUFjLENBQUMzSCxLQUFLO1VBRXJDNEgsUUFBUSxDQUFDdEIsT0FBTyxHQUFHN1YsTUFBTSxDQUFDZ00sTUFBSSxDQUFDc0YsUUFBUSxDQUFDdEUsUUFBUSxFQUFFLEVBQUVNLEtBQUssQ0FBQ2QsTUFBTSxFQUFFLENBQUM7VUFFbkUsSUFBTTRLLFVBQVUsR0FBR3BMLE1BQUksQ0FBQ3NGLFFBQVEsQ0FBQzhGLFVBQVUsQ0FBQzlKLEtBQUssQ0FBQ2QsTUFBTSxFQUFFLENBQUM7VUFDM0QsSUFBTTZLLG1CQUFtQixHQUFHckwsTUFBSSxDQUFDc0YsUUFBUSxDQUFDK0YsbUJBQW1CLENBQUMvSixLQUFLLENBQUNkLE1BQU0sRUFBRSxDQUFDO1VBQzdFLElBQU1zRixRQUFRLEdBQUc5RixNQUFJLENBQUM4RixRQUFRO1VBQzlCcUYsUUFBUSxDQUFDckYsUUFBUSxHQUFHc0YsVUFBVSxJQUFJQyxtQkFBbUIsSUFBSXZGLFFBQVE7VUFFakVxRixRQUFRLENBQUNqRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtZQUN4QyxJQUFJaUUsUUFBUSxDQUFDdEIsT0FBTyxFQUFFO2NBQ3BCdkksS0FBSyxDQUFDSCxRQUFRLEVBQUU7WUFDbEIsQ0FBQyxNQUFNO2NBQ0xHLEtBQUssQ0FBQ0YsVUFBVSxFQUFFO1lBQ3BCO1VBQ0YsQ0FBQyxDQUFDOztVQUVGO1VBQ0FwQixNQUFJLENBQUN1SyxtQkFBbUIsQ0FBQzdHLFdBQVcsQ0FBQ3dILGNBQWMsQ0FBQzVILE9BQU8sQ0FBQztRQUM5RCxDQUFDLENBQUM7TUFDSjtJQUNGO0VBQUM7SUFBQXBQLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUE4VyxlQUFBLEVBQWtCO01BQUEsSUFBQWpLLE1BQUE7TUFDaEIsT0FBTyxJQUFJLENBQUN3RSxZQUFZLENBQUNtRixVQUFVLEVBQUU7UUFDbkMsSUFBSSxDQUFDbkYsWUFBWSxDQUFDYSxXQUFXLENBQUMsSUFBSSxDQUFDYixZQUFZLENBQUNvRixTQUFTLENBQUM7TUFDNUQ7TUFFQSxJQUFJLENBQUMzRixRQUFRLENBQUN6RixRQUFRLENBQUNqSixPQUFPLENBQUMsVUFBQzBLLEtBQUssRUFBSztRQUN4QyxJQUFJQSxLQUFLLENBQUMzQixRQUFRLEVBQUU7VUFDbEIwQixNQUFJLENBQUN3RSxZQUFZLENBQUNuQyxXQUFXLENBQUNwQyxLQUFLLENBQUN4QixFQUFFLENBQUMwRixTQUFTLENBQUM7VUFFakQsSUFBSW5FLE1BQUksQ0FBQ3lFLFFBQVEsRUFBRTtZQUNqQnhFLEtBQUssQ0FBQ3hCLEVBQUUsQ0FBQ3dHLE9BQU8sRUFBRTtVQUNwQixDQUFDLE1BQU07WUFDTGhGLEtBQUssQ0FBQ3hCLEVBQUUsQ0FBQ3lHLE1BQU0sRUFBRTtVQUNuQjtRQUNGO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBclMsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXlSLFVBQUEsRUFBYTtNQUNYLElBQUksQ0FBQzhFLHFCQUFxQixFQUFFO01BQzVCLElBQUksQ0FBQ08sY0FBYyxFQUFFO01BRXJCLElBQUksSUFBSSxDQUFDeEYsUUFBUSxFQUFFO1FBQ2pCLElBQUksQ0FBQ3dFLGdCQUFnQixDQUFDdkgsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDMUQsSUFBSSxDQUFDMkgsY0FBYyxDQUFDM0gsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDeEQsSUFBSSxDQUFDMEgsZ0JBQWdCLENBQUMxSCxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztNQUM1RCxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUN1SCxnQkFBZ0IsQ0FBQzFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDakQsSUFBSSxDQUFDOEMsY0FBYyxDQUFDOUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUM2QyxnQkFBZ0IsQ0FBQzdDLGVBQWUsQ0FBQyxVQUFVLENBQUM7TUFDbkQ7SUFDRjtFQUFDO0VBQUEsT0FBQXlDLFlBQUE7QUFBQSxFQXBLd0JoRixjQUFNO0FBdUtsQmdGLHNFQUFZLEU7Ozs7Ozs7OztBQ2hMTTtBQUM2QztBQUNsQztBQUFBLElBRXRDa0IscUJBQWMsMEJBQUF6RCxTQUFBO0VBQUF4SSxrQkFBQSxDQUFBaU0sY0FBQSxFQUFBekQsU0FBQTtFQUFBLElBQUF2SSxNQUFBLEdBQUFDLDRCQUFBLENBQUErTCxjQUFBO0VBQUEsU0FBQUEsZUFBQTtJQUFBcFUsd0JBQUEsT0FBQW9VLGNBQUE7SUFBQSxPQUFBaE0sTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQW1VLGNBQUE7SUFBQXJYLEdBQUE7SUFBQU0sS0FBQSxFQUNsQixTQUFBOEwsTUFBQSxFQUFTO01BQ1AsSUFBSSxDQUFDUixFQUFFLEdBQUcsSUFBSXVLLGNBQVksQ0FBQyxJQUFJLENBQUM7SUFDbEM7RUFBQztJQUFBblcsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTJMLFFBQUEsRUFBVztNQUFBLElBQUFoRyxLQUFBO01BQ1QsSUFBSTNFLEtBQUssQ0FBQyxJQUFJLENBQUMwQixNQUFNLENBQUNxQyxVQUFVLEVBQUUsQ0FBQyxFQUFFO1FBQ25DcEYsTUFBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDb0MsTUFBTSxDQUFDcUMsVUFBVSxFQUFFLENBQUMsQ0FBQzNDLE9BQU8sQ0FBQyxVQUFDMUMsR0FBRyxFQUFLO1VBQ3JELElBQU1nRCxNQUFNLEdBQUdpRCxLQUFJLENBQUNqRCxNQUFNLENBQUNxQyxVQUFVLEVBQUUsQ0FBQ3JGLEdBQUcsQ0FBQztVQUM1Q2lHLEtBQUksQ0FBQzBRLFdBQVcsQ0FBQzNULE1BQU0sRUFBRWhELEdBQUcsQ0FBQztRQUMvQixDQUFDLENBQUM7TUFDSjtNQUVBLElBQUksQ0FBQ3NYLGdCQUFnQixFQUFFO01BRXZCLElBQUksQ0FBQ3hNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBTTtRQUN6QjdFLEtBQUksQ0FBQ3FSLGdCQUFnQixFQUFFO01BQ3pCLENBQUMsQ0FBQztJQUNKOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUF0WCxHQUFBO0lBQUFNLEtBQUEsRUFHQSxTQUFBNFcsV0FBWXJQLFFBQVEsRUFBRTtNQUNwQixPQUFPdkcsS0FBSyxDQUFDLElBQUksQ0FBQzBCLE1BQU0sQ0FBQ3VDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDdkMsTUFBTSxDQUFDdUMsUUFBUSxFQUFFLENBQUMwRCxRQUFRLENBQUNwQixRQUFRLENBQUM7SUFDbkY7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQTdILEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUE2VyxvQkFBcUJ0UCxRQUFRLEVBQUU7TUFBQSxJQUFBaUUsTUFBQTtNQUM3QixJQUFNcEksaUJBQWlCLEdBQUcsSUFBSSxDQUFDVixNQUFNLENBQUNVLGlCQUFpQixFQUFFO01BRXpELElBQUlwQyxLQUFLLENBQUNvQyxpQkFBaUIsQ0FBQyxFQUFFO1FBQzVCLElBQUlnRSxpQkFBaUIsR0FBRyxFQUFFO1FBRTFCekgsTUFBTSxDQUFDVyxJQUFJLENBQUM4QyxpQkFBaUIsQ0FBQyxDQUFDaEIsT0FBTyxDQUFDLFVBQUMxQyxHQUFHLEVBQUs7VUFDOUMsSUFBSXNCLEtBQUssQ0FBQ3dLLE1BQUksQ0FBQ3hMLEtBQUssQ0FBQ04sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMxQixJQUFNMkgsa0JBQWtCLEdBQUdqRSxpQkFBaUIsQ0FBQzFELEdBQUcsQ0FBQztZQUVqRDBILGlCQUFpQixHQUFHQyxrQkFBa0IsQ0FBQ0MsTUFBTSxDQUFDLFVBQUNDLFFBQVEsRUFBSztjQUMxRCxPQUFPLENBQUMvSCxNQUFNLENBQUNnTSxNQUFJLENBQUN4TCxLQUFLLEVBQUV1SCxRQUFRLENBQUM7WUFDdEMsQ0FBQyxDQUFDO1VBQ0o7UUFDRixDQUFDLENBQUM7UUFFRixPQUFPSCxpQkFBaUIsQ0FBQ3VCLFFBQVEsQ0FBQ3BCLFFBQVEsQ0FBQztNQUM3QztNQUVBLE9BQU8sS0FBSztJQUNkO0VBQUM7SUFBQTdILEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFxVyxZQUFhM1QsTUFBTSxFQUFFaEQsR0FBRyxFQUFFO01BQ3hCLElBQU1vUixRQUFRLEdBQUcsSUFBSSxDQUFDNUYsSUFBSSxDQUFDb0osY0FBYyxDQUFDO1FBQ3hDcEosSUFBSSxFQUFFLElBQUksQ0FBQ0EsSUFBSTtRQUNmeEksTUFBTSxFQUFFQSxNQUFNO1FBQ2RwRCxJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDNEwsSUFBSSxDQUFDZ0IsYUFBYSxHQUFHeE0sR0FBRztRQUMvQzBMLE1BQU0sRUFBRTtNQUNWLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ0MsUUFBUSxDQUFDOUUsSUFBSSxDQUFDdUssUUFBUSxDQUFDO01BQzVCLElBQUksQ0FBQzlRLEtBQUssQ0FBQ04sR0FBRyxDQUFDLEdBQUdvUixRQUFRLENBQUN0RSxRQUFRLEVBQUU7TUFFckMsSUFBTXlLLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQ0wsVUFBVSxDQUFDbFgsR0FBRyxDQUFDO01BQzNDLElBQU13WCxzQkFBc0IsR0FBRyxJQUFJLENBQUNoTSxJQUFJLENBQUN0RyxPQUFPLENBQUN1UyxvQkFBb0IsSUFBSSxJQUFJLENBQUN6VSxNQUFNLENBQUNpQyxNQUFNLENBQUMsc0JBQXNCLENBQUM7TUFFbkgsSUFBSXNTLGFBQWEsSUFBSUMsc0JBQXNCLEVBQUU7UUFDM0NwRyxRQUFRLENBQUNsRSxVQUFVLEVBQUU7TUFDdkI7TUFFQSxPQUFPa0UsUUFBUTtJQUNqQjtFQUFDO0lBQUFwUixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBb1gsWUFBYTFYLEdBQUcsRUFBRTtNQUNoQixLQUFLLElBQUltSyxDQUFDLEdBQUcsSUFBSSxDQUFDd0IsUUFBUSxDQUFDak0sTUFBTSxHQUFHLENBQUMsRUFBRXlLLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQ2xELElBQU1pSCxRQUFRLEdBQUcsSUFBSSxDQUFDekYsUUFBUSxDQUFDeEIsQ0FBQyxDQUFDO1FBQ2pDLElBQUlpSCxRQUFRLENBQUM5RSxNQUFNLEVBQUUsS0FBS3RNLEdBQUcsRUFBRTtVQUM3Qm9SLFFBQVEsQ0FBQ3BMLE9BQU8sRUFBRTtVQUNsQixJQUFJLENBQUMyRixRQUFRLENBQUNnTSxNQUFNLENBQUN4TixDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQzFCLElBQUksQ0FBQ2tDLGFBQWEsRUFBRTtRQUN0QjtNQUNGO0lBQ0Y7RUFBQztJQUFBck0sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXNYLFNBQVU1WCxHQUFHLEVBQUU7TUFBQSxJQUFBbU4sTUFBQTtNQUNiLE9BQU8sSUFBSSxDQUFDeEIsUUFBUSxDQUFDa00sSUFBSSxDQUFDLFVBQUN6RyxRQUFRLEVBQUs7UUFDdEMsT0FBT3BSLEdBQUcsS0FBS29SLFFBQVEsQ0FBQzlFLE1BQU0sRUFBRSxDQUFDQyxLQUFLLENBQUNZLE1BQUksQ0FBQzNCLElBQUksQ0FBQ2dCLGFBQWEsQ0FBQyxDQUFDQyxHQUFHLEVBQUU7TUFDdkUsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBek0sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQStMLGNBQUEsRUFBaUI7TUFDZixJQUFNL0wsS0FBSyxHQUFHLENBQUMsQ0FBQztNQUVoQixJQUFJLENBQUNxTCxRQUFRLENBQUNqSixPQUFPLENBQUMsVUFBQzBLLEtBQUssRUFBSztRQUMvQixJQUFJQSxLQUFLLENBQUMzQixRQUFRLEVBQUU7VUFDbEJuTCxLQUFLLENBQUM4TSxLQUFLLENBQUNkLE1BQU0sRUFBRSxDQUFDLEdBQUdjLEtBQUssQ0FBQ04sUUFBUSxFQUFFO1FBQzFDO01BQ0YsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDRCxRQUFRLENBQUN2TSxLQUFLLENBQUM7SUFDdEI7RUFBQztJQUFBTixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBZ1gsaUJBQUEsRUFBb0I7TUFBQSxJQUFBUSxNQUFBO01BQ2xCLElBQU14WCxLQUFLLEdBQUcsSUFBSSxDQUFDd00sUUFBUSxFQUFFOztNQUU3QjtNQUNBLEtBQUssSUFBSTNDLENBQUMsR0FBRyxJQUFJLENBQUN3QixRQUFRLENBQUNqTSxNQUFNLEdBQUcsQ0FBQyxFQUFFeUssQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFDbEQsSUFBTWlILFFBQVEsR0FBRyxJQUFJLENBQUN6RixRQUFRLENBQUN4QixDQUFDLENBQUM7UUFDakMsSUFBTW5LLEdBQUcsR0FBR29SLFFBQVEsQ0FBQzlFLE1BQU0sRUFBRTtRQUM3QixJQUFJL0ssTUFBTSxDQUFDakIsS0FBSyxDQUFDTixHQUFHLENBQUMsQ0FBQyxFQUFFO1VBQ3RCLElBQUksSUFBSSxDQUFDNFgsUUFBUSxDQUFDNVgsR0FBRyxDQUFDLEVBQUU7WUFDdEJvUixRQUFRLENBQUNsRSxVQUFVLEVBQUU7VUFDdkIsQ0FBQyxNQUFNO1lBQ0wsSUFBSSxDQUFDd0ssV0FBVyxDQUFDMVgsR0FBRyxDQUFDO1VBQ3ZCO1FBQ0Y7TUFDRjtNQUVBLElBQUksQ0FBQ21CLGNBQVEsQ0FBQ2IsS0FBSyxDQUFDLEVBQUU7UUFDcEI7TUFDRjtNQUVBTCxNQUFNLENBQUNXLElBQUksQ0FBQ04sS0FBSyxDQUFDLENBQUNvQyxPQUFPLENBQUMsVUFBQzFDLEdBQUcsRUFBSztRQUNsQyxJQUFNb04sS0FBSyxHQUFHMEssTUFBSSxDQUFDRixRQUFRLENBQUM1WCxHQUFHLENBQUM7O1FBRWhDO1FBQ0EsSUFBSW9OLEtBQUssRUFBRTtVQUNULElBQU0ySyxRQUFRLEdBQUczSyxLQUFLLENBQUNOLFFBQVEsRUFBRTtVQUNqQyxJQUFNQyxRQUFRLEdBQUd6TSxLQUFLLENBQUM4TSxLQUFLLENBQUNkLE1BQU0sRUFBRSxDQUFDOztVQUV0QztVQUNBLElBQUlsTCxTQUFTLENBQUMyVyxRQUFRLEVBQUVoTCxRQUFRLENBQUMsRUFBRTtZQUNqQ0ssS0FBSyxDQUFDUCxRQUFRLENBQUNFLFFBQVEsRUFBRSxLQUFLLENBQUM7VUFDakM7UUFDRixDQUFDLE1BQU07VUFDTDtVQUNBLElBQU1pTCxZQUFZLEdBQUcxWCxLQUFLLENBQUNOLEdBQUcsQ0FBQztVQUMvQixJQUFNaUMsSUFBSSxHQUFHRCxPQUFPLENBQUNnVyxZQUFZLENBQUM7VUFFbEMsSUFBTWhWLE1BQU0sR0FBRztZQUNiZixJQUFJLEVBQUVBLElBQUk7WUFDVixXQUFTK1Y7VUFDWCxDQUFDO1VBRURGLE1BQUksQ0FBQ25CLFdBQVcsQ0FBQzNULE1BQU0sRUFBRWhELEdBQUcsQ0FBQztRQUMvQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQSxPQUFBcVgsY0FBQTtBQUFBLEVBbkowQm5NLGtCQUFRO0FBc0p0Qm1NLDBFQUFjLEU7Ozs7Ozs7OztBQzFKN0I7O0FBRTZCO0FBQ1k7QUFBQSxJQUVuQ1ksaUJBQVcsMEJBQUF2RixPQUFBO0VBQUF0SCxrQkFBQSxDQUFBNk0sV0FBQSxFQUFBdkYsT0FBQTtFQUFBLElBQUFySCxNQUFBLEdBQUFDLGlCQUFBLENBQUEyTSxXQUFBO0VBQUEsU0FBQUEsWUFBQTtJQUFBaFYsd0JBQUEsT0FBQWdWLFdBQUE7SUFBQSxPQUFBNU0sTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQStVLFdBQUE7SUFBQWpZLEdBQUE7SUFBQU0sS0FBQSxFQUNmLFNBQUF1UixNQUFBLEVBQVM7TUFBQSxJQUFBNUwsS0FBQTtNQUNQLElBQUksQ0FBQzBNLFFBQVEsR0FBRyxJQUFJLENBQUN0QixLQUFLLENBQUN6RCxXQUFXLEVBQUU7TUFDeEMsSUFBSSxDQUFDZ0YsWUFBWSxHQUFHLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQ3hELGVBQWUsRUFBRTs7TUFFaEQ7TUFDQSxJQUFJLENBQUM4QixNQUFNLEdBQUcsSUFBSSxDQUFDMEIsS0FBSyxDQUFDdkQsU0FBUyxDQUFDO1FBQ2pDQyxXQUFXLEVBQUV6TSxLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDMkMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUNwTyxNQUFNLENBQUMyQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUM5RSxNQUFNLEVBQUU7UUFDeEc0QixNQUFNLEVBQUUsSUFBSSxDQUFDa0QsUUFBUSxDQUFDcE8sTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFdBQVc7TUFDakQsQ0FBQyxDQUFDOztNQUVGO01BQ0EsSUFBSSxDQUFDcU0sU0FBUyxDQUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQ21ELFFBQVEsQ0FBQztNQUN6QyxJQUFJLENBQUNBLFFBQVEsQ0FBQ25ELFdBQVcsQ0FBQyxJQUFJLENBQUNHLE1BQU0sQ0FBQztNQUN0QyxJQUFJLENBQUNnRCxRQUFRLENBQUNuRCxXQUFXLENBQUMsSUFBSSxDQUFDb0QsWUFBWSxDQUFDO01BQzVDLElBQUksQ0FBQ2pELE1BQU0sQ0FBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQ2lDLFdBQVcsQ0FBQztNQUN6QyxJQUFJblEsS0FBSyxDQUFDLElBQUksQ0FBQzhQLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ1ksV0FBVyxFQUFFLENBQUMsRUFBRTtRQUM3QyxJQUFJLENBQUNnUCxZQUFZLENBQUNwRCxXQUFXLENBQUMsSUFBSSxDQUFDNUwsV0FBVyxDQUFDO01BQ2pEO01BQ0EsSUFBSSxDQUFDZ1AsWUFBWSxDQUFDcEQsV0FBVyxDQUFDLElBQUksQ0FBQ2dDLFlBQVksQ0FBQztNQUNoRCxJQUFJLENBQUNvQixZQUFZLENBQUNwRCxXQUFXLENBQUMsSUFBSSxDQUFDbUMsWUFBWSxDQUFDOztNQUVoRDtNQUNBLElBQU11RyxRQUFRLEdBQUcsSUFBSSxDQUFDN0csS0FBSyxDQUFDekMsV0FBVyxFQUFFOztNQUV6QztNQUNBLElBQUksQ0FBQ3VKLE1BQU0sR0FBRyxJQUFJLENBQUM5RyxLQUFLLENBQUN0QyxjQUFjLENBQUM7UUFDdENoQixXQUFXLEVBQUU7TUFDZixDQUFDLENBQUM7TUFFRixJQUFJLENBQUNvSyxNQUFNLENBQUNuRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUMxQy9NLEtBQUksQ0FBQ21MLFFBQVEsQ0FBQ2dILE9BQU8sRUFBRTtNQUN6QixDQUFDLENBQUM7O01BRUY7TUFDQSxJQUFJLENBQUNDLFlBQVksR0FBRyxJQUFJLENBQUNoSCxLQUFLLENBQUNyQyxvQkFBb0IsQ0FBQztRQUNsRGpCLFdBQVcsRUFBRTtNQUNmLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ3NLLFlBQVksQ0FBQ3JGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ2hELElBQUlzRixPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBRTtVQUNwQ3JTLEtBQUksQ0FBQ21MLFFBQVEsQ0FBQ3ZFLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDNUI7TUFDRixDQUFDLENBQUM7TUFFRixJQUFJLENBQUM0RSxXQUFXLENBQUNqQyxXQUFXLENBQUMwSSxRQUFRLENBQUM7TUFDdENBLFFBQVEsQ0FBQzFJLFdBQVcsQ0FBQyxJQUFJLENBQUMySSxNQUFNLENBQUM7TUFDakNELFFBQVEsQ0FBQzFJLFdBQVcsQ0FBQyxJQUFJLENBQUM2SSxZQUFZLENBQUM7SUFDekM7RUFBQztJQUFBclksR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQStQLG1CQUFvQnZKLE9BQU8sRUFBRTtNQUMzQixPQUFPLElBQUksQ0FBQ3VLLEtBQUssQ0FBQ2pCLFFBQVEsQ0FBQztRQUN6QnRKLE9BQU8sRUFBRUE7TUFDWCxDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUE5RyxHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBZ1MsU0FBVWhTLEtBQUssRUFBRTtNQUNmLElBQUl1QixPQUFPLENBQUN2QixLQUFLLENBQUMsRUFBRTtRQUNsQixPQUFPQSxLQUFLO01BQ2Q7TUFFQSxPQUFPLEVBQUU7SUFDWDtFQUFDO0lBQUFOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF5UixVQUFBLEVBQWE7TUFBQSxJQUFBakcsTUFBQTtNQUNYLElBQUksQ0FBQ3NGLFFBQVEsQ0FBQ3pGLFFBQVEsQ0FBQ2pKLE9BQU8sQ0FBQyxVQUFDMEssS0FBSyxFQUFLO1FBQ3hDdEIsTUFBSSxDQUFDNkYsWUFBWSxDQUFDbkMsV0FBVyxDQUFDcEMsS0FBSyxDQUFDeEIsRUFBRSxDQUFDMEYsU0FBUyxDQUFDO1FBRWpEbEUsS0FBSyxDQUFDeEIsRUFBRSxDQUFDc0YsV0FBVyxDQUFDMUIsV0FBVyxDQUFDcEMsS0FBSyxDQUFDeEIsRUFBRSxDQUFDOEYsZ0JBQWdCLENBQUM7UUFFM0QsT0FBT3RFLEtBQUssQ0FBQ3hCLEVBQUUsQ0FBQzhGLGdCQUFnQixDQUFDb0YsVUFBVSxFQUFFO1VBQzNDMUosS0FBSyxDQUFDeEIsRUFBRSxDQUFDOEYsZ0JBQWdCLENBQUNjLFdBQVcsQ0FBQ3BGLEtBQUssQ0FBQ3hCLEVBQUUsQ0FBQzhGLGdCQUFnQixDQUFDcUYsU0FBUyxDQUFDO1FBQzVFO1FBRUEsSUFBTW1CLFFBQVEsR0FBR3BNLE1BQUksQ0FBQ3VGLEtBQUssQ0FBQ3pDLFdBQVcsRUFBRTtRQUN6QyxJQUFNMkosU0FBUyxHQUFHdEYsTUFBTSxDQUFDN0YsS0FBSyxDQUFDZCxNQUFNLEVBQUUsQ0FBQzs7UUFFeEM7UUFDQSxJQUFNa00sU0FBUyxHQUFHMU0sTUFBSSxDQUFDdUYsS0FBSyxDQUFDM0MsU0FBUyxDQUFDO1VBQ3JDWCxXQUFXLEVBQUU7UUFDZixDQUFDLENBQUM7UUFFRnlLLFNBQVMsQ0FBQzlLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBRTVDNkssU0FBUyxDQUFDeEYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07VUFDeEMsSUFBTXVGLFNBQVMsR0FBR3RGLE1BQU0sQ0FBQzdGLEtBQUssQ0FBQ3hOLElBQUksQ0FBQzJNLEtBQUssQ0FBQ1QsTUFBSSxDQUFDTixJQUFJLENBQUNnQixhQUFhLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7VUFDekVYLE1BQUksQ0FBQ3NGLFFBQVEsQ0FBQ3FILFVBQVUsQ0FBQ0YsU0FBUyxDQUFDO1FBQ3JDLENBQUMsQ0FBQztRQUVGTCxRQUFRLENBQUMxSSxXQUFXLENBQUNnSixTQUFTLENBQUM7O1FBRS9CO1FBQ0EsSUFBSTFNLE1BQUksQ0FBQ3NGLFFBQVEsQ0FBQ3pGLFFBQVEsQ0FBQ2pNLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDdkMsSUFBTWdaLFNBQVMsR0FBRzVNLE1BQUksQ0FBQ3VGLEtBQUssQ0FBQzNDLFNBQVMsQ0FBQztZQUNyQ1gsV0FBVyxFQUFFO1VBQ2YsQ0FBQyxDQUFDO1VBRUYySyxTQUFTLENBQUNoTCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztVQUU3QytLLFNBQVMsQ0FBQzFGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1lBQ3hDLElBQU0yRixPQUFPLEdBQUdKLFNBQVMsR0FBRyxDQUFDO1lBQzdCek0sTUFBSSxDQUFDc0YsUUFBUSxDQUFDd0gsSUFBSSxDQUFDTCxTQUFTLEVBQUVJLE9BQU8sQ0FBQztVQUN4QyxDQUFDLENBQUM7VUFFRlQsUUFBUSxDQUFDMUksV0FBVyxDQUFDa0osU0FBUyxDQUFDO1FBQ2pDOztRQUVBO1FBQ0EsSUFBSTVNLE1BQUksQ0FBQ3NGLFFBQVEsQ0FBQ3RFLFFBQVEsRUFBRSxDQUFDcE4sTUFBTSxHQUFHLENBQUMsS0FBSzZZLFNBQVMsRUFBRTtVQUNyRCxJQUFNTSxXQUFXLEdBQUcvTSxNQUFJLENBQUN1RixLQUFLLENBQUMzQyxTQUFTLENBQUM7WUFDdkNYLFdBQVcsRUFBRTtVQUNmLENBQUMsQ0FBQztVQUVGOEssV0FBVyxDQUFDbkwsU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7VUFFakRrTCxXQUFXLENBQUM3RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtZQUMxQyxJQUFNMkYsT0FBTyxHQUFHSixTQUFTLEdBQUcsQ0FBQztZQUM3QnpNLE1BQUksQ0FBQ3NGLFFBQVEsQ0FBQ3dILElBQUksQ0FBQ0wsU0FBUyxFQUFFSSxPQUFPLENBQUM7VUFDeEMsQ0FBQyxDQUFDO1VBRUZULFFBQVEsQ0FBQzFJLFdBQVcsQ0FBQ3FKLFdBQVcsQ0FBQztRQUNuQztRQUVBekwsS0FBSyxDQUFDeEIsRUFBRSxDQUFDOEYsZ0JBQWdCLENBQUNsQyxXQUFXLENBQUMwSSxRQUFRLENBQUM7UUFFL0MsSUFBTTNFLE9BQU8sR0FBR3pILE1BQUksQ0FBQ3dGLFNBQVMsQ0FBQ2tDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUV6RCxJQUFJMUgsTUFBSSxDQUFDOEYsUUFBUSxFQUFFO1VBQ2pCeEUsS0FBSyxDQUFDeEIsRUFBRSxDQUFDd0csT0FBTyxFQUFFO1VBQ2xCbUIsT0FBTyxDQUFDN1EsT0FBTyxDQUFDLFVBQUMrUSxNQUFNLEVBQUs7WUFDMUJBLE1BQU0sQ0FBQzVFLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1VBQzdDLENBQUMsQ0FBQztRQUNKLENBQUMsTUFBTTtVQUNMekIsS0FBSyxDQUFDeEIsRUFBRSxDQUFDeUcsTUFBTSxFQUFFO1VBQ2pCa0IsT0FBTyxDQUFDN1EsT0FBTyxDQUFDLFVBQUMrUSxNQUFNLEVBQUs7WUFDMUJBLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDLFVBQVUsQ0FBQztVQUNwQyxDQUFDLENBQUM7UUFDSjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQSxPQUFBdUUsV0FBQTtBQUFBLEVBM0l1QjlHLGNBQU07QUE4SWpCOEcsbUVBQVcsRTs7Ozs7Ozs7O0FDbkpPO0FBQ2dDO0FBQ3ZCO0FBQUEsSUFFcENhLG1CQUFhLDBCQUFBbEYsU0FBQTtFQUFBeEksa0JBQUEsQ0FBQTBOLGFBQUEsRUFBQWxGLFNBQUE7RUFBQSxJQUFBdkksTUFBQSxHQUFBQywyQkFBQSxDQUFBd04sYUFBQTtFQUFBLFNBQUFBLGNBQUE7SUFBQTdWLHdCQUFBLE9BQUE2VixhQUFBO0lBQUEsT0FBQXpOLE1BQUEsQ0FBQXhJLEtBQUEsT0FBQVIsU0FBQTtFQUFBO0VBQUFhLHFCQUFBLENBQUE0VixhQUFBO0lBQUE5WSxHQUFBO0lBQUFNLEtBQUEsRUFDakIsU0FBQThMLE1BQUEsRUFBUztNQUNQLElBQUksQ0FBQ1IsRUFBRSxHQUFHLElBQUlxTSxhQUFXLENBQUMsSUFBSSxDQUFDO0lBQ2pDO0VBQUM7SUFBQWpZLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEyTCxRQUFBLEVBQVc7TUFBQSxJQUFBaEcsS0FBQTtNQUNULElBQUksQ0FBQzhTLGVBQWUsRUFBRTtNQUV0QixJQUFJLENBQUNqTyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQU07UUFDekI3RSxLQUFJLENBQUM4UyxlQUFlLEVBQUU7TUFDeEIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBL1ksR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQTBZLG1CQUFvQjFZLEtBQUssRUFBRTtNQUN6QixJQUFNMEMsTUFBTSxHQUFHMUIsS0FBSyxDQUFDLElBQUksQ0FBQzBCLE1BQU0sQ0FBQ29CLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDcEIsTUFBTSxDQUFDb0IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO01BRXBFLElBQUk3QyxNQUFNLENBQUN5QixNQUFNLENBQUNmLElBQUksQ0FBQyxFQUFFO1FBQ3ZCZSxNQUFNLENBQUNmLElBQUksR0FBR1gsS0FBSyxDQUFDaEIsS0FBSyxDQUFDLEdBQUcwQixPQUFPLENBQUMxQixLQUFLLENBQUMsR0FBRyxLQUFLO01BQ3JEO01BRUEsSUFBTThNLEtBQUssR0FBRyxJQUFJLENBQUM1QixJQUFJLENBQUNvSixjQUFjLENBQUM7UUFDckNwSixJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJO1FBQ2Z4SSxNQUFNLEVBQUVBLE1BQU07UUFDZHBELElBQUksRUFBRSxJQUFJLENBQUNBLElBQUksR0FBRyxJQUFJLENBQUM0TCxJQUFJLENBQUNnQixhQUFhLEdBQUcsSUFBSSxDQUFDYixRQUFRLENBQUNqTSxNQUFNO1FBQ2hFZ00sTUFBTSxFQUFFO01BQ1YsQ0FBQyxDQUFDO01BRUYsSUFBSXBLLEtBQUssQ0FBQ2hCLEtBQUssQ0FBQyxFQUFFO1FBQ2hCOE0sS0FBSyxDQUFDUCxRQUFRLENBQUN2TSxLQUFLLEVBQUUsS0FBSyxDQUFDO01BQzlCO01BRUEsT0FBTzhNLEtBQUs7SUFDZDtFQUFDO0lBQUFwTixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBc1ksS0FBTUssU0FBUyxFQUFFTixPQUFPLEVBQUU7TUFDeEIsSUFBTXJZLEtBQUssR0FBR3JCLEtBQUssQ0FBQyxJQUFJLENBQUM2TixRQUFRLEVBQUUsQ0FBQztNQUNwQyxJQUFNN0YsSUFBSSxHQUFHM0csS0FBSyxDQUFDMlksU0FBUyxDQUFDO01BQzdCM1ksS0FBSyxDQUFDcVgsTUFBTSxDQUFDc0IsU0FBUyxFQUFFLENBQUMsQ0FBQztNQUMxQjNZLEtBQUssQ0FBQ3FYLE1BQU0sQ0FBQ2dCLE9BQU8sRUFBRSxDQUFDLEVBQUUxUixJQUFJLENBQUM7TUFDOUIsSUFBSSxDQUFDNEYsUUFBUSxDQUFDdk0sS0FBSyxDQUFDO0lBQ3RCO0VBQUM7SUFBQU4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQThYLFFBQUEsRUFBVztNQUNULElBQU1jLFVBQVUsR0FBRyxJQUFJLENBQUNGLGtCQUFrQixFQUFFO01BQzVDLElBQU0xWSxLQUFLLEdBQUdyQixLQUFLLENBQUMsSUFBSSxDQUFDNk4sUUFBUSxFQUFFLENBQUM7TUFDcEN4TSxLQUFLLENBQUN1RyxJQUFJLENBQUNxUyxVQUFVLENBQUNwTSxRQUFRLEVBQUUsQ0FBQztNQUNqQ29NLFVBQVUsQ0FBQ2xULE9BQU8sRUFBRTtNQUNwQixJQUFJLENBQUM2RyxRQUFRLENBQUN2TSxLQUFLLENBQUM7SUFDdEI7RUFBQztJQUFBTixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBbVksV0FBWUYsU0FBUyxFQUFFO01BQ3JCLElBQU1ZLFlBQVksR0FBR2xhLEtBQUssQ0FBQyxJQUFJLENBQUM2TixRQUFRLEVBQUUsQ0FBQztNQUMzQyxJQUFNQyxRQUFRLEdBQUdvTSxZQUFZLENBQUN2UixNQUFNLENBQUMsVUFBQ1gsSUFBSSxFQUFFeEgsS0FBSztRQUFBLE9BQUtBLEtBQUssS0FBSzhZLFNBQVM7TUFBQSxFQUFDO01BQzFFLElBQUksQ0FBQzFMLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDO0lBQ3pCO0VBQUM7SUFBQS9NLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUErTCxjQUFBLEVBQWlCO01BQ2YsSUFBTS9MLEtBQUssR0FBRyxFQUFFO01BRWhCLElBQUksQ0FBQ3FMLFFBQVEsQ0FBQ2pKLE9BQU8sQ0FBQyxVQUFDMEssS0FBSyxFQUFLO1FBQy9COU0sS0FBSyxDQUFDdUcsSUFBSSxDQUFDdUcsS0FBSyxDQUFDTixRQUFRLEVBQUUsQ0FBQztNQUM5QixDQUFDLENBQUM7TUFFRixJQUFJLENBQUNELFFBQVEsQ0FBQ3ZNLEtBQUssQ0FBQztJQUN0QjtFQUFDO0lBQUFOLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF5WSxnQkFBQSxFQUFtQjtNQUFBLElBQUFqTixNQUFBO01BQ2pCLElBQUksQ0FBQ0gsUUFBUSxDQUFDakosT0FBTyxDQUFDLFVBQUMwSyxLQUFLLEVBQUs7UUFDL0JBLEtBQUssQ0FBQ3BILE9BQU8sRUFBRTtNQUNqQixDQUFDLENBQUM7TUFFRixJQUFJLENBQUMyRixRQUFRLEdBQUcsRUFBRTtNQUVsQixJQUFNckwsS0FBSyxHQUFHLElBQUksQ0FBQ3dNLFFBQVEsRUFBRTtNQUU3QixJQUFJLENBQUNqTCxPQUFPLENBQUN2QixLQUFLLENBQUMsRUFBRTtRQUNuQjtNQUNGO01BRUFBLEtBQUssQ0FBQ29DLE9BQU8sQ0FBQyxVQUFDMFcsU0FBUyxFQUFLO1FBQzNCLElBQU1oTSxLQUFLLEdBQUd0QixNQUFJLENBQUNrTixrQkFBa0IsQ0FBQ0ksU0FBUyxDQUFDO1FBQ2hEdE4sTUFBSSxDQUFDSCxRQUFRLENBQUM5RSxJQUFJLENBQUN1RyxLQUFLLENBQUM7TUFDM0IsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUEwTCxhQUFBO0FBQUEsRUFuRnlCNU4sa0JBQVE7QUFzRnJCNE4sdUVBQWEsRTs7Ozs7Ozs7O0FDMUZDO0FBQ0c7QUFBQSxJQUUxQk8sbUJBQVksMEJBQUEzRyxPQUFBO0VBQUF0SCxrQkFBQSxDQUFBaU8sWUFBQSxFQUFBM0csT0FBQTtFQUFBLElBQUFySCxNQUFBLEdBQUFDLGtCQUFBLENBQUErTixZQUFBO0VBQUEsU0FBQUEsYUFBQTtJQUFBcFcsd0JBQUEsT0FBQW9XLFlBQUE7SUFBQSxPQUFBaE8sTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQW1XLFlBQUE7SUFBQXJaLEdBQUE7SUFBQU0sS0FBQSxFQUNoQixTQUFBdVIsTUFBQSxFQUFTO01BQUEsSUFBQTVMLEtBQUE7TUFDUCxJQUFNcVQsVUFBVSxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztNQUNwSyxJQUFJbEssT0FBTztNQUVYLElBQUksSUFBSSxDQUFDZ0MsUUFBUSxDQUFDcE8sTUFBTSxDQUFDa0IsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQzdDa0wsT0FBTyxHQUFHLElBQUksQ0FBQ2lDLEtBQUssQ0FBQ2xDLGtCQUFrQixDQUFDO1VBQ3RDTCxFQUFFLEVBQUUsSUFBSSxDQUFDc0MsUUFBUSxDQUFDeFIsSUFBSTtVQUN0QjBQLEtBQUssRUFBRWhPLEtBQUssQ0FBQyxJQUFJLENBQUM4UCxRQUFRLENBQUNwTyxNQUFNLENBQUMyQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQ3lMLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQzJDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQ3lMLFFBQVEsQ0FBQzlFLE1BQU0sRUFBRTtVQUNsRzRCLE1BQU0sRUFBRSxJQUFJLENBQUNrRCxRQUFRLENBQUNwTyxNQUFNLENBQUNpQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDbU0sUUFBUSxDQUFDcE8sTUFBTSxDQUFDa0IsUUFBUSxDQUFDLFFBQVE7UUFDNUYsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0xrTCxPQUFPLEdBQUcsSUFBSSxDQUFDaUMsS0FBSyxDQUFDNUIsZUFBZSxDQUFDO1VBQ25DeE4sSUFBSSxFQUFFcVgsVUFBVSxDQUFDclEsUUFBUSxDQUFDLElBQUksQ0FBQ21JLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ2lCLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDbU4sUUFBUSxDQUFDcE8sTUFBTSxDQUFDaUIsTUFBTSxFQUFFLEdBQUcsTUFBTTtVQUNqRzZLLEVBQUUsRUFBRSxJQUFJLENBQUNzQyxRQUFRLENBQUN4UixJQUFJO1VBQ3RCMFAsS0FBSyxFQUFFaE8sS0FBSyxDQUFDLElBQUksQ0FBQzhQLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQzJDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDeUwsUUFBUSxDQUFDcE8sTUFBTSxDQUFDMkMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDeUwsUUFBUSxDQUFDOUUsTUFBTSxFQUFFO1VBQ2xHNEIsTUFBTSxFQUFFLElBQUksQ0FBQ2tELFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ2lDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUNtTSxRQUFRLENBQUNwTyxNQUFNLENBQUNrQixRQUFRLENBQUMsUUFBUTtRQUM1RixDQUFDLENBQUM7TUFDSjtNQUVBLElBQUksQ0FBQ2tMLE9BQU8sR0FBR0EsT0FBTyxDQUFDQSxPQUFPO01BQzlCLElBQUksQ0FBQ0MsS0FBSyxHQUFHRCxPQUFPLENBQUNDLEtBQUs7O01BRTFCO01BQ0EsSUFBSSxDQUFDQSxLQUFLLENBQUMyRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtRQUMxQy9NLEtBQUksQ0FBQ21MLFFBQVEsQ0FBQ3ZFLFFBQVEsQ0FBQzVHLEtBQUksQ0FBQ29KLEtBQUssQ0FBQy9PLEtBQUssQ0FBQztNQUMxQyxDQUFDLENBQUM7O01BRUY7TUFDQSxJQUFJLElBQUksQ0FBQzhRLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ2tCLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUNrTixRQUFRLENBQUM5USxLQUFLLENBQUNaLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDOUUsSUFBSSxDQUFDMFIsUUFBUSxDQUFDdkUsUUFBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7TUFDMUM7O01BRUE7TUFDQSxJQUFJLENBQUN5RSxTQUFTLENBQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDMEIsV0FBVyxDQUFDO01BQzVDLElBQUksQ0FBQ0EsV0FBVyxDQUFDMUIsV0FBVyxDQUFDLElBQUksQ0FBQ0osT0FBTyxDQUFDO01BRTFDLElBQUk5TixLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDWSxXQUFXLEVBQUUsQ0FBQyxFQUFFO1FBQzdDLElBQUksQ0FBQ3dMLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQzVMLFdBQVcsQ0FBQztNQUM1QztNQUVBLElBQUksQ0FBQ3dMLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQ2dDLFlBQVksQ0FBQztJQUM3QztFQUFDO0lBQUF4UixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBZ1MsU0FBVWhTLEtBQUssRUFBRTtNQUNmLE9BQU9pWixNQUFNLENBQUNqWixLQUFLLENBQUM7SUFDdEI7RUFBQztJQUFBTixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBeVIsVUFBQSxFQUFhO01BQ1gsSUFBSSxDQUFDMUMsS0FBSyxDQUFDL08sS0FBSyxHQUFHLElBQUksQ0FBQzhRLFFBQVEsQ0FBQ3RFLFFBQVEsRUFBRTtNQUUzQyxJQUFJLElBQUksQ0FBQzhFLFFBQVEsRUFBRTtRQUNqQixJQUFJLENBQUN2QyxLQUFLLENBQUNSLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO01BQ2pELENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ1EsS0FBSyxDQUFDcUUsZUFBZSxDQUFDLFVBQVUsQ0FBQztNQUN4QztJQUNGO0VBQUM7RUFBQSxPQUFBMkYsWUFBQTtBQUFBLEVBeER3QmxJLGNBQU07QUEyRGxCa0ksc0VBQVksRTs7Ozs7Ozs7O0FDOURRO0FBQ0g7QUFBQSxJQUUxQkcsdUNBQXFCLDBCQUFBQyxhQUFBO0VBQUFyTyxrQkFBQSxDQUFBb08scUJBQUEsRUFBQUMsYUFBQTtFQUFBLElBQUFwTyxNQUFBLEdBQUFDLDZCQUFBLENBQUFrTyxxQkFBQTtFQUFBLFNBQUFBLHNCQUFBO0lBQUF2Vyx3QkFBQSxPQUFBdVcscUJBQUE7SUFBQSxPQUFBbk8sTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQXNXLHFCQUFBO0lBQUF4WixHQUFBO0lBQUFNLEtBQUEsRUFDekIsU0FBQXVSLE1BQUEsRUFBUztNQUFBLElBQUE1TCxLQUFBO01BQ1A7TUFDQSxJQUFNbUosT0FBTyxHQUFHLElBQUksQ0FBQ2lDLEtBQUssQ0FBQzNCLGdCQUFnQixDQUFDO1FBQzFDRyxNQUFNLEVBQUUsSUFBSSxDQUFDdUIsUUFBUSxDQUFDcE8sTUFBTSxRQUFLLEVBQUU7UUFDbkNnTixNQUFNLEVBQUUsSUFBSSxDQUFDb0IsUUFBUSxDQUFDcE8sTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQ21NLFFBQVEsQ0FBQ3BPLE1BQU0sUUFBSyxFQUFFO1FBQ2hGOEwsRUFBRSxFQUFFLElBQUksQ0FBQ3NDLFFBQVEsQ0FBQ3hSLElBQUk7UUFDdEIwUCxLQUFLLEVBQUVoTyxLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDMkMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUNwTyxNQUFNLENBQUMyQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUM5RSxNQUFNLEVBQUU7UUFDbEc0QixNQUFNLEVBQUUsSUFBSSxDQUFDa0QsUUFBUSxDQUFDcE8sTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFdBQVc7TUFDakQsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDbUssT0FBTyxHQUFHQSxPQUFPLENBQUNBLE9BQU87TUFDOUIsSUFBSSxDQUFDMkcsV0FBVyxHQUFHM0csT0FBTyxDQUFDUSxNQUFNOztNQUVqQztNQUNBLElBQUksQ0FBQ21HLFdBQVcsQ0FBQ3JULE9BQU8sQ0FBQyxVQUFDcU4sS0FBSyxFQUFLO1FBQ2xDQSxLQUFLLENBQUNpRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtVQUNyQy9NLEtBQUksQ0FBQ21MLFFBQVEsQ0FBQ3ZFLFFBQVEsQ0FBQ2tELEtBQUssQ0FBQ3pQLEtBQUssQ0FBQztRQUNyQyxDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7O01BRUY7TUFDQSxJQUFJLENBQUNnUixTQUFTLENBQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDMEIsV0FBVyxDQUFDO01BQzVDLElBQUksQ0FBQ0EsV0FBVyxDQUFDMUIsV0FBVyxDQUFDLElBQUksQ0FBQ0osT0FBTyxDQUFDO01BQzFDLElBQUk5TixLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDWSxXQUFXLEVBQUUsQ0FBQyxFQUFFO1FBQzdDLElBQUksQ0FBQ3dMLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQzVMLFdBQVcsQ0FBQztNQUM1QztNQUNBLElBQUksQ0FBQ3dMLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQ2dDLFlBQVksQ0FBQztJQUM3QztFQUFDO0lBQUF4UixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBeVIsVUFBQSxFQUFhO01BQUEsSUFBQWpHLE1BQUE7TUFDWCxJQUFJLENBQUNpSyxXQUFXLENBQUNyVCxPQUFPLENBQUMsVUFBQ3FOLEtBQUssRUFBSztRQUNsQ0EsS0FBSyxDQUFDNEYsT0FBTyxHQUFJNUYsS0FBSyxDQUFDelAsS0FBSyxLQUFLd0wsTUFBSSxDQUFDc0YsUUFBUSxDQUFDdEUsUUFBUSxFQUFHO1FBQzFEaUQsS0FBSyxDQUFDNkIsUUFBUSxHQUFHOUYsTUFBSSxDQUFDOEYsUUFBUTtNQUNoQyxDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQTRILHFCQUFBO0FBQUEsRUFuQ2lDSCxjQUFZO0FBc0NqQ0csNkZBQXFCLEU7Ozs7Ozs7OztBQ3pDRDtBQUNIO0FBQUEsSUFFMUJFLHlDQUFzQiwwQkFBQUQsYUFBQTtFQUFBck8sa0JBQUEsQ0FBQXNPLHNCQUFBLEVBQUFELGFBQUE7RUFBQSxJQUFBcE8sTUFBQSxHQUFBQyw4QkFBQSxDQUFBb08sc0JBQUE7RUFBQSxTQUFBQSx1QkFBQTtJQUFBelcsd0JBQUEsT0FBQXlXLHNCQUFBO0lBQUEsT0FBQXJPLE1BQUEsQ0FBQXhJLEtBQUEsT0FBQVIsU0FBQTtFQUFBO0VBQUFhLHFCQUFBLENBQUF3VyxzQkFBQTtJQUFBMVosR0FBQTtJQUFBTSxLQUFBLEVBQzFCLFNBQUF1UixNQUFBLEVBQVM7TUFBQSxJQUFBNUwsS0FBQTtNQUNQO01BQ0EsSUFBTW1KLE9BQU8sR0FBRyxJQUFJLENBQUNpQyxLQUFLLENBQUNuQixnQkFBZ0IsQ0FBQztRQUMxQ0wsTUFBTSxFQUFFLElBQUksQ0FBQ3VCLFFBQVEsQ0FBQ3BPLE1BQU0sUUFBSyxFQUFFO1FBQ25DZ04sTUFBTSxFQUFFLElBQUksQ0FBQ29CLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ2lDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMwVSxZQUFZO1FBQ3RFN0ssRUFBRSxFQUFFLElBQUksQ0FBQ3NDLFFBQVEsQ0FBQ3hSLElBQUk7UUFDdEIwUCxLQUFLLEVBQUVoTyxLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDMkMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUNwTyxNQUFNLENBQUMyQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUN5TCxRQUFRLENBQUM5RSxNQUFNLEVBQUU7UUFDbEc0QixNQUFNLEVBQUUsSUFBSSxDQUFDa0QsUUFBUSxDQUFDcE8sTUFBTSxDQUFDaUMsTUFBTSxDQUFDLFdBQVc7TUFDakQsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDbUssT0FBTyxHQUFHQSxPQUFPLENBQUNBLE9BQU87TUFDOUIsSUFBSSxDQUFDQyxLQUFLLEdBQUdELE9BQU8sQ0FBQ0MsS0FBSzs7TUFFMUI7TUFDQSxJQUFJLENBQUNBLEtBQUssQ0FBQzJELGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO1FBQzFDL00sS0FBSSxDQUFDbUwsUUFBUSxDQUFDdkUsUUFBUSxDQUFDNUcsS0FBSSxDQUFDb0osS0FBSyxDQUFDL08sS0FBSyxDQUFDO01BQzFDLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ2dSLFNBQVMsQ0FBQzlCLFdBQVcsQ0FBQyxJQUFJLENBQUMwQixXQUFXLENBQUM7TUFDNUMsSUFBSSxDQUFDQSxXQUFXLENBQUMxQixXQUFXLENBQUMsSUFBSSxDQUFDSixPQUFPLENBQUM7TUFDMUMsSUFBSTlOLEtBQUssQ0FBQyxJQUFJLENBQUM4UCxRQUFRLENBQUNwTyxNQUFNLENBQUNZLFdBQVcsRUFBRSxDQUFDLEVBQUU7UUFDN0MsSUFBSSxDQUFDd0wsT0FBTyxDQUFDSSxXQUFXLENBQUMsSUFBSSxDQUFDNUwsV0FBVyxDQUFDO01BQzVDO01BQ0EsSUFBSSxDQUFDd0wsT0FBTyxDQUFDSSxXQUFXLENBQUMsSUFBSSxDQUFDZ0MsWUFBWSxDQUFDO0lBQzdDO0VBQUM7RUFBQSxPQUFBa0ksc0JBQUE7QUFBQSxFQXpCa0NMLGNBQVk7QUE0QmxDSyxnR0FBc0IsRTs7Ozs7Ozs7O0FDL0JKO0FBQ1c7QUFDb0I7QUFDRTtBQUNsQztBQUFBLElBRTFCRSxxQkFBYywwQkFBQWhHLFNBQUE7RUFBQXhJLGtCQUFBLENBQUF3TyxjQUFBLEVBQUFoRyxTQUFBO0VBQUEsSUFBQXZJLE1BQUEsR0FBQUMsNEJBQUEsQ0FBQXNPLGNBQUE7RUFBQSxTQUFBQSxlQUFBO0lBQUEzVyx3QkFBQSxPQUFBMlcsY0FBQTtJQUFBLE9BQUF2TyxNQUFBLENBQUF4SSxLQUFBLE9BQUFSLFNBQUE7RUFBQTtFQUFBYSxxQkFBQSxDQUFBMFcsY0FBQTtJQUFBNVosR0FBQTtJQUFBTSxLQUFBLEVBQ2xCLFNBQUE4TCxNQUFBLEVBQVM7TUFDUCxJQUFJLElBQUksQ0FBQ3BKLE1BQU0sQ0FBQzRDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSXRFLEtBQUssQ0FBQyxJQUFJLENBQUMwQixNQUFNLFFBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUNrQixRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDOUYsSUFBSSxDQUFDMEgsRUFBRSxHQUFHLElBQUk0TixpQkFBcUIsQ0FBQyxJQUFJLENBQUM7TUFDM0MsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDeFcsTUFBTSxDQUFDNEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJdEUsS0FBSyxDQUFDLElBQUksQ0FBQzBCLE1BQU0sUUFBSyxFQUFFLENBQUMsRUFBRTtRQUNwRSxJQUFJLENBQUM0SSxFQUFFLEdBQUcsSUFBSThOLGtCQUFzQixDQUFDLElBQUksQ0FBQztNQUM1QyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMxVyxNQUFNLENBQUM0QyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDdkMsSUFBSSxDQUFDZ0csRUFBRSxHQUFHLElBQUl5TixjQUFZLENBQUMsSUFBSSxDQUFDO01BQ2xDO0lBQ0Y7RUFBQztFQUFBLE9BQUFPLGNBQUE7QUFBQSxFQVQwQjFPLGtCQUFRO0FBWXRCME8sMEVBQWMsRTs7Ozs7Ozs7O0FDbEJBO0FBQ2E7QUFBQSxJQUVwQ0MsbUJBQVksMEJBQUFuSCxPQUFBO0VBQUF0SCxrQkFBQSxDQUFBeU8sWUFBQSxFQUFBbkgsT0FBQTtFQUFBLElBQUFySCxNQUFBLEdBQUFDLGtCQUFBLENBQUF1TyxZQUFBO0VBQUEsU0FBQUEsYUFBQTtJQUFBNVcsd0JBQUEsT0FBQTRXLFlBQUE7SUFBQSxPQUFBeE8sTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQTJXLFlBQUE7SUFBQTdaLEdBQUE7SUFBQU0sS0FBQSxFQUNoQixTQUFBdVIsTUFBQSxFQUFTO01BQUEsSUFBQTVMLEtBQUE7TUFDUCxJQUFNbUosT0FBTyxHQUFHLElBQUksQ0FBQ2lDLEtBQUssQ0FBQzVCLGVBQWUsQ0FBQztRQUN6Q3hOLElBQUksRUFBRSxRQUFRO1FBQ2Q2TSxFQUFFLEVBQUUsSUFBSSxDQUFDc0MsUUFBUSxDQUFDeFIsSUFBSTtRQUN0QjBQLEtBQUssRUFBRWhPLEtBQUssQ0FBQyxJQUFJLENBQUM4UCxRQUFRLENBQUNwTyxNQUFNLENBQUMyQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQ3lMLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQzJDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQ3lMLFFBQVEsQ0FBQzlFLE1BQU0sRUFBRTtRQUNsRzRCLE1BQU0sRUFBRSxJQUFJLENBQUNrRCxRQUFRLENBQUNwTyxNQUFNLENBQUNpQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDbU0sUUFBUSxDQUFDcE8sTUFBTSxDQUFDa0IsUUFBUSxDQUFDLFFBQVE7TUFDNUYsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDa0wsT0FBTyxHQUFHQSxPQUFPLENBQUNBLE9BQU87TUFDOUIsSUFBSSxDQUFDQyxLQUFLLEdBQUdELE9BQU8sQ0FBQ0MsS0FBSzs7TUFFMUI7TUFDQSxJQUFJLENBQUNBLEtBQUssQ0FBQzJELGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO1FBQzFDLElBQU0xUyxLQUFLLEdBQUcyRixLQUFJLENBQUNxTSxRQUFRLENBQUNyTSxLQUFJLENBQUNvSixLQUFLLENBQUMvTyxLQUFLLENBQUM7UUFDN0MyRixLQUFJLENBQUNtTCxRQUFRLENBQUN2RSxRQUFRLENBQUN2TSxLQUFLLENBQUM7TUFDL0IsQ0FBQyxDQUFDOztNQUVGO01BQ0EsSUFBSSxDQUFDZ1IsU0FBUyxDQUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQzBCLFdBQVcsQ0FBQztNQUM1QyxJQUFJLENBQUNBLFdBQVcsQ0FBQzFCLFdBQVcsQ0FBQyxJQUFJLENBQUNKLE9BQU8sQ0FBQztNQUMxQyxJQUFJOU4sS0FBSyxDQUFDLElBQUksQ0FBQzhQLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ1ksV0FBVyxFQUFFLENBQUMsRUFBRTtRQUM3QyxJQUFJLENBQUN3TCxPQUFPLENBQUNJLFdBQVcsQ0FBQyxJQUFJLENBQUM1TCxXQUFXLENBQUM7TUFDNUM7TUFDQSxJQUFJLENBQUN3TCxPQUFPLENBQUNJLFdBQVcsQ0FBQyxJQUFJLENBQUNnQyxZQUFZLENBQUM7SUFDN0M7RUFBQztJQUFBeFIsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQWdTLFNBQVVoUyxLQUFLLEVBQUU7TUFDZixJQUFJLElBQUksQ0FBQzhRLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQzRDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUMxQyxPQUFPbkYsSUFBSSxDQUFDaUIsS0FBSyxDQUFDdVIsTUFBTSxDQUFDM1MsS0FBSyxDQUFDLENBQUM7TUFDbEMsQ0FBQyxNQUFNO1FBQ0wsT0FBTzJTLE1BQU0sQ0FBQzNTLEtBQUssQ0FBQztNQUN0QjtJQUNGO0VBQUM7SUFBQU4sR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXlSLFVBQUEsRUFBYTtNQUNYLElBQU16UixLQUFLLEdBQUcsSUFBSSxDQUFDOFEsUUFBUSxDQUFDdEUsUUFBUSxFQUFFO01BRXRDLElBQUl0TCxRQUFRLENBQUNsQixLQUFLLENBQUMsRUFBRTtRQUNuQixJQUFJLENBQUMrTyxLQUFLLENBQUMvTyxLQUFLLEdBQUcsSUFBSSxDQUFDOFEsUUFBUSxDQUFDdEUsUUFBUSxFQUFFO01BQzdDO01BRUEsSUFBSSxJQUFJLENBQUM4RSxRQUFRLEVBQUU7UUFDakIsSUFBSSxDQUFDdkMsS0FBSyxDQUFDUixZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztNQUNqRCxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNRLEtBQUssQ0FBQ3FFLGVBQWUsQ0FBQyxVQUFVLENBQUM7TUFDeEM7SUFDRjtFQUFDO0VBQUEsT0FBQW1HLFlBQUE7QUFBQSxFQS9Dd0IxSSxjQUFNO0FBa0RsQjBJLHNFQUFZLEU7Ozs7Ozs7OztBQ3JEUTtBQUNIO0FBQUEsSUFFMUJDLHVDQUFxQiwwQkFBQUMsYUFBQTtFQUFBM08sa0JBQUEsQ0FBQTBPLHFCQUFBLEVBQUFDLGFBQUE7RUFBQSxJQUFBMU8sTUFBQSxHQUFBQyw2QkFBQSxDQUFBd08scUJBQUE7RUFBQSxTQUFBQSxzQkFBQTtJQUFBN1csd0JBQUEsT0FBQTZXLHFCQUFBO0lBQUEsT0FBQXpPLE1BQUEsQ0FBQXhJLEtBQUEsT0FBQVIsU0FBQTtFQUFBO0VBQUFhLHFCQUFBLENBQUE0VyxxQkFBQTtJQUFBOVosR0FBQTtJQUFBTSxLQUFBLEVBQ3pCLFNBQUF1UixNQUFBLEVBQVM7TUFBQSxJQUFBNUwsS0FBQTtNQUNQO01BQ0EsSUFBTW1KLE9BQU8sR0FBRyxJQUFJLENBQUNpQyxLQUFLLENBQUMzQixnQkFBZ0IsQ0FBQztRQUMxQ0csTUFBTSxFQUFFLElBQUksQ0FBQ3VCLFFBQVEsQ0FBQ3BPLE1BQU0sUUFBSyxFQUFFO1FBQ25DZ04sTUFBTSxFQUFFLElBQUksQ0FBQ29CLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ2lDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUNtTSxRQUFRLENBQUNwTyxNQUFNLFFBQUssRUFBRTtRQUNoRjhMLEVBQUUsRUFBRSxJQUFJLENBQUNzQyxRQUFRLENBQUN4UixJQUFJO1FBQ3RCMFAsS0FBSyxFQUFFaE8sS0FBSyxDQUFDLElBQUksQ0FBQzhQLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQzJDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDeUwsUUFBUSxDQUFDcE8sTUFBTSxDQUFDMkMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDeUwsUUFBUSxDQUFDOUUsTUFBTSxFQUFFO1FBQ2xHNEIsTUFBTSxFQUFFLElBQUksQ0FBQ2tELFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ2lDLE1BQU0sQ0FBQyxXQUFXO01BQ2pELENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ21LLE9BQU8sR0FBR0EsT0FBTyxDQUFDQSxPQUFPO01BQzlCLElBQUksQ0FBQzJHLFdBQVcsR0FBRzNHLE9BQU8sQ0FBQ1EsTUFBTTs7TUFFakM7TUFDQSxJQUFJLENBQUNtRyxXQUFXLENBQUNyVCxPQUFPLENBQUMsVUFBQ3FOLEtBQUssRUFBSztRQUNsQ0EsS0FBSyxDQUFDaUQsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07VUFDckMsSUFBTTFTLEtBQUssR0FBRzJGLEtBQUksQ0FBQ3FNLFFBQVEsQ0FBQ3ZDLEtBQUssQ0FBQ3pQLEtBQUssQ0FBQztVQUN4QzJGLEtBQUksQ0FBQ21MLFFBQVEsQ0FBQ3ZFLFFBQVEsQ0FBQ3ZNLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7O01BRUY7TUFDQSxJQUFJLENBQUNnUixTQUFTLENBQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDMEIsV0FBVyxDQUFDO01BQzVDLElBQUksQ0FBQ0EsV0FBVyxDQUFDMUIsV0FBVyxDQUFDLElBQUksQ0FBQ0osT0FBTyxDQUFDO01BQzFDLElBQUk5TixLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDWSxXQUFXLEVBQUUsQ0FBQyxFQUFFO1FBQzdDLElBQUksQ0FBQ3dMLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQzVMLFdBQVcsQ0FBQztNQUM1QztNQUNBLElBQUksQ0FBQ3dMLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQ2dDLFlBQVksQ0FBQztJQUM3QztFQUFDO0lBQUF4UixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBeVIsVUFBQSxFQUFhO01BQUEsSUFBQWpHLE1BQUE7TUFDWCxJQUFJLENBQUNpSyxXQUFXLENBQUNyVCxPQUFPLENBQUMsVUFBQ3FOLEtBQUssRUFBSztRQUNsQ0EsS0FBSyxDQUFDNEYsT0FBTyxHQUFJMUMsTUFBTSxDQUFDbEQsS0FBSyxDQUFDelAsS0FBSyxDQUFDLEtBQUsyUyxNQUFNLENBQUNuSCxNQUFJLENBQUNzRixRQUFRLENBQUN0RSxRQUFRLEVBQUUsQ0FBRTtRQUMxRWlELEtBQUssQ0FBQzZCLFFBQVEsR0FBRzlGLE1BQUksQ0FBQzhGLFFBQVE7TUFDaEMsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFrSSxxQkFBQTtBQUFBLEVBcENpQ0QsY0FBWTtBQXVDakNDLDZGQUFxQixFOzs7Ozs7Ozs7QUMxQ0Q7QUFDSDtBQUFBLElBRTFCRSx5Q0FBc0IsMEJBQUFELGFBQUE7RUFBQTNPLGtCQUFBLENBQUE0TyxzQkFBQSxFQUFBRCxhQUFBO0VBQUEsSUFBQTFPLE1BQUEsR0FBQUMsOEJBQUEsQ0FBQTBPLHNCQUFBO0VBQUEsU0FBQUEsdUJBQUE7SUFBQS9XLHdCQUFBLE9BQUErVyxzQkFBQTtJQUFBLE9BQUEzTyxNQUFBLENBQUF4SSxLQUFBLE9BQUFSLFNBQUE7RUFBQTtFQUFBYSxxQkFBQSxDQUFBOFcsc0JBQUE7SUFBQWhhLEdBQUE7SUFBQU0sS0FBQSxFQUMxQixTQUFBdVIsTUFBQSxFQUFTO01BQUEsSUFBQTVMLEtBQUE7TUFDUDtNQUNBLElBQU1tSixPQUFPLEdBQUcsSUFBSSxDQUFDaUMsS0FBSyxDQUFDbkIsZ0JBQWdCLENBQUM7UUFDMUNMLE1BQU0sRUFBRSxJQUFJLENBQUN1QixRQUFRLENBQUNwTyxNQUFNLFFBQUssRUFBRTtRQUNuQ2dOLE1BQU0sRUFBRSxJQUFJLENBQUNvQixRQUFRLENBQUNwTyxNQUFNLENBQUNpQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDMFUsWUFBWTtRQUN0RTdLLEVBQUUsRUFBRSxJQUFJLENBQUNzQyxRQUFRLENBQUN4UixJQUFJO1FBQ3RCMFAsS0FBSyxFQUFFaE8sS0FBSyxDQUFDLElBQUksQ0FBQzhQLFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQzJDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDeUwsUUFBUSxDQUFDcE8sTUFBTSxDQUFDMkMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDeUwsUUFBUSxDQUFDOUUsTUFBTSxFQUFFO1FBQ2xHNEIsTUFBTSxFQUFFLElBQUksQ0FBQ2tELFFBQVEsQ0FBQ3BPLE1BQU0sQ0FBQ2lDLE1BQU0sQ0FBQyxXQUFXO01BQ2pELENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ21LLE9BQU8sR0FBR0EsT0FBTyxDQUFDQSxPQUFPO01BQzlCLElBQUksQ0FBQ0MsS0FBSyxHQUFHRCxPQUFPLENBQUNDLEtBQUs7TUFFMUIsSUFBSSxDQUFDaUMsU0FBUyxDQUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQzBCLFdBQVcsQ0FBQztNQUM1QyxJQUFJLENBQUNBLFdBQVcsQ0FBQzFCLFdBQVcsQ0FBQyxJQUFJLENBQUNKLE9BQU8sQ0FBQztNQUMxQyxJQUFJLENBQUNBLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQ2dDLFlBQVksQ0FBQzs7TUFFM0M7TUFDQSxJQUFJLENBQUNuQyxLQUFLLENBQUMyRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtRQUMxQyxJQUFNMVMsS0FBSyxHQUFHMkYsS0FBSSxDQUFDcU0sUUFBUSxDQUFDck0sS0FBSSxDQUFDb0osS0FBSyxDQUFDL08sS0FBSyxDQUFDO1FBQzdDMkYsS0FBSSxDQUFDbUwsUUFBUSxDQUFDdkUsUUFBUSxDQUFDdk0sS0FBSyxDQUFDO01BQy9CLENBQUMsQ0FBQzs7TUFFRjtNQUNBLElBQUlnQixLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDWSxXQUFXLEVBQUUsQ0FBQyxFQUFFO1FBQzdDLElBQUksQ0FBQ3NOLFdBQVcsQ0FBQzFCLFdBQVcsQ0FBQyxJQUFJLENBQUM2QixLQUFLLENBQUNuQyxjQUFjLENBQUM7VUFDckRuQixXQUFXLEVBQUUsSUFBSSxDQUFDcUQsUUFBUSxDQUFDcE8sTUFBTSxDQUFDWSxXQUFXO1FBQy9DLENBQUMsQ0FBQyxDQUFDO01BQ0w7SUFDRjtFQUFDO0VBQUEsT0FBQW9XLHNCQUFBO0FBQUEsRUE5QmtDSCxjQUFZO0FBaUNsQ0csZ0dBQXNCLEU7Ozs7Ozs7OztBQ3BDSjtBQUMrQjtBQUNFO0FBQ3RCO0FBQ1o7QUFBQSxJQUUxQkMscUJBQWMsMEJBQUFyRyxTQUFBO0VBQUF4SSxrQkFBQSxDQUFBNk8sY0FBQSxFQUFBckcsU0FBQTtFQUFBLElBQUF2SSxNQUFBLEdBQUFDLDRCQUFBLENBQUEyTyxjQUFBO0VBQUEsU0FBQUEsZUFBQTtJQUFBaFgsd0JBQUEsT0FBQWdYLGNBQUE7SUFBQSxPQUFBNU8sTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQStXLGNBQUE7SUFBQWphLEdBQUE7SUFBQU0sS0FBQSxFQUNsQixTQUFBOEwsTUFBQSxFQUFTO01BQ1AsSUFBSSxJQUFJLENBQUNwSixNQUFNLENBQUM2QyxhQUFhLEVBQUUsSUFBSXZFLEtBQUssQ0FBQyxJQUFJLENBQUMwQixNQUFNLFFBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUNrQixRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDN0YsSUFBSSxDQUFDMEgsRUFBRSxHQUFHLElBQUlrTyxpQkFBcUIsQ0FBQyxJQUFJLENBQUM7TUFDM0MsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDOVcsTUFBTSxDQUFDNkMsYUFBYSxFQUFFLElBQUl2RSxLQUFLLENBQUMsSUFBSSxDQUFDMEIsTUFBTSxRQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ25FLElBQUksQ0FBQzRJLEVBQUUsR0FBRyxJQUFJb08sa0JBQXNCLENBQUMsSUFBSSxDQUFDO01BQzVDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2hYLE1BQU0sQ0FBQzZDLGFBQWEsRUFBRSxFQUFFO1FBQ3RDLElBQUksQ0FBQytGLEVBQUUsR0FBRyxJQUFJaU8sY0FBWSxDQUFDLElBQUksQ0FBQztNQUNsQztJQUNGO0VBQUM7RUFBQSxPQUFBSSxjQUFBO0FBQUEsRUFUMEIvTyxrQkFBUTtBQVl0QitPLDBFQUFjLEU7Ozs7Ozs7OztBQ2xCQTtBQUNHO0FBQUEsSUFFMUJDLGVBQVUsMEJBQUF4SCxPQUFBO0VBQUF0SCxrQkFBQSxDQUFBOE8sVUFBQSxFQUFBeEgsT0FBQTtFQUFBLElBQUFySCxNQUFBLEdBQUFDLGdCQUFBLENBQUE0TyxVQUFBO0VBQUEsU0FBQUEsV0FBQTtJQUFBalgsd0JBQUEsT0FBQWlYLFVBQUE7SUFBQSxPQUFBN08sTUFBQSxDQUFBeEksS0FBQSxPQUFBUixTQUFBO0VBQUE7RUFBQWEscUJBQUEsQ0FBQWdYLFVBQUE7SUFBQWxhLEdBQUE7SUFBQU0sS0FBQSxFQUNkLFNBQUF1UixNQUFBLEVBQVM7TUFDUDtNQUNBLElBQUl2USxLQUFLLENBQUMsSUFBSSxDQUFDOFAsUUFBUSxDQUFDcE8sTUFBTSxDQUFDWSxXQUFXLEVBQUUsQ0FBQyxFQUFFO1FBQzdDLElBQUksQ0FBQzBOLFNBQVMsQ0FBQzlCLFdBQVcsQ0FBQyxJQUFJLENBQUM1TCxXQUFXLENBQUM7TUFDOUM7TUFDQSxJQUFJLENBQUMwTixTQUFTLENBQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDZ0MsWUFBWSxDQUFDO01BQzdDLElBQUksQ0FBQ0YsU0FBUyxDQUFDOUIsV0FBVyxDQUFDLElBQUksQ0FBQzBCLFdBQVcsQ0FBQztJQUM5QztFQUFDO0lBQUFsUixHQUFBO0lBQUFNLEtBQUEsRUFFRCxTQUFBZ1MsU0FBVWhTLEtBQUssRUFBRTtNQUNmLE9BQU8sSUFBSTtJQUNiO0VBQUM7RUFBQSxPQUFBNFosVUFBQTtBQUFBLEVBWnNCL0ksY0FBTTtBQWVoQitJLGdFQUFVLEU7Ozs7Ozs7OztBQ2xCUTtBQUNPO0FBQUEsSUFFbENDLGlCQUFZLDBCQUFBdkcsU0FBQTtFQUFBeEksa0JBQUEsQ0FBQStPLFlBQUEsRUFBQXZHLFNBQUE7RUFBQSxJQUFBdkksTUFBQSxHQUFBQywwQkFBQSxDQUFBNk8sWUFBQTtFQUFBLFNBQUFBLGFBQUE7SUFBQWxYLHdCQUFBLE9BQUFrWCxZQUFBO0lBQUEsT0FBQTlPLE1BQUEsQ0FBQXhJLEtBQUEsT0FBQVIsU0FBQTtFQUFBO0VBQUFhLHFCQUFBLENBQUFpWCxZQUFBO0lBQUFuYSxHQUFBO0lBQUFNLEtBQUEsRUFDaEIsU0FBQThMLE1BQUEsRUFBUztNQUNQLElBQUksQ0FBQ1IsRUFBRSxHQUFHLElBQUlzTyxZQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hDO0VBQUM7RUFBQSxPQUFBQyxZQUFBO0FBQUEsRUFId0JqUCxrQkFBUTtBQU1wQmlQLG9FQUFZLEU7Ozs7QUNUM0I7O0FBU2dCO0FBQUEsSUFFVkMsb0JBQVM7RUFDYixTQUFBQSxVQUFhbFYsT0FBTyxFQUFFO0lBQUFqQyx3QkFBQSxPQUFBbVgsU0FBQTtJQUNwQixJQUFJN1ksTUFBTSxDQUFDMkQsT0FBTyxDQUFDLEVBQUU7TUFDbkJBLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDZDtJQUVBLElBQUksQ0FBQ21WLFVBQVUsR0FBR25WLE9BQU8sQ0FBQ21WLFVBQVUsSUFBSSxDQUFDO0lBQ3pDLElBQUksQ0FBQ0MsY0FBYyxHQUFHcFYsT0FBTyxDQUFDb1YsY0FBYyxJQUFJQSxjQUFjO0lBQzlELElBQUksQ0FBQ0MsV0FBVyxHQUFHLENBQUMsQ0FBQztFQUN2QjtFQUFDclgscUJBQUEsQ0FBQWtYLFNBQUE7SUFBQXBhLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUFrYSxZQUFheFgsTUFBTSxFQUFFO01BQUEsSUFBQWlELEtBQUE7TUFDbkIsS0FBSyxJQUFJa0UsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ2tRLFVBQVUsRUFBRWxRLENBQUMsRUFBRSxFQUFFO1FBQ3hDO1FBQ0EsSUFBSSxDQUFDc1EsUUFBUSxDQUFDO1VBQ1puYSxLQUFLLEVBQUUwQyxNQUFNO1VBQ2J4RCxRQUFRLEVBQUUsU0FBQUEsU0FBQ2tiLElBQUksRUFBSztZQUNsQixJQUFJQSxJQUFJLENBQUMxYSxHQUFHLEtBQUssTUFBTSxFQUFFO2NBQ3ZCaUcsS0FBSSxDQUFDc1UsV0FBVyxDQUFDRyxJQUFJLENBQUM5YSxJQUFJLENBQUMsR0FBRzhhLElBQUksQ0FBQ3BhLEtBQUs7WUFDMUM7VUFDRjtRQUNGLENBQUMsQ0FBQzs7UUFFRjtRQUNBLElBQUksQ0FBQ21hLFFBQVEsQ0FBQztVQUNabmEsS0FBSyxFQUFFMEMsTUFBTTtVQUNieEQsUUFBUSxFQUFFLFNBQUFBLFNBQUNrYixJQUFJLEVBQUs7WUFDbEIsSUFBSSxDQUFDdlosY0FBUSxDQUFDdVosSUFBSSxDQUFDcGEsS0FBSyxDQUFDLEVBQUU7Y0FDekI7WUFDRjtZQUVBLElBQU1xYSxRQUFRLEdBQUdELElBQUksQ0FBQ0UsU0FBUztZQUMvQixJQUFNQyxHQUFHLEdBQUdILElBQUksQ0FBQ3BhLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFOUIsSUFBSWdCLEtBQUssQ0FBQ3FaLFFBQVEsQ0FBQyxJQUFJclosS0FBSyxDQUFDdVosR0FBRyxDQUFDLEVBQUU7Y0FDakMsSUFBSTVVLEtBQUksQ0FBQzZVLGNBQWMsQ0FBQ0osSUFBSSxDQUFDOWEsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xDbWIsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFTixJQUFJLENBQUM5YSxJQUFJLENBQUM7Z0JBQ2xDO2NBQ0Y7Y0FFQSthLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDMWEsR0FBRyxDQUFDLEdBQUdpRyxLQUFJLENBQUNnVixNQUFNLENBQUNKLEdBQUcsQ0FBQztZQUN2QztVQUNGO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7TUFFQSxPQUFPN1gsTUFBTTtJQUNmO0VBQUM7SUFBQWhELEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUF3YSxlQUFnQmxiLElBQUksRUFBRTtNQUNwQixJQUFJc2IsTUFBTSxHQUFHLEtBQUs7TUFFbEJqYixNQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUMyWixXQUFXLENBQUMsQ0FBQzdYLE9BQU8sQ0FBQyxVQUFDMUMsR0FBRyxFQUFLO1FBQzdDO1FBQ0FKLElBQUksR0FBR0EsSUFBSSxDQUFDdWIsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUV4QixJQUFJdmIsSUFBSSxDQUFDRixNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ3JCLE9BQU93YixNQUFNO1FBQ2Y7UUFFQSxJQUFNRSxJQUFJLEdBQUczYSxJQUFJLENBQUM0YSxJQUFJLENBQUN6YixJQUFJLENBQUNGLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBTTRiLFNBQVMsR0FBRzFiLElBQUksQ0FBQzhVLEtBQUssQ0FBQyxDQUFDLEVBQUUwRyxJQUFJLENBQUM7UUFDckMsSUFBTUcsVUFBVSxHQUFHM2IsSUFBSSxDQUFDOFUsS0FBSyxDQUFDMEcsSUFBSSxDQUFDO1FBRW5DLElBQUlwYSxLQUFLLENBQUNzYSxTQUFTLEVBQUVDLFVBQVUsQ0FBQyxFQUFFO1VBQ2hDTCxNQUFNLEdBQUcsSUFBSTtRQUNmO01BQ0YsQ0FBQyxDQUFDO01BRUYsT0FBT0EsTUFBTTtJQUNmO0VBQUM7SUFBQWxiLEdBQUE7SUFBQU0sS0FBQSxFQUVELFNBQUEyYSxPQUFRSixHQUFHLEVBQUU7TUFDWCxJQUFJLENBQUNsWixRQUFRLENBQUNrWixHQUFHLENBQUMsRUFBRTtRQUNsQixPQUFPQSxHQUFHO01BQ1o7O01BRUE7TUFDQSxJQUFJQSxHQUFHLENBQUNXLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN2QixJQUFJbGEsS0FBSyxDQUFDLElBQUksQ0FBQ2laLFdBQVcsQ0FBQ00sR0FBRyxDQUFDLENBQUMsRUFBRTtVQUNoQyxPQUFPNWIsS0FBSyxDQUFDLElBQUksQ0FBQ3NiLFdBQVcsQ0FBQ00sR0FBRyxDQUFDLENBQUM7UUFDckM7TUFDRjtNQUVBLElBQUlBLEdBQUcsQ0FBQ1csVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJWCxHQUFHLENBQUNXLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNyRCxJQUFNQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUNuQixjQUFjLEVBQUU7UUFDekNtQixPQUFPLENBQUNDLElBQUksQ0FBQyxLQUFLLEVBQUViLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBQztRQUNoQ1ksT0FBTyxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRWxCLElBQUlGLE9BQU8sQ0FBQ0csTUFBTSxLQUFLLEdBQUcsRUFBRTtVQUMxQixPQUFPemMsSUFBSSxDQUFDQyxLQUFLLENBQUNxYyxPQUFPLENBQUNJLFlBQVksQ0FBQztRQUN6QyxDQUFDLE1BQU07VUFDTGQsT0FBTyxDQUFDdFIsS0FBSyxDQUFDLGNBQWMsRUFBRW9SLEdBQUcsQ0FBQztRQUNwQztNQUNGO01BRUEsT0FBT3hYLFNBQVM7SUFDbEI7RUFBQztJQUFBckQsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQW1hLFNBQVVDLElBQUksRUFBRTtNQUFBLElBQUE1TyxNQUFBO01BQ2QsSUFBTXhMLEtBQUssR0FBR29hLElBQUksQ0FBQ3BhLEtBQUs7TUFDeEIsSUFBTWQsUUFBUSxHQUFHa2IsSUFBSSxDQUFDbGIsUUFBUTtNQUM5QixJQUFNSSxJQUFJLEdBQUcwQixLQUFLLENBQUNvWixJQUFJLENBQUM5YSxJQUFJLENBQUMsR0FBRzhhLElBQUksQ0FBQzlhLElBQUksR0FBRyxHQUFHLEdBQUc4YSxJQUFJLENBQUMxYSxHQUFHLEdBQUcsR0FBRztNQUNoRTBhLElBQUksQ0FBQzlhLElBQUksR0FBR0EsSUFBSTtNQUVoQixJQUFJMEIsS0FBSyxDQUFDOUIsUUFBUSxDQUFDLEVBQUU7UUFDbkJBLFFBQVEsQ0FBQ2tiLElBQUksQ0FBQztNQUNoQjtNQUVBLElBQUl2WixjQUFRLENBQUNiLEtBQUssQ0FBQyxFQUFFO1FBQ25CTCxNQUFNLENBQUNXLElBQUksQ0FBQ04sS0FBSyxDQUFDLENBQUNvQyxPQUFPLENBQUMsVUFBQzFDLEdBQUcsRUFBSztVQUNsQzBhLElBQUksQ0FBQ3BhLEtBQUssR0FBR0EsS0FBSyxDQUFDTixHQUFHLENBQUM7VUFDdkIwYSxJQUFJLENBQUMxYSxHQUFHLEdBQUdBLEdBQUc7VUFDZDBhLElBQUksQ0FBQzlhLElBQUksR0FBR0EsSUFBSTtVQUNoQjhhLElBQUksQ0FBQ0UsU0FBUyxHQUFHdGEsS0FBSztVQUN0QndMLE1BQUksQ0FBQzJPLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQztNQUNKO01BRUEsSUFBSTdZLE9BQU8sQ0FBQ3ZCLEtBQUssQ0FBQyxFQUFFO1FBQ2xCQSxLQUFLLENBQUNvQyxPQUFPLENBQUMsVUFBQ3FLLFFBQVEsRUFBRS9NLEdBQUcsRUFBSztVQUMvQjBhLElBQUksQ0FBQ3BhLEtBQUssR0FBR3lNLFFBQVE7VUFDckIyTixJQUFJLENBQUMxYSxHQUFHLEdBQUdBLEdBQUc7VUFDZDBhLElBQUksQ0FBQzlhLElBQUksR0FBR0EsSUFBSTtVQUNoQjhhLElBQUksQ0FBQ0UsU0FBUyxHQUFHdGEsS0FBSztVQUN0QndMLE1BQUksQ0FBQzJPLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQztNQUNKO0lBQ0Y7RUFBQztFQUFBLE9BQUFOLFNBQUE7QUFBQTtBQUdZQSxtRUFBUyxFOzs7Ozs7Ozs7O0FDOUlLO0FBQ2lCO0FBQ0o7QUFDdUI7QUFDZDtBQUNGO0FBQ0Y7QUFDRjtBQUNFO0FBQ0E7QUFDSjtBQUNQO0FBQUEsSUFFOUIvVCxTQUFJLDBCQUFBOEUsYUFBQTtFQUFBQyxrQkFBQSxDQUFBL0UsSUFBQSxFQUFBOEUsYUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsZ0JBQUEsQ0FBQWpGLElBQUE7RUFDUixTQUFBQSxLQUFhbkIsT0FBTyxFQUFFO0lBQUEsSUFBQWUsS0FBQTtJQUFBaEQsd0JBQUEsT0FBQW9ELElBQUE7SUFDcEJKLEtBQUEsR0FBQW9GLE1BQUEsQ0FBQWpMLElBQUE7SUFDQTZGLEtBQUEsQ0FBS2YsT0FBTyxHQUFHakYsTUFBTSxDQUFDMEMsTUFBTSxDQUFDO01BQzNCMk8sU0FBUyxFQUFFLElBQUk7TUFDZm5GLFFBQVEsRUFBRSxLQUFLO01BQ2Z5SyxrQkFBa0IsRUFBRSxLQUFLO01BQ3pCNUUsZ0JBQWdCLEVBQUUsS0FBSztNQUN2QjhKLGdCQUFnQixFQUFFLEtBQUs7TUFDdkI5WSxNQUFNLEVBQUUsQ0FBQyxDQUFDO01BQ1ZxTyxLQUFLLEVBQUUsV0FBVztNQUNsQjdLLFNBQVMsRUFBRTtJQUNiLENBQUMsRUFBRXRCLE9BQU8sQ0FBQztJQUVYZSxLQUFBLENBQUtNLFFBQVEsR0FBRyxHQUFHO0lBQ25CTixLQUFBLENBQUt1RyxhQUFhLEdBQUcsR0FBRztJQUN4QnZHLEtBQUEsQ0FBS21OLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbkJuTixLQUFBLENBQUs4VixJQUFJLEdBQUcsSUFBSTtJQUNoQjlWLEtBQUEsQ0FBS29MLEtBQUssR0FBRyxJQUFJO0lBQ2pCcEwsS0FBQSxDQUFLQyxTQUFTLEdBQUcsSUFBSTtJQUNyQkQsS0FBQSxDQUFLakQsTUFBTSxHQUFHLElBQUk7SUFDbEJpRCxLQUFBLENBQUtPLFNBQVMsR0FBRyxJQUFJO0lBQ3JCUCxLQUFBLENBQUs0RixJQUFJLEVBQUU7SUFBQSxPQUFBNUYsS0FBQTtFQUNiO0VBQUMvQyxxQkFBQSxDQUFBbUQsSUFBQTtJQUFBckcsR0FBQTtJQUFBTSxLQUFBLEVBRUQsU0FBQXVMLEtBQUEsRUFBUTtNQUFBLElBQUFDLE1BQUE7TUFDTixJQUFJLENBQUM1RixTQUFTLEdBQUcsSUFBSW9FLG9CQUFTLEVBQUU7TUFDaEMsSUFBSSxJQUFJLENBQUNwRixPQUFPLENBQUNzQixTQUFTLEVBQUU7UUFDMUIsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSTRULFVBQVMsQ0FBQztVQUM3QkUsY0FBYyxFQUFFLElBQUksQ0FBQ3BWLE9BQU8sQ0FBQ29WO1FBQy9CLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ3BWLE9BQU8sQ0FBQ2xDLE1BQU0sR0FBRyxJQUFJLENBQUN3RCxTQUFTLENBQUNnVSxXQUFXLENBQUMsSUFBSSxDQUFDdFYsT0FBTyxDQUFDbEMsTUFBTSxDQUFDO01BQ3ZFO01BRUEsSUFBSSxDQUFDQSxNQUFNLEdBQUcsSUFBSUQsVUFBTSxDQUFDLElBQUksQ0FBQ21DLE9BQU8sQ0FBQ2xDLE1BQU0sQ0FBQztNQUU3QyxJQUFJLENBQUMrWSxJQUFJLEdBQUcsSUFBSSxDQUFDbkgsY0FBYyxDQUFDO1FBQzlCcEosSUFBSSxFQUFFLElBQUk7UUFDVnhJLE1BQU0sRUFBRSxJQUFJLENBQUNrQyxPQUFPLENBQUNsQztNQUN2QixDQUFDLENBQUM7TUFFRixJQUFJMUIsS0FBSyxDQUFDLElBQUksQ0FBQzRELE9BQU8sQ0FBQ29CLFVBQVUsQ0FBQyxFQUFFO1FBQ2xDLElBQUksQ0FBQ3lWLElBQUksQ0FBQ2xQLFFBQVEsQ0FBQyxJQUFJLENBQUMzSCxPQUFPLENBQUNvQixVQUFVLENBQUM7TUFDN0M7TUFFQSxJQUFJLElBQUksQ0FBQ3BCLE9BQU8sQ0FBQ2lILFFBQVEsSUFBSSxJQUFJLENBQUNqSCxPQUFPLENBQUNvTSxTQUFTLEVBQUU7UUFDbkQsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSSxDQUFDcE0sT0FBTyxDQUFDb00sU0FBUztRQUN2QyxJQUFJLENBQUMwSyxpQkFBaUIsRUFBRTtRQUN4QixJQUFJLENBQUMxSyxTQUFTLENBQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDdU0sSUFBSSxDQUFDblEsRUFBRSxDQUFDMEYsU0FBUyxDQUFDO1FBQ2xELElBQUksQ0FBQ0EsU0FBUyxDQUFDNUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQzVDO01BRUEsSUFBSSxDQUFDb08sSUFBSSxDQUFDalIsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFNO1FBQzNCZ0IsTUFBSSxDQUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDO01BQ3JCLENBQUMsQ0FBQztJQUNKOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0VBSEU7SUFBQWhMLEdBQUE7SUFBQU0sS0FBQSxFQUlBLFNBQUEwYixrQkFBQSxFQUFxQjtNQUFBLElBQUE3TyxNQUFBO01BQ25CLElBQU04TyxhQUFhLEdBQUcsSUFBSSxDQUFDRixJQUFJLENBQUNuUSxFQUFFLENBQUN5RixLQUFLLENBQUM1QixlQUFlLENBQUM7UUFDdkR4TixJQUFJLEVBQUUsUUFBUTtRQUNkNk0sRUFBRSxFQUFFO01BQ04sQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDb04sV0FBVyxHQUFHRCxhQUFhLENBQUM1TSxLQUFLO01BRXRDLElBQUksQ0FBQzZNLFdBQVcsQ0FBQ3JOLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO01BRTdDLElBQUksQ0FBQ3lDLFNBQVMsQ0FBQzlCLFdBQVcsQ0FBQyxJQUFJLENBQUMwTSxXQUFXLENBQUM7TUFDNUMsSUFBSSxDQUFDQSxXQUFXLENBQUM1YixLQUFLLEdBQUduQixJQUFJLENBQUNFLFNBQVMsQ0FBQyxJQUFJLENBQUN5TixRQUFRLEVBQUUsQ0FBQztNQUV4RCxJQUFJLENBQUNoQyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQU07UUFDdEJxQyxNQUFJLENBQUMrTyxXQUFXLENBQUM1YixLQUFLLEdBQUduQixJQUFJLENBQUNFLFNBQVMsQ0FBQzhOLE1BQUksQ0FBQ0wsUUFBUSxFQUFFLENBQUM7TUFDMUQsQ0FBQyxDQUFDO0lBQ0o7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQTlNLEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUF5TCxTQUFVcUYsUUFBUSxFQUFFO01BQ2xCLElBQUksQ0FBQ2dDLFNBQVMsQ0FBQ2hDLFFBQVEsQ0FBQ3hSLElBQUksQ0FBQyxHQUFHd1IsUUFBUTtJQUMxQzs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBcFIsR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQW9NLFdBQVkwRSxRQUFRLEVBQUU7TUFDcEIsSUFBSSxDQUFDZ0MsU0FBUyxDQUFDaEMsUUFBUSxDQUFDeFIsSUFBSSxDQUFDLEdBQUcsSUFBSTtNQUNwQyxPQUFPLElBQUksQ0FBQ3dULFNBQVMsQ0FBQ2hDLFFBQVEsQ0FBQ3hSLElBQUksQ0FBQztJQUN0Qzs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBSSxHQUFBO0lBQUFNLEtBQUEsRUFHQSxTQUFBc1UsZUFBZ0JySixNQUFNLEVBQUU7TUFDdEIsSUFBSTZGLFFBQVE7O01BRVo7TUFDQSxJQUFJLElBQUksQ0FBQ2xNLE9BQU8sQ0FBQ3NCLFNBQVMsSUFBSTFHLE1BQU0sQ0FBQ3lMLE1BQU0sQ0FBQ3ZJLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtRQUMzRHVJLE1BQU0sQ0FBQ3ZJLE1BQU0sR0FBRyxJQUFJLENBQUN3RCxTQUFTLENBQUN5VSxNQUFNLENBQUMxUCxNQUFNLENBQUN2SSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDOUQ7TUFFQXVJLE1BQU0sQ0FBQ3ZJLE1BQU0sR0FBRyxJQUFJRCxVQUFNLENBQUN3SSxNQUFNLENBQUN2SSxNQUFNLENBQUM7TUFFekMsSUFBSXVJLE1BQU0sQ0FBQ3ZJLE1BQU0sQ0FBQzRDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNuQ3dMLFFBQVEsR0FBRyxJQUFJOEUsaUJBQWUsQ0FBQzNLLE1BQU0sQ0FBQztNQUN4QztNQUVBLElBQUlBLE1BQU0sQ0FBQ3ZJLE1BQU0sQ0FBQzRDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNsQ3dMLFFBQVEsR0FBRyxJQUFJaUcsZ0JBQWMsQ0FBQzlMLE1BQU0sQ0FBQztNQUN2QztNQUVBLElBQUlBLE1BQU0sQ0FBQ3ZJLE1BQU0sQ0FBQzRDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNqQ3dMLFFBQVEsR0FBRyxJQUFJMEgsZUFBYSxDQUFDdk4sTUFBTSxDQUFDO01BQ3RDO01BRUEsSUFBSUEsTUFBTSxDQUFDdkksTUFBTSxDQUFDNEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2xDd0wsUUFBUSxHQUFHLElBQUl3SSxnQkFBYyxDQUFDck8sTUFBTSxDQUFDO01BQ3ZDO01BRUEsSUFBSUEsTUFBTSxDQUFDdkksTUFBTSxDQUFDNkMsYUFBYSxFQUFFLEVBQUU7UUFDakN1TCxRQUFRLEdBQUcsSUFBSTZJLGdCQUFjLENBQUMxTyxNQUFNLENBQUM7TUFDdkM7TUFFQSxJQUFJQSxNQUFNLENBQUN2SSxNQUFNLENBQUM0QyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDaEN3TCxRQUFRLEdBQUcsSUFBSStJLGNBQVksQ0FBQzVPLE1BQU0sQ0FBQztNQUNyQztNQUVBLElBQUlqSyxLQUFLLENBQUNpSyxNQUFNLENBQUN2SSxNQUFNLENBQUNNLEtBQUssRUFBRSxDQUFDLElBQUloQyxLQUFLLENBQUNpSyxNQUFNLENBQUN2SSxNQUFNLENBQUM4QyxLQUFLLEVBQUUsQ0FBQyxJQUFJeUYsTUFBTSxDQUFDdkksTUFBTSxDQUFDNEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJL0QsT0FBTyxDQUFDMEosTUFBTSxDQUFDdkksTUFBTSxDQUFDZixJQUFJLEVBQUUsQ0FBQyxJQUFJVixNQUFNLENBQUNnSyxNQUFNLENBQUN2SSxNQUFNLENBQUNmLElBQUksRUFBRSxDQUFDLEVBQUU7UUFDaEssSUFBSVYsTUFBTSxDQUFDZ0ssTUFBTSxDQUFDdkksTUFBTSxDQUFDZixJQUFJLEVBQUUsQ0FBQyxJQUFJWCxLQUFLLENBQUNpSyxNQUFNLENBQUN2SSxNQUFNLFdBQVEsRUFBRSxDQUFDLEVBQUU7VUFDbEUsSUFBTW1aLGNBQWMsR0FBRzVRLE1BQU0sQ0FBQ3ZJLE1BQU0sQ0FBQy9ELEtBQUssRUFBRTtVQUM1Q2tkLGNBQWMsQ0FBQ2xhLElBQUksR0FBR0QsT0FBTyxDQUFDdUosTUFBTSxDQUFDdkksTUFBTSxXQUFRLEVBQUUsQ0FBQztVQUN0RHVJLE1BQU0sQ0FBQ3ZJLE1BQU0sR0FBRyxJQUFJRCxVQUFNLENBQUNvWixjQUFjLENBQUM7VUFDMUMsT0FBTyxJQUFJLENBQUN2SCxjQUFjLENBQUNySixNQUFNLENBQUM7UUFDcEMsQ0FBQyxNQUFNO1VBQ0w2RixRQUFRLEdBQUcsSUFBSXVDLGtCQUFnQixDQUFDcEksTUFBTSxDQUFDO1FBQ3pDO01BQ0Y7TUFFQSxJQUFJakssS0FBSyxDQUFDOFAsUUFBUSxDQUFDLEVBQUU7UUFDbkIsT0FBT0EsUUFBUTtNQUNqQjtJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0VBSEU7SUFBQXBSLEdBQUE7SUFBQU0sS0FBQSxFQUlBLFNBQUF3TSxTQUFBLEVBQVk7TUFDVixPQUFPLElBQUksQ0FBQ2lQLElBQUksQ0FBQ2pQLFFBQVEsRUFBRTtJQUM3Qjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtFQUhFO0lBQUE5TSxHQUFBO0lBQUFNLEtBQUEsRUFJQSxTQUFBdU0sU0FBQSxFQUFZO01BQUEsSUFBQXVQLFVBQUE7TUFDVixPQUFPLENBQUFBLFVBQUEsT0FBSSxDQUFDTCxJQUFJLEVBQUNsUCxRQUFRLENBQUFoSyxLQUFBLENBQUF1WixVQUFBLEVBQUkvWixTQUFTLENBQUM7SUFDekM7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7RUFIRTtJQUFBckMsR0FBQTtJQUFBTSxLQUFBLEVBSUEsU0FBQStiLFlBQWF6YyxJQUFJLEVBQUU7TUFDakIsT0FBTyxJQUFJLENBQUN3VCxTQUFTLENBQUN4VCxJQUFJLENBQUM7SUFDN0I7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQUksR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQThSLFFBQUEsRUFBVztNQUNULElBQUksQ0FBQzJKLElBQUksQ0FBQ25RLEVBQUUsQ0FBQ3dHLE9BQU8sRUFBRTtJQUN4Qjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBcFMsR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQStSLE9BQUEsRUFBVTtNQUNSLElBQUksQ0FBQzBKLElBQUksQ0FBQ25RLEVBQUUsQ0FBQ3lHLE1BQU0sRUFBRTtJQUN2Qjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBclMsR0FBQTtJQUFBTSxLQUFBLEVBR0EsU0FBQW9HLFNBQUEsRUFBWTtNQUFBLElBQUFvUixNQUFBO01BQ1YsSUFBSTNSLE1BQU0sR0FBRyxFQUFFO01BRWZsRyxNQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUN3UyxTQUFTLENBQUMsQ0FBQzFRLE9BQU8sQ0FBQyxVQUFDMUMsR0FBRyxFQUFLO1FBQzNDLElBQU1zSixNQUFNLEdBQUd3TyxNQUFJLENBQUMxRSxTQUFTLENBQUNwVCxHQUFHLENBQUM7UUFDbENtRyxNQUFNLE1BQUFyRCxNQUFBLENBQUEwQywyQkFBQSxDQUFPVyxNQUFNLEdBQUFYLDJCQUFBLENBQUs4RCxNQUFNLENBQUM1QyxRQUFRLEVBQUUsRUFBQztNQUM1QyxDQUFDLENBQUM7TUFFRixPQUFPUCxNQUFNO0lBQ2Y7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQW5HLEdBQUE7SUFBQU0sS0FBQSxFQUdBLFNBQUEwRixRQUFBLEVBQVc7TUFBQSxJQUFBc1csTUFBQTtNQUNULElBQUksQ0FBQ1AsSUFBSSxDQUFDL1YsT0FBTyxFQUFFO01BRW5CLElBQUksSUFBSSxDQUFDZCxPQUFPLENBQUNpSCxRQUFRLEVBQUU7UUFDekIsSUFBSSxDQUFDbUYsU0FBUyxDQUFDWSxTQUFTLEdBQUcsRUFBRTtNQUMvQjtNQUVBalMsTUFBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM4QixPQUFPLENBQUMsVUFBQzFDLEdBQUcsRUFBSztRQUNqQyxPQUFPc2MsTUFBSSxDQUFDdGMsR0FBRyxDQUFDO01BQ2xCLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQSxPQUFBcUcsSUFBQTtBQUFBLEVBcE5nQnVFLGFBQVk7QUF1TmhCdkUsbUZBQUksRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcbiIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZmFrZUZvckVhY2ggPSAoYXJyYXksIGNhbGxiYWNrKSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF0aFRvQXR0cmlidXRlID0gKHBhdGgpID0+IHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZUFsbCgnIycsICdyb290JykucmVwbGFjZUFsbCgnLycsICctJylcbn1cblxuZXhwb3J0IGNvbnN0IGhhc093biA9IChvYmosIGtleSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbn1cblxuZXhwb3J0IGNvbnN0IHJvdW5kMmRlY2ltYWxzID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0T2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjb250YWlucyAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmNvbnRhaW5zKSkgPyB0aGlzLnNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXBlbmRlbnRTY2hlbWFzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5lbHNlKSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLmZvcm1hdCgpKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICBpZiAoaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4Q29udGFpbnMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4Q29udGFpbnMpICYmIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhDb250YWluc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWluQ29udGFpbnMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluQ29udGFpbnMpICYmIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Db250YWluc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLm5vdCkpID8gdGhpcy5zY2hlbWEubm90IDogdW5kZWZpbmVkXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlYWRPbmx5ICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnJlYWRPbmx5KSA/IHRoaXMuc2NoZW1hLnJlYWRPbmx5IDogdW5kZWZpbmVkXG4gIH1cblxuICByZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQpXSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdGhlbiAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudGhlbikpID8gdGhpcy5zY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdHlwZSAoKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHlwZUlzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy50eXBlKCkpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVJc051bWVyaWMgKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVJcygnbnVtYmVyJykgfHwgdGhpcy50eXBlSXMoJ2ludGVnZXInKVxuICB9XG5cbiAgb25lT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLm9uZU9mKSA/IHRoaXMuc2NoZW1hLm9uZU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICB1bmlxdWVJdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS51bmlxdWVJdGVtcykgPyB0aGlzLnNjaGVtYS51bmlxdWVJdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWFcbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgYWxsT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZigpKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJvb3ROYW1lOiBrZXksIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVycm9ycyA9IHN1YlNjaGVtYUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5jb250YWlucygpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmNvbnRhaW5zKCksIHN0YXJ0VmFsdWU6IGl0ZW0sIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGNvbnRhaW5zRXJyb3JzID0gY29udGFpbnNFZGl0b3IudmFsaWRhdGUoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLm1pbkNvbnRhaW5zKCkpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IHNjaGVtYS5taW5Db250YWlucygpKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBpcyBsZXNzIHRoYW4gbWluaW11bSBjb250YWlucyBjb3VudCBvZiAke3NjaGVtYS5taW5Db250YWlucygpfWAsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiAnTm8gaXRlbXMgbWF0Y2ggY29udGFpbnMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLm1heENvbnRhaW5zKCkpKSB7XG4gICAgICBjb25zdCBtYXhDb250YWluc0ludmFsaWQgPSAoY291bnRlciA+IHNjaGVtYS5tYXhDb250YWlucygpKVxuXG4gICAgICBpZiAobWF4Q29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBleGNlZWRzIG1heGltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWF4Q29udGFpbnMoKX1gLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGFueU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbnlPZigpKSkge1xuICAgIGNvbnN0IGFueU9mID0gc2NoZW1hLmFueU9mKClcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGFueU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAoYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbnRTY2hlbWFzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKSkpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnRTY2hlbWEgPSBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpW2tleV1cbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGRlcGVuZGVudFNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi50bXBFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZW51bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmVudW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYS5lbnVtKCkuc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmVudW0oKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGdyZWF0ZXIgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGZvcm1hdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuZm9ybWF0KCkpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCBtZXNzYWdlXG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXJsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1cmwnXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXVpZCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXVpZCdcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaXNTZXQocmVnZXhwKSAmJiAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfaWYgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5pZigpKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hLnRoZW4oKSkgJiYgbm90U2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS50aGVuKCkpKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB0aGVuRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgZWxzZUVycm9ycyA9IGVsc2VFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4SXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4TGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4UHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtdWx0aXBsZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubXVsdGlwbGVPZigpKSkge1xuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YgfHwgdmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3Qgbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5ub3QoKSkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBvbmVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEub25lT2YoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm4oKSkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcvJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5yZXF1aXJlZCgpKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHR5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB2YWxpZCA9IHNjaGVtYS50eXBlKCkuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgdW5pcXVlSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpKSB7XG4gICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gaXNTZXQoc2NoZW1hLnByb3BlcnRpZXMoKSkgPyBzY2hlbWEucHJvcGVydGllcygpIDoge31cbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBsZXQgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICAgIGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgUHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIGRvZXMgbm90IGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllcy5gLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByb290TmFtZTogcHJvcGVydHksXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgZHJhZnQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMidcbmltcG9ydCB7IGhhc093biwgaXNCb29sZWFuIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnRcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHNjaGVtYS5jbG9uZSgpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA/IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA6ICdpbnZhbGlkJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRyYWZ0KS5mb3JFYWNoKChjb25zdHJhaW4pID0+IHtcbiAgICAgIGlmIChoYXNPd24oc2NoZW1hQ2xvbmUsIGNvbnN0cmFpbikpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5kcmFmdFtjb25zdHJhaW5dXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hLm9wdGlvbignbWVzc2FnZScpKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgdGhpcy5qZWRpLnJvb3ROYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J1Mgc2NoZW1hXG4gICAqL1xuICBzZXRJbml0aWFsVmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgLy8gaWYgKHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgIC8vICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZWZhdWx0RXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gICAgICBjb25zdCB2YWxpZERlZmF1bHQgPSBkZWZhdWx0RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAodmFsaWREZWZhdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJjbGFzcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBodG1sLnN0eWxlLmZvbnRTaXplID0gJ2luaGVyaXQnXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG5cbiAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICBodG1sLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLnZhbHVlKVxuICAgIH1cblxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFkZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUtYWxsJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnamVkaS1hY3RpdmUtYnRuJ1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCBpbnB1dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy8nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBpbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICcvJyArIGluZGV4KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH0pXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dHMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldE1lc3NhZ2VzU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4teHMnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IGlucHV0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLycgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIGlucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy8nICsgaW5kZXgpXG5cbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBjb250cm9sLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbClcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHJhZGlvKVxuICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIH0pXG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dHMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH0gPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH0gPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEVkaXRvckNvbnRhaW5lcigpXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFjdGlvbnNTbG90KClcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRNZXNzYWdlc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkRlbGV0ZUFsbChjb25maWcpXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH0gPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfSA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgaW5wdXRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy8nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGlucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy8nICsgaW5kZXgpXG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBjb250cm9sLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbClcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpbylcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXRzIH1cbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250cm9sLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgY29udHJvbC5pbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDaGlsZHJlblNsb3QoKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0TWVzc2FnZXNTbG90KClcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkFkZChjb25maWcpXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuRGVsZXRlQWxsKGNvbmZpZylcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cblxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgaW5wdXRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy8nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGlucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy8nICsgaW5kZXgpXG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBjb250cm9sLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbClcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpbylcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXRzIH1cbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9ID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udHJvbC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICByZXR1cm4geyBjb250cm9sLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29udHJvbC5pbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0IH0gPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1zZWxlY3QnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgcmV0dXJuIHsgY29udHJvbCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQgfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgVGhlbWVCb290c3RyYXAzIGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXAzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi4vdGhlbWVzL2JhcmVib25lcydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IG51bGxcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gbnVsbFxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gbnVsbFxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5hcnJheUFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gbnVsbFxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEVkaXRvckNvbnRhaW5lcigpXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgfSlcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gdGhpcy50aGVtZS5nZXRDb250cm9sU2xvdCgpXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSB0aGlzLnRoZW1lLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuYXJyYXlBY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSB0aGlzLnRoZW1lLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICBidWlsZCAoKSB7fVxuXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UudmFsaWRhdGUoKVxuXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soZXJyb3IubWVzc2FnZSlcbiAgICAgIHRoaXMubWVzc2FnZXNTbG90LmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMubGVnZW5kID0gdGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdPcHRpb25zJ1xuICAgIH0pXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy50aGVtZS5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpICsgJy1zd2l0Y2hlcicsXG4gICAgICBsYWJlbDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCkgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHNyT25seTogdHJ1ZVxuICAgIH0pXG5cbiAgICB0aGlzLnN3aXRjaGVyLmNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICB0aGlzLnN3aXRjaGVyLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHRoaXMuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoZXIuY29udHJvbClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5maWVsZHNldEJvZHkucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udGFpbmVyKVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXIuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBpc09iamVjdChzY2hlbWFDbG9uZSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoMCwgZmFsc2UsIHNldFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cblxuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICAgIH1cbiAgfVxuXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh2YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4KVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUluc3RhbmNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRyb2wuaW5wdXRcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gY29udHJvbC5pbnB1dHNcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wpXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRyb2wuaW5wdXRcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICB0aGlzLmxlZ2VuZCA9IHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZSA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgfSlcblxuICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiAnUHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmlucHV0XG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1vYmplY3QtYWRkJylcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7IHR5cGU6ICdhbnknIH1cblxuICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSkpIHtcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzVG9nZ2xlKVxuICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICB0aGlzLnByb3BlcnRpZXNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmNvbnRyb2wpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5Q29udHJvbC5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSkpIHtcbiAgICAgIHdoaWxlICh0aGlzLnByb3BlcnRpZXNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGNoaWxkLnBhdGggKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBjaGVjYm94Q29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgbGFiZWw6IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgc3JPbmx5OiBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2JveENvbnRyb2wuaW5wdXRcblxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVjYm94Q29udHJvbC5jb250cm9sKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnByb3BlcnRpZXNUb2dnbGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BlcnRpZXNUb2dnbGUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBpc1NldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCgpKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IGlzTm90UmVxdWlyZWQgPSAhdGhpcy5pc1JlcXVpcmVkKGtleSlcbiAgICBjb25zdCBzaG91bGRTdGFydERlYWN0aXZhdGVkID0gdGhpcy5qZWRpLm9wdGlvbnMuZGVhY3RpdmF0ZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdkZWFjdGl2YXRlUHJvcGVydGllcycpXG5cbiAgICBpZiAoaXNOb3RSZXF1aXJlZCAmJiBzaG91bGRTdGFydERlYWN0aXZhdGVkKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keSA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuXG4gICAgLy8gYnRuIGdyb3VwXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy50aGVtZS5nZXRBcnJheUJ0bkFkZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIC8vIGRlbGV0ZUFsbFxuICAgIHRoaXMuZGVsZXRlQWxsQnRuID0gdGhpcy50aGVtZS5nZXRBcnJheUJ0bkRlbGV0ZUFsbCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtcydcbiAgICB9KVxuXG4gICAgdGhpcy5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUFsbEJ0bilcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90KVxuXG4gICAgICB3aGlsZSAoY2hpbGQudWkuYXJyYXlBY3Rpb25zU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QucmVtb3ZlQ2hpbGQoY2hpbGQudWkuYXJyYXlBY3Rpb25zU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgIC8vIGRlbGV0ZVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgICAgfSlcblxuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlJylcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICAgIC8vIG1vdmUgdXBcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVVcEJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtdXAnKVxuXG4gICAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGRvd25cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVEb3duQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS1kb3duJylcblxuICAgICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGdldFR5cGUsIGlzU2V0LCBjbG9uZSwgaXNBcnJheSwgbm90U2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLml0ZW1zKCkpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHt9XG5cbiAgICBpZiAobm90U2V0KHNjaGVtYS50eXBlKSkge1xuICAgICAgc2NoZW1hLnR5cGUgPSBpc1NldCh2YWx1ZSkgPyBnZXRUeXBlKHZhbHVlKSA6ICdhbnknXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cbiAgICBsZXQgY29udHJvbFxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICBjb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSA6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRyb2wuaW5wdXRcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnY29sb3InKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IGNvbnRyb2wuaW5wdXRzXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbC5jb250cm9sXG4gICAgdGhpcy5pbnB1dCA9IGNvbnRyb2wuaW5wdXRcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sLmNvbnRyb2xcbiAgICB0aGlzLmlucHV0ID0gY29udHJvbC5pbnB1dFxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBjb250cm9sLmlucHV0c1xuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUocmFkaW8udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbClcbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2wuY29udHJvbFxuICAgIHRoaXMuaW5wdXQgPSBjb250cm9sLmlucHV0XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sKVxuICAgIHRoaXMuY29udHJvbC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gYXBwZW5kc1xuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ2JhcmVib25lcycsXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcbiAgICB0aGlzLnJlZlBhcnNlciA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlcikge1xuICAgICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKHtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHRoaXMub3B0aW9ucy5YTUxIdHRwUmVxdWVzdFxuICAgICAgfSlcblxuICAgICAgdGhpcy5vcHRpb25zLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIGNvbnN0IGhpZGRlbkNvbnRyb2wgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSBoaWRkZW5Db250cm9sLmlucHV0XG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIC8vIGNpcmN1bGFyICRyZWYgYXJlIG5vdCBpbml0aWFsbHkgZGVyZWZlcmVuY2VkIGFuZCBtdXN0IGJlIGRlZmluZWQgb24gY3JlYXRpb25cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlciAmJiBoYXNPd24oY29uZmlnLnNjaGVtYSwgJyRyZWYnKSkge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlZmluZShjb25maWcuc2NoZW1hWyckcmVmJ10pXG4gICAgfVxuXG4gICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEFycmF5SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ251bGwnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVsbEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoY29uZmlnLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLm9uZU9mKCkpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCBub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICBpZiAobm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSAmJiBpc1NldChjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKG9yaWdpbmFsU2NoZW1hKVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoaW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdTIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==