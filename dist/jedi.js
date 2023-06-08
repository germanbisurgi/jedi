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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jedi.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/superPropBase.js");
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

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
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

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
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

/***/ "./src/editors/array.js":
/*!******************************!*\
  !*** ./src/editors/array.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* global confirm */



var ArrayEditor = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ArrayEditor, _Editor);
  var _super = _createSuper(ArrayEditor);
  function ArrayEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ArrayEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ArrayEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      this.control = this.theme.getArrayControl({
        title: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        description: this.instance.schema.description()
      });
      this.control.addBtn.addEventListener('click', function () {
        _this.instance.addItem();
      });
      this.control.deleteAllBtn.addEventListener('click', function () {
        if (confirm('Confirm to delete all')) {
          _this.instance.setValue([]);
        }
      });
      this.container.appendChild(this.control.container);
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(message) {
      return this.theme.getAlert({
        message: message
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isArray"])(value)) {
        return value;
      }
      return [];
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;
      this.control.childrenSlot.innerHTML = '';
      this.instance.children.forEach(function (child) {
        var itemIndex = Number(child.getKey());
        var childTitle = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(child.schema.title()) ? child.schema.title() : '';
        var arrayItem = _this2.theme.getArrayItem({
          legend: childTitle + ' ' + itemIndex,
          srOnly: true
        });
        arrayItem.childrenSlot.appendChild(child.ui.container);
        _this2.control.childrenSlot.appendChild(arrayItem.container);
        arrayItem.deleteBtn.addEventListener('click', function () {
          var itemIndex = Number(child.path.split(_this2.instance.jedi.pathSeparator).pop());
          _this2.instance.deleteItem(itemIndex);
        });
        arrayItem.moveUpBtn.addEventListener('click', function () {
          var toIndex = itemIndex - 1;
          _this2.instance.move(itemIndex, toIndex);
        });
        arrayItem.moveDownBtn.addEventListener('click', function () {
          var toIndex = itemIndex + 1;
          _this2.instance.move(itemIndex, toIndex);
        });
        var buttons = _this2.control.container.querySelectorAll('button');
        if (_this2.disabled) {
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
    }
  }]);
  return ArrayEditor;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ArrayEditor);

/***/ }),

/***/ "./src/editors/boolean-enum-radio.js":
/*!*******************************************!*\
  !*** ./src/editors/boolean-enum-radio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boolean */ "./src/editors/boolean.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var BooleanEnumRadioEditor = /*#__PURE__*/function (_BooleanEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BooleanEnumRadioEditor, _BooleanEditor);
  var _super = _createSuper(BooleanEnumRadioEditor);
  function BooleanEnumRadioEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BooleanEnumRadioEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BooleanEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      // control
      this.control = this.theme.getRadiosControl({
        values: ['false', 'true'],
        titles: this.instance.schema.option('enumTitles') || ['false', 'true'],
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });
      this.control.radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var radioValue = radio.value === 'true';
          _this.instance.setValue(radioValue);
        });
      });
      this.container.appendChild(this.control.container);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;
      this.control.radios.forEach(function (radio) {
        var radioValue = radio.value === 'true';
        radio.checked = radioValue === _this2.instance.getValue();
        radio.disabled = _this2.disabled;
      });
    }
  }]);
  return BooleanEnumRadioEditor;
}(_boolean__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (BooleanEnumRadioEditor);

/***/ }),

/***/ "./src/editors/boolean-enum-select.js":
/*!********************************************!*\
  !*** ./src/editors/boolean-enum-select.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boolean */ "./src/editors/boolean.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var BooleanEnumSelectEditor = /*#__PURE__*/function (_BooleanEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BooleanEnumSelectEditor, _BooleanEditor);
  var _super = _createSuper(BooleanEnumSelectEditor);
  function BooleanEnumSelectEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BooleanEnumSelectEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BooleanEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      // control
      this.control = this.theme.getSelectControl({
        values: ['false', 'true'],
        titles: this.instance.schema.option('enumTitles') || ['false', 'true'],
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });
      this.control.input.addEventListener('change', function () {
        var value = _this.control.input.value === 'true';
        _this.instance.setValue(value);
      });
      this.container.appendChild(this.control.container);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.control.input.value = this.instance.getValue() === true ? 'true' : 'false';
      if (this.disabled) {
        this.control.input.setAttribute('disabled', 'disabled');
      } else {
        this.control.input.removeAttribute('disabled');
      }
    }
  }]);
  return BooleanEnumSelectEditor;
}(_boolean__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (BooleanEnumSelectEditor);

/***/ }),

/***/ "./src/editors/boolean.js":
/*!********************************!*\
  !*** ./src/editors/boolean.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var BooleanEditor = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BooleanEditor, _Editor);
  var _super = _createSuper(BooleanEditor);
  function BooleanEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BooleanEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BooleanEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      this.control = this.theme.getCheckboxControl({
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.checked);
      });
      this.container.appendChild(this.control.container);
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return Boolean(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.control.input.checked = this.instance.getValue();
      if (this.disabled) {
        this.control.input.setAttribute('disabled', 'disabled');
      } else {
        this.control.input.removeAttribute('disabled');
      }
    }
  }]);
  return BooleanEditor;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (BooleanEditor);

/***/ }),

/***/ "./src/editors/editor.js":
/*!*******************************!*\
  !*** ./src/editors/editor.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event-emitter */ "./src/event-emitter.js");
/* harmony import */ var _themes_bootstrap3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../themes/bootstrap3 */ "./src/themes/bootstrap3.js");
/* harmony import */ var _themes_bootstrap4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../themes/bootstrap4 */ "./src/themes/bootstrap4.js");
/* harmony import */ var _themes_bootstrap5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../themes/bootstrap5 */ "./src/themes/bootstrap5.js");
/* harmony import */ var _themes_barebones__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../themes/barebones */ "./src/themes/barebones.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var Editor = /*#__PURE__*/function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Editor, _EventEmitter);
  var _super = _createSuper(Editor);
  function Editor(instance) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Editor);
    _this = _super.call(this);
    _this.instance = instance;
    _this.theme = null;
    _this.container = null;
    _this.control = null;
    _this.disabled = false;
    _this.init();
    _this.build();
    _this.setContainerAttributes();
    _this.refreshUI();
    if (_this.instance.jedi.options.alwaysShowErrors || _this.instance.schema.option('alwaysShowErrors')) {
      _this.showValidationErrors();
    }
    _this.instance.on('set-value', function () {
      _this.refreshUI();
      _this.showValidationErrors();
    });
    _this.instance.on('change', function () {
      _this.showValidationErrors();
    });
    return _this;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Editor, [{
    key: "init",
    value: function init() {
      switch (this.instance.jedi.options.theme) {
        case 'bootstrap3':
          this.theme = new _themes_bootstrap3__WEBPACK_IMPORTED_MODULE_6__["default"]();
          break;
        case 'bootstrap4':
          this.theme = new _themes_bootstrap4__WEBPACK_IMPORTED_MODULE_7__["default"]();
          break;
        case 'bootstrap5':
          this.theme = new _themes_bootstrap5__WEBPACK_IMPORTED_MODULE_8__["default"]();
          break;
        case 'barebones':
          this.theme = new _themes_barebones__WEBPACK_IMPORTED_MODULE_9__["default"]();
          break;
        default:
          this.theme = new _themes_barebones__WEBPACK_IMPORTED_MODULE_9__["default"]();
      }
      this.container = this.theme.getEditorContainer();
    }

    /**
     * Sets container attributes like data-path and data-type
     */
  }, {
    key: "setContainerAttributes",
    value: function setContainerAttributes() {
      this.container.setAttribute('data-path', this.instance.path);
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_10__["isSet"])(this.instance.schema.type())) {
        this.container.setAttribute('data-type', this.instance.schema.type());
      }
    }

    /**
     * Builds the editor control and appends it to the editor container
     */
  }, {
    key: "build",
    value: function build() {}

    /**
     * Updates control UI when its state changes
     */
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
      var errors = this.instance.getErrors();
      this.control.messages.innerHTML = '';
      errors.forEach(function (error) {
        var invalidFeedback = _this2.getInvalidFeedback(error.message);
        _this2.control.messages.appendChild(invalidFeedback);
      });
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(message) {
      return this.theme.getInvalidFeedback({
        message: message
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

    /**
     * Transforms the input value if necessary before value set
     */
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return value;
    }

    /**
     * Destroys the editor
     */
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
}(_event_emitter__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./src/editors/multiple.js":
/*!*********************************!*\
  !*** ./src/editors/multiple.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var MultipleEditor = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(MultipleEditor, _Editor);
  var _super = _createSuper(MultipleEditor);
  function MultipleEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MultipleEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MultipleEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      this.control = this.theme.getMultipleControl({
        title: 'Options',
        srOnly: this.instance.schema.option('hideTitle'),
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["pathToAttribute"])(this.instance.path),
        description: this.instance.schema.description(),
        switcherOptionValues: this.instance.switcherOptionValues,
        switcherOptionsLabels: this.instance.switcherOptionsLabels
      });
      this.control.switcher.input.addEventListener('change', function () {
        var index = Number(_this.control.switcher.input.value);
        _this.instance.switchInstance(index);
      });
      this.container.appendChild(this.control.container);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var oldInstance = this.instance.instances[this.instance.lastIndex];
      if (oldInstance.ui.container.parentNode) {
        this.control.childrenSlot.removeChild(oldInstance.ui.container);
      }
      this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.container);
      this.control.switcher.input.value = this.instance.index;
      var buttons = this.control.container.querySelectorAll('button');
      if (this.disabled) {
        this.instance.activeInstance.ui.disable();
        this.control.switcher.input.setAttribute('disabled', 'disabled');
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      } else {
        this.instance.activeInstance.ui.enable();
        this.control.switcher.input.removeAttribute('disabled', 'disabled');
        buttons.forEach(function (button) {
          button.disabled = false;
        });
      }
    }
  }, {
    key: "showValidationErrors",
    value: function showValidationErrors() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(MultipleEditor.prototype), "showValidationErrors", this).call(this);
      this.instance.activeInstance.ui.showValidationErrors();
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(message) {
      return this.theme.getAlert({
        message: message
      });
    }
  }]);
  return MultipleEditor;
}(_editor__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (MultipleEditor);

/***/ }),

/***/ "./src/editors/null.js":
/*!*****************************!*\
  !*** ./src/editors/null.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var NullEditor = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(NullEditor, _Editor);
  var _super = _createSuper(NullEditor);
  function NullEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NullEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NullEditor, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getNullControl({
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
        description: this.instance.schema.description()
      });
      this.container.appendChild(this.control.container);
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return null;
    }
  }]);
  return NullEditor;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (NullEditor);

/***/ }),

/***/ "./src/editors/number-enum-radio.js":
/*!******************************************!*\
  !*** ./src/editors/number-enum-radio.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number */ "./src/editors/number.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var NumberEnumRadioEditor = /*#__PURE__*/function (_NumberEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(NumberEnumRadioEditor, _NumberEditor);
  var _super = _createSuper(NumberEnumRadioEditor);
  function NumberEnumRadioEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NumberEnumRadioEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NumberEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      // control
      this.control = this.theme.getRadiosControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.instance.schema["enum"](),
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });
      this.control.radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var value = _this.sanitize(radio.value);
          _this.instance.setValue(value);
        });
      });
      this.container.appendChild(this.control.container);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;
      this.control.radios.forEach(function (radio) {
        radio.checked = Number(radio.value) === Number(_this2.instance.getValue());
        radio.disabled = _this2.disabled;
      });
    }
  }]);
  return NumberEnumRadioEditor;
}(_number__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (NumberEnumRadioEditor);

/***/ }),

/***/ "./src/editors/number-enum-select.js":
/*!*******************************************!*\
  !*** ./src/editors/number-enum-select.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number */ "./src/editors/number.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var NumberEnumSelectEditor = /*#__PURE__*/function (_NumberEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(NumberEnumSelectEditor, _NumberEditor);
  var _super = _createSuper(NumberEnumSelectEditor);
  function NumberEnumSelectEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NumberEnumSelectEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NumberEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      // control
      this.control = this.theme.getSelectControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.instance.schema["enum"](),
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });
      this.control.input.addEventListener('change', function () {
        var value = _this.sanitize(_this.control.input.value);
        _this.instance.setValue(value);
      });
      this.container.appendChild(this.control.container);
    }
  }]);
  return NumberEnumSelectEditor;
}(_number__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (NumberEnumSelectEditor);

/***/ }),

/***/ "./src/editors/number.js":
/*!*******************************!*\
  !*** ./src/editors/number.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var NumberEditor = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(NumberEditor, _Editor);
  var _super = _createSuper(NumberEditor);
  function NumberEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NumberEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NumberEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      this.control = this.theme.getInputControl({
        type: 'number',
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
        description: this.instance.schema.description()
      });
      this.control.input.addEventListener('change', function () {
        var value = _this.sanitize(_this.control.input.value);
        _this.instance.setValue(value);
      });
      this.container.appendChild(this.control.container);
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
      var value = this.instance.getValue();
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(value)) {
        this.control.input.value = this.instance.getValue();
      }
      if (this.disabled) {
        this.control.input.setAttribute('disabled', 'disabled');
      } else {
        this.control.input.removeAttribute('disabled');
      }
    }
  }]);
  return NumberEditor;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (NumberEditor);

/***/ }),

/***/ "./src/editors/object.js":
/*!*******************************!*\
  !*** ./src/editors/object.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var ObjectEditor = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ObjectEditor, _Editor);
  var _super = _createSuper(ObjectEditor);
  function ObjectEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ObjectEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ObjectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      this.control = this.theme.getObjectControl({
        title: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        description: this.instance.schema.description(),
        editableProperties: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.jedi.options.editableProperties, true) || Object(_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.schema.option('editableProperties'), true)
      });
      this.control.addPropertyBtn.addEventListener('click', function () {
        var key = _this.control.addPropertyControl.input.value;
        var propertyNameEmpty = key.length === 0;
        if (propertyNameEmpty) {
          return;
        }
        var propertyExist = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(_this.instance.value[key]);
        if (propertyExist) {
          return;
        }
        var schema = {
          type: 'any'
        };
        var additionalProperties = _this.instance.schema.additionalProperties();
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(additionalProperties)) {
          schema = additionalProperties;
        }
        var child = _this.instance.createChild(schema, key);
        child.activate();
        _this.instance.setValue(_this.instance.value);
        _this.control.addPropertyControl.input.value = '';
      });
      this.container.appendChild(this.control.container);
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(value)) {
        return value;
      }
      return {};
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(message) {
      return this.theme.getAlert({
        message: message
      });
    }
  }, {
    key: "refreshPropertiesSlot",
    value: function refreshPropertiesSlot() {
      var _this2 = this;
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.jedi.options.editableProperties, true) || Object(_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.schema.option('editableProperties'), true)) {
        while (this.control.propertiesActivators.firstChild) {
          this.control.propertiesActivators.removeChild(this.control.propertiesActivators.lastChild);
        }
        this.instance.children.forEach(function (child) {
          var id = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(child.path) + '-activator';
          var checboxControl = _this2.theme.getCheckboxControl({
            id: id,
            label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(child.schema.title()) ? child.schema.title() : child.getKey(),
            srOnly: false
          });
          var checkbox = checboxControl.input;
          checkbox.checked = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(_this2.instance.getValue(), child.getKey());
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
          });
          _this2.control.propertiesActivators.appendChild(checboxControl.container);
        });
      }
    }
  }, {
    key: "refreshEditors",
    value: function refreshEditors() {
      var _this3 = this;
      while (this.control.childrenSlot.firstChild) {
        this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
      }
      this.instance.children.forEach(function (child) {
        if (child.isActive) {
          _this3.control.childrenSlot.appendChild(child.ui.container);
          if (_this3.disabled) {
            child.ui.disable();
          } else {
            child.ui.enable();
          }
        }
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.refreshPropertiesSlot();
      this.refreshEditors();
      if (this.disabled) {
        this.control.propertiesToggle.setAttribute('disabled', 'disabled');
        this.control.addPropertyBtn.setAttribute('disabled', 'disabled');
        this.control.addPropertyControl.input.setAttribute('disabled', 'disabled');
      } else {
        this.control.propertiesToggle.removeAttribute('disabled');
        this.control.addPropertyBtn.removeAttribute('disabled');
        this.control.addPropertyControl.input.removeAttribute('disabled');
      }
    }
  }]);
  return ObjectEditor;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ObjectEditor);

/***/ }),

/***/ "./src/editors/string-enum-radio.js":
/*!******************************************!*\
  !*** ./src/editors/string-enum-radio.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var StringEnumRadioEditor = /*#__PURE__*/function (_StringEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StringEnumRadioEditor, _StringEditor);
  var _super = _createSuper(StringEnumRadioEditor);
  function StringEnumRadioEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StringEnumRadioEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StringEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      // control
      this.control = this.theme.getRadiosControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.instance.schema["enum"](),
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });
      this.control.radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          _this.instance.setValue(radio.value);
        });
      });
      this.container.appendChild(this.control.container);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;
      this.control.radios.forEach(function (radio) {
        radio.checked = radio.value === _this2.instance.getValue();
        radio.disabled = _this2.disabled;
      });
    }
  }]);
  return StringEnumRadioEditor;
}(_string__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (StringEnumRadioEditor);

/***/ }),

