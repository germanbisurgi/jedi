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
    key: "getRadioLegend",
    value: function getRadioLegend(config) {
      var label = document.createElement('p');
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

      this.container.appendChild(this.messagesSlot);
      this.radioInputs = []; // legend

      this.container.appendChild(this.jedi.theme.getRadioLegend({
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
        });

        _this.radioInputs.push(radio); // label


        radioContainer.appendChild(_this.jedi.theme.getLabel({
          "for": _this.path + '.' + index,
          textContent: _this.optionsLabels[index]
        }));

        _this.container.appendChild(radioContainer);
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

      this.radioInputs.forEach(function (radio) {
        var radioValue = radio.value === 'true';
        radio.checked = radioValue === _this2.getValue();
        radio.disabled = _this2.disabled;
      });
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

      this.container.appendChild(this.messagesSlot);
      this.radioInputs = []; // legend

      this.container.appendChild(this.jedi.theme.getRadioLegend({
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

        _this.radioInputs.push(radio); // label


        radioContainer.appendChild(_this.jedi.theme.getLabel({
          "for": _this.path + '.' + index,
          textContent: _this.optionsLabels[index]
        }));

        _this.container.appendChild(radioContainer);
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

      this.radioInputs.forEach(function (radio) {
        radio.checked = radio.value === _this2.getValue();
        radio.disabled = _this2.disabled;
      });
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

      this.container.appendChild(this.messagesSlot);
      this.radioInputs = []; // legend

      this.container.appendChild(this.jedi.theme.getRadioLegend({
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

        _this.radioInputs.push(radio); // label


        radioContainer.appendChild(_this.jedi.theme.getLabel({
          "for": _this.path + '.' + index,
          textContent: _this.optionsLabels[index]
        }));

        _this.container.appendChild(radioContainer);
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

      this.radioInputs.forEach(function (radio) {
        radio.checked = Number(radio.value) === Number(_this2.getValue());
        radio.disabled = _this2.disabled;
      });
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
    this.resolvers = [// (schema, config) => {
    //   if (schema.allOf()) {
    //     let merged = {}
    //
    //     schema.allOf().forEach((allOfSchema) => {
    //       merged = mergeDeep(merged, allOfSchema)
    //     })
    //
    //     config.schema = new Schema(merged)
    //
    //     return this.resolve(config)
    //   }
    // },
    function (schema, config) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy93aXJlZnJhbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWVCYXJlYm9uZXMiLCJjb25maWciLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwibWVzc2FnZSIsImFjdGlvbnNTbG90IiwiY2hpbGRFZGl0b3JzU2xvdCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsInZhbHVlIiwiY29udGFpbmVyIiwibWVzc2FnZXNTbG90IiwibGFiZWwiLCJsZWdlbmQiLCJzck9ubHkiLCJpbnB1dCIsInR5cGUiLCJpZCIsImNoZWNrYm94IiwicmFkaW8iLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvblZhbHVlcyIsImZvckVhY2giLCJpbmRleCIsIm9wdGlvbiIsIm9wdGlvbnNMYWJlbHMiLCJhcHBlbmRDaGlsZCIsIlRoZW1lV2lyZWZyYW1lIiwiYnRuR3JvdXAiLCJmaWVsZHNldCIsImNoZWNrYm94Q29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVxdWFsIiwiYSIsImIiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJpc1NldCIsImlzTm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsImlzT2JqZWN0IiwiZ2V0VHlwZSIsInV1aWR2NCIsInY0IiwibWVyZ2VEZWVwIiwidGFyZ2V0Iiwic291cmNlcyIsImxlbmd0aCIsInNvdXJjZSIsInNoaWZ0Iiwia2V5IiwiT2JqZWN0IiwiYXNzaWduIiwiRWRpdG9yIiwiamVkaSIsInNjaGVtYSIsImRpc2FibGVkIiwidW5kZWZpbmVkIiwicGF0aCIsInBhcmVudCIsInRoZW1lIiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZEVkaXRvcnNTbG90IiwiY2hpbGRFZGl0b3JzIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwic2V0Q29udGFpbmVyIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInByZXBhcmUiLCJidWlsZCIsInJlZnJlc2hVSSIsInJlYWR5Iiwib3B0aW9ucyIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsInNwbGl0IiwicG9wIiwiZ2V0Q29udGFpbmVyIiwicmVnaXN0ZXJFZGl0b3IiLCJ1bnJlZ2lzdGVyRWRpdG9yIiwiaW5jbHVkZXMiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwic2FuaXRpemUiLCJvbkNoYW5nZSIsIm9uU2V0VmFsdWUiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0ZSIsImdldFZhbHVlIiwiZ2V0S2V5IiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwiZ2V0SW5wdXRFcnJvciIsIm9uQ2hpbGRFZGl0b3JDaGFuZ2UiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ1bnJlZ2lzdGVyIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU2NoZW1hIiwiYWxsT2YiLCJhbnlPZiIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsIml0ZW1zIiwibWF4aW11bSIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90IiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIkFycmF5RWRpdG9yIiwiZ2V0QnRuR3JvdXAiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsIndpbmRvdyIsImNvbmZpcm0iLCJzZXRWYWx1ZSIsImdldEZpZWxkc2V0IiwiZ2V0TGVnZW5kIiwiZ2V0RGVzY3JpcHRpb24iLCJpdGVtRWRpdG9yIiwiY3JlYXRlRWRpdG9yIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1FZGl0b3IiLCJwdXNoIiwiZGVzdHJveSIsImN1cnJlbnRWYWx1ZSIsImZpbHRlciIsImNoaWxkRWRpdG9yIiwiZWRpdG9yIiwiaXRlbVZhbHVlIiwiYnV0dG9ucyIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRCdXR0b25zIiwiY29uY2F0IiwiZGlzYWJsZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkJvb2xlYW5FZGl0b3IiLCJnZXRDaGVja2JveENvbnRhaW5lciIsImdldENoZWNrYm94TGFiZWwiLCJnZXRDaGVja2JveCIsImNoZWNrZWQiLCJCb29sZWFuIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRMYWJlbCIsImdldFNlbGVjdCIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJyYWRpb0lucHV0cyIsImdldFJhZGlvTGVnZW5kIiwicmFkaW9Db250YWluZXIiLCJnZXRSYWRpb0NvbnRhaW5lciIsImdldFJhZGlvIiwicmFkaW9WYWx1ZSIsIk9iamVjdEVkaXRvciIsInNob3dSZXF1aXJlZE9ubHkiLCJpc05vdFJlcXVpcmVkIiwicHJvcGVydHkiLCJhZGRDaGlsZEVkaXRvciIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJnZXRJbnB1dCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwia2V5cyIsInJlcXVpcmVkUHJvcGVydGllcyIsIm5vdFJlcXVpcmVkIiwiaXNSZXF1aXJlZCIsIm5vdERlcGVuZGVudFJlcXVpcmVkIiwicmVtb3ZlQnRuIiwiaSIsImZpbmQiLCJkZWxldGVDaGlsZEVkaXRvciIsImdldENoaWxkRWRpdG9yIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJTdHJpbmdFZGl0b3IiLCJmb3JtYXRJcyIsImlucHV0VHlwZXMiLCJnZXRUZXh0YXJlYSIsIlN0cmluZyIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJNdWx0aXBsZUVkaXRvciIsImVkaXRvcnMiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsImFjdGl2ZUVkaXRvciIsImxhc3RJbmRleCIsInNjaGVtYXMiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidHlwZXMiLCJzY2hlbWFDbG9uZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJzd2l0Y2hlckJ1dHRvbnMiLCJzd2l0Y2hlciIsInN3aXRjaEVkaXRvciIsIm5ld0luZGV4Iiwib2xkRWRpdG9yIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJyZW1vdmUiLCJtYXRjaEVkaXRvciIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJOdWxsRWRpdG9yIiwiUmVzb2x2ZXIiLCJyZXNvbHZlcnMiLCJvcmlnaW5hbFNjaGVtYSIsIm5ld1NjaGVtYSIsInJlc29sdmUiLCJ0eXBlSXNOdW1lcmljIiwicmVzb2x2ZXIiLCJ1bnNoaWZ0IiwiZWRpdG9yQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwiYWxsT2ZFcnJvcnMiLCJ2YWxpZCIsInNvbWUiLCJhbnlPZkVycm9ycyIsImZpZWxkIiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJpbnZhbGlkIiwiam9pbiIsImUiLCJjb21wdXRlZE1heGltdW0iLCJjb21wdXRlZE1pbmltdW0iLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0IiwiaWZFZGl0b3IiLCJKZWRpIiwic3RhcnR2YWwiLCJpZkVycm9ycyIsInRoZW5FZGl0b3IiLCJlbHNlRWRpdG9yIiwicHJvcGVydGllc0NvdW50IiwiaXNNdWx0aXBsZU9mIiwibm90RXJyb3JzIiwiY291bnRlciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwic3RyaW5nIiwibnVtYmVyIiwiaW50ZWdlciIsImFycmF5Iiwib2JqZWN0Iiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsInNjaGVtYUVycm9ycyIsInZhbGlkYXRvckVycm9ycyIsIlJlZlBhcnNlciIsIml0ZXJhdGlvbnMiLCJkZWZzIiwidHJhdmVyc2UiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVmUGFydHMiLCJkZWZOYW1lIiwiZGVmaW5lIiwicXVlcnlTZWxlY3RvciIsInJvb3QiLCJsaXN0ZW5lcnMiLCJyZWZQYXJzZXIiLCJkZXJlZmVyZW5jZSIsImhpZGRlbklucHV0IiwiZW1pdCIsImFyZ3VtZW50cyIsInJlc2V0IiwibmFtZSIsImNhbGxiYWNrIiwibGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLCtHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtHOzs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDRHOzs7Ozs7QUNuQkEscUJBQXFCLG1CQUFPLENBQUMsRUFBcUI7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEseUc7Ozs7OztBQ3BCQSxjQUFjLG1CQUFPLENBQUMsQ0FBYTs7QUFFbkMsNEJBQTRCLG1CQUFPLENBQUMsRUFBNEI7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEg7Ozs7OztBQ2RBLHdCQUF3QixtQkFBTyxDQUFDLEVBQXdCOztBQUV4RCxzQkFBc0IsbUJBQU8sQ0FBQyxFQUFzQjs7QUFFcEQsaUNBQWlDLG1CQUFPLENBQUMsRUFBaUM7O0FBRTFFLHdCQUF3QixtQkFBTyxDQUFDLEVBQXdCOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUEsa0g7Ozs7OztBQ1pBLG9CQUFvQixtQkFBTyxDQUFDLEVBQW9COztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsb0c7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsdUc7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlIOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtHOzs7Ozs7QUNmQSx1QkFBdUIsbUJBQU8sQ0FBQyxDQUF1Qjs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBLGtIOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUEsZ0g7Ozs7OztBQ0pBLHVCQUF1QixtQkFBTyxDQUFDLENBQXVCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJIOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7O0FBRUEsa0g7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsK0c7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0g7Ozs7OztBQ1JBLHFCQUFxQixtQkFBTyxDQUFDLENBQXFCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWE1BLHdCOzs7Ozs7O1dBQ0osdUJBQWVDLE1BQWYsRUFBdUI7TUFDckIsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDtNQUNBRixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLG9CQUFwQjtNQUNBSixLQUFLLENBQUNLLFdBQU4sR0FBb0JOLE1BQU0sQ0FBQ08sT0FBM0I7TUFDQSxPQUFPTixLQUFQO0lBQ0Q7OztXQUVELDBCQUFrQjtNQUNoQixJQUFNTyxXQUFXLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFwQjtNQUNBSyxXQUFXLENBQUNKLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLG1CQUExQjtNQUNBLE9BQU9HLFdBQVA7SUFDRDs7O1dBRUQsK0JBQXVCO01BQ3JCLElBQU1DLGdCQUFnQixHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBekI7TUFDQU0sZ0JBQWdCLENBQUNMLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQix5QkFBL0I7TUFDQSxPQUFPSSxnQkFBUDtJQUNEOzs7V0FFRCx1QkFBZTtNQUNiLE9BQU9QLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFQO0lBQ0Q7OztXQUVELG1CQUFXSCxNQUFYLEVBQW1CO01BQ2pCLElBQU1VLE1BQU0sR0FBR1IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7TUFDQU8sTUFBTSxDQUFDQyxZQUFQLENBQW9CLE1BQXBCLEVBQTRCLFFBQTVCO01BQ0FELE1BQU0sQ0FBQ0UsS0FBUCxHQUFlWixNQUFNLENBQUNZLEtBQXRCO01BQ0FGLE1BQU0sQ0FBQ0osV0FBUCxHQUFxQk4sTUFBTSxDQUFDTSxXQUE1QjtNQUNBLE9BQU9JLE1BQVA7SUFDRDs7O1dBRUQsZ0NBQXdCO01BQ3RCLE9BQU8sVUFBUDtJQUNEOzs7V0FFRCx3QkFBZ0I7TUFDZCxPQUFPUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUDtJQUNEOzs7V0FFRCx3QkFBZ0JILE1BQWhCLEVBQXdCO01BQ3RCLElBQU1hLFNBQVMsR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWxCO01BQ0FVLFNBQVMsQ0FBQ1AsV0FBVixHQUF3Qk4sTUFBTSxDQUFDTSxXQUEvQjtNQUNBLE9BQU9PLFNBQVA7SUFDRDs7O1dBRUQsdUJBQWU7TUFDYixPQUFPWCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBUDtJQUNEOzs7V0FFRCwyQkFBbUI7TUFDakIsSUFBTVcsWUFBWSxHQUFHWixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7TUFDQVcsWUFBWSxDQUFDVixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixvQkFBM0I7TUFDQSxPQUFPUyxZQUFQO0lBQ0Q7OztXQUVELDBCQUFrQmQsTUFBbEIsRUFBMEI7TUFDeEIsSUFBTWUsS0FBSyxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtNQUNBWSxLQUFLLENBQUNKLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEJYLE1BQU0sT0FBaEM7TUFDQWUsS0FBSyxDQUFDVCxXQUFOLEdBQW9CTixNQUFNLENBQUNNLFdBQTNCO01BQ0EsT0FBT1MsS0FBUDtJQUNEOzs7V0FFRCx3QkFBZ0JmLE1BQWhCLEVBQXdCO01BQ3RCLElBQU1lLEtBQUssR0FBR2IsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWQ7TUFDQVksS0FBSyxDQUFDVCxXQUFOLEdBQW9CTixNQUFNLENBQUNNLFdBQTNCO01BQ0EsT0FBT1MsS0FBUDtJQUNEOzs7V0FFRCx1QkFBZWYsTUFBZixFQUF1QjtNQUNyQixJQUFNZSxLQUFLLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO01BQ0FZLEtBQUssQ0FBQ0osWUFBTixDQUFtQixLQUFuQixFQUEwQlgsTUFBTSxPQUFoQztNQUNBZSxLQUFLLENBQUNULFdBQU4sR0FBb0JOLE1BQU0sQ0FBQ00sV0FBM0I7TUFDQSxPQUFPUyxLQUFQO0lBQ0Q7OztXQUVELGtCQUFVZixNQUFWLEVBQWtCO01BQ2hCLElBQU1lLEtBQUssR0FBR2IsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQVksS0FBSyxDQUFDSixZQUFOLENBQW1CLEtBQW5CLEVBQTBCWCxNQUFNLE9BQWhDO01BQ0FlLEtBQUssQ0FBQ1QsV0FBTixHQUFvQk4sTUFBTSxDQUFDTSxXQUEzQjtNQUNBLE9BQU9TLEtBQVA7SUFDRDs7O1dBRUQsZ0NBQXdCO01BQ3RCLE9BQU9iLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFQO0lBQ0Q7OztXQUVELDZCQUFxQjtNQUNuQixPQUFPRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUDtJQUNEOzs7V0FFRCxtQkFBV0gsTUFBWCxFQUFtQjtNQUNqQixJQUFNZ0IsTUFBTSxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtNQUNBYSxNQUFNLENBQUNWLFdBQVAsR0FBcUJOLE1BQU0sQ0FBQ00sV0FBNUI7TUFDQVUsTUFBTSxDQUFDTCxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLGNBQTdCOztNQUVBLElBQUlYLE1BQU0sQ0FBQ2lCLE1BQVgsRUFBbUI7UUFDakJELE1BQU0sQ0FBQ1osU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsU0FBckI7TUFDRDs7TUFFRCxPQUFPVyxNQUFQO0lBQ0Q7OztXQUVELGtCQUFVaEIsTUFBVixFQUFrQjtNQUNoQixJQUFNa0IsS0FBSyxHQUFHaEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQWUsS0FBSyxDQUFDUCxZQUFOLENBQW1CLE1BQW5CLEVBQTJCWCxNQUFNLENBQUNtQixJQUFsQztNQUNBRCxLQUFLLENBQUNQLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUJYLE1BQU0sQ0FBQ29CLEVBQWhDO01BQ0FGLEtBQUssQ0FBQ2QsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsY0FBcEI7TUFDQSxPQUFPYSxLQUFQO0lBQ0Q7OztXQUVELHFCQUFhbEIsTUFBYixFQUFxQjtNQUNuQixJQUFNcUIsUUFBUSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWpCO01BQ0FrQixRQUFRLENBQUNWLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEJYLE1BQU0sQ0FBQ29CLEVBQW5DO01BQ0FDLFFBQVEsQ0FBQ1YsWUFBVCxDQUFzQixNQUF0QixFQUE4QixVQUE5QjtNQUNBLE9BQU9VLFFBQVA7SUFDRDs7O1dBRUQsa0JBQVVyQixNQUFWLEVBQWtCO01BQ2hCLElBQU1zQixLQUFLLEdBQUdwQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtNQUNBbUIsS0FBSyxDQUFDWCxZQUFOLENBQW1CLE1BQW5CLEVBQTJCLE9BQTNCO01BQ0FXLEtBQUssQ0FBQ1gsWUFBTixDQUFtQixPQUFuQixFQUE0QlgsTUFBTSxDQUFDWSxLQUFuQztNQUNBVSxLQUFLLENBQUNYLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUJYLE1BQU0sQ0FBQ29CLEVBQWhDO01BQ0EsT0FBT0UsS0FBUDtJQUNEOzs7V0FFRCxxQkFBYXRCLE1BQWIsRUFBcUI7TUFDbkIsSUFBTXVCLFFBQVEsR0FBR3JCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFqQjtNQUNBb0IsUUFBUSxDQUFDWixZQUFULENBQXNCLElBQXRCLEVBQTRCWCxNQUFNLENBQUNvQixFQUFuQztNQUNBLE9BQU9HLFFBQVA7SUFDRDs7O1dBRUQsbUJBQVd2QixNQUFYLEVBQW1CO01BQ2pCLElBQU13QixNQUFNLEdBQUd0QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtNQUNBcUIsTUFBTSxDQUFDYixZQUFQLENBQW9CLElBQXBCLEVBQTBCWCxNQUFNLENBQUNvQixFQUFqQztNQUVBcEIsTUFBTSxDQUFDeUIsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBQ2QsS0FBRCxFQUFRZSxLQUFSLEVBQWtCO1FBQzVDLElBQU1DLE1BQU0sR0FBRzFCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO1FBQ0F5QixNQUFNLENBQUNqQixZQUFQLENBQW9CLE9BQXBCLEVBQTZCQyxLQUE3QjtRQUNBZ0IsTUFBTSxDQUFDdEIsV0FBUCxHQUFxQk4sTUFBTSxDQUFDNkIsYUFBUCxDQUFxQkYsS0FBckIsQ0FBckI7UUFDQUgsTUFBTSxDQUFDTSxXQUFQLENBQW1CRixNQUFuQjtNQUNELENBTEQ7TUFPQSxPQUFPSixNQUFQO0lBQ0Q7Ozs7OztBQUdZekIsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkpBOztJQUVNZ0Msd0I7Ozs7Ozs7Ozs7Ozs7V0FDSix1QkFBZS9CLE1BQWYsRUFBdUI7TUFDckIsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDtNQUNBRixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLG9CQUFwQjtNQUNBSixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCO01BQ0FKLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsY0FBcEI7TUFDQUosS0FBSyxDQUFDSyxXQUFOLEdBQW9CTixNQUFNLENBQUNPLE9BQTNCO01BQ0EsT0FBT04sS0FBUDtJQUNEOzs7V0FFRCx1QkFBZTtNQUNiLElBQU0rQixRQUFRLEdBQUc5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7TUFDQTZCLFFBQVEsQ0FBQzVCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFdBQXZCO01BQ0EsT0FBTzJCLFFBQVA7SUFDRDs7O1dBRUQsbUJBQVdoQyxNQUFYLEVBQW1CO01BQ2pCLElBQU1VLE1BQU0sR0FBR1IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7TUFDQU8sTUFBTSxDQUFDTixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixLQUFyQjtNQUNBSyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsTUFBcEIsRUFBNEIsUUFBNUI7TUFDQUQsTUFBTSxDQUFDRSxLQUFQLEdBQWVaLE1BQU0sQ0FBQ1ksS0FBdEI7TUFDQUYsTUFBTSxDQUFDSixXQUFQLEdBQXFCTixNQUFNLENBQUNNLFdBQTVCO01BQ0EsT0FBT0ksTUFBUDtJQUNEOzs7V0FFRCx3QkFBZ0I7TUFDZCxJQUFNRyxTQUFTLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtNQUNBVSxTQUFTLENBQUNULFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFlBQXhCO01BQ0EsT0FBT1EsU0FBUDtJQUNEOzs7V0FFRCx1QkFBZTtNQUNiLElBQU1vQixRQUFRLEdBQUcvQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7TUFDQThCLFFBQVEsQ0FBQzdCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLE1BQXZCO01BQ0E0QixRQUFRLENBQUM3QixTQUFULENBQW1CQyxHQUFuQixDQUF1QixXQUF2QjtNQUNBLE9BQU80QixRQUFQO0lBQ0Q7OztXQUVELDBCQUFrQmpDLE1BQWxCLEVBQTBCO01BQ3hCLElBQU1lLEtBQUssR0FBR2IsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQVksS0FBSyxDQUFDWCxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixrQkFBcEI7TUFDQVUsS0FBSyxDQUFDSixZQUFOLENBQW1CLEtBQW5CLEVBQTBCWCxNQUFNLE9BQWhDO01BQ0FlLEtBQUssQ0FBQ1QsV0FBTixHQUFvQk4sTUFBTSxDQUFDTSxXQUEzQjtNQUNBLE9BQU9TLEtBQVA7SUFDRDs7O1dBRUQscUJBQWFmLE1BQWIsRUFBcUI7TUFDbkIsSUFBTXFCLFFBQVEsR0FBR25CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFqQjtNQUNBa0IsUUFBUSxDQUFDakIsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsa0JBQXZCO01BQ0FnQixRQUFRLENBQUNWLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEIsVUFBOUI7TUFDQVUsUUFBUSxDQUFDVixZQUFULENBQXNCLElBQXRCLEVBQTRCWCxNQUFNLENBQUNvQixFQUFuQztNQUNBLE9BQU9DLFFBQVA7SUFDRDs7O1dBRUQsNkJBQXFCO01BQ25CLElBQU1hLGlCQUFpQixHQUFHaEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTFCO01BQ0ErQixpQkFBaUIsQ0FBQzlCLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxZQUFoQztNQUNBNkIsaUJBQWlCLENBQUM5QixTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsbUJBQWhDO01BQ0EsT0FBTzZCLGlCQUFQO0lBQ0Q7OztXQUVELHVCQUFlbEMsTUFBZixFQUF1QjtNQUNyQixJQUFNZSxLQUFLLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO01BQ0FZLEtBQUssQ0FBQ1gsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0Isa0JBQXBCO01BQ0FVLEtBQUssQ0FBQ0osWUFBTixDQUFtQixLQUFuQixFQUEwQlgsTUFBTSxPQUFoQztNQUNBZSxLQUFLLENBQUNULFdBQU4sR0FBb0JOLE1BQU0sQ0FBQ00sV0FBM0I7TUFDQSxPQUFPUyxLQUFQO0lBQ0Q7OztXQUVELGtCQUFVZixNQUFWLEVBQWtCO01BQ2hCLElBQU1zQixLQUFLLEdBQUdwQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtNQUNBbUIsS0FBSyxDQUFDbEIsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0Isa0JBQXBCO01BQ0FpQixLQUFLLENBQUNYLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsT0FBM0I7TUFDQVcsS0FBSyxDQUFDWCxZQUFOLENBQW1CLE9BQW5CLEVBQTRCWCxNQUFNLENBQUNZLEtBQW5DO01BQ0FVLEtBQUssQ0FBQ1gsWUFBTixDQUFtQixJQUFuQixFQUF5QlgsTUFBTSxDQUFDb0IsRUFBaEM7TUFDQSxPQUFPRSxLQUFQO0lBQ0Q7OztXQUVELHFCQUFhdEIsTUFBYixFQUFxQjtNQUNuQixJQUFNdUIsUUFBUSxHQUFHckIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWpCO01BQ0FvQixRQUFRLENBQUNaLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEJYLE1BQU0sQ0FBQ29CLEVBQW5DO01BQ0FHLFFBQVEsQ0FBQ25CLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGNBQXZCO01BQ0EsT0FBT2tCLFFBQVA7SUFDRDs7O1dBRUQsbUJBQVd2QixNQUFYLEVBQW1CO01BQ2pCLElBQU13QixNQUFNLEdBQUd0QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtNQUNBcUIsTUFBTSxDQUFDYixZQUFQLENBQW9CLElBQXBCLEVBQTBCWCxNQUFNLENBQUNvQixFQUFqQztNQUNBSSxNQUFNLENBQUNwQixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixjQUFyQjtNQUVBTCxNQUFNLENBQUN5QixZQUFQLENBQW9CQyxPQUFwQixDQUE0QixVQUFDZCxLQUFELEVBQVFlLEtBQVIsRUFBa0I7UUFDNUMsSUFBTUMsTUFBTSxHQUFHMUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7UUFDQXlCLE1BQU0sQ0FBQ2pCLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkJDLEtBQTdCO1FBQ0FnQixNQUFNLENBQUN0QixXQUFQLEdBQXFCTixNQUFNLENBQUM2QixhQUFQLENBQXFCRixLQUFyQixDQUFyQjtRQUNBSCxNQUFNLENBQUNNLFdBQVAsQ0FBbUJGLE1BQW5CO01BQ0QsQ0FMRDtNQU9BLE9BQU9KLE1BQVA7SUFDRDs7OztFQWxHMEJ6QixTOztBQXFHZGdDLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZHQTs7SUFFTUksMEI7Ozs7Ozs7Ozs7Ozs7V0FDSix1QkFBZW5DLE1BQWYsRUFBdUI7TUFDckIsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZDtNQUNBRixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLG9CQUFwQjtNQUNBSixLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCO01BQ0FKLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsY0FBcEI7TUFDQUosS0FBSyxDQUFDSyxXQUFOLEdBQW9CTixNQUFNLENBQUNPLE9BQTNCO01BQ0EsT0FBT04sS0FBUDtJQUNEOzs7V0FFRCx1QkFBZTtNQUNiLElBQU0rQixRQUFRLEdBQUc5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7TUFDQTZCLFFBQVEsQ0FBQzVCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFdBQXZCO01BQ0EsT0FBTzJCLFFBQVA7SUFDRDs7O1dBRUQsbUJBQVdoQyxNQUFYLEVBQW1CO01BQ2pCLElBQU1VLE1BQU0sR0FBR1IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7TUFDQU8sTUFBTSxDQUFDTixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixLQUFyQjtNQUNBSyxNQUFNLENBQUNOLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGFBQXJCO01BQ0FLLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixNQUFwQixFQUE0QixRQUE1QjtNQUNBRCxNQUFNLENBQUNFLEtBQVAsR0FBZVosTUFBTSxDQUFDWSxLQUF0QjtNQUNBRixNQUFNLENBQUNKLFdBQVAsR0FBcUJOLE1BQU0sQ0FBQ00sV0FBNUI7TUFDQSxPQUFPSSxNQUFQO0lBQ0Q7OztXQUVELHdCQUFnQjtNQUNkLElBQU1HLFNBQVMsR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO01BQ0FVLFNBQVMsQ0FBQ1QsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsWUFBeEI7TUFDQSxPQUFPUSxTQUFQO0lBQ0Q7OztXQUVELHVCQUFlO01BQ2IsSUFBTW9CLFFBQVEsR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFqQjtNQUNBOEIsUUFBUSxDQUFDN0IsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsTUFBdkI7TUFDQTRCLFFBQVEsQ0FBQzdCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFdBQXZCO01BQ0E0QixRQUFRLENBQUM3QixTQUFULENBQW1CQyxHQUFuQixDQUF1QixNQUF2QjtNQUNBLE9BQU80QixRQUFQO0lBQ0Q7OztXQUVELDBCQUFrQmpDLE1BQWxCLEVBQTBCO01BQ3hCLElBQU1lLEtBQUssR0FBR2IsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7TUFDQVksS0FBSyxDQUFDWCxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixrQkFBcEI7TUFDQVUsS0FBSyxDQUFDSixZQUFOLENBQW1CLEtBQW5CLEVBQTBCWCxNQUFNLE9BQWhDO01BQ0FlLEtBQUssQ0FBQ1QsV0FBTixHQUFvQk4sTUFBTSxDQUFDTSxXQUEzQjtNQUNBLE9BQU9TLEtBQVA7SUFDRDs7O1dBRUQsdUJBQWVmLE1BQWYsRUFBdUI7TUFDckIsSUFBTWUsS0FBSyxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtNQUNBWSxLQUFLLENBQUNYLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLGtCQUFwQjtNQUNBVSxLQUFLLENBQUNKLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEJYLE1BQU0sT0FBaEM7TUFDQWUsS0FBSyxDQUFDVCxXQUFOLEdBQW9CTixNQUFNLENBQUNNLFdBQTNCO01BQ0EsT0FBT1MsS0FBUDtJQUNEOzs7V0FFRCxnQ0FBd0I7TUFDdEIsSUFBTW1CLGlCQUFpQixHQUFHaEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTFCO01BQ0ErQixpQkFBaUIsQ0FBQzlCLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxZQUFoQztNQUNBLE9BQU82QixpQkFBUDtJQUNEOzs7V0FFRCw2QkFBcUI7TUFDbkIsSUFBTUEsaUJBQWlCLEdBQUdoQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUI7TUFDQStCLGlCQUFpQixDQUFDOUIsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLFlBQWhDO01BQ0EsT0FBTzZCLGlCQUFQO0lBQ0Q7OztXQUVELHFCQUFhbEMsTUFBYixFQUFxQjtNQUNuQixJQUFNcUIsUUFBUSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWpCO01BQ0FrQixRQUFRLENBQUNqQixTQUFULENBQW1CQyxHQUFuQixDQUF1QixrQkFBdkI7TUFDQWdCLFFBQVEsQ0FBQ1YsWUFBVCxDQUFzQixNQUF0QixFQUE4QixVQUE5QjtNQUNBVSxRQUFRLENBQUNWLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEJYLE1BQU0sQ0FBQ29CLEVBQW5DO01BQ0EsT0FBT0MsUUFBUDtJQUNEOzs7V0FFRCxrQkFBVXJCLE1BQVYsRUFBa0I7TUFDaEIsSUFBTXNCLEtBQUssR0FBR3BCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO01BQ0FtQixLQUFLLENBQUNsQixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixrQkFBcEI7TUFDQWlCLEtBQUssQ0FBQ1gsWUFBTixDQUFtQixNQUFuQixFQUEyQixPQUEzQjtNQUNBVyxLQUFLLENBQUNYLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEJYLE1BQU0sQ0FBQ1ksS0FBbkM7TUFDQVUsS0FBSyxDQUFDWCxZQUFOLENBQW1CLElBQW5CLEVBQXlCWCxNQUFNLENBQUNvQixFQUFoQztNQUNBLE9BQU9FLEtBQVA7SUFDRDs7O1dBRUQscUJBQWF0QixNQUFiLEVBQXFCO01BQ25CLElBQU11QixRQUFRLEdBQUdyQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7TUFDQW9CLFFBQVEsQ0FBQ1osWUFBVCxDQUFzQixJQUF0QixFQUE0QlgsTUFBTSxDQUFDb0IsRUFBbkM7TUFDQUcsUUFBUSxDQUFDbkIsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsY0FBdkI7TUFDQSxPQUFPa0IsUUFBUDtJQUNEOzs7V0FFRCxtQkFBV3ZCLE1BQVgsRUFBbUI7TUFDakIsSUFBTXdCLE1BQU0sR0FBR3RCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO01BQ0FxQixNQUFNLENBQUNiLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEJYLE1BQU0sQ0FBQ29CLEVBQWpDO01BQ0FJLE1BQU0sQ0FBQ3BCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGNBQXJCO01BRUFMLE1BQU0sQ0FBQ3lCLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFVBQUNkLEtBQUQsRUFBUWUsS0FBUixFQUFrQjtRQUM1QyxJQUFNQyxNQUFNLEdBQUcxQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtRQUNBeUIsTUFBTSxDQUFDakIsWUFBUCxDQUFvQixPQUFwQixFQUE2QkMsS0FBN0I7UUFDQWdCLE1BQU0sQ0FBQ3RCLFdBQVAsR0FBcUJOLE1BQU0sQ0FBQzZCLGFBQVAsQ0FBcUJGLEtBQXJCLENBQXJCO1FBQ0FILE1BQU0sQ0FBQ00sV0FBUCxDQUFtQkYsTUFBbkI7TUFDRCxDQUxEO01BT0EsT0FBT0osTUFBUDtJQUNEOzs7O0VBekcyQnpCLFM7O0FBNEdmb0MseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUdBOztJQUVNQywwQjs7Ozs7Ozs7Ozs7OztXQUNKLG1CQUFXcEMsTUFBWCxFQUFtQjtNQUNqQixJQUFNZ0IsTUFBTSxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtNQUNBYSxNQUFNLENBQUNWLFdBQVAsR0FBcUJOLE1BQU0sQ0FBQ00sV0FBNUI7TUFDQVUsTUFBTSxDQUFDTCxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLGNBQTdCOztNQUVBLElBQUlYLE1BQU0sQ0FBQ2lCLE1BQVgsRUFBbUI7UUFDakJELE1BQU0sQ0FBQ1osU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsMkJBQXJCO01BQ0Q7O01BRUQsT0FBT1csTUFBUDtJQUNEOzs7O0VBWDJCbUIsVTs7QUFjZkMseUVBQWYsRTs7Ozs7Ozs7OztBQ2hCQTtBQUNlO0FBQ2Y7QUFDQSxDQUFDLEU7O0FDSEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOztBQ2pCZSx3REFBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLHlDQUF5QyxFOztBQ0FyRzs7QUFFL0IsU0FBUyxpQkFBUTtBQUNqQixxQ0FBcUMsS0FBSztBQUMxQzs7QUFFZSwwRUFBUSxFOztBQ05jO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxvQkFBUTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZSxtRUFBUyxFOztBQ2hDUztBQUNOO0FBQ3NCOztBQUVqRDtBQUNBLE1BQU0sa0JBQU07QUFDWixXQUFXLGtCQUFNO0FBQ2pCOztBQUVBO0FBQ0EsaURBQWlELEdBQUcsSUFBSTs7QUFFeEQ7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMsZUFBZTtBQUN4Qjs7QUFFZSxxREFBRSxFOzs7O0FDNUJqQjtBQUVPLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztFQUM5QixPQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVILEtBQWYsQ0FBWCxDQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0VBQzdCLE9BQU9MLElBQUksQ0FBQ0UsU0FBTCxDQUFlRSxDQUFmLE1BQXNCSixJQUFJLENBQUNFLFNBQUwsQ0FBZUcsQ0FBZixDQUE3QjtBQUNELENBRk07QUFJQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRixDQUFELEVBQUlDLENBQUosRUFBVTtFQUNqQyxPQUFPTCxJQUFJLENBQUNFLFNBQUwsQ0FBZUUsQ0FBZixNQUFzQkosSUFBSSxDQUFDRSxTQUFMLENBQWVHLENBQWYsQ0FBN0I7QUFDRCxDQUZNO0FBSUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ2xDLEtBQUQsRUFBVztFQUMvQixPQUFPQSxLQUFLLEtBQUssSUFBakI7QUFDRCxDQUZNO0FBSUEsSUFBTW1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNuQyxLQUFELEVBQVc7RUFDOUIsT0FBTyxPQUFPQSxLQUFQLEtBQWlCLFdBQXhCO0FBQ0QsQ0FGTTtBQUlBLElBQU1vQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDcEMsS0FBRCxFQUFXO0VBQ2pDLE9BQU8sT0FBT0EsS0FBUCxLQUFpQixXQUF4QjtBQUNELENBRk07QUFJQSxJQUFNcUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3JDLEtBQUQsRUFBVztFQUNqQyxPQUFPLE9BQU9BLEtBQVAsS0FBaUIsUUFBeEI7QUFDRCxDQUZNO0FBSUEsSUFBTXNDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN0QyxLQUFELEVBQVc7RUFDbEMsT0FBT3FDLFFBQVEsQ0FBQ3JDLEtBQUQsQ0FBUixJQUFtQkEsS0FBSyxLQUFLdUMsSUFBSSxDQUFDQyxLQUFMLENBQVd4QyxLQUFYLENBQXBDO0FBQ0QsQ0FGTTtBQUlBLElBQU15QyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDekMsS0FBRCxFQUFXO0VBQ2pDLE9BQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtBQUNELENBRk07QUFJQSxJQUFNMEMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQzFDLEtBQUQsRUFBVztFQUNsQyxPQUFPLE9BQU9BLEtBQVAsS0FBaUIsU0FBeEI7QUFDRCxDQUZNO0FBSUEsSUFBTTJDLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUMzQyxLQUFELEVBQVc7RUFDaEMsT0FBTzRDLEtBQUssQ0FBQ0QsT0FBTixDQUFjM0MsS0FBZCxDQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU02QyxjQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDN0MsS0FBRCxFQUFXO0VBQ2pDLE9BQU8sQ0FBQ2tDLE1BQU0sQ0FBQ2xDLEtBQUQsQ0FBUCxJQUFrQixDQUFDMkMsT0FBTyxDQUFDM0MsS0FBRCxDQUExQixJQUFxQyxpQkFBT0EsS0FBUCxNQUFpQixRQUE3RDtBQUNELENBRk07QUFJQSxJQUFNOEMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQzlDLEtBQUQsRUFBVztFQUNoQyxJQUFJTyxJQUFJLEdBQUcsS0FBWDs7RUFFQSxJQUFJOEIsUUFBUSxDQUFDckMsS0FBRCxDQUFaLEVBQXFCO0lBQ25CTyxJQUFJLEdBQUcsUUFBUDtFQUNELENBRkQsTUFFTyxJQUFJK0IsU0FBUyxDQUFDdEMsS0FBRCxDQUFiLEVBQXNCO0lBQzNCTyxJQUFJLEdBQUcsU0FBUDtFQUNELENBRk0sTUFFQSxJQUFJa0MsUUFBUSxDQUFDekMsS0FBRCxDQUFaLEVBQXFCO0lBQzFCTyxJQUFJLEdBQUcsUUFBUDtFQUNELENBRk0sTUFFQSxJQUFJbUMsU0FBUyxDQUFDMUMsS0FBRCxDQUFiLEVBQXNCO0lBQzNCTyxJQUFJLEdBQUcsU0FBUDtFQUNELENBRk0sTUFFQSxJQUFJb0MsT0FBTyxDQUFDM0MsS0FBRCxDQUFYLEVBQW9CO0lBQ3pCTyxJQUFJLEdBQUcsT0FBUDtFQUNELENBRk0sTUFFQSxJQUFJMkIsTUFBTSxDQUFDbEMsS0FBRCxDQUFWLEVBQW1CO0lBQ3hCTyxJQUFJLEdBQUcsTUFBUDtFQUNELENBRk0sTUFFQSxJQUFJc0MsY0FBUSxDQUFDN0MsS0FBRCxDQUFaLEVBQXFCO0lBQzFCTyxJQUFJLEdBQUcsUUFBUDtFQUNEOztFQUVELE9BQU9BLElBQVA7QUFDRCxDQXBCTTtBQXNCQSxJQUFNd0MsWUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtFQUMxQixPQUFPQyxjQUFFLEVBQVQ7QUFDRCxDQUZNO0FBSUEsSUFBTUMsZUFBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUF3QjtFQUFBLGtDQUFaQyxPQUFZO0lBQVpBLE9BQVk7RUFBQTs7RUFDL0MsSUFBSSxDQUFDQSxPQUFPLENBQUNDLE1BQWIsRUFBcUIsT0FBT0YsTUFBUDtFQUNyQixJQUFNRyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0csS0FBUixFQUFmOztFQUVBLElBQUlULGNBQVEsQ0FBQ0ssTUFBRCxDQUFSLElBQW9CTCxjQUFRLENBQUNRLE1BQUQsQ0FBaEMsRUFBMEM7SUFDeEMsS0FBSyxJQUFNRSxHQUFYLElBQWtCRixNQUFsQixFQUEwQjtNQUN4QixJQUFJUixjQUFRLENBQUNRLE1BQU0sQ0FBQ0UsR0FBRCxDQUFQLENBQVosRUFBMkI7UUFDekIsSUFBSSxDQUFDTCxNQUFNLENBQUNLLEdBQUQsQ0FBWCxFQUFrQjtVQUNoQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNQLE1BQWQsK0JBQ0dLLEdBREgsRUFDUyxFQURUO1FBR0Q7O1FBQ0ROLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDSyxHQUFELENBQVAsRUFBY0YsTUFBTSxDQUFDRSxHQUFELENBQXBCLENBQVQ7TUFDRCxDQVBELE1BT087UUFDTEMsTUFBTSxDQUFDQyxNQUFQLENBQWNQLE1BQWQsK0JBQ0dLLEdBREgsRUFDU0YsTUFBTSxDQUFDRSxHQUFELENBRGY7TUFHRDtJQUNGO0VBQ0Y7O0VBRUQsT0FBT04sU0FBUyxNQUFULFVBQVVDLE1BQVYsU0FBcUJDLE9BQXJCLEVBQVA7QUFDRCxDQXRCTSxDOzs7Ozs7Ozs7SUM1RURPLGE7RUFDSixnQkFBYXRFLE1BQWIsRUFBcUI7SUFBQTs7SUFDbkIsS0FBS3VFLElBQUwsR0FBWXZFLE1BQU0sQ0FBQ3VFLElBQW5CO0lBQ0EsS0FBS0MsTUFBTCxHQUFjeEUsTUFBTSxDQUFDd0UsTUFBckI7SUFDQSxLQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0lBQ0EsS0FBSzdELEtBQUwsR0FBYVosTUFBTSxDQUFDWSxLQUFQLElBQWdCOEQsU0FBN0I7SUFDQSxLQUFLQyxJQUFMLEdBQVkzRSxNQUFNLENBQUMyRSxJQUFQLElBQWUsTUFBM0I7SUFDQSxLQUFLQyxNQUFMLEdBQWM1RSxNQUFNLENBQUM0RSxNQUFQLElBQWlCLElBQS9CO0lBQ0EsS0FBSy9ELFNBQUwsR0FBaUIsSUFBakI7SUFDQSxLQUFLQyxZQUFMLEdBQW9CLEtBQUt5RCxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JDLGVBQWhCLEVBQXBCO0lBQ0EsS0FBS3RFLFdBQUwsR0FBbUIsS0FBSytELElBQUwsQ0FBVU0sS0FBVixDQUFnQkUsY0FBaEIsRUFBbkI7SUFDQSxLQUFLdEUsZ0JBQUwsR0FBd0IsS0FBSzhELElBQUwsQ0FBVU0sS0FBVixDQUFnQkcsbUJBQWhCLEVBQXhCO0lBQ0EsS0FBS0MsWUFBTCxHQUFvQixFQUFwQjtJQUNBLEtBQUtDLElBQUw7RUFDRDtFQUVEO0FBQ0Y7QUFDQTs7Ozs7V0FDRSxnQkFBUTtNQUNOLEtBQUtDLFFBQUw7TUFDQSxLQUFLQyxlQUFMO01BQ0EsS0FBS0MsWUFBTDtNQUNBLEtBQUtDLHNCQUFMO01BQ0EsS0FBS0MsT0FBTDtNQUNBLEtBQUtDLEtBQUw7TUFDQSxLQUFLQyxTQUFMOztNQUNBLElBQUksS0FBS2xCLElBQUwsQ0FBVW1CLEtBQVYsSUFBbUIsS0FBS25CLElBQUwsQ0FBVW9CLE9BQVYsQ0FBa0JDLGdCQUFyQyxJQUF5RCxLQUFLcEIsTUFBTCxDQUFZNUMsTUFBWixDQUFtQixrQkFBbkIsQ0FBN0QsRUFBcUc7UUFDbkcsS0FBS2lFLG9CQUFMO01BQ0Q7SUFDRjs7O1dBRUQsa0JBQVU7TUFDUixPQUFPLEtBQUtsQixJQUFMLENBQVVtQixLQUFWLENBQWdCLEdBQWhCLEVBQXFCQyxHQUFyQixFQUFQO0lBQ0Q7OztXQUVELHdCQUFnQjtNQUNkLEtBQUtsRixTQUFMLEdBQWlCLEtBQUswRCxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JtQixZQUFoQixFQUFqQjtJQUNEOzs7V0FFRCxrQ0FBMEI7TUFDeEIsS0FBS25GLFNBQUwsQ0FBZUYsWUFBZixDQUE0QixXQUE1QixFQUF5QyxLQUFLZ0UsSUFBOUM7O01BRUEsSUFBSSxLQUFLSCxNQUFMLENBQVlyRCxJQUFaLEVBQUosRUFBd0I7UUFDdEIsS0FBS04sU0FBTCxDQUFlRixZQUFmLENBQTRCLFdBQTVCLEVBQXlDLEtBQUs2RCxNQUFMLENBQVlyRCxJQUFaLEVBQXpDO01BQ0Q7SUFDRjtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG1CQUFXLENBQUU7SUFFYjtBQUNGO0FBQ0E7Ozs7V0FDRSxpQkFBUyxDQUNSO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usb0JBQVk7TUFDVixLQUFLb0QsSUFBTCxDQUFVMEIsY0FBVixDQUF5QixJQUF6QjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usc0JBQWM7TUFDWixLQUFLMUIsSUFBTCxDQUFVMkIsZ0JBQVYsQ0FBMkIsSUFBM0I7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLDJCQUFtQjtNQUNqQixJQUFJdEYsS0FBSjtNQUVBLElBQUksS0FBSzRELE1BQUwsQ0FBWXJELElBQVosT0FBdUIsU0FBM0IsRUFBc0NQLEtBQUssR0FBRyxLQUFSO01BQ3RDLElBQUksS0FBSzRELE1BQUwsQ0FBWXJELElBQVosT0FBdUIsUUFBM0IsRUFBcUNQLEtBQUssR0FBRyxHQUFSO01BQ3JDLElBQUksS0FBSzRELE1BQUwsQ0FBWXJELElBQVosT0FBdUIsU0FBM0IsRUFBc0NQLEtBQUssR0FBRyxDQUFSO01BQ3RDLElBQUksS0FBSzRELE1BQUwsQ0FBWXJELElBQVosT0FBdUIsUUFBM0IsRUFBcUNQLEtBQUssR0FBRyxFQUFSO01BQ3JDLElBQUksS0FBSzRELE1BQUwsQ0FBWXJELElBQVosT0FBdUIsT0FBM0IsRUFBb0NQLEtBQUssR0FBRyxFQUFSO01BQ3BDLElBQUksS0FBSzRELE1BQUwsQ0FBWXJELElBQVosT0FBdUIsUUFBM0IsRUFBcUNQLEtBQUssR0FBRyxFQUFSO01BQ3JDLElBQUksS0FBSzRELE1BQUwsQ0FBWXJELElBQVosT0FBdUIsTUFBM0IsRUFBbUNQLEtBQUssR0FBRyxJQUFSOztNQUVuQyxJQUFJLEtBQUs0RCxNQUFMLGFBQUosRUFBMkI7UUFDekIsSUFBSSxLQUFLQSxNQUFMLGNBQXNCLENBQUMsS0FBS0EsTUFBTCxXQUFtQjJCLFFBQW5CLENBQTRCLEtBQUszQixNQUFMLGFBQTVCLENBQTNCLEVBQStFO1VBQzdFO1FBQ0Q7O1FBRUQ1RCxLQUFLLEdBQUcsS0FBSzRELE1BQUwsYUFBUjtNQUNEOztNQUVELEtBQUs1RCxLQUFMLEdBQWFBLEtBQWI7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG9CQUFZO01BQ1YsT0FBTyxLQUFLQSxLQUFaO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxrQkFBVUEsS0FBVixFQUFpQjtNQUNmLE9BQU9BLEtBQVA7SUFDRDtJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSxrQkFBVXdGLFFBQVYsRUFBMkM7TUFBQSxJQUF2QkMsY0FBdUIsdUVBQU4sSUFBTTtNQUN6Q0QsUUFBUSxHQUFHLEtBQUtFLFFBQUwsQ0FBY0YsUUFBZCxDQUFYO01BQ0EsS0FBS3hGLEtBQUwsR0FBYXdGLFFBQWI7O01BRUEsSUFBSUMsY0FBSixFQUFvQjtRQUNsQixLQUFLRSxRQUFMO01BQ0Q7O01BRUQsS0FBS0MsVUFBTDtNQUVBLEtBQUtmLFNBQUw7SUFDRDtJQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7O1dBQ0UscUJBQWEsQ0FBRTtJQUVmO0FBQ0Y7QUFDQTs7OztXQUNFLG1CQUFXO01BQ1QsS0FBS2hCLFFBQUwsR0FBZ0IsSUFBaEI7TUFDQSxLQUFLZ0IsU0FBTDtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usa0JBQVU7TUFDUixLQUFLaEIsUUFBTCxHQUFnQixLQUFoQjtNQUNBLEtBQUtnQixTQUFMO0lBQ0Q7OztXQUVELG9CQUFZO01BQ1YsT0FBTyxLQUFLbEIsSUFBTCxDQUFVa0MsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsS0FBS0MsUUFBTCxFQUE3QixFQUE4QyxLQUFLbkMsTUFBbkQsRUFBMkQsS0FBS29DLE1BQUwsRUFBM0QsRUFBMEUsS0FBS2pDLElBQS9FLENBQVA7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLGdDQUF3QjtNQUFBOztNQUN0QixJQUFNa0MsTUFBTSxHQUFHLEtBQUtILFFBQUwsRUFBZjtNQUVBLEtBQUs1RixZQUFMLENBQWtCZ0csU0FBbEIsR0FBOEIsRUFBOUI7TUFFQUQsTUFBTSxDQUFDbkYsT0FBUCxDQUFlLFVBQUN6QixLQUFELEVBQVc7UUFDeEIsS0FBSSxDQUFDYSxZQUFMLENBQWtCZ0IsV0FBbEIsQ0FBOEIsS0FBSSxDQUFDeUMsSUFBTCxDQUFVTSxLQUFWLENBQWdCa0MsYUFBaEIsQ0FBOEI7VUFDMUR4RyxPQUFPLEVBQUVOLEtBQUssQ0FBQ007UUFEMkMsQ0FBOUIsQ0FBOUI7TUFHRCxDQUpEO0lBS0Q7OztXQUVELHNCQUFjLENBQUU7SUFFaEI7QUFDRjtBQUNBOzs7O1dBQ0Usb0JBQVk7TUFDVixJQUFJLEtBQUtxRSxNQUFULEVBQWlCO1FBQ2YsS0FBS0EsTUFBTCxDQUFZb0MsbUJBQVo7TUFDRDs7TUFFRCxLQUFLbkIsb0JBQUw7SUFDRDtJQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7O1dBQ0UsK0JBQXVCLENBQ3RCO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsbUJBQVc7TUFDVCxJQUFJLEtBQUtoRixTQUFMLElBQWtCLEtBQUtBLFNBQUwsQ0FBZW9HLFVBQXJDLEVBQWlEO1FBQy9DLEtBQUtwRyxTQUFMLENBQWVvRyxVQUFmLENBQTBCQyxXQUExQixDQUFzQyxLQUFLckcsU0FBM0M7TUFDRDs7TUFFRCxLQUFLc0csVUFBTDs7TUFFQSxLQUFLLElBQU1oRCxHQUFYLElBQWtCLElBQWxCLEVBQXdCO1FBQ3RCLElBQUksQ0FBQ0MsTUFBTSxDQUFDZ0QsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDLElBQXJDLEVBQTJDbkQsR0FBM0MsQ0FBTCxFQUFzRDtVQUNwRDtRQUNEOztRQUVELE9BQU8sS0FBS0EsR0FBTCxDQUFQO01BQ0Q7SUFDRjs7Ozs7O0FBR1lHLDREQUFmLEU7Ozs7O0FDbk5BOztJQUVNaUQsYTtFQUNKLGdCQUFhL0MsTUFBYixFQUFxQjtJQUFBOztJQUNuQixLQUFLQSxNQUFMLEdBQWNBLE1BQWQ7RUFDRDs7OztXQUVELGlCQUFTO01BQ1AsT0FBT2pCLE9BQU8sQ0FBQyxLQUFLaUIsTUFBTCxDQUFZZ0QsS0FBYixDQUFQLEdBQTZCLEtBQUtoRCxNQUFMLENBQVlnRCxLQUF6QyxHQUFpRCxLQUF4RDtJQUNEOzs7V0FFRCxpQkFBUztNQUNQLE9BQU9qRSxPQUFPLENBQUMsS0FBS2lCLE1BQUwsQ0FBWWlELEtBQWIsQ0FBUCxHQUE2QixLQUFLakQsTUFBTCxDQUFZaUQsS0FBekMsR0FBaUQsS0FBeEQ7SUFDRDs7O1dBRUQsa0JBQVM7TUFDUCxPQUFPLEtBQUtqRCxNQUFMLFlBQW9CLEtBQUtBLE1BQUwsU0FBcEIsR0FBd0MsS0FBL0M7SUFDRDs7O1dBRUQsaUJBQVM7TUFDUCxPQUFPakMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlLEtBQUsrQixNQUFwQixDQUFYLENBQVA7SUFDRDs7O1dBRUQsb0JBQVc7TUFDVCxPQUFPLEtBQUtBLE1BQUwsY0FBc0IsS0FBS0EsTUFBTCxXQUF0QixHQUE0QyxLQUFuRDtJQUNEOzs7V0FFRCw2QkFBcUI7TUFDbkIsT0FBT2YsY0FBUSxDQUFDLEtBQUtlLE1BQUwsQ0FBWWtELGlCQUFiLENBQVIsR0FBMEMsS0FBS2xELE1BQUwsQ0FBWWtELGlCQUF0RCxHQUEwRSxLQUFqRjtJQUNEOzs7V0FFRCx1QkFBZTtNQUNiLE9BQU9yRSxRQUFRLENBQUMsS0FBS21CLE1BQUwsQ0FBWW1ELFdBQWIsQ0FBUixHQUFvQyxLQUFLbkQsTUFBTCxDQUFZbUQsV0FBaEQsR0FBOEQsS0FBckU7SUFDRDs7O1dBRUQsaUJBQVE7TUFDTixPQUFPbEUsY0FBUSxDQUFDLEtBQUtlLE1BQUwsUUFBRCxDQUFSLEdBQTZCLEtBQUtBLE1BQUwsUUFBN0IsR0FBZ0QsS0FBdkQ7SUFDRDs7O1dBRUQsaUJBQVE7TUFDTixJQUFJakIsT0FBTyxDQUFDLEtBQUtpQixNQUFMLFFBQUQsQ0FBUCxJQUE2QixLQUFLQSxNQUFMLFNBQWlCUixNQUFqQixHQUEwQixDQUEzRCxFQUE4RDtRQUM1RCxPQUFPLEtBQUtRLE1BQUwsUUFBUDtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCw0QkFBb0I7TUFDbEIsT0FBT3ZCLFFBQVEsQ0FBQyxLQUFLdUIsTUFBTCxDQUFZb0QsZ0JBQWIsQ0FBUixHQUF5QyxLQUFLcEQsTUFBTCxDQUFZb0QsZ0JBQXJELEdBQXdFLEtBQS9FO0lBQ0Q7OztXQUVELDRCQUFvQjtNQUNsQixPQUFPM0UsUUFBUSxDQUFDLEtBQUt1QixNQUFMLENBQVlxRCxnQkFBYixDQUFSLEdBQXlDLEtBQUtyRCxNQUFMLENBQVlxRCxnQkFBckQsR0FBd0UsS0FBL0U7SUFDRDs7O1dBRUQsa0JBQVU7TUFDUixPQUFPeEUsUUFBUSxDQUFDLEtBQUttQixNQUFMLENBQVlzRCxNQUFiLENBQVIsR0FBK0IsS0FBS3RELE1BQUwsQ0FBWXNELE1BQTNDLEdBQW9ELEtBQTNEO0lBQ0Q7OztXQUVELGtCQUFVbEgsS0FBVixFQUFpQjtNQUNmLE9BQVEsS0FBS2tILE1BQUwsTUFBaUIsS0FBS0EsTUFBTCxPQUFrQmxILEtBQTNDO0lBQ0Q7OztXQUVELGVBQU07TUFDSixPQUFPNkMsY0FBUSxDQUFDLEtBQUtlLE1BQUwsTUFBRCxDQUFSLEdBQTJCLEtBQUtBLE1BQUwsTUFBM0IsR0FBNEMsS0FBbkQ7SUFDRDs7O1dBRUQsaUJBQVM7TUFDUCxPQUFPZixjQUFRLENBQUMsS0FBS2UsTUFBTCxDQUFZdUQsS0FBYixDQUFSLEdBQThCLEtBQUt2RCxNQUFMLENBQVl1RCxLQUExQyxHQUFrRCxLQUF6RDtJQUNEOzs7V0FFRCxtQkFBVztNQUNULE9BQVEsS0FBS3ZELE1BQUwsQ0FBWXdELE9BQWIsR0FBd0IsS0FBS3hELE1BQUwsQ0FBWXdELE9BQXBDLEdBQThDLEtBQXJEO0lBQ0Q7OztXQUVELG9CQUFZO01BQ1YsSUFBSTlFLFNBQVMsQ0FBQyxLQUFLc0IsTUFBTCxDQUFZeUQsUUFBYixDQUFULElBQW1DLEtBQUt6RCxNQUFMLENBQVl5RCxRQUFaLElBQXdCLENBQS9ELEVBQWtFO1FBQ2hFLE9BQU8sS0FBS3pELE1BQUwsQ0FBWXlELFFBQW5CO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELHFCQUFhO01BQ1gsSUFBSS9FLFNBQVMsQ0FBQyxLQUFLc0IsTUFBTCxDQUFZMEQsU0FBYixDQUFULElBQW9DLEtBQUsxRCxNQUFMLENBQVkwRCxTQUFaLElBQXlCLENBQWpFLEVBQW9FO1FBQ2xFLE9BQU8sS0FBSzFELE1BQUwsQ0FBWTBELFNBQW5CO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELHlCQUFpQjtNQUNmLElBQUloRixTQUFTLENBQUMsS0FBS3NCLE1BQUwsQ0FBWTJELGFBQWIsQ0FBVCxJQUF3QyxLQUFLM0QsTUFBTCxDQUFZMkQsYUFBWixJQUE2QixDQUF6RSxFQUE0RTtRQUMxRSxPQUFPLEtBQUszRCxNQUFMLENBQVkyRCxhQUFuQjtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCxtQkFBVztNQUNULE9BQU9sRixRQUFRLENBQUMsS0FBS3VCLE1BQUwsQ0FBWTRELE9BQWIsQ0FBUixHQUFnQyxLQUFLNUQsTUFBTCxDQUFZNEQsT0FBNUMsR0FBc0QsS0FBN0Q7SUFDRDs7O1dBRUQsb0JBQVk7TUFDVixJQUFJbEYsU0FBUyxDQUFDLEtBQUtzQixNQUFMLENBQVk2RCxRQUFiLENBQVQsSUFBbUMsS0FBSzdELE1BQUwsQ0FBWTZELFFBQVosSUFBd0IsQ0FBL0QsRUFBa0U7UUFDaEUsT0FBTyxLQUFLN0QsTUFBTCxDQUFZNkQsUUFBbkI7TUFDRDs7TUFFRCxPQUFPLEtBQVA7SUFDRDs7O1dBRUQscUJBQWE7TUFDWCxJQUFJbkYsU0FBUyxDQUFDLEtBQUtzQixNQUFMLENBQVk4RCxTQUFiLENBQVQsSUFBb0MsS0FBSzlELE1BQUwsQ0FBWThELFNBQVosSUFBeUIsQ0FBakUsRUFBb0U7UUFDbEUsT0FBTyxLQUFLOUQsTUFBTCxDQUFZOEQsU0FBbkI7TUFDRDs7TUFFRCxPQUFPLEtBQVA7SUFDRDs7O1dBRUQseUJBQWlCO01BQ2YsSUFBSXBGLFNBQVMsQ0FBQyxLQUFLc0IsTUFBTCxDQUFZK0QsYUFBYixDQUFULElBQXdDLEtBQUsvRCxNQUFMLENBQVkrRCxhQUFaLElBQTZCLENBQXpFLEVBQTRFO1FBQzFFLE9BQU8sS0FBSy9ELE1BQUwsQ0FBWStELGFBQW5CO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELHNCQUFjO01BQ1osSUFBSXRGLFFBQVEsQ0FBQyxLQUFLdUIsTUFBTCxDQUFZZ0UsVUFBYixDQUFSLElBQW9DLEtBQUtoRSxNQUFMLENBQVlnRSxVQUFaLElBQTBCLENBQWxFLEVBQXFFO1FBQ25FLE9BQU8sS0FBS2hFLE1BQUwsQ0FBWWdFLFVBQW5CO01BQ0Q7O01BRUQsT0FBTyxLQUFQO0lBQ0Q7OztXQUVELGVBQU87TUFDTCxPQUFPL0UsY0FBUSxDQUFDLEtBQUtlLE1BQUwsQ0FBWWlFLEdBQWIsQ0FBUixHQUE0QixLQUFLakUsTUFBTCxDQUFZaUUsR0FBeEMsR0FBOEMsS0FBckQ7SUFDRDs7O1dBRUQsZ0JBQVE3RyxPQUFSLEVBQWdCO01BQ2QsT0FBUSxLQUFLNEMsTUFBTCxDQUFZbUIsT0FBWixJQUF1QixLQUFLbkIsTUFBTCxDQUFZbUIsT0FBWixDQUFvQi9ELE9BQXBCLENBQXhCLEdBQXVELEtBQUs0QyxNQUFMLENBQVltQixPQUFaLENBQW9CL0QsT0FBcEIsQ0FBdkQsR0FBcUYsS0FBNUY7SUFDRDs7O1dBRUQsbUJBQVc7TUFDVCxPQUFPeUIsUUFBUSxDQUFDLEtBQUttQixNQUFMLENBQVlrRSxPQUFiLENBQVIsR0FBZ0MsS0FBS2xFLE1BQUwsQ0FBWWtFLE9BQTVDLEdBQXNELEtBQTdEO0lBQ0Q7OztXQUVELDZCQUFxQjtNQUNuQixPQUFPakYsY0FBUSxDQUFDLEtBQUtlLE1BQUwsQ0FBWW1FLGlCQUFiLENBQVIsR0FBMEMsS0FBS25FLE1BQUwsQ0FBWW1FLGlCQUF0RCxHQUEwRSxLQUFqRjtJQUNEOzs7V0FFRCxrQkFBVXhFLEdBQVYsRUFBZTtNQUNiLE9BQU8sS0FBS3lFLFVBQUwsSUFBbUIsS0FBS3BFLE1BQUwsQ0FBWW9FLFVBQVosQ0FBdUJ6RSxHQUF2QixDQUFuQixHQUFpRCxLQUFLSyxNQUFMLENBQVlvRSxVQUFaLENBQXVCekUsR0FBdkIsQ0FBakQsR0FBK0UsS0FBdEY7SUFDRDs7O1dBRUQsc0JBQWM7TUFDWixPQUFPLEtBQUtLLE1BQUwsQ0FBWW9FLFVBQVosR0FBeUIsS0FBS3BFLE1BQUwsQ0FBWW9FLFVBQXJDLEdBQWtELEtBQXpEO0lBQ0Q7OztXQUVELG9CQUFZO01BQ1YsT0FBT3JGLE9BQU8sQ0FBQyxLQUFLaUIsTUFBTCxDQUFZcUUsUUFBYixDQUFQLCtCQUFvQyxJQUFJQyxHQUFKLENBQVEsS0FBS3RFLE1BQUwsQ0FBWXFFLFFBQXBCLENBQXBDLElBQXFFLEtBQTVFO0lBQ0Q7OztXQUVELGdCQUFRO01BQ04sT0FBT3BGLGNBQVEsQ0FBQyxLQUFLZSxNQUFMLENBQVl1RSxJQUFiLENBQVIsR0FBNkIsS0FBS3ZFLE1BQUwsQ0FBWXVFLElBQXpDLEdBQWdELEtBQXZEO0lBQ0Q7OztXQUVELGlCQUFTO01BQ1AsT0FBTzFGLFFBQVEsQ0FBQyxLQUFLbUIsTUFBTCxDQUFZd0UsS0FBYixDQUFSLEdBQThCLEtBQUt4RSxNQUFMLENBQVl3RSxLQUExQyxHQUFrRCxLQUF6RDtJQUNEOzs7V0FFRCxnQkFBUTtNQUNOLElBQUkzRixRQUFRLENBQUMsS0FBS21CLE1BQUwsQ0FBWXJELElBQWIsQ0FBUixJQUE4Qm9DLE9BQU8sQ0FBQyxLQUFLaUIsTUFBTCxDQUFZckQsSUFBYixDQUF6QyxFQUE2RDtRQUMzRCxPQUFPLEtBQUtxRCxNQUFMLENBQVlyRCxJQUFuQjtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCxnQkFBUVAsS0FBUixFQUFlO01BQ2IsT0FBUSxLQUFLTyxJQUFMLE1BQWUsS0FBS0EsSUFBTCxPQUFnQlAsS0FBdkM7SUFDRDs7O1dBRUQsaUJBQVM7TUFDUCxPQUFPMkMsT0FBTyxDQUFDLEtBQUtpQixNQUFMLENBQVlyRCxJQUFiLENBQWQ7SUFDRDs7O1dBRUQseUJBQWlCO01BQ2YsT0FBTyxLQUFLOEgsTUFBTCxDQUFZLFFBQVosS0FBeUIsS0FBS0EsTUFBTCxDQUFZLFNBQVosQ0FBaEM7SUFDRDs7O1dBRUQsaUJBQVM7TUFDUCxPQUFPMUYsT0FBTyxDQUFDLEtBQUtpQixNQUFMLENBQVkwRSxLQUFiLENBQVAsR0FBNkIsS0FBSzFFLE1BQUwsQ0FBWTBFLEtBQXpDLEdBQWlELEtBQXhEO0lBQ0Q7OztXQUVELHVCQUFlO01BQ2IsT0FBTzVGLFNBQVMsQ0FBQyxLQUFLa0IsTUFBTCxDQUFZMkUsV0FBYixDQUFULEdBQXFDLEtBQUszRSxNQUFMLENBQVkyRSxXQUFqRCxHQUErRCxLQUF0RTtJQUNEOzs7V0FFRCxxQkFBYTtNQUNYLE9BQU81RyxJQUFJLENBQUNFLFNBQUwsQ0FBZSxLQUFLK0IsTUFBcEIsQ0FBUDtJQUNEOzs7V0FFRCxtQkFBVztNQUNULEtBQUssSUFBTUwsR0FBWCxJQUFrQixJQUFsQixFQUF3QjtRQUN0QixJQUFJLENBQUNDLE1BQU0sQ0FBQ2dELFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQyxJQUFyQyxFQUEyQ25ELEdBQTNDLENBQUwsRUFBc0Q7VUFDcEQ7UUFDRDs7UUFFRCxPQUFPLEtBQUtBLEdBQUwsQ0FBUDtNQUNEO0lBQ0Y7Ozs7OztBQUdZb0QsNERBQWYsRTs7Ozs7Ozs7Ozs7OztBQ3ROQTtBQUNBO0FBQ0E7O0lBRU02QixpQjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQUE7O01BQ1AsS0FBS3ZJLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS2hCLFlBQWhDO01BQ0EsS0FBS0QsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLckIsZ0JBQWhDO01BQ0EsS0FBS0ksU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLdEIsV0FBaEMsRUFITyxDQUtQOztNQUNBLElBQU13QixRQUFRLEdBQUcsS0FBS3VDLElBQUwsQ0FBVU0sS0FBVixDQUFnQndFLFdBQWhCLEVBQWpCO01BQ0EsS0FBSzdJLFdBQUwsQ0FBaUJzQixXQUFqQixDQUE2QkUsUUFBN0IsRUFQTyxDQVNQOztNQUNBLEtBQUtzSCxNQUFMLEdBQWMsS0FBSy9FLElBQUwsQ0FBVU0sS0FBVixDQUFnQjBFLFNBQWhCLENBQTBCO1FBQ3RDakosV0FBVyxFQUFFO01BRHlCLENBQTFCLENBQWQ7TUFHQTBCLFFBQVEsQ0FBQ0YsV0FBVCxDQUFxQixLQUFLd0gsTUFBMUI7TUFDQSxLQUFLQSxNQUFMLENBQVlFLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07UUFDMUMsS0FBSSxDQUFDQyxPQUFMO01BQ0QsQ0FGRCxFQWRPLENBa0JQOztNQUNBLEtBQUtDLFlBQUwsR0FBb0IsS0FBS25GLElBQUwsQ0FBVU0sS0FBVixDQUFnQjBFLFNBQWhCLENBQTBCO1FBQzVDakosV0FBVyxFQUFFO01BRCtCLENBQTFCLENBQXBCO01BR0EwQixRQUFRLENBQUNGLFdBQVQsQ0FBcUIsS0FBSzRILFlBQTFCO01BQ0EsS0FBS0EsWUFBTCxDQUFrQkYsZ0JBQWxCLENBQW1DLE9BQW5DLEVBQTRDLFlBQU07UUFDaEQsSUFBSUcsTUFBTSxDQUFDQyxPQUFQLENBQWUsdUJBQWYsQ0FBSixFQUE2QztVQUMzQyxLQUFJLENBQUNDLFFBQUwsQ0FBYyxFQUFkO1FBQ0Q7TUFDRixDQUpEO0lBS0Q7OztXQUVELHdCQUFnQjtNQUNkLEtBQUtoSixTQUFMLEdBQWlCLEtBQUswRCxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JpRixXQUFoQixFQUFqQixDQURjLENBR2Q7O01BQ0EsS0FBS2pKLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3lDLElBQUwsQ0FBVU0sS0FBVixDQUFnQmtGLFNBQWhCLENBQTBCO1FBQ25EekosV0FBVyxFQUFFLEtBQUtrRSxNQUFMLENBQVl3RSxLQUFaLEtBQXNCLEtBQUt4RSxNQUFMLENBQVl3RSxLQUFaLEVBQXRCLEdBQTRDLEtBQUtwQyxNQUFMO01BRE4sQ0FBMUIsQ0FBM0IsRUFKYyxDQVFkOztNQUNBLElBQUksS0FBS3BDLE1BQUwsQ0FBWW1ELFdBQVosRUFBSixFQUErQjtRQUM3QixLQUFLOUcsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLeUMsSUFBTCxDQUFVTSxLQUFWLENBQWdCbUYsY0FBaEIsQ0FBK0I7VUFDeEQxSixXQUFXLEVBQUUsS0FBS2tFLE1BQUwsQ0FBWW1ELFdBQVo7UUFEMkMsQ0FBL0IsQ0FBM0I7TUFHRDtJQUNGOzs7V0FFRCwwQkFBa0IvRyxLQUFsQixFQUF5QjtNQUFBOztNQUN2QixJQUFNNEQsTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWXVELEtBQVosS0FBc0IsS0FBS3ZELE1BQUwsQ0FBWXVELEtBQVosRUFBdEIsR0FBNEM7UUFBRTVHLElBQUksRUFBRXVDLE9BQU8sQ0FBQzlDLEtBQUQ7TUFBZixDQUEzRDtNQUVBLElBQU1xSixVQUFVLEdBQUcsS0FBSzFGLElBQUwsQ0FBVTJGLFlBQVYsQ0FBdUI7UUFDeEMzRixJQUFJLEVBQUUsS0FBS0EsSUFENkI7UUFFeENDLE1BQU0sRUFBRSxJQUFJK0MsVUFBSixDQUFXL0MsTUFBWCxDQUZnQztRQUd4Q0csSUFBSSxFQUFFLEtBQUtBLElBQUwsR0FBWSxHQUFaLEdBQWtCLEtBQUtNLFlBQUwsQ0FBa0JqQixNQUhGO1FBSXhDWSxNQUFNLEVBQUU7TUFKZ0MsQ0FBdkIsQ0FBbkI7TUFPQSxJQUFNNUMsUUFBUSxHQUFHLEtBQUt1QyxJQUFMLENBQVVNLEtBQVYsQ0FBZ0J3RSxXQUFoQixFQUFqQjtNQUNBWSxVQUFVLENBQUNwSixTQUFYLENBQXFCaUIsV0FBckIsQ0FBaUNtSSxVQUFVLENBQUN6SixXQUE1QztNQUNBeUosVUFBVSxDQUFDekosV0FBWCxDQUF1QnNCLFdBQXZCLENBQW1DRSxRQUFuQztNQUVBLElBQU1tSSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0gsVUFBVSxDQUFDckQsTUFBWCxFQUFELENBQXhCO01BRUEsSUFBTXlELFNBQVMsR0FBRyxLQUFLOUYsSUFBTCxDQUFVTSxLQUFWLENBQWdCMEUsU0FBaEIsQ0FBMEI7UUFDMUNqSixXQUFXLEVBQUU7TUFENkIsQ0FBMUIsQ0FBbEI7TUFHQTBCLFFBQVEsQ0FBQ0YsV0FBVCxDQUFxQnVJLFNBQXJCO01BQ0FBLFNBQVMsQ0FBQ2IsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtRQUN4QyxJQUFNVyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0gsVUFBVSxDQUFDdEYsSUFBWCxDQUFnQm1CLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFELENBQXhCOztRQUNBLE1BQUksQ0FBQ3VFLFVBQUwsQ0FBZ0JILFNBQWhCO01BQ0QsQ0FIRDs7TUFLQSxJQUFJLEtBQUtsRixZQUFMLENBQWtCakIsTUFBbEIsS0FBNkIsQ0FBakMsRUFBb0M7UUFDbEMsSUFBTXVHLFNBQVMsR0FBRyxLQUFLaEcsSUFBTCxDQUFVTSxLQUFWLENBQWdCMEUsU0FBaEIsQ0FBMEI7VUFDMUNqSixXQUFXLEVBQUU7UUFENkIsQ0FBMUIsQ0FBbEI7UUFHQTBCLFFBQVEsQ0FBQ0YsV0FBVCxDQUFxQnlJLFNBQXJCO1FBQ0FBLFNBQVMsQ0FBQ2YsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtVQUN4QyxJQUFNZ0IsT0FBTyxHQUFHTCxTQUFTLEdBQUcsQ0FBNUI7O1VBQ0EsTUFBSSxDQUFDTSxJQUFMLENBQVVOLFNBQVYsRUFBcUJLLE9BQXJCO1FBQ0QsQ0FIRDtNQUlEOztNQUVELElBQUksS0FBSzdELFFBQUwsR0FBZ0IzQyxNQUFoQixHQUF5QixDQUF6QixLQUErQm1HLFNBQW5DLEVBQThDO1FBQzVDLElBQU1PLFdBQVcsR0FBRyxLQUFLbkcsSUFBTCxDQUFVTSxLQUFWLENBQWdCMEUsU0FBaEIsQ0FBMEI7VUFDNUNqSixXQUFXLEVBQUU7UUFEK0IsQ0FBMUIsQ0FBcEI7UUFHQTBCLFFBQVEsQ0FBQ0YsV0FBVCxDQUFxQjRJLFdBQXJCO1FBQ0FBLFdBQVcsQ0FBQ2xCLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07VUFDMUMsSUFBTWdCLE9BQU8sR0FBR0wsU0FBUyxHQUFHLENBQTVCOztVQUNBLE1BQUksQ0FBQ00sSUFBTCxDQUFVTixTQUFWLEVBQXFCSyxPQUFyQjtRQUNELENBSEQ7TUFJRDs7TUFFRCxPQUFPUCxVQUFQO0lBQ0Q7OztXQUVELGNBQU1VLFNBQU4sRUFBaUJILE9BQWpCLEVBQTBCO01BQ3hCLElBQU01SixLQUFLLEdBQUd5QixLQUFLLENBQUMsS0FBS3NFLFFBQUwsRUFBRCxDQUFuQjtNQUNBLElBQU1pRSxJQUFJLEdBQUdoSyxLQUFLLENBQUMrSixTQUFELENBQWxCO01BQ0EvSixLQUFLLENBQUNpSyxNQUFOLENBQWFGLFNBQWIsRUFBd0IsQ0FBeEI7TUFDQS9KLEtBQUssQ0FBQ2lLLE1BQU4sQ0FBYUwsT0FBYixFQUFzQixDQUF0QixFQUF5QkksSUFBekI7TUFDQSxLQUFLZixRQUFMLENBQWNqSixLQUFkO0lBQ0Q7OztXQUVELG1CQUFXO01BQ1QsSUFBTWtLLFVBQVUsR0FBRyxLQUFLQyxnQkFBTCxFQUFuQjtNQUNBLElBQU1uSyxLQUFLLEdBQUd5QixLQUFLLENBQUMsS0FBS3NFLFFBQUwsRUFBRCxDQUFuQjtNQUNBL0YsS0FBSyxDQUFDb0ssSUFBTixDQUFXRixVQUFVLENBQUNuRSxRQUFYLEVBQVg7TUFDQW1FLFVBQVUsQ0FBQ0csT0FBWDtNQUNBLEtBQUtwQixRQUFMLENBQWNqSixLQUFkO0lBQ0Q7OztXQUVELG9CQUFZdUosU0FBWixFQUF1QjtNQUNyQixJQUFJUixNQUFNLENBQUNDLE9BQVAsQ0FBZSxtQkFBZixDQUFKLEVBQXlDO1FBQ3ZDLElBQU1zQixZQUFZLEdBQUc3SSxLQUFLLENBQUMsS0FBS3NFLFFBQUwsRUFBRCxDQUExQjtRQUNBLElBQU1QLFFBQVEsR0FBRzhFLFlBQVksQ0FBQ0MsTUFBYixDQUFvQixVQUFDUCxJQUFELEVBQU9qSixLQUFQO1VBQUEsT0FBaUJBLEtBQUssS0FBS3dJLFNBQTNCO1FBQUEsQ0FBcEIsQ0FBakI7UUFDQSxLQUFLTixRQUFMLENBQWN6RCxRQUFkO01BQ0Q7SUFDRjs7O1dBRUQsK0JBQXVCO01BQ3JCLElBQU14RixLQUFLLEdBQUcsRUFBZDtNQUVBLEtBQUtxRSxZQUFMLENBQWtCdkQsT0FBbEIsQ0FBMEIsVUFBQzBKLFdBQUQsRUFBaUI7UUFDekN4SyxLQUFLLENBQUNvSyxJQUFOLENBQVdJLFdBQVcsQ0FBQ3pFLFFBQVosRUFBWDtNQUNELENBRkQ7TUFJQSxLQUFLa0QsUUFBTCxDQUFjakosS0FBZDtJQUNEOzs7V0FFRCxxQkFBYTtNQUFBOztNQUNYLElBQU1BLEtBQUssR0FBRyxLQUFLK0YsUUFBTCxFQUFkO01BRUEsS0FBSzFCLFlBQUwsQ0FBa0J2RCxPQUFsQixDQUEwQixVQUFDMkosTUFBRCxFQUFZO1FBQ3BDQSxNQUFNLENBQUNKLE9BQVA7TUFDRCxDQUZEO01BSUEsS0FBS2hHLFlBQUwsR0FBb0IsRUFBcEI7TUFFQXJFLEtBQUssQ0FBQ2MsT0FBTixDQUFjLFVBQUM0SixTQUFELEVBQWU7UUFDM0IsSUFBTXJCLFVBQVUsR0FBRyxNQUFJLENBQUNjLGdCQUFMLENBQXNCTyxTQUF0QixDQUFuQjs7UUFDQXJCLFVBQVUsQ0FBQ0osUUFBWCxDQUFvQnlCLFNBQXBCLEVBQStCLEtBQS9COztRQUNBLE1BQUksQ0FBQ3JHLFlBQUwsQ0FBa0IrRixJQUFsQixDQUF1QmYsVUFBdkI7O1FBRUEsSUFBSXNCLE9BQU8sR0FBRy9ILEtBQUssQ0FBQ2dJLElBQU4sQ0FBVyxNQUFJLENBQUMzSyxTQUFMLENBQWU0SyxnQkFBZixDQUFnQyxRQUFoQyxDQUFYLENBQWQ7O1FBRUEsTUFBSSxDQUFDeEcsWUFBTCxDQUFrQnZELE9BQWxCLENBQTBCLFVBQUMwSixXQUFELEVBQWlCO1VBQ3pDLElBQU1NLFlBQVksR0FBR2xJLEtBQUssQ0FBQ2dJLElBQU4sQ0FBV0osV0FBVyxDQUFDdkssU0FBWixDQUFzQjRLLGdCQUF0QixDQUF1QyxRQUF2QyxDQUFYLENBQXJCO1VBQ0FGLE9BQU8sR0FBR0EsT0FBTyxDQUFDSSxNQUFSLENBQWVELFlBQWYsQ0FBVjtRQUNELENBSEQ7O1FBS0EsSUFBSSxNQUFJLENBQUNqSCxRQUFULEVBQW1CO1VBQ2pCd0YsVUFBVSxDQUFDMkIsT0FBWDtVQUNBTCxPQUFPLENBQUM3SixPQUFSLENBQWdCLFVBQUNoQixNQUFELEVBQVk7WUFDMUJBLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixVQUFwQixFQUFnQyxVQUFoQztVQUNELENBRkQ7UUFHRCxDQUxELE1BS087VUFDTHNKLFVBQVUsQ0FBQzRCLE1BQVg7VUFDQU4sT0FBTyxDQUFDN0osT0FBUixDQUFnQixVQUFDaEIsTUFBRCxFQUFZO1lBQzFCQSxNQUFNLENBQUNvTCxlQUFQLENBQXVCLFVBQXZCO1VBQ0QsQ0FGRDtRQUdEO01BQ0YsQ0F2QkQ7TUF5QkEsS0FBSzdHLFlBQUwsQ0FBa0J2RCxPQUFsQixDQUEwQixVQUFDMkosTUFBRCxFQUFZO1FBQ3BDLE1BQUksQ0FBQzVLLGdCQUFMLENBQXNCcUIsV0FBdEIsQ0FBa0N1SixNQUFNLENBQUN4SyxTQUF6QztNQUNELENBRkQ7O01BSUEsSUFBSSxLQUFLNEQsUUFBVCxFQUFtQjtRQUNqQixLQUFLNkUsTUFBTCxDQUFZM0ksWUFBWixDQUF5QixVQUF6QixFQUFxQyxVQUFyQztRQUNBLEtBQUsrSSxZQUFMLENBQWtCL0ksWUFBbEIsQ0FBK0IsVUFBL0IsRUFBMkMsVUFBM0M7TUFDRCxDQUhELE1BR087UUFDTCxLQUFLMkksTUFBTCxDQUFZd0MsZUFBWixDQUE0QixVQUE1QixFQUF3QyxVQUF4QztRQUNBLEtBQUtwQyxZQUFMLENBQWtCb0MsZUFBbEIsQ0FBa0MsVUFBbEMsRUFBOEMsVUFBOUM7TUFDRDtJQUNGOzs7V0FFRCxrQkFBVWxMLEtBQVYsRUFBaUI7TUFDZixJQUFJMkMsT0FBTyxDQUFDM0MsS0FBRCxDQUFYLEVBQW9CO1FBQ2xCLE9BQU9BLEtBQVA7TUFDRDs7TUFFRCxPQUFPLEVBQVA7SUFDRDs7O1dBRUQsbUJBQVc7TUFDVCxLQUFLcUUsWUFBTCxDQUFrQnZELE9BQWxCLENBQTBCLFVBQUMwSixXQUFELEVBQWlCO1FBQ3pDQSxXQUFXLENBQUNILE9BQVo7TUFDRCxDQUZEOztNQUlBO0lBQ0Q7Ozs7RUFoTXVCM0csVTs7QUFtTVg4RSxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUN2TUE7O0lBRU0yQyxxQjs7Ozs7Ozs7Ozs7OztXQUNKLGlCQUFTO01BQUE7O01BQ1AsS0FBS2xMLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS2hCLFlBQWhDLEVBRE8sQ0FHUDs7TUFDQSxJQUFNb0IsaUJBQWlCLEdBQUcsS0FBS3FDLElBQUwsQ0FBVU0sS0FBVixDQUFnQm1ILG9CQUFoQixFQUExQixDQUpPLENBTVA7O01BQ0EsSUFBTWpMLEtBQUssR0FBRyxLQUFLd0QsSUFBTCxDQUFVTSxLQUFWLENBQWdCb0gsZ0JBQWhCLENBQWlDO1FBQzdDLE9BQUssS0FBS3RILElBRG1DO1FBRTdDckUsV0FBVyxFQUFFLEtBQUtrRSxNQUFMLENBQVl3RSxLQUFaLEtBQXNCLEtBQUt4RSxNQUFMLENBQVl3RSxLQUFaLEVBQXRCLEdBQTRDLEtBQUtwQyxNQUFMO01BRlosQ0FBakMsQ0FBZCxDQVBPLENBWVA7O01BQ0EsS0FBSzFGLEtBQUwsR0FBYSxLQUFLcUQsSUFBTCxDQUFVTSxLQUFWLENBQWdCcUgsV0FBaEIsQ0FBNEI7UUFDdkM5SyxFQUFFLEVBQUUsS0FBS3VEO01BRDhCLENBQTVCLENBQWIsQ0FiTyxDQWlCUDs7TUFDQSxLQUFLOUQsU0FBTCxDQUFlaUIsV0FBZixDQUEyQkksaUJBQTNCO01BQ0FBLGlCQUFpQixDQUFDSixXQUFsQixDQUE4QixLQUFLWixLQUFuQztNQUNBZ0IsaUJBQWlCLENBQUNKLFdBQWxCLENBQThCZixLQUE5QixFQXBCTyxDQXNCUDs7TUFDQSxLQUFLRyxLQUFMLENBQVdzSSxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxZQUFNO1FBQzFDLEtBQUksQ0FBQ0ssUUFBTCxDQUFjLEtBQUksQ0FBQzNJLEtBQUwsQ0FBV2lMLE9BQXpCO01BQ0QsQ0FGRCxFQXZCTyxDQTJCUDs7TUFDQSxJQUFJLEtBQUszSCxNQUFMLENBQVltRCxXQUFaLEVBQUosRUFBK0I7UUFDN0IsS0FBSzlHLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3lDLElBQUwsQ0FBVU0sS0FBVixDQUFnQm1GLGNBQWhCLENBQStCO1VBQ3hEMUosV0FBVyxFQUFFLEtBQUtrRSxNQUFMLENBQVltRCxXQUFaO1FBRDJDLENBQS9CLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQsa0JBQVUvRyxLQUFWLEVBQWlCO01BQ2YsT0FBT3dMLE9BQU8sQ0FBQ3hMLEtBQUQsQ0FBZDtJQUNEOzs7V0FFRCxxQkFBYTtNQUNYLEtBQUtNLEtBQUwsQ0FBV2lMLE9BQVgsR0FBcUIsS0FBS3hGLFFBQUwsRUFBckI7O01BRUEsSUFBSSxLQUFLbEMsUUFBVCxFQUFtQjtRQUNqQixLQUFLdkQsS0FBTCxDQUFXUCxZQUFYLENBQXdCLFVBQXhCLEVBQW9DLFVBQXBDO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsS0FBS08sS0FBTCxDQUFXNEssZUFBWCxDQUEyQixVQUEzQjtNQUNEO0lBQ0Y7Ozs7RUFoRHlCeEgsVTs7QUFtRGJ5SCx5RUFBZixFOzs7Ozs7Ozs7Ozs7QUNyREE7O0lBRU1NLDJDOzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLeEwsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLaEIsWUFBaEMsRUFETyxDQUdQOztNQUNBLEtBQUtELFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3lDLElBQUwsQ0FBVU0sS0FBVixDQUFnQnlILFFBQWhCLENBQXlCO1FBQ2xELE9BQUssS0FBSzNILElBRHdDO1FBRWxEckUsV0FBVyxFQUFFLEtBQUtrRSxNQUFMLENBQVl3RSxLQUFaLEtBQXNCLEtBQUt4RSxNQUFMLENBQVl3RSxLQUFaLEVBQXRCLEdBQTRDLEtBQUtwQyxNQUFMO01BRlAsQ0FBekIsQ0FBM0IsRUFKTyxDQVNQOztNQUNBLEtBQUsxRixLQUFMLEdBQWEsS0FBS3FELElBQUwsQ0FBVU0sS0FBVixDQUFnQjBILFNBQWhCLENBQTBCO1FBQ3JDOUssWUFBWSxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FEdUI7UUFFckNJLGFBQWEsRUFBRSxLQUFLMkMsTUFBTCxDQUFZNUMsTUFBWixDQUFtQixZQUFuQixLQUFvQyxDQUFDLE9BQUQsRUFBVSxNQUFWLENBRmQ7UUFHckNSLEVBQUUsRUFBRSxLQUFLdUQ7TUFINEIsQ0FBMUIsQ0FBYjtNQUtBLEtBQUs5RCxTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUtaLEtBQWhDLEVBZk8sQ0FpQlA7O01BQ0EsS0FBS0EsS0FBTCxDQUFXc0ksZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0MsWUFBTTtRQUMxQyxJQUFNNUksS0FBSyxHQUFHLEtBQUksQ0FBQ00sS0FBTCxDQUFXTixLQUFYLEtBQXFCLE1BQW5DOztRQUNBLEtBQUksQ0FBQ2lKLFFBQUwsQ0FBY2pKLEtBQWQ7TUFDRCxDQUhELEVBbEJPLENBdUJQOztNQUNBLElBQUksS0FBSzRELE1BQUwsQ0FBWW1ELFdBQVosRUFBSixFQUErQjtRQUM3QixLQUFLOUcsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLeUMsSUFBTCxDQUFVTSxLQUFWLENBQWdCbUYsY0FBaEIsQ0FBK0I7VUFDeEQxSixXQUFXLEVBQUUsS0FBS2tFLE1BQUwsQ0FBWW1ELFdBQVo7UUFEMkMsQ0FBL0IsQ0FBM0I7TUFHRDtJQUNGOzs7V0FFRCxxQkFBYTtNQUNYLEtBQUt6RyxLQUFMLENBQVdOLEtBQVgsR0FBbUIsS0FBSytGLFFBQUwsT0FBb0IsSUFBcEIsR0FBMkIsTUFBM0IsR0FBb0MsT0FBdkQ7O01BRUEsSUFBSSxLQUFLbEMsUUFBVCxFQUFtQjtRQUNqQixLQUFLdkQsS0FBTCxDQUFXUCxZQUFYLENBQXdCLFVBQXhCLEVBQW9DLFVBQXBDO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsS0FBS08sS0FBTCxDQUFXNEssZUFBWCxDQUEyQixVQUEzQjtNQUNEO0lBQ0Y7Ozs7RUF4Q21DQyxlOztBQTJDdkJNLG1HQUFmLEU7Ozs7Ozs7Ozs7OztBQzdDQTs7SUFFTUcseUM7Ozs7Ozs7Ozs7Ozs7V0FDSixtQkFBVztNQUNULEtBQUsvSyxZQUFMLEdBQW9CLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FBcEI7TUFDQSxLQUFLSSxhQUFMLEdBQXFCLEtBQUsyQyxNQUFMLENBQVk1QyxNQUFaLENBQW1CLFlBQW5CLEtBQW9DLEtBQUtILFlBQTlEO0lBQ0Q7OztXQUVELGlCQUFTO01BQUE7O01BQ1AsS0FBS1osU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLaEIsWUFBaEM7TUFDQSxLQUFLMkwsV0FBTCxHQUFtQixFQUFuQixDQUZPLENBSVA7O01BQ0EsS0FBSzVMLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3lDLElBQUwsQ0FBVU0sS0FBVixDQUFnQjZILGNBQWhCLENBQStCO1FBQ3hEcE0sV0FBVyxFQUFFLEtBQUtrRSxNQUFMLENBQVl3RSxLQUFaLEtBQXNCLEtBQUt4RSxNQUFMLENBQVl3RSxLQUFaLEVBQXRCLEdBQTRDLEtBQUtwQyxNQUFMO01BREQsQ0FBL0IsQ0FBM0IsRUFMTyxDQVNQOztNQUNBLEtBQUtuRixZQUFMLENBQWtCQyxPQUFsQixDQUEwQixVQUFDZCxLQUFELEVBQVFlLEtBQVIsRUFBa0I7UUFDMUM7UUFDQSxJQUFNZ0wsY0FBYyxHQUFHLEtBQUksQ0FBQ3BJLElBQUwsQ0FBVU0sS0FBVixDQUFnQitILGlCQUFoQixFQUF2QixDQUYwQyxDQUkxQzs7O1FBQ0EsSUFBTXRMLEtBQUssR0FBRyxLQUFJLENBQUNpRCxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JnSSxRQUFoQixDQUF5QjtVQUNyQ2pNLEtBQUssRUFBRUEsS0FEOEI7VUFFckNRLEVBQUUsRUFBRSxLQUFJLENBQUN1RCxJQUFMLEdBQVksR0FBWixHQUFrQmhEO1FBRmUsQ0FBekIsQ0FBZDs7UUFJQWdMLGNBQWMsQ0FBQzdLLFdBQWYsQ0FBMkJSLEtBQTNCO1FBRUFBLEtBQUssQ0FBQ2tJLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLFlBQU07VUFDckMsSUFBTXNELFVBQVUsR0FBR3hMLEtBQUssQ0FBQ1YsS0FBTixLQUFnQixNQUFuQzs7VUFDQSxLQUFJLENBQUNpSixRQUFMLENBQWNpRCxVQUFkO1FBQ0QsQ0FIRDs7UUFLQSxLQUFJLENBQUNMLFdBQUwsQ0FBaUJ6QixJQUFqQixDQUFzQjFKLEtBQXRCLEVBaEIwQyxDQWtCMUM7OztRQUNBcUwsY0FBYyxDQUFDN0ssV0FBZixDQUEyQixLQUFJLENBQUN5QyxJQUFMLENBQVVNLEtBQVYsQ0FBZ0J5SCxRQUFoQixDQUF5QjtVQUNsRCxPQUFLLEtBQUksQ0FBQzNILElBQUwsR0FBWSxHQUFaLEdBQWtCaEQsS0FEMkI7VUFFbERyQixXQUFXLEVBQUUsS0FBSSxDQUFDdUIsYUFBTCxDQUFtQkYsS0FBbkI7UUFGcUMsQ0FBekIsQ0FBM0I7O1FBS0EsS0FBSSxDQUFDZCxTQUFMLENBQWVpQixXQUFmLENBQTJCNkssY0FBM0I7TUFDRCxDQXpCRCxFQVZPLENBcUNQOztNQUNBLElBQUksS0FBS25JLE1BQUwsQ0FBWW1ELFdBQVosRUFBSixFQUErQjtRQUM3QixLQUFLOUcsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLeUMsSUFBTCxDQUFVTSxLQUFWLENBQWdCbUYsY0FBaEIsQ0FBK0I7VUFDeEQxSixXQUFXLEVBQUUsS0FBS2tFLE1BQUwsQ0FBWW1ELFdBQVo7UUFEMkMsQ0FBL0IsQ0FBM0I7TUFHRDtJQUNGOzs7V0FFRCxxQkFBYTtNQUFBOztNQUNYLEtBQUs4RSxXQUFMLENBQWlCL0ssT0FBakIsQ0FBeUIsVUFBQ0osS0FBRCxFQUFXO1FBQ2xDLElBQU13TCxVQUFVLEdBQUd4TCxLQUFLLENBQUNWLEtBQU4sS0FBZ0IsTUFBbkM7UUFDQVUsS0FBSyxDQUFDNkssT0FBTixHQUFnQlcsVUFBVSxLQUFLLE1BQUksQ0FBQ25HLFFBQUwsRUFBL0I7UUFDQXJGLEtBQUssQ0FBQ21ELFFBQU4sR0FBaUIsTUFBSSxDQUFDQSxRQUF0QjtNQUNELENBSkQ7SUFLRDs7OztFQXpEa0NzSCxlOztBQTREdEJTLGdHQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBOztJQUVNTyxtQjs7Ozs7Ozs7Ozs7OztXQUNKLG1CQUFXO01BQ1Q7TUFDQSxJQUFJLEtBQUt2SSxNQUFMLENBQVlvRSxVQUFaLEVBQUosRUFBOEI7UUFDNUIsS0FBSyxJQUFNekUsR0FBWCxJQUFrQixLQUFLSyxNQUFMLENBQVlvRSxVQUFaLEVBQWxCLEVBQTRDO1VBQzFDLElBQUksQ0FBQ3hFLE1BQU0sQ0FBQ2dELFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQyxLQUFLOUMsTUFBTCxDQUFZb0UsVUFBWixFQUFyQyxFQUErRHpFLEdBQS9ELENBQUwsRUFBMEU7WUFDeEU7VUFDRDs7VUFFRCxJQUFNNkksZ0JBQWdCLEdBQUcsS0FBS3pJLElBQUwsQ0FBVW9CLE9BQVYsQ0FBa0JxSCxnQkFBbEIsSUFBc0MsS0FBS3hJLE1BQUwsQ0FBWTVDLE1BQVosQ0FBbUIsa0JBQW5CLENBQS9EO1VBQ0EsSUFBTXFMLGFBQWEsR0FBRyxDQUFDLEtBQUt6SSxNQUFMLENBQVlxRSxRQUFaLEVBQUQsSUFBMkIsQ0FBQyxLQUFLckUsTUFBTCxDQUFZcUUsUUFBWixHQUF1QjFDLFFBQXZCLENBQWdDaEMsR0FBaEMsQ0FBbEQ7O1VBRUEsSUFBSTZJLGdCQUFnQixJQUFJQyxhQUF4QixFQUF1QztZQUNyQztVQUNEOztVQUVELElBQU16SSxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZMEksUUFBWixDQUFxQi9JLEdBQXJCLENBQWY7VUFDQSxLQUFLZ0osY0FBTCxDQUFvQjNJLE1BQXBCLEVBQTRCTCxHQUE1QjtRQUNEO01BQ0YsQ0FsQlEsQ0FvQlQ7OztNQUNBLElBQUksS0FBS0ssTUFBTCxDQUFZb0UsVUFBWixFQUFKLEVBQThCO1FBQzVCLEtBQUssSUFBTXpFLElBQVgsSUFBa0IsS0FBS0ssTUFBTCxDQUFZb0UsVUFBWixFQUFsQixFQUE0QztVQUMxQyxJQUFJLENBQUN4RSxNQUFNLENBQUNnRCxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMsS0FBSzlDLE1BQUwsQ0FBWW9FLFVBQVosRUFBckMsRUFBK0R6RSxJQUEvRCxDQUFMLEVBQTBFO1lBQ3hFO1VBQ0Q7O1VBRUQsSUFBSSxLQUFLaUosbUJBQUwsQ0FBeUJqSixJQUF6QixDQUFKLEVBQW1DO1lBQ2pDLElBQU1LLE9BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVkwSSxRQUFaLENBQXFCL0ksSUFBckIsQ0FBZjs7WUFDQSxLQUFLZ0osY0FBTCxDQUFvQjNJLE9BQXBCLEVBQTRCTCxJQUE1QjtVQUNEO1FBQ0Y7TUFDRjtJQUNGOzs7V0FFRCxpQkFBUztNQUFBOztNQUNQLEtBQUt0RCxTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUtoQixZQUFoQztNQUNBLEtBQUtELFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3JCLGdCQUFoQztNQUNBLEtBQUtJLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3RCLFdBQWhDLEVBSE8sQ0FLUDs7TUFDQSxJQUFJLEtBQUsrRCxJQUFMLENBQVVvQixPQUFWLENBQWtCMEgsa0JBQWxCLElBQXdDLEtBQUs3SSxNQUFMLENBQVk1QyxNQUFaLENBQW1CLG9CQUFuQixDQUE1QyxFQUFzRjtRQUNwRixJQUFNYixLQUFLLEdBQUcsS0FBS3dELElBQUwsQ0FBVU0sS0FBVixDQUFnQnlILFFBQWhCLENBQXlCO1VBQ3JDaE0sV0FBVyxFQUFFLGVBRHdCO1VBRXJDLE9BQUssNkJBQTZCLEtBQUtxRTtRQUZGLENBQXpCLENBQWQ7UUFLQSxLQUFLOUQsU0FBTCxDQUFlaUIsV0FBZixDQUEyQmYsS0FBM0I7UUFFQSxJQUFNRyxLQUFLLEdBQUcsS0FBS3FELElBQUwsQ0FBVU0sS0FBVixDQUFnQnlJLFFBQWhCLENBQXlCO1VBQ3JDbk0sSUFBSSxFQUFFLE1BRCtCO1VBRXJDQyxFQUFFLEVBQUUsNkJBQTZCLEtBQUt1RDtRQUZELENBQXpCLENBQWQ7UUFLQSxLQUFLOUQsU0FBTCxDQUFlaUIsV0FBZixDQUEyQlosS0FBM0I7UUFFQSxJQUFNb0ksTUFBTSxHQUFHLEtBQUsvRSxJQUFMLENBQVVNLEtBQVYsQ0FBZ0IwRSxTQUFoQixDQUEwQjtVQUN2Q2pKLFdBQVcsRUFBRTtRQUQwQixDQUExQixDQUFmO1FBSUFnSixNQUFNLENBQUNFLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07VUFDckMsSUFBTXJGLEdBQUcsR0FBR2pELEtBQUssQ0FBQ04sS0FBbEIsQ0FEcUMsQ0FHckM7O1VBQ0EsSUFBSXVELEdBQUcsQ0FBQ0gsTUFBSixLQUFlLENBQW5CLEVBQXNCO1lBQ3BCO1VBQ0QsQ0FOb0MsQ0FRckM7OztVQUNBLElBQUlqQixLQUFLLENBQUMsS0FBSSxDQUFDbkMsS0FBTCxDQUFXdUQsR0FBWCxDQUFELENBQVQsRUFBNEI7WUFDMUI7VUFDRDs7VUFFRCxLQUFJLENBQUNnSixjQUFMLENBQW9CO1lBQUVoTSxJQUFJLEVBQUU7VUFBUixDQUFwQixFQUFxQ2dELEdBQXJDOztVQUNBLEtBQUksQ0FBQzBGLFFBQUwsQ0FBYyxLQUFJLENBQUNqSixLQUFuQjs7VUFDQU0sS0FBSyxDQUFDTixLQUFOLEdBQWMsRUFBZDtRQUNELENBaEJEO1FBa0JBLEtBQUtDLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkJ3SCxNQUEzQjtNQUNEO0lBQ0Y7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxvQkFBWTRELFFBQVosRUFBc0I7TUFDcEIsT0FBTyxLQUFLMUksTUFBTCxDQUFZcUUsUUFBWixNQUEwQixLQUFLckUsTUFBTCxDQUFZcUUsUUFBWixHQUF1QjFDLFFBQXZCLENBQWdDK0csUUFBaEMsQ0FBakM7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLDZCQUFxQkEsUUFBckIsRUFBK0I7TUFBQTs7TUFDN0IsSUFBTXhGLGlCQUFpQixHQUFHLEtBQUtsRCxNQUFMLENBQVlrRCxpQkFBWixFQUExQjs7TUFFQSxJQUFJQSxpQkFBSixFQUF1QjtRQUNyQixJQUFJNkYsaUJBQWlCLEdBQUcsRUFBeEI7UUFFQW5KLE1BQU0sQ0FBQ29KLElBQVAsQ0FBWTlGLGlCQUFaLEVBQStCaEcsT0FBL0IsQ0FBdUMsVUFBQ3lDLEdBQUQsRUFBUztVQUM5QyxJQUFJcEIsS0FBSyxDQUFDLE1BQUksQ0FBQ25DLEtBQUwsQ0FBV3VELEdBQVgsQ0FBRCxDQUFULEVBQTRCO1lBQzFCLElBQU1zSixrQkFBa0IsR0FBRy9GLGlCQUFpQixDQUFDdkQsR0FBRCxDQUE1QztZQUVBb0osaUJBQWlCLEdBQUdFLGtCQUFrQixDQUFDdEMsTUFBbkIsQ0FBMEIsVUFBQytCLFFBQUQsRUFBYztjQUMxRCxPQUFPLENBQUM5SSxNQUFNLENBQUNnRCxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMsTUFBSSxDQUFDMUcsS0FBMUMsRUFBaURzTSxRQUFqRCxDQUFSO1lBQ0QsQ0FGbUIsQ0FBcEI7VUFHRDtRQUNGLENBUkQ7UUFVQSxPQUFPSyxpQkFBaUIsQ0FBQ3BILFFBQWxCLENBQTJCK0csUUFBM0IsQ0FBUDtNQUNEOztNQUVELE9BQU8sS0FBUDtJQUNEOzs7V0FFRCx3QkFBZ0IxSSxNQUFoQixFQUF3QkwsR0FBeEIsRUFBNkI7TUFBQTs7TUFDM0IsSUFBTWtILE1BQU0sR0FBRyxLQUFLOUcsSUFBTCxDQUFVMkYsWUFBVixDQUF1QjtRQUNwQzNGLElBQUksRUFBRSxLQUFLQSxJQUR5QjtRQUVwQ0MsTUFBTSxFQUFFLElBQUkrQyxVQUFKLENBQVcvQyxNQUFYLENBRjRCO1FBR3BDRyxJQUFJLEVBQUUsS0FBS0EsSUFBTCxHQUFZLEdBQVosR0FBa0JSLEdBSFk7UUFJcENTLE1BQU0sRUFBRTtNQUo0QixDQUF2QixDQUFmLENBRDJCLENBUTNCOztNQUNBLElBQU04SSxXQUFXLEdBQUcsQ0FBQyxLQUFLQyxVQUFMLENBQWdCeEosR0FBaEIsQ0FBckI7TUFDQSxJQUFNeUosb0JBQW9CLEdBQUcsQ0FBQyxLQUFLUixtQkFBTCxDQUF5QmpKLEdBQXpCLENBQTlCO01BQ0EsSUFBTWtKLGtCQUFrQixHQUFHLEtBQUs5SSxJQUFMLENBQVVvQixPQUFWLENBQWtCMEgsa0JBQWxCLElBQXdDLEtBQUs3SSxNQUFMLENBQVk1QyxNQUFaLENBQW1CLG9CQUFuQixDQUFuRTs7TUFFQSxJQUFJOEwsV0FBVyxJQUFJRSxvQkFBZixJQUF1Q1Asa0JBQTNDLEVBQStEO1FBQzdELElBQU1RLFNBQVMsR0FBRyxLQUFLdEosSUFBTCxDQUFVTSxLQUFWLENBQWdCMEUsU0FBaEIsQ0FBMEI7VUFDMUNqSixXQUFXLEVBQUU7UUFENkIsQ0FBMUIsQ0FBbEI7UUFHQStLLE1BQU0sQ0FBQ3hLLFNBQVAsQ0FBaUJpQixXQUFqQixDQUE2QitMLFNBQTdCO1FBQ0FBLFNBQVMsQ0FBQ3JFLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07VUFDeEMsT0FBTyxNQUFJLENBQUM1SSxLQUFMLENBQVd1RCxHQUFYLENBQVA7O1VBQ0EsTUFBSSxDQUFDMEYsUUFBTCxDQUFjLE1BQUksQ0FBQ2pKLEtBQW5CO1FBQ0QsQ0FIRDtNQUlEOztNQUVELEtBQUtxRSxZQUFMLENBQWtCK0YsSUFBbEIsQ0FBdUJLLE1BQXZCO01BQ0EsS0FBS3pLLEtBQUwsQ0FBV3VELEdBQVgsSUFBa0JrSCxNQUFNLENBQUMxRSxRQUFQLEVBQWxCO0lBQ0Q7OztXQUVELDJCQUFtQnhDLEdBQW5CLEVBQXdCO01BQ3RCLEtBQUssSUFBSTJKLENBQUMsR0FBRyxLQUFLN0ksWUFBTCxDQUFrQmpCLE1BQWxCLEdBQTJCLENBQXhDLEVBQTJDOEosQ0FBQyxJQUFJLENBQWhELEVBQW1EQSxDQUFDLEVBQXBELEVBQXdEO1FBQ3RELElBQU16QyxNQUFNLEdBQUcsS0FBS3BHLFlBQUwsQ0FBa0I2SSxDQUFsQixDQUFmOztRQUNBLElBQUl6QyxNQUFNLENBQUN6RSxNQUFQLE9BQW9CekMsR0FBeEIsRUFBNkI7VUFDM0JrSCxNQUFNLENBQUNKLE9BQVA7VUFDQSxLQUFLaEcsWUFBTCxDQUFrQjRGLE1BQWxCLENBQXlCaUQsQ0FBekIsRUFBNEIsQ0FBNUI7UUFDRDtNQUNGO0lBQ0Y7OztXQUVELCtCQUF1QjtNQUNyQixJQUFNbE4sS0FBSyxHQUFHLEVBQWQ7TUFFQSxLQUFLcUUsWUFBTCxDQUFrQnZELE9BQWxCLENBQTBCLFVBQUMwSixXQUFELEVBQWlCO1FBQ3pDeEssS0FBSyxDQUFDd0ssV0FBVyxDQUFDeEUsTUFBWixFQUFELENBQUwsR0FBOEJ3RSxXQUFXLENBQUN6RSxRQUFaLEVBQTlCO01BQ0QsQ0FGRDtNQUlBLEtBQUtrRCxRQUFMLENBQWNqSixLQUFkO0lBQ0Q7OztXQUVELHdCQUFnQnVELEdBQWhCLEVBQXFCO01BQ25CLE9BQU8sS0FBS2MsWUFBTCxDQUFrQjhJLElBQWxCLENBQXVCLFVBQUMzQyxXQUFELEVBQWlCO1FBQzdDLE9BQU9qSCxHQUFHLEtBQUtpSCxXQUFXLENBQUN4RSxNQUFaLEdBQXFCZCxLQUFyQixDQUEyQixHQUEzQixFQUFnQ0MsR0FBaEMsRUFBZjtNQUNELENBRk0sQ0FBUDtJQUdEOzs7V0FFRCxrQkFBVW5GLEtBQVYsRUFBaUI7TUFDZixJQUFJNkMsY0FBUSxDQUFDN0MsS0FBRCxDQUFaLEVBQXFCO1FBQ25CLE9BQU9BLEtBQVA7TUFDRDs7TUFFRCxPQUFPLEVBQVA7SUFDRDs7O1dBRUQsc0JBQWM7TUFDWixLQUFLaUYsb0JBQUw7TUFDQSxJQUFNakYsS0FBSyxHQUFHLEtBQUsrRixRQUFMLEVBQWQsQ0FGWSxDQUlaOztNQUNBLEtBQUssSUFBSW1ILENBQUMsR0FBRyxLQUFLN0ksWUFBTCxDQUFrQmpCLE1BQWxCLEdBQTJCLENBQXhDLEVBQTJDOEosQ0FBQyxJQUFJLENBQWhELEVBQW1EQSxDQUFDLEVBQXBELEVBQXdEO1FBQ3RELElBQU16QyxNQUFNLEdBQUcsS0FBS3BHLFlBQUwsQ0FBa0I2SSxDQUFsQixDQUFmO1FBQ0EsSUFBTTNKLEdBQUcsR0FBR2tILE1BQU0sQ0FBQ3pFLE1BQVAsRUFBWjs7UUFDQSxJQUFJLENBQUM3RCxLQUFLLENBQUNuQyxLQUFLLENBQUN1RCxHQUFELENBQU4sQ0FBVixFQUF3QjtVQUN0QixLQUFLNkosaUJBQUwsQ0FBdUI3SixHQUF2QjtRQUNEO01BQ0Y7O01BRUQsS0FBSyxJQUFNQSxLQUFYLElBQWtCdkQsS0FBbEIsRUFBeUI7UUFDdkIsSUFBSSxDQUFDd0QsTUFBTSxDQUFDZ0QsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDMUcsS0FBckMsRUFBNEN1RCxLQUE1QyxDQUFMLEVBQXVEO1VBQ3JEO1FBQ0Q7O1FBRUQsSUFBTWlILFdBQVcsR0FBRyxLQUFLNkMsY0FBTCxDQUFvQjlKLEtBQXBCLENBQXBCLENBTHVCLENBT3ZCOztRQUNBLElBQUlpSCxXQUFKLEVBQWlCO1VBQ2YsSUFBTThDLFFBQVEsR0FBRzlDLFdBQVcsQ0FBQ3pFLFFBQVosRUFBakI7VUFDQSxJQUFNUCxRQUFRLEdBQUd4RixLQUFLLENBQUN3SyxXQUFXLENBQUN4RSxNQUFaLEVBQUQsQ0FBdEIsQ0FGZSxDQUlmOztVQUNBLElBQUksQ0FBQ2xFLEtBQUssQ0FBQ3dMLFFBQUQsRUFBVzlILFFBQVgsQ0FBVixFQUFnQztZQUM5QmdGLFdBQVcsQ0FBQ3ZCLFFBQVosQ0FBcUJ6RCxRQUFyQixFQUErQixLQUEvQjtVQUNEO1FBQ0YsQ0FSRCxNQVFPO1VBQ0w7VUFDQSxJQUFNK0gsWUFBWSxHQUFHdk4sS0FBSyxDQUFDdUQsS0FBRCxDQUExQjtVQUNBLElBQU1oRCxJQUFJLEdBQUd1QyxPQUFPLENBQUN5SyxZQUFELENBQXBCO1VBRUEsSUFBTTNKLE1BQU0sR0FBRztZQUNickQsSUFBSSxFQUFFQSxJQURPO1lBRWIsV0FBU2dOO1VBRkksQ0FBZjtVQUtBLEtBQUtoQixjQUFMLENBQW9CM0ksTUFBcEIsRUFBNEJMLEtBQTVCO1FBQ0Q7TUFDRjtJQUNGOzs7V0FFRCxxQkFBYTtNQUNYLElBQU12RCxLQUFLLEdBQUcsS0FBSytGLFFBQUwsRUFBZDs7TUFFQSxLQUFLLElBQU14QyxHQUFYLElBQWtCdkQsS0FBbEIsRUFBeUI7UUFDdkIsSUFBSSxDQUFDd0QsTUFBTSxDQUFDZ0QsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDMUcsS0FBckMsRUFBNEN1RCxHQUE1QyxDQUFMLEVBQXVEO1VBQ3JEO1FBQ0Q7O1FBRUQsSUFBTWlILFdBQVcsR0FBRyxLQUFLNkMsY0FBTCxDQUFvQjlKLEdBQXBCLENBQXBCO1FBRUEsS0FBSzFELGdCQUFMLENBQXNCcUIsV0FBdEIsQ0FBa0NzSixXQUFXLENBQUN2SyxTQUE5Qzs7UUFFQSxJQUFJdUssV0FBSixFQUFpQjtVQUNmLElBQUksS0FBSzNHLFFBQVQsRUFBbUI7WUFDakIyRyxXQUFXLENBQUNRLE9BQVo7VUFDRCxDQUZELE1BRU87WUFDTFIsV0FBVyxDQUFDUyxNQUFaO1VBQ0Q7UUFDRjtNQUNGO0lBQ0Y7OztXQUVELHdCQUFnQjtNQUNkLEtBQUtoTCxTQUFMLEdBQWlCLEtBQUswRCxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JpRixXQUFoQixFQUFqQixDQURjLENBR2Q7O01BQ0EsSUFBSSxDQUFDLEtBQUt0RixNQUFMLENBQVk1QyxNQUFaLENBQW1CLFdBQW5CLENBQUwsRUFBc0M7UUFDcEMsS0FBS2YsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLeUMsSUFBTCxDQUFVTSxLQUFWLENBQWdCa0YsU0FBaEIsQ0FBMEI7VUFDbkR6SixXQUFXLEVBQUUsS0FBS2tFLE1BQUwsQ0FBWXdFLEtBQVosS0FBc0IsS0FBS3hFLE1BQUwsQ0FBWXdFLEtBQVosRUFBdEIsR0FBNEMsS0FBS3BDLE1BQUw7UUFETixDQUExQixDQUEzQixFQURvQyxDQUtwQzs7UUFDQSxJQUFJLEtBQUtwQyxNQUFMLENBQVltRCxXQUFaLEVBQUosRUFBK0I7VUFDN0IsS0FBSzlHLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3lDLElBQUwsQ0FBVU0sS0FBVixDQUFnQm1GLGNBQWhCLENBQStCO1lBQ3hEMUosV0FBVyxFQUFFLEtBQUtrRSxNQUFMLENBQVltRCxXQUFaO1VBRDJDLENBQS9CLENBQTNCO1FBR0Q7TUFDRjtJQUNGOzs7V0FFRCxtQkFBVztNQUNULEtBQUsxQyxZQUFMLENBQWtCdkQsT0FBbEIsQ0FBMEIsVUFBQzBKLFdBQUQsRUFBaUI7UUFDekNBLFdBQVcsQ0FBQ0gsT0FBWjtNQUNELENBRkQ7O01BSUE7SUFDRDs7OztFQTNRd0IzRyxVOztBQThRWnlJLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2xSQTs7SUFFTXFCLG1COzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLdk4sU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLaEIsWUFBaEMsRUFETyxDQUdQOztNQUNBLElBQU1DLEtBQUssR0FBRyxLQUFLd0QsSUFBTCxDQUFVTSxLQUFWLENBQWdCeUgsUUFBaEIsQ0FBeUI7UUFDckMsT0FBSyxLQUFLM0gsSUFEMkI7UUFFckNyRSxXQUFXLEVBQUUsS0FBS2tFLE1BQUwsQ0FBWXdFLEtBQVosS0FBc0IsS0FBS3hFLE1BQUwsQ0FBWXdFLEtBQVosRUFBdEIsR0FBNEMsS0FBS3BDLE1BQUw7TUFGcEIsQ0FBekIsQ0FBZDs7TUFLQSxJQUFJLENBQUMsS0FBS3BDLE1BQUwsQ0FBWTZKLFFBQVosQ0FBcUIsUUFBckIsQ0FBTCxFQUFxQztRQUNuQyxLQUFLeE4sU0FBTCxDQUFlaUIsV0FBZixDQUEyQmYsS0FBM0I7TUFDRCxDQVhNLENBYVA7TUFDQTs7O01BQ0EsSUFBTXVOLFVBQVUsR0FBRyxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLE1BQXBCLEVBQTRCLGdCQUE1QixFQUE4QyxPQUE5QyxFQUF1RCxRQUF2RCxFQUFpRSxPQUFqRSxFQUEwRSxVQUExRSxFQUFzRixRQUF0RixFQUFnRyxNQUFoRyxFQUF3RyxLQUF4RyxFQUErRyxNQUEvRyxFQUF1SCxVQUF2SCxFQUFtSSxLQUFuSSxFQUEwSSxNQUExSSxDQUFuQjs7TUFFQSxJQUFJLEtBQUs5SixNQUFMLENBQVk2SixRQUFaLENBQXFCLFVBQXJCLENBQUosRUFBc0M7UUFDcEMsS0FBS25OLEtBQUwsR0FBYSxLQUFLcUQsSUFBTCxDQUFVTSxLQUFWLENBQWdCMEosV0FBaEIsQ0FBNEI7VUFDdkNuTixFQUFFLEVBQUUsS0FBS3VEO1FBRDhCLENBQTVCLENBQWI7TUFHRCxDQUpELE1BSU87UUFDTCxLQUFLekQsS0FBTCxHQUFhLEtBQUtxRCxJQUFMLENBQVVNLEtBQVYsQ0FBZ0J5SSxRQUFoQixDQUF5QjtVQUNwQ25NLElBQUksRUFBRW1OLFVBQVUsQ0FBQ25JLFFBQVgsQ0FBb0IsS0FBSzNCLE1BQUwsQ0FBWXNELE1BQVosRUFBcEIsSUFBNEMsS0FBS3RELE1BQUwsQ0FBWXNELE1BQVosRUFBNUMsR0FBbUUsTUFEckM7VUFFcEMxRyxFQUFFLEVBQUUsS0FBS3VEO1FBRjJCLENBQXpCLENBQWI7TUFJRDs7TUFFRCxLQUFLOUQsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLWixLQUFoQyxFQTVCTyxDQThCUDs7TUFDQSxLQUFLQSxLQUFMLENBQVdzSSxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxZQUFNO1FBQzFDLEtBQUksQ0FBQ0ssUUFBTCxDQUFjLEtBQUksQ0FBQzNJLEtBQUwsQ0FBV04sS0FBekI7TUFDRCxDQUZELEVBL0JPLENBbUNQOztNQUNBLElBQUksS0FBSzRELE1BQUwsQ0FBWW1ELFdBQVosRUFBSixFQUErQjtRQUM3QixLQUFLOUcsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLeUMsSUFBTCxDQUFVTSxLQUFWLENBQWdCbUYsY0FBaEIsQ0FBK0I7VUFDeEQxSixXQUFXLEVBQUUsS0FBS2tFLE1BQUwsQ0FBWW1ELFdBQVo7UUFEMkMsQ0FBL0IsQ0FBM0I7TUFHRDtJQUNGOzs7V0FFRCxrQkFBVS9HLEtBQVYsRUFBaUI7TUFDZixPQUFPNE4sTUFBTSxDQUFDNU4sS0FBRCxDQUFiO0lBQ0Q7OztXQUVELHFCQUFhO01BQ1gsS0FBS00sS0FBTCxDQUFXTixLQUFYLEdBQW1CLEtBQUsrRixRQUFMLEVBQW5COztNQUVBLElBQUksS0FBS2xDLFFBQVQsRUFBbUI7UUFDakIsS0FBS3ZELEtBQUwsQ0FBV1AsWUFBWCxDQUF3QixVQUF4QixFQUFvQyxVQUFwQztNQUNELENBRkQsTUFFTztRQUNMLEtBQUtPLEtBQUwsQ0FBVzRLLGVBQVgsQ0FBMkIsVUFBM0I7TUFDRDtJQUNGOzs7O0VBeER3QnhILFU7O0FBMkRaOEosc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0RBOztJQUVNSyx5Qzs7Ozs7Ozs7Ozs7OztXQUNKLG1CQUFXO01BQ1QsS0FBS2hOLFlBQUwsR0FBb0IsS0FBSytDLE1BQUwsVUFBcEI7TUFDQSxLQUFLM0MsYUFBTCxHQUFxQixLQUFLMkMsTUFBTCxDQUFZNUMsTUFBWixDQUFtQixZQUFuQixLQUFvQyxLQUFLSCxZQUE5RDtJQUNEOzs7V0FFRCxpQkFBUztNQUFBOztNQUNQLEtBQUtaLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS2hCLFlBQWhDLEVBRE8sQ0FHUDs7TUFDQSxLQUFLRCxTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUt5QyxJQUFMLENBQVVNLEtBQVYsQ0FBZ0J5SCxRQUFoQixDQUF5QjtRQUNsRCxPQUFLLEtBQUszSCxJQUR3QztRQUVsRHJFLFdBQVcsRUFBRSxLQUFLa0UsTUFBTCxDQUFZd0UsS0FBWixLQUFzQixLQUFLeEUsTUFBTCxDQUFZd0UsS0FBWixFQUF0QixHQUE0QyxLQUFLcEMsTUFBTDtNQUZQLENBQXpCLENBQTNCLEVBSk8sQ0FTUDs7TUFDQSxLQUFLMUYsS0FBTCxHQUFhLEtBQUtxRCxJQUFMLENBQVVNLEtBQVYsQ0FBZ0IwSCxTQUFoQixDQUEwQjtRQUNyQzlLLFlBQVksRUFBRSxLQUFLQSxZQURrQjtRQUVyQ0ksYUFBYSxFQUFFLEtBQUtBLGFBRmlCO1FBR3JDVCxFQUFFLEVBQUUsS0FBS3VEO01BSDRCLENBQTFCLENBQWI7TUFNQSxLQUFLOUQsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLWixLQUFoQyxFQWhCTyxDQWtCUDs7TUFDQSxLQUFLQSxLQUFMLENBQVdzSSxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxZQUFNO1FBQzFDLEtBQUksQ0FBQ0ssUUFBTCxDQUFjLEtBQUksQ0FBQzNJLEtBQUwsQ0FBV04sS0FBekI7TUFDRCxDQUZELEVBbkJPLENBdUJQOztNQUNBLElBQUksS0FBSzRELE1BQUwsQ0FBWW1ELFdBQVosRUFBSixFQUErQjtRQUM3QixLQUFLOUcsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLeUMsSUFBTCxDQUFVTSxLQUFWLENBQWdCbUYsY0FBaEIsQ0FBK0I7VUFDeEQxSixXQUFXLEVBQUUsS0FBS2tFLE1BQUwsQ0FBWW1ELFdBQVo7UUFEMkMsQ0FBL0IsQ0FBM0I7TUFHRCxDQTVCTSxDQThCUDtNQUNBO01BQ0E7TUFDQTtNQUNBOztJQUNEOzs7O0VBekNrQ3lHLGM7O0FBNEN0QkssZ0dBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUNBOztJQUVNQyx1Qzs7Ozs7Ozs7Ozs7OztXQUNKLG1CQUFXO01BQ1QsS0FBS2pOLFlBQUwsR0FBb0IsS0FBSytDLE1BQUwsVUFBcEI7TUFDQSxLQUFLM0MsYUFBTCxHQUFxQixLQUFLMkMsTUFBTCxDQUFZNUMsTUFBWixDQUFtQixZQUFuQixLQUFvQyxLQUFLSCxZQUE5RDtJQUNEOzs7V0FFRCxpQkFBUztNQUFBOztNQUNQLEtBQUtaLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS2hCLFlBQWhDO01BQ0EsS0FBSzJMLFdBQUwsR0FBbUIsRUFBbkIsQ0FGTyxDQUlQOztNQUNBLEtBQUs1TCxTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUt5QyxJQUFMLENBQVVNLEtBQVYsQ0FBZ0I2SCxjQUFoQixDQUErQjtRQUN4RHBNLFdBQVcsRUFBRSxLQUFLa0UsTUFBTCxDQUFZd0UsS0FBWixLQUFzQixLQUFLeEUsTUFBTCxDQUFZd0UsS0FBWixFQUF0QixHQUE0QyxLQUFLcEMsTUFBTDtNQURELENBQS9CLENBQTNCLEVBTE8sQ0FTUDs7TUFDQSxLQUFLbkYsWUFBTCxDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQ2QsS0FBRCxFQUFRZSxLQUFSLEVBQWtCO1FBQzFDO1FBQ0EsSUFBTWdMLGNBQWMsR0FBRyxLQUFJLENBQUNwSSxJQUFMLENBQVVNLEtBQVYsQ0FBZ0IrSCxpQkFBaEIsRUFBdkIsQ0FGMEMsQ0FJMUM7OztRQUNBLElBQU10TCxLQUFLLEdBQUcsS0FBSSxDQUFDaUQsSUFBTCxDQUFVTSxLQUFWLENBQWdCZ0ksUUFBaEIsQ0FBeUI7VUFDckNqTSxLQUFLLEVBQUVBLEtBRDhCO1VBRXJDUSxFQUFFLEVBQUUsS0FBSSxDQUFDdUQsSUFBTCxHQUFZLEdBQVosR0FBa0JoRDtRQUZlLENBQXpCLENBQWQ7O1FBSUFnTCxjQUFjLENBQUM3SyxXQUFmLENBQTJCUixLQUEzQjtRQUVBQSxLQUFLLENBQUNrSSxnQkFBTixDQUF1QixRQUF2QixFQUFpQyxZQUFNO1VBQ3JDLEtBQUksQ0FBQ0ssUUFBTCxDQUFjdkksS0FBSyxDQUFDVixLQUFwQjtRQUNELENBRkQ7O1FBSUEsS0FBSSxDQUFDNkwsV0FBTCxDQUFpQnpCLElBQWpCLENBQXNCMUosS0FBdEIsRUFmMEMsQ0FpQjFDOzs7UUFDQXFMLGNBQWMsQ0FBQzdLLFdBQWYsQ0FBMkIsS0FBSSxDQUFDeUMsSUFBTCxDQUFVTSxLQUFWLENBQWdCeUgsUUFBaEIsQ0FBeUI7VUFDbEQsT0FBSyxLQUFJLENBQUMzSCxJQUFMLEdBQVksR0FBWixHQUFrQmhELEtBRDJCO1VBRWxEckIsV0FBVyxFQUFFLEtBQUksQ0FBQ3VCLGFBQUwsQ0FBbUJGLEtBQW5CO1FBRnFDLENBQXpCLENBQTNCOztRQUtBLEtBQUksQ0FBQ2QsU0FBTCxDQUFlaUIsV0FBZixDQUEyQjZLLGNBQTNCO01BQ0QsQ0F4QkQsRUFWTyxDQW9DUDs7TUFDQSxJQUFJLEtBQUtuSSxNQUFMLENBQVltRCxXQUFaLEVBQUosRUFBK0I7UUFDN0IsS0FBSzlHLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3lDLElBQUwsQ0FBVU0sS0FBVixDQUFnQm1GLGNBQWhCLENBQStCO1VBQ3hEMUosV0FBVyxFQUFFLEtBQUtrRSxNQUFMLENBQVltRCxXQUFaO1FBRDJDLENBQS9CLENBQTNCO01BR0Q7SUFDRjs7O1dBRUQscUJBQWE7TUFBQTs7TUFDWCxLQUFLOEUsV0FBTCxDQUFpQi9LLE9BQWpCLENBQXlCLFVBQUNKLEtBQUQsRUFBVztRQUNsQ0EsS0FBSyxDQUFDNkssT0FBTixHQUFpQjdLLEtBQUssQ0FBQ1YsS0FBTixLQUFnQixNQUFJLENBQUMrRixRQUFMLEVBQWpDO1FBQ0FyRixLQUFLLENBQUNtRCxRQUFOLEdBQWlCLE1BQUksQ0FBQ0EsUUFBdEI7TUFDRCxDQUhEO0lBSUQ7Ozs7RUF2RGlDMkosYzs7QUEwRHJCTSw2RkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBOztJQUVNQyx1Qjs7Ozs7Ozs7Ozs7OztXQUNKLG1CQUFXO01BQUE7O01BQ1QsS0FBS0MsT0FBTCxHQUFlLEVBQWY7TUFDQSxLQUFLQyxvQkFBTCxHQUE0QixFQUE1QjtNQUNBLEtBQUtDLHFCQUFMLEdBQTZCLEVBQTdCO01BQ0EsS0FBS0MsWUFBTCxHQUFvQixJQUFwQjtNQUNBLEtBQUtDLFNBQUwsR0FBaUIsQ0FBakI7TUFDQSxLQUFLck4sS0FBTCxHQUFhLENBQWI7TUFFQSxJQUFJc04sT0FBTyxHQUFHLEVBQWQ7O01BRUEsSUFBSSxLQUFLekssTUFBTCxDQUFZaUQsS0FBWixNQUF1QixLQUFLakQsTUFBTCxDQUFZMEUsS0FBWixFQUEzQixFQUFnRDtRQUM5QyxJQUFNZ0csU0FBUyxHQUFHLEtBQUsxSyxNQUFMLENBQVlpRCxLQUFaLEtBQXNCLEtBQUtqRCxNQUFMLENBQVlpRCxLQUFaLEVBQXRCLEdBQTRDLEtBQUtqRCxNQUFMLENBQVkwRSxLQUFaLEVBQTlEO1FBQ0EsSUFBTWlHLFdBQVcsR0FBRyxLQUFLM0ssTUFBTCxDQUFZbkMsS0FBWixFQUFwQjtRQUNBLE9BQU84TSxXQUFXLENBQUMsT0FBRCxDQUFsQjtRQUNBLE9BQU9BLFdBQVcsQ0FBQyxPQUFELENBQWxCO1FBQ0EsT0FBT0EsV0FBVyxDQUFDLFNBQUQsQ0FBbEI7UUFFQUQsU0FBUyxDQUFDeE4sT0FBVixDQUFrQixVQUFDOEMsTUFBRCxFQUFTN0MsS0FBVCxFQUFtQjtVQUFBOztVQUNuQzZDLE1BQU0sbUNBQVEySyxXQUFSLEdBQXdCM0ssTUFBeEIsQ0FBTixDQURtQyxDQUduQzs7VUFDQSxJQUFJQSxNQUFNLENBQUNnRCxLQUFYLEVBQWtCO1lBQ2hCLElBQUk0SCxNQUFNLEdBQUcsRUFBYjtZQUVBNUssTUFBTSxDQUFDZ0QsS0FBUCxDQUFhOUYsT0FBYixDQUFxQixVQUFDMk4sV0FBRCxFQUFpQjtjQUNwQ0QsTUFBTSxHQUFHdkwsZUFBUyxDQUFDdUwsTUFBRCxFQUFTQyxXQUFULENBQWxCO1lBQ0QsQ0FGRDtZQUlBN0ssTUFBTSxHQUFHNEssTUFBVDtVQUNEOztVQUVELElBQUlyTSxLQUFLLENBQUNvTSxXQUFXLENBQUNuRyxLQUFiLENBQVQsRUFBOEI7WUFDNUJ4RSxNQUFNLENBQUN3RSxLQUFQLEdBQWVtRyxXQUFXLENBQUNuRyxLQUEzQjtVQUNEOztVQUVELEtBQUksQ0FBQzZGLG9CQUFMLENBQTBCN0QsSUFBMUIsQ0FBK0JySixLQUEvQjs7VUFDQSxJQUFNMk4sb0JBQW9CLEdBQUcsb0JBQUE5SyxNQUFNLENBQUNtQixPQUFQLG9FQUFnQjRKLGFBQWhCLEtBQWlDLGFBQWE1TixLQUFLLEdBQUcsQ0FBckIsQ0FBOUQ7O1VBQ0EsS0FBSSxDQUFDbU4scUJBQUwsQ0FBMkI5RCxJQUEzQixDQUFnQ3NFLG9CQUFoQzs7VUFDQUwsT0FBTyxDQUFDakUsSUFBUixDQUFheEcsTUFBYjtRQUNELENBdEJEO01BdUJELENBOUJELE1BOEJPLElBQUksS0FBS0EsTUFBTCxDQUFZZ0wsS0FBWixFQUFKLEVBQXlCO1FBQzlCLEtBQUtoTCxNQUFMLENBQVlyRCxJQUFaLEdBQW1CTyxPQUFuQixDQUEyQixVQUFDUCxJQUFELEVBQU9RLEtBQVAsRUFBaUI7VUFDMUMsSUFBTThOLFdBQVcsR0FBRyxLQUFJLENBQUNqTCxNQUFMLENBQVluQyxLQUFaLEVBQXBCOztVQUVBLElBQU1tQyxNQUFNLG1DQUNQaUwsV0FETyxHQUVQO1lBQUV0TyxJQUFJLEVBQUVBLElBQVI7WUFBYzZILEtBQUssRUFBRTdILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXVPLFdBQVIsS0FBd0J2TyxJQUFJLENBQUN3TyxLQUFMLENBQVcsQ0FBWDtVQUE3QyxDQUZPLENBQVo7O1VBS0EsSUFBSTVNLEtBQUssQ0FBQzBNLFdBQVcsQ0FBQ3pHLEtBQWIsQ0FBVCxFQUE4QjtZQUM1QnhFLE1BQU0sQ0FBQ3dFLEtBQVAsR0FBZXlHLFdBQVcsQ0FBQ3pHLEtBQTNCO1VBQ0Q7O1VBRURpRyxPQUFPLENBQUNqRSxJQUFSLENBQWF4RyxNQUFiOztVQUVBLEtBQUksQ0FBQ3FLLG9CQUFMLENBQTBCN0QsSUFBMUIsQ0FBK0JySixLQUEvQjs7VUFDQSxLQUFJLENBQUNtTixxQkFBTCxDQUEyQjlELElBQTNCLENBQWdDN0osSUFBSSxDQUFDeU8sTUFBTCxDQUFZLENBQVosRUFBZUYsV0FBZixLQUErQnZPLElBQUksQ0FBQ3dPLEtBQUwsQ0FBVyxDQUFYLENBQS9EO1FBQ0QsQ0FoQkQ7TUFpQkQsQ0FsQk0sTUFrQkEsSUFBSSxLQUFLbkwsTUFBTCxDQUFZeUUsTUFBWixDQUFtQixLQUFuQixLQUE2QixDQUFDLEtBQUt6RSxNQUFMLENBQVlyRCxJQUFaLEVBQWxDLEVBQXNEO1FBQzNELElBQU1zTyxXQUFXLEdBQUcsS0FBS2pMLE1BQUwsQ0FBWW5DLEtBQVosRUFBcEI7UUFFQTRNLE9BQU8sR0FBRyxpQ0FDSFEsV0FERyxHQUNhO1VBQUV0TyxJQUFJLEVBQUU7UUFBUixDQURiLG1DQUVIc08sV0FGRyxHQUVhO1VBQUV0TyxJQUFJLEVBQUU7UUFBUixDQUZiLG1DQUdIc08sV0FIRyxHQUdhO1VBQUV0TyxJQUFJLEVBQUU7UUFBUixDQUhiLG1DQUlIc08sV0FKRyxHQUlhO1VBQUV0TyxJQUFJLEVBQUU7UUFBUixDQUpiLG1DQUtIc08sV0FMRyxHQUthO1VBQUV0TyxJQUFJLEVBQUU7UUFBUixDQUxiLG1DQU1Ic08sV0FORyxHQU1hO1VBQUV0TyxJQUFJLEVBQUU7UUFBUixDQU5iLG1DQU9Ic08sV0FQRyxHQU9hO1VBQUV0TyxJQUFJLEVBQUU7UUFBUixDQVBiLEVBQVY7UUFVQThOLE9BQU8sQ0FBQ3ZOLE9BQVIsQ0FBZ0IsVUFBQzhDLE1BQUQsRUFBUzdDLEtBQVQsRUFBbUI7VUFDakMsS0FBSSxDQUFDa04sb0JBQUwsQ0FBMEI3RCxJQUExQixDQUErQnJKLEtBQS9CO1FBQ0QsQ0FGRDtRQUlBLEtBQUttTixxQkFBTCxHQUE2QixDQUMzQixRQUQyQixFQUNqQixRQURpQixFQUNQLFNBRE8sRUFDSSxTQURKLEVBQ2UsT0FEZixFQUN3QixRQUR4QixFQUNrQyxNQURsQyxDQUE3QjtNQUdELENBOUVRLENBZ0ZUOzs7TUFDQUcsT0FBTyxDQUFDdk4sT0FBUixDQUFnQixVQUFDOEMsTUFBRCxFQUFZO1FBQzFCLElBQU02RyxNQUFNLEdBQUcsS0FBSSxDQUFDOUcsSUFBTCxDQUFVMkYsWUFBVixDQUF1QjtVQUNwQzNGLElBQUksRUFBRSxLQUFJLENBQUNBLElBRHlCO1VBRXBDQyxNQUFNLEVBQUUsSUFBSStDLFVBQUosQ0FBVy9DLE1BQVgsQ0FGNEI7VUFHcENHLElBQUksRUFBRSxLQUFJLENBQUNBLElBSHlCO1VBSXBDQyxNQUFNLEVBQUUsS0FBSSxDQUFDQTtRQUp1QixDQUF2QixDQUFmOztRQU9BeUcsTUFBTSxDQUFDbEUsVUFBUDs7UUFFQWtFLE1BQU0sQ0FBQzlFLFFBQVAsR0FBa0IsWUFBTTtVQUN0QixLQUFJLENBQUNBLFFBQUw7UUFDRCxDQUZEOztRQUlBLEtBQUksQ0FBQ3FJLE9BQUwsQ0FBYTVELElBQWIsQ0FBa0JLLE1BQWxCO01BQ0QsQ0FmRDtJQWdCRDs7O1dBRUQsaUJBQVM7TUFBQTs7TUFDUCxLQUFLeEssU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLaEIsWUFBaEMsRUFETyxDQUdQOztNQUNBLEtBQUsrTyxlQUFMLEdBQXVCLEVBQXZCO01BQ0EsS0FBS0MsUUFBTCxHQUFnQixLQUFLdkwsSUFBTCxDQUFVTSxLQUFWLENBQWdCd0UsV0FBaEIsRUFBaEI7TUFDQSxLQUFLeUcsUUFBTCxDQUFjMVAsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsZUFBNUI7TUFFQSxLQUFLd08sb0JBQUwsQ0FBMEJuTixPQUExQixDQUFrQyxVQUFDZCxLQUFELEVBQVFlLEtBQVIsRUFBa0I7UUFDbEQ7UUFDQSxJQUFNakIsTUFBTSxHQUFHLE1BQUksQ0FBQzZELElBQUwsQ0FBVU0sS0FBVixDQUFnQjBFLFNBQWhCLENBQTBCO1VBQ3ZDakosV0FBVyxFQUFFLE1BQUksQ0FBQ3dPLHFCQUFMLENBQTJCbk4sS0FBM0IsQ0FEMEI7VUFFdkNmLEtBQUssRUFBRWU7UUFGZ0MsQ0FBMUIsQ0FBZjs7UUFLQWpCLE1BQU0sQ0FBQzhJLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07VUFDckMsSUFBTTdILEtBQUssR0FBR3lJLE1BQU0sQ0FBQzFKLE1BQU0sQ0FBQ0UsS0FBUixDQUFwQjs7VUFDQSxNQUFJLENBQUNtUCxZQUFMLENBQWtCcE8sS0FBbEI7UUFDRCxDQUhEOztRQUtBLE1BQUksQ0FBQ21PLFFBQUwsQ0FBY2hPLFdBQWQsQ0FBMEJwQixNQUExQjs7UUFDQSxNQUFJLENBQUNtUCxlQUFMLENBQXFCN0UsSUFBckIsQ0FBMEJ0SyxNQUExQjtNQUNELENBZEQ7TUFnQkEsS0FBS0csU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLZ08sUUFBaEM7O01BRUEsSUFBSS9NLEtBQUssQ0FBQyxLQUFLNkwsT0FBTCxDQUFhLENBQWIsQ0FBRCxDQUFULEVBQTRCO1FBQzFCLEtBQUttQixZQUFMLENBQWtCLENBQWxCLEVBQXFCLEtBQXJCO01BQ0Q7SUFDRjs7O1dBRUQsc0JBQWNDLFFBQWQsRUFBK0M7TUFBQSxJQUF2QjNKLGNBQXVCLHVFQUFOLElBQU07TUFDN0MsS0FBSzJJLFNBQUwsR0FBaUIsS0FBS3JOLEtBQXRCO01BQ0EsS0FBS0EsS0FBTCxHQUFhcU8sUUFBYjtNQUNBLEtBQUtqQixZQUFMLEdBQW9CLEtBQUtILE9BQUwsQ0FBYSxLQUFLak4sS0FBbEIsQ0FBcEI7TUFDQSxLQUFLa0ksUUFBTCxDQUFjLEtBQUtsRCxRQUFMLEVBQWQsRUFBK0JOLGNBQS9CO0lBQ0Q7OztXQUVELHdCQUFnQjtNQUNkLEtBQUt4RixTQUFMLEdBQWlCLEtBQUswRCxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JpRixXQUFoQixFQUFqQjtNQUNBLEtBQUtqSixTQUFMLENBQWVGLFlBQWYsQ0FBNEIsV0FBNUIsRUFBeUMsVUFBekM7TUFFQSxLQUFLRSxTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUt5QyxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JrRixTQUFoQixDQUEwQjtRQUNuRHpKLFdBQVcsRUFBRSxLQUFLa0UsTUFBTCxDQUFZd0UsS0FBWixLQUFzQixLQUFLeEUsTUFBTCxDQUFZd0UsS0FBWixFQUF0QixHQUE0QyxLQUFLcEMsTUFBTCxFQUROO1FBRW5EM0YsTUFBTSxFQUFFO01BRjJDLENBQTFCLENBQTNCO0lBSUQ7OztXQUVELHFCQUFhO01BQUE7O01BQ1gsSUFBTWdQLFNBQVMsR0FBRyxLQUFLckIsT0FBTCxDQUFhLEtBQUtJLFNBQWxCLENBQWxCOztNQUVBLElBQUlpQixTQUFTLENBQUNwUCxTQUFWLENBQW9Cb0csVUFBeEIsRUFBb0M7UUFDbEMsS0FBS3BHLFNBQUwsQ0FBZXFHLFdBQWYsQ0FBMkIrSSxTQUFTLENBQUNwUCxTQUFyQztNQUNEOztNQUVELEtBQUtBLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS2lOLFlBQUwsQ0FBa0JsTyxTQUE3Qzs7TUFFQSxJQUFJLEtBQUs0RCxRQUFULEVBQW1CO1FBQ2pCLEtBQUtzSyxZQUFMLENBQWtCbkQsT0FBbEI7UUFDQSxLQUFLaUUsZUFBTCxDQUFxQm5PLE9BQXJCLENBQTZCLFVBQUNoQixNQUFELEVBQVk7VUFDdkNBLE1BQU0sQ0FBQytELFFBQVAsR0FBa0IsSUFBbEI7UUFDRCxDQUZEO01BR0QsQ0FMRCxNQUtPO1FBQ0wsS0FBS3NLLFlBQUwsQ0FBa0JsRCxNQUFsQjtRQUNBLEtBQUtnRSxlQUFMLENBQXFCbk8sT0FBckIsQ0FBNkIsVUFBQ2hCLE1BQUQsRUFBWTtVQUN2Q0EsTUFBTSxDQUFDK0QsUUFBUCxHQUFrQixLQUFsQjtRQUNELENBRkQ7TUFHRDs7TUFFRCxLQUFLb0wsZUFBTCxDQUFxQm5PLE9BQXJCLENBQTZCLFVBQUNoQixNQUFELEVBQVk7UUFDdkMsSUFBSzBKLE1BQU0sQ0FBQzFKLE1BQU0sQ0FBQ0UsS0FBUixDQUFOLEtBQXlCd0osTUFBTSxDQUFDLE1BQUksQ0FBQ3pJLEtBQU4sQ0FBcEMsRUFBbUQ7VUFDakRqQixNQUFNLENBQUNOLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQUksQ0FBQ2tFLElBQUwsQ0FBVU0sS0FBVixDQUFnQnFMLG9CQUFoQixFQUFyQjtRQUNELENBRkQsTUFFTztVQUNMeFAsTUFBTSxDQUFDTixTQUFQLENBQWlCK1AsTUFBakIsQ0FBd0IsTUFBSSxDQUFDNUwsSUFBTCxDQUFVTSxLQUFWLENBQWdCcUwsb0JBQWhCLEVBQXhCO1FBQ0Q7TUFDRixDQU5EO0lBT0Q7OztXQUVELG9CQUFZO01BQ1YsT0FBTyxLQUFLbkIsWUFBTCxDQUFrQnBJLFFBQWxCLEVBQVA7SUFDRDs7O1dBRUQsZ0NBQXdCO01BQ3RCOztNQUNBLEtBQUtvSSxZQUFMLENBQWtCbEosb0JBQWxCO0lBQ0Q7OztXQUVELGtCQUFVakYsS0FBVixFQUFpQjtNQUNmLE9BQU8sS0FBS21PLFlBQUwsQ0FBa0J6SSxRQUFsQixDQUEyQjFGLEtBQTNCLENBQVA7SUFDRDs7O1dBRUQscUJBQWFBLEtBQWIsRUFBb0JnTyxPQUFwQixFQUE2QjtNQUMzQixJQUFJak4sS0FBSyxHQUFHLENBQVo7O01BRDJCLDJDQUdOaU4sT0FITTtNQUFBOztNQUFBO1FBRzNCLG9EQUE4QjtVQUFBLElBQW5CdkQsTUFBbUI7O1VBQzVCLElBQUlBLE1BQU0sQ0FBQ3VELE9BQVgsRUFBb0I7WUFDbEJ2RCxNQUFNLENBQUN4QixRQUFQLENBQWdCakosS0FBaEI7VUFDRDs7VUFFRCxJQUFJOEIsS0FBSyxDQUFDMkksTUFBTSxDQUFDL0UsUUFBUCxDQUFnQjFGLEtBQWhCLENBQUQsRUFBeUJBLEtBQXpCLENBQVQsRUFBMEM7WUFDeEMsS0FBS21QLFlBQUwsQ0FBa0JwTyxLQUFsQjtZQUNBO1VBQ0Q7O1VBRURBLEtBQUs7UUFDTjtNQWQwQjtRQUFBO01BQUE7UUFBQTtNQUFBO0lBZTVCOzs7V0FFRCxrQkFBVWYsS0FBVixFQUF3QztNQUFBLElBQXZCeUYsY0FBdUIsdUVBQU4sSUFBTTs7TUFDdEM7TUFDQTtNQUNBLElBQUksQ0FBQzNELEtBQUssQ0FBQyxLQUFLcU0sWUFBTCxDQUFrQnpJLFFBQWxCLENBQTJCMUYsS0FBM0IsQ0FBRCxFQUFvQ0EsS0FBcEMsQ0FBVixFQUFzRDtRQUNwRCxLQUFLd1AsV0FBTCxDQUFpQnhQLEtBQWpCLEVBQXdCLEtBQUtnTyxPQUE3QjtNQUNEOztNQUVELEtBQUtHLFlBQUwsQ0FBa0JsRixRQUFsQixDQUEyQmpKLEtBQTNCLEVBQWtDeUYsY0FBbEM7O01BRUEsSUFBSUEsY0FBSixFQUFvQjtRQUNsQixLQUFLRSxRQUFMO01BQ0Q7O01BRUQsS0FBS2QsU0FBTDtJQUNEOzs7V0FFRCxtQkFBVztNQUNULEtBQUttSixPQUFMLENBQWFsTixPQUFiLENBQXFCLFVBQUMySixNQUFELEVBQVk7UUFDL0JBLE1BQU0sQ0FBQ0osT0FBUDtNQUNELENBRkQ7O01BSUE7SUFDRDs7OztFQXRPMEIzRyxVOztBQXlPZHFLLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQzdPQTs7SUFFTTBCLG1COzs7Ozs7Ozs7Ozs7O1dBQ0osaUJBQVM7TUFBQTs7TUFDUCxLQUFLeFAsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLaEIsWUFBaEMsRUFETyxDQUdQOztNQUNBLEtBQUtELFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3lDLElBQUwsQ0FBVU0sS0FBVixDQUFnQnlILFFBQWhCLENBQXlCO1FBQ2xELE9BQUssS0FBSzNILElBRHdDO1FBRWxEckUsV0FBVyxFQUFFLEtBQUtrRSxNQUFMLENBQVl3RSxLQUFaLEtBQXNCLEtBQUt4RSxNQUFMLENBQVl3RSxLQUFaLEVBQXRCLEdBQTRDLEtBQUtwQyxNQUFMO01BRlAsQ0FBekIsQ0FBM0IsRUFKTyxDQVNQOztNQUNBLEtBQUsxRixLQUFMLEdBQWEsS0FBS3FELElBQUwsQ0FBVU0sS0FBVixDQUFnQnlJLFFBQWhCLENBQXlCO1FBQ3BDbk0sSUFBSSxFQUFFLFFBRDhCO1FBRXBDQyxFQUFFLEVBQUUsS0FBS3VEO01BRjJCLENBQXpCLENBQWI7TUFJQSxLQUFLOUQsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLWixLQUFoQyxFQWRPLENBZ0JQOztNQUNBLEtBQUtBLEtBQUwsQ0FBV3NJLGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDLFlBQU07UUFDMUMsS0FBSSxDQUFDSyxRQUFMLENBQWMsS0FBSSxDQUFDM0ksS0FBTCxDQUFXTixLQUF6QjtNQUNELENBRkQsRUFqQk8sQ0FxQlA7O01BQ0EsSUFBSSxLQUFLNEQsTUFBTCxDQUFZbUQsV0FBWixFQUFKLEVBQStCO1FBQzdCLEtBQUs5RyxTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUt5QyxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JtRixjQUFoQixDQUErQjtVQUN4RDFKLFdBQVcsRUFBRSxLQUFLa0UsTUFBTCxDQUFZbUQsV0FBWjtRQUQyQyxDQUEvQixDQUEzQjtNQUdEO0lBQ0Y7OztXQUVELGtCQUFVL0csS0FBVixFQUFpQjtNQUNmLElBQUksS0FBSzRELE1BQUwsQ0FBWXlFLE1BQVosQ0FBbUIsU0FBbkIsQ0FBSixFQUFtQztRQUNqQyxPQUFPOUYsSUFBSSxDQUFDQyxLQUFMLENBQVdnSCxNQUFNLENBQUN4SixLQUFELENBQWpCLENBQVA7TUFDRCxDQUZELE1BRU87UUFDTCxPQUFPd0osTUFBTSxDQUFDeEosS0FBRCxDQUFiO01BQ0Q7SUFDRjs7O1dBRUQscUJBQWE7TUFDWCxLQUFLTSxLQUFMLENBQVdOLEtBQVgsR0FBbUIsS0FBSytGLFFBQUwsRUFBbkI7O01BRUEsSUFBSSxLQUFLbEMsUUFBVCxFQUFtQjtRQUNqQixLQUFLdkQsS0FBTCxDQUFXUCxZQUFYLENBQXdCLFVBQXhCLEVBQW9DLFVBQXBDO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsS0FBS08sS0FBTCxDQUFXNEssZUFBWCxDQUEyQixVQUEzQjtNQUNEO0lBQ0Y7Ozs7RUE5Q3dCeEgsVTs7QUFpRForTCxzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuREE7O0lBRU1DLHlDOzs7Ozs7Ozs7Ozs7O1dBQ0osbUJBQVc7TUFDVCxLQUFLN08sWUFBTCxHQUFvQixLQUFLK0MsTUFBTCxVQUFwQjtNQUNBLEtBQUszQyxhQUFMLEdBQXFCLEtBQUsyQyxNQUFMLENBQVk1QyxNQUFaLENBQW1CLFlBQW5CLEtBQW9DLEtBQUtILFlBQTlEO0lBQ0Q7OztXQUVELGlCQUFTO01BQUE7O01BQ1AsS0FBS1osU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLaEIsWUFBaEM7TUFFQSxLQUFLRCxTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUt5QyxJQUFMLENBQVVNLEtBQVYsQ0FBZ0J5SCxRQUFoQixDQUF5QjtRQUNsRCxPQUFLLEtBQUszSCxJQUR3QztRQUVsRHJFLFdBQVcsRUFBRSxLQUFLa0UsTUFBTCxDQUFZd0UsS0FBWixLQUFzQixLQUFLeEUsTUFBTCxDQUFZd0UsS0FBWixFQUF0QixHQUE0QyxLQUFLcEMsTUFBTDtNQUZQLENBQXpCLENBQTNCLEVBSE8sQ0FRUDs7TUFDQSxLQUFLMUYsS0FBTCxHQUFhLEtBQUtxRCxJQUFMLENBQVVNLEtBQVYsQ0FBZ0IwSCxTQUFoQixDQUEwQjtRQUNyQzlLLFlBQVksRUFBRSxLQUFLQSxZQURrQjtRQUVyQ0ksYUFBYSxFQUFFLEtBQUtBLGFBRmlCO1FBR3JDVCxFQUFFLEVBQUUsS0FBS3VEO01BSDRCLENBQTFCLENBQWI7TUFLQSxLQUFLOUQsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLWixLQUFoQyxFQWRPLENBZ0JQOztNQUNBLEtBQUtBLEtBQUwsQ0FBV3NJLGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDLFlBQU07UUFDMUMsS0FBSSxDQUFDSyxRQUFMLENBQWMsS0FBSSxDQUFDM0ksS0FBTCxDQUFXTixLQUF6QjtNQUNELENBRkQsRUFqQk8sQ0FxQlA7O01BQ0EsSUFBSSxLQUFLNEQsTUFBTCxDQUFZbUQsV0FBWixFQUFKLEVBQStCO1FBQzdCLEtBQUs5RyxTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUt5QyxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JtRixjQUFoQixDQUErQjtVQUN4RDFKLFdBQVcsRUFBRSxLQUFLa0UsTUFBTCxDQUFZbUQsV0FBWjtRQUQyQyxDQUEvQixDQUEzQjtNQUdELENBMUJNLENBNEJQO01BQ0E7TUFDQTtNQUNBO01BQ0E7O0lBQ0Q7Ozs7RUF2Q2tDMEksYzs7QUEwQ3RCQyxnR0FBZixFOzs7Ozs7Ozs7Ozs7QUM1Q0E7O0lBRU1DLHVDOzs7Ozs7Ozs7Ozs7O1dBQ0osbUJBQVc7TUFDVCxLQUFLOU8sWUFBTCxHQUFvQixLQUFLK0MsTUFBTCxVQUFwQjtNQUNBLEtBQUszQyxhQUFMLEdBQXFCLEtBQUsyQyxNQUFMLENBQVk1QyxNQUFaLENBQW1CLFlBQW5CLEtBQW9DLEtBQUtILFlBQTlEO0lBQ0Q7OztXQUVELGlCQUFTO01BQUE7O01BQ1AsS0FBS1osU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLaEIsWUFBaEM7TUFDQSxLQUFLMkwsV0FBTCxHQUFtQixFQUFuQixDQUZPLENBSVA7O01BQ0EsS0FBSzVMLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3lDLElBQUwsQ0FBVU0sS0FBVixDQUFnQjZILGNBQWhCLENBQStCO1FBQ3hEcE0sV0FBVyxFQUFFLEtBQUtrRSxNQUFMLENBQVl3RSxLQUFaLEtBQXNCLEtBQUt4RSxNQUFMLENBQVl3RSxLQUFaLEVBQXRCLEdBQTRDLEtBQUtwQyxNQUFMO01BREQsQ0FBL0IsQ0FBM0IsRUFMTyxDQVNQOztNQUNBLEtBQUtuRixZQUFMLENBQWtCQyxPQUFsQixDQUEwQixVQUFDZCxLQUFELEVBQVFlLEtBQVIsRUFBa0I7UUFDMUM7UUFDQSxJQUFNZ0wsY0FBYyxHQUFHLEtBQUksQ0FBQ3BJLElBQUwsQ0FBVU0sS0FBVixDQUFnQitILGlCQUFoQixFQUF2QixDQUYwQyxDQUkxQzs7O1FBQ0EsSUFBTXRMLEtBQUssR0FBRyxLQUFJLENBQUNpRCxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JnSSxRQUFoQixDQUF5QjtVQUNyQ2pNLEtBQUssRUFBRUEsS0FEOEI7VUFFckNRLEVBQUUsRUFBRSxLQUFJLENBQUN1RCxJQUFMLEdBQVksR0FBWixHQUFrQmhEO1FBRmUsQ0FBekIsQ0FBZDs7UUFJQWdMLGNBQWMsQ0FBQzdLLFdBQWYsQ0FBMkJSLEtBQTNCO1FBRUFBLEtBQUssQ0FBQ2tJLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLFlBQU07VUFDckMsS0FBSSxDQUFDSyxRQUFMLENBQWN2SSxLQUFLLENBQUNWLEtBQXBCO1FBQ0QsQ0FGRDs7UUFJQSxLQUFJLENBQUM2TCxXQUFMLENBQWlCekIsSUFBakIsQ0FBc0IxSixLQUF0QixFQWYwQyxDQWlCMUM7OztRQUNBcUwsY0FBYyxDQUFDN0ssV0FBZixDQUEyQixLQUFJLENBQUN5QyxJQUFMLENBQVVNLEtBQVYsQ0FBZ0J5SCxRQUFoQixDQUF5QjtVQUNsRCxPQUFLLEtBQUksQ0FBQzNILElBQUwsR0FBWSxHQUFaLEdBQWtCaEQsS0FEMkI7VUFFbERyQixXQUFXLEVBQUUsS0FBSSxDQUFDdUIsYUFBTCxDQUFtQkYsS0FBbkI7UUFGcUMsQ0FBekIsQ0FBM0I7O1FBS0EsS0FBSSxDQUFDZCxTQUFMLENBQWVpQixXQUFmLENBQTJCNkssY0FBM0I7TUFDRCxDQXhCRCxFQVZPLENBb0NQOztNQUNBLElBQUksS0FBS25JLE1BQUwsQ0FBWW1ELFdBQVosRUFBSixFQUErQjtRQUM3QixLQUFLOUcsU0FBTCxDQUFlaUIsV0FBZixDQUEyQixLQUFLeUMsSUFBTCxDQUFVTSxLQUFWLENBQWdCbUYsY0FBaEIsQ0FBK0I7VUFDeEQxSixXQUFXLEVBQUUsS0FBS2tFLE1BQUwsQ0FBWW1ELFdBQVo7UUFEMkMsQ0FBL0IsQ0FBM0I7TUFHRDtJQUNGOzs7V0FFRCxxQkFBYTtNQUFBOztNQUNYLEtBQUs4RSxXQUFMLENBQWlCL0ssT0FBakIsQ0FBeUIsVUFBQ0osS0FBRCxFQUFXO1FBQ2xDQSxLQUFLLENBQUM2SyxPQUFOLEdBQWlCL0IsTUFBTSxDQUFDOUksS0FBSyxDQUFDVixLQUFQLENBQU4sS0FBd0J3SixNQUFNLENBQUMsTUFBSSxDQUFDekQsUUFBTCxFQUFELENBQS9DO1FBQ0FyRixLQUFLLENBQUNtRCxRQUFOLEdBQWlCLE1BQUksQ0FBQ0EsUUFBdEI7TUFDRCxDQUhEO0lBSUQ7Ozs7RUF2RGlDNEwsYzs7QUEwRHJCRSw2RkFBZixFOzs7Ozs7Ozs7Ozs7QUM1REE7O0lBRU1DLGU7Ozs7Ozs7Ozs7Ozs7V0FDSixpQkFBUztNQUNQLEtBQUszUCxTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUtoQixZQUFoQyxFQURPLENBR1A7O01BQ0EsSUFBSSxLQUFLMEQsTUFBTCxDQUFZbUQsV0FBWixFQUFKLEVBQStCO1FBQzdCLEtBQUs5RyxTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUt5QyxJQUFMLENBQVVNLEtBQVYsQ0FBZ0JtRixjQUFoQixDQUErQjtVQUN4RDFKLFdBQVcsRUFBRSxLQUFLa0UsTUFBTCxDQUFZbUQsV0FBWjtRQUQyQyxDQUEvQixDQUEzQjtNQUdEO0lBQ0Y7OztXQUVELGtCQUFVL0csS0FBVixFQUFpQjtNQUNmLE9BQU8sSUFBUDtJQUNEOzs7O0VBZHNCMEQsVTs7QUFpQlZrTSxnRUFBZixFOzs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1DLGlCO0VBQ0osb0JBQWU7SUFBQTs7SUFBQTs7SUFDYjtBQUNKO0FBQ0E7SUFDSSxLQUFLQyxTQUFMLEdBQWlCLENBQ2Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxVQUFDbE0sTUFBRCxFQUFTeEUsTUFBVCxFQUFvQjtNQUNsQixJQUFJd0UsTUFBTSxDQUFDaUQsS0FBUCxNQUFrQmpELE1BQU0sQ0FBQzBFLEtBQVAsRUFBbEIsSUFBb0MxRSxNQUFNLENBQUN5RSxNQUFQLENBQWMsS0FBZCxDQUFwQyxJQUE0RHpFLE1BQU0sQ0FBQ2dMLEtBQVAsRUFBNUQsSUFBOEUsQ0FBQ2hMLE1BQU0sQ0FBQ3JELElBQVAsRUFBbkYsRUFBa0c7UUFDaEcsSUFBSSxDQUFDcUQsTUFBTSxDQUFDckQsSUFBUCxFQUFELElBQWtCcUQsTUFBTSxXQUFOLEVBQXRCLEVBQXdDO1VBQ3RDLElBQU1tTSxjQUFjLEdBQUduTSxNQUFNLENBQUNuQyxLQUFQLEVBQXZCO1VBQ0FzTyxjQUFjLENBQUN4UCxJQUFmLEdBQXNCdUMsT0FBTyxDQUFDYyxNQUFNLFdBQU4sRUFBRCxDQUE3QjtVQUNBLElBQU1vTSxTQUFTLEdBQUcsSUFBSXJKLFVBQUosQ0FBV29KLGNBQVgsQ0FBbEI7VUFDQSxPQUFPLEtBQUksQ0FBQ0UsT0FBTCxDQUFhRCxTQUFiLENBQVA7UUFDRCxDQUxELE1BS087VUFDTCxPQUFPLElBQUlqQyxRQUFKLENBQW1CM08sTUFBbkIsQ0FBUDtRQUNEO01BQ0Y7SUFDRixDQXpCYyxFQTBCZixVQUFDd0UsTUFBRCxFQUFTeEUsTUFBVCxFQUFvQjtNQUNsQixJQUFJd0UsTUFBTSxDQUFDeUUsTUFBUCxDQUFjLFNBQWQsS0FBNEJ6RSxNQUFNLENBQUM2SixRQUFQLENBQWdCLE9BQWhCLENBQWhDLEVBQTBEO1FBQ3hELE9BQU8sSUFBSTdCLGtCQUFKLENBQTJCeE0sTUFBM0IsQ0FBUDtNQUNEO0lBQ0YsQ0E5QmMsRUErQmYsVUFBQ3dFLE1BQUQsRUFBU3hFLE1BQVQsRUFBb0I7TUFDbEIsSUFBSXdFLE1BQU0sQ0FBQ3lFLE1BQVAsQ0FBYyxTQUFkLEtBQTRCekUsTUFBTSxDQUFDNkosUUFBUCxDQUFnQixRQUFoQixDQUFoQyxFQUEyRDtRQUN6RCxPQUFPLElBQUloQyxtQkFBSixDQUE0QnJNLE1BQTVCLENBQVA7TUFDRDtJQUNGLENBbkNjLEVBb0NmLFVBQUN3RSxNQUFELEVBQVN4RSxNQUFULEVBQW9CO01BQ2xCLElBQUl3RSxNQUFNLENBQUN5RSxNQUFQLENBQWMsU0FBZCxDQUFKLEVBQThCO1FBQzVCLE9BQU8sSUFBSThDLGVBQUosQ0FBa0IvTCxNQUFsQixDQUFQO01BQ0Q7SUFDRixDQXhDYyxFQXlDZixVQUFDd0UsTUFBRCxFQUFTeEUsTUFBVCxFQUFvQjtNQUNsQixJQUFJd0UsTUFBTSxDQUFDeUUsTUFBUCxDQUFjLFFBQWQsQ0FBSixFQUE2QjtRQUMzQixPQUFPLElBQUk4RCxjQUFKLENBQWlCL00sTUFBakIsQ0FBUDtNQUNEO0lBQ0YsQ0E3Q2MsRUE4Q2YsVUFBQ3dFLE1BQUQsRUFBU3hFLE1BQVQsRUFBb0I7TUFDbEIsSUFBSXdFLE1BQU0sQ0FBQ3lFLE1BQVAsQ0FBYyxPQUFkLENBQUosRUFBNEI7UUFDMUIsT0FBTyxJQUFJRyxhQUFKLENBQWdCcEosTUFBaEIsQ0FBUDtNQUNEO0lBQ0YsQ0FsRGMsRUFtRGYsVUFBQ3dFLE1BQUQsRUFBU3hFLE1BQVQsRUFBb0I7TUFDbEIsSUFBSXdFLE1BQU0sQ0FBQ3lFLE1BQVAsQ0FBYyxRQUFkLEtBQTJCekUsTUFBTSxRQUFOLEVBQTNCLElBQTRDQSxNQUFNLENBQUM2SixRQUFQLENBQWdCLE9BQWhCLENBQWhELEVBQTBFO1FBQ3hFLE9BQU8sSUFBSUssaUJBQUosQ0FBMEIxTyxNQUExQixDQUFQO01BQ0Q7SUFDRixDQXZEYyxFQXdEZixVQUFDd0UsTUFBRCxFQUFTeEUsTUFBVCxFQUFvQjtNQUNsQixJQUFJd0UsTUFBTSxDQUFDeUUsTUFBUCxDQUFjLFFBQWQsS0FBMkJ6RSxNQUFNLFFBQU4sRUFBL0IsRUFBOEM7UUFDNUMsT0FBTyxJQUFJaUssa0JBQUosQ0FBMkJ6TyxNQUEzQixDQUFQO01BQ0Q7SUFDRixDQTVEYyxFQTZEZixVQUFDd0UsTUFBRCxFQUFTeEUsTUFBVCxFQUFvQjtNQUNsQixJQUFJd0UsTUFBTSxDQUFDeUUsTUFBUCxDQUFjLFFBQWQsQ0FBSixFQUE2QjtRQUMzQixPQUFPLElBQUltRixjQUFKLENBQWlCcE8sTUFBakIsQ0FBUDtNQUNEO0lBQ0YsQ0FqRWMsRUFrRWYsVUFBQ3dFLE1BQUQsRUFBU3hFLE1BQVQsRUFBb0I7TUFDbEIsSUFBSXdFLE1BQU0sQ0FBQ3NNLGFBQVAsTUFBMEJ0TSxNQUFNLFFBQU4sRUFBMUIsSUFBMkNBLE1BQU0sQ0FBQzZKLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FBL0MsRUFBeUU7UUFDdkUsT0FBTyxJQUFJa0MsaUJBQUosQ0FBMEJ2USxNQUExQixDQUFQO01BQ0Q7SUFDRixDQXRFYyxFQXVFZixVQUFDd0UsTUFBRCxFQUFTeEUsTUFBVCxFQUFvQjtNQUNsQixJQUFJd0UsTUFBTSxDQUFDc00sYUFBUCxNQUEwQnRNLE1BQU0sUUFBTixFQUE5QixFQUE2QztRQUMzQyxPQUFPLElBQUk4TCxrQkFBSixDQUEyQnRRLE1BQTNCLENBQVA7TUFDRDtJQUNGLENBM0VjLEVBNEVmLFVBQUN3RSxNQUFELEVBQVN4RSxNQUFULEVBQW9CO01BQ2xCLElBQUl3RSxNQUFNLENBQUNzTSxhQUFQLEVBQUosRUFBNEI7UUFDMUIsT0FBTyxJQUFJVCxjQUFKLENBQWlCclEsTUFBakIsQ0FBUDtNQUNEO0lBQ0YsQ0FoRmMsRUFpRmYsVUFBQ3dFLE1BQUQsRUFBU3hFLE1BQVQsRUFBb0I7TUFDbEIsSUFBSXdFLE1BQU0sQ0FBQ3lFLE1BQVAsQ0FBYyxNQUFkLENBQUosRUFBMkI7UUFDekIsT0FBTyxJQUFJdUgsWUFBSixDQUFleFEsTUFBZixDQUFQO01BQ0Q7SUFDRixDQXJGYyxDQUFqQjtFQXVGRDtFQUVEO0FBQ0Y7QUFDQTs7Ozs7V0FDRSxxQkFBYStRLFFBQWIsRUFBdUI7TUFDckIsS0FBS0wsU0FBTCxDQUFlTSxPQUFmLENBQXVCRCxRQUF2QjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsaUJBQVMvUSxNQUFULEVBQWlCO01BQUEsbURBQ1EsS0FBSzBRLFNBRGI7TUFBQTs7TUFBQTtRQUNmLG9EQUF1QztVQUFBLElBQTVCSyxRQUE0QjtVQUNyQyxJQUFNRSxXQUFXLEdBQUdGLFFBQVEsQ0FBQy9RLE1BQU0sQ0FBQ3dFLE1BQVIsRUFBZ0J4RSxNQUFoQixDQUE1Qjs7VUFDQSxJQUFJK0MsS0FBSyxDQUFDa08sV0FBRCxDQUFULEVBQXdCO1lBQ3RCLE9BQU9BLFdBQVA7VUFDRDtRQUNGO01BTmM7UUFBQTtNQUFBO1FBQUE7TUFBQTtJQU9oQjs7Ozs7O0FBR1lSLGtFQUFmLEU7Ozs7O0FDbElBO0FBQ0E7QUFDQTs7SUFFTVMsbUI7RUFDSixxQkFBZTtJQUFBOztJQUNiLEtBQUtDLFVBQUwsR0FBa0IsQ0FDaEIsT0FEZ0IsRUFFaEIsT0FGZ0IsRUFHaEIsT0FIZ0IsRUFJaEIsbUJBSmdCLEVBS2hCLFFBTGdCLEVBTWhCLElBTmdCLEVBT2hCLE9BUGdCLEVBUWhCLEtBUmdCLEVBU2hCLE1BVGdCLEVBVWhCLGFBVmdCLEVBV2hCLGtCQVhnQixFQVloQixrQkFaZ0IsRUFhaEIsVUFiZ0IsRUFjaEIsVUFkZ0IsRUFlaEIsV0FmZ0IsRUFnQmhCLFdBaEJnQixFQWlCaEIsU0FqQmdCLEVBa0JoQixTQWxCZ0IsRUFtQmhCLFlBbkJnQixFQW9CaEIsU0FwQmdCLEVBcUJoQixtQkFyQmdCLEVBc0JoQixNQXRCZ0IsRUF1QmhCLFVBdkJnQixFQXdCaEIsZUF4QmdCLEVBeUJoQixlQXpCZ0IsQ0FBbEI7RUEyQkQ7Ozs7V0FFRCxlQUFPdlEsS0FBUCxFQUFjNEQsTUFBZCxFQUFzQkwsR0FBdEIsRUFBMkJRLElBQTNCLEVBQWlDO01BQUE7O01BQy9CLElBQUlrQyxNQUFNLEdBQUcsRUFBYjs7TUFFQSxJQUFJckMsTUFBTSxDQUFDZ0QsS0FBUCxFQUFKLEVBQW9CO1FBQ2xCaEQsTUFBTSxDQUFDZ0QsS0FBUCxHQUFlOUYsT0FBZixDQUF1QixVQUFDOEMsTUFBRCxFQUFZO1VBQ2pDLElBQU00TSxXQUFXLEdBQUcsS0FBSSxDQUFDMUssUUFBTCxDQUFjOUYsS0FBZCxFQUFxQixJQUFJMkcsVUFBSixDQUFXL0MsTUFBWCxDQUFyQixFQUF5Q0wsR0FBekMsRUFBOENRLElBQTlDLENBQXBCOztVQUNBa0MsTUFBTSx5Q0FBT0EsTUFBUCwrQkFBa0J1SyxXQUFsQixFQUFOO1FBQ0QsQ0FIRDtNQUlEOztNQUVELE9BQU92SyxNQUFQO0lBQ0Q7OztXQUVELGVBQU9qRyxLQUFQLEVBQWM0RCxNQUFkLEVBQXNCTCxHQUF0QixFQUEyQlEsSUFBM0IsRUFBaUM7TUFBQTs7TUFDL0IsSUFBTWtDLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUlyQyxNQUFNLENBQUNpRCxLQUFQLEVBQUosRUFBb0I7UUFDbEIsSUFBTTRKLEtBQUssR0FBRzdNLE1BQU0sQ0FBQ2lELEtBQVAsR0FBZTZKLElBQWYsQ0FBb0IsVUFBQzlNLE1BQUQsRUFBWTtVQUM1QyxJQUFNK00sV0FBVyxHQUFHLE1BQUksQ0FBQzdLLFFBQUwsQ0FBYzlGLEtBQWQsRUFBcUIsSUFBSTJHLFVBQUosQ0FBVy9DLE1BQVgsQ0FBckIsRUFBeUNMLEdBQXpDLEVBQThDUSxJQUE5QyxDQUFwQjs7VUFDQSxPQUFPNE0sV0FBVyxDQUFDdk4sTUFBWixLQUF1QixDQUE5QjtRQUNELENBSGEsQ0FBZDs7UUFLQSxJQUFJLENBQUNxTixLQUFMLEVBQVk7VUFDVixJQUFNRyxLQUFLLEdBQUdoTixNQUFNLENBQUN3RSxLQUFQLEtBQWlCeEUsTUFBTSxDQUFDd0UsS0FBUCxFQUFqQixHQUFrQzdFLEdBQWhEO1VBRUEwQyxNQUFNLENBQUNtRSxJQUFQLENBQVk7WUFDVnpLLE9BQU8sRUFBRWlSLEtBQUssR0FBRyw4REFEUDtZQUVWN00sSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9rQyxNQUFQO0lBQ0Q7OztXQUVELGdCQUFPakcsS0FBUCxFQUFjNEQsTUFBZCxFQUFzQkwsR0FBdEIsRUFBMkJRLElBQTNCLEVBQWlDO01BQy9CLElBQU1rQyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJckMsTUFBTSxTQUFOLEVBQUosRUFBb0I7UUFDbEIsSUFBTWlOLG9CQUFvQixHQUFJbFAsSUFBSSxDQUFDRSxTQUFMLENBQWU3QixLQUFmLE1BQTBCMkIsSUFBSSxDQUFDRSxTQUFMLENBQWUrQixNQUFNLFNBQU4sRUFBZixDQUF4RDtRQUNBLElBQU1rTixPQUFPLEdBQUlELG9CQUFqQjs7UUFFQSxJQUFJQyxPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUdoTixNQUFNLENBQUN3RSxLQUFQLEtBQWlCeEUsTUFBTSxDQUFDd0UsS0FBUCxFQUFqQixHQUFrQzdFLEdBQWhEO1VBRUEwQyxNQUFNLENBQUNtRSxJQUFQLENBQVk7WUFDVnpLLE9BQU8sRUFBRWlSLEtBQUssR0FBRyxvQkFBUixHQUErQmpQLElBQUksQ0FBQ0UsU0FBTCxDQUFlK0IsTUFBTSxTQUFOLEVBQWYsQ0FEOUI7WUFFVkcsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9rQyxNQUFQO0lBQ0Q7OztXQUVELDJCQUFtQmpHLEtBQW5CLEVBQTBCNEQsTUFBMUIsRUFBa0NMLEdBQWxDLEVBQXVDUSxJQUF2QyxFQUE2QztNQUMzQyxJQUFNa0MsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXBELGNBQVEsQ0FBQzdDLEtBQUQsQ0FBUixJQUFtQjRELE1BQU0sQ0FBQ2tELGlCQUFQLEVBQXZCLEVBQW1EO1FBQ2pELElBQUk2RixpQkFBaUIsR0FBRyxFQUF4QjtRQUVBbkosTUFBTSxDQUFDb0osSUFBUCxDQUFZaEosTUFBTSxDQUFDa0QsaUJBQVAsRUFBWixFQUF3Q2hHLE9BQXhDLENBQWdELFVBQUN5QyxHQUFELEVBQVM7VUFDdkQsSUFBSXBCLEtBQUssQ0FBQ25DLEtBQUssQ0FBQ3VELEdBQUQsQ0FBTixDQUFULEVBQXVCO1lBQ3JCLElBQU1zSixrQkFBa0IsR0FBR2pKLE1BQU0sQ0FBQ2tELGlCQUFQLEdBQTJCdkQsR0FBM0IsQ0FBM0I7WUFFQW9KLGlCQUFpQixHQUFHRSxrQkFBa0IsQ0FBQ3RDLE1BQW5CLENBQTBCLFVBQUMrQixRQUFELEVBQWM7Y0FDMUQsT0FBTyxDQUFDOUksTUFBTSxDQUFDZ0QsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDMUcsS0FBckMsRUFBNENzTSxRQUE1QyxDQUFSO1lBQ0QsQ0FGbUIsQ0FBcEI7VUFHRDtRQUNGLENBUkQ7UUFVQSxJQUFNd0UsT0FBTyxHQUFHbkUsaUJBQWlCLENBQUN2SixNQUFsQixHQUEyQixDQUEzQzs7UUFFQSxJQUFJME4sT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHaE4sTUFBTSxDQUFDd0UsS0FBUCxLQUFpQnhFLE1BQU0sQ0FBQ3dFLEtBQVAsRUFBakIsR0FBa0M3RSxHQUFoRDtVQUVBMEMsTUFBTSxDQUFDbUUsSUFBUCxDQUFZO1lBQ1Z6SyxPQUFPLEVBQUVpUixLQUFLLEdBQUcsd0NBQVIsR0FBbURqRSxpQkFBaUIsQ0FBQ29FLElBQWxCLENBQXVCLElBQXZCLENBRGxEO1lBRVZoTixJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT2tDLE1BQVA7SUFDRDs7O1dBRUQsZUFBTWpHLEtBQU4sRUFBYTRELE1BQWIsRUFBcUJMLEdBQXJCLEVBQTBCUSxJQUExQixFQUFnQztNQUM5QixJQUFNa0MsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXJDLE1BQU0sUUFBTixFQUFKLEVBQW1CO1FBQ2pCLElBQU1rTixPQUFPLEdBQUcsQ0FBQ2xOLE1BQU0sUUFBTixHQUFjOE0sSUFBZCxDQUFtQixVQUFBTSxDQUFDO1VBQUEsT0FBSXJQLElBQUksQ0FBQ0UsU0FBTCxDQUFlN0IsS0FBZixNQUEwQjJCLElBQUksQ0FBQ0UsU0FBTCxDQUFlbVAsQ0FBZixDQUE5QjtRQUFBLENBQXBCLENBQWpCOztRQUVBLElBQUlGLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR2hOLE1BQU0sQ0FBQ3dFLEtBQVAsS0FBaUJ4RSxNQUFNLENBQUN3RSxLQUFQLEVBQWpCLEdBQWtDN0UsR0FBaEQ7VUFFQTBDLE1BQU0sQ0FBQ21FLElBQVAsQ0FBWTtZQUNWekssT0FBTyxFQUFFaVIsS0FBSyxHQUFHLHlDQUFSLEdBQW9EalAsSUFBSSxDQUFDRSxTQUFMLENBQWUrQixNQUFNLFFBQU4sRUFBZixDQURuRDtZQUVWRyxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT2tDLE1BQVA7SUFDRDs7O1dBRUQsMEJBQWtCakcsS0FBbEIsRUFBeUI0RCxNQUF6QixFQUFpQ0wsR0FBakMsRUFBc0NRLElBQXRDLEVBQTRDO01BQzFDLElBQU1rQyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJNUQsUUFBUSxDQUFDckMsS0FBRCxDQUFSLElBQW1CNEQsTUFBTSxDQUFDb0QsZ0JBQVAsRUFBdkIsRUFBa0Q7UUFDaEQsSUFBTWlLLGVBQWUsR0FBSXJOLE1BQU0sQ0FBQ29ELGdCQUFQLEtBQTRCLENBQXJEO1FBQ0EsSUFBTThKLE9BQU8sR0FBSTlRLEtBQUssR0FBR2lSLGVBQXpCOztRQUVBLElBQUlILE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR2hOLE1BQU0sQ0FBQ3dFLEtBQVAsS0FBaUJ4RSxNQUFNLENBQUN3RSxLQUFQLEVBQWpCLEdBQWtDN0UsR0FBaEQ7VUFFQTBDLE1BQU0sQ0FBQ21FLElBQVAsQ0FBWTtZQUNWekssT0FBTyxFQUFFaVIsS0FBSyxHQUFHLHFCQUFSLEdBQWdDSyxlQUQvQjtZQUVWbE4sSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9rQyxNQUFQO0lBQ0Q7OztXQUVELDBCQUFrQmpHLEtBQWxCLEVBQXlCNEQsTUFBekIsRUFBaUNMLEdBQWpDLEVBQXNDUSxJQUF0QyxFQUE0QztNQUMxQyxJQUFNa0MsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSTVELFFBQVEsQ0FBQ3JDLEtBQUQsQ0FBUixJQUFtQjRELE1BQU0sQ0FBQ3FELGdCQUFQLEVBQXZCLEVBQWtEO1FBQ2hELElBQU1pSyxlQUFlLEdBQUl0TixNQUFNLENBQUNxRCxnQkFBUCxLQUE0QixDQUFyRDtRQUNBLElBQU02SixPQUFPLEdBQUk5USxLQUFLLEdBQUdrUixlQUF6Qjs7UUFFQSxJQUFJSixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUdoTixNQUFNLENBQUN3RSxLQUFQLEtBQWlCeEUsTUFBTSxDQUFDd0UsS0FBUCxFQUFqQixHQUFrQzdFLEdBQWhEO1VBRUEwQyxNQUFNLENBQUNtRSxJQUFQLENBQVk7WUFDVnpLLE9BQU8sRUFBRWlSLEtBQUssR0FBRyxvQkFBUixHQUErQk0sZUFEOUI7WUFFVm5OLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPa0MsTUFBUDtJQUNEOzs7V0FFRCxnQkFBUWpHLEtBQVIsRUFBZTRELE1BQWYsRUFBdUJMLEdBQXZCLEVBQTRCUSxJQUE1QixFQUFrQztNQUNoQyxJQUFNa0MsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXJDLE1BQU0sQ0FBQ3NELE1BQVAsRUFBSixFQUFxQjtRQUNuQixJQUFJNEosT0FBTyxHQUFHLEtBQWQ7O1FBRUEsSUFBSWxOLE1BQU0sQ0FBQzZKLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FBSixFQUE4QjtVQUM1QixJQUFNMEQsTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBVywwSUFBWCxDQUFmO1VBQ0FOLE9BQU8sR0FBRyxDQUFDSyxNQUFNLENBQUNFLElBQVAsQ0FBWXJSLEtBQVosQ0FBWDtRQUNEOztRQUVELElBQUk4USxPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUdoTixNQUFNLENBQUN3RSxLQUFQLEtBQWlCeEUsTUFBTSxDQUFDd0UsS0FBUCxFQUFqQixHQUFrQzdFLEdBQWhEO1VBRUEwQyxNQUFNLENBQUNtRSxJQUFQLENBQVk7WUFDVnpLLE9BQU8sRUFBRWlSLEtBQUssR0FBRyxnQ0FEUDtZQUVWN00sSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9rQyxNQUFQO0lBQ0Q7OztXQUVELGFBQUlqRyxLQUFKLEVBQVc0RCxNQUFYLEVBQW1CTCxHQUFuQixFQUF3QlEsSUFBeEIsRUFBOEI7TUFDNUIsSUFBSWtDLE1BQU0sR0FBRyxFQUFiOztNQUVBLElBQUlyQyxNQUFNLE1BQU4sRUFBSixFQUFpQjtRQUNmLElBQUksQ0FBQ0EsTUFBTSxDQUFDdUUsSUFBUCxFQUFELElBQWtCLENBQUN2RSxNQUFNLFFBQU4sRUFBdkIsRUFBc0M7VUFDcEMsT0FBT3FDLE1BQVA7UUFDRDs7UUFFRCxJQUFNcUwsUUFBUSxHQUFHLElBQUlDLEdBQUosQ0FBUztVQUFFM04sTUFBTSxFQUFFQSxNQUFNLE1BQU4sRUFBVjtVQUF1QjROLFFBQVEsRUFBRXhSO1FBQWpDLENBQVQsQ0FBakI7UUFDQSxJQUFNeVIsUUFBUSxHQUFHSCxRQUFRLENBQUN4TCxRQUFULEVBQWpCOztRQUVBLElBQUkyTCxRQUFRLENBQUNyTyxNQUFULEtBQW9CLENBQXhCLEVBQTJCO1VBQ3pCLElBQU1zTyxVQUFVLEdBQUcsSUFBSUgsR0FBSixDQUFTO1lBQUUzTixNQUFNLEVBQUVBLE1BQU0sQ0FBQ3VFLElBQVAsRUFBVjtZQUF5QnFKLFFBQVEsRUFBRXhSO1VBQW5DLENBQVQsQ0FBbkI7VUFDQWlHLE1BQU0sR0FBR3lMLFVBQVUsQ0FBQzVMLFFBQVgsRUFBVDtRQUNELENBSEQsTUFHTztVQUNMLElBQU02TCxVQUFVLEdBQUcsSUFBSUosR0FBSixDQUFTO1lBQUUzTixNQUFNLEVBQUVBLE1BQU0sUUFBTixFQUFWO1lBQXlCNE4sUUFBUSxFQUFFeFI7VUFBbkMsQ0FBVCxDQUFuQjtVQUNBaUcsTUFBTSxHQUFHMEwsVUFBVSxDQUFDN0wsUUFBWCxFQUFUO1FBQ0Q7TUFDRjs7TUFFRCxPQUFPRyxNQUFQO0lBQ0Q7OztXQUVELGlCQUFTakcsS0FBVCxFQUFnQjRELE1BQWhCLEVBQXdCTCxHQUF4QixFQUE2QlEsSUFBN0IsRUFBbUM7TUFDakMsSUFBTWtDLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUk1RCxRQUFRLENBQUNyQyxLQUFELENBQVIsSUFBbUI0RCxNQUFNLENBQUN3RCxPQUFQLEVBQXZCLEVBQXlDO1FBQ3ZDLElBQU02SixlQUFlLEdBQUdyTixNQUFNLENBQUN3RCxPQUFQLEVBQXhCO1FBQ0EsSUFBTTBKLE9BQU8sR0FBSTlRLEtBQUssR0FBR2lSLGVBQXpCOztRQUVBLElBQUlILE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR2hOLE1BQU0sQ0FBQ3dFLEtBQVAsS0FBaUJ4RSxNQUFNLENBQUN3RSxLQUFQLEVBQWpCLEdBQWtDN0UsR0FBaEQ7VUFFQTBDLE1BQU0sQ0FBQ21FLElBQVAsQ0FBWTtZQUNWekssT0FBTyxFQUFFaVIsS0FBSyxHQUFHLHFCQUFSLEdBQWdDSyxlQUQvQjtZQUVWbE4sSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9rQyxNQUFQO0lBQ0Q7OztXQUVELGtCQUFVakcsS0FBVixFQUFpQjRELE1BQWpCLEVBQXlCTCxHQUF6QixFQUE4QlEsSUFBOUIsRUFBb0M7TUFDbEMsSUFBTWtDLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUl0RCxPQUFPLENBQUMzQyxLQUFELENBQVAsSUFBa0I0RCxNQUFNLENBQUN5RCxRQUFQLEVBQXRCLEVBQXlDO1FBQ3ZDLElBQU15SixPQUFPLEdBQUk5USxLQUFLLENBQUNvRCxNQUFOLEdBQWVRLE1BQU0sQ0FBQ3lELFFBQVAsRUFBaEM7O1FBRUEsSUFBSXlKLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR2hOLE1BQU0sQ0FBQ3dFLEtBQVAsS0FBaUJ4RSxNQUFNLENBQUN3RSxLQUFQLEVBQWpCLEdBQWtDN0UsR0FBaEQ7VUFFQTBDLE1BQU0sQ0FBQ21FLElBQVAsQ0FBWTtZQUNWekssT0FBTyxFQUFFaVIsS0FBSyxHQUFHLHFCQUFSLEdBQWdDaE4sTUFBTSxDQUFDeUQsUUFBUCxFQUFoQyxHQUFvRCxRQURuRDtZQUVWdEQsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9rQyxNQUFQO0lBQ0Q7OztXQUVELG1CQUFXakcsS0FBWCxFQUFrQjRELE1BQWxCLEVBQTBCTCxHQUExQixFQUErQlEsSUFBL0IsRUFBcUM7TUFDbkMsSUFBTWtDLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUl4RCxRQUFRLENBQUN6QyxLQUFELENBQVIsSUFBbUI0RCxNQUFNLENBQUMwRCxTQUFQLEVBQXZCLEVBQTJDO1FBQ3pDLElBQU13SixPQUFPLEdBQUk5USxLQUFLLENBQUNvRCxNQUFOLEdBQWVRLE1BQU0sQ0FBQzBELFNBQVAsRUFBaEM7O1FBRUEsSUFBSXdKLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR2hOLE1BQU0sQ0FBQ3dFLEtBQVAsS0FBaUJ4RSxNQUFNLENBQUN3RSxLQUFQLEVBQWpCLEdBQWtDN0UsR0FBaEQ7VUFFQTBDLE1BQU0sQ0FBQ21FLElBQVAsQ0FBWTtZQUNWekssT0FBTyxFQUFFaVIsS0FBSyxHQUFHLG1CQUFSLEdBQThCaE4sTUFBTSxDQUFDMEQsU0FBUCxFQUE5QixHQUFtRCxrQkFEbEQ7WUFFVnZELElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPa0MsTUFBUDtJQUNEOzs7V0FFRCx1QkFBZWpHLEtBQWYsRUFBc0I0RCxNQUF0QixFQUE4QkwsR0FBOUIsRUFBbUNRLElBQW5DLEVBQXlDO01BQ3ZDLElBQU1rQyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJcEQsY0FBUSxDQUFDN0MsS0FBRCxDQUFSLElBQW1CNEQsTUFBTSxDQUFDMkQsYUFBUCxFQUF2QixFQUErQztRQUM3QyxJQUFNcUssZUFBZSxHQUFHcE8sTUFBTSxDQUFDb0osSUFBUCxDQUFZNU0sS0FBWixFQUFtQm9ELE1BQTNDO1FBQ0EsSUFBTTBOLE9BQU8sR0FBSWMsZUFBZSxHQUFHaE8sTUFBTSxDQUFDMkQsYUFBUCxFQUFuQzs7UUFFQSxJQUFJdUosT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHaE4sTUFBTSxDQUFDd0UsS0FBUCxLQUFpQnhFLE1BQU0sQ0FBQ3dFLEtBQVAsRUFBakIsR0FBa0M3RSxHQUFoRDtVQUVBMEMsTUFBTSxDQUFDbUUsSUFBUCxDQUFZO1lBQ1Z6SyxPQUFPLEVBQUVpUixLQUFLLEdBQUcscUJBQVIsR0FBZ0NoTixNQUFNLENBQUMyRCxhQUFQLEVBQWhDLEdBQXlELGFBRHhEO1lBRVZ4RCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT2tDLE1BQVA7SUFDRDs7O1dBRUQsaUJBQVNqRyxLQUFULEVBQWdCNEQsTUFBaEIsRUFBd0JMLEdBQXhCLEVBQTZCUSxJQUE3QixFQUFtQztNQUNqQyxJQUFNa0MsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSTVELFFBQVEsQ0FBQ3JDLEtBQUQsQ0FBUixJQUFtQjRELE1BQU0sQ0FBQzRELE9BQVAsRUFBdkIsRUFBeUM7UUFDdkMsSUFBTTBKLGVBQWUsR0FBR3ROLE1BQU0sQ0FBQzRELE9BQVAsRUFBeEI7UUFDQSxJQUFNc0osT0FBTyxHQUFJOVEsS0FBSyxHQUFHa1IsZUFBekI7O1FBRUEsSUFBSUosT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHaE4sTUFBTSxDQUFDd0UsS0FBUCxLQUFpQnhFLE1BQU0sQ0FBQ3dFLEtBQVAsRUFBakIsR0FBa0M3RSxHQUFoRDtVQUVBMEMsTUFBTSxDQUFDbUUsSUFBUCxDQUFZO1lBQ1Z6SyxPQUFPLEVBQUVpUixLQUFLLEdBQUcsb0JBQVIsR0FBK0JNLGVBRDlCO1lBRVZuTixJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT2tDLE1BQVA7SUFDRDs7O1dBRUQsa0JBQVVqRyxLQUFWLEVBQWlCNEQsTUFBakIsRUFBeUJMLEdBQXpCLEVBQThCUSxJQUE5QixFQUFvQztNQUNsQyxJQUFNa0MsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXRELE9BQU8sQ0FBQzNDLEtBQUQsQ0FBUCxJQUFrQjRELE1BQU0sQ0FBQzZELFFBQVAsRUFBdEIsRUFBeUM7UUFDdkMsSUFBTXFKLE9BQU8sR0FBSTlRLEtBQUssQ0FBQ29ELE1BQU4sR0FBZVEsTUFBTSxDQUFDNkQsUUFBUCxFQUFoQzs7UUFFQSxJQUFJcUosT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHaE4sTUFBTSxDQUFDd0UsS0FBUCxLQUFpQnhFLE1BQU0sQ0FBQ3dFLEtBQVAsRUFBakIsR0FBa0M3RSxHQUFoRDtVQUVBMEMsTUFBTSxDQUFDbUUsSUFBUCxDQUFZO1lBQ1Z6SyxPQUFPLEVBQUVpUixLQUFLLEdBQUcsc0JBQVIsR0FBaUNoTixNQUFNLENBQUM2RCxRQUFQLEVBQWpDLEdBQXFELFFBRHBEO1lBRVYxRCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT2tDLE1BQVA7SUFDRDs7O1dBRUQsbUJBQVdqRyxLQUFYLEVBQWtCNEQsTUFBbEIsRUFBMEJMLEdBQTFCLEVBQStCUSxJQUEvQixFQUFxQztNQUNuQyxJQUFNa0MsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXhELFFBQVEsQ0FBQ3pDLEtBQUQsQ0FBUixJQUFtQjRELE1BQU0sQ0FBQzhELFNBQVAsRUFBdkIsRUFBMkM7UUFDekMsSUFBTW9KLE9BQU8sR0FBSTlRLEtBQUssQ0FBQ29ELE1BQU4sR0FBZVEsTUFBTSxDQUFDOEQsU0FBUCxFQUFoQzs7UUFFQSxJQUFJb0osT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHaE4sTUFBTSxDQUFDd0UsS0FBUCxLQUFpQnhFLE1BQU0sQ0FBQ3dFLEtBQVAsRUFBakIsR0FBa0M3RSxHQUFoRDtVQUVBMEMsTUFBTSxDQUFDbUUsSUFBUCxDQUFZO1lBQ1Z6SyxPQUFPLEVBQUVpUixLQUFLLEdBQUcsb0JBQVIsR0FBK0JoTixNQUFNLENBQUM4RCxTQUFQLEVBQS9CLEdBQW9ELGtCQURuRDtZQUVWM0QsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9rQyxNQUFQO0lBQ0Q7OztXQUVELHVCQUFlakcsS0FBZixFQUFzQjRELE1BQXRCLEVBQThCTCxHQUE5QixFQUFtQ1EsSUFBbkMsRUFBeUM7TUFDdkMsSUFBTWtDLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUlwRCxjQUFRLENBQUM3QyxLQUFELENBQVIsSUFBbUI0RCxNQUFNLENBQUMrRCxhQUFQLEVBQXZCLEVBQStDO1FBQzdDLElBQU1pSyxlQUFlLEdBQUdwTyxNQUFNLENBQUNvSixJQUFQLENBQVk1TSxLQUFaLEVBQW1Cb0QsTUFBM0M7UUFDQSxJQUFNME4sT0FBTyxHQUFJYyxlQUFlLEdBQUdoTyxNQUFNLENBQUMrRCxhQUFQLEVBQW5DOztRQUVBLElBQUltSixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUdoTixNQUFNLENBQUN3RSxLQUFQLEtBQWlCeEUsTUFBTSxDQUFDd0UsS0FBUCxFQUFqQixHQUFrQzdFLEdBQWhEO1VBRUEwQyxNQUFNLENBQUNtRSxJQUFQLENBQVk7WUFDVnpLLE9BQU8sRUFBRWlSLEtBQUssR0FBRyxzQkFBUixHQUFpQ2hOLE1BQU0sQ0FBQytELGFBQVAsRUFBakMsR0FBMEQsYUFEekQ7WUFFVjVELElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPa0MsTUFBUDtJQUNEOzs7V0FFRCxvQkFBWWpHLEtBQVosRUFBbUI0RCxNQUFuQixFQUEyQkwsR0FBM0IsRUFBZ0NRLElBQWhDLEVBQXNDO01BQ3BDLElBQU1rQyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJNUQsUUFBUSxDQUFDckMsS0FBRCxDQUFSLElBQW1CNEQsTUFBTSxDQUFDZ0UsVUFBUCxFQUF2QixFQUE0QztRQUMxQyxJQUFNaUssWUFBWSxHQUFJN1IsS0FBSyxHQUFHNEQsTUFBTSxDQUFDZ0UsVUFBUCxFQUFSLEtBQWdDckYsSUFBSSxDQUFDQyxLQUFMLENBQVd4QyxLQUFLLEdBQUc0RCxNQUFNLENBQUNnRSxVQUFQLEVBQW5CLENBQXREO1FBQ0EsSUFBTWtKLE9BQU8sR0FBSSxDQUFDZSxZQUFsQjs7UUFFQSxJQUFJZixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUdoTixNQUFNLENBQUN3RSxLQUFQLEtBQWlCeEUsTUFBTSxDQUFDd0UsS0FBUCxFQUFqQixHQUFrQzdFLEdBQWhEO1VBRUEwQyxNQUFNLENBQUNtRSxJQUFQLENBQVk7WUFDVnpLLE9BQU8sRUFBRWlSLEtBQUssR0FBRyx1QkFBUixHQUFrQ2hOLE1BQU0sQ0FBQ2dFLFVBQVAsRUFEakM7WUFFVjdELElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPa0MsTUFBUDtJQUNEOzs7V0FFRCxhQUFLakcsS0FBTCxFQUFZNEQsTUFBWixFQUFvQkwsR0FBcEIsRUFBeUJRLElBQXpCLEVBQStCO01BQzdCLElBQU1rQyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJckMsTUFBTSxDQUFDaUUsR0FBUCxFQUFKLEVBQWtCO1FBQ2hCLElBQU1pSyxTQUFTLEdBQUcsS0FBS2hNLFFBQUwsQ0FBYzlGLEtBQWQsRUFBcUIsSUFBSTJHLFVBQUosQ0FBVy9DLE1BQU0sQ0FBQ2lFLEdBQVAsRUFBWCxDQUFyQixFQUErQ3RFLEdBQS9DLEVBQW9EUSxJQUFwRCxDQUFsQjtRQUVBLElBQU0rTSxPQUFPLEdBQUdnQixTQUFTLENBQUMxTyxNQUFWLEtBQXFCLENBQXJDOztRQUVBLElBQUkwTixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUdoTixNQUFNLENBQUN3RSxLQUFQLEtBQWlCeEUsTUFBTSxDQUFDd0UsS0FBUCxFQUFqQixHQUFrQzdFLEdBQWhEO1VBRUEwQyxNQUFNLENBQUNtRSxJQUFQLENBQVk7WUFDVnpLLE9BQU8sRUFBRWlSLEtBQUssR0FBRyxpREFBUixHQUE0RGpQLElBQUksQ0FBQ0UsU0FBTCxDQUFlK0IsTUFBTSxDQUFDaUUsR0FBUCxFQUFmLENBRDNEO1lBRVY5RCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT2tDLE1BQVA7SUFDRDs7O1dBRUQsZUFBT2pHLEtBQVAsRUFBYzRELE1BQWQsRUFBc0JMLEdBQXRCLEVBQTJCUSxJQUEzQixFQUFpQztNQUFBOztNQUMvQixJQUFNa0MsTUFBTSxHQUFHLEVBQWY7O01BRUEsSUFBSXJDLE1BQU0sQ0FBQzBFLEtBQVAsRUFBSixFQUFvQjtRQUNsQixJQUFJeUosT0FBTyxHQUFHLENBQWQ7UUFFQW5PLE1BQU0sQ0FBQzBFLEtBQVAsR0FBZXhILE9BQWYsQ0FBdUIsVUFBQzhDLE1BQUQsRUFBWTtVQUNqQyxJQUFNb08sV0FBVyxHQUFHLE1BQUksQ0FBQ2xNLFFBQUwsQ0FBYzlGLEtBQWQsRUFBcUIsSUFBSTJHLFVBQUosQ0FBVy9DLE1BQVgsQ0FBckIsRUFBeUNMLEdBQXpDLEVBQThDUSxJQUE5QyxDQUFwQjs7VUFFQSxJQUFJaU8sV0FBVyxDQUFDNU8sTUFBWixLQUF1QixDQUEzQixFQUE4QjtZQUM1QjJPLE9BQU87VUFDUjtRQUNGLENBTkQ7O1FBUUEsSUFBSUEsT0FBTyxLQUFLLENBQWhCLEVBQW1CO1VBQ2pCLElBQU1uQixLQUFLLEdBQUdoTixNQUFNLENBQUN3RSxLQUFQLEtBQWlCeEUsTUFBTSxDQUFDd0UsS0FBUCxFQUFqQixHQUFrQzdFLEdBQWhEO1VBRUEwQyxNQUFNLENBQUNtRSxJQUFQLENBQVk7WUFDVnpLLE9BQU8sRUFBRWlSLEtBQUssR0FBRyw2RkFBUixHQUF3R21CLE9BQXhHLEdBQWtILGtCQURqSDtZQUVWaE8sSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9rQyxNQUFQO0lBQ0Q7OztXQUVELGlCQUFTakcsS0FBVCxFQUFnQjRELE1BQWhCLEVBQXdCTCxHQUF4QixFQUE2QlEsSUFBN0IsRUFBbUM7TUFDakMsSUFBTWtDLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUl4RCxRQUFRLENBQUN6QyxLQUFELENBQVIsSUFBbUI0RCxNQUFNLENBQUNrRSxPQUFQLEVBQXZCLEVBQXlDO1FBQ3ZDLElBQU1xSixNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXeE4sTUFBTSxDQUFDa0UsT0FBUCxFQUFYLENBQWY7UUFDQSxJQUFNZ0osT0FBTyxHQUFHLENBQUNLLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZclIsS0FBWixDQUFqQjs7UUFFQSxJQUFJOFEsT0FBSixFQUFhO1VBQ1gsSUFBTUYsS0FBSyxHQUFHaE4sTUFBTSxDQUFDd0UsS0FBUCxLQUFpQnhFLE1BQU0sQ0FBQ3dFLEtBQVAsRUFBakIsR0FBa0M3RSxHQUFoRDtVQUVBMEMsTUFBTSxDQUFDbUUsSUFBUCxDQUFZO1lBQ1Z6SyxPQUFPLEVBQUVpUixLQUFLLEdBQUcsd0JBQVIsR0FBbUNoTixNQUFNLENBQUNrRSxPQUFQLEVBRGxDO1lBRVYvRCxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT2tDLE1BQVA7SUFDRDs7O1dBRUQsMkJBQW1CakcsS0FBbkIsRUFBMEI0RCxNQUExQixFQUFrQ0wsR0FBbEMsRUFBdUNRLElBQXZDLEVBQTZDO01BQzNDLElBQUlrQyxNQUFNLEdBQUcsRUFBYjs7TUFFQSxJQUFJcEQsY0FBUSxDQUFDN0MsS0FBRCxDQUFSLElBQW1CNEQsTUFBTSxDQUFDbUUsaUJBQVAsRUFBdkIsRUFBbUQ7UUFDakQsSUFBTUEsaUJBQWlCLEdBQUduRSxNQUFNLENBQUNtRSxpQkFBUCxFQUExQjtRQUVBdkUsTUFBTSxDQUFDb0osSUFBUCxDQUFZNU0sS0FBWixFQUFtQmMsT0FBbkIsQ0FBMkIsVUFBQ21SLFlBQUQsRUFBa0I7VUFDM0N6TyxNQUFNLENBQUNvSixJQUFQLENBQVk3RSxpQkFBWixFQUErQmpILE9BQS9CLENBQXVDLFVBQUNnSCxPQUFELEVBQWE7WUFDbEQsSUFBTXFKLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVd0SixPQUFYLENBQWY7O1lBQ0EsSUFBSXFKLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZWSxZQUFaLENBQUosRUFBK0I7Y0FDN0IsSUFBTXJPLE9BQU0sR0FBR21FLGlCQUFpQixDQUFDRCxPQUFELENBQWhDO2NBQ0FsRSxPQUFNLENBQUN3RSxLQUFQLEdBQWU2SixZQUFmO2NBRUEsSUFBTXhILE1BQU0sR0FBRyxJQUFJOEcsR0FBSixDQUFTO2dCQUN0QjNOLE1BQU0sRUFBRUEsT0FEYztnQkFFdEI0TixRQUFRLEVBQUV4UixLQUFLLENBQUNpUyxZQUFEO2NBRk8sQ0FBVCxDQUFmO2NBS0FoTSxNQUFNLHlDQUFPQSxNQUFQLCtCQUFrQndFLE1BQU0sQ0FBQzNFLFFBQVAsRUFBbEIsRUFBTjtZQUNEO1VBQ0YsQ0FiRDtRQWNELENBZkQ7TUFnQkQ7O01BRUQsT0FBT0csTUFBUDtJQUNEOzs7V0FFRCxrQkFBVWpHLEtBQVYsRUFBaUI0RCxNQUFqQixFQUF5QkwsR0FBekIsRUFBOEJRLElBQTlCLEVBQW9DO01BQ2xDLElBQU1rQyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJcEQsY0FBUSxDQUFDN0MsS0FBRCxDQUFSLElBQW1CNEQsTUFBTSxDQUFDcUUsUUFBUCxFQUF2QixFQUEwQztRQUN4QyxJQUFNMEUsaUJBQWlCLEdBQUcsRUFBMUI7UUFDQSxJQUFNQyxJQUFJLEdBQUdwSixNQUFNLENBQUNvSixJQUFQLENBQVk1TSxLQUFaLENBQWI7UUFFQTRELE1BQU0sQ0FBQ3FFLFFBQVAsR0FBa0JuSCxPQUFsQixDQUEwQixVQUFDeUMsR0FBRCxFQUFTO1VBQ2pDLElBQUksQ0FBQ3FKLElBQUksQ0FBQ3JILFFBQUwsQ0FBY2hDLEdBQWQsQ0FBTCxFQUF5QjtZQUN2Qm9KLGlCQUFpQixDQUFDdkMsSUFBbEIsQ0FBdUI3RyxHQUF2QjtVQUNEO1FBQ0YsQ0FKRDtRQU1BLElBQU11TixPQUFPLEdBQUduRSxpQkFBaUIsQ0FBQ3ZKLE1BQWxCLEdBQTJCLENBQTNDOztRQUVBLElBQUkwTixPQUFKLEVBQWE7VUFDWCxJQUFNRixLQUFLLEdBQUdoTixNQUFNLENBQUN3RSxLQUFQLEtBQWlCeEUsTUFBTSxDQUFDd0UsS0FBUCxFQUFqQixHQUFrQzdFLEdBQWhEO1VBRUEwQyxNQUFNLENBQUNtRSxJQUFQLENBQVk7WUFDVnpLLE9BQU8sRUFBRWlSLEtBQUssR0FBRyx3Q0FBUixHQUFtRGpFLGlCQUFpQixDQUFDb0UsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEbEQ7WUFFVmhOLElBQUksRUFBRUE7VUFGSSxDQUFaO1FBSUQ7TUFDRjs7TUFFRCxPQUFPa0MsTUFBUDtJQUNEOzs7V0FFRCxjQUFNakcsS0FBTixFQUFhNEQsTUFBYixFQUFxQkwsR0FBckIsRUFBMEJRLElBQTFCLEVBQWdDO01BQzlCLElBQU1rQyxNQUFNLEdBQUcsRUFBZjs7TUFFQSxJQUFJckMsTUFBTSxDQUFDZ0wsS0FBUCxFQUFKLEVBQW9CO1FBQ2xCLE9BQU8zSSxNQUFQO01BQ0Q7O01BRUQsSUFBSXJDLE1BQU0sQ0FBQ3lFLE1BQVAsQ0FBYyxLQUFkLENBQUosRUFBMEI7UUFDeEIsT0FBT3BDLE1BQVA7TUFDRDs7TUFFRCxJQUFJckMsTUFBTSxDQUFDckQsSUFBUCxFQUFKLEVBQW1CO1FBQ2pCLElBQU1xTyxLQUFLLEdBQUc7VUFDWnNELE1BQU0sRUFBRSxnQkFBQWxTLEtBQUs7WUFBQSxPQUFJeUMsUUFBUSxDQUFDekMsS0FBRCxDQUFaO1VBQUEsQ0FERDtVQUVabVMsTUFBTSxFQUFFLGdCQUFBblMsS0FBSztZQUFBLE9BQUlxQyxRQUFRLENBQUNyQyxLQUFELENBQVo7VUFBQSxDQUZEO1VBR1pvUyxPQUFPLEVBQUUsaUJBQUFwUyxLQUFLO1lBQUEsT0FBSXNDLFNBQVMsQ0FBQ3RDLEtBQUQsQ0FBYjtVQUFBLENBSEY7VUFJWixXQUFTLGlCQUFBQSxLQUFLO1lBQUEsT0FBSTBDLFNBQVMsQ0FBQzFDLEtBQUQsQ0FBYjtVQUFBLENBSkY7VUFLWnFTLEtBQUssRUFBRSxlQUFBclMsS0FBSztZQUFBLE9BQUkyQyxPQUFPLENBQUMzQyxLQUFELENBQVg7VUFBQSxDQUxBO1VBTVpzUyxNQUFNLEVBQUUsZ0JBQUF0UyxLQUFLO1lBQUEsT0FBSTZDLGNBQVEsQ0FBQzdDLEtBQUQsQ0FBWjtVQUFBLENBTkQ7VUFPWixRQUFNLGVBQUFBLEtBQUs7WUFBQSxPQUFJa0MsTUFBTSxDQUFDbEMsS0FBRCxDQUFWO1VBQUE7UUFQQyxDQUFkO1FBVUEsSUFBTXlRLEtBQUssR0FBRzdCLEtBQUssQ0FBQ2hMLE1BQU0sQ0FBQ3JELElBQVAsRUFBRCxDQUFMLENBQXFCUCxLQUFyQixDQUFkOztRQUVBLElBQUksQ0FBQ3lRLEtBQUwsRUFBWTtVQUNWLElBQU1HLEtBQUssR0FBR2hOLE1BQU0sQ0FBQ3dFLEtBQVAsS0FBaUJ4RSxNQUFNLENBQUN3RSxLQUFQLEVBQWpCLEdBQWtDN0UsR0FBaEQ7VUFFQTBDLE1BQU0sQ0FBQ21FLElBQVAsQ0FBWTtZQUNWekssT0FBTyxFQUFFaVIsS0FBSyxHQUFHLG1CQUFSLEdBQThCaE4sTUFBTSxDQUFDckQsSUFBUCxFQUQ3QjtZQUVWd0QsSUFBSSxFQUFFQTtVQUZJLENBQVo7UUFJRDtNQUNGOztNQUVELE9BQU9rQyxNQUFQO0lBQ0Q7OztXQUVELHFCQUFhakcsS0FBYixFQUFvQjRELE1BQXBCLEVBQTRCTCxHQUE1QixFQUFpQ1EsSUFBakMsRUFBdUM7TUFDckMsSUFBTWtDLE1BQU0sR0FBRyxFQUFmOztNQUVBLElBQUl0RCxPQUFPLENBQUMzQyxLQUFELENBQVAsSUFBa0I0RCxNQUFNLENBQUMyRSxXQUFQLEVBQXRCLEVBQTRDO1FBQzFDLElBQU1nSyxJQUFJLEdBQUcsRUFBYjtRQUNBLElBQUlDLGtCQUFrQixHQUFHLEtBQXpCOztRQUVBLEtBQUssSUFBSXRGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdsTixLQUFLLENBQUNvRCxNQUExQixFQUFrQzhKLENBQUMsRUFBbkMsRUFBdUM7VUFDckMsSUFBTWxELElBQUksR0FBR3JJLElBQUksQ0FBQ0UsU0FBTCxDQUFlN0IsS0FBSyxDQUFDa04sQ0FBRCxDQUFwQixDQUFiOztVQUNBLElBQUlxRixJQUFJLENBQUN2SSxJQUFELENBQVIsRUFBZ0I7WUFDZHdJLGtCQUFrQixHQUFHLElBQXJCO1lBQ0E7VUFDRDs7VUFDREQsSUFBSSxDQUFDdkksSUFBRCxDQUFKLEdBQWEsSUFBYjtRQUNEOztRQUVELElBQU04RyxPQUFPLEdBQUkwQixrQkFBakI7O1FBRUEsSUFBSTFCLE9BQUosRUFBYTtVQUNYLElBQU1GLEtBQUssR0FBR2hOLE1BQU0sQ0FBQ3dFLEtBQVAsS0FBaUJ4RSxNQUFNLENBQUN3RSxLQUFQLEVBQWpCLEdBQWtDN0UsR0FBaEQ7VUFFQTBDLE1BQU0sQ0FBQ21FLElBQVAsQ0FBWTtZQUNWekssT0FBTyxFQUFFaVIsS0FBSyxHQUFHLHlCQURQO1lBRVY3TSxJQUFJLEVBQUVBO1VBRkksQ0FBWjtRQUlEO01BQ0Y7O01BRUQsT0FBT2tDLE1BQVA7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLHNCQUFjSixTQUFkLEVBQXlCO01BQ3ZCLEtBQUswSyxVQUFMLENBQWdCbkcsSUFBaEIsQ0FBcUJ2RSxTQUFyQjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usa0JBQVU3RixLQUFWLEVBQWlCNEQsTUFBakIsRUFBeUJMLEdBQXpCLEVBQThCUSxJQUE5QixFQUFvQztNQUFBOztNQUNsQyxJQUFJME8sWUFBWSxHQUFHLEVBQW5CO01BRUEsS0FBS2xDLFVBQUwsQ0FBZ0J6UCxPQUFoQixDQUF3QixVQUFDK0UsU0FBRCxFQUFlO1FBQ3JDLElBQU02TSxlQUFlLEdBQUcsTUFBSSxDQUFDN00sU0FBRCxDQUFKLENBQWdCN0YsS0FBaEIsRUFBdUI0RCxNQUF2QixFQUErQkwsR0FBL0IsRUFBb0NRLElBQXBDLENBQXhCOztRQUVBLElBQUkyTyxlQUFKLEVBQXFCO1VBQ25CRCxZQUFZLHlDQUFPQSxZQUFQLCtCQUF3QkMsZUFBeEIsRUFBWjtRQUNEO01BQ0YsQ0FORDs7TUFRQSxJQUFJRCxZQUFZLENBQUNyUCxNQUFiLEdBQXNCLENBQXRCLElBQTJCUSxNQUFNLENBQUM1QyxNQUFQLENBQWMsU0FBZCxDQUEvQixFQUF5RDtRQUN2RHlSLFlBQVksR0FBRyxDQUNiO1VBQ0U5UyxPQUFPLEVBQUVpRSxNQUFNLENBQUM1QyxNQUFQLENBQWMsU0FBZCxDQURYO1VBRUUrQyxJQUFJLEVBQUVBO1FBRlIsQ0FEYSxDQUFmO01BTUQ7O01BRUQsT0FBTzBPLFlBQVA7SUFDRDs7Ozs7O0FBR1luQyxxRUFBZixFOzs7O0FDcG5CQTs7SUFFTXFDLG9CO0VBQ0oscUJBQWU7SUFBQTs7SUFDYixLQUFLQyxVQUFMLEdBQWtCLENBQWxCO0lBQ0EsS0FBS0MsSUFBTCxHQUFZLEVBQVo7RUFDRDs7OztXQUVELHFCQUFhalAsTUFBYixFQUFxQjtNQUNuQixLQUFLaVAsSUFBTCxHQUFZalAsTUFBTSxDQUFDLE9BQUQsQ0FBbEI7O01BRUEsS0FBSyxJQUFJc0osQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEYsVUFBekIsRUFBcUMxRixDQUFDLEVBQXRDLEVBQTBDO1FBQ3hDLEtBQUs0RixRQUFMLENBQWMsS0FBS0QsSUFBbkI7UUFDQSxLQUFLQyxRQUFMLENBQWNsUCxNQUFkO01BQ0Q7O01BRUQsT0FBT0EsTUFBUDtJQUNEOzs7V0FFRCxnQkFBUW1QLEdBQVIsRUFBYTtNQUNYLElBQUksQ0FBQ3RRLFFBQVEsQ0FBQ3NRLEdBQUQsQ0FBYixFQUFvQjtRQUNsQixPQUFPQSxHQUFQO01BQ0Q7O01BRUQsSUFBSUEsR0FBRyxDQUFDQyxVQUFKLENBQWUsU0FBZixDQUFKLEVBQStCO1FBQzdCLElBQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDN04sS0FBSixDQUFVLEdBQVYsQ0FBakI7UUFDQSxJQUFNZ08sT0FBTyxHQUFHRCxRQUFRLENBQUM5TixHQUFULEVBQWhCOztRQUVBLElBQUloRCxLQUFLLENBQUMsS0FBSzBRLElBQUwsQ0FBVUssT0FBVixDQUFELENBQVQsRUFBK0I7VUFDN0IsT0FBTyxLQUFLTCxJQUFMLENBQVVLLE9BQVYsQ0FBUDtRQUNEO01BQ0Y7O01BRUQsT0FBT0gsR0FBUDtJQUNEOzs7V0FFRCxrQkFBVS9TLEtBQVYsRUFBaUIwQixLQUFqQixFQUF3QlgsS0FBeEIsRUFBK0I7TUFBQTs7TUFDN0IsSUFBSThCLGNBQVEsQ0FBQzdDLEtBQUQsQ0FBWixFQUFxQjtRQUNuQixJQUFJbUMsS0FBSyxDQUFDbkMsS0FBSyxDQUFDLE1BQUQsQ0FBTixDQUFMLElBQXdCbUMsS0FBSyxDQUFDVCxLQUFELENBQWpDLEVBQTBDO1VBQ3hDQSxLQUFLLENBQUNYLEtBQUQsQ0FBTCxHQUFlLEtBQUtvUyxNQUFMLENBQVluVCxLQUFLLENBQUMsTUFBRCxDQUFqQixDQUFmO1FBQ0QsQ0FGRCxNQUVPO1VBQ0wsS0FBSyxJQUFNZSxNQUFYLElBQW9CZixLQUFwQixFQUEyQjtZQUN6QixJQUFJLENBQUN3RCxNQUFNLENBQUNnRCxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMxRyxLQUFyQyxFQUE0Q2UsTUFBNUMsQ0FBTCxFQUF5RDtjQUN2RDtZQUNEOztZQUVELEtBQUsrUixRQUFMLENBQWM5UyxLQUFLLENBQUNlLE1BQUQsQ0FBbkIsRUFBNEJmLEtBQTVCLEVBQW1DZSxNQUFuQztVQUNEO1FBQ0Y7TUFDRjs7TUFFRCxJQUFJNEIsT0FBTyxDQUFDM0MsS0FBRCxDQUFYLEVBQW9CO1FBQ2xCQSxLQUFLLENBQUNjLE9BQU4sQ0FBYyxVQUFDa0osSUFBRCxFQUFPakosS0FBUCxFQUFpQjtVQUM3QixLQUFJLENBQUMrUixRQUFMLENBQWM5SSxJQUFkLEVBQW9CaEssS0FBcEIsRUFBMkJlLEtBQTNCO1FBQ0QsQ0FGRDtNQUdEO0lBQ0Y7Ozs7OztBQUdZNFIsbUVBQWYsRTs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTXBCLFE7RUFDSixjQUFheE0sT0FBYixFQUFzQjtJQUFBOztJQUNwQixLQUFLQSxPQUFMLEdBQWV2QixNQUFNLENBQUNDLE1BQVAsQ0FBYztNQUMzQmdKLGtCQUFrQixFQUFFLEtBRE87TUFFM0J6SCxnQkFBZ0IsRUFBRSxLQUZTO01BRzNCb0gsZ0JBQWdCLEVBQUUsS0FIUztNQUkzQnhJLE1BQU0sRUFBRSxFQUptQjtNQUszQkssS0FBSyxFQUFFO0lBTG9CLENBQWQsRUFNWmMsT0FOWSxDQUFmO0lBUUEsS0FBSzlFLFNBQUwsR0FBaUJYLFFBQVEsQ0FBQzhULGFBQVQsQ0FBdUJyTyxPQUFPLENBQUM5RSxTQUEvQixLQUE2Q1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTlEO0lBQ0EsS0FBS3lPLE9BQUwsR0FBZSxFQUFmO0lBQ0EsS0FBS3FGLElBQUwsR0FBWSxJQUFaO0lBQ0EsS0FBS3BQLEtBQUwsR0FBYSxJQUFiO0lBQ0EsS0FBS3FQLFNBQUwsR0FBaUIsRUFBakI7SUFDQSxLQUFLbkQsUUFBTCxHQUFnQixJQUFJTixZQUFKLEVBQWhCO0lBQ0EsS0FBS2hLLFNBQUwsR0FBaUIsSUFBSXlLLGFBQUosRUFBakI7SUFDQSxLQUFLaUQsU0FBTCxHQUFpQixJQUFJWixVQUFKLEVBQWpCO0lBQ0EsS0FBSy9PLE1BQUwsR0FBYyxJQUFJK0MsVUFBSixDQUFXNUIsT0FBTyxDQUFDbkIsTUFBbkIsQ0FBZDtJQUNBLEtBQUtxQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUszQixJQUFMO0VBQ0Q7Ozs7V0FFRCxnQkFBUTtNQUFBOztNQUNOLFFBQVEsS0FBS1MsT0FBTCxDQUFhZCxLQUFyQjtRQUNFLEtBQUssV0FBTDtVQUNFLEtBQUtBLEtBQUwsR0FBYSxJQUFJOUUsU0FBSixFQUFiO1VBQ0E7O1FBQ0YsS0FBSyxZQUFMO1VBQ0UsS0FBSzhFLEtBQUwsR0FBYSxJQUFJMUMsVUFBSixFQUFiO1VBQ0E7O1FBQ0YsS0FBSyxZQUFMO1VBQ0UsS0FBSzBDLEtBQUwsR0FBYSxJQUFJekMsVUFBSixFQUFiO1VBQ0E7O1FBQ0YsS0FBSyxXQUFMO1VBQ0UsS0FBS3lDLEtBQUwsR0FBYSxJQUFJOUMsU0FBSixFQUFiO1VBQ0E7TUFaSjs7TUFlQSxLQUFLb1MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLEtBQUs1UCxNQUFMLENBQVlBLE1BQXZDO01BRUEsS0FBS3lQLElBQUwsR0FBWSxLQUFLL0osWUFBTCxDQUFrQjtRQUM1QjNGLElBQUksRUFBRSxJQURzQjtRQUU1QkMsTUFBTSxFQUFFLEtBQUtBO01BRmUsQ0FBbEIsQ0FBWjs7TUFLQSxJQUFJLEtBQUttQixPQUFMLENBQWF5TSxRQUFqQixFQUEyQjtRQUN6QixLQUFLNkIsSUFBTCxDQUFVcEssUUFBVixDQUFtQixLQUFLbEUsT0FBTCxDQUFheU0sUUFBaEM7TUFDRDs7TUFFRCxLQUFLaUMsV0FBTCxHQUFtQixLQUFLeFAsS0FBTCxDQUFXeUksUUFBWCxDQUFvQjtRQUNyQ25NLElBQUksRUFBRSxRQUQrQjtRQUVyQ0MsRUFBRSxFQUFFO01BRmlDLENBQXBCLENBQW5CO01BS0EsS0FBS2lULFdBQUwsQ0FBaUIxVCxZQUFqQixDQUE4QixNQUE5QixFQUFzQyxNQUF0QztNQUVBLEtBQUtFLFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkIsS0FBS3VTLFdBQWhDO01BQ0EsS0FBS0EsV0FBTCxDQUFpQnpULEtBQWpCLEdBQXlCMkIsSUFBSSxDQUFDRSxTQUFMLENBQWUsS0FBS2tFLFFBQUwsRUFBZixDQUF6QjtNQUVBLEtBQUs5RixTQUFMLENBQWVpQixXQUFmLENBQTJCLEtBQUttUyxJQUFMLENBQVVwVCxTQUFyQztNQUNBLEtBQUtBLFNBQUwsQ0FBZVQsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsWUFBN0I7TUFDQSxLQUFLaVUsSUFBTCxDQUFVLFFBQVY7O01BQ0EsS0FBS0wsSUFBTCxDQUFVMU4sUUFBVixHQUFxQixZQUFNO1FBQ3pCLEtBQUksQ0FBQytOLElBQUwsQ0FBVSxRQUFWOztRQUNBLEtBQUksQ0FBQ0QsV0FBTCxDQUFpQnpULEtBQWpCLEdBQXlCMkIsSUFBSSxDQUFDRSxTQUFMLENBQWUsS0FBSSxDQUFDa0UsUUFBTCxFQUFmLENBQXpCO01BQ0QsQ0FIRDs7TUFJQSxLQUFLQSxRQUFMO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSx3QkFBZ0IwRSxNQUFoQixFQUF3QjtNQUN0QixLQUFLdUQsT0FBTCxDQUFhdkQsTUFBTSxDQUFDMUcsSUFBcEIsSUFBNEIwRyxNQUE1QjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsMEJBQWtCQSxNQUFsQixFQUEwQjtNQUN4QixLQUFLdUQsT0FBTCxDQUFhdkQsTUFBTSxDQUFDMUcsSUFBcEIsSUFBNEIsSUFBNUI7TUFDQSxPQUFPLEtBQUtpSyxPQUFMLENBQWF2RCxNQUFNLENBQUMxRyxJQUFwQixDQUFQO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxzQkFBYzNFLE1BQWQsRUFBc0I7TUFDcEIsT0FBTyxLQUFLK1EsUUFBTCxDQUFjRixPQUFkLENBQXNCN1EsTUFBdEIsQ0FBUDtJQUNEOzs7V0FFRCxvQkFBWTtNQUNWLE9BQU8sS0FBS2lVLElBQUwsQ0FBVXROLFFBQVYsRUFBUDtJQUNEOzs7V0FFRCxvQkFBWTtNQUFBOztNQUNWLE9BQU8sbUJBQUtzTixJQUFMLEVBQVVwSyxRQUFWLG1CQUFzQjBLLFNBQXRCLENBQVA7SUFDRDs7O1dBRUQsbUJBQVc1UCxJQUFYLEVBQWlCO01BQ2YsT0FBTyxLQUFLaUssT0FBTCxDQUFhakssSUFBYixDQUFQO0lBQ0Q7OztXQUVELG1CQUFXO01BQ1QsS0FBS3NQLElBQUwsQ0FBVXJJLE9BQVY7SUFDRDs7O1dBRUQsa0JBQVU7TUFDUixLQUFLcUksSUFBTCxDQUFVcEksTUFBVjtJQUNEOzs7V0FFRCxvQkFBWTtNQUFBOztNQUNWekgsTUFBTSxDQUFDb0osSUFBUCxDQUFZLEtBQUtvQixPQUFqQixFQUEwQmxOLE9BQTFCLENBQWtDLFVBQUN5QyxHQUFELEVBQVM7UUFDekMsSUFBTWtILE1BQU0sR0FBRyxNQUFJLENBQUN1RCxPQUFMLENBQWF6SyxHQUFiLENBQWY7UUFDQSxNQUFJLENBQUMwQyxNQUFMLHlDQUFrQixNQUFJLENBQUNBLE1BQXZCLCtCQUFrQ3dFLE1BQU0sQ0FBQzNFLFFBQVAsRUFBbEM7TUFDRCxDQUhEO01BS0EsT0FBTyxLQUFLRyxNQUFaO0lBQ0Q7OztXQUVELGlCQUFTO01BQ1AsS0FBS2xCLE9BQUwsQ0FBYXlNLFFBQWIsR0FBd0IsS0FBS3pMLFFBQUwsRUFBeEI7TUFDQSxLQUFLOUYsU0FBTCxDQUFlaUcsU0FBZixHQUEyQixFQUEzQjtNQUNBLEtBQUttTixJQUFMLENBQVVoSixPQUFWO01BQ0EsS0FBSy9GLElBQUw7SUFDRDs7O1dBRUQsa0JBQVVMLEtBQVYsRUFBaUI7TUFDZixLQUFLYyxPQUFMLENBQWFkLEtBQWIsR0FBcUJBLEtBQXJCO01BQ0EsS0FBSzJQLEtBQUw7SUFDRDs7O1dBRUQsWUFBSUMsSUFBSixFQUFVQyxRQUFWLEVBQW9CO01BQ2xCLEtBQUtSLFNBQUwsQ0FBZWxKLElBQWYsQ0FBb0I7UUFBRXlKLElBQUksRUFBSkEsSUFBRjtRQUFRQyxRQUFRLEVBQVJBO01BQVIsQ0FBcEI7SUFDRDs7O1dBRUQsY0FBTUQsSUFBTixFQUFZO01BQ1YsSUFBTUUsUUFBUSxHQUFHLEtBQUtULFNBQUwsQ0FBZW5HLElBQWYsQ0FBb0IsVUFBQTRHLFFBQVE7UUFBQSxPQUFJQSxRQUFRLENBQUNGLElBQVQsS0FBa0JBLElBQXRCO01BQUEsQ0FBNUIsQ0FBakI7O01BRUEsSUFBSUUsUUFBSixFQUFjO1FBQ1pBLFFBQVEsQ0FBQ0QsUUFBVDtNQUNEO0lBQ0Y7OztXQUVELG1CQUFXO01BQUE7O01BQ1QsS0FBS1QsSUFBTCxDQUFVaEosT0FBVjtNQUVBLEtBQUtwSyxTQUFMLENBQWVpRyxTQUFmLEdBQTJCLEVBQTNCO01BRUExQyxNQUFNLENBQUNvSixJQUFQLENBQVksSUFBWixFQUFrQjlMLE9BQWxCLENBQTBCLFVBQUN5QyxHQUFELEVBQVM7UUFDakMsT0FBTyxNQUFJLENBQUNBLEdBQUQsQ0FBWDtNQUNELENBRkQ7SUFHRDs7Ozs7O0FBR1lnTyxpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjbGFzcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgYWN0aW9uc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjdGlvbnNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gYWN0aW9uc1Nsb3RcbiAgfVxuXG4gIGdldENoaWxkRWRpdG9yc1Nsb3QgKCkge1xuICAgIGNvbnN0IGNoaWxkRWRpdG9yc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoaWxkRWRpdG9yc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBjaGlsZEVkaXRvcnNTbG90XG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1pbmZvJ1xuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVzc2FnZXNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIG1lc3NhZ2VzU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6IGF1dG87JylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0SW5wdXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlubGluZScpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVdpcmVmcmFtZVxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4vYm9vdHN0cmFwNCdcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCb290c3RyYXA0IHtcbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbi1mb2N1c2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCdcblxuZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpICE9PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2ludGVnZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCB1dWlkdjQgPSAoKSA9PiB7XG4gIHJldHVybiB2NCgpXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJjbGFzcyBFZGl0b3Ige1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8ICdyb290J1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSB0aGlzLmplZGkudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy5qZWRpLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q2hpbGRFZGl0b3JzU2xvdCgpXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBidWlsZCBwaXBlbGluZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgaWYgKHRoaXMuamVkaS5yZWFkeSB8fCB0aGlzLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG4gIH1cblxuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRDb250YWluZXIoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLnBhdGgpXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogSWYgc2NoZW1hLmRlZmF1bHQgaXMgbm90IGRlZmluZWQsIHNldHMgYW4gaW5pdGlhbCB2YWx1ZSBiYXNlZCBvbiBpdCdzIHR5cGUuXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCB1bmxlc3MgdHJpZ2dlcnNDaGFuZ2UgaXMgZXhwbGljaXRseSBzZXQgdG8gZmFsc2UuIFRoaXMgaXNcbiAgICogdXNlZnVsIGZvciBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWVzLlxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuc2FuaXRpemUobmV3VmFsdWUpXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMub25TZXRWYWx1ZSgpXG5cbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLm1lc3NhZ2VzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXRFcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxuICBvblNldFZhbHVlICgpIHt9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBlZGl0b3IgY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlICgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRFZGl0b3JDaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIGEgY2hpbGQgZWRpdG9yIGNoYW5nZXMuIFRoaXMgaXMgcmVsZXZhbnQgZm9yIEFycmF5XG4gICAqIGFuZCBPYmplY3QgZWRpdG9ycy5cbiAgICovXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3IsIGFuZCBldmVyeSByZWZlcmVuY2UgdGhhdCBpdCBpcyBhdHRhY2hlZCB0byBpdC5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogZmFsc2VcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IGZhbHNlXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0ID8gdGhpcy5zY2hlbWEuY29uc3QgOiBmYWxzZVxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0ID8gdGhpcy5zY2hlbWEuZGVmYXVsdCA6IGZhbHNlXG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogZmFsc2VcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiBmYWxzZVxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpID8gdGhpcy5zY2hlbWEuZWxzZSA6IGZhbHNlXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybWF0KCkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSA/IHRoaXMuc2NoZW1hLmlmIDogZmFsc2VcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWF4UHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSA/IHRoaXMuc2NoZW1hLm5vdCA6IGZhbHNlXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0eSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogZmFsc2VcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiBmYWxzZVxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IGZhbHNlXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMudHlwZSgpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVzICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiBmYWxzZVxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgc2VyaWFsaXplICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgY2xvbmUsIGlzQXJyYXkgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUFsbEJ0bilcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZW1FZGl0b3IgKHZhbHVlKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEuaXRlbXMoKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7IHR5cGU6IGdldFR5cGUodmFsdWUpIH1cblxuICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWRpdG9yLmFjdGlvbnNTbG90KVxuICAgIGl0ZW1FZGl0b3IuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5nZXRLZXkoKSlcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICB9KVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgfSlcbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgfSlcbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUnKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgb25DaGlsZEVkaXRvckNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoaXRlbVZhbHVlKVxuICAgICAgaXRlbUVkaXRvci5zZXRWYWx1ZShpdGVtVmFsdWUsIGZhbHNlKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChpdGVtRWRpdG9yKVxuXG4gICAgICBsZXQgYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpXG5cbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkQnV0dG9ucyA9IEFycmF5LmZyb20oY2hpbGRFZGl0b3IuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuICAgICAgICBidXR0b25zID0gYnV0dG9ucy5jb25jYXQoY2hpbGRCdXR0b25zKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgaXRlbUVkaXRvci5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtRWRpdG9yLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIGNoaWxkRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBjaGVja2JveCBjb250YWluZXJcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMucmFkaW9JbnB1dHMgPSBbXVxuXG4gICAgLy8gbGVnZW5kXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvTGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGVxdWFsLCBpc1NldCwgZ2V0VHlwZSwgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgLy8gY2hpbGQgZWRpdG9yc1xuICAgIGlmICh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCksIGtleSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvd1JlcXVpcmVkT25seSA9IHRoaXMuamVkaS5vcHRpb25zLnNob3dSZXF1aXJlZE9ubHkgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdzaG93UmVxdWlyZWRPbmx5JylcbiAgICAgICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLnNjaGVtYS5yZXF1aXJlZCgpIHx8ICF0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKGtleSlcblxuICAgICAgICBpZiAoc2hvd1JlcXVpcmVkT25seSAmJiBpc05vdFJlcXVpcmVkKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnR5KGtleSlcbiAgICAgICAgdGhpcy5hZGRDaGlsZEVkaXRvcihzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgZGVwZW5kZW50IHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5zY2hlbWEucHJvcGVydGllcygpLCBrZXkpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRGVwZW5kZW50UmVxdWlyZWQoa2V5KSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnR5KGtleSlcbiAgICAgICAgICB0aGlzLmFkZENoaWxkRWRpdG9yKHNjaGVtYSwga2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2hpbGRFZGl0b3JzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuXG4gICAgLy8gYWRkQnRuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICAgIGZvcjogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLnBhdGhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5wYXRoXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgICAgY29uc3QgYWRkQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgICAgfSlcblxuICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBpbnB1dC52YWx1ZVxuXG4gICAgICAgIC8vIGlmIG5vdCBwcm9wZXJ0eSBuYW1lIHdhcyBnaXZlbiByZXR1cm5cbiAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHByb3BlcnR5IGV4aXN0IHJldHVyblxuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZEVkaXRvcih7IHR5cGU6ICdhbnknIH0sIGtleSlcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKVxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClcblxuICAgIGlmIChkZXBlbmRlbnRSZXF1aXJlZCkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGFkZENoaWxkRWRpdG9yIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgLy8gcmVtb3ZlQnRuXG4gICAgY29uc3Qgbm90UmVxdWlyZWQgPSAhdGhpcy5pc1JlcXVpcmVkKGtleSlcbiAgICBjb25zdCBub3REZXBlbmRlbnRSZXF1aXJlZCA9ICF0aGlzLmlzRGVwZW5kZW50UmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IGVkaXRhYmxlUHJvcGVydGllcyA9IHRoaXMuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpXG5cbiAgICBpZiAobm90UmVxdWlyZWQgJiYgbm90RGVwZW5kZW50UmVxdWlyZWQgJiYgZWRpdGFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICBjb25zdCByZW1vdmVCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdSZW1vdmUgcHJvcGVydHknXG4gICAgICB9KVxuICAgICAgZWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlW2tleV1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBlZGl0b3IuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVsZXRlQ2hpbGRFZGl0b3IgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5jaGlsZEVkaXRvcnNbaV1cbiAgICAgIGlmIChlZGl0b3IuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnNwbGljZShpLCAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB2YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV0gPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBnZXRDaGlsZEVkaXRvciAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFZGl0b3JzLmZpbmQoKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBjaGlsZEVkaXRvci5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5jaGlsZEVkaXRvcnNbaV1cbiAgICAgIGNvbnN0IGtleSA9IGVkaXRvci5nZXRLZXkoKVxuICAgICAgaWYgKCFpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkRWRpdG9yKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGRFZGl0b3IgPSB0aGlzLmdldENoaWxkRWRpdG9yKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgZWRpdG9yXG4gICAgICBpZiAoY2hpbGRFZGl0b3IpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGRFZGl0b3IuZ2V0S2V5KCldXG5cbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHZhbHVlIGlmIHRoZSBvbGQgdmFsdWUgYW5kIHRoZSBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoIWVxdWFsKG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGlsZEVkaXRvci5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY2hpbGQgZWRpdG9yIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRFZGl0b3Ioc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkRWRpdG9yID0gdGhpcy5nZXRDaGlsZEVkaXRvcihrZXkpXG5cbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5hcHBlbmRDaGlsZChjaGlsZEVkaXRvci5jb250YWluZXIpXG5cbiAgICAgIGlmIChjaGlsZEVkaXRvcikge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkRWRpdG9yLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkRWRpdG9yLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgaWYgKCF0aGlzLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgICAgfSkpXG5cbiAgICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICBjaGlsZEVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH1cblxuICAgIC8vIGlucHV0XG4gICAgLy8gdG9kbyBmaWxlLCByYW5nZSBzaG91bGQgYmUgaGFuZGxlZCBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLnNjaGVtYS5mb3JtYXQoKSkgPyB0aGlzLnNjaGVtYS5mb3JtYXQoKSA6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IHRoaXMucGF0aFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5vcHRpb25WYWx1ZXNbMF1cbiAgICAvL1xuICAgIC8vIGlmIChmaXJzdE9wdGlvbikge1xuICAgIC8vICAgdGhpcy5zZXRWYWx1ZShmaXJzdE9wdGlvbiwgZmFsc2UpXG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLnJhZGlvSW5wdXRzID0gW11cblxuICAgIC8vIGxlZ2VuZFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0xlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJhZGlvSW5wdXRzLnB1c2gocmFkaW8pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgfSkpXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0LCBlcXVhbCwgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5lZGl0b3JzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG4gICAgdGhpcy5hY3RpdmVFZGl0b3IgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcblxuICAgIGxldCBzY2hlbWFzID0gW11cblxuICAgIGlmICh0aGlzLnNjaGVtYS5hbnlPZigpIHx8IHRoaXMuc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IHRoaXMuc2NoZW1hLmFueU9mKCkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoc2NoZW1hLmFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS5vcHRpb25zPy5zd2l0Y2hlclRpdGxlIHx8ICdPcHRpb24tJyArIChpbmRleCArIDEpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG4gICAgICAgIHNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZXMoKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgc2NoZW1hcy5wdXNoKHNjaGVtYSlcblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICBzY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBFZGl0b3JzXG4gICAgc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGVkaXRvci51bnJlZ2lzdGVyKClcblxuICAgICAgZWRpdG9yLm9uQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5lZGl0b3JzLnB1c2goZWRpdG9yKVxuICAgIH0pXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBzd2l0Y2hlciBidXR0b25zXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIHRoaXMuc3dpdGNoZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gYnV0dG9uXG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzW2luZGV4XSxcbiAgICAgICAgdmFsdWU6IGluZGV4XG4gICAgICB9KVxuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGJ1dHRvbi52YWx1ZSlcbiAgICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLnB1c2goYnV0dG9uKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuZWRpdG9yc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKDAsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEVkaXRvciAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gdGhpcy5lZGl0b3JzW3RoaXMuaW5kZXhdXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCAnbXVsdGlwbGUnKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0cnVlXG4gICAgfSkpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IG9sZEVkaXRvciA9IHRoaXMuZWRpdG9yc1t0aGlzLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRFZGl0b3IuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZEVkaXRvci5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3RpdmVFZGl0b3IuY29udGFpbmVyKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlRWRpdG9yLmRpc2FibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlRWRpdG9yLmVuYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoKE51bWJlcihidXR0b24udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbmRleCkpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbkFjdGl2ZUNsYXNzKCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3IuZ2V0VmFsdWUoKVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLmFjdGl2ZUVkaXRvci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpXG4gIH1cblxuICBtYXRjaEVkaXRvciAodmFsdWUsIGVkaXRvcnMpIHtcbiAgICBsZXQgaW5kZXggPSAwXG5cbiAgICBmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG4gICAgICBpZiAoZWRpdG9yLmVkaXRvcnMpIHtcbiAgICAgICAgZWRpdG9yLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoZXF1YWwoZWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUgKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgZWRpdG9yIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gZWRpdG9yIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmICghZXF1YWwodGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgIHRoaXMubWF0Y2hFZGl0b3IodmFsdWUsIHRoaXMuZWRpdG9ycylcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuZWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMub3B0aW9uVmFsdWVzWzBdXG4gICAgLy9cbiAgICAvLyBpZiAoZmlyc3RPcHRpb24pIHtcbiAgICAvLyAgIHRoaXMuc2V0VmFsdWUoZmlyc3RPcHRpb24sIGZhbHNlKVxuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5yYWRpb0lucHV0cyA9IFtdXG5cbiAgICAvLyBsZWdlbmRcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9MZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yYWRpb0lucHV0cy5wdXNoKHJhZGlvKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIH0pKVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCB7IGlzU2V0LCBnZXRUeXBlIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9vYmplY3QnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bGwnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuXG5jbGFzcyBSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgLy8gKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAvLyAgIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgICAgLy8gICAgIGxldCBtZXJnZWQgPSB7fVxuICAgICAgLy9cbiAgICAgIC8vICAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChhbGxPZlNjaGVtYSkgPT4ge1xuICAgICAgLy8gICAgICAgbWVyZ2VkID0gbWVyZ2VEZWVwKG1lcmdlZCwgYWxsT2ZTY2hlbWEpXG4gICAgICAvLyAgICAgfSlcbiAgICAgIC8vXG4gICAgICAvLyAgICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEobWVyZ2VkKVxuICAgICAgLy9cbiAgICAgIC8vICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKGNvbmZpZylcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLmFueU9mKCkgfHwgc2NoZW1hLm9uZU9mKCkgfHwgc2NoZW1hLnR5cGVJcygnYW55JykgfHwgc2NoZW1hLnR5cGVzKCkgfHwgIXNjaGVtYS50eXBlKCkpIHtcbiAgICAgICAgICBpZiAoIXNjaGVtYS50eXBlKCkgJiYgc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBzY2hlbWEuY2xvbmUoKVxuICAgICAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKG5ld1NjaGVtYSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZUVkaXRvcihjb25maWcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCb29sZWFuRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE9iamVjdEVkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFycmF5RWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgc2NoZW1hLmVudW0oKSAmJiBzY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHNjaGVtYS5lbnVtKCkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBzY2hlbWEuZW51bSgpICYmIHNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBzY2hlbWEuZW51bSgpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBOdWxsRWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVzb2x2ZXIgZnVuY3Rpb25cbiAgICovXG4gIGFkZFJlc29sdmVyIChyZXNvbHZlcikge1xuICAgIHRoaXMucmVzb2x2ZXJzLnVuc2hpZnQocmVzb2x2ZXIpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKGNvbmZpZykge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoY29uZmlnLnNjaGVtYSwgY29uZmlnKVxuICAgICAgaWYgKGlzU2V0KGVkaXRvckNsYXNzKSkge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgSmVkaSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gW1xuICAgICAgJ2FsbE9mJyxcbiAgICAgICdhbnlPZicsXG4gICAgICAnb25lT2YnLFxuICAgICAgJ2RlcGVuZGVudFJlcXVpcmVkJyxcbiAgICAgICdmb3JtYXQnLFxuICAgICAgJ2lmJyxcbiAgICAgICdjb25zdCcsXG4gICAgICAnbm90JyxcbiAgICAgICd0eXBlJyxcbiAgICAgICd1bmlxdWVJdGVtcycsXG4gICAgICAnZXhjbHVzaXZlTWF4aW11bScsXG4gICAgICAnZXhjbHVzaXZlTWluaW11bScsXG4gICAgICAnbWluSXRlbXMnLFxuICAgICAgJ21heEl0ZW1zJyxcbiAgICAgICdtaW5MZW5ndGgnLFxuICAgICAgJ21heExlbmd0aCcsXG4gICAgICAnbWluaW11bScsXG4gICAgICAnbWF4aW11bScsXG4gICAgICAnbXVsdGlwbGVPZicsXG4gICAgICAncGF0dGVybicsXG4gICAgICAncGF0dGVyblByb3BlcnRpZXMnLFxuICAgICAgJ2VudW0nLFxuICAgICAgJ3JlcXVpcmVkJyxcbiAgICAgICdtaW5Qcm9wZXJ0aWVzJyxcbiAgICAgICdtYXhQcm9wZXJ0aWVzJ1xuICAgIF1cbiAgfVxuXG4gIGFsbE9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbE9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFsbE9mRXJyb3JzXVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBhbnlPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuYW55T2YoKSkge1xuICAgICAgY29uc3QgdmFsaWQgPSBzY2hlbWEuYW55T2YoKS5zb21lKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgICAgcmV0dXJuIGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMFxuICAgICAgfSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBtdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgY29uc3QgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmNvbnN0KCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdmFsdWU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGVudW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmVudW0oKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSAtIDEpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpICsgMSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBmb3JtYXQgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdCgpKSB7XG4gICAgICBsZXQgaW52YWxpZCA9IGZhbHNlXG5cbiAgICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgICAgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuaWYoKSkge1xuICAgICAgaWYgKCFzY2hlbWEudGhlbigpIHx8ICFzY2hlbWEuZWxzZSgpKSB7XG4gICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgIH1cblxuICAgICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0dmFsOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG5cbiAgICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydHZhbDogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0dmFsOiB2YWx1ZSB9KVxuICAgICAgICBlcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhpbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWF4aW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heEl0ZW1zICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS5tYXhJdGVtcygpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhMZW5ndGggKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5tYXhMZW5ndGgoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pbmltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5taW5pbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5JdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWluSXRlbXMoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pbkxlbmd0aCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1pbkxlbmd0aCgpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtdWx0aXBsZU9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubXVsdGlwbGVPZigpKSB7XG4gICAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbm90ICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5ub3QoKSkge1xuICAgICAgY29uc3Qgbm90RXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEubm90KCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBvbmVPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEub25lT2YoKSkge1xuICAgICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBvbmVPZkVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcGF0dGVybiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm4oKSkge1xuICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkge1xuICAgICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuICAgICAgICAgICAgc2NoZW1hLnRpdGxlID0gcHJvcGVydHlOYW1lXG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICAgIHN0YXJ0dmFsOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHJlcXVpcmVkICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEucmVxdWlyZWQoKSkge1xuICAgICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHR5cGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLnR5cGVzKCkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuXG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICB1bmlxdWVJdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEudW5pcXVlSXRlbXMoKSkge1xuICAgICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdmFsaWRhdG9yIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRWYWxpZGF0b3IgKHZhbGlkYXRvcikge1xuICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKHZhbGlkYXRvcilcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB0aGlzW3ZhbGlkYXRvcl0odmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pdGVyYXRpb25zID0gNVxuICAgIHRoaXMuZGVmcyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgdGhpcy5kZWZzID0gc2NoZW1hWyckZGVmcyddXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZGVmcylcbiAgICAgIHRoaXMudHJhdmVyc2Uoc2NoZW1hKVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjLyRkZWZzJykpIHtcbiAgICAgIGNvbnN0IHJlZlBhcnRzID0gcmVmLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGRlZk5hbWUgPSByZWZQYXJ0cy5wb3AoKVxuXG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZzW2RlZk5hbWVdKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZzW2RlZk5hbWVdXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgdHJhdmVyc2UgKHZhbHVlLCB0aGluZywgaW5kZXgpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVbJyRyZWYnXSkgJiYgaXNTZXQodGhpbmcpKSB7XG4gICAgICAgIHRoaW5nW2luZGV4XSA9IHRoaXMuZGVmaW5lKHZhbHVlWyckcmVmJ10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGluZGV4KSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnRyYXZlcnNlKHZhbHVlW2luZGV4XSwgdmFsdWUsIGluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGl0ZW0sIHZhbHVlLCBpbmRleClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vdGhlbWVzL2JhcmVib25lcydcbmltcG9ydCBUaGVtZVdpcmVmcmFtZSBmcm9tICcuL3RoZW1lcy93aXJlZnJhbWUnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdG9yJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5cbmNsYXNzIEplZGkge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICd3aXJlZnJhbWUnXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lcikgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IFJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcigpXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKG9wdGlvbnMuc2NoZW1hKVxuICAgIHRoaXMuZXJyb3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd3aXJlZnJhbWUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lV2lyZWZyYW1lKClcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLnNjaGVtYS5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0dmFsKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0dmFsKVxuICAgIH1cblxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QuY29udGFpbmVyKVxuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB0aGlzLnJvb3Qub25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH1cbiAgICB0aGlzLmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGVkaXRvciBpbnN0YW5jZSBiYXNlZCBvbiB0aGUgcGFzc2VkIHNjaGVtYSBhbmQgY29uZmlnXG4gICAqL1xuICBjcmVhdGVFZGl0b3IgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVyLnJlc29sdmUoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG5cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LmRpc2FibGUoKVxuICB9XG5cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QuZW5hYmxlKClcbiAgfVxuXG4gIHZhbGlkYXRlICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmVkaXRvcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3JzW2tleV1cbiAgICAgIHRoaXMuZXJyb3JzID0gWy4uLnRoaXMuZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0dmFsID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHNldFRoZW1lICh0aGVtZSkge1xuICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzLmZpbmQobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=