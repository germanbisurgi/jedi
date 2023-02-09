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
      var subSchemaEditor = new src({
        schema: schema,
        startValue: value,
        rootName: key
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
          return !Object.hasOwn(value, property);
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
    var invalid = false;

    if (schema.formatIs('email')) {
      var regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
      invalid = !regexp.test(value);
    }

    if (invalid) {
      errors.push({
        message: 'Must be a valid email address',
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

    var ifEditor = new src({
      schema: schema["if"](),
      startValue: value
    });
    var ifErrors = ifEditor.validate();
    ifEditor.destroy();
    var thenErrors = [];
    var elseErrors = [];

    if (isSet(schema.then())) {
      var thenEditor = new src({
        schema: schema.then(),
        startValue: value
      });
      thenErrors = thenEditor.validate();
      thenEditor.destroy();
    }

    if (isSet(schema["else"]())) {
      var elseEditor = new src({
        schema: schema["else"](),
        startValue: value
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
      var oneOfEditor = new src({
        schema: schema,
        startValue: value
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
          // if (isSet(schema.allOf)) {
          //   let merged = {}
          //
          //   schema.allOf.forEach((allOfSchema) => {
          //     merged = mergeDeep(merged, allOfSchema)
          //   })
          //
          //   schema = merged
          // }

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

          var instanceErrors = this.jedi.validator.validate(value, instance.schema, instance.getKey(), instance.path);
          var valid = instanceErrors.length === 0;

          if (valid) {
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

      // checkbox container
      var checkboxContainer = this.theme.getCheckboxContainer(); // label

      var label = this.theme.getCheckboxLabel({
        "for": this.instance.path,
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      }); // input

      this.input = this.theme.getCheckbox({
        id: this.instance.path
      }); // events

      this.input.addEventListener('change', function () {
        _this.instance.setValue(_this.input.checked);
      }); // description

      if (isSet(this.instance.schema.description())) {
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
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey()
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

      if (isSet(this.instance.schema.description())) {
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
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
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

      if (isSet(this.instance.schema.description())) {
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
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // description

      if (isSet(this.instance.schema.description())) {
        this.fieldset.appendChild(this.theme.getDescription({
          textContent: this.instance.schema.description()
        }));
      }

      this.fieldset.appendChild(this.messagesSlot);
      this.fieldset.appendChild(this.actionsSlot);
      this.fieldset.appendChild(this.activatorsSlot);
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
            textContent: isSet(child.schema.title()) ? child.schema.title() : child.getKey()
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

      if (notSet(properties)) {
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
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      })); // description

      if (isSet(this.instance.schema.description())) {
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
      var schema = isSet(this.schema.items()) ? this.schema.items() : {
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
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
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

      if (isSet(this.instance.schema.description())) {
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
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey()
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

      if (isSet(this.instance.schema.description())) {
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
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
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

      // label
      var label = this.theme.getLabel({
        "for": this.instance.path,
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
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

      if (isSet(this.instance.schema.description())) {
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
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey()
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

      if (isSet(this.instance.schema.description())) {
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
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
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

      if (isSet(this.instance.schema.description())) {
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
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot); // description

      if (isSet(this.instance.schema.description())) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwicHJldHR5IiwidmFsdWUiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsIk1hdGgiLCJyb3VuZCIsInNvcnRPYmplY3QiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImtleSIsImVxdWFsIiwiYSIsImIiLCJpc09iamVjdCIsImRpZmZlcmVudCIsImlzTnVsbCIsImlzU2V0Iiwibm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiZ2V0VHlwZSIsInR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJzb3VyY2VzIiwibGVuZ3RoIiwic291cmNlIiwic2hpZnQiLCJmb3JFYWNoIiwiYXNzaWduIiwiU2NoZW1hIiwic2NoZW1hIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsInVuZGVmaW5lZCIsImFueU9mIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIl9hbGxPZiIsInZhbGlkYXRvciIsInBhdGgiLCJlcnJvcnMiLCJzdWJTY2hlbWFFZGl0b3IiLCJKZWRpIiwic3RhcnRWYWx1ZSIsInJvb3ROYW1lIiwic3ViU2NoZW1hRXJyb3JzIiwidmFsaWRhdGUiLCJkZXN0cm95IiwiX21pbkxlbmd0aCIsInJlcGxhY2UiLCJpbnZhbGlkIiwicHVzaCIsIm1lc3NhZ2UiLCJfY29uc3QiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsIl9hbnlPZiIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsIl9kZXBlbmRlbnRSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyIiwicHJvcGVydHkiLCJoYXNPd24iLCJqb2luIiwiX2VudW0iLCJzb21lIiwiZSIsIl9leGNsdXNpdmVNYXhpbXVtIiwiX2V4Y2x1c2l2ZU1pbmltdW0iLCJfZm9ybWF0IiwiZm9ybWF0SXMiLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0IiwiX2lmIiwiaWZFZGl0b3IiLCJpZkVycm9ycyIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJfbWF4SXRlbXMiLCJfbWF4TGVuZ3RoIiwiX21heFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzQ291bnQiLCJfbWluaW11bSIsImNvbXB1dGVkTWluaW11bSIsIl9taW5JdGVtcyIsIl9taW5Qcm9wZXJ0aWVzIiwiX211bHRpcGxlT2YiLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwiX25vdCIsIm5vdEVycm9ycyIsIl9vbmVPZiIsImNvdW50ZXIiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwiX3BhdHRlcm4iLCJfcGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3IiLCJfcmVxdWlyZWQiLCJfdHlwZSIsInR5cGVzIiwic3RyaW5nIiwiaW50ZWdlciIsImFycmF5Iiwib2JqZWN0IiwiX21heGltdW0iLCJjb21wdXRlZE1heGltdW0iLCJfdW5pcXVlSXRlbXMiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsIml0ZW0iLCJfYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJtYXAiLCJlcnJvciIsIlZhbGlkYXRvciIsImRyYWZ0Iiwic2NoZW1hRXJyb3JzIiwic2NoZW1hQ2xvbmUiLCJ2YWxpZGF0b3JFcnJvcnMiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiZGVmcyIsInRyYXZlcnNlIiwicmVmIiwic3RhcnRzV2l0aCIsInJlZlBhcnRzIiwic3BsaXQiLCJkZWZOYW1lIiwicG9wIiwiaW5kZXgiLCJkZWZpbmUiLCJFdmVudEVtaXR0ZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJsaXN0ZW5lciIsIkluc3RhbmNlIiwiY29uZmlnIiwiamVkaSIsImlzQWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInByZXBhcmUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInNldFVJIiwib24iLCJvbkNoaWxkQ2hhbmdlIiwidW5yZWdpc3RlciIsImRlZmF1bHRFcnJvcnMiLCJnZXRLZXkiLCJ2YWxpZERlZmF1bHQiLCJzZXRWYWx1ZSIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJlbWl0IiwiZ2V0VmFsdWUiLCJjaGlsZCIsIlRoZW1lQmFyZWJvbmVzIiwiYWxlcnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImludmFsaWRGZWVkYmFjayIsImFjdGl2YXRvcnNTbG90IiwiYWN0aW9uc1Nsb3RzIiwiY2hpbGRyZW5TbG90IiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiY29udGFpbmVyIiwibWVzc2FnZXNTbG90IiwiY29udHJvbFNsb3QiLCJjaGVja2JveExhYmVsIiwic3JPbmx5IiwicmFkaW9MZWdlbmQiLCJyYWRpb0xhYmVsIiwibGFiZWwiLCJsZWdlbmQiLCJpbnB1dCIsImlkIiwiY2hlY2tib3giLCJyYWRpbyIsInRleHRhcmVhIiwic2VsZWN0Iiwib3B0aW9uVmFsdWVzIiwib3B0aW9uc0xhYmVscyIsImFwcGVuZENoaWxkIiwiVGhlbWVXaXJlZnJhbWUiLCJidG5Hcm91cCIsImZpZWxkc2V0IiwicmFkaW9Db250YWluZXIiLCJUaGVtZUJvb3RzdHJhcDQiLCJjaGVja2JveENvbnRhaW5lciIsIlRoZW1lQm9vdHN0cmFwNSIsIkVkaXRvciIsImluc3RhbmNlIiwidGhlbWUiLCJhY3Rpb25zU2xvdCIsImRpc2FibGVkIiwiYnVpbGQiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwicmVmcmVzaFVJIiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwiZ2V0Q29udGFpbmVyIiwiZ2V0QWN0aXZhdG9yc1Nsb3QiLCJnZXRDb250cm9sU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsImdldEFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwiaW5uZXJIVE1MIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiTXVsdGlwbGVFZGl0b3IiLCJzd2l0Y2hlckJ1dHRvbnMiLCJzd2l0Y2hlciIsImdldEJ0bkdyb3VwIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJnZXRCdXR0b24iLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiTnVtYmVyIiwic3dpdGNoSW5zdGFuY2UiLCJvbGRJbnN0YW5jZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsImFjdGl2ZUluc3RhbmNlIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJyZW1vdmUiLCJnZXRBbGVydCIsIk11bHRpcGxlSW5zdGFuY2UiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImNyZWF0ZUluc3RhbmNlIiwibmV3SW5kZXgiLCJpbnN0YW5jZUVycm9ycyIsIm1hdGNoSW5zdGFuY2UiLCJCb29sZWFuRWRpdG9yIiwiZ2V0Q2hlY2tib3hDb250YWluZXIiLCJnZXRDaGVja2JveExhYmVsIiwiZ2V0Q2hlY2tib3giLCJjaGVja2VkIiwiZ2V0RGVzY3JpcHRpb24iLCJCb29sZWFuIiwicmVtb3ZlQXR0cmlidXRlIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsInJhZGlvSW5wdXRzIiwiZ2V0UmFkaW9MZWdlbmQiLCJnZXRSYWRpb0NvbnRhaW5lciIsImdldFJhZGlvIiwicmFkaW9WYWx1ZSIsImdldExhYmVsIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3QiLCJCb29sZWFuSW5zdGFuY2UiLCJPYmplY3RFZGl0b3IiLCJnZXRGaWVsZHNldCIsImdldExlZ2VuZCIsImFkZFByb3BlcnR5SW5wdXQiLCJnZXRJbnB1dCIsImFkZFByb3BlcnR5QnRuIiwiY3JlYXRlQ2hpbGQiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiYWN0aXZhdG9ySWQiLCJhY3RpdmF0b3JDb250YWluZXIiLCJhY3RpdmF0b3JMYWJlbCIsImFjdGl2YXRvcklucHV0IiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJyZWZyZXNoQWN0aXZhdG9ycyIsInJlZnJlc2hFZGl0b3JzIiwiT2JqZWN0SW5zdGFuY2UiLCJyZWZyZXNoSW5zdGFuY2VzIiwic3BsaWNlIiwiZmluZCIsImhhc1Byb3BlcnR5IiwiZGVsZXRlQ2hpbGQiLCJnZXRDaGlsZCIsIm9sZFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiQXJyYXlFZGl0b3IiLCJhZGRCdG4iLCJhZGRJdGVtIiwiZGVsZXRlQWxsQnRuIiwiY29uZmlybSIsIml0ZW1JbmRleCIsImRlbGV0ZUJ0biIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiQXJyYXlJbnN0YW5jZSIsInJlZnJlc2hDaGlsZHJlbiIsImZyb21JbmRleCIsInRlbXBFZGl0b3IiLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJjdXJyZW50VmFsdWUiLCJpdGVtVmFsdWUiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWEiLCJTdHJpbmciLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiU3RyaW5nSW5zdGFuY2UiLCJOdW1iZXJFZGl0b3IiLCJzYW5pdGl6ZSIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJOdWxsRWRpdG9yIiwiTnVsbEluc3RhbmNlIiwic2hvd1JlcXVpcmVkT25seSIsInJvb3QiLCJyZWZQYXJzZXIiLCJkZXJlZmVyZW5jZSIsImFwcGVuZEhpZGRlbklucHV0IiwiaGlkZGVuSW5wdXQiLCJvcmlnaW5hbFNjaGVtYSIsImFyZ3VtZW50cyIsInJlc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQTtB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U0FBTCxDQUFldlEsR0FBZixDQUFmO1FBQ0ErRCxNQUFNLHlDQUFPQSxNQUFQLCtCQUFrQmdFLE1BQU0sQ0FBQzFELFFBQVAsRUFBbEIsRUFBTjtNQUNELENBSEQ7TUFLQSxPQUFPTixNQUFQO0lBQ0Q7OztXQUVELGlCQUFTO01BQ1AsS0FBS2QsT0FBTCxDQUFhaUIsVUFBYixHQUEwQixLQUFLOEgsUUFBTCxFQUExQjs7TUFDQSxJQUFJLEtBQUsvSSxPQUFMLENBQWFtSSxRQUFqQixFQUEyQjtRQUN6QixLQUFLMkIsU0FBTCxDQUFleUMsU0FBZixHQUEyQixFQUEzQjtNQUNEOztNQUNELEtBQUt5SCxJQUFMLENBQVUzUyxPQUFWO01BQ0EsS0FBS3lHLElBQUw7SUFDRDs7O1dBRUQsa0JBQVUyRCxLQUFWLEVBQWlCO01BQ2YsS0FBS3pMLE9BQUwsQ0FBYXlMLEtBQWIsR0FBcUJBLEtBQXJCO01BQ0EsS0FBSzhJLEtBQUw7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG1CQUFXO01BQUE7O01BQ1QsS0FBS1AsSUFBTCxDQUFVM1MsT0FBVjs7TUFFQSxJQUFJLEtBQUtyQixPQUFMLENBQWFtSSxRQUFqQixFQUEyQjtRQUN6QixLQUFLMkIsU0FBTCxDQUFleUMsU0FBZixHQUEyQixFQUEzQjtNQUNEOztNQUVEN1AsTUFBTSxDQUFDQyxJQUFQLENBQVksSUFBWixFQUFrQjRCLE9BQWxCLENBQTBCLFVBQUN4QixHQUFELEVBQVM7UUFDakMsT0FBTyxNQUFJLENBQUNBLEdBQUQsQ0FBWDtNQUNELENBRkQ7SUFHRDs7OztFQWxOZ0JtSyxhOztBQXFOSmxHLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbn1cblxuZXhwb3J0IGNvbnN0IHJvdW5kMmRlY2ltYWxzID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0T2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmVsc2UpKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMuZm9ybWF0KCkpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIGlmIChpc09iamVjdCh0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4odGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLm5vdCkpID8gdGhpcy5zY2hlbWEubm90IDogdW5kZWZpbmVkXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS50aGVuKSkgPyB0aGlzLnNjaGVtYS50aGVuIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLnR5cGUoKSkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX2FsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYWxsT2YoKSkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5IH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5MZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5MZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2NvbnN0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuY29uc3QoKSkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IGRpZmZlcmVudCh2YWx1ZSwgc2NoZW1hLmNvbnN0KCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9hbnlPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYW55T2YoKSkpIHtcbiAgICBjb25zdCBhbnlPZiA9IHNjaGVtYS5hbnlPZigpXG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9lbnVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuZW51bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZXhjbHVzaXZlTWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZXhjbHVzaXZlTWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDw9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZm9ybWF0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5mb3JtYXQoKSkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IGludmFsaWQgPSBmYWxzZVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcbmltcG9ydCB7IGlzU2V0LCBub3RTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9pZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmlmKCkpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWEudGhlbigpKSAmJiBub3RTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLnRoZW4oKSkpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIHRoZW5FcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4SXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heExlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heExlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5JdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluSXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tdWx0aXBsZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubXVsdGlwbGVPZigpKSkge1xuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YgfHwgdmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX25vdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEubm90KCkpKSB7XG4gICAgY29uc3Qgbm90RXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEubm90KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IF9vbmVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEub25lT2YoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm4gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuKCkpKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IF9wYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGlmIChpc09iamVjdChzY2hlbWEpKSB7XG4gICAgICAgICAgICBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3JlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucmVxdWlyZWQoKSkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWEudHlwZSgpKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHZhbGlkID0gc2NoZW1hLnR5cGUoKS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3VuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS51bmlxdWVJdGVtcygpKSkge1xuICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYS5wcm9wZXJ0aWVzKCkpID8gc2NoZW1hLnByb3BlcnRpZXMoKSA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBpZiAoYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFPYmplY3QuaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIU9iamVjdC5oYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcm9vdE5hbWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgX2FsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IF9taW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBfYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2RlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IF9mb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBfbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgX21heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgX21heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IF9taW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBfbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IF9tdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgX25vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgX29uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IF9wYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgX3BhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IF9yZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyBfdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IF9tYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgX3VuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IF9hZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBfYWxsT2YsXG4gIF9hbnlPZixcbiAgX2NvbnN0LFxuICBfZGVwZW5kZW50UmVxdWlyZWQsXG4gIF9lbnVtLFxuICBfZXhjbHVzaXZlTWF4aW11bSxcbiAgX2V4Y2x1c2l2ZU1pbmltdW0sXG4gIF9mb3JtYXQsXG4gIF9pZixcbiAgX21heGltdW0sXG4gIF9tYXhJdGVtcyxcbiAgX21heExlbmd0aCxcbiAgX21heFByb3BlcnRpZXMsXG4gIF9taW5pbXVtLFxuICBfbWluSXRlbXMsXG4gIF9taW5MZW5ndGgsXG4gIF9taW5Qcm9wZXJ0aWVzLFxuICBfbXVsdGlwbGVPZixcbiAgX25vdCxcbiAgX29uZU9mLFxuICBfcGF0dGVybixcbiAgX3BhdHRlcm5Qcm9wZXJ0aWVzLFxuICBfcmVxdWlyZWQsXG4gIF90eXBlLFxuICBfdW5pcXVlSXRlbXNcbl1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnRcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHNjaGVtYS5jbG9uZSgpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA/IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA6ICdpbnZhbGlkJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICB0aGlzLmRyYWZ0LmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IDVcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgdGhpcy50cmF2ZXJzZSh0aGlzLmRlZnMpXG4gICAgICB0aGlzLnRyYXZlcnNlKHNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIy8kZGVmcycpKSB7XG4gICAgICBjb25zdCByZWZQYXJ0cyA9IHJlZi5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZWZOYW1lID0gcmVmUGFydHMucG9wKClcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmc1tkZWZOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmc1tkZWZOYW1lXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIHRyYXZlcnNlICh2YWx1ZSwgdGhpbmcsIGluZGV4KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlWyckcmVmJ10pICYmIGlzU2V0KHRoaW5nKSkge1xuICAgICAgICB0aGluZ1tpbmRleF0gPSB0aGlzLmRlZmluZSh2YWx1ZVsnJHJlZiddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmF2ZXJzZSh2YWx1ZVtpbmRleF0sIHZhbHVlLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoaXRlbSwgdmFsdWUsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkub3B0aW9ucy5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQnUyBzY2hlbWFcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiAhdGhpcy5zY2hlbWEuZW51bSgpLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgICAgIGNvbnN0IHZhbGlkRGVmYXVsdCA9IGRlZmF1bHRFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmICh2YWxpZERlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBkZWFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImNsYXNzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBhbGVydC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaW52YWxpZEZlZWRiYWNrLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRBY3RpdmF0b3JzU2xvdCAoKSB7XG4gICAgY29uc3QgYWN0aXZhdG9yc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjdGl2YXRvcnNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gYWN0aXZhdG9yc1Nsb3RcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3Rpb25zU2xvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjdGlvbnNTbG90cy5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGFjdGlvbnNTbG90c1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoaWxkcmVuU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGNoaWxkcmVuU2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBtZXNzYWdlc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lc3NhZ2VzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBtZXNzYWdlc1Nsb3RcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBjaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcmFkaW9MZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICByYWRpb0xlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gcmFkaW9MZWdlbmRcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgcmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogYXV0bzsnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRJbnB1dCAoY29uZmlnKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZVdpcmVmcmFtZSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBzdXBlci5nZXRGaWVsZHNldCgpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBzdXBlci5nZXRDaGVja2JveExhYmVsKGNvbmZpZylcbiAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiByYWRpb0NvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1pbmZvJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV2lyZWZyYW1lXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHN1cGVyLmdldEZpZWxkc2V0KClcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3B5LTAnKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IHN1cGVyLmdldENoZWNrYm94TGFiZWwoY29uZmlnKVxuICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBzdXBlci5nZXRSYWRpb0xhYmVsKGNvbmZpZylcbiAgICByYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiByYWRpb0xhYmVsXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBzdXBlci5nZXRDaGVja2JveENvbnRhaW5lcigpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIHJhZGlvQ29udGFpbmVyXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBzdXBlci5nZXRSYWRpbyhjb25maWcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBzdXBlci5nZXRUZXh0YXJlYShjb25maWcpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gc3VwZXIuZ2V0U2VsZWN0KGNvbmZpZylcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi9ib290c3RyYXA0J1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZUJvb3RzdHJhcDQge1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG5cbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnbXktMycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbi1mb2N1c2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IHN1cGVyLmdldExhYmVsKGNvbmZpZylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJylcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuLi90aGVtZXMvd2lyZWZyYW1lJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi4vdGhlbWVzL2JhcmVib25lcydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IG51bGxcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gbnVsbFxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICd3aXJlZnJhbWUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lV2lyZWZyYW1lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmFjdGl2YXRvcnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3RpdmF0b3JzU2xvdCgpXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q29udHJvbFNsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udGFpbmVyKVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIC8vIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdFxufSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTXVsdGlwbGVJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTXVsdGlwbGVFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQodGhpcy5zY2hlbWEub25lT2YoKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgLy8gaWYgKGlzU2V0KHNjaGVtYS5hbGxPZikpIHtcbiAgICAgICAgLy8gICBsZXQgbWVyZ2VkID0ge31cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgLy8gICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBpc09iamVjdChzY2hlbWFDbG9uZSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoMCwgZmFsc2UsIHNldFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cblxuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICAgIH1cbiAgfVxuXG4gIG1hdGNoSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuICAgICAgY29uc3QgdmFsaWQgPSBpbnN0YW5jZUVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoaW5kZXgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBpbnN0YW5jZSB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGluc3RhbmNlIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB2YWx1ZSkpIHtcbiAgICAgIHRoaXMubWF0Y2hJbnN0YW5jZSh2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjaGVja2JveCBjb250YWluZXJcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5sYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGVxdWFsLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuYWN0aXZhdG9yc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZVxuXG4gICAgICAvLyBpZiBub3QgcHJvcGVydHkgbmFtZSB3YXMgZ2l2ZW4gcmV0dXJuXG4gICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gaWYgcHJvcGVydHkgZXhpc3QgcmV0dXJuXG4gICAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZCh7IHR5cGU6ICdhbnknIH0sIGtleSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5SW5wdXQpXG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hBY3RpdmF0b3JzICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuYWN0aXZhdG9yc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRvcnNTbG90LnJlbW92ZUNoaWxkKHRoaXMuYWN0aXZhdG9yc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2YXRvcklkID0gY2hpbGQucGF0aCArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvckxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgICAgICBmb3I6IGFjdGl2YXRvcklkLFxuICAgICAgICAgIHRleHRDb250ZW50OiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdG9ySW5wdXQgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgICAgICBpZDogYWN0aXZhdG9ySWRcbiAgICAgICAgfSlcblxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5jaGVja2VkID0gT2JqZWN0Lmhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZhdG9ySW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLmFjdGl2YXRvcnNTbG90LmFwcGVuZENoaWxkKGFjdGl2YXRvckNvbnRhaW5lcilcbiAgICAgICAgYWN0aXZhdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2YXRvcklucHV0KVxuICAgICAgICBhY3RpdmF0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZhdG9yTGFiZWwpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQWN0aXZhdG9ycygpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVtrZXldXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gaXNTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQoKSkgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KCcuJykucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGhhc1Byb3BlcnR5IChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpXG5cbiAgICBpZiAobm90U2V0KHByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocHJvcGVydGllcykuaW5jbHVkZXMocHJvcGVydHlOYW1lKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1Byb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIC8vIGRlbGV0ZUFsbFxuICAgIHRoaXMuZGVsZXRlQWxsQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgY2hpbGQudWkuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuYWN0aW9uc1Nsb3QpXG5cbiAgICAgIHdoaWxlIChjaGlsZC51aS5hY3Rpb25zU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNoaWxkLnVpLmFjdGlvbnNTbG90LnJlbW92ZUNoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgLy8gZGVsZXRlXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgICB9KVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICAgIC8vIG1vdmUgdXBcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGRvd25cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgICB9KVxuXG4gICAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIH1cblxuICAgICAgY2hpbGQudWkuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLml0ZW1zKCkpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVySW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGdldFR5cGUsIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcblxuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICd3aXJlZnJhbWUnLFxuICAgICAgcm9vdE5hbWU6ICdyb290J1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBudWxsXG4gICAgdGhpcy5zY2hlbWEgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKClcbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLnNjaGVtYS5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBPYmplY3RJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdW1iZXJJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGNvbmZpZy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5vbmVPZigpKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgaXNBcnJheShjb25maWcuc2NoZW1hLnR5cGUoKSkgfHwgbm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgaWYgKG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkgJiYgaXNTZXQoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2NoZW1hID0gY29uZmlnLnNjaGVtYS5jbG9uZSgpXG4gICAgICAgIG9yaWdpbmFsU2NoZW1hLnR5cGUgPSBnZXRUeXBlKGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHNldFRoZW1lICh0aGVtZSkge1xuICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQnUyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=