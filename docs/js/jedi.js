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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__(5);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

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
      if (this.schema.type() === 'null') value = null;

      if (this.schema["enum"]()) {
        value = this.schema["enum"]()[0];
      }

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
      this.unregister();

      if (this.ui) {
        this.ui.destroy();
      }

      for (var key in this) {
        if (!Object.hasOwn(this, key)) {
          continue;
        }

        delete this[key];
      }
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
      for (var key in this) {
        if (!Object.hasOwn(this, key)) {
          continue;
        }

        delete this[key];
      }
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

    _this.showValidationErrors();

    _this.instance.on('set-value', function () {
      _this.refreshUI();
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
      if (this.container && this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }

      for (var key in this) {
        if (!Object.hasOwn(this, key)) {
          continue;
        }

        delete this[key];
      }
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

      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.childEditorsSlot);
      this.container.appendChild(this.actionsSlot); // btn group

      var btnGroup = this.theme.getBtnGroup(); // addBtn

      this.addBtn = this.theme.getButton({
        textContent: 'Add item'
      });
      this.addBtn.addEventListener('click', function () {
        _this.addItem();
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
    key: "createItemEditor",
    value: function createItemEditor(value) {
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

        _this2.deleteItem(itemIndex);
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
    key: "addItem",
    value: function addItem() {
      var tempEditor = this.createItemEditor();
      var value = clone(this.instance.getValue());
      value.push(tempEditor.getValue());
      tempEditor.destroy();
      this.instance.setValue(value);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(itemIndex) {
      if (confirm('Confirm to delete')) {
        var currentValue = clone(this.instance.getValue());
        var newValue = currentValue.filter(function (item, index) {
          return index !== itemIndex;
        });
        this.instance.setValue(newValue);
      }
    }
  }, {
    key: "onChildEditorChange",
    value: function onChildEditorChange() {
      var value = [];
      this.instance.childEditors.forEach(function (childEditor) {
        value.push(childEditor.getValue());
      });
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
        var itemEditor = _this3.createItemEditor(itemValue);

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
  }, {
    key: "destroy",
    value: function destroy() {
      this.instance.childEditors.forEach(function (childEditor) {
        childEditor.destroy();
      });

      get_default()(getPrototypeOf_default()(ArrayEditor.prototype), "destroy", this).call(this);
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
    key: "createItemEditor",
    value: function createItemEditor(value) {
      var schema = this.schema.items() ? this.schema.items() : {
        type: getType(value)
      };
      var editor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: new src_schema(schema),
        path: this.path + '.' + this.childEditors.length,
        parent: this
      });
      console.log('.....', editor);
      return editor;
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
      var tempEditor = this.createItemEditor();
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
      this.childEditors.forEach(function (childEditor) {
        value.push(childEditor.getValue());
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
  }, {
    key: "destroy",
    value: function destroy() {
      this.childEditors.forEach(function (childEditor) {
        childEditor.destroy();
      });

      get_default()(getPrototypeOf_default()(ArrayInstance.prototype), "destroy", this).call(this);
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
      this.container.appendChild(this.actionsSlot); // addBtn

      if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
        var label = this.theme.getLabel({
          textContent: 'Property Name',
          "for": 'jedi-add-property-input-' + this.instance.path
        });
        this.container.appendChild(label);
        var input = this.theme.getInput({
          type: 'text',
          id: 'jedi-add-property-input-' + this.instance.path
        });
        this.container.appendChild(input);
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

          _this.instance.addChildEditor({
            type: 'any'
          }, key);

          _this.instance.setValue(_this.instance.value);

          input.value = '';
        });
        this.container.appendChild(addBtn);
      }
    }
  }, {
    key: "addChildEditor",
    value: function addChildEditor(schema, key) {
      var _this2 = this;

      var editor = this.instance.jedi.createEditor({
        jedi: this.instance.jedi,
        schema: new src_schema(schema),
        path: this.instance.path + '.' + key,
        parent: this.instance
      }); // removeBtn

      var notRequired = !this.instance.isRequired(key);
      var notDependentRequired = !this.instance.isDependentRequired(key);
      var editableProperties = this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties');

      if (notRequired && notDependentRequired && editableProperties) {
        var removeBtn = this.theme.getButton({
          textContent: 'Remove property'
        });
        editor.container.appendChild(removeBtn);
        removeBtn.addEventListener('click', function () {
          delete _this2.instance.value[key];

          _this2.instance.setValue(_this2.instance.value);
        });
      }

      this.instance.childEditors.push(editor);
      this.instance.value[key] = editor.getValue();
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var value = this.instance.getValue();

      for (var key in value) {
        if (!Object.hasOwn(value, key)) {
          continue;
        }

        var childEditor = this.instance.getChildEditor(key);
        this.childEditorsSlot.appendChild(childEditor.ui.container);

        if (childEditor) {
          if (this.disabled) {
            childEditor.ui.disable();
          } else {
            childEditor.ui.enable();
          }
        }
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
    key: "destroy",
    value: function destroy() {
      this.instance.childEditors.forEach(function (childEditor) {
        childEditor.destroy();
      });

      get_default()(getPrototypeOf_default()(ObjectEditor.prototype), "destroy", this).call(this);
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
      // child editors
      if (this.schema.properties()) {
        for (var key in this.schema.properties()) {
          if (!Object.hasOwn(this.schema.properties(), key)) {
            continue;
          }

          var showRequiredOnly = this.jedi.options.showRequiredOnly || this.schema.option('showRequiredOnly');
          var isNotRequired = !this.schema.required() || !this.schema.required().includes(key);

          if (showRequiredOnly && isNotRequired) {
            continue;
          }

          var schema = this.schema.property(key);
          this.addChildEditor(schema, key);
        }
      } // Add dependent required properties


      if (this.schema.properties()) {
        for (var _key in this.schema.properties()) {
          if (!Object.hasOwn(this.schema.properties(), _key)) {
            continue;
          }

          if (this.isDependentRequired(_key)) {
            var _schema = this.schema.property(_key);

            this.addChildEditor(_schema, _key);
          }
        }
      }
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
      var _this = this;

      var dependentRequired = this.schema.dependentRequired();

      if (dependentRequired) {
        var missingProperties = [];
        Object.keys(dependentRequired).forEach(function (key) {
          if (isSet(_this.value[key])) {
            var requiredProperties = dependentRequired[key];
            missingProperties = requiredProperties.filter(function (property) {
              return !Object.hasOwn(_this.value, property);
            });
          }
        });
        return missingProperties.includes(property);
      }

      return false;
    }
  }, {
    key: "addChildEditor",
    value: function addChildEditor(schema, key) {
      var editor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: new src_schema(schema),
        path: this.path + '.' + key,
        parent: this
      });
      this.childEditors.push(editor);
      this.value[key] = editor.getValue();
    }
  }, {
    key: "deleteChildEditor",
    value: function deleteChildEditor(key) {
      for (var i = this.childEditors.length - 1; i >= 0; i--) {
        var editor = this.childEditors[i];

        if (editor.getKey() === key) {
          editor.destroy();
          this.childEditors.splice(i, 1);
        }
      }
    }
  }, {
    key: "onChildEditorChange",
    value: function onChildEditorChange() {
      var value = {};
      this.childEditors.forEach(function (childEditor) {
        value[childEditor.getKey()] = childEditor.getValue();
      });
      this.setValue(value);
    }
  }, {
    key: "getChildEditor",
    value: function getChildEditor(key) {
      return this.childEditors.find(function (childEditor) {
        return key === childEditor.getKey().split('.').pop();
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
      var value = this.getValue(); // remove any children that are not included in the value

      for (var i = this.childEditors.length - 1; i >= 0; i--) {
        var editor = this.childEditors[i];
        var key = editor.getKey();

        if (!isSet(value[key])) {
          this.deleteChildEditor(key);
        }
      }

      for (var _key2 in value) {
        if (!Object.hasOwn(value, _key2)) {
          continue;
        }

        var childEditor = this.getChildEditor(_key2); // If a value has a already a child editor

        if (childEditor) {
          var oldValue = childEditor.getValue();
          var newValue = value[childEditor.getKey()]; // update child value if the old value and the new value are different

          if (!equal(oldValue, newValue)) {
            childEditor.setValue(newValue, false);
          }
        } else {
          // create new child editor for the new value entry having the value as default
          var initialValue = value[_key2];
          var type = getType(initialValue);
          var schema = {
            type: type,
            "default": initialValue
          };
          this.addChildEditor(schema, _key2);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.childEditors.forEach(function (childEditor) {
        childEditor.destroy();
      });

      get_default()(getPrototypeOf_default()(ObjectInstance.prototype), "destroy", this).call(this);
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
  }, {
    key: "destroy",
    value: function destroy() {}
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
          for (var _index in value) {
            if (!Object.hasOwn(value, _index)) {
              continue;
            }

            this.traverse(value[_index], value, _index);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL3dpcmVmcmFtZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3R5cGVzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3R5cGVzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdHlwZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdHlwZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlLXJlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcXVhbCIsImEiLCJiIiwiZGlmZmVyZW50IiwiaXNOdWxsIiwidmFsdWUiLCJpc1NldCIsImlzTm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsImlzT2JqZWN0IiwiZ2V0VHlwZSIsInR5cGUiLCJ1dWlkdjQiLCJ2NCIsIm1lcmdlRGVlcCIsInRhcmdldCIsInNvdXJjZXMiLCJsZW5ndGgiLCJzb3VyY2UiLCJzaGlmdCIsImtleSIsIk9iamVjdCIsImFzc2lnbiIsIkV2ZW50RW1pdHRlciIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsInB1c2giLCJmaWx0ZXIiLCJsaXN0ZW5lciIsImZvckVhY2giLCJrZXlzIiwiSW5zdGFuY2UiLCJjb25maWciLCJqZWRpIiwic2NoZW1hIiwidW5kZWZpbmVkIiwicGF0aCIsInBhcmVudCIsImNoaWxkRWRpdG9ycyIsInVpIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwicHJlcGFyZSIsIm9wdGlvbnMiLCJpc0VkaXRvciIsInNldFVJIiwib24iLCJvbkNoaWxkRWRpdG9yQ2hhbmdlIiwic3BsaXQiLCJwb3AiLCJyZWdpc3RlckVkaXRvciIsInVucmVnaXN0ZXJFZGl0b3IiLCJpbmNsdWRlcyIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJzYW5pdGl6ZSIsImVtaXQiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0ZSIsImdldFZhbHVlIiwiZ2V0S2V5IiwiY29udGFpbmVyIiwidGhlbWUiLCJnZXRDb250YWluZXIiLCJ1bnJlZ2lzdGVyIiwiZGVzdHJveSIsImhhc093biIsIlNjaGVtYSIsImFsbE9mIiwiYW55T2YiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZXhjbHVzaXZlTWF4aW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJmb3JtYXQiLCJpdGVtcyIsIm1heGltdW0iLCJtYXhJdGVtcyIsIm1heExlbmd0aCIsIm1heFByb3BlcnRpZXMiLCJtaW5pbXVtIiwibWluSXRlbXMiLCJtaW5MZW5ndGgiLCJtaW5Qcm9wZXJ0aWVzIiwibXVsdGlwbGVPZiIsIm5vdCIsIm9wdGlvbiIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZXF1aXJlZCIsIlNldCIsInRoZW4iLCJ0aXRsZSIsInR5cGVJcyIsIm9uZU9mIiwidW5pcXVlSXRlbXMiLCJUaGVtZUJhcmVib25lcyIsImVycm9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJtZXNzYWdlIiwiYWN0aW9uc1Nsb3QiLCJjaGlsZEVkaXRvcnNTbG90IiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwibWVzc2FnZXNTbG90IiwibGFiZWwiLCJzck9ubHkiLCJsZWdlbmQiLCJpbnB1dCIsImlkIiwiY2hlY2tib3giLCJyYWRpbyIsInRleHRhcmVhIiwic2VsZWN0Iiwib3B0aW9uVmFsdWVzIiwiaW5kZXgiLCJvcHRpb25zTGFiZWxzIiwiYXBwZW5kQ2hpbGQiLCJUaGVtZVdpcmVmcmFtZSIsImJ0bkdyb3VwIiwiZmllbGRzZXQiLCJjaGVja2JveENvbnRhaW5lciIsIkVkaXRvciIsImluc3RhbmNlIiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZEVkaXRvcnNTbG90IiwiZGlzYWJsZWQiLCJidWlsZCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJyZWZyZXNoVUkiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsImVycm9ycyIsImlubmVySFRNTCIsImdldElucHV0RXJyb3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJBcnJheUVkaXRvciIsImdldEJ0bkdyb3VwIiwiYWRkQnRuIiwiZ2V0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwic2V0VmFsdWUiLCJnZXRGaWVsZHNldCIsImdldExlZ2VuZCIsImdldERlc2NyaXB0aW9uIiwiaXRlbVNjaGVtYSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3JlYXRlSXRlbUVkaXRvciIsImN1cnJlbnRWYWx1ZSIsImNoaWxkRWRpdG9yIiwiZWRpdG9yIiwiaXRlbVZhbHVlIiwiYnV0dG9ucyIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRCdXR0b25zIiwiY29uY2F0IiwiZGlzYWJsZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkFycmF5SW5zdGFuY2UiLCJjb25zb2xlIiwibG9nIiwiQm9vbGVhbkVkaXRvciIsImdldENoZWNrYm94Q29udGFpbmVyIiwiZ2V0Q2hlY2tib3hMYWJlbCIsImdldENoZWNrYm94IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwicmFkaW9JbnB1dHMiLCJnZXRSYWRpb0xlZ2VuZCIsInJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW9Db250YWluZXIiLCJnZXRSYWRpbyIsInJhZGlvVmFsdWUiLCJnZXRMYWJlbCIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiZ2V0U2VsZWN0IiwiQm9vbGVhbkluc3RhbmNlIiwiZm9ybWF0SXMiLCJPYmplY3RFZGl0b3IiLCJzZXRDb250YWluZXIiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJnZXRJbnB1dCIsImFkZENoaWxkRWRpdG9yIiwibm90UmVxdWlyZWQiLCJpc1JlcXVpcmVkIiwibm90RGVwZW5kZW50UmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwicmVtb3ZlQnRuIiwiZ2V0Q2hpbGRFZGl0b3IiLCJPYmplY3RJbnN0YW5jZSIsInNob3dSZXF1aXJlZE9ubHkiLCJpc05vdFJlcXVpcmVkIiwicHJvcGVydHkiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImkiLCJmaW5kIiwiZGVsZXRlQ2hpbGRFZGl0b3IiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJnZXRUZXh0YXJlYSIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJTdHJpbmdJbnN0YW5jZSIsIlN0cmluZyIsIk11bHRpcGxlRWRpdG9yIiwic3dpdGNoZXJCdXR0b25zIiwic3dpdGNoZXIiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsInN3aXRjaEVkaXRvciIsIm9sZEVkaXRvciIsImVkaXRvcnMiLCJsYXN0SW5kZXgiLCJhY3RpdmVFZGl0b3IiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsInJlbW92ZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJzY2hlbWFzIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInR5cGVzIiwic2NoZW1hQ2xvbmUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwibmV3SW5kZXgiLCJtYXRjaEVkaXRvciIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJOdWxsRWRpdG9yIiwiTnVsbEluc3RhbmNlIiwiSW5zdGFuY2VSZXNvbHZlciIsInJlc29sdmVycyIsIm9yaWdpbmFsU2NoZW1hIiwibmV3U2NoZW1hIiwicmVzb2x2ZSIsInJlc29sdmVyIiwidW5zaGlmdCIsImVkaXRvckNsYXNzIiwiVmFsaWRhdG9yIiwidmFsaWRhdG9ycyIsImFsbE9mRXJyb3JzIiwidmFsaWQiLCJzb21lIiwiYW55T2ZFcnJvcnMiLCJmaWVsZCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImpvaW4iLCJlIiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwicmVnZXhwIiwiUmVnRXhwIiwidGVzdCIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0dmFsIiwiaWZFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByb3BlcnRpZXNDb3VudCIsImlzTXVsdGlwbGVPZiIsIm5vdEVycm9ycyIsImNvdW50ZXIiLCJvbmVPZkVycm9ycyIsInByb3BlcnR5TmFtZSIsInN0cmluZyIsIm51bWJlciIsImludGVnZXIiLCJhcnJheSIsIm9iamVjdCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJzY2hlbWFFcnJvcnMiLCJ2YWxpZGF0b3JFcnJvcnMiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiZGVmcyIsInRyYXZlcnNlIiwicmVmIiwic3RhcnRzV2l0aCIsInJlZlBhcnRzIiwiZGVmTmFtZSIsImRlZmluZSIsImFsd2F5c1Nob3dFcnJvcnMiLCJxdWVyeVNlbGVjdG9yIiwicm9vdCIsInJlZlBhcnNlciIsImRlcmVmZXJlbmNlIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJ0YWJsZSIsImhpZGRlbklucHV0IiwiYXJndW1lbnRzIiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLCtHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtHOzs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDRHOzs7Ozs7QUNuQkEscUJBQXFCLG1CQUFPLENBQUMsRUFBcUI7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEseUc7Ozs7OztBQ3BCQSxjQUFjLG1CQUFPLENBQUMsQ0FBYTs7QUFFbkMsNEJBQTRCLG1CQUFPLENBQUMsRUFBNEI7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEg7Ozs7OztBQ2RBLG9CQUFvQixtQkFBTyxDQUFDLEVBQW9COztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsb0c7Ozs7OztBQ3RCQSx3QkFBd0IsbUJBQU8sQ0FBQyxFQUF3Qjs7QUFFeEQsc0JBQXNCLG1CQUFPLENBQUMsRUFBc0I7O0FBRXBELGlDQUFpQyxtQkFBTyxDQUFDLEVBQWlDOztBQUUxRSx3QkFBd0IsbUJBQU8sQ0FBQyxFQUF3Qjs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBLGtIOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtHOzs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsdUc7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlIOzs7Ozs7QUNWQSx1QkFBdUIsbUJBQU8sQ0FBQyxDQUF1Qjs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBLGtIOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUEsZ0g7Ozs7OztBQ0pBLHVCQUF1QixtQkFBTyxDQUFDLENBQXVCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJIOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7O0FBRUEsa0g7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsK0c7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0g7Ozs7OztBQ1JBLHFCQUFxQixtQkFBTyxDQUFDLENBQXFCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNlO0FBQ2Y7QUFDQSxDQUFDLEU7O0FDSEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOztBQ2pCZSx3REFBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLHlDQUF5QyxFOztBQ0FyRzs7QUFFL0IsU0FBUyxpQkFBUTtBQUNqQixxQ0FBcUMsS0FBSztBQUMxQzs7QUFFZSwwRUFBUSxFOztBQ05jO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxvQkFBUTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZSxtRUFBUyxFOztBQ2hDUztBQUNOO0FBQ3NCOztBQUVqRDtBQUNBLE1BQU0sa0JBQU07QUFDWixXQUFXLGtCQUFNO0FBQ2pCOztBQUVBO0FBQ0EsaURBQWlELEdBQUcsSUFBSTs7QUFFeEQ7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMsZUFBZTtBQUN4Qjs7QUFFZSxxREFBRSxFOzs7O0FDNUJqQjtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztFQUM5QixPQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVILEtBQWYsQ0FBWCxDQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0VBQzdCLE9BQU9MLElBQUksQ0FBQ0UsU0FBTCxDQUFlRSxDQUFmLE1BQXNCSixJQUFJLENBQUNFLFNBQUwsQ0FBZUcsQ0FBZixDQUE3QjtBQUNELENBRk07QUFJQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRixDQUFELEVBQUlDLENBQUosRUFBVTtFQUNqQyxPQUFPTCxJQUFJLENBQUNFLFNBQUwsQ0FBZUUsQ0FBZixNQUFzQkosSUFBSSxDQUFDRSxTQUFMLENBQWVHLENBQWYsQ0FBN0I7QUFDRCxDQUZNO0FBSUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0VBQy9CLE9BQU9BLEtBQUssS0FBSyxJQUFqQjtBQUNELENBRk07QUFJQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDRCxLQUFELEVBQVc7RUFDOUIsT0FBTyxPQUFPQSxLQUFQLEtBQWlCLFdBQXhCO0FBQ0QsQ0FGTTtBQUlBLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNGLEtBQUQsRUFBVztFQUNqQyxPQUFPLE9BQU9BLEtBQVAsS0FBaUIsV0FBeEI7QUFDRCxDQUZNO0FBSUEsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0gsS0FBRCxFQUFXO0VBQ2pDLE9BQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtBQUNELENBRk07QUFJQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSixLQUFELEVBQVc7RUFDbEMsT0FBT0csUUFBUSxDQUFDSCxLQUFELENBQVIsSUFBbUJBLEtBQUssS0FBS0ssSUFBSSxDQUFDQyxLQUFMLENBQVdOLEtBQVgsQ0FBcEM7QUFDRCxDQUZNO0FBSUEsSUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1AsS0FBRCxFQUFXO0VBQ2pDLE9BQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtBQUNELENBRk07QUFJQSxJQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUixLQUFELEVBQVc7RUFDbEMsT0FBTyxPQUFPQSxLQUFQLEtBQWlCLFNBQXhCO0FBQ0QsQ0FGTTtBQUlBLElBQU1TLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNULEtBQUQsRUFBVztFQUNoQyxPQUFPVSxLQUFLLENBQUNELE9BQU4sQ0FBY1QsS0FBZCxDQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1XLGNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNYLEtBQUQsRUFBVztFQUNqQyxPQUFPLENBQUNELE1BQU0sQ0FBQ0MsS0FBRCxDQUFQLElBQWtCLENBQUNTLE9BQU8sQ0FBQ1QsS0FBRCxDQUExQixJQUFxQyxpQkFBT0EsS0FBUCxNQUFpQixRQUE3RDtBQUNELENBRk07QUFJQSxJQUFNWSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDWixLQUFELEVBQVc7RUFDaEMsSUFBSWEsSUFBSSxHQUFHLEtBQVg7O0VBRUEsSUFBSVYsUUFBUSxDQUFDSCxLQUFELENBQVosRUFBcUI7SUFDbkJhLElBQUksR0FBRyxRQUFQO0VBQ0QsQ0FGRCxNQUVPLElBQUlULFNBQVMsQ0FBQ0osS0FBRCxDQUFiLEVBQXNCO0lBQzNCYSxJQUFJLEdBQUcsU0FBUDtFQUNELENBRk0sTUFFQSxJQUFJTixRQUFRLENBQUNQLEtBQUQsQ0FBWixFQUFxQjtJQUMxQmEsSUFBSSxHQUFHLFFBQVA7RUFDRCxDQUZNLE1BRUEsSUFBSUwsU0FBUyxDQUFDUixLQUFELENBQWIsRUFBc0I7SUFDM0JhLElBQUksR0FBRyxTQUFQO0VBQ0QsQ0FGTSxNQUVBLElBQUlKLE9BQU8sQ0FBQ1QsS0FBRCxDQUFYLEVBQW9CO0lBQ3pCYSxJQUFJLEdBQUcsT0FBUDtFQUNELENBRk0sTUFFQSxJQUFJZCxNQUFNLENBQUNDLEtBQUQsQ0FBVixFQUFtQjtJQUN4QmEsSUFBSSxHQUFHLE1BQVA7RUFDRCxDQUZNLE1BRUEsSUFBSUYsY0FBUSxDQUFDWCxLQUFELENBQVosRUFBcUI7SUFDMUJhLElBQUksR0FBRyxRQUFQO0VBQ0Q7O0VBRUQsT0FBT0EsSUFBUDtBQUNELENBcEJNO0FBc0JBLElBQU1DLFlBQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07RUFDMUIsT0FBT0MsY0FBRSxFQUFUO0FBQ0QsQ0FGTTtBQUlBLElBQU1DLGVBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBd0I7RUFBQSxrQ0FBWkMsT0FBWTtJQUFaQSxPQUFZO0VBQUE7O0VBQy9DLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxNQUFiLEVBQXFCLE9BQU9GLE1BQVA7RUFDckIsSUFBTUcsTUFBTSxHQUFHRixPQUFPLENBQUNHLEtBQVIsRUFBZjs7RUFFQSxJQUFJVixjQUFRLENBQUNNLE1BQUQsQ0FBUixJQUFvQk4sY0FBUSxDQUFDUyxNQUFELENBQWhDLEVBQTBDO0lBQ3hDLEtBQUssSUFBTUUsR0FBWCxJQUFrQkYsTUFBbEIsRUFBMEI7TUFDeEIsSUFBSVQsY0FBUSxDQUFDUyxNQUFNLENBQUNFLEdBQUQsQ0FBUCxDQUFaLEVBQTJCO1FBQ3pCLElBQUksQ0FBQ0wsTUFBTSxDQUFDSyxHQUFELENBQVgsRUFBa0I7VUFDaEJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxNQUFkLCtCQUNHSyxHQURILEVBQ1MsRUFEVDtRQUdEOztRQUNETixTQUFTLENBQUNDLE1BQU0sQ0FBQ0ssR0FBRCxDQUFQLEVBQWNGLE1BQU0sQ0FBQ0UsR0FBRCxDQUFwQixDQUFUO01BQ0QsQ0FQRCxNQU9PO1FBQ0xDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxNQUFkLCtCQUNHSyxHQURILEVBQ1NGLE1BQU0sQ0FBQ0UsR0FBRCxDQURmO01BR0Q7SUFDRjtFQUNGOztFQUVELE9BQU9OLFNBQVMsTUFBVCxVQUFVQyxNQUFWLFNBQXFCQyxPQUFyQixFQUFQO0FBQ0QsQ0F0Qk0sQzs7Ozs7Ozs7O0lDNUVETywwQjtFQUNKLHdCQUFlO0lBQUE7O0lBQ2IsS0FBS0MsU0FBTCxHQUFpQixFQUFqQjtFQUNEOzs7O1dBRUQsWUFBSUMsSUFBSixFQUFVQyxRQUFWLEVBQW9CO01BQ2xCLEtBQUtGLFNBQUwsQ0FBZUcsSUFBZixDQUFvQjtRQUFFRixJQUFJLEVBQUpBLElBQUY7UUFBUUMsUUFBUSxFQUFSQTtNQUFSLENBQXBCO0lBQ0Q7OztXQUVELGNBQU1ELElBQU4sRUFBWTtNQUNWLElBQU1ELFNBQVMsR0FBRyxLQUFLQSxTQUFMLENBQWVJLE1BQWYsQ0FBc0IsVUFBQUMsUUFBUTtRQUFBLE9BQUlBLFFBQVEsQ0FBQ0osSUFBVCxLQUFrQkEsSUFBdEI7TUFBQSxDQUE5QixDQUFsQjtNQUVBRCxTQUFTLENBQUNNLE9BQVYsQ0FBa0IsVUFBQ0QsUUFBRCxFQUFjO1FBQzlCQSxRQUFRLENBQUNILFFBQVQ7TUFDRCxDQUZEO0lBR0Q7OztXQUVELG1CQUFXO01BQUE7O01BQ1RMLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLElBQVosRUFBa0JELE9BQWxCLENBQTBCLFVBQUNWLEdBQUQsRUFBUztRQUNqQyxPQUFPLEtBQUksQ0FBQ0EsR0FBRCxDQUFYO01BQ0QsQ0FGRDtJQUdEOzs7Ozs7QUFHWUcsNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDeEJBOztJQUVNUyxpQjs7Ozs7RUFDSixrQkFBYUMsTUFBYixFQUFxQjtJQUFBOztJQUFBOztJQUNuQjtJQUNBLE1BQUtDLElBQUwsR0FBWUQsTUFBTSxDQUFDQyxJQUFuQjtJQUNBLE1BQUtDLE1BQUwsR0FBY0YsTUFBTSxDQUFDRSxNQUFyQjtJQUNBLE1BQUtyQyxLQUFMLEdBQWFtQyxNQUFNLENBQUNuQyxLQUFQLElBQWdCc0MsU0FBN0I7SUFDQSxNQUFLQyxJQUFMLEdBQVlKLE1BQU0sQ0FBQ0ksSUFBUCxJQUFlLE1BQTNCO0lBQ0EsTUFBS0MsTUFBTCxHQUFjTCxNQUFNLENBQUNLLE1BQVAsSUFBaUIsSUFBL0I7SUFDQSxNQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0lBQ0EsTUFBS0MsRUFBTCxHQUFVLElBQVY7O0lBQ0EsTUFBS0MsSUFBTDs7SUFUbUI7RUFVcEI7RUFFRDtBQUNGO0FBQ0E7Ozs7O1dBQ0UsZ0JBQVE7TUFBQTs7TUFDTixLQUFLQyxRQUFMO01BQ0EsS0FBS0MsZUFBTDtNQUNBLEtBQUtDLE9BQUw7O01BRUEsSUFBSSxLQUFLVixJQUFMLENBQVVXLE9BQVYsQ0FBa0JDLFFBQXRCLEVBQWdDO1FBQzlCLEtBQUtDLEtBQUw7TUFDRDs7TUFFRCxLQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQixZQUFNO1FBQ3RCLElBQUksTUFBSSxDQUFDVixNQUFULEVBQWlCO1VBQ2YsTUFBSSxDQUFDQSxNQUFMLENBQVlXLG1CQUFaO1FBQ0Q7TUFDRixDQUpEO0lBS0Q7OztXQUVELGlCQUFTLENBQUU7SUFFWDtBQUNGO0FBQ0E7Ozs7V0FDRSxrQkFBVTtNQUNSLE9BQU8sS0FBS1osSUFBTCxDQUFVYSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCQyxHQUFyQixFQUFQO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxvQkFBWTtNQUNWLEtBQUtqQixJQUFMLENBQVVrQixjQUFWLENBQXlCLElBQXpCO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxzQkFBYztNQUNaLEtBQUtsQixJQUFMLENBQVVtQixnQkFBVixDQUEyQixJQUEzQjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsMkJBQW1CO01BQ2pCLElBQUl2RCxLQUFKO01BRUEsSUFBSSxLQUFLcUMsTUFBTCxDQUFZeEIsSUFBWixPQUF1QixTQUEzQixFQUFzQ2IsS0FBSyxHQUFHLEtBQVI7TUFDdEMsSUFBSSxLQUFLcUMsTUFBTCxDQUFZeEIsSUFBWixPQUF1QixRQUEzQixFQUFxQ2IsS0FBSyxHQUFHLEdBQVI7TUFDckMsSUFBSSxLQUFLcUMsTUFBTCxDQUFZeEIsSUFBWixPQUF1QixTQUEzQixFQUFzQ2IsS0FBSyxHQUFHLENBQVI7TUFDdEMsSUFBSSxLQUFLcUMsTUFBTCxDQUFZeEIsSUFBWixPQUF1QixRQUEzQixFQUFxQ2IsS0FBSyxHQUFHLEVBQVI7TUFDckMsSUFBSSxLQUFLcUMsTUFBTCxDQUFZeEIsSUFBWixPQUF1QixPQUEzQixFQUFvQ2IsS0FBSyxHQUFHLEVBQVI7TUFDcEMsSUFBSSxLQUFLcUMsTUFBTCxDQUFZeEIsSUFBWixPQUF1QixRQUEzQixFQUFxQ2IsS0FBSyxHQUFHLEVBQVI7TUFDckMsSUFBSSxLQUFLcUMsTUFBTCxDQUFZeEIsSUFBWixPQUF1QixNQUEzQixFQUFtQ2IsS0FBSyxHQUFHLElBQVI7O01BRW5DLElBQUksS0FBS3FDLE1BQUwsVUFBSixFQUF3QjtRQUN0QnJDLEtBQUssR0FBRyxLQUFLcUMsTUFBTCxXQUFtQixDQUFuQixDQUFSO01BQ0Q7O01BRUQsSUFBSSxLQUFLQSxNQUFMLGFBQUosRUFBMkI7UUFDekIsSUFBSSxLQUFLQSxNQUFMLGNBQXNCLENBQUMsS0FBS0EsTUFBTCxXQUFtQm1CLFFBQW5CLENBQTRCLEtBQUtuQixNQUFMLGFBQTVCLENBQTNCLEVBQStFO1VBQzdFO1FBQ0Q7O1FBRURyQyxLQUFLLEdBQUcsS0FBS3FDLE1BQUwsYUFBUjtNQUNEOztNQUVELEtBQUtyQyxLQUFMLEdBQWFBLEtBQWI7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG9CQUFZO01BQ1YsT0FBTyxLQUFLQSxLQUFaO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxrQkFBVUEsS0FBVixFQUFpQjtNQUNmLE9BQU9BLEtBQVA7SUFDRDtJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxrQkFBVXlELFFBQVYsRUFBMkM7TUFBQSxJQUF2QkMsY0FBdUIsdUVBQU4sSUFBTTtNQUN6Q0QsUUFBUSxHQUFHLEtBQUtFLFFBQUwsQ0FBY0YsUUFBZCxDQUFYO01BQ0EsS0FBS3pELEtBQUwsR0FBYXlELFFBQWI7O01BRUEsSUFBSUMsY0FBSixFQUFvQjtRQUNsQixLQUFLRSxJQUFMLENBQVUsUUFBVjtNQUNEOztNQUVELEtBQUtBLElBQUwsQ0FBVSxXQUFWO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7QUFDQTs7OztXQUNFLCtCQUF1QixDQUN0Qjs7O1dBRUQsb0JBQVk7TUFDVixPQUFPLEtBQUt4QixJQUFMLENBQVV5QixTQUFWLENBQW9CQyxRQUFwQixDQUE2QixLQUFLQyxRQUFMLEVBQTdCLEVBQThDLEtBQUsxQixNQUFuRCxFQUEyRCxLQUFLMkIsTUFBTCxFQUEzRCxFQUEwRSxLQUFLekIsSUFBL0UsQ0FBUDtJQUNEOzs7V0FFRCx3QkFBZ0I7TUFDZCxLQUFLMEIsU0FBTCxHQUFpQixLQUFLN0IsSUFBTCxDQUFVOEIsS0FBVixDQUFnQkMsWUFBaEIsRUFBakI7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG1CQUFXLENBQUU7SUFFYjtBQUNGO0FBQ0E7Ozs7V0FDRSxtQkFBVztNQUNULEtBQUtDLFVBQUw7O01BRUEsSUFBSSxLQUFLMUIsRUFBVCxFQUFhO1FBQ1gsS0FBS0EsRUFBTCxDQUFRMkIsT0FBUjtNQUNEOztNQUVELEtBQUssSUFBTS9DLEdBQVgsSUFBa0IsSUFBbEIsRUFBd0I7UUFDdEIsSUFBSSxDQUFDQyxNQUFNLENBQUMrQyxNQUFQLENBQWMsSUFBZCxFQUFvQmhELEdBQXBCLENBQUwsRUFBK0I7VUFDN0I7UUFDRDs7UUFFRCxPQUFPLEtBQUtBLEdBQUwsQ0FBUDtNQUNEO0lBQ0Y7Ozs7RUF2Sm9CRyxhOztBQTBKUlMsa0VBQWYsRTs7Ozs7QUM1SkE7O0lBRU1xQyxhO0VBQ0osZ0JBQWFsQyxNQUFiLEVBQXFCO0lBQUE7O0lBQ25CLEtBQUtBLE1BQUwsR0FBY0EsTUFBZDtFQUNEOzs7O1dBRUQsaUJBQVM7TUFDUCxPQUFPNUIsT0FBTyxDQUFDLEtBQUs0QixNQUFMLENBQVltQyxLQUFiLENBQVAsR0FBNkIsS0FBS25DLE1BQUwsQ0FBWW1DLEtBQXpDLEdBQWlELEtBQXhEO0lBQ0Q7OztXQUVELGlCQUFTO01BQ1AsT0FBTy9ELE9BQU8sQ0FBQyxLQUFLNEIsTUFBTCxDQUFZb0MsS0FBYixDQUFQLEdBQTZCLEtBQUtwQyxNQUFMLENBQVlvQyxLQUF6QyxHQUFpRCxLQUF4RDtJQUNEOzs7V0FFRCxrQkFBUztNQUNQLE9BQU8sS0FBS3BDLE1BQUwsWUFBb0IsS0FBS0EsTUFBTCxTQUFwQixHQUF3QyxLQUEvQztJQUNEOzs7V0FFRCxpQkFBUztNQUNQLE9BQU83QyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWUsS0FBSzJDLE1BQXBCLENBQVgsQ0FBUDtJQUNEOzs7V0FFRCxvQkFBVztNQUNULE9BQU8sS0FBS0EsTUFBTCxjQUFzQixLQUFLQSxNQUFMLFdBQXRCLEdBQTRDLEtBQW5EO0lBQ0Q7OztXQUVELDZCQUFxQjtNQUNuQixPQUFPMUIsY0FBUSxDQUFDLEtBQUswQixNQUFMLENBQVlxQyxpQkFBYixDQUFSLEdBQTBDLEtBQUtyQyxNQUFMLENBQVlxQyxpQkFBdEQsR0FBMEUsS0FBakY7SUFDRDs7O1dBRUQsdUJBQWU7TUFDYixPQUFPbkUsUUFBUSxDQUFDLEtBQUs4QixNQUFMLENBQVlzQyxXQUFiLENBQVIsR0FBb0MsS0FBS3RDLE1BQUwsQ0FBWXNDLFdBQWhELEdBQThELEtBQXJFO0lBQ0Q7OztXQUVELGlCQUFRO01BQ04sT0FBT2hFLGNBQVEsQ0FBQyxLQUFLMEIsTUFBTCxRQUFELENBQVIsR0FBNkIsS0FBS0EsTUFBTCxRQUE3QixHQUFnRCxLQUF2RDtJQUNEOzs7V0FFRCxpQkFBUTtNQUNOLElBQUk1QixPQUFPLENBQUMsS0FBSzRCLE1BQUwsUUFBRCxDQUFQLElBQTZCLEtBQUtBLE1BQUwsU0FBaUJsQixNQUFqQixHQUEwQixDQUEzRCxFQUE4RDtRQUM1RCxPQUFPLEtBQUtrQixNQUFMLFFBQVA7TUFDRDs7TUFFRCxPQUFPLEtBQVA7SUFDRDs7O1dBRUQsNEJBQW9CO01BQ2xCLE9BQU9sQyxRQUFRLENBQUMsS0FBS2tDLE1BQUwsQ0FBWXVDLGdCQUFiLENBQVIsR0FBeUMsS0FBS3ZDLE1BQUwsQ0FBWXVDLGdCQUFyRCxHQUF3RSxLQUEvRTtJQUNEOzs7V0FFRCw0QkFBb0I7TUFDbEIsT0FBT3pFLFFBQVEsQ0FBQyxLQUFLa0MsTUFBTCxDQUFZd0MsZ0JBQWIsQ0FBUixHQUF5QyxLQUFLeEMsTUFBTCxDQUFZd0MsZ0JBQXJELEdBQXdFLEtBQS9FO0lBQ0Q7OztXQUVELGtCQUFVO01BQ1IsT0FBT3RFLFFBQVEsQ0FBQyxLQUFLOEIsTUFBTCxDQUFZeUMsTUFBYixDQUFSLEdBQStCLEtBQUt6QyxNQUFMLENBQVl5QyxNQUEzQyxHQUFvRCxLQUEzRDtJQUNEOzs7V0FFRCxrQkFBVTlFLEtBQVYsRUFBaUI7TUFDZixPQUFRLEtBQUs4RSxNQUFMLE1BQWlCLEtBQUtBLE1BQUwsT0FBa0I5RSxLQUEzQztJQUNEOzs7V0FFRCxlQUFNO01BQ0osT0FBT1csY0FBUSxDQUFDLEtBQUswQixNQUFMLE1BQUQsQ0FBUixHQUEyQixLQUFLQSxNQUFMLE1BQTNCLEdBQTRDLEtBQW5EO0lBQ0Q7OztXQUVELGlCQUFTO01BQ1AsT0FBTzFCLGNBQVEsQ0FBQyxLQUFLMEIsTUFBTCxDQUFZMEMsS0FBYixDQUFSLEdBQThCLEtBQUsxQyxNQUFMLENBQVkwQyxLQUExQyxHQUFrRCxLQUF6RDtJQUNEOzs7V0FFRCxtQkFBVztNQUNULE9BQVEsS0FBSzFDLE1BQUwsQ0FBWTJDLE9BQWIsR0FBd0IsS0FBSzNDLE1BQUwsQ0FBWTJDLE9BQXBDLEdBQThDLEtBQXJEO0lBQ0Q7OztXQUVELG9CQUFZO01BQ1YsSUFBSTVFLFNBQVMsQ0FBQyxLQUFLaUMsTUFBTCxDQUFZNEMsUUFBYixDQUFULElBQW1DLEtBQUs1QyxNQUFMLENBQVk0QyxRQUFaLElBQXdCLENBQS9ELEVBQWtFO1FBQ2hFLE9BQU8sS0FBSzVDLE1BQUwsQ0FBWTRDLFFBQW5CO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELHFCQUFhO01BQ1gsSUFBSTdFLFNBQVMsQ0FBQyxLQUFLaUMsTUFBTCxDQUFZNkMsU0FBYixDQUFULElBQW9DLEtBQUs3QyxNQUFMLENBQVk2QyxTQUFaLElBQXlCLENBQWpFLEVBQW9FO1FBQ2xFLE9BQU8sS0FBSzdDLE1BQUwsQ0FBWTZDLFNBQW5CO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELHlCQUFpQjtNQUNmLElBQUk5RSxTQUFTLENBQUMsS0FBS2lDLE1BQUwsQ0FBWThDLGFBQWIsQ0FBVCxJQUF3QyxLQUFLOUMsTUFBTCxDQUFZOEMsYUFBWixJQUE2QixDQUF6RSxFQUE0RTtRQUMxRSxPQUFPLEtBQUs5QyxNQUFMLENBQVk4QyxhQUFuQjtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCxtQkFBVztNQUNULE9BQU9oRixRQUFRLENBQUMsS0FBS2tDLE1BQUwsQ0FBWStDLE9BQWIsQ0FBUixHQUFnQyxLQUFLL0MsTUFBTCxDQUFZK0MsT0FBNUMsR0FBc0QsS0FBN0Q7SUFDRDs7O1dBRUQsb0JBQVk7TUFDVixJQUFJaEYsU0FBUyxDQUFDLEtBQUtpQyxNQUFMLENBQVlnRCxRQUFiLENBQVQsSUFBbUMsS0FBS2hELE1BQUwsQ0FBWWdELFFBQVosSUFBd0IsQ0FBL0QsRUFBa0U7UUFDaEUsT0FBTyxLQUFLaEQsTUFBTCxDQUFZZ0QsUUFBbkI7TUFDRDs7TUFFRCxPQUFPLEtBQVA7SUFDRDs7O1dBRUQscUJBQWE7TUFDWCxJQUFJakYsU0FBUyxDQUFDLEtBQUtpQyxNQUFMLENBQVlpRCxTQUFiLENBQVQsSUFBb0MsS0FBS2pELE1BQUwsQ0FBWWlELFNBQVosSUFBeUIsQ0FBakUsRUFBb0U7UUFDbEUsT0FBTyxLQUFLakQsTUFBTCxDQUFZaUQsU0FBbkI7TUFDRDs7TUFFRCxPQUFPLEtBQVA7SUFDRDs7O1dBRUQseUJBQWlCO01BQ2YsSUFBSWxGLFNBQVMsQ0FBQyxLQUFLaUMsTUFBTCxDQUFZa0QsYUFBYixDQUFULElBQXdDLEtBQUtsRCxNQUFMLENBQVlrRCxhQUFaLElBQTZCLENBQXpFLEVBQTRFO1FBQzFFLE9BQU8sS0FBS2xELE1BQUwsQ0FBWWtELGFBQW5CO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELHNCQUFjO01BQ1osSUFBSXBGLFFBQVEsQ0FBQyxLQUFLa0MsTUFBTCxDQUFZbUQsVUFBYixDQUFSLElBQW9DLEtBQUtuRCxNQUFMLENBQVltRCxVQUFaLElBQTBCLENBQWxFLEVBQXFFO1FBQ25FLE9BQU8sS0FBS25ELE1BQUwsQ0FBWW1ELFVBQW5CO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELGVBQU87TUFDTCxPQUFPN0UsY0FBUSxDQUFDLEtBQUswQixNQUFMLENBQVlvRCxHQUFiLENBQVIsR0FBNEIsS0FBS3BELE1BQUwsQ0FBWW9ELEdBQXhDLEdBQThDLEtBQXJEO0lBQ0Q7OztXQUVELGdCQUFRQyxPQUFSLEVBQWdCO01BQ2QsT0FBUSxLQUFLckQsTUFBTCxDQUFZVSxPQUFaLElBQXVCLEtBQUtWLE1BQUwsQ0FBWVUsT0FBWixDQUFvQjJDLE9BQXBCLENBQXhCLEdBQXVELEtBQUtyRCxNQUFMLENBQVlVLE9BQVosQ0FBb0IyQyxPQUFwQixDQUF2RCxHQUFxRixLQUE1RjtJQUNEOzs7V0FFRCxtQkFBVztNQUNULE9BQU9uRixRQUFRLENBQUMsS0FBSzhCLE1BQUwsQ0FBWXNELE9BQWIsQ0FBUixHQUFnQyxLQUFLdEQsTUFBTCxDQUFZc0QsT0FBNUMsR0FBc0QsS0FBN0Q7SUFDRDs7O1dBRUQsNkJBQXFCO01BQ25CLE9BQU9oRixjQUFRLENBQUMsS0FBSzBCLE1BQUwsQ0FBWXVELGlCQUFiLENBQVIsR0FBMEMsS0FBS3ZELE1BQUwsQ0FBWXVELGlCQUF0RCxHQUEwRSxLQUFqRjtJQUNEOzs7V0FFRCxrQkFBVXRFLEdBQVYsRUFBZTtNQUNiLE9BQU8sS0FBS3VFLFVBQUwsSUFBbUIsS0FBS3hELE1BQUwsQ0FBWXdELFVBQVosQ0FBdUJ2RSxHQUF2QixDQUFuQixHQUFpRCxLQUFLZSxNQUFMLENBQVl3RCxVQUFaLENBQXVCdkUsR0FBdkIsQ0FBakQsR0FBK0UsS0FBdEY7SUFDRDs7O1dBRUQsc0JBQWM7TUFDWixPQUFPLEtBQUtlLE1BQUwsQ0FBWXdELFVBQVosR0FBeUIsS0FBS3hELE1BQUwsQ0FBWXdELFVBQXJDLEdBQWtELEtBQXpEO0lBQ0Q7OztXQUVELG9CQUFZO01BQ1YsT0FBT3BGLE9BQU8sQ0FBQyxLQUFLNEIsTUFBTCxDQUFZeUQsUUFBYixDQUFQLCtCQUFvQyxJQUFJQyxHQUFKLENBQVEsS0FBSzFELE1BQUwsQ0FBWXlELFFBQXBCLENBQXBDLElBQXFFLEtBQTVFO0lBQ0Q7OztXQUVELGdCQUFRO01BQ04sT0FBT25GLGNBQVEsQ0FBQyxLQUFLMEIsTUFBTCxDQUFZMkQsSUFBYixDQUFSLEdBQTZCLEtBQUszRCxNQUFMLENBQVkyRCxJQUF6QyxHQUFnRCxLQUF2RDtJQUNEOzs7V0FFRCxpQkFBUztNQUNQLE9BQU96RixRQUFRLENBQUMsS0FBSzhCLE1BQUwsQ0FBWTRELEtBQWIsQ0FBUixHQUE4QixLQUFLNUQsTUFBTCxDQUFZNEQsS0FBMUMsR0FBa0QsS0FBekQ7SUFDRDs7O1dBRUQsZ0JBQVE7TUFDTixJQUFJMUYsUUFBUSxDQUFDLEtBQUs4QixNQUFMLENBQVl4QixJQUFiLENBQVIsSUFBOEJKLE9BQU8sQ0FBQyxLQUFLNEIsTUFBTCxDQUFZeEIsSUFBYixDQUF6QyxFQUE2RDtRQUMzRCxPQUFPLEtBQUt3QixNQUFMLENBQVl4QixJQUFuQjtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCxnQkFBUWIsS0FBUixFQUFlO01BQ2IsT0FBUSxLQUFLYSxJQUFMLE1BQWUsS0FBS0EsSUFBTCxPQUFnQmIsS0FBdkM7SUFDRDs7O1dBRUQsaUJBQVM7TUFDUCxPQUFPUyxPQUFPLENBQUMsS0FBSzRCLE1BQUwsQ0FBWXhCLElBQWIsQ0FBZDtJQUNEOzs7V0FFRCx5QkFBaUI7TUFDZixPQUFPLEtBQUtxRixNQUFMLENBQVksUUFBWixLQUF5QixLQUFLQSxNQUFMLENBQVksU0FBWixDQUFoQztJQUNEOzs7V0FFRCxpQkFBUztNQUNQLE9BQU96RixPQUFPLENBQUMsS0FBSzRCLE1BQUwsQ0FBWThELEtBQWIsQ0FBUCxHQUE2QixLQUFLOUQsTUFBTCxDQUFZOEQsS0FBekMsR0FBaUQsS0FBeEQ7SUFDRDs7O1dBRUQsdUJBQWU7TUFDYixPQUFPM0YsU0FBUyxDQUFDLEtBQUs2QixNQUFMLENBQVkrRCxXQUFiLENBQVQsR0FBcUMsS0FBSy9ELE1BQUwsQ0FBWStELFdBQWpELEdBQStELEtBQXRFO0lBQ0Q7OztXQUVELHFCQUFhO01BQ1gsT0FBTzVHLElBQUksQ0FBQ0UsU0FBTCxDQUFlLEtBQUsyQyxNQUFwQixDQUFQO0lBQ0Q7OztXQUVELG1CQUFXO01BQ1QsS0FBSyxJQUFNZixHQUFYLElBQWtCLElBQWxCLEVBQXdCO1FBQ3RCLElBQUksQ0FBQ0MsTUFBTSxDQUFDK0MsTUFBUCxDQUFjLElBQWQsRUFBb0JoRCxHQUFwQixDQUFMLEVBQStCO1VBQzdCO1FBQ0Q7O1FBRUQsT0FBTyxLQUFLQSxHQUFMLENBQVA7TUFDRDtJQUNGOzs7Ozs7QUFHWWlELDREQUFmLEU7Ozs7O0lDdE5NOEIsd0I7Ozs7Ozs7V0FDSix1QkFBZWxFLE1BQWYsRUFBdUI7TUFDckIsSUFBTW1FLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWQ7TUFDQUYsS0FBSyxDQUFDRyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixvQkFBcEI7TUFDQUosS0FBSyxDQUFDSyxXQUFOLEdBQW9CeEUsTUFBTSxDQUFDeUUsT0FBM0I7TUFDQSxPQUFPTixLQUFQO0lBQ0Q7OztXQUVELDBCQUFrQjtNQUNoQixJQUFNTyxXQUFXLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFwQjtNQUNBSyxXQUFXLENBQUNKLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLG1CQUExQjtNQUNBLE9BQU9HLFdBQVA7SUFDRDs7O1dBRUQsK0JBQXVCO01BQ3JCLElBQU1DLGdCQUFnQixHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBekI7TUFDQU0sZ0JBQWdCLENBQUNMLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQix5QkFBL0I7TUFDQSxPQUFPSSxnQkFBUDtJQUNEOzs7V0FFRCx1QkFBZTtNQUNiLE9BQU9QLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFQO0lBQ0Q7OztXQUVELG1CQUFXckUsTUFBWCxFQUFtQjtNQUNqQixJQUFNNEUsTUFBTSxHQUFHUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtNQUNBTyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsTUFBcEIsRUFBNEIsUUFBNUI7TUFDQUQsTUFBTSxDQUFDL0csS0FBUCxHQUFlbUMsTUFBTSxDQUFDbkMsS0FBdEI7TUFDQStHLE1BQU0sQ0FBQ0osV0FBUCxHQUFxQnhFLE1BQU0sQ0FBQ3dFLFdBQTVCO01BQ0EsT0FBT0ksTUFBUDtJQUNEOzs7V0FFRCxnQ0FBd0I7TUFDdEIsT0FBTyxVQUFQO0lBQ0Q7OztXQUVELHdCQUFnQjtNQUNkLE9BQU9SLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFQO0lBQ0Q7OztXQUVELHdCQUFnQnJFLE1BQWhCLEVBQXdCO01BQ3RCLElBQU04QixTQUFTLEdBQUdzQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7TUFDQXZDLFNBQVMsQ0FBQzBDLFdBQVYsR0FBd0J4RSxNQUFNLENBQUN3RSxXQUEvQjtNQUNBLE9BQU8xQyxTQUFQO0lBQ0Q7OztXQUVELHVCQUFlO01BQ2IsT0FBT3NDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFQO0lBQ0Q7OztXQUVELDJCQUFtQjtNQUNqQixJQUFNUyxZQUFZLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtNQUNBUyxZQUFZLENBQUNSLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLG9CQUEzQjtNQUNBLE9BQU9PLFlBQVA7SUFDRDs7O1dBRUQsMEJBQWtCOUUsTUFBbEIsRUFBMEI7TUFDeEIsSUFBTStFLEtBQUssR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQVUsS0FBSyxDQUFDRixZQUFOLENBQW1CLEtBQW5CLEVBQTBCN0UsTUFBTSxPQUFoQztNQUNBK0UsS0FBSyxDQUFDUCxXQUFOLEdBQW9CeEUsTUFBTSxDQUFDd0UsV0FBM0I7O01BRUEsSUFBSXhFLE1BQU0sQ0FBQ2dGLE1BQVgsRUFBbUI7UUFDakJELEtBQUssQ0FBQ1QsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7TUFDRDs7TUFFRCxPQUFPUSxLQUFQO0lBQ0Q7OztXQUVELHdCQUFnQi9FLE1BQWhCLEVBQXdCO01BQ3RCLElBQU0rRSxLQUFLLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFkO01BQ0FVLEtBQUssQ0FBQ1AsV0FBTixHQUFvQnhFLE1BQU0sQ0FBQ3dFLFdBQTNCOztNQUVBLElBQUl4RSxNQUFNLENBQUNnRixNQUFYLEVBQW1CO1FBQ2pCRCxLQUFLLENBQUNULFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFNBQXBCO01BQ0Q7O01BRUQsT0FBT1EsS0FBUDtJQUNEOzs7V0FFRCx1QkFBZS9FLE1BQWYsRUFBdUI7TUFDckIsSUFBTStFLEtBQUssR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQVUsS0FBSyxDQUFDRixZQUFOLENBQW1CLEtBQW5CLEVBQTBCN0UsTUFBTSxPQUFoQztNQUNBK0UsS0FBSyxDQUFDUCxXQUFOLEdBQW9CeEUsTUFBTSxDQUFDd0UsV0FBM0I7O01BRUEsSUFBSXhFLE1BQU0sQ0FBQ2dGLE1BQVgsRUFBbUI7UUFDakJELEtBQUssQ0FBQ1QsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7TUFDRDs7TUFFRCxPQUFPUSxLQUFQO0lBQ0Q7OztXQUVELGtCQUFVL0UsTUFBVixFQUFrQjtNQUNoQixJQUFNK0UsS0FBSyxHQUFHWCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtNQUNBVSxLQUFLLENBQUNGLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEI3RSxNQUFNLE9BQWhDO01BQ0ErRSxLQUFLLENBQUNQLFdBQU4sR0FBb0J4RSxNQUFNLENBQUN3RSxXQUEzQjs7TUFFQSxJQUFJeEUsTUFBTSxDQUFDZ0YsTUFBWCxFQUFtQjtRQUNqQkQsS0FBSyxDQUFDVCxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixTQUFwQjtNQUNEOztNQUVELE9BQU9RLEtBQVA7SUFDRDs7O1dBRUQsZ0NBQXdCO01BQ3RCLE9BQU9YLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFQO0lBQ0Q7OztXQUVELDZCQUFxQjtNQUNuQixPQUFPRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUDtJQUNEOzs7V0FFRCxtQkFBV3JFLE1BQVgsRUFBbUI7TUFDakIsSUFBTWlGLE1BQU0sR0FBR2IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7TUFDQVksTUFBTSxDQUFDVCxXQUFQLEdBQXFCeEUsTUFBTSxDQUFDd0UsV0FBNUI7TUFDQVMsTUFBTSxDQUFDSixZQUFQLENBQW9CLE9BQXBCLEVBQTZCLGNBQTdCOztNQUVBLElBQUk3RSxNQUFNLENBQUNnRixNQUFYLEVBQW1CO1FBQ2pCQyxNQUFNLENBQUNYLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFNBQXJCO01BQ0Q7O01BRUQsT0FBT1UsTUFBUDtJQUNEOzs7V0FFRCxrQkFBVWpGLE1BQVYsRUFBa0I7TUFDaEIsSUFBTWtGLEtBQUssR0FBR2QsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQWEsS0FBSyxDQUFDTCxZQUFOLENBQW1CLE1BQW5CLEVBQTJCN0UsTUFBTSxDQUFDdEIsSUFBbEM7TUFDQXdHLEtBQUssQ0FBQ0wsWUFBTixDQUFtQixJQUFuQixFQUF5QjdFLE1BQU0sQ0FBQ21GLEVBQWhDO01BQ0FELEtBQUssQ0FBQ1osU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsY0FBcEI7TUFDQSxPQUFPVyxLQUFQO0lBQ0Q7OztXQUVELHFCQUFhbEYsTUFBYixFQUFxQjtNQUNuQixJQUFNb0YsUUFBUSxHQUFHaEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWpCO01BQ0FlLFFBQVEsQ0FBQ1AsWUFBVCxDQUFzQixJQUF0QixFQUE0QjdFLE1BQU0sQ0FBQ21GLEVBQW5DO01BQ0FDLFFBQVEsQ0FBQ1AsWUFBVCxDQUFzQixNQUF0QixFQUE4QixVQUE5QjtNQUNBLE9BQU9PLFFBQVA7SUFDRDs7O1dBRUQsa0JBQVVwRixNQUFWLEVBQWtCO01BQ2hCLElBQU1xRixLQUFLLEdBQUdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtNQUNBZ0IsS0FBSyxDQUFDUixZQUFOLENBQW1CLE1BQW5CLEVBQTJCLE9BQTNCO01BQ0FRLEtBQUssQ0FBQ1IsWUFBTixDQUFtQixPQUFuQixFQUE0QjdFLE1BQU0sQ0FBQ25DLEtBQW5DO01BQ0F3SCxLQUFLLENBQUNSLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUI3RSxNQUFNLENBQUNtRixFQUFoQztNQUNBLE9BQU9FLEtBQVA7SUFDRDs7O1dBRUQscUJBQWFyRixNQUFiLEVBQXFCO01BQ25CLElBQU1zRixRQUFRLEdBQUdsQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7TUFDQWlCLFFBQVEsQ0FBQ1QsWUFBVCxDQUFzQixJQUF0QixFQUE0QjdFLE1BQU0sQ0FBQ21GLEVBQW5DO01BQ0EsT0FBT0csUUFBUDtJQUNEOzs7V0FFRCxtQkFBV3RGLE1BQVgsRUFBbUI7TUFDakIsSUFBTXVGLE1BQU0sR0FBR25CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO01BQ0FrQixNQUFNLENBQUNWLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEI3RSxNQUFNLENBQUNtRixFQUFqQztNQUVBbkYsTUFBTSxDQUFDd0YsWUFBUCxDQUFvQjNGLE9BQXBCLENBQTRCLFVBQUNoQyxLQUFELEVBQVE0SCxLQUFSLEVBQWtCO1FBQzVDLElBQU1sQyxNQUFNLEdBQUdhLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO1FBQ0FkLE1BQU0sQ0FBQ3NCLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkJoSCxLQUE3QjtRQUNBMEYsTUFBTSxDQUFDaUIsV0FBUCxHQUFxQnhFLE1BQU0sQ0FBQzBGLGFBQVAsQ0FBcUJELEtBQXJCLENBQXJCO1FBQ0FGLE1BQU0sQ0FBQ0ksV0FBUCxDQUFtQnBDLE1BQW5CO01BQ0QsQ0FMRDtNQU9BLE9BQU9nQyxNQUFQO0lBQ0Q7Ozs7OztBQUdZckIsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDdktBOztJQUVNMEIsd0I7Ozs7Ozs7Ozs7Ozs7V0FDSix1QkFBZTVGLE1BQWYsRUFBdUI7TUFDckIsSUFBTW1FLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWQ7TUFDQUYsS0FBSyxDQUFDRyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixvQkFBcEI7TUFDQUosS0FBSyxDQUFDRyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixPQUFwQjtNQUNBSixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLGNBQXBCO01BQ0FKLEtBQUssQ0FBQ0ssV0FBTixHQUFvQnhFLE1BQU0sQ0FBQ3lFLE9BQTNCO01BQ0EsT0FBT04sS0FBUDtJQUNEOzs7V0FFRCx1QkFBZTtNQUNiLElBQU0wQixRQUFRLEdBQUd6QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7TUFDQXdCLFFBQVEsQ0FBQ3ZCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFdBQXZCO01BQ0EsT0FBT3NCLFFBQVA7SUFDRDs7O1dBRUQsbUJBQVc3RixNQUFYLEVBQW1CO01BQ2pCLElBQU00RSxNQUFNLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO01BQ0FPLE1BQU0sQ0FBQ04sU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsS0FBckI7TUFDQUssTUFBTSxDQUFDQyxZQUFQLENBQW9CLE1BQXBCLEVBQTRCLFFBQTVCO01BQ0FELE1BQU0sQ0FBQy9HLEtBQVAsR0FBZW1DLE1BQU0sQ0FBQ25DLEtBQXRCO01BQ0ErRyxNQUFNLENBQUNKLFdBQVAsR0FBcUJ4RSxNQUFNLENBQUN3RSxXQUE1QjtNQUNBLE9BQU9JLE1BQVA7SUFDRDs7O1dBRUQsd0JBQWdCO01BQ2QsSUFBTTlDLFNBQVMsR0FBR3NDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtNQUNBdkMsU0FBUyxDQUFDd0MsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsWUFBeEI7TUFDQSxPQUFPekMsU0FBUDtJQUNEOzs7V0FFRCx1QkFBZTtNQUNiLElBQU1nRSxRQUFRLEdBQUcxQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7TUFDQXlCLFFBQVEsQ0FBQ3hCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLE1BQXZCO01BQ0F1QixRQUFRLENBQUN4QixTQUFULENBQW1CQyxHQUFuQixDQUF1QixXQUF2QjtNQUNBLE9BQU91QixRQUFQO0lBQ0Q7OztXQUVELDBCQUFrQjlGLE1BQWxCLEVBQTBCO01BQ3hCLElBQU0rRSxLQUFLLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO01BQ0FVLEtBQUssQ0FBQ1QsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0Isa0JBQXBCO01BQ0FRLEtBQUssQ0FBQ0YsWUFBTixDQUFtQixLQUFuQixFQUEwQjdFLE1BQU0sT0FBaEM7TUFDQStFLEtBQUssQ0FBQ1AsV0FBTixHQUFvQnhFLE1BQU0sQ0FBQ3dFLFdBQTNCOztNQUVBLElBQUl4RSxNQUFNLENBQUNnRixNQUFYLEVBQW1CO1FBQ2pCRCxLQUFLLENBQUNULFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFNBQXBCO01BQ0Q7O01BRUQsT0FBT1EsS0FBUDtJQUNEOzs7V0FFRCxxQkFBYS9FLE1BQWIsRUFBcUI7TUFDbkIsSUFBTW9GLFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFqQjtNQUNBZSxRQUFRLENBQUNkLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGtCQUF2QjtNQUNBYSxRQUFRLENBQUNQLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEIsVUFBOUI7TUFDQU8sUUFBUSxDQUFDUCxZQUFULENBQXNCLElBQXRCLEVBQTRCN0UsTUFBTSxDQUFDbUYsRUFBbkM7TUFDQSxPQUFPQyxRQUFQO0lBQ0Q7OztXQUVELDZCQUFxQjtNQUNuQixJQUFNVyxpQkFBaUIsR0FBRzNCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUExQjtNQUNBMEIsaUJBQWlCLENBQUN6QixTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsWUFBaEM7TUFDQXdCLGlCQUFpQixDQUFDekIsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLG1CQUFoQztNQUNBLE9BQU93QixpQkFBUDtJQUNEOzs7V0FFRCx1QkFBZS9GLE1BQWYsRUFBdUI7TUFDckIsSUFBTStFLEtBQUssR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQVUsS0FBSyxDQUFDVCxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixrQkFBcEI7TUFDQVEsS0FBSyxDQUFDRixZQUFOLENBQW1CLEtBQW5CLEVBQTBCN0UsTUFBTSxPQUFoQztNQUNBK0UsS0FBSyxDQUFDUCxXQUFOLEdBQW9CeEUsTUFBTSxDQUFDd0UsV0FBM0I7O01BRUEsSUFBSXhFLE1BQU0sQ0FBQ2dGLE1BQVgsRUFBbUI7UUFDakJELEtBQUssQ0FBQ1QsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7TUFDRDs7TUFFRCxPQUFPUSxLQUFQO0lBQ0Q7OztXQUVELGtCQUFVL0UsTUFBVixFQUFrQjtNQUNoQixJQUFNcUYsS0FBSyxHQUFHakIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQWdCLEtBQUssQ0FBQ2YsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0Isa0JBQXBCO01BQ0FjLEtBQUssQ0FBQ1IsWUFBTixDQUFtQixNQUFuQixFQUEyQixPQUEzQjtNQUNBUSxLQUFLLENBQUNSLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEI3RSxNQUFNLENBQUNuQyxLQUFuQztNQUNBd0gsS0FBSyxDQUFDUixZQUFOLENBQW1CLElBQW5CLEVBQXlCN0UsTUFBTSxDQUFDbUYsRUFBaEM7TUFDQSxPQUFPRSxLQUFQO0lBQ0Q7OztXQUVELHFCQUFhckYsTUFBYixFQUFxQjtNQUNuQixJQUFNc0YsUUFBUSxHQUFHbEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWpCO01BQ0FpQixRQUFRLENBQUNULFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEI3RSxNQUFNLENBQUNtRixFQUFuQztNQUNBRyxRQUFRLENBQUNoQixTQUFULENBQW1CQyxHQUFuQixDQUF1QixjQUF2QjtNQUNBLE9BQU9lLFFBQVA7SUFDRDs7O1dBRUQsbUJBQVd0RixNQUFYLEVBQW1CO01BQ2pCLElBQU11RixNQUFNLEdBQUduQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtNQUNBa0IsTUFBTSxDQUFDVixZQUFQLENBQW9CLElBQXBCLEVBQTBCN0UsTUFBTSxDQUFDbUYsRUFBakM7TUFDQUksTUFBTSxDQUFDakIsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsY0FBckI7TUFFQXZFLE1BQU0sQ0FBQ3dGLFlBQVAsQ0FBb0IzRixPQUFwQixDQUE0QixVQUFDaEMsS0FBRCxFQUFRNEgsS0FBUixFQUFrQjtRQUM1QyxJQUFNbEMsTUFBTSxHQUFHYSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtRQUNBZCxNQUFNLENBQUNzQixZQUFQLENBQW9CLE9BQXBCLEVBQTZCaEgsS0FBN0I7UUFDQTBGLE1BQU0sQ0FBQ2lCLFdBQVAsR0FBcUJ4RSxNQUFNLENBQUMwRixhQUFQLENBQXFCRCxLQUFyQixDQUFyQjtRQUNBRixNQUFNLENBQUNJLFdBQVAsQ0FBbUJwQyxNQUFuQjtNQUNELENBTEQ7TUFPQSxPQUFPZ0MsTUFBUDtJQUNEOzs7O0VBNUcwQnJCLFM7O0FBK0dkMEIsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7O0lBRU1JLGE7Ozs7O0VBQ0osZ0JBQWFDLFFBQWIsRUFBdUI7SUFBQTs7SUFBQTs7SUFDckI7SUFDQSxNQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLE1BQUtsRSxLQUFMLEdBQWEsSUFBSTZELFNBQUosRUFBYjtJQUNBLE1BQUs5RCxTQUFMLEdBQWlCLE1BQUtDLEtBQUwsQ0FBV0MsWUFBWCxFQUFqQjtJQUNBLE1BQUs4QyxZQUFMLEdBQW9CLE1BQUsvQyxLQUFMLENBQVdtRSxlQUFYLEVBQXBCO0lBQ0EsTUFBS3hCLFdBQUwsR0FBbUIsTUFBSzNDLEtBQUwsQ0FBV29FLGNBQVgsRUFBbkI7SUFDQSxNQUFLeEIsZ0JBQUwsR0FBd0IsTUFBSzVDLEtBQUwsQ0FBV3FFLG1CQUFYLEVBQXhCO0lBQ0EsTUFBS0MsUUFBTCxHQUFnQixLQUFoQjs7SUFDQSxNQUFLQyxLQUFMOztJQUNBLE1BQUtDLHNCQUFMOztJQUNBLE1BQUtDLFNBQUw7O0lBQ0EsTUFBS0Msb0JBQUw7O0lBRUEsTUFBS1IsUUFBTCxDQUFjbEYsRUFBZCxDQUFpQixXQUFqQixFQUE4QixZQUFNO01BQ2xDLE1BQUt5RixTQUFMO0lBQ0QsQ0FGRDs7SUFkcUI7RUFpQnRCOzs7O1dBRUQsa0NBQTBCO01BQ3hCLEtBQUsxRSxTQUFMLENBQWUrQyxZQUFmLENBQTRCLFdBQTVCLEVBQXlDLEtBQUtvQixRQUFMLENBQWM3RixJQUF2RDs7TUFFQSxJQUFJLEtBQUs2RixRQUFMLENBQWMvRixNQUFkLENBQXFCeEIsSUFBckIsRUFBSixFQUFpQztRQUMvQixLQUFLb0QsU0FBTCxDQUFlK0MsWUFBZixDQUE0QixXQUE1QixFQUF5QyxLQUFLb0IsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnhCLElBQXJCLEVBQXpDO01BQ0Q7SUFDRjs7O1dBRUQsaUJBQVMsQ0FBRTs7O1dBRVgscUJBQWEsQ0FBRTtJQUVmO0FBQ0Y7QUFDQTs7OztXQUNFLGdDQUF3QjtNQUFBOztNQUN0QixJQUFNZ0ksTUFBTSxHQUFHLEtBQUtULFFBQUwsQ0FBY3RFLFFBQWQsRUFBZjtNQUVBLEtBQUttRCxZQUFMLENBQWtCNkIsU0FBbEIsR0FBOEIsRUFBOUI7TUFFQUQsTUFBTSxDQUFDN0csT0FBUCxDQUFlLFVBQUNzRSxLQUFELEVBQVc7UUFDeEIsTUFBSSxDQUFDVyxZQUFMLENBQWtCYSxXQUFsQixDQUE4QixNQUFJLENBQUM1RCxLQUFMLENBQVc2RSxhQUFYLENBQXlCO1VBQ3JEbkMsT0FBTyxFQUFFTixLQUFLLENBQUNNO1FBRHNDLENBQXpCLENBQTlCO01BR0QsQ0FKRDtJQUtEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsbUJBQVc7TUFDVCxLQUFLNEIsUUFBTCxHQUFnQixJQUFoQjtNQUNBLEtBQUtHLFNBQUw7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLGtCQUFVO01BQ1IsS0FBS0gsUUFBTCxHQUFnQixLQUFoQjtNQUNBLEtBQUtHLFNBQUw7SUFDRDs7O1dBRUQsbUJBQVc7TUFDVCxJQUFJLEtBQUsxRSxTQUFMLElBQWtCLEtBQUtBLFNBQUwsQ0FBZStFLFVBQXJDLEVBQWlEO1FBQy9DLEtBQUsvRSxTQUFMLENBQWUrRSxVQUFmLENBQTBCQyxXQUExQixDQUFzQyxLQUFLaEYsU0FBM0M7TUFDRDs7TUFFRCxLQUFLLElBQU0zQyxHQUFYLElBQWtCLElBQWxCLEVBQXdCO1FBQ3RCLElBQUksQ0FBQ0MsTUFBTSxDQUFDK0MsTUFBUCxDQUFjLElBQWQsRUFBb0JoRCxHQUFwQixDQUFMLEVBQStCO1VBQzdCO1FBQ0Q7O1FBRUQsT0FBTyxLQUFLQSxHQUFMLENBQVA7TUFDRDtJQUNGOzs7O0VBM0VrQkcsYTs7QUE4RU4wRyxnRUFBZixFOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBRUE7QUFDQTtBQUNBOztJQUVNZSxpQjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQUE7O01BQ1AsS0FBS2pGLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBS2IsWUFBaEM7TUFDQSxLQUFLaEQsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLaEIsZ0JBQWhDO01BQ0EsS0FBSzdDLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBS2pCLFdBQWhDLEVBSE8sQ0FLUDs7TUFDQSxJQUFNbUIsUUFBUSxHQUFHLEtBQUs5RCxLQUFMLENBQVdpRixXQUFYLEVBQWpCLENBTk8sQ0FRUDs7TUFDQSxLQUFLQyxNQUFMLEdBQWMsS0FBS2xGLEtBQUwsQ0FBV21GLFNBQVgsQ0FBcUI7UUFDakMxQyxXQUFXLEVBQUU7TUFEb0IsQ0FBckIsQ0FBZDtNQUlBLEtBQUt5QyxNQUFMLENBQVlFLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07UUFDMUMsS0FBSSxDQUFDQyxPQUFMO01BQ0QsQ0FGRCxFQWJPLENBaUJQOztNQUNBLEtBQUtDLFlBQUwsR0FBb0IsS0FBS3RGLEtBQUwsQ0FBV21GLFNBQVgsQ0FBcUI7UUFDdkMxQyxXQUFXLEVBQUU7TUFEMEIsQ0FBckIsQ0FBcEI7TUFJQSxLQUFLNkMsWUFBTCxDQUFrQkYsZ0JBQWxCLENBQW1DLE9BQW5DLEVBQTRDLFlBQU07UUFDaEQsSUFBSUcsT0FBTyxDQUFDLHVCQUFELENBQVgsRUFBc0M7VUFDcEMsS0FBSSxDQUFDckIsUUFBTCxDQUFjc0IsUUFBZCxDQUF1QixFQUF2QjtRQUNEO01BQ0YsQ0FKRDtNQU1BLEtBQUs3QyxXQUFMLENBQWlCaUIsV0FBakIsQ0FBNkJFLFFBQTdCO01BQ0FBLFFBQVEsQ0FBQ0YsV0FBVCxDQUFxQixLQUFLc0IsTUFBMUI7TUFDQXBCLFFBQVEsQ0FBQ0YsV0FBVCxDQUFxQixLQUFLMEIsWUFBMUI7SUFDRDs7O1dBRUQsd0JBQWdCO01BQ2QsS0FBS3ZGLFNBQUwsR0FBaUIsS0FBS0MsS0FBTCxDQUFXeUYsV0FBWCxFQUFqQixDQURjLENBR2Q7O01BQ0EsS0FBSzFGLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBSzVELEtBQUwsQ0FBVzBGLFNBQVgsQ0FBcUI7UUFDOUNqRCxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUI0RCxLQUFyQixLQUErQixLQUFLbUMsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQjRELEtBQXJCLEVBQS9CLEdBQThELEtBQUttQyxRQUFMLENBQWNwRSxNQUFkLEVBRDdCO1FBRTlDbUQsTUFBTSxFQUFFLEtBQUtpQixRQUFMLENBQWMvRixNQUFkLENBQXFCcUQsTUFBckIsQ0FBNEIsV0FBNUI7TUFGc0MsQ0FBckIsQ0FBM0IsRUFKYyxDQVNkOztNQUNBLElBQUksS0FBSzBDLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUJzQyxXQUFyQixFQUFKLEVBQXdDO1FBQ3RDLEtBQUtWLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBSzVELEtBQUwsQ0FBVzJGLGNBQVgsQ0FBMEI7VUFDbkRsRCxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUJzQyxXQUFyQjtRQURzQyxDQUExQixDQUEzQjtNQUdEO0lBQ0Y7OztXQUVELDBCQUFrQjNFLEtBQWxCLEVBQXlCO01BQUE7O01BQ3ZCLElBQU1xQyxNQUFNLEdBQUcsS0FBSytGLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUIwQyxLQUFyQixLQUErQixLQUFLcUQsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQjBDLEtBQXJCLEVBQS9CLEdBQThEO1FBQUVsRSxJQUFJLEVBQUVELE9BQU8sQ0FBQ1osS0FBRDtNQUFmLENBQTdFO01BQ0EsSUFBTThKLFVBQVUsR0FBRyxJQUFJdkYsVUFBSixDQUFXbEMsTUFBWCxDQUFuQjtNQUVBLElBQU0wSCxVQUFVLEdBQUcsS0FBSzNCLFFBQUwsQ0FBY2hHLElBQWQsQ0FBbUI0SCxZQUFuQixDQUFnQztRQUNqRDVILElBQUksRUFBRSxLQUFLZ0csUUFBTCxDQUFjaEcsSUFENkI7UUFFakRDLE1BQU0sRUFBRXlILFVBRnlDO1FBR2pEdkgsSUFBSSxFQUFFLEtBQUs2RixRQUFMLENBQWM3RixJQUFkLEdBQXFCLEdBQXJCLEdBQTJCLEtBQUs2RixRQUFMLENBQWMzRixZQUFkLENBQTJCdEIsTUFIWDtRQUlqRHFCLE1BQU0sRUFBRSxLQUFLNEY7TUFKb0MsQ0FBaEMsQ0FBbkI7TUFPQSxJQUFNSixRQUFRLEdBQUcsS0FBSzlELEtBQUwsQ0FBV2lGLFdBQVgsRUFBakI7TUFDQSxJQUFNYyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0gsVUFBVSxDQUFDL0YsTUFBWCxFQUFELENBQXhCO01BRUEsSUFBTW1HLFNBQVMsR0FBRyxLQUFLakcsS0FBTCxDQUFXbUYsU0FBWCxDQUFxQjtRQUNyQzFDLFdBQVcsRUFBRTtNQUR3QixDQUFyQixDQUFsQjtNQUlBd0QsU0FBUyxDQUFDYixnQkFBVixDQUEyQixPQUEzQixFQUFvQyxZQUFNO1FBQ3hDLElBQU1XLFNBQVMsR0FBR0MsTUFBTSxDQUFDSCxVQUFVLENBQUN4SCxJQUFYLENBQWdCYSxLQUFoQixDQUFzQixHQUF0QixFQUEyQkMsR0FBM0IsRUFBRCxDQUF4Qjs7UUFDQSxNQUFJLENBQUMrRyxVQUFMLENBQWdCSCxTQUFoQjtNQUNELENBSEQ7O01BS0EsSUFBSSxLQUFLN0IsUUFBTCxDQUFjM0YsWUFBZCxDQUEyQnRCLE1BQTNCLEtBQXNDLENBQTFDLEVBQTZDO1FBQzNDLElBQU1rSixTQUFTLEdBQUcsS0FBS25HLEtBQUwsQ0FBV21GLFNBQVgsQ0FBcUI7VUFDckMxQyxXQUFXLEVBQUU7UUFEd0IsQ0FBckIsQ0FBbEI7UUFJQTBELFNBQVMsQ0FBQ2YsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtVQUN4QyxJQUFNZ0IsT0FBTyxHQUFHTCxTQUFTLEdBQUcsQ0FBNUI7O1VBQ0EsTUFBSSxDQUFDTSxJQUFMLENBQVVOLFNBQVYsRUFBcUJLLE9BQXJCO1FBQ0QsQ0FIRDtRQUtBdEMsUUFBUSxDQUFDRixXQUFULENBQXFCdUMsU0FBckI7TUFDRDs7TUFFRCxJQUFJLEtBQUtqQyxRQUFMLENBQWNyRSxRQUFkLEdBQXlCNUMsTUFBekIsR0FBa0MsQ0FBbEMsS0FBd0M4SSxTQUE1QyxFQUF1RDtRQUNyRCxJQUFNTyxXQUFXLEdBQUcsS0FBS3RHLEtBQUwsQ0FBV21GLFNBQVgsQ0FBcUI7VUFDdkMxQyxXQUFXLEVBQUU7UUFEMEIsQ0FBckIsQ0FBcEI7UUFJQTZELFdBQVcsQ0FBQ2xCLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07VUFDMUMsSUFBTWdCLE9BQU8sR0FBR0wsU0FBUyxHQUFHLENBQTVCOztVQUNBLE1BQUksQ0FBQ00sSUFBTCxDQUFVTixTQUFWLEVBQXFCSyxPQUFyQjtRQUNELENBSEQ7UUFLQXRDLFFBQVEsQ0FBQ0YsV0FBVCxDQUFxQjBDLFdBQXJCO01BQ0Q7O01BRURULFVBQVUsQ0FBQ3JILEVBQVgsQ0FBY3VCLFNBQWQsQ0FBd0I2RCxXQUF4QixDQUFvQ2lDLFVBQVUsQ0FBQ3JILEVBQVgsQ0FBY21FLFdBQWxEO01BQ0FrRCxVQUFVLENBQUNySCxFQUFYLENBQWNtRSxXQUFkLENBQTBCaUIsV0FBMUIsQ0FBc0NFLFFBQXRDO01BQ0FBLFFBQVEsQ0FBQ0YsV0FBVCxDQUFxQnFDLFNBQXJCO01BRUEsT0FBT0osVUFBUDtJQUNEOzs7V0FFRCxjQUFNVSxTQUFOLEVBQWlCSCxPQUFqQixFQUEwQjtNQUN4QixJQUFNdEssS0FBSyxHQUFHVixLQUFLLENBQUMsS0FBSzhJLFFBQUwsQ0FBY3JFLFFBQWQsRUFBRCxDQUFuQjtNQUNBLElBQU0yRyxJQUFJLEdBQUcxSyxLQUFLLENBQUN5SyxTQUFELENBQWxCO01BQ0F6SyxLQUFLLENBQUMySyxNQUFOLENBQWFGLFNBQWIsRUFBd0IsQ0FBeEI7TUFDQXpLLEtBQUssQ0FBQzJLLE1BQU4sQ0FBYUwsT0FBYixFQUFzQixDQUF0QixFQUF5QkksSUFBekI7TUFDQSxLQUFLdEMsUUFBTCxDQUFjc0IsUUFBZCxDQUF1QjFKLEtBQXZCO0lBQ0Q7OztXQUVELG1CQUFXO01BQ1QsSUFBTTRLLFVBQVUsR0FBRyxLQUFLQyxnQkFBTCxFQUFuQjtNQUNBLElBQU03SyxLQUFLLEdBQUdWLEtBQUssQ0FBQyxLQUFLOEksUUFBTCxDQUFjckUsUUFBZCxFQUFELENBQW5CO01BQ0EvRCxLQUFLLENBQUM2QixJQUFOLENBQVcrSSxVQUFVLENBQUM3RyxRQUFYLEVBQVg7TUFDQTZHLFVBQVUsQ0FBQ3ZHLE9BQVg7TUFDQSxLQUFLK0QsUUFBTCxDQUFjc0IsUUFBZCxDQUF1QjFKLEtBQXZCO0lBQ0Q7OztXQUVELG9CQUFZaUssU0FBWixFQUF1QjtNQUNyQixJQUFJUixPQUFPLENBQUMsbUJBQUQsQ0FBWCxFQUFrQztRQUNoQyxJQUFNcUIsWUFBWSxHQUFHeEwsS0FBSyxDQUFDLEtBQUs4SSxRQUFMLENBQWNyRSxRQUFkLEVBQUQsQ0FBMUI7UUFDQSxJQUFNTixRQUFRLEdBQUdxSCxZQUFZLENBQUNoSixNQUFiLENBQW9CLFVBQUM0SSxJQUFELEVBQU85QyxLQUFQO1VBQUEsT0FBaUJBLEtBQUssS0FBS3FDLFNBQTNCO1FBQUEsQ0FBcEIsQ0FBakI7UUFDQSxLQUFLN0IsUUFBTCxDQUFjc0IsUUFBZCxDQUF1QmpHLFFBQXZCO01BQ0Q7SUFDRjs7O1dBRUQsK0JBQXVCO01BQ3JCLElBQU16RCxLQUFLLEdBQUcsRUFBZDtNQUVBLEtBQUtvSSxRQUFMLENBQWMzRixZQUFkLENBQTJCVCxPQUEzQixDQUFtQyxVQUFDK0ksV0FBRCxFQUFpQjtRQUNsRC9LLEtBQUssQ0FBQzZCLElBQU4sQ0FBV2tKLFdBQVcsQ0FBQ2hILFFBQVosRUFBWDtNQUNELENBRkQ7TUFJQSxLQUFLcUUsUUFBTCxDQUFjc0IsUUFBZCxDQUF1QjFKLEtBQXZCO0lBQ0Q7OztXQUVELHFCQUFhO01BQUE7O01BQ1gsSUFBTUEsS0FBSyxHQUFHLEtBQUtvSSxRQUFMLENBQWNyRSxRQUFkLEVBQWQ7TUFFQSxLQUFLcUUsUUFBTCxDQUFjM0YsWUFBZCxDQUEyQlQsT0FBM0IsQ0FBbUMsVUFBQ2dKLE1BQUQsRUFBWTtRQUM3Q0EsTUFBTSxDQUFDM0csT0FBUDtNQUNELENBRkQ7TUFJQSxLQUFLK0QsUUFBTCxDQUFjM0YsWUFBZCxHQUE2QixFQUE3QjtNQUVBekMsS0FBSyxDQUFDZ0MsT0FBTixDQUFjLFVBQUNpSixTQUFELEVBQWU7UUFDM0IsSUFBTWxCLFVBQVUsR0FBRyxNQUFJLENBQUNjLGdCQUFMLENBQXNCSSxTQUF0QixDQUFuQjs7UUFDQWxCLFVBQVUsQ0FBQ0wsUUFBWCxDQUFvQnVCLFNBQXBCLEVBQStCLEtBQS9COztRQUNBLE1BQUksQ0FBQzdDLFFBQUwsQ0FBYzNGLFlBQWQsQ0FBMkJaLElBQTNCLENBQWdDa0ksVUFBaEM7O1FBRUEsSUFBSW1CLE9BQU8sR0FBR3hLLEtBQUssQ0FBQ3lLLElBQU4sQ0FBVyxNQUFJLENBQUNsSCxTQUFMLENBQWVtSCxnQkFBZixDQUFnQyxRQUFoQyxDQUFYLENBQWQ7O1FBRUEsTUFBSSxDQUFDaEQsUUFBTCxDQUFjM0YsWUFBZCxDQUEyQlQsT0FBM0IsQ0FBbUMsVUFBQytJLFdBQUQsRUFBaUI7VUFDbEQsSUFBTU0sWUFBWSxHQUFHM0ssS0FBSyxDQUFDeUssSUFBTixDQUFXSixXQUFXLENBQUNySSxFQUFaLENBQWV1QixTQUFmLENBQXlCbUgsZ0JBQXpCLENBQTBDLFFBQTFDLENBQVgsQ0FBckI7VUFDQUYsT0FBTyxHQUFHQSxPQUFPLENBQUNJLE1BQVIsQ0FBZUQsWUFBZixDQUFWO1FBQ0QsQ0FIRDs7UUFLQSxJQUFJLE1BQUksQ0FBQzdDLFFBQVQsRUFBbUI7VUFDakJ1QixVQUFVLENBQUNySCxFQUFYLENBQWM2SSxPQUFkO1VBQ0FMLE9BQU8sQ0FBQ2xKLE9BQVIsQ0FBZ0IsVUFBQytFLE1BQUQsRUFBWTtZQUMxQkEsTUFBTSxDQUFDQyxZQUFQLENBQW9CLFVBQXBCLEVBQWdDLFVBQWhDO1VBQ0QsQ0FGRDtRQUdELENBTEQsTUFLTztVQUNMK0MsVUFBVSxDQUFDckgsRUFBWCxDQUFjOEksTUFBZDtVQUNBTixPQUFPLENBQUNsSixPQUFSLENBQWdCLFVBQUMrRSxNQUFELEVBQVk7WUFDMUJBLE1BQU0sQ0FBQzBFLGVBQVAsQ0FBdUIsVUFBdkI7VUFDRCxDQUZEO1FBR0Q7TUFDRixDQXZCRDtNQXlCQSxLQUFLckQsUUFBTCxDQUFjM0YsWUFBZCxDQUEyQlQsT0FBM0IsQ0FBbUMsVUFBQ2dKLE1BQUQsRUFBWTtRQUM3QyxNQUFJLENBQUNsRSxnQkFBTCxDQUFzQmdCLFdBQXRCLENBQWtDa0QsTUFBTSxDQUFDdEksRUFBUCxDQUFVdUIsU0FBNUM7TUFDRCxDQUZEOztNQUlBLElBQUksS0FBS3VFLFFBQVQsRUFBbUI7UUFDakIsS0FBS1ksTUFBTCxDQUFZcEMsWUFBWixDQUF5QixVQUF6QixFQUFxQyxVQUFyQztRQUNBLEtBQUt3QyxZQUFMLENBQWtCeEMsWUFBbEIsQ0FBK0IsVUFBL0IsRUFBMkMsVUFBM0M7TUFDRCxDQUhELE1BR087UUFDTCxLQUFLb0MsTUFBTCxDQUFZcUMsZUFBWixDQUE0QixVQUE1QjtRQUNBLEtBQUtqQyxZQUFMLENBQWtCaUMsZUFBbEIsQ0FBa0MsVUFBbEM7TUFDRDtJQUNGOzs7V0FFRCxtQkFBVztNQUNULEtBQUtyRCxRQUFMLENBQWMzRixZQUFkLENBQTJCVCxPQUEzQixDQUFtQyxVQUFDK0ksV0FBRCxFQUFpQjtRQUNsREEsV0FBVyxDQUFDMUcsT0FBWjtNQUNELENBRkQ7O01BSUE7SUFDRDs7OztFQWxNdUI4RCxjOztBQXFNWGUsbUVBQWYsRTs7Ozs7Ozs7Ozs7OztBQzNNQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTXdDLG1COzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFDUCxLQUFLaEosRUFBTCxHQUFVLElBQUl3RyxhQUFKLENBQWdCLElBQWhCLENBQVY7SUFDRDs7O1dBRUQsMEJBQWtCbEosS0FBbEIsRUFBeUI7TUFDdkIsSUFBTXFDLE1BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVkwQyxLQUFaLEtBQXNCLEtBQUsxQyxNQUFMLENBQVkwQyxLQUFaLEVBQXRCLEdBQTRDO1FBQUVsRSxJQUFJLEVBQUVELE9BQU8sQ0FBQ1osS0FBRDtNQUFmLENBQTNEO01BRUEsSUFBTWdMLE1BQU0sR0FBRyxLQUFLNUksSUFBTCxDQUFVNEgsWUFBVixDQUF1QjtRQUNwQzVILElBQUksRUFBRSxLQUFLQSxJQUR5QjtRQUVwQ0MsTUFBTSxFQUFFLElBQUlrQyxVQUFKLENBQVdsQyxNQUFYLENBRjRCO1FBR3BDRSxJQUFJLEVBQUUsS0FBS0EsSUFBTCxHQUFZLEdBQVosR0FBa0IsS0FBS0UsWUFBTCxDQUFrQnRCLE1BSE47UUFJcENxQixNQUFNLEVBQUU7TUFKNEIsQ0FBdkIsQ0FBZjtNQU9BbUosT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQlosTUFBckI7TUFFQSxPQUFPQSxNQUFQO0lBQ0Q7OztXQUVELGNBQU1QLFNBQU4sRUFBaUJILE9BQWpCLEVBQTBCO01BQ3hCLElBQU10SyxLQUFLLEdBQUdWLEtBQUssQ0FBQyxLQUFLeUUsUUFBTCxFQUFELENBQW5CO01BQ0EsSUFBTTJHLElBQUksR0FBRzFLLEtBQUssQ0FBQ3lLLFNBQUQsQ0FBbEI7TUFDQXpLLEtBQUssQ0FBQzJLLE1BQU4sQ0FBYUYsU0FBYixFQUF3QixDQUF4QjtNQUNBekssS0FBSyxDQUFDMkssTUFBTixDQUFhTCxPQUFiLEVBQXNCLENBQXRCLEVBQXlCSSxJQUF6QjtNQUNBLEtBQUtoQixRQUFMLENBQWMxSixLQUFkO0lBQ0Q7OztXQUVELG1CQUFXO01BQ1QsSUFBTTRLLFVBQVUsR0FBRyxLQUFLQyxnQkFBTCxFQUFuQjtNQUNBLElBQU03SyxLQUFLLEdBQUdWLEtBQUssQ0FBQyxLQUFLeUUsUUFBTCxFQUFELENBQW5CO01BQ0EvRCxLQUFLLENBQUM2QixJQUFOLENBQVcrSSxVQUFVLENBQUM3RyxRQUFYLEVBQVg7TUFDQTZHLFVBQVUsQ0FBQ3ZHLE9BQVg7TUFDQSxLQUFLcUYsUUFBTCxDQUFjMUosS0FBZDtJQUNEOzs7V0FFRCxvQkFBWWlLLFNBQVosRUFBdUI7TUFDckIsSUFBTWEsWUFBWSxHQUFHeEwsS0FBSyxDQUFDLEtBQUt5RSxRQUFMLEVBQUQsQ0FBMUI7TUFDQSxJQUFNTixRQUFRLEdBQUdxSCxZQUFZLENBQUNoSixNQUFiLENBQW9CLFVBQUM0SSxJQUFELEVBQU85QyxLQUFQO1FBQUEsT0FBaUJBLEtBQUssS0FBS3FDLFNBQTNCO01BQUEsQ0FBcEIsQ0FBakI7TUFDQSxLQUFLUCxRQUFMLENBQWNqRyxRQUFkO0lBQ0Q7OztXQUVELCtCQUF1QjtNQUNyQixJQUFNekQsS0FBSyxHQUFHLEVBQWQ7TUFFQSxLQUFLeUMsWUFBTCxDQUFrQlQsT0FBbEIsQ0FBMEIsVUFBQytJLFdBQUQsRUFBaUI7UUFDekMvSyxLQUFLLENBQUM2QixJQUFOLENBQVdrSixXQUFXLENBQUNoSCxRQUFaLEVBQVg7TUFDRCxDQUZEO01BSUEsS0FBSzJGLFFBQUwsQ0FBYzFKLEtBQWQ7SUFDRDs7O1dBRUQsa0JBQVVBLEtBQVYsRUFBaUI7TUFDZixJQUFJUyxPQUFPLENBQUNULEtBQUQsQ0FBWCxFQUFvQjtRQUNsQixPQUFPQSxLQUFQO01BQ0Q7O01BRUQsT0FBTyxFQUFQO0lBQ0Q7OztXQUVELG1CQUFXO01BQ1QsS0FBS3lDLFlBQUwsQ0FBa0JULE9BQWxCLENBQTBCLFVBQUMrSSxXQUFELEVBQWlCO1FBQ3pDQSxXQUFXLENBQUMxRyxPQUFaO01BQ0QsQ0FGRDs7TUFJQTtJQUNEOzs7O0VBbEV5Qm5DLFk7O0FBcUVid0osbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUVBOztJQUVNRyxxQjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQUE7O01BQ1AsS0FBSzVILFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBS2IsWUFBaEMsRUFETyxDQUdQOztNQUNBLElBQU1pQixpQkFBaUIsR0FBRyxLQUFLaEUsS0FBTCxDQUFXNEgsb0JBQVgsRUFBMUIsQ0FKTyxDQU1QOztNQUNBLElBQU01RSxLQUFLLEdBQUcsS0FBS2hELEtBQUwsQ0FBVzZILGdCQUFYLENBQTRCO1FBQ3hDLE9BQUssS0FBSzNELFFBQUwsQ0FBYzdGLElBRHFCO1FBRXhDb0UsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMvRixNQUFkLENBQXFCNEQsS0FBckIsS0FBK0IsS0FBS21DLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUI0RCxLQUFyQixFQUEvQixHQUE4RCxLQUFLbUMsUUFBTCxDQUFjcEUsTUFBZCxFQUZuQztRQUd4Q21ELE1BQU0sRUFBRSxLQUFLaUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnFELE1BQXJCLENBQTRCLFdBQTVCO01BSGdDLENBQTVCLENBQWQsQ0FQTyxDQWFQOztNQUNBLEtBQUsyQixLQUFMLEdBQWEsS0FBS25ELEtBQUwsQ0FBVzhILFdBQVgsQ0FBdUI7UUFDbEMxRSxFQUFFLEVBQUUsS0FBS2MsUUFBTCxDQUFjN0Y7TUFEZ0IsQ0FBdkIsQ0FBYixDQWRPLENBa0JQOztNQUNBLEtBQUswQixTQUFMLENBQWU2RCxXQUFmLENBQTJCSSxpQkFBM0I7TUFDQUEsaUJBQWlCLENBQUNKLFdBQWxCLENBQThCLEtBQUtULEtBQW5DO01BQ0FhLGlCQUFpQixDQUFDSixXQUFsQixDQUE4QlosS0FBOUIsRUFyQk8sQ0F1QlA7O01BQ0EsS0FBS0csS0FBTCxDQUFXaUMsZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0MsWUFBTTtRQUMxQyxLQUFJLENBQUNsQixRQUFMLENBQWNzQixRQUFkLENBQXVCLEtBQUksQ0FBQ3JDLEtBQUwsQ0FBVzRFLE9BQWxDO01BQ0QsQ0FGRCxFQXhCTyxDQTRCUDs7TUFDQSxJQUFJLEtBQUs3RCxRQUFMLENBQWMvRixNQUFkLENBQXFCc0MsV0FBckIsRUFBSixFQUF3QztRQUN0QyxLQUFLVixTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUs1RCxLQUFMLENBQVcyRixjQUFYLENBQTBCO1VBQ25EbEQsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMvRixNQUFkLENBQXFCc0MsV0FBckI7UUFEc0MsQ0FBMUIsQ0FBM0I7TUFHRDtJQUNGOzs7V0FFRCxrQkFBVTNFLEtBQVYsRUFBaUI7TUFDZixPQUFPa00sT0FBTyxDQUFDbE0sS0FBRCxDQUFkO0lBQ0Q7OztXQUVELHFCQUFhO01BQ1gsS0FBS3FILEtBQUwsQ0FBVzRFLE9BQVgsR0FBcUIsS0FBSzdELFFBQUwsQ0FBY3JFLFFBQWQsRUFBckI7O01BRUEsSUFBSSxLQUFLeUUsUUFBVCxFQUFtQjtRQUNqQixLQUFLbkIsS0FBTCxDQUFXTCxZQUFYLENBQXdCLFVBQXhCLEVBQW9DLFVBQXBDO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsS0FBS0ssS0FBTCxDQUFXb0UsZUFBWCxDQUEyQixVQUEzQjtNQUNEO0lBQ0Y7Ozs7RUFqRHlCdEQsYzs7QUFvRGIwRCx5RUFBZixFOzs7Ozs7Ozs7Ozs7QUN0REE7O0lBRU1NLHlDOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLeEUsWUFBTCxHQUFvQixDQUFDLE9BQUQsRUFBVSxNQUFWLENBQXBCO01BQ0EsS0FBS0UsYUFBTCxHQUFxQixLQUFLTyxRQUFMLENBQWMvRixNQUFkLENBQXFCcUQsTUFBckIsQ0FBNEIsWUFBNUIsS0FBNkMsS0FBS2lDLFlBQXZFO01BQ0EsS0FBSzFELFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBS2IsWUFBaEM7TUFDQSxLQUFLbUYsV0FBTCxHQUFtQixFQUFuQixDQUpPLENBTVA7O01BQ0EsS0FBS25JLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBSzVELEtBQUwsQ0FBV21JLGNBQVgsQ0FBMEI7UUFDbkQxRixXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUI0RCxLQUFyQixLQUErQixLQUFLbUMsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQjRELEtBQXJCLEVBQS9CLEdBQThELEtBQUttQyxRQUFMLENBQWNwRSxNQUFkO01BRHhCLENBQTFCLENBQTNCLEVBUE8sQ0FXUDs7TUFDQSxLQUFLMkQsWUFBTCxDQUFrQjNGLE9BQWxCLENBQTBCLFVBQUNoQyxLQUFELEVBQVE0SCxLQUFSLEVBQWtCO1FBQzFDO1FBQ0EsSUFBTTBFLGNBQWMsR0FBRyxLQUFJLENBQUNwSSxLQUFMLENBQVdxSSxpQkFBWCxFQUF2QixDQUYwQyxDQUkxQzs7O1FBQ0EsSUFBTS9FLEtBQUssR0FBRyxLQUFJLENBQUN0RCxLQUFMLENBQVdzSSxRQUFYLENBQW9CO1VBQ2hDeE0sS0FBSyxFQUFFQSxLQUR5QjtVQUVoQ3NILEVBQUUsRUFBRSxLQUFJLENBQUNjLFFBQUwsQ0FBYzdGLElBQWQsR0FBcUIsR0FBckIsR0FBMkJxRjtRQUZDLENBQXBCLENBQWQ7O1FBSUEwRSxjQUFjLENBQUN4RSxXQUFmLENBQTJCTixLQUEzQjtRQUVBQSxLQUFLLENBQUM4QixnQkFBTixDQUF1QixRQUF2QixFQUFpQyxZQUFNO1VBQ3JDLElBQU1tRCxVQUFVLEdBQUdqRixLQUFLLENBQUN4SCxLQUFOLEtBQWdCLE1BQW5DOztVQUNBLEtBQUksQ0FBQ29JLFFBQUwsQ0FBY3NCLFFBQWQsQ0FBdUIrQyxVQUF2QjtRQUNELENBSEQ7O1FBS0EsS0FBSSxDQUFDTCxXQUFMLENBQWlCdkssSUFBakIsQ0FBc0IyRixLQUF0QixFQWhCMEMsQ0FrQjFDOzs7UUFDQThFLGNBQWMsQ0FBQ3hFLFdBQWYsQ0FBMkIsS0FBSSxDQUFDNUQsS0FBTCxDQUFXd0ksUUFBWCxDQUFvQjtVQUM3QyxPQUFLLEtBQUksQ0FBQ3RFLFFBQUwsQ0FBYzdGLElBQWQsR0FBcUIsR0FBckIsR0FBMkJxRixLQURhO1VBRTdDakIsV0FBVyxFQUFFLEtBQUksQ0FBQ2tCLGFBQUwsQ0FBbUJELEtBQW5CLENBRmdDO1VBRzdDVCxNQUFNLEVBQUUsS0FBSSxDQUFDaUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnFELE1BQXJCLENBQTRCLFdBQTVCO1FBSHFDLENBQXBCLENBQTNCOztRQU1BLEtBQUksQ0FBQ3pCLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkJ3RSxjQUEzQjtNQUNELENBMUJELEVBWk8sQ0F3Q1A7O01BQ0EsSUFBSSxLQUFLbEUsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnNDLFdBQXJCLEVBQUosRUFBd0M7UUFDdEMsS0FBS1YsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLNUQsS0FBTCxDQUFXMkYsY0FBWCxDQUEwQjtVQUNuRGxELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnNDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQscUJBQWE7TUFBQTs7TUFDWCxLQUFLeUgsV0FBTCxDQUFpQnBLLE9BQWpCLENBQXlCLFVBQUN3RixLQUFELEVBQVc7UUFDbEMsSUFBTWlGLFVBQVUsR0FBR2pGLEtBQUssQ0FBQ3hILEtBQU4sS0FBZ0IsTUFBbkM7UUFDQXdILEtBQUssQ0FBQ3lFLE9BQU4sR0FBZ0JRLFVBQVUsS0FBSyxNQUFJLENBQUNyRSxRQUFMLENBQWNyRSxRQUFkLEVBQS9CO1FBQ0F5RCxLQUFLLENBQUNnQixRQUFOLEdBQWlCLE1BQUksQ0FBQ0EsUUFBdEI7TUFDRCxDQUpEO0lBS0Q7Ozs7RUF2RGtDcUQsZTs7QUEwRHRCTSxnR0FBZixFOzs7Ozs7Ozs7Ozs7QUM1REE7O0lBRU1RLDJDOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLMUksU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLYixZQUFoQyxFQURPLENBR1A7O01BQ0EsS0FBS2hELFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBSzVELEtBQUwsQ0FBV3dJLFFBQVgsQ0FBb0I7UUFDN0MsT0FBSyxLQUFLdEUsUUFBTCxDQUFjN0YsSUFEMEI7UUFFN0NvRSxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUI0RCxLQUFyQixLQUErQixLQUFLbUMsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQjRELEtBQXJCLEVBQS9CLEdBQThELEtBQUttQyxRQUFMLENBQWNwRSxNQUFkLEVBRjlCO1FBRzdDbUQsTUFBTSxFQUFFLEtBQUtpQixRQUFMLENBQWMvRixNQUFkLENBQXFCcUQsTUFBckIsQ0FBNEIsV0FBNUI7TUFIcUMsQ0FBcEIsQ0FBM0IsRUFKTyxDQVVQOztNQUNBLEtBQUsyQixLQUFMLEdBQWEsS0FBS25ELEtBQUwsQ0FBVzBJLFNBQVgsQ0FBcUI7UUFDaENqRixZQUFZLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixDQURrQjtRQUVoQ0UsYUFBYSxFQUFFLEtBQUtPLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUJxRCxNQUFyQixDQUE0QixZQUE1QixLQUE2QyxDQUFDLE9BQUQsRUFBVSxNQUFWLENBRjVCO1FBR2hDNEIsRUFBRSxFQUFFLEtBQUtjLFFBQUwsQ0FBYzdGO01BSGMsQ0FBckIsQ0FBYjtNQUtBLEtBQUswQixTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUtULEtBQWhDLEVBaEJPLENBa0JQOztNQUNBLEtBQUtBLEtBQUwsQ0FBV2lDLGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDLFlBQU07UUFDMUMsSUFBTXRKLEtBQUssR0FBRyxLQUFJLENBQUNxSCxLQUFMLENBQVdySCxLQUFYLEtBQXFCLE1BQW5DOztRQUNBLEtBQUksQ0FBQ29JLFFBQUwsQ0FBY3NCLFFBQWQsQ0FBdUIxSixLQUF2QjtNQUNELENBSEQsRUFuQk8sQ0F3QlA7O01BQ0EsSUFBSSxLQUFLb0ksUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnNDLFdBQXJCLEVBQUosRUFBd0M7UUFDdEMsS0FBS1YsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLNUQsS0FBTCxDQUFXMkYsY0FBWCxDQUEwQjtVQUNuRGxELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnNDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQscUJBQWE7TUFDWCxLQUFLMEMsS0FBTCxDQUFXckgsS0FBWCxHQUFtQixLQUFLb0ksUUFBTCxDQUFjckUsUUFBZCxPQUE2QixJQUE3QixHQUFvQyxNQUFwQyxHQUE2QyxPQUFoRTs7TUFFQSxJQUFJLEtBQUt5RSxRQUFULEVBQW1CO1FBQ2pCLEtBQUtuQixLQUFMLENBQVdMLFlBQVgsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBcEM7TUFDRCxDQUZELE1BRU87UUFDTCxLQUFLSyxLQUFMLENBQVdvRSxlQUFYLENBQTJCLFVBQTNCO01BQ0Q7SUFDRjs7OztFQXpDbUNJLGU7O0FBNEN2QmMsbUdBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNRSx1Qjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQ1AsSUFBSSxLQUFLeEssTUFBTCxDQUFZNkQsTUFBWixDQUFtQixTQUFuQixLQUFpQyxLQUFLN0QsTUFBTCxDQUFZeUssUUFBWixDQUFxQixPQUFyQixDQUFyQyxFQUFvRTtRQUNsRSxLQUFLcEssRUFBTCxHQUFVLElBQUl5SixrQkFBSixDQUEyQixJQUEzQixDQUFWO01BQ0QsQ0FGRCxNQUVPLElBQUksS0FBSzlKLE1BQUwsQ0FBWTZELE1BQVosQ0FBbUIsU0FBbkIsS0FBaUMsS0FBSzdELE1BQUwsQ0FBWXlLLFFBQVosQ0FBcUIsUUFBckIsQ0FBckMsRUFBcUU7UUFDMUUsS0FBS3BLLEVBQUwsR0FBVSxJQUFJaUssbUJBQUosQ0FBNEIsSUFBNUIsQ0FBVjtNQUNELENBRk0sTUFFQSxJQUFJLEtBQUt0SyxNQUFMLENBQVk2RCxNQUFaLENBQW1CLFNBQW5CLENBQUosRUFBbUM7UUFDeEMsS0FBS3hELEVBQUwsR0FBVSxJQUFJbUosZUFBSixDQUFrQixJQUFsQixDQUFWO01BQ0Q7SUFDRjs7O1dBRUQsa0JBQVU3TCxLQUFWLEVBQWlCO01BQ2YsT0FBT2tNLE9BQU8sQ0FBQ2xNLEtBQUQsQ0FBZDtJQUNEOzs7O0VBYjJCa0MsWTs7QUFnQmYySyx5RUFBZixFOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTs7SUFFTUUsbUI7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUFBOztNQUNQLEtBQUtDLFlBQUw7TUFDQSxLQUFLL0ksU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLYixZQUFoQztNQUNBLEtBQUtoRCxTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUtoQixnQkFBaEM7TUFDQSxLQUFLN0MsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLakIsV0FBaEMsRUFKTyxDQU1QOztNQUNBLElBQUksS0FBS3VCLFFBQUwsQ0FBY2hHLElBQWQsQ0FBbUJXLE9BQW5CLENBQTJCa0ssa0JBQTNCLElBQWlELEtBQUs3RSxRQUFMLENBQWMvRixNQUFkLENBQXFCcUQsTUFBckIsQ0FBNEIsb0JBQTVCLENBQXJELEVBQXdHO1FBQ3RHLElBQU13QixLQUFLLEdBQUcsS0FBS2hELEtBQUwsQ0FBV3dJLFFBQVgsQ0FBb0I7VUFDaEMvRixXQUFXLEVBQUUsZUFEbUI7VUFFaEMsT0FBSyw2QkFBNkIsS0FBS3lCLFFBQUwsQ0FBYzdGO1FBRmhCLENBQXBCLENBQWQ7UUFLQSxLQUFLMEIsU0FBTCxDQUFlNkQsV0FBZixDQUEyQlosS0FBM0I7UUFFQSxJQUFNRyxLQUFLLEdBQUcsS0FBS25ELEtBQUwsQ0FBV2dKLFFBQVgsQ0FBb0I7VUFDaENyTSxJQUFJLEVBQUUsTUFEMEI7VUFFaEN5RyxFQUFFLEVBQUUsNkJBQTZCLEtBQUtjLFFBQUwsQ0FBYzdGO1FBRmYsQ0FBcEIsQ0FBZDtRQUtBLEtBQUswQixTQUFMLENBQWU2RCxXQUFmLENBQTJCVCxLQUEzQjtRQUVBLElBQU0rQixNQUFNLEdBQUcsS0FBS2xGLEtBQUwsQ0FBV21GLFNBQVgsQ0FBcUI7VUFDbEMxQyxXQUFXLEVBQUU7UUFEcUIsQ0FBckIsQ0FBZjtRQUlBeUMsTUFBTSxDQUFDRSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO1VBQ3JDLElBQU1oSSxHQUFHLEdBQUcrRixLQUFLLENBQUNySCxLQUFsQixDQURxQyxDQUdyQzs7VUFDQSxJQUFJc0IsR0FBRyxDQUFDSCxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7WUFDcEI7VUFDRCxDQU5vQyxDQVFyQzs7O1VBQ0EsSUFBSWxCLEtBQUssQ0FBQyxLQUFJLENBQUNtSSxRQUFMLENBQWNwSSxLQUFkLENBQW9Cc0IsR0FBcEIsQ0FBRCxDQUFULEVBQXFDO1lBQ25DO1VBQ0Q7O1VBRUQsS0FBSSxDQUFDOEcsUUFBTCxDQUFjK0UsY0FBZCxDQUE2QjtZQUFFdE0sSUFBSSxFQUFFO1VBQVIsQ0FBN0IsRUFBOENTLEdBQTlDOztVQUNBLEtBQUksQ0FBQzhHLFFBQUwsQ0FBY3NCLFFBQWQsQ0FBdUIsS0FBSSxDQUFDdEIsUUFBTCxDQUFjcEksS0FBckM7O1VBQ0FxSCxLQUFLLENBQUNySCxLQUFOLEdBQWMsRUFBZDtRQUNELENBaEJEO1FBa0JBLEtBQUtpRSxTQUFMLENBQWU2RCxXQUFmLENBQTJCc0IsTUFBM0I7TUFDRDtJQUNGOzs7V0FFRCx3QkFBZ0IvRyxNQUFoQixFQUF3QmYsR0FBeEIsRUFBNkI7TUFBQTs7TUFDM0IsSUFBTTBKLE1BQU0sR0FBRyxLQUFLNUMsUUFBTCxDQUFjaEcsSUFBZCxDQUFtQjRILFlBQW5CLENBQWdDO1FBQzdDNUgsSUFBSSxFQUFFLEtBQUtnRyxRQUFMLENBQWNoRyxJQUR5QjtRQUU3Q0MsTUFBTSxFQUFFLElBQUlrQyxVQUFKLENBQVdsQyxNQUFYLENBRnFDO1FBRzdDRSxJQUFJLEVBQUUsS0FBSzZGLFFBQUwsQ0FBYzdGLElBQWQsR0FBcUIsR0FBckIsR0FBMkJqQixHQUhZO1FBSTdDa0IsTUFBTSxFQUFFLEtBQUs0RjtNQUpnQyxDQUFoQyxDQUFmLENBRDJCLENBUTNCOztNQUNBLElBQU1nRixXQUFXLEdBQUcsQ0FBQyxLQUFLaEYsUUFBTCxDQUFjaUYsVUFBZCxDQUF5Qi9MLEdBQXpCLENBQXJCO01BQ0EsSUFBTWdNLG9CQUFvQixHQUFHLENBQUMsS0FBS2xGLFFBQUwsQ0FBY21GLG1CQUFkLENBQWtDak0sR0FBbEMsQ0FBOUI7TUFDQSxJQUFNMkwsa0JBQWtCLEdBQUcsS0FBSzdFLFFBQUwsQ0FBY2hHLElBQWQsQ0FBbUJXLE9BQW5CLENBQTJCa0ssa0JBQTNCLElBQWlELEtBQUs3RSxRQUFMLENBQWMvRixNQUFkLENBQXFCcUQsTUFBckIsQ0FBNEIsb0JBQTVCLENBQTVFOztNQUVBLElBQUkwSCxXQUFXLElBQUlFLG9CQUFmLElBQXVDTCxrQkFBM0MsRUFBK0Q7UUFDN0QsSUFBTU8sU0FBUyxHQUFHLEtBQUt0SixLQUFMLENBQVdtRixTQUFYLENBQXFCO1VBQ3JDMUMsV0FBVyxFQUFFO1FBRHdCLENBQXJCLENBQWxCO1FBR0FxRSxNQUFNLENBQUMvRyxTQUFQLENBQWlCNkQsV0FBakIsQ0FBNkIwRixTQUE3QjtRQUNBQSxTQUFTLENBQUNsRSxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxZQUFNO1VBQ3hDLE9BQU8sTUFBSSxDQUFDbEIsUUFBTCxDQUFjcEksS0FBZCxDQUFvQnNCLEdBQXBCLENBQVA7O1VBQ0EsTUFBSSxDQUFDOEcsUUFBTCxDQUFjc0IsUUFBZCxDQUF1QixNQUFJLENBQUN0QixRQUFMLENBQWNwSSxLQUFyQztRQUNELENBSEQ7TUFJRDs7TUFFRCxLQUFLb0ksUUFBTCxDQUFjM0YsWUFBZCxDQUEyQlosSUFBM0IsQ0FBZ0NtSixNQUFoQztNQUNBLEtBQUs1QyxRQUFMLENBQWNwSSxLQUFkLENBQW9Cc0IsR0FBcEIsSUFBMkIwSixNQUFNLENBQUNqSCxRQUFQLEVBQTNCO0lBQ0Q7OztXQUVELHFCQUFhO01BQ1gsSUFBTS9ELEtBQUssR0FBRyxLQUFLb0ksUUFBTCxDQUFjckUsUUFBZCxFQUFkOztNQUVBLEtBQUssSUFBTXpDLEdBQVgsSUFBa0J0QixLQUFsQixFQUF5QjtRQUN2QixJQUFJLENBQUN1QixNQUFNLENBQUMrQyxNQUFQLENBQWN0RSxLQUFkLEVBQXFCc0IsR0FBckIsQ0FBTCxFQUFnQztVQUM5QjtRQUNEOztRQUVELElBQU15SixXQUFXLEdBQUcsS0FBSzNDLFFBQUwsQ0FBY3FGLGNBQWQsQ0FBNkJuTSxHQUE3QixDQUFwQjtRQUVBLEtBQUt3RixnQkFBTCxDQUFzQmdCLFdBQXRCLENBQWtDaUQsV0FBVyxDQUFDckksRUFBWixDQUFldUIsU0FBakQ7O1FBRUEsSUFBSThHLFdBQUosRUFBaUI7VUFDZixJQUFJLEtBQUt2QyxRQUFULEVBQW1CO1lBQ2pCdUMsV0FBVyxDQUFDckksRUFBWixDQUFlNkksT0FBZjtVQUNELENBRkQsTUFFTztZQUNMUixXQUFXLENBQUNySSxFQUFaLENBQWU4SSxNQUFmO1VBQ0Q7UUFDRjtNQUNGO0lBQ0Y7OztXQUVELHdCQUFnQjtNQUNkLEtBQUt2SCxTQUFMLEdBQWlCLEtBQUtDLEtBQUwsQ0FBV3lGLFdBQVgsRUFBakIsQ0FEYyxDQUdkOztNQUNBLEtBQUsxRixTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUs1RCxLQUFMLENBQVcwRixTQUFYLENBQXFCO1FBQzlDakQsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMvRixNQUFkLENBQXFCNEQsS0FBckIsS0FBK0IsS0FBS21DLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUI0RCxLQUFyQixFQUEvQixHQUE4RCxLQUFLbUMsUUFBTCxDQUFjcEUsTUFBZCxFQUQ3QjtRQUU5Q21ELE1BQU0sRUFBRSxLQUFLaUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnFELE1BQXJCLENBQTRCLFdBQTVCO01BRnNDLENBQXJCLENBQTNCLEVBSmMsQ0FTZDs7TUFDQSxJQUFJLEtBQUswQyxRQUFMLENBQWMvRixNQUFkLENBQXFCc0MsV0FBckIsRUFBSixFQUF3QztRQUN0QyxLQUFLVixTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUs1RCxLQUFMLENBQVcyRixjQUFYLENBQTBCO1VBQ25EbEQsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMvRixNQUFkLENBQXFCc0MsV0FBckI7UUFEc0MsQ0FBMUIsQ0FBM0I7TUFHRDtJQUNGOzs7V0FFRCxtQkFBVztNQUNULEtBQUt5RCxRQUFMLENBQWMzRixZQUFkLENBQTJCVCxPQUEzQixDQUFtQyxVQUFDK0ksV0FBRCxFQUFpQjtRQUNsREEsV0FBVyxDQUFDMUcsT0FBWjtNQUNELENBRkQ7O01BSUE7SUFDRDs7OztFQTFId0I4RCxjOztBQTZIWjRFLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1XLHFCOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFDUCxLQUFLaEwsRUFBTCxHQUFVLElBQUlxSyxjQUFKLENBQWlCLElBQWpCLENBQVY7SUFDRDs7O1dBRUQsbUJBQVc7TUFDVDtNQUNBLElBQUksS0FBSzFLLE1BQUwsQ0FBWXdELFVBQVosRUFBSixFQUE4QjtRQUM1QixLQUFLLElBQU12RSxHQUFYLElBQWtCLEtBQUtlLE1BQUwsQ0FBWXdELFVBQVosRUFBbEIsRUFBNEM7VUFDMUMsSUFBSSxDQUFDdEUsTUFBTSxDQUFDK0MsTUFBUCxDQUFjLEtBQUtqQyxNQUFMLENBQVl3RCxVQUFaLEVBQWQsRUFBd0N2RSxHQUF4QyxDQUFMLEVBQW1EO1lBQ2pEO1VBQ0Q7O1VBRUQsSUFBTXFNLGdCQUFnQixHQUFHLEtBQUt2TCxJQUFMLENBQVVXLE9BQVYsQ0FBa0I0SyxnQkFBbEIsSUFBc0MsS0FBS3RMLE1BQUwsQ0FBWXFELE1BQVosQ0FBbUIsa0JBQW5CLENBQS9EO1VBQ0EsSUFBTWtJLGFBQWEsR0FBRyxDQUFDLEtBQUt2TCxNQUFMLENBQVl5RCxRQUFaLEVBQUQsSUFBMkIsQ0FBQyxLQUFLekQsTUFBTCxDQUFZeUQsUUFBWixHQUF1QnRDLFFBQXZCLENBQWdDbEMsR0FBaEMsQ0FBbEQ7O1VBRUEsSUFBSXFNLGdCQUFnQixJQUFJQyxhQUF4QixFQUF1QztZQUNyQztVQUNEOztVQUVELElBQU12TCxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZd0wsUUFBWixDQUFxQnZNLEdBQXJCLENBQWY7VUFDQSxLQUFLNkwsY0FBTCxDQUFvQjlLLE1BQXBCLEVBQTRCZixHQUE1QjtRQUNEO01BQ0YsQ0FsQlEsQ0FvQlQ7OztNQUNBLElBQUksS0FBS2UsTUFBTCxDQUFZd0QsVUFBWixFQUFKLEVBQThCO1FBQzVCLEtBQUssSUFBTXZFLElBQVgsSUFBa0IsS0FBS2UsTUFBTCxDQUFZd0QsVUFBWixFQUFsQixFQUE0QztVQUMxQyxJQUFJLENBQUN0RSxNQUFNLENBQUMrQyxNQUFQLENBQWMsS0FBS2pDLE1BQUwsQ0FBWXdELFVBQVosRUFBZCxFQUF3Q3ZFLElBQXhDLENBQUwsRUFBbUQ7WUFDakQ7VUFDRDs7VUFFRCxJQUFJLEtBQUtpTSxtQkFBTCxDQUF5QmpNLElBQXpCLENBQUosRUFBbUM7WUFDakMsSUFBTWUsT0FBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWXdMLFFBQVosQ0FBcUJ2TSxJQUFyQixDQUFmOztZQUNBLEtBQUs2TCxjQUFMLENBQW9COUssT0FBcEIsRUFBNEJmLElBQTVCO1VBQ0Q7UUFDRjtNQUNGO0lBQ0Y7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxvQkFBWXVNLFFBQVosRUFBc0I7TUFDcEIsT0FBTyxLQUFLeEwsTUFBTCxDQUFZeUQsUUFBWixNQUEwQixLQUFLekQsTUFBTCxDQUFZeUQsUUFBWixHQUF1QnRDLFFBQXZCLENBQWdDcUssUUFBaEMsQ0FBakM7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLDZCQUFxQkEsUUFBckIsRUFBK0I7TUFBQTs7TUFDN0IsSUFBTW5KLGlCQUFpQixHQUFHLEtBQUtyQyxNQUFMLENBQVlxQyxpQkFBWixFQUExQjs7TUFFQSxJQUFJQSxpQkFBSixFQUF1QjtRQUNyQixJQUFJb0osaUJBQWlCLEdBQUcsRUFBeEI7UUFFQXZNLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZeUMsaUJBQVosRUFBK0IxQyxPQUEvQixDQUF1QyxVQUFDVixHQUFELEVBQVM7VUFDOUMsSUFBSXJCLEtBQUssQ0FBQyxLQUFJLENBQUNELEtBQUwsQ0FBV3NCLEdBQVgsQ0FBRCxDQUFULEVBQTRCO1lBQzFCLElBQU15TSxrQkFBa0IsR0FBR3JKLGlCQUFpQixDQUFDcEQsR0FBRCxDQUE1QztZQUVBd00saUJBQWlCLEdBQUdDLGtCQUFrQixDQUFDak0sTUFBbkIsQ0FBMEIsVUFBQytMLFFBQUQsRUFBYztjQUMxRCxPQUFPLENBQUN0TSxNQUFNLENBQUMrQyxNQUFQLENBQWMsS0FBSSxDQUFDdEUsS0FBbkIsRUFBMEI2TixRQUExQixDQUFSO1lBQ0QsQ0FGbUIsQ0FBcEI7VUFHRDtRQUNGLENBUkQ7UUFVQSxPQUFPQyxpQkFBaUIsQ0FBQ3RLLFFBQWxCLENBQTJCcUssUUFBM0IsQ0FBUDtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCx3QkFBZ0J4TCxNQUFoQixFQUF3QmYsR0FBeEIsRUFBNkI7TUFDM0IsSUFBTTBKLE1BQU0sR0FBRyxLQUFLNUksSUFBTCxDQUFVNEgsWUFBVixDQUF1QjtRQUNwQzVILElBQUksRUFBRSxLQUFLQSxJQUR5QjtRQUVwQ0MsTUFBTSxFQUFFLElBQUlrQyxVQUFKLENBQVdsQyxNQUFYLENBRjRCO1FBR3BDRSxJQUFJLEVBQUUsS0FBS0EsSUFBTCxHQUFZLEdBQVosR0FBa0JqQixHQUhZO1FBSXBDa0IsTUFBTSxFQUFFO01BSjRCLENBQXZCLENBQWY7TUFPQSxLQUFLQyxZQUFMLENBQWtCWixJQUFsQixDQUF1Qm1KLE1BQXZCO01BQ0EsS0FBS2hMLEtBQUwsQ0FBV3NCLEdBQVgsSUFBa0IwSixNQUFNLENBQUNqSCxRQUFQLEVBQWxCO0lBQ0Q7OztXQUVELDJCQUFtQnpDLEdBQW5CLEVBQXdCO01BQ3RCLEtBQUssSUFBSTBNLENBQUMsR0FBRyxLQUFLdkwsWUFBTCxDQUFrQnRCLE1BQWxCLEdBQTJCLENBQXhDLEVBQTJDNk0sQ0FBQyxJQUFJLENBQWhELEVBQW1EQSxDQUFDLEVBQXBELEVBQXdEO1FBQ3RELElBQU1oRCxNQUFNLEdBQUcsS0FBS3ZJLFlBQUwsQ0FBa0J1TCxDQUFsQixDQUFmOztRQUNBLElBQUloRCxNQUFNLENBQUNoSCxNQUFQLE9BQW9CMUMsR0FBeEIsRUFBNkI7VUFDM0IwSixNQUFNLENBQUMzRyxPQUFQO1VBQ0EsS0FBSzVCLFlBQUwsQ0FBa0JrSSxNQUFsQixDQUF5QnFELENBQXpCLEVBQTRCLENBQTVCO1FBQ0Q7TUFDRjtJQUNGOzs7V0FFRCwrQkFBdUI7TUFDckIsSUFBTWhPLEtBQUssR0FBRyxFQUFkO01BRUEsS0FBS3lDLFlBQUwsQ0FBa0JULE9BQWxCLENBQTBCLFVBQUMrSSxXQUFELEVBQWlCO1FBQ3pDL0ssS0FBSyxDQUFDK0ssV0FBVyxDQUFDL0csTUFBWixFQUFELENBQUwsR0FBOEIrRyxXQUFXLENBQUNoSCxRQUFaLEVBQTlCO01BQ0QsQ0FGRDtNQUlBLEtBQUsyRixRQUFMLENBQWMxSixLQUFkO0lBQ0Q7OztXQUVELHdCQUFnQnNCLEdBQWhCLEVBQXFCO01BQ25CLE9BQU8sS0FBS21CLFlBQUwsQ0FBa0J3TCxJQUFsQixDQUF1QixVQUFDbEQsV0FBRCxFQUFpQjtRQUM3QyxPQUFPekosR0FBRyxLQUFLeUosV0FBVyxDQUFDL0csTUFBWixHQUFxQlosS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0NDLEdBQWhDLEVBQWY7TUFDRCxDQUZNLENBQVA7SUFHRDs7O1dBRUQsa0JBQVVyRCxLQUFWLEVBQWlCO01BQ2YsSUFBSVcsY0FBUSxDQUFDWCxLQUFELENBQVosRUFBcUI7UUFDbkIsT0FBT0EsS0FBUDtNQUNEOztNQUVELE9BQU8sRUFBUDtJQUNEOzs7V0FFRCxzQkFBYztNQUNaLElBQU1BLEtBQUssR0FBRyxLQUFLK0QsUUFBTCxFQUFkLENBRFksQ0FHWjs7TUFDQSxLQUFLLElBQUlpSyxDQUFDLEdBQUcsS0FBS3ZMLFlBQUwsQ0FBa0J0QixNQUFsQixHQUEyQixDQUF4QyxFQUEyQzZNLENBQUMsSUFBSSxDQUFoRCxFQUFtREEsQ0FBQyxFQUFwRCxFQUF3RDtRQUN0RCxJQUFNaEQsTUFBTSxHQUFHLEtBQUt2SSxZQUFMLENBQWtCdUwsQ0FBbEIsQ0FBZjtRQUNBLElBQU0xTSxHQUFHLEdBQUcwSixNQUFNLENBQUNoSCxNQUFQLEVBQVo7O1FBQ0EsSUFBSSxDQUFDL0QsS0FBSyxDQUFDRCxLQUFLLENBQUNzQixHQUFELENBQU4sQ0FBVixFQUF3QjtVQUN0QixLQUFLNE0saUJBQUwsQ0FBdUI1TSxHQUF2QjtRQUNEO01BQ0Y7O01BRUQsS0FBSyxJQUFNQSxLQUFYLElBQWtCdEIsS0FBbEIsRUFBeUI7UUFDdkIsSUFBSSxDQUFDdUIsTUFBTSxDQUFDK0MsTUFBUCxDQUFjdEUsS0FBZCxFQUFxQnNCLEtBQXJCLENBQUwsRUFBZ0M7VUFDOUI7UUFDRDs7UUFFRCxJQUFNeUosV0FBVyxHQUFHLEtBQUswQyxjQUFMLENBQW9Cbk0sS0FBcEIsQ0FBcEIsQ0FMdUIsQ0FPdkI7O1FBQ0EsSUFBSXlKLFdBQUosRUFBaUI7VUFDZixJQUFNb0QsUUFBUSxHQUFHcEQsV0FBVyxDQUFDaEgsUUFBWixFQUFqQjtVQUNBLElBQU1OLFFBQVEsR0FBR3pELEtBQUssQ0FBQytLLFdBQVcsQ0FBQy9HLE1BQVosRUFBRCxDQUF0QixDQUZlLENBSWY7O1VBQ0EsSUFBSSxDQUFDckUsS0FBSyxDQUFDd08sUUFBRCxFQUFXMUssUUFBWCxDQUFWLEVBQWdDO1lBQzlCc0gsV0FBVyxDQUFDckIsUUFBWixDQUFxQmpHLFFBQXJCLEVBQStCLEtBQS9CO1VBQ0Q7UUFDRixDQVJELE1BUU87VUFDTDtVQUNBLElBQU0ySyxZQUFZLEdBQUdwTyxLQUFLLENBQUNzQixLQUFELENBQTFCO1VBQ0EsSUFBTVQsSUFBSSxHQUFHRCxPQUFPLENBQUN3TixZQUFELENBQXBCO1VBRUEsSUFBTS9MLE1BQU0sR0FBRztZQUNieEIsSUFBSSxFQUFFQSxJQURPO1lBRWIsV0FBU3VOO1VBRkksQ0FBZjtVQUtBLEtBQUtqQixjQUFMLENBQW9COUssTUFBcEIsRUFBNEJmLEtBQTVCO1FBQ0Q7TUFDRjtJQUNGOzs7V0FFRCxtQkFBVztNQUNULEtBQUttQixZQUFMLENBQWtCVCxPQUFsQixDQUEwQixVQUFDK0ksV0FBRCxFQUFpQjtRQUN6Q0EsV0FBVyxDQUFDMUcsT0FBWjtNQUNELENBRkQ7O01BSUE7SUFDRDs7OztFQXZLMEJuQyxZOztBQTBLZHdMLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQy9LQTs7SUFFTVcsbUI7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUFBOztNQUNQLEtBQUtwSyxTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUtiLFlBQWhDLEVBRE8sQ0FHUDs7TUFDQSxJQUFNQyxLQUFLLEdBQUcsS0FBS2hELEtBQUwsQ0FBV3dJLFFBQVgsQ0FBb0I7UUFDaEMsT0FBSyxLQUFLdEUsUUFBTCxDQUFjN0YsSUFEYTtRQUVoQ29FLFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQjRELEtBQXJCLEtBQStCLEtBQUttQyxRQUFMLENBQWMvRixNQUFkLENBQXFCNEQsS0FBckIsRUFBL0IsR0FBOEQsS0FBS21DLFFBQUwsQ0FBY3BFLE1BQWQsRUFGM0M7UUFHaENtRCxNQUFNLEVBQUUsS0FBS2lCLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUJxRCxNQUFyQixDQUE0QixXQUE1QjtNQUh3QixDQUFwQixDQUFkOztNQU1BLElBQUksQ0FBQyxLQUFLMEMsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnlLLFFBQXJCLENBQThCLFFBQTlCLENBQUwsRUFBOEM7UUFDNUMsS0FBSzdJLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkJaLEtBQTNCO01BQ0QsQ0FaTSxDQWNQO01BQ0E7OztNQUNBLElBQU1vSCxVQUFVLEdBQUcsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixNQUFwQixFQUE0QixnQkFBNUIsRUFBOEMsT0FBOUMsRUFBdUQsUUFBdkQsRUFBaUUsT0FBakUsRUFBMEUsVUFBMUUsRUFBc0YsUUFBdEYsRUFBZ0csTUFBaEcsRUFBd0csS0FBeEcsRUFBK0csTUFBL0csRUFBdUgsVUFBdkgsRUFBbUksS0FBbkksRUFBMEksTUFBMUksQ0FBbkI7O01BRUEsSUFBSSxLQUFLbEcsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnlLLFFBQXJCLENBQThCLFVBQTlCLENBQUosRUFBK0M7UUFDN0MsS0FBS3pGLEtBQUwsR0FBYSxLQUFLbkQsS0FBTCxDQUFXcUssV0FBWCxDQUF1QjtVQUNsQ2pILEVBQUUsRUFBRSxLQUFLYyxRQUFMLENBQWM3RjtRQURnQixDQUF2QixDQUFiO01BR0QsQ0FKRCxNQUlPO1FBQ0wsS0FBSzhFLEtBQUwsR0FBYSxLQUFLbkQsS0FBTCxDQUFXZ0osUUFBWCxDQUFvQjtVQUMvQnJNLElBQUksRUFBRXlOLFVBQVUsQ0FBQzlLLFFBQVgsQ0FBb0IsS0FBSzRFLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUJ5QyxNQUFyQixFQUFwQixJQUFxRCxLQUFLc0QsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnlDLE1BQXJCLEVBQXJELEdBQXFGLE1BRDVEO1VBRS9Cd0MsRUFBRSxFQUFFLEtBQUtjLFFBQUwsQ0FBYzdGO1FBRmEsQ0FBcEIsQ0FBYjtNQUlEOztNQUVELEtBQUswQixTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUtULEtBQWhDLEVBN0JPLENBK0JQOztNQUNBLEtBQUtBLEtBQUwsQ0FBV2lDLGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDLFlBQU07UUFDMUMsS0FBSSxDQUFDbEIsUUFBTCxDQUFjc0IsUUFBZCxDQUF1QixLQUFJLENBQUNyQyxLQUFMLENBQVdySCxLQUFsQztNQUNELENBRkQsRUFoQ08sQ0FvQ1A7O01BQ0EsSUFBSSxLQUFLb0ksUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnNDLFdBQXJCLEVBQUosRUFBd0M7UUFDdEMsS0FBS1YsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLNUQsS0FBTCxDQUFXMkYsY0FBWCxDQUEwQjtVQUNuRGxELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnNDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQscUJBQWE7TUFDWCxLQUFLMEMsS0FBTCxDQUFXckgsS0FBWCxHQUFtQixLQUFLb0ksUUFBTCxDQUFjckUsUUFBZCxFQUFuQjs7TUFFQSxJQUFJLEtBQUt5RSxRQUFULEVBQW1CO1FBQ2pCLEtBQUtuQixLQUFMLENBQVdMLFlBQVgsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBcEM7TUFDRCxDQUZELE1BRU87UUFDTCxLQUFLSyxLQUFMLENBQVdvRSxlQUFYLENBQTJCLFVBQTNCO01BQ0Q7SUFDRjs7OztFQXJEd0J0RCxjOztBQXdEWmtHLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFEQTs7SUFFTUcsdUM7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUFBOztNQUNQLEtBQUs3RyxZQUFMLEdBQW9CLEtBQUtTLFFBQUwsQ0FBYy9GLE1BQWQsVUFBcEI7TUFDQSxLQUFLd0YsYUFBTCxHQUFxQixLQUFLTyxRQUFMLENBQWMvRixNQUFkLENBQXFCcUQsTUFBckIsQ0FBNEIsWUFBNUIsS0FBNkMsS0FBS2lDLFlBQXZFO01BQ0EsS0FBSzFELFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBS2IsWUFBaEM7TUFDQSxLQUFLbUYsV0FBTCxHQUFtQixFQUFuQixDQUpPLENBTVA7O01BQ0EsS0FBS25JLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBSzVELEtBQUwsQ0FBV21JLGNBQVgsQ0FBMEI7UUFDbkQxRixXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUI0RCxLQUFyQixLQUErQixLQUFLbUMsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQjRELEtBQXJCLEVBQS9CLEdBQThELEtBQUttQyxRQUFMLENBQWNwRSxNQUFkO01BRHhCLENBQTFCLENBQTNCLEVBUE8sQ0FXUDs7TUFDQSxLQUFLMkQsWUFBTCxDQUFrQjNGLE9BQWxCLENBQTBCLFVBQUNoQyxLQUFELEVBQVE0SCxLQUFSLEVBQWtCO1FBQzFDO1FBQ0EsSUFBTTBFLGNBQWMsR0FBRyxLQUFJLENBQUNwSSxLQUFMLENBQVdxSSxpQkFBWCxFQUF2QixDQUYwQyxDQUkxQzs7O1FBQ0EsSUFBTS9FLEtBQUssR0FBRyxLQUFJLENBQUN0RCxLQUFMLENBQVdzSSxRQUFYLENBQW9CO1VBQ2hDeE0sS0FBSyxFQUFFQSxLQUR5QjtVQUVoQ3NILEVBQUUsRUFBRSxLQUFJLENBQUNjLFFBQUwsQ0FBYzdGLElBQWQsR0FBcUIsR0FBckIsR0FBMkJxRjtRQUZDLENBQXBCLENBQWQ7O1FBSUEwRSxjQUFjLENBQUN4RSxXQUFmLENBQTJCTixLQUEzQjtRQUVBQSxLQUFLLENBQUM4QixnQkFBTixDQUF1QixRQUF2QixFQUFpQyxZQUFNO1VBQ3JDLEtBQUksQ0FBQ2xCLFFBQUwsQ0FBY3NCLFFBQWQsQ0FBdUJsQyxLQUFLLENBQUN4SCxLQUE3QjtRQUNELENBRkQ7O1FBSUEsS0FBSSxDQUFDb00sV0FBTCxDQUFpQnZLLElBQWpCLENBQXNCMkYsS0FBdEIsRUFmMEMsQ0FpQjFDOzs7UUFDQThFLGNBQWMsQ0FBQ3hFLFdBQWYsQ0FBMkIsS0FBSSxDQUFDNUQsS0FBTCxDQUFXd0ksUUFBWCxDQUFvQjtVQUM3QyxPQUFLLEtBQUksQ0FBQ3RFLFFBQUwsQ0FBYzdGLElBQWQsR0FBcUIsR0FBckIsR0FBMkJxRixLQURhO1VBRTdDakIsV0FBVyxFQUFFLEtBQUksQ0FBQ2tCLGFBQUwsQ0FBbUJELEtBQW5CLENBRmdDO1VBRzdDVCxNQUFNLEVBQUUsS0FBSSxDQUFDaUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnFELE1BQXJCLENBQTRCLFdBQTVCO1FBSHFDLENBQXBCLENBQTNCOztRQU1BLEtBQUksQ0FBQ3pCLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkJ3RSxjQUEzQjtNQUNELENBekJELEVBWk8sQ0F1Q1A7O01BQ0EsSUFBSSxLQUFLbEUsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnNDLFdBQXJCLEVBQUosRUFBd0M7UUFDdEMsS0FBS1YsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLNUQsS0FBTCxDQUFXMkYsY0FBWCxDQUEwQjtVQUNuRGxELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnNDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQscUJBQWE7TUFBQTs7TUFDWCxLQUFLeUgsV0FBTCxDQUFpQnBLLE9BQWpCLENBQXlCLFVBQUN3RixLQUFELEVBQVc7UUFDbENBLEtBQUssQ0FBQ3lFLE9BQU4sR0FBaUJ6RSxLQUFLLENBQUN4SCxLQUFOLEtBQWdCLE1BQUksQ0FBQ29JLFFBQUwsQ0FBY3JFLFFBQWQsRUFBakM7UUFDQXlELEtBQUssQ0FBQ2dCLFFBQU4sR0FBaUIsTUFBSSxDQUFDQSxRQUF0QjtNQUNELENBSEQ7SUFJRDs7OztFQXJEaUM2RixjOztBQXdEckJHLDZGQUFmLEU7Ozs7Ozs7Ozs7OztBQzFEQTs7SUFFTUMseUM7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUFBOztNQUNQLEtBQUs5RyxZQUFMLEdBQW9CLEtBQUtTLFFBQUwsQ0FBYy9GLE1BQWQsVUFBcEI7TUFDQSxLQUFLd0YsYUFBTCxHQUFxQixLQUFLTyxRQUFMLENBQWMvRixNQUFkLENBQXFCcUQsTUFBckIsQ0FBNEIsWUFBNUIsS0FBNkMsS0FBS2lDLFlBQXZFO01BQ0EsS0FBSzFELFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBS2IsWUFBaEMsRUFITyxDQUtQOztNQUNBLEtBQUtoRCxTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUs1RCxLQUFMLENBQVd3SSxRQUFYLENBQW9CO1FBQzdDLE9BQUssS0FBS3RFLFFBQUwsQ0FBYzdGLElBRDBCO1FBRTdDb0UsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMvRixNQUFkLENBQXFCNEQsS0FBckIsS0FBK0IsS0FBS21DLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUI0RCxLQUFyQixFQUEvQixHQUE4RCxLQUFLbUMsUUFBTCxDQUFjcEUsTUFBZCxFQUY5QjtRQUc3Q21ELE1BQU0sRUFBRSxLQUFLaUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnFELE1BQXJCLENBQTRCLFdBQTVCO01BSHFDLENBQXBCLENBQTNCLEVBTk8sQ0FZUDs7TUFDQSxLQUFLMkIsS0FBTCxHQUFhLEtBQUtuRCxLQUFMLENBQVcwSSxTQUFYLENBQXFCO1FBQ2hDakYsWUFBWSxFQUFFLEtBQUtBLFlBRGE7UUFFaENFLGFBQWEsRUFBRSxLQUFLQSxhQUZZO1FBR2hDUCxFQUFFLEVBQUUsS0FBS2MsUUFBTCxDQUFjN0Y7TUFIYyxDQUFyQixDQUFiO01BTUEsS0FBSzBCLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBS1QsS0FBaEMsRUFuQk8sQ0FxQlA7O01BQ0EsS0FBS0EsS0FBTCxDQUFXaUMsZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0MsWUFBTTtRQUMxQyxLQUFJLENBQUNsQixRQUFMLENBQWNzQixRQUFkLENBQXVCLEtBQUksQ0FBQ3JDLEtBQUwsQ0FBV3JILEtBQWxDO01BQ0QsQ0FGRCxFQXRCTyxDQTBCUDs7TUFDQSxJQUFJLEtBQUtvSSxRQUFMLENBQWMvRixNQUFkLENBQXFCc0MsV0FBckIsRUFBSixFQUF3QztRQUN0QyxLQUFLVixTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUs1RCxLQUFMLENBQVcyRixjQUFYLENBQTBCO1VBQ25EbEQsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMvRixNQUFkLENBQXFCc0MsV0FBckI7UUFEc0MsQ0FBMUIsQ0FBM0I7TUFHRDtJQUNGOzs7O0VBakNrQzBKLGM7O0FBb0N0QkksZ0dBQWYsRTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQyxxQjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQ1AsSUFBSSxLQUFLck0sTUFBTCxDQUFZNkQsTUFBWixDQUFtQixRQUFuQixLQUFnQyxLQUFLN0QsTUFBTCxVQUFoQyxJQUFzRCxLQUFLQSxNQUFMLENBQVl5SyxRQUFaLENBQXFCLE9BQXJCLENBQTFELEVBQXlGO1FBQ3ZGLEtBQUtwSyxFQUFMLEdBQVUsSUFBSThMLGlCQUFKLENBQTBCLElBQTFCLENBQVY7TUFDRCxDQUZELE1BRU8sSUFBSSxLQUFLbk0sTUFBTCxDQUFZNkQsTUFBWixDQUFtQixRQUFuQixLQUFnQyxLQUFLN0QsTUFBTCxVQUFwQyxFQUF3RDtRQUM3RCxLQUFLSyxFQUFMLEdBQVUsSUFBSStMLGtCQUFKLENBQTJCLElBQTNCLENBQVY7TUFDRCxDQUZNLE1BRUEsSUFBSSxLQUFLcE0sTUFBTCxDQUFZNkQsTUFBWixDQUFtQixRQUFuQixDQUFKLEVBQWtDO1FBQ3ZDLEtBQUt4RCxFQUFMLEdBQVUsSUFBSTJMLGNBQUosQ0FBaUIsSUFBakIsQ0FBVjtNQUNEO0lBQ0Y7OztXQUVELGtCQUFVck8sS0FBVixFQUFpQjtNQUNmLE9BQU8yTyxNQUFNLENBQUMzTyxLQUFELENBQWI7SUFDRDs7OztFQWIwQmtDLFk7O0FBZ0Jkd00sc0VBQWYsRTs7Ozs7Ozs7Ozs7OztBQ3JCQTs7SUFFTUUsdUI7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUFBOztNQUNQLEtBQUszSyxTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUtiLFlBQWhDLEVBRE8sQ0FHUDs7TUFDQSxLQUFLNEgsZUFBTCxHQUF1QixFQUF2QjtNQUNBLEtBQUtDLFFBQUwsR0FBZ0IsS0FBSzVLLEtBQUwsQ0FBV2lGLFdBQVgsRUFBaEI7TUFDQSxLQUFLMkYsUUFBTCxDQUFjckksU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsZUFBNUI7TUFFQSxLQUFLMEIsUUFBTCxDQUFjMkcsb0JBQWQsQ0FBbUMvTSxPQUFuQyxDQUEyQyxVQUFDaEMsS0FBRCxFQUFRNEgsS0FBUixFQUFrQjtRQUMzRDtRQUNBLElBQU1iLE1BQU0sR0FBRyxLQUFJLENBQUM3QyxLQUFMLENBQVdtRixTQUFYLENBQXFCO1VBQ2xDMUMsV0FBVyxFQUFFLEtBQUksQ0FBQ3lCLFFBQUwsQ0FBYzRHLHFCQUFkLENBQW9DcEgsS0FBcEMsQ0FEcUI7VUFFbEM1SCxLQUFLLEVBQUU0SDtRQUYyQixDQUFyQixDQUFmOztRQUtBYixNQUFNLENBQUN1QyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO1VBQ3JDLElBQU0xQixLQUFLLEdBQUdzQyxNQUFNLENBQUNuRCxNQUFNLENBQUMvRyxLQUFSLENBQXBCOztVQUNBLEtBQUksQ0FBQ29JLFFBQUwsQ0FBYzZHLFlBQWQsQ0FBMkJySCxLQUEzQjtRQUNELENBSEQ7O1FBS0EsS0FBSSxDQUFDa0gsUUFBTCxDQUFjaEgsV0FBZCxDQUEwQmYsTUFBMUI7O1FBQ0EsS0FBSSxDQUFDOEgsZUFBTCxDQUFxQmhOLElBQXJCLENBQTBCa0YsTUFBMUI7TUFDRCxDQWREO01BZ0JBLEtBQUs5QyxTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUtnSCxRQUFoQztJQUNEOzs7V0FFRCx3QkFBZ0I7TUFDZCxLQUFLN0ssU0FBTCxHQUFpQixLQUFLQyxLQUFMLENBQVd5RixXQUFYLEVBQWpCO01BQ0EsS0FBSzFGLFNBQUwsQ0FBZStDLFlBQWYsQ0FBNEIsV0FBNUIsRUFBeUMsVUFBekM7TUFFQSxLQUFLL0MsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLNUQsS0FBTCxDQUFXMEYsU0FBWCxDQUFxQjtRQUM5Q2pELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQjRELEtBQXJCLEtBQStCLEtBQUttQyxRQUFMLENBQWMvRixNQUFkLENBQXFCNEQsS0FBckIsRUFBL0IsR0FBOEQsS0FBS21DLFFBQUwsQ0FBY3BFLE1BQWQsRUFEN0I7UUFFOUNtRCxNQUFNLEVBQUU7TUFGc0MsQ0FBckIsQ0FBM0I7SUFJRDs7O1dBRUQscUJBQWE7TUFBQTs7TUFDWCxJQUFNK0gsU0FBUyxHQUFHLEtBQUs5RyxRQUFMLENBQWMrRyxPQUFkLENBQXNCLEtBQUsvRyxRQUFMLENBQWNnSCxTQUFwQyxDQUFsQjs7TUFFQSxJQUFJRixTQUFTLENBQUN4TSxFQUFWLENBQWF1QixTQUFiLENBQXVCK0UsVUFBM0IsRUFBdUM7UUFDckMsS0FBSy9FLFNBQUwsQ0FBZWdGLFdBQWYsQ0FBMkJpRyxTQUFTLENBQUN4TSxFQUFWLENBQWF1QixTQUF4QztNQUNEOztNQUVELEtBQUtBLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBS00sUUFBTCxDQUFjaUgsWUFBZCxDQUEyQjNNLEVBQTNCLENBQThCdUIsU0FBekQ7O01BRUEsSUFBSSxLQUFLdUUsUUFBVCxFQUFtQjtRQUNqQixLQUFLSixRQUFMLENBQWNpSCxZQUFkLENBQTJCM00sRUFBM0IsQ0FBOEI2SSxPQUE5QjtRQUNBLEtBQUtzRCxlQUFMLENBQXFCN00sT0FBckIsQ0FBNkIsVUFBQytFLE1BQUQsRUFBWTtVQUN2Q0EsTUFBTSxDQUFDeUIsUUFBUCxHQUFrQixJQUFsQjtRQUNELENBRkQ7TUFHRCxDQUxELE1BS087UUFDTCxLQUFLSixRQUFMLENBQWNpSCxZQUFkLENBQTJCM00sRUFBM0IsQ0FBOEI4SSxNQUE5QjtRQUNBLEtBQUtxRCxlQUFMLENBQXFCN00sT0FBckIsQ0FBNkIsVUFBQytFLE1BQUQsRUFBWTtVQUN2Q0EsTUFBTSxDQUFDeUIsUUFBUCxHQUFrQixLQUFsQjtRQUNELENBRkQ7TUFHRDs7TUFFRCxLQUFLcUcsZUFBTCxDQUFxQjdNLE9BQXJCLENBQTZCLFVBQUMrRSxNQUFELEVBQVk7UUFDdkMsSUFBS21ELE1BQU0sQ0FBQ25ELE1BQU0sQ0FBQy9HLEtBQVIsQ0FBTixLQUF5QmtLLE1BQU0sQ0FBQyxNQUFJLENBQUM5QixRQUFMLENBQWNSLEtBQWYsQ0FBcEMsRUFBNEQ7VUFDMURiLE1BQU0sQ0FBQ04sU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBSSxDQUFDeEMsS0FBTCxDQUFXb0wsb0JBQVgsRUFBckI7UUFDRCxDQUZELE1BRU87VUFDTHZJLE1BQU0sQ0FBQ04sU0FBUCxDQUFpQjhJLE1BQWpCLENBQXdCLE1BQUksQ0FBQ3JMLEtBQUwsQ0FBV29MLG9CQUFYLEVBQXhCO1FBQ0Q7TUFDRixDQU5EO0lBT0Q7OztXQUVELGdDQUF3QjtNQUN0Qjs7TUFDQSxLQUFLbEgsUUFBTCxDQUFjaUgsWUFBZCxDQUEyQjNNLEVBQTNCLENBQThCa0csb0JBQTlCO0lBQ0Q7OztXQUVELG1CQUFXLENBQ1Y7Ozs7RUExRTBCVCxjOztBQTZFZHlHLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTVkseUI7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUNQLEtBQUs5TSxFQUFMLEdBQVUsSUFBSWtNLFFBQUosQ0FBbUIsSUFBbkIsQ0FBVjtJQUNEOzs7V0FFRCxtQkFBVztNQUFBOztNQUNULEtBQUtPLE9BQUwsR0FBZSxFQUFmO01BQ0EsS0FBS0UsWUFBTCxHQUFvQixJQUFwQjtNQUNBLEtBQUtELFNBQUwsR0FBaUIsQ0FBakI7TUFDQSxLQUFLeEgsS0FBTCxHQUFhLENBQWI7TUFDQSxLQUFLNkgsT0FBTCxHQUFlLEVBQWY7TUFDQSxLQUFLVixvQkFBTCxHQUE0QixFQUE1QjtNQUNBLEtBQUtDLHFCQUFMLEdBQTZCLEVBQTdCOztNQUVBLElBQUksS0FBSzNNLE1BQUwsQ0FBWW9DLEtBQVosTUFBdUIsS0FBS3BDLE1BQUwsQ0FBWThELEtBQVosRUFBM0IsRUFBZ0Q7UUFDOUMsSUFBTXVKLFNBQVMsR0FBRyxLQUFLck4sTUFBTCxDQUFZb0MsS0FBWixLQUFzQixLQUFLcEMsTUFBTCxDQUFZb0MsS0FBWixFQUF0QixHQUE0QyxLQUFLcEMsTUFBTCxDQUFZOEQsS0FBWixFQUE5RDtRQUNBLElBQU13SixXQUFXLEdBQUcsS0FBS3ROLE1BQUwsQ0FBWS9DLEtBQVosRUFBcEI7UUFDQSxPQUFPcVEsV0FBVyxDQUFDLE9BQUQsQ0FBbEI7UUFDQSxPQUFPQSxXQUFXLENBQUMsT0FBRCxDQUFsQjtRQUNBLE9BQU9BLFdBQVcsQ0FBQyxTQUFELENBQWxCO1FBRUFELFNBQVMsQ0FBQzFOLE9BQVYsQ0FBa0IsVUFBQ0ssTUFBRCxFQUFTdUYsS0FBVCxFQUFtQjtVQUFBOztVQUNuQ3ZGLE1BQU0sbUNBQVFzTixXQUFSLEdBQXdCdE4sTUFBeEIsQ0FBTixDQURtQyxDQUduQzs7VUFDQSxJQUFJQSxNQUFNLENBQUNtQyxLQUFYLEVBQWtCO1lBQ2hCLElBQUlvTCxNQUFNLEdBQUcsRUFBYjtZQUVBdk4sTUFBTSxDQUFDbUMsS0FBUCxDQUFheEMsT0FBYixDQUFxQixVQUFDNk4sV0FBRCxFQUFpQjtjQUNwQ0QsTUFBTSxHQUFHNU8sZUFBUyxDQUFDNE8sTUFBRCxFQUFTQyxXQUFULENBQWxCO1lBQ0QsQ0FGRDtZQUlBeE4sTUFBTSxHQUFHdU4sTUFBVDtVQUNEOztVQUVELElBQUkzUCxLQUFLLENBQUMwUCxXQUFXLENBQUMxSixLQUFiLENBQVQsRUFBOEI7WUFDNUI1RCxNQUFNLENBQUM0RCxLQUFQLEdBQWUwSixXQUFXLENBQUMxSixLQUEzQjtVQUNEOztVQUVELEtBQUksQ0FBQzhJLG9CQUFMLENBQTBCbE4sSUFBMUIsQ0FBK0IrRixLQUEvQjs7VUFDQSxJQUFNa0ksb0JBQW9CLEdBQUcsb0JBQUF6TixNQUFNLENBQUNVLE9BQVAsb0VBQWdCZ04sYUFBaEIsS0FBaUMsYUFBYW5JLEtBQUssR0FBRyxDQUFyQixDQUE5RDs7VUFDQSxLQUFJLENBQUNvSCxxQkFBTCxDQUEyQm5OLElBQTNCLENBQWdDaU8sb0JBQWhDOztVQUVBLEtBQUksQ0FBQ0wsT0FBTCxDQUFhNU4sSUFBYixDQUFrQlEsTUFBbEI7UUFDRCxDQXZCRDtNQXdCRCxDQS9CRCxNQStCTyxJQUFJLEtBQUtBLE1BQUwsQ0FBWTJOLEtBQVosRUFBSixFQUF5QjtRQUM5QixLQUFLM04sTUFBTCxDQUFZeEIsSUFBWixHQUFtQm1CLE9BQW5CLENBQTJCLFVBQUNuQixJQUFELEVBQU8rRyxLQUFQLEVBQWlCO1VBQzFDLElBQU1xSSxXQUFXLEdBQUcsS0FBSSxDQUFDNU4sTUFBTCxDQUFZL0MsS0FBWixFQUFwQjs7VUFFQSxJQUFNK0MsTUFBTSxtQ0FDUDROLFdBRE8sR0FFUDtZQUFFcFAsSUFBSSxFQUFFQSxJQUFSO1lBQWNvRixLQUFLLEVBQUVwRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFxUCxXQUFSLEtBQXdCclAsSUFBSSxDQUFDc1AsS0FBTCxDQUFXLENBQVg7VUFBN0MsQ0FGTyxDQUFaOztVQUtBLElBQUlsUSxLQUFLLENBQUNnUSxXQUFXLENBQUNoSyxLQUFiLENBQVQsRUFBOEI7WUFDNUI1RCxNQUFNLENBQUM0RCxLQUFQLEdBQWVnSyxXQUFXLENBQUNoSyxLQUEzQjtVQUNEOztVQUVELEtBQUksQ0FBQzhJLG9CQUFMLENBQTBCbE4sSUFBMUIsQ0FBK0IrRixLQUEvQjs7VUFDQSxLQUFJLENBQUNvSCxxQkFBTCxDQUEyQm5OLElBQTNCLENBQWdDaEIsSUFBSSxDQUFDdVAsTUFBTCxDQUFZLENBQVosRUFBZUYsV0FBZixLQUErQnJQLElBQUksQ0FBQ3NQLEtBQUwsQ0FBVyxDQUFYLENBQS9EOztVQUVBLEtBQUksQ0FBQ1YsT0FBTCxDQUFhNU4sSUFBYixDQUFrQlEsTUFBbEI7UUFDRCxDQWhCRDtNQWlCRCxDQWxCTSxNQWtCQSxJQUFJLEtBQUtBLE1BQUwsQ0FBWTZELE1BQVosQ0FBbUIsS0FBbkIsS0FBNkIsQ0FBQyxLQUFLN0QsTUFBTCxDQUFZeEIsSUFBWixFQUFsQyxFQUFzRDtRQUMzRCxJQUFNb1AsV0FBVyxHQUFHLEtBQUs1TixNQUFMLENBQVkvQyxLQUFaLEVBQXBCO1FBRUEsS0FBS21RLE9BQUwsR0FBZSxpQ0FDUlEsV0FEUSxHQUNRO1VBQUVwUCxJQUFJLEVBQUU7UUFBUixDQURSLG1DQUVSb1AsV0FGUSxHQUVRO1VBQUVwUCxJQUFJLEVBQUU7UUFBUixDQUZSLG1DQUdSb1AsV0FIUSxHQUdRO1VBQUVwUCxJQUFJLEVBQUU7UUFBUixDQUhSLG1DQUlSb1AsV0FKUSxHQUlRO1VBQUVwUCxJQUFJLEVBQUU7UUFBUixDQUpSLG1DQUtSb1AsV0FMUSxHQUtRO1VBQUVwUCxJQUFJLEVBQUU7UUFBUixDQUxSLG1DQU1Sb1AsV0FOUSxHQU1RO1VBQUVwUCxJQUFJLEVBQUU7UUFBUixDQU5SLG1DQU9Sb1AsV0FQUSxHQU9RO1VBQUVwUCxJQUFJLEVBQUU7UUFBUixDQVBSLEVBQWY7UUFVQSxLQUFLNE8sT0FBTCxDQUFhek4sT0FBYixDQUFxQixVQUFDSyxNQUFELEVBQVN1RixLQUFULEVBQW1CO1VBQ3RDLEtBQUksQ0FBQ21ILG9CQUFMLENBQTBCbE4sSUFBMUIsQ0FBK0IrRixLQUEvQjtRQUNELENBRkQ7UUFJQSxLQUFLb0gscUJBQUwsR0FBNkIsQ0FDM0IsUUFEMkIsRUFDakIsUUFEaUIsRUFDUCxTQURPLEVBQ0ksU0FESixFQUNlLE9BRGYsRUFDd0IsUUFEeEIsRUFDa0MsTUFEbEMsQ0FBN0I7TUFHRCxDQTlFUSxDQWdGVDs7O01BQ0EsS0FBS1MsT0FBTCxDQUFhek4sT0FBYixDQUFxQixVQUFDSyxNQUFELEVBQVk7UUFDL0IsSUFBTTJJLE1BQU0sR0FBRyxLQUFJLENBQUM1SSxJQUFMLENBQVU0SCxZQUFWLENBQXVCO1VBQ3BDNUgsSUFBSSxFQUFFLEtBQUksQ0FBQ0EsSUFEeUI7VUFFcENDLE1BQU0sRUFBRSxJQUFJa0MsVUFBSixDQUFXbEMsTUFBWCxDQUY0QjtVQUdwQ0UsSUFBSSxFQUFFLEtBQUksQ0FBQ0EsSUFIeUI7VUFJcENDLE1BQU0sRUFBRSxLQUFJLENBQUNBO1FBSnVCLENBQXZCLENBQWY7O1FBT0F3SSxNQUFNLENBQUM1RyxVQUFQO1FBRUE0RyxNQUFNLENBQUM5SCxFQUFQLENBQVUsUUFBVixFQUFvQixZQUFNO1VBQ3hCLEtBQUksQ0FBQ1UsSUFBTCxDQUFVLFFBQVY7UUFDRCxDQUZEOztRQUlBLEtBQUksQ0FBQ3VMLE9BQUwsQ0FBYXROLElBQWIsQ0FBa0JtSixNQUFsQjtNQUNELENBZkQ7O01BaUJBLElBQUkvSyxLQUFLLENBQUMsS0FBS2tQLE9BQUwsQ0FBYSxDQUFiLENBQUQsQ0FBVCxFQUE0QjtRQUMxQixLQUFLRixZQUFMLENBQWtCLENBQWxCLEVBQXFCLEtBQXJCO01BQ0Q7SUFDRjs7O1dBRUQsc0JBQWNvQixRQUFkLEVBQStDO01BQUEsSUFBdkIzTSxjQUF1Qix1RUFBTixJQUFNO01BQzdDLEtBQUswTCxTQUFMLEdBQWlCLEtBQUt4SCxLQUF0QjtNQUNBLEtBQUtBLEtBQUwsR0FBYXlJLFFBQWI7TUFDQSxLQUFLaEIsWUFBTCxHQUFvQixLQUFLRixPQUFMLENBQWEsS0FBS3ZILEtBQWxCLENBQXBCO01BQ0EsS0FBSzhCLFFBQUwsQ0FBYyxLQUFLM0YsUUFBTCxFQUFkLEVBQStCTCxjQUEvQjtJQUNEOzs7V0FFRCxvQkFBWTtNQUNWLE9BQU8sS0FBSzJMLFlBQUwsQ0FBa0J0TCxRQUFsQixFQUFQO0lBQ0Q7OztXQUVELGtCQUFVL0QsS0FBVixFQUFpQjtNQUNmLE9BQU8sS0FBS3FQLFlBQUwsQ0FBa0IxTCxRQUFsQixDQUEyQjNELEtBQTNCLENBQVA7SUFDRDs7O1dBRUQscUJBQWFBLEtBQWIsRUFBb0JtUCxPQUFwQixFQUE2QjtNQUMzQixJQUFJdkgsS0FBSyxHQUFHLENBQVo7O01BRDJCLDJDQUdOdUgsT0FITTtNQUFBOztNQUFBO1FBRzNCLG9EQUE4QjtVQUFBLElBQW5CbkUsTUFBbUI7O1VBQzVCLElBQUlBLE1BQU0sQ0FBQ21FLE9BQVgsRUFBb0I7WUFDbEJuRSxNQUFNLENBQUN0QixRQUFQLENBQWdCMUosS0FBaEI7VUFDRDs7VUFFRCxJQUFJTCxLQUFLLENBQUNxTCxNQUFNLENBQUNySCxRQUFQLENBQWdCM0QsS0FBaEIsQ0FBRCxFQUF5QkEsS0FBekIsQ0FBVCxFQUEwQztZQUN4QyxLQUFLaVAsWUFBTCxDQUFrQnJILEtBQWxCO1lBQ0E7VUFDRDs7VUFFREEsS0FBSztRQUNOO01BZDBCO1FBQUE7TUFBQTtRQUFBO01BQUE7SUFlNUI7OztXQUVELGtCQUFVNUgsS0FBVixFQUF3QztNQUFBLElBQXZCMEQsY0FBdUIsdUVBQU4sSUFBTTs7TUFDdEM7TUFDQTtNQUNBLElBQUksQ0FBQy9ELEtBQUssQ0FBQyxLQUFLMFAsWUFBTCxDQUFrQjFMLFFBQWxCLENBQTJCM0QsS0FBM0IsQ0FBRCxFQUFvQ0EsS0FBcEMsQ0FBVixFQUFzRDtRQUNwRCxLQUFLc1EsV0FBTCxDQUFpQnRRLEtBQWpCLEVBQXdCLEtBQUttUCxPQUE3QjtNQUNEOztNQUVELEtBQUtFLFlBQUwsQ0FBa0IzRixRQUFsQixDQUEyQjFKLEtBQTNCLEVBQWtDMEQsY0FBbEM7O01BRUEsSUFBSUEsY0FBSixFQUFvQjtRQUNsQixLQUFLRSxJQUFMLENBQVUsUUFBVjtNQUNEO0lBQ0Y7OztXQUVELG1CQUFXO01BQ1QsS0FBS3VMLE9BQUwsQ0FBYW5OLE9BQWIsQ0FBcUIsVUFBQ2dKLE1BQUQsRUFBWTtRQUMvQkEsTUFBTSxDQUFDM0csT0FBUDtNQUNELENBRkQ7O01BSUE7SUFDRDs7OztFQWhLNEJuQyxZOztBQW1LaEJzTiw0RUFBZixFOzs7Ozs7Ozs7Ozs7QUN4S0E7O0lBRU1lLG1COzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLdE0sU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLYixZQUFoQyxFQURPLENBR1A7O01BQ0EsS0FBS2hELFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBSzVELEtBQUwsQ0FBV3dJLFFBQVgsQ0FBb0I7UUFDN0MsT0FBSyxLQUFLdEUsUUFBTCxDQUFjN0YsSUFEMEI7UUFFN0NvRSxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUI0RCxLQUFyQixLQUErQixLQUFLbUMsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQjRELEtBQXJCLEVBQS9CLEdBQThELEtBQUttQyxRQUFMLENBQWNwRSxNQUFkLEVBRjlCO1FBRzdDbUQsTUFBTSxFQUFFLEtBQUtpQixRQUFMLENBQWMvRixNQUFkLENBQXFCcUQsTUFBckIsQ0FBNEIsV0FBNUI7TUFIcUMsQ0FBcEIsQ0FBM0IsRUFKTyxDQVVQOztNQUNBLEtBQUsyQixLQUFMLEdBQWEsS0FBS25ELEtBQUwsQ0FBV2dKLFFBQVgsQ0FBb0I7UUFDL0JyTSxJQUFJLEVBQUUsUUFEeUI7UUFFL0J5RyxFQUFFLEVBQUUsS0FBS2MsUUFBTCxDQUFjN0Y7TUFGYSxDQUFwQixDQUFiO01BSUEsS0FBSzBCLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBS1QsS0FBaEMsRUFmTyxDQWlCUDs7TUFDQSxLQUFLQSxLQUFMLENBQVdpQyxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxZQUFNO1FBQzFDLEtBQUksQ0FBQ2xCLFFBQUwsQ0FBY3NCLFFBQWQsQ0FBdUIsS0FBSSxDQUFDckMsS0FBTCxDQUFXckgsS0FBbEM7TUFDRCxDQUZELEVBbEJPLENBc0JQOztNQUNBLElBQUksS0FBS29JLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUJzQyxXQUFyQixFQUFKLEVBQXdDO1FBQ3RDLEtBQUtWLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBSzVELEtBQUwsQ0FBVzJGLGNBQVgsQ0FBMEI7VUFDbkRsRCxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUJzQyxXQUFyQjtRQURzQyxDQUExQixDQUEzQjtNQUdEO0lBQ0Y7OztXQUVELGtCQUFVM0UsS0FBVixFQUFpQjtNQUNmLElBQUksS0FBS29JLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUI2RCxNQUFyQixDQUE0QixTQUE1QixDQUFKLEVBQTRDO1FBQzFDLE9BQU83RixJQUFJLENBQUNDLEtBQUwsQ0FBVzRKLE1BQU0sQ0FBQ2xLLEtBQUQsQ0FBakIsQ0FBUDtNQUNELENBRkQsTUFFTztRQUNMLE9BQU9rSyxNQUFNLENBQUNsSyxLQUFELENBQWI7TUFDRDtJQUNGOzs7V0FFRCxxQkFBYTtNQUNYLEtBQUtxSCxLQUFMLENBQVdySCxLQUFYLEdBQW1CLEtBQUtvSSxRQUFMLENBQWNyRSxRQUFkLEVBQW5COztNQUVBLElBQUksS0FBS3lFLFFBQVQsRUFBbUI7UUFDakIsS0FBS25CLEtBQUwsQ0FBV0wsWUFBWCxDQUF3QixVQUF4QixFQUFvQyxVQUFwQztNQUNELENBRkQsTUFFTztRQUNMLEtBQUtLLEtBQUwsQ0FBV29FLGVBQVgsQ0FBMkIsVUFBM0I7TUFDRDtJQUNGOzs7O0VBL0N3QnRELGM7O0FBa0Rab0ksc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDcERBOztJQUVNQyx1Qzs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQUE7O01BQ1AsS0FBSzdJLFlBQUwsR0FBb0IsS0FBS1MsUUFBTCxDQUFjL0YsTUFBZCxVQUFwQjtNQUNBLEtBQUt3RixhQUFMLEdBQXFCLEtBQUtPLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUJxRCxNQUFyQixDQUE0QixZQUE1QixLQUE2QyxLQUFLaUMsWUFBdkU7TUFDQSxLQUFLMUQsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLYixZQUFoQztNQUNBLEtBQUttRixXQUFMLEdBQW1CLEVBQW5CLENBSk8sQ0FNUDs7TUFDQSxLQUFLbkksU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLNUQsS0FBTCxDQUFXbUksY0FBWCxDQUEwQjtRQUNuRDFGLFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQjRELEtBQXJCLEtBQStCLEtBQUttQyxRQUFMLENBQWMvRixNQUFkLENBQXFCNEQsS0FBckIsRUFBL0IsR0FBOEQsS0FBS21DLFFBQUwsQ0FBY3BFLE1BQWQ7TUFEeEIsQ0FBMUIsQ0FBM0IsRUFQTyxDQVdQOztNQUNBLEtBQUsyRCxZQUFMLENBQWtCM0YsT0FBbEIsQ0FBMEIsVUFBQ2hDLEtBQUQsRUFBUTRILEtBQVIsRUFBa0I7UUFDMUM7UUFDQSxJQUFNMEUsY0FBYyxHQUFHLEtBQUksQ0FBQ3BJLEtBQUwsQ0FBV3FJLGlCQUFYLEVBQXZCLENBRjBDLENBSTFDOzs7UUFDQSxJQUFNL0UsS0FBSyxHQUFHLEtBQUksQ0FBQ3RELEtBQUwsQ0FBV3NJLFFBQVgsQ0FBb0I7VUFDaEN4TSxLQUFLLEVBQUVBLEtBRHlCO1VBRWhDc0gsRUFBRSxFQUFFLEtBQUksQ0FBQ2MsUUFBTCxDQUFjN0YsSUFBZCxHQUFxQixHQUFyQixHQUEyQnFGO1FBRkMsQ0FBcEIsQ0FBZDs7UUFJQTBFLGNBQWMsQ0FBQ3hFLFdBQWYsQ0FBMkJOLEtBQTNCO1FBRUFBLEtBQUssQ0FBQzhCLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLFlBQU07VUFDckMsS0FBSSxDQUFDbEIsUUFBTCxDQUFjc0IsUUFBZCxDQUF1QmxDLEtBQUssQ0FBQ3hILEtBQTdCO1FBQ0QsQ0FGRDs7UUFJQSxLQUFJLENBQUNvTSxXQUFMLENBQWlCdkssSUFBakIsQ0FBc0IyRixLQUF0QixFQWYwQyxDQWlCMUM7OztRQUNBOEUsY0FBYyxDQUFDeEUsV0FBZixDQUEyQixLQUFJLENBQUM1RCxLQUFMLENBQVd3SSxRQUFYLENBQW9CO1VBQzdDLE9BQUssS0FBSSxDQUFDdEUsUUFBTCxDQUFjN0YsSUFBZCxHQUFxQixHQUFyQixHQUEyQnFGLEtBRGE7VUFFN0NqQixXQUFXLEVBQUUsS0FBSSxDQUFDa0IsYUFBTCxDQUFtQkQsS0FBbkIsQ0FGZ0M7VUFHN0NULE1BQU0sRUFBRSxLQUFJLENBQUNpQixRQUFMLENBQWMvRixNQUFkLENBQXFCcUQsTUFBckIsQ0FBNEIsV0FBNUI7UUFIcUMsQ0FBcEIsQ0FBM0I7O1FBTUEsS0FBSSxDQUFDekIsU0FBTCxDQUFlNkQsV0FBZixDQUEyQndFLGNBQTNCO01BQ0QsQ0F6QkQsRUFaTyxDQXVDUDs7TUFDQSxJQUFJLEtBQUtsRSxRQUFMLENBQWMvRixNQUFkLENBQXFCc0MsV0FBckIsRUFBSixFQUF3QztRQUN0QyxLQUFLVixTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUs1RCxLQUFMLENBQVcyRixjQUFYLENBQTBCO1VBQ25EbEQsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMvRixNQUFkLENBQXFCc0MsV0FBckI7UUFEc0MsQ0FBMUIsQ0FBM0I7TUFHRDtJQUNGOzs7V0FFRCxxQkFBYTtNQUFBOztNQUNYLEtBQUt5SCxXQUFMLENBQWlCcEssT0FBakIsQ0FBeUIsVUFBQ3dGLEtBQUQsRUFBVztRQUNsQ0EsS0FBSyxDQUFDeUUsT0FBTixHQUFpQi9CLE1BQU0sQ0FBQzFDLEtBQUssQ0FBQ3hILEtBQVAsQ0FBTixLQUF3QmtLLE1BQU0sQ0FBQyxNQUFJLENBQUM5QixRQUFMLENBQWNyRSxRQUFkLEVBQUQsQ0FBL0M7UUFDQXlELEtBQUssQ0FBQ2dCLFFBQU4sR0FBaUIsTUFBSSxDQUFDQSxRQUF0QjtNQUNELENBSEQ7SUFJRDs7OztFQXJEaUMrSCxjOztBQXdEckJDLDZGQUFmLEU7Ozs7Ozs7Ozs7OztBQzFEQTs7SUFFTUMseUM7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUFBOztNQUNQLEtBQUs5SSxZQUFMLEdBQW9CLEtBQUtTLFFBQUwsQ0FBYy9GLE1BQWQsVUFBcEI7TUFDQSxLQUFLd0YsYUFBTCxHQUFxQixLQUFLTyxRQUFMLENBQWMvRixNQUFkLENBQXFCcUQsTUFBckIsQ0FBNEIsWUFBNUIsS0FBNkMsS0FBS2lDLFlBQXZFO01BQ0EsS0FBSzFELFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBS2IsWUFBaEM7TUFFQSxLQUFLaEQsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLNUQsS0FBTCxDQUFXd0ksUUFBWCxDQUFvQjtRQUM3QyxPQUFLLEtBQUt0RSxRQUFMLENBQWM3RixJQUQwQjtRQUU3Q29FLFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQjRELEtBQXJCLEtBQStCLEtBQUttQyxRQUFMLENBQWMvRixNQUFkLENBQXFCNEQsS0FBckIsRUFBL0IsR0FBOEQsS0FBS21DLFFBQUwsQ0FBY3BFLE1BQWQsRUFGOUI7UUFHN0NtRCxNQUFNLEVBQUUsS0FBS2lCLFFBQUwsQ0FBYy9GLE1BQWQsQ0FBcUJxRCxNQUFyQixDQUE0QixXQUE1QjtNQUhxQyxDQUFwQixDQUEzQixFQUxPLENBV1A7O01BQ0EsS0FBSzJCLEtBQUwsR0FBYSxLQUFLbkQsS0FBTCxDQUFXMEksU0FBWCxDQUFxQjtRQUNoQ2pGLFlBQVksRUFBRSxLQUFLQSxZQURhO1FBRWhDRSxhQUFhLEVBQUUsS0FBS0EsYUFGWTtRQUdoQ1AsRUFBRSxFQUFFLEtBQUtjLFFBQUwsQ0FBYzdGO01BSGMsQ0FBckIsQ0FBYjtNQUtBLEtBQUswQixTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUtULEtBQWhDLEVBakJPLENBbUJQOztNQUNBLEtBQUtBLEtBQUwsQ0FBV2lDLGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDLFlBQU07UUFDMUMsS0FBSSxDQUFDbEIsUUFBTCxDQUFjc0IsUUFBZCxDQUF1QixLQUFJLENBQUNyQyxLQUFMLENBQVdySCxLQUFsQztNQUNELENBRkQsRUFwQk8sQ0F3QlA7O01BQ0EsSUFBSSxLQUFLb0ksUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnNDLFdBQXJCLEVBQUosRUFBd0M7UUFDdEMsS0FBS1YsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLNUQsS0FBTCxDQUFXMkYsY0FBWCxDQUEwQjtVQUNuRGxELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjL0YsTUFBZCxDQUFxQnNDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7OztFQS9Ca0M0TCxjOztBQWtDdEJFLGdHQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUMscUI7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUNQLElBQUksS0FBS3JPLE1BQUwsQ0FBWXNPLGFBQVosTUFBK0IsS0FBS3RPLE1BQUwsVUFBL0IsSUFBcUQsS0FBS0EsTUFBTCxDQUFZeUssUUFBWixDQUFxQixPQUFyQixDQUF6RCxFQUF3RjtRQUN0RixLQUFLcEssRUFBTCxHQUFVLElBQUk4TixpQkFBSixDQUEwQixJQUExQixDQUFWO01BQ0QsQ0FGRCxNQUVPLElBQUksS0FBS25PLE1BQUwsQ0FBWXNPLGFBQVosTUFBK0IsS0FBS3RPLE1BQUwsVUFBbkMsRUFBdUQ7UUFDNUQsS0FBS0ssRUFBTCxHQUFVLElBQUkrTixrQkFBSixDQUEyQixJQUEzQixDQUFWO01BQ0QsQ0FGTSxNQUVBLElBQUksS0FBS3BPLE1BQUwsQ0FBWXNPLGFBQVosRUFBSixFQUFpQztRQUN0QyxLQUFLak8sRUFBTCxHQUFVLElBQUk2TixjQUFKLENBQWlCLElBQWpCLENBQVY7TUFDRDtJQUNGOzs7V0FFRCxrQkFBVXZRLEtBQVYsRUFBaUI7TUFDZixJQUFJLEtBQUtxQyxNQUFMLENBQVk2RCxNQUFaLENBQW1CLFNBQW5CLENBQUosRUFBbUM7UUFDakMsT0FBTzdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXNEosTUFBTSxDQUFDbEssS0FBRCxDQUFqQixDQUFQO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsT0FBT2tLLE1BQU0sQ0FBQ2xLLEtBQUQsQ0FBYjtNQUNEO0lBQ0Y7Ozs7RUFqQjBCa0MsWTs7QUFvQmR3TyxzRUFBZixFOzs7Ozs7Ozs7Ozs7QUN6QkE7O0lBRU1FLGU7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUNQLEtBQUszTSxTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUtiLFlBQWhDLEVBRE8sQ0FHUDs7TUFDQSxJQUFJLEtBQUttQixRQUFMLENBQWMvRixNQUFkLENBQXFCc0MsV0FBckIsRUFBSixFQUF3QztRQUN0QyxLQUFLVixTQUFMLENBQWU2RCxXQUFmLENBQTJCLEtBQUs1RCxLQUFMLENBQVcyRixjQUFYLENBQTBCO1VBQ25EbEQsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMvRixNQUFkLENBQXFCc0MsV0FBckI7UUFEc0MsQ0FBMUIsQ0FBM0I7TUFHRDtJQUNGOzs7V0FFRCxrQkFBVTNFLEtBQVYsRUFBaUI7TUFDZixPQUFPLElBQVA7SUFDRDs7OztFQWRzQm1JLGM7O0FBaUJWeUksZ0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7O0lBRU1DLGlCOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFDUCxLQUFLbk8sRUFBTCxHQUFVLElBQUlrTyxZQUFKLENBQWUsSUFBZixDQUFWO0lBQ0Q7OztXQUVELGtCQUFVNVEsS0FBVixFQUFpQjtNQUNmLE9BQU8sSUFBUDtJQUNEOzs7O0VBUHdCa0MsWTs7QUFVWjJPLGdFQUFmLEU7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQyxrQztFQUNKLDRCQUFlO0lBQUE7O0lBQUE7O0lBQ2I7QUFDSjtBQUNBO0lBQ0ksS0FBS0MsU0FBTCxHQUFpQixDQUNmLFVBQUMxTyxNQUFELEVBQVNGLE1BQVQsRUFBb0I7TUFDbEIsSUFBSUUsTUFBTSxDQUFDb0MsS0FBUCxNQUFrQnBDLE1BQU0sQ0FBQzhELEtBQVAsRUFBbEIsSUFBb0M5RCxNQUFNLENBQUM2RCxNQUFQLENBQWMsS0FBZCxDQUFwQyxJQUE0RDdELE1BQU0sQ0FBQzJOLEtBQVAsRUFBNUQsSUFBOEUsQ0FBQzNOLE1BQU0sQ0FBQ3hCLElBQVAsRUFBbkYsRUFBa0c7UUFDaEcsSUFBSSxDQUFDd0IsTUFBTSxDQUFDeEIsSUFBUCxFQUFELElBQWtCd0IsTUFBTSxXQUFOLEVBQXRCLEVBQXdDO1VBQ3RDLElBQU0yTyxjQUFjLEdBQUczTyxNQUFNLENBQUMvQyxLQUFQLEVBQXZCO1VBQ0EwUixjQUFjLENBQUNuUSxJQUFmLEdBQXNCRCxPQUFPLENBQUN5QixNQUFNLFdBQU4sRUFBRCxDQUE3QjtVQUNBLElBQU00TyxTQUFTLEdBQUcsSUFBSTFNLFVBQUosQ0FBV3lNLGNBQVgsQ0FBbEI7VUFDQSxPQUFPLEtBQUksQ0FBQ0UsT0FBTCxDQUFhRCxTQUFiLENBQVA7UUFDRCxDQUxELE1BS087VUFDTCxPQUFPLElBQUl6QixjQUFKLENBQXFCck4sTUFBckIsQ0FBUDtRQUNEO01BQ0Y7SUFDRixDQVpjLEVBYWYsVUFBQ0UsTUFBRCxFQUFTRixNQUFULEVBQW9CO01BQ2xCLElBQUlFLE1BQU0sQ0FBQzZELE1BQVAsQ0FBYyxTQUFkLENBQUosRUFBOEI7UUFDNUIsT0FBTyxJQUFJMkcsYUFBSixDQUFvQjFLLE1BQXBCLENBQVA7TUFDRDtJQUNGLENBakJjLEVBa0JmLFVBQUNFLE1BQUQsRUFBU0YsTUFBVCxFQUFvQjtNQUNsQixJQUFJRSxNQUFNLENBQUM2RCxNQUFQLENBQWMsUUFBZCxDQUFKLEVBQTZCO1FBQzNCLE9BQU8sSUFBSXdILFlBQUosQ0FBbUJ2TCxNQUFuQixDQUFQO01BQ0Q7SUFDRixDQXRCYyxFQXVCZixVQUFDRSxNQUFELEVBQVNGLE1BQVQsRUFBb0I7TUFDbEIsSUFBSUUsTUFBTSxDQUFDNkQsTUFBUCxDQUFjLE9BQWQsQ0FBSixFQUE0QjtRQUMxQixPQUFPLElBQUl3RixXQUFKLENBQWtCdkosTUFBbEIsQ0FBUDtNQUNEO0lBQ0YsQ0EzQmMsRUE0QmYsVUFBQ0UsTUFBRCxFQUFTRixNQUFULEVBQW9CO01BQ2xCLElBQUlFLE1BQU0sQ0FBQzZELE1BQVAsQ0FBYyxRQUFkLENBQUosRUFBNkI7UUFDM0IsT0FBTyxJQUFJd0ksWUFBSixDQUFtQnZNLE1BQW5CLENBQVA7TUFDRDtJQUNGLENBaENjLEVBaUNmLFVBQUNFLE1BQUQsRUFBU0YsTUFBVCxFQUFvQjtNQUNsQixJQUFJRSxNQUFNLENBQUNzTyxhQUFQLEVBQUosRUFBNEI7UUFDMUIsT0FBTyxJQUFJRCxZQUFKLENBQW1Cdk8sTUFBbkIsQ0FBUDtNQUNEO0lBQ0YsQ0FyQ2MsRUFzQ2YsVUFBQ0UsTUFBRCxFQUFTRixNQUFULEVBQW9CO01BQ2xCLElBQUlFLE1BQU0sQ0FBQzZELE1BQVAsQ0FBYyxNQUFkLENBQUosRUFBMkI7UUFDekIsT0FBTyxJQUFJMkssVUFBSixDQUFpQjFPLE1BQWpCLENBQVA7TUFDRDtJQUNGLENBMUNjLENBQWpCO0VBNENEO0VBRUQ7QUFDRjtBQUNBOzs7OztXQUNFLHFCQUFhZ1AsUUFBYixFQUF1QjtNQUNyQixLQUFLSixTQUFMLENBQWVLLE9BQWYsQ0FBdUJELFFBQXZCO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxpQkFBU2hQLE1BQVQsRUFBaUI7TUFBQSw0REFDUSxLQUFLNE8sU0FEYjtNQUFBOztNQUFBO1FBQ2Ysb0RBQXVDO1VBQUEsSUFBNUJJLFFBQTRCO1VBQ3JDLElBQU1FLFdBQVcsR0FBR0YsUUFBUSxDQUFDaFAsTUFBTSxDQUFDRSxNQUFSLEVBQWdCRixNQUFoQixDQUE1Qjs7VUFDQSxJQUFJbEMsS0FBSyxDQUFDb1IsV0FBRCxDQUFULEVBQXdCO1lBQ3RCLE9BQU9BLFdBQVA7VUFDRDtRQUNGO01BTmM7UUFBQTtNQUFBO1FBQUE7TUFBQTtJQU9oQjs7Ozs7O0FBR1lQLHdGQUFmLEU7Ozs7O0FDakZBO0FBQ0E7QUFDQTs7SUFFTVEsbUI7RUFDSixxQkFBZTtJQUFBOztJQUNiLEtBQUtDLFVBQUwsR0FBa0IsQ0FDaEIsT0FEZ0IsRUFFaEIsT0FGZ0IsRUFHaEIsT0FIZ0IsRUFJaEIsbUJBSmdCLEVBS2hCLFFBTGdCLEVBTWhCLElBTmdCLEVBT2hCLE9BUGdCLEVBUWhCLEtBUmdCLEVBU2hCLE1BVGdCLEVBVWhCLGFBVmdCLEVBV2hCLGtCQVhnQixFQVloQixrQkFaZ0IsRUFhaEIsVUFiZ0IsRUFjaEIsVUFkZ0IsRUFlaEIsV0FmZ0IsRUFnQmhCLFdBaEJnQixFQWlCaEIsU0FqQmdCLEVBa0JoQixTQWxCZ0IsRUFtQmhCLFlBbkJnQixFQW9CaEIsU0FwQmdCLEVBcUJoQixtQkFyQmdCLEVBc0JoQixNQXRCZ0IsRUF1QmhCLFVBdkJnQixFQXdCaEIsZUF4QmdCLEVBeUJoQixlQXpCZ0IsQ0FBbEI7RUEyQkQ7Ozs7V0FFRCxlQUFPdlIsS0FBUCxFQUFjcUMsTUFBZCxFQUFzQmYsR0FBdEIsRUFBMkJpQixJQUEzQixFQUFpQztNQUFBOztNQUMvQixJQUFJc0csTUFBTSxHQUFHLEVBQWI7O01BRUEsSUFBSXhHLE1BQU0sQ0FBQ21DLEtBQVAsRUFBSixFQUFvQjtRQUNsQm5DLE1BQU0sQ0FBQ21DLEtBQVAsR0FBZXhDLE9BQWYsQ0FBdUIsVUFBQ0ssTUFBRCxFQUFZO1VBQ2pDLElBQU1tUCxXQUFXLEdBQUcsS0FBSSxDQUFDMU4sUUFBTCxDQUFjOUQsS0FBZCxFQUFxQixJQUFJdUUsVUFBSixDQUFXbEMsTUFBWCxDQUFyQixFQUF5Q2YsR0FBekMsRUFBOENpQixJQUE5QyxDQUFwQjs7VUFDQXNHLE1BQU0seUNBQU9BLE1BQVAsK0JBQWtCMkksV0FBbEIsRUFBTjtRQUNELENBSEQ7TUFJRDs7TUFFRCxPQUFPM0ksTUFBUDtJQUNEOzs7V0FFRCxlQUFPN0ksS0FBUCxFQUFjcUMsTUFBZCxFQUFzQmYsR0FBdEIsRUFBMkJpQixJQUEzQixFQUFpQztNQUFBOztNQUMvQixJQUFNc0csTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXhHLE1BQU0sQ0FBQ29DLEtBQVAsRUFBSixFQUFvQjtRQUNsQixJQUFNZ04sS0FBSyxHQUFHcFAsTUFBTSxDQUFDb0MsS0FBUCxHQUFlaU4sSUFBZixDQUFvQixVQUFDclAsTUFBRCxFQUFZO1VBQzVDLElBQU1zUCxXQUFXLEdBQUcsTUFBSSxDQUFDN04sUUFBTCxDQUFjOUQsS0FBZCxFQUFxQixJQUFJdUUsVUFBSixDQUFXbEMsTUFBWCxDQUFyQixFQUF5Q2YsR0FBekMsRUFBOENpQixJQUE5QyxDQUFwQjs7VUFDQSxPQUFPb1AsV0FBVyxDQUFDeFEsTUFBWixLQUF1QixDQUE5QjtRQUNELENBSGEsQ0FBZDs7UUFLQSxJQUFJLENBQUNzUSxLQUFMLEVBQVk7VUFDVixJQUFNRyxLQUFLLEdBQUd2UCxNQUFNLENBQUM0RCxLQUFQLEtBQWlCNUQsTUFBTSxDQUFDNEQsS0FBUCxFQUFqQixHQUFrQzNFLEdBQWhEO1VBRUF1SCxNQUFNLENBQUNoSCxJQUFQLENBQVk7WUFDVitFLE9BQU8sRUFBRWdMLEtBQUssR0FBRyw4REFEUDtZQUVWclAsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9zRyxNQUFQO0lBQ0Q7OztXQUVELGdCQUFPN0ksS0FBUCxFQUFjcUMsTUFBZCxFQUFzQmYsR0FBdEIsRUFBMkJpQixJQUEzQixFQUFpQztNQUMvQixJQUFNc0csTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXhHLE1BQU0sU0FBTixFQUFKLEVBQW9CO1FBQ2xCLElBQU13UCxvQkFBb0IsR0FBSXJTLElBQUksQ0FBQ0UsU0FBTCxDQUFlTSxLQUFmLE1BQTBCUixJQUFJLENBQUNFLFNBQUwsQ0FBZTJDLE1BQU0sU0FBTixFQUFmLENBQXhEO1FBQ0EsSUFBTXlQLE9BQU8sR0FBSUQsb0JBQWpCOztRQUVBLElBQUlDLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR3ZQLE1BQU0sQ0FBQzRELEtBQVAsS0FBaUI1RCxNQUFNLENBQUM0RCxLQUFQLEVBQWpCLEdBQWtDM0UsR0FBaEQ7VUFFQXVILE1BQU0sQ0FBQ2hILElBQVAsQ0FBWTtZQUNWK0UsT0FBTyxFQUFFZ0wsS0FBSyxHQUFHLG9CQUFSLEdBQStCcFMsSUFBSSxDQUFDRSxTQUFMLENBQWUyQyxNQUFNLFNBQU4sRUFBZixDQUQ5QjtZQUVWRSxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDs7O1dBRUQsMkJBQW1CN0ksS0FBbkIsRUFBMEJxQyxNQUExQixFQUFrQ2YsR0FBbEMsRUFBdUNpQixJQUF2QyxFQUE2QztNQUMzQyxJQUFNc0csTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSWxJLGNBQVEsQ0FBQ1gsS0FBRCxDQUFSLElBQW1CcUMsTUFBTSxDQUFDcUMsaUJBQVAsRUFBdkIsRUFBbUQ7UUFDakQsSUFBSW9KLGlCQUFpQixHQUFHLEVBQXhCO1FBRUF2TSxNQUFNLENBQUNVLElBQVAsQ0FBWUksTUFBTSxDQUFDcUMsaUJBQVAsRUFBWixFQUF3QzFDLE9BQXhDLENBQWdELFVBQUNWLEdBQUQsRUFBUztVQUN2RCxJQUFJckIsS0FBSyxDQUFDRCxLQUFLLENBQUNzQixHQUFELENBQU4sQ0FBVCxFQUF1QjtZQUNyQixJQUFNeU0sa0JBQWtCLEdBQUcxTCxNQUFNLENBQUNxQyxpQkFBUCxHQUEyQnBELEdBQTNCLENBQTNCO1lBRUF3TSxpQkFBaUIsR0FBR0Msa0JBQWtCLENBQUNqTSxNQUFuQixDQUEwQixVQUFDK0wsUUFBRCxFQUFjO2NBQzFELE9BQU8sQ0FBQ3RNLE1BQU0sQ0FBQytDLE1BQVAsQ0FBY3RFLEtBQWQsRUFBcUI2TixRQUFyQixDQUFSO1lBQ0QsQ0FGbUIsQ0FBcEI7VUFHRDtRQUNGLENBUkQ7UUFVQSxJQUFNaUUsT0FBTyxHQUFHaEUsaUJBQWlCLENBQUMzTSxNQUFsQixHQUEyQixDQUEzQzs7UUFFQSxJQUFJMlEsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHdlAsTUFBTSxDQUFDNEQsS0FBUCxLQUFpQjVELE1BQU0sQ0FBQzRELEtBQVAsRUFBakIsR0FBa0MzRSxHQUFoRDtVQUVBdUgsTUFBTSxDQUFDaEgsSUFBUCxDQUFZO1lBQ1YrRSxPQUFPLEVBQUVnTCxLQUFLLEdBQUcsd0NBQVIsR0FBbUQ5RCxpQkFBaUIsQ0FBQ2lFLElBQWxCLENBQXVCLElBQXZCLENBRGxEO1lBRVZ4UCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDs7O1dBRUQsZUFBTTdJLEtBQU4sRUFBYXFDLE1BQWIsRUFBcUJmLEdBQXJCLEVBQTBCaUIsSUFBMUIsRUFBZ0M7TUFDOUIsSUFBTXNHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUl4RyxNQUFNLFFBQU4sRUFBSixFQUFtQjtRQUNqQixJQUFNeVAsT0FBTyxHQUFHLENBQUN6UCxNQUFNLFFBQU4sR0FBY3FQLElBQWQsQ0FBbUIsVUFBQU0sQ0FBQztVQUFBLE9BQUl4UyxJQUFJLENBQUNFLFNBQUwsQ0FBZU0sS0FBZixNQUEwQlIsSUFBSSxDQUFDRSxTQUFMLENBQWVzUyxDQUFmLENBQTlCO1FBQUEsQ0FBcEIsQ0FBakI7O1FBRUEsSUFBSUYsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHdlAsTUFBTSxDQUFDNEQsS0FBUCxLQUFpQjVELE1BQU0sQ0FBQzRELEtBQVAsRUFBakIsR0FBa0MzRSxHQUFoRDtVQUVBdUgsTUFBTSxDQUFDaEgsSUFBUCxDQUFZO1lBQ1YrRSxPQUFPLEVBQUVnTCxLQUFLLEdBQUcseUNBQVIsR0FBb0RwUyxJQUFJLENBQUNFLFNBQUwsQ0FBZTJDLE1BQU0sUUFBTixFQUFmLENBRG5EO1lBRVZFLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPc0csTUFBUDtJQUNEOzs7V0FFRCwwQkFBa0I3SSxLQUFsQixFQUF5QnFDLE1BQXpCLEVBQWlDZixHQUFqQyxFQUFzQ2lCLElBQXRDLEVBQTRDO01BQzFDLElBQU1zRyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJMUksUUFBUSxDQUFDSCxLQUFELENBQVIsSUFBbUJxQyxNQUFNLENBQUN1QyxnQkFBUCxFQUF2QixFQUFrRDtRQUNoRCxJQUFNcU4sZUFBZSxHQUFJNVAsTUFBTSxDQUFDdUMsZ0JBQVAsS0FBNEIsQ0FBckQ7UUFDQSxJQUFNa04sT0FBTyxHQUFJOVIsS0FBSyxHQUFHaVMsZUFBekI7O1FBRUEsSUFBSUgsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHdlAsTUFBTSxDQUFDNEQsS0FBUCxLQUFpQjVELE1BQU0sQ0FBQzRELEtBQVAsRUFBakIsR0FBa0MzRSxHQUFoRDtVQUVBdUgsTUFBTSxDQUFDaEgsSUFBUCxDQUFZO1lBQ1YrRSxPQUFPLEVBQUVnTCxLQUFLLEdBQUcscUJBQVIsR0FBZ0NLLGVBRC9CO1lBRVYxUCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDs7O1dBRUQsMEJBQWtCN0ksS0FBbEIsRUFBeUJxQyxNQUF6QixFQUFpQ2YsR0FBakMsRUFBc0NpQixJQUF0QyxFQUE0QztNQUMxQyxJQUFNc0csTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSTFJLFFBQVEsQ0FBQ0gsS0FBRCxDQUFSLElBQW1CcUMsTUFBTSxDQUFDd0MsZ0JBQVAsRUFBdkIsRUFBa0Q7UUFDaEQsSUFBTXFOLGVBQWUsR0FBSTdQLE1BQU0sQ0FBQ3dDLGdCQUFQLEtBQTRCLENBQXJEO1FBQ0EsSUFBTWlOLE9BQU8sR0FBSTlSLEtBQUssR0FBR2tTLGVBQXpCOztRQUVBLElBQUlKLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR3ZQLE1BQU0sQ0FBQzRELEtBQVAsS0FBaUI1RCxNQUFNLENBQUM0RCxLQUFQLEVBQWpCLEdBQWtDM0UsR0FBaEQ7VUFFQXVILE1BQU0sQ0FBQ2hILElBQVAsQ0FBWTtZQUNWK0UsT0FBTyxFQUFFZ0wsS0FBSyxHQUFHLG9CQUFSLEdBQStCTSxlQUQ5QjtZQUVWM1AsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9zRyxNQUFQO0lBQ0Q7OztXQUVELGdCQUFRN0ksS0FBUixFQUFlcUMsTUFBZixFQUF1QmYsR0FBdkIsRUFBNEJpQixJQUE1QixFQUFrQztNQUNoQyxJQUFNc0csTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXhHLE1BQU0sQ0FBQ3lDLE1BQVAsRUFBSixFQUFxQjtRQUNuQixJQUFJZ04sT0FBTyxHQUFHLEtBQWQ7O1FBRUEsSUFBSXpQLE1BQU0sQ0FBQ3lLLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FBSixFQUE4QjtVQUM1QixJQUFNcUYsTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBVywwSUFBWCxDQUFmO1VBQ0FOLE9BQU8sR0FBRyxDQUFDSyxNQUFNLENBQUNFLElBQVAsQ0FBWXJTLEtBQVosQ0FBWDtRQUNEOztRQUVELElBQUk4UixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUd2UCxNQUFNLENBQUM0RCxLQUFQLEtBQWlCNUQsTUFBTSxDQUFDNEQsS0FBUCxFQUFqQixHQUFrQzNFLEdBQWhEO1VBRUF1SCxNQUFNLENBQUNoSCxJQUFQLENBQVk7WUFDVitFLE9BQU8sRUFBRWdMLEtBQUssR0FBRyxnQ0FEUDtZQUVWclAsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9zRyxNQUFQO0lBQ0Q7OztXQUVELGFBQUk3SSxLQUFKLEVBQVdxQyxNQUFYLEVBQW1CZixHQUFuQixFQUF3QmlCLElBQXhCLEVBQThCO01BQzVCLElBQUlzRyxNQUFNLEdBQUcsRUFBYjs7TUFFQSxJQUFJeEcsTUFBTSxNQUFOLEVBQUosRUFBaUI7UUFDZixJQUFJLENBQUNBLE1BQU0sQ0FBQzJELElBQVAsRUFBRCxJQUFrQixDQUFDM0QsTUFBTSxRQUFOLEVBQXZCLEVBQXNDO1VBQ3BDLE9BQU93RyxNQUFQO1FBQ0Q7O1FBRUQsSUFBTXlKLFFBQVEsR0FBRyxJQUFJQyxHQUFKLENBQVM7VUFBRWxRLE1BQU0sRUFBRUEsTUFBTSxNQUFOLEVBQVY7VUFBdUJtUSxRQUFRLEVBQUV4UztRQUFqQyxDQUFULENBQWpCO1FBQ0EsSUFBTXlTLFFBQVEsR0FBR0gsUUFBUSxDQUFDeE8sUUFBVCxFQUFqQjs7UUFFQSxJQUFJMk8sUUFBUSxDQUFDdFIsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtVQUN6QixJQUFNdVIsVUFBVSxHQUFHLElBQUlILEdBQUosQ0FBUztZQUFFbFEsTUFBTSxFQUFFQSxNQUFNLENBQUMyRCxJQUFQLEVBQVY7WUFBeUJ3TSxRQUFRLEVBQUV4UztVQUFuQyxDQUFULENBQW5CO1VBQ0E2SSxNQUFNLEdBQUc2SixVQUFVLENBQUM1TyxRQUFYLEVBQVQ7UUFDRCxDQUhELE1BR087VUFDTCxJQUFNNk8sVUFBVSxHQUFHLElBQUlKLEdBQUosQ0FBUztZQUFFbFEsTUFBTSxFQUFFQSxNQUFNLFFBQU4sRUFBVjtZQUF5Qm1RLFFBQVEsRUFBRXhTO1VBQW5DLENBQVQsQ0FBbkI7VUFDQTZJLE1BQU0sR0FBRzhKLFVBQVUsQ0FBQzdPLFFBQVgsRUFBVDtRQUNEO01BQ0Y7O01BRUQsT0FBTytFLE1BQVA7SUFDRDs7O1dBRUQsaUJBQVM3SSxLQUFULEVBQWdCcUMsTUFBaEIsRUFBd0JmLEdBQXhCLEVBQTZCaUIsSUFBN0IsRUFBbUM7TUFDakMsSUFBTXNHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUkxSSxRQUFRLENBQUNILEtBQUQsQ0FBUixJQUFtQnFDLE1BQU0sQ0FBQzJDLE9BQVAsRUFBdkIsRUFBeUM7UUFDdkMsSUFBTWlOLGVBQWUsR0FBRzVQLE1BQU0sQ0FBQzJDLE9BQVAsRUFBeEI7UUFDQSxJQUFNOE0sT0FBTyxHQUFJOVIsS0FBSyxHQUFHaVMsZUFBekI7O1FBRUEsSUFBSUgsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHdlAsTUFBTSxDQUFDNEQsS0FBUCxLQUFpQjVELE1BQU0sQ0FBQzRELEtBQVAsRUFBakIsR0FBa0MzRSxHQUFoRDtVQUVBdUgsTUFBTSxDQUFDaEgsSUFBUCxDQUFZO1lBQ1YrRSxPQUFPLEVBQUVnTCxLQUFLLEdBQUcscUJBQVIsR0FBZ0NLLGVBRC9CO1lBRVYxUCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDs7O1dBRUQsa0JBQVU3SSxLQUFWLEVBQWlCcUMsTUFBakIsRUFBeUJmLEdBQXpCLEVBQThCaUIsSUFBOUIsRUFBb0M7TUFDbEMsSUFBTXNHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUlwSSxPQUFPLENBQUNULEtBQUQsQ0FBUCxJQUFrQnFDLE1BQU0sQ0FBQzRDLFFBQVAsRUFBdEIsRUFBeUM7UUFDdkMsSUFBTTZNLE9BQU8sR0FBSTlSLEtBQUssQ0FBQ21CLE1BQU4sR0FBZWtCLE1BQU0sQ0FBQzRDLFFBQVAsRUFBaEM7O1FBRUEsSUFBSTZNLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR3ZQLE1BQU0sQ0FBQzRELEtBQVAsS0FBaUI1RCxNQUFNLENBQUM0RCxLQUFQLEVBQWpCLEdBQWtDM0UsR0FBaEQ7VUFFQXVILE1BQU0sQ0FBQ2hILElBQVAsQ0FBWTtZQUNWK0UsT0FBTyxFQUFFZ0wsS0FBSyxHQUFHLHFCQUFSLEdBQWdDdlAsTUFBTSxDQUFDNEMsUUFBUCxFQUFoQyxHQUFvRCxRQURuRDtZQUVWMUMsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9zRyxNQUFQO0lBQ0Q7OztXQUVELG1CQUFXN0ksS0FBWCxFQUFrQnFDLE1BQWxCLEVBQTBCZixHQUExQixFQUErQmlCLElBQS9CLEVBQXFDO01BQ25DLElBQU1zRyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJdEksUUFBUSxDQUFDUCxLQUFELENBQVIsSUFBbUJxQyxNQUFNLENBQUM2QyxTQUFQLEVBQXZCLEVBQTJDO1FBQ3pDLElBQU00TSxPQUFPLEdBQUk5UixLQUFLLENBQUNtQixNQUFOLEdBQWVrQixNQUFNLENBQUM2QyxTQUFQLEVBQWhDOztRQUVBLElBQUk0TSxPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUd2UCxNQUFNLENBQUM0RCxLQUFQLEtBQWlCNUQsTUFBTSxDQUFDNEQsS0FBUCxFQUFqQixHQUFrQzNFLEdBQWhEO1VBRUF1SCxNQUFNLENBQUNoSCxJQUFQLENBQVk7WUFDVitFLE9BQU8sRUFBRWdMLEtBQUssR0FBRyxtQkFBUixHQUE4QnZQLE1BQU0sQ0FBQzZDLFNBQVAsRUFBOUIsR0FBbUQsa0JBRGxEO1lBRVYzQyxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDs7O1dBRUQsdUJBQWU3SSxLQUFmLEVBQXNCcUMsTUFBdEIsRUFBOEJmLEdBQTlCLEVBQW1DaUIsSUFBbkMsRUFBeUM7TUFDdkMsSUFBTXNHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUlsSSxjQUFRLENBQUNYLEtBQUQsQ0FBUixJQUFtQnFDLE1BQU0sQ0FBQzhDLGFBQVAsRUFBdkIsRUFBK0M7UUFDN0MsSUFBTXlOLGVBQWUsR0FBR3JSLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZakMsS0FBWixFQUFtQm1CLE1BQTNDO1FBQ0EsSUFBTTJRLE9BQU8sR0FBSWMsZUFBZSxHQUFHdlEsTUFBTSxDQUFDOEMsYUFBUCxFQUFuQzs7UUFFQSxJQUFJMk0sT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHdlAsTUFBTSxDQUFDNEQsS0FBUCxLQUFpQjVELE1BQU0sQ0FBQzRELEtBQVAsRUFBakIsR0FBa0MzRSxHQUFoRDtVQUVBdUgsTUFBTSxDQUFDaEgsSUFBUCxDQUFZO1lBQ1YrRSxPQUFPLEVBQUVnTCxLQUFLLEdBQUcscUJBQVIsR0FBZ0N2UCxNQUFNLENBQUM4QyxhQUFQLEVBQWhDLEdBQXlELGFBRHhEO1lBRVY1QyxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDs7O1dBRUQsaUJBQVM3SSxLQUFULEVBQWdCcUMsTUFBaEIsRUFBd0JmLEdBQXhCLEVBQTZCaUIsSUFBN0IsRUFBbUM7TUFDakMsSUFBTXNHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUkxSSxRQUFRLENBQUNILEtBQUQsQ0FBUixJQUFtQnFDLE1BQU0sQ0FBQytDLE9BQVAsRUFBdkIsRUFBeUM7UUFDdkMsSUFBTThNLGVBQWUsR0FBRzdQLE1BQU0sQ0FBQytDLE9BQVAsRUFBeEI7UUFDQSxJQUFNME0sT0FBTyxHQUFJOVIsS0FBSyxHQUFHa1MsZUFBekI7O1FBRUEsSUFBSUosT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHdlAsTUFBTSxDQUFDNEQsS0FBUCxLQUFpQjVELE1BQU0sQ0FBQzRELEtBQVAsRUFBakIsR0FBa0MzRSxHQUFoRDtVQUVBdUgsTUFBTSxDQUFDaEgsSUFBUCxDQUFZO1lBQ1YrRSxPQUFPLEVBQUVnTCxLQUFLLEdBQUcsb0JBQVIsR0FBK0JNLGVBRDlCO1lBRVYzUCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDs7O1dBRUQsa0JBQVU3SSxLQUFWLEVBQWlCcUMsTUFBakIsRUFBeUJmLEdBQXpCLEVBQThCaUIsSUFBOUIsRUFBb0M7TUFDbEMsSUFBTXNHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUlwSSxPQUFPLENBQUNULEtBQUQsQ0FBUCxJQUFrQnFDLE1BQU0sQ0FBQ2dELFFBQVAsRUFBdEIsRUFBeUM7UUFDdkMsSUFBTXlNLE9BQU8sR0FBSTlSLEtBQUssQ0FBQ21CLE1BQU4sR0FBZWtCLE1BQU0sQ0FBQ2dELFFBQVAsRUFBaEM7O1FBRUEsSUFBSXlNLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR3ZQLE1BQU0sQ0FBQzRELEtBQVAsS0FBaUI1RCxNQUFNLENBQUM0RCxLQUFQLEVBQWpCLEdBQWtDM0UsR0FBaEQ7VUFFQXVILE1BQU0sQ0FBQ2hILElBQVAsQ0FBWTtZQUNWK0UsT0FBTyxFQUFFZ0wsS0FBSyxHQUFHLHNCQUFSLEdBQWlDdlAsTUFBTSxDQUFDZ0QsUUFBUCxFQUFqQyxHQUFxRCxRQURwRDtZQUVWOUMsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9zRyxNQUFQO0lBQ0Q7OztXQUVELG1CQUFXN0ksS0FBWCxFQUFrQnFDLE1BQWxCLEVBQTBCZixHQUExQixFQUErQmlCLElBQS9CLEVBQXFDO01BQ25DLElBQU1zRyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJdEksUUFBUSxDQUFDUCxLQUFELENBQVIsSUFBbUJxQyxNQUFNLENBQUNpRCxTQUFQLEVBQXZCLEVBQTJDO1FBQ3pDLElBQU13TSxPQUFPLEdBQUk5UixLQUFLLENBQUNtQixNQUFOLEdBQWVrQixNQUFNLENBQUNpRCxTQUFQLEVBQWhDOztRQUVBLElBQUl3TSxPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUd2UCxNQUFNLENBQUM0RCxLQUFQLEtBQWlCNUQsTUFBTSxDQUFDNEQsS0FBUCxFQUFqQixHQUFrQzNFLEdBQWhEO1VBRUF1SCxNQUFNLENBQUNoSCxJQUFQLENBQVk7WUFDVitFLE9BQU8sRUFBRWdMLEtBQUssR0FBRyxvQkFBUixHQUErQnZQLE1BQU0sQ0FBQ2lELFNBQVAsRUFBL0IsR0FBb0Qsa0JBRG5EO1lBRVYvQyxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDs7O1dBRUQsdUJBQWU3SSxLQUFmLEVBQXNCcUMsTUFBdEIsRUFBOEJmLEdBQTlCLEVBQW1DaUIsSUFBbkMsRUFBeUM7TUFDdkMsSUFBTXNHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUlsSSxjQUFRLENBQUNYLEtBQUQsQ0FBUixJQUFtQnFDLE1BQU0sQ0FBQ2tELGFBQVAsRUFBdkIsRUFBK0M7UUFDN0MsSUFBTXFOLGVBQWUsR0FBR3JSLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZakMsS0FBWixFQUFtQm1CLE1BQTNDO1FBQ0EsSUFBTTJRLE9BQU8sR0FBSWMsZUFBZSxHQUFHdlEsTUFBTSxDQUFDa0QsYUFBUCxFQUFuQzs7UUFFQSxJQUFJdU0sT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHdlAsTUFBTSxDQUFDNEQsS0FBUCxLQUFpQjVELE1BQU0sQ0FBQzRELEtBQVAsRUFBakIsR0FBa0MzRSxHQUFoRDtVQUVBdUgsTUFBTSxDQUFDaEgsSUFBUCxDQUFZO1lBQ1YrRSxPQUFPLEVBQUVnTCxLQUFLLEdBQUcsc0JBQVIsR0FBaUN2UCxNQUFNLENBQUNrRCxhQUFQLEVBQWpDLEdBQTBELGFBRHpEO1lBRVZoRCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDs7O1dBRUQsb0JBQVk3SSxLQUFaLEVBQW1CcUMsTUFBbkIsRUFBMkJmLEdBQTNCLEVBQWdDaUIsSUFBaEMsRUFBc0M7TUFDcEMsSUFBTXNHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUkxSSxRQUFRLENBQUNILEtBQUQsQ0FBUixJQUFtQnFDLE1BQU0sQ0FBQ21ELFVBQVAsRUFBdkIsRUFBNEM7UUFDMUMsSUFBTXFOLFlBQVksR0FBSTdTLEtBQUssR0FBR3FDLE1BQU0sQ0FBQ21ELFVBQVAsRUFBUixLQUFnQ25GLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixLQUFLLEdBQUdxQyxNQUFNLENBQUNtRCxVQUFQLEVBQW5CLENBQXREO1FBQ0EsSUFBTXNNLE9BQU8sR0FBSSxDQUFDZSxZQUFsQjs7UUFFQSxJQUFJZixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUd2UCxNQUFNLENBQUM0RCxLQUFQLEtBQWlCNUQsTUFBTSxDQUFDNEQsS0FBUCxFQUFqQixHQUFrQzNFLEdBQWhEO1VBRUF1SCxNQUFNLENBQUNoSCxJQUFQLENBQVk7WUFDVitFLE9BQU8sRUFBRWdMLEtBQUssR0FBRyx1QkFBUixHQUFrQ3ZQLE1BQU0sQ0FBQ21ELFVBQVAsRUFEakM7WUFFVmpELElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPc0csTUFBUDtJQUNEOzs7V0FFRCxhQUFLN0ksS0FBTCxFQUFZcUMsTUFBWixFQUFvQmYsR0FBcEIsRUFBeUJpQixJQUF6QixFQUErQjtNQUM3QixJQUFNc0csTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXhHLE1BQU0sQ0FBQ29ELEdBQVAsRUFBSixFQUFrQjtRQUNoQixJQUFNcU4sU0FBUyxHQUFHLEtBQUtoUCxRQUFMLENBQWM5RCxLQUFkLEVBQXFCLElBQUl1RSxVQUFKLENBQVdsQyxNQUFNLENBQUNvRCxHQUFQLEVBQVgsQ0FBckIsRUFBK0NuRSxHQUEvQyxFQUFvRGlCLElBQXBELENBQWxCO1FBRUEsSUFBTXVQLE9BQU8sR0FBR2dCLFNBQVMsQ0FBQzNSLE1BQVYsS0FBcUIsQ0FBckM7O1FBRUEsSUFBSTJRLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR3ZQLE1BQU0sQ0FBQzRELEtBQVAsS0FBaUI1RCxNQUFNLENBQUM0RCxLQUFQLEVBQWpCLEdBQWtDM0UsR0FBaEQ7VUFFQXVILE1BQU0sQ0FBQ2hILElBQVAsQ0FBWTtZQUNWK0UsT0FBTyxFQUFFZ0wsS0FBSyxHQUFHLGlEQUFSLEdBQTREcFMsSUFBSSxDQUFDRSxTQUFMLENBQWUyQyxNQUFNLENBQUNvRCxHQUFQLEVBQWYsQ0FEM0Q7WUFFVmxELElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPc0csTUFBUDtJQUNEOzs7V0FFRCxlQUFPN0ksS0FBUCxFQUFjcUMsTUFBZCxFQUFzQmYsR0FBdEIsRUFBMkJpQixJQUEzQixFQUFpQztNQUFBOztNQUMvQixJQUFNc0csTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXhHLE1BQU0sQ0FBQzhELEtBQVAsRUFBSixFQUFvQjtRQUNsQixJQUFJNE0sT0FBTyxHQUFHLENBQWQ7UUFFQTFRLE1BQU0sQ0FBQzhELEtBQVAsR0FBZW5FLE9BQWYsQ0FBdUIsVUFBQ0ssTUFBRCxFQUFZO1VBQ2pDLElBQU0yUSxXQUFXLEdBQUcsTUFBSSxDQUFDbFAsUUFBTCxDQUFjOUQsS0FBZCxFQUFxQixJQUFJdUUsVUFBSixDQUFXbEMsTUFBWCxDQUFyQixFQUF5Q2YsR0FBekMsRUFBOENpQixJQUE5QyxDQUFwQjs7VUFFQSxJQUFJeVEsV0FBVyxDQUFDN1IsTUFBWixLQUF1QixDQUEzQixFQUE4QjtZQUM1QjRSLE9BQU87VUFDUjtRQUNGLENBTkQ7O1FBUUEsSUFBSUEsT0FBTyxLQUFLLENBQWhCLEVBQW1CO1VBQ2pCLElBQU1uQixLQUFLLEdBQUd2UCxNQUFNLENBQUM0RCxLQUFQLEtBQWlCNUQsTUFBTSxDQUFDNEQsS0FBUCxFQUFqQixHQUFrQzNFLEdBQWhEO1VBRUF1SCxNQUFNLENBQUNoSCxJQUFQLENBQVk7WUFDVitFLE9BQU8sRUFBRWdMLEtBQUssR0FBRyw2RkFBUixHQUF3R21CLE9BQXhHLEdBQWtILGtCQURqSDtZQUVWeFEsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9zRyxNQUFQO0lBQ0Q7OztXQUVELGlCQUFTN0ksS0FBVCxFQUFnQnFDLE1BQWhCLEVBQXdCZixHQUF4QixFQUE2QmlCLElBQTdCLEVBQW1DO01BQ2pDLElBQU1zRyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJdEksUUFBUSxDQUFDUCxLQUFELENBQVIsSUFBbUJxQyxNQUFNLENBQUNzRCxPQUFQLEVBQXZCLEVBQXlDO1FBQ3ZDLElBQU13TSxNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXL1AsTUFBTSxDQUFDc0QsT0FBUCxFQUFYLENBQWY7UUFDQSxJQUFNbU0sT0FBTyxHQUFHLENBQUNLLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZclMsS0FBWixDQUFqQjs7UUFFQSxJQUFJOFIsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHdlAsTUFBTSxDQUFDNEQsS0FBUCxLQUFpQjVELE1BQU0sQ0FBQzRELEtBQVAsRUFBakIsR0FBa0MzRSxHQUFoRDtVQUVBdUgsTUFBTSxDQUFDaEgsSUFBUCxDQUFZO1lBQ1YrRSxPQUFPLEVBQUVnTCxLQUFLLEdBQUcsd0JBQVIsR0FBbUN2UCxNQUFNLENBQUNzRCxPQUFQLEVBRGxDO1lBRVZwRCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDs7O1dBRUQsMkJBQW1CN0ksS0FBbkIsRUFBMEJxQyxNQUExQixFQUFrQ2YsR0FBbEMsRUFBdUNpQixJQUF2QyxFQUE2QztNQUMzQyxJQUFJc0csTUFBTSxHQUFHLEVBQWI7O01BRUEsSUFBSWxJLGNBQVEsQ0FBQ1gsS0FBRCxDQUFSLElBQW1CcUMsTUFBTSxDQUFDdUQsaUJBQVAsRUFBdkIsRUFBbUQ7UUFDakQsSUFBTUEsaUJBQWlCLEdBQUd2RCxNQUFNLENBQUN1RCxpQkFBUCxFQUExQjtRQUVBckUsTUFBTSxDQUFDVSxJQUFQLENBQVlqQyxLQUFaLEVBQW1CZ0MsT0FBbkIsQ0FBMkIsVUFBQ2lSLFlBQUQsRUFBa0I7VUFDM0MxUixNQUFNLENBQUNVLElBQVAsQ0FBWTJELGlCQUFaLEVBQStCNUQsT0FBL0IsQ0FBdUMsVUFBQzJELE9BQUQsRUFBYTtZQUNsRCxJQUFNd00sTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBV3pNLE9BQVgsQ0FBZjs7WUFDQSxJQUFJd00sTUFBTSxDQUFDRSxJQUFQLENBQVlZLFlBQVosQ0FBSixFQUErQjtjQUM3QixJQUFNNVEsT0FBTSxHQUFHdUQsaUJBQWlCLENBQUNELE9BQUQsQ0FBaEM7Y0FDQXRELE9BQU0sQ0FBQzRELEtBQVAsR0FBZWdOLFlBQWY7Y0FFQSxJQUFNakksTUFBTSxHQUFHLElBQUl1SCxHQUFKLENBQVM7Z0JBQ3RCbFEsTUFBTSxFQUFFQSxPQURjO2dCQUV0Qm1RLFFBQVEsRUFBRXhTLEtBQUssQ0FBQ2lULFlBQUQ7Y0FGTyxDQUFULENBQWY7Y0FLQXBLLE1BQU0seUNBQU9BLE1BQVAsK0JBQWtCbUMsTUFBTSxDQUFDbEgsUUFBUCxFQUFsQixFQUFOO1lBQ0Q7VUFDRixDQWJEO1FBY0QsQ0FmRDtNQWdCRDs7TUFFRCxPQUFPK0UsTUFBUDtJQUNEOzs7V0FFRCxrQkFBVTdJLEtBQVYsRUFBaUJxQyxNQUFqQixFQUF5QmYsR0FBekIsRUFBOEJpQixJQUE5QixFQUFvQztNQUNsQyxJQUFNc0csTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSWxJLGNBQVEsQ0FBQ1gsS0FBRCxDQUFSLElBQW1CcUMsTUFBTSxDQUFDeUQsUUFBUCxFQUF2QixFQUEwQztRQUN4QyxJQUFNZ0ksaUJBQWlCLEdBQUcsRUFBMUI7UUFDQSxJQUFNN0wsSUFBSSxHQUFHVixNQUFNLENBQUNVLElBQVAsQ0FBWWpDLEtBQVosQ0FBYjtRQUVBcUMsTUFBTSxDQUFDeUQsUUFBUCxHQUFrQjlELE9BQWxCLENBQTBCLFVBQUNWLEdBQUQsRUFBUztVQUNqQyxJQUFJLENBQUNXLElBQUksQ0FBQ3VCLFFBQUwsQ0FBY2xDLEdBQWQsQ0FBTCxFQUF5QjtZQUN2QndNLGlCQUFpQixDQUFDak0sSUFBbEIsQ0FBdUJQLEdBQXZCO1VBQ0Q7UUFDRixDQUpEO1FBTUEsSUFBTXdRLE9BQU8sR0FBR2hFLGlCQUFpQixDQUFDM00sTUFBbEIsR0FBMkIsQ0FBM0M7O1FBRUEsSUFBSTJRLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR3ZQLE1BQU0sQ0FBQzRELEtBQVAsS0FBaUI1RCxNQUFNLENBQUM0RCxLQUFQLEVBQWpCLEdBQWtDM0UsR0FBaEQ7VUFFQXVILE1BQU0sQ0FBQ2hILElBQVAsQ0FBWTtZQUNWK0UsT0FBTyxFQUFFZ0wsS0FBSyxHQUFHLHdDQUFSLEdBQW1EOUQsaUJBQWlCLENBQUNpRSxJQUFsQixDQUF1QixJQUF2QixDQURsRDtZQUVWeFAsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9zRyxNQUFQO0lBQ0Q7OztXQUVELGNBQU03SSxLQUFOLEVBQWFxQyxNQUFiLEVBQXFCZixHQUFyQixFQUEwQmlCLElBQTFCLEVBQWdDO01BQzlCLElBQU1zRyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJeEcsTUFBTSxDQUFDMk4sS0FBUCxFQUFKLEVBQW9CO1FBQ2xCLE9BQU9uSCxNQUFQO01BQ0Q7O01BRUQsSUFBSXhHLE1BQU0sQ0FBQzZELE1BQVAsQ0FBYyxLQUFkLENBQUosRUFBMEI7UUFDeEIsT0FBTzJDLE1BQVA7TUFDRDs7TUFFRCxJQUFJeEcsTUFBTSxDQUFDeEIsSUFBUCxFQUFKLEVBQW1CO1FBQ2pCLElBQU1tUCxLQUFLLEdBQUc7VUFDWmtELE1BQU0sRUFBRSxnQkFBQWxULEtBQUs7WUFBQSxPQUFJTyxRQUFRLENBQUNQLEtBQUQsQ0FBWjtVQUFBLENBREQ7VUFFWm1ULE1BQU0sRUFBRSxnQkFBQW5ULEtBQUs7WUFBQSxPQUFJRyxRQUFRLENBQUNILEtBQUQsQ0FBWjtVQUFBLENBRkQ7VUFHWm9ULE9BQU8sRUFBRSxpQkFBQXBULEtBQUs7WUFBQSxPQUFJSSxTQUFTLENBQUNKLEtBQUQsQ0FBYjtVQUFBLENBSEY7VUFJWixXQUFTLGlCQUFBQSxLQUFLO1lBQUEsT0FBSVEsU0FBUyxDQUFDUixLQUFELENBQWI7VUFBQSxDQUpGO1VBS1pxVCxLQUFLLEVBQUUsZUFBQXJULEtBQUs7WUFBQSxPQUFJUyxPQUFPLENBQUNULEtBQUQsQ0FBWDtVQUFBLENBTEE7VUFNWnNULE1BQU0sRUFBRSxnQkFBQXRULEtBQUs7WUFBQSxPQUFJVyxjQUFRLENBQUNYLEtBQUQsQ0FBWjtVQUFBLENBTkQ7VUFPWixRQUFNLGVBQUFBLEtBQUs7WUFBQSxPQUFJRCxNQUFNLENBQUNDLEtBQUQsQ0FBVjtVQUFBO1FBUEMsQ0FBZDtRQVVBLElBQU15UixLQUFLLEdBQUd6QixLQUFLLENBQUMzTixNQUFNLENBQUN4QixJQUFQLEVBQUQsQ0FBTCxDQUFxQmIsS0FBckIsQ0FBZDs7UUFFQSxJQUFJLENBQUN5UixLQUFMLEVBQVk7VUFDVixJQUFNRyxLQUFLLEdBQUd2UCxNQUFNLENBQUM0RCxLQUFQLEtBQWlCNUQsTUFBTSxDQUFDNEQsS0FBUCxFQUFqQixHQUFrQzNFLEdBQWhEO1VBRUF1SCxNQUFNLENBQUNoSCxJQUFQLENBQVk7WUFDVitFLE9BQU8sRUFBRWdMLEtBQUssR0FBRyxtQkFBUixHQUE4QnZQLE1BQU0sQ0FBQ3hCLElBQVAsRUFEN0I7WUFFVjBCLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPc0csTUFBUDtJQUNEOzs7V0FFRCxxQkFBYTdJLEtBQWIsRUFBb0JxQyxNQUFwQixFQUE0QmYsR0FBNUIsRUFBaUNpQixJQUFqQyxFQUF1QztNQUNyQyxJQUFNc0csTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXBJLE9BQU8sQ0FBQ1QsS0FBRCxDQUFQLElBQWtCcUMsTUFBTSxDQUFDK0QsV0FBUCxFQUF0QixFQUE0QztRQUMxQyxJQUFNbU4sSUFBSSxHQUFHLEVBQWI7UUFDQSxJQUFJQyxrQkFBa0IsR0FBRyxLQUF6Qjs7UUFFQSxLQUFLLElBQUl4RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaE8sS0FBSyxDQUFDbUIsTUFBMUIsRUFBa0M2TSxDQUFDLEVBQW5DLEVBQXVDO1VBQ3JDLElBQU10RCxJQUFJLEdBQUdsTCxJQUFJLENBQUNFLFNBQUwsQ0FBZU0sS0FBSyxDQUFDZ08sQ0FBRCxDQUFwQixDQUFiOztVQUNBLElBQUl1RixJQUFJLENBQUM3SSxJQUFELENBQVIsRUFBZ0I7WUFDZDhJLGtCQUFrQixHQUFHLElBQXJCO1lBQ0E7VUFDRDs7VUFDREQsSUFBSSxDQUFDN0ksSUFBRCxDQUFKLEdBQWEsSUFBYjtRQUNEOztRQUVELElBQU1vSCxPQUFPLEdBQUkwQixrQkFBakI7O1FBRUEsSUFBSTFCLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR3ZQLE1BQU0sQ0FBQzRELEtBQVAsS0FBaUI1RCxNQUFNLENBQUM0RCxLQUFQLEVBQWpCLEdBQWtDM0UsR0FBaEQ7VUFFQXVILE1BQU0sQ0FBQ2hILElBQVAsQ0FBWTtZQUNWK0UsT0FBTyxFQUFFZ0wsS0FBSyxHQUFHLHlCQURQO1lBRVZyUCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3NHLE1BQVA7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLHNCQUFjaEYsU0FBZCxFQUF5QjtNQUN2QixLQUFLME4sVUFBTCxDQUFnQjFQLElBQWhCLENBQXFCZ0MsU0FBckI7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLGtCQUFVN0QsS0FBVixFQUFpQnFDLE1BQWpCLEVBQXlCZixHQUF6QixFQUE4QmlCLElBQTlCLEVBQW9DO01BQUE7O01BQ2xDLElBQUlrUixZQUFZLEdBQUcsRUFBbkI7TUFFQSxLQUFLbEMsVUFBTCxDQUFnQnZQLE9BQWhCLENBQXdCLFVBQUM2QixTQUFELEVBQWU7UUFDckMsSUFBTTZQLGVBQWUsR0FBRyxNQUFJLENBQUM3UCxTQUFELENBQUosQ0FBZ0I3RCxLQUFoQixFQUF1QnFDLE1BQXZCLEVBQStCZixHQUEvQixFQUFvQ2lCLElBQXBDLENBQXhCOztRQUVBLElBQUltUixlQUFKLEVBQXFCO1VBQ25CRCxZQUFZLHlDQUFPQSxZQUFQLCtCQUF3QkMsZUFBeEIsRUFBWjtRQUNEO01BQ0YsQ0FORDs7TUFRQSxJQUFJRCxZQUFZLENBQUN0UyxNQUFiLEdBQXNCLENBQXRCLElBQTJCa0IsTUFBTSxDQUFDcUQsTUFBUCxDQUFjLFNBQWQsQ0FBL0IsRUFBeUQ7UUFDdkQrTixZQUFZLEdBQUcsQ0FDYjtVQUNFN00sT0FBTyxFQUFFdkUsTUFBTSxDQUFDcUQsTUFBUCxDQUFjLFNBQWQsQ0FEWDtVQUVFbkQsSUFBSSxFQUFFQTtRQUZSLENBRGEsQ0FBZjtNQU1EOztNQUVELE9BQU9rUixZQUFQO0lBQ0Q7Ozs7OztBQUdZbkMscUVBQWYsRTs7OztBQ3BuQkE7O0lBRU1xQyxvQjtFQUNKLHFCQUFlO0lBQUE7O0lBQ2IsS0FBS0MsVUFBTCxHQUFrQixDQUFsQjtJQUNBLEtBQUtDLElBQUwsR0FBWSxFQUFaO0VBQ0Q7Ozs7V0FFRCxxQkFBYXhSLE1BQWIsRUFBcUI7TUFDbkIsS0FBS3dSLElBQUwsR0FBWXhSLE1BQU0sQ0FBQyxPQUFELENBQWxCOztNQUVBLEtBQUssSUFBSTJMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzRGLFVBQXpCLEVBQXFDNUYsQ0FBQyxFQUF0QyxFQUEwQztRQUN4QyxLQUFLOEYsUUFBTCxDQUFjLEtBQUtELElBQW5CO1FBQ0EsS0FBS0MsUUFBTCxDQUFjelIsTUFBZDtNQUNEOztNQUVELE9BQU9BLE1BQVA7SUFDRDs7O1dBRUQsZ0JBQVEwUixHQUFSLEVBQWE7TUFDWCxJQUFJLENBQUN4VCxRQUFRLENBQUN3VCxHQUFELENBQWIsRUFBb0I7UUFDbEIsT0FBT0EsR0FBUDtNQUNEOztNQUVELElBQUlBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlLFNBQWYsQ0FBSixFQUErQjtRQUM3QixJQUFNQyxRQUFRLEdBQUdGLEdBQUcsQ0FBQzNRLEtBQUosQ0FBVSxHQUFWLENBQWpCO1FBQ0EsSUFBTThRLE9BQU8sR0FBR0QsUUFBUSxDQUFDNVEsR0FBVCxFQUFoQjs7UUFFQSxJQUFJcEQsS0FBSyxDQUFDLEtBQUs0VCxJQUFMLENBQVVLLE9BQVYsQ0FBRCxDQUFULEVBQStCO1VBQzdCLE9BQU8sS0FBS0wsSUFBTCxDQUFVSyxPQUFWLENBQVA7UUFDRDtNQUNGOztNQUVELE9BQU9ILEdBQVA7SUFDRDs7O1dBRUQsa0JBQVUvVCxLQUFWLEVBQWlCVCxLQUFqQixFQUF3QnFJLEtBQXhCLEVBQStCO01BQUE7O01BQzdCLElBQUlqSCxjQUFRLENBQUNYLEtBQUQsQ0FBWixFQUFxQjtRQUNuQixJQUFJQyxLQUFLLENBQUNELEtBQUssQ0FBQyxNQUFELENBQU4sQ0FBTCxJQUF3QkMsS0FBSyxDQUFDVixLQUFELENBQWpDLEVBQTBDO1VBQ3hDQSxLQUFLLENBQUNxSSxLQUFELENBQUwsR0FBZSxLQUFLdU0sTUFBTCxDQUFZblUsS0FBSyxDQUFDLE1BQUQsQ0FBakIsQ0FBZjtRQUNELENBRkQsTUFFTztVQUNMLEtBQUssSUFBTTRILE1BQVgsSUFBb0I1SCxLQUFwQixFQUEyQjtZQUN6QixJQUFJLENBQUN1QixNQUFNLENBQUMrQyxNQUFQLENBQWN0RSxLQUFkLEVBQXFCNEgsTUFBckIsQ0FBTCxFQUFrQztjQUNoQztZQUNEOztZQUVELEtBQUtrTSxRQUFMLENBQWM5VCxLQUFLLENBQUM0SCxNQUFELENBQW5CLEVBQTRCNUgsS0FBNUIsRUFBbUM0SCxNQUFuQztVQUNEO1FBQ0Y7TUFDRjs7TUFFRCxJQUFJbkgsT0FBTyxDQUFDVCxLQUFELENBQVgsRUFBb0I7UUFDbEJBLEtBQUssQ0FBQ2dDLE9BQU4sQ0FBYyxVQUFDMEksSUFBRCxFQUFPOUMsS0FBUCxFQUFpQjtVQUM3QixLQUFJLENBQUNrTSxRQUFMLENBQWNwSixJQUFkLEVBQW9CMUssS0FBcEIsRUFBMkI0SCxLQUEzQjtRQUNELENBRkQ7TUFHRDtJQUNGOzs7Ozs7QUFHWStMLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTXBCLFE7Ozs7O0VBQ0osY0FBYXhQLE9BQWIsRUFBc0I7SUFBQTs7SUFBQTs7SUFDcEI7SUFDQSxNQUFLQSxPQUFMLEdBQWV4QixNQUFNLENBQUNDLE1BQVAsQ0FBYztNQUMzQnlDLFNBQVMsRUFBRSxJQURnQjtNQUUzQmpCLFFBQVEsRUFBRSxLQUZpQjtNQUczQmlLLGtCQUFrQixFQUFFLEtBSE87TUFJM0JtSCxnQkFBZ0IsRUFBRSxLQUpTO01BSzNCekcsZ0JBQWdCLEVBQUUsS0FMUztNQU0zQnRMLE1BQU0sRUFBRSxFQU5tQjtNQU8zQjZCLEtBQUssRUFBRTtJQVBvQixDQUFkLEVBUVpuQixPQVJZLENBQWY7SUFVQSxNQUFLa0IsU0FBTCxHQUFpQnNDLFFBQVEsQ0FBQzhOLGFBQVQsQ0FBdUJ0UixPQUFPLENBQUNrQixTQUEvQixDQUFqQjtJQUNBLE1BQUtrTCxPQUFMLEdBQWUsRUFBZjtJQUNBLE1BQUttRixJQUFMLEdBQVksSUFBWjtJQUNBLE1BQUtwUSxLQUFMLEdBQWEsSUFBYjtJQUNBLE1BQUt4QyxTQUFMLEdBQWlCLEVBQWpCO0lBQ0EsTUFBS3lQLFFBQUwsR0FBZ0IsSUFBSUwsaUJBQUosRUFBaEI7SUFDQSxNQUFLak4sU0FBTCxHQUFpQixJQUFJeU4sYUFBSixFQUFqQjtJQUNBLE1BQUtpRCxTQUFMLEdBQWlCLElBQUlaLFVBQUosRUFBakI7SUFDQSxNQUFLdFIsTUFBTCxHQUFjLElBQUlrQyxVQUFKLENBQVd4QixPQUFPLENBQUNWLE1BQW5CLENBQWQ7SUFDQSxNQUFLd0csTUFBTCxHQUFjLEVBQWQ7O0lBQ0EsTUFBS2xHLElBQUw7O0lBdEJvQjtFQXVCckI7Ozs7V0FFRCxnQkFBUTtNQUFBOztNQUNOLEtBQUs0UixTQUFMLENBQWVDLFdBQWYsQ0FBMkIsS0FBS25TLE1BQUwsQ0FBWUEsTUFBdkM7TUFFQSxLQUFLaVMsSUFBTCxHQUFZLEtBQUt0SyxZQUFMLENBQWtCO1FBQzVCNUgsSUFBSSxFQUFFLElBRHNCO1FBRTVCQyxNQUFNLEVBQUUsS0FBS0E7TUFGZSxDQUFsQixDQUFaOztNQUtBLElBQUksS0FBS1UsT0FBTCxDQUFheVAsUUFBakIsRUFBMkI7UUFDekIsS0FBSzhCLElBQUwsQ0FBVTVLLFFBQVYsQ0FBbUIsS0FBSzNHLE9BQUwsQ0FBYXlQLFFBQWhDO01BQ0Q7O01BRUQsSUFBSSxLQUFLelAsT0FBTCxDQUFhQyxRQUFiLElBQXlCLEtBQUtpQixTQUFsQyxFQUE2QztRQUMzQyxLQUFLd1EsaUJBQUw7UUFDQSxLQUFLeFEsU0FBTCxDQUFlNkQsV0FBZixDQUEyQixLQUFLd00sSUFBTCxDQUFVNVIsRUFBVixDQUFhdUIsU0FBeEM7UUFDQSxLQUFLQSxTQUFMLENBQWV3QyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixZQUE3QjtNQUNEOztNQUVELEtBQUs0TixJQUFMLENBQVVwUixFQUFWLENBQWEsUUFBYixFQUF1QixZQUFNO1FBQzNCLE1BQUksQ0FBQ1UsSUFBTCxDQUFVLFFBQVY7TUFDRCxDQUZEO01BSUErSCxPQUFPLENBQUMrSSxLQUFSLENBQWMsS0FBS3ZGLE9BQW5CO0lBQ0Q7OztXQUVELDZCQUFxQjtNQUFBOztNQUNuQixLQUFLd0YsV0FBTCxHQUFtQixLQUFLTCxJQUFMLENBQVU1UixFQUFWLENBQWF3QixLQUFiLENBQW1CZ0osUUFBbkIsQ0FBNEI7UUFDN0NyTSxJQUFJLEVBQUUsUUFEdUM7UUFFN0N5RyxFQUFFLEVBQUU7TUFGeUMsQ0FBNUIsQ0FBbkI7TUFLQSxLQUFLcU4sV0FBTCxDQUFpQjNOLFlBQWpCLENBQThCLE1BQTlCLEVBQXNDLE1BQXRDO01BRUEsS0FBSy9DLFNBQUwsQ0FBZTZELFdBQWYsQ0FBMkIsS0FBSzZNLFdBQWhDO01BQ0EsS0FBS0EsV0FBTCxDQUFpQjNVLEtBQWpCLEdBQXlCUixJQUFJLENBQUNFLFNBQUwsQ0FBZSxLQUFLcUUsUUFBTCxFQUFmLENBQXpCO01BRUEsS0FBS2IsRUFBTCxDQUFRLFFBQVIsRUFBa0IsWUFBTTtRQUN0QixNQUFJLENBQUN5UixXQUFMLENBQWlCM1UsS0FBakIsR0FBeUJSLElBQUksQ0FBQ0UsU0FBTCxDQUFlLE1BQUksQ0FBQ3FFLFFBQUwsRUFBZixDQUF6QjtNQUNELENBRkQ7SUFHRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLHdCQUFnQmlILE1BQWhCLEVBQXdCO01BQ3RCLEtBQUttRSxPQUFMLENBQWFuRSxNQUFNLENBQUN6SSxJQUFwQixJQUE0QnlJLE1BQTVCO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSwwQkFBa0JBLE1BQWxCLEVBQTBCO01BQ3hCLEtBQUttRSxPQUFMLENBQWFuRSxNQUFNLENBQUN6SSxJQUFwQixJQUE0QixJQUE1QjtNQUNBLE9BQU8sS0FBSzRNLE9BQUwsQ0FBYW5FLE1BQU0sQ0FBQ3pJLElBQXBCLENBQVA7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLHNCQUFjSixNQUFkLEVBQXNCO01BQ3BCLE9BQU8sS0FBS2dQLFFBQUwsQ0FBY0QsT0FBZCxDQUFzQi9PLE1BQXRCLENBQVA7SUFDRDs7O1dBRUQsb0JBQVk7TUFDVixPQUFPLEtBQUttUyxJQUFMLENBQVV2USxRQUFWLEVBQVA7SUFDRDs7O1dBRUQsb0JBQVk7TUFBQTs7TUFDVixPQUFPLG1CQUFLdVEsSUFBTCxFQUFVNUssUUFBVixtQkFBc0JrTCxTQUF0QixDQUFQO0lBQ0Q7OztXQUVELG1CQUFXclMsSUFBWCxFQUFpQjtNQUNmLE9BQU8sS0FBSzRNLE9BQUwsQ0FBYTVNLElBQWIsQ0FBUDtJQUNEOzs7V0FFRCxtQkFBVztNQUNULEtBQUsrUixJQUFMLENBQVU1UixFQUFWLENBQWE2SSxPQUFiO0lBQ0Q7OztXQUVELGtCQUFVO01BQ1IsS0FBSytJLElBQUwsQ0FBVTVSLEVBQVYsQ0FBYThJLE1BQWI7SUFDRDs7O1dBRUQsb0JBQVk7TUFBQTs7TUFDVixLQUFLM0MsTUFBTCxHQUFjLEVBQWQ7TUFFQXRILE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLEtBQUtrTixPQUFqQixFQUEwQm5OLE9BQTFCLENBQWtDLFVBQUNWLEdBQUQsRUFBUztRQUN6QyxJQUFNMEosTUFBTSxHQUFHLE1BQUksQ0FBQ21FLE9BQUwsQ0FBYTdOLEdBQWIsQ0FBZjtRQUNBLE1BQUksQ0FBQ3VILE1BQUwseUNBQWtCLE1BQUksQ0FBQ0EsTUFBdkIsK0JBQWtDbUMsTUFBTSxDQUFDbEgsUUFBUCxFQUFsQztNQUNELENBSEQ7TUFLQSxPQUFPLEtBQUsrRSxNQUFaO0lBQ0Q7OztXQUVELGlCQUFTO01BQ1AsS0FBSzlGLE9BQUwsQ0FBYXlQLFFBQWIsR0FBd0IsS0FBS3pPLFFBQUwsRUFBeEI7TUFDQSxLQUFLRSxTQUFMLENBQWU2RSxTQUFmLEdBQTJCLEVBQTNCO01BQ0EsS0FBS3dMLElBQUwsQ0FBVWpRLE9BQVY7TUFDQSxLQUFLMUIsSUFBTDtJQUNEOzs7V0FFRCxrQkFBVXVCLEtBQVYsRUFBaUI7TUFDZixLQUFLbkIsT0FBTCxDQUFhbUIsS0FBYixHQUFxQkEsS0FBckI7TUFDQSxLQUFLMlEsS0FBTDtJQUNEOzs7V0FFRCxtQkFBVztNQUFBOztNQUNULEtBQUtQLElBQUwsQ0FBVWpRLE9BQVY7TUFFQSxLQUFLSixTQUFMLENBQWU2RSxTQUFmLEdBQTJCLEVBQTNCO01BRUF2SCxNQUFNLENBQUNVLElBQVAsQ0FBWSxJQUFaLEVBQWtCRCxPQUFsQixDQUEwQixVQUFDVixHQUFELEVBQVM7UUFDakMsT0FBTyxNQUFJLENBQUNBLEdBQUQsQ0FBWDtNQUNELENBRkQ7SUFHRDs7OztFQTVJZ0JHLGE7O0FBK0lKOFEsaUZBQWYsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcbiIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCdcblxuZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpICE9PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2ludGVnZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCB1dWlkdjQgPSAoKSA9PiB7XG4gIHJldHVybiB2NCgpXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8ICdyb290J1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuICAgIHRoaXMudWkgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGJ1aWxkIHBpcGVsaW5lIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZEVkaXRvckNoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogSWYgc2NoZW1hLmRlZmF1bHQgaXMgbm90IGRlZmluZWQsIHNldHMgYW4gaW5pdGlhbCB2YWx1ZSBiYXNlZCBvbiBpdCdzIHR5cGUuXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgdmFsdWVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVkaXRvciB2YWx1ZSBhbmQgY2FsbHMgcmVmcmVzaFVJIHJpZ2h0IGFmdGVyLiBUaGUgb25DaGFuZ2UgbWV0aG9kXG4gICAqIHdpbGwgYmUgY2FsbGVkIHVubGVzcyB0cmlnZ2Vyc0NoYW5nZSBpcyBleHBsaWNpdGx5IHNldCB0byBmYWxzZS4gVGhpcyBpc1xuICAgKiB1c2VmdWwgZm9yIGluaXRpYWwgb3IgZGVmYXVsdCB2YWx1ZXMuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiBhIGNoaWxkIGVkaXRvciBjaGFuZ2VzLiBUaGlzIGlzIHJlbGV2YW50IGZvciBBcnJheVxuICAgKiBhbmQgT2JqZWN0IGVkaXRvcnMuXG4gICAqL1xuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgfVxuXG4gIHZhbGlkYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldENvbnRhaW5lcigpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3IsIGFuZCBldmVyeSByZWZlcmVuY2UgdGhhdCBpdCBpcyBhdHRhY2hlZCB0byBpdC5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAoIU9iamVjdC5oYXNPd24odGhpcywga2V5KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogZmFsc2VcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IGZhbHNlXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0ID8gdGhpcy5zY2hlbWEuY29uc3QgOiBmYWxzZVxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0ID8gdGhpcy5zY2hlbWEuZGVmYXVsdCA6IGZhbHNlXG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogZmFsc2VcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiBmYWxzZVxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpID8gdGhpcy5zY2hlbWEuZWxzZSA6IGZhbHNlXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybWF0KCkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSA/IHRoaXMuc2NoZW1hLmlmIDogZmFsc2VcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWF4UHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSA/IHRoaXMuc2NoZW1hLm5vdCA6IGZhbHNlXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0eSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogZmFsc2VcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiBmYWxzZVxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IGZhbHNlXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMudHlwZSgpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVzICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiBmYWxzZVxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgc2VyaWFsaXplICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAoIU9iamVjdC5oYXNPd24odGhpcywga2V5KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGFjdGlvbnNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhY3Rpb25zU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGFjdGlvbnNTbG90XG4gIH1cblxuICBnZXRDaGlsZEVkaXRvcnNTbG90ICgpIHtcbiAgICBjb25zdCBjaGlsZEVkaXRvcnNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGlsZEVkaXRvcnNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gY2hpbGRFZGl0b3JzU2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBtZXNzYWdlc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lc3NhZ2VzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBtZXNzYWdlc1Nsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZVdpcmVmcmFtZSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuLi90aGVtZXMvd2lyZWZyYW1lJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSB0aGlzLnRoZW1lLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRFZGl0b3JzU2xvdCgpXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgfSlcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgYnVpbGQgKCkge31cblxuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLnZhbGlkYXRlKClcblxuICAgIHRoaXMubWVzc2FnZXNTbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZXNTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0SW5wdXRFcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgIGlmICghT2JqZWN0Lmhhc093bih0aGlzLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCIvKiBnbG9iYWwgY29uZmlybSAqL1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBnZXRUeXBlLCBjbG9uZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nXG4gICAgfSlcblxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtcydcbiAgICB9KVxuXG4gICAgdGhpcy5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUFsbEJ0bilcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVtRWRpdG9yICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG4gICAgY29uc3QgaXRlbVNjaGVtYSA9IG5ldyBTY2hlbWEoc2NoZW1hKVxuXG4gICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuaW5zdGFuY2UuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5pbnN0YW5jZS5qZWRpLFxuICAgICAgc2NoZW1hOiBpdGVtU2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzLmluc3RhbmNlXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IuZ2V0S2V5KCkpXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgIH0pXG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICB9XG5cbiAgICBpdGVtRWRpdG9yLnVpLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWRpdG9yLnVpLmFjdGlvbnNTbG90KVxuICAgIGl0ZW1FZGl0b3IudWkuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgcmV0dXJuIGl0ZW1FZGl0b3JcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlJykpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGNoaWxkRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMgPSBbXVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKGl0ZW1WYWx1ZSlcbiAgICAgIGl0ZW1FZGl0b3Iuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRFZGl0b3JzLnB1c2goaXRlbUVkaXRvcilcblxuICAgICAgbGV0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZEJ1dHRvbnMgPSBBcnJheS5mcm9tKGNoaWxkRWRpdG9yLnVpLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSlcbiAgICAgICAgYnV0dG9ucyA9IGJ1dHRvbnMuY29uY2F0KGNoaWxkQnV0dG9ucylcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGl0ZW1FZGl0b3IudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbUVkaXRvci51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoZWRpdG9yLnVpLmNvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRkQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIGNoaWxkRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4uL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBnZXRUeXBlLCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBjcmVhdGVJdGVtRWRpdG9yICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG5cbiAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKCcuLi4uLicsIGVkaXRvcilcblxuICAgIHJldHVybiBlZGl0b3JcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGNoaWxkRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIGNoaWxkRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIC8vIGFkZEJ0blxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSkge1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0eSBOYW1lJyxcbiAgICAgICAgZm9yOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgICAgY29uc3QgYWRkQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICAgIH0pXG5cbiAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gaW5wdXQudmFsdWVcblxuICAgICAgICAvLyBpZiBub3QgcHJvcGVydHkgbmFtZSB3YXMgZ2l2ZW4gcmV0dXJuXG4gICAgICAgIGlmIChrZXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBwcm9wZXJ0eSBleGlzdCByZXR1cm5cbiAgICAgICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuYWRkQ2hpbGRFZGl0b3IoeyB0eXBlOiAnYW55JyB9LCBrZXkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgfSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIH1cbiAgfVxuXG4gIGFkZENoaWxkRWRpdG9yIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2UuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5pbnN0YW5jZS5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5zdGFuY2VcbiAgICB9KVxuXG4gICAgLy8gcmVtb3ZlQnRuXG4gICAgY29uc3Qgbm90UmVxdWlyZWQgPSAhdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGtleSlcbiAgICBjb25zdCBub3REZXBlbmRlbnRSZXF1aXJlZCA9ICF0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IGVkaXRhYmxlUHJvcGVydGllcyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpXG5cbiAgICBpZiAobm90UmVxdWlyZWQgJiYgbm90RGVwZW5kZW50UmVxdWlyZWQgJiYgZWRpdGFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICBjb25zdCByZW1vdmVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnUmVtb3ZlIHByb3BlcnR5J1xuICAgICAgfSlcbiAgICAgIGVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKVxuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgdGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldID0gZWRpdG9yLmdldFZhbHVlKClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIU9iamVjdC5oYXNPd24odmFsdWUsIGtleSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGRFZGl0b3IgPSB0aGlzLmluc3RhbmNlLmdldENoaWxkRWRpdG9yKGtleSlcblxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LmFwcGVuZENoaWxkKGNoaWxkRWRpdG9yLnVpLmNvbnRhaW5lcilcblxuICAgICAgaWYgKGNoaWxkRWRpdG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3IudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3IudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgY2hpbGRFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4uL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBlcXVhbCwgaXNTZXQsIGdldFR5cGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICAvLyBjaGlsZCBlZGl0b3JzXG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICAgIGlmICghT2JqZWN0Lmhhc093bih0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCksIGtleSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvd1JlcXVpcmVkT25seSA9IHRoaXMuamVkaS5vcHRpb25zLnNob3dSZXF1aXJlZE9ubHkgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdzaG93UmVxdWlyZWRPbmx5JylcbiAgICAgICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLnNjaGVtYS5yZXF1aXJlZCgpIHx8ICF0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKGtleSlcblxuICAgICAgICBpZiAoc2hvd1JlcXVpcmVkT25seSAmJiBpc05vdFJlcXVpcmVkKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnR5KGtleSlcbiAgICAgICAgdGhpcy5hZGRDaGlsZEVkaXRvcihzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgZGVwZW5kZW50IHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpIHtcbiAgICAgICAgaWYgKCFPYmplY3QuaGFzT3duKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSwga2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKGtleSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0eShrZXkpXG4gICAgICAgICAgdGhpcy5hZGRDaGlsZEVkaXRvcihzY2hlbWEsIGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoZGVwZW5kZW50UmVxdWlyZWQpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgYWRkQ2hpbGRFZGl0b3IgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBlZGl0b3IuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVsZXRlQ2hpbGRFZGl0b3IgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5jaGlsZEVkaXRvcnNbaV1cbiAgICAgIGlmIChlZGl0b3IuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnNwbGljZShpLCAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB2YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV0gPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBnZXRDaGlsZEVkaXRvciAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFZGl0b3JzLmZpbmQoKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBjaGlsZEVkaXRvci5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5jaGlsZEVkaXRvcnNbaV1cbiAgICAgIGNvbnN0IGtleSA9IGVkaXRvci5nZXRLZXkoKVxuICAgICAgaWYgKCFpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkRWRpdG9yKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKCFPYmplY3QuaGFzT3duKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkRWRpdG9yID0gdGhpcy5nZXRDaGlsZEVkaXRvcihrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGVkaXRvclxuICAgICAgaWYgKGNoaWxkRWRpdG9yKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkRWRpdG9yLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKCFlcXVhbChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3Iuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGVkaXRvciBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZENoaWxkRWRpdG9yKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICBjaGlsZEVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgdGhpcy5zY2hlbWEuZW51bSgpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIHN3aXRjaGVyIGJ1dHRvbnNcbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIHRoaXMuc3dpdGNoZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gYnV0dG9uXG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHZhbHVlOiBpbmRleFxuICAgICAgfSlcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihidXR0b24udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsICdtdWx0aXBsZScpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0cnVlXG4gICAgfSkpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IG9sZEVkaXRvciA9IHRoaXMuaW5zdGFuY2UuZWRpdG9yc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRFZGl0b3IudWkuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZEVkaXRvci51aS5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuY29udGFpbmVyKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmRpc2FibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmVuYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoKE51bWJlcihidXR0b24udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5pbmRleCkpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4uL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCwgZXF1YWwsIG1lcmdlRGVlcCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmVkaXRvcnMgPSBbXVxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuYW55T2YoKSB8fCB0aGlzLnNjaGVtYS5vbmVPZigpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSB0aGlzLnNjaGVtYS5hbnlPZigpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKHNjaGVtYS5hbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlcygpKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlKCkuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ0FycmF5JywgJ09iamVjdCcsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEVkaXRvcnNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBlZGl0b3IudW5yZWdpc3RlcigpXG5cbiAgICAgIGVkaXRvci5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmVkaXRvcnNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEVkaXRvcigwLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hFZGl0b3IgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IHRoaXMuZWRpdG9yc1t0aGlzLmluZGV4XVxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3IuZ2V0VmFsdWUoKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRWRpdG9yLnNhbml0aXplKHZhbHVlKVxuICB9XG5cbiAgbWF0Y2hFZGl0b3IgKHZhbHVlLCBlZGl0b3JzKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgZm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuICAgICAgaWYgKGVkaXRvci5lZGl0b3JzKSB7XG4gICAgICAgIGVkaXRvci5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVxdWFsKGVkaXRvci5zYW5pdGl6ZSh2YWx1ZSksIHZhbHVlKSkge1xuICAgICAgICB0aGlzLnN3aXRjaEVkaXRvcihpbmRleClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlICh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGVkaXRvciB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGVkaXRvciB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoIWVxdWFsKHRoaXMuYWN0aXZlRWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICB0aGlzLm1hdGNoRWRpdG9yKHZhbHVlLCB0aGlzLmVkaXRvcnMpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVFZGl0b3Iuc2V0VmFsdWUodmFsdWUsIHRyaWdnZXJzQ2hhbmdlKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5lZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4uL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgdGhpcy5zY2hlbWEuZW51bSgpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsSW5zdGFuY2VcbiIsImltcG9ydCB7IGlzU2V0LCBnZXRUeXBlIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vdHlwZXMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vdHlwZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL3R5cGVzL29iamVjdCdcbmltcG9ydCBTdHJpbmdJbnN0YW5jZSBmcm9tICcuL3R5cGVzL3N0cmluZydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vdHlwZXMvbXVsdGlwbGUnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi90eXBlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vdHlwZXMvbnVsbCdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5cbmNsYXNzIEluc3RhbmNlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLmFueU9mKCkgfHwgc2NoZW1hLm9uZU9mKCkgfHwgc2NoZW1hLnR5cGVJcygnYW55JykgfHwgc2NoZW1hLnR5cGVzKCkgfHwgIXNjaGVtYS50eXBlKCkpIHtcbiAgICAgICAgICBpZiAoIXNjaGVtYS50eXBlKCkgJiYgc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBzY2hlbWEuY2xvbmUoKVxuICAgICAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKG5ld1NjaGVtYSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSByZXNvbHZlciBmdW5jdGlvblxuICAgKi9cbiAgYWRkUmVzb2x2ZXIgKHJlc29sdmVyKSB7XG4gICAgdGhpcy5yZXNvbHZlcnMudW5zaGlmdChyZXNvbHZlcilcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBmaXJzdCBlZGl0b3IgY2xhc3MgdGhhdCBtYXRjaGVzIHRoZSBwYXNzZWQgc2NoZW1hLlxuICAgKi9cbiAgcmVzb2x2ZSAoY29uZmlnKSB7XG4gICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgY29uc3QgZWRpdG9yQ2xhc3MgPSByZXNvbHZlcihjb25maWcuc2NoZW1hLCBjb25maWcpXG4gICAgICBpZiAoaXNTZXQoZWRpdG9yQ2xhc3MpKSB7XG4gICAgICAgIHJldHVybiBlZGl0b3JDbGFzc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVJlc29sdmVyXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IFtcbiAgICAgICdhbGxPZicsXG4gICAgICAnYW55T2YnLFxuICAgICAgJ29uZU9mJyxcbiAgICAgICdkZXBlbmRlbnRSZXF1aXJlZCcsXG4gICAgICAnZm9ybWF0JyxcbiAgICAgICdpZicsXG4gICAgICAnY29uc3QnLFxuICAgICAgJ25vdCcsXG4gICAgICAndHlwZScsXG4gICAgICAndW5pcXVlSXRlbXMnLFxuICAgICAgJ2V4Y2x1c2l2ZU1heGltdW0nLFxuICAgICAgJ2V4Y2x1c2l2ZU1pbmltdW0nLFxuICAgICAgJ21pbkl0ZW1zJyxcbiAgICAgICdtYXhJdGVtcycsXG4gICAgICAnbWluTGVuZ3RoJyxcbiAgICAgICdtYXhMZW5ndGgnLFxuICAgICAgJ21pbmltdW0nLFxuICAgICAgJ21heGltdW0nLFxuICAgICAgJ211bHRpcGxlT2YnLFxuICAgICAgJ3BhdHRlcm4nLFxuICAgICAgJ3BhdHRlcm5Qcm9wZXJ0aWVzJyxcbiAgICAgICdlbnVtJyxcbiAgICAgICdyZXF1aXJlZCcsXG4gICAgICAnbWluUHJvcGVydGllcycsXG4gICAgICAnbWF4UHJvcGVydGllcydcbiAgICBdXG4gIH1cblxuICBhbGxPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmFsbE9mKCkpIHtcbiAgICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBhbGxPZkVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hbGxPZkVycm9yc11cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgYW55T2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmFueU9mKCkpIHtcbiAgICAgIGNvbnN0IHZhbGlkID0gc2NoZW1hLmFueU9mKCkuc29tZSgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG4gICAgICAgIHJldHVybiBhbnlPZkVycm9ycy5sZW5ndGggPT09IDBcbiAgICAgIH0pXG5cbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGNvbnN0ICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5jb25zdCgpKSB7XG4gICAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIHZhbHVlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZW51bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuZW51bSgpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYS5lbnVtKCkuc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmVudW0oKSksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpIC0gMSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gKHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkgKyAxKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGZvcm1hdCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0KCkpIHtcbiAgICAgIGxldCBpbnZhbGlkID0gZmFsc2VcblxuICAgICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgICAgICBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5pZigpKSB7XG4gICAgICBpZiAoIXNjaGVtYS50aGVuKCkgfHwgIXNjaGVtYS5lbHNlKCkpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnR2YWw6IHZhbHVlIH0pXG4gICAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcblxuICAgICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0dmFsOiB2YWx1ZSB9KVxuICAgICAgICBlcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnR2YWw6IHZhbHVlIH0pXG4gICAgICAgIGVycm9ycyA9IGVsc2VFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heGltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5tYXhpbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4SXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1heEl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heExlbmd0aCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1heExlbmd0aCgpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4UHJvcGVydGllcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLm1heFByb3BlcnRpZXMoKSkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluaW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1pbmltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pbkl0ZW1zICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS5taW5JdGVtcygpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluTGVuZ3RoICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWluTGVuZ3RoKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluUHJvcGVydGllcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMoKSkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG11bHRpcGxlT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5tdWx0aXBsZU9mKCkpIHtcbiAgICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZilcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBub3QgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLm5vdCgpKSB7XG4gICAgICBjb25zdCBub3RFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG9uZU9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5vbmVPZigpKSB7XG4gICAgICBsZXQgY291bnRlciA9IDBcblxuICAgICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBwYXR0ZXJuICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEucGF0dGVybigpKSB7XG4gICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG4gICAgICAgICAgICBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eU5hbWVcblxuICAgICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgICAgc3RhcnR2YWw6IHZhbHVlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcmVxdWlyZWQgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5yZXF1aXJlZCgpKSB7XG4gICAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgdHlwZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEudHlwZXMoKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG5cbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS51bmlxdWVJdGVtcygpKSB7XG4gICAgICBjb25zdCBzZWVuID0ge31cbiAgICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB2YWxpZGF0b3IgZnVuY3Rpb25cbiAgICovXG4gIGFkZFZhbGlkYXRvciAodmFsaWRhdG9yKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzLnB1c2godmFsaWRhdG9yKVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKCh2YWxpZGF0b3IpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHRoaXNbdmFsaWRhdG9yXSh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hLm9wdGlvbignbWVzc2FnZScpKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLml0ZXJhdGlvbnMgPSA1XG4gICAgdGhpcy5kZWZzID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICB0aGlzLmRlZnMgPSBzY2hlbWFbJyRkZWZzJ11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIHRoaXMudHJhdmVyc2UodGhpcy5kZWZzKVxuICAgICAgdGhpcy50cmF2ZXJzZShzY2hlbWEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMvJGRlZnMnKSkge1xuICAgICAgY29uc3QgcmVmUGFydHMgPSByZWYuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZGVmTmFtZSA9IHJlZlBhcnRzLnBvcCgpXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZnNbZGVmTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZnNbZGVmTmFtZV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICB0cmF2ZXJzZSAodmFsdWUsIHRoaW5nLCBpbmRleCkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVsnJHJlZiddKSAmJiBpc1NldCh0aGluZykpIHtcbiAgICAgICAgdGhpbmdbaW5kZXhdID0gdGhpcy5kZWZpbmUodmFsdWVbJyRyZWYnXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4gdmFsdWUpIHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5oYXNPd24odmFsdWUsIGluZGV4KSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnRyYXZlcnNlKHZhbHVlW2luZGV4XSwgdmFsdWUsIGluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGl0ZW0sIHZhbHVlLCBpbmRleClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IEluc3RhbmNlUmVzb2x2ZXIgZnJvbSAnLi9pbnN0YW5jZS1yZXNvbHZlcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdG9yJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcblxuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICd3aXJlZnJhbWUnXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lcilcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IEluc3RhbmNlUmVzb2x2ZXIoKVxuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKClcbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEob3B0aW9ucy5zY2hlbWEpXG4gICAgdGhpcy5lcnJvcnMgPSBbXVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLnNjaGVtYS5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0dmFsKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0dmFsKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG5cbiAgICBjb25zb2xlLnRhYmxlKHRoaXMuZWRpdG9ycylcbiAgfVxuXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlZGl0b3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIHBhc3NlZCBzY2hlbWEgYW5kIGNvbmZpZ1xuICAgKi9cbiAgY3JlYXRlRWRpdG9yIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlci5yZXNvbHZlKGNvbmZpZylcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIGdldEVkaXRvciAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvcnNbcGF0aF1cbiAgfVxuXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICB2YWxpZGF0ZSAoKSB7XG4gICAgdGhpcy5lcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5lZGl0b3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yc1trZXldXG4gICAgICB0aGlzLmVycm9ycyA9IFsuLi50aGlzLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLmVycm9yc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMub3B0aW9ucy5zdGFydHZhbCA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==