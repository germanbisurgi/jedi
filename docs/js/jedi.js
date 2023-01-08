(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Jedi"] = factory();
	else
		root["Jedi"] = factory();
})(window, function() {
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

var _typeof = __webpack_require__(7)["default"];

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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(8);

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

var arrayLikeToArray = __webpack_require__(8);

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
      return label;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var label = document.createElement('label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;
      return label;
    }
  }, {
    key: "getLabel",
    value: function getLabel(config) {
      var label = document.createElement('label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(3);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(0);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: ./src/themes/wireframe.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var wireframe_ThemeWireframe = /*#__PURE__*/function (_ThemeBarebones) {
  inherits_default()(ThemeWireframe, _ThemeBarebones);

  var _super = _createSuper(ThemeWireframe);

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
      return label;
    }
  }, {
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var label = document.createElement('label');
      label.classList.add('form-check-label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(7);
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
var get = __webpack_require__(6);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// CONCATENATED MODULE: ./src/editor.js



var editor_Editor = /*#__PURE__*/function () {
  function Editor(config) {
    classCallCheck_default()(this, Editor);

    this.jedi = config.jedi;
    this.schema = config.schema;
    this.disabled = false;
    this.value = config.value || undefined;
    this.path = config.path || 'root';
    this.parent = config.parent || null;
    this.container = null;
    this.messagesSlot = this.jedi.theme.getMessagesSlot();
    this.actionsSlot = this.jedi.theme.getActionsSlot();
    this.childEditorsSlot = this.jedi.theme.getChildEditorsSlot();
    this.childEditors = [];
    this.init();
  }
  /**
   * Starts the build pipeline of the editor
   */


  createClass_default()(Editor, [{
    key: "init",
    value: function init() {
      this.register();
      this.setDefaultValue();
      this.setContainer();
      this.setContainerAttributes();
      this.prepare();
      this.build();
      this.refreshUI();

      if (this.jedi.ready || this.jedi.options.alwaysShowErrors || this.schema.option('alwaysShowErrors')) {
        this.showValidationErrors();
      }
    }
  }, {
    key: "getKey",
    value: function getKey() {
      return this.path.split('.').pop();
    }
  }, {
    key: "setContainer",
    value: function setContainer() {
      this.container = this.jedi.theme.getContainer();
    }
  }, {
    key: "setContainerAttributes",
    value: function setContainerAttributes() {
      this.container.setAttribute('data-path', this.path);

      if (this.schema.type()) {
        this.container.setAttribute('data-type', this.schema.type());
      }
    }
    /**
     * Prepare data before building the editor
     */

  }, {
    key: "prepare",
    value: function prepare() {}
    /**
     * build the editor's user interface
     */

  }, {
    key: "build",
    value: function build() {}
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
        this.onChange();
      }

      this.onSetValue();
      this.refreshUI();
    }
    /**
     * Refresh the UI of the editor to reflect it's value. This is necessary when
     * using setValue to set the value programmatically.
     */

  }, {
    key: "refreshUI",
    value: function refreshUI() {}
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
    key: "validate",
    value: function validate() {
      return this.jedi.validator.validate(this.getValue(), this.schema, this.getKey(), this.path);
    }
    /**
     * Shows validation messages in the editor container.
     */

  }, {
    key: "showValidationErrors",
    value: function showValidationErrors() {
      var _this = this;

      var errors = this.validate();
      this.messagesSlot.innerHTML = '';
      errors.forEach(function (error) {
        _this.messagesSlot.appendChild(_this.jedi.theme.getInputError({
          message: error.message
        }));
      });
    }
  }, {
    key: "onSetValue",
    value: function onSetValue() {}
    /**
     * Fires when the value of the editor changes.
     */

  }, {
    key: "onChange",
    value: function onChange() {
      if (this.parent) {
        this.parent.onChildEditorChange();
      }

      this.showValidationErrors();
    }
    /**
     * Fires when the value of a child editor changes. This is relevant for Array
     * and Object editors.
     */

  }, {
    key: "onChildEditorChange",
    value: function onChildEditorChange() {}
    /**
     * Destroys the editor, and every reference that it is attached to it.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.container && this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }

      this.unregister();

      for (var key in this) {
        if (!Object.prototype.hasOwnProperty.call(this, key)) {
          continue;
        }

        delete this[key];
      }
    }
  }]);

  return Editor;
}();

/* harmony default export */ var src_editor = (editor_Editor);
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
        if (!Object.prototype.hasOwnProperty.call(this, key)) {
          continue;
        }

        delete this[key];
      }
    }
  }]);

  return Schema;
}();

/* harmony default export */ var src_schema = (schema_Schema);
// CONCATENATED MODULE: ./src/editors/array.js







function array_createSuper(Derived) { var hasNativeReflectConstruct = array_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function array_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





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

      var btnGroup = this.jedi.theme.getBtnGroup();
      this.actionsSlot.appendChild(btnGroup); // addBtn

      this.addBtn = this.jedi.theme.getButton({
        textContent: 'Add item'
      });
      btnGroup.appendChild(this.addBtn);
      this.addBtn.addEventListener('click', function () {
        _this.addItem();
      }); // deleteAll

      this.deleteAllBtn = this.jedi.theme.getButton({
        textContent: 'Delete items'
      });
      btnGroup.appendChild(this.deleteAllBtn);
      this.deleteAllBtn.addEventListener('click', function () {
        if (window.confirm('Confirm to delete all')) {
          _this.setValue([]);
        }
      });
    }
  }, {
    key: "setContainer",
    value: function setContainer() {
      this.container = this.jedi.theme.getFieldset(); // title

      this.container.appendChild(this.jedi.theme.getLegend({
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      })); // description

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
        }));
      }
    }
  }, {
    key: "createItemEditor",
    value: function createItemEditor(value) {
      var _this2 = this;

      var schema = this.schema.items() ? this.schema.items() : {
        type: getType(value)
      };
      var itemEditor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: new src_schema(schema),
        path: this.path + '.' + this.childEditors.length,
        parent: this
      });
      var btnGroup = this.jedi.theme.getBtnGroup();
      itemEditor.container.appendChild(itemEditor.actionsSlot);
      itemEditor.actionsSlot.appendChild(btnGroup);
      var itemIndex = Number(itemEditor.getKey());
      var deleteBtn = this.jedi.theme.getButton({
        textContent: 'Delete item'
      });
      btnGroup.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', function () {
        var itemIndex = Number(itemEditor.path.split('.').pop());

        _this2.deleteItem(itemIndex);
      });

      if (this.childEditors.length !== 0) {
        var moveUpBtn = this.jedi.theme.getButton({
          textContent: 'Move up'
        });
        btnGroup.appendChild(moveUpBtn);
        moveUpBtn.addEventListener('click', function () {
          var toIndex = itemIndex - 1;

          _this2.move(itemIndex, toIndex);
        });
      }

      if (this.getValue().length - 1 !== itemIndex) {
        var moveDownBtn = this.jedi.theme.getButton({
          textContent: 'Move down'
        });
        btnGroup.appendChild(moveDownBtn);
        moveDownBtn.addEventListener('click', function () {
          var toIndex = itemIndex + 1;

          _this2.move(itemIndex, toIndex);
        });
      }

      return itemEditor;
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
      if (window.confirm('Confirm to delete')) {
        var currentValue = clone(this.getValue());
        var newValue = currentValue.filter(function (item, index) {
          return index !== itemIndex;
        });
        this.setValue(newValue);
      }
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
    key: "refreshUI",
    value: function refreshUI() {
      var _this3 = this;

      var value = this.getValue();
      this.childEditors.forEach(function (editor) {
        editor.destroy();
      });
      this.childEditors = [];
      value.forEach(function (itemValue) {
        var itemEditor = _this3.createItemEditor(itemValue);

        itemEditor.setValue(itemValue, false);

        _this3.childEditors.push(itemEditor);

        var buttons = Array.from(_this3.container.querySelectorAll('button'));

        _this3.childEditors.forEach(function (childEditor) {
          var childButtons = Array.from(childEditor.container.querySelectorAll('button'));
          buttons = buttons.concat(childButtons);
        });

        if (_this3.disabled) {
          itemEditor.disable();
          buttons.forEach(function (button) {
            button.setAttribute('disabled', 'disabled');
          });
        } else {
          itemEditor.enable();
          buttons.forEach(function (button) {
            button.removeAttribute('disabled');
          });
        }
      });
      this.childEditors.forEach(function (editor) {
        _this3.childEditorsSlot.appendChild(editor.container);
      });

      if (this.disabled) {
        this.addBtn.setAttribute('disabled', 'disabled');
        this.deleteAllBtn.setAttribute('disabled', 'disabled');
      } else {
        this.addBtn.removeAttribute('disabled', 'disabled');
        this.deleteAllBtn.removeAttribute('disabled', 'disabled');
      }
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

      get_default()(getPrototypeOf_default()(ArrayEditor.prototype), "destroy", this).call(this);
    }
  }]);

  return ArrayEditor;
}(src_editor);

