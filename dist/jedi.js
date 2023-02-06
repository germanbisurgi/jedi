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
        }

        var defaultErrors = this.jedi.validator.validate(this.schema["default"](), this.schema, this.getKey(), this.path);

        if (defaultErrors.length === 0) {
          value = this.schema["default"]();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwicHJldHR5IiwidmFsdWUiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsIk1hdGgiLCJyb3VuZCIsInNvcnRPYmplY3QiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImtleSIsImVxdWFsIiwiYSIsImIiLCJpc09iamVjdCIsImRpZmZlcmVudCIsImlzTnVsbCIsImlzU2V0Iiwibm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiZ2V0VHlwZSIsInR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJzb3VyY2VzIiwibGVuZ3RoIiwic291cmNlIiwic2hpZnQiLCJmb3JFYWNoIiwiYXNzaWduIiwiU2NoZW1hIiwic2NoZW1hIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsImFueU9mIiwidW5kZWZpbmVkIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIl9hbGxPZiIsInZhbGlkYXRvciIsInBhdGgiLCJlcnJvcnMiLCJhbGxPZkVycm9ycyIsInZhbGlkYXRlIiwiX21pbkxlbmd0aCIsInJlcGxhY2UiLCJpbnZhbGlkIiwiZmllbGQiLCJwdXNoIiwibWVzc2FnZSIsIl9jb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiX2FueU9mIiwidmFsaWQiLCJhbnlPZkVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwiYW55T2ZFcnJvcnMiLCJfZGVwZW5kZW50UmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImZpbHRlciIsInByb3BlcnR5IiwiaGFzT3duIiwiam9pbiIsIl9lbnVtIiwic29tZSIsImUiLCJfZXhjbHVzaXZlTWF4aW11bSIsIl9leGNsdXNpdmVNaW5pbXVtIiwiX2Zvcm1hdCIsImZvcm1hdElzIiwicmVnZXhwIiwiUmVnRXhwIiwidGVzdCIsIl9pZiIsImlmRWRpdG9yIiwiaWZFcnJvcnMiLCJ0aGVuRXJyb3JzIiwiZWxzZUVycm9ycyIsInRoZW5FZGl0b3IiLCJkZXN0cm95IiwiZWxzZUVkaXRvciIsIl9tYXhJdGVtcyIsIl9tYXhMZW5ndGgiLCJfbWF4UHJvcGVydGllcyIsInByb3BlcnRpZXNDb3VudCIsIl9taW5pbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiX21pbkl0ZW1zIiwiX21pblByb3BlcnRpZXMiLCJfbXVsdGlwbGVPZiIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJfbm90Iiwibm90RXJyb3JzIiwiX29uZU9mIiwiY291bnRlciIsIm9uZU9mRXJyb3JzIiwiX3BhdHRlcm4iLCJfcGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3IiLCJfcmVxdWlyZWQiLCJfdHlwZSIsInR5cGVzIiwic3RyaW5nIiwiaW50ZWdlciIsImFycmF5Iiwib2JqZWN0IiwiX21heGltdW0iLCJjb21wdXRlZE1heGltdW0iLCJfdW5pcXVlSXRlbXMiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsIml0ZW0iLCJfYWRkaXRpb25hbFByb3BlcnRpZXMiLCJyb290TmFtZSIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsImVycm9yIiwiVmFsaWRhdG9yIiwiZHJhZnQiLCJzY2hlbWFFcnJvcnMiLCJ2YWxpZGF0b3JFcnJvcnMiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiZGVmcyIsInRyYXZlcnNlIiwicmVmIiwic3RhcnRzV2l0aCIsInJlZlBhcnRzIiwic3BsaXQiLCJkZWZOYW1lIiwicG9wIiwiaW5kZXgiLCJkZWZpbmUiLCJFdmVudEVtaXR0ZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJsaXN0ZW5lciIsIkluc3RhbmNlIiwiY29uZmlnIiwiamVkaSIsImlzQWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJyZWdpc3RlciIsInNldERlZmF1bHRWYWx1ZSIsInByZXBhcmUiLCJpc0VkaXRvciIsInNldFVJIiwib24iLCJvbkNoaWxkQ2hhbmdlIiwidW5yZWdpc3RlciIsImRlZmF1bHRFcnJvcnMiLCJnZXRLZXkiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwiZW1pdCIsImdldFZhbHVlIiwiY2hpbGQiLCJUaGVtZUJhcmVib25lcyIsImFsZXJ0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJpbnZhbGlkRmVlZGJhY2siLCJhY3RpdmF0b3JzU2xvdCIsImFjdGlvbnNTbG90cyIsImNoaWxkcmVuU2xvdCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2VzU2xvdCIsImNvbnRyb2xTbG90IiwiY2hlY2tib3hMYWJlbCIsInNyT25seSIsInJhZGlvTGVnZW5kIiwicmFkaW9MYWJlbCIsImxhYmVsIiwibGVnZW5kIiwiaW5wdXQiLCJpZCIsImNoZWNrYm94IiwicmFkaW8iLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvblZhbHVlcyIsIm9wdGlvbnNMYWJlbHMiLCJhcHBlbmRDaGlsZCIsIlRoZW1lV2lyZWZyYW1lIiwiYnRuR3JvdXAiLCJmaWVsZHNldCIsInJhZGlvQ29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA0IiwiY2hlY2tib3hDb250YWluZXIiLCJUaGVtZUJvb3RzdHJhcDUiLCJFZGl0b3IiLCJpbnN0YW5jZSIsInRoZW1lIiwiYWN0aW9uc1Nsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsImdldENvbnRhaW5lciIsImdldEFjdGl2YXRvcnNTbG90IiwiZ2V0Q29udHJvbFNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldENoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsImdldEludmFsaWRGZWVkYmFjayIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk11bHRpcGxlRWRpdG9yIiwic3dpdGNoZXJCdXR0b25zIiwic3dpdGNoZXIiLCJnZXRCdG5Hcm91cCIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwiZ2V0QnV0dG9uIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk51bWJlciIsInN3aXRjaEluc3RhbmNlIiwib2xkSW5zdGFuY2UiLCJpbnN0YW5jZXMiLCJsYXN0SW5kZXgiLCJhY3RpdmVJbnN0YW5jZSIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzYWJsZSIsImVuYWJsZSIsImdldEJ1dHRvbkFjdGl2ZUNsYXNzIiwicmVtb3ZlIiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImNyZWF0ZUluc3RhbmNlIiwibmV3SW5kZXgiLCJzZXRWYWx1ZSIsIm1hdGNoSW5zdGFuY2UiLCJCb29sZWFuRWRpdG9yIiwiZ2V0Q2hlY2tib3hDb250YWluZXIiLCJnZXRDaGVja2JveExhYmVsIiwiZ2V0Q2hlY2tib3giLCJjaGVja2VkIiwiZ2V0RGVzY3JpcHRpb24iLCJCb29sZWFuIiwicmVtb3ZlQXR0cmlidXRlIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsInJhZGlvSW5wdXRzIiwiZ2V0UmFkaW9MZWdlbmQiLCJnZXRSYWRpb0NvbnRhaW5lciIsImdldFJhZGlvIiwicmFkaW9WYWx1ZSIsImdldExhYmVsIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3QiLCJCb29sZWFuSW5zdGFuY2UiLCJPYmplY3RFZGl0b3IiLCJnZXRGaWVsZHNldCIsImdldExlZ2VuZCIsImFkZFByb3BlcnR5SW5wdXQiLCJnZXRJbnB1dCIsImFkZFByb3BlcnR5QnRuIiwiY3JlYXRlQ2hpbGQiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJnZXRBbGVydCIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJhY3RpdmF0b3JJZCIsImFjdGl2YXRvckNvbnRhaW5lciIsImFjdGl2YXRvckxhYmVsIiwiYWN0aXZhdG9ySW5wdXQiLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsInJlZnJlc2hBY3RpdmF0b3JzIiwicmVmcmVzaEVkaXRvcnMiLCJPYmplY3RJbnN0YW5jZSIsInJlZnJlc2hJbnN0YW5jZXMiLCJzcGxpY2UiLCJmaW5kIiwiaGFzUHJvcGVydHkiLCJkZWxldGVDaGlsZCIsImdldENoaWxkIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJBcnJheUVkaXRvciIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwiaXRlbUluZGV4IiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJBcnJheUluc3RhbmNlIiwicmVmcmVzaENoaWxkcmVuIiwiZnJvbUluZGV4IiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsImN1cnJlbnRWYWx1ZSIsIml0ZW1WYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJnZXRUZXh0YXJlYSIsIlN0cmluZyIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJTdHJpbmdJbnN0YW5jZSIsIk51bWJlckVkaXRvciIsInNhbml0aXplIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckluc3RhbmNlIiwidHlwZUlzTnVtZXJpYyIsIk51bGxFZGl0b3IiLCJOdWxsSW5zdGFuY2UiLCJzaG93UmVxdWlyZWRPbmx5Iiwicm9vdCIsInJlZlBhcnNlciIsImRlcmVmZXJlbmNlIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJoaWRkZW5JbnB1dCIsIm9yaWdpbmFsU2NoZW1hIiwiYXJndW1lbnRzIiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLCtHOzs7Ozs7QUNQQTtBQUNBO0FB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QUFQLEVBQWxCLEVBQU47TUFDRCxDQUhEO01BS0EsT0FBT0YsTUFBUDtJQUNEOzs7V0FFRCxpQkFBUztNQUNQLEtBQUtkLE9BQUwsQ0FBYTZCLFVBQWIsR0FBMEIsS0FBSzZHLFFBQUwsRUFBMUI7O01BQ0EsSUFBSSxLQUFLMUksT0FBTCxDQUFhZ0ksUUFBakIsRUFBMkI7UUFDekIsS0FBS3lCLFNBQUwsQ0FBZXlDLFNBQWYsR0FBMkIsRUFBM0I7TUFDRDs7TUFDRCxLQUFLNEgsSUFBTCxDQUFVeFEsT0FBVjtNQUNBLEtBQUtzRSxJQUFMO0lBQ0Q7OztXQUVELGtCQUFVd0QsS0FBVixFQUFpQjtNQUNmLEtBQUtwTCxPQUFMLENBQWFvTCxLQUFiLEdBQXFCQSxLQUFyQjtNQUNBLEtBQUtpSixLQUFMO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxtQkFBVztNQUFBOztNQUNULEtBQUtQLElBQUwsQ0FBVXhRLE9BQVY7O01BRUEsSUFBSSxLQUFLdEQsT0FBTCxDQUFhZ0ksUUFBakIsRUFBMkI7UUFDekIsS0FBS3lCLFNBQUwsQ0FBZXlDLFNBQWYsR0FBMkIsRUFBM0I7TUFDRDs7TUFFRHhQLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLElBQVosRUFBa0I0QixPQUFsQixDQUEwQixVQUFDeEIsR0FBRCxFQUFTO1FBQ2pDLE9BQU8sTUFBSSxDQUFDQSxHQUFELENBQVg7TUFDRCxDQUZEO0lBR0Q7Ozs7RUFsTmdCaUssYTs7QUFxTkpwRixpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuIiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcblxuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhZGRpdGlvbmFsUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB0cnVlXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiBmYWxzZVxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiBmYWxzZVxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IGZhbHNlXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogZmFsc2VcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm1hdCgpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIGlmIChpc09iamVjdCh0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4odGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgPyB0aGlzLnNjaGVtYS5ub3QgOiBmYWxzZVxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHByb3BlcnR5IChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucHJvcGVydGllcyA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiBmYWxzZVxuICB9XG5cbiAgdGhlbiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pID8gdGhpcy5zY2hlbWEudGhlbiA6IGZhbHNlXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogZmFsc2VcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcblxuZXhwb3J0IGNvbnN0IF9hbGxPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmFsbE9mKCkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFsbE9mRXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFsbE9mRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbkxlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1pbkxlbmd0aCgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5jb25zdCgpKSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWEuY29uc3QoKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdmFsdWU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vaW5kZXgnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2FueU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbnlPZigpKSkge1xuICAgIGNvbnN0IGFueU9mID0gc2NoZW1hLmFueU9mKClcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhT2JqZWN0Lmhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJleHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKHNjaGVtYS5lbnVtKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYS5lbnVtKCkuc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmVudW0oKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+PSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9mb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmZvcm1hdCgpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2VcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgIH1cblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9pZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmlmKCkpKSB7XG4gICAgaWYgKCFzY2hlbWEudGhlbigpICYmICFzY2hlbWEuZWxzZSgpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS50aGVuKCkpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIHRoZW5FcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5lbHNlKCkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWF4SXRlbXMoKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWF4TGVuZ3RoKCkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWluaW11bSgpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1pbkl0ZW1zKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWluUHJvcGVydGllcygpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX211bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5tdWx0aXBsZU9mKCkpIHtcbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcblxuZXhwb3J0IGNvbnN0IF9ub3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLm5vdCgpKSB7XG4gICAgY29uc3Qgbm90RXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm4gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuKCkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGlmIChpc09iamVjdChzY2hlbWEpKSB7XG4gICAgICAgICAgICBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5yZXF1aXJlZCgpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3R5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheShzY2hlbWEudHlwZSgpKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWEudHlwZSgpKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWF4aW11bSgpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF91bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEudW5pcXVlSXRlbXMoKSkpIHtcbiAgICBjb25zdCBzZWVuID0ge31cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBfYWRkaXRpb25hbFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gc2NoZW1hLnByb3BlcnRpZXMoKSB8fCB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhT2JqZWN0Lmhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgUHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIGRvZXMgbm90IGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllcy5gLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFPYmplY3QuaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IF9hbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBfbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgX2FueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IF9kZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IF9leGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBfZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgX21heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IF9tYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IF9tYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX21pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBfbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgX21pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IF9ub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IF9vbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBfcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IF9wYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBfcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgX3R5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBfbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IF91bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBfYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIF9hZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgX2FsbE9mLFxuICBfYW55T2YsXG4gIF9jb25zdCxcbiAgX2RlcGVuZGVudFJlcXVpcmVkLFxuICBfZW51bSxcbiAgX2V4Y2x1c2l2ZU1heGltdW0sXG4gIF9leGNsdXNpdmVNaW5pbXVtLFxuICBfZm9ybWF0LFxuICBfaWYsXG4gIF9tYXhpbXVtLFxuICBfbWF4SXRlbXMsXG4gIF9tYXhMZW5ndGgsXG4gIF9tYXhQcm9wZXJ0aWVzLFxuICBfbWluaW11bSxcbiAgX21pbkl0ZW1zLFxuICBfbWluTGVuZ3RoLFxuICBfbWluUHJvcGVydGllcyxcbiAgX211bHRpcGxlT2YsXG4gIF9ub3QsXG4gIF9vbmVPZixcbiAgX3BhdHRlcm4sXG4gIF9wYXR0ZXJuUHJvcGVydGllcyxcbiAgX3JlcXVpcmVkLFxuICBfdHlwZSxcbiAgX3VuaXF1ZUl0ZW1zXG5dXG4iLCJpbXBvcnQgZHJhZnQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMidcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdFxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIHRoaXMuZHJhZnQuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pdGVyYXRpb25zID0gNVxuICAgIHRoaXMuZGVmcyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgdGhpcy5kZWZzID0gc2NoZW1hWyckZGVmcyddXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZGVmcylcbiAgICAgIHRoaXMudHJhdmVyc2Uoc2NoZW1hKVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjLyRkZWZzJykpIHtcbiAgICAgIGNvbnN0IHJlZlBhcnRzID0gcmVmLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGRlZk5hbWUgPSByZWZQYXJ0cy5wb3AoKVxuXG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZzW2RlZk5hbWVdKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZzW2RlZk5hbWVdXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgdHJhdmVyc2UgKHZhbHVlLCB0aGluZywgaW5kZXgpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVbJyRyZWYnXSkgJiYgaXNTZXQodGhpbmcpKSB7XG4gICAgICAgIHRoaW5nW2luZGV4XSA9IHRoaXMuZGVmaW5lKHZhbHVlWyckcmVmJ10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRyYXZlcnNlKHZhbHVlW2luZGV4XSwgdmFsdWUsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShpdGVtLCB2YWx1ZSwgaW5kZXgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZQYXJzZXJcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5vcHRpb25zLnJvb3ROYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J1Mgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuXG4gICAgICBpZiAoZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBkZWFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImNsYXNzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBhbGVydC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaW52YWxpZEZlZWRiYWNrLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRBY3RpdmF0b3JzU2xvdCAoKSB7XG4gICAgY29uc3QgYWN0aXZhdG9yc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjdGl2YXRvcnNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gYWN0aXZhdG9yc1Nsb3RcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3Rpb25zU2xvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjdGlvbnNTbG90cy5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGFjdGlvbnNTbG90c1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoaWxkcmVuU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGNoaWxkcmVuU2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBtZXNzYWdlc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lc3NhZ2VzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBtZXNzYWdlc1Nsb3RcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBjaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcmFkaW9MZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICByYWRpb0xlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gcmFkaW9MZWdlbmRcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgcmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogYXV0bzsnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRJbnB1dCAoY29uZmlnKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZVdpcmVmcmFtZSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBzdXBlci5nZXRGaWVsZHNldCgpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBzdXBlci5nZXRDaGVja2JveExhYmVsKGNvbmZpZylcbiAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiByYWRpb0NvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1pbmZvJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV2lyZWZyYW1lXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHN1cGVyLmdldEZpZWxkc2V0KClcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3B5LTAnKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IHN1cGVyLmdldENoZWNrYm94TGFiZWwoY29uZmlnKVxuICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBzdXBlci5nZXRSYWRpb0xhYmVsKGNvbmZpZylcbiAgICByYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiByYWRpb0xhYmVsXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBzdXBlci5nZXRDaGVja2JveENvbnRhaW5lcigpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIHJhZGlvQ29udGFpbmVyXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBzdXBlci5nZXRSYWRpbyhjb25maWcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBzdXBlci5nZXRUZXh0YXJlYShjb25maWcpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gc3VwZXIuZ2V0U2VsZWN0KGNvbmZpZylcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi9ib290c3RyYXA0J1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZUJvb3RzdHJhcDQge1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG5cbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnbXktMycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbi1mb2N1c2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IHN1cGVyLmdldExhYmVsKGNvbmZpZylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJylcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuLi90aGVtZXMvd2lyZWZyYW1lJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi4vdGhlbWVzL2JhcmVib25lcydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IG51bGxcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gbnVsbFxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICd3aXJlZnJhbWUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lV2lyZWZyYW1lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmFjdGl2YXRvcnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3RpdmF0b3JzU2xvdCgpXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q29udHJvbFNsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udGFpbmVyKVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCwgZXF1YWwsIG1lcmdlRGVlcCwgaXNBcnJheSwgZGlmZmVyZW50IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcblxuY2xhc3MgTXVsdGlwbGVJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTXVsdGlwbGVFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQodGhpcy5zY2hlbWEub25lT2YoKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKHNjaGVtYS5hbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2VzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgfVxuXG4gIG1hdGNoSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVxdWFsKGluc3RhbmNlLmdldFZhbHVlKCksIHZhbHVlKSkge1xuICAgICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICB0aGlzLm1hdGNoSW5zdGFuY2UodmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIHRoaXMubGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgZXF1YWwsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3RpdmF0b3JzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZVxuXG4gICAgICAvLyBpZiBub3QgcHJvcGVydHkgbmFtZSB3YXMgZ2l2ZW4gcmV0dXJuXG4gICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gaWYgcHJvcGVydHkgZXhpc3QgcmV0dXJuXG4gICAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZCh7IHR5cGU6ICdhbnknIH0sIGtleSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5SW5wdXQpXG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hBY3RpdmF0b3JzICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuYWN0aXZhdG9yc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRvcnNTbG90LnJlbW92ZUNoaWxkKHRoaXMuYWN0aXZhdG9yc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2YXRvcklkID0gY2hpbGQucGF0aCArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgICAgICBmb3I6IGFjdGl2YXRvcklkLFxuICAgICAgICAgIHRleHRDb250ZW50OiBjaGlsZC5zY2hlbWEudGl0bGUoKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JJbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgICAgIGlkOiBhY3RpdmF0b3JJZFxuICAgICAgICB9KVxuXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmNoZWNrZWQgPSBPYmplY3QuaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgYWN0aXZhdG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChhY3RpdmF0b3JJbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoYWN0aXZhdG9yQ29udGFpbmVyKVxuICAgICAgICBhY3RpdmF0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZhdG9ySW5wdXQpXG4gICAgICAgIGFjdGl2YXRvckNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3RpdmF0b3JMYWJlbClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hBY3RpdmF0b3JzKClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0eShrZXkpXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucmVxdWlyZWQoKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGRlcGVuZGVudFJlcXVpcmVkKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBoYXNQcm9wZXJ0eSAocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVxuXG4gICAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocHJvcGVydGllcykuaW5jbHVkZXMocHJvcGVydHlOYW1lKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1Byb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIC8vIGRlbGV0ZUFsbFxuICAgIHRoaXMuZGVsZXRlQWxsQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgY2hpbGQudWkuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuYWN0aW9uc1Nsb3QpXG5cbiAgICAgIHdoaWxlIChjaGlsZC51aS5hY3Rpb25zU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNoaWxkLnVpLmFjdGlvbnNTbG90LnJlbW92ZUNoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgLy8gZGVsZXRlXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgICB9KVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICAgIC8vIG1vdmUgdXBcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGRvd25cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIH1cblxuICAgICAgY2hpbGQudWkuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGdldFR5cGUsIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcblxuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICd3aXJlZnJhbWUnLFxuICAgICAgcm9vdE5hbWU6ICdyb290J1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBudWxsXG4gICAgdGhpcy5zY2hlbWEgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKClcbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLnNjaGVtYS5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICBpZiAoaXNTZXQoY29uZmlnLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLm9uZU9mKCkpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCBub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICBpZiAobm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSAmJiBpc1NldChjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKG9yaWdpbmFsU2NoZW1hKVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBPYmplY3RJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdW1iZXJJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHNldFRoZW1lICh0aGVtZSkge1xuICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQnUyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=