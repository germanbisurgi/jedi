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

/* harmony default export */ var instances_instance = (instance_Instance);
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
          return new instances_multiple(config);
        }
      }
    }, function (schema, config) {
      if (schema.typeIs('boolean')) {
        return new instances_boolean(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('object')) {
        return new instances_object(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('array')) {
        return new instances_array(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('string')) {
        return new instances_string(config);
      }
    }, function (schema, config) {
      if (schema.typeIsNumeric()) {
        return new instances_number(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('null')) {
        return new instances_null(config);
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
    _this.resolver = new instance_resolver();
    _this.validator = new validation_validator();
    _this.refParser = new ref_parser();
    _this.schema = new src_schema(_this.options.schema);
    _this.errors = [];

    _this.init();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy93aXJlZnJhbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2UtcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVxdWFsIiwiYSIsImIiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJ2YWx1ZSIsImlzU2V0Iiwibm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsImlzT2JqZWN0IiwiZ2V0VHlwZSIsInR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJzb3VyY2VzIiwibGVuZ3RoIiwic291cmNlIiwic2hpZnQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImFzc2lnbiIsIkV2ZW50RW1pdHRlciIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsInB1c2giLCJmaWx0ZXIiLCJsaXN0ZW5lciIsIkluc3RhbmNlIiwiY29uZmlnIiwiamVkaSIsInNjaGVtYSIsInVuZGVmaW5lZCIsImlzQWN0aXZlIiwicGF0aCIsInBhcmVudCIsImNoaWxkcmVuIiwidWkiLCJpbml0IiwicmVnaXN0ZXIiLCJzZXREZWZhdWx0VmFsdWUiLCJwcmVwYXJlIiwib3B0aW9ucyIsImlzRWRpdG9yIiwic2V0VUkiLCJvbiIsIm9uQ2hpbGRDaGFuZ2UiLCJzcGxpdCIsInBvcCIsInVucmVnaXN0ZXIiLCJpbmNsdWRlcyIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJzYW5pdGl6ZSIsImVtaXQiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0ZSIsImdldFZhbHVlIiwiZ2V0S2V5IiwiY2hpbGQiLCJkZXN0cm95IiwiU2NoZW1hIiwiYWxsT2YiLCJhbnlPZiIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsIml0ZW1zIiwibWF4aW11bSIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90Iiwib3B0aW9uIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIlRoZW1lQmFyZWJvbmVzIiwiZXJyb3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJzbG90IiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiY29udGFpbmVyIiwibWVzc2FnZXNTbG90IiwibGFiZWwiLCJzck9ubHkiLCJsZWdlbmQiLCJpbnB1dCIsImlkIiwiY2hlY2tib3giLCJyYWRpbyIsInRleHRhcmVhIiwic2VsZWN0Iiwib3B0aW9uVmFsdWVzIiwiaW5kZXgiLCJvcHRpb25zTGFiZWxzIiwiYXBwZW5kQ2hpbGQiLCJUaGVtZVdpcmVmcmFtZSIsImJ0bkdyb3VwIiwiZmllbGRzZXQiLCJjaGVja2JveENvbnRhaW5lciIsIkVkaXRvciIsImluc3RhbmNlIiwidGhlbWUiLCJnZXRDb250YWluZXIiLCJwcm9wZXJ0aWVzU2xvdCIsImdldFByb3BlcnRpZXNTbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiYWN0aW9uc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImNoaWxkRWRpdG9yc1Nsb3QiLCJnZXRDaGlsZEVkaXRvcnNTbG90IiwiZGlzYWJsZWQiLCJidWlsZCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJyZWZyZXNoVUkiLCJyZWFkeSIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsImVycm9ycyIsImlubmVySFRNTCIsImdldElucHV0RXJyb3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJBcnJheUVkaXRvciIsInNldENvbnRhaW5lciIsImdldEJ0bkdyb3VwIiwiYWRkQnRuIiwiZ2V0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwic2V0VmFsdWUiLCJnZXRGaWVsZHNldCIsImdldExlZ2VuZCIsImdldERlc2NyaXB0aW9uIiwiaXRlbVNjaGVtYSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVJbnN0YW5jZSIsIml0ZW1JbmRleCIsIk51bWJlciIsImRlbGV0ZUJ0biIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsIml0ZW1WYWx1ZSIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsImJ1dHRvbnMiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImNoaWxkQnV0dG9ucyIsImNvbmNhdCIsImRpc2FibGUiLCJlbmFibGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJBcnJheUluc3RhbmNlIiwidGVtcEVkaXRvciIsImN1cnJlbnRWYWx1ZSIsIkJvb2xlYW5FZGl0b3IiLCJnZXRDaGVja2JveENvbnRhaW5lciIsImdldENoZWNrYm94TGFiZWwiLCJnZXRDaGVja2JveCIsImNoZWNrZWQiLCJCb29sZWFuIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsInJhZGlvSW5wdXRzIiwiZ2V0UmFkaW9MZWdlbmQiLCJyYWRpb0NvbnRhaW5lciIsImdldFJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW8iLCJyYWRpb1ZhbHVlIiwiZ2V0TGFiZWwiLCJCb29sZWFuRW51bVNlbGVjdEVkaXRvciIsImdldFNlbGVjdCIsIkJvb2xlYW5JbnN0YW5jZSIsImZvcm1hdElzIiwiT2JqZWN0RWRpdG9yIiwiYWRkUHJvcGVydHlJbnB1dCIsImdldElucHV0IiwiYWRkUHJvcGVydHlCdG4iLCJjcmVhdGVDaGlsZCIsImVkaXRhYmxlUHJvcGVydGllcyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJoYXNPd24iLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImdldENoaWxkIiwicmVmcmVzaFByb3BlcnRpZXMiLCJyZWZyZXNoRWRpdG9ycyIsIk9iamVjdEluc3RhbmNlIiwicHJvcGVydHkiLCJvblNldFZhbHVlIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJpIiwiZmluZCIsInByb3BlcnR5TmFtZSIsImhhc1Byb3BlcnR5IiwiZGVsZXRlQ2hpbGQiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJnZXRUZXh0YXJlYSIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJTdHJpbmdJbnN0YW5jZSIsIlN0cmluZyIsIk11bHRpcGxlRWRpdG9yIiwic3dpdGNoZXJCdXR0b25zIiwic3dpdGNoZXIiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsInN3aXRjaEVkaXRvciIsIm9sZEVkaXRvciIsImVkaXRvcnMiLCJsYXN0SW5kZXgiLCJhY3RpdmVFZGl0b3IiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsInJlbW92ZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJzY2hlbWFzIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInR5cGVzIiwic2NoZW1hQ2xvbmUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwiZWRpdG9yIiwibmV3SW5kZXgiLCJtYXRjaEVkaXRvciIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJOdWxsRWRpdG9yIiwiTnVsbEluc3RhbmNlIiwiSW5zdGFuY2VSZXNvbHZlciIsInJlc29sdmVycyIsIm9yaWdpbmFsU2NoZW1hIiwibmV3U2NoZW1hIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZWRpdG9yQ2xhc3MiLCJfYWxsT2YiLCJhbGxPZkVycm9ycyIsIl9taW5MZW5ndGgiLCJpbnZhbGlkIiwiZmllbGQiLCJfY29uc3QiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsIl9hbnlPZiIsInZhbGlkIiwic29tZSIsImFueU9mRXJyb3JzIiwiX2RlcGVuZGVudFJlcXVpcmVkIiwiam9pbiIsIl9lbnVtIiwiZSIsIl9leGNsdXNpdmVNYXhpbXVtIiwiY29tcHV0ZWRNYXhpbXVtIiwiX2V4Y2x1c2l2ZU1pbmltdW0iLCJjb21wdXRlZE1pbmltdW0iLCJfZm9ybWF0IiwicmVnZXhwIiwiUmVnRXhwIiwidGVzdCIsIl9pZiIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJpZkVycm9ycyIsInRoZW5FZGl0b3IiLCJlbHNlRWRpdG9yIiwiX21heEl0ZW1zIiwiX21heExlbmd0aCIsIl9tYXhQcm9wZXJ0aWVzIiwicHJvcGVydGllc0NvdW50IiwiX21pbmltdW0iLCJfbWluSXRlbXMiLCJfbWluUHJvcGVydGllcyIsIl9tdWx0aXBsZU9mIiwiaXNNdWx0aXBsZU9mIiwiX25vdCIsIm5vdEVycm9ycyIsIl9vbmVPZiIsImNvdW50ZXIiLCJvbmVPZkVycm9ycyIsIl9wYXR0ZXJuIiwiX3BhdHRlcm5Qcm9wZXJ0aWVzIiwiX3JlcXVpcmVkIiwiX3R5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJpbnRlZ2VyIiwiYXJyYXkiLCJvYmplY3QiLCJfbWF4aW11bSIsIl91bmlxdWVJdGVtcyIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJWYWxpZGF0b3IiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsInZhbGlkYXRvckVycm9ycyIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJkZWZzIiwidHJhdmVyc2UiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVmUGFydHMiLCJkZWZOYW1lIiwiZGVmaW5lIiwic2hvd1JlcXVpcmVkT25seSIsImluc3RhbmNlcyIsInJvb3QiLCJyZWZQYXJzZXIiLCJkZXJlZmVyZW5jZSIsImFwcGVuZEhpZGRlbklucHV0IiwiaGlkZGVuSW5wdXQiLCJhcmd1bWVudHMiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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QUFBOztNQUNULEtBQUtOLElBQUwsQ0FBVW5TLE9BQVY7TUFFQSxLQUFLMEMsU0FBTCxDQUFlc0MsU0FBZixHQUEyQixFQUEzQjtNQUVBNUgsTUFBTSxDQUFDQyxJQUFQLENBQVksSUFBWixFQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFTO1FBQ2pDLE9BQU8sTUFBSSxDQUFDQSxHQUFELENBQVg7TUFDRCxDQUZEO0lBR0Q7Ozs7RUFyS2dCRSxhOztBQXdLSjJSLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgIT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3Qgbm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2ludGVnZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8ICdyb290J1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgLy8gaWYgKHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgIC8vICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuc2FuaXRpemUobmV3VmFsdWUpXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IGZhbHNlXG4gIH1cblxuICBhbnlPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYW55T2YpID8gdGhpcy5zY2hlbWEuYW55T2YgOiBmYWxzZVxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdCA/IHRoaXMuc2NoZW1hLmNvbnN0IDogZmFsc2VcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdCA/IHRoaXMuc2NoZW1hLmRlZmF1bHQgOiBmYWxzZVxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IGZhbHNlXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogZmFsc2VcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiBmYWxzZVxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm1hdCgpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pZikgPyB0aGlzLnNjaGVtYS5pZiA6IGZhbHNlXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgPyB0aGlzLnNjaGVtYS5ub3QgOiBmYWxzZVxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydHkgKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldID8gdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldIDogZmFsc2VcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICByZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQpXSA6IGZhbHNlXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgPyB0aGlzLnNjaGVtYS50aGVuIDogZmFsc2VcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiBmYWxzZVxuICB9XG5cbiAgdHlwZSAoKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLnR5cGUoKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlcyAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSlcbiAgfVxuXG4gIHR5cGVJc051bWVyaWMgKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVJcygnbnVtYmVyJykgfHwgdGhpcy50eXBlSXMoJ2ludGVnZXInKVxuICB9XG5cbiAgb25lT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLm9uZU9mKSA/IHRoaXMuc2NoZW1hLm9uZU9mIDogZmFsc2VcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJjbGFzcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgcmV0dXJuIHNsb3RcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gc2xvdFxuICB9XG5cbiAgZ2V0Q2hpbGRFZGl0b3JzU2xvdCAoKSB7XG4gICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIHNsb3RcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgbWVzc2FnZXNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gbWVzc2FnZXNTbG90XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogYXV0bzsnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRJbnB1dCAoY29uZmlnKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVXaXJlZnJhbWUgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5saW5lJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV2lyZWZyYW1lXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgVGhlbWVXaXJlZnJhbWUgZnJvbSAnLi4vdGhlbWVzL3dpcmVmcmFtZSdcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVXaXJlZnJhbWUoKVxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDb250YWluZXIoKVxuICAgIHRoaXMucHJvcGVydGllc1Nsb3QgPSB0aGlzLnRoZW1lLmdldFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90ID0gdGhpcy50aGVtZS5nZXRDaGlsZEVkaXRvcnNTbG90KClcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkucmVhZHkgfHwgdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICBidWlsZCAoKSB7fVxuXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UudmFsaWRhdGUoKVxuXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRJbnB1dEVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGNsb25lIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nXG4gICAgfSlcblxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtcydcbiAgICB9KVxuXG4gICAgdGhpcy5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUFsbEJ0bilcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuaXRlbXMoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLml0ZW1zKCkgOiB7IHR5cGU6IGdldFR5cGUodmFsdWUpIH1cbiAgICBjb25zdCBpdGVtU2NoZW1hID0gbmV3IFNjaGVtYShzY2hlbWEpXG5cbiAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5pbnN0YW5jZS5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuaW5zdGFuY2UuamVkaSxcbiAgICAgIHNjaGVtYTogaXRlbVNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzLmluc3RhbmNlXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IuZ2V0S2V5KCkpXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgIH0pXG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgIH1cblxuICAgIGl0ZW1FZGl0b3IudWkuY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FZGl0b3IudWkuYWN0aW9uc1Nsb3QpXG4gICAgaXRlbUVkaXRvci51aS5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICByZXR1cm4gaXRlbUVkaXRvclxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbiA9IFtdXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgY2hpbGQuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ucHVzaChjaGlsZClcblxuICAgICAgbGV0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkQnV0dG9ucyA9IEFycmF5LmZyb20oY2hpbGQudWkuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuICAgICAgICBidXR0b25zID0gYnV0dG9ucy5jb25jYXQoY2hpbGRCdXR0b25zKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuZGVsZXRlQWxsQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuZGVsZXRlQWxsQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5pdGVtcygpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZVxuXG4gICAgICAvLyBpZiBub3QgcHJvcGVydHkgbmFtZSB3YXMgZ2l2ZW4gcmV0dXJuXG4gICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gaWYgcHJvcGVydHkgZXhpc3QgcmV0dXJuXG4gICAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZCh7IHR5cGU6ICdhbnknIH0sIGtleSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSkge1xuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUlucHV0KVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJykpIHtcbiAgICAgIHdoaWxlICh0aGlzLnByb3BlcnRpZXNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5yZW1vdmVDaGlsZCh0aGlzLnByb3BlcnRpZXNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGNoaWxkLnBhdGggKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgICAgICBmb3I6IGlkLFxuICAgICAgICAgIHRleHRDb250ZW50OiBjaGlsZC5zY2hlbWEudGl0bGUoKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9KVxuXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBPYmplY3QuaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZEVkaXRvcnNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaW5zdGFuY2UuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllcygpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucmVxdWlyZWQoKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGRlcGVuZGVudFJlcXVpcmVkKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGhhc1Byb3BlcnR5IChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpXG5cbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5pbmNsdWRlcyhwcm9wZXJ0eU5hbWUpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gc3dpdGNoZXIgYnV0dG9uc1xuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zID0gW11cbiAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgdGhpcy5zd2l0Y2hlci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyBidXR0b25cbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgdmFsdWU6IGluZGV4XG4gICAgICB9KVxuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGJ1dHRvbi52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLnB1c2goYnV0dG9uKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ211bHRpcGxlJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRydWVcbiAgICB9KSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkRWRpdG9yID0gdGhpcy5pbnN0YW5jZS5lZGl0b3JzW3RoaXMuaW5zdGFuY2UubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEVkaXRvci51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQob2xkRWRpdG9yLnVpLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5jb250YWluZXIpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuZGlzYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuZW5hYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmICgoTnVtYmVyKGJ1dHRvbi52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmluZGV4KSkpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgc3VwZXIuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0LCBlcXVhbCwgZGlmZmVyZW50LCBtZXJnZURlZXAgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5lZGl0b3JzID0gW11cbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmFueU9mKCkgfHwgdGhpcy5zY2hlbWEub25lT2YoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gdGhpcy5zY2hlbWEuYW55T2YoKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChzY2hlbWEuYWxsT2YpIHtcbiAgICAgICAgICBsZXQgbWVyZ2VkID0ge31cblxuICAgICAgICAgIHNjaGVtYS5hbGxPZi5mb3JFYWNoKChhbGxPZlNjaGVtYSkgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VEZWVwKG1lcmdlZCwgYWxsT2ZTY2hlbWEpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHNjaGVtYSA9IG1lcmdlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KGNsb25lU2NoZW1hLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IGNsb25lU2NoZW1hLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZXMoKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBFZGl0b3JzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBlZGl0b3IudW5yZWdpc3RlcigpXG5cbiAgICAgIGVkaXRvci5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmVkaXRvcnNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEVkaXRvcigwLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hFZGl0b3IgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IHRoaXMuZWRpdG9yc1t0aGlzLmluZGV4XVxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3IuZ2V0VmFsdWUoKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRWRpdG9yLnNhbml0aXplKHZhbHVlKVxuICB9XG5cbiAgbWF0Y2hFZGl0b3IgKHZhbHVlLCBlZGl0b3JzKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgZm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuICAgICAgaWYgKGVkaXRvci5lZGl0b3JzKSB7XG4gICAgICAgIGVkaXRvci5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVxdWFsKGVkaXRvci5zYW5pdGl6ZSh2YWx1ZSksIHZhbHVlKSkge1xuICAgICAgICB0aGlzLnN3aXRjaEVkaXRvcihpbmRleClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlICh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGVkaXRvciB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGVkaXRvciB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlRWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICB0aGlzLm1hdGNoRWRpdG9yKHZhbHVlLCB0aGlzLmVkaXRvcnMpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVFZGl0b3Iuc2V0VmFsdWUodmFsdWUsIHRyaWdnZXJzQ2hhbmdlKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5lZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiaW1wb3J0IHsgaXNTZXQsIGdldFR5cGUgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5cbmNsYXNzIEluc3RhbmNlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLmFueU9mKCkgfHwgc2NoZW1hLm9uZU9mKCkgfHwgc2NoZW1hLnR5cGVJcygnYW55JykgfHwgc2NoZW1hLnR5cGVzKCkgfHwgIXNjaGVtYS50eXBlKCkpIHtcbiAgICAgICAgICBpZiAoIXNjaGVtYS50eXBlKCkgJiYgc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBzY2hlbWEuY2xvbmUoKVxuICAgICAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKG5ld1NjaGVtYSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChjb25maWcpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKGNvbmZpZy5zY2hlbWEsIGNvbmZpZylcbiAgICAgIGlmIChpc1NldChlZGl0b3JDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlUmVzb2x2ZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX2FsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYWxsT2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWxsT2ZFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWluTGVuZ3RoKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmNvbnN0KCkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdmFsdWU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmFueU9mKCkpIHtcbiAgICBjb25zdCB2YWxpZCA9IHNjaGVtYS5hbnlPZigpLnNvbWUoKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgcmV0dXJuIGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMFxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2RlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiZXhwb3J0IGNvbnN0IF9lbnVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChzY2hlbWEuZW51bSgpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSAtIDEpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSArIDEpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImV4cG9ydCBjb25zdCBfZm9ybWF0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5mb3JtYXQoKSkge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2VcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgIH1cblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmlmKCkpIHtcbiAgICBpZiAoIXNjaGVtYS50aGVuKCkgfHwgIXNjaGVtYS5lbHNlKCkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIGVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICBlcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1heEl0ZW1zKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heExlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1heExlbmd0aCgpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLm1heFByb3BlcnRpZXMoKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5taW5pbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5JdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWluSXRlbXMoKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbXVsdGlwbGVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm11bHRpcGxlT2YoKSkge1xuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5ub3QoKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLm9uZU9mKCkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm4oKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVyblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eU5hbWVcblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9yZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnJlcXVpcmVkKCkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF90eXBlID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS50eXBlcygpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKHNjaGVtYS50eXBlKCkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1heGltdW0oKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF91bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEudW5pcXVlSXRlbXMoKSkge1xuICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgX2FsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IF9taW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBfYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2RlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IF9mb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBfbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgX21heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgX21heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IF9taW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBfbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IF9tdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgX25vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgX29uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IF9wYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgX3BhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IF9yZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyBfdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IF9tYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgX3VuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBfYWxsT2YsXG4gIF9hbnlPZixcbiAgX2NvbnN0LFxuICBfZGVwZW5kZW50UmVxdWlyZWQsXG4gIF9lbnVtLFxuICBfZXhjbHVzaXZlTWF4aW11bSxcbiAgX2V4Y2x1c2l2ZU1pbmltdW0sXG4gIF9mb3JtYXQsXG4gIF9pZixcbiAgX21heGltdW0sXG4gIF9tYXhJdGVtcyxcbiAgX21heExlbmd0aCxcbiAgX21heFByb3BlcnRpZXMsXG4gIF9taW5pbXVtLFxuICBfbWluSXRlbXMsXG4gIF9taW5MZW5ndGgsXG4gIF9taW5Qcm9wZXJ0aWVzLFxuICBfbXVsdGlwbGVPZixcbiAgX25vdCxcbiAgX29uZU9mLFxuICBfcGF0dGVybixcbiAgX3BhdHRlcm5Qcm9wZXJ0aWVzLFxuICBfcmVxdWlyZWQsXG4gIF90eXBlLFxuICBfdW5pcXVlSXRlbXNcbl1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgdGhpcy5kcmFmdC5mb3JFYWNoKCh2YWxpZGF0b3IpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hLm9wdGlvbignbWVzc2FnZScpKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLml0ZXJhdGlvbnMgPSA1XG4gICAgdGhpcy5kZWZzID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICB0aGlzLmRlZnMgPSBzY2hlbWFbJyRkZWZzJ11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIHRoaXMudHJhdmVyc2UodGhpcy5kZWZzKVxuICAgICAgdGhpcy50cmF2ZXJzZShzY2hlbWEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMvJGRlZnMnKSkge1xuICAgICAgY29uc3QgcmVmUGFydHMgPSByZWYuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZGVmTmFtZSA9IHJlZlBhcnRzLnBvcCgpXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZnNbZGVmTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZnNbZGVmTmFtZV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICB0cmF2ZXJzZSAodmFsdWUsIHRoaW5nLCBpbmRleCkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVsnJHJlZiddKSAmJiBpc1NldCh0aGluZykpIHtcbiAgICAgICAgdGhpbmdbaW5kZXhdID0gdGhpcy5kZWZpbmUodmFsdWVbJyRyZWYnXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudHJhdmVyc2UodmFsdWVbaW5kZXhdLCB2YWx1ZSwgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGl0ZW0sIHZhbHVlLCBpbmRleClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IEluc3RhbmNlUmVzb2x2ZXIgZnJvbSAnLi9pbnN0YW5jZS1yZXNvbHZlcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3InXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ3dpcmVmcmFtZSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMucmVzb2x2ZXIgPSBuZXcgSW5zdGFuY2VSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoKVxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuICAgIHRoaXMuZXJyb3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5zY2hlbWEuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZXIucmVzb2x2ZShjb25maWcpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIHRoaXMuZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIHRoaXMuZXJyb3JzID0gWy4uLnRoaXMuZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc2V0VGhlbWUgKHRoZW1lKSB7XG4gICAgdGhpcy5vcHRpb25zLnRoZW1lID0gdGhlbWVcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdTIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9