/***/ "./src/editors/string-enum-select.js":
/*!*******************************************!*\
  !*** ./src/editors/string-enum-select.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var StringEnumSelectEditor = /*#__PURE__*/function (_StringEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StringEnumSelectEditor, _StringEditor);
  var _super = _createSuper(StringEnumSelectEditor);
  function StringEnumSelectEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StringEnumSelectEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StringEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      // control
      this.control = this.theme.getSelectControl({
        values: this.instance.schema["enum"](),
        titles: this.instance.schema.option('enumTitles') || this.instance.schema["enum"](),
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle'),
        description: this.instance.schema.description()
      });

      // events
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.value);
      });
      this.container.appendChild(this.control.container);
    }
  }]);
  return StringEnumSelectEditor;
}(_string__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (StringEnumSelectEditor);

/***/ }),

/***/ "./src/editors/string.js":
/*!*******************************!*\
  !*** ./src/editors/string.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var StringEditor = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StringEditor, _Editor);
  var _super = _createSuper(StringEditor);
  function StringEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StringEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StringEditor, [{
    key: "build",
    value: function build() {
      var _this = this;
      var inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week'];
      if (this.instance.schema.formatIs('textarea')) {
        this.control = this.theme.getTextareaControl({
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
          label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
          srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
          description: this.instance.schema.description()
        });
      } else {
        this.control = this.theme.getInputControl({
          type: inputTypes.includes(this.instance.schema.format()) ? this.instance.schema.format() : 'text',
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
          label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
          srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
          description: this.instance.schema.description()
        });
      }

      // events
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.value);
      });

      // fix color picker bug
      if (this.instance.schema.formatIs('color') && this.instance.value.length === 0) {
        this.instance.setValue('#000000', false);
      }
      this.container.appendChild(this.control.container);
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return String(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.control.input.value = this.instance.getValue();
      if (this.disabled) {
        this.control.input.setAttribute('disabled', 'disabled');
      } else {
        this.control.input.removeAttribute('disabled');
      }
    }
  }]);
  return StringEditor;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (StringEditor);

/***/ }),

/***/ "./src/event-emitter.js":
/*!******************************!*\
  !*** ./src/event-emitter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EventEmitter);
    this.listeners = [];
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventEmitter, [{
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
/* harmony default export */ __webpack_exports__["default"] = (EventEmitter);

/***/ }),

/***/ "./src/instances/array.js":
/*!********************************!*\
  !*** ./src/instances/array.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _editors_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editors/array */ "./src/editors/array.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var ArrayInstance = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ArrayInstance, _Instance);
  var _super = _createSuper(ArrayInstance);
  function ArrayInstance() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ArrayInstance);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ArrayInstance, [{
    key: "setUI",
    value: function setUI() {
      this.ui = new _editors_array__WEBPACK_IMPORTED_MODULE_7__["default"](this);
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this = this;
      this.cache = {};
      this.refreshChildren();
      this.on('set-value', function () {
        _this.refreshChildren();
      });
    }
  }, {
    key: "createItemInstance",
    value: function createItemInstance(value) {
      var itemsCount = this.children.length;
      var schema;
      schema = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.schema.items()) ? this.schema.items() : {};
      var hasPrefixItemsSchema = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.schema.prefixItems()) && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.schema.prefixItems()[itemsCount]);
      if (hasPrefixItemsSchema) {
        schema = this.schema.prefixItems()[itemsCount];
      }
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(schema) && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["notSet"])(schema.type)) {
        schema.type = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(value) ? Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getType"])(value) : 'any';
      }
      var child = this.jedi.createInstance({
        jedi: this.jedi,
        schema: schema,
        path: this.path + this.jedi.pathSeparator + itemsCount,
        parent: this
      });
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(value)) {
        child.setValue(value, false);
      }
      return child;
    }
  }, {
    key: "move",
    value: function move(fromIndex, toIndex) {
      var value = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["clone"])(this.getValue());
      var item = value[fromIndex];
      value.splice(fromIndex, 1);
      value.splice(toIndex, 0, item);
      this.setValue(value);
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var tempEditor = this.createItemInstance();
      var value = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["clone"])(this.getValue());
      value.push(tempEditor.getValue());
      var cacheIndex = Object.keys(this.cache).length;
      this.cache[cacheIndex] = tempEditor;
      this.setValue(value);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(itemIndex) {
      var currentValue = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["clone"])(this.getValue());
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
    key: "refreshChildren",
    value: function refreshChildren() {
      var _this2 = this;
      this.children = [];
      var value = this.getValue();
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isArray"])(value)) {
        return;
      }
      value.forEach(function (itemValue, index) {
        var child = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(_this2.cache[index]) ? _this2.cache[index] : _this2.createItemInstance(itemValue);
        child.setValue(itemValue, false);
        _this2.children.push(child);
      });
    }
  }]);
  return ArrayInstance;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ArrayInstance);

/***/ }),

/***/ "./src/instances/boolean.js":
/*!**********************************!*\
  !*** ./src/instances/boolean.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_boolean_enum_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editors/boolean-enum-radio */ "./src/editors/boolean-enum-radio.js");
/* harmony import */ var _editors_boolean_enum_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editors/boolean-enum-select */ "./src/editors/boolean-enum-select.js");
/* harmony import */ var _editors_boolean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editors/boolean */ "./src/editors/boolean.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var BooleanInstance = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BooleanInstance, _Instance);
  var _super = _createSuper(BooleanInstance);
  function BooleanInstance() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BooleanInstance);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BooleanInstance, [{
    key: "setUI",
    value: function setUI() {
      if (this.schema.typeIs('boolean') && this.schema.formatIs('radio')) {
        this.ui = new _editors_boolean_enum_radio__WEBPACK_IMPORTED_MODULE_6__["default"](this);
      } else if (this.schema.typeIs('boolean') && this.schema.formatIs('select')) {
        this.ui = new _editors_boolean_enum_select__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (this.schema.typeIs('boolean')) {
        this.ui = new _editors_boolean__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      }
    }
  }]);
  return BooleanInstance;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (BooleanInstance);

/***/ }),

/***/ "./src/instances/instance.js":
/*!***********************************!*\
  !*** ./src/instances/instance.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-emitter */ "./src/event-emitter.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var Instance = /*#__PURE__*/function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Instance, _EventEmitter);
  var _super = _createSuper(Instance);
  function Instance(config) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Instance);
    _this = _super.call(this);
    _this.jedi = config.jedi;
    _this.schema = config.schema;
    _this.value = config.value || undefined;
    _this.isActive = true;
    _this.path = config.path || _this.jedi.rootName;
    _this.parent = config.parent || null;
    _this.children = [];
    _this.ui = null;
    _this.init();
    return _this;
  }

  /**
   * Initializes and register the instance
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Instance, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.register();
      this.setInitialValue();
      this.prepare();
      this.setDefaultValue();
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
      return this.path.split(this.jedi.pathSeparator).pop();
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
     * Sets the default value of the instance based on it's type
     */
  }, {
    key: "setInitialValue",
    value: function setInitialValue() {
      var value;
      if (this.schema.type() === 'boolean') value = false;
      if (this.schema.type() === 'number') value = 0.0;
      if (this.schema.type() === 'integer') value = 0;
      if (this.schema.type() === 'string') value = '';
      if (this.schema.type() === 'array') value = [];
      if (this.schema.type() === 'object') value = {};
      if (this.schema.type() === 'null') value = null;
      this.value = value;
    }
  }, {
    key: "setDefaultValue",
    value: function setDefaultValue() {
      // if (this.schema.enum() && isSet(this.schema.enum()[0])) {
      //   this.value = this.schema.enum()[0]
      // }

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(this.schema["default"]())) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(this.schema["enum"]()) && !this.schema["enum"]().includes(this.schema["default"]())) {
          return;
        }
        var defaultErrors = this.jedi.validator.getErrors(this.schema["default"](), this.schema, this.getKey(), this.path);
        var validDefault = defaultErrors.length === 0;
        if (validDefault) {
          this.setValue(this.schema["default"](), false);
        }
      }
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
     * Sets the instance value
     */
  }, {
    key: "setValue",
    value: function setValue(newValue) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.value = newValue;
      this.emit('set-value');
      if (triggersChange) {
        this.emit('change');
      }
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
    key: "getErrors",
    value: function getErrors() {
      if (!this.isActive) {
        return [];
      }
      return this.jedi.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path);
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
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Instance.prototype), "destroy", this).call(this);
    }
  }]);
  return Instance;
}(_event_emitter__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Instance);

/***/ }),

/***/ "./src/instances/multiple.js":
/*!***********************************!*\
  !*** ./src/instances/multiple.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_multiple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editors/multiple */ "./src/editors/multiple.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jedi */ "./src/jedi.js");







function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var MultipleInstance = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MultipleInstance, _Instance);
  var _super = _createSuper(MultipleInstance);
  function MultipleInstance() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MultipleInstance);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MultipleInstance, [{
    key: "setUI",
    value: function setUI() {
      this.ui = new _editors_multiple__WEBPACK_IMPORTED_MODULE_8__["default"](this);
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this = this;
      this.instances = [];
      this.activeInstance = null;
      this.lastIndex = 0;
      this.index = 0;
      this.schemas = [];
      this.switcherOptionValues = [];
      this.switcherOptionsLabels = [];
      this.on('set-value', function () {
        _this.onSetValue();
      });
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["if"]())) {
        var _schemaClone = this.schema.clone();
        this.thenSchema = this.schema.then() ? Object(_utils__WEBPACK_IMPORTED_MODULE_9__["mergeDeep"])({}, _schemaClone, this.schema.then()) : Object(_utils__WEBPACK_IMPORTED_MODULE_9__["mergeDeep"])({}, _schemaClone);
        this.elseSchema = this.schema["else"]() ? Object(_utils__WEBPACK_IMPORTED_MODULE_9__["mergeDeep"])({}, _schemaClone, this.schema["else"]()) : Object(_utils__WEBPACK_IMPORTED_MODULE_9__["mergeDeep"])({}, _schemaClone);
        this.schemas.push(this.thenSchema);
        this.schemas.push(this.elseSchema);
        this.schemas.forEach(function (schema) {
          delete schema["if"];
          delete schema.then;
          delete schema["else"];
        });
        this.switcherOptionValues = [0, 1];
        this.switcherOptionsLabels = ['then', 'else'];
      } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema.anyOf()) || Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema.oneOf())) {
        var schemasOf = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema.anyOf()) ? this.schema.anyOf() : this.schema.oneOf();
        var cloneSchema = this.schema.clone();
        delete cloneSchema['anyOf'];
        delete cloneSchema['oneOf'];
        delete cloneSchema['options'];
        schemasOf.forEach(function (schema, index) {
          var _schema$options, _schema$options2;
          schema = _objectSpread(_objectSpread({}, cloneSchema), schema);

          // merge allOf
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(schema.allOf) && (_schema$options = schema.options) !== null && _schema$options !== void 0 && _schema$options.mergeAllOf) {
            var merged = {};
            schema.allOf.forEach(function (allOfSchema) {
              merged = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["mergeDeep"])(merged, allOfSchema);
            });
            schema = merged;
          }
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(cloneSchema.title)) {
            schema.title = cloneSchema.title;
          }
          var switcherOptionsLabel = ((_schema$options2 = schema.options) === null || _schema$options2 === void 0 ? void 0 : _schema$options2.switcherTitle) || 'Option-' + (index + 1);
          _this.switcherOptionValues.push(index);
          _this.switcherOptionsLabels.push(switcherOptionsLabel);
          _this.schemas.push(schema);
        });
      } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isArray"])(this.schema.type())) {
        this.schema.type().forEach(function (type, index) {
          var schemaClone = _this.schema.clone();
          var schema = _objectSpread(_objectSpread({}, schemaClone), {
            type: type,
            title: type[0].toUpperCase() + type.slice(1)
          });
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(schemaClone.title)) {
            schema.title = schemaClone.title;
          }
          _this.switcherOptionValues.push(index);
          _this.switcherOptionsLabels.push(type.charAt(0).toUpperCase() + type.slice(1));
          _this.schemas.push(schema);
        });
      } else if (this.schema.typeIs('any') || !this.schema.type()) {
        var _schemaClone2 = this.schema.clone();
        this.schemas = [_objectSpread(_objectSpread({}, _schemaClone2), {
          type: 'string'
        }), _objectSpread(_objectSpread({}, _schemaClone2), {
          type: 'number'
        }), _objectSpread(_objectSpread({}, _schemaClone2), {
          type: 'integer'
        }), _objectSpread(_objectSpread({}, _schemaClone2), {
          type: 'boolean'
        }), _objectSpread(_objectSpread({}, _schemaClone2), {
          type: 'array'
        }), _objectSpread(_objectSpread({}, _schemaClone2), {
          type: 'object'
        }), _objectSpread(_objectSpread({}, _schemaClone2), {
          type: 'null'
        })];
        this.schemas.forEach(function (schema, index) {
          _this.switcherOptionValues.push(index);
        });
        this.switcherOptionsLabels = ['String', 'Number', 'Integer', 'Boolean', 'Array', 'Object', 'Null'];
      }

      // Instances
      this.schemas.forEach(function (schema) {
        var instance = _this.jedi.createInstance({
          jedi: _this.jedi,
          schema: schema,
          path: _this.path,
          parent: _this.parent
        });
        instance.unregister();
        instance.on('change', function () {
          _this.emit('change');
          _this.switchIf();
        });
        _this.instances.push(instance);
        _this.register();
      });
      var schemaClone = this.schema.clone();
      var setValue = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isObject"])(schemaClone);
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.instances[0])) {
        this.switchInstance(0, false, setValue);
      }
    }
  }, {
    key: "switchInstance",
    value: function switchInstance(newIndex) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var setValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.lastIndex = this.index;
      this.index = newIndex;
      this.activeInstance = this.instances[this.index];
      if (setValue) {
        this.setValue(this.getValue(), triggersChange);
      }
    }
  }, {
    key: "switchIf",
    value: function switchIf() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["if"]())) {
        var ifIndex = this.getIfIndex(this.getValue());
        var preValue = this.getValue();
        this.switchInstance(ifIndex);
        var currentValue = this.getValue();
        var finalValue = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["overwriteExistingProperties"])(currentValue, preValue);
        this.setValue(finalValue, false);
      }
    }
  }, {
    key: "getIfIndex",
    value: function getIfIndex(value) {
      var ifEditor = new _jedi__WEBPACK_IMPORTED_MODULE_10__["default"]({
        schema: this.schema["if"](),
        startValue: value,
        refParser: false
      });
      var ifErrors = ifEditor.getErrors();
      ifEditor.destroy();
      return ifErrors.length === 0 ? 0 : 1;
    }
  }, {
    key: "getFittestIndex",
    value: function getFittestIndex(value) {
      var index = 0;
      var fittestIndex;
      var championErrors;
      var _iterator = _createForOfIteratorHelper(this.instances),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var instance = _step.value;
          if (instance.instances) {
            instance.setValue(value);
          }
          var instanceErrors = this.jedi.validator.getErrors(value, instance.schema, instance.getKey(), instance.path);
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["notSet"])(fittestIndex) || Object(_utils__WEBPACK_IMPORTED_MODULE_9__["notSet"])(championErrors)) {
            fittestIndex = index;
            championErrors = instanceErrors;
          }
          if (instanceErrors.length < championErrors.length) {
            fittestIndex = index;
            championErrors = instanceErrors;
          }
          index++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return fittestIndex;
    }
  }, {
    key: "onSetValue",
    value: function onSetValue() {
      var value = this.value;

      // if value matches the active instance type set the value. Else switch to the first
      // instance that match the value.
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["different"])(this.activeInstance.getValue(), value)) {
        var fittestIndex;
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["if"]())) {
          fittestIndex = this.getIfIndex(value);
        } else {
          fittestIndex = this.getFittestIndex(value);
        }
        this.switchInstance(fittestIndex, false);
      }
      this.activeInstance.setValue(value, false);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (!this.activeInstance) {
        return;
      }
      return this.activeInstance.getValue();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.instances.forEach(function (instance) {
        instance.destroy();
      });
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(MultipleInstance.prototype), "destroy", this).call(this);
    }
  }]);
  return MultipleInstance;
}(_instance__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (MultipleInstance);

/***/ }),

/***/ "./src/instances/null.js":
/*!*******************************!*\
  !*** ./src/instances/null.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_null__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editors/null */ "./src/editors/null.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var NullInstance = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(NullInstance, _Instance);
  var _super = _createSuper(NullInstance);
  function NullInstance() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NullInstance);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NullInstance, [{
    key: "setUI",
    value: function setUI() {
      this.ui = new _editors_null__WEBPACK_IMPORTED_MODULE_6__["default"](this);
    }
  }]);
  return NullInstance;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (NullInstance);

/***/ }),

/***/ "./src/instances/number.js":
/*!*********************************!*\
  !*** ./src/instances/number.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_number_enum_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editors/number-enum-radio */ "./src/editors/number-enum-radio.js");
