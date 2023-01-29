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

// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ var esm_browser_native = ({
  randomUUID
});
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ var regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


function validate_validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ var esm_browser_validate = (validate_validate);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ var esm_browser_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js




function v4(options, buf, offset) {
  if (esm_browser_native.randomUUID && !buf && !options) {
    return esm_browser_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ var esm_browser_v4 = (v4);
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
var isNotSet = function isNotSet(value) {
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
var utils_uuidv4 = function uuidv4() {
  return esm_browser_v4();
};
var utils_mergeDeep = function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (utils_isObject(target) && utils_isObject(source)) {
    for (var key in source) {
      if (utils_isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, defineProperty_default()({}, key, {}));
        }

        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, defineProperty_default()({}, key, source[key]));
      }
    }
  }

  return mergeDeep.apply(void 0, [target].concat(sources));
};
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
// CONCATENATED MODULE: ./src/instance.js






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
    _this.path = config.path || 'root';
    _this.parent = config.parent || null;
    _this.childEditors = [];
    _this.ui = null;

    _this.init();

    return _this;
  }
  /**
   * Starts the build pipeline of the editor
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
          _this2.parent.onChildEditorChange();
        }
      });
    }
  }, {
    key: "setUI",
    value: function setUI() {}
    /**
     * Return the last part of the path
     */

  }, {
    key: "getKey",
    value: function getKey() {
      return this.path.split('.').pop();
    }
    /**
     * Adds this editor instance in the jedi.editors object
     */

  }, {
    key: "register",
    value: function register() {
      this.jedi.registerEditor(this);
    }
    /**
     * Removes this editor instance from the jedi.editors object
     */

  }, {
    key: "unregister",
    value: function unregister() {
      this.jedi.unregisterEditor(this);
    }
    /**
     * If schema.default is not defined, sets an initial value based on it's type.
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
     * Returns the current value of the editor
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
    /**
     * Sanitize value
     */

  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return value;
    }
    /**
     * Sets the editor value and calls refreshUI right after. The onChange method
     * will be called unless triggersChange is explicitly set to false. This is
     * useful for initial or default values.
     */

  }, {
    key: "setValue",
    value: function setValue(newValue) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      newValue = this.sanitize(newValue);
      this.value = newValue;

      if (triggersChange) {
        this.emit('change');
      }

      this.emit('set-value');
    }
    /**
     * Fires when the value of a child editor changes. This is relevant for Array
     * and Object editors.
     */

  }, {
    key: "onChildEditorChange",
    value: function onChildEditorChange() {}
  }, {
    key: "validate",
    value: function validate() {
      return this.jedi.validator.validate(this.getValue(), this.schema, this.getKey(), this.path);
    }
  }, {
    key: "setContainer",
    value: function setContainer() {
      this.container = this.jedi.theme.getContainer();
    }
    /**
     * Prepare data before building the editor
     */

  }, {
    key: "prepare",
    value: function prepare() {}
    /**
     * Destroys the editor, and every reference that it is attached to it.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;

      this.childEditors.forEach(function (instance) {
        instance.destroy();
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

/* harmony default export */ var src_instance = (instance_Instance);
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
    key: "serialize",
    value: function serialize() {
      return JSON.stringify(this.schema);
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
    key: "getActionsSlot",
    value: function getActionsSlot() {
      var actionsSlot = document.createElement('div');
      actionsSlot.classList.add('jedi-actions-slot');
      return actionsSlot;
    }
  }, {
    key: "getChildEditorsSlot",
    value: function getChildEditorsSlot() {
      var childEditorsSlot = document.createElement('div');
      childEditorsSlot.classList.add('jedi-child-editors-slot');
      return childEditorsSlot;
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
    _this.theme = new wireframe();
    _this.container = _this.theme.getContainer();
    _this.messagesSlot = _this.theme.getMessagesSlot();
    _this.actionsSlot = _this.theme.getActionsSlot();
    _this.childEditorsSlot = _this.theme.getChildEditorsSlot();
    _this.disabled = false;

    _this.build();

    _this.setContainerAttributes();

    _this.refreshUI();

    if (_this.instance.jedi.ready || _this.instance.jedi.options.alwaysShowErrors || _this.instance.schema.option('alwaysShowErrors')) {
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
      this.container.appendChild(this.childEditorsSlot);
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
      var itemEditor = this.instance.jedi.createEditor({
        jedi: this.instance.jedi,
        schema: itemSchema,
        path: this.instance.path + '.' + this.instance.childEditors.length,
        parent: this.instance
      });
      var btnGroup = this.theme.getBtnGroup();
      var itemIndex = Number(itemEditor.getKey());
      var deleteBtn = this.theme.getButton({
        textContent: 'Delete item'
      });
      deleteBtn.addEventListener('click', function () {
        var itemIndex = Number(itemEditor.path.split('.').pop());

        _this2.instance.deleteItem(itemIndex);
      });

      if (this.instance.childEditors.length !== 0) {
        var moveUpBtn = this.theme.getButton({
          textContent: 'Move up'
        });
        moveUpBtn.addEventListener('click', function () {
          var toIndex = itemIndex - 1;

          _this2.move(itemIndex, toIndex);
        });
        btnGroup.appendChild(moveUpBtn);
      }

      if (this.instance.getValue().length - 1 !== itemIndex) {
        var moveDownBtn = this.theme.getButton({
          textContent: 'Move down'
        });
        moveDownBtn.addEventListener('click', function () {
          var toIndex = itemIndex + 1;

          _this2.move(itemIndex, toIndex);
        });
        btnGroup.appendChild(moveDownBtn);
      }

      itemEditor.ui.container.appendChild(itemEditor.ui.actionsSlot);
      itemEditor.ui.actionsSlot.appendChild(btnGroup);
      btnGroup.appendChild(deleteBtn);
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
      this.instance.childEditors.forEach(function (editor) {
        editor.destroy();
      });
      this.instance.childEditors = [];
      value.forEach(function (itemValue) {
        var itemEditor = _this3.createItemInstance(itemValue);

        itemEditor.setValue(itemValue, false);

        _this3.instance.childEditors.push(itemEditor);

        var buttons = Array.from(_this3.container.querySelectorAll('button'));

        _this3.instance.childEditors.forEach(function (childEditor) {
          var childButtons = Array.from(childEditor.ui.container.querySelectorAll('button'));
          buttons = buttons.concat(childButtons);
        });

        if (_this3.disabled) {
          itemEditor.ui.disable();
          buttons.forEach(function (button) {
            button.setAttribute('disabled', 'disabled');
          });
        } else {
          itemEditor.ui.enable();
          buttons.forEach(function (button) {
            button.removeAttribute('disabled');
          });
        }
      });
      this.instance.childEditors.forEach(function (editor) {
        _this3.childEditorsSlot.appendChild(editor.ui.container);
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
// CONCATENATED MODULE: ./src/types/array.js






function types_array_createSuper(Derived) { var hasNativeReflectConstruct = types_array_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function types_array_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var array_ArrayInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(ArrayInstance, _Instance);

  var _super = types_array_createSuper(ArrayInstance);

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
      return this.jedi.createEditor({
        jedi: this.jedi,
        schema: new src_schema(schema),
        path: this.path + '.' + this.childEditors.length,
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
    key: "onChildEditorChange",
    value: function onChildEditorChange() {
      var value = [];
      this.childEditors.forEach(function (instance) {
        value.push(instance.getValue());
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
}(src_instance);

/* harmony default export */ var types_array = (array_ArrayInstance);
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
// CONCATENATED MODULE: ./src/types/boolean.js






function types_boolean_createSuper(Derived) { var hasNativeReflectConstruct = types_boolean_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function types_boolean_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var boolean_BooleanInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(BooleanInstance, _Instance);

  var _super = types_boolean_createSuper(BooleanInstance);

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
}(src_instance);

/* harmony default export */ var types_boolean = (boolean_BooleanInstance);
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
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.childEditorsSlot);
      this.container.appendChild(this.actionsSlot);

      if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
        var label = this.theme.getLabel({
          textContent: 'Property Name',
          "for": 'jedi-add-property-input-' + this.instance.path
        });
        var input = this.theme.getInput({
          type: 'text',
          id: 'jedi-add-property-input-' + this.instance.path
        });
        var addBtn = this.theme.getButton({
          textContent: 'Add property'
        });
        addBtn.addEventListener('click', function () {
          var key = input.value; // if not property name was given return

          if (key.length === 0) {
            return;
          } // if property exist return


          if (isSet(_this.instance.value[key])) {
            return;
          }

          _this.instance.createChildInstance({
            type: 'any'
          }, key);

          _this.instance.setValue(_this.instance.value);

          input.value = '';
        });
        this.instance.childEditors.forEach(function (instance) {
          var id = 'property-' + instance.getKey();

          var checkboxContainer = _this.theme.getCheckboxContainer();

          var label = _this.theme.getCheckboxLabel({
            "for": id,
            textContent: instance.getKey()
          });

          var checkbox = _this.theme.getCheckbox({
            id: id
          });

          checkbox.checked = true;
          checkbox.addEventListener('change', function () {
            if (checkbox.checked) {} else {
              _this.instance.deleteChildInstance(instance.getKey());
            }
          }); // appends

          _this.actionsSlot.appendChild(checkboxContainer);

          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
        });
        this.actionsSlot.appendChild(label);
        this.actionsSlot.appendChild(input);
        this.actionsSlot.appendChild(addBtn);
      }
    } // addChildEditor (schema, key) {
    //   const editor = this.instance.jedi.createEditor({
    //     jedi: this.instance.jedi,
    //     schema: new Schema(schema),
    //     path: this.instance.path + '.' + key,
    //     parent: this.instance
    //   })
    //
    //   // removeBtn
    //   const notRequired = !this.instance.isRequired(key)
    //   const notDependentRequired = !this.instance.isDependentRequired(key)
    //   const editableProperties = this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')
    //
    //   if (notRequired && notDependentRequired && editableProperties) {
    //     const removeBtn = this.theme.getButton({
    //       textContent: 'Remove property'
    //     })
    //     editor.container.appendChild(removeBtn)
    //     removeBtn.addEventListener('click', () => {
    //       delete this.instance.value[key]
    //       this.instance.setValue(this.instance.value)
    //     })
    //   }
    //
    //   this.instance.childEditors.push(editor)
    //   this.instance.value[key] = editor.getValue()
    // }

  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;

      var value = this.instance.getValue();
      Object.keys(value).forEach(function (key) {
        var childEditor = _this2.instance.getChildInstance(key);

        _this2.childEditorsSlot.appendChild(childEditor.ui.container);

        if (childEditor) {
          if (_this2.disabled) {
            childEditor.ui.disable();
          } else {
            childEditor.ui.enable();
          }
        }
      });
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
  }]);

  return ObjectEditor;
}(editors_editor);

/* harmony default export */ var editors_object = (object_ObjectEditor);
// CONCATENATED MODULE: ./src/types/object.js






function types_object_createSuper(Derived) { var hasNativeReflectConstruct = types_object_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function types_object_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var object_ObjectInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(ObjectInstance, _Instance);

  var _super = types_object_createSuper(ObjectInstance);

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

      // if (this.schema.properties()) {
      //   Object.keys(this.schema.properties()).forEach((key) => {
      //     const showRequiredOnly = this.jedi.options.showRequiredOnly || this.schema.option('showRequiredOnly')
      //     const isNotRequired = !this.schema.required() || !this.schema.required().includes(key)
      //
      //     if (showRequiredOnly && isNotRequired) {
      //       // do nothing
      //     } else {
      //       const schema = this.schema.property(key)
      //       this.createChildInstance(schema, key)
      //     }
      //   })
      //
      //   // Add dependent required properties
      //
      //   Object.keys(this.schema.properties()).forEach((key) => {
      //     if (this.isDependentRequired(key)) {
      //       const schema = this.schema.property(key)
      //       this.createChildInstance(schema, key)
      //     }
      //   })
      // }
      if (this.schema.properties()) {
        Object.keys(this.schema.properties()).forEach(function (key) {
          var schema = _this.schema.property(key);

          _this.createChildInstance(schema, key);
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
    key: "createChildInstance",
    value: function createChildInstance(schema, key) {
      var instance = this.jedi.createEditor({
        jedi: this.jedi,
        schema: new src_schema(schema),
        path: this.path + '.' + key,
        parent: this
      });
      this.childEditors.push(instance);
      this.value[key] = instance.getValue();
    }
  }, {
    key: "deleteChildInstance",
    value: function deleteChildInstance(key) {
      for (var i = this.childEditors.length - 1; i >= 0; i--) {
        var instance = this.childEditors[i];

        if (instance.getKey() === key) {
          instance.destroy();
          this.childEditors.splice(i, 1);
          this.onChildEditorChange();
        }
      }
    }
  }, {
    key: "onChildEditorChange",
    value: function onChildEditorChange() {
      var value = {};
      this.childEditors.forEach(function (instance) {
        value[instance.getKey()] = instance.getValue();
      });
      this.setValue(value);
    }
  }, {
    key: "getChildInstance",
    value: function getChildInstance(key) {
      return this.childEditors.find(function (instance) {
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
    key: "onSetValue",
    value: function onSetValue() {
      var _this3 = this;

      var value = this.getValue(); // remove any children that are not included in the value

      for (var i = this.childEditors.length - 1; i >= 0; i--) {
        var instance = this.childEditors[i];
        var key = instance.getKey();

        if (!isSet(value[key])) {
          this.deleteChildInstance(key);
        }
      }

      Object.keys(value).forEach(function (key) {
        var childInstance = _this3.getChildInstance(key); // If a value has a already a child instance


        if (childInstance) {
          var oldValue = childInstance.getValue();
          var newValue = value[childInstance.getKey()]; // update child value if the old value and the new value are different

          if (!equal(oldValue, newValue)) {
            childInstance.setValue(newValue, false);
          }
        } else {
          // create new child instance for the new value entry having the value as default
          var initialValue = value[key];
          var type = getType(initialValue);
          var schema = {
            type: type,
            "default": initialValue
          };

          _this3.createChildInstance(schema, key);
        }
      });
    }
  }]);

  return ObjectInstance;
}(src_instance);

/* harmony default export */ var types_object = (object_ObjectInstance);
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
// CONCATENATED MODULE: ./src/types/string.js






function types_string_createSuper(Derived) { var hasNativeReflectConstruct = types_string_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function types_string_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var string_StringInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(StringInstance, _Instance);

  var _super = types_string_createSuper(StringInstance);

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
}(src_instance);

/* harmony default export */ var types_string = (string_StringInstance);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__(7);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

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
// CONCATENATED MODULE: ./src/types/multiple.js








function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function types_multiple_createSuper(Derived) { var hasNativeReflectConstruct = types_multiple_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function types_multiple_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var multiple_MultipleInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(MultipleInstance, _Instance);

  var _super = types_multiple_createSuper(MultipleInstance);

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
        var editor = _this.jedi.createEditor({
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
      if (!equal(this.activeEditor.sanitize(value), value)) {
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
}(src_instance);

/* harmony default export */ var types_multiple = (multiple_MultipleInstance);
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
// CONCATENATED MODULE: ./src/types/number.js






function types_number_createSuper(Derived) { var hasNativeReflectConstruct = types_number_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function types_number_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var number_NumberInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(NumberInstance, _Instance);

  var _super = types_number_createSuper(NumberInstance);

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
}(src_instance);

/* harmony default export */ var types_number = (number_NumberInstance);
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
    value: function sanitize(value) {
      return null;
    }
  }]);

  return NullEditor;
}(editors_editor);

/* harmony default export */ var editors_null = (null_NullEditor);
// CONCATENATED MODULE: ./src/types/null.js






function types_null_createSuper(Derived) { var hasNativeReflectConstruct = types_null_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function types_null_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var null_NullInstance = /*#__PURE__*/function (_Instance) {
  inherits_default()(NullInstance, _Instance);

  var _super = types_null_createSuper(NullInstance);

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
}(src_instance);

/* harmony default export */ var types_null = (null_NullInstance);
// CONCATENATED MODULE: ./src/instance-resolver.js



function instance_resolver_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = instance_resolver_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function instance_resolver_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return instance_resolver_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return instance_resolver_arrayLikeToArray(o, minLen); }

function instance_resolver_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











var instance_resolver_InstanceResolver = /*#__PURE__*/function () {
  function InstanceResolver() {
    var _this = this;

    classCallCheck_default()(this, InstanceResolver);

    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [function (schema, config) {
      if (schema.anyOf() || schema.oneOf() || schema.typeIs('any') || schema.types() || !schema.type()) {
        if (!schema.type() && schema["default"]()) {
          var originalSchema = schema.clone();
          originalSchema.type = getType(schema["default"]());
          var newSchema = new src_schema(originalSchema);
          return _this.resolve(newSchema);
        } else {
          return new types_multiple(config);
        }
      }
    }, function (schema, config) {
      if (schema.typeIs('boolean')) {
        return new types_boolean(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('object')) {
        return new types_object(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('array')) {
        return new types_array(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('string')) {
        return new types_string(config);
      }
    }, function (schema, config) {
      if (schema.typeIsNumeric()) {
        return new types_number(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('null')) {
        return new types_null(config);
      }
    }];
  }
  /**
   * Adds a resolver function
   */


  createClass_default()(InstanceResolver, [{
    key: "addResolver",
    value: function addResolver(resolver) {
      this.resolvers.unshift(resolver);
    }
    /**
     * returns the first editor class that matches the passed schema.
     */

  }, {
    key: "resolve",
    value: function resolve(config) {
      var _iterator = instance_resolver_createForOfIteratorHelper(this.resolvers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var resolver = _step.value;
          var editorClass = resolver(config.schema, config);

          if (isSet(editorClass)) {
            return editorClass;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return InstanceResolver;
}();

/* harmony default export */ var instance_resolver = (instance_resolver_InstanceResolver);
// CONCATENATED MODULE: ./src/validator.js







var validator_Validator = /*#__PURE__*/function () {
  function Validator() {
    classCallCheck_default()(this, Validator);

    this.validators = ['allOf', 'anyOf', 'oneOf', 'dependentRequired', 'format', 'if', 'const', 'not', 'type', 'uniqueItems', 'exclusiveMaximum', 'exclusiveMinimum', 'minItems', 'maxItems', 'minLength', 'maxLength', 'minimum', 'maximum', 'multipleOf', 'pattern', 'patternProperties', 'enum', 'required', 'minProperties', 'maxProperties'];
  }

  createClass_default()(Validator, [{
    key: "allOf",
    value: function allOf(value, schema, key, path) {
      var _this = this;

      var errors = [];

      if (schema.allOf()) {
        schema.allOf().forEach(function (schema) {
          var allOfErrors = _this.validate(value, new src_schema(schema), key, path);

          errors = [].concat(toConsumableArray_default()(errors), toConsumableArray_default()(allOfErrors));
        });
      }

      return errors;
    }
  }, {
    key: "anyOf",
    value: function anyOf(value, schema, key, path) {
      var _this2 = this;

      var errors = [];

      if (schema.anyOf()) {
        var valid = schema.anyOf().some(function (schema) {
          var anyOfErrors = _this2.validate(value, new src_schema(schema), key, path);

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
    }
  }, {
    key: "const",
    value: function _const(value, schema, key, path) {
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
    }
  }, {
    key: "dependentRequired",
    value: function dependentRequired(value, schema, key, path) {
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
    }
  }, {
    key: "enum",
    value: function _enum(value, schema, key, path) {
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
    }
  }, {
    key: "exclusiveMaximum",
    value: function exclusiveMaximum(value, schema, key, path) {
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
    }
  }, {
    key: "exclusiveMinimum",
    value: function exclusiveMinimum(value, schema, key, path) {
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
    }
  }, {
    key: "format",
    value: function format(value, schema, key, path) {
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
    }
  }, {
    key: "if",
    value: function _if(value, schema, key, path) {
      var errors = [];

      if (schema["if"]()) {
        if (!schema.then() || !schema["else"]()) {
          return errors;
        }

        var ifEditor = new src({
          schema: schema["if"](),
          startval: value
        });
        var ifErrors = ifEditor.validate();

        if (ifErrors.length === 0) {
          var thenEditor = new src({
            schema: schema.then(),
            startval: value
          });
          errors = thenEditor.validate();
        } else {
          var elseEditor = new src({
            schema: schema["else"](),
            startval: value
          });
          errors = elseEditor.validate();
        }
      }

      return errors;
    }
  }, {
    key: "maximum",
    value: function maximum(value, schema, key, path) {
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
    }
  }, {
    key: "maxItems",
    value: function maxItems(value, schema, key, path) {
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
    }
  }, {
    key: "maxLength",
    value: function maxLength(value, schema, key, path) {
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
    }
  }, {
    key: "maxProperties",
    value: function maxProperties(value, schema, key, path) {
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
    }
  }, {
    key: "minimum",
    value: function minimum(value, schema, key, path) {
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
    }
  }, {
    key: "minItems",
    value: function minItems(value, schema, key, path) {
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
    }
  }, {
    key: "minLength",
    value: function minLength(value, schema, key, path) {
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
    }
  }, {
    key: "minProperties",
    value: function minProperties(value, schema, key, path) {
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
    }
  }, {
    key: "multipleOf",
    value: function multipleOf(value, schema, key, path) {
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
    }
  }, {
    key: "not",
    value: function not(value, schema, key, path) {
      var errors = [];

      if (schema.not()) {
        var notErrors = this.validate(value, new src_schema(schema.not()), key, path);
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
    }
  }, {
    key: "oneOf",
    value: function oneOf(value, schema, key, path) {
      var _this3 = this;

      var errors = [];

      if (schema.oneOf()) {
        var counter = 0;
        schema.oneOf().forEach(function (schema) {
          var oneOfErrors = _this3.validate(value, new src_schema(schema), key, path);

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
    }
  }, {
    key: "pattern",
    value: function pattern(value, schema, key, path) {
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
    }
  }, {
    key: "patternProperties",
    value: function patternProperties(value, schema, key, path) {
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
                startval: value[propertyName]
              });
              errors = [].concat(toConsumableArray_default()(errors), toConsumableArray_default()(editor.validate()));
            }
          });
        });
      }

      return errors;
    }
  }, {
    key: "required",
    value: function required(value, schema, key, path) {
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
    }
  }, {
    key: "type",
    value: function type(value, schema, key, path) {
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
    }
  }, {
    key: "uniqueItems",
    value: function uniqueItems(value, schema, key, path) {
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
    }
    /**
     * Adds a validator function
     */

  }, {
    key: "addValidator",
    value: function addValidator(validator) {
      this.validators.push(validator);
    }
    /**
     * Validates a value against it's schema
     */

  }, {
    key: "validate",
    value: function validate(value, schema, key, path) {
      var _this4 = this;

      var schemaErrors = [];
      this.validators.forEach(function (validator) {
        var validatorErrors = _this4[validator](value, schema, key, path);

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

/* harmony default export */ var src_validator = (validator_Validator);
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
    _this.container = document.querySelector(options.container);
    _this.editors = {};
    _this.root = null;
    _this.theme = null;
    _this.listeners = [];
    _this.resolver = new instance_resolver();
    _this.validator = new src_validator();
    _this.refParser = new ref_parser();
    _this.schema = new src_schema(options.schema);
    _this.errors = [];

    _this.init();

    return _this;
  }

  createClass_default()(Jedi, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.refParser.dereference(this.schema.schema);
      this.root = this.createEditor({
        jedi: this,
        schema: this.schema
      });

      if (this.options.startval) {
        this.root.setValue(this.options.startval);
      }

      if (this.options.isEditor && this.container) {
        this.appendHiddenInput();
        this.container.appendChild(this.root.ui.container);
        this.container.classList.add('jedi-ready');
      }

      this.root.on('change', function () {
        _this2.emit('change');
      });
      console.table(this.editors);
    }
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
     * Adds an editor instance in the editors object
     */

  }, {
    key: "registerEditor",
    value: function registerEditor(editor) {
      this.editors[editor.path] = editor;
    }
    /**
     * Removes an editor instance from the editors object
     */

  }, {
    key: "unregisterEditor",
    value: function unregisterEditor(editor) {
      this.editors[editor.path] = null;
      delete this.editors[editor.path];
    }
    /**
     * Creates an editor instance based on the passed schema and config
     */

  }, {
    key: "createEditor",
    value: function createEditor(config) {
      return this.resolver.resolve(config);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.root.getValue();
    }
  }, {
    key: "setValue",
    value: function setValue() {
      var _this$root;

      return (_this$root = this.root).setValue.apply(_this$root, arguments);
    }
  }, {
    key: "getEditor",
    value: function getEditor(path) {
      return this.editors[path];
    }
  }, {
    key: "disable",
    value: function disable() {
      this.root.ui.disable();
    }
  }, {
    key: "enable",
    value: function enable() {
      this.root.ui.enable();
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this4 = this;

      this.errors = [];
      Object.keys(this.editors).forEach(function (key) {
        var editor = _this4.editors[key];
        _this4.errors = [].concat(toConsumableArray_default()(_this4.errors), toConsumableArray_default()(editor.validate()));
      });
      return this.errors;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.options.startval = this.getValue();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL3dpcmVmcmFtZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3R5cGVzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3R5cGVzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdHlwZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdHlwZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlLXJlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcXVhbCIsImEiLCJiIiwiZGlmZmVyZW50IiwiaXNOdWxsIiwidmFsdWUiLCJpc1NldCIsImlzTm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsImlzT2JqZWN0IiwiZ2V0VHlwZSIsInR5cGUiLCJ1dWlkdjQiLCJ2NCIsIm1lcmdlRGVlcCIsInRhcmdldCIsInNvdXJjZXMiLCJsZW5ndGgiLCJzb3VyY2UiLCJzaGlmdCIsImtleSIsIk9iamVjdCIsImFzc2lnbiIsIkV2ZW50RW1pdHRlciIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsInB1c2giLCJmaWx0ZXIiLCJsaXN0ZW5lciIsImZvckVhY2giLCJrZXlzIiwiSW5zdGFuY2UiLCJjb25maWciLCJqZWRpIiwic2NoZW1hIiwidW5kZWZpbmVkIiwicGF0aCIsInBhcmVudCIsImNoaWxkRWRpdG9ycyIsInVpIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwicHJlcGFyZSIsIm9wdGlvbnMiLCJpc0VkaXRvciIsInNldFVJIiwib24iLCJvbkNoaWxkRWRpdG9yQ2hhbmdlIiwic3BsaXQiLCJwb3AiLCJyZWdpc3RlckVkaXRvciIsInVucmVnaXN0ZXJFZGl0b3IiLCJpbmNsdWRlcyIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJzYW5pdGl6ZSIsImVtaXQiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0ZSIsImdldFZhbHVlIiwiZ2V0S2V5IiwiY29udGFpbmVyIiwidGhlbWUiLCJnZXRDb250YWluZXIiLCJpbnN0YW5jZSIsImRlc3Ryb3kiLCJ1bnJlZ2lzdGVyIiwiU2NoZW1hIiwiYWxsT2YiLCJhbnlPZiIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsIml0ZW1zIiwibWF4aW11bSIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90Iiwib3B0aW9uIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIlRoZW1lQmFyZWJvbmVzIiwiZXJyb3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJhY3Rpb25zU2xvdCIsImNoaWxkRWRpdG9yc1Nsb3QiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJtZXNzYWdlc1Nsb3QiLCJsYWJlbCIsInNyT25seSIsImxlZ2VuZCIsImlucHV0IiwiaWQiLCJjaGVja2JveCIsInJhZGlvIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJvcHRpb25WYWx1ZXMiLCJpbmRleCIsIm9wdGlvbnNMYWJlbHMiLCJhcHBlbmRDaGlsZCIsIlRoZW1lV2lyZWZyYW1lIiwiYnRuR3JvdXAiLCJmaWVsZHNldCIsImNoZWNrYm94Q29udGFpbmVyIiwiRWRpdG9yIiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZEVkaXRvcnNTbG90IiwiZGlzYWJsZWQiLCJidWlsZCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJyZWZyZXNoVUkiLCJyZWFkeSIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsImVycm9ycyIsImlubmVySFRNTCIsImdldElucHV0RXJyb3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJBcnJheUVkaXRvciIsInNldENvbnRhaW5lciIsImdldEJ0bkdyb3VwIiwiYWRkQnRuIiwiZ2V0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwic2V0VmFsdWUiLCJnZXRGaWVsZHNldCIsImdldExlZ2VuZCIsImdldERlc2NyaXB0aW9uIiwiaXRlbVNjaGVtYSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJlZGl0b3IiLCJpdGVtVmFsdWUiLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJidXR0b25zIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGlsZEVkaXRvciIsImNoaWxkQnV0dG9ucyIsImNvbmNhdCIsImRpc2FibGUiLCJlbmFibGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJBcnJheUluc3RhbmNlIiwidGVtcEVkaXRvciIsImN1cnJlbnRWYWx1ZSIsIkJvb2xlYW5FZGl0b3IiLCJnZXRDaGVja2JveENvbnRhaW5lciIsImdldENoZWNrYm94TGFiZWwiLCJnZXRDaGVja2JveCIsImNoZWNrZWQiLCJCb29sZWFuIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsInJhZGlvSW5wdXRzIiwiZ2V0UmFkaW9MZWdlbmQiLCJyYWRpb0NvbnRhaW5lciIsImdldFJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW8iLCJyYWRpb1ZhbHVlIiwiZ2V0TGFiZWwiLCJCb29sZWFuRW51bVNlbGVjdEVkaXRvciIsImdldFNlbGVjdCIsIkJvb2xlYW5JbnN0YW5jZSIsImZvcm1hdElzIiwiT2JqZWN0RWRpdG9yIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwiZ2V0SW5wdXQiLCJjcmVhdGVDaGlsZEluc3RhbmNlIiwiZGVsZXRlQ2hpbGRJbnN0YW5jZSIsImdldENoaWxkSW5zdGFuY2UiLCJPYmplY3RJbnN0YW5jZSIsInByb3BlcnR5Iiwib25TZXRWYWx1ZSIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiaGFzT3duIiwiaSIsImZpbmQiLCJjaGlsZEluc3RhbmNlIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWEiLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiU3RyaW5nSW5zdGFuY2UiLCJTdHJpbmciLCJNdWx0aXBsZUVkaXRvciIsInN3aXRjaGVyQnV0dG9ucyIsInN3aXRjaGVyIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJzd2l0Y2hFZGl0b3IiLCJvbGRFZGl0b3IiLCJlZGl0b3JzIiwibGFzdEluZGV4IiwiYWN0aXZlRWRpdG9yIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJyZW1vdmUiLCJNdWx0aXBsZUluc3RhbmNlIiwic2NoZW1hcyIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0eXBlcyIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsIm5ld0luZGV4IiwibWF0Y2hFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVySW5zdGFuY2UiLCJ0eXBlSXNOdW1lcmljIiwiTnVsbEVkaXRvciIsIk51bGxJbnN0YW5jZSIsIkluc3RhbmNlUmVzb2x2ZXIiLCJyZXNvbHZlcnMiLCJvcmlnaW5hbFNjaGVtYSIsIm5ld1NjaGVtYSIsInJlc29sdmUiLCJyZXNvbHZlciIsInVuc2hpZnQiLCJlZGl0b3JDbGFzcyIsIlZhbGlkYXRvciIsInZhbGlkYXRvcnMiLCJhbGxPZkVycm9ycyIsInZhbGlkIiwic29tZSIsImFueU9mRXJyb3JzIiwiZmllbGQiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJqb2luIiwiZSIsImNvbXB1dGVkTWF4aW11bSIsImNvbXB1dGVkTWluaW11bSIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJpZkVkaXRvciIsIkplZGkiLCJzdGFydHZhbCIsImlmRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJwcm9wZXJ0aWVzQ291bnQiLCJpc011bHRpcGxlT2YiLCJub3RFcnJvcnMiLCJjb3VudGVyIiwib25lT2ZFcnJvcnMiLCJwcm9wZXJ0eU5hbWUiLCJzdHJpbmciLCJudW1iZXIiLCJpbnRlZ2VyIiwiYXJyYXkiLCJvYmplY3QiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwic2NoZW1hRXJyb3JzIiwidmFsaWRhdG9yRXJyb3JzIiwiUmVmUGFyc2VyIiwiaXRlcmF0aW9ucyIsImRlZnMiLCJ0cmF2ZXJzZSIsInJlZiIsInN0YXJ0c1dpdGgiLCJyZWZQYXJ0cyIsImRlZk5hbWUiLCJkZWZpbmUiLCJzaG93UmVxdWlyZWRPbmx5IiwicXVlcnlTZWxlY3RvciIsInJvb3QiLCJyZWZQYXJzZXIiLCJkZXJlZmVyZW5jZSIsImFwcGVuZEhpZGRlbklucHV0IiwiY29uc29sZSIsInRhYmxlIiwiaGlkZGVuSW5wdXQiLCJhcmd1bWVudHMiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsK0c7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0c7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsNEc7Ozs7OztBQ25CQSxxQkFBcUIsbUJBQU8sQ0FBQyxFQUFxQjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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U0FBTCxDQUFlOEUsU0FBZixHQUEyQixFQUEzQjtNQUVBeEgsTUFBTSxDQUFDVSxJQUFQLENBQVksSUFBWixFQUFrQkQsT0FBbEIsQ0FBMEIsVUFBQ1YsR0FBRCxFQUFTO1FBQ2pDLE9BQU8sTUFBSSxDQUFDQSxHQUFELENBQVg7TUFDRCxDQUZEO0lBR0Q7Ozs7RUE1SWdCRyxhOztBQStJSnlRLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbmV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSAhPT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc05vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc0ludGVnZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdpbnRlZ2VyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgdXVpZHY0ID0gKCkgPT4ge1xuICByZXR1cm4gdjQoKVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgICBba2V5XToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBidWlsZCBwaXBlbGluZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRFZGl0b3JDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXRVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGluIHRoZSBqZWRpLmVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGlzIGVkaXRvciBpbnN0YW5jZSBmcm9tIHRoZSBqZWRpLmVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3RlckVkaXRvcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIElmIHNjaGVtYS5kZWZhdWx0IGlzIG5vdCBkZWZpbmVkLCBzZXRzIGFuIGluaXRpYWwgdmFsdWUgYmFzZWQgb24gaXQncyB0eXBlLlxuICAgKi9cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgLy8gaWYgKHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgIC8vICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCB1bmxlc3MgdHJpZ2dlcnNDaGFuZ2UgaXMgZXhwbGljaXRseSBzZXQgdG8gZmFsc2UuIFRoaXMgaXNcbiAgICogdXNlZnVsIGZvciBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWVzLlxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuc2FuaXRpemUobmV3VmFsdWUpXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgYSBjaGlsZCBlZGl0b3IgY2hhbmdlcy4gVGhpcyBpcyByZWxldmFudCBmb3IgQXJyYXlcbiAgICogYW5kIE9iamVjdCBlZGl0b3JzLlxuICAgKi9cbiAgb25DaGlsZEVkaXRvckNoYW5nZSAoKSB7XG4gIH1cblxuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRDb250YWluZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yLCBhbmQgZXZlcnkgcmVmZXJlbmNlIHRoYXQgaXQgaXMgYXR0YWNoZWQgdG8gaXQuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogZmFsc2VcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IGZhbHNlXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0ID8gdGhpcy5zY2hlbWEuY29uc3QgOiBmYWxzZVxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0ID8gdGhpcy5zY2hlbWEuZGVmYXVsdCA6IGZhbHNlXG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogZmFsc2VcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiBmYWxzZVxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpID8gdGhpcy5zY2hlbWEuZWxzZSA6IGZhbHNlXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybWF0KCkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSA/IHRoaXMuc2NoZW1hLmlmIDogZmFsc2VcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWF4UHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSA/IHRoaXMuc2NoZW1hLm5vdCA6IGZhbHNlXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0eSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogZmFsc2VcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiBmYWxzZVxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IGZhbHNlXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMudHlwZSgpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVzICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiBmYWxzZVxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgc2VyaWFsaXplICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGFjdGlvbnNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhY3Rpb25zU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGFjdGlvbnNTbG90XG4gIH1cblxuICBnZXRDaGlsZEVkaXRvcnNTbG90ICgpIHtcbiAgICBjb25zdCBjaGlsZEVkaXRvcnNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGlsZEVkaXRvcnNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gY2hpbGRFZGl0b3JzU2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBtZXNzYWdlc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lc3NhZ2VzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBtZXNzYWdlc1Nsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZVdpcmVmcmFtZSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuLi90aGVtZXMvd2lyZWZyYW1lJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSB0aGlzLnRoZW1lLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRFZGl0b3JzU2xvdCgpXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLnJlYWR5IHx8IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgYnVpbGQgKCkge31cblxuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLnZhbGlkYXRlKClcblxuICAgIHRoaXMubWVzc2FnZXNTbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZXNTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0SW5wdXRFcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCIvKiBnbG9iYWwgY29uZmlybSAqL1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBnZXRUeXBlLCBjbG9uZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIC8vIGRlbGV0ZUFsbFxuICAgIHRoaXMuZGVsZXRlQWxsQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG4gICAgY29uc3QgaXRlbVNjaGVtYSA9IG5ldyBTY2hlbWEoc2NoZW1hKVxuXG4gICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuaW5zdGFuY2UuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5pbnN0YW5jZS5qZWRpLFxuICAgICAgc2NoZW1hOiBpdGVtU2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzLmluc3RhbmNlXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IuZ2V0S2V5KCkpXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgIH0pXG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICB9XG5cbiAgICBpdGVtRWRpdG9yLnVpLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWRpdG9yLnVpLmFjdGlvbnNTbG90KVxuICAgIGl0ZW1FZGl0b3IudWkuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgcmV0dXJuIGl0ZW1FZGl0b3JcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRFZGl0b3JzID0gW11cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIGl0ZW1FZGl0b3Iuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRFZGl0b3JzLnB1c2goaXRlbUVkaXRvcilcblxuICAgICAgbGV0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZEJ1dHRvbnMgPSBBcnJheS5mcm9tKGNoaWxkRWRpdG9yLnVpLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSlcbiAgICAgICAgYnV0dG9ucyA9IGJ1dHRvbnMuY29uY2F0KGNoaWxkQnV0dG9ucylcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGl0ZW1FZGl0b3IudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbUVkaXRvci51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoZWRpdG9yLnVpLmNvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRkQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5pdGVtcygpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gIH1cblxuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgdmFsdWUucHVzaChpbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJykpIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICAgIGZvcjogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBhZGRCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgICAgfSlcblxuICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBpbnB1dC52YWx1ZVxuXG4gICAgICAgIC8vIGlmIG5vdCBwcm9wZXJ0eSBuYW1lIHdhcyBnaXZlbiByZXR1cm5cbiAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHByb3BlcnR5IGV4aXN0IHJldHVyblxuICAgICAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZEluc3RhbmNlKHsgdHlwZTogJ2FueScgfSwga2V5KVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRFZGl0b3JzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Byb3BlcnR5LScgKyBpbnN0YW5jZS5nZXRLZXkoKVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgICAgIGZvcjogaWQsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IGluc3RhbmNlLmdldEtleSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfSlcblxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZVxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlQ2hpbGRJbnN0YW5jZShpbnN0YW5jZS5nZXRLZXkoKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIH1cbiAgfVxuXG4gIC8vIGFkZENoaWxkRWRpdG9yIChzY2hlbWEsIGtleSkge1xuICAvLyAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2UuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAvLyAgICAgamVkaTogdGhpcy5pbnN0YW5jZS5qZWRpLFxuICAvLyAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gIC8vICAgICBwYXRoOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBrZXksXG4gIC8vICAgICBwYXJlbnQ6IHRoaXMuaW5zdGFuY2VcbiAgLy8gICB9KVxuICAvL1xuICAvLyAgIC8vIHJlbW92ZUJ0blxuICAvLyAgIGNvbnN0IG5vdFJlcXVpcmVkID0gIXRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChrZXkpXG4gIC8vICAgY29uc3Qgbm90RGVwZW5kZW50UmVxdWlyZWQgPSAhdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGtleSlcbiAgLy8gICBjb25zdCBlZGl0YWJsZVByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKVxuICAvL1xuICAvLyAgIGlmIChub3RSZXF1aXJlZCAmJiBub3REZXBlbmRlbnRSZXF1aXJlZCAmJiBlZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgLy8gICAgIGNvbnN0IHJlbW92ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgLy8gICAgICAgdGV4dENvbnRlbnQ6ICdSZW1vdmUgcHJvcGVydHknXG4gIC8vICAgICB9KVxuICAvLyAgICAgZWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXG4gIC8vICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlLnZhbHVlW2tleV1cbiAgLy8gICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMucHVzaChlZGl0b3IpXG4gIC8vICAgdGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldID0gZWRpdG9yLmdldFZhbHVlKClcbiAgLy8gfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkRWRpdG9yID0gdGhpcy5pbnN0YW5jZS5nZXRDaGlsZEluc3RhbmNlKGtleSlcblxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LmFwcGVuZENoaWxkKGNoaWxkRWRpdG9yLnVpLmNvbnRhaW5lcilcblxuICAgICAgaWYgKGNoaWxkRWRpdG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3IudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3IudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4uL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBlcXVhbCwgaXNTZXQsIGdldFR5cGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgLy8gICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIC8vICAgICBjb25zdCBzaG93UmVxdWlyZWRPbmx5ID0gdGhpcy5qZWRpLm9wdGlvbnMuc2hvd1JlcXVpcmVkT25seSB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ3Nob3dSZXF1aXJlZE9ubHknKVxuICAgIC8vICAgICBjb25zdCBpc05vdFJlcXVpcmVkID0gIXRoaXMuc2NoZW1hLnJlcXVpcmVkKCkgfHwgIXRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMoa2V5KVxuICAgIC8vXG4gICAgLy8gICAgIGlmIChzaG93UmVxdWlyZWRPbmx5ICYmIGlzTm90UmVxdWlyZWQpIHtcbiAgICAvLyAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgIC8vICAgICAgIHRoaXMuY3JlYXRlQ2hpbGRJbnN0YW5jZShzY2hlbWEsIGtleSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSlcbiAgICAvL1xuICAgIC8vICAgLy8gQWRkIGRlcGVuZGVudCByZXF1aXJlZCBwcm9wZXJ0aWVzXG4gICAgLy9cbiAgICAvLyAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgLy8gICAgIGlmICh0aGlzLmlzRGVwZW5kZW50UmVxdWlyZWQoa2V5KSkge1xuICAgIC8vICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnR5KGtleSlcbiAgICAvLyAgICAgICB0aGlzLmNyZWF0ZUNoaWxkSW5zdGFuY2Uoc2NoZW1hLCBrZXkpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkSW5zdGFuY2Uoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoZGVwZW5kZW50UmVxdWlyZWQpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGRJbnN0YW5jZSAoc2NoZW1hLCBrZXkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZEluc3RhbmNlIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZEVkaXRvcnNbaV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkRWRpdG9ycy5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkRWRpdG9yQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgdmFsdWVbaW5zdGFuY2UuZ2V0S2V5KCldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZ2V0Q2hpbGRJbnN0YW5jZSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFZGl0b3JzLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkRWRpdG9yc1tpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmICghaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgdGhpcy5kZWxldGVDaGlsZEluc3RhbmNlKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZEluc3RhbmNlID0gdGhpcy5nZXRDaGlsZEluc3RhbmNlKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZEluc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGRJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGRJbnN0YW5jZS5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmICghZXF1YWwob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkSW5zdGFuY2Uuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGRJbnN0YW5jZShzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH1cblxuICAgIC8vIGlucHV0XG4gICAgLy8gdG9kbyBmaWxlLCByYW5nZSBzaG91bGQgYmUgaGFuZGxlZCBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4uL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuXG5jbGFzcyBTdHJpbmdJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHRoaXMuc2NoZW1hLmVudW0oKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEVkaXRvcihpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMucHVzaChidXR0b24pXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoZXIpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCAnbXVsdGlwbGUnKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdHJ1ZVxuICAgIH0pKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRFZGl0b3IgPSB0aGlzLmluc3RhbmNlLmVkaXRvcnNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkRWRpdG9yLnVpLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRFZGl0b3IudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmNvbnRhaW5lcilcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5kaXNhYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5lbmFibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0LCBlcXVhbCwgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcblxuY2xhc3MgTXVsdGlwbGVJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTXVsdGlwbGVFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuZWRpdG9ycyA9IFtdXG4gICAgdGhpcy5hY3RpdmVFZGl0b3IgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIGlmICh0aGlzLnNjaGVtYS5hbnlPZigpIHx8IHRoaXMuc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IHRoaXMuc2NoZW1hLmFueU9mKCkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoc2NoZW1hLmFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS5vcHRpb25zPy5zd2l0Y2hlclRpdGxlIHx8ICdPcHRpb24tJyArIChpbmRleCArIDEpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVzKCkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gRWRpdG9yc1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGVkaXRvci51bnJlZ2lzdGVyKClcblxuICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuZWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuZWRpdG9yc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKDAsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEVkaXRvciAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gdGhpcy5lZGl0b3JzW3RoaXMuaW5kZXhdXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUVkaXRvci5nZXRWYWx1ZSgpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpXG4gIH1cblxuICBtYXRjaEVkaXRvciAodmFsdWUsIGVkaXRvcnMpIHtcbiAgICBsZXQgaW5kZXggPSAwXG5cbiAgICBmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG4gICAgICBpZiAoZWRpdG9yLmVkaXRvcnMpIHtcbiAgICAgICAgZWRpdG9yLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoZXF1YWwoZWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUgKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgZWRpdG9yIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gZWRpdG9yIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmICghZXF1YWwodGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgIHRoaXMubWF0Y2hFZGl0b3IodmFsdWUsIHRoaXMuZWRpdG9ycylcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiaW1wb3J0IHsgaXNTZXQsIGdldFR5cGUgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi90eXBlcy9hcnJheSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi90eXBlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vdHlwZXMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vdHlwZXMvc3RyaW5nJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi90eXBlcy9tdWx0aXBsZSdcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL3R5cGVzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi90eXBlcy9udWxsJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcblxuY2xhc3MgSW5zdGFuY2VSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEuYW55T2YoKSB8fCBzY2hlbWEub25lT2YoKSB8fCBzY2hlbWEudHlwZUlzKCdhbnknKSB8fCBzY2hlbWEudHlwZXMoKSB8fCAhc2NoZW1hLnR5cGUoKSkge1xuICAgICAgICAgIGlmICghc2NoZW1hLnR5cGUoKSAmJiBzY2hlbWEuZGVmYXVsdCgpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IHNjaGVtYS5jbG9uZSgpXG4gICAgICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShzY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICAgICAgY29uc3QgbmV3U2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUobmV3U2NoZW1hKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHJlc29sdmVyIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRSZXNvbHZlciAocmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlc29sdmVycy51bnNoaWZ0KHJlc29sdmVyKVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChjb25maWcpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKGNvbmZpZy5zY2hlbWEsIGNvbmZpZylcbiAgICAgIGlmIChpc1NldChlZGl0b3JDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlUmVzb2x2ZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgSmVkaSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gW1xuICAgICAgJ2FsbE9mJyxcbiAgICAgICdhbnlPZicsXG4gICAgICAnb25lT2YnLFxuICAgICAgJ2RlcGVuZGVudFJlcXVpcmVkJyxcbiAgICAgICdmb3JtYXQnLFxuICAgICAgJ2lmJyxcbiAgICAgICdjb25zdCcsXG4gICAgICAnbm90JyxcbiAgICAgICd0eXBlJyxcbiAgICAgICd1bmlxdWVJdGVtcycsXG4gICAgICAnZXhjbHVzaXZlTWF4aW11bScsXG4gICAgICAnZXhjbHVzaXZlTWluaW11bScsXG4gICAgICAnbWluSXRlbXMnLFxuICAgICAgJ21heEl0ZW1zJyxcbiAgICAgICdtaW5MZW5ndGgnLFxuICAgICAgJ21heExlbmd0aCcsXG4gICAgICAnbWluaW11bScsXG4gICAgICAnbWF4aW11bScsXG4gICAgICAnbXVsdGlwbGVPZicsXG4gICAgICAncGF0dGVybicsXG4gICAgICAncGF0dGVyblByb3BlcnRpZXMnLFxuICAgICAgJ2VudW0nLFxuICAgICAgJ3JlcXVpcmVkJyxcbiAgICAgICdtaW5Qcm9wZXJ0aWVzJyxcbiAgICAgICdtYXhQcm9wZXJ0aWVzJ1xuICAgIF1cbiAgfVxuXG4gIGFsbE9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbE9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFsbE9mRXJyb3JzXVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBhbnlPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuYW55T2YoKSkge1xuICAgICAgY29uc3QgdmFsaWQgPSBzY2hlbWEuYW55T2YoKS5zb21lKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgICAgcmV0dXJuIGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMFxuICAgICAgfSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBtdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgY29uc3QgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmNvbnN0KCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdmFsdWU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBlbnVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkgLSAxKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSArIDEpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZm9ybWF0ICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXQoKSkge1xuICAgICAgbGV0IGludmFsaWQgPSBmYWxzZVxuXG4gICAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICAgIGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmlmKCkpIHtcbiAgICAgIGlmICghc2NoZW1hLnRoZW4oKSB8fCAhc2NoZW1hLmVsc2UoKSkge1xuICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydHZhbDogdmFsdWUgfSlcbiAgICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuXG4gICAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnR2YWw6IHZhbHVlIH0pXG4gICAgICAgIGVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydHZhbDogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4aW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1heGltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhJdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWF4SXRlbXMoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4TGVuZ3RoICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWF4TGVuZ3RoKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWF4UHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5pbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWluaW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1pbkl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5MZW5ndGggKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5taW5MZW5ndGgoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWluUHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbXVsdGlwbGVPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm11bHRpcGxlT2YoKSkge1xuICAgICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG5vdCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEubm90KCkpIHtcbiAgICAgIGNvbnN0IG5vdEVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgb25lT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcblxuICAgICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHBhdHRlcm4gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuKCkpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cbiAgICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHByb3BlcnR5TmFtZVxuXG4gICAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgICBzdGFydHZhbDogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXF1aXJlZCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnJlcXVpcmVkKCkpIHtcbiAgICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICB0eXBlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS50eXBlcygpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgdW5pcXVlSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRvciBmdW5jdGlvblxuICAgKi9cbiAgYWRkVmFsaWRhdG9yICh2YWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMucHVzaCh2YWxpZGF0b3IpXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdGhpc1t2YWxpZGF0b3JdKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IDVcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgdGhpcy50cmF2ZXJzZSh0aGlzLmRlZnMpXG4gICAgICB0aGlzLnRyYXZlcnNlKHNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIy8kZGVmcycpKSB7XG4gICAgICBjb25zdCByZWZQYXJ0cyA9IHJlZi5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZWZOYW1lID0gcmVmUGFydHMucG9wKClcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmc1tkZWZOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmc1tkZWZOYW1lXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIHRyYXZlcnNlICh2YWx1ZSwgdGhpbmcsIGluZGV4KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlWyckcmVmJ10pICYmIGlzU2V0KHRoaW5nKSkge1xuICAgICAgICB0aGluZ1tpbmRleF0gPSB0aGlzLmRlZmluZSh2YWx1ZVsnJHJlZiddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmF2ZXJzZSh2YWx1ZVtpbmRleF0sIHZhbHVlLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoaXRlbSwgdmFsdWUsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgSW5zdGFuY2VSZXNvbHZlciBmcm9tICcuL2luc3RhbmNlLXJlc29sdmVyJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ3dpcmVmcmFtZSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKVxuICAgIHRoaXMuZWRpdG9ycyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICAgIHRoaXMucmVzb2x2ZXIgPSBuZXcgSW5zdGFuY2VSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoKVxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYShvcHRpb25zLnNjaGVtYSlcbiAgICB0aGlzLmVycm9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMuc2NoZW1hLnNjaGVtYSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnR2YWwpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnR2YWwpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcblxuICAgIGNvbnNvbGUudGFibGUodGhpcy5lZGl0b3JzKVxuICB9XG5cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGVkaXRvciBpbnN0YW5jZSBiYXNlZCBvbiB0aGUgcGFzc2VkIHNjaGVtYSBhbmQgY29uZmlnXG4gICAqL1xuICBjcmVhdGVFZGl0b3IgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVyLnJlc29sdmUoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG5cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIHZhbGlkYXRlICgpIHtcbiAgICB0aGlzLmVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmVkaXRvcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3JzW2tleV1cbiAgICAgIHRoaXMuZXJyb3JzID0gWy4uLnRoaXMuZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0dmFsID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHNldFRoZW1lICh0aGVtZSkge1xuICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9