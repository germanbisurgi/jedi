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
      this.defs = schema['$defs'] || schema['definitions'];

      for (var i = 0; i < this.iterations; i++) {
        this.traverse(this.defs);
        this.traverse(schema);
      }

      console.log('....dereferenced schema');
      console.log(JSON.stringify(schema, null, 2));
      return schema;
    }
  }, {
    key: "define",
    value: function define(ref) {
      if (!isString(ref)) {
        return ref;
      }

      if (ref.startsWith('#/$defs') || ref.startsWith('#/definitions')) {
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
    this.schema = new src_schema(options.schema);
    this.editors = {};
    this.root = null;
    this.theme = null;
    this.listeners = [];
    this.resolver = new src_resolver();
    this.validator = new src_validator();
    this.refParser = new ref_parser();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy93aXJlZnJhbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWVCYXJlYm9uZXMiLCJjb25maWciLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwibWVzc2FnZSIsImFjdGlvbnNTbG90IiwiY2hpbGRFZGl0b3JzU2xvdCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2VzU2xvdCIsImxhYmVsIiwibGVnZW5kIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJjaGVja2JveCIsInJhZGlvIiwidmFsdWUiLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvblZhbHVlcyIsImZvckVhY2giLCJpbmRleCIsIm9wdGlvbiIsIm9wdGlvbnNMYWJlbHMiLCJhcHBlbmRDaGlsZCIsIlRoZW1lV2lyZWZyYW1lIiwiYnRuR3JvdXAiLCJmaWVsZHNldCIsImNoZWNrYm94Q29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVxdWFsIiwiYSIsImIiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJpc1NldCIsImlzTm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsImlzT2JqZWN0IiwiZ2V0VHlwZSIsInV1aWR2NCIsInY0IiwiRWRpdG9yIiwiamVkaSIsInNjaGVtYSIsImRpc2FibGVkIiwidW5kZWZpbmVkIiwicGF0aCIsInBhcmVudCIsInRoZW1lIiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZEVkaXRvcnNTbG90IiwiY2hpbGRFZGl0b3JzIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwic2V0Q29udGFpbmVyIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInByZXBhcmUiLCJidWlsZCIsInJlZnJlc2hVSSIsInJlYWR5Iiwib3B0aW9ucyIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsInNwbGl0IiwicG9wIiwiZ2V0Q29udGFpbmVyIiwicmVnaXN0ZXJFZGl0b3IiLCJ1bnJlZ2lzdGVyRWRpdG9yIiwiaW5jbHVkZXMiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwic2FuaXRpemUiLCJvbkNoYW5nZSIsIm9uU2V0VmFsdWUiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0ZSIsImdldFZhbHVlIiwiZ2V0S2V5IiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwiZ2V0SW5wdXRFcnJvciIsIm9uQ2hpbGRFZGl0b3JDaGFuZ2UiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ1bnJlZ2lzdGVyIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU2NoZW1hIiwiYWxsT2YiLCJhbnlPZiIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsIml0ZW1zIiwibWF4aW11bSIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90IiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIkFycmF5RWRpdG9yIiwiZ2V0QnRuR3JvdXAiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsIndpbmRvdyIsImNvbmZpcm0iLCJzZXRWYWx1ZSIsImdldEZpZWxkc2V0IiwiZ2V0TGVnZW5kIiwiZ2V0RGVzY3JpcHRpb24iLCJpdGVtRWRpdG9yIiwiY3JlYXRlRWRpdG9yIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1FZGl0b3IiLCJwdXNoIiwiZGVzdHJveSIsImN1cnJlbnRWYWx1ZSIsImZpbHRlciIsImNoaWxkRWRpdG9yIiwiZWRpdG9yIiwiaXRlbVZhbHVlIiwiYnV0dG9ucyIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRCdXR0b25zIiwiY29uY2F0IiwiZGlzYWJsZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkJvb2xlYW5FZGl0b3IiLCJnZXRDaGVja2JveENvbnRhaW5lciIsImdldENoZWNrYm94TGFiZWwiLCJnZXRDaGVja2JveCIsImNoZWNrZWQiLCJCb29sZWFuIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRMYWJlbCIsImdldFNlbGVjdCIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJyYWRpb0NvbnRhaW5lciIsImdldFJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW8iLCJyYWRpb1ZhbHVlIiwicXVlcnlTZWxlY3RvciIsInJhZGlvSW5wdXRzIiwiT2JqZWN0RWRpdG9yIiwic2hvd1JlcXVpcmVkT25seSIsImlzTm90UmVxdWlyZWQiLCJwcm9wZXJ0eSIsImFkZENoaWxkRWRpdG9yIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImVkaXRhYmxlUHJvcGVydGllcyIsImdldElucHV0IiwibWlzc2luZ1Byb3BlcnRpZXMiLCJrZXlzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwibm90UmVxdWlyZWQiLCJpc1JlcXVpcmVkIiwibm90RGVwZW5kZW50UmVxdWlyZWQiLCJyZW1vdmVCdG4iLCJpIiwiZmluZCIsImRlbGV0ZUNoaWxkRWRpdG9yIiwiZ2V0Q2hpbGRFZGl0b3IiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIlN0cmluZ0VkaXRvciIsImZvcm1hdElzIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhIiwiU3RyaW5nIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIk11bHRpcGxlRWRpdG9yIiwiZWRpdG9ycyIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiYWN0aXZlRWRpdG9yIiwibGFzdEluZGV4Iiwic2NoZW1hcyIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJ0eXBlcyIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm1hcCIsInN3aXRjaGVyUmFkaW9zIiwic3dpdGNoZXIiLCJ1dWlkIiwic3dpdGNoRWRpdG9yIiwiZ2V0UmFkaW9MYWJlbCIsIm5ld0luZGV4Iiwib2xkRWRpdG9yIiwibWF0Y2hFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiTnVsbEVkaXRvciIsIlJlc29sdmVyIiwicmVzb2x2ZXJzIiwib3JpZ2luYWxTY2hlbWEiLCJuZXdTY2hlbWEiLCJyZXNvbHZlIiwidHlwZUlzTnVtZXJpYyIsInJlc29sdmVyIiwidW5zaGlmdCIsImVkaXRvckNsYXNzIiwiVmFsaWRhdG9yIiwidmFsaWRhdG9ycyIsImFsbE9mRXJyb3JzIiwidmFsaWQiLCJzb21lIiwiYW55T2ZFcnJvcnMiLCJmaWVsZCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImpvaW4iLCJlIiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwicmVnZXhwIiwiUmVnRXhwIiwidGVzdCIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0dmFsIiwiaWZFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByb3BlcnRpZXNDb3VudCIsImlzTXVsdGlwbGVPZiIsIm5vdEVycm9ycyIsImNvdW50ZXIiLCJvbmVPZkVycm9ycyIsInByb3BlcnR5TmFtZSIsInN0cmluZyIsIm51bWJlciIsImludGVnZXIiLCJhcnJheSIsIm9iamVjdCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJzY2hlbWFFcnJvcnMiLCJ2YWxpZGF0b3JFcnJvcnMiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiZGVmcyIsInRyYXZlcnNlIiwiY29uc29sZSIsImxvZyIsInJlZiIsInN0YXJ0c1dpdGgiLCJyZWZQYXJ0cyIsImRlZk5hbWUiLCJkZWZpbmUiLCJhc3NpZ24iLCJyb290IiwibGlzdGVuZXJzIiwicmVmUGFyc2VyIiwiaGlkZGVuSW5wdXQiLCJlbWl0IiwiRWRpdG9yQ2xhc3MiLCJhcmd1bWVudHMiLCJyZXNldCIsIm5hbWUiLCJjYWxsYmFjayIsImxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7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S0csTUFBWjtJQUNEOzs7V0FFRCxpQkFBUztNQUNQLEtBQUtsQixPQUFMLENBQWF5TSxRQUFiLEdBQXdCLEtBQUt6TCxRQUFMLEVBQXhCO01BQ0EsS0FBS3JGLFNBQUwsQ0FBZXdGLFNBQWYsR0FBMkIsRUFBM0I7TUFDQSxLQUFLcU4sSUFBTCxDQUFVL0ksT0FBVjtNQUNBLEtBQUtsRyxJQUFMO0lBQ0Q7OztXQUVELGtCQUFVTCxLQUFWLEVBQWlCO01BQ2YsS0FBS2MsT0FBTCxDQUFhZCxLQUFiLEdBQXFCQSxLQUFyQjtNQUNBLEtBQUs2UCxLQUFMO0lBQ0Q7OztXQUVELFlBQUlDLElBQUosRUFBVUMsUUFBVixFQUFvQjtNQUNsQixLQUFLUixTQUFMLENBQWVqSixJQUFmLENBQW9CO1FBQUV3SixJQUFJLEVBQUpBLElBQUY7UUFBUUMsUUFBUSxFQUFSQTtNQUFSLENBQXBCO0lBQ0Q7OztXQUVELGNBQU1ELElBQU4sRUFBWTtNQUNWLElBQU1FLFFBQVEsR0FBRyxLQUFLVCxTQUFMLENBQWVsRyxJQUFmLENBQW9CLFVBQUEyRyxRQUFRO1FBQUEsT0FBSUEsUUFBUSxDQUFDRixJQUFULEtBQWtCQSxJQUF0QjtNQUFBLENBQTVCLENBQWpCOztNQUVBLElBQUlFLFFBQUosRUFBYztRQUNaQSxRQUFRLENBQUNELFFBQVQ7TUFDRDtJQUNGOzs7V0FFRCxtQkFBVztNQUFBOztNQUNULEtBQUtULElBQUwsQ0FBVS9JLE9BQVY7TUFFQSxLQUFLOUosU0FBTCxDQUFld0YsU0FBZixHQUEyQixFQUEzQjtNQUVBTyxNQUFNLENBQUNzRyxJQUFQLENBQVksSUFBWixFQUFrQnhMLE9BQWxCLENBQTBCLFVBQUNpRixHQUFELEVBQVM7UUFDakMsT0FBTyxNQUFJLENBQUNBLEdBQUQsQ0FBWDtNQUNELENBRkQ7SUFHRDs7Ozs7O0FBR1krSyxpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjbGFzcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgYWN0aW9uc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjdGlvbnNTbG90LmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gYWN0aW9uc1Nsb3RcbiAgfVxuXG4gIGdldENoaWxkRWRpdG9yc1Nsb3QgKCkge1xuICAgIGNvbnN0IGNoaWxkRWRpdG9yc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoaWxkRWRpdG9yc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBjaGlsZEVkaXRvcnNTbG90XG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBtZXNzYWdlc1Nsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lc3NhZ2VzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBtZXNzYWdlc1Nsb3RcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6IGF1dG87JylcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRJbnB1dCAoY29uZmlnKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVXaXJlZnJhbWUgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlubGluZScpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW8gKGNvbmZpZykge1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHJhZGlvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbmZpZy52YWx1ZSlcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiByYWRpb1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEgKGNvbmZpZykge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV2lyZWZyYW1lXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gYnRuR3JvdXBcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXByaW1hcnknKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0NvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0Q2hlY2tib3ggKGNvbmZpZykge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gY2hlY2tib3hcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi9ib290c3RyYXA0J1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZUJvb3RzdHJhcDQge31cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbmV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBlcXVhbCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSAhPT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBpc05vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc0ludGVnZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdpbnRlZ2VyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgdXVpZHY0ID0gKCkgPT4ge1xuICByZXR1cm4gdjQoKVxufVxuIiwiY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMubWVzc2FnZXNTbG90ID0gdGhpcy5qZWRpLnRoZW1lLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IHRoaXMuamVkaS50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90ID0gdGhpcy5qZWRpLnRoZW1lLmdldENoaWxkRWRpdG9yc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgYnVpbGQgcGlwZWxpbmUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgIGlmICh0aGlzLmplZGkucmVhZHkgfHwgdGhpcy5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfVxuICB9XG5cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5wYXRoKVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBidWlsZCB0aGUgZWRpdG9yJ3MgdXNlciBpbnRlcmZhY2VcbiAgICovXG4gIGJ1aWxkICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGluIHRoZSBqZWRpLmVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGlzIGVkaXRvciBpbnN0YW5jZSBmcm9tIHRoZSBqZWRpLmVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3RlckVkaXRvcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIElmIHNjaGVtYS5kZWZhdWx0IGlzIG5vdCBkZWZpbmVkLCBzZXRzIGFuIGluaXRpYWwgdmFsdWUgYmFzZWQgb24gaXQncyB0eXBlLlxuICAgKi9cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkge1xuICAgICAgaWYgKHRoaXMuc2NoZW1hLmVudW0oKSAmJiAhdGhpcy5zY2hlbWEuZW51bSgpLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZSB2YWx1ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWRpdG9yIHZhbHVlIGFuZCBjYWxscyByZWZyZXNoVUkgcmlnaHQgYWZ0ZXIuIFRoZSBvbkNoYW5nZSBtZXRob2RcbiAgICogd2lsbCBiZSBjYWxsZWQgdW5sZXNzIHRyaWdnZXJzQ2hhbmdlIGlzIGV4cGxpY2l0bHkgc2V0IHRvIGZhbHNlLiBUaGlzIGlzXG4gICAqIHVzZWZ1bCBmb3IgaW5pdGlhbCBvciBkZWZhdWx0IHZhbHVlcy5cbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgbmV3VmFsdWUgPSB0aGlzLnNhbml0aXplKG5ld1ZhbHVlKVxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLm9uU2V0VmFsdWUoKVxuXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIFVJIG9mIHRoZSBlZGl0b3IgdG8gcmVmbGVjdCBpdCdzIHZhbHVlLiBUaGlzIGlzIG5lY2Vzc2FyeSB3aGVuXG4gICAqIHVzaW5nIHNldFZhbHVlIHRvIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgdmFsaWRhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGUoKVxuXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldElucHV0RXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICB9KSlcbiAgICB9KVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgZWRpdG9yIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZSAoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC5vbkNoaWxkRWRpdG9yQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiBhIGNoaWxkIGVkaXRvciBjaGFuZ2VzLiBUaGlzIGlzIHJlbGV2YW50IGZvciBBcnJheVxuICAgKiBhbmQgT2JqZWN0IGVkaXRvcnMuXG4gICAqL1xuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yLCBhbmQgZXZlcnkgcmVmZXJlbmNlIHRoYXQgaXQgaXMgYXR0YWNoZWQgdG8gaXQuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcywga2V5KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IGZhbHNlXG4gIH1cblxuICBhbnlPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYW55T2YpID8gdGhpcy5zY2hlbWEuYW55T2YgOiBmYWxzZVxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdCA/IHRoaXMuc2NoZW1hLmNvbnN0IDogZmFsc2VcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdCA/IHRoaXMuc2NoZW1hLmRlZmF1bHQgOiBmYWxzZVxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IGZhbHNlXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogZmFsc2VcbiAgfVxuXG4gIGVsc2UgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSA/IHRoaXMuc2NoZW1hLmVsc2UgOiBmYWxzZVxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiBmYWxzZVxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLmZvcm1hdCgpICYmIHRoaXMuZm9ybWF0KCkgPT09IHZhbHVlKVxuICB9XG5cbiAgaWYgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pZikgPyB0aGlzLnNjaGVtYS5pZiA6IGZhbHNlXG4gIH1cblxuICBpdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIG1heGltdW0gKCkge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5taW5pbXVtKSA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiBmYWxzZVxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWluTGVuZ3RoICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5MZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG5vdCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgPyB0aGlzLnNjaGVtYS5ub3QgOiBmYWxzZVxuICB9XG5cbiAgb3B0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm9wdGlvbnMgJiYgdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEucGF0dGVybikgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcHJvcGVydHkgKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMgJiYgdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldID8gdGhpcy5zY2hlbWEucHJvcGVydGllc1trZXldIDogZmFsc2VcbiAgfVxuXG4gIHByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IGZhbHNlXG4gIH1cblxuICByZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQpXSA6IGZhbHNlXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgPyB0aGlzLnNjaGVtYS50aGVuIDogZmFsc2VcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiBmYWxzZVxuICB9XG5cbiAgdHlwZSAoKSB7XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLnR5cGUoKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlcyAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSlcbiAgfVxuXG4gIHR5cGVJc051bWVyaWMgKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVJcygnbnVtYmVyJykgfHwgdGhpcy50eXBlSXMoJ2ludGVnZXInKVxuICB9XG5cbiAgb25lT2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLm9uZU9mKSA/IHRoaXMuc2NoZW1hLm9uZU9mIDogZmFsc2VcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogZmFsc2VcbiAgfVxuXG4gIHNlcmlhbGl6ZSAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcywga2V5KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGdldFR5cGUsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2hpbGRFZGl0b3JzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuXG4gICAgLy8gYnRuIGdyb3VwXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmplZGkudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gICAgdGhpcy5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVtRWRpdG9yICh2YWx1ZSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLml0ZW1zKCkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDogeyB0eXBlOiBnZXRUeXBlKHZhbHVlKSB9XG5cbiAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRCdG5Hcm91cCgpXG4gICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVkaXRvci5hY3Rpb25zU2xvdClcbiAgICBpdGVtRWRpdG9yLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IuZ2V0S2V5KCkpXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgfSlcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgdGhpcy5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgIH0pXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmdldFZhbHVlKCkubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgIH0pXG4gICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbUVkaXRvclxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlJykpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGNoaWxkRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKGl0ZW1WYWx1ZSlcbiAgICAgIGl0ZW1FZGl0b3Iuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goaXRlbUVkaXRvcilcblxuICAgICAgbGV0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKVxuXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZEJ1dHRvbnMgPSBBcnJheS5mcm9tKGNoaWxkRWRpdG9yLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSlcbiAgICAgICAgYnV0dG9ucyA9IGJ1dHRvbnMuY29uY2F0KGNoaWxkQnV0dG9ucylcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGl0ZW1FZGl0b3IuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbUVkaXRvci5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1Nsb3QuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRkQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5kZWxldGVBbGxCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICBjaGlsZEVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gY2hlY2tib3ggY29udGFpbmVyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q2hlY2tib3hDb250YWluZXIoKVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRDaGVja2JveExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q2hlY2tib3goe1xuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGZpZWxkc2V0XG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuXG4gICAgLy8gbGVnZW5kXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgfSkpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ZpZWxkc2V0JylcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgZXF1YWwsIGlzU2V0LCBnZXRUeXBlLCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICAvLyBjaGlsZCBlZGl0b3JzXG4gICAgaWYgKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSwga2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93UmVxdWlyZWRPbmx5ID0gdGhpcy5qZWRpLm9wdGlvbnMuc2hvd1JlcXVpcmVkT25seSB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ3Nob3dSZXF1aXJlZE9ubHknKVxuICAgICAgICBjb25zdCBpc05vdFJlcXVpcmVkID0gIXRoaXMuc2NoZW1hLnJlcXVpcmVkKCkgfHwgIXRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMoa2V5KVxuXG4gICAgICAgIGlmIChzaG93UmVxdWlyZWRPbmx5ICYmIGlzTm90UmVxdWlyZWQpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICB0aGlzLmFkZENoaWxkRWRpdG9yKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBkZXBlbmRlbnQgcmVxdWlyZWQgcHJvcGVydGllc1xuICAgIGlmICh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCksIGtleSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEZXBlbmRlbnRSZXF1aXJlZChrZXkpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydHkoa2V5KVxuICAgICAgICAgIHRoaXMuYWRkQ2hpbGRFZGl0b3Ioc2NoZW1hLCBrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZEVkaXRvcnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICAvLyBhZGRCdG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJykpIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0eSBOYW1lJyxcbiAgICAgICAgZm9yOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIHRoaXMucGF0aFxuICAgICAgfSlcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLnBhdGhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgICB9KVxuXG4gICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGlucHV0LnZhbHVlXG5cbiAgICAgICAgLy8gaWYgbm90IHByb3BlcnR5IG5hbWUgd2FzIGdpdmVuIHJldHVyblxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcHJvcGVydHkgZXhpc3QgcmV0dXJuXG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZENoaWxkRWRpdG9yKHsgdHlwZTogJ2FueScgfSwga2V5KVxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpXG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucmVxdWlyZWQoKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGRlcGVuZGVudFJlcXVpcmVkKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgYWRkQ2hpbGRFZGl0b3IgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICAvLyByZW1vdmVCdG5cbiAgICBjb25zdCBub3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IG5vdERlcGVuZGVudFJlcXVpcmVkID0gIXRoaXMuaXNEZXBlbmRlbnRSZXF1aXJlZChrZXkpXG4gICAgY29uc3QgZWRpdGFibGVQcm9wZXJ0aWVzID0gdGhpcy5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChub3RSZXF1aXJlZCAmJiBub3REZXBlbmRlbnRSZXF1aXJlZCAmJiBlZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ1JlbW92ZSBwcm9wZXJ0eSdcbiAgICAgIH0pXG4gICAgICBlZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bilcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMudmFsdWVba2V5XVxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goZWRpdG9yKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGVkaXRvci5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZWxldGVDaGlsZEVkaXRvciAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmNoaWxkRWRpdG9yc1tpXVxuICAgICAgaWYgKGVkaXRvci5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZEVkaXRvcnMuc3BsaWNlKGksIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DaGlsZEVkaXRvckNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIHZhbHVlW2NoaWxkRWRpdG9yLmdldEtleSgpXSA9IGNoaWxkRWRpdG9yLmdldFZhbHVlKClcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGdldENoaWxkRWRpdG9yIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZEVkaXRvcnMuZmluZCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGNoaWxkRWRpdG9yLmdldEtleSgpLnNwbGl0KCcuJykucG9wKClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmNoaWxkRWRpdG9yc1tpXVxuICAgICAgY29uc3Qga2V5ID0gZWRpdG9yLmdldEtleSgpXG4gICAgICBpZiAoIWlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlQ2hpbGRFZGl0b3Ioa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZEVkaXRvciA9IHRoaXMuZ2V0Q2hpbGRFZGl0b3Ioa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBlZGl0b3JcbiAgICAgIGlmIChjaGlsZEVkaXRvcikge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkRWRpdG9yLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmICghZXF1YWwob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkRWRpdG9yLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBlZGl0b3IgZm9yIHRoZSBuZXcgdmFsdWUgZW50cnkgaGF2aW5nIHRoZSB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoaW5pdGlhbFZhbHVlKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRlZmF1bHQ6IGluaXRpYWxWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZEVkaXRvcihzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGRFZGl0b3IgPSB0aGlzLmdldENoaWxkRWRpdG9yKGtleSlcblxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LmFwcGVuZENoaWxkKGNoaWxkRWRpdG9yLmNvbnRhaW5lcilcblxuICAgICAgaWYgKGNoaWxkRWRpdG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3IuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRFZGl0b3IuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgLy8gdGl0bGVcbiAgICBpZiAoIXRoaXMuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgICB9KSlcblxuICAgICAgLy8gZGVzY3JpcHRpb25cbiAgICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIGNoaWxkRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfVxuXG4gICAgLy8gaW5wdXRcbiAgICAvLyB0b2RvIGZpbGUsIHJhbmdlIHNob3VsZCBiZSBoYW5kbGVkIGRpZmZlcmVudGx5XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRUZXh0YXJlYSh7XG4gICAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogdGhpcy5wYXRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLm9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW0oKVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBsYWJlbFxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZmlyc3RPcHRpb24gPSB0aGlzLm9wdGlvblZhbHVlc1swXVxuICAgIC8vXG4gICAgLy8gaWYgKGZpcnN0T3B0aW9uKSB7XG4gICAgLy8gICB0aGlzLnNldFZhbHVlKGZpcnN0T3B0aW9uLCBmYWxzZSlcbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZmllbGRzZXRcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG5cbiAgICAvLyBsZWdlbmRcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIGZvcjogdGhpcy5wYXRoICsgJy4nICsgaW5kZXgsXG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICB9KSlcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250YWluZXIpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMub3B0aW9uVmFsdWVzWzBdXG4gICAgLy9cbiAgICAvLyBpZiAoZmlyc3RPcHRpb24pIHtcbiAgICAvLyAgIHRoaXMuc2V0VmFsdWUoZmlyc3RPcHRpb24sIGZhbHNlKVxuICAgIC8vIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdmaWVsZHNldCcpXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXG5cbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCwgZXF1YWwsIHV1aWR2NCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuZWRpdG9ycyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuICAgIHRoaXMuYWN0aXZlRWRpdG9yID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG5cbiAgICBsZXQgc2NoZW1hcyA9IFtdXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuYW55T2YoKSB8fCB0aGlzLnNjaGVtYS5vbmVPZigpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSB0aGlzLnNjaGVtYS5hbnlPZigpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEudGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcbiAgICAgICAgc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlcygpKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlKCkuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cbiAgICAgICAgc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG5cbiAgICAgIHNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goLi4uc2NoZW1hcy5tYXAoKHNjaGVtYSkgPT4gc2NoZW1hLnRpdGxlKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICBzY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnLCB0aXRsZTogJ1N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInLCB0aXRsZTogJ051bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJywgdGl0bGU6ICdJbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nLCB0aXRsZTogJ0Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknLCB0aXRsZTogJ0FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcsIHRpdGxlOiAnT2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnLCB0aXRsZTogJ051bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICBzY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKC4uLnNjaGVtYXMubWFwKChzY2hlbWEpID0+IHNjaGVtYS50aXRsZSkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIEVkaXRvcnNcbiAgICBzY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgZWRpdG9yLnVucmVnaXN0ZXIoKVxuXG4gICAgICBlZGl0b3Iub25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgfSlcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIHN3aXRjaGVyIHJhZGlvc1xuICAgIHRoaXMuc3dpdGNoZXJSYWRpb3MgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuXG4gICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiAnT3B0aW9ucydcbiAgICB9KSlcblxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcblxuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMucGF0aCArICcuc3dpdGNoZXInICsgJy4nICsgaW5kZXggKyAnLicgKyB1dWlkXG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIocmFkaW8udmFsdWUpXG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlclJhZGlvcy5wdXNoKHJhZGlvKVxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcblxuICAgICAgLy8gbGFiZWxcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvTGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMucGF0aCArICcuc3dpdGNoZXInICsgJy4nICsgaW5kZXggKyAnLicgKyB1dWlkLFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoZXIpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5lZGl0b3JzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoMCwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoRWRpdG9yIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVFZGl0b3IgPSB0aGlzLmVkaXRvcnNbdGhpcy5pbmRleF1cbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsICdtdWx0aXBsZScpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkRWRpdG9yID0gdGhpcy5lZGl0b3JzW3RoaXMubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEVkaXRvci5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQob2xkRWRpdG9yLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2ZUVkaXRvci5jb250YWluZXIpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hY3RpdmVFZGl0b3IuZGlzYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyLmRpc2FibGVkID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUVkaXRvci5lbmFibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlci5kaXNhYmxlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hlclJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbmRleCkpXG4gICAgfSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVFZGl0b3IuZ2V0VmFsdWUoKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRWRpdG9yLnNhbml0aXplKHZhbHVlKVxuICB9XG5cbiAgbWF0Y2hFZGl0b3IgKHZhbHVlLCBlZGl0b3JzKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgZm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuICAgICAgaWYgKGVkaXRvci5lZGl0b3JzKSB7XG4gICAgICAgIGVkaXRvci5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVxdWFsKGVkaXRvci5zYW5pdGl6ZSh2YWx1ZSksIHZhbHVlKSkge1xuICAgICAgICB0aGlzLnN3aXRjaEVkaXRvcihpbmRleClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlICh2YWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGVkaXRvciB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGVkaXRvciB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoIWVxdWFsKHRoaXMuYWN0aXZlRWRpdG9yLnNhbml0aXplKHZhbHVlKSwgdmFsdWUpKSB7XG4gICAgICB0aGlzLm1hdGNoRWRpdG9yKHZhbHVlLCB0aGlzLmVkaXRvcnMpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVFZGl0b3Iuc2V0VmFsdWUodmFsdWUsIHRyaWdnZXJzQ2hhbmdlKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdCh7XG4gICAgICBvcHRpb25WYWx1ZXM6IHRoaXMub3B0aW9uVmFsdWVzLFxuICAgICAgb3B0aW9uc0xhYmVsczogdGhpcy5vcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZmlyc3RPcHRpb24gPSB0aGlzLm9wdGlvblZhbHVlc1swXVxuICAgIC8vXG4gICAgLy8gaWYgKGZpcnN0T3B0aW9uKSB7XG4gICAgLy8gICB0aGlzLnNldFZhbHVlKGZpcnN0T3B0aW9uLCBmYWxzZSlcbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZmllbGRzZXRcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuamVkaS50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG5cbiAgICAvLyBsZWdlbmRcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIHJhZGlvc1xuICAgIHRoaXMub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcmFkaW8gY29udGFpbmVyXG4gICAgICBjb25zdCByYWRpb0NvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0NvbnRhaW5lcigpXG5cbiAgICAgIC8vIHJhZGlvXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpbyh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHRoaXMucGF0aCArICcuJyArIGluZGV4XG4gICAgICB9KVxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW8pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIGxhYmVsXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgfSkpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZmlyc3RPcHRpb24gPSB0aGlzLm9wdGlvblZhbHVlc1swXVxuICAgIC8vXG4gICAgLy8gaWYgKGZpcnN0T3B0aW9uKSB7XG4gICAgLy8gICB0aGlzLnNldFZhbHVlKGZpcnN0T3B0aW9uLCBmYWxzZSlcbiAgICAvLyB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKVxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gZmllbGRzZXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxuXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuZ2V0VmFsdWUoKSkpXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgeyBpc1NldCwgZ2V0VHlwZSB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9tdWx0aXBsZSdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udWxsJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcblxuY2xhc3MgUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS5hbnlPZigpIHx8IHNjaGVtYS5vbmVPZigpIHx8IHNjaGVtYS50eXBlSXMoJ2FueScpIHx8IHNjaGVtYS50eXBlcygpIHx8ICFzY2hlbWEudHlwZSgpKSB7XG4gICAgICAgICAgaWYgKCFzY2hlbWEudHlwZSgpICYmIHNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2NoZW1hID0gc2NoZW1hLmNsb25lKClcbiAgICAgICAgICAgIG9yaWdpbmFsU2NoZW1hLnR5cGUgPSBnZXRUeXBlKHNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgICAgICBjb25zdCBuZXdTY2hlbWEgPSBuZXcgU2NoZW1hKG9yaWdpbmFsU2NoZW1hKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShuZXdTY2hlbWEpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNdWx0aXBsZUVkaXRvclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiBzY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgICAgIHJldHVybiBPYmplY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgICAgICByZXR1cm4gQXJyYXlFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHNjaGVtYS5lbnVtKCkgJiYgc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VudW1SYWRpb0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgc2NoZW1hLmVudW0oKSkge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgc2NoZW1hLmVudW0oKSAmJiBzY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIHNjaGVtYS5lbnVtKCkpIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ251bGwnKSkge1xuICAgICAgICAgIHJldHVybiBOdWxsRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHJlc29sdmVyIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRSZXNvbHZlciAocmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlc29sdmVycy51bnNoaWZ0KHJlc29sdmVyKVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChzY2hlbWEpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKHNjaGVtYSlcbiAgICAgIGlmIChpc1NldChlZGl0b3JDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc29sdmVyXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IFtcbiAgICAgICdkZXBlbmRlbnRSZXF1aXJlZCcsXG4gICAgICAnZm9ybWF0JyxcbiAgICAgICdpZicsXG4gICAgICAnY29uc3QnLFxuICAgICAgJ25vdCcsXG4gICAgICAndHlwZScsXG4gICAgICAndW5pcXVlSXRlbXMnLFxuICAgICAgJ2V4Y2x1c2l2ZU1heGltdW0nLFxuICAgICAgJ2V4Y2x1c2l2ZU1pbmltdW0nLFxuICAgICAgJ21pbkl0ZW1zJyxcbiAgICAgICdtYXhJdGVtcycsXG4gICAgICAnbWluTGVuZ3RoJyxcbiAgICAgICdtYXhMZW5ndGgnLFxuICAgICAgJ21pbmltdW0nLFxuICAgICAgJ21heGltdW0nLFxuICAgICAgJ211bHRpcGxlT2YnLFxuICAgICAgJ3BhdHRlcm4nLFxuICAgICAgJ3BhdHRlcm5Qcm9wZXJ0aWVzJyxcbiAgICAgICdlbnVtJyxcbiAgICAgICdyZXF1aXJlZCcsXG4gICAgICAnbWluUHJvcGVydGllcycsXG4gICAgICAnbWF4UHJvcGVydGllcycsXG4gICAgICAnYWxsT2YnLFxuICAgICAgJ2FueU9mJyxcbiAgICAgICdvbmVPZidcbiAgICBdXG4gIH1cblxuICBhbGxPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmFsbE9mKCkpIHtcbiAgICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBhbGxPZkVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hbGxPZkVycm9yc11cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgYW55T2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmFueU9mKCkpIHtcbiAgICAgIGNvbnN0IHZhbGlkID0gc2NoZW1hLmFueU9mKCkuc29tZSgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG4gICAgICAgIHJldHVybiBhbnlPZkVycm9ycy5sZW5ndGggPT09IDBcbiAgICAgIH0pXG5cbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGNvbnN0ICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5jb25zdCgpKSB7XG4gICAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIHZhbHVlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBlbnVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkgLSAxKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSArIDEpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZm9ybWF0ICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXQoKSkge1xuICAgICAgbGV0IGludmFsaWQgPSBmYWxzZVxuXG4gICAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICAgIGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmlmKCkpIHtcbiAgICAgIGlmICghc2NoZW1hLnRoZW4oKSB8fCAhc2NoZW1hLmVsc2UoKSkge1xuICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydHZhbDogdmFsdWUgfSlcbiAgICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuXG4gICAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnR2YWw6IHZhbHVlIH0pXG4gICAgICAgIGVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydHZhbDogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4aW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1heGltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhJdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWF4SXRlbXMoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4TGVuZ3RoICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWF4TGVuZ3RoKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWF4UHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5pbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWluaW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1pbkl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5MZW5ndGggKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5taW5MZW5ndGgoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWluUHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbXVsdGlwbGVPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm11bHRpcGxlT2YoKSkge1xuICAgICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG5vdCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEubm90KCkpIHtcbiAgICAgIGNvbnN0IG5vdEVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgb25lT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcblxuICAgICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHBhdHRlcm4gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuKCkpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cbiAgICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHByb3BlcnR5TmFtZVxuXG4gICAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgICBzdGFydHZhbDogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXF1aXJlZCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnJlcXVpcmVkKCkpIHtcbiAgICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICB0eXBlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS50eXBlcygpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgdW5pcXVlSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRvciBmdW5jdGlvblxuICAgKi9cbiAgYWRkVmFsaWRhdG9yICh2YWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMucHVzaCh2YWxpZGF0b3IpXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdGhpc1t2YWxpZGF0b3JdKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IDVcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXSB8fCBzY2hlbWFbJ2RlZmluaXRpb25zJ11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIHRoaXMudHJhdmVyc2UodGhpcy5kZWZzKVxuICAgICAgdGhpcy50cmF2ZXJzZShzY2hlbWEpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJy4uLi5kZXJlZmVyZW5jZWQgc2NoZW1hJylcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzY2hlbWEsIG51bGwsIDIpKVxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjLyRkZWZzJykgfHwgcmVmLnN0YXJ0c1dpdGgoJyMvZGVmaW5pdGlvbnMnKSkge1xuICAgICAgY29uc3QgcmVmUGFydHMgPSByZWYuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZGVmTmFtZSA9IHJlZlBhcnRzLnBvcCgpXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZnNbZGVmTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZnNbZGVmTmFtZV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICB0cmF2ZXJzZSAodmFsdWUsIHRoaW5nLCBpbmRleCkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVsnJHJlZiddKSAmJiBpc1NldCh0aGluZykpIHtcbiAgICAgICAgdGhpbmdbaW5kZXhdID0gdGhpcy5kZWZpbmUodmFsdWVbJyRyZWYnXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4gdmFsdWUpIHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaW5kZXgpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMudHJhdmVyc2UodmFsdWVbaW5kZXhdLCB2YWx1ZSwgaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoaXRlbSwgdmFsdWUsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi90aGVtZXMvYmFyZWJvbmVzJ1xuaW1wb3J0IFRoZW1lV2lyZWZyYW1lIGZyb20gJy4vdGhlbWVzL3dpcmVmcmFtZSdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcblxuY2xhc3MgSmVkaSB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ3dpcmVmcmFtZSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYShvcHRpb25zLnNjaGVtYSlcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IFJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcigpXG4gICAgdGhpcy5lcnJvcnMgPSBbXVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3dpcmVmcmFtZSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVXaXJlZnJhbWUoKVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnR2YWwpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnR2YWwpXG4gICAgfVxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IHRoaXMudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC5jb250YWluZXIpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIHRoaXMucm9vdC5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfVxuICAgIHRoaXMuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZWRpdG9yIGluc3RhbmNlIGluIHRoZSBlZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgcmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBlZGl0b3JcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGVkaXRvciBpbnN0YW5jZSBmcm9tIHRoZSBlZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgdW5yZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGJhc2VkIG9uIHRoZSBwYXNzZWQgc2NoZW1hIGFuZCBjb25maWdcbiAgICovXG4gIGNyZWF0ZUVkaXRvciAoY29uZmlnKSB7XG4gICAgY29uc3QgRWRpdG9yQ2xhc3MgPSB0aGlzLnJlc29sdmVyLnJlc29sdmUoY29uZmlnLnNjaGVtYSlcbiAgICByZXR1cm4gbmV3IChFZGl0b3JDbGFzcykoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG5cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LmRpc2FibGUoKVxuICB9XG5cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QuZW5hYmxlKClcbiAgfVxuXG4gIHZhbGlkYXRlICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmVkaXRvcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3JzW2tleV1cbiAgICAgIHRoaXMuZXJyb3JzID0gWy4uLnRoaXMuZXJyb3JzLCAuLi5lZGl0b3IudmFsaWRhdGUoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0dmFsID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHNldFRoZW1lICh0aGVtZSkge1xuICAgIHRoaXMub3B0aW9ucy50aGVtZSA9IHRoZW1lXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzLmZpbmQobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=