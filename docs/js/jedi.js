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
    _this.propertiesSlot = null;
    _this.messagesSlot = null;
    _this.actionsSlot = null;
    _this.childEditorsSlot = null;
    _this.disabled = false;

    _this.init();

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
      this.propertiesSlot = this.theme.getPropertiesSlot();
      this.messagesSlot = this.theme.getMessagesSlot();
      this.actionsSlot = this.theme.getActionsSlot();
      this.childEditorsSlot = this.theme.getChildEditorsSlot();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy93aXJlZnJhbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlLXJlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcXVhbCIsImEiLCJiIiwiZGlmZmVyZW50IiwiaXNOdWxsIiwidmFsdWUiLCJpc1NldCIsIm5vdFNldCIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwiTWF0aCIsImZsb29yIiwiaXNTdHJpbmciLCJpc0Jvb2xlYW4iLCJpc0FycmF5IiwiQXJyYXkiLCJpc09iamVjdCIsImdldFR5cGUiLCJ0eXBlIiwibWVyZ2VEZWVwIiwidGFyZ2V0Iiwic291cmNlcyIsImxlbmd0aCIsInNvdXJjZSIsInNoaWZ0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJhc3NpZ24iLCJFdmVudEVtaXR0ZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZmlsdGVyIiwibGlzdGVuZXIiLCJJbnN0YW5jZSIsImNvbmZpZyIsImplZGkiLCJzY2hlbWEiLCJ1bmRlZmluZWQiLCJpc0FjdGl2ZSIsInBhdGgiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInVpIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwicHJlcGFyZSIsIm9wdGlvbnMiLCJpc0VkaXRvciIsInNldFVJIiwib24iLCJvbkNoaWxkQ2hhbmdlIiwic3BsaXQiLCJwb3AiLCJ1bnJlZ2lzdGVyIiwiaW5jbHVkZXMiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwic2FuaXRpemUiLCJlbWl0IiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJnZXRWYWx1ZSIsImdldEtleSIsImNoaWxkIiwiZGVzdHJveSIsIlNjaGVtYSIsImFsbE9mIiwiYW55T2YiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZXhjbHVzaXZlTWF4aW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJmb3JtYXQiLCJpdGVtcyIsIm1heGltdW0iLCJtYXhJdGVtcyIsIm1heExlbmd0aCIsIm1heFByb3BlcnRpZXMiLCJtaW5pbXVtIiwibWluSXRlbXMiLCJtaW5MZW5ndGgiLCJtaW5Qcm9wZXJ0aWVzIiwibXVsdGlwbGVPZiIsIm5vdCIsIm9wdGlvbiIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZXF1aXJlZCIsIlNldCIsInRoZW4iLCJ0aXRsZSIsInR5cGVJcyIsIm9uZU9mIiwidW5pcXVlSXRlbXMiLCJUaGVtZUJhcmVib25lcyIsImVycm9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJtZXNzYWdlIiwic2xvdCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2VzU2xvdCIsImxhYmVsIiwic3JPbmx5IiwibGVnZW5kIiwiaW5wdXQiLCJpZCIsImNoZWNrYm94IiwicmFkaW8iLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvblZhbHVlcyIsImluZGV4Iiwib3B0aW9uc0xhYmVscyIsImFwcGVuZENoaWxkIiwiVGhlbWVXaXJlZnJhbWUiLCJidG5Hcm91cCIsImZpZWxkc2V0IiwiY2hlY2tib3hDb250YWluZXIiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJFZGl0b3IiLCJpbnN0YW5jZSIsInRoZW1lIiwicHJvcGVydGllc1Nsb3QiLCJhY3Rpb25zU2xvdCIsImNoaWxkRWRpdG9yc1Nsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsInJlYWR5IiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwiZ2V0Q29udGFpbmVyIiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldENoaWxkRWRpdG9yc1Nsb3QiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJnZXRJbnB1dEVycm9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiQXJyYXlFZGl0b3IiLCJzZXRDb250YWluZXIiLCJnZXRCdG5Hcm91cCIsImFkZEJ0biIsImdldEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtIiwiZGVsZXRlQWxsQnRuIiwiY29uZmlybSIsInNldFZhbHVlIiwiZ2V0RmllbGRzZXQiLCJnZXRMZWdlbmQiLCJnZXREZXNjcmlwdGlvbiIsIml0ZW1TY2hlbWEiLCJpdGVtRWRpdG9yIiwiY3JlYXRlSW5zdGFuY2UiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJpdGVtVmFsdWUiLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJidXR0b25zIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGlsZEJ1dHRvbnMiLCJjb25jYXQiLCJkaXNhYmxlIiwiZW5hYmxlIiwicmVtb3ZlQXR0cmlidXRlIiwiQXJyYXlJbnN0YW5jZSIsInRlbXBFZGl0b3IiLCJjdXJyZW50VmFsdWUiLCJCb29sZWFuRWRpdG9yIiwiZ2V0Q2hlY2tib3hDb250YWluZXIiLCJnZXRDaGVja2JveExhYmVsIiwiZ2V0Q2hlY2tib3giLCJjaGVja2VkIiwiQm9vbGVhbiIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJyYWRpb0lucHV0cyIsImdldFJhZGlvTGVnZW5kIiwicmFkaW9Db250YWluZXIiLCJnZXRSYWRpb0NvbnRhaW5lciIsImdldFJhZGlvIiwicmFkaW9WYWx1ZSIsImdldExhYmVsIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3QiLCJCb29sZWFuSW5zdGFuY2UiLCJmb3JtYXRJcyIsIk9iamVjdEVkaXRvciIsImFkZFByb3BlcnR5SW5wdXQiLCJnZXRJbnB1dCIsImFkZFByb3BlcnR5QnRuIiwiY3JlYXRlQ2hpbGQiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiaGFzT3duIiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJnZXRDaGlsZCIsInJlZnJlc2hQcm9wZXJ0aWVzIiwicmVmcmVzaEVkaXRvcnMiLCJPYmplY3RJbnN0YW5jZSIsInByb3BlcnR5Iiwib25TZXRWYWx1ZSIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiaSIsImZpbmQiLCJwcm9wZXJ0eU5hbWUiLCJoYXNQcm9wZXJ0eSIsImRlbGV0ZUNoaWxkIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWEiLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiU3RyaW5nSW5zdGFuY2UiLCJTdHJpbmciLCJNdWx0aXBsZUVkaXRvciIsInN3aXRjaGVyQnV0dG9ucyIsInN3aXRjaGVyIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJzd2l0Y2hFZGl0b3IiLCJvbGRFZGl0b3IiLCJlZGl0b3JzIiwibGFzdEluZGV4IiwiYWN0aXZlRWRpdG9yIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJyZW1vdmUiLCJNdWx0aXBsZUluc3RhbmNlIiwic2NoZW1hcyIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0eXBlcyIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImVkaXRvciIsIm5ld0luZGV4IiwibWF0Y2hFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVySW5zdGFuY2UiLCJ0eXBlSXNOdW1lcmljIiwiTnVsbEVkaXRvciIsIk51bGxJbnN0YW5jZSIsIkluc3RhbmNlUmVzb2x2ZXIiLCJyZXNvbHZlcnMiLCJvcmlnaW5hbFNjaGVtYSIsIm5ld1NjaGVtYSIsInJlc29sdmUiLCJyZXNvbHZlciIsImVkaXRvckNsYXNzIiwiX2FsbE9mIiwiYWxsT2ZFcnJvcnMiLCJfbWluTGVuZ3RoIiwiaW52YWxpZCIsImZpZWxkIiwiX2NvbnN0IiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJfYW55T2YiLCJ2YWxpZCIsInNvbWUiLCJhbnlPZkVycm9ycyIsIl9kZXBlbmRlbnRSZXF1aXJlZCIsImpvaW4iLCJfZW51bSIsImUiLCJfZXhjbHVzaXZlTWF4aW11bSIsImNvbXB1dGVkTWF4aW11bSIsIl9leGNsdXNpdmVNaW5pbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiX2Zvcm1hdCIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJfaWYiLCJpZkVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwiaWZFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsIl9tYXhJdGVtcyIsIl9tYXhMZW5ndGgiLCJfbWF4UHJvcGVydGllcyIsInByb3BlcnRpZXNDb3VudCIsIl9taW5pbXVtIiwiX21pbkl0ZW1zIiwiX21pblByb3BlcnRpZXMiLCJfbXVsdGlwbGVPZiIsImlzTXVsdGlwbGVPZiIsIl9ub3QiLCJub3RFcnJvcnMiLCJfb25lT2YiLCJjb3VudGVyIiwib25lT2ZFcnJvcnMiLCJfcGF0dGVybiIsIl9wYXR0ZXJuUHJvcGVydGllcyIsIl9yZXF1aXJlZCIsIl90eXBlIiwic3RyaW5nIiwibnVtYmVyIiwiaW50ZWdlciIsImFycmF5Iiwib2JqZWN0IiwiX21heGltdW0iLCJfdW5pcXVlSXRlbXMiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiVmFsaWRhdG9yIiwiZHJhZnQiLCJzY2hlbWFFcnJvcnMiLCJ2YWxpZGF0b3JFcnJvcnMiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiZGVmcyIsInRyYXZlcnNlIiwicmVmIiwic3RhcnRzV2l0aCIsInJlZlBhcnRzIiwiZGVmTmFtZSIsImRlZmluZSIsInNob3dSZXF1aXJlZE9ubHkiLCJpbnN0YW5jZXMiLCJyb290IiwicmVmUGFyc2VyIiwiZGVyZWZlcmVuY2UiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbklucHV0IiwiYXJndW1lbnRzIiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TDtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsbUJBQVc7TUFBQTs7TUFDVCxLQUFLTixJQUFMLENBQVVyUyxPQUFWO01BRUEsS0FBSzBDLFNBQUwsQ0FBZXdDLFNBQWYsR0FBMkIsRUFBM0I7TUFFQTlILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLElBQVosRUFBa0JDLE9BQWxCLENBQTBCLFVBQUNDLEdBQUQsRUFBUztRQUNqQyxPQUFPLE1BQUksQ0FBQ0EsR0FBRCxDQUFYO01BQ0QsQ0FGRDtJQUdEOzs7O0VBcktnQkUsYTs7QUF3S0o2UixpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuIiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcblxuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpICE9PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc0ludGVnZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdpbnRlZ2VyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuICAgIHRoaXMudWkgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQnUyBzY2hlbWFcbiAgICovXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIC8vIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAvLyAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgaWYgKHRoaXMuc2NoZW1hLmVudW0oKSAmJiAhdGhpcy5zY2hlbWEuZW51bSgpLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgbmV3VmFsdWUgPSB0aGlzLnNhbml0aXplKG5ld1ZhbHVlKVxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBkZWFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiBmYWxzZVxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29uc3QgPyB0aGlzLnNjaGVtYS5jb25zdCA6IGZhbHNlXG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHQgPyB0aGlzLnNjaGVtYS5kZWZhdWx0IDogZmFsc2VcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiBmYWxzZVxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IGZhbHNlXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogZmFsc2VcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy5mb3JtYXQoKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpID8gdGhpcy5zY2hlbWEuaWYgOiBmYWxzZVxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IGZhbHNlXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpID8gdGhpcy5zY2hlbWEubm90IDogZmFsc2VcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHByb3BlcnR5IChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucHJvcGVydGllcyA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiBmYWxzZVxuICB9XG5cbiAgdGhlbiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pID8gdGhpcy5zY2hlbWEudGhlbiA6IGZhbHNlXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogZmFsc2VcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdHlwZUlzICh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy50eXBlKCkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZXMgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IGZhbHNlXG4gIH1cblxuICB1bmlxdWVJdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS51bmlxdWVJdGVtcykgPyB0aGlzLnNjaGVtYS51bmlxdWVJdGVtcyA6IGZhbHNlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBzbG90XG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIHNsb3RcbiAgfVxuXG4gIGdldENoaWxkRWRpdG9yc1Nsb3QgKCkge1xuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBzbG90XG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1pbmZvJ1xuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVzc2FnZXNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIG1lc3NhZ2VzU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6IGF1dG87JylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0SW5wdXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlubGluZScpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVdpcmVmcmFtZVxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4vYm9vdHN0cmFwNCdcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCb290c3RyYXA0IHtcbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbi1mb2N1c2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuLi90aGVtZXMvd2lyZWZyYW1lJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi4vdGhlbWVzL2JhcmVib25lcydcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IG51bGxcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdCA9IG51bGxcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5yZWFkeSB8fCB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICd3aXJlZnJhbWUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lV2lyZWZyYW1lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QgPSB0aGlzLnRoZW1lLmdldENoaWxkRWRpdG9yc1Nsb3QoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICBidWlsZCAoKSB7fVxuXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UudmFsaWRhdGUoKVxuXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRJbnB1dEVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGNsb25lIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nXG4gICAgfSlcblxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtcydcbiAgICB9KVxuXG4gICAgdGhpcy5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUFsbEJ0bilcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuaXRlbXMoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLml0ZW1zKCkgOiB7IHR5cGU6IGdldFR5cGUodmFsdWUpIH1cbiAgICBjb25zdCBpdGVtU2NoZW1hID0gbmV3IFNjaGVtYShzY2hlbWEpXG5cbiAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5pbnN0YW5jZS5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuaW5zdGFuY2UuamVkaSxcbiAgICAgIHNjaGVtYTogaXRlbVNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzLmluc3RhbmNlXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IuZ2V0S2V5KCkpXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgIH0pXG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgIH1cblxuICAgIGl0ZW1FZGl0b3IudWkuY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FZGl0b3IudWkuYWN0aW9uc1Nsb3QpXG4gICAgaXRlbUVkaXRvci51aS5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICByZXR1cm4gaXRlbUVkaXRvclxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbiA9IFtdXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgY2hpbGQuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ucHVzaChjaGlsZClcblxuICAgICAgbGV0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkQnV0dG9ucyA9IEFycmF5LmZyb20oY2hpbGQudWkuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuICAgICAgICBidXR0b25zID0gYnV0dG9ucy5jb25jYXQoY2hpbGRCdXR0b25zKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuZGVsZXRlQWxsQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuZGVsZXRlQWxsQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5pdGVtcygpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZVxuXG4gICAgICAvLyBpZiBub3QgcHJvcGVydHkgbmFtZSB3YXMgZ2l2ZW4gcmV0dXJuXG4gICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gaWYgcHJvcGVydHkgZXhpc3QgcmV0dXJuXG4gICAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZCh7IHR5cGU6ICdhbnknIH0sIGtleSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSkge1xuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGRQcm9wZXJ0eUlucHV0KVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJykpIHtcbiAgICAgIHdoaWxlICh0aGlzLnByb3BlcnRpZXNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5yZW1vdmVDaGlsZCh0aGlzLnByb3BlcnRpZXNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGNoaWxkLnBhdGggKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgICAgICBmb3I6IGlkLFxuICAgICAgICAgIHRleHRDb250ZW50OiBjaGlsZC5zY2hlbWEudGl0bGUoKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9KVxuXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBPYmplY3QuaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRoaXMucHJvcGVydGllc1Nsb3QuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZEVkaXRvcnNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaW5zdGFuY2UuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllcygpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucmVxdWlyZWQoKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGRlcGVuZGVudFJlcXVpcmVkKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QuaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGhhc1Byb3BlcnR5IChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpXG5cbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5pbmNsdWRlcyhwcm9wZXJ0eU5hbWUpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHRoaXMuc2NoZW1hLmVudW0oKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gc3dpdGNoZXIgYnV0dG9uc1xuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zID0gW11cbiAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgdGhpcy5zd2l0Y2hlci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyBidXR0b25cbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgdmFsdWU6IGluZGV4XG4gICAgICB9KVxuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGJ1dHRvbi52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLnB1c2goYnV0dG9uKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ211bHRpcGxlJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRydWVcbiAgICB9KSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkRWRpdG9yID0gdGhpcy5pbnN0YW5jZS5lZGl0b3JzW3RoaXMuaW5zdGFuY2UubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEVkaXRvci51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQob2xkRWRpdG9yLnVpLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5jb250YWluZXIpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuZGlzYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuZW5hYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmICgoTnVtYmVyKGJ1dHRvbi52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmluZGV4KSkpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgc3VwZXIuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0LCBlcXVhbCwgZGlmZmVyZW50LCBtZXJnZURlZXAgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5lZGl0b3JzID0gW11cbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmFueU9mKCkgfHwgdGhpcy5zY2hlbWEub25lT2YoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gdGhpcy5zY2hlbWEuYW55T2YoKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChzY2hlbWEuYWxsT2YpIHtcbiAgICAgICAgICBsZXQgbWVyZ2VkID0ge31cblxuICAgICAgICAgIHNjaGVtYS5hbGxPZi5mb3JFYWNoKChhbGxPZlNjaGVtYSkgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VEZWVwKG1lcmdlZCwgYWxsT2ZTY2hlbWEpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHNjaGVtYSA9IG1lcmdlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KGNsb25lU2NoZW1hLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IGNsb25lU2NoZW1hLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZXMoKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBFZGl0b3JzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBlZGl0b3IudW5yZWdpc3RlcigpXG5cbiAgICAgIGVkaXRvci5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmVkaXRvcnNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEVkaXRvcigwLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hFZGl0b3IgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IHRoaXMuZWRpdG9yc1t0aGlzLmluZGV4XVxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3IuZ2V0VmFsdWUoKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRWRpdG9yLnNhbml0aXplKHZhbHVlKVxuICB9XG5cbiAgbWF0Y2hFZGl0b3IgKHZhbHVlLCBlZGl0b3JzKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgZm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuICAgICAgaWYgKGVkaXRvci5lZGl0b3JzKSB7XG4gICAgICAgIGVkaXRvci5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVxdWFsKGVkaXRvci5zYW5pdGl6ZSh2YWx1ZSksIHZhbHVlKSkge1xuICAgICAgICB0aGlzLnN3aXRjaEVkaXRvcihpbmRleClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlICh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGVkaXRvciB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGVkaXRvciB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlRWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICB0aGlzLm1hdGNoRWRpdG9yKHZhbHVlLCB0aGlzLmVkaXRvcnMpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVFZGl0b3Iuc2V0VmFsdWUodmFsdWUsIHRyaWdnZXJzQ2hhbmdlKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5lZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiaW1wb3J0IHsgaXNTZXQsIGdldFR5cGUgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5cbmNsYXNzIEluc3RhbmNlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLmFueU9mKCkgfHwgc2NoZW1hLm9uZU9mKCkgfHwgc2NoZW1hLnR5cGVJcygnYW55JykgfHwgc2NoZW1hLnR5cGVzKCkgfHwgIXNjaGVtYS50eXBlKCkpIHtcbiAgICAgICAgICBpZiAoIXNjaGVtYS50eXBlKCkgJiYgc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBzY2hlbWEuY2xvbmUoKVxuICAgICAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKG5ld1NjaGVtYSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChjb25maWcpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKGNvbmZpZy5zY2hlbWEsIGNvbmZpZylcbiAgICAgIGlmIChpc1NldChlZGl0b3JDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlUmVzb2x2ZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgX2FsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYWxsT2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWxsT2ZFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWluTGVuZ3RoKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmNvbnN0KCkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdmFsdWU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmFueU9mKCkpIHtcbiAgICBjb25zdCB2YWxpZCA9IHNjaGVtYS5hbnlPZigpLnNvbWUoKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgcmV0dXJuIGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMFxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2RlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiZXhwb3J0IGNvbnN0IF9lbnVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChzY2hlbWEuZW51bSgpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSAtIDEpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2V4Y2x1c2l2ZU1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSArIDEpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImV4cG9ydCBjb25zdCBfZm9ybWF0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5mb3JtYXQoKSkge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2VcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgIH1cblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2luZGV4J1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLmlmKCkpIHtcbiAgICBpZiAoIXNjaGVtYS50aGVuKCkgfHwgIXNjaGVtYS5lbHNlKCkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgIGVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlIH0pXG4gICAgICBlcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1heEl0ZW1zKCkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21heExlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1heExlbmd0aCgpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLm1heFByb3BlcnRpZXMoKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5taW5pbXVtKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9taW5JdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWluSXRlbXMoKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX21pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbXVsdGlwbGVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm11bHRpcGxlT2YoKSkge1xuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS5ub3QoKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBfb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLm9uZU9mKCkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm4oKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBfcGF0dGVyblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eU5hbWVcblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9yZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnJlcXVpcmVkKCkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF90eXBlID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS50eXBlcygpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKHNjaGVtYS50eXBlKCkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfbWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1heGltdW0oKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF91bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEudW5pcXVlSXRlbXMoKSkge1xuICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgX2FsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IF9taW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBfYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2RlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgX2V4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBfZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IF9mb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBfbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgX21heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgX21heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBfbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IF9taW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBfbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IF9tdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgX25vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgX29uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IF9wYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgX3BhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IF9yZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyBfdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IF9tYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgX3VuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBfYWxsT2YsXG4gIF9hbnlPZixcbiAgX2NvbnN0LFxuICBfZGVwZW5kZW50UmVxdWlyZWQsXG4gIF9lbnVtLFxuICBfZXhjbHVzaXZlTWF4aW11bSxcbiAgX2V4Y2x1c2l2ZU1pbmltdW0sXG4gIF9mb3JtYXQsXG4gIF9pZixcbiAgX21heGltdW0sXG4gIF9tYXhJdGVtcyxcbiAgX21heExlbmd0aCxcbiAgX21heFByb3BlcnRpZXMsXG4gIF9taW5pbXVtLFxuICBfbWluSXRlbXMsXG4gIF9taW5MZW5ndGgsXG4gIF9taW5Qcm9wZXJ0aWVzLFxuICBfbXVsdGlwbGVPZixcbiAgX25vdCxcbiAgX29uZU9mLFxuICBfcGF0dGVybixcbiAgX3BhdHRlcm5Qcm9wZXJ0aWVzLFxuICBfcmVxdWlyZWQsXG4gIF90eXBlLFxuICBfdW5pcXVlSXRlbXNcbl1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgdGhpcy5kcmFmdC5mb3JFYWNoKCh2YWxpZGF0b3IpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hLm9wdGlvbignbWVzc2FnZScpKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLml0ZXJhdGlvbnMgPSA1XG4gICAgdGhpcy5kZWZzID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICB0aGlzLmRlZnMgPSBzY2hlbWFbJyRkZWZzJ11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIHRoaXMudHJhdmVyc2UodGhpcy5kZWZzKVxuICAgICAgdGhpcy50cmF2ZXJzZShzY2hlbWEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMvJGRlZnMnKSkge1xuICAgICAgY29uc3QgcmVmUGFydHMgPSByZWYuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZGVmTmFtZSA9IHJlZlBhcnRzLnBvcCgpXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZnNbZGVmTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZnNbZGVmTmFtZV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICB0cmF2ZXJzZSAodmFsdWUsIHRoaW5nLCBpbmRleCkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVsnJHJlZiddKSAmJiBpc1NldCh0aGluZykpIHtcbiAgICAgICAgdGhpbmdbaW5kZXhdID0gdGhpcy5kZWZpbmUodmFsdWVbJyRyZWYnXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudHJhdmVyc2UodmFsdWVbaW5kZXhdLCB2YWx1ZSwgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGl0ZW0sIHZhbHVlLCBpbmRleClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IEluc3RhbmNlUmVzb2x2ZXIgZnJvbSAnLi9pbnN0YW5jZS1yZXNvbHZlcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3InXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ3dpcmVmcmFtZSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMucmVzb2x2ZXIgPSBuZXcgSW5zdGFuY2VSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoKVxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuICAgIHRoaXMuZXJyb3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5zY2hlbWEuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZXIucmVzb2x2ZShjb25maWcpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIHRoaXMuZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIHRoaXMuZXJyb3JzID0gWy4uLnRoaXMuZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc2V0VGhlbWUgKHRoZW1lKSB7XG4gICAgdGhpcy5vcHRpb25zLnRoZW1lID0gdGhlbWVcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdTIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9