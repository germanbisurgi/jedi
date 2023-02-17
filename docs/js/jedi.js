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



var patternProperties_patternProperties = function _patternProperties(validator, value, schema, path) {
  var errors = [];

  if (utils_isObject(value) && isSet(schema.patternProperties())) {
    var patternProperties = schema.patternProperties();
    Object.keys(value).forEach(function (propertyName) {
      Object.keys(patternProperties).forEach(function (pattern) {
        var regexp = new RegExp(pattern);

        if (regexp.test(propertyName)) {
          var _schema = patternProperties[pattern];
          var editor = new src({
            schema: _schema,
            startValue: value[propertyName]
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
    key: "getDropdown",
    value: function getDropdown() {
      var html = document.createElement('li');
      html.classList.add('dropdown');
      return html;
    }
  }, {
    key: "getDropdownToggle",
    value: function getDropdownToggle() {
      var html = document.createElement('a');
      html.textContent = 'Properties';
      html.setAttribute('data-toggle', 'dropdown');
      html.classList.add('dropdown-toggle');
      html.classList.add('jedi-dropdown-properties');
      return html;
    }
  }, {
    key: "getDropdownMenu",
    value: function getDropdownMenu() {
      var html = document.createElement('ul');
      html.classList.add('dropdown-menu');
      return html;
    }
  }, {
    key: "getToolbarSlot",
    value: function getToolbarSlot() {
      var html = document.createElement('ul');
      html.classList.add('nav');
      html.classList.add('navbar-nav');
      html.classList.add('jedi-toolbar-slot');
      return html;
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
      this.toolbarSlot = this.theme.getToolbarSlot();
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
          var _schema$options, _schema$options2;

          schema = _objectSpread(_objectSpread({}, cloneSchema), schema); // merge allOf

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
      var value = this.value; // if value matches the active instance type set the value. Else switch to the first
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

      this.fieldset = this.theme.getFieldset();
      this.legend = this.theme.getLegend({
        textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });
      this.dropdown = this.theme.getDropdown();
      this.dropdownToggle = this.theme.getDropdownToggle();
      this.dropdownMenu = this.theme.getDropdownMenu();
      this.addPropertyLabel = this.theme.getLabel({
        textContent: 'Property',
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

        _this.instance.createChild(schema, key);

        _this.instance.setValue(_this.instance.value);

        _this.addPropertyInput.value = '';
      });
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.toolbarSlot);
      this.fieldset.appendChild(this.messagesSlot);
      this.fieldset.appendChild(this.actionsSlot);
      this.fieldset.appendChild(this.childrenSlot);
      this.container.appendChild(this.fieldset);

      if (isSet(this.instance.schema.description())) {
        this.fieldset.appendChild(this.description);
      }

      if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
        this.toolbarSlot.appendChild(this.dropdown);
        this.dropdown.appendChild(this.dropdownToggle);
        this.dropdown.appendChild(this.dropdownMenu);
        this.dropdownMenu.appendChild(this.addPropertyLabel);
        this.dropdownMenu.appendChild(this.addPropertyInput);
        this.dropdownMenu.appendChild(this.addPropertyBtn);
        this.dropdownMenu.appendChild(this.activatorsSlot);
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

          activatorInput.checked = hasOwn(_this2.instance.getValue(), child.getKey());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaGFzT3duIiwib2JqIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHJldHR5IiwidmFsdWUiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsIk1hdGgiLCJyb3VuZCIsInNvcnRPYmplY3QiLCJrZXlzIiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImVxdWFsIiwiYSIsImIiLCJpc09iamVjdCIsImRpZmZlcmVudCIsImlzTnVsbCIsImlzU2V0Iiwibm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiZ2V0VHlwZSIsInR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJzb3VyY2VzIiwibGVuZ3RoIiwic291cmNlIiwic2hpZnQiLCJmb3JFYWNoIiwiYXNzaWduIiwiU2NoZW1hIiwic2NoZW1hIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsInVuZGVmaW5lZCIsImFueU9mIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJTZXQiLCJ0aGVuIiwidGl0bGUiLCJ0eXBlSXMiLCJvbmVPZiIsInVuaXF1ZUl0ZW1zIiwiX2FsbE9mIiwidmFsaWRhdG9yIiwicGF0aCIsImVycm9ycyIsInN1YlNjaGVtYUVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwicm9vdE5hbWUiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZGF0ZSIsImRlc3Ryb3kiLCJfbWluTGVuZ3RoIiwicmVwbGFjZSIsImludmFsaWQiLCJwdXNoIiwibWVzc2FnZSIsIl9jb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiX2FueU9mIiwidmFsaWQiLCJhbnlPZkVkaXRvciIsImFueU9mRXJyb3JzIiwiX2RlcGVuZGVudFJlcXVpcmVkIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsImpvaW4iLCJfZW51bSIsInNvbWUiLCJlIiwiX2V4Y2x1c2l2ZU1heGltdW0iLCJfZXhjbHVzaXZlTWluaW11bSIsIl9mb3JtYXQiLCJmb3JtYXRJcyIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJfaWYiLCJpZkVkaXRvciIsImlmRXJyb3JzIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsIl9tYXhJdGVtcyIsIl9tYXhMZW5ndGgiLCJfbWF4UHJvcGVydGllcyIsInByb3BlcnRpZXNDb3VudCIsIl9taW5pbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiX21pbkl0ZW1zIiwiX21pblByb3BlcnRpZXMiLCJfbXVsdGlwbGVPZiIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJfbm90Iiwibm90RXJyb3JzIiwiX29uZU9mIiwiY291bnRlciIsIm9uZU9mRWRpdG9yIiwib25lT2ZFcnJvcnMiLCJfcGF0dGVybiIsIl9wYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnR5TmFtZSIsImVkaXRvciIsImVkaXRvckVycm9ycyIsIm1hcCIsImVycm9yIiwiX3JlcXVpcmVkIiwiX3R5cGUiLCJ0eXBlcyIsInN0cmluZyIsImludGVnZXIiLCJhcnJheSIsIm9iamVjdCIsIl9tYXhpbXVtIiwiY29tcHV0ZWRNYXhpbXVtIiwiX3VuaXF1ZUl0ZW1zIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsImkiLCJpdGVtIiwiX2FkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZGVmaW5lZEluUGF0dGVyblByb3BlcnR5IiwiYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzIiwiVmFsaWRhdG9yIiwiZHJhZnQiLCJzY2hlbWFFcnJvcnMiLCJzY2hlbWFDbG9uZSIsInZhbGlkYXRvckVycm9ycyIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJkZWZzIiwidHJhdmVyc2UiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVmUGFydHMiLCJzcGxpdCIsImRlZk5hbWUiLCJwb3AiLCJpbmRleCIsImRlZmluZSIsIkV2ZW50RW1pdHRlciIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJjb25maWciLCJqZWRpIiwiaXNBY3RpdmUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInVpIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwicHJlcGFyZSIsInNldERlZmF1bHRWYWx1ZSIsImlzRWRpdG9yIiwic2V0VUkiLCJvbiIsIm9uQ2hpbGRDaGFuZ2UiLCJ1bnJlZ2lzdGVyIiwiZGVmYXVsdEVycm9ycyIsImdldEtleSIsInZhbGlkRGVmYXVsdCIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsImVtaXQiLCJnZXRWYWx1ZSIsImNoaWxkIiwiVGhlbWVCYXJlYm9uZXMiLCJhbGVydCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiaW52YWxpZEZlZWRiYWNrIiwiaHRtbCIsInNldEF0dHJpYnV0ZSIsImFjdGl2YXRvcnNTbG90IiwiYWN0aW9uc1Nsb3RzIiwiY2hpbGRyZW5TbG90IiwiYnV0dG9uIiwiY29udGFpbmVyIiwibWVzc2FnZXNTbG90IiwiY29udHJvbFNsb3QiLCJjaGVja2JveExhYmVsIiwic3JPbmx5IiwicmFkaW9MZWdlbmQiLCJyYWRpb0xhYmVsIiwibGFiZWwiLCJsZWdlbmQiLCJpbnB1dCIsImlkIiwiY2hlY2tib3giLCJyYWRpbyIsInRleHRhcmVhIiwic2VsZWN0Iiwib3B0aW9uVmFsdWVzIiwib3B0aW9uc0xhYmVscyIsImFwcGVuZENoaWxkIiwiVGhlbWVXaXJlZnJhbWUiLCJidG5Hcm91cCIsImZpZWxkc2V0IiwicmFkaW9Db250YWluZXIiLCJUaGVtZUJvb3RzdHJhcDQiLCJjaGVja2JveENvbnRhaW5lciIsIlRoZW1lQm9vdHN0cmFwNSIsIkVkaXRvciIsImluc3RhbmNlIiwidGhlbWUiLCJhY3Rpb25zU2xvdCIsImRpc2FibGVkIiwiYnVpbGQiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwicmVmcmVzaFVJIiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwiZ2V0Q29udGFpbmVyIiwidG9vbGJhclNsb3QiLCJnZXRUb29sYmFyU2xvdCIsImdldEFjdGl2YXRvcnNTbG90IiwiZ2V0Q29udHJvbFNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldENoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsImdldEludmFsaWRGZWVkYmFjayIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk11bHRpcGxlRWRpdG9yIiwic3dpdGNoZXJCdXR0b25zIiwic3dpdGNoZXIiLCJnZXRCdG5Hcm91cCIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwiZ2V0QnV0dG9uIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk51bWJlciIsInN3aXRjaEluc3RhbmNlIiwib2xkSW5zdGFuY2UiLCJpbnN0YW5jZXMiLCJsYXN0SW5kZXgiLCJhY3RpdmVJbnN0YW5jZSIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzYWJsZSIsImVuYWJsZSIsImdldEJ1dHRvbkFjdGl2ZUNsYXNzIiwicmVtb3ZlIiwiZ2V0QWxlcnQiLCJNdWx0aXBsZUluc3RhbmNlIiwic2NoZW1hcyIsIm9uU2V0VmFsdWUiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIm1lcmdlQWxsT2YiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJjcmVhdGVJbnN0YW5jZSIsIm5ld0luZGV4IiwiZml0dGVzdEluZGV4IiwiY2hhbXBpb25FcnJvcnMiLCJpbnN0YW5jZUVycm9ycyIsImdldEZpdHRlc3RJbmRleCIsIkJvb2xlYW5FZGl0b3IiLCJnZXRDaGVja2JveENvbnRhaW5lciIsImdldENoZWNrYm94TGFiZWwiLCJnZXRDaGVja2JveCIsImNoZWNrZWQiLCJnZXREZXNjcmlwdGlvbiIsIkJvb2xlYW4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwicmFkaW9JbnB1dHMiLCJnZXRSYWRpb0xlZ2VuZCIsImdldFJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW8iLCJyYWRpb1ZhbHVlIiwiZ2V0TGFiZWwiLCJCb29sZWFuRW51bVNlbGVjdEVkaXRvciIsImdldFNlbGVjdCIsIkJvb2xlYW5JbnN0YW5jZSIsIk9iamVjdEVkaXRvciIsImdldEZpZWxkc2V0IiwiZ2V0TGVnZW5kIiwiZHJvcGRvd24iLCJnZXREcm9wZG93biIsImRyb3Bkb3duVG9nZ2xlIiwiZ2V0RHJvcGRvd25Ub2dnbGUiLCJkcm9wZG93bk1lbnUiLCJnZXREcm9wZG93bk1lbnUiLCJhZGRQcm9wZXJ0eUxhYmVsIiwiYWRkUHJvcGVydHlJbnB1dCIsImdldElucHV0IiwiYWRkUHJvcGVydHlCdG4iLCJwcm9wZXJ0eU5hbWVFbXB0eSIsInByb3BlcnR5RXhpc3QiLCJjcmVhdGVDaGlsZCIsImVkaXRhYmxlUHJvcGVydGllcyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJhY3RpdmF0b3JJZCIsImFjdGl2YXRvckNvbnRhaW5lciIsImFjdGl2YXRvckxhYmVsIiwiYWN0aXZhdG9ySW5wdXQiLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsInJlZnJlc2hBY3RpdmF0b3JzIiwicmVmcmVzaEVkaXRvcnMiLCJPYmplY3RJbnN0YW5jZSIsInJlZnJlc2hJbnN0YW5jZXMiLCJzcGxpY2UiLCJmaW5kIiwiaGFzUHJvcGVydHkiLCJkZWxldGVDaGlsZCIsImdldENoaWxkIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJBcnJheUVkaXRvciIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwiaXRlbUluZGV4IiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJBcnJheUluc3RhbmNlIiwicmVmcmVzaENoaWxkcmVuIiwiZnJvbUluZGV4IiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsImN1cnJlbnRWYWx1ZSIsIml0ZW1WYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJnZXRUZXh0YXJlYSIsIlN0cmluZyIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJTdHJpbmdJbnN0YW5jZSIsIk51bWJlckVkaXRvciIsInNhbml0aXplIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckluc3RhbmNlIiwidHlwZUlzTnVtZXJpYyIsIk51bGxFZGl0b3IiLCJOdWxsSW5zdGFuY2UiLCJzaG93UmVxdWlyZWRPbmx5Iiwicm9vdCIsInJlZlBhcnNlciIsImRlcmVmZXJlbmNlIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJoaWRkZW5JbnB1dCIsIm9yaWdpbmFsU2NoZW1hIiwiYXJndW1lbnRzIiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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ZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuIiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcblxuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IGhhc093biA9IChvYmosIGtleSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbn1cblxuZXhwb3J0IGNvbnN0IHJvdW5kMmRlY2ltYWxzID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0T2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmVsc2UpKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMuZm9ybWF0KCkpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIGlmIChpc09iamVjdCh0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4odGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLm5vdCkpID8gdGhpcy5zY2hlbWEubm90IDogdW5kZWZpbmVkXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlYWRPbmx5ICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnJlYWRPbmx5KSA/IHRoaXMuc2NoZW1hLnJlYWRPbmx5IDogdW5kZWZpbmVkXG4gIH1cblxuICByZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQpXSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdGhlbiAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudGhlbikpID8gdGhpcy5zY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdHlwZSAoKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHlwZUlzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy50eXBlKCkpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVJc051bWVyaWMgKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVJcygnbnVtYmVyJykgfHwgdGhpcy50eXBlSXMoJ2ludGVnZXInKVxuICB9XG5cbiAgb25lT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLm9uZU9mKSA/IHRoaXMuc2NoZW1hLm9uZU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICB1bmlxdWVJdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS51bmlxdWVJdGVtcykgPyB0aGlzLnNjaGVtYS51bmlxdWVJdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWFcbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IF9hbGxPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKCkpKSB7XG4gICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFueU9mKCkpKSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2YoKVxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGdyZWF0ZXIgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9mb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgaW52YWxpZCA9IGZhbHNlXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgICAgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuaWYoKSkpIHtcbiAgICBpZiAobm90U2V0KHNjaGVtYS50aGVuKCkpICYmIG5vdFNldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWEudGhlbigpKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4TGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX211bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5ub3QoKSkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX29uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5vbmVPZigpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm4oKSkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLicgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9yZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnJlcXVpcmVkKCkpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3R5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB2YWxpZCA9IHNjaGVtYS50eXBlKCkuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF91bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEudW5pcXVlSXRlbXMoKSkpIHtcbiAgICBjb25zdCBzZWVuID0ge31cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYS5wcm9wZXJ0aWVzKCkpID8gc2NoZW1hLnByb3BlcnRpZXMoKSA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogYFByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSBkb2VzIG5vdCBhbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXMuYCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcm9vdE5hbWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgX2FsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IF9taW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBfYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2RlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IF9mb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBfbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgX21heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgX21heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IF9taW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBfbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IF9tdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgX25vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgX29uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IF9wYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgX3BhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IF9yZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyBfdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IF9tYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgX3VuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IF9hZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBfYWxsT2YsXG4gIF9hbnlPZixcbiAgX2NvbnN0LFxuICBfZGVwZW5kZW50UmVxdWlyZWQsXG4gIF9lbnVtLFxuICBfZXhjbHVzaXZlTWF4aW11bSxcbiAgX2V4Y2x1c2l2ZU1pbmltdW0sXG4gIF9mb3JtYXQsXG4gIF9pZixcbiAgX21heGltdW0sXG4gIF9tYXhJdGVtcyxcbiAgX21heExlbmd0aCxcbiAgX21heFByb3BlcnRpZXMsXG4gIF9taW5pbXVtLFxuICBfbWluSXRlbXMsXG4gIF9taW5MZW5ndGgsXG4gIF9taW5Qcm9wZXJ0aWVzLFxuICBfbXVsdGlwbGVPZixcbiAgX25vdCxcbiAgX29uZU9mLFxuICBfcGF0dGVybixcbiAgX3BhdHRlcm5Qcm9wZXJ0aWVzLFxuICBfcmVxdWlyZWQsXG4gIF90eXBlLFxuICBfdW5pcXVlSXRlbXNcbl1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnRcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHNjaGVtYS5jbG9uZSgpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA/IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA6ICdpbnZhbGlkJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICB0aGlzLmRyYWZ0LmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IDVcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgdGhpcy50cmF2ZXJzZSh0aGlzLmRlZnMpXG4gICAgICB0aGlzLnRyYXZlcnNlKHNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIy8kZGVmcycpKSB7XG4gICAgICBjb25zdCByZWZQYXJ0cyA9IHJlZi5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZWZOYW1lID0gcmVmUGFydHMucG9wKClcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmc1tkZWZOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmc1tkZWZOYW1lXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIHRyYXZlcnNlICh2YWx1ZSwgdGhpbmcsIGluZGV4KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlWyckcmVmJ10pICYmIGlzU2V0KHRoaW5nKSkge1xuICAgICAgICB0aGluZ1tpbmRleF0gPSB0aGlzLmRlZmluZSh2YWx1ZVsnJHJlZiddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmF2ZXJzZSh2YWx1ZVtpbmRleF0sIHZhbHVlLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoaXRlbSwgdmFsdWUsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkub3B0aW9ucy5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQnUyBzY2hlbWFcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiAhdGhpcy5zY2hlbWEuZW51bSgpLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgICAgIGNvbnN0IHZhbGlkRGVmYXVsdCA9IGRlZmF1bHRFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmICh2YWxpZERlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBkZWFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImNsYXNzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBhbGVydC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaW52YWxpZEZlZWRiYWNrLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXREcm9wZG93biAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RHJvcGRvd25Ub2dnbGUgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gJ1Byb3BlcnRpZXMnXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWRyb3Bkb3duLXByb3BlcnRpZXMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREcm9wZG93bk1lbnUgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1tZW51JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0VG9vbGJhclNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLW5hdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXRvb2xiYXItc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGl2YXRvcnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3RpdmF0b3JzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aXZhdG9yc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBhY3RpdmF0b3JzU2xvdFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGFjdGlvbnNTbG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aW9uc1Nsb3RzLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gYWN0aW9uc1Nsb3RzXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hpbGRyZW5TbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gY2hpbGRyZW5TbG90XG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVzc2FnZXNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIG1lc3NhZ2VzU2xvdFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGNoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICByYWRpb0xlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHJhZGlvTGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiByYWRpb0xlZ2VuZFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICByYWRpb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICByYWRpb0xhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1pbmZvJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHN1cGVyLmdldEZpZWxkc2V0KClcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IHN1cGVyLmdldENoZWNrYm94TGFiZWwoY29uZmlnKVxuICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlubGluZScpXG4gICAgcmV0dXJuIHJhZGlvQ29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpb0xhYmVsID0gc3VwZXIuZ2V0UmFkaW9MYWJlbChjb25maWcpXG4gICAgcmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gcmFkaW9MYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gc3VwZXIuZ2V0UmFkaW8oY29uZmlnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gc3VwZXIuZ2V0VGV4dGFyZWEoY29uZmlnKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IHN1cGVyLmdldFNlbGVjdChjb25maWcpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgYWxlcnQgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gYWxlcnRcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBpbnZhbGlkRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBpbnZhbGlkRmVlZGJhY2tcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gc3VwZXIuZ2V0RmllbGRzZXQoKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncHktMCcpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gc3VwZXIuZ2V0Q2hlY2tib3hMYWJlbChjb25maWcpXG4gICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHN1cGVyLmdldENoZWNrYm94Q29udGFpbmVyKClcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHN1cGVyLmdldFJhZGlvQ29udGFpbmVyKClcbiAgICByYWRpb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gcmFkaW9Db250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHN1cGVyLmdldENoZWNrYm94KGNvbmZpZylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcblxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdteS0zJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuLWZvY3VzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gc3VwZXIuZ2V0TGFiZWwoY29uZmlnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKVxuICAgIHJldHVybiBsYWJlbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lV2lyZWZyYW1lIGZyb20gJy4uL3RoZW1lcy93aXJlZnJhbWUnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5hY3RpdmF0b3JzU2xvdCA9IG51bGxcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gbnVsbFxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gbnVsbFxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ3dpcmVmcmFtZSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVXaXJlZnJhbWUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdiYXJlYm9uZXMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDb250YWluZXIoKVxuICAgIHRoaXMudG9vbGJhclNsb3QgPSB0aGlzLnRoZW1lLmdldFRvb2xiYXJTbG90KClcbiAgICB0aGlzLmFjdGl2YXRvcnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3RpdmF0b3JzU2xvdCgpXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q29udHJvbFNsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udGFpbmVyKVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBpc09iamVjdChzY2hlbWFDbG9uZSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoMCwgZmFsc2UsIHNldFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cblxuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICAgIH1cbiAgfVxuXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh2YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4KVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUluc3RhbmNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNoZWNrYm94IGNvbnRhaW5lclxuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmRyb3Bkb3duID0gdGhpcy50aGVtZS5nZXREcm9wZG93bigpXG4gICAgdGhpcy5kcm9wZG93blRvZ2dsZSA9IHRoaXMudGhlbWUuZ2V0RHJvcGRvd25Ub2dnbGUoKVxuICAgIHRoaXMuZHJvcGRvd25NZW51ID0gdGhpcy50aGVtZS5nZXREcm9wZG93bk1lbnUoKVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnR5JyxcbiAgICAgIGZvcjogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG5cbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50b29sYmFyU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgdGhpcy50b29sYmFyU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duKVxuICAgICAgdGhpcy5kcm9wZG93bi5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duVG9nZ2xlKVxuICAgICAgdGhpcy5kcm9wZG93bi5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duTWVudSlcbiAgICAgIHRoaXMuZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlMYWJlbClcbiAgICAgIHRoaXMuZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlJbnB1dClcbiAgICAgIHRoaXMuZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlCdG4pXG4gICAgICB0aGlzLmRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2YXRvcnNTbG90KVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoQWN0aXZhdG9ycyAoKSB7XG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSkpIHtcbiAgICAgIHdoaWxlICh0aGlzLmFjdGl2YXRvcnNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0b3JzU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmFjdGl2YXRvcnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmF0b3JJZCA9IGNoaWxkLnBhdGggKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JMYWJlbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hMYWJlbCh7XG4gICAgICAgICAgZm9yOiBhY3RpdmF0b3JJZCxcbiAgICAgICAgICB0ZXh0Q29udGVudDogaXNTZXQoY2hpbGQuc2NoZW1hLnRpdGxlKCkpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvcklucHV0ID0gdGhpcy50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICAgICAgaWQ6IGFjdGl2YXRvcklkXG4gICAgICAgIH0pXG5cbiAgICAgICAgYWN0aXZhdG9ySW5wdXQuY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZhdG9ySW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLmFjdGl2YXRvcnNTbG90LmFwcGVuZENoaWxkKGFjdGl2YXRvckNvbnRhaW5lcilcbiAgICAgICAgYWN0aXZhdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2YXRvcklucHV0KVxuICAgICAgICBhY3RpdmF0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZhdG9yTGFiZWwpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQWN0aXZhdG9ycygpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBpc1NldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCgpKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBoYXNQcm9wZXJ0eSAocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVxuXG4gICAgaWYgKG5vdFNldChwcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmluY2x1ZGVzKHByb3BlcnR5TmFtZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5oYXNQcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuXG4gICAgLy8gYnRuIGdyb3VwXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90KVxuXG4gICAgICB3aGlsZSAoY2hpbGQudWkuYWN0aW9uc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBjaGlsZC51aS5hY3Rpb25zU2xvdC5yZW1vdmVDaGlsZChjaGlsZC51aS5hY3Rpb25zU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgIC8vIGRlbGV0ZVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgICAgfSlcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnVpLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGlzU2V0LCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5pdGVtcygpKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7IHR5cGU6IGdldFR5cGUodmFsdWUpIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZHJlbi5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgY2hpbGQuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZFxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdXG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGNoaWxkLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoQ2hpbGRyZW4gKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgLy8gdG9kbyBmaWxlLCByYW5nZSBzaG91bGQgYmUgaGFuZGxlZCBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnY29sb3InKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnd2lyZWZyYW1lJyxcbiAgICAgIHJvb3ROYW1lOiAncm9vdCdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcigpXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5zY2hlbWEuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChjb25maWcuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KGNvbmZpZy5zY2hlbWEub25lT2YoKSkgfHwgY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8IGlzQXJyYXkoY29uZmlnLnNjaGVtYS50eXBlKCkpIHx8IG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIGlmIChub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpICYmIGlzU2V0KGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IGNvbmZpZy5zY2hlbWEuY2xvbmUoKVxuICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShjb25maWcuc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMub3B0aW9ucy5zdGFydFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J1MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9