/* harmony import */ var _editors_number_enum_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editors/number-enum-select */ "./src/editors/number-enum-select.js");
/* harmony import */ var _editors_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editors/number */ "./src/editors/number.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var NumberInstance = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(NumberInstance, _Instance);
  var _super = _createSuper(NumberInstance);
  function NumberInstance() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NumberInstance);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NumberInstance, [{
    key: "setUI",
    value: function setUI() {
      if (this.schema.typeIsNumeric() && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["enum"]()) && this.schema.formatIs('radio')) {
        this.ui = new _editors_number_enum_radio__WEBPACK_IMPORTED_MODULE_6__["default"](this);
      } else if (this.schema.typeIsNumeric() && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["enum"]())) {
        this.ui = new _editors_number_enum_select__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (this.schema.typeIsNumeric()) {
        this.ui = new _editors_number__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      }
    }
  }]);
  return NumberInstance;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (NumberInstance);

/***/ }),

/***/ "./src/instances/object.js":
/*!*********************************!*\
  !*** ./src/instances/object.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _editors_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editors/object */ "./src/editors/object.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var ObjectInstance = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ObjectInstance, _Instance);
  var _super = _createSuper(ObjectInstance);
  function ObjectInstance() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ObjectInstance);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ObjectInstance, [{
    key: "setUI",
    value: function setUI() {
      this.ui = new _editors_object__WEBPACK_IMPORTED_MODULE_7__["default"](this);
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this = this;
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.schema.properties())) {
        Object.keys(this.schema.properties()).forEach(function (key) {
          var schema = _this.schema.properties()[key];
          _this.createChild(schema, key);
        });
      }
      this.refreshInstances();
      this.on('set-value', function () {
        _this.refreshInstances();
      });
    }

    /**
     * Returns true if the property is required
     */
  }, {
    key: "isRequired",
    value: function isRequired(property) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.schema.required()) && this.schema.required().includes(property);
    }

    /**
     * Returns true if the property is dependent required
     */
  }, {
    key: "isDependentRequired",
    value: function isDependentRequired(property) {
      var _this2 = this;
      var dependentRequired = this.schema.dependentRequired();
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(dependentRequired)) {
        var missingProperties = [];
        Object.keys(dependentRequired).forEach(function (key) {
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(_this2.value[key])) {
            var requiredProperties = dependentRequired[key];
            missingProperties = requiredProperties.filter(function (property) {
              return !Object(_utils__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(_this2.value, property);
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
        schema: schema,
        path: this.path + this.jedi.pathSeparator + key,
        parent: this
      });
      this.children.push(instance);
      this.value[key] = instance.getValue();
      var isNotRequired = !this.isRequired(key);
      var shouldStartDeactivated = this.jedi.options.deactivateProperties || this.schema.option('deactivateProperties');
      if (isNotRequired && shouldStartDeactivated) {
        instance.deactivate();
      }
      return instance;
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
      var _this3 = this;
      return this.children.find(function (instance) {
        return key === instance.getKey().split(_this3.jedi.pathSeparator).pop();
      });
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
    key: "refreshInstances",
    value: function refreshInstances() {
      var _this4 = this;
      var value = this.getValue();

      // remove any children that are not included in the value
      for (var i = this.children.length - 1; i >= 0; i--) {
        var instance = this.children[i];
        var key = instance.getKey();
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["notSet"])(value[key])) {
          if (this.getChild(key)) {
            instance.deactivate();
          } else {
            this.deleteChild(key);
          }
        }
      }
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(value)) {
        return;
      }
      Object.keys(value).forEach(function (key) {
        var child = _this4.getChild(key);

        // If a value has a already a child instance
        if (child) {
          var oldValue = child.getValue();
          var newValue = value[child.getKey()];

          // update child value if the old value and the new value are different
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["different"])(oldValue, newValue)) {
            child.setValue(newValue, false);
          }
        } else {
          // create new child instance for the new value entry having the value as default
          var initialValue = value[key];
          var type = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getType"])(initialValue);
          var schema = {
            type: type,
            "default": initialValue
          };
          _this4.createChild(schema, key);
        }
      });
    }
  }]);
  return ObjectInstance;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ObjectInstance);

/***/ }),

/***/ "./src/instances/string.js":
/*!*********************************!*\
  !*** ./src/instances/string.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instance */ "./src/instances/instance.js");
/* harmony import */ var _editors_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editors/string */ "./src/editors/string.js");
/* harmony import */ var _editors_string_enum_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editors/string-enum-radio */ "./src/editors/string-enum-radio.js");
/* harmony import */ var _editors_string_enum_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editors/string-enum-select */ "./src/editors/string-enum-select.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var StringInstance = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StringInstance, _Instance);
  var _super = _createSuper(StringInstance);
  function StringInstance() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StringInstance);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StringInstance, [{
    key: "setUI",
    value: function setUI() {
      if (this.schema.typeIs('string') && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["enum"]()) && this.schema.formatIs('radio')) {
        this.ui = new _editors_string_enum_radio__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (this.schema.typeIs('string') && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["enum"]())) {
        this.ui = new _editors_string_enum_select__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      } else if (this.schema.typeIs('string')) {
        this.ui = new _editors_string__WEBPACK_IMPORTED_MODULE_6__["default"](this);
      }
    }
  }]);
  return StringInstance;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (StringInstance);

/***/ }),

/***/ "./src/jedi.js":
/*!*********************!*\
  !*** ./src/jedi.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schema */ "./src/schema.js");
/* harmony import */ var _validation_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validation/validator */ "./src/validation/validator.js");
/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-emitter */ "./src/event-emitter.js");
/* harmony import */ var _instances_multiple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instances/multiple */ "./src/instances/multiple.js");
/* harmony import */ var _instances_boolean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./instances/boolean */ "./src/instances/boolean.js");
/* harmony import */ var _instances_object__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./instances/object */ "./src/instances/object.js");
/* harmony import */ var _instances_array__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./instances/array */ "./src/instances/array.js");
/* harmony import */ var _instances_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./instances/string */ "./src/instances/string.js");
/* harmony import */ var _instances_number__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./instances/number */ "./src/instances/number.js");
/* harmony import */ var _instances_null__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./instances/null */ "./src/instances/null.js");
/* harmony import */ var _ref_parser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ref-parser */ "./src/ref-parser.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils */ "./src/utils.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }












var Jedi = /*#__PURE__*/function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Jedi, _EventEmitter);
  var _super = _createSuper(Jedi);
  function Jedi(options) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Jedi);
    _this = _super.call(this);
    _this.options = Object.assign({
      container: null,
      isEditor: false,
      editableProperties: false,
      alwaysShowErrors: false,
      showRequiredOnly: false,
      schema: {},
      theme: 'barebones',
      refParser: true
    }, options);
    _this.rootName = '#';
    _this.pathSeparator = '/';
    _this.instances = {};
    _this.root = null;
    _this.theme = null;
    _this.validator = null;
    _this.schema = null;
    _this.refParser = null;
    _this.init();
    return _this;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Jedi, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.validator = new _validation_validator__WEBPACK_IMPORTED_MODULE_7__["default"]();
      if (this.options.refParser) {
        this.refParser = new _ref_parser__WEBPACK_IMPORTED_MODULE_16__["default"]({
          XMLHttpRequest: this.options.XMLHttpRequest
        });
        this.options.schema = this.refParser.dereference(this.options.schema);
      }
      this.schema = new _schema__WEBPACK_IMPORTED_MODULE_6__["default"](this.options.schema);
      this.root = this.createInstance({
        jedi: this,
        schema: this.options.schema
      });
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_17__["isSet"])(this.options.startValue)) {
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
      var hiddenControl = this.root.ui.theme.getInputControl({
        type: 'hidden',
        id: 'jedi-hidden-input'
      });
      this.hiddenInput = hiddenControl.input;
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
      var instance;

      // circular $ref are not initially dereferenced and must be defined on creation
      if (this.options.refParser && Object(_utils__WEBPACK_IMPORTED_MODULE_17__["hasOwn"])(config.schema, '$ref')) {
        config.schema = this.refParser.define(config.schema['$ref']);
      }
      config.schema = new _schema__WEBPACK_IMPORTED_MODULE_6__["default"](config.schema);
      if (config.schema.typeIs('boolean')) {
        instance = new _instances_boolean__WEBPACK_IMPORTED_MODULE_10__["default"](config);
      }
      if (config.schema.typeIs('object')) {
        instance = new _instances_object__WEBPACK_IMPORTED_MODULE_11__["default"](config);
      }
      if (config.schema.typeIs('array')) {
        instance = new _instances_array__WEBPACK_IMPORTED_MODULE_12__["default"](config);
      }
      if (config.schema.typeIs('string')) {
        instance = new _instances_string__WEBPACK_IMPORTED_MODULE_13__["default"](config);
      }
      if (config.schema.typeIsNumeric()) {
        instance = new _instances_number__WEBPACK_IMPORTED_MODULE_14__["default"](config);
      }
      if (config.schema.typeIs('null')) {
        instance = new _instances_null__WEBPACK_IMPORTED_MODULE_15__["default"](config);
      }
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_17__["isSet"])(config.schema["if"]()) || Object(_utils__WEBPACK_IMPORTED_MODULE_17__["isSet"])(config.schema.anyOf()) || Object(_utils__WEBPACK_IMPORTED_MODULE_17__["isSet"])(config.schema.oneOf()) || config.schema.typeIs('any') || Object(_utils__WEBPACK_IMPORTED_MODULE_17__["isArray"])(config.schema.type()) || Object(_utils__WEBPACK_IMPORTED_MODULE_17__["notSet"])(config.schema.type())) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_17__["notSet"])(config.schema.type()) && Object(_utils__WEBPACK_IMPORTED_MODULE_17__["isSet"])(config.schema["default"]())) {
          var originalSchema = config.schema.clone();
          originalSchema.type = Object(_utils__WEBPACK_IMPORTED_MODULE_17__["getType"])(config.schema["default"]());
          config.schema = new _schema__WEBPACK_IMPORTED_MODULE_6__["default"](originalSchema);
          return this.createInstance(config);
        } else {
          instance = new _instances_multiple__WEBPACK_IMPORTED_MODULE_9__["default"](config);
        }
      }
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_17__["isSet"])(instance)) {
        return instance;
      }
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
    key: "getErrors",
    value: function getErrors() {
      var _this4 = this;
      var errors = [];
      Object.keys(this.instances).forEach(function (key) {
        var editor = _this4.instances[key];
        errors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(errors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(editor.getErrors()));
      });
      return errors;
    }

    /**
     * Destroy the root instance and it's children
     */
  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;
      this.root.destroy();
      if (this.options.isEditor) {
        this.container.innerHTML = '';
      }
      Object.keys(this).forEach(function (key) {
        delete _this5[key];
      });
    }
  }]);
  return Jedi;
}(_event_emitter__WEBPACK_IMPORTED_MODULE_8__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Jedi);

/***/ }),

/***/ "./src/ref-parser.js":
/*!***************************!*\
  !*** ./src/ref-parser.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


/* global XMLHttpRequest */


var RefParser = /*#__PURE__*/function () {
  function RefParser(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RefParser);
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["notSet"])(options)) {
      options = {};
    }
    this.iterations = options.iterations || 7;
    this.XMLHttpRequest = options.XMLHttpRequest || XMLHttpRequest;
    this.definitions = {};
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RefParser, [{
    key: "dereference",
    value: function dereference(schema) {
      var _this = this;
      for (var i = 0; i < this.iterations; i++) {
        // register definitions as long as they are not references
        this.traverse({
          value: schema,
          callback: function callback(args) {
            if (args.key !== '$ref') {
              _this.definitions[args.path] = args.value;
            }
          }
        });

        // dereference
        this.traverse({
          value: schema,
          callback: function callback(args) {
            if (!Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isObject"])(args.value)) {
              return;
            }
            var refOwner = args.prevValue;
            var ref = args.value['$ref'];
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(refOwner) && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(ref)) {
              if (_this.isCircularPath(args.path)) {
                console.log('circular', args.path);
                return;
              }
              refOwner[args.key] = _this.define(ref);
            }
          }
        });
      }
      return schema;
    }
  }, {
    key: "isCircularPath",
    value: function isCircularPath(path) {
      var output = false;
      Object.keys(this.definitions).forEach(function (key) {
        // remove #
        path = path.substring(1);
        if (path.length === 0) {
          return output;
        }
        var half = Math.ceil(path.length / 2);
        var firstHalf = path.slice(0, half);
        var secondHalf = path.slice(half);
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["equal"])(firstHalf, secondHalf)) {
          output = true;
        }
      });
      return output;
    }
  }, {
    key: "define",
    value: function define(ref) {
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(ref)) {
        return ref;
      }

      // definitions
      if (ref.startsWith('#')) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(this.definitions[ref])) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.definitions[ref]);
        }
      }
      if (ref.startsWith('http') || ref.startsWith('https')) {
        var request = new this.XMLHttpRequest();
        request.open('GET', ref, false); // `false` makes the request synchronous
        request.send(null);
        if (request.status === 200) {
          return JSON.parse(request.responseText);
        } else {
          console.error('can not load', ref);
        }
      }
      return undefined;
    }
  }, {
    key: "traverse",
    value: function traverse(args) {
      var _this2 = this;
      var value = args.value;
      var callback = args.callback;
      var path = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(args.path) ? args.path + '/' + args.key : '#';
      args.path = path;
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(callback)) {
        callback(args);
      }
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isObject"])(value)) {
        Object.keys(value).forEach(function (key) {
          args.value = value[key];
          args.key = key;
          args.path = path;
          args.prevValue = value;
          _this2.traverse(args);
        });
      }
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(value)) {
        value.forEach(function (newValue, key) {
          args.value = newValue;
          args.key = key;
          args.path = path;
          args.prevValue = value;
          _this2.traverse(args);
        });
      }
    }
  }]);
  return RefParser;
}();
/* harmony default export */ __webpack_exports__["default"] = (RefParser);

/***/ }),

/***/ "./src/schema.js":
/*!***********************!*\
  !*** ./src/schema.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.js");




var Schema = /*#__PURE__*/function () {
  function Schema(schema) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Schema);
    this.schema = schema;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Schema, [{
    key: "additionalProperties",
    value: function additionalProperties() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema.additionalProperties) || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(this.schema.additionalProperties) ? this.schema.additionalProperties : true;
    }
  }, {
    key: "allOf",
    value: function allOf() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.schema.allOf) ? this.schema.allOf : undefined;
    }
  }, {
    key: "anyOf",
    value: function anyOf() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.schema.anyOf) ? this.schema.anyOf : undefined;
    }
  }, {
    key: "const",
    value: function _const() {
      return this.schema["const"];
    }
  }, {
    key: "contains",
    value: function contains() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema.contains) || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(this.schema.contains) ? this.schema.contains : undefined;
    }
  }, {
    key: "clone",
    value: function clone() {
      return JSON.parse(JSON.stringify(this.schema));
    }
  }, {
    key: "default",
    value: function _default() {
      return this.schema["default"];
    }
  }, {
    key: "dependentRequired",
    value: function dependentRequired() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema.dependentRequired) ? this.schema.dependentRequired : undefined;
    }
  }, {
    key: "dependentSchemas",
    value: function dependentSchemas() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema.dependentSchemas) ? this.schema.dependentSchemas : undefined;
    }
  }, {
    key: "description",
    value: function description() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(this.schema.description) ? this.schema.description : undefined;
    }
  }, {
    key: "else",
    value: function _else() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema["else"]) || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(this.schema["else"]) ? this.schema["else"] : undefined;
    }
  }, {
    key: "enum",
    value: function _enum() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.schema["enum"]) && this.schema["enum"].length > 0) {
        return this.schema["enum"];
      }
      return undefined;
    }
  }, {
    key: "exclusiveMaximum",
    value: function exclusiveMaximum() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(this.schema.exclusiveMaximum) ? this.schema.exclusiveMaximum : undefined;
    }
  }, {
    key: "exclusiveMinimum",
    value: function exclusiveMinimum() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(this.schema.exclusiveMinimum) ? this.schema.exclusiveMinimum : undefined;
    }
  }, {
    key: "format",
    value: function format() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(this.schema.format) ? this.schema.format : undefined;
    }
  }, {
    key: "formatIs",
    value: function formatIs(value) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isSet"])(this.format()) && this.format() === value;
    }
  }, {
    key: "if",
    value: function _if() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema["if"])) {
        return this.schema["if"];
      }
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(this.schema["if"])) {
        return this.schema["if"];
      }
      return undefined;
    }
  }, {
    key: "items",
    value: function items() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema.items) || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(this.schema.items) ? this.schema.items : undefined;
    }
  }, {
    key: "maximum",
    value: function maximum() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(this.schema.maximum) ? this.schema.maximum : undefined;
    }
  }, {
    key: "maxContains",
    value: function maxContains() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(this.schema.maxContains) && this.schema.maxContains >= 0) {
        return this.schema.maxContains;
      }
      return undefined;
    }
  }, {
    key: "maxItems",
    value: function maxItems() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(this.schema.maxItems) && this.schema.maxItems >= 0) {
        return this.schema.maxItems;
      }
      return undefined;
    }
  }, {
    key: "maxLength",
    value: function maxLength() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(this.schema.maxLength) && this.schema.maxLength >= 0) {
        return this.schema.maxLength;
      }
      return undefined;
    }
  }, {
    key: "maxProperties",
    value: function maxProperties() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(this.schema.maxProperties)) {
        return this.schema.maxProperties;
      }
      return undefined;
    }
  }, {
    key: "minimum",
    value: function minimum() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(this.schema.minimum) ? this.schema.minimum : undefined;
    }
  }, {
    key: "minContains",
    value: function minContains() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(this.schema.minContains) && this.schema.minContains >= 0) {
        return this.schema.minContains;
      }
      return undefined;
    }
  }, {
    key: "minItems",
    value: function minItems() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(this.schema.minItems) && this.schema.minItems >= 0) {
        return this.schema.minItems;
      }
      return undefined;
    }
  }, {
    key: "minLength",
    value: function minLength() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(this.schema.minLength) && this.schema.minLength >= 0) {
        return this.schema.minLength;
      }
      return undefined;
    }
  }, {
    key: "minProperties",
    value: function minProperties() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(this.schema.minProperties) && this.schema.minProperties >= 0) {
        return this.schema.minProperties;
      }
      return undefined;
    }
  }, {
    key: "multipleOf",
    value: function multipleOf() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(this.schema.multipleOf) && this.schema.multipleOf >= 0) {
        return this.schema.multipleOf;
      }
      return undefined;
    }
  }, {
    key: "not",
    value: function not() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema.not) || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(this.schema.not) ? this.schema.not : undefined;
    }
  }, {
    key: "option",
    value: function option(_option) {
      return this.schema.options && this.schema.options[_option] ? this.schema.options[_option] : false;
    }
  }, {
    key: "pattern",
    value: function pattern() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(this.schema.pattern) ? this.schema.pattern : undefined;
    }
  }, {
    key: "patternProperties",
    value: function patternProperties() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema.patternProperties) ? this.schema.patternProperties : undefined;
    }
  }, {
    key: "prefixItems",
    value: function prefixItems() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.schema.prefixItems) ? this.schema.prefixItems : undefined;
    }
  }, {
    key: "properties",
    value: function properties() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema.properties) ? this.schema.properties : undefined;
    }
  }, {
    key: "readOnly",
    value: function readOnly() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(this.schema.readOnly) ? this.schema.readOnly : undefined;
    }
  }, {
    key: "required",
    value: function required() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.schema.required) ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(new Set(this.schema.required)) : undefined;
    }
  }, {
    key: "then",
    value: function then() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(this.schema.then) || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(this.schema.then) ? this.schema.then : undefined;
    }
  }, {
    key: "title",
    value: function title() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(this.schema.title) ? this.schema.title : undefined;
    }
  }, {
    key: "type",
    value: function type() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(this.schema.type) || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.schema.type)) {
        return this.schema.type;
      }
      return undefined;
    }
  }, {
    key: "typeIs",
    value: function typeIs(value) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isSet"])(this.type()) && this.type() === value;
    }
  }, {
    key: "typeIsNumeric",
    value: function typeIsNumeric() {
      return this.typeIs('number') || this.typeIs('integer');
    }
  }, {
    key: "oneOf",
    value: function oneOf() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.schema.oneOf) ? this.schema.oneOf : undefined;
    }
  }, {
    key: "uniqueItems",
    value: function uniqueItems() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(this.schema.uniqueItems) ? this.schema.uniqueItems : undefined;
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
/* harmony default export */ __webpack_exports__["default"] = (Schema);

/***/ }),

