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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy93aXJlZnJhbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUaGVtZUJhcmVib25lcyIsImNvbmZpZyIsImVycm9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJtZXNzYWdlIiwiYWN0aW9uc1Nsb3QiLCJjaGlsZEVkaXRvcnNTbG90IiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiY29udGFpbmVyIiwibWVzc2FnZXNTbG90IiwibGFiZWwiLCJsZWdlbmQiLCJpbnB1dCIsInR5cGUiLCJpZCIsImNoZWNrYm94IiwicmFkaW8iLCJ2YWx1ZSIsInRleHRhcmVhIiwic2VsZWN0Iiwib3B0aW9uVmFsdWVzIiwiZm9yRWFjaCIsImluZGV4Iiwib3B0aW9uIiwib3B0aW9uc0xhYmVscyIsImFwcGVuZENoaWxkIiwiVGhlbWVXaXJlZnJhbWUiLCJidG5Hcm91cCIsImZpZWxkc2V0IiwiY2hlY2tib3hDb250YWluZXIiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXF1YWwiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsImlzU2V0IiwiaXNOb3RTZXQiLCJpc051bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJmbG9vciIsImlzU3RyaW5nIiwiaXNCb29sZWFuIiwiaXNBcnJheSIsIkFycmF5IiwiaXNPYmplY3QiLCJnZXRUeXBlIiwidXVpZHY0IiwidjQiLCJFZGl0b3IiLCJqZWRpIiwic2NoZW1hIiwiZGlzYWJsZWQiLCJ1bmRlZmluZWQiLCJwYXRoIiwicGFyZW50IiwidGhlbWUiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldENoaWxkRWRpdG9yc1Nsb3QiLCJjaGlsZEVkaXRvcnMiLCJpbml0IiwicmVnaXN0ZXIiLCJzZXREZWZhdWx0VmFsdWUiLCJzZXRDb250YWluZXIiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwicHJlcGFyZSIsImJ1aWxkIiwicmVmcmVzaFVJIiwicmVhZHkiLCJvcHRpb25zIiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwic3BsaXQiLCJwb3AiLCJnZXRDb250YWluZXIiLCJyZWdpc3RlckVkaXRvciIsInVucmVnaXN0ZXJFZGl0b3IiLCJpbmNsdWRlcyIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJzYW5pdGl6ZSIsIm9uQ2hhbmdlIiwib25TZXRWYWx1ZSIsInZhbGlkYXRvciIsInZhbGlkYXRlIiwiZ2V0VmFsdWUiLCJnZXRLZXkiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJnZXRJbnB1dEVycm9yIiwib25DaGlsZEVkaXRvckNoYW5nZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInVucmVnaXN0ZXIiLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTY2hlbWEiLCJhbGxPZiIsImFueU9mIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiaXRlbXMiLCJtYXhpbXVtIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJwYXR0ZXJuIiwicGF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVxdWlyZWQiLCJTZXQiLCJ0aGVuIiwidGl0bGUiLCJ0eXBlSXMiLCJvbmVPZiIsInVuaXF1ZUl0ZW1zIiwiQXJyYXlFZGl0b3IiLCJnZXRCdG5Hcm91cCIsImFkZEJ0biIsImdldEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtIiwiZGVsZXRlQWxsQnRuIiwid2luZG93IiwiY29uZmlybSIsInNldFZhbHVlIiwiZ2V0RmllbGRzZXQiLCJnZXRMZWdlbmQiLCJnZXREZXNjcmlwdGlvbiIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3JlYXRlSXRlbUVkaXRvciIsInB1c2giLCJkZXN0cm95IiwiY3VycmVudFZhbHVlIiwiZmlsdGVyIiwiY2hpbGRFZGl0b3IiLCJlZGl0b3IiLCJpdGVtVmFsdWUiLCJidXR0b25zIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGlsZEJ1dHRvbnMiLCJjb25jYXQiLCJkaXNhYmxlIiwiZW5hYmxlIiwicmVtb3ZlQXR0cmlidXRlIiwiQm9vbGVhbkVkaXRvciIsImdldENoZWNrYm94Q29udGFpbmVyIiwiZ2V0Q2hlY2tib3hMYWJlbCIsImdldENoZWNrYm94IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJCb29sZWFuRW51bVNlbGVjdEVkaXRvciIsImdldExhYmVsIiwiZ2V0U2VsZWN0IiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsInJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW9Db250YWluZXIiLCJnZXRSYWRpbyIsInJhZGlvVmFsdWUiLCJxdWVyeVNlbGVjdG9yIiwicmFkaW9JbnB1dHMiLCJPYmplY3RFZGl0b3IiLCJzaG93UmVxdWlyZWRPbmx5IiwiaXNOb3RSZXF1aXJlZCIsInByb3BlcnR5IiwiYWRkQ2hpbGRFZGl0b3IiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwiZ2V0SW5wdXQiLCJtaXNzaW5nUHJvcGVydGllcyIsImtleXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJub3RSZXF1aXJlZCIsImlzUmVxdWlyZWQiLCJub3REZXBlbmRlbnRSZXF1aXJlZCIsInJlbW92ZUJ0biIsImkiLCJmaW5kIiwiZGVsZXRlQ2hpbGRFZGl0b3IiLCJnZXRDaGlsZEVkaXRvciIsIm9sZFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiU3RyaW5nRWRpdG9yIiwiZm9ybWF0SXMiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWEiLCJTdHJpbmciLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiTXVsdGlwbGVFZGl0b3IiLCJlZGl0b3JzIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJhY3RpdmVFZGl0b3IiLCJsYXN0SW5kZXgiLCJzY2hlbWFzIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInR5cGVzIiwic2NoZW1hQ2xvbmUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibWFwIiwic3dpdGNoZXJSYWRpb3MiLCJzd2l0Y2hlciIsInV1aWQiLCJzd2l0Y2hFZGl0b3IiLCJnZXRSYWRpb0xhYmVsIiwibmV3SW5kZXgiLCJvbGRFZGl0b3IiLCJtYXRjaEVkaXRvciIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJOdWxsRWRpdG9yIiwiUmVzb2x2ZXIiLCJyZXNvbHZlcnMiLCJvcmlnaW5hbFNjaGVtYSIsIm5ld1NjaGVtYSIsInJlc29sdmUiLCJ0eXBlSXNOdW1lcmljIiwicmVzb2x2ZXIiLCJ1bnNoaWZ0IiwiZWRpdG9yQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwiYWxsT2ZFcnJvcnMiLCJ2YWxpZCIsInNvbWUiLCJhbnlPZkVycm9ycyIsImZpZWxkIiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJpbnZhbGlkIiwiam9pbiIsImUiLCJjb21wdXRlZE1heGltdW0iLCJjb21wdXRlZE1pbmltdW0iLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0IiwiaWZFZGl0b3IiLCJKZWRpIiwic3RhcnR2YWwiLCJpZkVycm9ycyIsInRoZW5FZGl0b3IiLCJlbHNlRWRpdG9yIiwicHJvcGVydGllc0NvdW50IiwiaXNNdWx0aXBsZU9mIiwibm90RXJyb3JzIiwiY291bnRlciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwic3RyaW5nIiwibnVtYmVyIiwiaW50ZWdlciIsImFycmF5Iiwib2JqZWN0Iiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsInNjaGVtYUVycm9ycyIsInZhbGlkYXRvckVycm9ycyIsImFzc2lnbiIsInJvb3QiLCJsaXN0ZW5lcnMiLCJoaWRkZW5JbnB1dCIsImVtaXQiLCJFZGl0b3JDbGFzcyIsImFyZ3VtZW50cyIsInJlc2V0IiwibmFtZSIsImNhbGxiYWNrIiwibGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtB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QUFTO01BQ1AsS0FBS2xCLE9BQUwsQ0FBYXlNLFFBQWIsR0FBd0IsS0FBS3pMLFFBQUwsRUFBeEI7TUFDQSxLQUFLckYsU0FBTCxDQUFld0YsU0FBZixHQUEyQixFQUEzQjtNQUNBLEtBQUswTSxJQUFMLENBQVVwSSxPQUFWO01BQ0EsS0FBS2xHLElBQUw7SUFDRDs7O1dBRUQsa0JBQVVMLEtBQVYsRUFBaUI7TUFDZixLQUFLYyxPQUFMLENBQWFkLEtBQWIsR0FBcUJBLEtBQXJCO01BQ0EsS0FBS2lQLEtBQUw7SUFDRDs7O1dBRUQsWUFBSUMsSUFBSixFQUFVQyxRQUFWLEVBQW9CO01BQ2xCLEtBQUtQLFNBQUwsQ0FBZXRJLElBQWYsQ0FBb0I7UUFBRTRJLElBQUksRUFBSkEsSUFBRjtRQUFRQyxRQUFRLEVBQVJBO01BQVIsQ0FBcEI7SUFDRDs7O1dBRUQsY0FBTUQsSUFBTixFQUFZO01BQ1YsSUFBTUUsUUFBUSxHQUFHLEtBQUtSLFNBQUwsQ0FBZXZGLElBQWYsQ0FBb0IsVUFBQStGLFFBQVE7UUFBQSxPQUFJQSxRQUFRLENBQUNGLElBQVQsS0FBa0JBLElBQXRCO01BQUEsQ0FBNUIsQ0FBakI7O01BRUEsSUFBSUUsUUFBSixFQUFjO1FBQ1pBLFFBQVEsQ0FBQ0QsUUFBVDtNQUNEO0lBQ0Y7OztXQUVELG1CQUFXO01BQUE7O01BQ1QsS0FBS1IsSUFBTCxDQUFVcEksT0FBVjtNQUVBLEtBQUs5SixTQUFMLENBQWV3RixTQUFmLEdBQTJCLEVBQTNCO01BRUFPLE1BQU0sQ0FBQ3NHLElBQVAsQ0FBWSxJQUFaLEVBQWtCeEwsT0FBbEIsQ0FBMEIsVUFBQ2lGLEdBQUQsRUFBUztRQUNqQyxPQUFPLE1BQUksQ0FBQ0EsR0FBRCxDQUFYO01BQ0QsQ0FGRDtJQUdEOzs7Ozs7QUFHWStLLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcbiIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImNsYXNzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3Rpb25zU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aW9uc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBhY3Rpb25zU2xvdFxuICB9XG5cbiAgZ2V0Q2hpbGRFZGl0b3JzU2xvdCAoKSB7XG4gICAgY29uc3QgY2hpbGRFZGl0b3JzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hpbGRFZGl0b3JzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGNoaWxkRWRpdG9yc1Nsb3RcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVzc2FnZXNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIG1lc3NhZ2VzU2xvdFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogYXV0bzsnKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldElucHV0IChjb25maWcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZVdpcmVmcmFtZSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5saW5lJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXaXJlZnJhbWVcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tcHJpbWFyeScpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldFJhZGlvQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL2Jvb3RzdHJhcDQnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQm9vdHN0cmFwNCB7fVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCdcblxuZXhwb3J0IGNvbnN0IGNsb25lID0gKHRoaW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpICE9PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTm90U2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2ludGVnZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCB1dWlkdjQgPSAoKSA9PiB7XG4gIHJldHVybiB2NCgpXG59XG4iLCJjbGFzcyBFZGl0b3Ige1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8ICdyb290J1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSB0aGlzLmplZGkudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy5qZWRpLnRoZW1lLmdldEFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q2hpbGRFZGl0b3JzU2xvdCgpXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBidWlsZCBwaXBlbGluZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgaWYgKHRoaXMuamVkaS5yZWFkeSB8fCB0aGlzLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG4gIH1cblxuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRDb250YWluZXIoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLnBhdGgpXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogSWYgc2NoZW1hLmRlZmF1bHQgaXMgbm90IGRlZmluZWQsIHNldHMgYW4gaW5pdGlhbCB2YWx1ZSBiYXNlZCBvbiBpdCdzIHR5cGUuXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCB1bmxlc3MgdHJpZ2dlcnNDaGFuZ2UgaXMgZXhwbGljaXRseSBzZXQgdG8gZmFsc2UuIFRoaXMgaXNcbiAgICogdXNlZnVsIGZvciBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWVzLlxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuc2FuaXRpemUobmV3VmFsdWUpXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMub25TZXRWYWx1ZSgpXG5cbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICB2YWxpZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLm1lc3NhZ2VzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXRFcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxuICBvblNldFZhbHVlICgpIHt9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBlZGl0b3IgY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlICgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRFZGl0b3JDaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIGEgY2hpbGQgZWRpdG9yIGNoYW5nZXMuIFRoaXMgaXMgcmVsZXZhbnQgZm9yIEFycmF5XG4gICAqIGFuZCBPYmplY3QgZWRpdG9ycy5cbiAgICovXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3IsIGFuZCBldmVyeSByZWZlcmVuY2UgdGhhdCBpdCBpcyBhdHRhY2hlZCB0byBpdC5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYVxuICB9XG5cbiAgYWxsT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFsbE9mKSA/IHRoaXMuc2NoZW1hLmFsbE9mIDogZmFsc2VcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IGZhbHNlXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0ID8gdGhpcy5zY2hlbWEuY29uc3QgOiBmYWxzZVxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0ID8gdGhpcy5zY2hlbWEuZGVmYXVsdCA6IGZhbHNlXG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogZmFsc2VcbiAgfVxuXG4gIGRlc2NyaXB0aW9uICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pID8gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gOiBmYWxzZVxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpID8gdGhpcy5zY2hlbWEuZWxzZSA6IGZhbHNlXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXRJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZm9ybWF0KCkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSA/IHRoaXMuc2NoZW1hLmlmIDogZmFsc2VcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpID8gdGhpcy5zY2hlbWEuaXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5tYXhpbXVtKSA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4TGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heExlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhMZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWF4UHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4UHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBtaW5JdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5JdGVtcykgJiYgdGhpcy5zY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtdWx0aXBsZU9mICgpIHtcbiAgICBpZiAoaXNOdW1iZXIodGhpcy5zY2hlbWEubXVsdGlwbGVPZikgJiYgdGhpcy5zY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubXVsdGlwbGVPZlxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSA/IHRoaXMuc2NoZW1hLm5vdCA6IGZhbHNlXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0eSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcyAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogZmFsc2VcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS50aGVuKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiBmYWxzZVxuICB9XG5cbiAgdGl0bGUgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS50aXRsZSkgPyB0aGlzLnNjaGVtYS50aXRsZSA6IGZhbHNlXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKHRoaXMudHlwZSgpICYmIHRoaXMudHlwZSgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIHR5cGVzICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiBmYWxzZVxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiBmYWxzZVxuICB9XG5cbiAgc2VyaWFsaXplICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgY2xvbmUsIGlzQXJyYXkgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcblxuICAgIC8vIGFkZEJ0blxuICAgIHRoaXMuYWRkQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUFsbEJ0bilcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZW1FZGl0b3IgKHZhbHVlKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEuaXRlbXMoKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7IHR5cGU6IGdldFR5cGUodmFsdWUpIH1cblxuICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWRpdG9yLmFjdGlvbnNTbG90KVxuICAgIGl0ZW1FZGl0b3IuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5nZXRLZXkoKSlcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICB9KVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgICAgfSlcbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgICAgfSlcbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUnKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgb25DaGlsZEVkaXRvckNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoaXRlbVZhbHVlKVxuICAgICAgaXRlbUVkaXRvci5zZXRWYWx1ZShpdGVtVmFsdWUsIGZhbHNlKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChpdGVtRWRpdG9yKVxuXG4gICAgICBsZXQgYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpXG5cbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkQnV0dG9ucyA9IEFycmF5LmZyb20oY2hpbGRFZGl0b3IuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuICAgICAgICBidXR0b25zID0gYnV0dG9ucy5jb25jYXQoY2hpbGRCdXR0b25zKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgaXRlbUVkaXRvci5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtRWRpdG9yLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIGNoaWxkRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBjaGVja2JveCBjb250YWluZXJcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRDaGVja2JveENvbnRhaW5lcigpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldENoZWNrYm94TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRDaGVja2JveCh7XG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcilcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZmllbGRzZXRcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG5cbiAgICAvLyBsZWdlbmRcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICB9KSlcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKVxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gZmllbGRzZXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxuXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBlcXVhbCwgaXNTZXQsIGdldFR5cGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIC8vIGNoaWxkIGVkaXRvcnNcbiAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5zY2hlbWEucHJvcGVydGllcygpLCBrZXkpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3dSZXF1aXJlZE9ubHkgPSB0aGlzLmplZGkub3B0aW9ucy5zaG93UmVxdWlyZWRPbmx5IHx8IHRoaXMuc2NoZW1hLm9wdGlvbignc2hvd1JlcXVpcmVkT25seScpXG4gICAgICAgIGNvbnN0IGlzTm90UmVxdWlyZWQgPSAhdGhpcy5zY2hlbWEucmVxdWlyZWQoKSB8fCAhdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhrZXkpXG5cbiAgICAgICAgaWYgKHNob3dSZXF1aXJlZE9ubHkgJiYgaXNOb3RSZXF1aXJlZCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0eShrZXkpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRFZGl0b3Ioc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGRlcGVuZGVudCByZXF1aXJlZCBwcm9wZXJ0aWVzXG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSwga2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKGtleSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0eShrZXkpXG4gICAgICAgICAgdGhpcy5hZGRDaGlsZEVkaXRvcihzY2hlbWEsIGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIC8vIGFkZEJ0blxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSkge1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnR5IE5hbWUnLFxuICAgICAgICBmb3I6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5wYXRoXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMucGF0aFxuICAgICAgfSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG5cbiAgICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICAgIH0pXG5cbiAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gaW5wdXQudmFsdWVcblxuICAgICAgICAvLyBpZiBub3QgcHJvcGVydHkgbmFtZSB3YXMgZ2l2ZW4gcmV0dXJuXG4gICAgICAgIGlmIChrZXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBwcm9wZXJ0eSBleGlzdCByZXR1cm5cbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRFZGl0b3IoeyB0eXBlOiAnYW55JyB9LCBrZXkpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSlcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgfSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoZGVwZW5kZW50UmVxdWlyZWQpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBhZGRDaGlsZEVkaXRvciAoc2NoZW1hLCBrZXkpIHtcbiAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogbmV3IFNjaGVtYShzY2hlbWEpLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIC8vIHJlbW92ZUJ0blxuICAgIGNvbnN0IG5vdFJlcXVpcmVkID0gIXRoaXMuaXNSZXF1aXJlZChrZXkpXG4gICAgY29uc3Qgbm90RGVwZW5kZW50UmVxdWlyZWQgPSAhdGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKGtleSlcbiAgICBjb25zdCBlZGl0YWJsZVByb3BlcnRpZXMgPSB0aGlzLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKG5vdFJlcXVpcmVkICYmIG5vdERlcGVuZGVudFJlcXVpcmVkICYmIGVkaXRhYmxlUHJvcGVydGllcykge1xuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnUmVtb3ZlIHByb3BlcnR5J1xuICAgICAgfSlcbiAgICAgIGVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKVxuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy52YWx1ZVtrZXldXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gZWRpdG9yLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkRWRpdG9yIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuY2hpbGRFZGl0b3JzW2ldXG4gICAgICBpZiAoZWRpdG9yLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkRWRpdG9ycy5zcGxpY2UoaSwgMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgdmFsdWVbY2hpbGRFZGl0b3IuZ2V0S2V5KCldID0gY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZ2V0Q2hpbGRFZGl0b3IgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWRpdG9ycy5maW5kKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gY2hpbGRFZGl0b3IuZ2V0S2V5KCkuc3BsaXQoJy4nKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuY2hpbGRFZGl0b3JzW2ldXG4gICAgICBjb25zdCBrZXkgPSBlZGl0b3IuZ2V0S2V5KClcbiAgICAgIGlmICghaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgdGhpcy5kZWxldGVDaGlsZEVkaXRvcihrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkRWRpdG9yID0gdGhpcy5nZXRDaGlsZEVkaXRvcihrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGVkaXRvclxuICAgICAgaWYgKGNoaWxkRWRpdG9yKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkRWRpdG9yLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKCFlcXVhbChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3Iuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGVkaXRvciBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZENoaWxkRWRpdG9yKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZEVkaXRvciA9IHRoaXMuZ2V0Q2hpbGRFZGl0b3Ioa2V5KVxuXG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoY2hpbGRFZGl0b3IuY29udGFpbmVyKVxuXG4gICAgICBpZiAoY2hpbGRFZGl0b3IpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZEVkaXRvci5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZEVkaXRvci5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICAvLyB0aXRsZVxuICAgIGlmICghdGhpcy5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICAgIH0pKVxuXG4gICAgICAvLyBkZXNjcmlwdGlvblxuICAgICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgY2hpbGRFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9XG5cbiAgICAvLyBpbnB1dFxuICAgIC8vIHRvZG8gZmlsZSwgcmFuZ2Ugc2hvdWxkIGJlIGhhbmRsZWQgZGlmZmVyZW50bHlcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFRleHRhcmVhKHtcbiAgICAgICAgaWQ6IHRoaXMucGF0aFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMub3B0aW9uVmFsdWVzWzBdXG4gICAgLy9cbiAgICAvLyBpZiAoZmlyc3RPcHRpb24pIHtcbiAgICAvLyAgIHRoaXMuc2V0VmFsdWUoZmlyc3RPcHRpb24sIGZhbHNlKVxuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBmaWVsZHNldFxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5qZWRpLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcblxuICAgIC8vIGxlZ2VuZFxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIH0pKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5vcHRpb25WYWx1ZXNbMF1cbiAgICAvL1xuICAgIC8vIGlmIChmaXJzdE9wdGlvbikge1xuICAgIC8vICAgdGhpcy5zZXRWYWx1ZShmaXJzdE9wdGlvbiwgZmFsc2UpXG4gICAgLy8gfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ZpZWxkc2V0JylcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0LCBlcXVhbCwgdXVpZHY0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5lZGl0b3JzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG4gICAgdGhpcy5hY3RpdmVFZGl0b3IgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcblxuICAgIGxldCBzY2hlbWFzID0gW11cblxuICAgIGlmICh0aGlzLnNjaGVtYS5hbnlPZigpIHx8IHRoaXMuc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IHRoaXMuc2NoZW1hLmFueU9mKCkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS50aXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuICAgICAgICBzY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVzKCkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuICAgICAgICBzY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcblxuICAgICAgc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCguLi5zY2hlbWFzLm1hcCgoc2NoZW1hKSA9PiBzY2hlbWEudGl0bGUpKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycsIHRpdGxlOiAnU3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicsIHRpdGxlOiAnTnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInLCB0aXRsZTogJ0ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicsIHRpdGxlOiAnQm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScsIHRpdGxlOiAnQXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JywgdGl0bGU6ICdPYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcsIHRpdGxlOiAnTnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goLi4uc2NoZW1hcy5tYXAoKHNjaGVtYSkgPT4gc2NoZW1hLnRpdGxlKSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gRWRpdG9yc1xuICAgIHNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBlZGl0b3IudW5yZWdpc3RlcigpXG5cbiAgICAgIGVkaXRvci5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gc3dpdGNoZXIgcmFkaW9zXG4gICAgdGhpcy5zd2l0Y2hlclJhZGlvcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlciA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG5cbiAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdPcHRpb25zJ1xuICAgIH0pKVxuXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuXG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5wYXRoICsgJy5zd2l0Y2hlcicgKyAnLicgKyBpbmRleCArICcuJyArIHV1aWRcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyUmFkaW9zLnB1c2gocmFkaW8pXG4gICAgICB0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9MYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5wYXRoICsgJy5zd2l0Y2hlcicgKyAnLicgKyBpbmRleCArICcuJyArIHV1aWQsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcblxuICAgIGlmIChpc1NldCh0aGlzLmVkaXRvcnNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEVkaXRvcigwLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hFZGl0b3IgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IHRoaXMuZWRpdG9yc1t0aGlzLmluZGV4XVxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ211bHRpcGxlJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRFZGl0b3IgPSB0aGlzLmVkaXRvcnNbdGhpcy5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkRWRpdG9yLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRFZGl0b3IuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aXZlRWRpdG9yLmNvbnRhaW5lcilcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZUVkaXRvci5kaXNhYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXIuZGlzYWJsZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlRWRpdG9yLmVuYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyLmRpc2FibGVkID0gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLnN3aXRjaGVyUmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluZGV4KSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUVkaXRvci5nZXRWYWx1ZSgpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpXG4gIH1cblxuICBtYXRjaEVkaXRvciAodmFsdWUsIGVkaXRvcnMpIHtcbiAgICBsZXQgaW5kZXggPSAwXG5cbiAgICBmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG4gICAgICBpZiAoZWRpdG9yLmVkaXRvcnMpIHtcbiAgICAgICAgZWRpdG9yLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoZXF1YWwoZWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUgKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgZWRpdG9yIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gZWRpdG9yIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmICghZXF1YWwodGhpcy5hY3RpdmVFZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgIHRoaXMubWF0Y2hFZGl0b3IodmFsdWUsIHRoaXMuZWRpdG9ycylcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuZWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMub3B0aW9uVmFsdWVzWzBdXG4gICAgLy9cbiAgICAvLyBpZiAoZmlyc3RPcHRpb24pIHtcbiAgICAvLyAgIHRoaXMuc2V0VmFsdWUoZmlyc3RPcHRpb24sIGZhbHNlKVxuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBmaWVsZHNldFxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5qZWRpLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcblxuICAgIC8vIGxlZ2VuZFxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICB9KSlcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMub3B0aW9uVmFsdWVzWzBdXG4gICAgLy9cbiAgICAvLyBpZiAoZmlyc3RPcHRpb24pIHtcbiAgICAvLyAgIHRoaXMuc2V0VmFsdWUoZmlyc3RPcHRpb24sIGZhbHNlKVxuICAgIC8vIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdmaWVsZHNldCcpXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXG5cbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5nZXRWYWx1ZSgpKSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCB7IGlzU2V0LCBnZXRUeXBlIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9vYmplY3QnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgTXVsdGlwbGVFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bGwnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuXG5jbGFzcyBSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLmFueU9mKCkgfHwgc2NoZW1hLm9uZU9mKCkgfHwgc2NoZW1hLnR5cGVJcygnYW55JykgfHwgc2NoZW1hLnR5cGVzKCkgfHwgIXNjaGVtYS50eXBlKCkpIHtcbiAgICAgICAgICBpZiAoIXNjaGVtYS50eXBlKCkgJiYgc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBzY2hlbWEuY2xvbmUoKVxuICAgICAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKG5ld1NjaGVtYSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE11bHRpcGxlRWRpdG9yXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgICAgIHJldHVybiBBcnJheUVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgc2NoZW1hLmVudW0oKSAmJiBzY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBzY2hlbWEuZW51bSgpKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBzY2hlbWEuZW51bSgpICYmIHNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgc2NoZW1hLmVudW0oKSkge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICAgICAgcmV0dXJuIE51bGxFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVzb2x2ZXIgZnVuY3Rpb25cbiAgICovXG4gIGFkZFJlc29sdmVyIChyZXNvbHZlcikge1xuICAgIHRoaXMucmVzb2x2ZXJzLnVuc2hpZnQocmVzb2x2ZXIpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKHNjaGVtYSkge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoc2NoZW1hKVxuICAgICAgaWYgKGlzU2V0KGVkaXRvckNsYXNzKSkge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZXJcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgSmVkaSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gW1xuICAgICAgJ2RlcGVuZGVudFJlcXVpcmVkJyxcbiAgICAgICdmb3JtYXQnLFxuICAgICAgJ2lmJyxcbiAgICAgICdjb25zdCcsXG4gICAgICAnbm90JyxcbiAgICAgICd0eXBlJyxcbiAgICAgICd1bmlxdWVJdGVtcycsXG4gICAgICAnZXhjbHVzaXZlTWF4aW11bScsXG4gICAgICAnZXhjbHVzaXZlTWluaW11bScsXG4gICAgICAnbWluSXRlbXMnLFxuICAgICAgJ21heEl0ZW1zJyxcbiAgICAgICdtaW5MZW5ndGgnLFxuICAgICAgJ21heExlbmd0aCcsXG4gICAgICAnbWluaW11bScsXG4gICAgICAnbWF4aW11bScsXG4gICAgICAnbXVsdGlwbGVPZicsXG4gICAgICAncGF0dGVybicsXG4gICAgICAncGF0dGVyblByb3BlcnRpZXMnLFxuICAgICAgJ2VudW0nLFxuICAgICAgJ3JlcXVpcmVkJyxcbiAgICAgICdtaW5Qcm9wZXJ0aWVzJyxcbiAgICAgICdtYXhQcm9wZXJ0aWVzJyxcbiAgICAgICdhbGxPZicsXG4gICAgICAnYW55T2YnLFxuICAgICAgJ29uZU9mJ1xuICAgIF1cbiAgfVxuXG4gIGFsbE9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuYWxsT2YoKSkge1xuICAgICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbE9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFsbE9mRXJyb3JzXVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBhbnlPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuYW55T2YoKSkge1xuICAgICAgY29uc3QgdmFsaWQgPSBzY2hlbWEuYW55T2YoKS5zb21lKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcbiAgICAgICAgcmV0dXJuIGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMFxuICAgICAgfSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnICBtdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgY29uc3QgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmNvbnN0KCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgdmFsdWU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGVudW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmVudW0oKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBleGNsdXNpdmVNYXhpbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSAtIDEpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpICsgMSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBmb3JtYXQgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdCgpKSB7XG4gICAgICBsZXQgaW52YWxpZCA9IGZhbHNlXG5cbiAgICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgICAgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEuaWYoKSkge1xuICAgICAgaWYgKCFzY2hlbWEudGhlbigpIHx8ICFzY2hlbWEuZWxzZSgpKSB7XG4gICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgIH1cblxuICAgICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0dmFsOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG5cbiAgICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydHZhbDogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0dmFsOiB2YWx1ZSB9KVxuICAgICAgICBlcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhpbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWF4aW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heEl0ZW1zICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpICYmIHNjaGVtYS5tYXhJdGVtcygpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhMZW5ndGggKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5tYXhMZW5ndGgoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pbmltdW0gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIHNjaGVtYS5taW5pbXVtKCkpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5JdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWluSXRlbXMoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pbkxlbmd0aCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLm1pbkxlbmd0aCgpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtdWx0aXBsZU9mICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubXVsdGlwbGVPZigpKSB7XG4gICAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbm90ICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5ub3QoKSkge1xuICAgICAgY29uc3Qgbm90RXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEubm90KCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBvbmVPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEub25lT2YoKSkge1xuICAgICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBvbmVPZkVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcGF0dGVybiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm4oKSkge1xuICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkge1xuICAgICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuICAgICAgICAgICAgc2NoZW1hLnRpdGxlID0gcHJvcGVydHlOYW1lXG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICAgIHN0YXJ0dmFsOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHJlcXVpcmVkICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEucmVxdWlyZWQoKSkge1xuICAgICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgaXMgbWlzc2luZyB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHR5cGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLnR5cGVzKCkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuXG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICB1bmlxdWVJdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEudW5pcXVlSXRlbXMoKSkge1xuICAgICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdmFsaWRhdG9yIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRWYWxpZGF0b3IgKHZhbGlkYXRvcikge1xuICAgIHRoaXMudmFsaWRhdG9ycy5wdXNoKHZhbGlkYXRvcilcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB0aGlzW3ZhbGlkYXRvcl0odmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgVGhlbWVXaXJlZnJhbWUgZnJvbSAnLi90aGVtZXMvd2lyZWZyYW1lJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXInXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRvcidcblxuY2xhc3MgSmVkaSB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ3dpcmVmcmFtZSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYShvcHRpb25zLnNjaGVtYSlcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IFJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMuZXJyb3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd3aXJlZnJhbWUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lV2lyZWZyYW1lKClcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0dmFsKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0dmFsKVxuICAgIH1cblxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSB0aGlzLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QuY29udGFpbmVyKVxuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB0aGlzLnJvb3Qub25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH1cbiAgICB0aGlzLmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGVkaXRvciBpbnN0YW5jZSBiYXNlZCBvbiB0aGUgcGFzc2VkIHNjaGVtYSBhbmQgY29uZmlnXG4gICAqL1xuICBjcmVhdGVFZGl0b3IgKGNvbmZpZykge1xuICAgIGNvbnN0IEVkaXRvckNsYXNzID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlKGNvbmZpZy5zY2hlbWEpXG4gICAgcmV0dXJuIG5ldyAoRWRpdG9yQ2xhc3MpKGNvbmZpZylcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIGdldEVkaXRvciAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvcnNbcGF0aF1cbiAgfVxuXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC5kaXNhYmxlKClcbiAgfVxuXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LmVuYWJsZSgpXG4gIH1cblxuICB2YWxpZGF0ZSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5lZGl0b3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yc1trZXldXG4gICAgICB0aGlzLmVycm9ycyA9IFsuLi50aGlzLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLmVycm9yc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMub3B0aW9ucy5zdGFydHZhbCA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVycy5maW5kKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9