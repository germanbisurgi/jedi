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
          var _schema$options, _schema$options2;

          schema = _objectSpread(_objectSpread({}, cloneSchema), schema); // merge allOf

          if (isSet(schema.allOf) && (_schema$options = schema.options) !== null && _schema$options !== void 0 && _schema$options.mergeAllOf) {
            var merged = {};
            schema.allOf.forEach(function (allOfSchema) {
              merged = utils_mergeDeep(merged, allOfSchema);
            });
            schema = merged;
            console.log(JSON.stringify(schema, null, 2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvd2lyZWZyYW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaGFzT3duIiwib2JqIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHJldHR5IiwidmFsdWUiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsIk1hdGgiLCJyb3VuZCIsInNvcnRPYmplY3QiLCJrZXlzIiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImVxdWFsIiwiYSIsImIiLCJpc09iamVjdCIsImRpZmZlcmVudCIsImlzTnVsbCIsImlzU2V0Iiwibm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiZ2V0VHlwZSIsInR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJzb3VyY2VzIiwibGVuZ3RoIiwic291cmNlIiwic2hpZnQiLCJmb3JFYWNoIiwiYXNzaWduIiwiU2NoZW1hIiwic2NoZW1hIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbGxPZiIsInVuZGVmaW5lZCIsImFueU9mIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJvcHRpb25zIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJTZXQiLCJ0aGVuIiwidGl0bGUiLCJ0eXBlSXMiLCJvbmVPZiIsInVuaXF1ZUl0ZW1zIiwiX2FsbE9mIiwidmFsaWRhdG9yIiwicGF0aCIsImVycm9ycyIsInN1YlNjaGVtYUVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwicm9vdE5hbWUiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZGF0ZSIsImRlc3Ryb3kiLCJfbWluTGVuZ3RoIiwicmVwbGFjZSIsImludmFsaWQiLCJwdXNoIiwibWVzc2FnZSIsIl9jb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiX2FueU9mIiwidmFsaWQiLCJhbnlPZkVkaXRvciIsImFueU9mRXJyb3JzIiwiX2RlcGVuZGVudFJlcXVpcmVkIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsImpvaW4iLCJfZW51bSIsInNvbWUiLCJlIiwiX2V4Y2x1c2l2ZU1heGltdW0iLCJfZXhjbHVzaXZlTWluaW11bSIsIl9mb3JtYXQiLCJmb3JtYXRJcyIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJfaWYiLCJpZkVkaXRvciIsImlmRXJyb3JzIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsIl9tYXhJdGVtcyIsIl9tYXhMZW5ndGgiLCJfbWF4UHJvcGVydGllcyIsInByb3BlcnRpZXNDb3VudCIsIl9taW5pbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiX21pbkl0ZW1zIiwiX21pblByb3BlcnRpZXMiLCJfbXVsdGlwbGVPZiIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJfbm90Iiwibm90RXJyb3JzIiwiX29uZU9mIiwiY291bnRlciIsIm9uZU9mRWRpdG9yIiwib25lT2ZFcnJvcnMiLCJfcGF0dGVybiIsIl9wYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnR5TmFtZSIsImVkaXRvciIsImVkaXRvckVycm9ycyIsIm1hcCIsImVycm9yIiwiX3JlcXVpcmVkIiwiX3R5cGUiLCJ0eXBlcyIsInN0cmluZyIsImludGVnZXIiLCJhcnJheSIsIm9iamVjdCIsIl9tYXhpbXVtIiwiY29tcHV0ZWRNYXhpbXVtIiwiX3VuaXF1ZUl0ZW1zIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsImkiLCJpdGVtIiwiX2FkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZGVmaW5lZEluUGF0dGVyblByb3BlcnR5IiwiYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzIiwiVmFsaWRhdG9yIiwiZHJhZnQiLCJzY2hlbWFFcnJvcnMiLCJzY2hlbWFDbG9uZSIsInZhbGlkYXRvckVycm9ycyIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJkZWZzIiwidHJhdmVyc2UiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVmUGFydHMiLCJzcGxpdCIsImRlZk5hbWUiLCJwb3AiLCJpbmRleCIsImRlZmluZSIsIkV2ZW50RW1pdHRlciIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJjb25maWciLCJqZWRpIiwiaXNBY3RpdmUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInVpIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwicHJlcGFyZSIsInNldERlZmF1bHRWYWx1ZSIsImlzRWRpdG9yIiwic2V0VUkiLCJvbiIsIm9uQ2hpbGRDaGFuZ2UiLCJ1bnJlZ2lzdGVyIiwiZGVmYXVsdEVycm9ycyIsImdldEtleSIsInZhbGlkRGVmYXVsdCIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsImVtaXQiLCJnZXRWYWx1ZSIsImNoaWxkIiwiVGhlbWVCYXJlYm9uZXMiLCJhbGVydCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiaW52YWxpZEZlZWRiYWNrIiwiYWN0aXZhdG9yc1Nsb3QiLCJhY3Rpb25zU2xvdHMiLCJjaGlsZHJlblNsb3QiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJtZXNzYWdlc1Nsb3QiLCJjb250cm9sU2xvdCIsImNoZWNrYm94TGFiZWwiLCJzck9ubHkiLCJyYWRpb0xlZ2VuZCIsInJhZGlvTGFiZWwiLCJsYWJlbCIsImxlZ2VuZCIsImlucHV0IiwiaWQiLCJjaGVja2JveCIsInJhZGlvIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwiYXBwZW5kQ2hpbGQiLCJUaGVtZVdpcmVmcmFtZSIsImJ0bkdyb3VwIiwiZmllbGRzZXQiLCJyYWRpb0NvbnRhaW5lciIsIlRoZW1lQm9vdHN0cmFwNCIsImNoZWNrYm94Q29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA1IiwiRWRpdG9yIiwiaW5zdGFuY2UiLCJ0aGVtZSIsImFjdGlvbnNTbG90IiwiZGlzYWJsZWQiLCJidWlsZCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJyZWZyZXNoVUkiLCJhbHdheXNTaG93RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJnZXRDb250YWluZXIiLCJnZXRBY3RpdmF0b3JzU2xvdCIsImdldENvbnRyb2xTbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJpbm5lckhUTUwiLCJnZXRJbnZhbGlkRmVlZGJhY2siLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJNdWx0aXBsZUVkaXRvciIsInN3aXRjaGVyQnV0dG9ucyIsInN3aXRjaGVyIiwiZ2V0QnRuR3JvdXAiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsImdldEJ1dHRvbiIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJOdW1iZXIiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc2FibGUiLCJlbmFibGUiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsInJlbW92ZSIsImdldEFsZXJ0IiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJtZXJnZUFsbE9mIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJjb25zb2xlIiwibG9nIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImNyZWF0ZUluc3RhbmNlIiwibmV3SW5kZXgiLCJmaXR0ZXN0SW5kZXgiLCJjaGFtcGlvbkVycm9ycyIsImluc3RhbmNlRXJyb3JzIiwiZ2V0Rml0dGVzdEluZGV4IiwiQm9vbGVhbkVkaXRvciIsImdldENoZWNrYm94Q29udGFpbmVyIiwiZ2V0Q2hlY2tib3hMYWJlbCIsImdldENoZWNrYm94IiwiY2hlY2tlZCIsImdldERlc2NyaXB0aW9uIiwiQm9vbGVhbiIsInJlbW92ZUF0dHJpYnV0ZSIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJyYWRpb0lucHV0cyIsImdldFJhZGlvTGVnZW5kIiwiZ2V0UmFkaW9Db250YWluZXIiLCJnZXRSYWRpbyIsInJhZGlvVmFsdWUiLCJnZXRMYWJlbCIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiZ2V0U2VsZWN0IiwiQm9vbGVhbkluc3RhbmNlIiwiT2JqZWN0RWRpdG9yIiwiZ2V0RmllbGRzZXQiLCJnZXRMZWdlbmQiLCJhZGRQcm9wZXJ0eUlucHV0IiwiZ2V0SW5wdXQiLCJhZGRQcm9wZXJ0eUJ0biIsImNyZWF0ZUNoaWxkIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImFjdGl2YXRvcklkIiwiYWN0aXZhdG9yQ29udGFpbmVyIiwiYWN0aXZhdG9yTGFiZWwiLCJhY3RpdmF0b3JJbnB1dCIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwicmVmcmVzaEFjdGl2YXRvcnMiLCJyZWZyZXNoRWRpdG9ycyIsIk9iamVjdEluc3RhbmNlIiwicmVmcmVzaEluc3RhbmNlcyIsInNwbGljZSIsImZpbmQiLCJoYXNQcm9wZXJ0eSIsImRlbGV0ZUNoaWxkIiwiZ2V0Q2hpbGQiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIkFycmF5RWRpdG9yIiwiYWRkQnRuIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJpdGVtSW5kZXgiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsIkFycmF5SW5zdGFuY2UiLCJyZWZyZXNoQ2hpbGRyZW4iLCJmcm9tSW5kZXgiLCJ0ZW1wRWRpdG9yIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiY3VycmVudFZhbHVlIiwiaXRlbVZhbHVlIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhIiwiU3RyaW5nIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0luc3RhbmNlIiwiTnVtYmVyRWRpdG9yIiwic2FuaXRpemUiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVySW5zdGFuY2UiLCJ0eXBlSXNOdW1lcmljIiwiTnVsbEVkaXRvciIsIk51bGxJbnN0YW5jZSIsInNob3dSZXF1aXJlZE9ubHkiLCJyb290IiwicmVmUGFyc2VyIiwiZGVyZWZlcmVuY2UiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbklucHV0Iiwib3JpZ2luYWxTY2hlbWEiLCJhcmd1bWVudHMiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FB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OztNQUNULEtBQUtQLElBQUwsQ0FBVW5ULE9BQVY7O01BRUEsSUFBSSxLQUFLdEIsT0FBTCxDQUFhcUksUUFBakIsRUFBMkI7UUFDekIsS0FBSzJCLFNBQUwsQ0FBZXlDLFNBQWYsR0FBMkIsRUFBM0I7TUFDRDs7TUFFRHhRLE1BQU0sQ0FBQ1csSUFBUCxDQUFZLElBQVosRUFBa0IyQixPQUFsQixDQUEwQixVQUFDdkMsR0FBRCxFQUFTO1FBQ2pDLE9BQU8sTUFBSSxDQUFDQSxHQUFELENBQVg7TUFDRCxDQUZEO0lBR0Q7Ozs7RUFsTmdCb0wsYTs7QUFxTkpuRyxpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuIiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcblxuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IGhhc093biA9IChvYmosIGtleSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbn1cblxuZXhwb3J0IGNvbnN0IHJvdW5kMmRlY2ltYWxzID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0T2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmVsc2UpKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogdW5kZWZpbmVkXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMuZm9ybWF0KCkpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIGlmIChpc09iamVjdCh0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4odGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLm5vdCkpID8gdGhpcy5zY2hlbWEubm90IDogdW5kZWZpbmVkXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlYWRPbmx5ICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnJlYWRPbmx5KSA/IHRoaXMuc2NoZW1hLnJlYWRPbmx5IDogdW5kZWZpbmVkXG4gIH1cblxuICByZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQpXSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdGhlbiAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudGhlbikpID8gdGhpcy5zY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdHlwZSAoKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHlwZUlzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy50eXBlKCkpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVJc051bWVyaWMgKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVJcygnbnVtYmVyJykgfHwgdGhpcy50eXBlSXMoJ2ludGVnZXInKVxuICB9XG5cbiAgb25lT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLm9uZU9mKSA/IHRoaXMuc2NoZW1hLm9uZU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICB1bmlxdWVJdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS51bmlxdWVJdGVtcykgPyB0aGlzLnNjaGVtYS51bmlxdWVJdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWFcbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IF9hbGxPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKCkpKSB7XG4gICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9pbmRleCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFueU9mKCkpKSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2YoKVxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9leGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGdyZWF0ZXIgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9mb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgaW52YWxpZCA9IGZhbHNlXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgICAgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuaWYoKSkpIHtcbiAgICBpZiAobm90U2V0KHNjaGVtYS50aGVuKCkpICYmIG5vdFNldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWEudGhlbigpKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4TGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX211bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5ub3QoKSkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX29uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5vbmVPZigpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm4oKSkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLicgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9yZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnJlcXVpcmVkKCkpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3R5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB2YWxpZCA9IHNjaGVtYS50eXBlKCkuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF91bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEudW5pcXVlSXRlbXMoKSkpIHtcbiAgICBjb25zdCBzZWVuID0ge31cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYS5wcm9wZXJ0aWVzKCkpID8gc2NoZW1hLnByb3BlcnRpZXMoKSA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogYFByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSBkb2VzIG5vdCBhbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXMuYCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcm9vdE5hbWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgX2FsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IF9taW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBfYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2RlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IF9mb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBfbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgX21heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgX21heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IF9taW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBfbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IF9tdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgX25vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgX29uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IF9wYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgX3BhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IF9yZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyBfdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IF9tYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgX3VuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IF9hZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBfYWxsT2YsXG4gIF9hbnlPZixcbiAgX2NvbnN0LFxuICBfZGVwZW5kZW50UmVxdWlyZWQsXG4gIF9lbnVtLFxuICBfZXhjbHVzaXZlTWF4aW11bSxcbiAgX2V4Y2x1c2l2ZU1pbmltdW0sXG4gIF9mb3JtYXQsXG4gIF9pZixcbiAgX21heGltdW0sXG4gIF9tYXhJdGVtcyxcbiAgX21heExlbmd0aCxcbiAgX21heFByb3BlcnRpZXMsXG4gIF9taW5pbXVtLFxuICBfbWluSXRlbXMsXG4gIF9taW5MZW5ndGgsXG4gIF9taW5Qcm9wZXJ0aWVzLFxuICBfbXVsdGlwbGVPZixcbiAgX25vdCxcbiAgX29uZU9mLFxuICBfcGF0dGVybixcbiAgX3BhdHRlcm5Qcm9wZXJ0aWVzLFxuICBfcmVxdWlyZWQsXG4gIF90eXBlLFxuICBfdW5pcXVlSXRlbXNcbl1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnRcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHNjaGVtYS5jbG9uZSgpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA/IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA6ICdpbnZhbGlkJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICB0aGlzLmRyYWZ0LmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IDVcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgdGhpcy50cmF2ZXJzZSh0aGlzLmRlZnMpXG4gICAgICB0aGlzLnRyYXZlcnNlKHNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIy8kZGVmcycpKSB7XG4gICAgICBjb25zdCByZWZQYXJ0cyA9IHJlZi5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZWZOYW1lID0gcmVmUGFydHMucG9wKClcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmc1tkZWZOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmc1tkZWZOYW1lXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIHRyYXZlcnNlICh2YWx1ZSwgdGhpbmcsIGluZGV4KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlWyckcmVmJ10pICYmIGlzU2V0KHRoaW5nKSkge1xuICAgICAgICB0aGluZ1tpbmRleF0gPSB0aGlzLmRlZmluZSh2YWx1ZVsnJHJlZiddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmF2ZXJzZSh2YWx1ZVtpbmRleF0sIHZhbHVlLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoaXRlbSwgdmFsdWUsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkub3B0aW9ucy5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQnUyBzY2hlbWFcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiAhdGhpcy5zY2hlbWEuZW51bSgpLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgICAgIGNvbnN0IHZhbGlkRGVmYXVsdCA9IGRlZmF1bHRFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmICh2YWxpZERlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBkZWFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImNsYXNzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBhbGVydC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaW52YWxpZEZlZWRiYWNrLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRBY3RpdmF0b3JzU2xvdCAoKSB7XG4gICAgY29uc3QgYWN0aXZhdG9yc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjdGl2YXRvcnNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gYWN0aXZhdG9yc1Nsb3RcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3Rpb25zU2xvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjdGlvbnNTbG90cy5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGFjdGlvbnNTbG90c1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoaWxkcmVuU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGNoaWxkcmVuU2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBtZXNzYWdlc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lc3NhZ2VzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBtZXNzYWdlc1Nsb3RcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBjaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcmFkaW9MZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICByYWRpb0xlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gcmFkaW9MZWdlbmRcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgcmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogYXV0bzsnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRJbnB1dCAoY29uZmlnKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZVdpcmVmcmFtZSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBzdXBlci5nZXRGaWVsZHNldCgpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBzdXBlci5nZXRDaGVja2JveExhYmVsKGNvbmZpZylcbiAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiByYWRpb0NvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1pbmZvJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV2lyZWZyYW1lXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHN1cGVyLmdldEZpZWxkc2V0KClcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3B5LTAnKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IHN1cGVyLmdldENoZWNrYm94TGFiZWwoY29uZmlnKVxuICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBzdXBlci5nZXRSYWRpb0xhYmVsKGNvbmZpZylcbiAgICByYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiByYWRpb0xhYmVsXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBzdXBlci5nZXRDaGVja2JveENvbnRhaW5lcigpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIHJhZGlvQ29udGFpbmVyXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBzdXBlci5nZXRSYWRpbyhjb25maWcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBzdXBlci5nZXRUZXh0YXJlYShjb25maWcpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gc3VwZXIuZ2V0U2VsZWN0KGNvbmZpZylcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi9ib290c3RyYXA0J1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZUJvb3RzdHJhcDQge1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG5cbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnbXktMycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbi1mb2N1c2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IHN1cGVyLmdldExhYmVsKGNvbmZpZylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJylcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuLi90aGVtZXMvd2lyZWZyYW1lJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi4vdGhlbWVzL2JhcmVib25lcydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IG51bGxcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gbnVsbFxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICd3aXJlZnJhbWUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lV2lyZWZyYW1lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmFjdGl2YXRvcnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3RpdmF0b3JzU2xvdCgpXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q29udHJvbFNsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udGFpbmVyKVxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc2NoZW1hLCBudWxsLCAyKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW5jZXNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGlzT2JqZWN0KHNjaGVtYUNsb25lKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2VzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwLCBmYWxzZSwgc2V0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuXG4gICAgaWYgKHNldFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnN0YW5jZUVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBpbnN0YW5jZSB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGluc3RhbmNlIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHZhbHVlKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlSW5zdGFuY2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIHRoaXMubGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2YXRvcnNTbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcblxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnR5IE5hbWUnLFxuICAgICAgZm9yOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWVcblxuICAgICAgLy8gaWYgbm90IHByb3BlcnR5IG5hbWUgd2FzIGdpdmVuIHJldHVyblxuICAgICAgaWYgKGtleS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHByb3BlcnR5IGV4aXN0IHJldHVyblxuICAgICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoeyB0eXBlOiAnYW55JyB9LCBrZXkpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG5cbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUlucHV0KVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoQWN0aXZhdG9ycyAoKSB7XG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSkpIHtcbiAgICAgIHdoaWxlICh0aGlzLmFjdGl2YXRvcnNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0b3JzU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmFjdGl2YXRvcnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmF0b3JJZCA9IGNoaWxkLnBhdGggKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JMYWJlbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hMYWJlbCh7XG4gICAgICAgICAgZm9yOiBhY3RpdmF0b3JJZCxcbiAgICAgICAgICB0ZXh0Q29udGVudDogaXNTZXQoY2hpbGQuc2NoZW1hLnRpdGxlKCkpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGFjdGl2YXRvcklucHV0ID0gdGhpcy50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICAgICAgaWQ6IGFjdGl2YXRvcklkXG4gICAgICAgIH0pXG5cbiAgICAgICAgYWN0aXZhdG9ySW5wdXQuY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZhdG9ySW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLmFjdGl2YXRvcnNTbG90LmFwcGVuZENoaWxkKGFjdGl2YXRvckNvbnRhaW5lcilcbiAgICAgICAgYWN0aXZhdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2YXRvcklucHV0KVxuICAgICAgICBhY3RpdmF0b3JDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZhdG9yTGFiZWwpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQWN0aXZhdG9ycygpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBpc1NldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCgpKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBoYXNQcm9wZXJ0eSAocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVxuXG4gICAgaWYgKG5vdFNldChwcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmluY2x1ZGVzKHByb3BlcnR5TmFtZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5oYXNQcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuXG4gICAgLy8gYnRuIGdyb3VwXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90KVxuXG4gICAgICB3aGlsZSAoY2hpbGQudWkuYWN0aW9uc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBjaGlsZC51aS5hY3Rpb25zU2xvdC5yZW1vdmVDaGlsZChjaGlsZC51aS5hY3Rpb25zU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgIC8vIGRlbGV0ZVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgICAgfSlcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnVpLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGlzU2V0LCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5pdGVtcygpKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7IHR5cGU6IGdldFR5cGUodmFsdWUpIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZHJlbi5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgY2hpbGQuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZFxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdXG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGNoaWxkLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoQ2hpbGRyZW4gKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgLy8gdG9kbyBmaWxlLCByYW5nZSBzaG91bGQgYmUgaGFuZGxlZCBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnY29sb3InKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcblxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnd2lyZWZyYW1lJyxcbiAgICAgIHJvb3ROYW1lOiAncm9vdCdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcigpXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5zY2hlbWEuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChjb25maWcuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KGNvbmZpZy5zY2hlbWEub25lT2YoKSkgfHwgY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8IGlzQXJyYXkoY29uZmlnLnNjaGVtYS50eXBlKCkpIHx8IG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIGlmIChub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpICYmIGlzU2V0KGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IGNvbmZpZy5zY2hlbWEuY2xvbmUoKVxuICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShjb25maWcuc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMub3B0aW9ucy5zdGFydFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J1MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9