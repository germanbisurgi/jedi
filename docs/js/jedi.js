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

      if (triggersChange) {
        this.emit('change');
      }

      this.emit('set-value');
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
    key: "getPropertiesSlot",
    value: function getPropertiesSlot() {
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
    key: "getChildEditorsSlot",
    value: function getChildEditorsSlot() {
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
    _this.propertiesSlot = _this.theme.getPropertiesSlot();
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
      var itemEditor = this.instance.jedi.createInstance({
        jedi: this.instance.jedi,
        schema: itemSchema,
        path: this.instance.path + '.' + this.instance.children.length,
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

      if (this.instance.children.length !== 0) {
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
        _this3.childEditorsSlot.appendChild(child.ui.container);
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
      this.container.appendChild(this.propertiesSlot);
      this.container.appendChild(this.actionsSlot);
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.childEditorsSlot);
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
    key: "refreshProperties",
    value: function refreshProperties() {
      var _this2 = this;

      if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
        while (this.propertiesSlot.firstChild) {
          this.propertiesSlot.removeChild(this.propertiesSlot.lastChild);
        }

        this.instance.children.forEach(function (child) {
          var id = child.path + '-activator';

          var checkboxContainer = _this2.theme.getCheckboxContainer();

          var label = _this2.theme.getCheckboxLabel({
            "for": id,
            textContent: child.schema.title() ? child.schema.title() : child.getKey()
          });

          var checkbox = _this2.theme.getCheckbox({
            id: id
          });

          checkbox.checked = Object.hasOwn(_this2.instance.getValue(), child.getKey());

          var isRequired = _this2.instance.isRequired(child.getKey());

          var isDependentRequired = _this2.instance.isDependentRequired(child.getKey());

          var disabled = _this2.disabled;
          checkbox.disabled = isRequired || isDependentRequired || disabled;
          checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
              child.activate();
            } else {
              child.deactivate();
            }
          }); // appends

          _this2.propertiesSlot.appendChild(checkboxContainer);

          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
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

      while (this.childEditorsSlot.firstChild) {
        this.childEditorsSlot.removeChild(this.childEditorsSlot.lastChild);
      }

      var value = this.instance.getValue();
      Object.keys(value).forEach(function (key) {
        var child = _this3.instance.getChild(key);

        if (child.isActive) {
          _this3.childEditorsSlot.appendChild(child.ui.container);

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
      this.refreshProperties();
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
    value: function sanitize() {
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
   * returns the first editor class that matches the passed schema.
   */


  createClass_default()(InstanceResolver, [{
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
    value: function _if(value, schema) {
      var errors = [];

      if (schema["if"]()) {
        if (!schema.then() || !schema["else"]()) {
          return errors;
        }

        var ifEditor = new src({
          schema: schema["if"](),
          startValue: value
        });
        var ifErrors = ifEditor.validate();

        if (ifErrors.length === 0) {
          var thenEditor = new src({
            schema: schema.then(),
            startValue: value
          });
          errors = thenEditor.validate();
        } else {
          var elseEditor = new src({
            schema: schema["else"](),
            startValue: value
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
    value: function patternProperties(value, schema) {
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
    _this.instances = {};
    _this.root = null;
    _this.theme = null;
    _this.resolver = new instance_resolver();
    _this.validator = new src_validator();
    _this.refParser = new ref_parser();
    _this.schema = new src_schema(options.schema);
    _this.errors = [];

    _this.init();

    console.table(_this.instances);
    return _this;
  }

  createClass_default()(Jedi, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.refParser.dereference(this.schema.schema);
      this.root = this.createInstance({
        jedi: this,
        schema: this.schema
      });

      if (this.options.startValue) {
        this.root.setValue(this.options.startValue);
      }

      if (this.options.isEditor && this.container) {
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
      return this.resolver.resolve(config);
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
     * Returns a root child instance give it'S path
     * @return {*}
     */

  }, {
    key: "getEditor",
    value: function getEditor(path) {
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

      this.errors = [];
      Object.keys(this.instances).forEach(function (key) {
        var editor = _this4.instances[key];
        _this4.errors = [].concat(toConsumableArray_default()(_this4.errors), toConsumableArray_default()(editor.validate()));
      });
      return this.errors;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL3dpcmVmcmFtZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3R5cGVzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3R5cGVzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdHlwZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdHlwZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlLXJlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcXVhbCIsImEiLCJiIiwiZGlmZmVyZW50IiwiaXNOdWxsIiwidmFsdWUiLCJpc1NldCIsIm5vdFNldCIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwiTWF0aCIsImZsb29yIiwiaXNTdHJpbmciLCJpc0Jvb2xlYW4iLCJpc0FycmF5IiwiQXJyYXkiLCJpc09iamVjdCIsImdldFR5cGUiLCJ0eXBlIiwibWVyZ2VEZWVwIiwidGFyZ2V0Iiwic291cmNlcyIsImxlbmd0aCIsInNvdXJjZSIsInNoaWZ0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJhc3NpZ24iLCJFdmVudEVtaXR0ZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZmlsdGVyIiwibGlzdGVuZXIiLCJJbnN0YW5jZSIsImNvbmZpZyIsImplZGkiLCJzY2hlbWEiLCJ1bmRlZmluZWQiLCJpc0FjdGl2ZSIsInBhdGgiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInVpIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwicHJlcGFyZSIsIm9wdGlvbnMiLCJpc0VkaXRvciIsInNldFVJIiwib24iLCJvbkNoaWxkQ2hhbmdlIiwic3BsaXQiLCJwb3AiLCJ1bnJlZ2lzdGVyIiwiaW5jbHVkZXMiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwic2FuaXRpemUiLCJlbWl0IiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJnZXRWYWx1ZSIsImdldEtleSIsImNoaWxkIiwiZGVzdHJveSIsIlNjaGVtYSIsImFsbE9mIiwiYW55T2YiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZXhjbHVzaXZlTWF4aW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJmb3JtYXQiLCJpdGVtcyIsIm1heGltdW0iLCJtYXhJdGVtcyIsIm1heExlbmd0aCIsIm1heFByb3BlcnRpZXMiLCJtaW5pbXVtIiwibWluSXRlbXMiLCJtaW5MZW5ndGgiLCJtaW5Qcm9wZXJ0aWVzIiwibXVsdGlwbGVPZiIsIm5vdCIsIm9wdGlvbiIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZXF1aXJlZCIsIlNldCIsInRoZW4iLCJ0aXRsZSIsInR5cGVJcyIsIm9uZU9mIiwidW5pcXVlSXRlbXMiLCJUaGVtZUJhcmVib25lcyIsImVycm9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJtZXNzYWdlIiwic2xvdCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2VzU2xvdCIsImxhYmVsIiwic3JPbmx5IiwibGVnZW5kIiwiaW5wdXQiLCJpZCIsImNoZWNrYm94IiwicmFkaW8iLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvblZhbHVlcyIsImluZGV4Iiwib3B0aW9uc0xhYmVscyIsImFwcGVuZENoaWxkIiwiVGhlbWVXaXJlZnJhbWUiLCJidG5Hcm91cCIsImZpZWxkc2V0IiwiY2hlY2tib3hDb250YWluZXIiLCJFZGl0b3IiLCJpbnN0YW5jZSIsInRoZW1lIiwiZ2V0Q29udGFpbmVyIiwicHJvcGVydGllc1Nsb3QiLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsImFjdGlvbnNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJjaGlsZEVkaXRvcnNTbG90IiwiZ2V0Q2hpbGRFZGl0b3JzU2xvdCIsImRpc2FibGVkIiwiYnVpbGQiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwicmVmcmVzaFVJIiwicmVhZHkiLCJhbHdheXNTaG93RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJnZXRJbnB1dEVycm9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiQXJyYXlFZGl0b3IiLCJzZXRDb250YWluZXIiLCJnZXRCdG5Hcm91cCIsImFkZEJ0biIsImdldEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtIiwiZGVsZXRlQWxsQnRuIiwiY29uZmlybSIsInNldFZhbHVlIiwiZ2V0RmllbGRzZXQiLCJnZXRMZWdlbmQiLCJnZXREZXNjcmlwdGlvbiIsIml0ZW1TY2hlbWEiLCJpdGVtRWRpdG9yIiwiY3JlYXRlSW5zdGFuY2UiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJpdGVtVmFsdWUiLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJidXR0b25zIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGlsZEJ1dHRvbnMiLCJjb25jYXQiLCJkaXNhYmxlIiwiZW5hYmxlIiwicmVtb3ZlQXR0cmlidXRlIiwiQXJyYXlJbnN0YW5jZSIsInRlbXBFZGl0b3IiLCJjdXJyZW50VmFsdWUiLCJCb29sZWFuRWRpdG9yIiwiZ2V0Q2hlY2tib3hDb250YWluZXIiLCJnZXRDaGVja2JveExhYmVsIiwiZ2V0Q2hlY2tib3giLCJjaGVja2VkIiwiQm9vbGVhbiIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJyYWRpb0lucHV0cyIsImdldFJhZGlvTGVnZW5kIiwicmFkaW9Db250YWluZXIiLCJnZXRSYWRpb0NvbnRhaW5lciIsImdldFJhZGlvIiwicmFkaW9WYWx1ZSIsImdldExhYmVsIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3QiLCJCb29sZWFuSW5zdGFuY2UiLCJmb3JtYXRJcyIsIk9iamVjdEVkaXRvciIsImFkZFByb3BlcnR5SW5wdXQiLCJnZXRJbnB1dCIsImFkZFByb3BlcnR5QnRuIiwiY3JlYXRlQ2hpbGQiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiaGFzT3duIiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJnZXRDaGlsZCIsInJlZnJlc2hQcm9wZXJ0aWVzIiwicmVmcmVzaEVkaXRvcnMiLCJPYmplY3RJbnN0YW5jZSIsInByb3BlcnR5Iiwib25TZXRWYWx1ZSIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiaSIsImZpbmQiLCJwcm9wZXJ0eU5hbWUiLCJoYXNQcm9wZXJ0eSIsImRlbGV0ZUNoaWxkIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWEiLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiU3RyaW5nSW5zdGFuY2UiLCJTdHJpbmciLCJNdWx0aXBsZUVkaXRvciIsInN3aXRjaGVyQnV0dG9ucyIsInN3aXRjaGVyIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJzd2l0Y2hFZGl0b3IiLCJvbGRFZGl0b3IiLCJlZGl0b3JzIiwibGFzdEluZGV4IiwiYWN0aXZlRWRpdG9yIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJyZW1vdmUiLCJNdWx0aXBsZUluc3RhbmNlIiwic2NoZW1hcyIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0eXBlcyIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImVkaXRvciIsIm5ld0luZGV4IiwibWF0Y2hFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVySW5zdGFuY2UiLCJ0eXBlSXNOdW1lcmljIiwiTnVsbEVkaXRvciIsIk51bGxJbnN0YW5jZSIsIkluc3RhbmNlUmVzb2x2ZXIiLCJyZXNvbHZlcnMiLCJvcmlnaW5hbFNjaGVtYSIsIm5ld1NjaGVtYSIsInJlc29sdmUiLCJyZXNvbHZlciIsImVkaXRvckNsYXNzIiwiVmFsaWRhdG9yIiwidmFsaWRhdG9ycyIsImFsbE9mRXJyb3JzIiwidmFsaWQiLCJzb21lIiwiYW55T2ZFcnJvcnMiLCJmaWVsZCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImpvaW4iLCJlIiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwicmVnZXhwIiwiUmVnRXhwIiwidGVzdCIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJpZkVycm9ycyIsInRoZW5FZGl0b3IiLCJlbHNlRWRpdG9yIiwicHJvcGVydGllc0NvdW50IiwiaXNNdWx0aXBsZU9mIiwibm90RXJyb3JzIiwiY291bnRlciIsIm9uZU9mRXJyb3JzIiwic3RyaW5nIiwibnVtYmVyIiwiaW50ZWdlciIsImFycmF5Iiwib2JqZWN0Iiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsInNjaGVtYUVycm9ycyIsInZhbGlkYXRvckVycm9ycyIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJkZWZzIiwidHJhdmVyc2UiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVmUGFydHMiLCJkZWZOYW1lIiwiZGVmaW5lIiwic2hvd1JlcXVpcmVkT25seSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnN0YW5jZXMiLCJyb290IiwicmVmUGFyc2VyIiwiY29uc29sZSIsInRhYmxlIiwiZGVyZWZlcmVuY2UiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbklucHV0IiwiYXJndW1lbnRzIiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FB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O1FBQ0EsTUFBSSxDQUFDd0gsTUFBTCx5Q0FBa0IsTUFBSSxDQUFDQSxNQUF2QiwrQkFBa0MySCxNQUFNLENBQUM5TSxRQUFQLEVBQWxDO01BQ0QsQ0FIRDtNQUtBLE9BQU8sS0FBS21GLE1BQVo7SUFDRDs7O1dBRUQsaUJBQVM7TUFDUCxLQUFLakcsT0FBTCxDQUFhK1AsVUFBYixHQUEwQixLQUFLaFAsUUFBTCxFQUExQjtNQUNBLEtBQUs2QyxTQUFMLENBQWVzQyxTQUFmLEdBQTJCLEVBQTNCO01BQ0EsS0FBSzJMLElBQUwsQ0FBVTNRLE9BQVY7TUFDQSxLQUFLdEIsSUFBTDtJQUNEOzs7V0FFRCxrQkFBVXFGLEtBQVYsRUFBaUI7TUFDZixLQUFLakYsT0FBTCxDQUFhaUYsS0FBYixHQUFxQkEsS0FBckI7TUFDQSxLQUFLb04sS0FBTDtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsbUJBQVc7TUFBQTs7TUFDVCxLQUFLUixJQUFMLENBQVUzUSxPQUFWO01BRUEsS0FBSzBDLFNBQUwsQ0FBZXNDLFNBQWYsR0FBMkIsRUFBM0I7TUFFQTVILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLElBQVosRUFBa0JDLE9BQWxCLENBQTBCLFVBQUNDLEdBQUQsRUFBUztRQUNqQyxPQUFPLE1BQUksQ0FBQ0EsR0FBRCxDQUFYO01BQ0QsQ0FGRDtJQUdEOzs7O0VBdEtnQkUsYTs7QUF5S0ptUixpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuIiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcblxuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpICE9PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc0ludGVnZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdpbnRlZ2VyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8ICdyb290J1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgLy8gaWYgKHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgIC8vICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuc2FuaXRpemUobmV3VmFsdWUpXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IGZhbHNlXG4gIH1cblxuICBhbnlPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYW55T2YpID8gdGhpcy5zY2hlbWEuYW55T2YgOiBmYWxzZVxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdCA/IHRoaXMuc2NoZW1hLmNvbnN0IDogZmFsc2VcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdCA/IHRoaXMuc2NoZW1hLmRlZmF1bHQgOiBmYWxzZVxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IGZhbHNlXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogZmFsc2VcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiBmYWxzZVxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm1hdCgpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pZikgPyB0aGlzLnNjaGVtYS5pZiA6IGZhbHNlXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgPyB0aGlzLnNjaGVtYS5ub3QgOiBmYWxzZVxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydHkgKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldID8gdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldIDogZmFsc2VcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICByZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQpXSA6IGZhbHNlXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgPyB0aGlzLnNjaGVtYS50aGVuIDogZmFsc2VcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiBmYWxzZVxuICB9XG5cbiAgdHlwZSAoKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLnR5cGUoKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlcyAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSlcbiAgfVxuXG4gIHR5cGVJc051bWVyaWMgKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVJcygnbnVtYmVyJykgfHwgdGhpcy50eXBlSXMoJ2ludGVnZXInKVxuICB9XG5cbiAgb25lT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLm9uZU9mKSA/IHRoaXMuc2NoZW1hLm9uZU9mIDogZmFsc2VcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJjbGFzcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgcmV0dXJuIHNsb3RcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gc2xvdFxuICB9XG5cbiAgZ2V0Q2hpbGRFZGl0b3JzU2xvdCAoKSB7XG4gICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIHNsb3RcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgbWVzc2FnZXNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gbWVzc2FnZXNTbG90XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogYXV0bzsnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRJbnB1dCAoY29uZmlnKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVXaXJlZnJhbWUgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5saW5lJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV2lyZWZyYW1lXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgVGhlbWVXaXJlZnJhbWUgZnJvbSAnLi4vdGhlbWVzL3dpcmVmcmFtZSdcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVXaXJlZnJhbWUoKVxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDb250YWluZXIoKVxuICAgIHRoaXMucHJvcGVydGllc1Nsb3QgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90ID0gdGhpcy50aGVtZS5nZXRDaGlsZEVkaXRvcnNTbG90KClcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkucmVhZHkgfHwgdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICBidWlsZCAoKSB7fVxuXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UudmFsaWRhdGUoKVxuXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRJbnB1dEVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGNsb25lIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nXG4gICAgfSlcblxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtcydcbiAgICB9KVxuXG4gICAgdGhpcy5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUFsbEJ0bilcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuaXRlbXMoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLml0ZW1zKCkgOiB7IHR5cGU6IGdldFR5cGUodmFsdWUpIH1cbiAgICBjb25zdCBpdGVtU2NoZW1hID0gbmV3IFNjaGVtYShzY2hlbWEpXG5cbiAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5pbnN0YW5jZS5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuaW5zdGFuY2UuamVkaSxcbiAgICAgIHNjaGVtYTogaXRlbVNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzLmluc3RhbmNlXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IuZ2V0S2V5KCkpXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgIH0pXG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgIH1cblxuICAgIGl0ZW1FZGl0b3IudWkuY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FZGl0b3IudWkuYWN0aW9uc1Nsb3QpXG4gICAgaXRlbUVkaXRvci51aS5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICByZXR1cm4gaXRlbUVkaXRvclxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbiA9IFtdXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgY2hpbGQuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ucHVzaChjaGlsZClcblxuICAgICAgbGV0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkQnV0dG9ucyA9IEFycmF5LmZyb20oY2hpbGQudWkuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuICAgICAgICBidXR0b25zID0gYnV0dG9ucy5jb25jYXQoY2hpbGRCdXR0b25zKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuZGVsZXRlQWxsQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuZGVsZXRlQWxsQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4uL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBnZXRUeXBlLCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEuaXRlbXMoKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7IHR5cGU6IGdldFR5cGUodmFsdWUpIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGNoZWNrYm94IGNvbnRhaW5lclxuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QpXG5cbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0eSBOYW1lJyxcbiAgICAgIGZvcjogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlXG5cbiAgICAgIC8vIGlmIG5vdCBwcm9wZXJ0eSBuYW1lIHdhcyBnaXZlbiByZXR1cm5cbiAgICAgIGlmIChrZXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBpZiBwcm9wZXJ0eSBleGlzdCByZXR1cm5cbiAgICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHsgdHlwZTogJ2FueScgfSwga2V5KVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpKSB7XG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5SW5wdXQpXG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXMgKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSkge1xuICAgICAgd2hpbGUgKHRoaXMucHJvcGVydGllc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNTbG90LnJlbW92ZUNoaWxkKHRoaXMucHJvcGVydGllc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gY2hpbGQucGF0aCArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgICAgIGZvcjogaWQsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IGNoaWxkLnNjaGVtYS50aXRsZSgpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGhpcy50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICAgICAgaWQ6IGlkXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IE9iamVjdC5oYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSBpc1JlcXVpcmVkIHx8IGlzRGVwZW5kZW50UmVxdWlyZWQgfHwgZGlzYWJsZWRcblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZHNcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5nZXRDaGlsZChrZXkpXG5cbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hQcm9wZXJ0aWVzKClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucmVxdWlyZWQoKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGRlcGVuZGVudFJlcXVpcmVkKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGhhc1Byb3BlcnR5IChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpXG5cbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5pbmNsdWRlcyhwcm9wZXJ0eU5hbWUpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgdGhpcy5zY2hlbWEuZW51bSgpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIHN3aXRjaGVyIGJ1dHRvbnNcbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIHRoaXMuc3dpdGNoZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gYnV0dG9uXG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHZhbHVlOiBpbmRleFxuICAgICAgfSlcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihidXR0b24udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsICdtdWx0aXBsZScpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0cnVlXG4gICAgfSkpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IG9sZEVkaXRvciA9IHRoaXMuaW5zdGFuY2UuZWRpdG9yc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRFZGl0b3IudWkuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZEVkaXRvci51aS5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuY29udGFpbmVyKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmRpc2FibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmVuYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoKE51bWJlcihidXR0b24udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5pbmRleCkpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQsIGVxdWFsLCBkaWZmZXJlbnQsIG1lcmdlRGVlcCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmVkaXRvcnMgPSBbXVxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuYW55T2YoKSB8fCB0aGlzLnNjaGVtYS5vbmVPZigpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSB0aGlzLnNjaGVtYS5hbnlPZigpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKHNjaGVtYS5hbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlcygpKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlKCkuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ0FycmF5JywgJ09iamVjdCcsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEVkaXRvcnNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGVkaXRvci51bnJlZ2lzdGVyKClcblxuICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuZWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuZWRpdG9yc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKDAsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEVkaXRvciAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gdGhpcy5lZGl0b3JzW3RoaXMuaW5kZXhdXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUVkaXRvci5nZXRWYWx1ZSgpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpXG4gIH1cblxuICBtYXRjaEVkaXRvciAodmFsdWUsIGVkaXRvcnMpIHtcbiAgICBsZXQgaW5kZXggPSAwXG5cbiAgICBmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG4gICAgICBpZiAoZWRpdG9yLmVkaXRvcnMpIHtcbiAgICAgICAgZWRpdG9yLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoZXF1YWwoZWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUgKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgZWRpdG9yIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gZWRpdG9yIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgIHRoaXMubWF0Y2hFZGl0b3IodmFsdWUsIHRoaXMuZWRpdG9ycylcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsSW5zdGFuY2VcbiIsImltcG9ydCB7IGlzU2V0LCBnZXRUeXBlIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vdHlwZXMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vdHlwZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL3R5cGVzL29iamVjdCdcbmltcG9ydCBTdHJpbmdJbnN0YW5jZSBmcm9tICcuL3R5cGVzL3N0cmluZydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vdHlwZXMvbXVsdGlwbGUnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi90eXBlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vdHlwZXMvbnVsbCdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5cbmNsYXNzIEluc3RhbmNlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLmFueU9mKCkgfHwgc2NoZW1hLm9uZU9mKCkgfHwgc2NoZW1hLnR5cGVJcygnYW55JykgfHwgc2NoZW1hLnR5cGVzKCkgfHwgIXNjaGVtYS50eXBlKCkpIHtcbiAgICAgICAgICBpZiAoIXNjaGVtYS50eXBlKCkgJiYgc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBzY2hlbWEuY2xvbmUoKVxuICAgICAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKG5ld1NjaGVtYSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChjb25maWcpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKGNvbmZpZy5zY2hlbWEsIGNvbmZpZylcbiAgICAgIGlmIChpc1NldChlZGl0b3JDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlUmVzb2x2ZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgSmVkaSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gW1xuICAgICAgJ2FsbE9mJyxcbiAgICAgICdhbnlPZicsXG4gICAgICAnb25lT2YnLFxuICAgICAgJ2RlcGVuZGVudFJlcXVpcmVkJyxcbiAgICAgICdmb3JtYXQnLFxuICAgICAgJ2lmJyxcbiAgICAgICdjb25zdCcsXG4gICAgICAnbm90JyxcbiAgICAgICd0eXBlJyxcbiAgICAgICd1bmlxdWVJdGVtcycsXG4gICAgICAnZXhjbHVzaXZlTWF4aW11bScsXG4gICAgICAnZXhjbHVzaXZlTWluaW11bScsXG4gICAgICAnbWluSXRlbXMnLFxuICAgICAgJ21heEl0ZW1zJyxcbiAgICAgICdtaW5MZW5ndGgnLFxuICAgICAgJ21heExlbmd0aCcsXG4gICAgICAnbWluaW11bScsXG4gICAgICAnbWF4aW11bScsXG4gICAgICAnbXVsdGlwbGVPZicsXG4gICAgICAncGF0dGVybicsXG4gICAgICAncGF0dGVyblByb3BlcnRpZXMnLFxuICAgICAgJ2VudW0nLFxuICAgICAgJ3JlcXVpcmVkJyxcbiAgICAgICdtaW5Qcm9wZXJ0aWVzJyxcbiAgICAgICdtYXhQcm9wZXJ0aWVzJ1xuICAgIF1cbiAgfVxuXG4gIGFsbE9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbE9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFsbE9mRXJyb3JzXVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBhbnlPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuYW55T2YoKSkge1xuICAgICAgY29uc3QgdmFsaWQgPSBzY2hlbWEuYW55T2YoKS5zb21lKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgICAgcmV0dXJuIGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMFxuICAgICAgfSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBtdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgY29uc3QgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmNvbnN0KCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdmFsdWU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBlbnVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkgLSAxKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSArIDEpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZm9ybWF0ICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXQoKSkge1xuICAgICAgbGV0IGludmFsaWQgPSBmYWxzZVxuXG4gICAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICAgIGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAodmFsdWUsIHNjaGVtYSkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5pZigpKSB7XG4gICAgICBpZiAoIXNjaGVtYS50aGVuKCkgfHwgIXNjaGVtYS5lbHNlKCkpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuXG4gICAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICAgIGVycm9ycyA9IGVsc2VFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heGltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5tYXhpbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4SXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1heEl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heExlbmd0aCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1heExlbmd0aCgpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4UHJvcGVydGllcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLm1heFByb3BlcnRpZXMoKSkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluaW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1pbmltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pbkl0ZW1zICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS5taW5JdGVtcygpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluTGVuZ3RoICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWluTGVuZ3RoKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluUHJvcGVydGllcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMoKSkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG11bHRpcGxlT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5tdWx0aXBsZU9mKCkpIHtcbiAgICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZilcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBub3QgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLm5vdCgpKSB7XG4gICAgICBjb25zdCBub3RFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG9uZU9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5vbmVPZigpKSB7XG4gICAgICBsZXQgY291bnRlciA9IDBcblxuICAgICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBwYXR0ZXJuICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEucGF0dGVybigpKSB7XG4gICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAodmFsdWUsIHNjaGVtYSkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkge1xuICAgICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuICAgICAgICAgICAgc2NoZW1hLnRpdGxlID0gcHJvcGVydHlOYW1lXG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcmVxdWlyZWQgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5yZXF1aXJlZCgpKSB7XG4gICAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgdHlwZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEudHlwZXMoKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG5cbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS51bmlxdWVJdGVtcygpKSB7XG4gICAgICBjb25zdCBzZWVuID0ge31cbiAgICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKCh2YWxpZGF0b3IpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHRoaXNbdmFsaWRhdG9yXSh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hLm9wdGlvbignbWVzc2FnZScpKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLml0ZXJhdGlvbnMgPSA1XG4gICAgdGhpcy5kZWZzID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICB0aGlzLmRlZnMgPSBzY2hlbWFbJyRkZWZzJ11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIHRoaXMudHJhdmVyc2UodGhpcy5kZWZzKVxuICAgICAgdGhpcy50cmF2ZXJzZShzY2hlbWEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMvJGRlZnMnKSkge1xuICAgICAgY29uc3QgcmVmUGFydHMgPSByZWYuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZGVmTmFtZSA9IHJlZlBhcnRzLnBvcCgpXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZnNbZGVmTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZnNbZGVmTmFtZV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICB0cmF2ZXJzZSAodmFsdWUsIHRoaW5nLCBpbmRleCkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVsnJHJlZiddKSAmJiBpc1NldCh0aGluZykpIHtcbiAgICAgICAgdGhpbmdbaW5kZXhdID0gdGhpcy5kZWZpbmUodmFsdWVbJyRyZWYnXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudHJhdmVyc2UodmFsdWVbaW5kZXhdLCB2YWx1ZSwgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGl0ZW0sIHZhbHVlLCBpbmRleClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IEluc3RhbmNlUmVzb2x2ZXIgZnJvbSAnLi9pbnN0YW5jZS1yZXNvbHZlcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdG9yJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcblxuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICd3aXJlZnJhbWUnXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lcilcbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBJbnN0YW5jZVJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcigpXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKG9wdGlvbnMuc2NoZW1hKVxuICAgIHRoaXMuZXJyb3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICAgIGNvbnNvbGUudGFibGUodGhpcy5pbnN0YW5jZXMpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLnNjaGVtYS5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVyLnJlc29sdmUoY29uZmlnKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcm9vdCBjaGlsZCBpbnN0YW5jZSBnaXZlIGl0J1MgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgdGhpcy5lcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgdGhpcy5lcnJvcnMgPSBbLi4udGhpcy5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpcy5lcnJvcnNcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J1MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=