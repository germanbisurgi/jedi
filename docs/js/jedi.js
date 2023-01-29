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

        if (notSet(value[key])) {
          this.deleteChildInstance(key);
        }
      }

      Object.keys(value).forEach(function (key) {
        var childInstance = _this3.getChildInstance(key); // If a value has a already a child instance


        if (childInstance) {
          var oldValue = childInstance.getValue();
          var newValue = value[childInstance.getKey()]; // update child value if the old value and the new value are different

          if (different(oldValue, newValue)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL3dpcmVmcmFtZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3R5cGVzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3R5cGVzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90eXBlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdHlwZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdHlwZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlLXJlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcXVhbCIsImEiLCJiIiwiZGlmZmVyZW50IiwiaXNOdWxsIiwidmFsdWUiLCJpc1NldCIsIm5vdFNldCIsImlzTnVtYmVyIiwiaXNJbnRlZ2VyIiwiTWF0aCIsImZsb29yIiwiaXNTdHJpbmciLCJpc0Jvb2xlYW4iLCJpc0FycmF5IiwiQXJyYXkiLCJpc09iamVjdCIsImdldFR5cGUiLCJ0eXBlIiwibWVyZ2VEZWVwIiwidGFyZ2V0Iiwic291cmNlcyIsImxlbmd0aCIsInNvdXJjZSIsInNoaWZ0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJhc3NpZ24iLCJFdmVudEVtaXR0ZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZmlsdGVyIiwibGlzdGVuZXIiLCJJbnN0YW5jZSIsImNvbmZpZyIsImplZGkiLCJzY2hlbWEiLCJ1bmRlZmluZWQiLCJwYXRoIiwicGFyZW50IiwiY2hpbGRFZGl0b3JzIiwidWkiLCJpbml0IiwicmVnaXN0ZXIiLCJzZXREZWZhdWx0VmFsdWUiLCJwcmVwYXJlIiwib3B0aW9ucyIsImlzRWRpdG9yIiwic2V0VUkiLCJvbiIsIm9uQ2hpbGRFZGl0b3JDaGFuZ2UiLCJzcGxpdCIsInBvcCIsInJlZ2lzdGVyRWRpdG9yIiwidW5yZWdpc3RlckVkaXRvciIsImluY2x1ZGVzIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsInNhbml0aXplIiwiZW1pdCIsInZhbGlkYXRvciIsInZhbGlkYXRlIiwiZ2V0VmFsdWUiLCJnZXRLZXkiLCJpbnN0YW5jZSIsImRlc3Ryb3kiLCJ1bnJlZ2lzdGVyIiwiU2NoZW1hIiwiYWxsT2YiLCJhbnlPZiIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsIml0ZW1zIiwibWF4aW11bSIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90Iiwib3B0aW9uIiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIlRoZW1lQmFyZWJvbmVzIiwiZXJyb3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJhY3Rpb25zU2xvdCIsImNoaWxkRWRpdG9yc1Nsb3QiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJtZXNzYWdlc1Nsb3QiLCJsYWJlbCIsInNyT25seSIsImxlZ2VuZCIsImlucHV0IiwiaWQiLCJjaGVja2JveCIsInJhZGlvIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJvcHRpb25WYWx1ZXMiLCJpbmRleCIsIm9wdGlvbnNMYWJlbHMiLCJhcHBlbmRDaGlsZCIsIlRoZW1lV2lyZWZyYW1lIiwiYnRuR3JvdXAiLCJmaWVsZHNldCIsImNoZWNrYm94Q29udGFpbmVyIiwiRWRpdG9yIiwidGhlbWUiLCJnZXRDb250YWluZXIiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldENoaWxkRWRpdG9yc1Nsb3QiLCJkaXNhYmxlZCIsImJ1aWxkIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInJlZnJlc2hVSSIsInJlYWR5IiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwiZ2V0SW5wdXRFcnJvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIkFycmF5RWRpdG9yIiwic2V0Q29udGFpbmVyIiwiZ2V0QnRuR3JvdXAiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJzZXRWYWx1ZSIsImdldEZpZWxkc2V0IiwiZ2V0TGVnZW5kIiwiZ2V0RGVzY3JpcHRpb24iLCJpdGVtU2NoZW1hIiwiaXRlbUVkaXRvciIsImNyZWF0ZUVkaXRvciIsIml0ZW1JbmRleCIsIk51bWJlciIsImRlbGV0ZUJ0biIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsImVkaXRvciIsIml0ZW1WYWx1ZSIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsImJ1dHRvbnMiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImNoaWxkRWRpdG9yIiwiY2hpbGRCdXR0b25zIiwiY29uY2F0IiwiZGlzYWJsZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkFycmF5SW5zdGFuY2UiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwiQm9vbGVhbkVkaXRvciIsImdldENoZWNrYm94Q29udGFpbmVyIiwiZ2V0Q2hlY2tib3hMYWJlbCIsImdldENoZWNrYm94IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwicmFkaW9JbnB1dHMiLCJnZXRSYWRpb0xlZ2VuZCIsInJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW9Db250YWluZXIiLCJnZXRSYWRpbyIsInJhZGlvVmFsdWUiLCJnZXRMYWJlbCIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiZ2V0U2VsZWN0IiwiQm9vbGVhbkluc3RhbmNlIiwiZm9ybWF0SXMiLCJPYmplY3RFZGl0b3IiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJnZXRJbnB1dCIsImNyZWF0ZUNoaWxkSW5zdGFuY2UiLCJkZWxldGVDaGlsZEluc3RhbmNlIiwiZ2V0Q2hpbGRJbnN0YW5jZSIsIk9iamVjdEluc3RhbmNlIiwicHJvcGVydHkiLCJvblNldFZhbHVlIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJoYXNPd24iLCJpIiwiZmluZCIsImNoaWxkSW5zdGFuY2UiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJnZXRUZXh0YXJlYSIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJTdHJpbmdJbnN0YW5jZSIsIlN0cmluZyIsIk11bHRpcGxlRWRpdG9yIiwic3dpdGNoZXJCdXR0b25zIiwic3dpdGNoZXIiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsInN3aXRjaEVkaXRvciIsIm9sZEVkaXRvciIsImVkaXRvcnMiLCJsYXN0SW5kZXgiLCJhY3RpdmVFZGl0b3IiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsInJlbW92ZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJzY2hlbWFzIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInR5cGVzIiwic2NoZW1hQ2xvbmUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwibmV3SW5kZXgiLCJtYXRjaEVkaXRvciIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJOdWxsRWRpdG9yIiwiTnVsbEluc3RhbmNlIiwiSW5zdGFuY2VSZXNvbHZlciIsInJlc29sdmVycyIsIm9yaWdpbmFsU2NoZW1hIiwibmV3U2NoZW1hIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZWRpdG9yQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwiYWxsT2ZFcnJvcnMiLCJ2YWxpZCIsInNvbWUiLCJhbnlPZkVycm9ycyIsImZpZWxkIiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJpbnZhbGlkIiwiam9pbiIsImUiLCJjb21wdXRlZE1heGltdW0iLCJjb21wdXRlZE1pbmltdW0iLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0IiwiaWZFZGl0b3IiLCJKZWRpIiwic3RhcnRWYWx1ZSIsImlmRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJwcm9wZXJ0aWVzQ291bnQiLCJpc011bHRpcGxlT2YiLCJub3RFcnJvcnMiLCJjb3VudGVyIiwib25lT2ZFcnJvcnMiLCJwcm9wZXJ0eU5hbWUiLCJzdHJpbmciLCJudW1iZXIiLCJpbnRlZ2VyIiwiYXJyYXkiLCJvYmplY3QiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwic2NoZW1hRXJyb3JzIiwidmFsaWRhdG9yRXJyb3JzIiwiUmVmUGFyc2VyIiwiaXRlcmF0aW9ucyIsImRlZnMiLCJ0cmF2ZXJzZSIsInJlZiIsInN0YXJ0c1dpdGgiLCJyZWZQYXJ0cyIsImRlZk5hbWUiLCJkZWZpbmUiLCJzaG93UmVxdWlyZWRPbmx5IiwicXVlcnlTZWxlY3RvciIsInJvb3QiLCJyZWZQYXJzZXIiLCJkZXJlZmVyZW5jZSIsImFwcGVuZEhpZGRlbklucHV0IiwiY29uc29sZSIsInRhYmxlIiwiaGlkZGVuSW5wdXQiLCJhcmd1bWVudHMiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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VTlQLE9BQVY7TUFDQSxLQUFLdkIsSUFBTDtJQUNEOzs7V0FFRCxrQkFBVXVGLEtBQVYsRUFBaUI7TUFDZixLQUFLbkYsT0FBTCxDQUFhbUYsS0FBYixHQUFxQkEsS0FBckI7TUFDQSxLQUFLc00sS0FBTDtJQUNEOzs7V0FFRCxtQkFBVztNQUFBOztNQUNULEtBQUtSLElBQUwsQ0FBVTlQLE9BQVY7TUFFQSxLQUFLNEMsU0FBTCxDQUFlaUMsU0FBZixHQUEyQixFQUEzQjtNQUVBekgsTUFBTSxDQUFDQyxJQUFQLENBQVksSUFBWixFQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFTO1FBQ2pDLE9BQU8sTUFBSSxDQUFDQSxHQUFELENBQVg7TUFDRCxDQUZEO0lBR0Q7Ozs7RUE1SWdCRSxhOztBQStJSnNRLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgIT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3Qgbm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2ludGVnZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8ICdyb290J1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuICAgIHRoaXMudWkgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGJ1aWxkIHBpcGVsaW5lIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZEVkaXRvckNoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogSWYgc2NoZW1hLmRlZmF1bHQgaXMgbm90IGRlZmluZWQsIHNldHMgYW4gaW5pdGlhbCB2YWx1ZSBiYXNlZCBvbiBpdCdzIHR5cGUuXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgLy8gICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW0oKVswXVxuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgdmFsdWVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVkaXRvciB2YWx1ZSBhbmQgY2FsbHMgcmVmcmVzaFVJIHJpZ2h0IGFmdGVyLiBUaGUgb25DaGFuZ2UgbWV0aG9kXG4gICAqIHdpbGwgYmUgY2FsbGVkIHVubGVzcyB0cmlnZ2Vyc0NoYW5nZSBpcyBleHBsaWNpdGx5IHNldCB0byBmYWxzZS4gVGhpcyBpc1xuICAgKiB1c2VmdWwgZm9yIGluaXRpYWwgb3IgZGVmYXVsdCB2YWx1ZXMuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiBhIGNoaWxkIGVkaXRvciBjaGFuZ2VzLiBUaGlzIGlzIHJlbGV2YW50IGZvciBBcnJheVxuICAgKiBhbmQgT2JqZWN0IGVkaXRvcnMuXG4gICAqL1xuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgfVxuXG4gIHZhbGlkYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3IsIGFuZCBldmVyeSByZWZlcmVuY2UgdGhhdCBpdCBpcyBhdHRhY2hlZCB0byBpdC5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiBmYWxzZVxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29uc3QgPyB0aGlzLnNjaGVtYS5jb25zdCA6IGZhbHNlXG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHQgPyB0aGlzLnNjaGVtYS5kZWZhdWx0IDogZmFsc2VcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiBmYWxzZVxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IGZhbHNlXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogZmFsc2VcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy5mb3JtYXQoKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpID8gdGhpcy5zY2hlbWEuaWYgOiBmYWxzZVxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IGZhbHNlXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpID8gdGhpcy5zY2hlbWEubm90IDogZmFsc2VcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHByb3BlcnR5IChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucHJvcGVydGllcyA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiBmYWxzZVxuICB9XG5cbiAgdGhlbiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pID8gdGhpcy5zY2hlbWEudGhlbiA6IGZhbHNlXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogZmFsc2VcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdHlwZUlzICh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy50eXBlKCkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZXMgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IGZhbHNlXG4gIH1cblxuICB1bmlxdWVJdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS51bmlxdWVJdGVtcykgPyB0aGlzLnNjaGVtYS51bmlxdWVJdGVtcyA6IGZhbHNlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGFjdGlvbnNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhY3Rpb25zU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGFjdGlvbnNTbG90XG4gIH1cblxuICBnZXRDaGlsZEVkaXRvcnNTbG90ICgpIHtcbiAgICBjb25zdCBjaGlsZEVkaXRvcnNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGlsZEVkaXRvcnNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gY2hpbGRFZGl0b3JzU2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4taW5mbydcbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBtZXNzYWdlc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lc3NhZ2VzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBtZXNzYWdlc1Nsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZVdpcmVmcmFtZSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuLi90aGVtZXMvd2lyZWZyYW1lJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSB0aGlzLnRoZW1lLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRFZGl0b3JzU2xvdCgpXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLnJlYWR5IHx8IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgYnVpbGQgKCkge31cblxuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLnZhbGlkYXRlKClcblxuICAgIHRoaXMubWVzc2FnZXNTbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZXNTbG90LmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0SW5wdXRFcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCIvKiBnbG9iYWwgY29uZmlybSAqL1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBnZXRUeXBlLCBjbG9uZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICB0aGlzLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIC8vIGRlbGV0ZUFsbFxuICAgIHRoaXMuZGVsZXRlQWxsQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG4gICAgY29uc3QgaXRlbVNjaGVtYSA9IG5ldyBTY2hlbWEoc2NoZW1hKVxuXG4gICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuaW5zdGFuY2UuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5pbnN0YW5jZS5qZWRpLFxuICAgICAgc2NoZW1hOiBpdGVtU2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzLmluc3RhbmNlXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IuZ2V0S2V5KCkpXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgIH0pXG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICB9XG5cbiAgICBpdGVtRWRpdG9yLnVpLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWRpdG9yLnVpLmFjdGlvbnNTbG90KVxuICAgIGl0ZW1FZGl0b3IudWkuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgcmV0dXJuIGl0ZW1FZGl0b3JcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRFZGl0b3JzID0gW11cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIGl0ZW1FZGl0b3Iuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRFZGl0b3JzLnB1c2goaXRlbUVkaXRvcilcblxuICAgICAgbGV0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZEJ1dHRvbnMgPSBBcnJheS5mcm9tKGNoaWxkRWRpdG9yLnVpLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSlcbiAgICAgICAgYnV0dG9ucyA9IGJ1dHRvbnMuY29uY2F0KGNoaWxkQnV0dG9ucylcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGl0ZW1FZGl0b3IudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbUVkaXRvci51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoZWRpdG9yLnVpLmNvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRkQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcblxuY2xhc3MgQXJyYXlJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgQXJyYXlFZGl0b3IodGhpcylcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5pdGVtcygpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gIH1cblxuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgdmFsdWUucHVzaChpbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLmluc3RhbmNlLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJykpIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICAgIGZvcjogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBhZGRCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgICAgfSlcblxuICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBpbnB1dC52YWx1ZVxuXG4gICAgICAgIC8vIGlmIG5vdCBwcm9wZXJ0eSBuYW1lIHdhcyBnaXZlbiByZXR1cm5cbiAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHByb3BlcnR5IGV4aXN0IHJldHVyblxuICAgICAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZEluc3RhbmNlKHsgdHlwZTogJ2FueScgfSwga2V5KVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRFZGl0b3JzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Byb3BlcnR5LScgKyBpbnN0YW5jZS5nZXRLZXkoKVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgICAgIGZvcjogaWQsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IGluc3RhbmNlLmdldEtleSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSB0aGlzLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfSlcblxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZVxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlQ2hpbGRJbnN0YW5jZShpbnN0YW5jZS5nZXRLZXkoKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKVxuICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIH1cbiAgfVxuXG4gIC8vIGFkZENoaWxkRWRpdG9yIChzY2hlbWEsIGtleSkge1xuICAvLyAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2UuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAvLyAgICAgamVkaTogdGhpcy5pbnN0YW5jZS5qZWRpLFxuICAvLyAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gIC8vICAgICBwYXRoOiB0aGlzLmluc3RhbmNlLnBhdGggKyAnLicgKyBrZXksXG4gIC8vICAgICBwYXJlbnQ6IHRoaXMuaW5zdGFuY2VcbiAgLy8gICB9KVxuICAvL1xuICAvLyAgIC8vIHJlbW92ZUJ0blxuICAvLyAgIGNvbnN0IG5vdFJlcXVpcmVkID0gIXRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChrZXkpXG4gIC8vICAgY29uc3Qgbm90RGVwZW5kZW50UmVxdWlyZWQgPSAhdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGtleSlcbiAgLy8gICBjb25zdCBlZGl0YWJsZVByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKVxuICAvL1xuICAvLyAgIGlmIChub3RSZXF1aXJlZCAmJiBub3REZXBlbmRlbnRSZXF1aXJlZCAmJiBlZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgLy8gICAgIGNvbnN0IHJlbW92ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgLy8gICAgICAgdGV4dENvbnRlbnQ6ICdSZW1vdmUgcHJvcGVydHknXG4gIC8vICAgICB9KVxuICAvLyAgICAgZWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXG4gIC8vICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlLnZhbHVlW2tleV1cbiAgLy8gICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgdGhpcy5pbnN0YW5jZS5jaGlsZEVkaXRvcnMucHVzaChlZGl0b3IpXG4gIC8vICAgdGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldID0gZWRpdG9yLmdldFZhbHVlKClcbiAgLy8gfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkRWRpdG9yID0gdGhpcy5pbnN0YW5jZS5nZXRDaGlsZEluc3RhbmNlKGtleSlcblxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LmFwcGVuZENoaWxkKGNoaWxkRWRpdG9yLnVpLmNvbnRhaW5lcilcblxuICAgICAgaWYgKGNoaWxkRWRpdG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3IudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3IudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4uL2luc3RhbmNlJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgLy8gICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIC8vICAgICBjb25zdCBzaG93UmVxdWlyZWRPbmx5ID0gdGhpcy5qZWRpLm9wdGlvbnMuc2hvd1JlcXVpcmVkT25seSB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ3Nob3dSZXF1aXJlZE9ubHknKVxuICAgIC8vICAgICBjb25zdCBpc05vdFJlcXVpcmVkID0gIXRoaXMuc2NoZW1hLnJlcXVpcmVkKCkgfHwgIXRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMoa2V5KVxuICAgIC8vXG4gICAgLy8gICAgIGlmIChzaG93UmVxdWlyZWRPbmx5ICYmIGlzTm90UmVxdWlyZWQpIHtcbiAgICAvLyAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgIC8vICAgICAgIHRoaXMuY3JlYXRlQ2hpbGRJbnN0YW5jZShzY2hlbWEsIGtleSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSlcbiAgICAvL1xuICAgIC8vICAgLy8gQWRkIGRlcGVuZGVudCByZXF1aXJlZCBwcm9wZXJ0aWVzXG4gICAgLy9cbiAgICAvLyAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgLy8gICAgIGlmICh0aGlzLmlzRGVwZW5kZW50UmVxdWlyZWQoa2V5KSkge1xuICAgIC8vICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnR5KGtleSlcbiAgICAvLyAgICAgICB0aGlzLmNyZWF0ZUNoaWxkSW5zdGFuY2Uoc2NoZW1hLCBrZXkpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkSW5zdGFuY2Uoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoZGVwZW5kZW50UmVxdWlyZWQpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5oYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGRJbnN0YW5jZSAoc2NoZW1hLCBrZXkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZEluc3RhbmNlIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZEVkaXRvcnNbaV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkRWRpdG9ycy5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkRWRpdG9yQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgdmFsdWVbaW5zdGFuY2UuZ2V0S2V5KCldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZ2V0Q2hpbGRJbnN0YW5jZSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFZGl0b3JzLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkRWRpdG9yc1tpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgdGhpcy5kZWxldGVDaGlsZEluc3RhbmNlKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZEluc3RhbmNlID0gdGhpcy5nZXRDaGlsZEluc3RhbmNlKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZEluc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGRJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGRJbnN0YW5jZS5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkSW5zdGFuY2Uuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGRJbnN0YW5jZShzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEluc3RhbmNlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH1cblxuICAgIC8vIGlucHV0XG4gICAgLy8gdG9kbyBmaWxlLCByYW5nZSBzaG91bGQgYmUgaGFuZGxlZCBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhKHtcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4uL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuXG5jbGFzcyBTdHJpbmdJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHRoaXMuc2NoZW1hLmVudW0oKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgdGhpcy5zY2hlbWEuZW51bSgpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoYnV0dG9uLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEVkaXRvcihpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMucHVzaChidXR0b24pXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoZXIpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCAnbXVsdGlwbGUnKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdHJ1ZVxuICAgIH0pKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRFZGl0b3IgPSB0aGlzLmluc3RhbmNlLmVkaXRvcnNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkRWRpdG9yLnVpLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRFZGl0b3IudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlRWRpdG9yLnVpLmNvbnRhaW5lcilcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5kaXNhYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUVkaXRvci51aS5lbmFibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVFZGl0b3IudWkuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi4vaW5zdGFuY2UnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0LCBlcXVhbCwgZGlmZmVyZW50LCBtZXJnZURlZXAgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5lZGl0b3JzID0gW11cbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmFueU9mKCkgfHwgdGhpcy5zY2hlbWEub25lT2YoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gdGhpcy5zY2hlbWEuYW55T2YoKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChzY2hlbWEuYWxsT2YpIHtcbiAgICAgICAgICBsZXQgbWVyZ2VkID0ge31cblxuICAgICAgICAgIHNjaGVtYS5hbGxPZi5mb3JFYWNoKChhbGxPZlNjaGVtYSkgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VEZWVwKG1lcmdlZCwgYWxsT2ZTY2hlbWEpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHNjaGVtYSA9IG1lcmdlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KGNsb25lU2NoZW1hLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IGNsb25lU2NoZW1hLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZXMoKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBFZGl0b3JzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgZWRpdG9yLnVucmVnaXN0ZXIoKVxuXG4gICAgICBlZGl0b3Iub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5lZGl0b3JzLnB1c2goZWRpdG9yKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5lZGl0b3JzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoMCwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoRWRpdG9yIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVFZGl0b3IgPSB0aGlzLmVkaXRvcnNbdGhpcy5pbmRleF1cbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRWRpdG9yLmdldFZhbHVlKClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUVkaXRvci5zYW5pdGl6ZSh2YWx1ZSlcbiAgfVxuXG4gIG1hdGNoRWRpdG9yICh2YWx1ZSwgZWRpdG9ycykge1xuICAgIGxldCBpbmRleCA9IDBcblxuICAgIGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcbiAgICAgIGlmIChlZGl0b3IuZWRpdG9ycykge1xuICAgICAgICBlZGl0b3Iuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChlcXVhbChlZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSAodmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBlZGl0b3IgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBlZGl0b3IgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUVkaXRvci5zYW5pdGl6ZSh2YWx1ZSksIHZhbHVlKSkge1xuICAgICAgdGhpcy5tYXRjaEVkaXRvcih2YWx1ZSwgdGhpcy5lZGl0b3JzKVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlRWRpdG9yLnNldFZhbHVlKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSlcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuZWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVJbnN0YW5jZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5pbnN0YW5jZS5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLmluc3RhbmNlLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucmFkaW9JbnB1dHMucHVzaChyYWRpbylcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgICB9KSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMuaW5zdGFuY2UucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5pbnN0YW5jZS5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcblxuY2xhc3MgTnVtYmVySW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIHRoaXMuc2NoZW1hLmVudW0oKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiB0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiaW1wb3J0IHsgaXNTZXQsIGdldFR5cGUgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi90eXBlcy9hcnJheSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi90eXBlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vdHlwZXMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vdHlwZXMvc3RyaW5nJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi90eXBlcy9tdWx0aXBsZSdcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL3R5cGVzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi90eXBlcy9udWxsJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcblxuY2xhc3MgSW5zdGFuY2VSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEuYW55T2YoKSB8fCBzY2hlbWEub25lT2YoKSB8fCBzY2hlbWEudHlwZUlzKCdhbnknKSB8fCBzY2hlbWEudHlwZXMoKSB8fCAhc2NoZW1hLnR5cGUoKSkge1xuICAgICAgICAgIGlmICghc2NoZW1hLnR5cGUoKSAmJiBzY2hlbWEuZGVmYXVsdCgpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IHNjaGVtYS5jbG9uZSgpXG4gICAgICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShzY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICAgICAgY29uc3QgbmV3U2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUobmV3U2NoZW1hKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKGNvbmZpZykge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoY29uZmlnLnNjaGVtYSwgY29uZmlnKVxuICAgICAgaWYgKGlzU2V0KGVkaXRvckNsYXNzKSkge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VSZXNvbHZlclxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBKZWRpIGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXG4gICAgICAnYWxsT2YnLFxuICAgICAgJ2FueU9mJyxcbiAgICAgICdvbmVPZicsXG4gICAgICAnZGVwZW5kZW50UmVxdWlyZWQnLFxuICAgICAgJ2Zvcm1hdCcsXG4gICAgICAnaWYnLFxuICAgICAgJ2NvbnN0JyxcbiAgICAgICdub3QnLFxuICAgICAgJ3R5cGUnLFxuICAgICAgJ3VuaXF1ZUl0ZW1zJyxcbiAgICAgICdleGNsdXNpdmVNYXhpbXVtJyxcbiAgICAgICdleGNsdXNpdmVNaW5pbXVtJyxcbiAgICAgICdtaW5JdGVtcycsXG4gICAgICAnbWF4SXRlbXMnLFxuICAgICAgJ21pbkxlbmd0aCcsXG4gICAgICAnbWF4TGVuZ3RoJyxcbiAgICAgICdtaW5pbXVtJyxcbiAgICAgICdtYXhpbXVtJyxcbiAgICAgICdtdWx0aXBsZU9mJyxcbiAgICAgICdwYXR0ZXJuJyxcbiAgICAgICdwYXR0ZXJuUHJvcGVydGllcycsXG4gICAgICAnZW51bScsXG4gICAgICAncmVxdWlyZWQnLFxuICAgICAgJ21pblByb3BlcnRpZXMnLFxuICAgICAgJ21heFByb3BlcnRpZXMnXG4gICAgXVxuICB9XG5cbiAgYWxsT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5hbGxPZigpKSB7XG4gICAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgYWxsT2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWxsT2ZFcnJvcnNdXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGFueU9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5hbnlPZigpKSB7XG4gICAgICBjb25zdCB2YWxpZCA9IHNjaGVtYS5hbnlPZigpLnNvbWUoKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBhbnlPZkVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgICByZXR1cm4gYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwXG4gICAgICB9KVxuXG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBjb25zdCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuY29uc3QoKSkge1xuICAgICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSAoSlNPTi5zdHJpbmdpZnkodmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSkpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB2YWx1ZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhT2JqZWN0Lmhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGVudW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmVudW0oKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSAtIDEpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpICsgMSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBmb3JtYXQgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdCgpKSB7XG4gICAgICBsZXQgaW52YWxpZCA9IGZhbHNlXG5cbiAgICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgICAgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmICh2YWx1ZSwgc2NoZW1hKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmlmKCkpIHtcbiAgICAgIGlmICghc2NoZW1hLnRoZW4oKSB8fCAhc2NoZW1hLmVsc2UoKSkge1xuICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG5cbiAgICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSB9KVxuICAgICAgICBlcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4aW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1heGltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhJdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWF4SXRlbXMoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4TGVuZ3RoICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWF4TGVuZ3RoKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWF4UHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5pbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWluaW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1pbkl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5MZW5ndGggKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5taW5MZW5ndGgoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWluUHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbXVsdGlwbGVPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm11bHRpcGxlT2YoKSkge1xuICAgICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG5vdCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEubm90KCkpIHtcbiAgICAgIGNvbnN0IG5vdEVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgb25lT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcblxuICAgICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHBhdHRlcm4gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuKCkpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG4gICAgICAgICAgICBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eU5hbWVcblxuICAgICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXF1aXJlZCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnJlcXVpcmVkKCkpIHtcbiAgICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICB0eXBlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS50eXBlcygpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgdW5pcXVlSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdGhpc1t2YWxpZGF0b3JdKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IDVcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgdGhpcy50cmF2ZXJzZSh0aGlzLmRlZnMpXG4gICAgICB0aGlzLnRyYXZlcnNlKHNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIy8kZGVmcycpKSB7XG4gICAgICBjb25zdCByZWZQYXJ0cyA9IHJlZi5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZWZOYW1lID0gcmVmUGFydHMucG9wKClcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmc1tkZWZOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmc1tkZWZOYW1lXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIHRyYXZlcnNlICh2YWx1ZSwgdGhpbmcsIGluZGV4KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlWyckcmVmJ10pICYmIGlzU2V0KHRoaW5nKSkge1xuICAgICAgICB0aGluZ1tpbmRleF0gPSB0aGlzLmRlZmluZSh2YWx1ZVsnJHJlZiddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmF2ZXJzZSh2YWx1ZVtpbmRleF0sIHZhbHVlLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoaXRlbSwgdmFsdWUsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgSW5zdGFuY2VSZXNvbHZlciBmcm9tICcuL2luc3RhbmNlLXJlc29sdmVyJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ3dpcmVmcmFtZSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKVxuICAgIHRoaXMuZWRpdG9ycyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICAgIHRoaXMucmVzb2x2ZXIgPSBuZXcgSW5zdGFuY2VSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoKVxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYShvcHRpb25zLnNjaGVtYSlcbiAgICB0aGlzLmVycm9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMuc2NoZW1hLnNjaGVtYSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG5cbiAgICBjb25zb2xlLnRhYmxlKHRoaXMuZWRpdG9ycylcbiAgfVxuXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlZGl0b3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIHBhc3NlZCBzY2hlbWEgYW5kIGNvbmZpZ1xuICAgKi9cbiAgY3JlYXRlRWRpdG9yIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlci5yZXNvbHZlKGNvbmZpZylcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIGdldEVkaXRvciAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvcnNbcGF0aF1cbiAgfVxuXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICB2YWxpZGF0ZSAoKSB7XG4gICAgdGhpcy5lcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5lZGl0b3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yc1trZXldXG4gICAgICB0aGlzLmVycm9ycyA9IFsuLi50aGlzLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLmVycm9yc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMub3B0aW9ucy5zdGFydFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHNldFRoZW1lICh0aGVtZSkge1xuICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9