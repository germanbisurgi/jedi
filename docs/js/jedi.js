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
// CONCATENATED MODULE: ./src/validation/validator.js







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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy93aXJlZnJhbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2UtcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXF1YWwiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsInZhbHVlIiwiaXNTZXQiLCJub3RTZXQiLCJpc051bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiaXNPYmplY3QiLCJnZXRUeXBlIiwidHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsInNvdXJjZXMiLCJsZW5ndGgiLCJzb3VyY2UiLCJzaGlmdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYXNzaWduIiwiRXZlbnRFbWl0dGVyIiwibGlzdGVuZXJzIiwibmFtZSIsImNhbGxiYWNrIiwicHVzaCIsImZpbHRlciIsImxpc3RlbmVyIiwiSW5zdGFuY2UiLCJjb25maWciLCJqZWRpIiwic2NoZW1hIiwidW5kZWZpbmVkIiwiaXNBY3RpdmUiLCJwYXRoIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ1aSIsImluaXQiLCJyZWdpc3RlciIsInNldERlZmF1bHRWYWx1ZSIsInByZXBhcmUiLCJvcHRpb25zIiwiaXNFZGl0b3IiLCJzZXRVSSIsIm9uIiwib25DaGlsZENoYW5nZSIsInNwbGl0IiwicG9wIiwidW5yZWdpc3RlciIsImluY2x1ZGVzIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsInNhbml0aXplIiwiZW1pdCIsInZhbGlkYXRvciIsInZhbGlkYXRlIiwiZ2V0VmFsdWUiLCJnZXRLZXkiLCJjaGlsZCIsImRlc3Ryb3kiLCJTY2hlbWEiLCJhbGxPZiIsImFueU9mIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJvcHRpb24iLCJwYXR0ZXJuIiwicGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVxdWlyZWQiLCJTZXQiLCJ0aGVuIiwidGl0bGUiLCJ0eXBlSXMiLCJvbmVPZiIsInVuaXF1ZUl0ZW1zIiwiVGhlbWVCYXJlYm9uZXMiLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwibWVzc2FnZSIsInNsb3QiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJtZXNzYWdlc1Nsb3QiLCJsYWJlbCIsInNyT25seSIsImxlZ2VuZCIsImlucHV0IiwiaWQiLCJjaGVja2JveCIsInJhZGlvIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJvcHRpb25WYWx1ZXMiLCJpbmRleCIsIm9wdGlvbnNMYWJlbHMiLCJhcHBlbmRDaGlsZCIsIlRoZW1lV2lyZWZyYW1lIiwiYnRuR3JvdXAiLCJmaWVsZHNldCIsImNoZWNrYm94Q29udGFpbmVyIiwiRWRpdG9yIiwiaW5zdGFuY2UiLCJ0aGVtZSIsImdldENvbnRhaW5lciIsInByb3BlcnRpZXNTbG90IiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJhY3Rpb25zU2xvdCIsImdldEFjdGlvbnNTbG90IiwiY2hpbGRFZGl0b3JzU2xvdCIsImdldENoaWxkRWRpdG9yc1Nsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsInJlYWR5IiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwiZ2V0SW5wdXRFcnJvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIkFycmF5RWRpdG9yIiwic2V0Q29udGFpbmVyIiwiZ2V0QnRuR3JvdXAiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJzZXRWYWx1ZSIsImdldEZpZWxkc2V0IiwiZ2V0TGVnZW5kIiwiZ2V0RGVzY3JpcHRpb24iLCJpdGVtU2NoZW1hIiwiaXRlbUVkaXRvciIsImNyZWF0ZUluc3RhbmNlIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwiaXRlbVZhbHVlIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiYnV0dG9ucyIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRCdXR0b25zIiwiY29uY2F0IiwiZGlzYWJsZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkFycmF5SW5zdGFuY2UiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwiQm9vbGVhbkVkaXRvciIsImdldENoZWNrYm94Q29udGFpbmVyIiwiZ2V0Q2hlY2tib3hMYWJlbCIsImdldENoZWNrYm94IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwicmFkaW9JbnB1dHMiLCJnZXRSYWRpb0xlZ2VuZCIsInJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW9Db250YWluZXIiLCJnZXRSYWRpbyIsInJhZGlvVmFsdWUiLCJnZXRMYWJlbCIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiZ2V0U2VsZWN0IiwiQm9vbGVhbkluc3RhbmNlIiwiZm9ybWF0SXMiLCJPYmplY3RFZGl0b3IiLCJhZGRQcm9wZXJ0eUlucHV0IiwiZ2V0SW5wdXQiLCJhZGRQcm9wZXJ0eUJ0biIsImNyZWF0ZUNoaWxkIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImhhc093biIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiZ2V0Q2hpbGQiLCJyZWZyZXNoUHJvcGVydGllcyIsInJlZnJlc2hFZGl0b3JzIiwiT2JqZWN0SW5zdGFuY2UiLCJwcm9wZXJ0eSIsIm9uU2V0VmFsdWUiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImkiLCJmaW5kIiwicHJvcGVydHlOYW1lIiwiaGFzUHJvcGVydHkiLCJkZWxldGVDaGlsZCIsIm9sZFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0luc3RhbmNlIiwiU3RyaW5nIiwiTXVsdGlwbGVFZGl0b3IiLCJzd2l0Y2hlckJ1dHRvbnMiLCJzd2l0Y2hlciIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwic3dpdGNoRWRpdG9yIiwib2xkRWRpdG9yIiwiZWRpdG9ycyIsImxhc3RJbmRleCIsImFjdGl2ZUVkaXRvciIsImdldEJ1dHRvbkFjdGl2ZUNsYXNzIiwicmVtb3ZlIiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidHlwZXMiLCJzY2hlbWFDbG9uZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJlZGl0b3IiLCJuZXdJbmRleCIsIm1hdGNoRWRpdG9yIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckluc3RhbmNlIiwidHlwZUlzTnVtZXJpYyIsIk51bGxFZGl0b3IiLCJOdWxsSW5zdGFuY2UiLCJJbnN0YW5jZVJlc29sdmVyIiwicmVzb2x2ZXJzIiwib3JpZ2luYWxTY2hlbWEiLCJuZXdTY2hlbWEiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJlZGl0b3JDbGFzcyIsIlZhbGlkYXRvciIsInZhbGlkYXRvcnMiLCJhbGxPZkVycm9ycyIsInZhbGlkIiwic29tZSIsImFueU9mRXJyb3JzIiwiZmllbGQiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJqb2luIiwiZSIsImNvbXB1dGVkTWF4aW11bSIsImNvbXB1dGVkTWluaW11bSIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJpZkVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwiaWZFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByb3BlcnRpZXNDb3VudCIsImlzTXVsdGlwbGVPZiIsIm5vdEVycm9ycyIsImNvdW50ZXIiLCJvbmVPZkVycm9ycyIsInN0cmluZyIsIm51bWJlciIsImludGVnZXIiLCJhcnJheSIsIm9iamVjdCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJzY2hlbWFFcnJvcnMiLCJ2YWxpZGF0b3JFcnJvcnMiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiZGVmcyIsInRyYXZlcnNlIiwicmVmIiwic3RhcnRzV2l0aCIsInJlZlBhcnRzIiwiZGVmTmFtZSIsImRlZmluZSIsInNob3dSZXF1aXJlZE9ubHkiLCJpbnN0YW5jZXMiLCJyb290IiwicmVmUGFyc2VyIiwiZGVyZWZlcmVuY2UiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbklucHV0IiwiYXJndW1lbnRzIiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLCtHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtHOzs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDRHOzs7Ozs7QUNuQkEscUJBQXFCLG1CQUFPLENBQUMsRUFBcUI7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEseUc7Ozs7OztBQ3BCQSxjQUFjLG1CQUFPLENBQUMsQ0FBYTs7QUFFbkMsNEJBQTRCLG1CQUFPLENBQUMsRUFBNEI7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEg7Ozs7OztBQ2RBLHdCQUF3QixtQkFBTyxDQUFDLEVBQXdCOztBQUV4RCxzQkFBc0IsbUJBQU8sQ0FBQyxFQUFzQjs7QUFFcEQsaUNBQWlDLG1CQUFPLENBQUMsRUFBaUM7O0FBRTFFLHdCQUF3QixtQkFBTyxDQUFDLEVBQXdCOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUEsa0g7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0c7Ozs7OztBQ2ZBLG9CQUFvQixtQkFBTyxDQUFDLEVBQW9COztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsb0c7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsdUc7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlIOzs7Ozs7QUNWQSx1QkFBdUIsbUJBQU8sQ0FBQyxDQUF1Qjs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBLGtIOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUEsZ0g7Ozs7OztBQ0pBLHVCQUF1QixtQkFBTyxDQUFDLENBQXVCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJIOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7O0FBRUEsa0g7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsK0c7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0g7Ozs7OztBQ1JBLHFCQUFxQixtQkFBTyxDQUFDLENBQXFCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztFQUM5QixPQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVILEtBQWYsQ0FBWCxDQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0VBQzdCLE9BQU9MLElBQUksQ0FBQ0UsU0FBTCxDQUFlRSxDQUFmLE1BQXNCSixJQUFJLENBQUNFLFNBQUwsQ0FBZUcsQ0FBZixDQUE3QjtBQUNELENBRk07QUFJQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRixDQUFELEVBQUlDLENBQUosRUFBVTtFQUNqQyxPQUFPTCxJQUFJLENBQUNFLFNBQUwsQ0FBZUUsQ0FBZixNQUFzQkosSUFBSSxDQUFDRSxTQUFMLENBQWVHLENBQWYsQ0FBN0I7QUFDRCxDQUZNO0FBSUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0VBQy9CLE9BQU9BLEtBQUssS0FBSyxJQUFqQjtBQUNELENBRk07QUFJQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDRCxLQUFELEVBQVc7RUFDOUIsT0FBTyxPQUFPQSxLQUFQLEtBQWlCLFdBQXhCO0FBQ0QsQ0FGTTtBQUlBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNGLEtBQUQsRUFBVztFQUMvQixPQUFPLE9BQU9BLEtBQVAsS0FBaUIsV0FBeEI7QUFDRCxDQUZNO0FBSUEsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0gsS0FBRCxFQUFXO0VBQ2pDLE9BQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtBQUNELENBRk07QUFJQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSixLQUFELEVBQVc7RUFDbEMsT0FBT0csUUFBUSxDQUFDSCxLQUFELENBQVIsSUFBbUJBLEtBQUssS0FBS0ssSUFBSSxDQUFDQyxLQUFMLENBQVdOLEtBQVgsQ0FBcEM7QUFDRCxDQUZNO0FBSUEsSUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1AsS0FBRCxFQUFXO0VBQ2pDLE9BQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtBQUNELENBRk07QUFJQSxJQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUixLQUFELEVBQVc7RUFDbEMsT0FBTyxPQUFPQSxLQUFQLEtBQWlCLFNBQXhCO0FBQ0QsQ0FGTTtBQUlBLElBQU1TLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNULEtBQUQsRUFBVztFQUNoQyxPQUFPVSxLQUFLLENBQUNELE9BQU4sQ0FBY1QsS0FBZCxDQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1XLGNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNYLEtBQUQsRUFBVztFQUNqQyxPQUFPLENBQUNELE1BQU0sQ0FBQ0MsS0FBRCxDQUFQLElBQWtCLENBQUNTLE9BQU8sQ0FBQ1QsS0FBRCxDQUExQixJQUFxQyxpQkFBT0EsS0FBUCxNQUFpQixRQUE3RDtBQUNELENBRk07QUFJQSxJQUFNWSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDWixLQUFELEVBQVc7RUFDaEMsSUFBSWEsSUFBSSxHQUFHLEtBQVg7O0VBRUEsSUFBSVYsUUFBUSxDQUFDSCxLQUFELENBQVosRUFBcUI7SUFDbkJhLElBQUksR0FBRyxRQUFQO0VBQ0QsQ0FGRCxNQUVPLElBQUlULFNBQVMsQ0FBQ0osS0FBRCxDQUFiLEVBQXNCO0lBQzNCYSxJQUFJLEdBQUcsU0FBUDtFQUNELENBRk0sTUFFQSxJQUFJTixRQUFRLENBQUNQLEtBQUQsQ0FBWixFQUFxQjtJQUMxQmEsSUFBSSxHQUFHLFFBQVA7RUFDRCxDQUZNLE1BRUEsSUFBSUwsU0FBUyxDQUFDUixLQUFELENBQWIsRUFBc0I7SUFDM0JhLElBQUksR0FBRyxTQUFQO0VBQ0QsQ0FGTSxNQUVBLElBQUlKLE9BQU8sQ0FBQ1QsS0FBRCxDQUFYLEVBQW9CO0lBQ3pCYSxJQUFJLEdBQUcsT0FBUDtFQUNELENBRk0sTUFFQSxJQUFJZCxNQUFNLENBQUNDLEtBQUQsQ0FBVixFQUFtQjtJQUN4QmEsSUFBSSxHQUFHLE1BQVA7RUFDRCxDQUZNLE1BRUEsSUFBSUYsY0FBUSxDQUFDWCxLQUFELENBQVosRUFBcUI7SUFDMUJhLElBQUksR0FBRyxRQUFQO0VBQ0Q7O0VBRUQsT0FBT0EsSUFBUDtBQUNELENBcEJNO0FBc0JBLElBQU1DLGVBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBd0I7RUFBQSxrQ0FBWkMsT0FBWTtJQUFaQSxPQUFZO0VBQUE7O0VBQy9DLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxNQUFiLEVBQXFCLE9BQU9GLE1BQVA7RUFDckIsSUFBTUcsTUFBTSxHQUFHRixPQUFPLENBQUNHLEtBQVIsRUFBZjs7RUFFQSxJQUFJUixjQUFRLENBQUNJLE1BQUQsQ0FBUixJQUFvQkosY0FBUSxDQUFDTyxNQUFELENBQWhDLEVBQTBDO0lBQ3hDRSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsTUFBWixFQUFvQkksT0FBcEIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO01BQ25DLElBQUlaLGNBQVEsQ0FBQ08sTUFBTSxDQUFDSyxHQUFELENBQVAsQ0FBWixFQUEyQjtRQUN6QixJQUFJLENBQUNSLE1BQU0sQ0FBQ1EsR0FBRCxDQUFYLEVBQWtCO1VBQ2hCSCxNQUFNLENBQUNJLE1BQVAsQ0FBY1QsTUFBZCwrQkFDR1EsR0FESCxFQUNTLEVBRFQ7UUFHRDs7UUFDRFQsU0FBUyxDQUFDQyxNQUFNLENBQUNRLEdBQUQsQ0FBUCxFQUFjTCxNQUFNLENBQUNLLEdBQUQsQ0FBcEIsQ0FBVDtNQUNELENBUEQsTUFPTztRQUNMSCxNQUFNLENBQUNJLE1BQVAsQ0FBY1QsTUFBZCwrQkFDR1EsR0FESCxFQUNTTCxNQUFNLENBQUNLLEdBQUQsQ0FEZjtNQUdEO0lBQ0YsQ0FiRDtFQWNEOztFQUVELE9BQU9ULFNBQVMsTUFBVCxVQUFVQyxNQUFWLFNBQXFCQyxPQUFyQixFQUFQO0FBQ0QsQ0F0Qk0sQzs7Ozs7SUN0RURTLDBCO0VBQ0osd0JBQWU7SUFBQTs7SUFDYixLQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0VBQ0Q7Ozs7V0FFRCxZQUFJQyxJQUFKLEVBQVVDLFFBQVYsRUFBb0I7TUFDbEIsS0FBS0YsU0FBTCxDQUFlRyxJQUFmLENBQW9CO1FBQUVGLElBQUksRUFBSkEsSUFBRjtRQUFRQyxRQUFRLEVBQVJBO01BQVIsQ0FBcEI7SUFDRDs7O1dBRUQsY0FBTUQsSUFBTixFQUFZO01BQ1YsSUFBTUQsU0FBUyxHQUFHLEtBQUtBLFNBQUwsQ0FBZUksTUFBZixDQUFzQixVQUFBQyxRQUFRO1FBQUEsT0FBSUEsUUFBUSxDQUFDSixJQUFULEtBQWtCQSxJQUF0QjtNQUFBLENBQTlCLENBQWxCO01BRUFELFNBQVMsQ0FBQ0osT0FBVixDQUFrQixVQUFDUyxRQUFELEVBQWM7UUFDOUJBLFFBQVEsQ0FBQ0gsUUFBVDtNQUNELENBRkQ7SUFHRDs7O1dBRUQsbUJBQVc7TUFBQTs7TUFDVFIsTUFBTSxDQUFDQyxJQUFQLENBQVksSUFBWixFQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFTO1FBQ2pDLE9BQU8sS0FBSSxDQUFDQSxHQUFELENBQVg7TUFDRCxDQUZEO0lBR0Q7Ozs7OztBQUdZRSw0RUFBZixFOzs7Ozs7Ozs7Ozs7QUN4QkE7O0lBRU1PLGlCOzs7OztFQUNKLGtCQUFhQyxNQUFiLEVBQXFCO0lBQUE7O0lBQUE7O0lBQ25CO0lBQ0EsTUFBS0MsSUFBTCxHQUFZRCxNQUFNLENBQUNDLElBQW5CO0lBQ0EsTUFBS0MsTUFBTCxHQUFjRixNQUFNLENBQUNFLE1BQXJCO0lBQ0EsTUFBS25DLEtBQUwsR0FBYWlDLE1BQU0sQ0FBQ2pDLEtBQVAsSUFBZ0JvQyxTQUE3QjtJQUNBLE1BQUtDLFFBQUwsR0FBZ0IsSUFBaEI7SUFDQSxNQUFLQyxJQUFMLEdBQVlMLE1BQU0sQ0FBQ0ssSUFBUCxJQUFlLE1BQTNCO0lBQ0EsTUFBS0MsTUFBTCxHQUFjTixNQUFNLENBQUNNLE1BQVAsSUFBaUIsSUFBL0I7SUFDQSxNQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0lBQ0EsTUFBS0MsRUFBTCxHQUFVLElBQVY7O0lBQ0EsTUFBS0MsSUFBTDs7SUFWbUI7RUFXcEI7RUFFRDtBQUNGO0FBQ0E7Ozs7O1dBQ0UsZ0JBQVE7TUFBQTs7TUFDTixLQUFLQyxRQUFMO01BQ0EsS0FBS0MsZUFBTDtNQUNBLEtBQUtDLE9BQUw7O01BRUEsSUFBSSxLQUFLWCxJQUFMLENBQVVZLE9BQVYsQ0FBa0JDLFFBQXRCLEVBQWdDO1FBQzlCLEtBQUtDLEtBQUw7TUFDRDs7TUFFRCxLQUFLQyxFQUFMLENBQVEsUUFBUixFQUFrQixZQUFNO1FBQ3RCLElBQUksTUFBSSxDQUFDVixNQUFULEVBQWlCO1VBQ2YsTUFBSSxDQUFDQSxNQUFMLENBQVlXLGFBQVo7UUFDRDtNQUNGLENBSkQ7SUFLRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLGlCQUFTLENBQUU7SUFFWDtBQUNGO0FBQ0E7Ozs7V0FDRSxrQkFBVTtNQUNSLE9BQU8sS0FBS1osSUFBTCxDQUFVYSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCQyxHQUFyQixFQUFQO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxvQkFBWTtNQUNWLEtBQUtsQixJQUFMLENBQVVTLFFBQVYsQ0FBbUIsSUFBbkI7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLHNCQUFjO01BQ1osS0FBS1QsSUFBTCxDQUFVbUIsVUFBVixDQUFxQixJQUFyQjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsMkJBQW1CO01BQ2pCLElBQUlyRCxLQUFKO01BRUEsSUFBSSxLQUFLbUMsTUFBTCxDQUFZdEIsSUFBWixPQUF1QixTQUEzQixFQUFzQ2IsS0FBSyxHQUFHLEtBQVI7TUFDdEMsSUFBSSxLQUFLbUMsTUFBTCxDQUFZdEIsSUFBWixPQUF1QixRQUEzQixFQUFxQ2IsS0FBSyxHQUFHLEdBQVI7TUFDckMsSUFBSSxLQUFLbUMsTUFBTCxDQUFZdEIsSUFBWixPQUF1QixTQUEzQixFQUFzQ2IsS0FBSyxHQUFHLENBQVI7TUFDdEMsSUFBSSxLQUFLbUMsTUFBTCxDQUFZdEIsSUFBWixPQUF1QixRQUEzQixFQUFxQ2IsS0FBSyxHQUFHLEVBQVI7TUFDckMsSUFBSSxLQUFLbUMsTUFBTCxDQUFZdEIsSUFBWixPQUF1QixPQUEzQixFQUFvQ2IsS0FBSyxHQUFHLEVBQVI7TUFDcEMsSUFBSSxLQUFLbUMsTUFBTCxDQUFZdEIsSUFBWixPQUF1QixRQUEzQixFQUFxQ2IsS0FBSyxHQUFHLEVBQVI7TUFDckMsSUFBSSxLQUFLbUMsTUFBTCxDQUFZdEIsSUFBWixPQUF1QixNQUEzQixFQUFtQ2IsS0FBSyxHQUFHLElBQVIsQ0FUbEIsQ0FXakI7TUFDQTtNQUNBOztNQUVBLElBQUksS0FBS21DLE1BQUwsYUFBSixFQUEyQjtRQUN6QixJQUFJLEtBQUtBLE1BQUwsY0FBc0IsQ0FBQyxLQUFLQSxNQUFMLFdBQW1CbUIsUUFBbkIsQ0FBNEIsS0FBS25CLE1BQUwsYUFBNUIsQ0FBM0IsRUFBK0U7VUFDN0U7UUFDRDs7UUFFRG5DLEtBQUssR0FBRyxLQUFLbUMsTUFBTCxhQUFSO01BQ0Q7O01BRUQsS0FBS25DLEtBQUwsR0FBYUEsS0FBYjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usb0JBQVk7TUFDVixPQUFPLEtBQUtBLEtBQVo7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLGtCQUFVQSxLQUFWLEVBQWlCO01BQ2YsT0FBT0EsS0FBUDtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usa0JBQVV1RCxRQUFWLEVBQTJDO01BQUEsSUFBdkJDLGNBQXVCLHVFQUFOLElBQU07TUFDekNELFFBQVEsR0FBRyxLQUFLRSxRQUFMLENBQWNGLFFBQWQsQ0FBWDtNQUNBLEtBQUt2RCxLQUFMLEdBQWF1RCxRQUFiOztNQUVBLElBQUlDLGNBQUosRUFBb0I7UUFDbEIsS0FBS0UsSUFBTCxDQUFVLFFBQVY7TUFDRDs7TUFFRCxLQUFLQSxJQUFMLENBQVUsV0FBVjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UseUJBQWlCLENBQ2hCO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usb0JBQVk7TUFDVixPQUFPLEtBQUt4QixJQUFMLENBQVV5QixTQUFWLENBQW9CQyxRQUFwQixDQUE2QixLQUFLQyxRQUFMLEVBQTdCLEVBQThDLEtBQUsxQixNQUFuRCxFQUEyRCxLQUFLMkIsTUFBTCxFQUEzRCxFQUEwRSxLQUFLeEIsSUFBL0UsQ0FBUDtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsbUJBQVcsQ0FBRTtJQUViO0FBQ0Y7QUFDQTs7OztXQUNFLG9CQUFZO01BQ1YsSUFBSSxLQUFLRCxRQUFMLEtBQWtCLEtBQXRCLEVBQTZCO1FBQzNCLEtBQUtBLFFBQUwsR0FBZ0IsSUFBaEI7UUFDQSxLQUFLcUIsSUFBTCxDQUFVLFFBQVY7TUFDRDtJQUNGO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usc0JBQWM7TUFDWixJQUFJLEtBQUtyQixRQUFMLEtBQWtCLElBQXRCLEVBQTRCO1FBQzFCLEtBQUtBLFFBQUwsR0FBZ0IsS0FBaEI7UUFDQSxLQUFLcUIsSUFBTCxDQUFVLFFBQVY7TUFDRDtJQUNGO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsbUJBQVc7TUFBQTs7TUFDVCxLQUFLbEIsUUFBTCxDQUFjbEIsT0FBZCxDQUFzQixVQUFDeUMsS0FBRCxFQUFXO1FBQy9CQSxLQUFLLENBQUNDLE9BQU47TUFDRCxDQUZEO01BSUEsS0FBS1gsVUFBTDs7TUFFQSxJQUFJLEtBQUtaLEVBQVQsRUFBYTtRQUNYLEtBQUtBLEVBQUwsQ0FBUXVCLE9BQVI7TUFDRDs7TUFFRDVDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLElBQVosRUFBa0JDLE9BQWxCLENBQTBCLFVBQUNDLEdBQUQsRUFBUztRQUNqQyxPQUFPLE1BQUksQ0FBQ0EsR0FBRCxDQUFYO01BQ0QsQ0FGRDtJQUdEOzs7O0VBM0tvQkUsYTs7QUE4S1JPLHdFQUFmLEU7Ozs7O0FDaExBOztJQUVNaUMsYTtFQUNKLGdCQUFhOUIsTUFBYixFQUFxQjtJQUFBOztJQUNuQixLQUFLQSxNQUFMLEdBQWNBLE1BQWQ7RUFDRDs7OztXQUVELGlCQUFTO01BQ1AsT0FBTzFCLE9BQU8sQ0FBQyxLQUFLMEIsTUFBTCxDQUFZK0IsS0FBYixDQUFQLEdBQTZCLEtBQUsvQixNQUFMLENBQVkrQixLQUF6QyxHQUFpRCxLQUF4RDtJQUNEOzs7V0FFRCxpQkFBUztNQUNQLE9BQU96RCxPQUFPLENBQUMsS0FBSzBCLE1BQUwsQ0FBWWdDLEtBQWIsQ0FBUCxHQUE2QixLQUFLaEMsTUFBTCxDQUFZZ0MsS0FBekMsR0FBaUQsS0FBeEQ7SUFDRDs7O1dBRUQsa0JBQVM7TUFDUCxPQUFPLEtBQUtoQyxNQUFMLFlBQW9CLEtBQUtBLE1BQUwsU0FBcEIsR0FBd0MsS0FBL0M7SUFDRDs7O1dBRUQsaUJBQVM7TUFDUCxPQUFPM0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlLEtBQUt5QyxNQUFwQixDQUFYLENBQVA7SUFDRDs7O1dBRUQsb0JBQVc7TUFDVCxPQUFPLEtBQUtBLE1BQUwsY0FBc0IsS0FBS0EsTUFBTCxXQUF0QixHQUE0QyxLQUFuRDtJQUNEOzs7V0FFRCw2QkFBcUI7TUFDbkIsT0FBT3hCLGNBQVEsQ0FBQyxLQUFLd0IsTUFBTCxDQUFZaUMsaUJBQWIsQ0FBUixHQUEwQyxLQUFLakMsTUFBTCxDQUFZaUMsaUJBQXRELEdBQTBFLEtBQWpGO0lBQ0Q7OztXQUVELHVCQUFlO01BQ2IsT0FBTzdELFFBQVEsQ0FBQyxLQUFLNEIsTUFBTCxDQUFZa0MsV0FBYixDQUFSLEdBQW9DLEtBQUtsQyxNQUFMLENBQVlrQyxXQUFoRCxHQUE4RCxLQUFyRTtJQUNEOzs7V0FFRCxpQkFBUTtNQUNOLE9BQU8xRCxjQUFRLENBQUMsS0FBS3dCLE1BQUwsUUFBRCxDQUFSLEdBQTZCLEtBQUtBLE1BQUwsUUFBN0IsR0FBZ0QsS0FBdkQ7SUFDRDs7O1dBRUQsaUJBQVE7TUFDTixJQUFJMUIsT0FBTyxDQUFDLEtBQUswQixNQUFMLFFBQUQsQ0FBUCxJQUE2QixLQUFLQSxNQUFMLFNBQWlCbEIsTUFBakIsR0FBMEIsQ0FBM0QsRUFBOEQ7UUFDNUQsT0FBTyxLQUFLa0IsTUFBTCxRQUFQO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELDRCQUFvQjtNQUNsQixPQUFPaEMsUUFBUSxDQUFDLEtBQUtnQyxNQUFMLENBQVltQyxnQkFBYixDQUFSLEdBQXlDLEtBQUtuQyxNQUFMLENBQVltQyxnQkFBckQsR0FBd0UsS0FBL0U7SUFDRDs7O1dBRUQsNEJBQW9CO01BQ2xCLE9BQU9uRSxRQUFRLENBQUMsS0FBS2dDLE1BQUwsQ0FBWW9DLGdCQUFiLENBQVIsR0FBeUMsS0FBS3BDLE1BQUwsQ0FBWW9DLGdCQUFyRCxHQUF3RSxLQUEvRTtJQUNEOzs7V0FFRCxrQkFBVTtNQUNSLE9BQU9oRSxRQUFRLENBQUMsS0FBSzRCLE1BQUwsQ0FBWXFDLE1BQWIsQ0FBUixHQUErQixLQUFLckMsTUFBTCxDQUFZcUMsTUFBM0MsR0FBb0QsS0FBM0Q7SUFDRDs7O1dBRUQsa0JBQVV4RSxLQUFWLEVBQWlCO01BQ2YsT0FBUSxLQUFLd0UsTUFBTCxNQUFpQixLQUFLQSxNQUFMLE9BQWtCeEUsS0FBM0M7SUFDRDs7O1dBRUQsZUFBTTtNQUNKLE9BQU9XLGNBQVEsQ0FBQyxLQUFLd0IsTUFBTCxNQUFELENBQVIsR0FBMkIsS0FBS0EsTUFBTCxNQUEzQixHQUE0QyxLQUFuRDtJQUNEOzs7V0FFRCxpQkFBUztNQUNQLE9BQU94QixjQUFRLENBQUMsS0FBS3dCLE1BQUwsQ0FBWXNDLEtBQWIsQ0FBUixHQUE4QixLQUFLdEMsTUFBTCxDQUFZc0MsS0FBMUMsR0FBa0QsS0FBekQ7SUFDRDs7O1dBRUQsbUJBQVc7TUFDVCxPQUFRLEtBQUt0QyxNQUFMLENBQVl1QyxPQUFiLEdBQXdCLEtBQUt2QyxNQUFMLENBQVl1QyxPQUFwQyxHQUE4QyxLQUFyRDtJQUNEOzs7V0FFRCxvQkFBWTtNQUNWLElBQUl0RSxTQUFTLENBQUMsS0FBSytCLE1BQUwsQ0FBWXdDLFFBQWIsQ0FBVCxJQUFtQyxLQUFLeEMsTUFBTCxDQUFZd0MsUUFBWixJQUF3QixDQUEvRCxFQUFrRTtRQUNoRSxPQUFPLEtBQUt4QyxNQUFMLENBQVl3QyxRQUFuQjtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCxxQkFBYTtNQUNYLElBQUl2RSxTQUFTLENBQUMsS0FBSytCLE1BQUwsQ0FBWXlDLFNBQWIsQ0FBVCxJQUFvQyxLQUFLekMsTUFBTCxDQUFZeUMsU0FBWixJQUF5QixDQUFqRSxFQUFvRTtRQUNsRSxPQUFPLEtBQUt6QyxNQUFMLENBQVl5QyxTQUFuQjtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCx5QkFBaUI7TUFDZixJQUFJeEUsU0FBUyxDQUFDLEtBQUsrQixNQUFMLENBQVkwQyxhQUFiLENBQVQsSUFBd0MsS0FBSzFDLE1BQUwsQ0FBWTBDLGFBQVosSUFBNkIsQ0FBekUsRUFBNEU7UUFDMUUsT0FBTyxLQUFLMUMsTUFBTCxDQUFZMEMsYUFBbkI7TUFDRDs7TUFFRCxPQUFPLEtBQVA7SUFDRDs7O1dBRUQsbUJBQVc7TUFDVCxPQUFPMUUsUUFBUSxDQUFDLEtBQUtnQyxNQUFMLENBQVkyQyxPQUFiLENBQVIsR0FBZ0MsS0FBSzNDLE1BQUwsQ0FBWTJDLE9BQTVDLEdBQXNELEtBQTdEO0lBQ0Q7OztXQUVELG9CQUFZO01BQ1YsSUFBSTFFLFNBQVMsQ0FBQyxLQUFLK0IsTUFBTCxDQUFZNEMsUUFBYixDQUFULElBQW1DLEtBQUs1QyxNQUFMLENBQVk0QyxRQUFaLElBQXdCLENBQS9ELEVBQWtFO1FBQ2hFLE9BQU8sS0FBSzVDLE1BQUwsQ0FBWTRDLFFBQW5CO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELHFCQUFhO01BQ1gsSUFBSTNFLFNBQVMsQ0FBQyxLQUFLK0IsTUFBTCxDQUFZNkMsU0FBYixDQUFULElBQW9DLEtBQUs3QyxNQUFMLENBQVk2QyxTQUFaLElBQXlCLENBQWpFLEVBQW9FO1FBQ2xFLE9BQU8sS0FBSzdDLE1BQUwsQ0FBWTZDLFNBQW5CO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELHlCQUFpQjtNQUNmLElBQUk1RSxTQUFTLENBQUMsS0FBSytCLE1BQUwsQ0FBWThDLGFBQWIsQ0FBVCxJQUF3QyxLQUFLOUMsTUFBTCxDQUFZOEMsYUFBWixJQUE2QixDQUF6RSxFQUE0RTtRQUMxRSxPQUFPLEtBQUs5QyxNQUFMLENBQVk4QyxhQUFuQjtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCxzQkFBYztNQUNaLElBQUk5RSxRQUFRLENBQUMsS0FBS2dDLE1BQUwsQ0FBWStDLFVBQWIsQ0FBUixJQUFvQyxLQUFLL0MsTUFBTCxDQUFZK0MsVUFBWixJQUEwQixDQUFsRSxFQUFxRTtRQUNuRSxPQUFPLEtBQUsvQyxNQUFMLENBQVkrQyxVQUFuQjtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCxlQUFPO01BQ0wsT0FBT3ZFLGNBQVEsQ0FBQyxLQUFLd0IsTUFBTCxDQUFZZ0QsR0FBYixDQUFSLEdBQTRCLEtBQUtoRCxNQUFMLENBQVlnRCxHQUF4QyxHQUE4QyxLQUFyRDtJQUNEOzs7V0FFRCxnQkFBUUMsT0FBUixFQUFnQjtNQUNkLE9BQVEsS0FBS2pELE1BQUwsQ0FBWVcsT0FBWixJQUF1QixLQUFLWCxNQUFMLENBQVlXLE9BQVosQ0FBb0JzQyxPQUFwQixDQUF4QixHQUF1RCxLQUFLakQsTUFBTCxDQUFZVyxPQUFaLENBQW9Cc0MsT0FBcEIsQ0FBdkQsR0FBcUYsS0FBNUY7SUFDRDs7O1dBRUQsbUJBQVc7TUFDVCxPQUFPN0UsUUFBUSxDQUFDLEtBQUs0QixNQUFMLENBQVlrRCxPQUFiLENBQVIsR0FBZ0MsS0FBS2xELE1BQUwsQ0FBWWtELE9BQTVDLEdBQXNELEtBQTdEO0lBQ0Q7OztXQUVELDZCQUFxQjtNQUNuQixPQUFPMUUsY0FBUSxDQUFDLEtBQUt3QixNQUFMLENBQVltRCxpQkFBYixDQUFSLEdBQTBDLEtBQUtuRCxNQUFMLENBQVltRCxpQkFBdEQsR0FBMEUsS0FBakY7SUFDRDs7O1dBRUQsa0JBQVUvRCxHQUFWLEVBQWU7TUFDYixPQUFPLEtBQUtnRSxVQUFMLElBQW1CLEtBQUtwRCxNQUFMLENBQVlvRCxVQUFaLENBQXVCaEUsR0FBdkIsQ0FBbkIsR0FBaUQsS0FBS1ksTUFBTCxDQUFZb0QsVUFBWixDQUF1QmhFLEdBQXZCLENBQWpELEdBQStFLEtBQXRGO0lBQ0Q7OztXQUVELHNCQUFjO01BQ1osT0FBTyxLQUFLWSxNQUFMLENBQVlvRCxVQUFaLEdBQXlCLEtBQUtwRCxNQUFMLENBQVlvRCxVQUFyQyxHQUFrRCxLQUF6RDtJQUNEOzs7V0FFRCxvQkFBWTtNQUNWLE9BQU85RSxPQUFPLENBQUMsS0FBSzBCLE1BQUwsQ0FBWXFELFFBQWIsQ0FBUCwrQkFBb0MsSUFBSUMsR0FBSixDQUFRLEtBQUt0RCxNQUFMLENBQVlxRCxRQUFwQixDQUFwQyxJQUFxRSxLQUE1RTtJQUNEOzs7V0FFRCxnQkFBUTtNQUNOLE9BQU83RSxjQUFRLENBQUMsS0FBS3dCLE1BQUwsQ0FBWXVELElBQWIsQ0FBUixHQUE2QixLQUFLdkQsTUFBTCxDQUFZdUQsSUFBekMsR0FBZ0QsS0FBdkQ7SUFDRDs7O1dBRUQsaUJBQVM7TUFDUCxPQUFPbkYsUUFBUSxDQUFDLEtBQUs0QixNQUFMLENBQVl3RCxLQUFiLENBQVIsR0FBOEIsS0FBS3hELE1BQUwsQ0FBWXdELEtBQTFDLEdBQWtELEtBQXpEO0lBQ0Q7OztXQUVELGdCQUFRO01BQ04sSUFBSXBGLFFBQVEsQ0FBQyxLQUFLNEIsTUFBTCxDQUFZdEIsSUFBYixDQUFSLElBQThCSixPQUFPLENBQUMsS0FBSzBCLE1BQUwsQ0FBWXRCLElBQWIsQ0FBekMsRUFBNkQ7UUFDM0QsT0FBTyxLQUFLc0IsTUFBTCxDQUFZdEIsSUFBbkI7TUFDRDs7TUFFRCxPQUFPLEtBQVA7SUFDRDs7O1dBRUQsZ0JBQVFiLEtBQVIsRUFBZTtNQUNiLE9BQVEsS0FBS2EsSUFBTCxNQUFlLEtBQUtBLElBQUwsT0FBZ0JiLEtBQXZDO0lBQ0Q7OztXQUVELGlCQUFTO01BQ1AsT0FBT1MsT0FBTyxDQUFDLEtBQUswQixNQUFMLENBQVl0QixJQUFiLENBQWQ7SUFDRDs7O1dBRUQseUJBQWlCO01BQ2YsT0FBTyxLQUFLK0UsTUFBTCxDQUFZLFFBQVosS0FBeUIsS0FBS0EsTUFBTCxDQUFZLFNBQVosQ0FBaEM7SUFDRDs7O1dBRUQsaUJBQVM7TUFDUCxPQUFPbkYsT0FBTyxDQUFDLEtBQUswQixNQUFMLENBQVkwRCxLQUFiLENBQVAsR0FBNkIsS0FBSzFELE1BQUwsQ0FBWTBELEtBQXpDLEdBQWlELEtBQXhEO0lBQ0Q7OztXQUVELHVCQUFlO01BQ2IsT0FBT3JGLFNBQVMsQ0FBQyxLQUFLMkIsTUFBTCxDQUFZMkQsV0FBYixDQUFULEdBQXFDLEtBQUszRCxNQUFMLENBQVkyRCxXQUFqRCxHQUErRCxLQUF0RTtJQUNEOzs7V0FFRCxtQkFBVztNQUFBOztNQUNUMUUsTUFBTSxDQUFDQyxJQUFQLENBQVksSUFBWixFQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFTO1FBQ2pDLE9BQU8sS0FBSSxDQUFDQSxHQUFELENBQVg7TUFDRCxDQUZEO0lBR0Q7Ozs7OztBQUdZMEMsNERBQWYsRTs7Ozs7SUM5TU04Qix3Qjs7Ozs7OztXQUNKLHVCQUFlOUQsTUFBZixFQUF1QjtNQUNyQixJQUFNK0QsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDtNQUNBRixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLG9CQUFwQjtNQUNBSixLQUFLLENBQUNLLFdBQU4sR0FBb0JwRSxNQUFNLENBQUNxRSxPQUEzQjtNQUNBLE9BQU9OLEtBQVA7SUFDRDs7O1dBRUQsNkJBQXFCO01BQ25CLElBQU1PLElBQUksR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWI7TUFDQUssSUFBSSxDQUFDSixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsc0JBQW5CO01BQ0EsT0FBT0csSUFBUDtJQUNEOzs7V0FFRCwwQkFBa0I7TUFDaEIsSUFBTUEsSUFBSSxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtNQUNBSyxJQUFJLENBQUNKLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixtQkFBbkI7TUFDQSxPQUFPRyxJQUFQO0lBQ0Q7OztXQUVELCtCQUF1QjtNQUNyQixJQUFNQSxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO01BQ0FLLElBQUksQ0FBQ0osU0FBTCxDQUFlQyxHQUFmLENBQW1CLHlCQUFuQjtNQUNBLE9BQU9HLElBQVA7SUFDRDs7O1dBRUQsdUJBQWU7TUFDYixPQUFPTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUDtJQUNEOzs7V0FFRCxtQkFBV2pFLE1BQVgsRUFBbUI7TUFDakIsSUFBTXVFLE1BQU0sR0FBR1AsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7TUFDQU0sTUFBTSxDQUFDQyxZQUFQLENBQW9CLE1BQXBCLEVBQTRCLFFBQTVCO01BQ0FELE1BQU0sQ0FBQ3hHLEtBQVAsR0FBZWlDLE1BQU0sQ0FBQ2pDLEtBQXRCO01BQ0F3RyxNQUFNLENBQUNILFdBQVAsR0FBcUJwRSxNQUFNLENBQUNvRSxXQUE1QjtNQUNBLE9BQU9HLE1BQVA7SUFDRDs7O1dBRUQsZ0NBQXdCO01BQ3RCLE9BQU8sVUFBUDtJQUNEOzs7V0FFRCx3QkFBZ0I7TUFDZCxPQUFPUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUDtJQUNEOzs7V0FFRCx3QkFBZ0JqRSxNQUFoQixFQUF3QjtNQUN0QixJQUFNeUUsU0FBUyxHQUFHVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7TUFDQVEsU0FBUyxDQUFDTCxXQUFWLEdBQXdCcEUsTUFBTSxDQUFDb0UsV0FBL0I7TUFDQSxPQUFPSyxTQUFQO0lBQ0Q7OztXQUVELHVCQUFlO01BQ2IsT0FBT1QsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQVA7SUFDRDs7O1dBRUQsMkJBQW1CO01BQ2pCLElBQU1TLFlBQVksR0FBR1YsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXJCO01BQ0FTLFlBQVksQ0FBQ1IsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsb0JBQTNCO01BQ0EsT0FBT08sWUFBUDtJQUNEOzs7V0FFRCwwQkFBa0IxRSxNQUFsQixFQUEwQjtNQUN4QixJQUFNMkUsS0FBSyxHQUFHWCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtNQUNBVSxLQUFLLENBQUNILFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEJ4RSxNQUFNLE9BQWhDO01BQ0EyRSxLQUFLLENBQUNQLFdBQU4sR0FBb0JwRSxNQUFNLENBQUNvRSxXQUEzQjs7TUFFQSxJQUFJcEUsTUFBTSxDQUFDNEUsTUFBWCxFQUFtQjtRQUNqQkQsS0FBSyxDQUFDVCxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixTQUFwQjtNQUNEOztNQUVELE9BQU9RLEtBQVA7SUFDRDs7O1dBRUQsd0JBQWdCM0UsTUFBaEIsRUFBd0I7TUFDdEIsSUFBTTJFLEtBQUssR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWQ7TUFDQVUsS0FBSyxDQUFDUCxXQUFOLEdBQW9CcEUsTUFBTSxDQUFDb0UsV0FBM0I7O01BRUEsSUFBSXBFLE1BQU0sQ0FBQzRFLE1BQVgsRUFBbUI7UUFDakJELEtBQUssQ0FBQ1QsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7TUFDRDs7TUFFRCxPQUFPUSxLQUFQO0lBQ0Q7OztXQUVELHVCQUFlM0UsTUFBZixFQUF1QjtNQUNyQixJQUFNMkUsS0FBSyxHQUFHWCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtNQUNBVSxLQUFLLENBQUNILFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEJ4RSxNQUFNLE9BQWhDO01BQ0EyRSxLQUFLLENBQUNQLFdBQU4sR0FBb0JwRSxNQUFNLENBQUNvRSxXQUEzQjs7TUFFQSxJQUFJcEUsTUFBTSxDQUFDNEUsTUFBWCxFQUFtQjtRQUNqQkQsS0FBSyxDQUFDVCxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixTQUFwQjtNQUNEOztNQUVELE9BQU9RLEtBQVA7SUFDRDs7O1dBRUQsa0JBQVUzRSxNQUFWLEVBQWtCO01BQ2hCLElBQU0yRSxLQUFLLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO01BQ0FVLEtBQUssQ0FBQ0gsWUFBTixDQUFtQixLQUFuQixFQUEwQnhFLE1BQU0sT0FBaEM7TUFDQTJFLEtBQUssQ0FBQ1AsV0FBTixHQUFvQnBFLE1BQU0sQ0FBQ29FLFdBQTNCOztNQUVBLElBQUlwRSxNQUFNLENBQUM0RSxNQUFYLEVBQW1CO1FBQ2pCRCxLQUFLLENBQUNULFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFNBQXBCO01BQ0Q7O01BRUQsT0FBT1EsS0FBUDtJQUNEOzs7V0FFRCxnQ0FBd0I7TUFDdEIsT0FBT1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVA7SUFDRDs7O1dBRUQsNkJBQXFCO01BQ25CLE9BQU9ELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFQO0lBQ0Q7OztXQUVELG1CQUFXakUsTUFBWCxFQUFtQjtNQUNqQixJQUFNNkUsTUFBTSxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtNQUNBWSxNQUFNLENBQUNULFdBQVAsR0FBcUJwRSxNQUFNLENBQUNvRSxXQUE1QjtNQUNBUyxNQUFNLENBQUNMLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsY0FBN0I7O01BRUEsSUFBSXhFLE1BQU0sQ0FBQzRFLE1BQVgsRUFBbUI7UUFDakJDLE1BQU0sQ0FBQ1gsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsU0FBckI7TUFDRDs7TUFFRCxPQUFPVSxNQUFQO0lBQ0Q7OztXQUVELGtCQUFVN0UsTUFBVixFQUFrQjtNQUNoQixJQUFNOEUsS0FBSyxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtNQUNBYSxLQUFLLENBQUNOLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkJ4RSxNQUFNLENBQUNwQixJQUFsQztNQUNBa0csS0FBSyxDQUFDTixZQUFOLENBQW1CLElBQW5CLEVBQXlCeEUsTUFBTSxDQUFDK0UsRUFBaEM7TUFDQUQsS0FBSyxDQUFDWixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixjQUFwQjtNQUNBLE9BQU9XLEtBQVA7SUFDRDs7O1dBRUQscUJBQWE5RSxNQUFiLEVBQXFCO01BQ25CLElBQU1nRixRQUFRLEdBQUdoQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakI7TUFDQWUsUUFBUSxDQUFDUixZQUFULENBQXNCLElBQXRCLEVBQTRCeEUsTUFBTSxDQUFDK0UsRUFBbkM7TUFDQUMsUUFBUSxDQUFDUixZQUFULENBQXNCLE1BQXRCLEVBQThCLFVBQTlCO01BQ0EsT0FBT1EsUUFBUDtJQUNEOzs7V0FFRCxrQkFBVWhGLE1BQVYsRUFBa0I7TUFDaEIsSUFBTWlGLEtBQUssR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO01BQ0FnQixLQUFLLENBQUNULFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsT0FBM0I7TUFDQVMsS0FBSyxDQUFDVCxZQUFOLENBQW1CLE9BQW5CLEVBQTRCeEUsTUFBTSxDQUFDakMsS0FBbkM7TUFDQWtILEtBQUssQ0FBQ1QsWUFBTixDQUFtQixJQUFuQixFQUF5QnhFLE1BQU0sQ0FBQytFLEVBQWhDO01BQ0EsT0FBT0UsS0FBUDtJQUNEOzs7V0FFRCxxQkFBYWpGLE1BQWIsRUFBcUI7TUFDbkIsSUFBTWtGLFFBQVEsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFqQjtNQUNBaUIsUUFBUSxDQUFDVixZQUFULENBQXNCLElBQXRCLEVBQTRCeEUsTUFBTSxDQUFDK0UsRUFBbkM7TUFDQSxPQUFPRyxRQUFQO0lBQ0Q7OztXQUVELG1CQUFXbEYsTUFBWCxFQUFtQjtNQUNqQixJQUFNbUYsTUFBTSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7TUFDQWtCLE1BQU0sQ0FBQ1gsWUFBUCxDQUFvQixJQUFwQixFQUEwQnhFLE1BQU0sQ0FBQytFLEVBQWpDO01BRUEvRSxNQUFNLENBQUNvRixZQUFQLENBQW9CL0YsT0FBcEIsQ0FBNEIsVUFBQ3RCLEtBQUQsRUFBUXNILEtBQVIsRUFBa0I7UUFDNUMsSUFBTWxDLE1BQU0sR0FBR2EsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7UUFDQWQsTUFBTSxDQUFDcUIsWUFBUCxDQUFvQixPQUFwQixFQUE2QnpHLEtBQTdCO1FBQ0FvRixNQUFNLENBQUNpQixXQUFQLEdBQXFCcEUsTUFBTSxDQUFDc0YsYUFBUCxDQUFxQkQsS0FBckIsQ0FBckI7UUFDQUYsTUFBTSxDQUFDSSxXQUFQLENBQW1CcEMsTUFBbkI7TUFDRCxDQUxEO01BT0EsT0FBT2dDLE1BQVA7SUFDRDs7Ozs7O0FBR1lyQixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUM3S0E7O0lBRU0wQix3Qjs7Ozs7Ozs7Ozs7OztXQUNKLHVCQUFleEYsTUFBZixFQUF1QjtNQUNyQixJQUFNK0QsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDtNQUNBRixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLG9CQUFwQjtNQUNBSixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCO01BQ0FKLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsY0FBcEI7TUFDQUosS0FBSyxDQUFDSyxXQUFOLEdBQW9CcEUsTUFBTSxDQUFDcUUsT0FBM0I7TUFDQSxPQUFPTixLQUFQO0lBQ0Q7OztXQUVELHVCQUFlO01BQ2IsSUFBTTBCLFFBQVEsR0FBR3pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtNQUNBd0IsUUFBUSxDQUFDdkIsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsV0FBdkI7TUFDQSxPQUFPc0IsUUFBUDtJQUNEOzs7V0FFRCxtQkFBV3pGLE1BQVgsRUFBbUI7TUFDakIsSUFBTXVFLE1BQU0sR0FBR1AsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7TUFDQU0sTUFBTSxDQUFDTCxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixLQUFyQjtNQUNBSSxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsTUFBcEIsRUFBNEIsUUFBNUI7TUFDQUQsTUFBTSxDQUFDeEcsS0FBUCxHQUFlaUMsTUFBTSxDQUFDakMsS0FBdEI7TUFDQXdHLE1BQU0sQ0FBQ0gsV0FBUCxHQUFxQnBFLE1BQU0sQ0FBQ29FLFdBQTVCO01BQ0EsT0FBT0csTUFBUDtJQUNEOzs7V0FFRCx3QkFBZ0I7TUFDZCxJQUFNRSxTQUFTLEdBQUdULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtNQUNBUSxTQUFTLENBQUNQLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFlBQXhCO01BQ0EsT0FBT00sU0FBUDtJQUNEOzs7V0FFRCx1QkFBZTtNQUNiLElBQU1pQixRQUFRLEdBQUcxQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7TUFDQXlCLFFBQVEsQ0FBQ3hCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLE1BQXZCO01BQ0F1QixRQUFRLENBQUN4QixTQUFULENBQW1CQyxHQUFuQixDQUF1QixXQUF2QjtNQUNBLE9BQU91QixRQUFQO0lBQ0Q7OztXQUVELDBCQUFrQjFGLE1BQWxCLEVBQTBCO01BQ3hCLElBQU0yRSxLQUFLLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO01BQ0FVLEtBQUssQ0FBQ1QsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0Isa0JBQXBCO01BQ0FRLEtBQUssQ0FBQ0gsWUFBTixDQUFtQixLQUFuQixFQUEwQnhFLE1BQU0sT0FBaEM7TUFDQTJFLEtBQUssQ0FBQ1AsV0FBTixHQUFvQnBFLE1BQU0sQ0FBQ29FLFdBQTNCOztNQUVBLElBQUlwRSxNQUFNLENBQUM0RSxNQUFYLEVBQW1CO1FBQ2pCRCxLQUFLLENBQUNULFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFNBQXBCO01BQ0Q7O01BRUQsT0FBT1EsS0FBUDtJQUNEOzs7V0FFRCxxQkFBYTNFLE1BQWIsRUFBcUI7TUFDbkIsSUFBTWdGLFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFqQjtNQUNBZSxRQUFRLENBQUNkLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGtCQUF2QjtNQUNBYSxRQUFRLENBQUNSLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEIsVUFBOUI7TUFDQVEsUUFBUSxDQUFDUixZQUFULENBQXNCLElBQXRCLEVBQTRCeEUsTUFBTSxDQUFDK0UsRUFBbkM7TUFDQSxPQUFPQyxRQUFQO0lBQ0Q7OztXQUVELDZCQUFxQjtNQUNuQixJQUFNVyxpQkFBaUIsR0FBRzNCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUExQjtNQUNBMEIsaUJBQWlCLENBQUN6QixTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsWUFBaEM7TUFDQXdCLGlCQUFpQixDQUFDekIsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLG1CQUFoQztNQUNBLE9BQU93QixpQkFBUDtJQUNEOzs7V0FFRCx1QkFBZTNGLE1BQWYsRUFBdUI7TUFDckIsSUFBTTJFLEtBQUssR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQVUsS0FBSyxDQUFDVCxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixrQkFBcEI7TUFDQVEsS0FBSyxDQUFDSCxZQUFOLENBQW1CLEtBQW5CLEVBQTBCeEUsTUFBTSxPQUFoQztNQUNBMkUsS0FBSyxDQUFDUCxXQUFOLEdBQW9CcEUsTUFBTSxDQUFDb0UsV0FBM0I7O01BRUEsSUFBSXBFLE1BQU0sQ0FBQzRFLE1BQVgsRUFBbUI7UUFDakJELEtBQUssQ0FBQ1QsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7TUFDRDs7TUFFRCxPQUFPUSxLQUFQO0lBQ0Q7OztXQUVELGtCQUFVM0UsTUFBVixFQUFrQjtNQUNoQixJQUFNaUYsS0FBSyxHQUFHakIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQWdCLEtBQUssQ0FBQ2YsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0Isa0JBQXBCO01BQ0FjLEtBQUssQ0FBQ1QsWUFBTixDQUFtQixNQUFuQixFQUEyQixPQUEzQjtNQUNBUyxLQUFLLENBQUNULFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEJ4RSxNQUFNLENBQUNqQyxLQUFuQztNQUNBa0gsS0FBSyxDQUFDVCxZQUFOLENBQW1CLElBQW5CLEVBQXlCeEUsTUFBTSxDQUFDK0UsRUFBaEM7TUFDQSxPQUFPRSxLQUFQO0lBQ0Q7OztXQUVELHFCQUFhakYsTUFBYixFQUFxQjtNQUNuQixJQUFNa0YsUUFBUSxHQUFHbEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWpCO01BQ0FpQixRQUFRLENBQUNWLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEJ4RSxNQUFNLENBQUMrRSxFQUFuQztNQUNBRyxRQUFRLENBQUNoQixTQUFULENBQW1CQyxHQUFuQixDQUF1QixjQUF2QjtNQUNBLE9BQU9lLFFBQVA7SUFDRDs7O1dBRUQsbUJBQVdsRixNQUFYLEVBQW1CO01BQ2pCLElBQU1tRixNQUFNLEdBQUduQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtNQUNBa0IsTUFBTSxDQUFDWCxZQUFQLENBQW9CLElBQXBCLEVBQTBCeEUsTUFBTSxDQUFDK0UsRUFBakM7TUFDQUksTUFBTSxDQUFDakIsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsY0FBckI7TUFFQW5FLE1BQU0sQ0FBQ29GLFlBQVAsQ0FBb0IvRixPQUFwQixDQUE0QixVQUFDdEIsS0FBRCxFQUFRc0gsS0FBUixFQUFrQjtRQUM1QyxJQUFNbEMsTUFBTSxHQUFHYSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtRQUNBZCxNQUFNLENBQUNxQixZQUFQLENBQW9CLE9BQXBCLEVBQTZCekcsS0FBN0I7UUFDQW9GLE1BQU0sQ0FBQ2lCLFdBQVAsR0FBcUJwRSxNQUFNLENBQUNzRixhQUFQLENBQXFCRCxLQUFyQixDQUFyQjtRQUNBRixNQUFNLENBQUNJLFdBQVAsQ0FBbUJwQyxNQUFuQjtNQUNELENBTEQ7TUFPQSxPQUFPZ0MsTUFBUDtJQUNEOzs7O0VBNUcwQnJCLFM7O0FBK0dkMEIsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7O0lBRU1JLGE7Ozs7O0VBQ0osZ0JBQWFDLFFBQWIsRUFBdUI7SUFBQTs7SUFBQTs7SUFDckI7SUFDQSxNQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLE1BQUtDLEtBQUwsR0FBYSxJQUFJTixTQUFKLEVBQWI7SUFDQSxNQUFLZixTQUFMLEdBQWlCLE1BQUtxQixLQUFMLENBQVdDLFlBQVgsRUFBakI7SUFDQSxNQUFLQyxjQUFMLEdBQXNCLE1BQUtGLEtBQUwsQ0FBV0csaUJBQVgsRUFBdEI7SUFDQSxNQUFLdkIsWUFBTCxHQUFvQixNQUFLb0IsS0FBTCxDQUFXSSxlQUFYLEVBQXBCO0lBQ0EsTUFBS0MsV0FBTCxHQUFtQixNQUFLTCxLQUFMLENBQVdNLGNBQVgsRUFBbkI7SUFDQSxNQUFLQyxnQkFBTCxHQUF3QixNQUFLUCxLQUFMLENBQVdRLG1CQUFYLEVBQXhCO0lBQ0EsTUFBS0MsUUFBTCxHQUFnQixLQUFoQjs7SUFDQSxNQUFLQyxLQUFMOztJQUNBLE1BQUtDLHNCQUFMOztJQUNBLE1BQUtDLFNBQUw7O0lBRUEsSUFBSSxNQUFLYixRQUFMLENBQWM1RixJQUFkLENBQW1CMEcsS0FBbkIsSUFBNEIsTUFBS2QsUUFBTCxDQUFjNUYsSUFBZCxDQUFtQlksT0FBbkIsQ0FBMkIrRixnQkFBdkQsSUFBMkUsTUFBS2YsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmlELE1BQXJCLENBQTRCLGtCQUE1QixDQUEvRSxFQUFnSTtNQUM5SCxNQUFLMEQsb0JBQUw7SUFDRDs7SUFFRCxNQUFLaEIsUUFBTCxDQUFjN0UsRUFBZCxDQUFpQixXQUFqQixFQUE4QixZQUFNO01BQ2xDLE1BQUswRixTQUFMO0lBQ0QsQ0FGRDs7SUFJQSxNQUFLYixRQUFMLENBQWM3RSxFQUFkLENBQWlCLFFBQWpCLEVBQTJCLFlBQU07TUFDL0IsTUFBSzZGLG9CQUFMO0lBQ0QsQ0FGRDs7SUF0QnFCO0VBeUJ0Qjs7OztXQUVELGtDQUEwQjtNQUN4QixLQUFLcEMsU0FBTCxDQUFlRCxZQUFmLENBQTRCLFdBQTVCLEVBQXlDLEtBQUtxQixRQUFMLENBQWN4RixJQUF2RDs7TUFFQSxJQUFJLEtBQUt3RixRQUFMLENBQWMzRixNQUFkLENBQXFCdEIsSUFBckIsRUFBSixFQUFpQztRQUMvQixLQUFLNkYsU0FBTCxDQUFlRCxZQUFmLENBQTRCLFdBQTVCLEVBQXlDLEtBQUtxQixRQUFMLENBQWMzRixNQUFkLENBQXFCdEIsSUFBckIsRUFBekM7TUFDRDtJQUNGOzs7V0FFRCxpQkFBUyxDQUFFOzs7V0FFWCxxQkFBYSxDQUFFO0lBRWY7QUFDRjtBQUNBOzs7O1dBQ0UsZ0NBQXdCO01BQUE7O01BQ3RCLElBQU1rSSxNQUFNLEdBQUcsS0FBS2pCLFFBQUwsQ0FBY2xFLFFBQWQsRUFBZjtNQUVBLEtBQUsrQyxZQUFMLENBQWtCcUMsU0FBbEIsR0FBOEIsRUFBOUI7TUFFQUQsTUFBTSxDQUFDekgsT0FBUCxDQUFlLFVBQUMwRSxLQUFELEVBQVc7UUFDeEIsTUFBSSxDQUFDVyxZQUFMLENBQWtCYSxXQUFsQixDQUE4QixNQUFJLENBQUNPLEtBQUwsQ0FBV2tCLGFBQVgsQ0FBeUI7VUFDckQzQyxPQUFPLEVBQUVOLEtBQUssQ0FBQ007UUFEc0MsQ0FBekIsQ0FBOUI7TUFHRCxDQUpEO0lBS0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxtQkFBVztNQUNULEtBQUtrQyxRQUFMLEdBQWdCLElBQWhCO01BQ0EsS0FBS0csU0FBTDtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usa0JBQVU7TUFDUixLQUFLSCxRQUFMLEdBQWdCLEtBQWhCO01BQ0EsS0FBS0csU0FBTDtJQUNEOzs7V0FFRCxtQkFBVztNQUFBOztNQUNULElBQUksS0FBS2pDLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFld0MsVUFBckMsRUFBaUQ7UUFDL0MsS0FBS3hDLFNBQUwsQ0FBZXdDLFVBQWYsQ0FBMEJDLFdBQTFCLENBQXNDLEtBQUt6QyxTQUEzQztNQUNEOztNQUVEdEYsTUFBTSxDQUFDQyxJQUFQLENBQVksSUFBWixFQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFTO1FBQ2pDLE9BQU8sTUFBSSxDQUFDQSxHQUFELENBQVg7TUFDRCxDQUZEO0lBR0Q7Ozs7RUEvRWtCRSxhOztBQWtGTm9HLGdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUVBO0FBQ0E7QUFDQTs7SUFFTXVCLGlCOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLQyxZQUFMO01BQ0EsS0FBSzNDLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLYixZQUFoQztNQUNBLEtBQUtELFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLYyxnQkFBaEM7TUFDQSxLQUFLNUIsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtZLFdBQWhDLEVBSk8sQ0FNUDs7TUFDQSxJQUFNVixRQUFRLEdBQUcsS0FBS0ssS0FBTCxDQUFXdUIsV0FBWCxFQUFqQixDQVBPLENBU1A7O01BQ0EsS0FBS0MsTUFBTCxHQUFjLEtBQUt4QixLQUFMLENBQVd5QixTQUFYLENBQXFCO1FBQ2pDbkQsV0FBVyxFQUFFO01BRG9CLENBQXJCLENBQWQ7TUFJQSxLQUFLa0QsTUFBTCxDQUFZRSxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO1FBQzFDLEtBQUksQ0FBQzNCLFFBQUwsQ0FBYzRCLE9BQWQ7TUFDRCxDQUZELEVBZE8sQ0FrQlA7O01BQ0EsS0FBS0MsWUFBTCxHQUFvQixLQUFLNUIsS0FBTCxDQUFXeUIsU0FBWCxDQUFxQjtRQUN2Q25ELFdBQVcsRUFBRTtNQUQwQixDQUFyQixDQUFwQjtNQUlBLEtBQUtzRCxZQUFMLENBQWtCRixnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsWUFBTTtRQUNoRCxJQUFJRyxPQUFPLENBQUMsdUJBQUQsQ0FBWCxFQUFzQztVQUNwQyxLQUFJLENBQUM5QixRQUFMLENBQWMrQixRQUFkLENBQXVCLEVBQXZCO1FBQ0Q7TUFDRixDQUpEO01BTUEsS0FBS3pCLFdBQUwsQ0FBaUJaLFdBQWpCLENBQTZCRSxRQUE3QjtNQUNBQSxRQUFRLENBQUNGLFdBQVQsQ0FBcUIsS0FBSytCLE1BQTFCO01BQ0E3QixRQUFRLENBQUNGLFdBQVQsQ0FBcUIsS0FBS21DLFlBQTFCO0lBQ0Q7OztXQUVELHdCQUFnQjtNQUNkLEtBQUtqRCxTQUFMLEdBQWlCLEtBQUtxQixLQUFMLENBQVcrQixXQUFYLEVBQWpCLENBRGMsQ0FHZDs7TUFDQSxLQUFLcEQsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtPLEtBQUwsQ0FBV2dDLFNBQVgsQ0FBcUI7UUFDOUMxRCxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJ3RCxLQUFyQixLQUErQixLQUFLbUMsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQndELEtBQXJCLEVBQS9CLEdBQThELEtBQUttQyxRQUFMLENBQWNoRSxNQUFkLEVBRDdCO1FBRTlDK0MsTUFBTSxFQUFFLEtBQUtpQixRQUFMLENBQWMzRixNQUFkLENBQXFCaUQsTUFBckIsQ0FBNEIsV0FBNUI7TUFGc0MsQ0FBckIsQ0FBM0IsRUFKYyxDQVNkOztNQUNBLElBQUksS0FBSzBDLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQixFQUFKLEVBQXdDO1FBQ3RDLEtBQUtxQyxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS08sS0FBTCxDQUFXaUMsY0FBWCxDQUEwQjtVQUNuRDNELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmtDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQsNEJBQW9CckUsS0FBcEIsRUFBMkI7TUFBQTs7TUFDekIsSUFBTW1DLE1BQU0sR0FBRyxLQUFLMkYsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQnNDLEtBQXJCLEtBQStCLEtBQUtxRCxRQUFMLENBQWMzRixNQUFkLENBQXFCc0MsS0FBckIsRUFBL0IsR0FBOEQ7UUFBRTVELElBQUksRUFBRUQsT0FBTyxDQUFDWixLQUFEO01BQWYsQ0FBN0U7TUFDQSxJQUFNaUssVUFBVSxHQUFHLElBQUloRyxVQUFKLENBQVc5QixNQUFYLENBQW5CO01BRUEsSUFBTStILFVBQVUsR0FBRyxLQUFLcEMsUUFBTCxDQUFjNUYsSUFBZCxDQUFtQmlJLGNBQW5CLENBQWtDO1FBQ25EakksSUFBSSxFQUFFLEtBQUs0RixRQUFMLENBQWM1RixJQUQrQjtRQUVuREMsTUFBTSxFQUFFOEgsVUFGMkM7UUFHbkQzSCxJQUFJLEVBQUUsS0FBS3dGLFFBQUwsQ0FBY3hGLElBQWQsR0FBcUIsR0FBckIsR0FBMkIsS0FBS3dGLFFBQUwsQ0FBY3RGLFFBQWQsQ0FBdUJ2QixNQUhMO1FBSW5Ec0IsTUFBTSxFQUFFLEtBQUt1RjtNQUpzQyxDQUFsQyxDQUFuQjtNQU9BLElBQU1KLFFBQVEsR0FBRyxLQUFLSyxLQUFMLENBQVd1QixXQUFYLEVBQWpCO01BQ0EsSUFBTWMsU0FBUyxHQUFHQyxNQUFNLENBQUNILFVBQVUsQ0FBQ3BHLE1BQVgsRUFBRCxDQUF4QjtNQUVBLElBQU13RyxTQUFTLEdBQUcsS0FBS3ZDLEtBQUwsQ0FBV3lCLFNBQVgsQ0FBcUI7UUFDckNuRCxXQUFXLEVBQUU7TUFEd0IsQ0FBckIsQ0FBbEI7TUFJQWlFLFNBQVMsQ0FBQ2IsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtRQUN4QyxJQUFNVyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0gsVUFBVSxDQUFDNUgsSUFBWCxDQUFnQmEsS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQUQsQ0FBeEI7O1FBQ0EsTUFBSSxDQUFDMEUsUUFBTCxDQUFjeUMsVUFBZCxDQUF5QkgsU0FBekI7TUFDRCxDQUhEOztNQUtBLElBQUksS0FBS3RDLFFBQUwsQ0FBY3RGLFFBQWQsQ0FBdUJ2QixNQUF2QixLQUFrQyxDQUF0QyxFQUF5QztRQUN2QyxJQUFNdUosU0FBUyxHQUFHLEtBQUt6QyxLQUFMLENBQVd5QixTQUFYLENBQXFCO1VBQ3JDbkQsV0FBVyxFQUFFO1FBRHdCLENBQXJCLENBQWxCO1FBSUFtRSxTQUFTLENBQUNmLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07VUFDeEMsSUFBTWdCLE9BQU8sR0FBR0wsU0FBUyxHQUFHLENBQTVCOztVQUNBLE1BQUksQ0FBQ00sSUFBTCxDQUFVTixTQUFWLEVBQXFCSyxPQUFyQjtRQUNELENBSEQ7UUFLQS9DLFFBQVEsQ0FBQ0YsV0FBVCxDQUFxQmdELFNBQXJCO01BQ0Q7O01BRUQsSUFBSSxLQUFLMUMsUUFBTCxDQUFjakUsUUFBZCxHQUF5QjVDLE1BQXpCLEdBQWtDLENBQWxDLEtBQXdDbUosU0FBNUMsRUFBdUQ7UUFDckQsSUFBTU8sV0FBVyxHQUFHLEtBQUs1QyxLQUFMLENBQVd5QixTQUFYLENBQXFCO1VBQ3ZDbkQsV0FBVyxFQUFFO1FBRDBCLENBQXJCLENBQXBCO1FBSUFzRSxXQUFXLENBQUNsQixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO1VBQzFDLElBQU1nQixPQUFPLEdBQUdMLFNBQVMsR0FBRyxDQUE1Qjs7VUFDQSxNQUFJLENBQUNNLElBQUwsQ0FBVU4sU0FBVixFQUFxQkssT0FBckI7UUFDRCxDQUhEO1FBS0EvQyxRQUFRLENBQUNGLFdBQVQsQ0FBcUJtRCxXQUFyQjtNQUNEOztNQUVEVCxVQUFVLENBQUN6SCxFQUFYLENBQWNpRSxTQUFkLENBQXdCYyxXQUF4QixDQUFvQzBDLFVBQVUsQ0FBQ3pILEVBQVgsQ0FBYzJGLFdBQWxEO01BQ0E4QixVQUFVLENBQUN6SCxFQUFYLENBQWMyRixXQUFkLENBQTBCWixXQUExQixDQUFzQ0UsUUFBdEM7TUFDQUEsUUFBUSxDQUFDRixXQUFULENBQXFCOEMsU0FBckI7TUFFQSxPQUFPSixVQUFQO0lBQ0Q7OztXQUVELGNBQU1VLFNBQU4sRUFBaUJILE9BQWpCLEVBQTBCO01BQ3hCLElBQU16SyxLQUFLLEdBQUdWLEtBQUssQ0FBQyxLQUFLd0ksUUFBTCxDQUFjakUsUUFBZCxFQUFELENBQW5CO01BQ0EsSUFBTWdILElBQUksR0FBRzdLLEtBQUssQ0FBQzRLLFNBQUQsQ0FBbEI7TUFDQTVLLEtBQUssQ0FBQzhLLE1BQU4sQ0FBYUYsU0FBYixFQUF3QixDQUF4QjtNQUNBNUssS0FBSyxDQUFDOEssTUFBTixDQUFhTCxPQUFiLEVBQXNCLENBQXRCLEVBQXlCSSxJQUF6QjtNQUNBLEtBQUsvQyxRQUFMLENBQWMrQixRQUFkLENBQXVCN0osS0FBdkI7SUFDRDs7O1dBRUQscUJBQWE7TUFBQTs7TUFDWCxJQUFNQSxLQUFLLEdBQUcsS0FBSzhILFFBQUwsQ0FBY2pFLFFBQWQsRUFBZDtNQUVBLEtBQUtpRSxRQUFMLENBQWN0RixRQUFkLENBQXVCbEIsT0FBdkIsQ0FBK0IsVUFBQ3lDLEtBQUQsRUFBVztRQUN4Q0EsS0FBSyxDQUFDQyxPQUFOO01BQ0QsQ0FGRDtNQUlBLEtBQUs4RCxRQUFMLENBQWN0RixRQUFkLEdBQXlCLEVBQXpCO01BRUF4QyxLQUFLLENBQUNzQixPQUFOLENBQWMsVUFBQ3lKLFNBQUQsRUFBZTtRQUMzQixJQUFNaEgsS0FBSyxHQUFHLE1BQUksQ0FBQ2lILGtCQUFMLENBQXdCRCxTQUF4QixDQUFkOztRQUNBaEgsS0FBSyxDQUFDOEYsUUFBTixDQUFla0IsU0FBZixFQUEwQixLQUExQjs7UUFDQSxNQUFJLENBQUNqRCxRQUFMLENBQWN0RixRQUFkLENBQXVCWCxJQUF2QixDQUE0QmtDLEtBQTVCOztRQUVBLElBQUlrSCxPQUFPLEdBQUd2SyxLQUFLLENBQUN3SyxJQUFOLENBQVcsTUFBSSxDQUFDeEUsU0FBTCxDQUFleUUsZ0JBQWYsQ0FBZ0MsUUFBaEMsQ0FBWCxDQUFkOztRQUVBLE1BQUksQ0FBQ3JELFFBQUwsQ0FBY3RGLFFBQWQsQ0FBdUJsQixPQUF2QixDQUErQixVQUFDeUMsS0FBRCxFQUFXO1VBQ3hDLElBQU1xSCxZQUFZLEdBQUcxSyxLQUFLLENBQUN3SyxJQUFOLENBQVduSCxLQUFLLENBQUN0QixFQUFOLENBQVNpRSxTQUFULENBQW1CeUUsZ0JBQW5CLENBQW9DLFFBQXBDLENBQVgsQ0FBckI7VUFDQUYsT0FBTyxHQUFHQSxPQUFPLENBQUNJLE1BQVIsQ0FBZUQsWUFBZixDQUFWO1FBQ0QsQ0FIRDs7UUFLQSxJQUFJLE1BQUksQ0FBQzVDLFFBQVQsRUFBbUI7VUFDakJ6RSxLQUFLLENBQUN0QixFQUFOLENBQVM2SSxPQUFUO1VBQ0FMLE9BQU8sQ0FBQzNKLE9BQVIsQ0FBZ0IsVUFBQ2tGLE1BQUQsRUFBWTtZQUMxQkEsTUFBTSxDQUFDQyxZQUFQLENBQW9CLFVBQXBCLEVBQWdDLFVBQWhDO1VBQ0QsQ0FGRDtRQUdELENBTEQsTUFLTztVQUNMMUMsS0FBSyxDQUFDdEIsRUFBTixDQUFTOEksTUFBVDtVQUNBTixPQUFPLENBQUMzSixPQUFSLENBQWdCLFVBQUNrRixNQUFELEVBQVk7WUFDMUJBLE1BQU0sQ0FBQ2dGLGVBQVAsQ0FBdUIsVUFBdkI7VUFDRCxDQUZEO1FBR0Q7TUFDRixDQXZCRDtNQXlCQSxLQUFLMUQsUUFBTCxDQUFjdEYsUUFBZCxDQUF1QmxCLE9BQXZCLENBQStCLFVBQUN5QyxLQUFELEVBQVc7UUFDeEMsTUFBSSxDQUFDdUUsZ0JBQUwsQ0FBc0JkLFdBQXRCLENBQWtDekQsS0FBSyxDQUFDdEIsRUFBTixDQUFTaUUsU0FBM0M7TUFDRCxDQUZEOztNQUlBLElBQUksS0FBSzhCLFFBQVQsRUFBbUI7UUFDakIsS0FBS2UsTUFBTCxDQUFZOUMsWUFBWixDQUF5QixVQUF6QixFQUFxQyxVQUFyQztRQUNBLEtBQUtrRCxZQUFMLENBQWtCbEQsWUFBbEIsQ0FBK0IsVUFBL0IsRUFBMkMsVUFBM0M7TUFDRCxDQUhELE1BR087UUFDTCxLQUFLOEMsTUFBTCxDQUFZaUMsZUFBWixDQUE0QixVQUE1QjtRQUNBLEtBQUs3QixZQUFMLENBQWtCNkIsZUFBbEIsQ0FBa0MsVUFBbEM7TUFDRDtJQUNGOzs7O0VBakt1QjNELGM7O0FBb0tYdUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUtBO0FBQ0E7QUFDQTtBQUNBOztJQUVNcUMsbUI7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUNQLEtBQUtoSixFQUFMLEdBQVUsSUFBSTJHLGFBQUosQ0FBZ0IsSUFBaEIsQ0FBVjtJQUNEOzs7V0FFRCw0QkFBb0JwSixLQUFwQixFQUEyQjtNQUN6QixJQUFNbUMsTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWXNDLEtBQVosS0FBc0IsS0FBS3RDLE1BQUwsQ0FBWXNDLEtBQVosRUFBdEIsR0FBNEM7UUFBRTVELElBQUksRUFBRUQsT0FBTyxDQUFDWixLQUFEO01BQWYsQ0FBM0Q7TUFFQSxPQUFPLEtBQUtrQyxJQUFMLENBQVVpSSxjQUFWLENBQXlCO1FBQzlCakksSUFBSSxFQUFFLEtBQUtBLElBRG1CO1FBRTlCQyxNQUFNLEVBQUUsSUFBSThCLFVBQUosQ0FBVzlCLE1BQVgsQ0FGc0I7UUFHOUJHLElBQUksRUFBRSxLQUFLQSxJQUFMLEdBQVksR0FBWixHQUFrQixLQUFLRSxRQUFMLENBQWN2QixNQUhSO1FBSTlCc0IsTUFBTSxFQUFFO01BSnNCLENBQXpCLENBQVA7SUFNRDs7O1dBRUQsY0FBTXFJLFNBQU4sRUFBaUJILE9BQWpCLEVBQTBCO01BQ3hCLElBQU16SyxLQUFLLEdBQUdWLEtBQUssQ0FBQyxLQUFLdUUsUUFBTCxFQUFELENBQW5CO01BQ0EsSUFBTWdILElBQUksR0FBRzdLLEtBQUssQ0FBQzRLLFNBQUQsQ0FBbEI7TUFDQTVLLEtBQUssQ0FBQzhLLE1BQU4sQ0FBYUYsU0FBYixFQUF3QixDQUF4QjtNQUNBNUssS0FBSyxDQUFDOEssTUFBTixDQUFhTCxPQUFiLEVBQXNCLENBQXRCLEVBQXlCSSxJQUF6QjtNQUNBLEtBQUtoQixRQUFMLENBQWM3SixLQUFkO0lBQ0Q7OztXQUVELG1CQUFXO01BQ1QsSUFBTTBMLFVBQVUsR0FBRyxLQUFLVixrQkFBTCxFQUFuQjtNQUNBLElBQU1oTCxLQUFLLEdBQUdWLEtBQUssQ0FBQyxLQUFLdUUsUUFBTCxFQUFELENBQW5CO01BQ0E3RCxLQUFLLENBQUM2QixJQUFOLENBQVc2SixVQUFVLENBQUM3SCxRQUFYLEVBQVg7TUFDQTZILFVBQVUsQ0FBQzFILE9BQVg7TUFDQSxLQUFLNkYsUUFBTCxDQUFjN0osS0FBZDtJQUNEOzs7V0FFRCxvQkFBWW9LLFNBQVosRUFBdUI7TUFDckIsSUFBTXVCLFlBQVksR0FBR3JNLEtBQUssQ0FBQyxLQUFLdUUsUUFBTCxFQUFELENBQTFCO01BQ0EsSUFBTU4sUUFBUSxHQUFHb0ksWUFBWSxDQUFDN0osTUFBYixDQUFvQixVQUFDK0ksSUFBRCxFQUFPdkQsS0FBUDtRQUFBLE9BQWlCQSxLQUFLLEtBQUs4QyxTQUEzQjtNQUFBLENBQXBCLENBQWpCO01BQ0EsS0FBS1AsUUFBTCxDQUFjdEcsUUFBZDtJQUNEOzs7V0FFRCx5QkFBaUI7TUFDZixJQUFNdkQsS0FBSyxHQUFHLEVBQWQ7TUFFQSxLQUFLd0MsUUFBTCxDQUFjbEIsT0FBZCxDQUFzQixVQUFDeUMsS0FBRCxFQUFXO1FBQy9CL0QsS0FBSyxDQUFDNkIsSUFBTixDQUFXa0MsS0FBSyxDQUFDRixRQUFOLEVBQVg7TUFDRCxDQUZEO01BSUEsS0FBS2dHLFFBQUwsQ0FBYzdKLEtBQWQ7SUFDRDs7O1dBRUQsa0JBQVVBLEtBQVYsRUFBaUI7TUFDZixJQUFJUyxPQUFPLENBQUNULEtBQUQsQ0FBWCxFQUFvQjtRQUNsQixPQUFPQSxLQUFQO01BQ0Q7O01BRUQsT0FBTyxFQUFQO0lBQ0Q7Ozs7RUF0RHlCZ0Msa0I7O0FBeURieUosdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDOURBOztJQUVNRyxxQjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQUE7O01BQ1AsS0FBS2xGLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLYixZQUFoQyxFQURPLENBR1A7O01BQ0EsSUFBTWlCLGlCQUFpQixHQUFHLEtBQUtHLEtBQUwsQ0FBVzhELG9CQUFYLEVBQTFCLENBSk8sQ0FNUDs7TUFDQSxJQUFNakYsS0FBSyxHQUFHLEtBQUttQixLQUFMLENBQVcrRCxnQkFBWCxDQUE0QjtRQUN4QyxPQUFLLEtBQUtoRSxRQUFMLENBQWN4RixJQURxQjtRQUV4QytELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQndELEtBQXJCLEtBQStCLEtBQUttQyxRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsRUFBL0IsR0FBOEQsS0FBS21DLFFBQUwsQ0FBY2hFLE1BQWQsRUFGbkM7UUFHeEMrQyxNQUFNLEVBQUUsS0FBS2lCLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJpRCxNQUFyQixDQUE0QixXQUE1QjtNQUhnQyxDQUE1QixDQUFkLENBUE8sQ0FhUDs7TUFDQSxLQUFLMkIsS0FBTCxHQUFhLEtBQUtnQixLQUFMLENBQVdnRSxXQUFYLENBQXVCO1FBQ2xDL0UsRUFBRSxFQUFFLEtBQUtjLFFBQUwsQ0FBY3hGO01BRGdCLENBQXZCLENBQWIsQ0FkTyxDQWtCUDs7TUFDQSxLQUFLb0UsU0FBTCxDQUFlYyxXQUFmLENBQTJCSSxpQkFBM0I7TUFDQUEsaUJBQWlCLENBQUNKLFdBQWxCLENBQThCLEtBQUtULEtBQW5DO01BQ0FhLGlCQUFpQixDQUFDSixXQUFsQixDQUE4QlosS0FBOUIsRUFyQk8sQ0F1QlA7O01BQ0EsS0FBS0csS0FBTCxDQUFXMEMsZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0MsWUFBTTtRQUMxQyxLQUFJLENBQUMzQixRQUFMLENBQWMrQixRQUFkLENBQXVCLEtBQUksQ0FBQzlDLEtBQUwsQ0FBV2lGLE9BQWxDO01BQ0QsQ0FGRCxFQXhCTyxDQTRCUDs7TUFDQSxJQUFJLEtBQUtsRSxRQUFMLENBQWMzRixNQUFkLENBQXFCa0MsV0FBckIsRUFBSixFQUF3QztRQUN0QyxLQUFLcUMsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtPLEtBQUwsQ0FBV2lDLGNBQVgsQ0FBMEI7VUFDbkQzRCxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQjtRQURzQyxDQUExQixDQUEzQjtNQUdEO0lBQ0Y7OztXQUVELGtCQUFVckUsS0FBVixFQUFpQjtNQUNmLE9BQU9pTSxPQUFPLENBQUNqTSxLQUFELENBQWQ7SUFDRDs7O1dBRUQscUJBQWE7TUFDWCxLQUFLK0csS0FBTCxDQUFXaUYsT0FBWCxHQUFxQixLQUFLbEUsUUFBTCxDQUFjakUsUUFBZCxFQUFyQjs7TUFFQSxJQUFJLEtBQUsyRSxRQUFULEVBQW1CO1FBQ2pCLEtBQUt6QixLQUFMLENBQVdOLFlBQVgsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBcEM7TUFDRCxDQUZELE1BRU87UUFDTCxLQUFLTSxLQUFMLENBQVd5RSxlQUFYLENBQTJCLFVBQTNCO01BQ0Q7SUFDRjs7OztFQWpEeUIzRCxjOztBQW9EYitELHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3REQTs7SUFFTU0seUM7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUFBOztNQUNQLEtBQUs3RSxZQUFMLEdBQW9CLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FBcEI7TUFDQSxLQUFLRSxhQUFMLEdBQXFCLEtBQUtPLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJpRCxNQUFyQixDQUE0QixZQUE1QixLQUE2QyxLQUFLaUMsWUFBdkU7TUFDQSxLQUFLWCxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS2IsWUFBaEM7TUFDQSxLQUFLd0YsV0FBTCxHQUFtQixFQUFuQixDQUpPLENBTVA7O01BQ0EsS0FBS3pGLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLTyxLQUFMLENBQVdxRSxjQUFYLENBQTBCO1FBQ25EL0YsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsS0FBK0IsS0FBS21DLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJ3RCxLQUFyQixFQUEvQixHQUE4RCxLQUFLbUMsUUFBTCxDQUFjaEUsTUFBZDtNQUR4QixDQUExQixDQUEzQixFQVBPLENBV1A7O01BQ0EsS0FBS3VELFlBQUwsQ0FBa0IvRixPQUFsQixDQUEwQixVQUFDdEIsS0FBRCxFQUFRc0gsS0FBUixFQUFrQjtRQUMxQztRQUNBLElBQU0rRSxjQUFjLEdBQUcsS0FBSSxDQUFDdEUsS0FBTCxDQUFXdUUsaUJBQVgsRUFBdkIsQ0FGMEMsQ0FJMUM7OztRQUNBLElBQU1wRixLQUFLLEdBQUcsS0FBSSxDQUFDYSxLQUFMLENBQVd3RSxRQUFYLENBQW9CO1VBQ2hDdk0sS0FBSyxFQUFFQSxLQUR5QjtVQUVoQ2dILEVBQUUsRUFBRSxLQUFJLENBQUNjLFFBQUwsQ0FBY3hGLElBQWQsR0FBcUIsR0FBckIsR0FBMkJnRjtRQUZDLENBQXBCLENBQWQ7O1FBSUErRSxjQUFjLENBQUM3RSxXQUFmLENBQTJCTixLQUEzQjtRQUVBQSxLQUFLLENBQUN1QyxnQkFBTixDQUF1QixRQUF2QixFQUFpQyxZQUFNO1VBQ3JDLElBQU0rQyxVQUFVLEdBQUd0RixLQUFLLENBQUNsSCxLQUFOLEtBQWdCLE1BQW5DOztVQUNBLEtBQUksQ0FBQzhILFFBQUwsQ0FBYytCLFFBQWQsQ0FBdUIyQyxVQUF2QjtRQUNELENBSEQ7O1FBS0EsS0FBSSxDQUFDTCxXQUFMLENBQWlCdEssSUFBakIsQ0FBc0JxRixLQUF0QixFQWhCMEMsQ0FrQjFDOzs7UUFDQW1GLGNBQWMsQ0FBQzdFLFdBQWYsQ0FBMkIsS0FBSSxDQUFDTyxLQUFMLENBQVcwRSxRQUFYLENBQW9CO1VBQzdDLE9BQUssS0FBSSxDQUFDM0UsUUFBTCxDQUFjeEYsSUFBZCxHQUFxQixHQUFyQixHQUEyQmdGLEtBRGE7VUFFN0NqQixXQUFXLEVBQUUsS0FBSSxDQUFDa0IsYUFBTCxDQUFtQkQsS0FBbkIsQ0FGZ0M7VUFHN0NULE1BQU0sRUFBRSxLQUFJLENBQUNpQixRQUFMLENBQWMzRixNQUFkLENBQXFCaUQsTUFBckIsQ0FBNEIsV0FBNUI7UUFIcUMsQ0FBcEIsQ0FBM0I7O1FBTUEsS0FBSSxDQUFDc0IsU0FBTCxDQUFlYyxXQUFmLENBQTJCNkUsY0FBM0I7TUFDRCxDQTFCRCxFQVpPLENBd0NQOztNQUNBLElBQUksS0FBS3ZFLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQixFQUFKLEVBQXdDO1FBQ3RDLEtBQUtxQyxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS08sS0FBTCxDQUFXaUMsY0FBWCxDQUEwQjtVQUNuRDNELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmtDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQscUJBQWE7TUFBQTs7TUFDWCxLQUFLOEgsV0FBTCxDQUFpQjdLLE9BQWpCLENBQXlCLFVBQUM0RixLQUFELEVBQVc7UUFDbEMsSUFBTXNGLFVBQVUsR0FBR3RGLEtBQUssQ0FBQ2xILEtBQU4sS0FBZ0IsTUFBbkM7UUFDQWtILEtBQUssQ0FBQzhFLE9BQU4sR0FBZ0JRLFVBQVUsS0FBSyxNQUFJLENBQUMxRSxRQUFMLENBQWNqRSxRQUFkLEVBQS9CO1FBQ0FxRCxLQUFLLENBQUNzQixRQUFOLEdBQWlCLE1BQUksQ0FBQ0EsUUFBdEI7TUFDRCxDQUpEO0lBS0Q7Ozs7RUF2RGtDb0QsZTs7QUEwRHRCTSxnR0FBZixFOzs7Ozs7Ozs7Ozs7QUM1REE7O0lBRU1RLDJDOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLaEcsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtiLFlBQWhDLEVBRE8sQ0FHUDs7TUFDQSxLQUFLRCxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS08sS0FBTCxDQUFXMEUsUUFBWCxDQUFvQjtRQUM3QyxPQUFLLEtBQUszRSxRQUFMLENBQWN4RixJQUQwQjtRQUU3QytELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQndELEtBQXJCLEtBQStCLEtBQUttQyxRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsRUFBL0IsR0FBOEQsS0FBS21DLFFBQUwsQ0FBY2hFLE1BQWQsRUFGOUI7UUFHN0MrQyxNQUFNLEVBQUUsS0FBS2lCLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJpRCxNQUFyQixDQUE0QixXQUE1QjtNQUhxQyxDQUFwQixDQUEzQixFQUpPLENBVVA7O01BQ0EsS0FBSzJCLEtBQUwsR0FBYSxLQUFLZ0IsS0FBTCxDQUFXNEUsU0FBWCxDQUFxQjtRQUNoQ3RGLFlBQVksRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWLENBRGtCO1FBRWhDRSxhQUFhLEVBQUUsS0FBS08sUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmlELE1BQXJCLENBQTRCLFlBQTVCLEtBQTZDLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FGNUI7UUFHaEM0QixFQUFFLEVBQUUsS0FBS2MsUUFBTCxDQUFjeEY7TUFIYyxDQUFyQixDQUFiO01BS0EsS0FBS29FLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLVCxLQUFoQyxFQWhCTyxDQWtCUDs7TUFDQSxLQUFLQSxLQUFMLENBQVcwQyxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxZQUFNO1FBQzFDLElBQU16SixLQUFLLEdBQUcsS0FBSSxDQUFDK0csS0FBTCxDQUFXL0csS0FBWCxLQUFxQixNQUFuQzs7UUFDQSxLQUFJLENBQUM4SCxRQUFMLENBQWMrQixRQUFkLENBQXVCN0osS0FBdkI7TUFDRCxDQUhELEVBbkJPLENBd0JQOztNQUNBLElBQUksS0FBSzhILFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQixFQUFKLEVBQXdDO1FBQ3RDLEtBQUtxQyxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS08sS0FBTCxDQUFXaUMsY0FBWCxDQUEwQjtVQUNuRDNELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmtDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQscUJBQWE7TUFDWCxLQUFLMEMsS0FBTCxDQUFXL0csS0FBWCxHQUFtQixLQUFLOEgsUUFBTCxDQUFjakUsUUFBZCxPQUE2QixJQUE3QixHQUFvQyxNQUFwQyxHQUE2QyxPQUFoRTs7TUFFQSxJQUFJLEtBQUsyRSxRQUFULEVBQW1CO1FBQ2pCLEtBQUt6QixLQUFMLENBQVdOLFlBQVgsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBcEM7TUFDRCxDQUZELE1BRU87UUFDTCxLQUFLTSxLQUFMLENBQVd5RSxlQUFYLENBQTJCLFVBQTNCO01BQ0Q7SUFDRjs7OztFQXpDbUNJLGU7O0FBNEN2QmMsbUdBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNRSx1Qjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQ1AsSUFBSSxLQUFLekssTUFBTCxDQUFZeUQsTUFBWixDQUFtQixTQUFuQixLQUFpQyxLQUFLekQsTUFBTCxDQUFZMEssUUFBWixDQUFxQixPQUFyQixDQUFyQyxFQUFvRTtRQUNsRSxLQUFLcEssRUFBTCxHQUFVLElBQUl5SixrQkFBSixDQUEyQixJQUEzQixDQUFWO01BQ0QsQ0FGRCxNQUVPLElBQUksS0FBSy9KLE1BQUwsQ0FBWXlELE1BQVosQ0FBbUIsU0FBbkIsS0FBaUMsS0FBS3pELE1BQUwsQ0FBWTBLLFFBQVosQ0FBcUIsUUFBckIsQ0FBckMsRUFBcUU7UUFDMUUsS0FBS3BLLEVBQUwsR0FBVSxJQUFJaUssbUJBQUosQ0FBNEIsSUFBNUIsQ0FBVjtNQUNELENBRk0sTUFFQSxJQUFJLEtBQUt2SyxNQUFMLENBQVl5RCxNQUFaLENBQW1CLFNBQW5CLENBQUosRUFBbUM7UUFDeEMsS0FBS25ELEVBQUwsR0FBVSxJQUFJbUosZUFBSixDQUFrQixJQUFsQixDQUFWO01BQ0Q7SUFDRjs7O1dBRUQsa0JBQVU1TCxLQUFWLEVBQWlCO01BQ2YsT0FBT2lNLE9BQU8sQ0FBQ2pNLEtBQUQsQ0FBZDtJQUNEOzs7O0VBYjJCZ0Msa0I7O0FBZ0JmNEssNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7O0lBRU1FLG1COzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLekQsWUFBTDtNQUNBLEtBQUszQyxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS1MsY0FBaEM7TUFDQSxLQUFLdkIsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtZLFdBQWhDO01BQ0EsS0FBSzFCLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLYixZQUFoQztNQUNBLEtBQUtELFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLYyxnQkFBaEM7TUFFQSxJQUFNMUIsS0FBSyxHQUFHLEtBQUttQixLQUFMLENBQVcwRSxRQUFYLENBQW9CO1FBQ2hDcEcsV0FBVyxFQUFFLGVBRG1CO1FBRWhDLE9BQUssNkJBQTZCLEtBQUt5QixRQUFMLENBQWN4RjtNQUZoQixDQUFwQixDQUFkO01BS0EsS0FBS3lLLGdCQUFMLEdBQXdCLEtBQUtoRixLQUFMLENBQVdpRixRQUFYLENBQW9CO1FBQzFDbk0sSUFBSSxFQUFFLE1BRG9DO1FBRTFDbUcsRUFBRSxFQUFFLDZCQUE2QixLQUFLYyxRQUFMLENBQWN4RjtNQUZMLENBQXBCLENBQXhCO01BS0EsS0FBSzJLLGNBQUwsR0FBc0IsS0FBS2xGLEtBQUwsQ0FBV3lCLFNBQVgsQ0FBcUI7UUFDekNuRCxXQUFXLEVBQUU7TUFENEIsQ0FBckIsQ0FBdEI7TUFJQSxLQUFLNEcsY0FBTCxDQUFvQnhELGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4QyxZQUFNO1FBQ2xELElBQU1sSSxHQUFHLEdBQUcsS0FBSSxDQUFDd0wsZ0JBQUwsQ0FBc0IvTSxLQUFsQyxDQURrRCxDQUdsRDs7UUFDQSxJQUFJdUIsR0FBRyxDQUFDTixNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7VUFDcEI7UUFDRCxDQU5pRCxDQVFsRDs7O1FBQ0EsSUFBSWhCLEtBQUssQ0FBQyxLQUFJLENBQUM2SCxRQUFMLENBQWM5SCxLQUFkLENBQW9CdUIsR0FBcEIsQ0FBRCxDQUFULEVBQXFDO1VBQ25DO1FBQ0Q7O1FBRUQsS0FBSSxDQUFDdUcsUUFBTCxDQUFjb0YsV0FBZCxDQUEwQjtVQUFFck0sSUFBSSxFQUFFO1FBQVIsQ0FBMUIsRUFBMkNVLEdBQTNDOztRQUNBLEtBQUksQ0FBQ3VHLFFBQUwsQ0FBYytCLFFBQWQsQ0FBdUIsS0FBSSxDQUFDL0IsUUFBTCxDQUFjOUgsS0FBckM7O1FBQ0EsS0FBSSxDQUFDK00sZ0JBQUwsQ0FBc0IvTSxLQUF0QixHQUE4QixFQUE5QjtNQUNELENBaEJEOztNQWtCQSxJQUFJLEtBQUs4SCxRQUFMLENBQWM1RixJQUFkLENBQW1CWSxPQUFuQixDQUEyQnFLLGtCQUEzQixJQUFpRCxLQUFLckYsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmlELE1BQXJCLENBQTRCLG9CQUE1QixDQUFyRCxFQUF3RztRQUN0RyxLQUFLZ0QsV0FBTCxDQUFpQlosV0FBakIsQ0FBNkJaLEtBQTdCO1FBQ0EsS0FBS3dCLFdBQUwsQ0FBaUJaLFdBQWpCLENBQTZCLEtBQUt1RixnQkFBbEM7UUFDQSxLQUFLM0UsV0FBTCxDQUFpQlosV0FBakIsQ0FBNkIsS0FBS3lGLGNBQWxDO01BQ0Q7SUFDRjs7O1dBRUQsNkJBQXFCO01BQUE7O01BQ25CLElBQUksS0FBS25GLFFBQUwsQ0FBYzVGLElBQWQsQ0FBbUJZLE9BQW5CLENBQTJCcUssa0JBQTNCLElBQWlELEtBQUtyRixRQUFMLENBQWMzRixNQUFkLENBQXFCaUQsTUFBckIsQ0FBNEIsb0JBQTVCLENBQXJELEVBQXdHO1FBQ3RHLE9BQU8sS0FBSzZDLGNBQUwsQ0FBb0JtRixVQUEzQixFQUF1QztVQUNyQyxLQUFLbkYsY0FBTCxDQUFvQmtCLFdBQXBCLENBQWdDLEtBQUtsQixjQUFMLENBQW9Cb0YsU0FBcEQ7UUFDRDs7UUFFRCxLQUFLdkYsUUFBTCxDQUFjdEYsUUFBZCxDQUF1QmxCLE9BQXZCLENBQStCLFVBQUN5QyxLQUFELEVBQVc7VUFDeEMsSUFBTWlELEVBQUUsR0FBR2pELEtBQUssQ0FBQ3pCLElBQU4sR0FBYSxZQUF4Qjs7VUFFQSxJQUFNc0YsaUJBQWlCLEdBQUcsTUFBSSxDQUFDRyxLQUFMLENBQVc4RCxvQkFBWCxFQUExQjs7VUFFQSxJQUFNakYsS0FBSyxHQUFHLE1BQUksQ0FBQ21CLEtBQUwsQ0FBVytELGdCQUFYLENBQTRCO1lBQ3hDLE9BQUs5RSxFQURtQztZQUV4Q1gsV0FBVyxFQUFFdEMsS0FBSyxDQUFDNUIsTUFBTixDQUFhd0QsS0FBYixLQUF1QjVCLEtBQUssQ0FBQzVCLE1BQU4sQ0FBYXdELEtBQWIsRUFBdkIsR0FBOEM1QixLQUFLLENBQUNELE1BQU47VUFGbkIsQ0FBNUIsQ0FBZDs7VUFLQSxJQUFNbUQsUUFBUSxHQUFHLE1BQUksQ0FBQ2MsS0FBTCxDQUFXZ0UsV0FBWCxDQUF1QjtZQUN0Qy9FLEVBQUUsRUFBRUE7VUFEa0MsQ0FBdkIsQ0FBakI7O1VBSUFDLFFBQVEsQ0FBQytFLE9BQVQsR0FBbUI1SyxNQUFNLENBQUNrTSxNQUFQLENBQWMsTUFBSSxDQUFDeEYsUUFBTCxDQUFjakUsUUFBZCxFQUFkLEVBQXdDRSxLQUFLLENBQUNELE1BQU4sRUFBeEMsQ0FBbkI7O1VBRUEsSUFBTXlKLFVBQVUsR0FBRyxNQUFJLENBQUN6RixRQUFMLENBQWN5RixVQUFkLENBQXlCeEosS0FBSyxDQUFDRCxNQUFOLEVBQXpCLENBQW5COztVQUNBLElBQU0wSixtQkFBbUIsR0FBRyxNQUFJLENBQUMxRixRQUFMLENBQWMwRixtQkFBZCxDQUFrQ3pKLEtBQUssQ0FBQ0QsTUFBTixFQUFsQyxDQUE1Qjs7VUFDQSxJQUFNMEUsUUFBUSxHQUFHLE1BQUksQ0FBQ0EsUUFBdEI7VUFDQXZCLFFBQVEsQ0FBQ3VCLFFBQVQsR0FBb0IrRSxVQUFVLElBQUlDLG1CQUFkLElBQXFDaEYsUUFBekQ7VUFFQXZCLFFBQVEsQ0FBQ3dDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQU07WUFDeEMsSUFBSXhDLFFBQVEsQ0FBQytFLE9BQWIsRUFBc0I7Y0FDcEJqSSxLQUFLLENBQUMwSixRQUFOO1lBQ0QsQ0FGRCxNQUVPO2NBQ0wxSixLQUFLLENBQUMySixVQUFOO1lBQ0Q7VUFDRixDQU5ELEVBckJ3QyxDQTZCeEM7O1VBQ0EsTUFBSSxDQUFDekYsY0FBTCxDQUFvQlQsV0FBcEIsQ0FBZ0NJLGlCQUFoQzs7VUFDQUEsaUJBQWlCLENBQUNKLFdBQWxCLENBQThCUCxRQUE5QjtVQUNBVyxpQkFBaUIsQ0FBQ0osV0FBbEIsQ0FBOEJaLEtBQTlCO1FBQ0QsQ0FqQ0Q7TUFrQ0Q7SUFDRjs7O1dBRUQsd0JBQWdCO01BQ2QsS0FBS0YsU0FBTCxHQUFpQixLQUFLcUIsS0FBTCxDQUFXK0IsV0FBWCxFQUFqQixDQURjLENBR2Q7O01BQ0EsS0FBS3BELFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLTyxLQUFMLENBQVdnQyxTQUFYLENBQXFCO1FBQzlDMUQsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsS0FBK0IsS0FBS21DLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJ3RCxLQUFyQixFQUEvQixHQUE4RCxLQUFLbUMsUUFBTCxDQUFjaEUsTUFBZCxFQUQ3QjtRQUU5QytDLE1BQU0sRUFBRSxLQUFLaUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmlELE1BQXJCLENBQTRCLFdBQTVCO01BRnNDLENBQXJCLENBQTNCLEVBSmMsQ0FTZDs7TUFDQSxJQUFJLEtBQUswQyxRQUFMLENBQWMzRixNQUFkLENBQXFCa0MsV0FBckIsRUFBSixFQUF3QztRQUN0QyxLQUFLcUMsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtPLEtBQUwsQ0FBV2lDLGNBQVgsQ0FBMEI7VUFDbkQzRCxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQjtRQURzQyxDQUExQixDQUEzQjtNQUdEO0lBQ0Y7OztXQUVELDBCQUFrQjtNQUFBOztNQUNoQixPQUFPLEtBQUtpRSxnQkFBTCxDQUFzQjhFLFVBQTdCLEVBQXlDO1FBQ3ZDLEtBQUs5RSxnQkFBTCxDQUFzQmEsV0FBdEIsQ0FBa0MsS0FBS2IsZ0JBQUwsQ0FBc0IrRSxTQUF4RDtNQUNEOztNQUVELElBQU1yTixLQUFLLEdBQUcsS0FBSzhILFFBQUwsQ0FBY2pFLFFBQWQsRUFBZDtNQUVBekMsTUFBTSxDQUFDQyxJQUFQLENBQVlyQixLQUFaLEVBQW1Cc0IsT0FBbkIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFTO1FBQ2xDLElBQU13QyxLQUFLLEdBQUcsTUFBSSxDQUFDK0QsUUFBTCxDQUFjNkYsUUFBZCxDQUF1QnBNLEdBQXZCLENBQWQ7O1FBRUEsSUFBSXdDLEtBQUssQ0FBQzFCLFFBQVYsRUFBb0I7VUFDbEIsTUFBSSxDQUFDaUcsZ0JBQUwsQ0FBc0JkLFdBQXRCLENBQWtDekQsS0FBSyxDQUFDdEIsRUFBTixDQUFTaUUsU0FBM0M7O1VBRUEsSUFBSTNDLEtBQUosRUFBVztZQUNULElBQUksTUFBSSxDQUFDeUUsUUFBVCxFQUFtQjtjQUNqQnpFLEtBQUssQ0FBQ3RCLEVBQU4sQ0FBUzZJLE9BQVQ7WUFDRCxDQUZELE1BRU87Y0FDTHZILEtBQUssQ0FBQ3RCLEVBQU4sQ0FBUzhJLE1BQVQ7WUFDRDtVQUNGO1FBQ0Y7TUFDRixDQWREO0lBZUQ7OztXQUVELHFCQUFhO01BQ1gsS0FBS3FDLGlCQUFMO01BQ0EsS0FBS0MsY0FBTDs7TUFFQSxJQUFJLEtBQUtyRixRQUFULEVBQW1CO1FBQ2pCLEtBQUt5RSxjQUFMLENBQW9CeEcsWUFBcEIsQ0FBaUMsVUFBakMsRUFBNkMsVUFBN0M7UUFDQSxLQUFLc0csZ0JBQUwsQ0FBc0J0RyxZQUF0QixDQUFtQyxVQUFuQyxFQUErQyxVQUEvQztNQUNELENBSEQsTUFHTztRQUNMLEtBQUt3RyxjQUFMLENBQW9CekIsZUFBcEIsQ0FBb0MsVUFBcEM7UUFDQSxLQUFLdUIsZ0JBQUwsQ0FBc0J2QixlQUF0QixDQUFzQyxVQUF0QztNQUNEO0lBQ0Y7Ozs7RUE5SXdCM0QsYzs7QUFpSlppRixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNwSkE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1nQixxQjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQ1AsS0FBS3JMLEVBQUwsR0FBVSxJQUFJcUssY0FBSixDQUFpQixJQUFqQixDQUFWO0lBQ0Q7OztXQUVELG1CQUFXO01BQUE7O01BQ1QsSUFBSSxLQUFLM0ssTUFBTCxDQUFZb0QsVUFBWixFQUFKLEVBQThCO1FBQzVCbkUsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS2MsTUFBTCxDQUFZb0QsVUFBWixFQUFaLEVBQXNDakUsT0FBdEMsQ0FBOEMsVUFBQ0MsR0FBRCxFQUFTO1VBQ3JELElBQU1ZLE1BQU0sR0FBRyxLQUFJLENBQUNBLE1BQUwsQ0FBWTRMLFFBQVosQ0FBcUJ4TSxHQUFyQixDQUFmOztVQUNBLEtBQUksQ0FBQzJMLFdBQUwsQ0FBaUIvSyxNQUFqQixFQUF5QlosR0FBekI7UUFDRCxDQUhEO01BSUQ7O01BRUQsS0FBSzBCLEVBQUwsQ0FBUSxXQUFSLEVBQXFCLFlBQU07UUFDekIsS0FBSSxDQUFDK0ssVUFBTDtNQUNELENBRkQ7SUFHRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG9CQUFZRCxRQUFaLEVBQXNCO01BQ3BCLE9BQU8sS0FBSzVMLE1BQUwsQ0FBWXFELFFBQVosTUFBMEIsS0FBS3JELE1BQUwsQ0FBWXFELFFBQVosR0FBdUJsQyxRQUF2QixDQUFnQ3lLLFFBQWhDLENBQWpDO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSw2QkFBcUJBLFFBQXJCLEVBQStCO01BQUE7O01BQzdCLElBQU0zSixpQkFBaUIsR0FBRyxLQUFLakMsTUFBTCxDQUFZaUMsaUJBQVosRUFBMUI7O01BRUEsSUFBSUEsaUJBQUosRUFBdUI7UUFDckIsSUFBSTZKLGlCQUFpQixHQUFHLEVBQXhCO1FBRUE3TSxNQUFNLENBQUNDLElBQVAsQ0FBWStDLGlCQUFaLEVBQStCOUMsT0FBL0IsQ0FBdUMsVUFBQ0MsR0FBRCxFQUFTO1VBQzlDLElBQUl0QixLQUFLLENBQUMsTUFBSSxDQUFDRCxLQUFMLENBQVd1QixHQUFYLENBQUQsQ0FBVCxFQUE0QjtZQUMxQixJQUFNMk0sa0JBQWtCLEdBQUc5SixpQkFBaUIsQ0FBQzdDLEdBQUQsQ0FBNUM7WUFFQTBNLGlCQUFpQixHQUFHQyxrQkFBa0IsQ0FBQ3BNLE1BQW5CLENBQTBCLFVBQUNpTSxRQUFELEVBQWM7Y0FDMUQsT0FBTyxDQUFDM00sTUFBTSxDQUFDa00sTUFBUCxDQUFjLE1BQUksQ0FBQ3ROLEtBQW5CLEVBQTBCK04sUUFBMUIsQ0FBUjtZQUNELENBRm1CLENBQXBCO1VBR0Q7UUFDRixDQVJEO1FBVUEsT0FBT0UsaUJBQWlCLENBQUMzSyxRQUFsQixDQUEyQnlLLFFBQTNCLENBQVA7TUFDRDs7TUFFRCxPQUFPLEtBQVA7SUFDRDs7O1dBRUQscUJBQWE1TCxNQUFiLEVBQXFCWixHQUFyQixFQUEwQjtNQUN4QixJQUFNdUcsUUFBUSxHQUFHLEtBQUs1RixJQUFMLENBQVVpSSxjQUFWLENBQXlCO1FBQ3hDakksSUFBSSxFQUFFLEtBQUtBLElBRDZCO1FBRXhDQyxNQUFNLEVBQUUsSUFBSThCLFVBQUosQ0FBVzlCLE1BQVgsQ0FGZ0M7UUFHeENHLElBQUksRUFBRSxLQUFLQSxJQUFMLEdBQVksR0FBWixHQUFrQmYsR0FIZ0I7UUFJeENnQixNQUFNLEVBQUU7TUFKZ0MsQ0FBekIsQ0FBakI7TUFPQSxLQUFLQyxRQUFMLENBQWNYLElBQWQsQ0FBbUJpRyxRQUFuQjtNQUNBLEtBQUs5SCxLQUFMLENBQVd1QixHQUFYLElBQWtCdUcsUUFBUSxDQUFDakUsUUFBVCxFQUFsQjtJQUNEOzs7V0FFRCxxQkFBYXRDLEdBQWIsRUFBa0I7TUFDaEIsS0FBSyxJQUFJNE0sQ0FBQyxHQUFHLEtBQUszTCxRQUFMLENBQWN2QixNQUFkLEdBQXVCLENBQXBDLEVBQXVDa04sQ0FBQyxJQUFJLENBQTVDLEVBQStDQSxDQUFDLEVBQWhELEVBQW9EO1FBQ2xELElBQU1yRyxRQUFRLEdBQUcsS0FBS3RGLFFBQUwsQ0FBYzJMLENBQWQsQ0FBakI7O1FBQ0EsSUFBSXJHLFFBQVEsQ0FBQ2hFLE1BQVQsT0FBc0J2QyxHQUExQixFQUErQjtVQUM3QnVHLFFBQVEsQ0FBQzlELE9BQVQ7VUFDQSxLQUFLeEIsUUFBTCxDQUFjc0ksTUFBZCxDQUFxQnFELENBQXJCLEVBQXdCLENBQXhCO1VBQ0EsS0FBS2pMLGFBQUw7UUFDRDtNQUNGO0lBQ0Y7OztXQUVELGtCQUFVM0IsR0FBVixFQUFlO01BQ2IsT0FBTyxLQUFLaUIsUUFBTCxDQUFjNEwsSUFBZCxDQUFtQixVQUFDdEcsUUFBRCxFQUFjO1FBQ3RDLE9BQU92RyxHQUFHLEtBQUt1RyxRQUFRLENBQUNoRSxNQUFULEdBQWtCWCxLQUFsQixDQUF3QixHQUF4QixFQUE2QkMsR0FBN0IsRUFBZjtNQUNELENBRk0sQ0FBUDtJQUdEOzs7V0FFRCxrQkFBVXBELEtBQVYsRUFBaUI7TUFDZixJQUFJVyxjQUFRLENBQUNYLEtBQUQsQ0FBWixFQUFxQjtRQUNuQixPQUFPQSxLQUFQO01BQ0Q7O01BRUQsT0FBTyxFQUFQO0lBQ0Q7OztXQUVELHlCQUFpQjtNQUNmLElBQU1BLEtBQUssR0FBRyxFQUFkO01BRUEsS0FBS3dDLFFBQUwsQ0FBY2xCLE9BQWQsQ0FBc0IsVUFBQ3lDLEtBQUQsRUFBVztRQUMvQixJQUFJQSxLQUFLLENBQUMxQixRQUFWLEVBQW9CO1VBQ2xCckMsS0FBSyxDQUFDK0QsS0FBSyxDQUFDRCxNQUFOLEVBQUQsQ0FBTCxHQUF3QkMsS0FBSyxDQUFDRixRQUFOLEVBQXhCO1FBQ0Q7TUFDRixDQUpEO01BTUEsS0FBS2dHLFFBQUwsQ0FBYzdKLEtBQWQ7SUFDRDs7O1dBRUQscUJBQWFxTyxZQUFiLEVBQTJCO01BQ3pCLElBQU05SSxVQUFVLEdBQUcsS0FBS3BELE1BQUwsQ0FBWW9ELFVBQVosRUFBbkI7O01BRUEsSUFBSSxDQUFDQSxVQUFMLEVBQWlCO1FBQ2YsT0FBTyxLQUFQO01BQ0Q7O01BRUQsT0FBT25FLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZa0UsVUFBWixFQUF3QmpDLFFBQXhCLENBQWlDK0ssWUFBakMsQ0FBUDtJQUNEOzs7V0FFRCxzQkFBYztNQUFBOztNQUNaLElBQU1yTyxLQUFLLEdBQUcsS0FBSzZELFFBQUwsRUFBZCxDQURZLENBR1o7O01BQ0EsS0FBSyxJQUFJc0ssQ0FBQyxHQUFHLEtBQUszTCxRQUFMLENBQWN2QixNQUFkLEdBQXVCLENBQXBDLEVBQXVDa04sQ0FBQyxJQUFJLENBQTVDLEVBQStDQSxDQUFDLEVBQWhELEVBQW9EO1FBQ2xELElBQU1yRyxRQUFRLEdBQUcsS0FBS3RGLFFBQUwsQ0FBYzJMLENBQWQsQ0FBakI7UUFDQSxJQUFNNU0sR0FBRyxHQUFHdUcsUUFBUSxDQUFDaEUsTUFBVCxFQUFaOztRQUNBLElBQUk1RCxNQUFNLENBQUNGLEtBQUssQ0FBQ3VCLEdBQUQsQ0FBTixDQUFWLEVBQXdCO1VBQ3RCLElBQUksS0FBSytNLFdBQUwsQ0FBaUIvTSxHQUFqQixDQUFKLEVBQTJCO1lBQ3pCdUcsUUFBUSxDQUFDNEYsVUFBVDtVQUNELENBRkQsTUFFTztZQUNMLEtBQUthLFdBQUwsQ0FBaUJoTixHQUFqQjtVQUNEO1FBQ0Y7TUFDRjs7TUFFREgsTUFBTSxDQUFDQyxJQUFQLENBQVlyQixLQUFaLEVBQW1Cc0IsT0FBbkIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFTO1FBQ2xDLElBQU13QyxLQUFLLEdBQUcsTUFBSSxDQUFDNEosUUFBTCxDQUFjcE0sR0FBZCxDQUFkLENBRGtDLENBR2xDOzs7UUFDQSxJQUFJd0MsS0FBSixFQUFXO1VBQ1QsSUFBTXlLLFFBQVEsR0FBR3pLLEtBQUssQ0FBQ0YsUUFBTixFQUFqQjtVQUNBLElBQU1OLFFBQVEsR0FBR3ZELEtBQUssQ0FBQytELEtBQUssQ0FBQ0QsTUFBTixFQUFELENBQXRCLENBRlMsQ0FJVDs7VUFDQSxJQUFJaEUsU0FBUyxDQUFDME8sUUFBRCxFQUFXakwsUUFBWCxDQUFiLEVBQW1DO1lBQ2pDUSxLQUFLLENBQUM4RixRQUFOLENBQWV0RyxRQUFmLEVBQXlCLEtBQXpCO1VBQ0Q7UUFDRixDQVJELE1BUU87VUFDTDtVQUNBLElBQU1rTCxZQUFZLEdBQUd6TyxLQUFLLENBQUN1QixHQUFELENBQTFCO1VBQ0EsSUFBTVYsSUFBSSxHQUFHRCxPQUFPLENBQUM2TixZQUFELENBQXBCO1VBRUEsSUFBTXRNLE1BQU0sR0FBRztZQUNidEIsSUFBSSxFQUFFQSxJQURPO1lBRWIsV0FBUzROO1VBRkksQ0FBZjs7VUFLQSxNQUFJLENBQUN2QixXQUFMLENBQWlCL0ssTUFBakIsRUFBeUJaLEdBQXpCO1FBQ0Q7TUFDRixDQXhCRDtJQXlCRDs7OztFQXRKMEJTLGtCOztBQXlKZDhMLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQzlKQTs7SUFFTVksbUI7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUFBOztNQUNQLEtBQUtoSSxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS2IsWUFBaEMsRUFETyxDQUdQOztNQUNBLElBQU1DLEtBQUssR0FBRyxLQUFLbUIsS0FBTCxDQUFXMEUsUUFBWCxDQUFvQjtRQUNoQyxPQUFLLEtBQUszRSxRQUFMLENBQWN4RixJQURhO1FBRWhDK0QsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsS0FBK0IsS0FBS21DLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJ3RCxLQUFyQixFQUEvQixHQUE4RCxLQUFLbUMsUUFBTCxDQUFjaEUsTUFBZCxFQUYzQztRQUdoQytDLE1BQU0sRUFBRSxLQUFLaUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmlELE1BQXJCLENBQTRCLFdBQTVCO01BSHdCLENBQXBCLENBQWQ7O01BTUEsSUFBSSxDQUFDLEtBQUswQyxRQUFMLENBQWMzRixNQUFkLENBQXFCMEssUUFBckIsQ0FBOEIsUUFBOUIsQ0FBTCxFQUE4QztRQUM1QyxLQUFLbkcsU0FBTCxDQUFlYyxXQUFmLENBQTJCWixLQUEzQjtNQUNELENBWk0sQ0FjUDtNQUNBOzs7TUFDQSxJQUFNK0gsVUFBVSxHQUFHLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsTUFBcEIsRUFBNEIsZ0JBQTVCLEVBQThDLE9BQTlDLEVBQXVELFFBQXZELEVBQWlFLE9BQWpFLEVBQTBFLFVBQTFFLEVBQXNGLFFBQXRGLEVBQWdHLE1BQWhHLEVBQXdHLEtBQXhHLEVBQStHLE1BQS9HLEVBQXVILFVBQXZILEVBQW1JLEtBQW5JLEVBQTBJLE1BQTFJLENBQW5COztNQUVBLElBQUksS0FBSzdHLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUIwSyxRQUFyQixDQUE4QixVQUE5QixDQUFKLEVBQStDO1FBQzdDLEtBQUs5RixLQUFMLEdBQWEsS0FBS2dCLEtBQUwsQ0FBVzZHLFdBQVgsQ0FBdUI7VUFDbEM1SCxFQUFFLEVBQUUsS0FBS2MsUUFBTCxDQUFjeEY7UUFEZ0IsQ0FBdkIsQ0FBYjtNQUdELENBSkQsTUFJTztRQUNMLEtBQUt5RSxLQUFMLEdBQWEsS0FBS2dCLEtBQUwsQ0FBV2lGLFFBQVgsQ0FBb0I7VUFDL0JuTSxJQUFJLEVBQUU4TixVQUFVLENBQUNyTCxRQUFYLENBQW9CLEtBQUt3RSxRQUFMLENBQWMzRixNQUFkLENBQXFCcUMsTUFBckIsRUFBcEIsSUFBcUQsS0FBS3NELFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJxQyxNQUFyQixFQUFyRCxHQUFxRixNQUQ1RDtVQUUvQndDLEVBQUUsRUFBRSxLQUFLYyxRQUFMLENBQWN4RjtRQUZhLENBQXBCLENBQWI7TUFJRDs7TUFFRCxLQUFLb0UsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtULEtBQWhDLEVBN0JPLENBK0JQOztNQUNBLEtBQUtBLEtBQUwsQ0FBVzBDLGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDLFlBQU07UUFDMUMsS0FBSSxDQUFDM0IsUUFBTCxDQUFjK0IsUUFBZCxDQUF1QixLQUFJLENBQUM5QyxLQUFMLENBQVcvRyxLQUFsQztNQUNELENBRkQsRUFoQ08sQ0FvQ1A7O01BQ0EsSUFBSSxLQUFLOEgsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmtDLFdBQXJCLEVBQUosRUFBd0M7UUFDdEMsS0FBS3FDLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLTyxLQUFMLENBQVdpQyxjQUFYLENBQTBCO1VBQ25EM0QsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMzRixNQUFkLENBQXFCa0MsV0FBckI7UUFEc0MsQ0FBMUIsQ0FBM0I7TUFHRDtJQUNGOzs7V0FFRCxxQkFBYTtNQUNYLEtBQUswQyxLQUFMLENBQVcvRyxLQUFYLEdBQW1CLEtBQUs4SCxRQUFMLENBQWNqRSxRQUFkLEVBQW5COztNQUVBLElBQUksS0FBSzJFLFFBQVQsRUFBbUI7UUFDakIsS0FBS3pCLEtBQUwsQ0FBV04sWUFBWCxDQUF3QixVQUF4QixFQUFvQyxVQUFwQztNQUNELENBRkQsTUFFTztRQUNMLEtBQUtNLEtBQUwsQ0FBV3lFLGVBQVgsQ0FBMkIsVUFBM0I7TUFDRDtJQUNGOzs7O0VBckR3QjNELGM7O0FBd0RaNkcsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDMURBOztJQUVNRyx1Qzs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQUE7O01BQ1AsS0FBS3hILFlBQUwsR0FBb0IsS0FBS1MsUUFBTCxDQUFjM0YsTUFBZCxVQUFwQjtNQUNBLEtBQUtvRixhQUFMLEdBQXFCLEtBQUtPLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJpRCxNQUFyQixDQUE0QixZQUE1QixLQUE2QyxLQUFLaUMsWUFBdkU7TUFDQSxLQUFLWCxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS2IsWUFBaEM7TUFDQSxLQUFLd0YsV0FBTCxHQUFtQixFQUFuQixDQUpPLENBTVA7O01BQ0EsS0FBS3pGLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLTyxLQUFMLENBQVdxRSxjQUFYLENBQTBCO1FBQ25EL0YsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsS0FBK0IsS0FBS21DLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJ3RCxLQUFyQixFQUEvQixHQUE4RCxLQUFLbUMsUUFBTCxDQUFjaEUsTUFBZDtNQUR4QixDQUExQixDQUEzQixFQVBPLENBV1A7O01BQ0EsS0FBS3VELFlBQUwsQ0FBa0IvRixPQUFsQixDQUEwQixVQUFDdEIsS0FBRCxFQUFRc0gsS0FBUixFQUFrQjtRQUMxQztRQUNBLElBQU0rRSxjQUFjLEdBQUcsS0FBSSxDQUFDdEUsS0FBTCxDQUFXdUUsaUJBQVgsRUFBdkIsQ0FGMEMsQ0FJMUM7OztRQUNBLElBQU1wRixLQUFLLEdBQUcsS0FBSSxDQUFDYSxLQUFMLENBQVd3RSxRQUFYLENBQW9CO1VBQ2hDdk0sS0FBSyxFQUFFQSxLQUR5QjtVQUVoQ2dILEVBQUUsRUFBRSxLQUFJLENBQUNjLFFBQUwsQ0FBY3hGLElBQWQsR0FBcUIsR0FBckIsR0FBMkJnRjtRQUZDLENBQXBCLENBQWQ7O1FBSUErRSxjQUFjLENBQUM3RSxXQUFmLENBQTJCTixLQUEzQjtRQUVBQSxLQUFLLENBQUN1QyxnQkFBTixDQUF1QixRQUF2QixFQUFpQyxZQUFNO1VBQ3JDLEtBQUksQ0FBQzNCLFFBQUwsQ0FBYytCLFFBQWQsQ0FBdUIzQyxLQUFLLENBQUNsSCxLQUE3QjtRQUNELENBRkQ7O1FBSUEsS0FBSSxDQUFDbU0sV0FBTCxDQUFpQnRLLElBQWpCLENBQXNCcUYsS0FBdEIsRUFmMEMsQ0FpQjFDOzs7UUFDQW1GLGNBQWMsQ0FBQzdFLFdBQWYsQ0FBMkIsS0FBSSxDQUFDTyxLQUFMLENBQVcwRSxRQUFYLENBQW9CO1VBQzdDLE9BQUssS0FBSSxDQUFDM0UsUUFBTCxDQUFjeEYsSUFBZCxHQUFxQixHQUFyQixHQUEyQmdGLEtBRGE7VUFFN0NqQixXQUFXLEVBQUUsS0FBSSxDQUFDa0IsYUFBTCxDQUFtQkQsS0FBbkIsQ0FGZ0M7VUFHN0NULE1BQU0sRUFBRSxLQUFJLENBQUNpQixRQUFMLENBQWMzRixNQUFkLENBQXFCaUQsTUFBckIsQ0FBNEIsV0FBNUI7UUFIcUMsQ0FBcEIsQ0FBM0I7O1FBTUEsS0FBSSxDQUFDc0IsU0FBTCxDQUFlYyxXQUFmLENBQTJCNkUsY0FBM0I7TUFDRCxDQXpCRCxFQVpPLENBdUNQOztNQUNBLElBQUksS0FBS3ZFLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQixFQUFKLEVBQXdDO1FBQ3RDLEtBQUtxQyxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS08sS0FBTCxDQUFXaUMsY0FBWCxDQUEwQjtVQUNuRDNELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmtDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQscUJBQWE7TUFBQTs7TUFDWCxLQUFLOEgsV0FBTCxDQUFpQjdLLE9BQWpCLENBQXlCLFVBQUM0RixLQUFELEVBQVc7UUFDbENBLEtBQUssQ0FBQzhFLE9BQU4sR0FBaUI5RSxLQUFLLENBQUNsSCxLQUFOLEtBQWdCLE1BQUksQ0FBQzhILFFBQUwsQ0FBY2pFLFFBQWQsRUFBakM7UUFDQXFELEtBQUssQ0FBQ3NCLFFBQU4sR0FBaUIsTUFBSSxDQUFDQSxRQUF0QjtNQUNELENBSEQ7SUFJRDs7OztFQXJEaUNrRyxjOztBQXdEckJHLDZGQUFmLEU7Ozs7Ozs7Ozs7OztBQzFEQTs7SUFFTUMseUM7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUFBOztNQUNQLEtBQUt6SCxZQUFMLEdBQW9CLEtBQUtTLFFBQUwsQ0FBYzNGLE1BQWQsVUFBcEI7TUFDQSxLQUFLb0YsYUFBTCxHQUFxQixLQUFLTyxRQUFMLENBQWMzRixNQUFkLENBQXFCaUQsTUFBckIsQ0FBNEIsWUFBNUIsS0FBNkMsS0FBS2lDLFlBQXZFO01BQ0EsS0FBS1gsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtiLFlBQWhDLEVBSE8sQ0FLUDs7TUFDQSxLQUFLRCxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS08sS0FBTCxDQUFXMEUsUUFBWCxDQUFvQjtRQUM3QyxPQUFLLEtBQUszRSxRQUFMLENBQWN4RixJQUQwQjtRQUU3QytELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQndELEtBQXJCLEtBQStCLEtBQUttQyxRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsRUFBL0IsR0FBOEQsS0FBS21DLFFBQUwsQ0FBY2hFLE1BQWQsRUFGOUI7UUFHN0MrQyxNQUFNLEVBQUUsS0FBS2lCLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJpRCxNQUFyQixDQUE0QixXQUE1QjtNQUhxQyxDQUFwQixDQUEzQixFQU5PLENBWVA7O01BQ0EsS0FBSzJCLEtBQUwsR0FBYSxLQUFLZ0IsS0FBTCxDQUFXNEUsU0FBWCxDQUFxQjtRQUNoQ3RGLFlBQVksRUFBRSxLQUFLQSxZQURhO1FBRWhDRSxhQUFhLEVBQUUsS0FBS0EsYUFGWTtRQUdoQ1AsRUFBRSxFQUFFLEtBQUtjLFFBQUwsQ0FBY3hGO01BSGMsQ0FBckIsQ0FBYjtNQU1BLEtBQUtvRSxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS1QsS0FBaEMsRUFuQk8sQ0FxQlA7O01BQ0EsS0FBS0EsS0FBTCxDQUFXMEMsZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0MsWUFBTTtRQUMxQyxLQUFJLENBQUMzQixRQUFMLENBQWMrQixRQUFkLENBQXVCLEtBQUksQ0FBQzlDLEtBQUwsQ0FBVy9HLEtBQWxDO01BQ0QsQ0FGRCxFQXRCTyxDQTBCUDs7TUFDQSxJQUFJLEtBQUs4SCxRQUFMLENBQWMzRixNQUFkLENBQXFCa0MsV0FBckIsRUFBSixFQUF3QztRQUN0QyxLQUFLcUMsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtPLEtBQUwsQ0FBV2lDLGNBQVgsQ0FBMEI7VUFDbkQzRCxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQjtRQURzQyxDQUExQixDQUEzQjtNQUdEO0lBQ0Y7Ozs7RUFqQ2tDcUssYzs7QUFvQ3RCSSxnR0FBZixFOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1DLHFCOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFDUCxJQUFJLEtBQUs1TSxNQUFMLENBQVl5RCxNQUFaLENBQW1CLFFBQW5CLEtBQWdDLEtBQUt6RCxNQUFMLFVBQWhDLElBQXNELEtBQUtBLE1BQUwsQ0FBWTBLLFFBQVosQ0FBcUIsT0FBckIsQ0FBMUQsRUFBeUY7UUFDdkYsS0FBS3BLLEVBQUwsR0FBVSxJQUFJb00saUJBQUosQ0FBMEIsSUFBMUIsQ0FBVjtNQUNELENBRkQsTUFFTyxJQUFJLEtBQUsxTSxNQUFMLENBQVl5RCxNQUFaLENBQW1CLFFBQW5CLEtBQWdDLEtBQUt6RCxNQUFMLFVBQXBDLEVBQXdEO1FBQzdELEtBQUtNLEVBQUwsR0FBVSxJQUFJcU0sa0JBQUosQ0FBMkIsSUFBM0IsQ0FBVjtNQUNELENBRk0sTUFFQSxJQUFJLEtBQUszTSxNQUFMLENBQVl5RCxNQUFaLENBQW1CLFFBQW5CLENBQUosRUFBa0M7UUFDdkMsS0FBS25ELEVBQUwsR0FBVSxJQUFJaU0sY0FBSixDQUFpQixJQUFqQixDQUFWO01BQ0Q7SUFDRjs7O1dBRUQsa0JBQVUxTyxLQUFWLEVBQWlCO01BQ2YsT0FBT2dQLE1BQU0sQ0FBQ2hQLEtBQUQsQ0FBYjtJQUNEOzs7O0VBYjBCZ0Msa0I7O0FBZ0JkK00sMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7O0lBRU1FLHVCOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLdkksU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtiLFlBQWhDLEVBRE8sQ0FHUDs7TUFDQSxLQUFLdUksZUFBTCxHQUF1QixFQUF2QjtNQUNBLEtBQUtDLFFBQUwsR0FBZ0IsS0FBS3BILEtBQUwsQ0FBV3VCLFdBQVgsRUFBaEI7TUFDQSxLQUFLNkYsUUFBTCxDQUFjaEosU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsZUFBNUI7TUFFQSxLQUFLMEIsUUFBTCxDQUFjc0gsb0JBQWQsQ0FBbUM5TixPQUFuQyxDQUEyQyxVQUFDdEIsS0FBRCxFQUFRc0gsS0FBUixFQUFrQjtRQUMzRDtRQUNBLElBQU1kLE1BQU0sR0FBRyxLQUFJLENBQUN1QixLQUFMLENBQVd5QixTQUFYLENBQXFCO1VBQ2xDbkQsV0FBVyxFQUFFLEtBQUksQ0FBQ3lCLFFBQUwsQ0FBY3VILHFCQUFkLENBQW9DL0gsS0FBcEMsQ0FEcUI7VUFFbEN0SCxLQUFLLEVBQUVzSDtRQUYyQixDQUFyQixDQUFmOztRQUtBZCxNQUFNLENBQUNpRCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO1VBQ3JDLElBQU1uQyxLQUFLLEdBQUcrQyxNQUFNLENBQUM3RCxNQUFNLENBQUN4RyxLQUFSLENBQXBCOztVQUNBLEtBQUksQ0FBQzhILFFBQUwsQ0FBY3dILFlBQWQsQ0FBMkJoSSxLQUEzQjtRQUNELENBSEQ7O1FBS0EsS0FBSSxDQUFDNkgsUUFBTCxDQUFjM0gsV0FBZCxDQUEwQmhCLE1BQTFCOztRQUNBLEtBQUksQ0FBQzBJLGVBQUwsQ0FBcUJyTixJQUFyQixDQUEwQjJFLE1BQTFCO01BQ0QsQ0FkRDtNQWdCQSxLQUFLRSxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBSzJILFFBQWhDO0lBQ0Q7OztXQUVELHdCQUFnQjtNQUNkLEtBQUt6SSxTQUFMLEdBQWlCLEtBQUtxQixLQUFMLENBQVcrQixXQUFYLEVBQWpCO01BQ0EsS0FBS3BELFNBQUwsQ0FBZUQsWUFBZixDQUE0QixXQUE1QixFQUF5QyxVQUF6QztNQUVBLEtBQUtDLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLTyxLQUFMLENBQVdnQyxTQUFYLENBQXFCO1FBQzlDMUQsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsS0FBK0IsS0FBS21DLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJ3RCxLQUFyQixFQUEvQixHQUE4RCxLQUFLbUMsUUFBTCxDQUFjaEUsTUFBZCxFQUQ3QjtRQUU5QytDLE1BQU0sRUFBRTtNQUZzQyxDQUFyQixDQUEzQjtJQUlEOzs7V0FFRCxxQkFBYTtNQUFBOztNQUNYLElBQU0wSSxTQUFTLEdBQUcsS0FBS3pILFFBQUwsQ0FBYzBILE9BQWQsQ0FBc0IsS0FBSzFILFFBQUwsQ0FBYzJILFNBQXBDLENBQWxCOztNQUVBLElBQUlGLFNBQVMsQ0FBQzlNLEVBQVYsQ0FBYWlFLFNBQWIsQ0FBdUJ3QyxVQUEzQixFQUF1QztRQUNyQyxLQUFLeEMsU0FBTCxDQUFleUMsV0FBZixDQUEyQm9HLFNBQVMsQ0FBQzlNLEVBQVYsQ0FBYWlFLFNBQXhDO01BQ0Q7O01BRUQsS0FBS0EsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtNLFFBQUwsQ0FBYzRILFlBQWQsQ0FBMkJqTixFQUEzQixDQUE4QmlFLFNBQXpEOztNQUVBLElBQUksS0FBSzhCLFFBQVQsRUFBbUI7UUFDakIsS0FBS1YsUUFBTCxDQUFjNEgsWUFBZCxDQUEyQmpOLEVBQTNCLENBQThCNkksT0FBOUI7UUFDQSxLQUFLNEQsZUFBTCxDQUFxQjVOLE9BQXJCLENBQTZCLFVBQUNrRixNQUFELEVBQVk7VUFDdkNBLE1BQU0sQ0FBQ2dDLFFBQVAsR0FBa0IsSUFBbEI7UUFDRCxDQUZEO01BR0QsQ0FMRCxNQUtPO1FBQ0wsS0FBS1YsUUFBTCxDQUFjNEgsWUFBZCxDQUEyQmpOLEVBQTNCLENBQThCOEksTUFBOUI7UUFDQSxLQUFLMkQsZUFBTCxDQUFxQjVOLE9BQXJCLENBQTZCLFVBQUNrRixNQUFELEVBQVk7VUFDdkNBLE1BQU0sQ0FBQ2dDLFFBQVAsR0FBa0IsS0FBbEI7UUFDRCxDQUZEO01BR0Q7O01BRUQsS0FBSzBHLGVBQUwsQ0FBcUI1TixPQUFyQixDQUE2QixVQUFDa0YsTUFBRCxFQUFZO1FBQ3ZDLElBQUs2RCxNQUFNLENBQUM3RCxNQUFNLENBQUN4RyxLQUFSLENBQU4sS0FBeUJxSyxNQUFNLENBQUMsTUFBSSxDQUFDdkMsUUFBTCxDQUFjUixLQUFmLENBQXBDLEVBQTREO1VBQzFEZCxNQUFNLENBQUNMLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQUksQ0FBQzJCLEtBQUwsQ0FBVzRILG9CQUFYLEVBQXJCO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xuSixNQUFNLENBQUNMLFNBQVAsQ0FBaUJ5SixNQUFqQixDQUF3QixNQUFJLENBQUM3SCxLQUFMLENBQVc0SCxvQkFBWCxFQUF4QjtRQUNEO01BQ0YsQ0FORDtJQU9EOzs7V0FFRCxnQ0FBd0I7TUFDdEI7O01BQ0EsS0FBSzdILFFBQUwsQ0FBYzRILFlBQWQsQ0FBMkJqTixFQUEzQixDQUE4QnFHLG9CQUE5QjtJQUNEOzs7O0VBdkUwQmpCLGM7O0FBMEVkb0gsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBOztJQUVNWSx5Qjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQ1AsS0FBS3BOLEVBQUwsR0FBVSxJQUFJd00sUUFBSixDQUFtQixJQUFuQixDQUFWO0lBQ0Q7OztXQUVELG1CQUFXO01BQUE7O01BQ1QsS0FBS08sT0FBTCxHQUFlLEVBQWY7TUFDQSxLQUFLRSxZQUFMLEdBQW9CLElBQXBCO01BQ0EsS0FBS0QsU0FBTCxHQUFpQixDQUFqQjtNQUNBLEtBQUtuSSxLQUFMLEdBQWEsQ0FBYjtNQUNBLEtBQUt3SSxPQUFMLEdBQWUsRUFBZjtNQUNBLEtBQUtWLG9CQUFMLEdBQTRCLEVBQTVCO01BQ0EsS0FBS0MscUJBQUwsR0FBNkIsRUFBN0I7O01BRUEsSUFBSSxLQUFLbE4sTUFBTCxDQUFZZ0MsS0FBWixNQUF1QixLQUFLaEMsTUFBTCxDQUFZMEQsS0FBWixFQUEzQixFQUFnRDtRQUM5QyxJQUFNa0ssU0FBUyxHQUFHLEtBQUs1TixNQUFMLENBQVlnQyxLQUFaLEtBQXNCLEtBQUtoQyxNQUFMLENBQVlnQyxLQUFaLEVBQXRCLEdBQTRDLEtBQUtoQyxNQUFMLENBQVkwRCxLQUFaLEVBQTlEO1FBQ0EsSUFBTW1LLFdBQVcsR0FBRyxLQUFLN04sTUFBTCxDQUFZN0MsS0FBWixFQUFwQjtRQUNBLE9BQU8wUSxXQUFXLENBQUMsT0FBRCxDQUFsQjtRQUNBLE9BQU9BLFdBQVcsQ0FBQyxPQUFELENBQWxCO1FBQ0EsT0FBT0EsV0FBVyxDQUFDLFNBQUQsQ0FBbEI7UUFFQUQsU0FBUyxDQUFDek8sT0FBVixDQUFrQixVQUFDYSxNQUFELEVBQVNtRixLQUFULEVBQW1CO1VBQUE7O1VBQ25DbkYsTUFBTSxtQ0FBUTZOLFdBQVIsR0FBd0I3TixNQUF4QixDQUFOLENBRG1DLENBR25DOztVQUNBLElBQUlBLE1BQU0sQ0FBQytCLEtBQVgsRUFBa0I7WUFDaEIsSUFBSStMLE1BQU0sR0FBRyxFQUFiO1lBRUE5TixNQUFNLENBQUMrQixLQUFQLENBQWE1QyxPQUFiLENBQXFCLFVBQUM0TyxXQUFELEVBQWlCO2NBQ3BDRCxNQUFNLEdBQUduUCxlQUFTLENBQUNtUCxNQUFELEVBQVNDLFdBQVQsQ0FBbEI7WUFDRCxDQUZEO1lBSUEvTixNQUFNLEdBQUc4TixNQUFUO1VBQ0Q7O1VBRUQsSUFBSWhRLEtBQUssQ0FBQytQLFdBQVcsQ0FBQ3JLLEtBQWIsQ0FBVCxFQUE4QjtZQUM1QnhELE1BQU0sQ0FBQ3dELEtBQVAsR0FBZXFLLFdBQVcsQ0FBQ3JLLEtBQTNCO1VBQ0Q7O1VBRUQsS0FBSSxDQUFDeUosb0JBQUwsQ0FBMEJ2TixJQUExQixDQUErQnlGLEtBQS9COztVQUNBLElBQU02SSxvQkFBb0IsR0FBRyxvQkFBQWhPLE1BQU0sQ0FBQ1csT0FBUCxvRUFBZ0JzTixhQUFoQixLQUFpQyxhQUFhOUksS0FBSyxHQUFHLENBQXJCLENBQTlEOztVQUNBLEtBQUksQ0FBQytILHFCQUFMLENBQTJCeE4sSUFBM0IsQ0FBZ0NzTyxvQkFBaEM7O1VBRUEsS0FBSSxDQUFDTCxPQUFMLENBQWFqTyxJQUFiLENBQWtCTSxNQUFsQjtRQUNELENBdkJEO01Bd0JELENBL0JELE1BK0JPLElBQUksS0FBS0EsTUFBTCxDQUFZa08sS0FBWixFQUFKLEVBQXlCO1FBQzlCLEtBQUtsTyxNQUFMLENBQVl0QixJQUFaLEdBQW1CUyxPQUFuQixDQUEyQixVQUFDVCxJQUFELEVBQU95RyxLQUFQLEVBQWlCO1VBQzFDLElBQU1nSixXQUFXLEdBQUcsS0FBSSxDQUFDbk8sTUFBTCxDQUFZN0MsS0FBWixFQUFwQjs7VUFFQSxJQUFNNkMsTUFBTSxtQ0FDUG1PLFdBRE8sR0FFUDtZQUFFelAsSUFBSSxFQUFFQSxJQUFSO1lBQWM4RSxLQUFLLEVBQUU5RSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEwUCxXQUFSLEtBQXdCMVAsSUFBSSxDQUFDMlAsS0FBTCxDQUFXLENBQVg7VUFBN0MsQ0FGTyxDQUFaOztVQUtBLElBQUl2USxLQUFLLENBQUNxUSxXQUFXLENBQUMzSyxLQUFiLENBQVQsRUFBOEI7WUFDNUJ4RCxNQUFNLENBQUN3RCxLQUFQLEdBQWUySyxXQUFXLENBQUMzSyxLQUEzQjtVQUNEOztVQUVELEtBQUksQ0FBQ3lKLG9CQUFMLENBQTBCdk4sSUFBMUIsQ0FBK0J5RixLQUEvQjs7VUFDQSxLQUFJLENBQUMrSCxxQkFBTCxDQUEyQnhOLElBQTNCLENBQWdDaEIsSUFBSSxDQUFDNFAsTUFBTCxDQUFZLENBQVosRUFBZUYsV0FBZixLQUErQjFQLElBQUksQ0FBQzJQLEtBQUwsQ0FBVyxDQUFYLENBQS9EOztVQUVBLEtBQUksQ0FBQ1YsT0FBTCxDQUFhak8sSUFBYixDQUFrQk0sTUFBbEI7UUFDRCxDQWhCRDtNQWlCRCxDQWxCTSxNQWtCQSxJQUFJLEtBQUtBLE1BQUwsQ0FBWXlELE1BQVosQ0FBbUIsS0FBbkIsS0FBNkIsQ0FBQyxLQUFLekQsTUFBTCxDQUFZdEIsSUFBWixFQUFsQyxFQUFzRDtRQUMzRCxJQUFNeVAsV0FBVyxHQUFHLEtBQUtuTyxNQUFMLENBQVk3QyxLQUFaLEVBQXBCO1FBRUEsS0FBS3dRLE9BQUwsR0FBZSxpQ0FDUlEsV0FEUSxHQUNRO1VBQUV6UCxJQUFJLEVBQUU7UUFBUixDQURSLG1DQUVSeVAsV0FGUSxHQUVRO1VBQUV6UCxJQUFJLEVBQUU7UUFBUixDQUZSLG1DQUdSeVAsV0FIUSxHQUdRO1VBQUV6UCxJQUFJLEVBQUU7UUFBUixDQUhSLG1DQUlSeVAsV0FKUSxHQUlRO1VBQUV6UCxJQUFJLEVBQUU7UUFBUixDQUpSLG1DQUtSeVAsV0FMUSxHQUtRO1VBQUV6UCxJQUFJLEVBQUU7UUFBUixDQUxSLG1DQU1SeVAsV0FOUSxHQU1RO1VBQUV6UCxJQUFJLEVBQUU7UUFBUixDQU5SLG1DQU9SeVAsV0FQUSxHQU9RO1VBQUV6UCxJQUFJLEVBQUU7UUFBUixDQVBSLEVBQWY7UUFVQSxLQUFLaVAsT0FBTCxDQUFheE8sT0FBYixDQUFxQixVQUFDYSxNQUFELEVBQVNtRixLQUFULEVBQW1CO1VBQ3RDLEtBQUksQ0FBQzhILG9CQUFMLENBQTBCdk4sSUFBMUIsQ0FBK0J5RixLQUEvQjtRQUNELENBRkQ7UUFJQSxLQUFLK0gscUJBQUwsR0FBNkIsQ0FDM0IsUUFEMkIsRUFDakIsUUFEaUIsRUFDUCxTQURPLEVBQ0ksU0FESixFQUNlLE9BRGYsRUFDd0IsUUFEeEIsRUFDa0MsTUFEbEMsQ0FBN0I7TUFHRCxDQTlFUSxDQWdGVDs7O01BQ0EsS0FBS1MsT0FBTCxDQUFheE8sT0FBYixDQUFxQixVQUFDYSxNQUFELEVBQVk7UUFDL0IsSUFBTXVPLE1BQU0sR0FBRyxLQUFJLENBQUN4TyxJQUFMLENBQVVpSSxjQUFWLENBQXlCO1VBQ3RDakksSUFBSSxFQUFFLEtBQUksQ0FBQ0EsSUFEMkI7VUFFdENDLE1BQU0sRUFBRSxJQUFJOEIsVUFBSixDQUFXOUIsTUFBWCxDQUY4QjtVQUd0Q0csSUFBSSxFQUFFLEtBQUksQ0FBQ0EsSUFIMkI7VUFJdENDLE1BQU0sRUFBRSxLQUFJLENBQUNBO1FBSnlCLENBQXpCLENBQWY7O1FBT0FtTyxNQUFNLENBQUNyTixVQUFQO1FBRUFxTixNQUFNLENBQUN6TixFQUFQLENBQVUsUUFBVixFQUFvQixZQUFNO1VBQ3hCLEtBQUksQ0FBQ1MsSUFBTCxDQUFVLFFBQVY7UUFDRCxDQUZEOztRQUlBLEtBQUksQ0FBQzhMLE9BQUwsQ0FBYTNOLElBQWIsQ0FBa0I2TyxNQUFsQjtNQUNELENBZkQ7O01BaUJBLElBQUl6USxLQUFLLENBQUMsS0FBS3VQLE9BQUwsQ0FBYSxDQUFiLENBQUQsQ0FBVCxFQUE0QjtRQUMxQixLQUFLRixZQUFMLENBQWtCLENBQWxCLEVBQXFCLEtBQXJCO01BQ0Q7SUFDRjs7O1dBRUQsc0JBQWNxQixRQUFkLEVBQStDO01BQUEsSUFBdkJuTixjQUF1Qix1RUFBTixJQUFNO01BQzdDLEtBQUtpTSxTQUFMLEdBQWlCLEtBQUtuSSxLQUF0QjtNQUNBLEtBQUtBLEtBQUwsR0FBYXFKLFFBQWI7TUFDQSxLQUFLakIsWUFBTCxHQUFvQixLQUFLRixPQUFMLENBQWEsS0FBS2xJLEtBQWxCLENBQXBCO01BQ0EsS0FBS3VDLFFBQUwsQ0FBYyxLQUFLaEcsUUFBTCxFQUFkLEVBQStCTCxjQUEvQjtJQUNEOzs7V0FFRCxvQkFBWTtNQUNWLE9BQU8sS0FBS2tNLFlBQUwsQ0FBa0I3TCxRQUFsQixFQUFQO0lBQ0Q7OztXQUVELGtCQUFVN0QsS0FBVixFQUFpQjtNQUNmLE9BQU8sS0FBSzBQLFlBQUwsQ0FBa0JqTSxRQUFsQixDQUEyQnpELEtBQTNCLENBQVA7SUFDRDs7O1dBRUQscUJBQWFBLEtBQWIsRUFBb0J3UCxPQUFwQixFQUE2QjtNQUMzQixJQUFJbEksS0FBSyxHQUFHLENBQVo7O01BRDJCLDJDQUdOa0ksT0FITTtNQUFBOztNQUFBO1FBRzNCLG9EQUE4QjtVQUFBLElBQW5Ca0IsTUFBbUI7O1VBQzVCLElBQUlBLE1BQU0sQ0FBQ2xCLE9BQVgsRUFBb0I7WUFDbEJrQixNQUFNLENBQUM3RyxRQUFQLENBQWdCN0osS0FBaEI7VUFDRDs7VUFFRCxJQUFJTCxLQUFLLENBQUMrUSxNQUFNLENBQUNqTixRQUFQLENBQWdCekQsS0FBaEIsQ0FBRCxFQUF5QkEsS0FBekIsQ0FBVCxFQUEwQztZQUN4QyxLQUFLc1AsWUFBTCxDQUFrQmhJLEtBQWxCO1lBQ0E7VUFDRDs7VUFFREEsS0FBSztRQUNOO01BZDBCO1FBQUE7TUFBQTtRQUFBO01BQUE7SUFlNUI7OztXQUVELGtCQUFVdEgsS0FBVixFQUF3QztNQUFBLElBQXZCd0QsY0FBdUIsdUVBQU4sSUFBTTs7TUFDdEM7TUFDQTtNQUNBLElBQUkxRCxTQUFTLENBQUMsS0FBSzRQLFlBQUwsQ0FBa0JqTSxRQUFsQixDQUEyQnpELEtBQTNCLENBQUQsRUFBb0NBLEtBQXBDLENBQWIsRUFBeUQ7UUFDdkQsS0FBSzRRLFdBQUwsQ0FBaUI1USxLQUFqQixFQUF3QixLQUFLd1AsT0FBN0I7TUFDRDs7TUFFRCxLQUFLRSxZQUFMLENBQWtCN0YsUUFBbEIsQ0FBMkI3SixLQUEzQixFQUFrQ3dELGNBQWxDOztNQUVBLElBQUlBLGNBQUosRUFBb0I7UUFDbEIsS0FBS0UsSUFBTCxDQUFVLFFBQVY7TUFDRDtJQUNGOzs7V0FFRCxtQkFBVztNQUNULEtBQUs4TCxPQUFMLENBQWFsTyxPQUFiLENBQXFCLFVBQUNvUCxNQUFELEVBQVk7UUFDL0JBLE1BQU0sQ0FBQzFNLE9BQVA7TUFDRCxDQUZEOztNQUlBO0lBQ0Q7Ozs7RUFoSzRCaEMsa0I7O0FBbUtoQjZOLGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hLQTs7SUFFTWdCLG1COzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLbkssU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtiLFlBQWhDLEVBRE8sQ0FHUDs7TUFDQSxLQUFLRCxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS08sS0FBTCxDQUFXMEUsUUFBWCxDQUFvQjtRQUM3QyxPQUFLLEtBQUszRSxRQUFMLENBQWN4RixJQUQwQjtRQUU3QytELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQndELEtBQXJCLEtBQStCLEtBQUttQyxRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsRUFBL0IsR0FBOEQsS0FBS21DLFFBQUwsQ0FBY2hFLE1BQWQsRUFGOUI7UUFHN0MrQyxNQUFNLEVBQUUsS0FBS2lCLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJpRCxNQUFyQixDQUE0QixXQUE1QjtNQUhxQyxDQUFwQixDQUEzQixFQUpPLENBVVA7O01BQ0EsS0FBSzJCLEtBQUwsR0FBYSxLQUFLZ0IsS0FBTCxDQUFXaUYsUUFBWCxDQUFvQjtRQUMvQm5NLElBQUksRUFBRSxRQUR5QjtRQUUvQm1HLEVBQUUsRUFBRSxLQUFLYyxRQUFMLENBQWN4RjtNQUZhLENBQXBCLENBQWI7TUFJQSxLQUFLb0UsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtULEtBQWhDLEVBZk8sQ0FpQlA7O01BQ0EsS0FBS0EsS0FBTCxDQUFXMEMsZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0MsWUFBTTtRQUMxQyxLQUFJLENBQUMzQixRQUFMLENBQWMrQixRQUFkLENBQXVCLEtBQUksQ0FBQzlDLEtBQUwsQ0FBVy9HLEtBQWxDO01BQ0QsQ0FGRCxFQWxCTyxDQXNCUDs7TUFDQSxJQUFJLEtBQUs4SCxRQUFMLENBQWMzRixNQUFkLENBQXFCa0MsV0FBckIsRUFBSixFQUF3QztRQUN0QyxLQUFLcUMsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtPLEtBQUwsQ0FBV2lDLGNBQVgsQ0FBMEI7VUFDbkQzRCxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQjtRQURzQyxDQUExQixDQUEzQjtNQUdEO0lBQ0Y7OztXQUVELGtCQUFVckUsS0FBVixFQUFpQjtNQUNmLElBQUksS0FBSzhILFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJ5RCxNQUFyQixDQUE0QixTQUE1QixDQUFKLEVBQTRDO1FBQzFDLE9BQU92RixJQUFJLENBQUNDLEtBQUwsQ0FBVytKLE1BQU0sQ0FBQ3JLLEtBQUQsQ0FBakIsQ0FBUDtNQUNELENBRkQsTUFFTztRQUNMLE9BQU9xSyxNQUFNLENBQUNySyxLQUFELENBQWI7TUFDRDtJQUNGOzs7V0FFRCxxQkFBYTtNQUNYLEtBQUsrRyxLQUFMLENBQVcvRyxLQUFYLEdBQW1CLEtBQUs4SCxRQUFMLENBQWNqRSxRQUFkLEVBQW5COztNQUVBLElBQUksS0FBSzJFLFFBQVQsRUFBbUI7UUFDakIsS0FBS3pCLEtBQUwsQ0FBV04sWUFBWCxDQUF3QixVQUF4QixFQUFvQyxVQUFwQztNQUNELENBRkQsTUFFTztRQUNMLEtBQUtNLEtBQUwsQ0FBV3lFLGVBQVgsQ0FBMkIsVUFBM0I7TUFDRDtJQUNGOzs7O0VBL0N3QjNELGM7O0FBa0RaZ0osc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDcERBOztJQUVNQyx1Qzs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQUE7O01BQ1AsS0FBS3pKLFlBQUwsR0FBb0IsS0FBS1MsUUFBTCxDQUFjM0YsTUFBZCxVQUFwQjtNQUNBLEtBQUtvRixhQUFMLEdBQXFCLEtBQUtPLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJpRCxNQUFyQixDQUE0QixZQUE1QixLQUE2QyxLQUFLaUMsWUFBdkU7TUFDQSxLQUFLWCxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS2IsWUFBaEM7TUFDQSxLQUFLd0YsV0FBTCxHQUFtQixFQUFuQixDQUpPLENBTVA7O01BQ0EsS0FBS3pGLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLTyxLQUFMLENBQVdxRSxjQUFYLENBQTBCO1FBQ25EL0YsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsS0FBK0IsS0FBS21DLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJ3RCxLQUFyQixFQUEvQixHQUE4RCxLQUFLbUMsUUFBTCxDQUFjaEUsTUFBZDtNQUR4QixDQUExQixDQUEzQixFQVBPLENBV1A7O01BQ0EsS0FBS3VELFlBQUwsQ0FBa0IvRixPQUFsQixDQUEwQixVQUFDdEIsS0FBRCxFQUFRc0gsS0FBUixFQUFrQjtRQUMxQztRQUNBLElBQU0rRSxjQUFjLEdBQUcsS0FBSSxDQUFDdEUsS0FBTCxDQUFXdUUsaUJBQVgsRUFBdkIsQ0FGMEMsQ0FJMUM7OztRQUNBLElBQU1wRixLQUFLLEdBQUcsS0FBSSxDQUFDYSxLQUFMLENBQVd3RSxRQUFYLENBQW9CO1VBQ2hDdk0sS0FBSyxFQUFFQSxLQUR5QjtVQUVoQ2dILEVBQUUsRUFBRSxLQUFJLENBQUNjLFFBQUwsQ0FBY3hGLElBQWQsR0FBcUIsR0FBckIsR0FBMkJnRjtRQUZDLENBQXBCLENBQWQ7O1FBSUErRSxjQUFjLENBQUM3RSxXQUFmLENBQTJCTixLQUEzQjtRQUVBQSxLQUFLLENBQUN1QyxnQkFBTixDQUF1QixRQUF2QixFQUFpQyxZQUFNO1VBQ3JDLEtBQUksQ0FBQzNCLFFBQUwsQ0FBYytCLFFBQWQsQ0FBdUIzQyxLQUFLLENBQUNsSCxLQUE3QjtRQUNELENBRkQ7O1FBSUEsS0FBSSxDQUFDbU0sV0FBTCxDQUFpQnRLLElBQWpCLENBQXNCcUYsS0FBdEIsRUFmMEMsQ0FpQjFDOzs7UUFDQW1GLGNBQWMsQ0FBQzdFLFdBQWYsQ0FBMkIsS0FBSSxDQUFDTyxLQUFMLENBQVcwRSxRQUFYLENBQW9CO1VBQzdDLE9BQUssS0FBSSxDQUFDM0UsUUFBTCxDQUFjeEYsSUFBZCxHQUFxQixHQUFyQixHQUEyQmdGLEtBRGE7VUFFN0NqQixXQUFXLEVBQUUsS0FBSSxDQUFDa0IsYUFBTCxDQUFtQkQsS0FBbkIsQ0FGZ0M7VUFHN0NULE1BQU0sRUFBRSxLQUFJLENBQUNpQixRQUFMLENBQWMzRixNQUFkLENBQXFCaUQsTUFBckIsQ0FBNEIsV0FBNUI7UUFIcUMsQ0FBcEIsQ0FBM0I7O1FBTUEsS0FBSSxDQUFDc0IsU0FBTCxDQUFlYyxXQUFmLENBQTJCNkUsY0FBM0I7TUFDRCxDQXpCRCxFQVpPLENBdUNQOztNQUNBLElBQUksS0FBS3ZFLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQixFQUFKLEVBQXdDO1FBQ3RDLEtBQUtxQyxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS08sS0FBTCxDQUFXaUMsY0FBWCxDQUEwQjtVQUNuRDNELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmtDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQscUJBQWE7TUFBQTs7TUFDWCxLQUFLOEgsV0FBTCxDQUFpQjdLLE9BQWpCLENBQXlCLFVBQUM0RixLQUFELEVBQVc7UUFDbENBLEtBQUssQ0FBQzhFLE9BQU4sR0FBaUIzQixNQUFNLENBQUNuRCxLQUFLLENBQUNsSCxLQUFQLENBQU4sS0FBd0JxSyxNQUFNLENBQUMsTUFBSSxDQUFDdkMsUUFBTCxDQUFjakUsUUFBZCxFQUFELENBQS9DO1FBQ0FxRCxLQUFLLENBQUNzQixRQUFOLEdBQWlCLE1BQUksQ0FBQ0EsUUFBdEI7TUFDRCxDQUhEO0lBSUQ7Ozs7RUFyRGlDcUksYzs7QUF3RHJCQyw2RkFBZixFOzs7Ozs7Ozs7Ozs7QUMxREE7O0lBRU1DLHlDOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLMUosWUFBTCxHQUFvQixLQUFLUyxRQUFMLENBQWMzRixNQUFkLFVBQXBCO01BQ0EsS0FBS29GLGFBQUwsR0FBcUIsS0FBS08sUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmlELE1BQXJCLENBQTRCLFlBQTVCLEtBQTZDLEtBQUtpQyxZQUF2RTtNQUNBLEtBQUtYLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLYixZQUFoQztNQUVBLEtBQUtELFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLTyxLQUFMLENBQVcwRSxRQUFYLENBQW9CO1FBQzdDLE9BQUssS0FBSzNFLFFBQUwsQ0FBY3hGLElBRDBCO1FBRTdDK0QsV0FBVyxFQUFFLEtBQUt5QixRQUFMLENBQWMzRixNQUFkLENBQXFCd0QsS0FBckIsS0FBK0IsS0FBS21DLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJ3RCxLQUFyQixFQUEvQixHQUE4RCxLQUFLbUMsUUFBTCxDQUFjaEUsTUFBZCxFQUY5QjtRQUc3QytDLE1BQU0sRUFBRSxLQUFLaUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmlELE1BQXJCLENBQTRCLFdBQTVCO01BSHFDLENBQXBCLENBQTNCLEVBTE8sQ0FXUDs7TUFDQSxLQUFLMkIsS0FBTCxHQUFhLEtBQUtnQixLQUFMLENBQVc0RSxTQUFYLENBQXFCO1FBQ2hDdEYsWUFBWSxFQUFFLEtBQUtBLFlBRGE7UUFFaENFLGFBQWEsRUFBRSxLQUFLQSxhQUZZO1FBR2hDUCxFQUFFLEVBQUUsS0FBS2MsUUFBTCxDQUFjeEY7TUFIYyxDQUFyQixDQUFiO01BS0EsS0FBS29FLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixLQUFLVCxLQUFoQyxFQWpCTyxDQW1CUDs7TUFDQSxLQUFLQSxLQUFMLENBQVcwQyxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxZQUFNO1FBQzFDLEtBQUksQ0FBQzNCLFFBQUwsQ0FBYytCLFFBQWQsQ0FBdUIsS0FBSSxDQUFDOUMsS0FBTCxDQUFXL0csS0FBbEM7TUFDRCxDQUZELEVBcEJPLENBd0JQOztNQUNBLElBQUksS0FBSzhILFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQixFQUFKLEVBQXdDO1FBQ3RDLEtBQUtxQyxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS08sS0FBTCxDQUFXaUMsY0FBWCxDQUEwQjtVQUNuRDNELFdBQVcsRUFBRSxLQUFLeUIsUUFBTCxDQUFjM0YsTUFBZCxDQUFxQmtDLFdBQXJCO1FBRHNDLENBQTFCLENBQTNCO01BR0Q7SUFDRjs7OztFQS9Ca0N3TSxjOztBQWtDdEJFLGdHQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUMscUI7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUNQLElBQUksS0FBSzdPLE1BQUwsQ0FBWThPLGFBQVosTUFBK0IsS0FBSzlPLE1BQUwsVUFBL0IsSUFBcUQsS0FBS0EsTUFBTCxDQUFZMEssUUFBWixDQUFxQixPQUFyQixDQUF6RCxFQUF3RjtRQUN0RixLQUFLcEssRUFBTCxHQUFVLElBQUlxTyxpQkFBSixDQUEwQixJQUExQixDQUFWO01BQ0QsQ0FGRCxNQUVPLElBQUksS0FBSzNPLE1BQUwsQ0FBWThPLGFBQVosTUFBK0IsS0FBSzlPLE1BQUwsVUFBbkMsRUFBdUQ7UUFDNUQsS0FBS00sRUFBTCxHQUFVLElBQUlzTyxrQkFBSixDQUEyQixJQUEzQixDQUFWO01BQ0QsQ0FGTSxNQUVBLElBQUksS0FBSzVPLE1BQUwsQ0FBWThPLGFBQVosRUFBSixFQUFpQztRQUN0QyxLQUFLeE8sRUFBTCxHQUFVLElBQUlvTyxjQUFKLENBQWlCLElBQWpCLENBQVY7TUFDRDtJQUNGOzs7V0FFRCxrQkFBVTdRLEtBQVYsRUFBaUI7TUFDZixJQUFJLEtBQUttQyxNQUFMLENBQVl5RCxNQUFaLENBQW1CLFNBQW5CLENBQUosRUFBbUM7UUFDakMsT0FBT3ZGLElBQUksQ0FBQ0MsS0FBTCxDQUFXK0osTUFBTSxDQUFDckssS0FBRCxDQUFqQixDQUFQO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsT0FBT3FLLE1BQU0sQ0FBQ3JLLEtBQUQsQ0FBYjtNQUNEO0lBQ0Y7Ozs7RUFqQjBCZ0Msa0I7O0FBb0JkZ1AsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDekJBOztJQUVNRSxlOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFDUCxLQUFLeEssU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtiLFlBQWhDLEVBRE8sQ0FHUDs7TUFDQSxJQUFJLEtBQUttQixRQUFMLENBQWMzRixNQUFkLENBQXFCa0MsV0FBckIsRUFBSixFQUF3QztRQUN0QyxLQUFLcUMsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtPLEtBQUwsQ0FBV2lDLGNBQVgsQ0FBMEI7VUFDbkQzRCxXQUFXLEVBQUUsS0FBS3lCLFFBQUwsQ0FBYzNGLE1BQWQsQ0FBcUJrQyxXQUFyQjtRQURzQyxDQUExQixDQUEzQjtNQUdEO0lBQ0Y7OztXQUVELG9CQUFZO01BQ1YsT0FBTyxJQUFQO0lBQ0Q7Ozs7RUFkc0J3RCxjOztBQWlCVnFKLGdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOztJQUVNQyxpQjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQ1AsS0FBSzFPLEVBQUwsR0FBVSxJQUFJeU8sWUFBSixDQUFlLElBQWYsQ0FBVjtJQUNEOzs7V0FFRCxrQkFBVWxSLEtBQVYsRUFBaUI7TUFDZixPQUFPLElBQVA7SUFDRDs7OztFQVB3QmdDLGtCOztBQVVabVAsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1DLGtDO0VBQ0osNEJBQWU7SUFBQTs7SUFBQTs7SUFDYjtBQUNKO0FBQ0E7SUFDSSxLQUFLQyxTQUFMLEdBQWlCLENBQ2YsVUFBQ2xQLE1BQUQsRUFBU0YsTUFBVCxFQUFvQjtNQUNsQixJQUFJRSxNQUFNLENBQUNnQyxLQUFQLE1BQWtCaEMsTUFBTSxDQUFDMEQsS0FBUCxFQUFsQixJQUFvQzFELE1BQU0sQ0FBQ3lELE1BQVAsQ0FBYyxLQUFkLENBQXBDLElBQTREekQsTUFBTSxDQUFDa08sS0FBUCxFQUE1RCxJQUE4RSxDQUFDbE8sTUFBTSxDQUFDdEIsSUFBUCxFQUFuRixFQUFrRztRQUNoRyxJQUFJLENBQUNzQixNQUFNLENBQUN0QixJQUFQLEVBQUQsSUFBa0JzQixNQUFNLFdBQU4sRUFBdEIsRUFBd0M7VUFDdEMsSUFBTW1QLGNBQWMsR0FBR25QLE1BQU0sQ0FBQzdDLEtBQVAsRUFBdkI7VUFDQWdTLGNBQWMsQ0FBQ3pRLElBQWYsR0FBc0JELE9BQU8sQ0FBQ3VCLE1BQU0sV0FBTixFQUFELENBQTdCO1VBQ0EsSUFBTW9QLFNBQVMsR0FBRyxJQUFJdE4sVUFBSixDQUFXcU4sY0FBWCxDQUFsQjtVQUNBLE9BQU8sS0FBSSxDQUFDRSxPQUFMLENBQWFELFNBQWIsQ0FBUDtRQUNELENBTEQsTUFLTztVQUNMLE9BQU8sSUFBSTFCLGtCQUFKLENBQXFCNU4sTUFBckIsQ0FBUDtRQUNEO01BQ0Y7SUFDRixDQVpjLEVBYWYsVUFBQ0UsTUFBRCxFQUFTRixNQUFULEVBQW9CO01BQ2xCLElBQUlFLE1BQU0sQ0FBQ3lELE1BQVAsQ0FBYyxTQUFkLENBQUosRUFBOEI7UUFDNUIsT0FBTyxJQUFJZ0gsaUJBQUosQ0FBb0IzSyxNQUFwQixDQUFQO01BQ0Q7SUFDRixDQWpCYyxFQWtCZixVQUFDRSxNQUFELEVBQVNGLE1BQVQsRUFBb0I7TUFDbEIsSUFBSUUsTUFBTSxDQUFDeUQsTUFBUCxDQUFjLFFBQWQsQ0FBSixFQUE2QjtRQUMzQixPQUFPLElBQUlrSSxnQkFBSixDQUFtQjdMLE1BQW5CLENBQVA7TUFDRDtJQUNGLENBdEJjLEVBdUJmLFVBQUNFLE1BQUQsRUFBU0YsTUFBVCxFQUFvQjtNQUNsQixJQUFJRSxNQUFNLENBQUN5RCxNQUFQLENBQWMsT0FBZCxDQUFKLEVBQTRCO1FBQzFCLE9BQU8sSUFBSTZGLGVBQUosQ0FBa0J4SixNQUFsQixDQUFQO01BQ0Q7SUFDRixDQTNCYyxFQTRCZixVQUFDRSxNQUFELEVBQVNGLE1BQVQsRUFBb0I7TUFDbEIsSUFBSUUsTUFBTSxDQUFDeUQsTUFBUCxDQUFjLFFBQWQsQ0FBSixFQUE2QjtRQUMzQixPQUFPLElBQUltSixnQkFBSixDQUFtQjlNLE1BQW5CLENBQVA7TUFDRDtJQUNGLENBaENjLEVBaUNmLFVBQUNFLE1BQUQsRUFBU0YsTUFBVCxFQUFvQjtNQUNsQixJQUFJRSxNQUFNLENBQUM4TyxhQUFQLEVBQUosRUFBNEI7UUFDMUIsT0FBTyxJQUFJRCxnQkFBSixDQUFtQi9PLE1BQW5CLENBQVA7TUFDRDtJQUNGLENBckNjLEVBc0NmLFVBQUNFLE1BQUQsRUFBU0YsTUFBVCxFQUFvQjtNQUNsQixJQUFJRSxNQUFNLENBQUN5RCxNQUFQLENBQWMsTUFBZCxDQUFKLEVBQTJCO1FBQ3pCLE9BQU8sSUFBSXVMLGNBQUosQ0FBaUJsUCxNQUFqQixDQUFQO01BQ0Q7SUFDRixDQTFDYyxDQUFqQjtFQTRDRDtFQUVEO0FBQ0Y7QUFDQTs7Ozs7V0FDRSxpQkFBU0EsTUFBVCxFQUFpQjtNQUFBLDREQUNRLEtBQUtvUCxTQURiO01BQUE7O01BQUE7UUFDZixvREFBdUM7VUFBQSxJQUE1QkksUUFBNEI7VUFDckMsSUFBTUMsV0FBVyxHQUFHRCxRQUFRLENBQUN4UCxNQUFNLENBQUNFLE1BQVIsRUFBZ0JGLE1BQWhCLENBQTVCOztVQUNBLElBQUloQyxLQUFLLENBQUN5UixXQUFELENBQVQsRUFBd0I7WUFDdEIsT0FBT0EsV0FBUDtVQUNEO1FBQ0Y7TUFOYztRQUFBO01BQUE7UUFBQTtNQUFBO0lBT2hCOzs7Ozs7QUFHWU4sd0ZBQWYsRTs7Ozs7QUMxRUE7QUFDQTtBQUNBOztJQUVNTyxtQjtFQUNKLHFCQUFlO0lBQUE7O0lBQ2IsS0FBS0MsVUFBTCxHQUFrQixDQUNoQixPQURnQixFQUVoQixPQUZnQixFQUdoQixPQUhnQixFQUloQixtQkFKZ0IsRUFLaEIsUUFMZ0IsRUFNaEIsSUFOZ0IsRUFPaEIsT0FQZ0IsRUFRaEIsS0FSZ0IsRUFTaEIsTUFUZ0IsRUFVaEIsYUFWZ0IsRUFXaEIsa0JBWGdCLEVBWWhCLGtCQVpnQixFQWFoQixVQWJnQixFQWNoQixVQWRnQixFQWVoQixXQWZnQixFQWdCaEIsV0FoQmdCLEVBaUJoQixTQWpCZ0IsRUFrQmhCLFNBbEJnQixFQW1CaEIsWUFuQmdCLEVBb0JoQixTQXBCZ0IsRUFxQmhCLG1CQXJCZ0IsRUFzQmhCLE1BdEJnQixFQXVCaEIsVUF2QmdCLEVBd0JoQixlQXhCZ0IsRUF5QmhCLGVBekJnQixDQUFsQjtFQTJCRDs7OztXQUVELGVBQU81UixLQUFQLEVBQWNtQyxNQUFkLEVBQXNCWixHQUF0QixFQUEyQmUsSUFBM0IsRUFBaUM7TUFBQTs7TUFDL0IsSUFBSXlHLE1BQU0sR0FBRyxFQUFiOztNQUVBLElBQUk1RyxNQUFNLENBQUMrQixLQUFQLEVBQUosRUFBb0I7UUFDbEIvQixNQUFNLENBQUMrQixLQUFQLEdBQWU1QyxPQUFmLENBQXVCLFVBQUNhLE1BQUQsRUFBWTtVQUNqQyxJQUFNMFAsV0FBVyxHQUFHLEtBQUksQ0FBQ2pPLFFBQUwsQ0FBYzVELEtBQWQsRUFBcUIsSUFBSWlFLFVBQUosQ0FBVzlCLE1BQVgsQ0FBckIsRUFBeUNaLEdBQXpDLEVBQThDZSxJQUE5QyxDQUFwQjs7VUFDQXlHLE1BQU0seUNBQU9BLE1BQVAsK0JBQWtCOEksV0FBbEIsRUFBTjtRQUNELENBSEQ7TUFJRDs7TUFFRCxPQUFPOUksTUFBUDtJQUNEOzs7V0FFRCxlQUFPL0ksS0FBUCxFQUFjbUMsTUFBZCxFQUFzQlosR0FBdEIsRUFBMkJlLElBQTNCLEVBQWlDO01BQUE7O01BQy9CLElBQU15RyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJNUcsTUFBTSxDQUFDZ0MsS0FBUCxFQUFKLEVBQW9CO1FBQ2xCLElBQU0yTixLQUFLLEdBQUczUCxNQUFNLENBQUNnQyxLQUFQLEdBQWU0TixJQUFmLENBQW9CLFVBQUM1UCxNQUFELEVBQVk7VUFDNUMsSUFBTTZQLFdBQVcsR0FBRyxNQUFJLENBQUNwTyxRQUFMLENBQWM1RCxLQUFkLEVBQXFCLElBQUlpRSxVQUFKLENBQVc5QixNQUFYLENBQXJCLEVBQXlDWixHQUF6QyxFQUE4Q2UsSUFBOUMsQ0FBcEI7O1VBQ0EsT0FBTzBQLFdBQVcsQ0FBQy9RLE1BQVosS0FBdUIsQ0FBOUI7UUFDRCxDQUhhLENBQWQ7O1FBS0EsSUFBSSxDQUFDNlEsS0FBTCxFQUFZO1VBQ1YsSUFBTUcsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcsOERBRFA7WUFFVjNQLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPeUcsTUFBUDtJQUNEOzs7V0FFRCxnQkFBTy9JLEtBQVAsRUFBY21DLE1BQWQsRUFBc0JaLEdBQXRCLEVBQTJCZSxJQUEzQixFQUFpQztNQUMvQixJQUFNeUcsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSTVHLE1BQU0sU0FBTixFQUFKLEVBQW9CO1FBQ2xCLElBQU0rUCxvQkFBb0IsR0FBSTFTLElBQUksQ0FBQ0UsU0FBTCxDQUFlTSxLQUFmLE1BQTBCUixJQUFJLENBQUNFLFNBQUwsQ0FBZXlDLE1BQU0sU0FBTixFQUFmLENBQXhEO1FBQ0EsSUFBTWdRLE9BQU8sR0FBSUQsb0JBQWpCOztRQUVBLElBQUlDLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBRzlQLE1BQU0sQ0FBQ3dELEtBQVAsS0FBaUJ4RCxNQUFNLENBQUN3RCxLQUFQLEVBQWpCLEdBQWtDcEUsR0FBaEQ7VUFFQXdILE1BQU0sQ0FBQ2xILElBQVAsQ0FBWTtZQUNWeUUsT0FBTyxFQUFFMkwsS0FBSyxHQUFHLG9CQUFSLEdBQStCelMsSUFBSSxDQUFDRSxTQUFMLENBQWV5QyxNQUFNLFNBQU4sRUFBZixDQUQ5QjtZQUVWRyxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQsMkJBQW1CL0ksS0FBbkIsRUFBMEJtQyxNQUExQixFQUFrQ1osR0FBbEMsRUFBdUNlLElBQXZDLEVBQTZDO01BQzNDLElBQU15RyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJcEksY0FBUSxDQUFDWCxLQUFELENBQVIsSUFBbUJtQyxNQUFNLENBQUNpQyxpQkFBUCxFQUF2QixFQUFtRDtRQUNqRCxJQUFJNkosaUJBQWlCLEdBQUcsRUFBeEI7UUFFQTdNLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZYyxNQUFNLENBQUNpQyxpQkFBUCxFQUFaLEVBQXdDOUMsT0FBeEMsQ0FBZ0QsVUFBQ0MsR0FBRCxFQUFTO1VBQ3ZELElBQUl0QixLQUFLLENBQUNELEtBQUssQ0FBQ3VCLEdBQUQsQ0FBTixDQUFULEVBQXVCO1lBQ3JCLElBQU0yTSxrQkFBa0IsR0FBRy9MLE1BQU0sQ0FBQ2lDLGlCQUFQLEdBQTJCN0MsR0FBM0IsQ0FBM0I7WUFFQTBNLGlCQUFpQixHQUFHQyxrQkFBa0IsQ0FBQ3BNLE1BQW5CLENBQTBCLFVBQUNpTSxRQUFELEVBQWM7Y0FDMUQsT0FBTyxDQUFDM00sTUFBTSxDQUFDa00sTUFBUCxDQUFjdE4sS0FBZCxFQUFxQitOLFFBQXJCLENBQVI7WUFDRCxDQUZtQixDQUFwQjtVQUdEO1FBQ0YsQ0FSRDtRQVVBLElBQU1vRSxPQUFPLEdBQUdsRSxpQkFBaUIsQ0FBQ2hOLE1BQWxCLEdBQTJCLENBQTNDOztRQUVBLElBQUlrUixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUc5UCxNQUFNLENBQUN3RCxLQUFQLEtBQWlCeEQsTUFBTSxDQUFDd0QsS0FBUCxFQUFqQixHQUFrQ3BFLEdBQWhEO1VBRUF3SCxNQUFNLENBQUNsSCxJQUFQLENBQVk7WUFDVnlFLE9BQU8sRUFBRTJMLEtBQUssR0FBRyx3Q0FBUixHQUFtRGhFLGlCQUFpQixDQUFDbUUsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEbEQ7WUFFVjlQLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPeUcsTUFBUDtJQUNEOzs7V0FFRCxlQUFNL0ksS0FBTixFQUFhbUMsTUFBYixFQUFxQlosR0FBckIsRUFBMEJlLElBQTFCLEVBQWdDO01BQzlCLElBQU15RyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJNUcsTUFBTSxRQUFOLEVBQUosRUFBbUI7UUFDakIsSUFBTWdRLE9BQU8sR0FBRyxDQUFDaFEsTUFBTSxRQUFOLEdBQWM0UCxJQUFkLENBQW1CLFVBQUFNLENBQUM7VUFBQSxPQUFJN1MsSUFBSSxDQUFDRSxTQUFMLENBQWVNLEtBQWYsTUFBMEJSLElBQUksQ0FBQ0UsU0FBTCxDQUFlMlMsQ0FBZixDQUE5QjtRQUFBLENBQXBCLENBQWpCOztRQUVBLElBQUlGLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBRzlQLE1BQU0sQ0FBQ3dELEtBQVAsS0FBaUJ4RCxNQUFNLENBQUN3RCxLQUFQLEVBQWpCLEdBQWtDcEUsR0FBaEQ7VUFFQXdILE1BQU0sQ0FBQ2xILElBQVAsQ0FBWTtZQUNWeUUsT0FBTyxFQUFFMkwsS0FBSyxHQUFHLHlDQUFSLEdBQW9EelMsSUFBSSxDQUFDRSxTQUFMLENBQWV5QyxNQUFNLFFBQU4sRUFBZixDQURuRDtZQUVWRyxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQsMEJBQWtCL0ksS0FBbEIsRUFBeUJtQyxNQUF6QixFQUFpQ1osR0FBakMsRUFBc0NlLElBQXRDLEVBQTRDO01BQzFDLElBQU15RyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJNUksUUFBUSxDQUFDSCxLQUFELENBQVIsSUFBbUJtQyxNQUFNLENBQUNtQyxnQkFBUCxFQUF2QixFQUFrRDtRQUNoRCxJQUFNZ08sZUFBZSxHQUFJblEsTUFBTSxDQUFDbUMsZ0JBQVAsS0FBNEIsQ0FBckQ7UUFDQSxJQUFNNk4sT0FBTyxHQUFJblMsS0FBSyxHQUFHc1MsZUFBekI7O1FBRUEsSUFBSUgsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcscUJBQVIsR0FBZ0NLLGVBRC9CO1lBRVZoUSxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQsMEJBQWtCL0ksS0FBbEIsRUFBeUJtQyxNQUF6QixFQUFpQ1osR0FBakMsRUFBc0NlLElBQXRDLEVBQTRDO01BQzFDLElBQU15RyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJNUksUUFBUSxDQUFDSCxLQUFELENBQVIsSUFBbUJtQyxNQUFNLENBQUNvQyxnQkFBUCxFQUF2QixFQUFrRDtRQUNoRCxJQUFNZ08sZUFBZSxHQUFJcFEsTUFBTSxDQUFDb0MsZ0JBQVAsS0FBNEIsQ0FBckQ7UUFDQSxJQUFNNE4sT0FBTyxHQUFJblMsS0FBSyxHQUFHdVMsZUFBekI7O1FBRUEsSUFBSUosT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcsb0JBQVIsR0FBK0JNLGVBRDlCO1lBRVZqUSxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQsZ0JBQVEvSSxLQUFSLEVBQWVtQyxNQUFmLEVBQXVCWixHQUF2QixFQUE0QmUsSUFBNUIsRUFBa0M7TUFDaEMsSUFBTXlHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUk1RyxNQUFNLENBQUNxQyxNQUFQLEVBQUosRUFBcUI7UUFDbkIsSUFBSTJOLE9BQU8sR0FBRyxLQUFkOztRQUVBLElBQUloUSxNQUFNLENBQUMwSyxRQUFQLENBQWdCLE9BQWhCLENBQUosRUFBOEI7VUFDNUIsSUFBTTJGLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVcsMElBQVgsQ0FBZjtVQUNBTixPQUFPLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDRSxJQUFQLENBQVkxUyxLQUFaLENBQVg7UUFDRDs7UUFFRCxJQUFJbVMsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcsZ0NBRFA7WUFFVjNQLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPeUcsTUFBUDtJQUNEOzs7V0FFRCxhQUFJL0ksS0FBSixFQUFXbUMsTUFBWCxFQUFtQjtNQUNqQixJQUFJNEcsTUFBTSxHQUFHLEVBQWI7O01BRUEsSUFBSTVHLE1BQU0sTUFBTixFQUFKLEVBQWlCO1FBQ2YsSUFBSSxDQUFDQSxNQUFNLENBQUN1RCxJQUFQLEVBQUQsSUFBa0IsQ0FBQ3ZELE1BQU0sUUFBTixFQUF2QixFQUFzQztVQUNwQyxPQUFPNEcsTUFBUDtRQUNEOztRQUVELElBQU00SixRQUFRLEdBQUcsSUFBSUMsR0FBSixDQUFTO1VBQUV6USxNQUFNLEVBQUVBLE1BQU0sTUFBTixFQUFWO1VBQXVCMFEsVUFBVSxFQUFFN1M7UUFBbkMsQ0FBVCxDQUFqQjtRQUNBLElBQU04UyxRQUFRLEdBQUdILFFBQVEsQ0FBQy9PLFFBQVQsRUFBakI7O1FBRUEsSUFBSWtQLFFBQVEsQ0FBQzdSLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7VUFDekIsSUFBTThSLFVBQVUsR0FBRyxJQUFJSCxHQUFKLENBQVM7WUFBRXpRLE1BQU0sRUFBRUEsTUFBTSxDQUFDdUQsSUFBUCxFQUFWO1lBQXlCbU4sVUFBVSxFQUFFN1M7VUFBckMsQ0FBVCxDQUFuQjtVQUNBK0ksTUFBTSxHQUFHZ0ssVUFBVSxDQUFDblAsUUFBWCxFQUFUO1FBQ0QsQ0FIRCxNQUdPO1VBQ0wsSUFBTW9QLFVBQVUsR0FBRyxJQUFJSixHQUFKLENBQVM7WUFBRXpRLE1BQU0sRUFBRUEsTUFBTSxRQUFOLEVBQVY7WUFBeUIwUSxVQUFVLEVBQUU3UztVQUFyQyxDQUFULENBQW5CO1VBQ0ErSSxNQUFNLEdBQUdpSyxVQUFVLENBQUNwUCxRQUFYLEVBQVQ7UUFDRDtNQUNGOztNQUVELE9BQU9tRixNQUFQO0lBQ0Q7OztXQUVELGlCQUFTL0ksS0FBVCxFQUFnQm1DLE1BQWhCLEVBQXdCWixHQUF4QixFQUE2QmUsSUFBN0IsRUFBbUM7TUFDakMsSUFBTXlHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUk1SSxRQUFRLENBQUNILEtBQUQsQ0FBUixJQUFtQm1DLE1BQU0sQ0FBQ3VDLE9BQVAsRUFBdkIsRUFBeUM7UUFDdkMsSUFBTTROLGVBQWUsR0FBR25RLE1BQU0sQ0FBQ3VDLE9BQVAsRUFBeEI7UUFDQSxJQUFNeU4sT0FBTyxHQUFJblMsS0FBSyxHQUFHc1MsZUFBekI7O1FBRUEsSUFBSUgsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcscUJBQVIsR0FBZ0NLLGVBRC9CO1lBRVZoUSxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQsa0JBQVUvSSxLQUFWLEVBQWlCbUMsTUFBakIsRUFBeUJaLEdBQXpCLEVBQThCZSxJQUE5QixFQUFvQztNQUNsQyxJQUFNeUcsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXRJLE9BQU8sQ0FBQ1QsS0FBRCxDQUFQLElBQWtCbUMsTUFBTSxDQUFDd0MsUUFBUCxFQUF0QixFQUF5QztRQUN2QyxJQUFNd04sT0FBTyxHQUFJblMsS0FBSyxDQUFDaUIsTUFBTixHQUFla0IsTUFBTSxDQUFDd0MsUUFBUCxFQUFoQzs7UUFFQSxJQUFJd04sT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcscUJBQVIsR0FBZ0M5UCxNQUFNLENBQUN3QyxRQUFQLEVBQWhDLEdBQW9ELFFBRG5EO1lBRVZyQyxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQsbUJBQVcvSSxLQUFYLEVBQWtCbUMsTUFBbEIsRUFBMEJaLEdBQTFCLEVBQStCZSxJQUEvQixFQUFxQztNQUNuQyxJQUFNeUcsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXhJLFFBQVEsQ0FBQ1AsS0FBRCxDQUFSLElBQW1CbUMsTUFBTSxDQUFDeUMsU0FBUCxFQUF2QixFQUEyQztRQUN6QyxJQUFNdU4sT0FBTyxHQUFJblMsS0FBSyxDQUFDaUIsTUFBTixHQUFla0IsTUFBTSxDQUFDeUMsU0FBUCxFQUFoQzs7UUFFQSxJQUFJdU4sT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcsbUJBQVIsR0FBOEI5UCxNQUFNLENBQUN5QyxTQUFQLEVBQTlCLEdBQW1ELGtCQURsRDtZQUVWdEMsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU95RyxNQUFQO0lBQ0Q7OztXQUVELHVCQUFlL0ksS0FBZixFQUFzQm1DLE1BQXRCLEVBQThCWixHQUE5QixFQUFtQ2UsSUFBbkMsRUFBeUM7TUFDdkMsSUFBTXlHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUlwSSxjQUFRLENBQUNYLEtBQUQsQ0FBUixJQUFtQm1DLE1BQU0sQ0FBQzBDLGFBQVAsRUFBdkIsRUFBK0M7UUFDN0MsSUFBTW9PLGVBQWUsR0FBRzdSLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZckIsS0FBWixFQUFtQmlCLE1BQTNDO1FBQ0EsSUFBTWtSLE9BQU8sR0FBSWMsZUFBZSxHQUFHOVEsTUFBTSxDQUFDMEMsYUFBUCxFQUFuQzs7UUFFQSxJQUFJc04sT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcscUJBQVIsR0FBZ0M5UCxNQUFNLENBQUMwQyxhQUFQLEVBQWhDLEdBQXlELGFBRHhEO1lBRVZ2QyxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQsaUJBQVMvSSxLQUFULEVBQWdCbUMsTUFBaEIsRUFBd0JaLEdBQXhCLEVBQTZCZSxJQUE3QixFQUFtQztNQUNqQyxJQUFNeUcsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSTVJLFFBQVEsQ0FBQ0gsS0FBRCxDQUFSLElBQW1CbUMsTUFBTSxDQUFDMkMsT0FBUCxFQUF2QixFQUF5QztRQUN2QyxJQUFNeU4sZUFBZSxHQUFHcFEsTUFBTSxDQUFDMkMsT0FBUCxFQUF4QjtRQUNBLElBQU1xTixPQUFPLEdBQUluUyxLQUFLLEdBQUd1UyxlQUF6Qjs7UUFFQSxJQUFJSixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUc5UCxNQUFNLENBQUN3RCxLQUFQLEtBQWlCeEQsTUFBTSxDQUFDd0QsS0FBUCxFQUFqQixHQUFrQ3BFLEdBQWhEO1VBRUF3SCxNQUFNLENBQUNsSCxJQUFQLENBQVk7WUFDVnlFLE9BQU8sRUFBRTJMLEtBQUssR0FBRyxvQkFBUixHQUErQk0sZUFEOUI7WUFFVmpRLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPeUcsTUFBUDtJQUNEOzs7V0FFRCxrQkFBVS9JLEtBQVYsRUFBaUJtQyxNQUFqQixFQUF5QlosR0FBekIsRUFBOEJlLElBQTlCLEVBQW9DO01BQ2xDLElBQU15RyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJdEksT0FBTyxDQUFDVCxLQUFELENBQVAsSUFBa0JtQyxNQUFNLENBQUM0QyxRQUFQLEVBQXRCLEVBQXlDO1FBQ3ZDLElBQU1vTixPQUFPLEdBQUluUyxLQUFLLENBQUNpQixNQUFOLEdBQWVrQixNQUFNLENBQUM0QyxRQUFQLEVBQWhDOztRQUVBLElBQUlvTixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUc5UCxNQUFNLENBQUN3RCxLQUFQLEtBQWlCeEQsTUFBTSxDQUFDd0QsS0FBUCxFQUFqQixHQUFrQ3BFLEdBQWhEO1VBRUF3SCxNQUFNLENBQUNsSCxJQUFQLENBQVk7WUFDVnlFLE9BQU8sRUFBRTJMLEtBQUssR0FBRyxzQkFBUixHQUFpQzlQLE1BQU0sQ0FBQzRDLFFBQVAsRUFBakMsR0FBcUQsUUFEcEQ7WUFFVnpDLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPeUcsTUFBUDtJQUNEOzs7V0FFRCxtQkFBVy9JLEtBQVgsRUFBa0JtQyxNQUFsQixFQUEwQlosR0FBMUIsRUFBK0JlLElBQS9CLEVBQXFDO01BQ25DLElBQU15RyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJeEksUUFBUSxDQUFDUCxLQUFELENBQVIsSUFBbUJtQyxNQUFNLENBQUM2QyxTQUFQLEVBQXZCLEVBQTJDO1FBQ3pDLElBQU1tTixPQUFPLEdBQUluUyxLQUFLLENBQUNpQixNQUFOLEdBQWVrQixNQUFNLENBQUM2QyxTQUFQLEVBQWhDOztRQUVBLElBQUltTixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUc5UCxNQUFNLENBQUN3RCxLQUFQLEtBQWlCeEQsTUFBTSxDQUFDd0QsS0FBUCxFQUFqQixHQUFrQ3BFLEdBQWhEO1VBRUF3SCxNQUFNLENBQUNsSCxJQUFQLENBQVk7WUFDVnlFLE9BQU8sRUFBRTJMLEtBQUssR0FBRyxvQkFBUixHQUErQjlQLE1BQU0sQ0FBQzZDLFNBQVAsRUFBL0IsR0FBb0Qsa0JBRG5EO1lBRVYxQyxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQsdUJBQWUvSSxLQUFmLEVBQXNCbUMsTUFBdEIsRUFBOEJaLEdBQTlCLEVBQW1DZSxJQUFuQyxFQUF5QztNQUN2QyxJQUFNeUcsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXBJLGNBQVEsQ0FBQ1gsS0FBRCxDQUFSLElBQW1CbUMsTUFBTSxDQUFDOEMsYUFBUCxFQUF2QixFQUErQztRQUM3QyxJQUFNZ08sZUFBZSxHQUFHN1IsTUFBTSxDQUFDQyxJQUFQLENBQVlyQixLQUFaLEVBQW1CaUIsTUFBM0M7UUFDQSxJQUFNa1IsT0FBTyxHQUFJYyxlQUFlLEdBQUc5USxNQUFNLENBQUM4QyxhQUFQLEVBQW5DOztRQUVBLElBQUlrTixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUc5UCxNQUFNLENBQUN3RCxLQUFQLEtBQWlCeEQsTUFBTSxDQUFDd0QsS0FBUCxFQUFqQixHQUFrQ3BFLEdBQWhEO1VBRUF3SCxNQUFNLENBQUNsSCxJQUFQLENBQVk7WUFDVnlFLE9BQU8sRUFBRTJMLEtBQUssR0FBRyxzQkFBUixHQUFpQzlQLE1BQU0sQ0FBQzhDLGFBQVAsRUFBakMsR0FBMEQsYUFEekQ7WUFFVjNDLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPeUcsTUFBUDtJQUNEOzs7V0FFRCxvQkFBWS9JLEtBQVosRUFBbUJtQyxNQUFuQixFQUEyQlosR0FBM0IsRUFBZ0NlLElBQWhDLEVBQXNDO01BQ3BDLElBQU15RyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJNUksUUFBUSxDQUFDSCxLQUFELENBQVIsSUFBbUJtQyxNQUFNLENBQUMrQyxVQUFQLEVBQXZCLEVBQTRDO1FBQzFDLElBQU1nTyxZQUFZLEdBQUlsVCxLQUFLLEdBQUdtQyxNQUFNLENBQUMrQyxVQUFQLEVBQVIsS0FBZ0M3RSxJQUFJLENBQUNDLEtBQUwsQ0FBV04sS0FBSyxHQUFHbUMsTUFBTSxDQUFDK0MsVUFBUCxFQUFuQixDQUF0RDtRQUNBLElBQU1pTixPQUFPLEdBQUksQ0FBQ2UsWUFBbEI7O1FBRUEsSUFBSWYsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcsdUJBQVIsR0FBa0M5UCxNQUFNLENBQUMrQyxVQUFQLEVBRGpDO1lBRVY1QyxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQsYUFBSy9JLEtBQUwsRUFBWW1DLE1BQVosRUFBb0JaLEdBQXBCLEVBQXlCZSxJQUF6QixFQUErQjtNQUM3QixJQUFNeUcsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSTVHLE1BQU0sQ0FBQ2dELEdBQVAsRUFBSixFQUFrQjtRQUNoQixJQUFNZ08sU0FBUyxHQUFHLEtBQUt2UCxRQUFMLENBQWM1RCxLQUFkLEVBQXFCLElBQUlpRSxVQUFKLENBQVc5QixNQUFNLENBQUNnRCxHQUFQLEVBQVgsQ0FBckIsRUFBK0M1RCxHQUEvQyxFQUFvRGUsSUFBcEQsQ0FBbEI7UUFFQSxJQUFNNlAsT0FBTyxHQUFHZ0IsU0FBUyxDQUFDbFMsTUFBVixLQUFxQixDQUFyQzs7UUFFQSxJQUFJa1IsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcsaURBQVIsR0FBNER6UyxJQUFJLENBQUNFLFNBQUwsQ0FBZXlDLE1BQU0sQ0FBQ2dELEdBQVAsRUFBZixDQUQzRDtZQUVWN0MsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU95RyxNQUFQO0lBQ0Q7OztXQUVELGVBQU8vSSxLQUFQLEVBQWNtQyxNQUFkLEVBQXNCWixHQUF0QixFQUEyQmUsSUFBM0IsRUFBaUM7TUFBQTs7TUFDL0IsSUFBTXlHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUk1RyxNQUFNLENBQUMwRCxLQUFQLEVBQUosRUFBb0I7UUFDbEIsSUFBSXVOLE9BQU8sR0FBRyxDQUFkO1FBRUFqUixNQUFNLENBQUMwRCxLQUFQLEdBQWV2RSxPQUFmLENBQXVCLFVBQUNhLE1BQUQsRUFBWTtVQUNqQyxJQUFNa1IsV0FBVyxHQUFHLE1BQUksQ0FBQ3pQLFFBQUwsQ0FBYzVELEtBQWQsRUFBcUIsSUFBSWlFLFVBQUosQ0FBVzlCLE1BQVgsQ0FBckIsRUFBeUNaLEdBQXpDLEVBQThDZSxJQUE5QyxDQUFwQjs7VUFFQSxJQUFJK1EsV0FBVyxDQUFDcFMsTUFBWixLQUF1QixDQUEzQixFQUE4QjtZQUM1Qm1TLE9BQU87VUFDUjtRQUNGLENBTkQ7O1FBUUEsSUFBSUEsT0FBTyxLQUFLLENBQWhCLEVBQW1CO1VBQ2pCLElBQU1uQixLQUFLLEdBQUc5UCxNQUFNLENBQUN3RCxLQUFQLEtBQWlCeEQsTUFBTSxDQUFDd0QsS0FBUCxFQUFqQixHQUFrQ3BFLEdBQWhEO1VBRUF3SCxNQUFNLENBQUNsSCxJQUFQLENBQVk7WUFDVnlFLE9BQU8sRUFBRTJMLEtBQUssR0FBRyw2RkFBUixHQUF3R21CLE9BQXhHLEdBQWtILGtCQURqSDtZQUVWOVEsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU95RyxNQUFQO0lBQ0Q7OztXQUVELGlCQUFTL0ksS0FBVCxFQUFnQm1DLE1BQWhCLEVBQXdCWixHQUF4QixFQUE2QmUsSUFBN0IsRUFBbUM7TUFDakMsSUFBTXlHLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUl4SSxRQUFRLENBQUNQLEtBQUQsQ0FBUixJQUFtQm1DLE1BQU0sQ0FBQ2tELE9BQVAsRUFBdkIsRUFBeUM7UUFDdkMsSUFBTW1OLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVd0USxNQUFNLENBQUNrRCxPQUFQLEVBQVgsQ0FBZjtRQUNBLElBQU04TSxPQUFPLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDRSxJQUFQLENBQVkxUyxLQUFaLENBQWpCOztRQUVBLElBQUltUyxPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUc5UCxNQUFNLENBQUN3RCxLQUFQLEtBQWlCeEQsTUFBTSxDQUFDd0QsS0FBUCxFQUFqQixHQUFrQ3BFLEdBQWhEO1VBRUF3SCxNQUFNLENBQUNsSCxJQUFQLENBQVk7WUFDVnlFLE9BQU8sRUFBRTJMLEtBQUssR0FBRyx3QkFBUixHQUFtQzlQLE1BQU0sQ0FBQ2tELE9BQVAsRUFEbEM7WUFFVi9DLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPeUcsTUFBUDtJQUNEOzs7V0FFRCwyQkFBbUIvSSxLQUFuQixFQUEwQm1DLE1BQTFCLEVBQWtDO01BQ2hDLElBQUk0RyxNQUFNLEdBQUcsRUFBYjs7TUFFQSxJQUFJcEksY0FBUSxDQUFDWCxLQUFELENBQVIsSUFBbUJtQyxNQUFNLENBQUNtRCxpQkFBUCxFQUF2QixFQUFtRDtRQUNqRCxJQUFNQSxpQkFBaUIsR0FBR25ELE1BQU0sQ0FBQ21ELGlCQUFQLEVBQTFCO1FBRUFsRSxNQUFNLENBQUNDLElBQVAsQ0FBWXJCLEtBQVosRUFBbUJzQixPQUFuQixDQUEyQixVQUFDK00sWUFBRCxFQUFrQjtVQUMzQ2pOLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZaUUsaUJBQVosRUFBK0JoRSxPQUEvQixDQUF1QyxVQUFDK0QsT0FBRCxFQUFhO1lBQ2xELElBQU1tTixNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXcE4sT0FBWCxDQUFmOztZQUNBLElBQUltTixNQUFNLENBQUNFLElBQVAsQ0FBWXJFLFlBQVosQ0FBSixFQUErQjtjQUM3QixJQUFNbE0sT0FBTSxHQUFHbUQsaUJBQWlCLENBQUNELE9BQUQsQ0FBaEM7Y0FDQWxELE9BQU0sQ0FBQ3dELEtBQVAsR0FBZTBJLFlBQWY7Y0FFQSxJQUFNcUMsTUFBTSxHQUFHLElBQUlrQyxHQUFKLENBQVM7Z0JBQ3RCelEsTUFBTSxFQUFFQSxPQURjO2dCQUV0QjBRLFVBQVUsRUFBRTdTLEtBQUssQ0FBQ3FPLFlBQUQ7Y0FGSyxDQUFULENBQWY7Y0FLQXRGLE1BQU0seUNBQU9BLE1BQVAsK0JBQWtCMkgsTUFBTSxDQUFDOU0sUUFBUCxFQUFsQixFQUFOO1lBQ0Q7VUFDRixDQWJEO1FBY0QsQ0FmRDtNQWdCRDs7TUFFRCxPQUFPbUYsTUFBUDtJQUNEOzs7V0FFRCxrQkFBVS9JLEtBQVYsRUFBaUJtQyxNQUFqQixFQUF5QlosR0FBekIsRUFBOEJlLElBQTlCLEVBQW9DO01BQ2xDLElBQU15RyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJcEksY0FBUSxDQUFDWCxLQUFELENBQVIsSUFBbUJtQyxNQUFNLENBQUNxRCxRQUFQLEVBQXZCLEVBQTBDO1FBQ3hDLElBQU15SSxpQkFBaUIsR0FBRyxFQUExQjtRQUNBLElBQU01TSxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZckIsS0FBWixDQUFiO1FBRUFtQyxNQUFNLENBQUNxRCxRQUFQLEdBQWtCbEUsT0FBbEIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFTO1VBQ2pDLElBQUksQ0FBQ0YsSUFBSSxDQUFDaUMsUUFBTCxDQUFjL0IsR0FBZCxDQUFMLEVBQXlCO1lBQ3ZCME0saUJBQWlCLENBQUNwTSxJQUFsQixDQUF1Qk4sR0FBdkI7VUFDRDtRQUNGLENBSkQ7UUFNQSxJQUFNNFEsT0FBTyxHQUFHbEUsaUJBQWlCLENBQUNoTixNQUFsQixHQUEyQixDQUEzQzs7UUFFQSxJQUFJa1IsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcsd0NBQVIsR0FBbURoRSxpQkFBaUIsQ0FBQ21FLElBQWxCLENBQXVCLElBQXZCLENBRGxEO1lBRVY5UCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQsY0FBTS9JLEtBQU4sRUFBYW1DLE1BQWIsRUFBcUJaLEdBQXJCLEVBQTBCZSxJQUExQixFQUFnQztNQUM5QixJQUFNeUcsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSTVHLE1BQU0sQ0FBQ2tPLEtBQVAsRUFBSixFQUFvQjtRQUNsQixPQUFPdEgsTUFBUDtNQUNEOztNQUVELElBQUk1RyxNQUFNLENBQUN5RCxNQUFQLENBQWMsS0FBZCxDQUFKLEVBQTBCO1FBQ3hCLE9BQU9tRCxNQUFQO01BQ0Q7O01BRUQsSUFBSTVHLE1BQU0sQ0FBQ3RCLElBQVAsRUFBSixFQUFtQjtRQUNqQixJQUFNd1AsS0FBSyxHQUFHO1VBQ1ppRCxNQUFNLEVBQUUsZ0JBQUF0VCxLQUFLO1lBQUEsT0FBSU8sUUFBUSxDQUFDUCxLQUFELENBQVo7VUFBQSxDQUREO1VBRVp1VCxNQUFNLEVBQUUsZ0JBQUF2VCxLQUFLO1lBQUEsT0FBSUcsUUFBUSxDQUFDSCxLQUFELENBQVo7VUFBQSxDQUZEO1VBR1p3VCxPQUFPLEVBQUUsaUJBQUF4VCxLQUFLO1lBQUEsT0FBSUksU0FBUyxDQUFDSixLQUFELENBQWI7VUFBQSxDQUhGO1VBSVosV0FBUyxpQkFBQUEsS0FBSztZQUFBLE9BQUlRLFNBQVMsQ0FBQ1IsS0FBRCxDQUFiO1VBQUEsQ0FKRjtVQUtaeVQsS0FBSyxFQUFFLGVBQUF6VCxLQUFLO1lBQUEsT0FBSVMsT0FBTyxDQUFDVCxLQUFELENBQVg7VUFBQSxDQUxBO1VBTVowVCxNQUFNLEVBQUUsZ0JBQUExVCxLQUFLO1lBQUEsT0FBSVcsY0FBUSxDQUFDWCxLQUFELENBQVo7VUFBQSxDQU5EO1VBT1osUUFBTSxlQUFBQSxLQUFLO1lBQUEsT0FBSUQsTUFBTSxDQUFDQyxLQUFELENBQVY7VUFBQTtRQVBDLENBQWQ7UUFVQSxJQUFNOFIsS0FBSyxHQUFHekIsS0FBSyxDQUFDbE8sTUFBTSxDQUFDdEIsSUFBUCxFQUFELENBQUwsQ0FBcUJiLEtBQXJCLENBQWQ7O1FBRUEsSUFBSSxDQUFDOFIsS0FBTCxFQUFZO1VBQ1YsSUFBTUcsS0FBSyxHQUFHOVAsTUFBTSxDQUFDd0QsS0FBUCxLQUFpQnhELE1BQU0sQ0FBQ3dELEtBQVAsRUFBakIsR0FBa0NwRSxHQUFoRDtVQUVBd0gsTUFBTSxDQUFDbEgsSUFBUCxDQUFZO1lBQ1Z5RSxPQUFPLEVBQUUyTCxLQUFLLEdBQUcsbUJBQVIsR0FBOEI5UCxNQUFNLENBQUN0QixJQUFQLEVBRDdCO1lBRVZ5QixJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDs7O1dBRUQscUJBQWEvSSxLQUFiLEVBQW9CbUMsTUFBcEIsRUFBNEJaLEdBQTVCLEVBQWlDZSxJQUFqQyxFQUF1QztNQUNyQyxJQUFNeUcsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXRJLE9BQU8sQ0FBQ1QsS0FBRCxDQUFQLElBQWtCbUMsTUFBTSxDQUFDMkQsV0FBUCxFQUF0QixFQUE0QztRQUMxQyxJQUFNNk4sSUFBSSxHQUFHLEVBQWI7UUFDQSxJQUFJQyxrQkFBa0IsR0FBRyxLQUF6Qjs7UUFFQSxLQUFLLElBQUl6RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbk8sS0FBSyxDQUFDaUIsTUFBMUIsRUFBa0NrTixDQUFDLEVBQW5DLEVBQXVDO1VBQ3JDLElBQU10RCxJQUFJLEdBQUdyTCxJQUFJLENBQUNFLFNBQUwsQ0FBZU0sS0FBSyxDQUFDbU8sQ0FBRCxDQUFwQixDQUFiOztVQUNBLElBQUl3RixJQUFJLENBQUM5SSxJQUFELENBQVIsRUFBZ0I7WUFDZCtJLGtCQUFrQixHQUFHLElBQXJCO1lBQ0E7VUFDRDs7VUFDREQsSUFBSSxDQUFDOUksSUFBRCxDQUFKLEdBQWEsSUFBYjtRQUNEOztRQUVELElBQU1zSCxPQUFPLEdBQUl5QixrQkFBakI7O1FBRUEsSUFBSXpCLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBRzlQLE1BQU0sQ0FBQ3dELEtBQVAsS0FBaUJ4RCxNQUFNLENBQUN3RCxLQUFQLEVBQWpCLEdBQWtDcEUsR0FBaEQ7VUFFQXdILE1BQU0sQ0FBQ2xILElBQVAsQ0FBWTtZQUNWeUUsT0FBTyxFQUFFMkwsS0FBSyxHQUFHLHlCQURQO1lBRVYzUCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT3lHLE1BQVA7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLGtCQUFVL0ksS0FBVixFQUFpQm1DLE1BQWpCLEVBQXlCWixHQUF6QixFQUE4QmUsSUFBOUIsRUFBb0M7TUFBQTs7TUFDbEMsSUFBSXVSLFlBQVksR0FBRyxFQUFuQjtNQUVBLEtBQUtqQyxVQUFMLENBQWdCdFEsT0FBaEIsQ0FBd0IsVUFBQ3FDLFNBQUQsRUFBZTtRQUNyQyxJQUFNbVEsZUFBZSxHQUFHLE1BQUksQ0FBQ25RLFNBQUQsQ0FBSixDQUFnQjNELEtBQWhCLEVBQXVCbUMsTUFBdkIsRUFBK0JaLEdBQS9CLEVBQW9DZSxJQUFwQyxDQUF4Qjs7UUFFQSxJQUFJd1IsZUFBSixFQUFxQjtVQUNuQkQsWUFBWSx5Q0FBT0EsWUFBUCwrQkFBd0JDLGVBQXhCLEVBQVo7UUFDRDtNQUNGLENBTkQ7O01BUUEsSUFBSUQsWUFBWSxDQUFDNVMsTUFBYixHQUFzQixDQUF0QixJQUEyQmtCLE1BQU0sQ0FBQ2lELE1BQVAsQ0FBYyxTQUFkLENBQS9CLEVBQXlEO1FBQ3ZEeU8sWUFBWSxHQUFHLENBQ2I7VUFDRXZOLE9BQU8sRUFBRW5FLE1BQU0sQ0FBQ2lELE1BQVAsQ0FBYyxTQUFkLENBRFg7VUFFRTlDLElBQUksRUFBRUE7UUFGUixDQURhLENBQWY7TUFNRDs7TUFFRCxPQUFPdVIsWUFBUDtJQUNEOzs7Ozs7QUFHWWxDLDRFQUFmLEU7Ozs7QUM3bUJBOztJQUVNb0Msb0I7RUFDSixxQkFBZTtJQUFBOztJQUNiLEtBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7SUFDQSxLQUFLQyxJQUFMLEdBQVksRUFBWjtFQUNEOzs7O1dBRUQscUJBQWE5UixNQUFiLEVBQXFCO01BQ25CLEtBQUs4UixJQUFMLEdBQVk5UixNQUFNLENBQUMsT0FBRCxDQUFsQjs7TUFFQSxLQUFLLElBQUlnTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs2RixVQUF6QixFQUFxQzdGLENBQUMsRUFBdEMsRUFBMEM7UUFDeEMsS0FBSytGLFFBQUwsQ0FBYyxLQUFLRCxJQUFuQjtRQUNBLEtBQUtDLFFBQUwsQ0FBYy9SLE1BQWQ7TUFDRDs7TUFFRCxPQUFPQSxNQUFQO0lBQ0Q7OztXQUVELGdCQUFRZ1MsR0FBUixFQUFhO01BQ1gsSUFBSSxDQUFDNVQsUUFBUSxDQUFDNFQsR0FBRCxDQUFiLEVBQW9CO1FBQ2xCLE9BQU9BLEdBQVA7TUFDRDs7TUFFRCxJQUFJQSxHQUFHLENBQUNDLFVBQUosQ0FBZSxTQUFmLENBQUosRUFBK0I7UUFDN0IsSUFBTUMsUUFBUSxHQUFHRixHQUFHLENBQUNoUixLQUFKLENBQVUsR0FBVixDQUFqQjtRQUNBLElBQU1tUixPQUFPLEdBQUdELFFBQVEsQ0FBQ2pSLEdBQVQsRUFBaEI7O1FBRUEsSUFBSW5ELEtBQUssQ0FBQyxLQUFLZ1UsSUFBTCxDQUFVSyxPQUFWLENBQUQsQ0FBVCxFQUErQjtVQUM3QixPQUFPLEtBQUtMLElBQUwsQ0FBVUssT0FBVixDQUFQO1FBQ0Q7TUFDRjs7TUFFRCxPQUFPSCxHQUFQO0lBQ0Q7OztXQUVELGtCQUFVblUsS0FBVixFQUFpQlQsS0FBakIsRUFBd0IrSCxLQUF4QixFQUErQjtNQUFBOztNQUM3QixJQUFJM0csY0FBUSxDQUFDWCxLQUFELENBQVosRUFBcUI7UUFDbkIsSUFBSUMsS0FBSyxDQUFDRCxLQUFLLENBQUMsTUFBRCxDQUFOLENBQUwsSUFBd0JDLEtBQUssQ0FBQ1YsS0FBRCxDQUFqQyxFQUEwQztVQUN4Q0EsS0FBSyxDQUFDK0gsS0FBRCxDQUFMLEdBQWUsS0FBS2lOLE1BQUwsQ0FBWXZVLEtBQUssQ0FBQyxNQUFELENBQWpCLENBQWY7UUFDRCxDQUZELE1BRU87VUFDTG9CLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZckIsS0FBWixFQUFtQnNCLE9BQW5CLENBQTJCLFVBQUNnRyxLQUFELEVBQVc7WUFDcEMsS0FBSSxDQUFDNE0sUUFBTCxDQUFjbFUsS0FBSyxDQUFDc0gsS0FBRCxDQUFuQixFQUE0QnRILEtBQTVCLEVBQW1Dc0gsS0FBbkM7VUFDRCxDQUZEO1FBR0Q7TUFDRjs7TUFFRCxJQUFJN0csT0FBTyxDQUFDVCxLQUFELENBQVgsRUFBb0I7UUFDbEJBLEtBQUssQ0FBQ3NCLE9BQU4sQ0FBYyxVQUFDdUosSUFBRCxFQUFPdkQsS0FBUCxFQUFpQjtVQUM3QixLQUFJLENBQUM0TSxRQUFMLENBQWNySixJQUFkLEVBQW9CN0ssS0FBcEIsRUFBMkJzSCxLQUEzQjtRQUNELENBRkQ7TUFHRDtJQUNGOzs7Ozs7QUFHWXlNLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTW5CLFE7Ozs7O0VBQ0osY0FBYTlQLE9BQWIsRUFBc0I7SUFBQTs7SUFBQTs7SUFDcEI7SUFDQSxNQUFLQSxPQUFMLEdBQWUxQixNQUFNLENBQUNJLE1BQVAsQ0FBYztNQUMzQmtGLFNBQVMsRUFBRSxJQURnQjtNQUUzQjNELFFBQVEsRUFBRSxLQUZpQjtNQUczQm9LLGtCQUFrQixFQUFFLEtBSE87TUFJM0J0RSxnQkFBZ0IsRUFBRSxLQUpTO01BSzNCMkwsZ0JBQWdCLEVBQUUsS0FMUztNQU0zQnJTLE1BQU0sRUFBRSxFQU5tQjtNQU8zQjRGLEtBQUssRUFBRTtJQVBvQixDQUFkLEVBUVpqRixPQVJZLENBQWY7SUFVQSxNQUFLMlIsU0FBTCxHQUFpQixFQUFqQjtJQUNBLE1BQUtDLElBQUwsR0FBWSxJQUFaO0lBQ0EsTUFBSzNNLEtBQUwsR0FBYSxJQUFiO0lBQ0EsTUFBSzBKLFFBQUwsR0FBZ0IsSUFBSUwsaUJBQUosRUFBaEI7SUFDQSxNQUFLek4sU0FBTCxHQUFpQixJQUFJZ08sb0JBQUosRUFBakI7SUFDQSxNQUFLZ0QsU0FBTCxHQUFpQixJQUFJWixVQUFKLEVBQWpCO0lBQ0EsTUFBSzVSLE1BQUwsR0FBYyxJQUFJOEIsVUFBSixDQUFXLE1BQUtuQixPQUFMLENBQWFYLE1BQXhCLENBQWQ7SUFDQSxNQUFLNEcsTUFBTCxHQUFjLEVBQWQ7O0lBQ0EsTUFBS3JHLElBQUw7O0lBcEJvQjtFQXFCckI7Ozs7V0FFRCxnQkFBUTtNQUFBOztNQUNOLEtBQUtpUyxTQUFMLENBQWVDLFdBQWYsQ0FBMkIsS0FBS3pTLE1BQUwsQ0FBWUEsTUFBdkM7TUFFQSxLQUFLdVMsSUFBTCxHQUFZLEtBQUt2SyxjQUFMLENBQW9CO1FBQzlCakksSUFBSSxFQUFFLElBRHdCO1FBRTlCQyxNQUFNLEVBQUUsS0FBS0E7TUFGaUIsQ0FBcEIsQ0FBWjs7TUFLQSxJQUFJLEtBQUtXLE9BQUwsQ0FBYStQLFVBQWpCLEVBQTZCO1FBQzNCLEtBQUs2QixJQUFMLENBQVU3SyxRQUFWLENBQW1CLEtBQUsvRyxPQUFMLENBQWErUCxVQUFoQztNQUNEOztNQUVELElBQUksS0FBSy9QLE9BQUwsQ0FBYUMsUUFBYixJQUF5QixLQUFLRCxPQUFMLENBQWE0RCxTQUExQyxFQUFxRDtRQUNuRCxLQUFLQSxTQUFMLEdBQWlCLEtBQUs1RCxPQUFMLENBQWE0RCxTQUE5QjtRQUNBLEtBQUttTyxpQkFBTDtRQUNBLEtBQUtuTyxTQUFMLENBQWVjLFdBQWYsQ0FBMkIsS0FBS2tOLElBQUwsQ0FBVWpTLEVBQVYsQ0FBYWlFLFNBQXhDO1FBQ0EsS0FBS0EsU0FBTCxDQUFlUCxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixZQUE3QjtNQUNEOztNQUVELEtBQUtzTyxJQUFMLENBQVV6UixFQUFWLENBQWEsUUFBYixFQUF1QixZQUFNO1FBQzNCLE1BQUksQ0FBQ1MsSUFBTCxDQUFVLFFBQVY7TUFDRCxDQUZEO0lBR0Q7SUFFRDtBQUNGO0FBQ0E7QUFDQTs7OztXQUNFLDZCQUFxQjtNQUFBOztNQUNuQixLQUFLb1IsV0FBTCxHQUFtQixLQUFLSixJQUFMLENBQVVqUyxFQUFWLENBQWFzRixLQUFiLENBQW1CaUYsUUFBbkIsQ0FBNEI7UUFDN0NuTSxJQUFJLEVBQUUsUUFEdUM7UUFFN0NtRyxFQUFFLEVBQUU7TUFGeUMsQ0FBNUIsQ0FBbkI7TUFLQSxLQUFLOE4sV0FBTCxDQUFpQnJPLFlBQWpCLENBQThCLE1BQTlCLEVBQXNDLE1BQXRDO01BRUEsS0FBS0MsU0FBTCxDQUFlYyxXQUFmLENBQTJCLEtBQUtzTixXQUFoQztNQUNBLEtBQUtBLFdBQUwsQ0FBaUI5VSxLQUFqQixHQUF5QlIsSUFBSSxDQUFDRSxTQUFMLENBQWUsS0FBS21FLFFBQUwsRUFBZixDQUF6QjtNQUVBLEtBQUtaLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQU07UUFDdEIsTUFBSSxDQUFDNlIsV0FBTCxDQUFpQjlVLEtBQWpCLEdBQXlCUixJQUFJLENBQUNFLFNBQUwsQ0FBZSxNQUFJLENBQUNtRSxRQUFMLEVBQWYsQ0FBekI7TUFDRCxDQUZEO0lBR0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxrQkFBVWlFLFFBQVYsRUFBb0I7TUFDbEIsS0FBSzJNLFNBQUwsQ0FBZTNNLFFBQVEsQ0FBQ3hGLElBQXhCLElBQWdDd0YsUUFBaEM7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG9CQUFZQSxRQUFaLEVBQXNCO01BQ3BCLEtBQUsyTSxTQUFMLENBQWUzTSxRQUFRLENBQUN4RixJQUF4QixJQUFnQyxJQUFoQztNQUNBLE9BQU8sS0FBS21TLFNBQUwsQ0FBZTNNLFFBQVEsQ0FBQ3hGLElBQXhCLENBQVA7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLHdCQUFnQkwsTUFBaEIsRUFBd0I7TUFDdEIsT0FBTyxLQUFLd1AsUUFBTCxDQUFjRCxPQUFkLENBQXNCdlAsTUFBdEIsQ0FBUDtJQUNEO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7Ozs7V0FDRSxvQkFBWTtNQUNWLE9BQU8sS0FBS3lTLElBQUwsQ0FBVTdRLFFBQVYsRUFBUDtJQUNEO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7Ozs7V0FDRSxvQkFBWTtNQUFBOztNQUNWLE9BQU8sbUJBQUs2USxJQUFMLEVBQVU3SyxRQUFWLG1CQUFzQmtMLFNBQXRCLENBQVA7SUFDRDtJQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7O1dBQ0UscUJBQWF6UyxJQUFiLEVBQW1CO01BQ2pCLE9BQU8sS0FBS21TLFNBQUwsQ0FBZW5TLElBQWYsQ0FBUDtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsbUJBQVc7TUFDVCxLQUFLb1MsSUFBTCxDQUFValMsRUFBVixDQUFhNkksT0FBYjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usa0JBQVU7TUFDUixLQUFLb0osSUFBTCxDQUFValMsRUFBVixDQUFhOEksTUFBYjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usb0JBQVk7TUFBQTs7TUFDVixLQUFLeEMsTUFBTCxHQUFjLEVBQWQ7TUFFQTNILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtvVCxTQUFqQixFQUE0Qm5ULE9BQTVCLENBQW9DLFVBQUNDLEdBQUQsRUFBUztRQUMzQyxJQUFNbVAsTUFBTSxHQUFHLE1BQUksQ0FBQytELFNBQUwsQ0FBZWxULEdBQWYsQ0FBZjtRQUNBLE1BQUksQ0FBQ3dILE1BQUwseUNBQWtCLE1BQUksQ0FBQ0EsTUFBdkIsK0JBQWtDMkgsTUFBTSxDQUFDOU0sUUFBUCxFQUFsQztNQUNELENBSEQ7TUFLQSxPQUFPLEtBQUttRixNQUFaO0lBQ0Q7OztXQUVELGlCQUFTO01BQ1AsS0FBS2pHLE9BQUwsQ0FBYStQLFVBQWIsR0FBMEIsS0FBS2hQLFFBQUwsRUFBMUI7TUFDQSxLQUFLNkMsU0FBTCxDQUFlc0MsU0FBZixHQUEyQixFQUEzQjtNQUNBLEtBQUswTCxJQUFMLENBQVUxUSxPQUFWO01BQ0EsS0FBS3RCLElBQUw7SUFDRDs7O1dBRUQsa0JBQVVxRixLQUFWLEVBQWlCO01BQ2YsS0FBS2pGLE9BQUwsQ0FBYWlGLEtBQWIsR0FBcUJBLEtBQXJCO01BQ0EsS0FBS2lOLEtBQUw7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG1CQUFXO01BQUE7O01BQ1QsS0FBS04sSUFBTCxDQUFVMVEsT0FBVjtNQUVBLEtBQUswQyxTQUFMLENBQWVzQyxTQUFmLEdBQTJCLEVBQTNCO01BRUE1SCxNQUFNLENBQUNDLElBQVAsQ0FBWSxJQUFaLEVBQWtCQyxPQUFsQixDQUEwQixVQUFDQyxHQUFELEVBQVM7UUFDakMsT0FBTyxNQUFJLENBQUNBLEdBQUQsQ0FBWDtNQUNELENBRkQ7SUFHRDs7OztFQXJLZ0JFLGE7O0FBd0tKbVIsaUZBQWYsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcbiIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSAhPT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnaW50ZWdlcidcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ3N0cmluZydcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgdHlwZSA9ICdib29sZWFuJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSdcbiAgfSBlbHNlIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudWxsJ1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnb2JqZWN0J1xuICB9XG5cbiAgcmV0dXJuIHR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IG1lcmdlRGVlcCA9ICh0YXJnZXQsIC4uLnNvdXJjZXMpID0+IHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldFxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgICBba2V5XToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgJ3Jvb3QnXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnVpID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J1Mgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogZmFsc2VcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IGZhbHNlXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0ID8gdGhpcy5zY2hlbWEuY29uc3QgOiBmYWxzZVxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0ID8gdGhpcy5zY2hlbWEuZGVmYXVsdCA6IGZhbHNlXG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogZmFsc2VcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiBmYWxzZVxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpID8gdGhpcy5zY2hlbWEuZWxzZSA6IGZhbHNlXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybWF0KCkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSA/IHRoaXMuc2NoZW1hLmlmIDogZmFsc2VcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWF4UHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSA/IHRoaXMuc2NoZW1hLm5vdCA6IGZhbHNlXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0eSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogZmFsc2VcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiBmYWxzZVxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IGZhbHNlXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMudHlwZSgpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVzICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiBmYWxzZVxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWFcbiIsImNsYXNzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gc2xvdFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBzbG90XG4gIH1cblxuICBnZXRDaGlsZEVkaXRvcnNTbG90ICgpIHtcbiAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gc2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBtZXNzYWdlc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lc3NhZ2VzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBtZXNzYWdlc1Nsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZVdpcmVmcmFtZSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuLi90aGVtZXMvd2lyZWZyYW1lJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QgPSB0aGlzLnRoZW1lLmdldENoaWxkRWRpdG9yc1Nsb3QoKVxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5yZWFkeSB8fCB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLm1lc3NhZ2VzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldElucHV0RXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICB9KSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgY2xvbmUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2hpbGRFZGl0b3JzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuXG4gICAgLy8gYnRuIGdyb3VwXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5pdGVtcygpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuICAgIGNvbnN0IGl0ZW1TY2hlbWEgPSBuZXcgU2NoZW1hKHNjaGVtYSlcblxuICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmluc3RhbmNlLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5pbnN0YW5jZS5qZWRpLFxuICAgICAgc2NoZW1hOiBpdGVtU2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5zdGFuY2VcbiAgICB9KVxuXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5nZXRLZXkoKSlcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgfSlcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgdXAnXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgfVxuXG4gICAgaXRlbUVkaXRvci51aS5jb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVkaXRvci51aS5hY3Rpb25zU2xvdClcbiAgICBpdGVtRWRpdG9yLnVpLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuID0gW11cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICBjaGlsZC5zZXRWYWx1ZShpdGVtVmFsdWUsIGZhbHNlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuXG4gICAgICBsZXQgYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpXG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRCdXR0b25zID0gQXJyYXkuZnJvbShjaGlsZC51aS5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpXG4gICAgICAgIGJ1dHRvbnMgPSBidXR0b25zLmNvbmNhdChjaGlsZEJ1dHRvbnMpXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRkQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgY2xvbmUsIGlzQXJyYXkgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuXG5jbGFzcyBBcnJheUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBBcnJheUVkaXRvcih0aGlzKVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG5cbiAgICByZXR1cm4gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZHJlbi5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdXG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGNoaWxkLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBjaGVja2JveCBjb250YWluZXJcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucHJvcGVydGllc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QpXG5cbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0eSBOYW1lJyxcbiAgICAgIGZvcjogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlXG5cbiAgICAgIC8vIGlmIG5vdCBwcm9wZXJ0eSBuYW1lIHdhcyBnaXZlbiByZXR1cm5cbiAgICAgIGlmIChrZXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBpZiBwcm9wZXJ0eSBleGlzdCByZXR1cm5cbiAgICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHsgdHlwZTogJ2FueScgfSwga2V5KVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpKSB7XG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5SW5wdXQpXG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXMgKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSkge1xuICAgICAgd2hpbGUgKHRoaXMucHJvcGVydGllc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNTbG90LnJlbW92ZUNoaWxkKHRoaXMucHJvcGVydGllc1Nsb3QubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gY2hpbGQucGF0aCArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgICAgIGZvcjogaWQsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IGNoaWxkLnNjaGVtYS50aXRsZSgpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGhpcy50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICAgICAgaWQ6IGlkXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IE9iamVjdC5oYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSBpc1JlcXVpcmVkIHx8IGlzRGVwZW5kZW50UmVxdWlyZWQgfHwgZGlzYWJsZWRcblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZHNcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5nZXRDaGlsZChrZXkpXG5cbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hQcm9wZXJ0aWVzKClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0eShrZXkpXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoZGVwZW5kZW50UmVxdWlyZWQpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KCcuJykucG9wKClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgaGFzUHJvcGVydHkgKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClcblxuICAgIGlmICghcHJvcGVydGllcykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmluY2x1ZGVzKHByb3BlcnR5TmFtZSlcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5oYXNQcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9XG5cbiAgICAvLyBpbnB1dFxuICAgIC8vIHRvZG8gZmlsZSwgcmFuZ2Ugc2hvdWxkIGJlIGhhbmRsZWQgZGlmZmVyZW50bHlcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYSh7XG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSA6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuXG5jbGFzcyBTdHJpbmdJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHRoaXMuc2NoZW1hLmVudW0oKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEVkaXRvcihpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMucHVzaChidXR0b24pXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoZXIpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCAnbXVsdGlwbGUnKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdHJ1ZVxuICAgIH0pKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRFZGl0b3IgPSB0aGlzLmluc3RhbmNlLmVkaXRvcnNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkRWRpdG9yLnVpLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRFZGl0b3IudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmNvbnRhaW5lcilcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5kaXNhYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5lbmFibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQsIGVxdWFsLCBkaWZmZXJlbnQsIG1lcmdlRGVlcCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmVkaXRvcnMgPSBbXVxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuYW55T2YoKSB8fCB0aGlzLnNjaGVtYS5vbmVPZigpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSB0aGlzLnNjaGVtYS5hbnlPZigpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKHNjaGVtYS5hbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlcygpKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlKCkuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ0FycmF5JywgJ09iamVjdCcsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEVkaXRvcnNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGVkaXRvci51bnJlZ2lzdGVyKClcblxuICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuZWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuZWRpdG9yc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKDAsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEVkaXRvciAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gdGhpcy5lZGl0b3JzW3RoaXMuaW5kZXhdXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUVkaXRvci5nZXRWYWx1ZSgpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpXG4gIH1cblxuICBtYXRjaEVkaXRvciAodmFsdWUsIGVkaXRvcnMpIHtcbiAgICBsZXQgaW5kZXggPSAwXG5cbiAgICBmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG4gICAgICBpZiAoZWRpdG9yLmVkaXRvcnMpIHtcbiAgICAgICAgZWRpdG9yLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoZXF1YWwoZWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUgKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgZWRpdG9yIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gZWRpdG9yIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgIHRoaXMubWF0Y2hFZGl0b3IodmFsdWUsIHRoaXMuZWRpdG9ycylcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcblxuY2xhc3MgTnVtYmVySW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIHRoaXMuc2NoZW1hLmVudW0oKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG5jbGFzcyBOdWxsSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE51bGxFZGl0b3IodGhpcylcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCJpbXBvcnQgeyBpc1NldCwgZ2V0VHlwZSB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgQXJyYXlJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IE51bGxJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcblxuY2xhc3MgSW5zdGFuY2VSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEuYW55T2YoKSB8fCBzY2hlbWEub25lT2YoKSB8fCBzY2hlbWEudHlwZUlzKCdhbnknKSB8fCBzY2hlbWEudHlwZXMoKSB8fCAhc2NoZW1hLnR5cGUoKSkge1xuICAgICAgICAgIGlmICghc2NoZW1hLnR5cGUoKSAmJiBzY2hlbWEuZGVmYXVsdCgpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IHNjaGVtYS5jbG9uZSgpXG4gICAgICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShzY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICAgICAgY29uc3QgbmV3U2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUobmV3U2NoZW1hKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKGNvbmZpZykge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoY29uZmlnLnNjaGVtYSwgY29uZmlnKVxuICAgICAgaWYgKGlzU2V0KGVkaXRvckNsYXNzKSkge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VSZXNvbHZlclxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9pbmRleCdcbmltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXG4gICAgICAnYWxsT2YnLFxuICAgICAgJ2FueU9mJyxcbiAgICAgICdvbmVPZicsXG4gICAgICAnZGVwZW5kZW50UmVxdWlyZWQnLFxuICAgICAgJ2Zvcm1hdCcsXG4gICAgICAnaWYnLFxuICAgICAgJ2NvbnN0JyxcbiAgICAgICdub3QnLFxuICAgICAgJ3R5cGUnLFxuICAgICAgJ3VuaXF1ZUl0ZW1zJyxcbiAgICAgICdleGNsdXNpdmVNYXhpbXVtJyxcbiAgICAgICdleGNsdXNpdmVNaW5pbXVtJyxcbiAgICAgICdtaW5JdGVtcycsXG4gICAgICAnbWF4SXRlbXMnLFxuICAgICAgJ21pbkxlbmd0aCcsXG4gICAgICAnbWF4TGVuZ3RoJyxcbiAgICAgICdtaW5pbXVtJyxcbiAgICAgICdtYXhpbXVtJyxcbiAgICAgICdtdWx0aXBsZU9mJyxcbiAgICAgICdwYXR0ZXJuJyxcbiAgICAgICdwYXR0ZXJuUHJvcGVydGllcycsXG4gICAgICAnZW51bScsXG4gICAgICAncmVxdWlyZWQnLFxuICAgICAgJ21pblByb3BlcnRpZXMnLFxuICAgICAgJ21heFByb3BlcnRpZXMnXG4gICAgXVxuICB9XG5cbiAgYWxsT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5hbGxPZigpKSB7XG4gICAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgYWxsT2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWxsT2ZFcnJvcnNdXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGFueU9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5hbnlPZigpKSB7XG4gICAgICBjb25zdCB2YWxpZCA9IHNjaGVtYS5hbnlPZigpLnNvbWUoKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBhbnlPZkVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgICByZXR1cm4gYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwXG4gICAgICB9KVxuXG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBjb25zdCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuY29uc3QoKSkge1xuICAgICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSAoSlNPTi5zdHJpbmdpZnkodmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSkpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB2YWx1ZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhT2JqZWN0Lmhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGVudW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmVudW0oKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSAtIDEpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpICsgMSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBmb3JtYXQgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdCgpKSB7XG4gICAgICBsZXQgaW52YWxpZCA9IGZhbHNlXG5cbiAgICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgICAgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmICh2YWx1ZSwgc2NoZW1hKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmlmKCkpIHtcbiAgICAgIGlmICghc2NoZW1hLnRoZW4oKSB8fCAhc2NoZW1hLmVsc2UoKSkge1xuICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG5cbiAgICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgICBlcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4aW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1heGltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhJdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWF4SXRlbXMoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4TGVuZ3RoICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWF4TGVuZ3RoKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWF4UHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5pbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWluaW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1pbkl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5MZW5ndGggKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5taW5MZW5ndGgoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWluUHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbXVsdGlwbGVPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm11bHRpcGxlT2YoKSkge1xuICAgICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG5vdCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEubm90KCkpIHtcbiAgICAgIGNvbnN0IG5vdEVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgb25lT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcblxuICAgICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHBhdHRlcm4gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuKCkpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG4gICAgICAgICAgICBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eU5hbWVcblxuICAgICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXF1aXJlZCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnJlcXVpcmVkKCkpIHtcbiAgICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICB0eXBlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS50eXBlcygpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgdW5pcXVlSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdGhpc1t2YWxpZGF0b3JdKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IDVcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgdGhpcy50cmF2ZXJzZSh0aGlzLmRlZnMpXG4gICAgICB0aGlzLnRyYXZlcnNlKHNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIy8kZGVmcycpKSB7XG4gICAgICBjb25zdCByZWZQYXJ0cyA9IHJlZi5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZWZOYW1lID0gcmVmUGFydHMucG9wKClcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmc1tkZWZOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmc1tkZWZOYW1lXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIHRyYXZlcnNlICh2YWx1ZSwgdGhpbmcsIGluZGV4KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlWyckcmVmJ10pICYmIGlzU2V0KHRoaW5nKSkge1xuICAgICAgICB0aGluZ1tpbmRleF0gPSB0aGlzLmRlZmluZSh2YWx1ZVsnJHJlZiddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmF2ZXJzZSh2YWx1ZVtpbmRleF0sIHZhbHVlLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoaXRlbSwgdmFsdWUsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgSW5zdGFuY2VSZXNvbHZlciBmcm9tICcuL2luc3RhbmNlLXJlc29sdmVyJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnd2lyZWZyYW1lJ1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBJbnN0YW5jZVJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcigpXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgdGhpcy5lcnJvcnMgPSBbXVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLnNjaGVtYS5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlci5yZXNvbHZlKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgdGhpcy5lcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgdGhpcy5lcnJvcnMgPSBbLi4udGhpcy5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpcy5lcnJvcnNcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J1MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=