/* harmony default export */ var editors_array = (array_ArrayEditor);
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

      var checkboxContainer = this.jedi.theme.getCheckboxContainer(); // label

      var label = this.jedi.theme.getCheckboxLabel({
        "for": this.path,
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      }); // input

      this.input = this.jedi.theme.getCheckbox({
        id: this.path
      }); // appends

      this.container.appendChild(checkboxContainer);
      checkboxContainer.appendChild(this.input);
      checkboxContainer.appendChild(label); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.checked);
      }); // description

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
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
      this.input.checked = this.getValue();

      if (this.disabled) {
        this.input.setAttribute('disabled', 'disabled');
      } else {
        this.input.removeAttribute('disabled');
      }
    }
  }]);

  return BooleanEditor;
}(src_editor);

/* harmony default export */ var editors_boolean = (boolean_BooleanEditor);
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

      this.container.appendChild(this.jedi.theme.getLabel({
        "for": this.path,
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      })); // input

      this.input = this.jedi.theme.getSelect({
        optionValues: ['false', 'true'],
        optionsLabels: this.schema.option('enumTitles') || ['false', 'true'],
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        var value = _this.input.value === 'true';

        _this.setValue(value);
      }); // description

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
        }));
      }
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.getValue() === true ? 'true' : 'false';

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
    key: "prepare",
    value: function prepare() {
      this.optionValues = ['false', 'true'];
      this.optionsLabels = this.schema.option('enumTitles') || this.optionValues;
    }
  }, {
    key: "build",
    value: function build() {
      var _this = this;

      this.container.appendChild(this.messagesSlot); // fieldset

      var fieldset = this.jedi.theme.getFieldset();
      this.container.appendChild(fieldset); // legend

      fieldset.appendChild(this.jedi.theme.getLegend({
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      })); // radios

      this.optionValues.forEach(function (value, index) {
        // radio container
        var radioContainer = _this.jedi.theme.getRadioContainer(); // radio


        var radio = _this.jedi.theme.getRadio({
          value: value,
          id: _this.path + '.' + index
        });

        radioContainer.appendChild(radio);
        radio.addEventListener('change', function () {
          var radioValue = radio.value === 'true';

          _this.setValue(radioValue);
        }); // label

        radioContainer.appendChild(_this.jedi.theme.getLabel({
          "for": _this.path + '.' + index,
          textContent: _this.optionsLabels[index]
        }));
        fieldset.appendChild(radioContainer);
      }); // description

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
        }));
      }
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;

      var fieldset = this.container.querySelector('fieldset');
      var radioInputs = fieldset.querySelectorAll('input');
      radioInputs.forEach(function (radio) {
        var radioValue = radio.value === 'true';
        radio.checked = radioValue === _this2.getValue();
      });
      fieldset.disabled = this.disabled;
    }
  }]);

  return BooleanEnumRadioEditor;
}(editors_boolean);

/* harmony default export */ var boolean_enum_radio = (boolean_enum_radio_BooleanEnumRadioEditor);
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
    key: "prepare",
    value: function prepare() {
      // child editors
      if (this.schema.properties()) {
        for (var key in this.schema.properties()) {
          if (!Object.prototype.hasOwnProperty.call(this.schema.properties(), key)) {
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
          if (!Object.prototype.hasOwnProperty.call(this.schema.properties(), _key)) {
            continue;
          }

          if (this.isDependentRequired(_key)) {
            var _schema = this.schema.property(_key);

            this.addChildEditor(_schema, _key);
          }
        }
      }
    }
  }, {
    key: "build",
    value: function build() {
      var _this = this;

      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.childEditorsSlot);
      this.container.appendChild(this.actionsSlot); // addBtn

      if (this.jedi.options.editableProperties || this.schema.option('editableProperties')) {
        var label = this.jedi.theme.getLabel({
          textContent: 'Property Name',
          "for": 'jedi-add-property-input-' + this.path
        });
        this.container.appendChild(label);
        var input = this.jedi.theme.getInput({
          type: 'text',
          id: 'jedi-add-property-input-' + this.path
        });
        this.container.appendChild(input);
        var addBtn = this.jedi.theme.getButton({
          textContent: 'Add property'
        });
        addBtn.addEventListener('click', function () {
          var key = input.value; // if not property name was given return

          if (key.length === 0) {
            return;
          } // if property exist return


          if (isSet(_this.value[key])) {
            return;
          }

          _this.addChildEditor({
            type: 'any'
          }, key);

          _this.setValue(_this.value);

          input.value = '';
        });
        this.container.appendChild(addBtn);
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
      var _this2 = this;

      var dependentRequired = this.schema.dependentRequired();

      if (dependentRequired) {
        var missingProperties = [];
        Object.keys(dependentRequired).forEach(function (key) {
          if (isSet(_this2.value[key])) {
            var requiredProperties = dependentRequired[key];
            missingProperties = requiredProperties.filter(function (property) {
              return !Object.prototype.hasOwnProperty.call(_this2.value, property);
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
      var _this3 = this;

      var editor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: new src_schema(schema),
        path: this.path + '.' + key,
        parent: this
      }); // removeBtn

      var notRequired = !this.isRequired(key);
      var notDependentRequired = !this.isDependentRequired(key);
      var editableProperties = this.jedi.options.editableProperties || this.schema.option('editableProperties');

      if (notRequired && notDependentRequired && editableProperties) {
        var removeBtn = this.jedi.theme.getButton({
          textContent: 'Remove property'
        });
        editor.container.appendChild(removeBtn);
        removeBtn.addEventListener('click', function () {
          delete _this3.value[key];

          _this3.setValue(_this3.value);
        });
      }

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
      this.showValidationErrors();
      var value = this.getValue(); // remove any children that are not included in the value

      for (var i = this.childEditors.length - 1; i >= 0; i--) {
        var editor = this.childEditors[i];
        var key = editor.getKey();

        if (!isSet(value[key])) {
          this.deleteChildEditor(key);
        }
      }

      for (var _key2 in value) {
        if (!Object.prototype.hasOwnProperty.call(value, _key2)) {
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
    key: "refreshUI",
    value: function refreshUI() {
      var value = this.getValue();

      for (var key in value) {
        if (!Object.prototype.hasOwnProperty.call(value, key)) {
          continue;
        }

        var childEditor = this.getChildEditor(key);
        this.childEditorsSlot.appendChild(childEditor.container);

        if (childEditor) {
          if (this.disabled) {
            childEditor.disable();
          } else {
            childEditor.enable();
          }
        }
      }
    }
  }, {
    key: "setContainer",
    value: function setContainer() {
      this.container = this.jedi.theme.getFieldset(); // title

      if (!this.schema.option('hideTitle')) {
        this.container.appendChild(this.jedi.theme.getLegend({
          textContent: this.schema.title() ? this.schema.title() : this.getKey()
        })); // description

        if (this.schema.description()) {
          this.container.appendChild(this.jedi.theme.getDescription({
            textContent: this.schema.description()
          }));
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.childEditors.forEach(function (childEditor) {
        childEditor.destroy();
      });

      get_default()(getPrototypeOf_default()(ObjectEditor.prototype), "destroy", this).call(this);
    }
  }]);

  return ObjectEditor;
}(src_editor);

/* harmony default export */ var editors_object = (object_ObjectEditor);
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

      var label = this.jedi.theme.getLabel({
        "for": this.path,
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      });

      if (!this.schema.formatIs('hidden')) {
        this.container.appendChild(label);
      } // input
      // todo file, range should be handled differently


      var inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week'];

      if (this.schema.formatIs('textarea')) {
        this.input = this.jedi.theme.getTextarea({
          id: this.path
        });
      } else {
        this.input = this.jedi.theme.getInput({
          type: inputTypes.includes(this.schema.format()) ? this.schema.format() : 'text',
          id: this.path
        });
      }

      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      }); // description

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
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
      this.input.value = this.getValue();

      if (this.disabled) {
        this.input.setAttribute('disabled', 'disabled');
      } else {
        this.input.removeAttribute('disabled');
      }
    }
  }]);

  return StringEditor;
}(src_editor);