/***/ "./src/themes/barebones.js":
/*!*********************************!*\
  !*** ./src/themes/barebones.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var ThemeBarebones = /*#__PURE__*/function () {
  function ThemeBarebones() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ThemeBarebones);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ThemeBarebones, [{
    key: "getEditorContainer",
    value: function getEditorContainer() {
      var html = document.createElement('div');
      html.classList.add('jedi-editor-container');
      return html;
    }
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      return document.createElement('fieldset');
    }
  }, {
    key: "getFieldsetBody",
    value: function getFieldsetBody() {
      return document.createElement('div');
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var html = document.createElement('legend');
      html.textContent = config.textContent;
      html.style.fontSize = 'inherit';
      if (config.srOnly) {
        html.classList.add('sr-only');
      }
      return html;
    }
  }, {
    key: "getFieldsetFooter",
    value: function getFieldsetFooter() {
      return document.createElement('div');
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-properties-slot');
      return html;
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-actions-slot');
      return html;
    }
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-array-actions-slot');
      return html;
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-child-editors-slot');
      return html;
    }
  }, {
    key: "getMessagesSlot",
    value: function getMessagesSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-messages-slot');
      return html;
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-control-slot');
      return html;
    }
  }, {
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var html = this.getButton(config);
      html.classList.add('jedi-properties-toggle');
      return html;
    }
  }, {
    key: "getPropertiesActivators",
    value: function getPropertiesActivators() {
      var html = document.createElement('div');
      html.classList.add('jedi-properties-container');
      return html;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      return document.createElement('div');
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var html = document.createElement('button');
      html.setAttribute('type', 'button');
      if (config.value) {
        html.value = config.value;
      }
      if (config.id) {
        html.setAttribute('id', config.value);
      }
      html.textContent = config.textContent;
      return html;
    }
  }, {
    key: "getArrayBtnAdd",
    value: function getArrayBtnAdd(config) {
      var html = this.getButton(config);
      html.classList.add('jedi-array-add');
      return html;
    }
  }, {
    key: "getArrayBtnDeleteAll",
    value: function getArrayBtnDeleteAll(config) {
      var html = this.getButton(config);
      html.classList.add('jedi-array-delete-all');
      return html;
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'jedi-active-btn';
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var description = document.createElement('div');
      description.textContent = config.textContent;
      return description;
    }
  }, {
    key: "getObjectControl",
    value: function getObjectControl(config) {
      var container = document.createElement('div');
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.title,
        srOnly: config.srOnly
      });
      var actions = this.getActionsSlot();
      var body = this.getFieldsetBody();
      var description = this.getDescription({
        textContent: config.description
      });
      var messages = this.getMessagesSlot();
      var childrenSlot = this.getChildrenSlot();
      var propertiesToggle = this.getPropertiesToggle({
        textContent: 'Properties',
        id: 'properties-slot-' + config.id
      });
      var propertiesContainer = this.getPropertiesSlot({
        id: 'properties-slot-' + config.id
      });
      var propertiesActivators = this.getPropertiesActivators();
      var addPropertyControl = this.getInputControl({
        type: 'text',
        id: 'jedi-add-property-input-' + config.id,
        label: 'Property'
      });
      var addPropertyBtn = this.getButton({
        textContent: 'Add property'
      });
      addPropertyBtn.classList.add('jedi-object-add');
      container.appendChild(description);
      container.appendChild(messages);
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(body);
      legend.appendChild(actions);
      body.appendChild(propertiesContainer);
      body.appendChild(childrenSlot);
      if (config.editableProperties) {
        actions.appendChild(propertiesToggle);
        propertiesContainer.appendChild(propertiesActivators);
        propertiesContainer.appendChild(addPropertyControl.container);
        propertiesContainer.appendChild(addPropertyBtn);
      }
      return {
        container: container,
        fieldset: fieldset,
        legend: legend,
        body: body,
        actions: actions,
        messages: messages,
        childrenSlot: childrenSlot,
        propertiesToggle: propertiesToggle,
        propertiesContainer: propertiesContainer,
        addPropertyControl: addPropertyControl,
        addPropertyBtn: addPropertyBtn,
        propertiesActivators: propertiesActivators
      };
    }
  }, {
    key: "getArrayControl",
    value: function getArrayControl(config) {
      var container = document.createElement('div');
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.title,
        srOnly: config.srOnly
      });
      var actions = this.getActionsSlot();
      var body = this.getFieldsetBody();
      var description = this.getDescription({
        textContent: config.description
      });
      var messages = this.getMessagesSlot();
      var childrenSlot = this.getChildrenSlot();
      var btnGroup = this.getBtnGroup();
      var addBtn = this.getArrayBtnAdd({
        textContent: 'Add item'
      });
      var deleteAllBtn = this.getArrayBtnDeleteAll({
        textContent: 'Delete items'
      });
      container.appendChild(description);
      container.appendChild(messages);
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(body);
      legend.appendChild(actions);
      actions.appendChild(btnGroup);
      btnGroup.appendChild(addBtn);
      btnGroup.appendChild(deleteAllBtn);
      body.appendChild(childrenSlot);
      return {
        container: container,
        fieldset: fieldset,
        legend: legend,
        body: body,
        actions: actions,
        messages: messages,
        childrenSlot: childrenSlot,
        btnGroup: btnGroup,
        addBtn: addBtn,
        deleteAllBtn: deleteAllBtn
      };
    }
  }, {
    key: "getArrayItem",
    value: function getArrayItem(config) {
      var container = document.createElement('div');
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.legend,
        srOnly: config.srOnly
      });
      var actions = this.getActionsSlot();
      var body = this.getFieldsetBody();
      var btnGroup = this.getBtnGroup();
      var deleteBtn = this.getButton({
        textContent: 'Delete item'
      });
      deleteBtn.classList.add('jedi-array-delete');
      var moveUpBtn = this.getButton({
        textContent: 'Move up'
      });
      moveUpBtn.classList.add('jedi-array-move-up');
      var moveDownBtn = this.getButton({
        textContent: 'Move down'
      });
      moveDownBtn.classList.add('jedi-array-move-down');
      var childrenSlot = this.getChildrenSlot();
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(body);
      legend.appendChild(actions);
      body.appendChild(childrenSlot);
      body.appendChild(btnGroup);
      btnGroup.appendChild(deleteBtn);
      btnGroup.appendChild(moveUpBtn);
      btnGroup.appendChild(moveDownBtn);
      return {
        container: container,
        fieldset: fieldset,
        legend: legend,
        body: body,
        childrenSlot: childrenSlot,
        deleteBtn: deleteBtn,
        moveUpBtn: moveUpBtn,
        moveDownBtn: moveDownBtn
      };
    }
  }, {
    key: "getMultipleControl",
    value: function getMultipleControl(config) {
      var container = document.createElement('div');
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.title,
        srOnly: config.srOnly
      });
      var actions = this.getActionsSlot();
      var body = this.getFieldsetBody();
      var description = this.getDescription({
        textContent: config.description
      });
      var messages = this.getMessagesSlot();
      var childrenSlot = this.getChildrenSlot();
      var switcher = this.getSwitcher({
        values: config.switcherOptionValues,
        titles: config.switcherOptionsLabels,
        id: config.id + '-switcher',
        label: config.id + '-switcher',
        srOnly: true
      });
      switcher.container.classList.add('jedi-switcher');
      container.appendChild(description);
      container.appendChild(messages);
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(body);
      legend.appendChild(actions);
      actions.appendChild(switcher.container);
      body.appendChild(childrenSlot);
      return {
        container: container,
        fieldset: fieldset,
        legend: legend,
        body: body,
        actions: actions,
        messages: messages,
        childrenSlot: childrenSlot,
        switcher: switcher
      };
    }
  }, {
    key: "getNullControl",
    value: function getNullControl(config) {
      var container = document.createElement('div');
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
      }
      var messages = this.getMessagesSlot();
      container.appendChild(label);
      container.appendChild(description);
      container.appendChild(messages);
      label.appendChild(labelText);
      return {
        container: container,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var container = document.createElement('div');
      var input = document.createElement('textarea');
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
        input.setAttribute('aria-describedby', descriptionId);
      }
      var messages = this.getMessagesSlot();
      container.appendChild(label);
      container.appendChild(input);
      container.appendChild(description);
      container.appendChild(messages);
      label.appendChild(labelText);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var container = document.createElement('div');
      var input = document.createElement('input');
      input.setAttribute('type', config.type);
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
        input.setAttribute('aria-describedby', descriptionId);
      }
      var messages = this.getMessagesSlot();
      container.appendChild(label);
      container.appendChild(input);
      container.appendChild(description);
      container.appendChild(messages);
      label.appendChild(labelText);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var container = document.createElement('div');
      var legend = document.createElement('label');
      legend.textContent = config.label;
      if (config.srOnly) {
        legend.classList.add('sr-only');
      }
      var messages = this.getMessagesSlot();
      container.appendChild(legend);
      var radioControls = [];
      var radios = [];
      var labels = [];
      var labelTexts = [];
      config.values.forEach(function (value, index) {
        var radioControl = document.createElement('div');
        radioControls.push(radioControl);
        var radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('id', config.id + '-' + index);
        radio.setAttribute('value', value);
        radios.push(radio);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '-' + index);
        var labelText = document.createElement('span');
        labelTexts.push(labelText);
        if (config.titles && config.titles[index]) {
          labelText.textContent = config.titles[index];
        }
        labels.push(label);
      });
      radioControls.forEach(function (radioControl, index) {
        container.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
      }
      container.appendChild(description);
      container.appendChild(messages);
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var container = document.createElement('div');
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
        input.setAttribute('aria-describedby', descriptionId);
      }
      var messages = this.getMessagesSlot();
      container.appendChild(input);
      container.appendChild(label);
      label.appendChild(labelText);
      container.appendChild(description);
      container.appendChild(messages);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var container = document.createElement('div');
      var input = document.createElement('select');
      input.setAttribute('id', config.id);
      config.values.forEach(function (value, index) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        if (config.titles && config.titles[index]) {
          option.textContent = config.titles[index];
        }
        input.appendChild(option);
      });
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
        input.setAttribute('aria-describedby', descriptionId);
      }
      var messages = this.getMessagesSlot();
      container.appendChild(label);
      container.appendChild(input);
      label.appendChild(labelText);
      container.appendChild(description);
      container.appendChild(messages);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      return this.getSelectControl(config);
    }
  }, {
    key: "getAlert",
    value: function getAlert(config) {
      var html = document.createElement('p');
      html.classList.add('jedi-error-message');
      html.textContent = config.message;
      return html;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = document.createElement('div');
      html.classList.add('jedi-error-message');
      html.textContent = config.message;
      return html;
    }
  }]);
  return ThemeBarebones;
}();
/* harmony default export */ __webpack_exports__["default"] = (ThemeBarebones);

/***/ }),

