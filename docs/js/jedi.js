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

  return createClass_default()(ThemeBootstrap5);
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
          schema = _objectSpread(_objectSpread({}, cloneSchema), schema); // merge allOf

          if (schema.allOf) {
            var merged = {};
            schema.allOf.forEach(function (allOfSchema) {
              merged = utils_mergeDeep(merged, allOfSchema);
            });
            schema = merged;
          }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2JhcmVib25lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy93aXJlZnJhbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWVCYXJlYm9uZXMiLCJjb25maWciLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwibWVzc2FnZSIsImFjdGlvbnNTbG90IiwiY2hpbGRFZGl0b3JzU2xvdCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsInZhbHVlIiwiY29udGFpbmVyIiwibWVzc2FnZXNTbG90IiwibGFiZWwiLCJsZWdlbmQiLCJpbnB1dCIsInR5cGUiLCJpZCIsImNoZWNrYm94IiwicmFkaW8iLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvblZhbHVlcyIsImZvckVhY2giLCJpbmRleCIsIm9wdGlvbiIsIm9wdGlvbnNMYWJlbHMiLCJhcHBlbmRDaGlsZCIsIlRoZW1lV2lyZWZyYW1lIiwiYnRuR3JvdXAiLCJmaWVsZHNldCIsImNoZWNrYm94Q29udGFpbmVyIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVxdWFsIiwiYSIsImIiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJpc1NldCIsImlzTm90U2V0IiwiaXNOdW1iZXIiLCJpc0ludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJpc1N0cmluZyIsImlzQm9vbGVhbiIsImlzQXJyYXkiLCJBcnJheSIsImlzT2JqZWN0IiwiZ2V0VHlwZSIsInV1aWR2NCIsInY0IiwibWVyZ2VEZWVwIiwidGFyZ2V0Iiwic291cmNlcyIsImxlbmd0aCIsInNvdXJjZSIsInNoaWZ0Iiwia2V5IiwiT2JqZWN0IiwiYXNzaWduIiwiRWRpdG9yIiwiamVkaSIsInNjaGVtYSIsImRpc2FibGVkIiwidW5kZWZpbmVkIiwicGF0aCIsInBhcmVudCIsInRoZW1lIiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZEVkaXRvcnNTbG90IiwiY2hpbGRFZGl0b3JzIiwiaW5pdCIsInJlZ2lzdGVyIiwic2V0RGVmYXVsdFZhbHVlIiwic2V0Q29udGFpbmVyIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsInByZXBhcmUiLCJidWlsZCIsInJlZnJlc2hVSSIsInJlYWR5Iiwib3B0aW9ucyIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsInNwbGl0IiwicG9wIiwiZ2V0Q29udGFpbmVyIiwicmVnaXN0ZXJFZGl0b3IiLCJ1bnJlZ2lzdGVyRWRpdG9yIiwiaW5jbHVkZXMiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwic2FuaXRpemUiLCJvbkNoYW5nZSIsIm9uU2V0VmFsdWUiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0ZSIsImdldFZhbHVlIiwiZ2V0S2V5IiwiZXJyb3JzIiwiaW5uZXJIVE1MIiwiZ2V0SW5wdXRFcnJvciIsIm9uQ2hpbGRFZGl0b3JDaGFuZ2UiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ1bnJlZ2lzdGVyIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU2NoZW1hIiwiYWxsT2YiLCJhbnlPZiIsImRlcGVuZGVudFJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsIml0ZW1zIiwibWF4aW11bSIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90IiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlcXVpcmVkIiwiU2V0IiwidGhlbiIsInRpdGxlIiwidHlwZUlzIiwib25lT2YiLCJ1bmlxdWVJdGVtcyIsIkFycmF5RWRpdG9yIiwiZ2V0QnRuR3JvdXAiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsIndpbmRvdyIsImNvbmZpcm0iLCJzZXRWYWx1ZSIsImdldEZpZWxkc2V0IiwiZ2V0TGVnZW5kIiwiZ2V0RGVzY3JpcHRpb24iLCJpdGVtRWRpdG9yIiwiY3JlYXRlRWRpdG9yIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1FZGl0b3IiLCJwdXNoIiwiZGVzdHJveSIsImN1cnJlbnRWYWx1ZSIsImZpbHRlciIsImNoaWxkRWRpdG9yIiwiZWRpdG9yIiwiaXRlbVZhbHVlIiwiYnV0dG9ucyIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRCdXR0b25zIiwiY29uY2F0IiwiZGlzYWJsZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkJvb2xlYW5FZGl0b3IiLCJnZXRDaGVja2JveENvbnRhaW5lciIsImdldENoZWNrYm94TGFiZWwiLCJnZXRDaGVja2JveCIsImNoZWNrZWQiLCJCb29sZWFuIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRMYWJlbCIsImdldFNlbGVjdCIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJyYWRpb0NvbnRhaW5lciIsImdldFJhZGlvQ29udGFpbmVyIiwiZ2V0UmFkaW8iLCJyYWRpb1ZhbHVlIiwicXVlcnlTZWxlY3RvciIsInJhZGlvSW5wdXRzIiwiT2JqZWN0RWRpdG9yIiwic2hvd1JlcXVpcmVkT25seSIsImlzTm90UmVxdWlyZWQiLCJwcm9wZXJ0eSIsImFkZENoaWxkRWRpdG9yIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImVkaXRhYmxlUHJvcGVydGllcyIsImdldElucHV0IiwibWlzc2luZ1Byb3BlcnRpZXMiLCJrZXlzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwibm90UmVxdWlyZWQiLCJpc1JlcXVpcmVkIiwibm90RGVwZW5kZW50UmVxdWlyZWQiLCJyZW1vdmVCdG4iLCJpIiwiZmluZCIsImRlbGV0ZUNoaWxkRWRpdG9yIiwiZ2V0Q2hpbGRFZGl0b3IiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIlN0cmluZ0VkaXRvciIsImZvcm1hdElzIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhIiwiU3RyaW5nIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIk11bHRpcGxlRWRpdG9yIiwiZWRpdG9ycyIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiYWN0aXZlRWRpdG9yIiwibGFzdEluZGV4Iiwic2NoZW1hcyIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInR5cGVzIiwic2NoZW1hQ2xvbmUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibWFwIiwic3dpdGNoZXJCdXR0b25zIiwic3dpdGNoZXIiLCJzd2l0Y2hFZGl0b3IiLCJuZXdJbmRleCIsIm9sZEVkaXRvciIsImdldEJ1dHRvbkFjdGl2ZUNsYXNzIiwicmVtb3ZlIiwibWF0Y2hFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiTnVsbEVkaXRvciIsIlJlc29sdmVyIiwicmVzb2x2ZXJzIiwicmVzb2x2ZSIsIm9yaWdpbmFsU2NoZW1hIiwibmV3U2NoZW1hIiwidHlwZUlzTnVtZXJpYyIsInJlc29sdmVyIiwidW5zaGlmdCIsImVkaXRvckNsYXNzIiwiVmFsaWRhdG9yIiwidmFsaWRhdG9ycyIsImFsbE9mRXJyb3JzIiwidmFsaWQiLCJzb21lIiwiYW55T2ZFcnJvcnMiLCJmaWVsZCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImpvaW4iLCJlIiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwicmVnZXhwIiwiUmVnRXhwIiwidGVzdCIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0dmFsIiwiaWZFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByb3BlcnRpZXNDb3VudCIsImlzTXVsdGlwbGVPZiIsIm5vdEVycm9ycyIsImNvdW50ZXIiLCJvbmVPZkVycm9ycyIsInByb3BlcnR5TmFtZSIsInN0cmluZyIsIm51bWJlciIsImludGVnZXIiLCJhcnJheSIsIm9iamVjdCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJzY2hlbWFFcnJvcnMiLCJ2YWxpZGF0b3JFcnJvcnMiLCJSZWZQYXJzZXIiLCJpdGVyYXRpb25zIiwiZGVmcyIsInRyYXZlcnNlIiwicmVmIiwic3RhcnRzV2l0aCIsInJlZlBhcnRzIiwiZGVmTmFtZSIsImRlZmluZSIsInJvb3QiLCJsaXN0ZW5lcnMiLCJyZWZQYXJzZXIiLCJkZXJlZmVyZW5jZSIsImhpZGRlbklucHV0IiwiZW1pdCIsImFyZ3VtZW50cyIsInJlc2V0IiwibmFtZSIsImNhbGxiYWNrIiwibGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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S0FBckI7TUFDQSxLQUFLeVAsS0FBTDtJQUNEOzs7V0FFRCxZQUFJQyxJQUFKLEVBQVVDLFFBQVYsRUFBb0I7TUFDbEIsS0FBS1IsU0FBTCxDQUFlaEosSUFBZixDQUFvQjtRQUFFdUosSUFBSSxFQUFKQSxJQUFGO1FBQVFDLFFBQVEsRUFBUkE7TUFBUixDQUFwQjtJQUNEOzs7V0FFRCxjQUFNRCxJQUFOLEVBQVk7TUFDVixJQUFNRSxRQUFRLEdBQUcsS0FBS1QsU0FBTCxDQUFlakcsSUFBZixDQUFvQixVQUFBMEcsUUFBUTtRQUFBLE9BQUlBLFFBQVEsQ0FBQ0YsSUFBVCxLQUFrQkEsSUFBdEI7TUFBQSxDQUE1QixDQUFqQjs7TUFFQSxJQUFJRSxRQUFKLEVBQWM7UUFDWkEsUUFBUSxDQUFDRCxRQUFUO01BQ0Q7SUFDRjs7O1dBRUQsbUJBQVc7TUFBQTs7TUFDVCxLQUFLVCxJQUFMLENBQVU5SSxPQUFWO01BRUEsS0FBS25LLFNBQUwsQ0FBZWdHLFNBQWYsR0FBMkIsRUFBM0I7TUFFQTFDLE1BQU0sQ0FBQ29KLElBQVAsQ0FBWSxJQUFaLEVBQWtCOUwsT0FBbEIsQ0FBMEIsVUFBQ3lDLEdBQUQsRUFBUztRQUNqQyxPQUFPLE1BQUksQ0FBQ0EsR0FBRCxDQUFYO01BQ0QsQ0FGRDtJQUdEOzs7Ozs7QUFHWStOLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcbiIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImNsYXNzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0SW5wdXRFcnJvciAoY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBhY3Rpb25zU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWN0aW9uc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBhY3Rpb25zU2xvdFxuICB9XG5cbiAgZ2V0Q2hpbGRFZGl0b3JzU2xvdCAoKSB7XG4gICAgY29uc3QgY2hpbGRFZGl0b3JzU2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hpbGRFZGl0b3JzU2xvdC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGNoaWxkRWRpdG9yc1Nsb3RcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLWluZm8nXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgbWVzc2FnZXNTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlc1Nsb3QuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gbWVzc2FnZXNTbG90XG4gIH1cblxuICBnZXRDaGVja2JveExhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvTGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiBhdXRvOycpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0SW5wdXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gdGV4dGFyZWFcbiAgfVxuXG4gIGdldFNlbGVjdCAoY29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lV2lyZWZyYW1lIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRJbnB1dEVycm9yIChjb25maWcpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBidG5Hcm91cFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hMYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveCAoY29uZmlnKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBjaGVja2JveFxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlubGluZScpXG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyXG4gIH1cblxuICBnZXRSYWRpb0xhYmVsIChjb25maWcpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5mb3IpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldFJhZGlvIChjb25maWcpIHtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICByYWRpby5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjb25maWcudmFsdWUpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gcmFkaW9cbiAgfVxuXG4gIGdldFRleHRhcmVhIChjb25maWcpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHRleHRhcmVhXG4gIH1cblxuICBnZXRTZWxlY3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBjb25maWcub3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVdpcmVmcmFtZVxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldElucHV0RXJyb3IgKGNvbmZpZykge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGJ0bkdyb3VwXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldENoZWNrYm94TGFiZWwgKGNvbmZpZykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmZvcilcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0UmFkaW9MYWJlbCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuZm9yKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lclxuICB9XG5cbiAgZ2V0UmFkaW9Db250YWluZXIgKCkge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbiAgfVxuXG4gIGdldENoZWNrYm94IChjb25maWcpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGNoZWNrYm94XG4gIH1cblxuICBnZXRSYWRpbyAoY29uZmlnKSB7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29uZmlnLnZhbHVlKVxuICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIHJhZGlvXG4gIH1cblxuICBnZXRUZXh0YXJlYSAoY29uZmlnKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB0ZXh0YXJlYVxuICB9XG5cbiAgZ2V0U2VsZWN0IChjb25maWcpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgY29uZmlnLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLm9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4vYm9vdHN0cmFwNCdcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCb290c3RyYXA0IHt9XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJ1xuXG5leHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBkaWZmZXJlbnQgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgIT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbmV4cG9ydCBjb25zdCBpc051bGwgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1NldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOb3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnaW50ZWdlcidcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ3N0cmluZydcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgdHlwZSA9ICdib29sZWFuJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSdcbiAgfSBlbHNlIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudWxsJ1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnb2JqZWN0J1xuICB9XG5cbiAgcmV0dXJuIHR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IHV1aWR2NCA9ICgpID0+IHtcbiAgcmV0dXJuIHY0KClcbn1cblxuZXhwb3J0IGNvbnN0IG1lcmdlRGVlcCA9ICh0YXJnZXQsIC4uLnNvdXJjZXMpID0+IHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldFxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cbiIsImNsYXNzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgJ3Jvb3QnXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMuamVkaS50aGVtZS5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QgPSB0aGlzLmplZGkudGhlbWUuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdCA9IHRoaXMuamVkaS50aGVtZS5nZXRDaGlsZEVkaXRvcnNTbG90KClcbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGJ1aWxkIHBpcGVsaW5lIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICBpZiAodGhpcy5qZWRpLnJlYWR5IHx8IHRoaXMuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cbiAgfVxuXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldENvbnRhaW5lcigpXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMucGF0aClcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge31cblxuICAvKipcbiAgICogYnVpbGQgdGhlIGVkaXRvcidzIHVzZXIgaW50ZXJmYWNlXG4gICAqL1xuICBidWlsZCAoKSB7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGlzIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgamVkaS5lZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3RlckVkaXRvcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgamVkaS5lZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBzY2hlbWEuZGVmYXVsdCBpcyBub3QgZGVmaW5lZCwgc2V0cyBhbiBpbml0aWFsIHZhbHVlIGJhc2VkIG9uIGl0J3MgdHlwZS5cbiAgICovXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgdmFsdWVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVkaXRvciB2YWx1ZSBhbmQgY2FsbHMgcmVmcmVzaFVJIHJpZ2h0IGFmdGVyLiBUaGUgb25DaGFuZ2UgbWV0aG9kXG4gICAqIHdpbGwgYmUgY2FsbGVkIHVubGVzcyB0cmlnZ2Vyc0NoYW5nZSBpcyBleHBsaWNpdGx5IHNldCB0byBmYWxzZS4gVGhpcyBpc1xuICAgKiB1c2VmdWwgZm9yIGluaXRpYWwgb3IgZGVmYXVsdCB2YWx1ZXMuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgfVxuXG4gICAgdGhpcy5vblNldFZhbHVlKClcblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBVSSBvZiB0aGUgZWRpdG9yIHRvIHJlZmxlY3QgaXQncyB2YWx1ZS4gVGhpcyBpcyBuZWNlc3Nhcnkgd2hlblxuICAgKiB1c2luZyBzZXRWYWx1ZSB0byBzZXQgdGhlIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIHZhbGlkYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlKClcblxuICAgIHRoaXMubWVzc2FnZXNTbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZXNTbG90LmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dEVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge31cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGVkaXRvciBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2UgKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQub25DaGlsZEVkaXRvckNoYW5nZSgpXG4gICAgfVxuXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgYSBjaGlsZCBlZGl0b3IgY2hhbmdlcy4gVGhpcyBpcyByZWxldmFudCBmb3IgQXJyYXlcbiAgICogYW5kIE9iamVjdCBlZGl0b3JzLlxuICAgKi9cbiAgb25DaGlsZEVkaXRvckNoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvciwgYW5kIGV2ZXJ5IHJlZmVyZW5jZSB0aGF0IGl0IGlzIGF0dGFjaGVkIHRvIGl0LlxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIGtleSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiBmYWxzZVxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29uc3QgPyB0aGlzLnNjaGVtYS5jb25zdCA6IGZhbHNlXG4gIH1cblxuICBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKVxuICB9XG5cbiAgZGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlZmF1bHQgPyB0aGlzLnNjaGVtYS5kZWZhdWx0IDogZmFsc2VcbiAgfVxuXG4gIGRlcGVuZGVudFJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiBmYWxzZVxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IGZhbHNlXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZWxzZSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogZmFsc2VcbiAgfVxuXG4gIGVudW0gKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLmVudW0pICYmIHRoaXMuc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVudW1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiBmYWxzZVxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IGZhbHNlXG4gIH1cblxuICBmb3JtYXQgKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogZmFsc2VcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy5mb3JtYXQoKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpID8gdGhpcy5zY2hlbWEuaWYgOiBmYWxzZVxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IGZhbHNlXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IGZhbHNlXG4gIH1cblxuICBtYXhJdGVtcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhJdGVtcykgJiYgdGhpcy5zY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogZmFsc2VcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5ub3QpID8gdGhpcy5zY2hlbWEubm90IDogZmFsc2VcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IGZhbHNlXG4gIH1cblxuICBwYXR0ZXJuUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogZmFsc2VcbiAgfVxuXG4gIHByb3BlcnR5IChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzICYmIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA6IGZhbHNlXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEucHJvcGVydGllcyA/IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgOiBmYWxzZVxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiBmYWxzZVxuICB9XG5cbiAgdGhlbiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pID8gdGhpcy5zY2hlbWEudGhlbiA6IGZhbHNlXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogZmFsc2VcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdHlwZUlzICh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy50eXBlKCkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZXMgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IGZhbHNlXG4gIH1cblxuICB1bmlxdWVJdGVtcyAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS51bmlxdWVJdGVtcykgPyB0aGlzLnNjaGVtYS51bmlxdWVJdGVtcyA6IGZhbHNlXG4gIH1cblxuICBzZXJpYWxpemUgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIGtleSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2hlbWFcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9zY2hlbWEnXG5pbXBvcnQgeyBnZXRUeXBlLCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkRWRpdG9yc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nXG4gICAgfSlcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmFkZEJ0bilcbiAgICB0aGlzLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIC8vIGRlbGV0ZUFsbFxuICAgIHRoaXMuZGVsZXRlQWxsQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtcydcbiAgICB9KVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5jb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlbUVkaXRvciAodmFsdWUpIHtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5pdGVtcygpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHsgdHlwZTogZ2V0VHlwZSh2YWx1ZSkgfVxuXG4gICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmplZGkudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FZGl0b3IuYWN0aW9uc1Nsb3QpXG4gICAgaXRlbUVkaXRvci5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLmdldEtleSgpKVxuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgIH0pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgIHRoaXMuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgdXAnXG4gICAgICB9KVxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgICB9KVxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1FZGl0b3JcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZScpKSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcihpdGVtVmFsdWUpXG4gICAgICBpdGVtRWRpdG9yLnNldFZhbHVlKGl0ZW1WYWx1ZSwgZmFsc2UpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGl0ZW1FZGl0b3IpXG5cbiAgICAgIGxldCBidXR0b25zID0gQXJyYXkuZnJvbSh0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSlcblxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRCdXR0b25zID0gQXJyYXkuZnJvbShjaGlsZEVkaXRvci5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpXG4gICAgICAgIGJ1dHRvbnMgPSBidXR0b25zLmNvbmNhdChjaGlsZEJ1dHRvbnMpXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBpdGVtRWRpdG9yLmRpc2FibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1FZGl0b3IuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNTbG90LmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuZGVsZXRlQWxsQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuZGVsZXRlQWxsQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgY2hpbGRFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGNoZWNrYm94IGNvbnRhaW5lclxuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldENoZWNrYm94Q29udGFpbmVyKClcblxuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q2hlY2tib3hMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldENoZWNrYm94KHtcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKVxuICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIHRoaXMub3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMub3B0aW9uVmFsdWVzXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG5cbiAgICAvLyBmaWVsZHNldFxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5qZWRpLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcblxuICAgIC8vIGxlZ2VuZFxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gcmFkaW9zXG4gICAgdGhpcy5vcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAvLyByYWRpbyBjb250YWluZXJcbiAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvQ29udGFpbmVyKClcblxuICAgICAgLy8gcmFkaW9cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogdGhpcy5wYXRoICsgJy4nICsgaW5kZXhcbiAgICAgIH0pXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpbylcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIH0pKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdmaWVsZHNldCcpXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSBmaWVsZHNldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXG5cbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmdldFZhbHVlKClcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL3NjaGVtYSdcbmltcG9ydCB7IGVxdWFsLCBpc1NldCwgZ2V0VHlwZSwgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgLy8gY2hpbGQgZWRpdG9yc1xuICAgIGlmICh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCksIGtleSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvd1JlcXVpcmVkT25seSA9IHRoaXMuamVkaS5vcHRpb25zLnNob3dSZXF1aXJlZE9ubHkgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdzaG93UmVxdWlyZWRPbmx5JylcbiAgICAgICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLnNjaGVtYS5yZXF1aXJlZCgpIHx8ICF0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKGtleSlcblxuICAgICAgICBpZiAoc2hvd1JlcXVpcmVkT25seSAmJiBpc05vdFJlcXVpcmVkKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnR5KGtleSlcbiAgICAgICAgdGhpcy5hZGRDaGlsZEVkaXRvcihzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgZGVwZW5kZW50IHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5zY2hlbWEucHJvcGVydGllcygpLCBrZXkpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRGVwZW5kZW50UmVxdWlyZWQoa2V5KSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnR5KGtleSlcbiAgICAgICAgICB0aGlzLmFkZENoaWxkRWRpdG9yKHNjaGVtYSwga2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2hpbGRFZGl0b3JzU2xvdClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuXG4gICAgLy8gYWRkQnRuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydHkgTmFtZScsXG4gICAgICAgIGZvcjogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyB0aGlzLnBhdGhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgdGhpcy5wYXRoXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcblxuICAgICAgY29uc3QgYWRkQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgICAgfSlcblxuICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBpbnB1dC52YWx1ZVxuXG4gICAgICAgIC8vIGlmIG5vdCBwcm9wZXJ0eSBuYW1lIHdhcyBnaXZlbiByZXR1cm5cbiAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHByb3BlcnR5IGV4aXN0IHJldHVyblxuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZEVkaXRvcih7IHR5cGU6ICdhbnknIH0sIGtleSlcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKVxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClcblxuICAgIGlmIChkZXBlbmRlbnRSZXF1aXJlZCkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGFkZENoaWxkRWRpdG9yIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBuZXcgU2NoZW1hKHNjaGVtYSksXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgLy8gcmVtb3ZlQnRuXG4gICAgY29uc3Qgbm90UmVxdWlyZWQgPSAhdGhpcy5pc1JlcXVpcmVkKGtleSlcbiAgICBjb25zdCBub3REZXBlbmRlbnRSZXF1aXJlZCA9ICF0aGlzLmlzRGVwZW5kZW50UmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IGVkaXRhYmxlUHJvcGVydGllcyA9IHRoaXMuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpXG5cbiAgICBpZiAobm90UmVxdWlyZWQgJiYgbm90RGVwZW5kZW50UmVxdWlyZWQgJiYgZWRpdGFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICBjb25zdCByZW1vdmVCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdSZW1vdmUgcHJvcGVydHknXG4gICAgICB9KVxuICAgICAgZWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlW2tleV1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBlZGl0b3IuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVsZXRlQ2hpbGRFZGl0b3IgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5jaGlsZEVkaXRvcnNbaV1cbiAgICAgIGlmIChlZGl0b3IuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnNwbGljZShpLCAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB2YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV0gPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBnZXRDaGlsZEVkaXRvciAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFZGl0b3JzLmZpbmQoKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBjaGlsZEVkaXRvci5nZXRLZXkoKS5zcGxpdCgnLicpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5jaGlsZEVkaXRvcnNbaV1cbiAgICAgIGNvbnN0IGtleSA9IGVkaXRvci5nZXRLZXkoKVxuICAgICAgaWYgKCFpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkRWRpdG9yKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGRFZGl0b3IgPSB0aGlzLmdldENoaWxkRWRpdG9yKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgZWRpdG9yXG4gICAgICBpZiAoY2hpbGRFZGl0b3IpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGRFZGl0b3IuZ2V0S2V5KCldXG5cbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHZhbHVlIGlmIHRoZSBvbGQgdmFsdWUgYW5kIHRoZSBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoIWVxdWFsKG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGlsZEVkaXRvci5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY2hpbGQgZWRpdG9yIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRFZGl0b3Ioc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkRWRpdG9yID0gdGhpcy5nZXRDaGlsZEVkaXRvcihrZXkpXG5cbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzU2xvdC5hcHBlbmRDaGlsZChjaGlsZEVkaXRvci5jb250YWluZXIpXG5cbiAgICAgIGlmIChjaGlsZEVkaXRvcikge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkRWRpdG9yLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkRWRpdG9yLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldEZpZWxkc2V0KClcblxuICAgIC8vIHRpdGxlXG4gICAgaWYgKCF0aGlzLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgICAgfSkpXG5cbiAgICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICBjaGlsZEVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIH1cblxuICAgIC8vIGlucHV0XG4gICAgLy8gdG9kbyBmaWxlLCByYW5nZSBzaG91bGQgYmUgaGFuZGxlZCBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0VGV4dGFyZWEoe1xuICAgICAgICBpZDogdGhpcy5wYXRoXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLnNjaGVtYS5mb3JtYXQoKSkgPyB0aGlzLnNjaGVtYS5mb3JtYXQoKSA6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IHRoaXMucGF0aFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKCkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5vcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtKClcbiAgICB0aGlzLm9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLm9wdGlvblZhbHVlc1xuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gbGFiZWxcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgZm9yOiB0aGlzLnBhdGgsXG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KHtcbiAgICAgIG9wdGlvblZhbHVlczogdGhpcy5vcHRpb25WYWx1ZXMsXG4gICAgICBvcHRpb25zTGFiZWxzOiB0aGlzLm9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5vcHRpb25WYWx1ZXNbMF1cbiAgICAvL1xuICAgIC8vIGlmIChmaXJzdE9wdGlvbikge1xuICAgIC8vICAgdGhpcy5zZXRWYWx1ZShmaXJzdE9wdGlvbiwgZmFsc2UpXG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGZpZWxkc2V0XG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuXG4gICAgLy8gbGVnZW5kXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICByYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoe1xuICAgICAgICBmb3I6IHRoaXMucGF0aCArICcuJyArIGluZGV4LFxuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5vcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgfSkpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gY29uc3QgZmlyc3RPcHRpb24gPSB0aGlzLm9wdGlvblZhbHVlc1swXVxuICAgIC8vXG4gICAgLy8gaWYgKGZpcnN0T3B0aW9uKSB7XG4gICAgLy8gICB0aGlzLnNldFZhbHVlKGZpcnN0T3B0aW9uLCBmYWxzZSlcbiAgICAvLyB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKVxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gZmllbGRzZXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxuXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQsIGVxdWFsLCBtZXJnZURlZXAgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmVkaXRvcnMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuXG4gICAgbGV0IHNjaGVtYXMgPSBbXVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmFueU9mKCkgfHwgdGhpcy5zY2hlbWEub25lT2YoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gdGhpcy5zY2hlbWEuYW55T2YoKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChzY2hlbWEuYWxsT2YpIHtcbiAgICAgICAgICBsZXQgbWVyZ2VkID0ge31cblxuICAgICAgICAgIHNjaGVtYS5hbGxPZi5mb3JFYWNoKChhbGxPZlNjaGVtYSkgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VEZWVwKG1lcmdlZCwgYWxsT2ZTY2hlbWEpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHNjaGVtYSA9IG1lcmdlZFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS50aXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuICAgICAgICBzY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVzKCkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuICAgICAgICBzY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcblxuICAgICAgc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCguLi5zY2hlbWFzLm1hcCgoc2NoZW1hKSA9PiBzY2hlbWEudGl0bGUpKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycsIHRpdGxlOiAnU3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicsIHRpdGxlOiAnTnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInLCB0aXRsZTogJ0ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicsIHRpdGxlOiAnQm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScsIHRpdGxlOiAnQXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JywgdGl0bGU6ICdPYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcsIHRpdGxlOiAnTnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goLi4uc2NoZW1hcy5tYXAoKHNjaGVtYSkgPT4gc2NoZW1hLnRpdGxlKSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gRWRpdG9yc1xuICAgIHNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IG5ldyBTY2hlbWEoc2NoZW1hKSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBlZGl0b3IudW5yZWdpc3RlcigpXG5cbiAgICAgIGVkaXRvci5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuICB9XG5cbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gc3dpdGNoZXIgYnV0dG9uc1xuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zID0gW11cbiAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICB0aGlzLnN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGJ1dHRvblxuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1tpbmRleF0sXG4gICAgICAgIHZhbHVlOiBpbmRleFxuICAgICAgfSlcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihidXR0b24udmFsdWUpXG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdG9yKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICB0aGlzLnN3aXRjaGVyQnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlcilcblxuICAgIGlmIChpc1NldCh0aGlzLmVkaXRvcnNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEVkaXRvcigwLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hFZGl0b3IgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUVkaXRvciA9IHRoaXMuZWRpdG9yc1t0aGlzLmluZGV4XVxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ211bHRpcGxlJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRFZGl0b3IgPSB0aGlzLmVkaXRvcnNbdGhpcy5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkRWRpdG9yLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRFZGl0b3IuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYWN0aXZlRWRpdG9yLmNvbnRhaW5lcilcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZUVkaXRvci5kaXNhYmxlKClcbiAgICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUVkaXRvci5lbmFibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoZXJCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKChOdW1iZXIoYnV0dG9uLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5kZXgpKSkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uQWN0aXZlQ2xhc3MoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b25BY3RpdmVDbGFzcygpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRWRpdG9yLmdldFZhbHVlKClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUVkaXRvci5zYW5pdGl6ZSh2YWx1ZSlcbiAgfVxuXG4gIG1hdGNoRWRpdG9yICh2YWx1ZSwgZWRpdG9ycykge1xuICAgIGxldCBpbmRleCA9IDBcblxuICAgIGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcbiAgICAgIGlmIChlZGl0b3IuZWRpdG9ycykge1xuICAgICAgICBlZGl0b3Iuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChlcXVhbChlZGl0b3Iuc2FuaXRpemUodmFsdWUpLCB2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hFZGl0b3IoaW5kZXgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSAodmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBlZGl0b3IgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBlZGl0b3IgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKCFlcXVhbCh0aGlzLmFjdGl2ZUVkaXRvci5zYW5pdGl6ZSh2YWx1ZSksIHZhbHVlKSkge1xuICAgICAgdGhpcy5tYXRjaEVkaXRvcih2YWx1ZSwgdGhpcy5lZGl0b3JzKVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlRWRpdG9yLnNldFZhbHVlKHZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSlcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5lZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGxhYmVsXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgIGZvcjogdGhpcy5wYXRoLFxuICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLnRpdGxlKCkgPyB0aGlzLnNjaGVtYS50aXRsZSgpIDogdGhpcy5nZXRLZXkoKVxuICAgIH0pKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGlmICh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbigpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmplZGkudGhlbWUuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh7XG4gICAgICBmb3I6IHRoaXMucGF0aCxcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLnNjaGVtYS50aXRsZSgpID8gdGhpcy5zY2hlbWEudGl0bGUoKSA6IHRoaXMuZ2V0S2V5KClcbiAgICB9KSlcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qoe1xuICAgICAgb3B0aW9uVmFsdWVzOiB0aGlzLm9wdGlvblZhbHVlcyxcbiAgICAgIG9wdGlvbnNMYWJlbHM6IHRoaXMub3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5vcHRpb25WYWx1ZXNbMF1cbiAgICAvL1xuICAgIC8vIGlmIChmaXJzdE9wdGlvbikge1xuICAgIC8vICAgdGhpcy5zZXRWYWx1ZShmaXJzdE9wdGlvbiwgZmFsc2UpXG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bSgpXG4gICAgdGhpcy5vcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5vcHRpb25WYWx1ZXNcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGZpZWxkc2V0XG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuXG4gICAgLy8gbGVnZW5kXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5zY2hlbWEudGl0bGUoKSA/IHRoaXMuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmdldEtleSgpXG4gICAgfSkpXG5cbiAgICAvLyByYWRpb3NcbiAgICB0aGlzLm9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHJhZGlvIGNvbnRhaW5lclxuICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9Db250YWluZXIoKVxuXG4gICAgICAvLyByYWRpb1xuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW8oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleFxuICAgICAgfSlcbiAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvKVxuXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuXG4gICAgICAvLyBsYWJlbFxuICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKHtcbiAgICAgICAgZm9yOiB0aGlzLnBhdGggKyAnLicgKyBpbmRleCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMub3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIH0pKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5vcHRpb25WYWx1ZXNbMF1cbiAgICAvL1xuICAgIC8vIGlmIChmaXJzdE9wdGlvbikge1xuICAgIC8vICAgdGhpcy5zZXRWYWx1ZShmaXJzdE9wdGlvbiwgZmFsc2UpXG4gICAgLy8gfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ZpZWxkc2V0JylcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IGZpZWxkc2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmdldFZhbHVlKCkpKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBpZiAodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24oKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5qZWRpLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IHsgaXNTZXQsIGdldFR5cGUsIG1lcmdlRGVlcCB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9tdWx0aXBsZSdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udWxsJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcblxuY2xhc3MgUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLmFsbE9mKCkpIHtcbiAgICAgICAgICBsZXQgbWVyZ2VkID0ge31cblxuICAgICAgICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEobWVyZ2VkKVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS5hbnlPZigpIHx8IHNjaGVtYS5vbmVPZigpIHx8IHNjaGVtYS50eXBlSXMoJ2FueScpIHx8IHNjaGVtYS50eXBlcygpIHx8ICFzY2hlbWEudHlwZSgpKSB7XG4gICAgICAgICAgaWYgKCFzY2hlbWEudHlwZSgpICYmIHNjaGVtYS5kZWZhdWx0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2NoZW1hID0gc2NoZW1hLmNsb25lKClcbiAgICAgICAgICAgIG9yaWdpbmFsU2NoZW1hLnR5cGUgPSBnZXRUeXBlKHNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgICAgICBjb25zdCBuZXdTY2hlbWEgPSBuZXcgU2NoZW1hKG9yaWdpbmFsU2NoZW1hKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShuZXdTY2hlbWEpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTXVsdGlwbGVFZGl0b3IoY29uZmlnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiBzY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgQm9vbGVhbkVkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RFZGl0b3IoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUVkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIHNjaGVtYS5lbnVtKCkgJiYgc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IoY29uZmlnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSwgY29uZmlnKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBzY2hlbWEuZW51bSgpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKGNvbmZpZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEsIGNvbmZpZykgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0VkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgc2NoZW1hLmVudW0oKSAmJiBzY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgc2NoZW1hLmVudW0oKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IE51bWJlckVkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hLCBjb25maWcpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlSXMoJ251bGwnKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgTnVsbEVkaXRvcihjb25maWcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHJlc29sdmVyIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRSZXNvbHZlciAocmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlc29sdmVycy51bnNoaWZ0KHJlc29sdmVyKVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChjb25maWcpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKGNvbmZpZy5zY2hlbWEsIGNvbmZpZylcbiAgICAgIGlmIChpc1NldChlZGl0b3JDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc29sdmVyXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IFtcbiAgICAgICdkZXBlbmRlbnRSZXF1aXJlZCcsXG4gICAgICAnZm9ybWF0JyxcbiAgICAgICdpZicsXG4gICAgICAnY29uc3QnLFxuICAgICAgJ25vdCcsXG4gICAgICAndHlwZScsXG4gICAgICAndW5pcXVlSXRlbXMnLFxuICAgICAgJ2V4Y2x1c2l2ZU1heGltdW0nLFxuICAgICAgJ2V4Y2x1c2l2ZU1pbmltdW0nLFxuICAgICAgJ21pbkl0ZW1zJyxcbiAgICAgICdtYXhJdGVtcycsXG4gICAgICAnbWluTGVuZ3RoJyxcbiAgICAgICdtYXhMZW5ndGgnLFxuICAgICAgJ21pbmltdW0nLFxuICAgICAgJ21heGltdW0nLFxuICAgICAgJ211bHRpcGxlT2YnLFxuICAgICAgJ3BhdHRlcm4nLFxuICAgICAgJ3BhdHRlcm5Qcm9wZXJ0aWVzJyxcbiAgICAgICdlbnVtJyxcbiAgICAgICdyZXF1aXJlZCcsXG4gICAgICAnbWluUHJvcGVydGllcycsXG4gICAgICAnbWF4UHJvcGVydGllcycsXG4gICAgICAnYWxsT2YnLFxuICAgICAgJ2FueU9mJyxcbiAgICAgICdvbmVPZidcbiAgICBdXG4gIH1cblxuICBhbGxPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmFsbE9mKCkpIHtcbiAgICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBhbGxPZkVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hKSwga2V5LCBwYXRoKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hbGxPZkVycm9yc11cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgYW55T2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmFueU9mKCkpIHtcbiAgICAgIGNvbnN0IHZhbGlkID0gc2NoZW1hLmFueU9mKCkuc29tZSgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEpLCBrZXksIHBhdGgpXG4gICAgICAgIHJldHVybiBhbnlPZkVycm9ycy5sZW5ndGggPT09IDBcbiAgICAgIH0pXG5cbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyAgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGNvbnN0ICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5jb25zdCgpKSB7XG4gICAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIHZhbHVlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBlbnVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5lbnVtKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkgLSAxKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBleGNsdXNpdmVNaW5pbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSAoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSArIDEpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgZm9ybWF0ICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXQoKSkge1xuICAgICAgbGV0IGludmFsaWQgPSBmYWxzZVxuXG4gICAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICAgIGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLmlmKCkpIHtcbiAgICAgIGlmICghc2NoZW1hLnRoZW4oKSB8fCAhc2NoZW1hLmVsc2UoKSkge1xuICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydHZhbDogdmFsdWUgfSlcbiAgICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuXG4gICAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnR2YWw6IHZhbHVlIH0pXG4gICAgICAgIGVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydHZhbDogdmFsdWUgfSlcbiAgICAgICAgZXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4aW11bSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm1heGltdW0oKSkge1xuICAgICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhJdGVtcyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiBzY2hlbWEubWF4SXRlbXMoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWEudGl0bGUoKSA/IHNjaGVtYS50aXRsZSgpIDoga2V5XG5cbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IGZpZWxkICsgJyBtdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWF4TGVuZ3RoICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBzY2hlbWEubWF4TGVuZ3RoKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtYXhQcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWF4UHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5pbXVtICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBzY2hlbWEubWluaW11bSgpKSB7XG4gICAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbWluSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLm1pbkl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5MZW5ndGggKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5taW5MZW5ndGgoKSkge1xuICAgICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBtaW5Qcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBzY2hlbWEubWluUHJvcGVydGllcygpKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgbXVsdGlwbGVPZiAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgc2NoZW1hLm11bHRpcGxlT2YoKSkge1xuICAgICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIG5vdCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChzY2hlbWEubm90KCkpIHtcbiAgICAgIGNvbnN0IG5vdEVycm9ycyA9IHRoaXMudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLm5vdCgpKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgb25lT2YgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoc2NoZW1hLm9uZU9mKCkpIHtcbiAgICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYSksIGtleSwgcGF0aClcblxuICAgICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHBhdHRlcm4gKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHNjaGVtYS5wYXR0ZXJuKCkpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgbXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpIHtcbiAgICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cbiAgICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHByb3BlcnR5TmFtZVxuXG4gICAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgICBzdGFydHZhbDogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICByZXF1aXJlZCAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgc2NoZW1hLnJlcXVpcmVkKCkpIHtcbiAgICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLnRpdGxlKCkgPyBzY2hlbWEudGl0bGUoKSA6IGtleVxuXG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBmaWVsZCArICcgIGlzIG1pc3NpbmcgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICB0eXBlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgaWYgKHNjaGVtYS50eXBlcygpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgdW5pcXVlSXRlbXMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpIHtcbiAgICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS50aXRsZSgpID8gc2NoZW1hLnRpdGxlKCkgOiBrZXlcblxuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZmllbGQgKyAnIG11c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRvciBmdW5jdGlvblxuICAgKi9cbiAgYWRkVmFsaWRhdG9yICh2YWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMucHVzaCh2YWxpZGF0b3IpXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdGhpc1t2YWxpZGF0b3JdKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IDVcbiAgICB0aGlzLmRlZnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIHRoaXMuZGVmcyA9IHNjaGVtYVsnJGRlZnMnXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgdGhpcy50cmF2ZXJzZSh0aGlzLmRlZnMpXG4gICAgICB0aGlzLnRyYXZlcnNlKHNjaGVtYSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIy8kZGVmcycpKSB7XG4gICAgICBjb25zdCByZWZQYXJ0cyA9IHJlZi5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZWZOYW1lID0gcmVmUGFydHMucG9wKClcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmc1tkZWZOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmc1tkZWZOYW1lXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIHRyYXZlcnNlICh2YWx1ZSwgdGhpbmcsIGluZGV4KSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlWyckcmVmJ10pICYmIGlzU2V0KHRoaW5nKSkge1xuICAgICAgICB0aGluZ1tpbmRleF0gPSB0aGlzLmRlZmluZSh2YWx1ZVsnJHJlZiddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBpbmRleCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy50cmF2ZXJzZSh2YWx1ZVtpbmRleF0sIHZhbHVlLCBpbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShpdGVtLCB2YWx1ZSwgaW5kZXgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZQYXJzZXJcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgVGhlbWVXaXJlZnJhbWUgZnJvbSAnLi90aGVtZXMvd2lyZWZyYW1lJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXInXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRvcidcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuXG5jbGFzcyBKZWRpIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnd2lyZWZyYW1lJ1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXIpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5lZGl0b3JzID0ge31cbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoKVxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYShvcHRpb25zLnNjaGVtYSlcbiAgICB0aGlzLmVycm9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdiYXJlYm9uZXMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnd2lyZWZyYW1lJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZVdpcmVmcmFtZSgpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5zY2hlbWEuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGFydHZhbCkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydHZhbClcbiAgICB9XG5cbiAgICB0aGlzLmhpZGRlbklucHV0ID0gdGhpcy50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgdGhpcy5yb290Lm9uQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9XG4gICAgdGhpcy5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlZGl0b3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIHBhc3NlZCBzY2hlbWEgYW5kIGNvbmZpZ1xuICAgKi9cbiAgY3JlYXRlRWRpdG9yIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlci5yZXNvbHZlKGNvbmZpZylcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIGdldEVkaXRvciAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvcnNbcGF0aF1cbiAgfVxuXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC5kaXNhYmxlKClcbiAgfVxuXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LmVuYWJsZSgpXG4gIH1cblxuICB2YWxpZGF0ZSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5lZGl0b3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yc1trZXldXG4gICAgICB0aGlzLmVycm9ycyA9IFsuLi50aGlzLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLmVycm9yc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMub3B0aW9ucy5zdGFydHZhbCA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudGhlbWUgPSB0aGVtZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVycy5maW5kKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9