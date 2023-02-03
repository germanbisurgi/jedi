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
var equal = function equal(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};
var different = function different(a, b) {
  return JSON.stringify(a) !== JSON.stringify(b);
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
    type = 'number';
  } else if (isInteger(value)) {
    type = 'integer';
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
      return utils_isObject(this.schema.additionalProperties) || isBoolean(this.schema.additionalProperties) ? this.schema.additionalProperties : false;
    }
  }, {
    key: "allOf",
    value: function allOf() {
      return isArray(this.schema.allOf) ? this.schema.allOf : false;
    }
  }, {
    key: "anyOf",
    value: function anyOf() {
      return isArray(this.schema.anyOf) ? this.schema.anyOf : false;
    }
  }, {
    key: "const",
    value: function _const() {
      return this.schema["const"] ? this.schema["const"] : false;
    }
  }, {
    key: "clone",
    value: function clone() {
      return JSON.parse(JSON.stringify(this.schema));
    }
  }, {
    key: "default",
    value: function _default() {
      return this.schema["default"] ? this.schema["default"] : false;
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
      return isNumber(this.schema.exclusiveMaximum) ? this.schema.exclusiveMaximum : false;
    }
  }, {
    key: "exclusiveMinimum",
    value: function exclusiveMinimum() {
      return isNumber(this.schema.exclusiveMinimum) ? this.schema.exclusiveMinimum : false;
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
      return utils_isObject(this.schema["if"]) ? this.schema["if"] : false;
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
      if (isInteger(this.schema.maxProperties) && this.schema.maxProperties >= 0) {
        return this.schema.maxProperties;
      }

      return false;
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
      return utils_isObject(this.schema.patternProperties) ? this.schema.patternProperties : false;
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
      return isArray(this.schema.oneOf) ? this.schema.oneOf : false;
    }
  }, {
    key: "uniqueItems",
    value: function uniqueItems() {
      return isBoolean(this.schema.uniqueItems) ? this.schema.uniqueItems : false;
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
var _const = function _const(validator, value, schema, key, path) {
  var errors = [];

  if (schema["const"]()) {
    var valueIsNotEqualConst = JSON.stringify(value) !== JSON.stringify(schema["const"]());
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

  if (schema.anyOf()) {
    var valid = schema.anyOf().some(function (schema) {
      var anyOfErrors = validator.validate(value, new src_schema(schema), key, path);
      return anyOfErrors.length === 0;
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

  if (isNumber(value) && schema.exclusiveMaximum()) {
    var computedMaximum = schema.exclusiveMaximum() - 1;
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
// CONCATENATED MODULE: ./src/validation/constrains/exclusiveMinimum.js

var exclusiveMinimum_exclusiveMinimum = function _exclusiveMinimum(validator, value, schema, key, path) {
  var errors = [];

  if (isNumber(value) && schema.exclusiveMinimum()) {
    var computedMinimum = schema.exclusiveMinimum() + 1;
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
// CONCATENATED MODULE: ./src/validation/constrains/format.js
var _format = function _format(validator, value, schema, key, path) {
  var errors = [];

  if (schema.format()) {
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

  if (schema["if"]()) {
    if (!schema.then() && !schema["else"]()) {
      return errors;
    }

    var ifEditor = new src({
      schema: schema["if"](),
      startValue: value
    });
    var ifErrors = ifEditor.validate();

    if (ifErrors.length === 0) {
      if (schema.then()) {
        var thenEditor = new src({
          schema: schema.then(),
          startValue: value
        });
        errors = thenEditor.validate();
        thenEditor.destroy();
      } else {
        return errors;
      }
    } else {
      if (schema["else"]()) {
        var elseEditor = new src({
          schema: schema["else"](),
          startValue: value
        });
        errors = elseEditor.validate();
        elseEditor.destroy();
      } else {
        return errors;
      }
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

  if (utils_isObject(value) && schema.maxProperties()) {
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
    var invalid = !isMultipleOf;

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

  if (schema.oneOf()) {
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

  if (utils_isObject(value) && schema.patternProperties()) {
    var patternProperties = schema.patternProperties();
    Object.keys(value).forEach(function (propertyName) {
      Object.keys(patternProperties).forEach(function (pattern) {
        var regexp = new RegExp(pattern);

        if (regexp.test(propertyName)) {
          var _schema = patternProperties[pattern];
          _schema.title = propertyName;
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
    var valid = schema.type() === getType(value);

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

  if (isArray(value) && schema.uniqueItems()) {
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
    var properties = schema.properties();
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


























/* harmony default export */ var draft_2020_12 = ([additionalProperties_additionalProperties, allOf_allOf, anyOf_anyOf, _const, dependentRequired_dependentRequired, enum_enum, exclusiveMaximum_exclusiveMaximum, exclusiveMinimum_exclusiveMinimum, _format, if_if, maximum_maximum, maxItems_maxItems, maxLength_maxLength, maxProperties_maxProperties, minimum_minimum, minItems_minItems, minLength_minLength, minProperties_minProperties, multipleOf_multipleOf, not_not, oneOf_oneOf, pattern_pattern, patternProperties_patternProperties, required_required, type_type, uniqueItems_uniqueItems]);
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

      if (this.schema["default"]()) {
        if (this.schema["enum"]() && !this.schema["enum"]().includes(this.schema["default"]())) {
          return;
        }

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
     * Transforms the input value if necessary before value set
     */

  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return value;
    }
    /**
     * Sets the instance value
     */

  }, {
    key: "setValue",
    value: function setValue(newValue) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.jedi.options.isEditor) {
        newValue = this.sanitize(newValue);
      }

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
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-info';
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
    key: "getCheckboxContainer",
    value: function getCheckboxContainer() {
      var checkboxContainer = get_default()(getPrototypeOf_default()(ThemeWireframe.prototype), "getCheckboxContainer", this).call(this);

      checkboxContainer.classList.add('form-group');
      return checkboxContainer;
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
    key: "getInput",
    value: function getInput(config) {
      var input = get_default()(getPrototypeOf_default()(ThemeBootstrap4.prototype), "getInput", this).call(this, config);

      input.classList.add('mb-3');
      return input;
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
        _this2.messagesSlot.appendChild(_this2.theme.getAlert({
          message: error.message
        }));
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

          _this.instance.switchEditor(index);
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

      var oldEditor = this.instance.editors[this.instance.lastIndex];

      if (oldEditor.ui.container.parentNode) {
        this.container.removeChild(oldEditor.ui.container);
      }

      this.container.appendChild(this.instance.activeEditor.ui.container);
      var buttons = this.container.querySelectorAll('button');

      if (this.disabled) {
        this.instance.activeEditor.ui.disable();
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      } else {
        this.instance.activeEditor.ui.enable();
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

      this.instance.activeEditor.ui.showValidationErrors();
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

      this.editors = [];
      this.activeEditor = null;
      this.lastIndex = 0;
      this.index = 0;
      this.schemas = [];
      this.switcherOptionValues = [];
      this.switcherOptionsLabels = [];

      if (this.schema.anyOf() || this.schema.oneOf()) {
        var schemasOf = this.schema.anyOf() ? this.schema.anyOf() : this.schema.oneOf();
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
      } // Editors


      this.schemas.forEach(function (schema) {
        var editor = _this.jedi.createInstance({
          jedi: _this.jedi,
          schema: new src_schema(schema),
          path: _this.path,
          parent: _this.parent
        });

        editor.unregister();
        editor.on('change', function () {
          _this.emit('change');
        });

        _this.editors.push(editor);
      });

      if (isSet(this.editors[0])) {
        this.switchEditor(0, false);
      }
    }
  }, {
    key: "switchEditor",
    value: function switchEditor(newIndex) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.lastIndex = this.index;
      this.index = newIndex;
      this.activeEditor = this.editors[this.index];
      this.setValue(this.getValue(), triggersChange);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.activeEditor.getValue();
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return this.activeEditor.sanitize(value);
    }
  }, {
    key: "matchEditor",
    value: function matchEditor(value, editors) {
      var index = 0;

      var _iterator = _createForOfIteratorHelper(editors),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var editor = _step.value;

          if (editor.editors) {
            editor.setValue(value);
          }

          if (equal(editor.sanitize(value), value)) {
            this.switchEditor(index);
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
    key: "setValue",
    value: function setValue(value) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // if value matches the active editor type set the value. Else switch to the first
      // editor that match the value.
      if (different(this.activeEditor.sanitize(value), value)) {
        this.matchEditor(value, this.editors);
      }

      this.activeEditor.setValue(value, triggersChange);

      if (triggersChange) {
        this.emit('change');
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.editors.forEach(function (editor) {
        editor.destroy();
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

      this.container.appendChild(this.messagesSlot); // checkbox container

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
      this.container.appendChild(this.messagesSlot);
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

      this.container.appendChild(this.messagesSlot); // label

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
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return Boolean(value);
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

      this.fieldset.appendChild(this.activatorsSlot);
      this.fieldset.appendChild(this.actionsSlot);
      this.fieldset.appendChild(this.messagesSlot);
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

      if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
        this.actionsSlot.appendChild(label);
        this.actionsSlot.appendChild(this.addPropertyInput);
        this.actionsSlot.appendChild(this.addPropertyBtn);
      }
    }
  }, {
    key: "refreshActivators",
    value: function refreshActivators() {
      var _this2 = this;

      if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
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

      var value = this.instance.getValue();
      Object.keys(value).forEach(function (key) {
        var child = _this3.instance.getChild(key);

        if (child.isActive) {
          _this3.childrenSlot.appendChild(child.ui.container);

          if (child) {
            if (_this3.disabled) {
              child.ui.disable();
            } else {
              child.ui.enable();
            }
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

/* harmony default export */ var object = (object_ObjectEditor);
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
      this.ui = new object(this);
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

      this.on('set-value', function () {
        _this.onSetValue();
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
    key: "sanitize",
    value: function sanitize(value) {
      if (utils_isObject(value)) {
        return value;
      }

      return {};
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
    key: "onSetValue",
    value: function onSetValue() {
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

/* harmony default export */ var array = (array_ArrayEditor);
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
      this.ui = new array(this);
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
      value.forEach(function (itemValue) {
        var child = _this2.createItemInstance(itemValue);

        _this2.children.push(child);
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

      this.container.appendChild(this.messagesSlot); // label

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
      } // fix color picker bug


      if (this.instance.schema.formatIs('color') && this.instance.value.length === 0) {
        this.instance.setValue('#000000', false);
      }

      this.container.appendChild(this.controlSlot);

      if (!this.instance.schema.formatIs('hidden')) {
        this.controlSlot.appendChild(label);
      }

      this.controlSlot.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // description

      if (this.instance.schema.description()) {
        this.controlSlot.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
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

/* harmony default export */ var string = (string_StringEditor);
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
      this.container.appendChild(this.messagesSlot);
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
}(string);

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
      this.container.appendChild(this.messagesSlot); // label

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
      this.controlSlot.appendChild(this.input); // events

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
}(string);

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
        this.ui = new string(this);
      }
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return String(value);
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

      this.container.appendChild(this.messagesSlot); // label

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
      this.input.value = this.instance.getValue();

      if (this.disabled) {
        this.input.setAttribute('disabled', 'disabled');
      } else {
        this.input.removeAttribute('disabled');
      }
    }
  }]);

  return NumberEditor;
}(editors_editor);

/* harmony default export */ var number = (number_NumberEditor);
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
      this.container.appendChild(this.messagesSlot);
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
}(number);

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
      this.container.appendChild(this.messagesSlot);
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
    }
  }]);

  return NumberEnumSelectEditor;
}(number);

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
        this.ui = new number(this);
      }
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      if (this.schema.typeIs('integer')) {
        return Math.floor(Number(value));
      } else {
        return Number(value);
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
      this.container.appendChild(this.messagesSlot); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
    }
  }, {
    key: "sanitize",
    value: function sanitize() {
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
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return null;
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

      if (this.options.startValue) {
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

      if (config.schema.anyOf() || config.schema.oneOf() || config.schema.typeIs('any') || isArray(config.schema.type()) || !config.schema.type()) {
        if (!config.schema.type() && config.schema["default"]()) {
          var originalSchema = config.schema.clone();
          originalSchema.type = getType(config.schema["default"]());
          var newSchema = new src_schema(originalSchema);
          return this.resolve(newSchema);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXF1YWwiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsInZhbHVlIiwiaXNTZXQiLCJub3RTZXQiLCJpc051bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiaXNPYmplY3QiLCJnZXRUeXBlIiwidHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsInNvdXJjZXMiLCJsZW5ndGgiLCJzb3VyY2UiLCJzaGlmdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYXNzaWduIiwiU2NoZW1hIiwic2NoZW1hIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsImFueU9mIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIl9hbGxPZiIsInZhbGlkYXRvciIsInBhdGgiLCJlcnJvcnMiLCJhbGxPZkVycm9ycyIsInZhbGlkYXRlIiwiX21pbkxlbmd0aCIsImludmFsaWQiLCJmaWVsZCIsInB1c2giLCJtZXNzYWdlIiwiX2NvbnN0IiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJfYW55T2YiLCJ2YWxpZCIsInNvbWUiLCJhbnlPZkVycm9ycyIsIl9kZXBlbmRlbnRSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyIiwicHJvcGVydHkiLCJoYXNPd24iLCJqb2luIiwiX2VudW0iLCJlIiwiX2V4Y2x1c2l2ZU1heGltdW0iLCJjb21wdXRlZE1heGltdW0iLCJfZXhjbHVzaXZlTWluaW11bSIsImNvbXB1dGVkTWluaW11bSIsIl9mb3JtYXQiLCJmb3JtYXRJcyIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJfaWYiLCJpZkVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwiaWZFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZGVzdHJveSIsImVsc2VFZGl0b3IiLCJfbWF4SXRlbXMiLCJfbWF4TGVuZ3RoIiwiX21heFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzQ291bnQiLCJfbWluaW11bSIsIl9taW5JdGVtcyIsIl9taW5Qcm9wZXJ0aWVzIiwiX211bHRpcGxlT2YiLCJpc011bHRpcGxlT2YiLCJfbm90Iiwibm90RXJyb3JzIiwiX29uZU9mIiwiY291bnRlciIsIm9uZU9mRXJyb3JzIiwiX3BhdHRlcm4iLCJfcGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3IiLCJfcmVxdWlyZWQiLCJpbmNsdWRlcyIsIl90eXBlIiwiX21heGltdW0iLCJfdW5pcXVlSXRlbXMiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsIml0ZW0iLCJfYWRkaXRpb25hbFByb3BlcnRpZXMiLCJyb290TmFtZSIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsImVycm9yIiwiVmFsaWRhdG9yIiwiZHJhZnQiLCJzY2hlbWFFcnJvcnMiLCJ2YWxpZGF0b3JFcnJvcnMiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiZGVmcyIsInRyYXZlcnNlIiwicmVmIiwic3RhcnRzV2l0aCIsInJlZlBhcnRzIiwic3BsaXQiLCJkZWZOYW1lIiwicG9wIiwiaW5kZXgiLCJkZWZpbmUiLCJFdmVudEVtaXR0ZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJsaXN0ZW5lciIsIkluc3RhbmNlIiwiY29uZmlnIiwiamVkaSIsInVuZGVmaW5lZCIsImlzQWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJyZWdpc3RlciIsInNldERlZmF1bHRWYWx1ZSIsInByZXBhcmUiLCJpc0VkaXRvciIsInNldFVJIiwib24iLCJvbkNoaWxkQ2hhbmdlIiwidW5yZWdpc3RlciIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJzYW5pdGl6ZSIsImVtaXQiLCJnZXRWYWx1ZSIsImdldEtleSIsImNoaWxkIiwiVGhlbWVCYXJlYm9uZXMiLCJhbGVydCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYWN0aXZhdG9yc1Nsb3QiLCJhY3Rpb25zU2xvdHMiLCJjaGlsZHJlblNsb3QiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJtZXNzYWdlc1Nsb3QiLCJjb250cm9sU2xvdCIsImNoZWNrYm94TGFiZWwiLCJzck9ubHkiLCJyYWRpb0xlZ2VuZCIsInJhZGlvTGFiZWwiLCJsYWJlbCIsImxlZ2VuZCIsImlucHV0IiwiaWQiLCJjaGVja2JveCIsInJhZGlvIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwiYXBwZW5kQ2hpbGQiLCJUaGVtZVdpcmVmcmFtZSIsImJ0bkdyb3VwIiwiY2hlY2tib3hDb250YWluZXIiLCJmaWVsZHNldCIsInJhZGlvQ29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiRWRpdG9yIiwiaW5zdGFuY2UiLCJ0aGVtZSIsImFjdGlvbnNTbG90IiwiZGlzYWJsZWQiLCJidWlsZCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJyZWZyZXNoVUkiLCJhbHdheXNTaG93RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJnZXRDb250YWluZXIiLCJnZXRBY3RpdmF0b3JzU2xvdCIsImdldENvbnRyb2xTbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJpbm5lckhUTUwiLCJnZXRBbGVydCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk11bHRpcGxlRWRpdG9yIiwic3dpdGNoZXJCdXR0b25zIiwic3dpdGNoZXIiLCJnZXRCdG5Hcm91cCIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwiZ2V0QnV0dG9uIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk51bWJlciIsInN3aXRjaEVkaXRvciIsIm9sZEVkaXRvciIsImVkaXRvcnMiLCJsYXN0SW5kZXgiLCJhY3RpdmVFZGl0b3IiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc2FibGUiLCJlbmFibGUiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsInJlbW92ZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJzY2hlbWFzIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImNyZWF0ZUluc3RhbmNlIiwibmV3SW5kZXgiLCJzZXRWYWx1ZSIsIm1hdGNoRWRpdG9yIiwiQm9vbGVhbkVkaXRvciIsImdldENoZWNrYm94Q29udGFpbmVyIiwiZ2V0Q2hlY2tib3hMYWJlbCIsImdldENoZWNrYm94IiwiY2hlY2tlZCIsImdldERlc2NyaXB0aW9uIiwiQm9vbGVhbiIsInJlbW92ZUF0dHJpYnV0ZSIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJyYWRpb0lucHV0cyIsImdldFJhZGlvTGVnZW5kIiwiZ2V0UmFkaW9Db250YWluZXIiLCJnZXRSYWRpbyIsInJhZGlvVmFsdWUiLCJnZXRMYWJlbCIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiZ2V0U2VsZWN0IiwiQm9vbGVhbkluc3RhbmNlIiwiT2JqZWN0RWRpdG9yIiwiZ2V0RmllbGRzZXQiLCJnZXRMZWdlbmQiLCJhZGRQcm9wZXJ0eUlucHV0IiwiZ2V0SW5wdXQiLCJhZGRQcm9wZXJ0eUJ0biIsImNyZWF0ZUNoaWxkIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImFjdGl2YXRvcklkIiwiYWN0aXZhdG9yQ29udGFpbmVyIiwiYWN0aXZhdG9yTGFiZWwiLCJhY3RpdmF0b3JJbnB1dCIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiZ2V0Q2hpbGQiLCJyZWZyZXNoQWN0aXZhdG9ycyIsInJlZnJlc2hFZGl0b3JzIiwiT2JqZWN0SW5zdGFuY2UiLCJvblNldFZhbHVlIiwic3BsaWNlIiwiZmluZCIsImhhc1Byb3BlcnR5IiwiZGVsZXRlQ2hpbGQiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIkFycmF5RWRpdG9yIiwiYWRkQnRuIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJpdGVtSW5kZXgiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsIkFycmF5SW5zdGFuY2UiLCJyZWZyZXNoQ2hpbGRyZW4iLCJmcm9tSW5kZXgiLCJ0ZW1wRWRpdG9yIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiY3VycmVudFZhbHVlIiwiaXRlbVZhbHVlIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0luc3RhbmNlIiwiU3RyaW5nIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckluc3RhbmNlIiwidHlwZUlzTnVtZXJpYyIsIk51bGxFZGl0b3IiLCJOdWxsSW5zdGFuY2UiLCJzaG93UmVxdWlyZWRPbmx5IiwiaW5zdGFuY2VzIiwicm9vdCIsInJlZlBhcnNlciIsImRlcmVmZXJlbmNlIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJoaWRkZW5JbnB1dCIsIm9yaWdpbmFsU2NoZW1hIiwibmV3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QyxTQUFmLEdBQTJCLEVBQTNCO01BQ0Q7O01BRURuTixNQUFNLENBQUNDLElBQVAsQ0FBWSxJQUFaLEVBQWtCQyxPQUFsQixDQUEwQixVQUFDQyxHQUFELEVBQVM7UUFDakMsT0FBTyxNQUFJLENBQUNBLEdBQUQsQ0FBWDtNQUNELENBRkQ7SUFHRDs7OztFQWxOZ0I4SCxhOztBQXFOSnRELGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgIT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3Qgbm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2ludGVnZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWRkaXRpb25hbFByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IGZhbHNlXG4gIH1cblxuICBhbnlPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYW55T2YpID8gdGhpcy5zY2hlbWEuYW55T2YgOiBmYWxzZVxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdCA/IHRoaXMuc2NoZW1hLmNvbnN0IDogZmFsc2VcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdCA/IHRoaXMuc2NoZW1hLmRlZmF1bHQgOiBmYWxzZVxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IGZhbHNlXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogZmFsc2VcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiBmYWxzZVxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm1hdCgpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pZikgPyB0aGlzLnNjaGVtYS5pZiA6IGZhbHNlXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgPyB0aGlzLnNjaGVtYS5ub3QgOiBmYWxzZVxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydHkgKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldID8gdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldIDogZmFsc2VcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICByZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQpXSA6IGZhbHNlXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgPyB0aGlzLnNjaGVtYS50aGVuIDogZmFsc2VcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiBmYWxzZVxuICB9XG5cbiAgdHlwZSAoKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLnR5cGUoKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IGZhbHNlXG4gIH1cblxuICB1bmlxdWVJdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS51bmlxdWVJdGVtcykgPyB0aGlzLnNjaGVtYS51bmlxdWVJdGVtcyA6IGZhbHNlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfYWxsT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5hbGxPZigpKSB7XG4gICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbGxPZkVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hbGxPZkVycm9yc11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5MZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5taW5MZW5ndGgoKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEuY29uc3QoKSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB2YWx1ZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcblxuZXhwb3J0IGNvbnN0IF9hbnlPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEuYW55T2YoKSkge1xuICAgIGNvbnN0IHZhbGlkID0gc2NoZW1hLmFueU9mKCkuc29tZSgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG4gICAgICByZXR1cm4gYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwXG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhT2JqZWN0Lmhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJleHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKHNjaGVtYS5lbnVtKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYS5lbnVtKCkuc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmVudW0oKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZXhjbHVzaXZlTWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpIC0gMSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZXhjbHVzaXZlTWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpICsgMSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiZXhwb3J0IGNvbnN0IF9mb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmZvcm1hdCgpKSB7XG4gICAgbGV0IGludmFsaWQgPSBmYWxzZVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBfaWYgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEuaWYoKSkge1xuICAgIGlmICghc2NoZW1hLnRoZW4oKSAmJiAhc2NoZW1hLmVsc2UoKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHNjaGVtYS50aGVuKCkpIHtcbiAgICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgICBlcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNjaGVtYS5lbHNlKCkpIHtcbiAgICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgICBlcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1heEl0ZW1zKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heExlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1heExlbmd0aCgpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLm1heFByb3BlcnRpZXMoKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5taW5pbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5JdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWluSXRlbXMoKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbXVsdGlwbGVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm11bHRpcGxlT2YoKSkge1xuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5ub3QoKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLm9uZU9mKCkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm4oKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVyblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eU5hbWVcblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9yZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnJlcXVpcmVkKCkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGdldFR5cGUsIGlzQXJyYXkgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF90eXBlID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoc2NoZW1hLnR5cGUoKSkge1xuICAgIGNvbnN0IHZhbGlkID0gc2NoZW1hLnR5cGUoKSA9PT0gZ2V0VHlwZSh2YWx1ZSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWF4aW11bSgpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3VuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS51bmlxdWVJdGVtcygpKSB7XG4gICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHNjaGVtYS5wcm9wZXJ0aWVzKClcbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGlmIChhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIU9iamVjdC5oYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogYFByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSBkb2VzIG5vdCBhbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXMuYCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhT2JqZWN0Lmhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByb290TmFtZTogcHJvcGVydHksXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBfYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgX21pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IF9hbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBfZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IF9leGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgX2Zvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IF9tYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBfbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBfbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IF9taW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgX21pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IF9taW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX211bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBfbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBfb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgX3BhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBfcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX3JlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IF90eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgX21heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyBfdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBfYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIF9hbGxPZixcbiAgX2FueU9mLFxuICBfY29uc3QsXG4gIF9kZXBlbmRlbnRSZXF1aXJlZCxcbiAgX2VudW0sXG4gIF9leGNsdXNpdmVNYXhpbXVtLFxuICBfZXhjbHVzaXZlTWluaW11bSxcbiAgX2Zvcm1hdCxcbiAgX2lmLFxuICBfbWF4aW11bSxcbiAgX21heEl0ZW1zLFxuICBfbWF4TGVuZ3RoLFxuICBfbWF4UHJvcGVydGllcyxcbiAgX21pbmltdW0sXG4gIF9taW5JdGVtcyxcbiAgX21pbkxlbmd0aCxcbiAgX21pblByb3BlcnRpZXMsXG4gIF9tdWx0aXBsZU9mLFxuICBfbm90LFxuICBfb25lT2YsXG4gIF9wYXR0ZXJuLFxuICBfcGF0dGVyblByb3BlcnRpZXMsXG4gIF9yZXF1aXJlZCxcbiAgX3R5cGUsXG4gIF91bmlxdWVJdGVtc1xuXVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnRcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICB0aGlzLmRyYWZ0LmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IDVcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgdGhpcy50cmF2ZXJzZSh0aGlzLmRlZnMpXG4gICAgICB0aGlzLnRyYXZlcnNlKHNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIy8kZGVmcycpKSB7XG4gICAgICBjb25zdCByZWZQYXJ0cyA9IHJlZi5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZWZOYW1lID0gcmVmUGFydHMucG9wKClcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmc1tkZWZOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmc1tkZWZOYW1lXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIHRyYXZlcnNlICh2YWx1ZSwgdGhpbmcsIGluZGV4KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlWyckcmVmJ10pICYmIGlzU2V0KHRoaW5nKSkge1xuICAgICAgICB0aGluZ1tpbmRleF0gPSB0aGlzLmRlZmluZSh2YWx1ZVsnJHJlZiddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmF2ZXJzZSh2YWx1ZVtpbmRleF0sIHZhbHVlLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoaXRlbSwgdmFsdWUsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5vcHRpb25zLnJvb3ROYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J1Mgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgbmV3VmFsdWUgPSB0aGlzLnNhbml0aXplKG5ld1ZhbHVlKVxuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGFsZXJ0LnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gYWxlcnRcbiAgfVxuXG4gIGdldEFjdGl2YXRvcnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3RpdmF0b3JzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aXZhdG9yc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBhY3RpdmF0b3JzU2xvdFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGFjdGlvbnNTbG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aW9uc1Nsb3RzLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gYWN0aW9uc1Nsb3RzXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hpbGRyZW5TbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gY2hpbGRyZW5TbG90XG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgbWVzc2FnZXNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gbWVzc2FnZXNTbG90XG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgY2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJhZGlvTGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgcmFkaW9MZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJhZGlvTGVnZW5kXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIHJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICByYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiByYWRpb0xhYmVsXG4gIH1cblxuICBnZXRMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6IGF1dG87JylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0SW5wdXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBzdXBlci5nZXRDaGVja2JveENvbnRhaW5lcigpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBzdXBlci5nZXRGaWVsZHNldCgpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBzdXBlci5nZXRDaGVja2JveExhYmVsKGNvbmZpZylcbiAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiByYWRpb0NvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVdpcmVmcmFtZVxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBhbGVydCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBhbGVydFxuICB9XG5cbiAgZ2V0SW5wdXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGlucHV0ID0gc3VwZXIuZ2V0SW5wdXQoY29uZmlnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBzdXBlci5nZXRGaWVsZHNldCgpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdweS0wJylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBzdXBlci5nZXRDaGVja2JveExhYmVsKGNvbmZpZylcbiAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gc3VwZXIuZ2V0UmFkaW9MYWJlbChjb25maWcpXG4gICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gc3VwZXIuZ2V0UmFkaW9Db250YWluZXIoKVxuICAgIHJhZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiByYWRpb0NvbnRhaW5lclxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gc3VwZXIuZ2V0Q2hlY2tib3goY29uZmlnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gc3VwZXIuZ2V0UmFkaW8oY29uZmlnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gc3VwZXIuZ2V0VGV4dGFyZWEoY29uZmlnKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IHN1cGVyLmdldFNlbGVjdChjb25maWcpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcblxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdteS0zJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuLWZvY3VzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gc3VwZXIuZ2V0TGFiZWwoY29uZmlnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKVxuICAgIHJldHVybiBsYWJlbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lV2lyZWZyYW1lIGZyb20gJy4uL3RoZW1lcy93aXJlZnJhbWUnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmFjdGl2YXRvcnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY29udHJvbFNsb3QgPSBudWxsXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IG51bGxcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnd2lyZWZyYW1lJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5hY3RpdmF0b3JzU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aXZhdG9yc1Nsb3QoKVxuICAgIHRoaXMuY29udHJvbFNsb3QgPSB0aGlzLnRoZW1lLmdldENvbnRyb2xTbG90KClcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSB0aGlzLnRoZW1lLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLm1lc3NhZ2VzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gc3dpdGNoZXIgYnV0dG9uc1xuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zID0gW11cbiAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgdGhpcy5zd2l0Y2hlci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyBidXR0b25cbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgdmFsdWU6IGluZGV4XG4gICAgICB9KVxuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGJ1dHRvbi52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLnB1c2goYnV0dG9uKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRFZGl0b3IgPSB0aGlzLmluc3RhbmNlLmVkaXRvcnNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkRWRpdG9yLnVpLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRFZGl0b3IudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmNvbnRhaW5lcilcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmRpc2FibGUoKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuZW5hYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQsIGVxdWFsLCBkaWZmZXJlbnQsIG1lcmdlRGVlcCwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmVkaXRvcnMgPSBbXVxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuYW55T2YoKSB8fCB0aGlzLnNjaGVtYS5vbmVPZigpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSB0aGlzLnNjaGVtYS5hbnlPZigpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKHNjaGVtYS5hbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gRWRpdG9yc1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgZWRpdG9yLnVucmVnaXN0ZXIoKVxuXG4gICAgICBlZGl0b3Iub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5lZGl0b3JzLnB1c2goZWRpdG9yKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5lZGl0b3JzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoMCwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoRWRpdG9yIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVFZGl0b3IgPSB0aGlzLmVkaXRvcnNbdGhpcy5pbmRleF1cbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRWRpdG9yLmdldFZhbHVlKClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUVkaXRvci5zYW5pdGl6ZSh2YWx1ZSlcbiAgfVxuXG4gIG1hdGNoRWRpdG9yICh2YWx1ZSwgZWRpdG9ycykge1xuICAgIGxldCBpbmRleCA9IDBcblxuICAgIGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcbiAgICAgIGlmIChlZGl0b3IuZWRpdG9ycykge1xuICAgICAgICBlZGl0b3Iuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChlcXVhbChlZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSAodmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBlZGl0b3IgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBlZGl0b3IgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUVkaXRvci5zYW5pdGl6ZSh2YWx1ZSksIHZhbHVlKSkge1xuICAgICAgdGhpcy5tYXRjaEVkaXRvcih2YWx1ZSwgdGhpcy5lZGl0b3JzKVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlRWRpdG9yLnNldFZhbHVlKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSlcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuZWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGNoZWNrYm94IGNvbnRhaW5lclxuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuYWN0aXZhdG9yc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZVxuXG4gICAgICAvLyBpZiBub3QgcHJvcGVydHkgbmFtZSB3YXMgZ2l2ZW4gcmV0dXJuXG4gICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gaWYgcHJvcGVydHkgZXhpc3QgcmV0dXJuXG4gICAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZCh7IHR5cGU6ICdhbnknIH0sIGtleSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSkge1xuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUlucHV0KVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hBY3RpdmF0b3JzICgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJykpIHtcbiAgICAgIHdoaWxlICh0aGlzLmFjdGl2YXRvcnNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0b3JzU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmFjdGl2YXRvcnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmF0b3JJZCA9IGNoaWxkLnBhdGggKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JMYWJlbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hMYWJlbCh7XG4gICAgICAgICAgZm9yOiBhY3RpdmF0b3JJZCxcbiAgICAgICAgICB0ZXh0Q29udGVudDogY2hpbGQuc2NoZW1hLnRpdGxlKCkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdG9ySW5wdXQgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgICAgICBpZDogYWN0aXZhdG9ySWRcbiAgICAgICAgfSlcblxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5jaGVja2VkID0gT2JqZWN0Lmhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZhdG9ySW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLmFjdGl2YXRvcnNTbG90LmFwcGVuZENoaWxkKGFjdGl2YXRvckNvbnRhaW5lcilcbiAgICAgICAgYWN0aXZhdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2YXRvcklucHV0KVxuICAgICAgICBhY3RpdmF0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZhdG9yTGFiZWwpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaW5zdGFuY2UuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hBY3RpdmF0b3JzKClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0eShrZXkpXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoZGVwZW5kZW50UmVxdWlyZWQpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KCcuJykucG9wKClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgaGFzUHJvcGVydHkgKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClcblxuICAgIGlmICghcHJvcGVydGllcykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmluY2x1ZGVzKHByb3BlcnR5TmFtZSlcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5oYXNQcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIC8vIGRlbGV0ZUFsbFxuICAgIHRoaXMuZGVsZXRlQWxsQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgY2hpbGQudWkuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuYWN0aW9uc1Nsb3QpXG5cbiAgICAgIHdoaWxlIChjaGlsZC51aS5hY3Rpb25zU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNoaWxkLnVpLmFjdGlvbnNTbG90LnJlbW92ZUNoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgLy8gZGVsZXRlXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgICB9KVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICAgIC8vIG1vdmUgdXBcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGRvd25cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIH1cblxuICAgICAgY2hpbGQudWkuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2NvbG9yJykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIGlmICghdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH1cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgdGhpcy5zY2hlbWEuZW51bSgpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgdGhpcy5zY2hlbWEuZW51bSgpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsSW5zdGFuY2VcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3InXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcblxuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICd3aXJlZnJhbWUnLFxuICAgICAgcm9vdE5hbWU6ICdyb290J1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBudWxsXG4gICAgdGhpcy5zY2hlbWEgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKClcbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLnNjaGVtYS5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIGlmIChjb25maWcuc2NoZW1hLmFueU9mKCkgfHwgY29uZmlnLnNjaGVtYS5vbmVPZigpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCAhY29uZmlnLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGlmICghY29uZmlnLnNjaGVtYS50eXBlKCkgJiYgY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUobmV3U2NoZW1hKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMub3B0aW9ucy5zdGFydFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J1MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9