/***/ "./src/themes/bootstrap3.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap3.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _barebones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barebones */ "./src/themes/barebones.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ThemeBootstrap3 = /*#__PURE__*/function (_ThemeBarebones) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ThemeBootstrap3, _ThemeBarebones);
  var _super = _createSuper(ThemeBootstrap3);
  function ThemeBootstrap3() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ThemeBootstrap3);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ThemeBootstrap3, [{
    key: "getFieldset",
    value: function getFieldset() {
      var html = document.createElement('fieldset');
      html.classList.add('panel');
      html.classList.add('panel-default');
      return html;
    }
  }, {
    key: "getFieldsetBody",
    value: function getFieldsetBody() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getFieldsetBody", this).call(this);
      html.classList.add('panel-body');
      return html;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getLegend", this).call(this, config);
      html.classList.add('panel-heading');
      html.classList.add('pull-right');
      return html;
    }
  }, {
    key: "getFieldsetFooter",
    value: function getFieldsetFooter() {
      var footer = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getFieldsetFooter", this).call(this);
      footer.classList.add('panel-footer');
      return footer;
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getPropertiesSlot", this).call(this);
      html.classList.add('collapse');
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getActionsSlot", this).call(this);
      html.classList.add('pull-right');
      return html;
    }
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getArrayActionsSlot", this).call(this);
      html.classList.add('pull-right');
      return html;
    }
  }, {
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var html = this.getButton(config);
      html.setAttribute('data-toggle', 'collapse');
      html.setAttribute('data-target', '#' + config.id);
      html.classList.add('jedi-properties-toggle');
      html.classList.add('pull-right');
      return html;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getBtnGroup", this).call(this);
      html.classList.add('btn-group');
      return html;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getButton", this).call(this, config);
      html.classList.add('btn');
      html.classList.add('btn-xs');
      html.classList.add('btn-default');
      return html;
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-primary';
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var _get$call = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getTextareaControl", this).call(this, config),
        container = _get$call.container,
        input = _get$call.input,
        label = _get$call.label,
        labelText = _get$call.labelText,
        description = _get$call.description,
        messages = _get$call.messages;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var _get$call2 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getInputControl", this).call(this, config),
        container = _get$call2.container,
        input = _get$call2.input,
        label = _get$call2.label,
        labelText = _get$call2.labelText,
        description = _get$call2.description,
        messages = _get$call2.messages;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var _get$call3 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getRadiosControl", this).call(this, config),
        container = _get$call3.container,
        legend = _get$call3.legend,
        radios = _get$call3.radios,
        labels = _get$call3.labels,
        labelTexts = _get$call3.labelTexts,
        radioControls = _get$call3.radioControls,
        description = _get$call3.description,
        messages = _get$call3.messages;
      container.classList.add('form-group');
      radioControls.forEach(function (radioControl, index) {
        radioControl.classList.add('radio');
        container.appendChild(radioControls[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(radios[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      container.appendChild(description);
      container.appendChild(messages);
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var _get$call4 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getCheckboxControl", this).call(this, config),
        container = _get$call4.container,
        input = _get$call4.input,
        label = _get$call4.label,
        labelText = _get$call4.labelText,
        description = _get$call4.description,
        messages = _get$call4.messages;
      container.classList.add('checkbox');
      container.classList.add('form-group');
      container.appendChild(label);
      label.appendChild(input);
      label.appendChild(labelText);
      container.appendChild(description);
      container.appendChild(messages);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var _get$call5 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getSelectControl", this).call(this, config),
        container = _get$call5.container,
        input = _get$call5.input,
        label = _get$call5.label,
        labelText = _get$call5.labelText,
        description = _get$call5.description,
        messages = _get$call5.messages;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var _get$call6 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getSwitcher", this).call(this, config),
        container = _get$call6.container,
        input = _get$call6.input,
        label = _get$call6.label,
        labelText = _get$call6.labelText,
        description = _get$call6.description,
        messages = _get$call6.messages;
      container.classList.remove('form-group');
      input.classList.remove('form-control');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getAlert",
    value: function getAlert(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getAlert", this).call(this, config);
      html.classList.add('alert');
      html.classList.add('alert-danger');
      return html;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getInvalidFeedback", this).call(this, config);
      html.classList.add('text-danger');
      return html;
    }
  }]);
  return ThemeBootstrap3;
}(_barebones__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ThemeBootstrap3);

/***/ }),

/***/ "./src/themes/bootstrap4.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap4.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _barebones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barebones */ "./src/themes/barebones.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ThemeBootstrap4 = /*#__PURE__*/function (_ThemeBarebones) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ThemeBootstrap4, _ThemeBarebones);
  var _super = _createSuper(ThemeBootstrap4);
  function ThemeBootstrap4() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ThemeBootstrap4);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ThemeBootstrap4, [{
    key: "getFieldset",
    value: function getFieldset() {
      var html = document.createElement('fieldset');
      html.classList.add('card');
      html.classList.add('mb-3');
      return html;
    }
  }, {
    key: "getFieldsetBody",
    value: function getFieldsetBody() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getFieldsetBody", this).call(this);
      html.classList.add('card-body');
      return html;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getLegend", this).call(this, config);
      html.classList.add('card-header');
      html.classList.add('d-flex');
      html.classList.add('justify-content-between');
      html.classList.add('align-items-center');
      html.classList.add('py-1');
      html.classList.add('float-right');
      return html;
    }
  }, {
    key: "getFieldsetFooter",
    value: function getFieldsetFooter() {
      var footer = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getFieldsetFooter", this).call(this);
      footer.classList.add('card-footer');
      return footer;
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getPropertiesSlot", this).call(this);
      html.classList.add('collapse');
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var html = this.getButton(config);
      html.setAttribute('data-toggle', 'collapse');
      html.setAttribute('data-target', '#' + config.id);
      html.classList.add('jedi-properties-toggle');
      return html;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getBtnGroup", this).call(this);
      html.classList.add('btn-group');
      return html;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getButton", this).call(this, config);
      html.classList.add('btn');
      html.classList.add('btn');
      html.classList.add('btn-sm');
      return html;
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-primary';
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var description = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getDescription", this).call(this, config);
      description.classList.add('form-text');
      return description;
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var _get$call = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getTextareaControl", this).call(this, config),
        container = _get$call.container,
        input = _get$call.input,
        label = _get$call.label,
        labelText = _get$call.labelText,
        description = _get$call.description,
        messages = _get$call.messages;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var _get$call2 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getInputControl", this).call(this, config),
        container = _get$call2.container,
        input = _get$call2.input,
        label = _get$call2.label,
        labelText = _get$call2.labelText,
        description = _get$call2.description,
        messages = _get$call2.messages;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var _get$call3 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getRadiosControl", this).call(this, config),
        container = _get$call3.container,
        legend = _get$call3.legend,
        radios = _get$call3.radios,
        labels = _get$call3.labels,
        labelTexts = _get$call3.labelTexts,
        radioControls = _get$call3.radioControls,
        description = _get$call3.description,
        messages = _get$call3.messages;
      container.classList.add('form-group');
      radioControls.forEach(function (radioControl, index) {
        radioControl.classList.add('form-check');
        radios[index].classList.add('form-check-input');
        labels[index].classList.add('form-check-label');
        container.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      container.appendChild(description);
      container.appendChild(messages);
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var _get$call4 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getCheckboxControl", this).call(this, config),
        container = _get$call4.container,
        input = _get$call4.input,
        label = _get$call4.label,
        labelText = _get$call4.labelText,
        description = _get$call4.description,
        messages = _get$call4.messages;
      container.classList.add('form-group');
      container.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      container.appendChild(input);
      container.appendChild(label);
      container.appendChild(description);
      container.appendChild(messages);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var _get$call5 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getSelectControl", this).call(this, config),
        container = _get$call5.container,
        input = _get$call5.input,
        label = _get$call5.label,
        labelText = _get$call5.labelText,
        description = _get$call5.description,
        messages = _get$call5.messages;
      container.classList.add('form-group');
      input.classList.add('form-control');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var _get$call6 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getSwitcher", this).call(this, config),
        container = _get$call6.container,
        input = _get$call6.input,
        label = _get$call6.label,
        labelText = _get$call6.labelText,
        description = _get$call6.description,
        messages = _get$call6.messages;
      container.classList.remove('form-group');
      input.classList.remove('form-control');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getAlert",
    value: function getAlert(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getAlert", this).call(this, config);
      html.classList.add('alert');
      html.classList.add('alert-danger');
      return html;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getInvalidFeedback", this).call(this, config);
      html.classList.add('text-danger');
      html.classList.add('form-text');
      html.classList.add('d-block');
      return html;
    }
  }]);
  return ThemeBootstrap4;
}(_barebones__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ThemeBootstrap4);

/***/ }),

/***/ "./src/themes/bootstrap5.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap5.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _barebones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barebones */ "./src/themes/barebones.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ThemeBootstrap5 = /*#__PURE__*/function (_ThemeBarebones) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ThemeBootstrap5, _ThemeBarebones);
  var _super = _createSuper(ThemeBootstrap5);
  function ThemeBootstrap5() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ThemeBootstrap5);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ThemeBootstrap5, [{
    key: "getFieldset",
    value: function getFieldset() {
      var html = document.createElement('fieldset');
      html.classList.add('card');
      html.classList.add('mb-3');
      return html;
    }
  }, {
    key: "getFieldsetBody",
    value: function getFieldsetBody() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getFieldsetBody", this).call(this);
      html.classList.add('card-body');
      return html;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getLegend", this).call(this, config);
      html.classList.add('card-header');
      html.classList.add('d-flex');
      html.classList.add('justify-content-between');
      html.classList.add('align-items-center');
      html.classList.add('py-1');
      html.classList.add('float-right');
      return html;
    }
  }, {
    key: "getFieldsetFooter",
    value: function getFieldsetFooter() {
      var footer = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getFieldsetFooter", this).call(this);
      footer.classList.add('card-footer');
      return footer;
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getPropertiesSlot", this).call(this);
      html.classList.add('collapse');
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var controlSlot = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getControlSlot", this).call(this);
      controlSlot.classList.add('mb-3');
      return controlSlot;
    }
  }, {
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var html = this.getButton(config);
      html.setAttribute('data-bs-toggle', 'collapse');
      html.setAttribute('data-bs-target', '#' + config.id);
      html.classList.add('jedi-properties-toggle');
      return html;
    }
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getBtnGroup", this).call(this);
      html.classList.add('btn-group');
      return html;
    }
  }, {
    key: "getButton",
    value: function getButton(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getButton", this).call(this, config);
      html.classList.add('btn');
      html.classList.add('btn-sm');
      return html;
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-primary';
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var description = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getDescription", this).call(this, config);
      description.classList.add('form-text');
      return description;
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var _get$call = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getTextareaControl", this).call(this, config),
        container = _get$call.container,
        input = _get$call.input,
        label = _get$call.label,
        labelText = _get$call.labelText,
        description = _get$call.description,
        messages = _get$call.messages;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var _get$call2 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getInputControl", this).call(this, config),
        container = _get$call2.container,
        input = _get$call2.input,
        label = _get$call2.label,
        labelText = _get$call2.labelText,
        description = _get$call2.description,
        messages = _get$call2.messages;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var _get$call3 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getRadiosControl", this).call(this, config),
        container = _get$call3.container,
        legend = _get$call3.legend,
        radios = _get$call3.radios,
        labels = _get$call3.labels,
        labelTexts = _get$call3.labelTexts,
        radioControls = _get$call3.radioControls,
        description = _get$call3.description,
        messages = _get$call3.messages;
      container.classList.add('form-group');
      radioControls.forEach(function (radioControl, index) {
        radioControl.classList.add('form-check');
        radios[index].classList.add('form-check-input');
        labels[index].classList.add('form-check-label');
        container.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      container.appendChild(description);
      container.appendChild(messages);
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var _get$call4 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getCheckboxControl", this).call(this, config),
        container = _get$call4.container,
        input = _get$call4.input,
        label = _get$call4.label,
        labelText = _get$call4.labelText,
        description = _get$call4.description,
        messages = _get$call4.messages;
      container.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      container.appendChild(input);
      container.appendChild(label);
      container.appendChild(description);
      container.appendChild(messages);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var _get$call5 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getSelectControl", this).call(this, config),
        container = _get$call5.container,
        input = _get$call5.input,
        label = _get$call5.label,
        labelText = _get$call5.labelText,
        description = _get$call5.description,
        messages = _get$call5.messages;
      input.classList.add('form-select');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var _get$call6 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getSwitcher", this).call(this, config),
        container = _get$call6.container,
        input = _get$call6.input,
        label = _get$call6.label,
        labelText = _get$call6.labelText,
        description = _get$call6.description,
        messages = _get$call6.messages;
      input.classList.remove('form-select');
      label.classList.add('visually-hidden');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages
      };
    }
  }, {
    key: "getAlert",
    value: function getAlert(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getAlert", this).call(this, config);
      html.classList.add('alert');
      html.classList.add('alert-danger');
      return html;
    }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getInvalidFeedback", this).call(this, config);
      html.classList.add('text-danger');
      html.classList.add('d-block');
      html.classList.add('form-text');
      return html;
    }
  }]);
  return ThemeBootstrap5;
}(_barebones__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ThemeBootstrap5);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: clone, fakeForEach, escapeRegExp, replaceAll, pathToAttribute, hasOwn, pretty, round2decimals, sortObject, equal, different, isNull, isSet, notSet, isNumber, isInteger, isString, isBoolean, isArray, isObject, getType, mergeDeep, overwriteExistingProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeForEach", function() { return fakeForEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceAll", function() { return replaceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToAttribute", function() { return pathToAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pretty", function() { return pretty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round2decimals", function() { return round2decimals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortObject", function() { return sortObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal", function() { return equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "different", function() { return different; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notSet", function() { return notSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overwriteExistingProperties", function() { return overwriteExistingProperties; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);


var clone = function clone(thing) {
  return JSON.parse(JSON.stringify(thing));
};
var fakeForEach = function fakeForEach(array, callback) {
  for (var index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
};
var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
};

var replaceAll = function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
};
var pathToAttribute = function pathToAttribute(path) {
  return replaceAll(replaceAll(path, '#', 'root'), '/', '-');
};
var hasOwn = function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
var pretty = function pretty(value) {
  return JSON.stringify(value, null, 2);
};
var round2decimals = function round2decimals(number) {
  return Math.round(number * 100) / 100;
};
var sortObject = function sortObject(obj) {
  return Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
};
var equal = function equal(a, b) {
  if (isObject(a) && isObject(b)) {
    a = sortObject(a);
    b = sortObject(b);
  }
  return JSON.stringify(a) === JSON.stringify(b);
};
var different = function different(a, b) {
  return !equal(a, b);
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
var isObject = function isObject(value) {
  return !isNull(value) && !isArray(value) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(value) === 'object';
};
var getType = function getType(value) {
  var type = 'any';
  if (isNumber(value)) {
    type = isInteger(value) ? 'integer' : 'number';
  } else if (isString(value)) {
    type = 'string';
  } else if (isBoolean(value)) {
    type = 'boolean';
  } else if (isArray(value)) {
    type = 'array';
  } else if (isNull(value)) {
    type = 'null';
  } else if (isObject(value)) {
    type = 'object';
  }
  return type;
};
var mergeDeep = function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length) return target;
  var source = sources.shift();
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function (key) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, {}));
        }
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, source[key]));
      }
    });
  }
  return mergeDeep.apply(void 0, [target].concat(sources));
};
var overwriteExistingProperties = function overwriteExistingProperties(obj1, obj2) {
  Object.keys(obj2).forEach(function (key) {
    if (key in obj1) {
      obj1[key] = obj2[key];
    }
  });
  return obj1;
};

/***/ }),

/***/ "./src/validation/constrains/additionalProperties.js":
/*!***********************************************************!*\
  !*** ./src/validation/constrains/additionalProperties.js ***!
  \***********************************************************/
/*! exports provided: additionalProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "additionalProperties", function() { return additionalProperties; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");



var additionalProperties = function additionalProperties(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema.additionalProperties())) {
    var properties = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema.properties()) ? schema.properties() : {};
    var _additionalProperties = schema.additionalProperties();
    var patternProperties = schema.patternProperties();
    if (properties) {
      Object.keys(value).forEach(function (property) {
        var definedInPatternProperty = false;
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(patternProperties)) {
          Object.keys(patternProperties).forEach(function (pattern) {
            var regexp = new RegExp(pattern);
            definedInPatternProperty = regexp.test(property);
          });
        }
        if (!definedInPatternProperty && _additionalProperties === false && !Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(properties, property)) {
          errors.push({
            message: "Property \"".concat(property, "\" has not been defined and the schema does not allow additional properties."),
            path: path
          });
        }
        if (!definedInPatternProperty && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(_additionalProperties) && !Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(properties, property)) {
          var editor = new _jedi__WEBPACK_IMPORTED_MODULE_2__["default"]({
            rootName: property,
            schema: _additionalProperties,
            startValue: value[property],
            refParser: false
          });
          var additionalPropertyErrors = editor.getErrors().map(function (error) {
            return {
              message: error.message,
              path: property
            };
          });
          errors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(errors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(additionalPropertyErrors));
          editor.destroy();
        }
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/allOf.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/allOf.js ***!
  \********************************************/
/*! exports provided: allOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allOf", function() { return allOf; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");



var allOf = function allOf(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema.allOf())) {
    schema.allOf().forEach(function (schema) {
      var subSchemaEditor = new _jedi__WEBPACK_IMPORTED_MODULE_2__["default"]({
        schema: schema,
        startValue: value,
        rootName: key,
        refParser: false
      });
      var subSchemaErrors = subSchemaEditor.getErrors();
      subSchemaEditor.destroy();
      errors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(errors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(subSchemaErrors));
    });
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/anyOf.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/anyOf.js ***!
  \********************************************/
/*! exports provided: anyOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anyOf", function() { return anyOf; });
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


var anyOf = function anyOf(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema.anyOf())) {
    var _anyOf = schema.anyOf();
    var valid = false;
    _anyOf.forEach(function (schema) {
      var anyOfEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        schema: schema,
        startValue: value,
        refParser: false
      });
      var anyOfErrors = anyOfEditor.getErrors();
      anyOfEditor.destroy();
      if (anyOfErrors.length === 0) {
        valid = true;
      }
    });
    if (!valid) {
      errors.push({
        message: 'Must validate against at least one of the provided schemas',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/const.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/const.js ***!
  \********************************************/
