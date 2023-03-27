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
var fakeForEach = function fakeForEach(array, callback) {
  for (var index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
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
    var message;
    var regexp;

    if (schema.formatIs('email')) {
      regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
      message = 'Must be a valid email address';
    }

    if (schema.formatIs('url')) {
      regexp = new RegExp(/^(?:http[s\u017F]?|ftp):\/\/(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!(?:10|127)(?:\.[0-9]{1,3}){3})(?!(?:169\.254|192\.168)(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])*)?$/i);
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
          var editor = new jedi({
            schema: _schema,
            startValue: value[propertyName],
            refParser: false
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
          var editor = new jedi({
            rootName: property,
            schema: additionalProperties,
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

        var child = _this.instance.createChild(schema, key);

        child.activate();

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
        this.dropdownMenu.appendChild(this.activatorsSlot);
        this.dropdownMenu.appendChild(this.addPropertyLabel);
        this.dropdownMenu.appendChild(this.addPropertyInput);
        this.dropdownMenu.appendChild(this.addPropertyBtn);
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
        schema: schema,
        path: this.path + '.' + key,
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
    key: "refreshInstances",
    value: function refreshInstances() {
      var _this3 = this;

      var value = this.getValue(); // remove any children that are not included in the value

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
        schema: schema,
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
        }); // dereference

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
      } // definitions


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
      theme: 'wireframe',
      rootName: 'root',
      refParser: true
    }, options);
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
      var instance; // circular $ref are not initially dereferenced and must be defined on creation

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

/* harmony default export */ var jedi = __webpack_exports__["default"] = (jedi_Jedi);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy93aXJlZnJhbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9qZWRpLmpzIl0sIm5hbWVzIjpbImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmYWtlRm9yRWFjaCIsImFycmF5IiwiY2FsbGJhY2siLCJpbmRleCIsImxlbmd0aCIsImhhc093biIsIm9iaiIsImtleSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInByZXR0eSIsInZhbHVlIiwicm91bmQyZGVjaW1hbHMiLCJudW1iZXIiLCJNYXRoIiwicm91bmQiLCJzb3J0T2JqZWN0Iiwia2V5cyIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJlcXVhbCIsImEiLCJiIiwiaXNPYmplY3QiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJpc1NldCIsIm5vdFNldCIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsImdldFR5cGUiLCJ0eXBlIiwibWVyZ2VEZWVwIiwidGFyZ2V0Iiwic291cmNlcyIsInNvdXJjZSIsInNoaWZ0IiwiZm9yRWFjaCIsImFzc2lnbiIsIlNjaGVtYSIsInNjaGVtYSIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYWxsT2YiLCJ1bmRlZmluZWQiLCJhbnlPZiIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsIml0ZW1zIiwibWF4aW11bSIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90Iiwib3B0aW9uIiwib3B0aW9ucyIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZWFkT25seSIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIl9hbGxPZiIsInZhbGlkYXRvciIsInBhdGgiLCJlcnJvcnMiLCJzdWJTY2hlbWFFZGl0b3IiLCJKZWRpIiwic3RhcnRWYWx1ZSIsInJvb3ROYW1lIiwicmVmUGFyc2VyIiwic3ViU2NoZW1hRXJyb3JzIiwidmFsaWRhdGUiLCJkZXN0cm95IiwiX21pbkxlbmd0aCIsInJlcGxhY2UiLCJpbnZhbGlkIiwicHVzaCIsIm1lc3NhZ2UiLCJfY29uc3QiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsIl9hbnlPZiIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsIl9kZXBlbmRlbnRSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyIiwicHJvcGVydHkiLCJqb2luIiwiX2VudW0iLCJzb21lIiwiZSIsIl9leGNsdXNpdmVNYXhpbXVtIiwiX2V4Y2x1c2l2ZU1pbmltdW0iLCJfZm9ybWF0IiwicmVnZXhwIiwiZm9ybWF0SXMiLCJSZWdFeHAiLCJ0ZXN0IiwiX2lmIiwiaWZFZGl0b3IiLCJpZkVycm9ycyIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJfbWF4SXRlbXMiLCJfbWF4TGVuZ3RoIiwiX21heFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzQ291bnQiLCJfbWluaW11bSIsImNvbXB1dGVkTWluaW11bSIsIl9taW5JdGVtcyIsIl9taW5Qcm9wZXJ0aWVzIiwiX211bHRpcGxlT2YiLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwiX25vdCIsIm5vdEVycm9ycyIsIl9vbmVPZiIsImNvdW50ZXIiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwiX3BhdHRlcm4iLCJfcGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3IiLCJlZGl0b3JFcnJvcnMiLCJtYXAiLCJlcnJvciIsIl9yZXF1aXJlZCIsIl90eXBlIiwidHlwZXMiLCJzdHJpbmciLCJpbnRlZ2VyIiwib2JqZWN0IiwiX21heGltdW0iLCJjb21wdXRlZE1heGltdW0iLCJfdW5pcXVlSXRlbXMiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsIml0ZW0iLCJfYWRkaXRpb25hbFByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInNjaGVtYUNsb25lIiwidmFsaWRhdG9yRXJyb3JzIiwiRXZlbnRFbWl0dGVyIiwibGlzdGVuZXJzIiwibmFtZSIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJjb25maWciLCJqZWRpIiwiaXNBY3RpdmUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInVpIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwicHJlcGFyZSIsInNldERlZmF1bHRWYWx1ZSIsImlzRWRpdG9yIiwic2V0VUkiLCJvbiIsIm9uQ2hpbGRDaGFuZ2UiLCJzcGxpdCIsInBvcCIsInVucmVnaXN0ZXIiLCJkZWZhdWx0RXJyb3JzIiwiZ2V0S2V5IiwidmFsaWREZWZhdWx0Iiwic2V0VmFsdWUiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwiZW1pdCIsImdldFZhbHVlIiwiY2hpbGQiLCJUaGVtZUJhcmVib25lcyIsImFsZXJ0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJpbnZhbGlkRmVlZGJhY2siLCJodG1sIiwic2V0QXR0cmlidXRlIiwiYWN0aXZhdG9yc1Nsb3QiLCJhY3Rpb25zU2xvdHMiLCJjaGlsZHJlblNsb3QiLCJidXR0b24iLCJjb250YWluZXIiLCJtZXNzYWdlc1Nsb3QiLCJjb250cm9sU2xvdCIsImNoZWNrYm94TGFiZWwiLCJzck9ubHkiLCJyYWRpb0xlZ2VuZCIsInJhZGlvTGFiZWwiLCJsYWJlbCIsImxlZ2VuZCIsImlucHV0IiwiaWQiLCJjaGVja2JveCIsInJhZGlvIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwiYXBwZW5kQ2hpbGQiLCJUaGVtZVdpcmVmcmFtZSIsImJ0bkdyb3VwIiwiZmllbGRzZXQiLCJyYWRpb0NvbnRhaW5lciIsIlRoZW1lQm9vdHN0cmFwNCIsImNoZWNrYm94Q29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA1IiwiRWRpdG9yIiwiaW5zdGFuY2UiLCJ0aGVtZSIsImFjdGlvbnNTbG90IiwiZGlzYWJsZWQiLCJidWlsZCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJyZWZyZXNoVUkiLCJhbHdheXNTaG93RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJnZXRDb250YWluZXIiLCJ0b29sYmFyU2xvdCIsImdldFRvb2xiYXJTbG90IiwiZ2V0QWN0aXZhdG9yc1Nsb3QiLCJnZXRDb250cm9sU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsImdldEFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwiaW5uZXJIVE1MIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiTXVsdGlwbGVFZGl0b3IiLCJzd2l0Y2hlckJ1dHRvbnMiLCJzd2l0Y2hlciIsImdldEJ0bkdyb3VwIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJnZXRCdXR0b24iLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiTnVtYmVyIiwic3dpdGNoSW5zdGFuY2UiLCJvbGRJbnN0YW5jZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsImFjdGl2ZUluc3RhbmNlIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJyZW1vdmUiLCJnZXRBbGVydCIsIk11bHRpcGxlSW5zdGFuY2UiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwibWVyZ2VBbGxPZiIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImNyZWF0ZUluc3RhbmNlIiwibmV3SW5kZXgiLCJmaXR0ZXN0SW5kZXgiLCJjaGFtcGlvbkVycm9ycyIsImluc3RhbmNlRXJyb3JzIiwiZ2V0Rml0dGVzdEluZGV4IiwiQm9vbGVhbkVkaXRvciIsImdldENoZWNrYm94Q29udGFpbmVyIiwiZ2V0Q2hlY2tib3hMYWJlbCIsImdldENoZWNrYm94IiwiY2hlY2tlZCIsImdldERlc2NyaXB0aW9uIiwiQm9vbGVhbiIsInJlbW92ZUF0dHJpYnV0ZSIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJyYWRpb0lucHV0cyIsImdldFJhZGlvTGVnZW5kIiwiZ2V0UmFkaW9Db250YWluZXIiLCJnZXRSYWRpbyIsInJhZGlvVmFsdWUiLCJnZXRMYWJlbCIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiZ2V0U2VsZWN0IiwiQm9vbGVhbkluc3RhbmNlIiwiT2JqZWN0RWRpdG9yIiwiZ2V0RmllbGRzZXQiLCJnZXRMZWdlbmQiLCJkcm9wZG93biIsImdldERyb3Bkb3duIiwiZHJvcGRvd25Ub2dnbGUiLCJnZXREcm9wZG93blRvZ2dsZSIsImRyb3Bkb3duTWVudSIsImdldERyb3Bkb3duTWVudSIsImFkZFByb3BlcnR5TGFiZWwiLCJhZGRQcm9wZXJ0eUlucHV0IiwiZ2V0SW5wdXQiLCJhZGRQcm9wZXJ0eUJ0biIsInByb3BlcnR5TmFtZUVtcHR5IiwicHJvcGVydHlFeGlzdCIsImNyZWF0ZUNoaWxkIiwiYWN0aXZhdGUiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiYWN0aXZhdG9ySWQiLCJhY3RpdmF0b3JDb250YWluZXIiLCJhY3RpdmF0b3JMYWJlbCIsImFjdGl2YXRvcklucHV0IiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJkZWFjdGl2YXRlIiwicmVmcmVzaEFjdGl2YXRvcnMiLCJyZWZyZXNoRWRpdG9ycyIsIk9iamVjdEluc3RhbmNlIiwicmVmcmVzaEluc3RhbmNlcyIsImlzTm90UmVxdWlyZWQiLCJzaG91bGRTdGFydERlYWN0aXZhdGVkIiwiZGVhY3RpdmF0ZVByb3BlcnRpZXMiLCJzcGxpY2UiLCJmaW5kIiwiZ2V0Q2hpbGQiLCJkZWxldGVDaGlsZCIsIm9sZFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiQXJyYXlFZGl0b3IiLCJhZGRCdG4iLCJhZGRJdGVtIiwiZGVsZXRlQWxsQnRuIiwiY29uZmlybSIsIml0ZW1JbmRleCIsImRlbGV0ZUJ0biIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiQXJyYXlJbnN0YW5jZSIsInJlZnJlc2hDaGlsZHJlbiIsImZyb21JbmRleCIsInRlbXBFZGl0b3IiLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJjdXJyZW50VmFsdWUiLCJpdGVtVmFsdWUiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWEiLCJTdHJpbmciLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiU3RyaW5nSW5zdGFuY2UiLCJOdW1iZXJFZGl0b3IiLCJzYW5pdGl6ZSIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJOdWxsRWRpdG9yIiwiTnVsbEluc3RhbmNlIiwiUmVmUGFyc2VyIiwiaXRlcmF0aW9ucyIsIlhNTEh0dHBSZXF1ZXN0IiwiZGVmaW5pdGlvbnMiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWZPd25lciIsInByZXZWYWx1ZSIsInJlZiIsImlzQ2lyY3VsYXJQYXRoIiwiY29uc29sZSIsImxvZyIsImRlZmluZSIsIm91dHB1dCIsInN1YnN0cmluZyIsImhhbGYiLCJjZWlsIiwiZmlyc3RIYWxmIiwic2Vjb25kSGFsZiIsInN0YXJ0c1dpdGgiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzaG93UmVxdWlyZWRPbmx5Iiwicm9vdCIsImRlcmVmZXJlbmNlIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJoaWRkZW5JbnB1dCIsIm9yaWdpbmFsU2NoZW1hIiwi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bnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcbiIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBmYWtlRm9yRWFjaCA9IChhcnJheSwgY2FsbGJhY2spID0+IHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhZGRpdGlvbmFsUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB0cnVlXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdFxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5lbHNlKSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLmZvcm1hdCgpKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICBpZiAoaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5ub3QpKSA/IHRoaXMuc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogdW5kZWZpbmVkXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IF9hbGxPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKCkpKSB7XG4gICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9hbnlPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYW55T2YoKSkpIHtcbiAgICBjb25zdCBhbnlPZiA9IHNjaGVtYS5hbnlPZigpXG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9kZXBlbmRlbnRSZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZW51bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmVudW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYS5lbnVtKCkuc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmVudW0oKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+PSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8PSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgZ3JlYXRlciB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2Zvcm1hdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuZm9ybWF0KCkpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCBtZXNzYWdlXG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXJsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1cmwnXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXVpZCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXVpZCdcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaXNTZXQocmVnZXhwKSAmJiAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfaWYgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5pZigpKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hLnRoZW4oKSkgJiYgbm90U2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS50aGVuKCkpKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB0aGVuRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgZWxzZUVycm9ycyA9IGVsc2VFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heEl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhMZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9tYXhQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4UHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5pbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbXVsdGlwbGVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm11bHRpcGxlT2YoKSkpIHtcbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9ub3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm5vdCgpKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IF9vbmVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEub25lT2YoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm4gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuKCkpKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgX3BhdHRlcm5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy4nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5yZXF1aXJlZCgpKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF90eXBlID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKGlzU2V0KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBpZiAoaXNBcnJheShzY2hlbWEudHlwZSgpKSkge1xuICAgICAgdmFsaWQgPSBzY2hlbWEudHlwZSgpLnNvbWUoKHR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heGltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfdW5pcXVlSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpKSB7XG4gICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgX2FkZGl0aW9uYWxQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYS5wcm9wZXJ0aWVzKCkpID8gc2NoZW1hLnByb3BlcnRpZXMoKSA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogYFByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSBkb2VzIG5vdCBhbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXMuYCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcm9vdE5hbWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IF9hbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBfbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgX2FueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IF9kZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IF9leGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBfZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgX21heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IF9tYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IF9tYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgX21pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBfbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgX21pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IF9ub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IF9vbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBfcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IF9wYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBfcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgX3R5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBfbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IF91bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBfYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIF9hZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgX2FsbE9mLFxuICBfYW55T2YsXG4gIF9jb25zdCxcbiAgX2RlcGVuZGVudFJlcXVpcmVkLFxuICBfZW51bSxcbiAgX2V4Y2x1c2l2ZU1heGltdW0sXG4gIF9leGNsdXNpdmVNaW5pbXVtLFxuICBfZm9ybWF0LFxuICBfaWYsXG4gIF9tYXhpbXVtLFxuICBfbWF4SXRlbXMsXG4gIF9tYXhMZW5ndGgsXG4gIF9tYXhQcm9wZXJ0aWVzLFxuICBfbWluaW11bSxcbiAgX21pbkl0ZW1zLFxuICBfbWluTGVuZ3RoLFxuICBfbWluUHJvcGVydGllcyxcbiAgX211bHRpcGxlT2YsXG4gIF9ub3QsXG4gIF9vbmVPZixcbiAgX3BhdHRlcm4sXG4gIF9wYXR0ZXJuUHJvcGVydGllcyxcbiAgX3JlcXVpcmVkLFxuICBfdHlwZSxcbiAgX3VuaXF1ZUl0ZW1zXG5dXG4iLCJpbXBvcnQgZHJhZnQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMidcbmltcG9ydCB7IGlzQm9vbGVhbiB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBzY2hlbWEuY2xvbmUoKVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykgPyBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykgOiAnaW52YWxpZCcsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgdGhpcy5kcmFmdC5mb3JFYWNoKCh2YWxpZGF0b3IpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hLm9wdGlvbignbWVzc2FnZScpKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgdGhpcy5qZWRpLm9wdGlvbnMucm9vdE5hbWVcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuICAgIHRoaXMudWkgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J1Mgc2NoZW1hXG4gICAqL1xuICBzZXRJbml0aWFsVmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgLy8gaWYgKHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgIC8vICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZWZhdWx0RXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gICAgICBjb25zdCB2YWxpZERlZmF1bHQgPSBkZWZhdWx0RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAodmFsaWREZWZhdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJjbGFzcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgYWxlcnQudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBhbGVydFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGludmFsaWRGZWVkYmFjay50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGludmFsaWRGZWVkYmFja1xuICB9XG5cbiAgZ2V0RHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERyb3Bkb3duVG9nZ2xlICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9ICdQcm9wZXJ0aWVzJ1xuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi10b2dnbGUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1kcm9wZG93bi1wcm9wZXJ0aWVzJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RHJvcGRvd25NZW51ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tbWVudScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFRvb2xiYXJTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbmF2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1uYXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS10b29sYmFyLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3RpdmF0b3JzU2xvdCAoKSB7XG4gICAgY29uc3QgYWN0aXZhdG9yc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjdGl2YXRvcnNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gYWN0aXZhdG9yc1Nsb3RcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3Rpb25zU2xvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjdGlvbnNTbG90cy5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGFjdGlvbnNTbG90c1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoaWxkcmVuU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGNoaWxkcmVuU2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBtZXNzYWdlc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lc3NhZ2VzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBtZXNzYWdlc1Nsb3RcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBjaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tib3hMYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcmFkaW9MZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICByYWRpb0xlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gcmFkaW9MZWdlbmRcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgcmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgcmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogYXV0bzsnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRJbnB1dCAoY29uZmlnKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZVdpcmVmcmFtZSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBzdXBlci5nZXRGaWVsZHNldCgpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBzdXBlci5nZXRDaGVja2JveExhYmVsKGNvbmZpZylcbiAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiBjaGVja2JveExhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiByYWRpb0NvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW9MYWJlbCA9IHN1cGVyLmdldFJhZGlvTGFiZWwoY29uZmlnKVxuICAgIHJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIHJhZGlvTGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IHN1cGVyLmdldFJhZGlvKGNvbmZpZylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHN1cGVyLmdldFRleHRhcmVhKGNvbmZpZylcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBzdXBlci5nZXRTZWxlY3QoY29uZmlnKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1pbmZvJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV2lyZWZyYW1lXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGFsZXJ0XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaW52YWxpZEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxuICAgIGludmFsaWRGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaW52YWxpZEZlZWRiYWNrXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHN1cGVyLmdldEZpZWxkc2V0KClcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3B5LTAnKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IHN1cGVyLmdldENoZWNrYm94TGFiZWwoY29uZmlnKVxuICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgcmV0dXJuIGNoZWNrYm94TGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBzdXBlci5nZXRSYWRpb0xhYmVsKGNvbmZpZylcbiAgICByYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIHJldHVybiByYWRpb0xhYmVsXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBzdXBlci5nZXRDaGVja2JveENvbnRhaW5lcigpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBzdXBlci5nZXRSYWRpb0NvbnRhaW5lcigpXG4gICAgcmFkaW9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIHJhZGlvQ29udGFpbmVyXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBzdXBlci5nZXRDaGVja2JveChjb25maWcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBzdXBlci5nZXRSYWRpbyhjb25maWcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBzdXBlci5nZXRUZXh0YXJlYShjb25maWcpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gc3VwZXIuZ2V0U2VsZWN0KGNvbmZpZylcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi9ib290c3RyYXA0J1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZUJvb3RzdHJhcDQge1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG5cbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnbXktMycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbi1mb2N1c2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IHN1cGVyLmdldExhYmVsKGNvbmZpZylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJylcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuLi90aGVtZXMvd2lyZWZyYW1lJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi4vdGhlbWVzL2JhcmVib25lcydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IG51bGxcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY2hpbGRyZW5TbG90ID0gbnVsbFxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICd3aXJlZnJhbWUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lV2lyZWZyYW1lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLnRvb2xiYXJTbG90ID0gdGhpcy50aGVtZS5nZXRUb29sYmFyU2xvdCgpXG4gICAgdGhpcy5hY3RpdmF0b3JzU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aXZhdG9yc1Nsb3QoKVxuICAgIHRoaXMuY29udHJvbFNsb3QgPSB0aGlzLnRoZW1lLmdldENvbnRyb2xTbG90KClcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSB0aGlzLnRoZW1lLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICBidWlsZCAoKSB7fVxuXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UudmFsaWRhdGUoKVxuXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soZXJyb3IubWVzc2FnZSlcbiAgICAgIHRoaXMubWVzc2FnZXNTbG90LmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gc3dpdGNoZXIgYnV0dG9uc1xuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zID0gW11cbiAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgdGhpcy5zd2l0Y2hlci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyBidXR0b25cbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgdmFsdWU6IGluZGV4XG4gICAgICB9KVxuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGJ1dHRvbi52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMucHVzaChidXR0b24pXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoZXIpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IG9sZEluc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5pbnN0YW5jZXNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkSW5zdGFuY2UudWkuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZEluc3RhbmNlLnVpLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRhaW5lcilcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmICgoTnVtYmVyKGJ1dHRvbi52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmluZGV4KSkpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgc3VwZXIuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgbWVyZ2VEZWVwLFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIGlzT2JqZWN0LFxuICBub3RTZXRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KHRoaXMuc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChpc1NldChzY2hlbWEuYWxsT2YpICYmIHNjaGVtYS5vcHRpb25zPy5tZXJnZUFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW5jZXNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGlzT2JqZWN0KHNjaGVtYUNsb25lKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2VzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwLCBmYWxzZSwgc2V0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuXG4gICAgaWYgKHNldFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnN0YW5jZUVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBpbnN0YW5jZSB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGluc3RhbmNlIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHZhbHVlKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlSW5zdGFuY2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIHRoaXMubGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICB0aGlzLmxlZ2VuZCA9IHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuZHJvcGRvd24gPSB0aGlzLnRoZW1lLmdldERyb3Bkb3duKClcbiAgICB0aGlzLmRyb3Bkb3duVG9nZ2xlID0gdGhpcy50aGVtZS5nZXREcm9wZG93blRvZ2dsZSgpXG4gICAgdGhpcy5kcm9wZG93bk1lbnUgPSB0aGlzLnRoZW1lLmdldERyb3Bkb3duTWVudSgpXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5TGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHknLFxuICAgICAgZm9yOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7IHR5cGU6ICdhbnknIH1cblxuICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudG9vbGJhclNsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuXG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSkpIHtcbiAgICAgIHRoaXMudG9vbGJhclNsb3QuYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93bilcbiAgICAgIHRoaXMuZHJvcGRvd24uYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93blRvZ2dsZSlcbiAgICAgIHRoaXMuZHJvcGRvd24uYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93bk1lbnUpXG4gICAgICB0aGlzLmRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2YXRvcnNTbG90KVxuICAgICAgdGhpcy5kcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUxhYmVsKVxuICAgICAgdGhpcy5kcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUlucHV0KVxuICAgICAgdGhpcy5kcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaEFjdGl2YXRvcnMgKCkge1xuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5hY3RpdmF0b3JzU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdG9yc1Nsb3QucmVtb3ZlQ2hpbGQodGhpcy5hY3RpdmF0b3JzU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZhdG9ySWQgPSBjaGlsZC5wYXRoICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdG9yQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAgICAgY29uc3QgYWN0aXZhdG9yTGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgICAgIGZvcjogYWN0aXZhdG9ySWQsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBhY3RpdmF0b3JJbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgICAgIGlkOiBhY3RpdmF0b3JJZFxuICAgICAgICB9KVxuXG4gICAgICAgIGFjdGl2YXRvcklucHV0LmNoZWNrZWQgPSBoYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgYWN0aXZhdG9ySW5wdXQuZGlzYWJsZWQgPSBpc1JlcXVpcmVkIHx8IGlzRGVwZW5kZW50UmVxdWlyZWQgfHwgZGlzYWJsZWRcblxuICAgICAgICBhY3RpdmF0b3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2YXRvcklucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZHNcbiAgICAgICAgdGhpcy5hY3RpdmF0b3JzU2xvdC5hcHBlbmRDaGlsZChhY3RpdmF0b3JDb250YWluZXIpXG4gICAgICAgIGFjdGl2YXRvckNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3RpdmF0b3JJbnB1dClcbiAgICAgICAgYWN0aXZhdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2YXRvckxhYmVsKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEFjdGl2YXRvcnMoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0LCBoYXNPd24gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5cbmNsYXNzIE9iamVjdEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBPYmplY3RFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGlzU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IGlzTm90UmVxdWlyZWQgPSAhdGhpcy5pc1JlcXVpcmVkKGtleSlcbiAgICBjb25zdCBzaG91bGRTdGFydERlYWN0aXZhdGVkID0gdGhpcy5qZWRpLm9wdGlvbnMuZGVhY3RpdmF0ZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdkZWFjdGl2YXRlUHJvcGVydGllcycpXG5cbiAgICBpZiAoaXNOb3RSZXF1aXJlZCAmJiBzaG91bGRTdGFydERlYWN0aXZhdGVkKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KCcuJykucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuXG4gICAgLy8gYnRuIGdyb3VwXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmFjdGlvbnNTbG90KVxuXG4gICAgICB3aGlsZSAoY2hpbGQudWkuYWN0aW9uc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBjaGlsZC51aS5hY3Rpb25zU2xvdC5yZW1vdmVDaGlsZChjaGlsZC51aS5hY3Rpb25zU2xvdC5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgIC8vIGRlbGV0ZVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgICAgfSlcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnVpLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBnZXRUeXBlLCBpc1NldCwgY2xvbmUsIGlzQXJyYXkgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuXG5jbGFzcyBBcnJheUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBBcnJheUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEuaXRlbXMoKSkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIC8vIHRvZG8gZmlsZSwgcmFuZ2Ugc2hvdWxkIGJlIGhhbmRsZWQgZGlmZmVyZW50bHlcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYSh7XG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSA6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2NvbG9yJykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG5cbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG5jbGFzcyBOdWxsSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE51bGxFZGl0b3IodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsSW5zdGFuY2VcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xuXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nLFxuICBub3RTZXQsXG4gIGNsb25lLCBlcXVhbFxufSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIGlmIChub3RTZXQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCA3XG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLmRlZmluaXRpb25zID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAvLyByZWdpc3RlciBkZWZpbml0aW9ucyBhcyBsb25nIGFzIHRoZXkgYXJlIG5vdCByZWZlcmVuY2VzXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGFyZ3Mua2V5ICE9PSAnJHJlZicpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbnNbYXJncy5wYXRoXSA9IGFyZ3MudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIGRlcmVmZXJlbmNlXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc09iamVjdChhcmdzLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVmT3duZXIgPSBhcmdzLnByZXZWYWx1ZVxuICAgICAgICAgIGNvbnN0IHJlZiA9IGFyZ3MudmFsdWVbJyRyZWYnXVxuXG4gICAgICAgICAgaWYgKGlzU2V0KHJlZk93bmVyKSAmJiBpc1NldChyZWYpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NpcmN1bGFyUGF0aChhcmdzLnBhdGgpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaXJjdWxhcicsIGFyZ3MucGF0aClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZk93bmVyW2FyZ3Mua2V5XSA9IHRoaXMuZGVmaW5lKHJlZilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgaXNDaXJjdWxhclBhdGggKHBhdGgpIHtcbiAgICBsZXQgb3V0cHV0ID0gZmFsc2VcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmaW5pdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy8gcmVtb3ZlICNcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygxKVxuXG4gICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYWxmID0gTWF0aC5jZWlsKHBhdGgubGVuZ3RoIC8gMilcbiAgICAgIGNvbnN0IGZpcnN0SGFsZiA9IHBhdGguc2xpY2UoMCwgaGFsZilcbiAgICAgIGNvbnN0IHNlY29uZEhhbGYgPSBwYXRoLnNsaWNlKGhhbGYpXG5cbiAgICAgIGlmIChlcXVhbChmaXJzdEhhbGYsIHNlY29uZEhhbGYpKSB7XG4gICAgICAgIG91dHB1dCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICAvLyBkZWZpbml0aW9uc1xuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZpbml0aW9uc1tyZWZdKSkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcy5kZWZpbml0aW9uc1tyZWZdKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHJlZi5zdGFydHNXaXRoKCdodHRwcycpKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCByZWYsIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICByZXF1ZXN0LnNlbmQobnVsbClcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjYW4gbm90IGxvYWQnLCByZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHJhdmVyc2UgKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudmFsdWVcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MuY2FsbGJhY2tcbiAgICBjb25zdCBwYXRoID0gaXNTZXQoYXJncy5wYXRoKSA/IGFyZ3MucGF0aCArICcvJyArIGFyZ3Mua2V5IDogJyMnXG4gICAgYXJncy5wYXRoID0gcGF0aFxuXG4gICAgaWYgKGlzU2V0KGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soYXJncylcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaGFzT3duLCBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcblxuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICd3aXJlZnJhbWUnLFxuICAgICAgcm9vdE5hbWU6ICdyb290JyxcbiAgICAgIHJlZlBhcnNlcjogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG4gICAgdGhpcy5zY2hlbWEgPSBudWxsXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIpIHtcbiAgICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcih7XG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB0aGlzLm9wdGlvbnMuWE1MSHR0cFJlcXVlc3RcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMub3B0aW9ucy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICAvLyBjaXJjdWxhciAkcmVmIGFyZSBub3QgaW5pdGlhbGx5IGRlcmVmZXJlbmNlZCBhbmQgbXVzdCBiZSBkZWZpbmVkIG9uIGNyZWF0aW9uXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIgJiYgaGFzT3duKGNvbmZpZy5zY2hlbWEsICckcmVmJykpIHtcbiAgICAgIGNvbmZpZy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZWZpbmUoY29uZmlnLnNjaGVtYVsnJHJlZiddKVxuICAgIH1cblxuICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBPYmplY3RJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdW1iZXJJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGNvbmZpZy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5vbmVPZigpKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgaXNBcnJheShjb25maWcuc2NoZW1hLnR5cGUoKSkgfHwgbm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgaWYgKG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkgJiYgaXNTZXQoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2NoZW1hID0gY29uZmlnLnNjaGVtYS5jbG9uZSgpXG4gICAgICAgIG9yaWdpbmFsU2NoZW1hLnR5cGUgPSBnZXRUeXBlKGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHNldFRoZW1lICh0aGVtZSkge1xuICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQnUyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=