/* harmony default export */ var editors_string = (string_StringEditor);
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
    key: "prepare",
    value: function prepare() {
      this.optionValues = this.schema["enum"]();
      this.optionsLabels = this.schema.option('enumTitles') || this.optionValues;
    }
  }, {
    key: "build",
    value: function build() {
      var _this = this;

      this.container.appendChild(this.messagesSlot); // label

      this.container.appendChild(this.jedi.theme.getLabel({
        "for": this.path,
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      })); // input

      this.input = this.jedi.theme.getSelect({
        optionValues: this.optionValues,
        optionsLabels: this.optionsLabels,
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      }); // description

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
        }));
      } // const firstOption = this.optionValues[0]
      //
      // if (firstOption) {
      //   this.setValue(firstOption, false)
      // }

    }
  }]);

  return StringEnumSelectEditor;
}(editors_string);

/* harmony default export */ var string_enum_select = (string_enum_select_StringEnumSelectEditor);
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
    key: "prepare",
    value: function prepare() {
      this.optionValues = this.schema["enum"]();
      this.optionsLabels = this.schema.option('enumTitles') || this.optionValues;
    }
  }, {
    key: "build",
    value: function build() {
      var _this = this;

      this.container.appendChild(this.messagesSlot); // fieldset

      var fieldset = this.jedi.theme.getFieldset();
      this.container.appendChild(fieldset); // legend

      fieldset.appendChild(this.jedi.theme.getLegend({
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      })); // radios

      this.optionValues.forEach(function (value, index) {
        // radio container
        var radioContainer = _this.jedi.theme.getRadioContainer(); // radio


        var radio = _this.jedi.theme.getRadio({
          value: value,
          id: _this.path + '.' + index
        });

        radioContainer.appendChild(radio);
        radio.addEventListener('change', function () {
          _this.setValue(radio.value);
        });
        radioContainer.appendChild(_this.jedi.theme.getLabel({
          "for": _this.path + '.' + index,
          textContent: _this.optionsLabels[index]
        }));
        fieldset.appendChild(radioContainer);
      }); // description

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
        }));
      } // const firstOption = this.optionValues[0]
      //
      // if (firstOption) {
      //   this.setValue(firstOption, false)
      // }

    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;

      var fieldset = this.container.querySelector('fieldset');
      var radioInputs = fieldset.querySelectorAll('input');
      radioInputs.forEach(function (radio) {
        radio.checked = radio.value === _this2.getValue();
      });
      fieldset.disabled = this.disabled;
    }
  }]);

  return StringEnumRadioEditor;
}(editors_string);

/* harmony default export */ var string_enum_radio = (string_enum_radio_StringEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/multiple.js








function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
    key: "prepare",
    value: function prepare() {
      var _this = this;

      this.editors = [];
      this.switcherOptionValues = [];
      this.switcherOptionsLabels = [];
      this.activeEditor = null;
      this.lastIndex = 0;
      this.index = 0;
      var schemas = [];

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

          schemas.push(schema);
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

          schemas.push(schema);

          _this.switcherOptionValues.push(index);

          _this.switcherOptionsLabels.push(type.charAt(0).toUpperCase() + type.slice(1));
        });
      } else if (this.schema.typeIs('any') || !this.schema.type()) {
        var schemaClone = this.schema.clone();
        schemas = [_objectSpread(_objectSpread({}, schemaClone), {
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
        schemas.forEach(function (schema, index) {
          _this.switcherOptionValues.push(index);
        });
        this.switcherOptionsLabels = ['String', 'Number', 'Integer', 'Boolean', 'Array', 'Object', 'Null'];
      } // Editors


      schemas.forEach(function (schema) {
        var editor = _this.jedi.createEditor({
          jedi: _this.jedi,
          schema: new src_schema(schema),
          path: _this.path,
          parent: _this.parent
        });

        editor.unregister();

        editor.onChange = function () {
          _this.onChange();
        };

        _this.editors.push(editor);
      });
    }
  }, {
    key: "build",
    value: function build() {
      var _this2 = this;

      this.container.appendChild(this.messagesSlot); // switcher buttons

      this.switcherButtons = [];
      this.switcher = this.jedi.theme.getBtnGroup();
      this.switcher.classList.add('jedi-switcher');
      this.switcherOptionValues.forEach(function (value, index) {
        // button
        var button = _this2.jedi.theme.getButton({
          textContent: _this2.switcherOptionsLabels[index],
          value: index
        });

        button.addEventListener('click', function () {
          var index = Number(button.value);

          _this2.switchEditor(index);
        });

        _this2.switcher.appendChild(button);

        _this2.switcherButtons.push(button);
      });
      this.container.appendChild(this.switcher);

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
    key: "setContainer",
    value: function setContainer() {
      this.container = this.jedi.theme.getFieldset();
      this.container.setAttribute('data-type', 'multiple');
      this.container.appendChild(this.jedi.theme.getLegend({
        textContent: this.schema.title() ? this.schema.title() : this.getKey(),
        srOnly: true
      }));
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this3 = this;

      var oldEditor = this.editors[this.lastIndex];

      if (oldEditor.container.parentNode) {
        this.container.removeChild(oldEditor.container);
      }

      this.container.appendChild(this.activeEditor.container);

      if (this.disabled) {
        this.activeEditor.disable();
        this.switcherButtons.forEach(function (button) {
          button.disabled = true;
        });
      } else {
        this.activeEditor.enable();
        this.switcherButtons.forEach(function (button) {
          button.disabled = false;
        });
      }

      this.switcherButtons.forEach(function (button) {
        if (Number(button.value) === Number(_this3.index)) {
          button.classList.add(_this3.jedi.theme.getButtonActiveClass());
        } else {
          button.classList.remove(_this3.jedi.theme.getButtonActiveClass());
        }
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.activeEditor.getValue();
    }
  }, {
    key: "showValidationErrors",
    value: function showValidationErrors() {
      get_default()(getPrototypeOf_default()(MultipleEditor.prototype), "showValidationErrors", this).call(this);

      this.activeEditor.showValidationErrors();
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
        this.onChange();
      }

      this.refreshUI();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.editors.forEach(function (editor) {
        editor.destroy();
      });

      get_default()(getPrototypeOf_default()(MultipleEditor.prototype), "destroy", this).call(this);
    }
  }]);

  return MultipleEditor;
}(src_editor);

/* harmony default export */ var multiple = (multiple_MultipleEditor);
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

      this.container.appendChild(this.jedi.theme.getLabel({
        "for": this.path,
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      })); // input

      this.input = this.jedi.theme.getInput({
        type: 'number',
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      }); // description

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
        }));
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
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.getValue();

      if (this.disabled) {
        this.input.setAttribute('disabled', 'disabled');
      } else {
        this.input.removeAttribute('disabled');
      }
    }
  }]);

  return NumberEditor;
}(src_editor);