/*! exports provided: _const */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_const", function() { return _const; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var _const = function _const(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema["const"]())) {
    var valueIsNotEqualConst = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["different"])(value, schema["const"]());
    var invalid = valueIsNotEqualConst;
    if (invalid) {
      errors.push({
        message: 'Must be: ' + JSON.stringify(schema["const"]()),
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/contains.js":
/*!***********************************************!*\
  !*** ./src/validation/constrains/contains.js ***!
  \***********************************************/
/*! exports provided: contains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");


var contains = function contains(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.contains())) {
    var counter = 0;
    value.forEach(function (item) {
      var containsEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
        schema: schema.contains(),
        startValue: item,
        refParser: false
      });
      var containsErrors = containsEditor.getErrors();
      if (containsErrors.length === 0) {
        counter++;
      }
      containsEditor.destroy();
    });
    var containsInvalid = counter === 0;
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.minContains())) {
      var minContainsInvalid = counter < schema.minContains();
      if (minContainsInvalid) {
        errors.push({
          message: "Contains match count ".concat(counter, " is less than minimum contains count of ").concat(schema.minContains()),
          path: path
        });
      }
    } else {
      if (containsInvalid) {
        errors.push({
          message: 'No items match contains',
          path: path
        });
      }
    }
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.maxContains())) {
      var maxContainsInvalid = counter > schema.maxContains();
      if (maxContainsInvalid) {
        errors.push({
          message: "Contains match count ".concat(counter, " exceeds maximum contains count of ").concat(schema.maxContains()),
          path: path
        });
      }
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/dependentRequired.js":
/*!********************************************************!*\
  !*** ./src/validation/constrains/dependentRequired.js ***!
  \********************************************************/
/*! exports provided: dependentRequired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dependentRequired", function() { return dependentRequired; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var dependentRequired = function dependentRequired(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.dependentRequired())) {
    var missingProperties = [];
    Object.keys(schema.dependentRequired()).forEach(function (key) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(value[key])) {
        var requiredProperties = schema.dependentRequired()[key];
        missingProperties = requiredProperties.filter(function (property) {
          return !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(value, property);
        });
      }
    });
    var invalid = missingProperties.length > 0;
    if (invalid) {
      errors.push({
        message: 'Must have the required properties: ' + missingProperties.join(', '),
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/dependentSchemas.js":
/*!*******************************************************!*\
  !*** ./src/validation/constrains/dependentSchemas.js ***!
  \*******************************************************/
/*! exports provided: dependentSchemas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dependentSchemas", function() { return dependentSchemas; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");



var dependentSchemas = function dependentSchemas(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema.dependentSchemas())) {
    Object.keys(schema.dependentSchemas()).forEach(function (key) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(value[key])) {
        var dependentSchema = schema.dependentSchemas()[key];
        var tmpEditor = new _jedi__WEBPACK_IMPORTED_MODULE_2__["default"]({
          schema: dependentSchema,
          startValue: value,
          refParser: false
        });
        var tmpErrors = tmpEditor.getErrors();
        tmpEditor.destroy();
        errors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(errors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tmpErrors));
      }
    });
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/enum.js":
/*!*******************************************!*\
  !*** ./src/validation/constrains/enum.js ***!
  \*******************************************/
/*! exports provided: _enum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_enum", function() { return _enum; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var _enum = function _enum(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema["enum"]())) {
    var invalid = !schema["enum"]().some(function (e) {
      return JSON.stringify(value) === JSON.stringify(e);
    });
    if (invalid) {
      errors.push({
        message: 'Must be one of the enumerated values: ' + JSON.stringify(schema["enum"]()),
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/exclusiveMaximum.js":
/*!*******************************************************!*\
  !*** ./src/validation/constrains/exclusiveMaximum.js ***!
  \*******************************************************/
/*! exports provided: exclusiveMaximum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclusiveMaximum", function() { return exclusiveMaximum; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var exclusiveMaximum = function exclusiveMaximum(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.exclusiveMaximum())) {
    var invalid = value >= schema.exclusiveMaximum();
    if (invalid) {
      errors.push({
        message: 'Must be less than ' + schema.exclusiveMaximum(),
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/exclusiveMinimum.js":
/*!*******************************************************!*\
  !*** ./src/validation/constrains/exclusiveMinimum.js ***!
  \*******************************************************/
/*! exports provided: exclusiveMinimum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclusiveMinimum", function() { return exclusiveMinimum; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var exclusiveMinimum = function exclusiveMinimum(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.exclusiveMinimum())) {
    var invalid = value <= schema.exclusiveMinimum();
    if (invalid) {
      errors.push({
        message: 'Must be greater than ' + schema.exclusiveMinimum(),
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/format.js":
/*!*********************************************!*\
  !*** ./src/validation/constrains/format.js ***!
  \*********************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var format = function format(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.format()) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value)) {
    var message;
    var regexp;
    if (schema.formatIs('email')) {
      regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
      message = 'Must be a valid email address';
    }
    if (schema.formatIs('url')) {
      regexp = new RegExp(/^(?:http[s\u017F]?|ftp):\/\/(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!(?:10|127)(?:\.[0-9]{1,3}){3})(?!(?:169\.254|192\.168)(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])*)?$/i);
      message = 'Must be a valid email url';
    }
    if (schema.formatIs('uuid')) {
      regexp = new RegExp(/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i);
      message = 'Must be a valid email uuid';
    }
    var invalid = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(regexp) && !regexp.test(value);
    if (invalid) {
      errors.push({
        message: message,
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/if.js":
/*!*****************************************!*\
  !*** ./src/validation/constrains/if.js ***!
  \*****************************************/
/*! exports provided: _if */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_if", function() { return _if; });
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


var _if = function _if(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema["if"]())) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["notSet"])(schema.then()) && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["notSet"])(schema["else"]())) {
      return errors;
    }
    var ifEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
      schema: schema["if"](),
      startValue: value,
      refParser: false
    });
    var ifErrors = ifEditor.getErrors();
    ifEditor.destroy();
    var thenErrors = [];
    var elseErrors = [];
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema.then())) {
      var thenEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        schema: schema.then(),
        startValue: value,
        refParser: false
      });
      thenErrors = thenEditor.getErrors();
      thenEditor.destroy();
    }
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema["else"]())) {
      var elseEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        schema: schema["else"](),
        startValue: value,
        refParser: false
      });
      elseErrors = elseEditor.getErrors();
      elseEditor.destroy();
    }
    if (schema["if"]() === true) {
      return thenErrors;
    }
    if (schema["if"]() === false) {
      return elseErrors;
    }
    if (ifErrors.length === 0) {
      return thenErrors;
    }
    if (ifErrors.length > 0) {
      return elseErrors;
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/items.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/items.js ***!
  \********************************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var items = function items(validator, value, schema, key, path) {
  var errors = [];

  // todo if array length is > prefixItems.length
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.items())) {
    var prefixItemsSchemasCount = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.prefixItems()) ? schema.prefixItems().length : 0;
    if (schema.items() === false && value.length > 0 && value.length > prefixItemsSchemasCount) {
      errors.push({
        message: 'Schema always fails validation.',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/maxItems.js":
/*!***********************************************!*\
  !*** ./src/validation/constrains/maxItems.js ***!
  \***********************************************/
/*! exports provided: maxItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxItems", function() { return maxItems; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var maxItems = function maxItems(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.maxItems())) {
    var invalid = value.length > schema.maxItems();
    if (invalid) {
      errors.push({
        message: 'Must have at most ' + schema.maxItems() + ' items',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/maxLength.js":
/*!************************************************!*\
  !*** ./src/validation/constrains/maxLength.js ***!
  \************************************************/
/*! exports provided: maxLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var maxLength = function maxLength(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.maxLength())) {
    value = value.replace(/[\uDCA9]/g, ''); // remove Unicode code points
    var invalid = value.length > schema.maxLength();
    if (invalid) {
      errors.push({
        message: 'Must be at most ' + schema.maxLength() + ' characters long',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/maxProperties.js":
/*!****************************************************!*\
  !*** ./src/validation/constrains/maxProperties.js ***!
  \****************************************************/
/*! exports provided: maxProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxProperties", function() { return maxProperties; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var maxProperties = function maxProperties(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.maxProperties())) {
    var propertiesCount = Object.keys(value).length;
    var invalid = propertiesCount > schema.maxProperties();
    if (invalid) {
      errors.push({
        message: 'Must have at most ' + schema.maxProperties() + ' properties',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/maximum.js":
/*!**********************************************!*\
  !*** ./src/validation/constrains/maximum.js ***!
  \**********************************************/
/*! exports provided: maximum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximum", function() { return maximum; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var maximum = function maximum(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.maximum())) {
    var computedMaximum = schema.maximum();
    var invalid = value > computedMaximum;
    if (invalid) {
      errors.push({
        message: 'Must be less than ' + computedMaximum,
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/minItems.js":
/*!***********************************************!*\
  !*** ./src/validation/constrains/minItems.js ***!
  \***********************************************/
/*! exports provided: minItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minItems", function() { return minItems; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var minItems = function minItems(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.minItems())) {
    var invalid = value.length < schema.minItems();
    if (invalid) {
      errors.push({
        message: 'Must have at least ' + schema.minItems() + ' items',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/minLength.js":
/*!************************************************!*\
  !*** ./src/validation/constrains/minLength.js ***!
  \************************************************/
/*! exports provided: minLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLength", function() { return minLength; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var minLength = function minLength(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.minLength())) {
    value = value.replace(/[\uDCA9]/g, ''); // remove Unicode code points
    var invalid = value.length < schema.minLength();
    if (invalid) {
      errors.push({
        message: 'Must be at least ' + schema.minLength() + ' characters long',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/minProperties.js":
/*!****************************************************!*\
  !*** ./src/validation/constrains/minProperties.js ***!
  \****************************************************/
/*! exports provided: minProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minProperties", function() { return minProperties; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var minProperties = function minProperties(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.minProperties())) {
    var propertiesCount = Object.keys(value).length;
    var invalid = propertiesCount < schema.minProperties();
    if (invalid) {
      errors.push({
        message: 'Must have at least ' + schema.minProperties() + ' properties',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/minimum.js":
/*!**********************************************!*\
  !*** ./src/validation/constrains/minimum.js ***!
  \**********************************************/
/*! exports provided: minimum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimum", function() { return minimum; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var minimum = function minimum(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.minimum())) {
    var computedMinimum = schema.minimum();
    var invalid = value < computedMinimum;
    if (invalid) {
      errors.push({
        message: 'Must be at least ' + computedMinimum,
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/multipleOf.js":
/*!*************************************************!*\
  !*** ./src/validation/constrains/multipleOf.js ***!
  \*************************************************/
/*! exports provided: multipleOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multipleOf", function() { return multipleOf; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var multipleOf = function multipleOf(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.multipleOf())) {
    var isMultipleOf = value / schema.multipleOf() === Math.floor(value / schema.multipleOf());
    var invalid = !isMultipleOf || value.toString().includes('e');
    if (invalid) {
      errors.push({
        message: 'Must be multiple of ' + schema.multipleOf(),
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/not.js":
/*!******************************************!*\
  !*** ./src/validation/constrains/not.js ***!
  \******************************************/
/*! exports provided: not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../schema */ "./src/schema.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


var not = function not(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema.not())) {
    var notErrors = validator.getErrors(value, new _schema__WEBPACK_IMPORTED_MODULE_0__["default"](schema.not()), key, path);
    var invalid = notErrors.length === 0;
    if (invalid) {
      errors.push({
        message: 'Must not validate against the provided schema.',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/oneOf.js":
/*!********************************************!*\
  !*** ./src/validation/constrains/oneOf.js ***!
  \********************************************/
/*! exports provided: oneOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOf", function() { return oneOf; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");


var oneOf = function oneOf(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.oneOf())) {
    var counter = 0;
    schema.oneOf().forEach(function (schema) {
      var oneOfEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
        schema: schema,
        startValue: value,
        refParser: false
      });
      var oneOfErrors = oneOfEditor.getErrors();
      oneOfEditor.destroy();
      if (oneOfErrors.length === 0) {
        counter++;
      }
    });
    if (counter !== 1) {
      errors.push({
        message: 'Must validate against exactly one of the provided schemas. It currently validates against ' + counter + ' of the schemas.',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/pattern.js":
/*!**********************************************!*\
  !*** ./src/validation/constrains/pattern.js ***!
  \**********************************************/
/*! exports provided: pattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var pattern = function pattern(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.pattern())) {
    var regexp = new RegExp(schema.pattern());
    var invalid = !regexp.test(value);
    if (invalid) {
      errors.push({
        message: 'Must be the pattern: ' + schema.pattern(),
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/patternProperties.js":
/*!********************************************************!*\
  !*** ./src/validation/constrains/patternProperties.js ***!
  \********************************************************/
/*! exports provided: patternProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternProperties", function() { return patternProperties; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");



var patternProperties = function patternProperties(validator, value, schema, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema.patternProperties())) {
    var _patternProperties = schema.patternProperties();
    Object.keys(value).forEach(function (propertyName) {
      Object.keys(_patternProperties).forEach(function (pattern) {
        var regexp = new RegExp(pattern);
        if (regexp.test(propertyName)) {
          var _schema = _patternProperties[pattern];
          var editor = new _jedi__WEBPACK_IMPORTED_MODULE_2__["default"]({
            schema: _schema,
            startValue: value[propertyName],
            refParser: false
          });
          var editorErrors = editor.getErrors().map(function (error) {
            return {
              message: error.message,
              path: path + '/' + propertyName
            };
          });
          errors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(errors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(editorErrors));
          editor.destroy();
        }
      });
    });
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/prefixItems.js":
/*!**************************************************!*\
  !*** ./src/validation/constrains/prefixItems.js ***!
  \**************************************************/
/*! exports provided: prefixItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixItems", function() { return prefixItems; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");


var prefixItems = function prefixItems(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.prefixItems())) {
    schema.prefixItems().forEach(function (itemSchema, index) {
      var itemValue = value[index];
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(itemValue)) {
        var tmpEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
          schema: itemSchema,
          startValue: itemValue,
          refParser: false
        });
        var tmpErrors = tmpEditor.getErrors();
        tmpEditor.destroy();
        if (tmpErrors.length > 0) {
          errors.push({
            message: "Item ".concat(index, " fails validation."),
            path: path
          });
        }
      }
    });
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/required.js":
/*!***********************************************!*\
  !*** ./src/validation/constrains/required.js ***!
  \***********************************************/
/*! exports provided: required */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var required = function required(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.required())) {
    var missingProperties = [];
    var keys = Object.keys(value);
    schema.required().forEach(function (key) {
      if (!keys.includes(key)) {
        missingProperties.push(key);
      }
    });
    var invalid = missingProperties.length > 0;
    if (invalid) {
      errors.push({
        message: 'Must have the required properties: ' + missingProperties.join(', '),
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/type.js":
/*!*******************************************!*\
  !*** ./src/validation/constrains/type.js ***!
  \*******************************************/
/*! exports provided: type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var type = function type(validator, value, schema, key, path) {
  var errors = [];
  if (schema.typeIs('any')) {
    return errors;
  }
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.type())) {
    var types = {
      string: function string(value) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value);
      },
      number: function number(value) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value);
      },
      integer: function integer(value) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isInteger"])(value);
      },
      "boolean": function boolean(value) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isBoolean"])(value);
      },
      array: function array(value) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value);
      },
      object: function object(value) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value);
      },
      "null": function _null(value) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNull"])(value);
      }
    };
    var valid = true;
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(schema.type())) {
      valid = schema.type().some(function (type) {
        return types[type](value);
      });
    } else {
      valid = types[schema.type()](value);
    }
    if (!valid) {
      errors.push({
        message: 'Must be of type ' + schema.type(),
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/constrains/uniqueItems.js":
/*!**************************************************!*\
  !*** ./src/validation/constrains/uniqueItems.js ***!
  \**************************************************/
/*! exports provided: uniqueItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueItems", function() { return uniqueItems; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

var uniqueItems = function uniqueItems(validator, value, schema, key, path) {
  var errors = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.uniqueItems()) && schema.uniqueItems() === true) {
    var seen = [];
    var hasDuplicatedItems = false;
    var _loop = function _loop() {
      var item = value[i];
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(item)) {
        item = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortObject"])(item);
      }
      var itemStringified = JSON.stringify(item);
      hasDuplicatedItems = seen.some(function (seen) {
        return seen === itemStringified;
      });
      if (hasDuplicatedItems) {
        return "break";
      } else {
        seen.push(itemStringified);
      }
    };
    for (var i = 0; i < value.length; i++) {
      var _ret = _loop();
      if (_ret === "break") break;
    }
    var invalid = hasDuplicatedItems;
    if (invalid) {
      errors.push({
        message: 'Must have unique items',
        path: path
      });
    }
  }
  return errors;
};

/***/ }),

/***/ "./src/validation/drafts/draft-2020-12.js":
/*!************************************************!*\
  !*** ./src/validation/drafts/draft-2020-12.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/const */ "./src/validation/constrains/const.js");
/* harmony import */ var _constrains_contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/contains */ "./src/validation/constrains/contains.js");
/* harmony import */ var _constrains_anyOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/anyOf */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_dependentRequired__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/dependentRequired */ "./src/validation/constrains/dependentRequired.js");
/* harmony import */ var _constrains_dependentSchemas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/dependentSchemas */ "./src/validation/constrains/dependentSchemas.js");
/* harmony import */ var _constrains_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/enum */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/exclusiveMaximum */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/exclusiveMinimum */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/format */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_if__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/if */ "./src/validation/constrains/if.js");
/* harmony import */ var _constrains_items__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/items */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/maxItems */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/maxLength */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/maxProperties */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/minimum */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/minItems */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/minProperties */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/multipleOf */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/not */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/oneOf */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/pattern */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/patternProperties */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_prefixItems__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../constrains/prefixItems */ "./src/validation/constrains/prefixItems.js");
/* harmony import */ var _constrains_required__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constrains/required */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constrains/type */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constrains/maximum */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../constrains/uniqueItems */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constrains/additionalProperties */ "./src/validation/constrains/additionalProperties.js");






























/* harmony default export */ __webpack_exports__["default"] = ({
  additionalProperties: _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_29__["additionalProperties"],
  allOf: _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__["allOf"],
  anyOf: _constrains_anyOf__WEBPACK_IMPORTED_MODULE_4__["anyOf"],
  "const": _constrains_const__WEBPACK_IMPORTED_MODULE_2__["_const"],
  contains: _constrains_contains__WEBPACK_IMPORTED_MODULE_3__["contains"],
  dependentRequired: _constrains_dependentRequired__WEBPACK_IMPORTED_MODULE_5__["dependentRequired"],
  dependentSchemas: _constrains_dependentSchemas__WEBPACK_IMPORTED_MODULE_6__["dependentSchemas"],
  "enum": _constrains_enum__WEBPACK_IMPORTED_MODULE_7__["_enum"],
  exclusiveMaximum: _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_8__["exclusiveMaximum"],
  exclusiveMinimum: _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_9__["exclusiveMinimum"],
  format: _constrains_format__WEBPACK_IMPORTED_MODULE_10__["format"],
  "if": _constrains_if__WEBPACK_IMPORTED_MODULE_11__["_if"],
  items: _constrains_items__WEBPACK_IMPORTED_MODULE_12__["items"],
  maximum: _constrains_maximum__WEBPACK_IMPORTED_MODULE_27__["maximum"],
  maxItems: _constrains_maxItems__WEBPACK_IMPORTED_MODULE_13__["maxItems"],
  maxLength: _constrains_maxLength__WEBPACK_IMPORTED_MODULE_14__["maxLength"],
  maxProperties: _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_15__["maxProperties"],
  minimum: _constrains_minimum__WEBPACK_IMPORTED_MODULE_16__["minimum"],
  minItems: _constrains_minItems__WEBPACK_IMPORTED_MODULE_17__["minItems"],
  minLength: _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__["minLength"],
  minProperties: _constrains_minProperties__WEBPACK_IMPORTED_MODULE_18__["minProperties"],
  multipleOf: _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_19__["multipleOf"],
  not: _constrains_not__WEBPACK_IMPORTED_MODULE_20__["not"],
  oneOf: _constrains_oneOf__WEBPACK_IMPORTED_MODULE_21__["oneOf"],
  pattern: _constrains_pattern__WEBPACK_IMPORTED_MODULE_22__["pattern"],
  patternProperties: _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_23__["patternProperties"],
  prefixItems: _constrains_prefixItems__WEBPACK_IMPORTED_MODULE_24__["prefixItems"],
  required: _constrains_required__WEBPACK_IMPORTED_MODULE_25__["required"],
  type: _constrains_type__WEBPACK_IMPORTED_MODULE_26__["type"],
  uniqueItems: _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_28__["uniqueItems"]
});

