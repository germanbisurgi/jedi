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

var arrayWithoutHoles = __webpack_require__(10);

var iterableToArray = __webpack_require__(11);

var unsupportedIterableToArray = __webpack_require__(12);

var nonIterableSpread = __webpack_require__(13);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
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
/* 7 */
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
var toConsumableArray = __webpack_require__(5);
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
var defineProperty = __webpack_require__(6);
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
    key: "types",
    value: function types() {
      return isArray(this.schema.type);
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

  if (schema.types()) {
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
// CONCATENATED MODULE: ./src/validation/drafts/draft-2020-12.js

























/* harmony default export */ var draft_2020_12 = ([allOf_allOf, anyOf_anyOf, _const, dependentRequired_dependentRequired, enum_enum, exclusiveMaximum_exclusiveMaximum, exclusiveMinimum_exclusiveMinimum, _format, if_if, maximum_maximum, maxItems_maxItems, maxLength_maxLength, maxProperties_maxProperties, minimum_minimum, minItems_minItems, minLength_minLength, minProperties_minProperties, multipleOf_multipleOf, not_not, oneOf_oneOf, pattern_pattern, patternProperties_patternProperties, required_required, type_type, uniqueItems_uniqueItems]);
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
var get = __webpack_require__(7);
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
    _this.path = config.path || 'root';
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
      newValue = this.sanitize(newValue);
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
    key: "getInputError",
    value: function getInputError(config) {
      var error = document.createElement('p');
      error.classList.add('jedi-error-message');
      error.textContent = config.message;
      return error;
    }
  }, {
    key: "getActivatorsSlot",
    value: function getActivatorsSlot() {
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
      button.value = config.value;
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
      return document.createElement('div');
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var container = document.createElement('small');
      container.textContent = config.textContent;
      return container;
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
    key: "getCheckboxLabel",
    value: function getCheckboxLabel(config) {
      var label = document.createElement('label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;

      if (config.srOnly) {
        label.classList.add('sr-only');
      }

      return label;
    }
  }, {
    key: "getRadioLegend",
    value: function getRadioLegend(config) {
      var label = document.createElement('p');
      label.textContent = config.textContent;

      if (config.srOnly) {
        label.classList.add('sr-only');
      }

      return label;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var label = document.createElement('label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;

      if (config.srOnly) {
        label.classList.add('sr-only');
      }

      return label;
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
    key: "getInputError",
    value: function getInputError(config) {
      var error = document.createElement('p');
      error.classList.add('jedi-error-message');
      error.classList.add('alert');
      error.classList.add('alert-danger');
      error.textContent = config.message;
      return error;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var btnGroup = document.createElement('div');
      btnGroup.classList.add('btn-group');
      return btnGroup;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var button = document.createElement('button');
      button.classList.add('btn');
      button.setAttribute('type', 'button');
      button.value = config.value;
      button.textContent = config.textContent;
      return button;
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      var container = document.createElement('div');
      container.classList.add('form-group');
      return container;
    }
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      var fieldset = document.createElement('fieldset');
      fieldset.classList.add('card');
      fieldset.classList.add('card-body');
      return fieldset;
    }
  }, {
    key: "getCheckboxLabel",
    value: function getCheckboxLabel(config) {
      var label = document.createElement('label');
      label.classList.add('form-check-label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;

      if (config.srOnly) {
        label.classList.add('sr-only');
      }

      return label;
    }
  }, {
    key: "getCheckbox",
    value: function getCheckbox(config) {
      var checkbox = document.createElement('input');
      checkbox.classList.add('form-check-input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', config.id);
      return checkbox;
    }
  }, {
    key: "getRadioContainer",
    value: function getRadioContainer() {
      var checkboxContainer = document.createElement('div');
      checkboxContainer.classList.add('form-check');
      checkboxContainer.classList.add('form-check-inline');
      return checkboxContainer;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var label = document.createElement('label');
      label.classList.add('form-check-label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;

      if (config.srOnly) {
        label.classList.add('sr-only');
      }

      return label;
    }
  }, {
    key: "getRadio",
    value: function getRadio(config) {
      var radio = document.createElement('input');
      radio.classList.add('form-check-input');
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
      textarea.classList.add('form-control');
      return textarea;
    }
  }, {
    key: "getSelect",
    value: function getSelect(config) {
      var select = document.createElement('select');
      select.setAttribute('id', config.id);
      select.classList.add('form-control');
      config.optionValues.forEach(function (value, index) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        option.textContent = config.optionsLabels[index];
        select.appendChild(option);
      });
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
    key: "getInputError",
    value: function getInputError(config) {
      var error = document.createElement('p');
      error.classList.add('jedi-error-message');
      error.classList.add('alert');
      error.classList.add('alert-danger');
      error.textContent = config.message;
      return error;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var btnGroup = document.createElement('div');
      btnGroup.classList.add('btn-group');
      return btnGroup;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var button = document.createElement('button');
      button.classList.add('btn');
      button.classList.add('btn-default');
      button.setAttribute('type', 'button');
      button.value = config.value;
      button.textContent = config.textContent;
      return button;
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      var container = document.createElement('div');
      container.classList.add('form-group');
      return container;
    }
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      var fieldset = document.createElement('fieldset');
      fieldset.classList.add('card');
      fieldset.classList.add('card-body');
      fieldset.classList.add('mb-3');
      return fieldset;
    }
  }, {
    key: "getCheckboxLabel",
    value: function getCheckboxLabel(config) {
      var label = document.createElement('label');
      label.classList.add('form-check-label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;

      if (config.srOnly) {
        label.classList.add('sr-only');
      }

      return label;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var label = document.createElement('label');
      label.classList.add('form-check-label');
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
      var checkboxContainer = document.createElement('div');
      checkboxContainer.classList.add('form-check');
      return checkboxContainer;
    }
  }, {
    key: "getRadioContainer",
    value: function getRadioContainer() {
      var checkboxContainer = document.createElement('div');
      checkboxContainer.classList.add('form-check');
      return checkboxContainer;
    }
  }, {
    key: "getCheckbox",
    value: function getCheckbox(config) {
      var checkbox = document.createElement('input');
      checkbox.classList.add('form-check-input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', config.id);
      return checkbox;
    }
  }, {
    key: "getRadio",
    value: function getRadio(config) {
      var radio = document.createElement('input');
      radio.classList.add('form-check-input');
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
      textarea.classList.add('form-control');
      return textarea;
    }
  }, {
    key: "getSelect",
    value: function getSelect(config) {
      var select = document.createElement('select');
      select.setAttribute('id', config.id);
      select.classList.add('form-control');
      config.optionValues.forEach(function (value, index) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        option.textContent = config.optionsLabels[index];
        select.appendChild(option);
      });
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
      var legend = document.createElement('legend');
      legend.textContent = config.textContent;
      legend.setAttribute('style', 'width: auto;');

      if (config.srOnly) {
        legend.classList.add('visually-hidden-focusable');
      }

      return legend;
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
        _this2.messagesSlot.appendChild(_this2.theme.getInputError({
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
    key: "setContainer",
    value: function setContainer() {
      this.container = this.theme.getFieldset();
      this.container.setAttribute('data-type', 'multiple');
      this.container.appendChild(this.theme.getLegend({
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: true
      }));
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

      if (this.disabled) {
        this.instance.activeEditor.ui.disable();
        this.switcherButtons.forEach(function (button) {
          button.disabled = true;
        });
      } else {
        this.instance.activeEditor.ui.enable();
        this.switcherButtons.forEach(function (button) {
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
      } else if (this.schema.types()) {
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
      }); // appends

      this.container.appendChild(checkboxContainer);
      checkboxContainer.appendChild(this.input);
      checkboxContainer.appendChild(label); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.checked);
      }); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
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

      this.optionValues = ['false', 'true'];
      this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues;
      this.container.appendChild(this.messagesSlot);
      this.radioInputs = []; // legend

      this.container.appendChild(this.theme.getRadioLegend({
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

        _this.container.appendChild(radioContainer);
      }); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
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

      this.container.appendChild(this.theme.getLabel({
        "for": this.instance.path,
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // input

      this.input = this.theme.getSelect({
        optionValues: ['false', 'true'],
        optionsLabels: this.instance.schema.option('enumTitles') || ['false', 'true'],
        id: this.instance.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        var value = _this.input.value === 'true';

        _this.instance.setValue(value);
      }); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
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

      this.setContainer();
      this.container.appendChild(this.activatorsSlot);
      this.container.appendChild(this.actionsSlot);
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.childrenSlot);
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
    key: "setContainer",
    value: function setContainer() {
      this.container = this.theme.getFieldset(); // title

      this.container.appendChild(this.theme.getLegend({
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
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

      this.setContainer();
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.childrenSlot);
      this.container.appendChild(this.actionsSlot); // btn group

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
    key: "setContainer",
    value: function setContainer() {
      this.container = this.theme.getFieldset(); // title

      this.container.appendChild(this.theme.getLegend({
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }
    }
  }, {
    key: "createItemInstance",
    value: function createItemInstance(value) {
      var _this2 = this;

      var schema = this.instance.schema.items() ? this.instance.schema.items() : {
        type: getType(value)
      };
      var itemSchema = new src_schema(schema);
      var itemEditor = this.instance.jedi.createInstance({
        jedi: this.instance.jedi,
        schema: itemSchema,
        path: this.instance.path + '.' + this.instance.children.length,
        parent: this.instance
      });
      var btnGroup = this.theme.getBtnGroup();
      var itemIndex = Number(itemEditor.getKey()); // delete

      var deleteBtn = this.theme.getButton({
        textContent: 'Delete item'
      });
      deleteBtn.addEventListener('click', function () {
        var itemIndex = Number(itemEditor.path.split('.').pop());

        _this2.instance.deleteItem(itemIndex);
      });
      btnGroup.appendChild(deleteBtn); // move up

      if (this.instance.children.length !== 0) {
        var moveUpBtn = this.theme.getButton({
          textContent: 'Move up'
        });
        moveUpBtn.addEventListener('click', function () {
          var toIndex = itemIndex - 1;

          _this2.instance.move(itemIndex, toIndex);
        });
        btnGroup.appendChild(moveUpBtn);
      } // move down


      if (this.instance.getValue().length - 1 !== itemIndex) {
        var moveDownBtn = this.theme.getButton({
          textContent: 'Move down'
        });
        moveDownBtn.addEventListener('click', function () {
          var toIndex = itemIndex + 1;

          _this2.instance.move(itemIndex, toIndex);
        });
        btnGroup.appendChild(moveDownBtn);
      }

      itemEditor.ui.container.appendChild(itemEditor.ui.actionsSlot);
      itemEditor.ui.actionsSlot.appendChild(btnGroup);
      return itemEditor;
    }
  }, {
    key: "move",
    value: function move(fromIndex, toIndex) {
      var value = clone(this.instance.getValue());
      var item = value[fromIndex];
      value.splice(fromIndex, 1);
      value.splice(toIndex, 0, item);
      this.instance.setValue(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this3 = this;

      var value = this.instance.getValue();
      this.instance.children.forEach(function (child) {
        child.destroy();
      });
      this.instance.children = [];
      value.forEach(function (itemValue) {
        var child = _this3.createItemInstance(itemValue);

        child.setValue(itemValue, false);

        _this3.instance.children.push(child);

        var buttons = Array.from(_this3.container.querySelectorAll('button'));

        _this3.instance.children.forEach(function (child) {
          var childButtons = Array.from(child.ui.container.querySelectorAll('button'));
          buttons = buttons.concat(childButtons);
        });

        if (_this3.disabled) {
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
      this.instance.children.forEach(function (child) {
        _this3.childrenSlot.appendChild(child.ui.container);
      });

      if (this.disabled) {
        this.addBtn.setAttribute('disabled', 'disabled');
        this.deleteAllBtn.setAttribute('disabled', 'disabled');
      } else {
        this.addBtn.removeAttribute('disabled');
        this.deleteAllBtn.removeAttribute('disabled');
      }
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
    key: "createItemInstance",
    value: function createItemInstance(value) {
      var schema = this.schema.items() ? this.schema.items() : {
        type: getType(value)
      };
      return this.jedi.createInstance({
        jedi: this.jedi,
        schema: new src_schema(schema),
        path: this.path + '.' + this.children.length,
        parent: this
      });
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
      });

      if (!this.instance.schema.formatIs('hidden')) {
        this.container.appendChild(label);
      } // input
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

      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
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
      this.container.appendChild(this.messagesSlot);
      this.radioInputs = []; // legend

      this.container.appendChild(this.theme.getRadioLegend({
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

        _this.container.appendChild(radioContainer);
      }); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
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
      this.container.appendChild(this.messagesSlot); // label

      this.container.appendChild(this.theme.getLabel({
        "for": this.instance.path,
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // input

      this.input = this.theme.getSelect({
        optionValues: this.optionValues,
        optionsLabels: this.optionsLabels,
        id: this.instance.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
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

      this.container.appendChild(this.theme.getLabel({
        "for": this.instance.path,
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // input

      this.input = this.theme.getInput({
        type: 'number',
        id: this.instance.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
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
      this.container.appendChild(this.messagesSlot);
      this.radioInputs = []; // legend

      this.container.appendChild(this.theme.getRadioLegend({
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

        _this.container.appendChild(radioContainer);
      }); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
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
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.theme.getLabel({
        "for": this.instance.path,
        textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // input

      this.input = this.theme.getSelect({
        optionValues: this.optionValues,
        optionsLabels: this.optionsLabels,
        id: this.instance.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.value);
      }); // description

      if (this.instance.schema.description()) {
        this.container.appendChild(this.theme.getDescription({
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
      if (this.schema.typeIsNumeric() && this.schema["enum"]() && this.schema.formatIs('radio')) {
        this.ui = new number_enum_radio(this);
      } else if (this.schema.typeIsNumeric() && this.schema["enum"]()) {
        this.ui = new number_enum_select(this);
      } else if (this.schema.typeIsNumeric()) {
        this.ui = new editors_number(this);
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
      theme: 'wireframe'
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

      if (config.schema.anyOf() || config.schema.oneOf() || config.schema.typeIs('any') || config.schema.types() || !config.schema.type()) {
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
      this.container.innerHTML = '';
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
      this.container.innerHTML = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXF1YWwiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsInZhbHVlIiwiaXNTZXQiLCJub3RTZXQiLCJpc051bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiaXNPYmplY3QiLCJnZXRUeXBlIiwidHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsInNvdXJjZXMiLCJsZW5ndGgiLCJzb3VyY2UiLCJzaGlmdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYXNzaWduIiwiU2NoZW1hIiwic2NoZW1hIiwiYWxsT2YiLCJhbnlPZiIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsIml0ZW1zIiwibWF4aW11bSIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90Iiwib3B0aW9uIiwib3B0aW9ucyIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZXF1aXJlZCIsIlNldCIsInRoZW4iLCJ0aXRsZSIsInR5cGVJcyIsIm9uZU9mIiwidW5pcXVlSXRlbXMiLCJfYWxsT2YiLCJ2YWxpZGF0b3IiLCJwYXRoIiwiZXJyb3JzIiwiYWxsT2ZFcnJvcnMiLCJ2YWxpZGF0ZSIsIl9taW5MZW5ndGgiLCJpbnZhbGlkIiwiZmllbGQiLCJwdXNoIiwibWVzc2FnZSIsIl9jb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiX2FueU9mIiwidmFsaWQiLCJzb21lIiwiYW55T2ZFcnJvcnMiLCJfZGVwZW5kZW50UmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImZpbHRlciIsInByb3BlcnR5IiwiaGFzT3duIiwiam9pbiIsIl9lbnVtIiwiZSIsIl9leGNsdXNpdmVNYXhpbXVtIiwiY29tcHV0ZWRNYXhpbXVtIiwiX2V4Y2x1c2l2ZU1pbmltdW0iLCJjb21wdXRlZE1pbmltdW0iLCJfZm9ybWF0IiwiZm9ybWF0SXMiLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0IiwiX2lmIiwiaWZFZGl0b3IiLCJKZWRpIiwic3RhcnRWYWx1ZSIsImlmRXJyb3JzIiwidGhlbkVkaXRvciIsImRlc3Ryb3kiLCJlbHNlRWRpdG9yIiwiX21heEl0ZW1zIiwiX21heExlbmd0aCIsIl9tYXhQcm9wZXJ0aWVzIiwicHJvcGVydGllc0NvdW50IiwiX21pbmltdW0iLCJfbWluSXRlbXMiLCJfbWluUHJvcGVydGllcyIsIl9tdWx0aXBsZU9mIiwiaXNNdWx0aXBsZU9mIiwiX25vdCIsIm5vdEVycm9ycyIsIl9vbmVPZiIsImNvdW50ZXIiLCJvbmVPZkVycm9ycyIsIl9wYXR0ZXJuIiwiX3BhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yIiwiX3JlcXVpcmVkIiwiaW5jbHVkZXMiLCJfdHlwZSIsInR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiaW50ZWdlciIsImFycmF5Iiwib2JqZWN0IiwiX21heGltdW0iLCJfdW5pcXVlSXRlbXMiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsIml0ZW0iLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInZhbGlkYXRvckVycm9ycyIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJkZWZzIiwidHJhdmVyc2UiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVmUGFydHMiLCJzcGxpdCIsImRlZk5hbWUiLCJwb3AiLCJpbmRleCIsImRlZmluZSIsIkV2ZW50RW1pdHRlciIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJjb25maWciLCJqZWRpIiwidW5kZWZpbmVkIiwiaXNBY3RpdmUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInVpIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwicHJlcGFyZSIsImlzRWRpdG9yIiwic2V0VUkiLCJvbiIsIm9uQ2hpbGRDaGFuZ2UiLCJ1bnJlZ2lzdGVyIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsInNhbml0aXplIiwiZW1pdCIsImdldFZhbHVlIiwiZ2V0S2V5IiwiY2hpbGQiLCJUaGVtZUJhcmVib25lcyIsImVycm9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJzbG90IiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiY29udGFpbmVyIiwibWVzc2FnZXNTbG90IiwibGFiZWwiLCJzck9ubHkiLCJsZWdlbmQiLCJpbnB1dCIsImlkIiwiY2hlY2tib3giLCJyYWRpbyIsInRleHRhcmVhIiwic2VsZWN0Iiwib3B0aW9uVmFsdWVzIiwib3B0aW9uc0xhYmVscyIsImFwcGVuZENoaWxkIiwiVGhlbWVXaXJlZnJhbWUiLCJidG5Hcm91cCIsImZpZWxkc2V0IiwiY2hlY2tib3hDb250YWluZXIiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJFZGl0b3IiLCJpbnN0YW5jZSIsInRoZW1lIiwiYWN0aXZhdG9yc1Nsb3QiLCJhY3Rpb25zU2xvdCIsImNoaWxkcmVuU2xvdCIsImRpc2FibGVkIiwiYnVpbGQiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwicmVmcmVzaFVJIiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwiZ2V0Q29udGFpbmVyIiwiZ2V0QWN0aXZhdG9yc1Nsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldENoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsImdldElucHV0RXJyb3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJNdWx0aXBsZUVkaXRvciIsInN3aXRjaGVyQnV0dG9ucyIsInN3aXRjaGVyIiwiZ2V0QnRuR3JvdXAiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsImdldEJ1dHRvbiIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJOdW1iZXIiLCJzd2l0Y2hFZGl0b3IiLCJnZXRGaWVsZHNldCIsImdldExlZ2VuZCIsIm9sZEVkaXRvciIsImVkaXRvcnMiLCJsYXN0SW5kZXgiLCJhY3RpdmVFZGl0b3IiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJyZW1vdmUiLCJNdWx0aXBsZUluc3RhbmNlIiwic2NoZW1hcyIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJzY2hlbWFDbG9uZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJjcmVhdGVJbnN0YW5jZSIsIm5ld0luZGV4Iiwic2V0VmFsdWUiLCJtYXRjaEVkaXRvciIsIkJvb2xlYW5FZGl0b3IiLCJnZXRDaGVja2JveENvbnRhaW5lciIsImdldENoZWNrYm94TGFiZWwiLCJnZXRDaGVja2JveCIsImNoZWNrZWQiLCJnZXREZXNjcmlwdGlvbiIsIkJvb2xlYW4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwicmFkaW9JbnB1dHMiLCJnZXRSYWRpb0xlZ2VuZCIsInJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW9Db250YWluZXIiLCJnZXRSYWRpbyIsInJhZGlvVmFsdWUiLCJnZXRMYWJlbCIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiZ2V0U2VsZWN0IiwiQm9vbGVhbkluc3RhbmNlIiwiT2JqZWN0RWRpdG9yIiwic2V0Q29udGFpbmVyIiwiYWRkUHJvcGVydHlJbnB1dCIsImdldElucHV0IiwiYWRkUHJvcGVydHlCdG4iLCJjcmVhdGVDaGlsZCIsImVkaXRhYmxlUHJvcGVydGllcyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJhY3RpdmF0b3JJZCIsImFjdGl2YXRvckNvbnRhaW5lciIsImFjdGl2YXRvckxhYmVsIiwiYWN0aXZhdG9ySW5wdXQiLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImdldENoaWxkIiwicmVmcmVzaEFjdGl2YXRvcnMiLCJyZWZyZXNoRWRpdG9ycyIsIk9iamVjdEluc3RhbmNlIiwib25TZXRWYWx1ZSIsInNwbGljZSIsImZpbmQiLCJoYXNQcm9wZXJ0eSIsImRlbGV0ZUNoaWxkIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJBcnJheUVkaXRvciIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwiaXRlbVNjaGVtYSIsIml0ZW1FZGl0b3IiLCJpdGVtSW5kZXgiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsImZyb21JbmRleCIsIml0ZW1WYWx1ZSIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsImJ1dHRvbnMiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImNoaWxkQnV0dG9ucyIsImNvbmNhdCIsIkFycmF5SW5zdGFuY2UiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0luc3RhbmNlIiwiU3RyaW5nIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckluc3RhbmNlIiwidHlwZUlzTnVtZXJpYyIsIk51bGxFZGl0b3IiLCJOdWxsSW5zdGFuY2UiLCJzaG93UmVxdWlyZWRPbmx5IiwiaW5zdGFuY2VzIiwicm9vdCIsInJlZlBhcnNlciIsImRlcmVmZXJlbmNlIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJoaWRkZW5JbnB1dCIsIm9yaWdpbmFsU2NoZW1hIiwibmV3U2NoZW1hIiwicmVzb2x2ZSIsImFyZ3VtZW50cyIsInJlc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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QUwsQ0FBVWhNLEVBQVYsQ0FBYXFGLE1BQWI7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG9CQUFZO01BQUE7O01BQ1YsSUFBSTFMLE1BQU0sR0FBRyxFQUFiO01BRUF4QyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLMlUsU0FBakIsRUFBNEIxVSxPQUE1QixDQUFvQyxVQUFDQyxHQUFELEVBQVM7UUFDM0MsSUFBTThGLE1BQU0sR0FBRyxNQUFJLENBQUMyTyxTQUFMLENBQWV6VSxHQUFmLENBQWY7UUFDQXFDLE1BQU0seUNBQU9BLE1BQVAsK0JBQWtCeUQsTUFBTSxDQUFDdkQsUUFBUCxFQUFsQixFQUFOO01BQ0QsQ0FIRDtNQUtBLE9BQU9GLE1BQVA7SUFDRDs7O1dBRUQsaUJBQVM7TUFDUCxLQUFLZCxPQUFMLENBQWFpRCxVQUFiLEdBQTBCLEtBQUtnRixRQUFMLEVBQTFCO01BQ0EsS0FBS2EsU0FBTCxDQUFlcUMsU0FBZixHQUEyQixFQUEzQjtNQUNBLEtBQUtnSSxJQUFMLENBQVUvUCxPQUFWO01BQ0EsS0FBS2dFLElBQUw7SUFDRDs7O1dBRUQsa0JBQVVnRCxLQUFWLEVBQWlCO01BQ2YsS0FBS3BLLE9BQUwsQ0FBYW9LLEtBQWIsR0FBcUJBLEtBQXJCO01BQ0EsS0FBS3dKLEtBQUw7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG1CQUFXO01BQUE7O01BQ1QsS0FBS1QsSUFBTCxDQUFVL1AsT0FBVjtNQUVBLEtBQUswRixTQUFMLENBQWVxQyxTQUFmLEdBQTJCLEVBQTNCO01BRUE3TSxNQUFNLENBQUNDLElBQVAsQ0FBWSxJQUFaLEVBQWtCQyxPQUFsQixDQUEwQixVQUFDQyxHQUFELEVBQVM7UUFDakMsT0FBTyxNQUFJLENBQUNBLEdBQUQsQ0FBWDtNQUNELENBRkQ7SUFHRDs7OztFQTdNZ0I4SCxhOztBQWdOSnZELGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgIT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3Qgbm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2ludGVnZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogZmFsc2VcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IGZhbHNlXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0ID8gdGhpcy5zY2hlbWEuY29uc3QgOiBmYWxzZVxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0ID8gdGhpcy5zY2hlbWEuZGVmYXVsdCA6IGZhbHNlXG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogZmFsc2VcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiBmYWxzZVxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpID8gdGhpcy5zY2hlbWEuZWxzZSA6IGZhbHNlXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybWF0KCkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSA/IHRoaXMuc2NoZW1hLmlmIDogZmFsc2VcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWF4UHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSA/IHRoaXMuc2NoZW1hLm5vdCA6IGZhbHNlXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0eSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogZmFsc2VcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiBmYWxzZVxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IGZhbHNlXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMudHlwZSgpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVzICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiBmYWxzZVxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWFcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX2FsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYWxsT2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWxsT2ZFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWluTGVuZ3RoKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmNvbnN0KCkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdmFsdWU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmFueU9mKCkpIHtcbiAgICBjb25zdCB2YWxpZCA9IHNjaGVtYS5hbnlPZigpLnNvbWUoKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgcmV0dXJuIGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMFxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2RlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiZXhwb3J0IGNvbnN0IF9lbnVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChzY2hlbWEuZW51bSgpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSAtIDEpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSArIDEpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImV4cG9ydCBjb25zdCBfZm9ybWF0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5mb3JtYXQoKSkge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2VcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgIH1cblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmlmKCkpIHtcbiAgICBpZiAoIXNjaGVtYS50aGVuKCkgJiYgIXNjaGVtYS5lbHNlKCkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChzY2hlbWEudGhlbigpKSB7XG4gICAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzY2hlbWEuZWxzZSgpKSB7XG4gICAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS5tYXhJdGVtcygpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5tYXhMZW5ndGgoKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWluaW11bSgpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1pbkl0ZW1zKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWluUHJvcGVydGllcygpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX211bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5tdWx0aXBsZU9mKCkpIHtcbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX25vdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEubm90KCkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEubm90KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX29uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5vbmVPZigpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm4gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuKCkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSB7XG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gcHJvcGVydHlOYW1lXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5yZXF1aXJlZCgpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEudHlwZXMoKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChzY2hlbWEudHlwZSgpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5tYXhpbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfdW5pcXVlSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpIHtcbiAgICBjb25zdCBzZWVuID0ge31cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IF9hbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBfbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgX2FueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IF9kZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IF9leGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBfZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgX21heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IF9tYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IF9tYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX21pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBfbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgX21pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IF9ub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IF9vbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBfcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IF9wYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBfcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgX3R5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBfbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IF91bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgX2FsbE9mLFxuICBfYW55T2YsXG4gIF9jb25zdCxcbiAgX2RlcGVuZGVudFJlcXVpcmVkLFxuICBfZW51bSxcbiAgX2V4Y2x1c2l2ZU1heGltdW0sXG4gIF9leGNsdXNpdmVNaW5pbXVtLFxuICBfZm9ybWF0LFxuICBfaWYsXG4gIF9tYXhpbXVtLFxuICBfbWF4SXRlbXMsXG4gIF9tYXhMZW5ndGgsXG4gIF9tYXhQcm9wZXJ0aWVzLFxuICBfbWluaW11bSxcbiAgX21pbkl0ZW1zLFxuICBfbWluTGVuZ3RoLFxuICBfbWluUHJvcGVydGllcyxcbiAgX211bHRpcGxlT2YsXG4gIF9ub3QsXG4gIF9vbmVPZixcbiAgX3BhdHRlcm4sXG4gIF9wYXR0ZXJuUHJvcGVydGllcyxcbiAgX3JlcXVpcmVkLFxuICBfdHlwZSxcbiAgX3VuaXF1ZUl0ZW1zXG5dXG4iLCJpbXBvcnQgZHJhZnQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMidcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdFxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIHRoaXMuZHJhZnQuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pdGVyYXRpb25zID0gNVxuICAgIHRoaXMuZGVmcyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgdGhpcy5kZWZzID0gc2NoZW1hWyckZGVmcyddXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZGVmcylcbiAgICAgIHRoaXMudHJhdmVyc2Uoc2NoZW1hKVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjLyRkZWZzJykpIHtcbiAgICAgIGNvbnN0IHJlZlBhcnRzID0gcmVmLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGRlZk5hbWUgPSByZWZQYXJ0cy5wb3AoKVxuXG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZzW2RlZk5hbWVdKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZzW2RlZk5hbWVdXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgdHJhdmVyc2UgKHZhbHVlLCB0aGluZywgaW5kZXgpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVbJyRyZWYnXSkgJiYgaXNTZXQodGhpbmcpKSB7XG4gICAgICAgIHRoaW5nW2luZGV4XSA9IHRoaXMuZGVmaW5lKHZhbHVlWyckcmVmJ10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRyYXZlcnNlKHZhbHVlW2luZGV4XSwgdmFsdWUsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShpdGVtLCB2YWx1ZSwgaW5kZXgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZQYXJzZXJcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgJ3Jvb3QnXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J1Mgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QWN0aXZhdG9yc1Nsb3QgKCkge1xuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBzbG90XG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIHNsb3RcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIHNsb3RcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgbWVzc2FnZXNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gbWVzc2FnZXNTbG90XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogYXV0bzsnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRJbnB1dCAoY29uZmlnKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVXaXJlZnJhbWUgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5saW5lJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV2lyZWZyYW1lXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi9ib290c3RyYXA0J1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZUJvb3RzdHJhcDQge1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6IGF1dG87JylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuLWZvY3VzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lV2lyZWZyYW1lIGZyb20gJy4uL3RoZW1lcy93aXJlZnJhbWUnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmFjdGl2YXRvcnNTbG90ID0gbnVsbFxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gbnVsbFxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICd3aXJlZnJhbWUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lV2lyZWZyYW1lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5hY3RpdmF0b3JzU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aXZhdG9yc1Nsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgYnVpbGQgKCkge31cblxuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLnZhbGlkYXRlKClcblxuICAgIHRoaXMubWVzc2FnZXNTbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZXNTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0SW5wdXRFcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIHN3aXRjaGVyIGJ1dHRvbnNcbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIHRoaXMuc3dpdGNoZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gYnV0dG9uXG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHZhbHVlOiBpbmRleFxuICAgICAgfSlcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihidXR0b24udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsICdtdWx0aXBsZScpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0cnVlXG4gICAgfSkpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IG9sZEVkaXRvciA9IHRoaXMuaW5zdGFuY2UuZWRpdG9yc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRFZGl0b3IudWkuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZEVkaXRvci51aS5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuY29udGFpbmVyKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmRpc2FibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmVuYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoKE51bWJlcihidXR0b24udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5pbmRleCkpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCwgZXF1YWwsIGRpZmZlcmVudCwgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcblxuY2xhc3MgTXVsdGlwbGVJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTXVsdGlwbGVFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuZWRpdG9ycyA9IFtdXG4gICAgdGhpcy5hY3RpdmVFZGl0b3IgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIGlmICh0aGlzLnNjaGVtYS5hbnlPZigpIHx8IHRoaXMuc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IHRoaXMuc2NoZW1hLmFueU9mKCkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoc2NoZW1hLmFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS5vcHRpb25zPy5zd2l0Y2hlclRpdGxlIHx8ICdPcHRpb24tJyArIChpbmRleCArIDEpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVzKCkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gRWRpdG9yc1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgZWRpdG9yLnVucmVnaXN0ZXIoKVxuXG4gICAgICBlZGl0b3Iub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5lZGl0b3JzLnB1c2goZWRpdG9yKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5lZGl0b3JzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoMCwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoRWRpdG9yIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVFZGl0b3IgPSB0aGlzLmVkaXRvcnNbdGhpcy5pbmRleF1cbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRWRpdG9yLmdldFZhbHVlKClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUVkaXRvci5zYW5pdGl6ZSh2YWx1ZSlcbiAgfVxuXG4gIG1hdGNoRWRpdG9yICh2YWx1ZSwgZWRpdG9ycykge1xuICAgIGxldCBpbmRleCA9IDBcblxuICAgIGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcbiAgICAgIGlmIChlZGl0b3IuZWRpdG9ycykge1xuICAgICAgICBlZGl0b3Iuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChlcXVhbChlZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSAodmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBlZGl0b3IgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBlZGl0b3IgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUVkaXRvci5zYW5pdGl6ZSh2YWx1ZSksIHZhbHVlKSkge1xuICAgICAgdGhpcy5tYXRjaEVkaXRvcih2YWx1ZSwgdGhpcy5lZGl0b3JzKVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlRWRpdG9yLnNldFZhbHVlKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSlcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuZWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGNoZWNrYm94IGNvbnRhaW5lclxuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3RpdmF0b3JzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZVxuXG4gICAgICAvLyBpZiBub3QgcHJvcGVydHkgbmFtZSB3YXMgZ2l2ZW4gcmV0dXJuXG4gICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gaWYgcHJvcGVydHkgZXhpc3QgcmV0dXJuXG4gICAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZCh7IHR5cGU6ICdhbnknIH0sIGtleSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSkge1xuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUlucHV0KVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hBY3RpdmF0b3JzICgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJykpIHtcbiAgICAgIHdoaWxlICh0aGlzLmFjdGl2YXRvcnNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0b3JzU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmFjdGl2YXRvcnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmF0b3JJZCA9IGNoaWxkLnBhdGggKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JMYWJlbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hMYWJlbCh7XG4gICAgICAgICAgZm9yOiBhY3RpdmF0b3JJZCxcbiAgICAgICAgICB0ZXh0Q29udGVudDogY2hpbGQuc2NoZW1hLnRpdGxlKCkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdG9ySW5wdXQgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgICAgICBpZDogYWN0aXZhdG9ySWRcbiAgICAgICAgfSlcblxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5jaGVja2VkID0gT2JqZWN0Lmhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZhdG9ySW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLmFjdGl2YXRvcnNTbG90LmFwcGVuZENoaWxkKGFjdGl2YXRvckNvbnRhaW5lcilcbiAgICAgICAgYWN0aXZhdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2YXRvcklucHV0KVxuICAgICAgICBhY3RpdmF0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZhdG9yTGFiZWwpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmdldENoaWxkKGtleSlcblxuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQWN0aXZhdG9ycygpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucmVxdWlyZWQoKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGRlcGVuZGVudFJlcXVpcmVkKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGhhc1Byb3BlcnR5IChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpXG5cbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5pbmNsdWRlcyhwcm9wZXJ0eU5hbWUpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGNsb25lIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuXG4gICAgLy8gYnRuIGdyb3VwXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5pdGVtcygpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuICAgIGNvbnN0IGl0ZW1TY2hlbWEgPSBuZXcgU2NoZW1hKHNjaGVtYSlcblxuICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmluc3RhbmNlLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5pbnN0YW5jZS5qZWRpLFxuICAgICAgc2NoZW1hOiBpdGVtU2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5zdGFuY2VcbiAgICB9KVxuXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5nZXRLZXkoKSlcblxuICAgIC8vIGRlbGV0ZVxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgfSlcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgfSlcblxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICAgIC8vIG1vdmUgdXBcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgIH1cblxuICAgIC8vIG1vdmUgZG93blxuICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgIH1cblxuICAgIGl0ZW1FZGl0b3IudWkuY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FZGl0b3IudWkuYWN0aW9uc1Nsb3QpXG4gICAgaXRlbUVkaXRvci51aS5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuID0gW11cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICBjaGlsZC5zZXRWYWx1ZShpdGVtVmFsdWUsIGZhbHNlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuXG4gICAgICBsZXQgYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpXG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRCdXR0b25zID0gQXJyYXkuZnJvbShjaGlsZC51aS5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpXG4gICAgICAgIGJ1dHRvbnMgPSBidXR0b25zLmNvbmNhdChjaGlsZEJ1dHRvbnMpXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBnZXRUeXBlLCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEuaXRlbXMoKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7IHR5cGU6IGdldFR5cGUodmFsdWUpIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9XG5cbiAgICAvLyBpbnB1dFxuICAgIC8vIHRvZG8gZmlsZSwgcmFuZ2Ugc2hvdWxkIGJlIGhhbmRsZWQgZGlmZmVyZW50bHlcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYSh7XG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSA6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnY29sb3InKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgdGhpcy5zY2hlbWEuZW51bSgpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBpc1NldCB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTXVsdGlwbGVJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgQXJyYXlJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBTdHJpbmdJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IE51bGxJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ3dpcmVmcmFtZSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcigpXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5zY2hlbWEuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS5hbnlPZigpIHx8IGNvbmZpZy5zY2hlbWEub25lT2YoKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgY29uZmlnLnNjaGVtYS50eXBlcygpIHx8ICFjb25maWcuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgaWYgKCFjb25maWcuc2NoZW1hLnR5cGUoKSAmJiBjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IGNvbmZpZy5zY2hlbWEuY2xvbmUoKVxuICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShjb25maWcuc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgY29uc3QgbmV3U2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShuZXdTY2hlbWEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBPYmplY3RJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdW1iZXJJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc2V0VGhlbWUgKHRoZW1lKSB7XG4gICAgdGhpcy5vcHRpb25zLnRoZW1lID0gdGhlbWVcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdTIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9