/* harmony default export */ var editors_number = (number_NumberEditor);
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
    key: "prepare",
    value: function prepare() {
      this.optionValues = this.schema["enum"]();
      this.optionsLabels = this.schema.option('enumTitles') || this.optionValues;
    }
  }, {
    key: "build",
    value: function build() {
      var _this = this;

      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.jedi.theme.getLabel({
        "for": this.path,
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      })); // input

      this.input = this.jedi.theme.getSelect({
        optionValues: this.optionValues,
        optionsLabels: this.optionsLabels,
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      }); // description

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
        }));
      } // const firstOption = this.optionValues[0]
      //
      // if (firstOption) {
      //   this.setValue(firstOption, false)
      // }

    }
  }]);

  return NumberEnumSelectEditor;
}(editors_number);

/* harmony default export */ var number_enum_select = (number_enum_select_NumberEnumSelectEditor);
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
    key: "prepare",
    value: function prepare() {
      this.optionValues = this.schema["enum"]();
      this.optionsLabels = this.schema.option('enumTitles') || this.optionValues;
    }
  }, {
    key: "build",
    value: function build() {
      var _this = this;

      this.container.appendChild(this.messagesSlot); // fieldset

      var fieldset = this.jedi.theme.getFieldset();
      this.container.appendChild(fieldset); // legend

      fieldset.appendChild(this.jedi.theme.getLegend({
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      })); // radios

      this.optionValues.forEach(function (value, index) {
        // radio container
        var radioContainer = _this.jedi.theme.getRadioContainer(); // radio


        var radio = _this.jedi.theme.getRadio({
          value: value,
          id: _this.path + '.' + index
        });

        radioContainer.appendChild(radio);
        radio.addEventListener('change', function () {
          _this.setValue(radio.value);
        }); // label

        radioContainer.appendChild(_this.jedi.theme.getLabel({
          "for": _this.path + '.' + index,
          textContent: _this.optionsLabels[index]
        }));
        fieldset.appendChild(radioContainer);
      }); // description

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
        }));
      } // const firstOption = this.optionValues[0]
      //
      // if (firstOption) {
      //   this.setValue(firstOption, false)
      // }

    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;

      var fieldset = this.container.querySelector('fieldset');
      var radioInputs = fieldset.querySelectorAll('input');
      radioInputs.forEach(function (radio) {
        radio.checked = Number(radio.value) === Number(_this2.getValue());
      });
      fieldset.disabled = this.disabled;
    }
  }]);

  return NumberEnumRadioEditor;
}(editors_number);

/* harmony default export */ var number_enum_radio = (number_enum_radio_NumberEnumRadioEditor);
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

      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
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
}(src_editor);

/* harmony default export */ var editors_null = (null_NullEditor);
// CONCATENATED MODULE: ./src/resolver.js



function resolver_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = resolver_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function resolver_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return resolver_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return resolver_arrayLikeToArray(o, minLen); }

function resolver_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

