/***/ }),

/***/ "./src/validation/validator.js":
/*!*************************************!*\
  !*** ./src/validation/validator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _drafts_draft_2020_12__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drafts/draft-2020-12 */ "./src/validation/drafts/draft-2020-12.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





var Validator = /*#__PURE__*/function () {
  function Validator() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Validator);
    this.draft = _drafts_draft_2020_12__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

  /**
   * Validates a value against it's schema
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Validator, [{
    key: "getErrors",
    value: function getErrors(value, schema, key, path) {
      var _this = this;
      var schemaErrors = [];
      var schemaClone = schema.clone();
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isBoolean"])(schemaClone) && schemaClone === true) {
        return schemaErrors;
      }
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isBoolean"])(schemaClone) && schemaClone === false) {
        return [{
          message: schema.option('message') ? schema.option('message') : 'invalid',
          path: path
        }];
      }
      Object.keys(this.draft).forEach(function (constrain) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["hasOwn"])(schemaClone, constrain)) {
          var validator = _this.draft[constrain];
          var validatorErrors = validator(_this, value, schema, key, path);
          if (validatorErrors) {
            schemaErrors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(schemaErrors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(validatorErrors));
          }
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
/* harmony default export */ __webpack_exports__["default"] = (Validator);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJBcnJheUVkaXRvciIsIl9FZGl0b3IiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYnVpbGQiLCJfdGhpcyIsImNvbnRyb2wiLCJ0aGVtZSIsImdldEFycmF5Q29udHJvbCIsInRpdGxlIiwiaXNTZXQiLCJpbnN0YW5jZSIsInNjaGVtYSIsImdldEtleSIsInNyT25seSIsIm9wdGlvbiIsImlkIiwicGF0aFRvQXR0cmlidXRlIiwicGF0aCIsImRlc2NyaXB0aW9uIiwiYWRkQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwic2V0VmFsdWUiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImdldEludmFsaWRGZWVkYmFjayIsIm1lc3NhZ2UiLCJnZXRBbGVydCIsInNhbml0aXplIiwiaXNBcnJheSIsInJlZnJlc2hVSSIsIl90aGlzMiIsImNoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiY2hpbGRUaXRsZSIsImFycmF5SXRlbSIsImdldEFycmF5SXRlbSIsImxlZ2VuZCIsInVpIiwiZGVsZXRlQnRuIiwic3BsaXQiLCJqZWRpIiwicGF0aFNlcGFyYXRvciIsInBvcCIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlZCIsImRpc2FibGUiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJlbmFibGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJFZGl0b3IiLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwiX0Jvb2xlYW5FZGl0b3IiLCJnZXRSYWRpb3NDb250cm9sIiwidmFsdWVzIiwidGl0bGVzIiwibGFiZWwiLCJyYWRpb3MiLCJyYWRpbyIsInJhZGlvVmFsdWUiLCJjaGVja2VkIiwiZ2V0VmFsdWUiLCJCb29sZWFuRWRpdG9yIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3RDb250cm9sIiwiaW5wdXQiLCJnZXRDaGVja2JveENvbnRyb2wiLCJCb29sZWFuIiwiX0V2ZW50RW1pdHRlciIsImNhbGwiLCJpbml0Iiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJhbHdheXNTaG93RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJvbiIsIlRoZW1lQm9vdHN0cmFwMyIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsIlRoZW1lQmFyZWJvbmVzIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwidHlwZSIsImVycm9ycyIsImdldEVycm9ycyIsIm1lc3NhZ2VzIiwiZXJyb3IiLCJpbnZhbGlkRmVlZGJhY2siLCJkZXN0cm95IiwiX3RoaXMzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsIkV2ZW50RW1pdHRlciIsIk11bHRpcGxlRWRpdG9yIiwiZ2V0TXVsdGlwbGVDb250cm9sIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJzd2l0Y2hlciIsImluZGV4Iiwic3dpdGNoSW5zdGFuY2UiLCJvbGRJbnN0YW5jZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsImFjdGl2ZUluc3RhbmNlIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIk51bGxFZGl0b3IiLCJnZXROdWxsQ29udHJvbCIsImZvcm1hdElzIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiX051bWJlckVkaXRvciIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJnZXRJbnB1dENvbnRyb2wiLCJ0eXBlSXMiLCJNYXRoIiwiZmxvb3IiLCJpc051bWJlciIsIk9iamVjdEVkaXRvciIsImdldE9iamVjdENvbnRyb2wiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJlcXVhbCIsImFkZFByb3BlcnR5QnRuIiwiYWRkUHJvcGVydHlDb250cm9sIiwicHJvcGVydHlOYW1lRW1wdHkiLCJsZW5ndGgiLCJwcm9wZXJ0eUV4aXN0IiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJjcmVhdGVDaGlsZCIsImFjdGl2YXRlIiwiaXNPYmplY3QiLCJyZWZyZXNoUHJvcGVydGllc1Nsb3QiLCJwcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjaGVjYm94Q29udHJvbCIsImNoZWNrYm94IiwiaGFzT3duIiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJkZWFjdGl2YXRlIiwicmVmcmVzaEVkaXRvcnMiLCJpc0FjdGl2ZSIsInByb3BlcnRpZXNUb2dnbGUiLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJfU3RyaW5nRWRpdG9yIiwiU3RyaW5nRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsImlucHV0VHlwZXMiLCJnZXRUZXh0YXJlYUNvbnRyb2wiLCJpbmNsdWRlcyIsImZvcm1hdCIsIlN0cmluZyIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsInB1c2giLCJlbWl0IiwiZmlsdGVyIiwibGlzdGVuZXIiLCJBcnJheUluc3RhbmNlIiwiX0luc3RhbmNlIiwic2V0VUkiLCJwcmVwYXJlIiwiY2FjaGUiLCJyZWZyZXNoQ2hpbGRyZW4iLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJpdGVtc0NvdW50IiwiaXRlbXMiLCJoYXNQcmVmaXhJdGVtc1NjaGVtYSIsInByZWZpeEl0ZW1zIiwibm90U2V0IiwiZ2V0VHlwZSIsImNyZWF0ZUluc3RhbmNlIiwicGFyZW50IiwiZnJvbUluZGV4IiwiY2xvbmUiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNhY2hlSW5kZXgiLCJjdXJyZW50VmFsdWUiLCJuZXdWYWx1ZSIsIm9uQ2hpbGRDaGFuZ2UiLCJpdGVtVmFsdWUiLCJJbnN0YW5jZSIsIkJvb2xlYW5JbnN0YW5jZSIsImNvbmZpZyIsInVuZGVmaW5lZCIsInJvb3ROYW1lIiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInVucmVnaXN0ZXIiLCJkZWZhdWx0RXJyb3JzIiwidmFsaWRhdG9yIiwidmFsaWREZWZhdWx0IiwidHJpZ2dlcnNDaGFuZ2UiLCJNdWx0aXBsZUluc3RhbmNlIiwic2NoZW1hcyIsIm9uU2V0VmFsdWUiLCJzY2hlbWFDbG9uZSIsInRoZW5TY2hlbWEiLCJ0aGVuIiwibWVyZ2VEZWVwIiwiZWxzZVNjaGVtYSIsImFueU9mIiwib25lT2YiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIl9zY2hlbWEkb3B0aW9ucyIsIl9zY2hlbWEkb3B0aW9uczIiLCJfb2JqZWN0U3ByZWFkIiwiYWxsT2YiLCJtZXJnZUFsbE9mIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0Iiwic3dpdGNoSWYiLCJuZXdJbmRleCIsImlmSW5kZXgiLCJnZXRJZkluZGV4IiwicHJlVmFsdWUiLCJmaW5hbFZhbHVlIiwib3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIiwiaWZFZGl0b3IiLCJKZWRpIiwic3RhcnRWYWx1ZSIsInJlZlBhcnNlciIsImlmRXJyb3JzIiwiZ2V0Rml0dGVzdEluZGV4IiwiZml0dGVzdEluZGV4IiwiY2hhbXBpb25FcnJvcnMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiaW5zdGFuY2VFcnJvcnMiLCJlcnIiLCJlIiwiZiIsImRpZmZlcmVudCIsIk51bGxJbnN0YW5jZSIsIk51bWJlckluc3RhbmNlIiwidHlwZUlzTnVtZXJpYyIsIk9iamVjdEluc3RhbmNlIiwicHJvcGVydGllcyIsInJlZnJlc2hJbnN0YW5jZXMiLCJwcm9wZXJ0eSIsInJlcXVpcmVkIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImlzTm90UmVxdWlyZWQiLCJzaG91bGRTdGFydERlYWN0aXZhdGVkIiwiZGVhY3RpdmF0ZVByb3BlcnRpZXMiLCJkZWxldGVDaGlsZCIsImkiLCJnZXRDaGlsZCIsImZpbmQiLCJfdGhpczQiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIlN0cmluZ0luc3RhbmNlIiwiYXNzaWduIiwic2hvd1JlcXVpcmVkT25seSIsInJvb3QiLCJWYWxpZGF0b3IiLCJSZWZQYXJzZXIiLCJYTUxIdHRwUmVxdWVzdCIsImRlcmVmZXJlbmNlIiwiU2NoZW1hIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoaWRkZW5Db250cm9sIiwiaGlkZGVuSW5wdXQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVmaW5lIiwib3JpZ2luYWxTY2hlbWEiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJlZGl0b3IiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfdGhpczUiLCJpdGVyYXRpb25zIiwiZGVmaW5pdGlvbnMiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWZPd25lciIsInByZXZWYWx1ZSIsInJlZiIsImlzQ2lyY3VsYXJQYXRoIiwiY29uc29sZSIsImxvZyIsIm91dHB1dCIsInN1YnN0cmluZyIsImhhbGYiLCJjZWlsIiwiZmlyc3RIYWxmIiwic2Vjb25kSGFsZiIsImlzU3RyaW5nIiwic3RhcnRzV2l0aCIsInJlcXVlc3QiLCJvcGVuIiwic2VuZCIsInN0YXR1cyIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaXNCb29sZWFuIiwiX2NvbnN0IiwiY29udGFpbnMiLCJfZGVmYXVsdCIsImRlcGVuZGVudFNjaGVtYXMiLCJfZWxzZSIsIl9lbnVtIiwiZXhjbHVzaXZlTWF4aW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJfaWYiLCJtYXhpbXVtIiwibWF4Q29udGFpbnMiLCJpc0ludGVnZXIiLCJtYXhJdGVtcyIsIm1heExlbmd0aCIsIm1heFByb3BlcnRpZXMiLCJtaW5pbXVtIiwibWluQ29udGFpbnMiLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90IiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJTZXQiLCJ1bmlxdWVJdGVtcyIsImh0bWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRGaWVsZHNldCIsImdldEZpZWxkc2V0Qm9keSIsImdldExlZ2VuZCIsInRleHRDb250ZW50Iiwic3R5bGUiLCJmb250U2l6ZSIsImdldEZpZWxkc2V0Rm9vdGVyIiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldEFycmF5QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRDb250cm9sU2xvdCIsImdldFByb3BlcnRpZXNUb2dnbGUiLCJnZXRCdXR0b24iLCJnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImdldEJ0bkdyb3VwIiwiZ2V0QXJyYXlCdG5BZGQiLCJnZXRBcnJheUJ0bkRlbGV0ZUFsbCIsImdldEJ1dHRvbkFjdGl2ZUNsYXNzIiwiZ2V0RGVzY3JpcHRpb24iLCJmaWVsZHNldCIsImFjdGlvbnMiLCJib2R5IiwicHJvcGVydGllc0NvbnRhaW5lciIsImJ0bkdyb3VwIiwiZ2V0U3dpdGNoZXIiLCJsYWJlbFRleHQiLCJkZXNjcmlwdGlvbklkIiwicmFkaW9Db250cm9scyIsImxhYmVscyIsImxhYmVsVGV4dHMiLCJyYWRpb0NvbnRyb2wiLCJfVGhlbWVCYXJlYm9uZXMiLCJmb290ZXIiLCJfZ2V0JGNhbGwiLCJfZ2V0JGNhbGwyIiwiX2dldCRjYWxsMyIsIl9nZXQkY2FsbDQiLCJfZ2V0JGNhbGw1IiwiX2dldCRjYWxsNiIsInJlbW92ZSIsImNvbnRyb2xTbG90IiwidGhpbmciLCJmYWtlRm9yRWFjaCIsImFycmF5IiwiZXNjYXBlUmVnRXhwIiwic3RyaW5nIiwicmVwbGFjZSIsInJlcGxhY2VBbGwiLCJzdHIiLCJSZWdFeHAiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsInByZXR0eSIsInJvdW5kMmRlY2ltYWxzIiwibnVtYmVyIiwicm91bmQiLCJzb3J0T2JqZWN0Iiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImEiLCJiIiwiaXNOdWxsIiwiQXJyYXkiLCJfdHlwZW9mIiwidGFyZ2V0IiwiX2xlbiIsInNvdXJjZXMiLCJfa2V5Iiwic291cmNlIiwic2hpZnQiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoxIiwib2JqMiIsImRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSIsInJlZ2V4cCIsInRlc3QiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJtYXAiLCJzdWJTY2hlbWFFZGl0b3IiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJjb3VudGVyIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsImpvaW4iLCJkZXBlbmRlbnRTY2hlbWEiLCJ0bXBFZGl0b3IiLCJ0bXBFcnJvcnMiLCJzb21lIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50IiwicHJvcGVydGllc0NvdW50IiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJvYmplY3QiLCJfbnVsbCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJfbG9vcCIsIml0ZW1TdHJpbmdpZmllZCIsIl9yZXQiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsImNvbnN0cmFpbiIsInZhbGlkYXRvckVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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S0FBSSxFQUFFRixLQUFLLEVBQUVTLE1BQU0sRUFBRVYsR0FBRyxFQUFFZ0IsSUFBSSxDQUFDO1VBRWpFLElBQUk0ZCxlQUFlLEVBQUU7WUFDbkJGLFlBQVksTUFBQXhMLE1BQUEsQ0FBQUMsK0VBQUEsQ0FBT3VMLFlBQVksR0FBQXZMLCtFQUFBLENBQUt5TCxlQUFlLEVBQUM7VUFDdEQ7UUFDRjtNQUNGLENBQUMsQ0FBQztNQUVGLElBQUlGLFlBQVksQ0FBQzlWLE1BQU0sR0FBRyxDQUFDLElBQUlsSSxNQUFNLENBQUNHLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUN2RDZkLFlBQVksR0FBRyxDQUNiO1VBQ0UvYyxPQUFPLEVBQUVqQixNQUFNLENBQUNHLE1BQU0sQ0FBQyxTQUFTLENBQUM7VUFDakNHLElBQUksRUFBRUE7UUFDUixDQUFDLENBQ0Y7TUFDSDtNQUVBLE9BQU8wZCxZQUFZO0lBQ3JCO0VBQUM7RUFBQSxPQUFBek0sU0FBQTtBQUFBO0FBR1lBLHdFQUFTLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2plZGkuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRBcnJheUNvbnRyb2woe1xuICAgICAgdGl0bGU6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBjaGlsZFRpdGxlID0gaXNTZXQoY2hpbGQuc2NoZW1hLnRpdGxlKCkpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiAnJ1xuXG4gICAgICBjb25zdCBhcnJheUl0ZW0gPSB0aGlzLnRoZW1lLmdldEFycmF5SXRlbSh7XG4gICAgICAgIGxlZ2VuZDogY2hpbGRUaXRsZSArICcgJyArIGl0ZW1JbmRleCxcbiAgICAgICAgc3JPbmx5OiB0cnVlXG4gICAgICB9KVxuXG4gICAgICBhcnJheUl0ZW0uY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRhaW5lcilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChhcnJheUl0ZW0uY29udGFpbmVyKVxuXG4gICAgICBhcnJheUl0ZW0uZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBhcnJheUl0ZW0ubW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgYXJyYXlJdGVtLm1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4uL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmNvbnRyb2wgPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEVkaXRvckNvbnRhaW5lcigpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjb250YWluZXIgYXR0cmlidXRlcyBsaWtlIGRhdGEtcGF0aCBhbmQgZGF0YS10eXBlXG4gICAqL1xuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIHRoZSBlZGl0b3IgY29udHJvbCBhbmQgYXBwZW5kcyBpdCB0byB0aGUgZWRpdG9yIGNvbnRhaW5lclxuICAgKi9cbiAgYnVpbGQgKCkge31cblxuICAvKipcbiAgICogVXBkYXRlcyBjb250cm9sIFVJIHdoZW4gaXRzIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcblxuICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TXVsdGlwbGVDb250cm9sKHtcbiAgICAgIHRpdGxlOiAnT3B0aW9ucycsXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSxcbiAgICAgIHN3aXRjaGVyT3B0aW9uVmFsdWVzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZChvbGRJbnN0YW5jZS51aS5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRhaW5lcilcblxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuaW5kZXhcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE51bGxDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHJhZGlvLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIHBhdGhUb0F0dHJpYnV0ZVxufSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0T2JqZWN0Q29udHJvbCh7XG4gICAgICB0aXRsZTogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7IHR5cGU6ICdhbnknIH1cblxuICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGxhYmVsOiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmFwcGVuZENoaWxkKGNoZWNib3hDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc1RvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzVG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBnZXRUeXBlLCBpc1NldCwgY2xvbmUsIGlzQXJyYXksIG5vdFNldCwgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuXG5jbGFzcyBBcnJheUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBBcnJheUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbXNDb3VudCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgbGV0IHNjaGVtYVxuXG4gICAgc2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEuaXRlbXMoKSkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKSkgJiYgaXNTZXQodGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKVtpdGVtc0NvdW50XSlcblxuICAgIGlmIChoYXNQcmVmaXhJdGVtc1NjaGVtYSkge1xuICAgICAgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKVtpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdChzY2hlbWEpICYmIG5vdFNldChzY2hlbWEudHlwZSkpIHtcbiAgICAgIHNjaGVtYS50eXBlID0gaXNTZXQodmFsdWUpID8gZ2V0VHlwZSh2YWx1ZSkgOiAnYW55J1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBpdGVtc0NvdW50LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBjYWNoZUluZGV4ID0gT2JqZWN0LmtleXModGhpcy5jYWNoZSkubGVuZ3RoXG4gICAgdGhpcy5jYWNoZVtjYWNoZUluZGV4XSA9IHRlbXBFZGl0b3JcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBpc1NldCh0aGlzLmNhY2hlW2luZGV4XSkgPyB0aGlzLmNhY2hlW2luZGV4XSA6IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIGNoaWxkLnNldFZhbHVlKGl0ZW1WYWx1ZSwgZmFsc2UpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuICAgIHRoaXMudWkgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQncyB0eXBlXG4gICAqL1xuICBzZXRJbml0aWFsVmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgLy8gaWYgKHRoaXMuc2NoZW1hLmVudW0oKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKClbMF0pKSB7XG4gICAgLy8gICB0aGlzLnZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgICAgIGNvbnN0IHZhbGlkRGVmYXVsdCA9IGRlZmF1bHRFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmICh2YWxpZERlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0LCBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXNcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5pZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICB0aGlzLnRoZW5TY2hlbWEgPSB0aGlzLnNjaGVtYS50aGVuKCkgPyBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lLCB0aGlzLnNjaGVtYS50aGVuKCkpIDogbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSlcbiAgICAgIHRoaXMuZWxzZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmVsc2UoKSA/IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUsIHRoaXMuc2NoZW1hLmVsc2UoKSkgOiBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lKVxuICAgICAgdGhpcy5zY2hlbWFzLnB1c2godGhpcy50aGVuU2NoZW1hKVxuICAgICAgdGhpcy5zY2hlbWFzLnB1c2godGhpcy5lbHNlU2NoZW1hKVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBzY2hlbWEuaWZcbiAgICAgICAgZGVsZXRlIHNjaGVtYS50aGVuXG4gICAgICAgIGRlbGV0ZSBzY2hlbWEuZWxzZVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFswLCAxXVxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbJ3RoZW4nLCAnZWxzZSddXG4gICAgfSBlbHNlIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICAgIHRoaXMuc3dpdGNoSWYoKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgIGNvbnN0IHNldFZhbHVlID0gaXNPYmplY3Qoc2NoZW1hQ2xvbmUpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZXNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKDAsIGZhbHNlLCBzZXRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSwgc2V0VmFsdWUgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMuaW5kZXhdXG5cbiAgICBpZiAoc2V0VmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJZiAoKSB7XG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmlmKCkpKSB7XG4gICAgICBjb25zdCBpZkluZGV4ID0gdGhpcy5nZXRJZkluZGV4KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgIGNvbnN0IHByZVZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGlmSW5kZXgpXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMoY3VycmVudFZhbHVlLCBwcmVWYWx1ZSlcbiAgICAgIHRoaXMuc2V0VmFsdWUoZmluYWxWYWx1ZSwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0SWZJbmRleCAodmFsdWUpIHtcbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiB0aGlzLnNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcbiAgICByZXR1cm4gaWZFcnJvcnMubGVuZ3RoID09PSAwID8gMCA6IDFcbiAgfVxuXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZVxuXG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGluc3RhbmNlIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gaW5zdGFuY2UgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIHZhbHVlKSkge1xuICAgICAgbGV0IGZpdHRlc3RJbmRleFxuXG4gICAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuaWYoKSkpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRJZkluZGV4KHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRGaXR0ZXN0SW5kZXgodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4LCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlSW5zdGFuY2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBpc1NldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCgpKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IGlzTm90UmVxdWlyZWQgPSAhdGhpcy5pc1JlcXVpcmVkKGtleSlcbiAgICBjb25zdCBzaG91bGRTdGFydERlYWN0aXZhdGVkID0gdGhpcy5qZWRpLm9wdGlvbnMuZGVhY3RpdmF0ZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdkZWFjdGl2YXRlUHJvcGVydGllcycpXG5cbiAgICBpZiAoaXNOb3RSZXF1aXJlZCAmJiBzaG91bGRTdGFydERlYWN0aXZhdGVkKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nSW5zdGFuY2VcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3InXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcbmltcG9ydCB7IGdldFR5cGUsIGhhc093biwgaXNBcnJheSwgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnYmFyZWJvbmVzJyxcbiAgICAgIHJlZlBhcnNlcjogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJvb3ROYW1lID0gJyMnXG4gICAgdGhpcy5wYXRoU2VwYXJhdG9yID0gJy8nXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodGhpcy5vcHRpb25zLnNjaGVtYSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgY29uc3QgaGlkZGVuQ29udHJvbCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IGhpZGRlbkNvbnRyb2wuaW5wdXRcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZVxuXG4gICAgLy8gY2lyY3VsYXIgJHJlZiBhcmUgbm90IGluaXRpYWxseSBkZXJlZmVyZW5jZWQgYW5kIG11c3QgYmUgZGVmaW5lZCBvbiBjcmVhdGlvblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyICYmIGhhc093bihjb25maWcuc2NoZW1hLCAnJHJlZicpKSB7XG4gICAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVmaW5lKGNvbmZpZy5zY2hlbWFbJyRyZWYnXSlcbiAgICB9XG5cbiAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChjb25maWcuc2NoZW1hLmlmKCkpIHx8IGlzU2V0KGNvbmZpZy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5vbmVPZigpKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgaXNBcnJheShjb25maWcuc2NoZW1hLnR5cGUoKSkgfHwgbm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgaWYgKG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkgJiYgaXNTZXQoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2NoZW1hID0gY29uZmlnLnNjaGVtYS5jbG9uZSgpXG4gICAgICAgIG9yaWdpbmFsU2NoZW1hLnR5cGUgPSBnZXRUeXBlKGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IuZ2V0RXJyb3JzKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjb250YWlucyAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmNvbnRhaW5zKSkgPyB0aGlzLnNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXBlbmRlbnRTY2hlbWFzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5lbHNlKSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLmZvcm1hdCgpKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICBpZiAoaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhDb250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhDb250YWlucykgJiYgdGhpcy5zY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Db250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Db250YWlucykgJiYgdGhpcy5zY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJlZml4SXRlbXMgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJjbGFzcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBodG1sLnN0eWxlLmZvbnRTaXplID0gJ2luaGVyaXQnXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRGb290ZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG5cbiAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICBodG1sLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLnZhbHVlKVxuICAgIH1cblxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFkZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUtYWxsJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnamVkaS1hY3RpdmUtYnRuJ1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0T2JqZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc1RvZ2dsZSA9IHRoaXMuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQ29udGFpbmVyID0gdGhpcy5nZXRQcm9wZXJ0aWVzU2xvdCh7XG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgY29uZmlnLmlkXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3BlcnRpZXNBY3RpdmF0b3JzID0gdGhpcy5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBjb25maWcuaWQsXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICBhZGRQcm9wZXJ0eUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLW9iamVjdC1hZGQnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGNvbmZpZy5lZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydGllc0FjdGl2YXRvcnMpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5Q29udHJvbC5jb250YWluZXIpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5QnRuKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBmaWVsZHNldCxcbiAgICAgIGxlZ2VuZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBwcm9wZXJ0aWVzVG9nZ2xlLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcixcbiAgICAgIGFkZFByb3BlcnR5Q29udHJvbCxcbiAgICAgIGFkZFByb3BlcnR5QnRuLFxuICAgICAgcHJvcGVydGllc0FjdGl2YXRvcnNcbiAgICB9XG4gIH1cblxuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5nZXRBcnJheUJ0bkFkZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVBbGxCdG4gPSB0aGlzLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVBbGxCdG4pXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgZmllbGRzZXQsXG4gICAgICBsZWdlbmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgYnRuR3JvdXAsXG4gICAgICBhZGRCdG4sXG4gICAgICBkZWxldGVBbGxCdG5cbiAgICB9XG4gIH1cblxuICBnZXRBcnJheUl0ZW0gKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5sZWdlbmQsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5nZXRCdG5Hcm91cCgpXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgIH0pXG5cbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUnKVxuXG4gICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgIH0pXG5cbiAgICBtb3ZlVXBCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS1kb3duJylcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcbiAgICBib2R5LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgZmllbGRzZXQsXG4gICAgICBsZWdlbmQsXG4gICAgICBib2R5LFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgZGVsZXRlQnRuLFxuICAgICAgbW92ZVVwQnRuLFxuICAgICAgbW92ZURvd25CdG5cbiAgICB9XG4gIH1cblxuICBnZXRNdWx0aXBsZUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBzd2l0Y2hlciA9IHRoaXMuZ2V0U3dpdGNoZXIoe1xuICAgICAgdmFsdWVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICB0aXRsZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBsYWJlbDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBzck9ubHk6IHRydWVcbiAgICB9KVxuXG4gICAgc3dpdGNoZXIuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChzd2l0Y2hlci5jb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgZmllbGRzZXQsXG4gICAgICBsZWdlbmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgc3dpdGNoZXJcbiAgICB9XG4gIH1cblxuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgcmFkaW9Db250cm9scyA9IFtdXG4gICAgY29uc3QgcmFkaW9zID0gW11cbiAgICBjb25zdCBsYWJlbHMgPSBbXVxuICAgIGNvbnN0IGxhYmVsVGV4dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2xzLnB1c2gocmFkaW9Db250cm9sKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpb3MucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuXG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGxhYmVsVGV4dHMucHVzaChsYWJlbFRleHQpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGxhYmVscy5wdXNoKGxhYmVsKVxuICAgIH0pXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0RmllbGRzZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdwYW5lbC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgbGVnZW5kLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0RmllbGRzZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZvb3RlcicpXG4gICAgcmV0dXJuIGZvb3RlclxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRGb290ZXIgKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IHN1cGVyLmdldEZpZWxkc2V0Rm9vdGVyKClcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgbGVnZW5kLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLXNlbGVjdCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZmFrZUZvckVhY2ggPSAoYXJyYXksIGNhbGxiYWNrKSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXNjYXBlUmVnRXhwID0gKHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCByZXBsYWNlQWxsID0gKHN0ciwgZmluZCwgcmVwbGFjZSkgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbmV4cG9ydCBjb25zdCBwYXRoVG9BdHRyaWJ1dGUgPSAocGF0aCkgPT4ge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbmV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuXG5leHBvcnQgY29uc3Qgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzID0gKG9iajEsIG9iajIpID0+IHtcbiAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmoxKSB7XG4gICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9iajFcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gaXNTZXQoc2NoZW1hLnByb3BlcnRpZXMoKSkgPyBzY2hlbWEucHJvcGVydGllcygpIDoge31cbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBsZXQgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICAgIGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgUHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIGRvZXMgbm90IGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllcy5gLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByb290TmFtZTogcHJvcGVydHksXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgYWxsT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZigpKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJvb3ROYW1lOiBrZXksIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVycm9ycyA9IHN1YlNjaGVtYUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGFueU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbnlPZigpKSkge1xuICAgIGNvbnN0IGFueU9mID0gc2NoZW1hLmFueU9mKClcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2NvbnN0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuY29uc3QoKSkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IGRpZmZlcmVudCh2YWx1ZSwgc2NoZW1hLmNvbnN0KCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmNvbnRhaW5zKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluc0VkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuY29udGFpbnMoKSwgc3RhcnRWYWx1ZTogaXRlbSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgY29udGFpbnNFcnJvcnMgPSBjb250YWluc0VkaXRvci5nZXRFcnJvcnMoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLm1pbkNvbnRhaW5zKCkpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IHNjaGVtYS5taW5Db250YWlucygpKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBpcyBsZXNzIHRoYW4gbWluaW11bSBjb250YWlucyBjb3VudCBvZiAke3NjaGVtYS5taW5Db250YWlucygpfWAsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiAnTm8gaXRlbXMgbWF0Y2ggY29udGFpbnMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLm1heENvbnRhaW5zKCkpKSB7XG4gICAgICBjb25zdCBtYXhDb250YWluc0ludmFsaWQgPSAoY291bnRlciA+IHNjaGVtYS5tYXhDb250YWlucygpKVxuXG4gICAgICBpZiAobWF4Q29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBleGNlZWRzIG1heGltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWF4Q29udGFpbnMoKX1gLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbnRTY2hlbWFzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKSkpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnRTY2hlbWEgPSBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpW2tleV1cbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGRlcGVuZGVudFNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udG1wRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+PSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZXhjbHVzaXZlTWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDw9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgbWVzc2FnZVxuICAgIGxldCByZWdleHBcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3VybCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXJsJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3V1aWQnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHV1aWQnXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5pZigpKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hLnRoZW4oKSkgJiYgbm90U2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWEudGhlbigpKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBpdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIC8vIHRvZG8gaWYgYXJyYXkgbGVuZ3RoIGlzID4gcHJlZml4SXRlbXMubGVuZ3RoXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuaXRlbXMoKSkpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHNjaGVtYS5wcmVmaXhJdGVtcygpKSA/IHNjaGVtYS5wcmVmaXhJdGVtcygpLmxlbmd0aCA6IDBcblxuICAgIGlmIChzY2hlbWEuaXRlbXMoKSA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnU2NoZW1hIGFsd2F5cyBmYWlscyB2YWxpZGF0aW9uLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhMZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG11bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBub3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm5vdCgpKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IG9uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5vbmVPZigpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm4oKSkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLycgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IHByZWZpeEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wcmVmaXhJdGVtcygpKSkge1xuICAgIHNjaGVtYS5wcmVmaXhJdGVtcygpLmZvckVhY2goKGl0ZW1TY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB2YWx1ZVtpbmRleF1cblxuICAgICAgaWYgKGlzU2V0KGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGl0ZW1TY2hlbWEsIHN0YXJ0VmFsdWU6IGl0ZW1WYWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBJdGVtICR7aW5kZXh9IGZhaWxzIHZhbGlkYXRpb24uYCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5yZXF1aXJlZCgpKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHR5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB2YWxpZCA9IHNjaGVtYS50eXBlKCkuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIHNvcnRPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS51bmlxdWVJdGVtcygpKSAmJiBzY2hlbWEudW5pcXVlSXRlbXMoKSA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNlZW4gPSBbXVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXVxuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgaXRlbSA9IHNvcnRPYmplY3QoaXRlbSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbVN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHNlZW4uc29tZSgoc2VlbikgPT4gc2VlbiA9PT0gaXRlbVN0cmluZ2lmaWVkKVxuXG4gICAgICBpZiAoaGFzRHVwbGljYXRlZEl0ZW1zKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLnB1c2goaXRlbVN0cmluZ2lmaWVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0Jvb2xlYW4gfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdFxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIGdldEVycm9ycyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHNjaGVtYS5jbG9uZSgpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA/IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA6ICdpbnZhbGlkJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRyYWZ0KS5mb3JFYWNoKChjb25zdHJhaW4pID0+IHtcbiAgICAgIGlmIChoYXNPd24oc2NoZW1hQ2xvbmUsIGNvbnN0cmFpbikpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5kcmFmdFtjb25zdHJhaW5dXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hLm9wdGlvbignbWVzc2FnZScpKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIl0sInNvdXJjZVJvb3QiOiIifQ==