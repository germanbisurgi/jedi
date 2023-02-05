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
      return isArray(this.schema.allOf) ? this.schema.allOf : false;
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
      if (isInteger(this.schema.maxProperties)) {
        return this.schema.maxProperties;
      }

      return undefined;
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
      return utils_isObject(this.schema.patternProperties) ? this.schema.patternProperties : undefined;
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
    value = value.replace(/[\uDCA9]/g, ''); // remove Unicode code points

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

var const_const = function _const(validator, value, schema, key, path) {
  var errors = [];

  if (isSet(schema["const"]())) {
    var valueIsNotEqualConst = different(value, schema["const"]());
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

  if (isSet(schema.anyOf())) {
    var anyOf = schema.anyOf();
    var valid = false;
    anyOf.forEach(function (schema) {
      var anyOfEditor = new src({
        schema: schema,
        startValue: value
      });
      var anyOfErrors = anyOfEditor.validate();

      if (anyOfErrors.length === 0) {
        valid = true;
      }
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

  if (isNumber(value) && isSet(schema.exclusiveMaximum())) {
    var invalid = value >= schema.exclusiveMaximum();

    if (invalid) {
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be less than ' + schema.exclusiveMaximum(),
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
      var field = schema.title() ? schema.title() : key;
      errors.push({
        message: field + ' must be greater than ' + schema.exclusiveMinimum(),
        path: path
      });
    }
  }

  return errors;
};
// CONCATENATED MODULE: ./src/validation/constrains/format.js

var format_format = function _format(validator, value, schema, key, path) {
  var errors = [];

  if (schema.format() && isString(value)) {
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

  if (isSet(schema["if"]())) {
    if (!schema.then() && !schema["else"]()) {
      return errors;
    }

    var ifEditor = new src({
      schema: schema["if"](),
      startValue: value
    });
    var ifErrors = ifEditor.validate();
    var thenErrors = [];
    var elseErrors = [];

    if (schema.then()) {
      var thenEditor = new src({
        schema: schema.then(),
        startValue: value
      });
      thenErrors = thenEditor.validate();
      thenEditor.destroy();
    }

    if (schema["else"]()) {
      var elseEditor = new src({
        schema: schema["else"](),
        startValue: value
      });
      elseErrors = elseEditor.validate();
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
    value = value.replace(/[\uDCA9]/g, ''); // remove Unicode code points

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

  if (utils_isObject(value) && isSet(schema.maxProperties())) {
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
    var invalid = !isMultipleOf || value.toString().includes('e');

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

  if (isSet(schema.oneOf())) {
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

  if (utils_isObject(value) && isSet(schema.patternProperties())) {
    var patternProperties = schema.patternProperties();
    Object.keys(value).forEach(function (propertyName) {
      Object.keys(patternProperties).forEach(function (pattern) {
        var regexp = new RegExp(pattern);

        if (regexp.test(propertyName)) {
          var _schema = patternProperties[pattern];

          if (utils_isObject(_schema)) {
            _schema.title = propertyName;
          }

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

      if (isSet(this.schema["default"]())) {
        if (this.schema["enum"]() && !this.schema["enum"]().includes(this.schema["default"]())) {
          return;
        } // const defaultErrors = this.jedi.validator.validate(this.schema.default(), this.schema, this.getKey(), this.path)
        //
        // if (defaultErrors.length === 0) {
        //   value = this.schema.default()
        // }


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

      if (isSet(this.schema.anyOf()) || isSet(this.schema.oneOf())) {
        var schemasOf = isSet(this.schema.anyOf()) ? this.schema.anyOf() : this.schema.oneOf();
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

      if (different(this.activeInstance.getValue(), value)) {
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
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot); // description

      if (this.instance.schema.description()) {
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

      if (isSet(config.schema.anyOf()) || isSet(config.schema.oneOf()) || config.schema.typeIs('any') || isArray(config.schema.type()) || !config.schema.type()) {
        if (!config.schema.type() && isSet(config.schema["default"]())) {
          var originalSchema = config.schema.clone();
          originalSchema.type = getType(config.schema["default"]());
          config.schema = new src_schema(originalSchema);
          return this.createInstance(config);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwicHJldHR5IiwidmFsdWUiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsIk1hdGgiLCJyb3VuZCIsInNvcnRPYmplY3QiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImtleSIsImVxdWFsIiwiYSIsImIiLCJpc09iamVjdCIsImRpZmZlcmVudCIsImlzTnVsbCIsImlzU2V0Iiwibm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiZ2V0VHlwZSIsInR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJzb3VyY2VzIiwibGVuZ3RoIiwic291cmNlIiwic2hpZnQiLCJmb3JFYWNoIiwiYXNzaWduIiwiU2NoZW1hIiwic2NoZW1hIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsImFueU9mIiwidW5kZWZpbmVkIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIl9hbGxPZiIsInZhbGlkYXRvciIsInBhdGgiLCJlcnJvcnMiLCJhbGxPZkVycm9ycyIsInZhbGlkYXRlIiwiX21pbkxlbmd0aCIsInJlcGxhY2UiLCJpbnZhbGlkIiwiZmllbGQiLCJwdXNoIiwibWVzc2FnZSIsIl9jb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiX2FueU9mIiwidmFsaWQiLCJhbnlPZkVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwiYW55T2ZFcnJvcnMiLCJfZGVwZW5kZW50UmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImZpbHRlciIsInByb3BlcnR5IiwiaGFzT3duIiwiam9pbiIsIl9lbnVtIiwic29tZSIsImUiLCJfZXhjbHVzaXZlTWF4aW11bSIsIl9leGNsdXNpdmVNaW5pbXVtIiwiX2Zvcm1hdCIsImZvcm1hdElzIiwicmVnZXhwIiwiUmVnRXhwIiwidGVzdCIsIl9pZiIsImlmRWRpdG9yIiwiaWZFcnJvcnMiLCJ0aGVuRXJyb3JzIiwiZWxzZUVycm9ycyIsInRoZW5FZGl0b3IiLCJkZXN0cm95IiwiZWxzZUVkaXRvciIsIl9tYXhJdGVtcyIsIl9tYXhMZW5ndGgiLCJfbWF4UHJvcGVydGllcyIsInByb3BlcnRpZXNDb3VudCIsIl9taW5pbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiX21pbkl0ZW1zIiwiX21pblByb3BlcnRpZXMiLCJfbXVsdGlwbGVPZiIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJfbm90Iiwibm90RXJyb3JzIiwiX29uZU9mIiwiY291bnRlciIsIm9uZU9mRXJyb3JzIiwiX3BhdHRlcm4iLCJfcGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3IiLCJfcmVxdWlyZWQiLCJfdHlwZSIsInR5cGVzIiwic3RyaW5nIiwiaW50ZWdlciIsImFycmF5Iiwib2JqZWN0IiwiX21heGltdW0iLCJjb21wdXRlZE1heGltdW0iLCJfdW5pcXVlSXRlbXMiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsIml0ZW0iLCJfYWRkaXRpb25hbFByb3BlcnRpZXMiLCJyb290TmFtZSIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsImVycm9yIiwiVmFsaWRhdG9yIiwiZHJhZnQiLCJzY2hlbWFFcnJvcnMiLCJ2YWxpZGF0b3JFcnJvcnMiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiZGVmcyIsInRyYXZlcnNlIiwicmVmIiwic3RhcnRzV2l0aCIsInJlZlBhcnRzIiwic3BsaXQiLCJkZWZOYW1lIiwicG9wIiwiaW5kZXgiLCJkZWZpbmUiLCJFdmVudEVtaXR0ZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJsaXN0ZW5lciIsIkluc3RhbmNlIiwiY29uZmlnIiwiamVkaSIsImlzQWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJyZWdpc3RlciIsInNldERlZmF1bHRWYWx1ZSIsInByZXBhcmUiLCJpc0VkaXRvciIsInNldFVJIiwib24iLCJvbkNoaWxkQ2hhbmdlIiwidW5yZWdpc3RlciIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJlbWl0IiwiZ2V0VmFsdWUiLCJnZXRLZXkiLCJjaGlsZCIsIlRoZW1lQmFyZWJvbmVzIiwiYWxlcnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImludmFsaWRGZWVkYmFjayIsImFjdGl2YXRvcnNTbG90IiwiYWN0aW9uc1Nsb3RzIiwiY2hpbGRyZW5TbG90IiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiY29udGFpbmVyIiwibWVzc2FnZXNTbG90IiwiY29udHJvbFNsb3QiLCJjaGVja2JveExhYmVsIiwic3JPbmx5IiwicmFkaW9MZWdlbmQiLCJyYWRpb0xhYmVsIiwibGFiZWwiLCJsZWdlbmQiLCJpbnB1dCIsImlkIiwiY2hlY2tib3giLCJyYWRpbyIsInRleHRhcmVhIiwic2VsZWN0Iiwib3B0aW9uVmFsdWVzIiwib3B0aW9uc0xhYmVscyIsImFwcGVuZENoaWxkIiwiVGhlbWVXaXJlZnJhbWUiLCJidG5Hcm91cCIsImZpZWxkc2V0IiwicmFkaW9Db250YWluZXIiLCJUaGVtZUJvb3RzdHJhcDQiLCJjaGVja2JveENvbnRhaW5lciIsIlRoZW1lQm9vdHN0cmFwNSIsIkVkaXRvciIsImluc3RhbmNlIiwidGhlbWUiLCJhY3Rpb25zU2xvdCIsImRpc2FibGVkIiwiYnVpbGQiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwicmVmcmVzaFVJIiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwiZ2V0Q29udGFpbmVyIiwiZ2V0QWN0aXZhdG9yc1Nsb3QiLCJnZXRDb250cm9sU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsImdldEFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwiaW5uZXJIVE1MIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiTXVsdGlwbGVFZGl0b3IiLCJzd2l0Y2hlckJ1dHRvbnMiLCJzd2l0Y2hlciIsImdldEJ0bkdyb3VwIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJnZXRCdXR0b24iLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiTnVtYmVyIiwic3dpdGNoSW5zdGFuY2UiLCJvbGRJbnN0YW5jZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsImFjdGl2ZUluc3RhbmNlIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJyZW1vdmUiLCJNdWx0aXBsZUluc3RhbmNlIiwic2NoZW1hcyIsIm9uU2V0VmFsdWUiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwic2NoZW1hQ2xvbmUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwiY3JlYXRlSW5zdGFuY2UiLCJuZXdJbmRleCIsInNldFZhbHVlIiwibWF0Y2hJbnN0YW5jZSIsIkJvb2xlYW5FZGl0b3IiLCJnZXRDaGVja2JveENvbnRhaW5lciIsImdldENoZWNrYm94TGFiZWwiLCJnZXRDaGVja2JveCIsImNoZWNrZWQiLCJnZXREZXNjcmlwdGlvbiIsIkJvb2xlYW4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwicmFkaW9JbnB1dHMiLCJnZXRSYWRpb0xlZ2VuZCIsImdldFJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW8iLCJyYWRpb1ZhbHVlIiwiZ2V0TGFiZWwiLCJCb29sZWFuRW51bVNlbGVjdEVkaXRvciIsImdldFNlbGVjdCIsIkJvb2xlYW5JbnN0YW5jZSIsIk9iamVjdEVkaXRvciIsImdldEZpZWxkc2V0IiwiZ2V0TGVnZW5kIiwiYWRkUHJvcGVydHlJbnB1dCIsImdldElucHV0IiwiYWRkUHJvcGVydHlCdG4iLCJjcmVhdGVDaGlsZCIsImVkaXRhYmxlUHJvcGVydGllcyIsImdldEFsZXJ0IiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImFjdGl2YXRvcklkIiwiYWN0aXZhdG9yQ29udGFpbmVyIiwiYWN0aXZhdG9yTGFiZWwiLCJhY3RpdmF0b3JJbnB1dCIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwicmVmcmVzaEFjdGl2YXRvcnMiLCJyZWZyZXNoRWRpdG9ycyIsIk9iamVjdEluc3RhbmNlIiwicmVmcmVzaEluc3RhbmNlcyIsInNwbGljZSIsImZpbmQiLCJoYXNQcm9wZXJ0eSIsImRlbGV0ZUNoaWxkIiwiZ2V0Q2hpbGQiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIkFycmF5RWRpdG9yIiwiYWRkQnRuIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJpdGVtSW5kZXgiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsIkFycmF5SW5zdGFuY2UiLCJyZWZyZXNoQ2hpbGRyZW4iLCJmcm9tSW5kZXgiLCJ0ZW1wRWRpdG9yIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiY3VycmVudFZhbHVlIiwiaXRlbVZhbHVlIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhIiwiU3RyaW5nIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0luc3RhbmNlIiwiTnVtYmVyRWRpdG9yIiwic2FuaXRpemUiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVySW5zdGFuY2UiLCJ0eXBlSXNOdW1lcmljIiwiTnVsbEVkaXRvciIsIk51bGxJbnN0YW5jZSIsInNob3dSZXF1aXJlZE9ubHkiLCJyb290IiwicmVmUGFyc2VyIiwiZGVyZWZlcmVuY2UiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbklucHV0Iiwib3JpZ2luYWxTY2hlbWEiLCJhcmd1bWVudHMiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsK0c7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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S25MLE9BQUwsQ0FBYW1MLEtBQWIsR0FBcUJBLEtBQXJCO01BQ0EsS0FBS2lKLEtBQUw7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG1CQUFXO01BQUE7O01BQ1QsS0FBS1AsSUFBTCxDQUFVdlEsT0FBVjs7TUFFQSxJQUFJLEtBQUt0RCxPQUFMLENBQWFnSSxRQUFqQixFQUEyQjtRQUN6QixLQUFLd0IsU0FBTCxDQUFleUMsU0FBZixHQUEyQixFQUEzQjtNQUNEOztNQUVEdlAsTUFBTSxDQUFDQyxJQUFQLENBQVksSUFBWixFQUFrQjRCLE9BQWxCLENBQTBCLFVBQUN4QixHQUFELEVBQVM7UUFDakMsT0FBTyxNQUFJLENBQUNBLEdBQUQsQ0FBWDtNQUNELENBRkQ7SUFHRDs7OztFQWxOZ0JpSyxhOztBQXFOSnBGLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbn1cblxuZXhwb3J0IGNvbnN0IHJvdW5kMmRlY2ltYWxzID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0T2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWRkaXRpb25hbFByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdHJ1ZVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogZmFsc2VcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdFxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogZmFsc2VcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiBmYWxzZVxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpID8gdGhpcy5zY2hlbWEuZWxzZSA6IGZhbHNlXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy5mb3JtYXQoKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICBpZiAoaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IGZhbHNlXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpID8gdGhpcy5zY2hlbWEubm90IDogZmFsc2VcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0eSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogZmFsc2VcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiBmYWxzZVxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IGZhbHNlXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMudHlwZSgpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVJc051bWVyaWMgKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVJcygnbnVtYmVyJykgfHwgdGhpcy50eXBlSXMoJ2ludGVnZXInKVxuICB9XG5cbiAgb25lT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLm9uZU9mKSA/IHRoaXMuc2NoZW1hLm9uZU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICB1bmlxdWVJdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS51bmlxdWVJdGVtcykgPyB0aGlzLnNjaGVtYS51bmlxdWVJdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWFcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX2FsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYWxsT2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWxsT2ZFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWluTGVuZ3RoKCkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB2YWx1ZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFueU9mKCkpKSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2YoKVxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBtdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9kZXBlbmRlbnRSZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFPYmplY3QuaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImV4cG9ydCBjb25zdCBfZW51bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoc2NoZW1hLmVudW0oKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZXhjbHVzaXZlTWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8PSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2Zvcm1hdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEuZm9ybWF0KCkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IGludmFsaWQgPSBmYWxzZVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vaW5kZXgnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuaWYoKSkpIHtcbiAgICBpZiAoIXNjaGVtYS50aGVuKCkgJiYgIXNjaGVtYS5lbHNlKCkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLnRoZW4oKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmVsc2UoKSkge1xuICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgZWxzZUVycm9ycyA9IGVsc2VFZGl0b3IudmFsaWRhdGUoKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS5tYXhJdGVtcygpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5tYXhMZW5ndGgoKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4UHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5taW5pbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5JdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWluSXRlbXMoKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbXVsdGlwbGVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm11bHRpcGxlT2YoKSkge1xuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YgfHwgdmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX25vdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEubm90KCkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEubm90KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9vbmVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEub25lT2YoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm4oKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgaWYgKGlzT2JqZWN0KHNjaGVtYSkpIHtcbiAgICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHByb3BlcnR5TmFtZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9yZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnJlcXVpcmVkKCkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF90eXBlID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoc2NoZW1hLnR5cGUoKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWF4aW11bSgpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF91bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEudW5pcXVlSXRlbXMoKSkpIHtcbiAgICBjb25zdCBzZWVuID0ge31cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBfYWRkaXRpb25hbFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gc2NoZW1hLnByb3BlcnRpZXMoKSB8fCB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhT2JqZWN0Lmhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgUHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIGRvZXMgbm90IGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllcy5gLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFPYmplY3QuaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IF9hbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBfbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgX2FueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IF9kZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IF9leGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBfZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgX21heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IF9tYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IF9tYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX21pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBfbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgX21pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IF9ub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IF9vbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBfcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IF9wYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBfcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgX3R5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBfbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IF91bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBfYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIF9hZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgX2FsbE9mLFxuICBfYW55T2YsXG4gIF9jb25zdCxcbiAgX2RlcGVuZGVudFJlcXVpcmVkLFxuICBfZW51bSxcbiAgX2V4Y2x1c2l2ZU1heGltdW0sXG4gIF9leGNsdXNpdmVNaW5pbXVtLFxuICBfZm9ybWF0LFxuICBfaWYsXG4gIF9tYXhpbXVtLFxuICBfbWF4SXRlbXMsXG4gIF9tYXhMZW5ndGgsXG4gIF9tYXhQcm9wZXJ0aWVzLFxuICBfbWluaW11bSxcbiAgX21pbkl0ZW1zLFxuICBfbWluTGVuZ3RoLFxuICBfbWluUHJvcGVydGllcyxcbiAgX211bHRpcGxlT2YsXG4gIF9ub3QsXG4gIF9vbmVPZixcbiAgX3BhdHRlcm4sXG4gIF9wYXR0ZXJuUHJvcGVydGllcyxcbiAgX3JlcXVpcmVkLFxuICBfdHlwZSxcbiAgX3VuaXF1ZUl0ZW1zXG5dXG4iLCJpbXBvcnQgZHJhZnQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMidcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdFxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIHRoaXMuZHJhZnQuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pdGVyYXRpb25zID0gNVxuICAgIHRoaXMuZGVmcyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgdGhpcy5kZWZzID0gc2NoZW1hWyckZGVmcyddXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZGVmcylcbiAgICAgIHRoaXMudHJhdmVyc2Uoc2NoZW1hKVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjLyRkZWZzJykpIHtcbiAgICAgIGNvbnN0IHJlZlBhcnRzID0gcmVmLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGRlZk5hbWUgPSByZWZQYXJ0cy5wb3AoKVxuXG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZzW2RlZk5hbWVdKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZzW2RlZk5hbWVdXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgdHJhdmVyc2UgKHZhbHVlLCB0aGluZywgaW5kZXgpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVbJyRyZWYnXSkgJiYgaXNTZXQodGhpbmcpKSB7XG4gICAgICAgIHRoaW5nW2luZGV4XSA9IHRoaXMuZGVmaW5lKHZhbHVlWyckcmVmJ10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRyYXZlcnNlKHZhbHVlW2luZGV4XSwgdmFsdWUsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShpdGVtLCB2YWx1ZSwgaW5kZXgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZQYXJzZXJcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5vcHRpb25zLnJvb3ROYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J1Mgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgLy9cbiAgICAgIC8vIGlmIChkZWZhdWx0RXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQoKVxuICAgICAgLy8gfVxuXG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGFsZXJ0LnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gYWxlcnRcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBpbnZhbGlkRmVlZGJhY2sudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEFjdGl2YXRvcnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3RpdmF0b3JzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aXZhdG9yc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBhY3RpdmF0b3JzU2xvdFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGFjdGlvbnNTbG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aW9uc1Nsb3RzLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gYWN0aW9uc1Nsb3RzXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hpbGRyZW5TbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gY2hpbGRyZW5TbG90XG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVzc2FnZXNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIG1lc3NhZ2VzU2xvdFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGNoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICByYWRpb0xlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHJhZGlvTGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiByYWRpb0xlZ2VuZFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICByYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1pbmZvJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHN1cGVyLmdldEZpZWxkc2V0KClcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IHN1cGVyLmdldENoZWNrYm94TGFiZWwoY29uZmlnKVxuICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlubGluZScpXG4gICAgcmV0dXJuIHJhZGlvQ29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gc3VwZXIuZ2V0UmFkaW9MYWJlbChjb25maWcpXG4gICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gc3VwZXIuZ2V0UmFkaW8oY29uZmlnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gc3VwZXIuZ2V0VGV4dGFyZWEoY29uZmlnKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IHN1cGVyLmdldFNlbGVjdChjb25maWcpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gYWxlcnRcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gc3VwZXIuZ2V0RmllbGRzZXQoKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncHktMCcpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gc3VwZXIuZ2V0Q2hlY2tib3hMYWJlbChjb25maWcpXG4gICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHN1cGVyLmdldENoZWNrYm94Q29udGFpbmVyKClcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gcmFkaW9Db250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcblxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdteS0zJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuLWZvY3VzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gc3VwZXIuZ2V0TGFiZWwoY29uZmlnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKVxuICAgIHJldHVybiBsYWJlbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lV2lyZWZyYW1lIGZyb20gJy4uL3RoZW1lcy93aXJlZnJhbWUnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmFjdGl2YXRvcnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY29udHJvbFNsb3QgPSBudWxsXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IG51bGxcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnd2lyZWZyYW1lJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5hY3RpdmF0b3JzU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aXZhdG9yc1Nsb3QoKVxuICAgIHRoaXMuY29udHJvbFNsb3QgPSB0aGlzLnRoZW1lLmdldENvbnRyb2xTbG90KClcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSB0aGlzLnRoZW1lLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udGFpbmVyKVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCwgZXF1YWwsIG1lcmdlRGVlcCwgaXNBcnJheSwgZGlmZmVyZW50IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcblxuY2xhc3MgTXVsdGlwbGVJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTXVsdGlwbGVFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQodGhpcy5zY2hlbWEub25lT2YoKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKHNjaGVtYS5hbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2VzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgfVxuXG4gIG1hdGNoSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVxdWFsKGluc3RhbmNlLmdldFZhbHVlKCksIHZhbHVlKSkge1xuICAgICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICB0aGlzLm1hdGNoSW5zdGFuY2UodmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIHRoaXMubGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgZXF1YWwsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3RpdmF0b3JzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZVxuXG4gICAgICAvLyBpZiBub3QgcHJvcGVydHkgbmFtZSB3YXMgZ2l2ZW4gcmV0dXJuXG4gICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gaWYgcHJvcGVydHkgZXhpc3QgcmV0dXJuXG4gICAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZCh7IHR5cGU6ICdhbnknIH0sIGtleSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5SW5wdXQpXG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hBY3RpdmF0b3JzICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuYWN0aXZhdG9yc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRvcnNTbG90LnJlbW92ZUNoaWxkKHRoaXMuYWN0aXZhdG9yc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2YXRvcklkID0gY2hpbGQucGF0aCArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgICAgICBmb3I6IGFjdGl2YXRvcklkLFxuICAgICAgICAgIHRleHRDb250ZW50OiBjaGlsZC5zY2hlbWEudGl0bGUoKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JJbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgICAgIGlkOiBhY3RpdmF0b3JJZFxuICAgICAgICB9KVxuXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmNoZWNrZWQgPSBPYmplY3QuaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgYWN0aXZhdG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmF0b3JJbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoYWN0aXZhdG9yQ29udGFpbmVyKVxuICAgICAgICBhY3RpdmF0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZhdG9ySW5wdXQpXG4gICAgICAgIGFjdGl2YXRvckNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3RpdmF0b3JMYWJlbClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hBY3RpdmF0b3JzKClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0eShrZXkpXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucmVxdWlyZWQoKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGRlcGVuZGVudFJlcXVpcmVkKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBoYXNQcm9wZXJ0eSAocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVxuXG4gICAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocHJvcGVydGllcykuaW5jbHVkZXMocHJvcGVydHlOYW1lKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1Byb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIC8vIGRlbGV0ZUFsbFxuICAgIHRoaXMuZGVsZXRlQWxsQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgY2hpbGQudWkuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuYWN0aW9uc1Nsb3QpXG5cbiAgICAgIHdoaWxlIChjaGlsZC51aS5hY3Rpb25zU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNoaWxkLnVpLmFjdGlvbnNTbG90LnJlbW92ZUNoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgLy8gZGVsZXRlXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgICB9KVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICAgIC8vIG1vdmUgdXBcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGRvd25cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIH1cblxuICAgICAgY2hpbGQudWkuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGdldFR5cGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnd2lyZWZyYW1lJyxcbiAgICAgIHJvb3ROYW1lOiAncm9vdCdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcigpXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5zY2hlbWEuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZVxuXG4gICAgaWYgKGlzU2V0KGNvbmZpZy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5vbmVPZigpKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgaXNBcnJheShjb25maWcuc2NoZW1hLnR5cGUoKSkgfHwgIWNvbmZpZy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBpZiAoIWNvbmZpZy5zY2hlbWEudHlwZSgpICYmIGlzU2V0KGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IGNvbmZpZy5zY2hlbWEuY2xvbmUoKVxuICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShjb25maWcuc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEFycmF5SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ251bGwnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVsbEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoaW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuICAgIHRoaXMucm9vdC5kZXN0cm95KClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc2V0VGhlbWUgKHRoZW1lKSB7XG4gICAgdGhpcy5vcHRpb25zLnRoZW1lID0gdGhlbWVcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdTIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==