var resolver_Resolver = /*#__PURE__*/function () {
  function Resolver() {
    var _this = this;

    classCallCheck_default()(this, Resolver);

    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [function (schema, config) {
      if (schema.allOf()) {
        var merged = {};
        schema.allOf().forEach(function (allOfSchema) {
          merged = utils_mergeDeep(merged, allOfSchema);
        });
        config.schema = new src_schema(merged);
        return _this.resolve(config);
      }
    }, function (schema, config) {
      if (schema.anyOf() || schema.oneOf() || schema.typeIs('any') || schema.types() || !schema.type()) {
        if (!schema.type() && schema["default"]()) {
          var originalSchema = schema.clone();
          originalSchema.type = getType(schema["default"]());
          var newSchema = new src_schema(originalSchema);
          return _this.resolve(newSchema);
        } else {
          return new multiple(config);
        }
      }
    }, function (schema, config) {
      if (schema.typeIs('boolean') && schema.formatIs('radio')) {
        return new boolean_enum_radio(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('boolean') && schema.formatIs('select')) {
        return new boolean_enum_select(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('boolean')) {
        return new editors_boolean(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('object')) {
        return new editors_object(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('array')) {
        return new editors_array(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('string') && schema["enum"]() && schema.formatIs('radio')) {
        return new string_enum_radio(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('string') && schema["enum"]()) {
        return new string_enum_select(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('string')) {
        return new editors_string(config);
      }
    }, function (schema, config) {
      if (schema.typeIsNumeric() && schema["enum"]() && schema.formatIs('radio')) {
        return new number_enum_radio(config);
      }
    }, function (schema, config) {
      if (schema.typeIsNumeric() && schema["enum"]()) {
        return new number_enum_select(config);
      }
    }, function (schema, config) {
      if (schema.typeIsNumeric()) {
        return new editors_number(config);
      }
    }, function (schema, config) {
      if (schema.typeIs('null')) {
        return new editors_null(config);
      }
    }];
  }
  /**
   * Adds a resolver function
   */


  createClass_default()(Resolver, [{
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
      var _iterator = resolver_createForOfIteratorHelper(this.resolvers),
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

  return Resolver;
}();

/* harmony default export */ var src_resolver = (resolver_Resolver);
// CONCATENATED MODULE: ./src/validator.js







var validator_Validator = /*#__PURE__*/function () {
  function Validator() {
    classCallCheck_default()(this, Validator);

    this.validators = ['dependentRequired', 'format', 'if', 'const', 'not', 'type', 'uniqueItems', 'exclusiveMaximum', 'exclusiveMinimum', 'minItems', 'maxItems', 'minLength', 'maxLength', 'minimum', 'maximum', 'multipleOf', 'pattern', 'patternProperties', 'enum', 'required', 'minProperties', 'maxProperties', 'allOf', 'anyOf', 'oneOf'];
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
              return !Object.prototype.hasOwnProperty.call(value, property);
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
            if (!Object.prototype.hasOwnProperty.call(value, _index)) {
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












var src_Jedi = /*#__PURE__*/function () {
  function Jedi(options) {
    classCallCheck_default()(this, Jedi);

    this.options = Object.assign({
      editableProperties: false,
      alwaysShowErrors: false,
      showRequiredOnly: false,
      schema: {},
      theme: 'wireframe'
    }, options);
    this.container = document.querySelector(options.container) || document.createElement('div');
    this.editors = {};
    this.root = null;
    this.theme = null;
    this.listeners = [];
    this.resolver = new src_resolver();
    this.validator = new src_validator();
    this.refParser = new ref_parser();
    this.schema = new src_schema(options.schema);
    this.errors = [];
    this.init();
  }

  createClass_default()(Jedi, [{
    key: "init",
    value: function init() {
      var _this = this;

      switch (this.options.theme) {
        case 'barebones':
          this.theme = new barebones();
          break;

        case 'bootstrap4':
          this.theme = new bootstrap4();
          break;

        case 'bootstrap5':
          this.theme = new bootstrap5();
          break;

        case 'wireframe':
          this.theme = new wireframe();
          break;
      }

      this.refParser.dereference(this.schema.schema);
      this.root = this.createEditor({
        jedi: this,
        schema: this.schema
      });

      if (this.options.startval) {
        this.root.setValue(this.options.startval);
      }

      this.hiddenInput = this.theme.getInput({
        type: 'hidden',
        id: 'jedi-hidden-input'
      });
      this.hiddenInput.setAttribute('name', 'json');
      this.container.appendChild(this.hiddenInput);
      this.hiddenInput.value = JSON.stringify(this.getValue());
      this.container.appendChild(this.root.container);
      this.container.classList.add('jedi-ready');
      this.emit('change');

      this.root.onChange = function () {
        _this.emit('change');

        _this.hiddenInput.value = JSON.stringify(_this.getValue());
      };

      this.getValue();
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
      this.root.disable();
    }
  }, {
    key: "enable",
    value: function enable() {
      this.root.enable();
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this2 = this;

      Object.keys(this.editors).forEach(function (key) {
        var editor = _this2.editors[key];
        _this2.errors = [].concat(toConsumableArray_default()(_this2.errors), toConsumableArray_default()(editor.validate()));
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
      var listener = this.listeners.find(function (listener) {
        return listener.name === name;
      });

      if (listener) {
        listener.callback();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;

      this.root.destroy();
      this.container.innerHTML = '';
      Object.keys(this).forEach(function (key) {
        delete _this3[key];
      });
    }
  }]);

  return Jedi;
}();

/* harmony default export */ var src = __webpack_exports__["default"] = (src_Jedi);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy93aXJlZnJhbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWVCYXJlYm9uZXMiLCJjb25maWciLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwibWVzc2FnZSIsImFjdGlvbnNTbG90IiwiY2hpbGRFZGl0b3JzU2xvdCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsInZhbHVlIiwiY29udGFpbmVyIiwibWVzc2FnZXNTbG90IiwibGFiZWwiLCJsZWdlbmQiLCJzck9ubHkiLCJpbnB1dCIsInR5cGUiLCJpZCIsImNoZWNrYm94IiwicmFkaW8iLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvblZhbHVlcyIsImZvckVhY2giLCJpbmRleCIsIm9wdGlvbiIsIm9wdGlvbnNMYWJlbHMiLCJhcHBlbmRDaGlsZCIsIlRoZW1lV2lyZWZyYW1lIiwiYnRuR3JvdXAiLCJmaWVsZHNldCIsImNoZWNrYm94Q29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVxdWFsIiwiYSIsImIiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJpc1NldCIsImlzTm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsImlzT2JqZWN0IiwiZ2V0VHlwZSIsInV1aWR2NCIsInY0IiwibWVyZ2VEZWVwIiwidGFyZ2V0Iiwic291cmNlcyIsImxlbmd0aCIsInNvdXJjZSIsInNoaWZ0Iiwia2V5IiwiT2JqZWN0IiwiYXNzaWduIiwiRWRpdG9yIiwiamVkaSIsInNjaGVtYSIsImRpc2FibGVkIiwidW5kZWZpbmVkIiwicGF0aCIsInBhcmVudCIsInRoZW1lIiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZEVkaXRvcnNTbG90IiwiY2hpbGRFZGl0b3JzIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwic2V0Q29udGFpbmVyIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInByZXBhcmUiLCJidWlsZCIsInJlZnJlc2hVSSIsInJlYWR5Iiwib3B0aW9ucyIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsInNwbGl0IiwicG9wIiwiZ2V0Q29udGFpbmVyIiwicmVnaXN0ZXJFZGl0b3IiLCJ1bnJlZ2lzdGVyRWRpdG9yIiwiaW5jbHVkZXMiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwic2FuaXRpemUiLCJvbkNoYW5nZSIsIm9uU2V0VmFsdWUiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0ZSIsImdldFZhbHVlIiwiZ2V0S2V5IiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwiZ2V0SW5wdXRFcnJvciIsIm9uQ2hpbGRFZGl0b3JDaGFuZ2UiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ1bnJlZ2lzdGVyIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU2NoZW1hIiwiYWxsT2YiLCJhbnlPZiIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsIml0ZW1zIiwibWF4aW11bSIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90IiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIkFycmF5RWRpdG9yIiwiZ2V0QnRuR3JvdXAiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsIndpbmRvdyIsImNvbmZpcm0iLCJzZXRWYWx1ZSIsImdldEZpZWxkc2V0IiwiZ2V0TGVnZW5kIiwiZ2V0RGVzY3JpcHRpb24iLCJpdGVtRWRpdG9yIiwiY3JlYXRlRWRpdG9yIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1FZGl0b3IiLCJwdXNoIiwiZGVzdHJveSIsImN1cnJlbnRWYWx1ZSIsImZpbHRlciIsImNoaWxkRWRpdG9yIiwiZWRpdG9yIiwiaXRlbVZhbHVlIiwiYnV0dG9ucyIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRCdXR0b25zIiwiY29uY2F0IiwiZGlzYWJsZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkJvb2xlYW5FZGl0b3IiLCJnZXRDaGVja2JveENvbnRhaW5lciIsImdldENoZWNrYm94TGFiZWwiLCJnZXRDaGVja2JveCIsImNoZWNrZWQiLCJCb29sZWFuIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRMYWJlbCIsImdldFNlbGVjdCIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJyYWRpb0NvbnRhaW5lciIsImdldFJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW8iLCJyYWRpb1ZhbHVlIiwicXVlcnlTZWxlY3RvciIsInJhZGlvSW5wdXRzIiwiT2JqZWN0RWRpdG9yIiwic2hvd1JlcXVpcmVkT25seSIsImlzTm90UmVxdWlyZWQiLCJwcm9wZXJ0eSIsImFkZENoaWxkRWRpdG9yIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImVkaXRhYmxlUHJvcGVydGllcyIsImdldElucHV0IiwibWlzc2luZ1Byb3BlcnRpZXMiLCJrZXlzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwibm90UmVxdWlyZWQiLCJpc1JlcXVpcmVkIiwibm90RGVwZW5kZW50UmVxdWlyZWQiLCJyZW1vdmVCdG4iLCJpIiwiZmluZCIsImRlbGV0ZUNoaWxkRWRpdG9yIiwiZ2V0Q2hpbGRFZGl0b3IiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIlN0cmluZ0VkaXRvciIsImZvcm1hdElzIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhIiwiU3RyaW5nIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIk11bHRpcGxlRWRpdG9yIiwiZWRpdG9ycyIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiYWN0aXZlRWRpdG9yIiwibGFzdEluZGV4Iiwic2NoZW1hcyIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0eXBlcyIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsInN3aXRjaGVyQnV0dG9ucyIsInN3aXRjaGVyIiwic3dpdGNoRWRpdG9yIiwibmV3SW5kZXgiLCJvbGRFZGl0b3IiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsInJlbW92ZSIsIm1hdGNoRWRpdG9yIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bGxFZGl0b3IiLCJSZXNvbHZlciIsInJlc29sdmVycyIsInJlc29sdmUiLCJvcmlnaW5hbFNjaGVtYSIsIm5ld1NjaGVtYSIsInR5cGVJc051bWVyaWMiLCJyZXNvbHZlciIsInVuc2hpZnQiLCJlZGl0b3JDbGFzcyIsIlZhbGlkYXRvciIsInZhbGlkYXRvcnMiLCJhbGxPZkVycm9ycyIsInZhbGlkIiwic29tZSIsImFueU9mRXJyb3JzIiwiZmllbGQiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJqb2luIiwiZSIsImNvbXB1dGVkTWF4aW11bSIsImNvbXB1dGVkTWluaW11bSIsInJlZ2V4cCIsIlJlZ0V4cCIsInRlc3QiLCJpZkVkaXRvciIsIkplZGkiLCJzdGFydHZhbCIsImlmRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJwcm9wZXJ0aWVzQ291bnQiLCJpc011bHRpcGxlT2YiLCJub3RFcnJvcnMiLCJjb3VudGVyIiwib25lT2ZFcnJvcnMiLCJwcm9wZXJ0eU5hbWUiLCJzdHJpbmciLCJudW1iZXIiLCJpbnRlZ2VyIiwiYXJyYXkiLCJvYmplY3QiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwic2NoZW1hRXJyb3JzIiwidmFsaWRhdG9yRXJyb3JzIiwiUmVmUGFyc2VyIiwiaXRlcmF0aW9ucyIsImRlZnMiLCJ0cmF2ZXJzZSIsInJlZiIsInN0YXJ0c1dpdGgiLCJyZWZQYXJ0cyIsImRlZk5hbWUiLCJkZWZpbmUiLCJyb290IiwibGlzdGVuZXJzIiwicmVmUGFyc2VyIiwiZGVyZWZlcmVuY2UiLCJoaWRkZW5JbnB1dCIsImVtaXQiLCJhcmd1bWVudHMiLCJyZXNldCIsIm5hbWUiLCJjYWxsYmFjayIsImxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtR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O01BRUEsS0FBS3BLLFNBQUwsQ0FBZWlHLFNBQWYsR0FBMkIsRUFBM0I7TUFFQTFDLE1BQU0sQ0FBQ29KLElBQVAsQ0FBWSxJQUFaLEVBQWtCOUwsT0FBbEIsQ0FBMEIsVUFBQ3lDLEdBQUQsRUFBUztRQUNqQyxPQUFPLE1BQUksQ0FBQ0EsR0FBRCxDQUFYO01BQ0QsQ0FGRDtJQUdEOzs7Ozs7QUFHWWdPLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcbiIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImNsYXNzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3Rpb25zU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aW9uc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBhY3Rpb25zU2xvdFxuICB9XG5cbiAgZ2V0Q2hpbGRFZGl0b3JzU2xvdCAoKSB7XG4gICAgY29uc3QgY2hpbGRFZGl0b3JzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hpbGRFZGl0b3JzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGNoaWxkRWRpdG9yc1Nsb3RcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgbWVzc2FnZXNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gbWVzc2FnZXNTbG90XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZVdpcmVmcmFtZSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogYXV0bzsnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4tZm9jdXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbmV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSAhPT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc05vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc0ludGVnZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdpbnRlZ2VyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgdXVpZHY0ID0gKCkgPT4ge1xuICByZXR1cm4gdjQoKVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgICBba2V5XToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy5qZWRpLnRoZW1lLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IHRoaXMuamVkaS50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90ID0gdGhpcy5qZWRpLnRoZW1lLmdldENoaWxkRWRpdG9yc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgYnVpbGQgcGlwZWxpbmUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgIGlmICh0aGlzLmplZGkucmVhZHkgfHwgdGhpcy5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuICB9XG5cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5wYXRoKVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBidWlsZCB0aGUgZWRpdG9yJ3MgdXNlciBpbnRlcmZhY2VcbiAgICovXG4gIGJ1aWxkICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGluIHRoZSBqZWRpLmVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGlzIGVkaXRvciBpbnN0YW5jZSBmcm9tIHRoZSBqZWRpLmVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3RlckVkaXRvcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIElmIHNjaGVtYS5kZWZhdWx0IGlzIG5vdCBkZWZpbmVkLCBzZXRzIGFuIGluaXRpYWwgdmFsdWUgYmFzZWQgb24gaXQncyB0eXBlLlxuICAgKi9cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgaWYgKHRoaXMuc2NoZW1hLmVudW0oKSAmJiAhdGhpcy5zY2hlbWEuZW51bSgpLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZSB2YWx1ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWRpdG9yIHZhbHVlIGFuZCBjYWxscyByZWZyZXNoVUkgcmlnaHQgYWZ0ZXIuIFRoZSBvbkNoYW5nZSBtZXRob2RcbiAgICogd2lsbCBiZSBjYWxsZWQgdW5sZXNzIHRyaWdnZXJzQ2hhbmdlIGlzIGV4cGxpY2l0bHkgc2V0IHRvIGZhbHNlLiBUaGlzIGlzXG4gICAqIHVzZWZ1bCBmb3IgaW5pdGlhbCBvciBkZWZhdWx0IHZhbHVlcy5cbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgbmV3VmFsdWUgPSB0aGlzLnNhbml0aXplKG5ld1ZhbHVlKVxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLm9uU2V0VmFsdWUoKVxuXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIFVJIG9mIHRoZSBlZGl0b3IgdG8gcmVmbGVjdCBpdCdzIHZhbHVlLiBUaGlzIGlzIG5lY2Vzc2FyeSB3aGVuXG4gICAqIHVzaW5nIHNldFZhbHVlIHRvIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgdmFsaWRhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGUoKVxuXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldElucHV0RXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICB9KSlcbiAgICB9KVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgZWRpdG9yIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZSAoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC5vbkNoaWxkRWRpdG9yQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiBhIGNoaWxkIGVkaXRvciBjaGFuZ2VzLiBUaGlzIGlzIHJlbGV2YW50IGZvciBBcnJheVxuICAgKiBhbmQgT2JqZWN0IGVkaXRvcnMuXG4gICAqL1xuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yLCBhbmQgZXZlcnkgcmVmZXJlbmNlIHRoYXQgaXQgaXMgYXR0YWNoZWQgdG8gaXQuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcywga2V5KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IGZhbHNlXG4gIH1cblxuICBhbnlPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYW55T2YpID8gdGhpcy5zY2hlbWEuYW55T2YgOiBmYWxzZVxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdCA/IHRoaXMuc2NoZW1hLmNvbnN0IDogZmFsc2VcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdCA/IHRoaXMuc2NoZW1hLmRlZmF1bHQgOiBmYWxzZVxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IGZhbHNlXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogZmFsc2VcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiBmYWxzZVxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm1hdCgpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pZikgPyB0aGlzLnNjaGVtYS5pZiA6IGZhbHNlXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgPyB0aGlzLnNjaGVtYS5ub3QgOiBmYWxzZVxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydHkgKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldID8gdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldIDogZmFsc2VcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICByZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQpXSA6IGZhbHNlXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgPyB0aGlzLnNjaGVtYS50aGVuIDogZmFsc2VcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiBmYWxzZVxuICB9XG5cbiAgdHlwZSAoKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLnR5cGUoKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlcyAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSlcbiAgfVxuXG4gIHR5cGVJc051bWVyaWMgKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVJcygnbnVtYmVyJykgfHwgdGhpcy50eXBlSXMoJ2ludGVnZXInKVxuICB9XG5cbiAgb25lT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLm9uZU9mKSA/IHRoaXMuc2NoZW1hLm9uZU9mIDogZmFsc2VcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIHNlcmlhbGl6ZSAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcywga2V5KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2hpbGRFZGl0b3JzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuXG4gICAgLy8gYnRuIGdyb3VwXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmplZGkudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gICAgdGhpcy5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVtRWRpdG9yICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG5cbiAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVkaXRvci5hY3Rpb25zU2xvdClcbiAgICBpdGVtRWRpdG9yLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IuZ2V0S2V5KCkpXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgfSlcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgdGhpcy5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgIH0pXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgIH0pXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbUVkaXRvclxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlJykpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGNoaWxkRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKGl0ZW1WYWx1ZSlcbiAgICAgIGl0ZW1FZGl0b3Iuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goaXRlbUVkaXRvcilcblxuICAgICAgbGV0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZEJ1dHRvbnMgPSBBcnJheS5mcm9tKGNoaWxkRWRpdG9yLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSlcbiAgICAgICAgYnV0dG9ucyA9IGJ1dHRvbnMuY29uY2F0KGNoaWxkQnV0dG9ucylcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGl0ZW1FZGl0b3IuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbUVkaXRvci5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRkQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICBjaGlsZEVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGZpZWxkc2V0XG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuXG4gICAgLy8gbGVnZW5kXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgfSkpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ZpZWxkc2V0JylcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZXF1YWwsIGlzU2V0LCBnZXRUeXBlLCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICAvLyBjaGlsZCBlZGl0b3JzXG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSwga2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93UmVxdWlyZWRPbmx5ID0gdGhpcy5qZWRpLm9wdGlvbnMuc2hvd1JlcXVpcmVkT25seSB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ3Nob3dSZXF1aXJlZE9ubHknKVxuICAgICAgICBjb25zdCBpc05vdFJlcXVpcmVkID0gIXRoaXMuc2NoZW1hLnJlcXVpcmVkKCkgfHwgIXRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMoa2V5KVxuXG4gICAgICAgIGlmIChzaG93UmVxdWlyZWRPbmx5ICYmIGlzTm90UmVxdWlyZWQpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICB0aGlzLmFkZENoaWxkRWRpdG9yKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBkZXBlbmRlbnQgcmVxdWlyZWQgcHJvcGVydGllc1xuICAgIGlmICh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCksIGtleSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEZXBlbmRlbnRSZXF1aXJlZChrZXkpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICAgIHRoaXMuYWRkQ2hpbGRFZGl0b3Ioc2NoZW1hLCBrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICAvLyBhZGRCdG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJykpIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0eSBOYW1lJyxcbiAgICAgICAgZm9yOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMucGF0aFxuICAgICAgfSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLnBhdGhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgICB9KVxuXG4gICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGlucHV0LnZhbHVlXG5cbiAgICAgICAgLy8gaWYgbm90IHByb3BlcnR5IG5hbWUgd2FzIGdpdmVuIHJldHVyblxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcHJvcGVydHkgZXhpc3QgcmV0dXJuXG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZENoaWxkRWRpdG9yKHsgdHlwZTogJ2FueScgfSwga2V5KVxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpXG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucmVxdWlyZWQoKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGRlcGVuZGVudFJlcXVpcmVkKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgYWRkQ2hpbGRFZGl0b3IgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICAvLyByZW1vdmVCdG5cbiAgICBjb25zdCBub3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IG5vdERlcGVuZGVudFJlcXVpcmVkID0gIXRoaXMuaXNEZXBlbmRlbnRSZXF1aXJlZChrZXkpXG4gICAgY29uc3QgZWRpdGFibGVQcm9wZXJ0aWVzID0gdGhpcy5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChub3RSZXF1aXJlZCAmJiBub3REZXBlbmRlbnRSZXF1aXJlZCAmJiBlZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ1JlbW92ZSBwcm9wZXJ0eSdcbiAgICAgIH0pXG4gICAgICBlZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bilcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMudmFsdWVba2V5XVxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goZWRpdG9yKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGVkaXRvci5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZEVkaXRvciAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmNoaWxkRWRpdG9yc1tpXVxuICAgICAgaWYgKGVkaXRvci5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZEVkaXRvcnMuc3BsaWNlKGksIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DaGlsZEVkaXRvckNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIHZhbHVlW2NoaWxkRWRpdG9yLmdldEtleSgpXSA9IGNoaWxkRWRpdG9yLmdldFZhbHVlKClcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGdldENoaWxkRWRpdG9yIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZEVkaXRvcnMuZmluZCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGNoaWxkRWRpdG9yLmdldEtleSgpLnNwbGl0KCcuJykucG9wKClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmNoaWxkRWRpdG9yc1tpXVxuICAgICAgY29uc3Qga2V5ID0gZWRpdG9yLmdldEtleSgpXG4gICAgICBpZiAoIWlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlQ2hpbGRFZGl0b3Ioa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZEVkaXRvciA9IHRoaXMuZ2V0Q2hpbGRFZGl0b3Ioa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBlZGl0b3JcbiAgICAgIGlmIChjaGlsZEVkaXRvcikge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkRWRpdG9yLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmICghZXF1YWwob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkRWRpdG9yLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBlZGl0b3IgZm9yIHRoZSBuZXcgdmFsdWUgZW50cnkgaGF2aW5nIHRoZSB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoaW5pdGlhbFZhbHVlKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRlZmF1bHQ6IGluaXRpYWxWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZEVkaXRvcihzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGRFZGl0b3IgPSB0aGlzLmdldENoaWxkRWRpdG9yKGtleSlcblxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LmFwcGVuZENoaWxkKGNoaWxkRWRpdG9yLmNvbnRhaW5lcilcblxuICAgICAgaWYgKGNoaWxkRWRpdG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3IuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3IuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICBpZiAoIXRoaXMuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgICB9KSlcblxuICAgICAgLy8gZGVzY3JpcHRpb25cbiAgICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIGNoaWxkRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRUZXh0YXJlYSh7XG4gICAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogdGhpcy5wYXRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZmlyc3RPcHRpb24gPSB0aGlzLm9wdGlvblZhbHVlc1swXVxuICAgIC8vXG4gICAgLy8gaWYgKGZpcnN0T3B0aW9uKSB7XG4gICAgLy8gICB0aGlzLnNldFZhbHVlKGZpcnN0T3B0aW9uLCBmYWxzZSlcbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZmllbGRzZXRcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG5cbiAgICAvLyBsZWdlbmRcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICB9KSlcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMub3B0aW9uVmFsdWVzWzBdXG4gICAgLy9cbiAgICAvLyBpZiAoZmlyc3RPcHRpb24pIHtcbiAgICAvLyAgIHRoaXMuc2V0VmFsdWUoZmlyc3RPcHRpb24sIGZhbHNlKVxuICAgIC8vIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdmaWVsZHNldCcpXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXG5cbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCwgZXF1YWwsIG1lcmdlRGVlcCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuZWRpdG9ycyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG5cbiAgICBsZXQgc2NoZW1hcyA9IFtdXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuYW55T2YoKSB8fCB0aGlzLnNjaGVtYS5vbmVPZigpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSB0aGlzLnNjaGVtYS5hbnlPZigpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKHNjaGVtYS5hbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuICAgICAgICBzY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVzKCkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHNjaGVtYXMucHVzaChzY2hlbWEpXG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gRWRpdG9yc1xuICAgIHNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBlZGl0b3IudW5yZWdpc3RlcigpXG5cbiAgICAgIGVkaXRvci5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gc3dpdGNoZXIgYnV0dG9uc1xuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zID0gW11cbiAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHZhbHVlOiBpbmRleFxuICAgICAgfSlcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihidXR0b24udmFsdWUpXG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcblxuICAgIGlmIChpc1NldCh0aGlzLmVkaXRvcnNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEVkaXRvcigwLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hFZGl0b3IgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IHRoaXMuZWRpdG9yc1t0aGlzLmluZGV4XVxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ211bHRpcGxlJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdHJ1ZVxuICAgIH0pKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRFZGl0b3IgPSB0aGlzLmVkaXRvcnNbdGhpcy5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkRWRpdG9yLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRFZGl0b3IuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aXZlRWRpdG9yLmNvbnRhaW5lcilcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZUVkaXRvci5kaXNhYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUVkaXRvci5lbmFibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRWRpdG9yLmdldFZhbHVlKClcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5hY3RpdmVFZGl0b3Iuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRWRpdG9yLnNhbml0aXplKHZhbHVlKVxuICB9XG5cbiAgbWF0Y2hFZGl0b3IgKHZhbHVlLCBlZGl0b3JzKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgZm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuICAgICAgaWYgKGVkaXRvci5lZGl0b3JzKSB7XG4gICAgICAgIGVkaXRvci5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVxdWFsKGVkaXRvci5zYW5pdGl6ZSh2YWx1ZSksIHZhbHVlKSkge1xuICAgICAgICB0aGlzLnN3aXRjaEVkaXRvcihpbmRleClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlICh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGVkaXRvciB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGVkaXRvciB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoIWVxdWFsKHRoaXMuYWN0aXZlRWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICB0aGlzLm1hdGNoRWRpdG9yKHZhbHVlLCB0aGlzLmVkaXRvcnMpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVFZGl0b3Iuc2V0VmFsdWUodmFsdWUsIHRyaWdnZXJzQ2hhbmdlKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZmlyc3RPcHRpb24gPSB0aGlzLm9wdGlvblZhbHVlc1swXVxuICAgIC8vXG4gICAgLy8gaWYgKGZpcnN0T3B0aW9uKSB7XG4gICAgLy8gICB0aGlzLnNldFZhbHVlKGZpcnN0T3B0aW9uLCBmYWxzZSlcbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZmllbGRzZXRcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG5cbiAgICAvLyBsZWdlbmRcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgfSkpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZmlyc3RPcHRpb24gPSB0aGlzLm9wdGlvblZhbHVlc1swXVxuICAgIC8vXG4gICAgLy8gaWYgKGZpcnN0T3B0aW9uKSB7XG4gICAgLy8gICB0aGlzLnNldFZhbHVlKGZpcnN0T3B0aW9uLCBmYWxzZSlcbiAgICAvLyB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKVxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gZmllbGRzZXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxuXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuZ2V0VmFsdWUoKSkpXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgeyBpc1NldCwgZ2V0VHlwZSwgbWVyZ2VEZWVwIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9vYmplY3QnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bGwnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuXG5jbGFzcyBSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShtZXJnZWQpXG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLmFueU9mKCkgfHwgc2NoZW1hLm9uZU9mKCkgfHwgc2NoZW1hLnR5cGVJcygnYW55JykgfHwgc2NoZW1hLnR5cGVzKCkgfHwgIXNjaGVtYS50eXBlKCkpIHtcbiAgICAgICAgICBpZiAoIXNjaGVtYS50eXBlKCkgJiYgc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBzY2hlbWEuY2xvbmUoKVxuICAgICAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKG5ld1NjaGVtYSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZUVkaXRvcihjb25maWcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCb29sZWFuRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE9iamVjdEVkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFycmF5RWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgc2NoZW1hLmVudW0oKSAmJiBzY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHNjaGVtYS5lbnVtKCkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBzY2hlbWEuZW51bSgpICYmIHNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBzY2hlbWEuZW51bSgpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBOdWxsRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVzb2x2ZXIgZnVuY3Rpb25cbiAgICovXG4gIGFkZFJlc29sdmVyIChyZXNvbHZlcikge1xuICAgIHRoaXMucmVzb2x2ZXJzLnVuc2hpZnQocmVzb2x2ZXIpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKGNvbmZpZykge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoY29uZmlnLnNjaGVtYSwgY29uZmlnKVxuICAgICAgaWYgKGlzU2V0KGVkaXRvckNsYXNzKSkge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgSmVkaSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gW1xuICAgICAgJ2RlcGVuZGVudFJlcXVpcmVkJyxcbiAgICAgICdmb3JtYXQnLFxuICAgICAgJ2lmJyxcbiAgICAgICdjb25zdCcsXG4gICAgICAnbm90JyxcbiAgICAgICd0eXBlJyxcbiAgICAgICd1bmlxdWVJdGVtcycsXG4gICAgICAnZXhjbHVzaXZlTWF4aW11bScsXG4gICAgICAnZXhjbHVzaXZlTWluaW11bScsXG4gICAgICAnbWluSXRlbXMnLFxuICAgICAgJ21heEl0ZW1zJyxcbiAgICAgICdtaW5MZW5ndGgnLFxuICAgICAgJ21heExlbmd0aCcsXG4gICAgICAnbWluaW11bScsXG4gICAgICAnbWF4aW11bScsXG4gICAgICAnbXVsdGlwbGVPZicsXG4gICAgICAncGF0dGVybicsXG4gICAgICAncGF0dGVyblByb3BlcnRpZXMnLFxuICAgICAgJ2VudW0nLFxuICAgICAgJ3JlcXVpcmVkJyxcbiAgICAgICdtaW5Qcm9wZXJ0aWVzJyxcbiAgICAgICdtYXhQcm9wZXJ0aWVzJyxcbiAgICAgICdhbGxPZicsXG4gICAgICAnYW55T2YnLFxuICAgICAgJ29uZU9mJ1xuICAgIF1cbiAgfVxuXG4gIGFsbE9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbE9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFsbE9mRXJyb3JzXVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBhbnlPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuYW55T2YoKSkge1xuICAgICAgY29uc3QgdmFsaWQgPSBzY2hlbWEuYW55T2YoKS5zb21lKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgICAgcmV0dXJuIGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMFxuICAgICAgfSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBtdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgY29uc3QgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmNvbnN0KCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdmFsdWU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGVudW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmVudW0oKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSAtIDEpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpICsgMSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBmb3JtYXQgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdCgpKSB7XG4gICAgICBsZXQgaW52YWxpZCA9IGZhbHNlXG5cbiAgICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgICAgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuaWYoKSkge1xuICAgICAgaWYgKCFzY2hlbWEudGhlbigpIHx8ICFzY2hlbWEuZWxzZSgpKSB7XG4gICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgIH1cblxuICAgICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0dmFsOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG5cbiAgICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydHZhbDogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0dmFsOiB2YWx1ZSB9KVxuICAgICAgICBlcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhpbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWF4aW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heEl0ZW1zICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS5tYXhJdGVtcygpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhMZW5ndGggKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5tYXhMZW5ndGgoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pbmltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5taW5pbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5JdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWluSXRlbXMoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pbkxlbmd0aCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1pbkxlbmd0aCgpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtdWx0aXBsZU9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubXVsdGlwbGVPZigpKSB7XG4gICAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbm90ICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5ub3QoKSkge1xuICAgICAgY29uc3Qgbm90RXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEubm90KCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBvbmVPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEub25lT2YoKSkge1xuICAgICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBvbmVPZkVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcGF0dGVybiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm4oKSkge1xuICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkge1xuICAgICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuICAgICAgICAgICAgc2NoZW1hLnRpdGxlID0gcHJvcGVydHlOYW1lXG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICAgIHN0YXJ0dmFsOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHJlcXVpcmVkICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEucmVxdWlyZWQoKSkge1xuICAgICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHR5cGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLnR5cGVzKCkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuXG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICB1bmlxdWVJdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEudW5pcXVlSXRlbXMoKSkge1xuICAgICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdmFsaWRhdG9yIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRWYWxpZGF0b3IgKHZhbGlkYXRvcikge1xuICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKHZhbGlkYXRvcilcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB0aGlzW3ZhbGlkYXRvcl0odmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pdGVyYXRpb25zID0gNVxuICAgIHRoaXMuZGVmcyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgdGhpcy5kZWZzID0gc2NoZW1hWyckZGVmcyddXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZGVmcylcbiAgICAgIHRoaXMudHJhdmVyc2Uoc2NoZW1hKVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjLyRkZWZzJykpIHtcbiAgICAgIGNvbnN0IHJlZlBhcnRzID0gcmVmLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGRlZk5hbWUgPSByZWZQYXJ0cy5wb3AoKVxuXG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZzW2RlZk5hbWVdKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZzW2RlZk5hbWVdXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgdHJhdmVyc2UgKHZhbHVlLCB0aGluZywgaW5kZXgpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVbJyRyZWYnXSkgJiYgaXNTZXQodGhpbmcpKSB7XG4gICAgICAgIHRoaW5nW2luZGV4XSA9IHRoaXMuZGVmaW5lKHZhbHVlWyckcmVmJ10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGluZGV4KSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnRyYXZlcnNlKHZhbHVlW2luZGV4XSwgdmFsdWUsIGluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGl0ZW0sIHZhbHVlLCBpbmRleClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vdGhlbWVzL2JhcmVib25lcydcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuL3RoZW1lcy93aXJlZnJhbWUnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdG9yJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5cbmNsYXNzIEplZGkge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICd3aXJlZnJhbWUnXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lcikgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IFJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcigpXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKG9wdGlvbnMuc2NoZW1hKVxuICAgIHRoaXMuZXJyb3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd3aXJlZnJhbWUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lV2lyZWZyYW1lKClcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLnNjaGVtYS5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0dmFsKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0dmFsKVxuICAgIH1cblxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QuY29udGFpbmVyKVxuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB0aGlzLnJvb3Qub25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH1cbiAgICB0aGlzLmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGVkaXRvciBpbnN0YW5jZSBiYXNlZCBvbiB0aGUgcGFzc2VkIHNjaGVtYSBhbmQgY29uZmlnXG4gICAqL1xuICBjcmVhdGVFZGl0b3IgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVyLnJlc29sdmUoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG5cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LmRpc2FibGUoKVxuICB9XG5cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QuZW5hYmxlKClcbiAgfVxuXG4gIHZhbGlkYXRlICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmVkaXRvcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3JzW2tleV1cbiAgICAgIHRoaXMuZXJyb3JzID0gWy4uLnRoaXMuZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0dmFsID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHNldFRoZW1lICh0aGVtZSkge1xuICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzLmZpbmQobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=