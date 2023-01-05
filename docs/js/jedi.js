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
      button.textContent = config.textContent;
      return button;
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
    key: "getRadioLabel",
    value: function getRadioLabel(config) {
      var label = document.createElement('label');
      label.classList.add('form-check-label');
      label.setAttribute('for', config["for"]);
      label.textContent = config.textContent;
      return label;
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
      button.classList.add('btn-primary');
      button.setAttribute('type', 'button');
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

  return createClass_default()(ThemeBootstrap5);
}(bootstrap4);

/* harmony default export */ var bootstrap5 = (bootstrap5_ThemeBootstrap5);
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

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
          schema = _objectSpread(_objectSpread({}, cloneSchema), schema);

          _this.switcherOptionValues.push(index);

          var switcherOptionsLabel = schema.title || 'Option-' + (index + 1);

          _this.switcherOptionsLabels.push(switcherOptionsLabel);

          schemas.push(schema);
        });
      } else if (this.schema.types()) {
        this.schema.type().forEach(function (type) {
          var schemaClone = _this.schema.clone();

          var schema = _objectSpread(_objectSpread({}, schemaClone), {
            type: type,
            title: type[0].toUpperCase() + type.slice(1)
          });

          schemas.push(schema);
        });
        schemas.forEach(function (schema, index) {
          var _this$switcherOptions;

          _this.switcherOptionValues.push(index);

          (_this$switcherOptions = _this.switcherOptionsLabels).push.apply(_this$switcherOptions, toConsumableArray_default()(schemas.map(function (schema) {
            return schema.title;
          })));
        });
      } else if (this.schema.typeIs('any') || !this.schema.type()) {
        var schemaClone = this.schema.clone();
        schemas = [_objectSpread(_objectSpread({}, schemaClone), {
          type: 'string',
          title: 'String'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'number',
          title: 'Number'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'integer',
          title: 'Integer'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'boolean',
          title: 'Boolean'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'array',
          title: 'Array'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'object',
          title: 'Object'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'null',
          title: 'Null'
        })];
        schemas.forEach(function (schema, index) {
          var _this$switcherOptions2;

          _this.switcherOptionValues.push(index);

          (_this$switcherOptions2 = _this.switcherOptionsLabels).push.apply(_this$switcherOptions2, toConsumableArray_default()(schemas.map(function (schema) {
            return schema.title;
          })));
        });
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

      this.container.appendChild(this.messagesSlot); // switcher radios

      this.switcherRadios = [];
      this.switcher = this.jedi.theme.getFieldset();
      this.switcher.appendChild(this.jedi.theme.getLegend({
        textContent: 'Options'
      }));
      this.switcherOptionValues.forEach(function (value, index) {
        var uuid = utils_uuidv4(); // radio container

        var radioContainer = _this2.jedi.theme.getRadioContainer(); // radio


        var radio = _this2.jedi.theme.getRadio({
          value: value,
          id: _this2.path + '.switcher' + '.' + index + '.' + uuid
        });

        radioContainer.appendChild(radio);
        radio.addEventListener('change', function () {
          var index = Number(radio.value);

          _this2.switchEditor(index);
        });

        _this2.switcherRadios.push(radio);

        _this2.switcher.appendChild(radioContainer); // label


        var label = _this2.jedi.theme.getRadioLabel({
          "for": _this2.path + '.switcher' + '.' + index + '.' + uuid,
          textContent: _this2.switcherOptionsLabels[index]
        });

        radioContainer.appendChild(label);
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
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
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
        this.switcher.disabled = true;
      } else {
        this.activeEditor.enable();
        this.switcher.disabled = false;
      }

      this.switcherRadios.forEach(function (radio) {
        radio.checked = Number(radio.value) === Number(_this3.index);
      });
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
    this.resolvers = [function (schema) {
      if (schema.anyOf() || schema.oneOf() || schema.typeIs('any') || schema.types() || !schema.type()) {
        if (!schema.type() && schema["default"]()) {
          var originalSchema = schema.clone();
          originalSchema.type = getType(schema["default"]());
          var newSchema = new src_schema(originalSchema);
          return _this.resolve(newSchema);
        } else {
          return multiple;
        }
      }
    }, function (schema) {
      if (schema.typeIs('boolean') && schema.formatIs('radio')) {
        return boolean_enum_radio;
      }
    }, function (schema) {
      if (schema.typeIs('boolean') && schema.formatIs('select')) {
        return boolean_enum_select;
      }
    }, function (schema) {
      if (schema.typeIs('boolean')) {
        return editors_boolean;
      }
    }, function (schema) {
      if (schema.typeIs('object')) {
        return editors_object;
      }
    }, function (schema) {
      if (schema.typeIs('array')) {
        return editors_array;
      }
    }, function (schema) {
      if (schema.typeIs('string') && schema["enum"]() && schema.formatIs('radio')) {
        return string_enum_radio;
      }
    }, function (schema) {
      if (schema.typeIs('string') && schema["enum"]()) {
        return string_enum_select;
      }
    }, function (schema) {
      if (schema.typeIs('string')) {
        return editors_string;
      }
    }, function (schema) {
      if (schema.typeIsNumeric() && schema["enum"]() && schema.formatIs('radio')) {
        return number_enum_radio;
      }
    }, function (schema) {
      if (schema.typeIsNumeric() && schema["enum"]()) {
        return number_enum_select;
      }
    }, function (schema) {
      if (schema.typeIsNumeric()) {
        return editors_number;
      }
    }, function (schema) {
      if (schema.typeIs('null')) {
        return editors_null;
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
    value: function resolve(schema) {
      var _iterator = resolver_createForOfIteratorHelper(this.resolvers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var resolver = _step.value;
          var editorClass = resolver(schema);

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

    this.validators = ['dependentRequired', 'format', 'if', 'const', 'not', 'type', 'uniqueItems', 'exclusiveMaximum', 'exclusiveMinimum', 'minItems', 'maxItems', 'minLength', 'maxLength', 'minimum', 'maximum', 'multipleOf', 'pattern', 'enum', 'required', 'minProperties', 'maxProperties', 'allOf', 'anyOf', 'oneOf'];
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
    this.schema = new src_schema(options.schema);
    this.editors = {};
    this.root = null;
    this.theme = null;
    this.listeners = [];
    this.resolver = new src_resolver();
    this.validator = new src_validator();
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
      var EditorClass = this.resolver.resolve(config.schema);
      return new EditorClass(config);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy93aXJlZnJhbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUaGVtZUJhcmVib25lcyIsImNvbmZpZyIsImVycm9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJtZXNzYWdlIiwiYWN0aW9uc1Nsb3QiLCJjaGlsZEVkaXRvcnNTbG90IiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiY29udGFpbmVyIiwibWVzc2FnZXNTbG90IiwibGFiZWwiLCJsZWdlbmQiLCJpbnB1dCIsInR5cGUiLCJpZCIsImNoZWNrYm94IiwicmFkaW8iLCJ2YWx1ZSIsInRleHRhcmVhIiwic2VsZWN0Iiwib3B0aW9uVmFsdWVzIiwiZm9yRWFjaCIsImluZGV4Iiwib3B0aW9uIiwib3B0aW9uc0xhYmVscyIsImFwcGVuZENoaWxkIiwiVGhlbWVXaXJlZnJhbWUiLCJidG5Hcm91cCIsImZpZWxkc2V0IiwiY2hlY2tib3hDb250YWluZXIiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXF1YWwiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsImlzU2V0IiwiaXNOb3RTZXQiLCJpc051bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiaXNPYmplY3QiLCJnZXRUeXBlIiwidXVpZHY0IiwidjQiLCJFZGl0b3IiLCJqZWRpIiwic2NoZW1hIiwiZGlzYWJsZWQiLCJ1bmRlZmluZWQiLCJwYXRoIiwicGFyZW50IiwidGhlbWUiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldENoaWxkRWRpdG9yc1Nsb3QiLCJjaGlsZEVkaXRvcnMiLCJpbml0IiwicmVnaXN0ZXIiLCJzZXREZWZhdWx0VmFsdWUiLCJzZXRDb250YWluZXIiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwicHJlcGFyZSIsImJ1aWxkIiwicmVmcmVzaFVJIiwicmVhZHkiLCJvcHRpb25zIiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwic3BsaXQiLCJwb3AiLCJnZXRDb250YWluZXIiLCJyZWdpc3RlckVkaXRvciIsInVucmVnaXN0ZXJFZGl0b3IiLCJpbmNsdWRlcyIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJzYW5pdGl6ZSIsIm9uQ2hhbmdlIiwib25TZXRWYWx1ZSIsInZhbGlkYXRvciIsInZhbGlkYXRlIiwiZ2V0VmFsdWUiLCJnZXRLZXkiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJnZXRJbnB1dEVycm9yIiwib25DaGlsZEVkaXRvckNoYW5nZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInVucmVnaXN0ZXIiLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTY2hlbWEiLCJhbGxPZiIsImFueU9mIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJwYXR0ZXJuIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIkFycmF5RWRpdG9yIiwiZ2V0QnRuR3JvdXAiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsIndpbmRvdyIsImNvbmZpcm0iLCJzZXRWYWx1ZSIsImdldEZpZWxkc2V0IiwiZ2V0TGVnZW5kIiwiZ2V0RGVzY3JpcHRpb24iLCJpdGVtRWRpdG9yIiwiY3JlYXRlRWRpdG9yIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1FZGl0b3IiLCJwdXNoIiwiZGVzdHJveSIsImN1cnJlbnRWYWx1ZSIsImZpbHRlciIsImNoaWxkRWRpdG9yIiwiZWRpdG9yIiwiaXRlbVZhbHVlIiwiYnV0dG9ucyIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRCdXR0b25zIiwiY29uY2F0IiwiZGlzYWJsZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkJvb2xlYW5FZGl0b3IiLCJnZXRDaGVja2JveENvbnRhaW5lciIsImdldENoZWNrYm94TGFiZWwiLCJnZXRDaGVja2JveCIsImNoZWNrZWQiLCJCb29sZWFuIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRMYWJlbCIsImdldFNlbGVjdCIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJyYWRpb0NvbnRhaW5lciIsImdldFJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW8iLCJyYWRpb1ZhbHVlIiwicXVlcnlTZWxlY3RvciIsInJhZGlvSW5wdXRzIiwiT2JqZWN0RWRpdG9yIiwic2hvd1JlcXVpcmVkT25seSIsImlzTm90UmVxdWlyZWQiLCJwcm9wZXJ0eSIsImFkZENoaWxkRWRpdG9yIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImVkaXRhYmxlUHJvcGVydGllcyIsImdldElucHV0IiwibWlzc2luZ1Byb3BlcnRpZXMiLCJrZXlzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwibm90UmVxdWlyZWQiLCJpc1JlcXVpcmVkIiwibm90RGVwZW5kZW50UmVxdWlyZWQiLCJyZW1vdmVCdG4iLCJpIiwiZmluZCIsImRlbGV0ZUNoaWxkRWRpdG9yIiwiZ2V0Q2hpbGRFZGl0b3IiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIlN0cmluZ0VkaXRvciIsImZvcm1hdElzIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhIiwiU3RyaW5nIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIk11bHRpcGxlRWRpdG9yIiwiZWRpdG9ycyIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiYWN0aXZlRWRpdG9yIiwibGFzdEluZGV4Iiwic2NoZW1hcyIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJ0eXBlcyIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm1hcCIsInN3aXRjaGVyUmFkaW9zIiwic3dpdGNoZXIiLCJ1dWlkIiwic3dpdGNoRWRpdG9yIiwiZ2V0UmFkaW9MYWJlbCIsIm5ld0luZGV4Iiwib2xkRWRpdG9yIiwibWF0Y2hFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiTnVsbEVkaXRvciIsIlJlc29sdmVyIiwicmVzb2x2ZXJzIiwib3JpZ2luYWxTY2hlbWEiLCJuZXdTY2hlbWEiLCJyZXNvbHZlIiwidHlwZUlzTnVtZXJpYyIsInJlc29sdmVyIiwidW5zaGlmdCIsImVkaXRvckNsYXNzIiwiVmFsaWRhdG9yIiwidmFsaWRhdG9ycyIsImFsbE9mRXJyb3JzIiwidmFsaWQiLCJzb21lIiwiYW55T2ZFcnJvcnMiLCJmaWVsZCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImpvaW4iLCJlIiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwicmVnZXhwIiwiUmVnRXhwIiwidGVzdCIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0dmFsIiwiaWZFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByb3BlcnRpZXNDb3VudCIsImlzTXVsdGlwbGVPZiIsIm5vdEVycm9ycyIsImNvdW50ZXIiLCJvbmVPZkVycm9ycyIsInN0cmluZyIsIm51bWJlciIsImludGVnZXIiLCJhcnJheSIsIm9iamVjdCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJzY2hlbWFFcnJvcnMiLCJ2YWxpZGF0b3JFcnJvcnMiLCJhc3NpZ24iLCJyb290IiwibGlzdGVuZXJzIiwiaGlkZGVuSW5wdXQiLCJlbWl0IiwiRWRpdG9yQ2xhc3MiLCJhcmd1bWVudHMiLCJyZXNldCIsIm5hbWUiLCJjYWxsYmFjayIsImxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSwrRzs7Ozs7O0FD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QUF4QjtNQUNBLEtBQUtyRixTQUFMLENBQWV3RixTQUFmLEdBQTJCLEVBQTNCO01BQ0EsS0FBS3dNLElBQUwsQ0FBVW5JLE9BQVY7TUFDQSxLQUFLakcsSUFBTDtJQUNEOzs7V0FFRCxrQkFBVUwsS0FBVixFQUFpQjtNQUNmLEtBQUtjLE9BQUwsQ0FBYWQsS0FBYixHQUFxQkEsS0FBckI7TUFDQSxLQUFLK08sS0FBTDtJQUNEOzs7V0FFRCxZQUFJQyxJQUFKLEVBQVVDLFFBQVYsRUFBb0I7TUFDbEIsS0FBS1AsU0FBTCxDQUFlckksSUFBZixDQUFvQjtRQUFFMkksSUFBSSxFQUFKQSxJQUFGO1FBQVFDLFFBQVEsRUFBUkE7TUFBUixDQUFwQjtJQUNEOzs7V0FFRCxjQUFNRCxJQUFOLEVBQVk7TUFDVixJQUFNRSxRQUFRLEdBQUcsS0FBS1IsU0FBTCxDQUFldEYsSUFBZixDQUFvQixVQUFBOEYsUUFBUTtRQUFBLE9BQUlBLFFBQVEsQ0FBQ0YsSUFBVCxLQUFrQkEsSUFBdEI7TUFBQSxDQUE1QixDQUFqQjs7TUFFQSxJQUFJRSxRQUFKLEVBQWM7UUFDWkEsUUFBUSxDQUFDRCxRQUFUO01BQ0Q7SUFDRjs7O1dBRUQsbUJBQVc7TUFBQTs7TUFDVCxLQUFLUixJQUFMLENBQVVuSSxPQUFWO01BRUEsS0FBSzdKLFNBQUwsQ0FBZXdGLFNBQWYsR0FBMkIsRUFBM0I7TUFFQU8sTUFBTSxDQUFDcUcsSUFBUCxDQUFZLElBQVosRUFBa0J2TCxPQUFsQixDQUEwQixVQUFDaUYsR0FBRCxFQUFTO1FBQ2pDLE9BQU8sTUFBSSxDQUFDQSxHQUFELENBQVg7TUFDRCxDQUZEO0lBR0Q7Ozs7OztBQUdZOEssaUZBQWYsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuIiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcblxuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGFjdGlvbnNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhY3Rpb25zU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGFjdGlvbnNTbG90XG4gIH1cblxuICBnZXRDaGlsZEVkaXRvcnNTbG90ICgpIHtcbiAgICBjb25zdCBjaGlsZEVkaXRvcnNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGlsZEVkaXRvcnNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gY2hpbGRFZGl0b3JzU2xvdFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgbWVzc2FnZXNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gbWVzc2FnZXNTbG90XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0SW5wdXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbmxpbmUnKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVdpcmVmcmFtZVxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1wcmltYXJ5JylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4vYm9vdHN0cmFwNCdcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCb290c3RyYXA0IHt9XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJ1xuXG5leHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgIT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOb3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnaW50ZWdlcidcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ3N0cmluZydcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgdHlwZSA9ICdib29sZWFuJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSdcbiAgfSBlbHNlIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudWxsJ1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnb2JqZWN0J1xuICB9XG5cbiAgcmV0dXJuIHR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IHV1aWR2NCA9ICgpID0+IHtcbiAgcmV0dXJuIHY0KClcbn1cbiIsImNsYXNzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgJ3Jvb3QnXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMuamVkaS50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLmplZGkudGhlbWUuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdCA9IHRoaXMuamVkaS50aGVtZS5nZXRDaGlsZEVkaXRvcnNTbG90KClcbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGJ1aWxkIHBpcGVsaW5lIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICBpZiAodGhpcy5qZWRpLnJlYWR5IHx8IHRoaXMuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cbiAgfVxuXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldENvbnRhaW5lcigpXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMucGF0aClcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge31cblxuICAvKipcbiAgICogYnVpbGQgdGhlIGVkaXRvcidzIHVzZXIgaW50ZXJmYWNlXG4gICAqL1xuICBidWlsZCAoKSB7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGlzIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgamVkaS5lZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3RlckVkaXRvcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgamVkaS5lZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBzY2hlbWEuZGVmYXVsdCBpcyBub3QgZGVmaW5lZCwgc2V0cyBhbiBpbml0aWFsIHZhbHVlIGJhc2VkIG9uIGl0J3MgdHlwZS5cbiAgICovXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgdmFsdWVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVkaXRvciB2YWx1ZSBhbmQgY2FsbHMgcmVmcmVzaFVJIHJpZ2h0IGFmdGVyLiBUaGUgb25DaGFuZ2UgbWV0aG9kXG4gICAqIHdpbGwgYmUgY2FsbGVkIHVubGVzcyB0cmlnZ2Vyc0NoYW5nZSBpcyBleHBsaWNpdGx5IHNldCB0byBmYWxzZS4gVGhpcyBpc1xuICAgKiB1c2VmdWwgZm9yIGluaXRpYWwgb3IgZGVmYXVsdCB2YWx1ZXMuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgfVxuXG4gICAgdGhpcy5vblNldFZhbHVlKClcblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBVSSBvZiB0aGUgZWRpdG9yIHRvIHJlZmxlY3QgaXQncyB2YWx1ZS4gVGhpcyBpcyBuZWNlc3Nhcnkgd2hlblxuICAgKiB1c2luZyBzZXRWYWx1ZSB0byBzZXQgdGhlIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIHZhbGlkYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlKClcblxuICAgIHRoaXMubWVzc2FnZXNTbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZXNTbG90LmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dEVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge31cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGVkaXRvciBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2UgKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQub25DaGlsZEVkaXRvckNoYW5nZSgpXG4gICAgfVxuXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgYSBjaGlsZCBlZGl0b3IgY2hhbmdlcy4gVGhpcyBpcyByZWxldmFudCBmb3IgQXJyYXlcbiAgICogYW5kIE9iamVjdCBlZGl0b3JzLlxuICAgKi9cbiAgb25DaGlsZEVkaXRvckNoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvciwgYW5kIGV2ZXJ5IHJlZmVyZW5jZSB0aGF0IGl0IGlzIGF0dGFjaGVkIHRvIGl0LlxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIGtleSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiBmYWxzZVxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29uc3QgPyB0aGlzLnNjaGVtYS5jb25zdCA6IGZhbHNlXG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHQgPyB0aGlzLnNjaGVtYS5kZWZhdWx0IDogZmFsc2VcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiBmYWxzZVxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IGZhbHNlXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogZmFsc2VcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy5mb3JtYXQoKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpID8gdGhpcy5zY2hlbWEuaWYgOiBmYWxzZVxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IGZhbHNlXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpID8gdGhpcy5zY2hlbWEubm90IDogZmFsc2VcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0eSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogZmFsc2VcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiBmYWxzZVxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IGZhbHNlXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMudHlwZSgpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVzICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiBmYWxzZVxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgc2VyaWFsaXplICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgY2xvbmUsIGlzQXJyYXkgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUFsbEJ0bilcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZW1FZGl0b3IgKHZhbHVlKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEuaXRlbXMoKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7IHR5cGU6IGdldFR5cGUodmFsdWUpIH1cblxuICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWRpdG9yLmFjdGlvbnNTbG90KVxuICAgIGl0ZW1FZGl0b3IuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5nZXRLZXkoKSlcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICB9KVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgfSlcbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgfSlcbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUnKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgb25DaGlsZEVkaXRvckNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoaXRlbVZhbHVlKVxuICAgICAgaXRlbUVkaXRvci5zZXRWYWx1ZShpdGVtVmFsdWUsIGZhbHNlKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChpdGVtRWRpdG9yKVxuXG4gICAgICBsZXQgYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpXG5cbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkQnV0dG9ucyA9IEFycmF5LmZyb20oY2hpbGRFZGl0b3IuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuICAgICAgICBidXR0b25zID0gYnV0dG9ucy5jb25jYXQoY2hpbGRCdXR0b25zKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgaXRlbUVkaXRvci5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtRWRpdG9yLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIGNoaWxkRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBjaGVja2JveCBjb250YWluZXJcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZmllbGRzZXRcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG5cbiAgICAvLyBsZWdlbmRcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICB9KSlcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKVxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gZmllbGRzZXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxuXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBlcXVhbCwgaXNTZXQsIGdldFR5cGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIC8vIGNoaWxkIGVkaXRvcnNcbiAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5zY2hlbWEucHJvcGVydGllcygpLCBrZXkpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3dSZXF1aXJlZE9ubHkgPSB0aGlzLmplZGkub3B0aW9ucy5zaG93UmVxdWlyZWRPbmx5IHx8IHRoaXMuc2NoZW1hLm9wdGlvbignc2hvd1JlcXVpcmVkT25seScpXG4gICAgICAgIGNvbnN0IGlzTm90UmVxdWlyZWQgPSAhdGhpcy5zY2hlbWEucmVxdWlyZWQoKSB8fCAhdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhrZXkpXG5cbiAgICAgICAgaWYgKHNob3dSZXF1aXJlZE9ubHkgJiYgaXNOb3RSZXF1aXJlZCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0eShrZXkpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRFZGl0b3Ioc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGRlcGVuZGVudCByZXF1aXJlZCBwcm9wZXJ0aWVzXG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSwga2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKGtleSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0eShrZXkpXG4gICAgICAgICAgdGhpcy5hZGRDaGlsZEVkaXRvcihzY2hlbWEsIGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIC8vIGFkZEJ0blxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSkge1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnR5IE5hbWUnLFxuICAgICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5wYXRoXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMucGF0aFxuICAgICAgfSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG5cbiAgICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICAgIH0pXG5cbiAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gaW5wdXQudmFsdWVcblxuICAgICAgICAvLyBpZiBub3QgcHJvcGVydHkgbmFtZSB3YXMgZ2l2ZW4gcmV0dXJuXG4gICAgICAgIGlmIChrZXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBwcm9wZXJ0eSBleGlzdCByZXR1cm5cbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRFZGl0b3IoeyB0eXBlOiAnYW55JyB9LCBrZXkpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSlcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgfSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoZGVwZW5kZW50UmVxdWlyZWQpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBhZGRDaGlsZEVkaXRvciAoc2NoZW1hLCBrZXkpIHtcbiAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIC8vIHJlbW92ZUJ0blxuICAgIGNvbnN0IG5vdFJlcXVpcmVkID0gIXRoaXMuaXNSZXF1aXJlZChrZXkpXG4gICAgY29uc3Qgbm90RGVwZW5kZW50UmVxdWlyZWQgPSAhdGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKGtleSlcbiAgICBjb25zdCBlZGl0YWJsZVByb3BlcnRpZXMgPSB0aGlzLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKG5vdFJlcXVpcmVkICYmIG5vdERlcGVuZGVudFJlcXVpcmVkICYmIGVkaXRhYmxlUHJvcGVydGllcykge1xuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnUmVtb3ZlIHByb3BlcnR5J1xuICAgICAgfSlcbiAgICAgIGVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKVxuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy52YWx1ZVtrZXldXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gZWRpdG9yLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkRWRpdG9yIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuY2hpbGRFZGl0b3JzW2ldXG4gICAgICBpZiAoZWRpdG9yLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkRWRpdG9ycy5zcGxpY2UoaSwgMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgdmFsdWVbY2hpbGRFZGl0b3IuZ2V0S2V5KCldID0gY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZ2V0Q2hpbGRFZGl0b3IgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWRpdG9ycy5maW5kKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gY2hpbGRFZGl0b3IuZ2V0S2V5KCkuc3BsaXQoJy4nKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuY2hpbGRFZGl0b3JzW2ldXG4gICAgICBjb25zdCBrZXkgPSBlZGl0b3IuZ2V0S2V5KClcbiAgICAgIGlmICghaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgdGhpcy5kZWxldGVDaGlsZEVkaXRvcihrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkRWRpdG9yID0gdGhpcy5nZXRDaGlsZEVkaXRvcihrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGVkaXRvclxuICAgICAgaWYgKGNoaWxkRWRpdG9yKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkRWRpdG9yLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKCFlcXVhbChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3Iuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGVkaXRvciBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZENoaWxkRWRpdG9yKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZEVkaXRvciA9IHRoaXMuZ2V0Q2hpbGRFZGl0b3Ioa2V5KVxuXG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoY2hpbGRFZGl0b3IuY29udGFpbmVyKVxuXG4gICAgICBpZiAoY2hpbGRFZGl0b3IpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZEVkaXRvci5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZEVkaXRvci5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIGlmICghdGhpcy5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICAgIH0pKVxuXG4gICAgICAvLyBkZXNjcmlwdGlvblxuICAgICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgY2hpbGRFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9XG5cbiAgICAvLyBpbnB1dFxuICAgIC8vIHRvZG8gZmlsZSwgcmFuZ2Ugc2hvdWxkIGJlIGhhbmRsZWQgZGlmZmVyZW50bHlcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFRleHRhcmVhKHtcbiAgICAgICAgaWQ6IHRoaXMucGF0aFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMub3B0aW9uVmFsdWVzWzBdXG4gICAgLy9cbiAgICAvLyBpZiAoZmlyc3RPcHRpb24pIHtcbiAgICAvLyAgIHRoaXMuc2V0VmFsdWUoZmlyc3RPcHRpb24sIGZhbHNlKVxuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBmaWVsZHNldFxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5qZWRpLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcblxuICAgIC8vIGxlZ2VuZFxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIH0pKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5vcHRpb25WYWx1ZXNbMF1cbiAgICAvL1xuICAgIC8vIGlmIChmaXJzdE9wdGlvbikge1xuICAgIC8vICAgdGhpcy5zZXRWYWx1ZShmaXJzdE9wdGlvbiwgZmFsc2UpXG4gICAgLy8gfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ZpZWxkc2V0JylcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0LCBlcXVhbCwgdXVpZHY0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5lZGl0b3JzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG4gICAgdGhpcy5hY3RpdmVFZGl0b3IgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcblxuICAgIGxldCBzY2hlbWFzID0gW11cblxuICAgIGlmICh0aGlzLnNjaGVtYS5hbnlPZigpIHx8IHRoaXMuc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IHRoaXMuc2NoZW1hLmFueU9mKCkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS50aXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuICAgICAgICBzY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVzKCkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuICAgICAgICBzY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcblxuICAgICAgc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCguLi5zY2hlbWFzLm1hcCgoc2NoZW1hKSA9PiBzY2hlbWEudGl0bGUpKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycsIHRpdGxlOiAnU3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicsIHRpdGxlOiAnTnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInLCB0aXRsZTogJ0ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicsIHRpdGxlOiAnQm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScsIHRpdGxlOiAnQXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JywgdGl0bGU6ICdPYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcsIHRpdGxlOiAnTnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goLi4uc2NoZW1hcy5tYXAoKHNjaGVtYSkgPT4gc2NoZW1hLnRpdGxlKSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gRWRpdG9yc1xuICAgIHNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBlZGl0b3IudW5yZWdpc3RlcigpXG5cbiAgICAgIGVkaXRvci5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gc3dpdGNoZXIgcmFkaW9zXG4gICAgdGhpcy5zd2l0Y2hlclJhZGlvcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdPcHRpb25zJ1xuICAgIH0pKVxuXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuXG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5wYXRoICsgJy5zd2l0Y2hlcicgKyAnLicgKyBpbmRleCArICcuJyArIHV1aWRcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyUmFkaW9zLnB1c2gocmFkaW8pXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9MYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5wYXRoICsgJy5zd2l0Y2hlcicgKyAnLicgKyBpbmRleCArICcuJyArIHV1aWQsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcblxuICAgIGlmIChpc1NldCh0aGlzLmVkaXRvcnNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEVkaXRvcigwLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hFZGl0b3IgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IHRoaXMuZWRpdG9yc1t0aGlzLmluZGV4XVxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ211bHRpcGxlJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRFZGl0b3IgPSB0aGlzLmVkaXRvcnNbdGhpcy5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkRWRpdG9yLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRFZGl0b3IuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aXZlRWRpdG9yLmNvbnRhaW5lcilcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZUVkaXRvci5kaXNhYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXIuZGlzYWJsZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlRWRpdG9yLmVuYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyLmRpc2FibGVkID0gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLnN3aXRjaGVyUmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluZGV4KSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUVkaXRvci5nZXRWYWx1ZSgpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpXG4gIH1cblxuICBtYXRjaEVkaXRvciAodmFsdWUsIGVkaXRvcnMpIHtcbiAgICBsZXQgaW5kZXggPSAwXG5cbiAgICBmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG4gICAgICBpZiAoZWRpdG9yLmVkaXRvcnMpIHtcbiAgICAgICAgZWRpdG9yLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoZXF1YWwoZWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUgKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgZWRpdG9yIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gZWRpdG9yIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmICghZXF1YWwodGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgIHRoaXMubWF0Y2hFZGl0b3IodmFsdWUsIHRoaXMuZWRpdG9ycylcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuZWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMub3B0aW9uVmFsdWVzWzBdXG4gICAgLy9cbiAgICAvLyBpZiAoZmlyc3RPcHRpb24pIHtcbiAgICAvLyAgIHRoaXMuc2V0VmFsdWUoZmlyc3RPcHRpb24sIGZhbHNlKVxuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBmaWVsZHNldFxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5qZWRpLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcblxuICAgIC8vIGxlZ2VuZFxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICB9KSlcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMub3B0aW9uVmFsdWVzWzBdXG4gICAgLy9cbiAgICAvLyBpZiAoZmlyc3RPcHRpb24pIHtcbiAgICAvLyAgIHRoaXMuc2V0VmFsdWUoZmlyc3RPcHRpb24sIGZhbHNlKVxuICAgIC8vIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdmaWVsZHNldCcpXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXG5cbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5nZXRWYWx1ZSgpKSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCB7IGlzU2V0LCBnZXRUeXBlIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9vYmplY3QnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bGwnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuXG5jbGFzcyBSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLmFueU9mKCkgfHwgc2NoZW1hLm9uZU9mKCkgfHwgc2NoZW1hLnR5cGVJcygnYW55JykgfHwgc2NoZW1hLnR5cGVzKCkgfHwgIXNjaGVtYS50eXBlKCkpIHtcbiAgICAgICAgICBpZiAoIXNjaGVtYS50eXBlKCkgJiYgc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBzY2hlbWEuY2xvbmUoKVxuICAgICAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKG5ld1NjaGVtYSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE11bHRpcGxlRWRpdG9yXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgICAgIHJldHVybiBBcnJheUVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgc2NoZW1hLmVudW0oKSAmJiBzY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBzY2hlbWEuZW51bSgpKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBzY2hlbWEuZW51bSgpICYmIHNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgc2NoZW1hLmVudW0oKSkge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICAgICAgcmV0dXJuIE51bGxFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVzb2x2ZXIgZnVuY3Rpb25cbiAgICovXG4gIGFkZFJlc29sdmVyIChyZXNvbHZlcikge1xuICAgIHRoaXMucmVzb2x2ZXJzLnVuc2hpZnQocmVzb2x2ZXIpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKHNjaGVtYSkge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoc2NoZW1hKVxuICAgICAgaWYgKGlzU2V0KGVkaXRvckNsYXNzKSkge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgSmVkaSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gW1xuICAgICAgJ2RlcGVuZGVudFJlcXVpcmVkJyxcbiAgICAgICdmb3JtYXQnLFxuICAgICAgJ2lmJyxcbiAgICAgICdjb25zdCcsXG4gICAgICAnbm90JyxcbiAgICAgICd0eXBlJyxcbiAgICAgICd1bmlxdWVJdGVtcycsXG4gICAgICAnZXhjbHVzaXZlTWF4aW11bScsXG4gICAgICAnZXhjbHVzaXZlTWluaW11bScsXG4gICAgICAnbWluSXRlbXMnLFxuICAgICAgJ21heEl0ZW1zJyxcbiAgICAgICdtaW5MZW5ndGgnLFxuICAgICAgJ21heExlbmd0aCcsXG4gICAgICAnbWluaW11bScsXG4gICAgICAnbWF4aW11bScsXG4gICAgICAnbXVsdGlwbGVPZicsXG4gICAgICAncGF0dGVybicsXG4gICAgICAnZW51bScsXG4gICAgICAncmVxdWlyZWQnLFxuICAgICAgJ21pblByb3BlcnRpZXMnLFxuICAgICAgJ21heFByb3BlcnRpZXMnLFxuICAgICAgJ2FsbE9mJyxcbiAgICAgICdhbnlPZicsXG4gICAgICAnb25lT2YnXG4gICAgXVxuICB9XG5cbiAgYWxsT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5hbGxPZigpKSB7XG4gICAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgYWxsT2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWxsT2ZFcnJvcnNdXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGFueU9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5hbnlPZigpKSB7XG4gICAgICBjb25zdCB2YWxpZCA9IHNjaGVtYS5hbnlPZigpLnNvbWUoKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBhbnlPZkVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgICByZXR1cm4gYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwXG4gICAgICB9KVxuXG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBjb25zdCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuY29uc3QoKSkge1xuICAgICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSAoSlNPTi5zdHJpbmdpZnkodmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSkpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB2YWx1ZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBpcyBtaXNzaW5nIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZW51bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuZW51bSgpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYS5lbnVtKCkuc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmVudW0oKSksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpIC0gMSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gKHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkgKyAxKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGZvcm1hdCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0KCkpIHtcbiAgICAgIGxldCBpbnZhbGlkID0gZmFsc2VcblxuICAgICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgICAgICBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5pZigpKSB7XG4gICAgICBpZiAoIXNjaGVtYS50aGVuKCkgfHwgIXNjaGVtYS5lbHNlKCkpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnR2YWw6IHZhbHVlIH0pXG4gICAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcblxuICAgICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0dmFsOiB2YWx1ZSB9KVxuICAgICAgICBlcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnR2YWw6IHZhbHVlIH0pXG4gICAgICAgIGVycm9ycyA9IGVsc2VFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heGltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5tYXhpbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4SXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1heEl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heExlbmd0aCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1heExlbmd0aCgpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4UHJvcGVydGllcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLm1heFByb3BlcnRpZXMoKSkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluaW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1pbmltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pbkl0ZW1zICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS5taW5JdGVtcygpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluTGVuZ3RoICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWluTGVuZ3RoKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluUHJvcGVydGllcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMoKSkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG11bHRpcGxlT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5tdWx0aXBsZU9mKCkpIHtcbiAgICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZilcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBub3QgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLm5vdCgpKSB7XG4gICAgICBjb25zdCBub3RFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEgJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5ub3QoKSksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG9uZU9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5vbmVPZigpKSB7XG4gICAgICBsZXQgY291bnRlciA9IDBcblxuICAgICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBwYXR0ZXJuICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEucGF0dGVybigpKSB7XG4gICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXF1aXJlZCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnJlcXVpcmVkKCkpIHtcbiAgICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICB0eXBlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS50eXBlcygpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgdW5pcXVlSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRvciBmdW5jdGlvblxuICAgKi9cbiAgYWRkVmFsaWRhdG9yICh2YWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMucHVzaCh2YWxpZGF0b3IpXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdGhpc1t2YWxpZGF0b3JdKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi90aGVtZXMvYmFyZWJvbmVzJ1xuaW1wb3J0IFRoZW1lV2lyZWZyYW1lIGZyb20gJy4vdGhlbWVzL3dpcmVmcmFtZSdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5cbmNsYXNzIEplZGkge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICd3aXJlZnJhbWUnXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lcikgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEob3B0aW9ucy5zY2hlbWEpXG4gICAgdGhpcy5lZGl0b3JzID0ge31cbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLmVycm9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdiYXJlYm9uZXMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnd2lyZWZyYW1lJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGFydHZhbCkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydHZhbClcbiAgICB9XG5cbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgdGhpcy5yb290Lm9uQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9XG4gICAgdGhpcy5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlZGl0b3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIHBhc3NlZCBzY2hlbWEgYW5kIGNvbmZpZ1xuICAgKi9cbiAgY3JlYXRlRWRpdG9yIChjb25maWcpIHtcbiAgICBjb25zdCBFZGl0b3JDbGFzcyA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZShjb25maWcuc2NoZW1hKVxuICAgIHJldHVybiBuZXcgKEVkaXRvckNsYXNzKShjb25maWcpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICBnZXRFZGl0b3IgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JzW3BhdGhdXG4gIH1cblxuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QuZGlzYWJsZSgpXG4gIH1cblxuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC5lbmFibGUoKVxuICB9XG5cbiAgdmFsaWRhdGUgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZWRpdG9ycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcnNba2V5XVxuICAgICAgdGhpcy5lcnJvcnMgPSBbLi4udGhpcy5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpcy5lcnJvcnNcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuc3RhcnR2YWwgPSB0aGlzLmdldFZhbHVlKClcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc2V0VGhlbWUgKHRoZW1lKSB7XG4gICAgdGhpcy5vcHRpb25zLnRoZW1lID0gdGhlbWVcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnMuZmluZChsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==