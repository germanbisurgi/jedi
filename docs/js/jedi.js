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
        arrayItem.childrenSlot.appendChild(child.ui.control.container);
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
    _this.control = null;
    _this.disabled = false;
    _this.init();
    _this.build();
    _this.setContainerAttributes();
    _this.refreshUI();
    if (_this.instance.jedi.options.alwaysShowErrors || _this.instance.schema.option('alwaysShowErrors')) {
      var errors = _this.instance.getErrors();
      _this.showValidationErrors(errors);
    }
    _this.instance.on('set-value', function () {
      _this.refreshUI();
      var errors = _this.instance.getErrors();
      _this.showValidationErrors(errors);
    });
    _this.instance.on('change', function () {
      var errors = _this.instance.getErrors();
      _this.showValidationErrors(errors);
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
    }

    /**
     * Sets container attributes like data-path and data-type
     */
  }, {
    key: "setContainerAttributes",
    value: function setContainerAttributes() {
      this.control.container.setAttribute('data-path', this.instance.path);
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_10__["isSet"])(this.instance.schema.type())) {
        this.control.container.setAttribute('data-type', this.instance.schema.type());
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
    value: function showValidationErrors(errors) {
      var _this2 = this;
      this.control.messages.innerHTML = '';
      errors.forEach(function (error) {
        error.messages.forEach(function (message) {
          var invalidFeedback = _this2.getInvalidFeedback(message);
          _this2.control.messages.appendChild(invalidFeedback);
        });
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
      if (this.control.container && this.control.container.parentNode) {
        this.control.container.parentNode.removeChild(this.control.container);
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
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var oldInstance = this.instance.instances[this.instance.lastIndex];
      if (oldInstance.ui.control.container.parentNode) {
        this.control.childrenSlot.removeChild(oldInstance.ui.control.container);
      }
      this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container);
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
    value: function showValidationErrors(errors) {
      var _this2 = this;
      var multipleErrors = errors.filter(function (error) {
        return error.path === _this2.path;
      });
      var activeInstanceErrors = errors.filter(function (error) {
        return error.path !== _this2.path;
      });
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(MultipleEditor.prototype), "showValidationErrors", this).call(this, multipleErrors);
      this.instance.activeInstance.ui.showValidationErrors(activeInstanceErrors);
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

/***/ "./src/editors/object-grid.js":
/*!************************************!*\
  !*** ./src/editors/object-grid.js ***!
  \************************************/
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
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ "./src/editors/object.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ObjectGridEditor = /*#__PURE__*/function (_ObjectEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ObjectGridEditor, _ObjectEditor);
  var _super = _createSuper(ObjectGridEditor);
  function ObjectGridEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ObjectGridEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ObjectGridEditor, [{
    key: "refreshEditors",
    value: function refreshEditors() {
      var _this = this;
      while (this.control.childrenSlot.firstChild) {
        this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
      }
      var row = this.theme.getRow();
      this.control.childrenSlot.appendChild(row);
      this.instance.children.forEach(function (child) {
        if (child.isActive) {
          var columns = child.schema.option('columns');
          var offset = child.schema.option('offset') || 0;
          var col = _this.theme.getCol(12, columns, offset);
          if (child.schema.option('newRow')) {
            row = _this.theme.getRow();
            _this.control.childrenSlot.appendChild(row);
          }
          row.appendChild(col);
          col.appendChild(child.ui.control.container);
          if (_this.disabled) {
            child.ui.disable();
          } else {
            child.ui.enable();
          }
        }
      });
    }
  }]);
  return ObjectGridEditor;
}(_object__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ObjectGridEditor);

/***/ }),

/***/ "./src/editors/object-tabs.js":
/*!************************************!*\
  !*** ./src/editors/object-tabs.js ***!
  \************************************/
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
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object */ "./src/editors/object.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var ObjectTabsEditor = /*#__PURE__*/function (_ObjectEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ObjectTabsEditor, _ObjectEditor);
  var _super = _createSuper(ObjectTabsEditor);
  function ObjectTabsEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ObjectTabsEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ObjectTabsEditor, [{
    key: "init",
    value: function init() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ObjectTabsEditor.prototype), "init", this).call(this);
      this.activeTabIndex = 0;
    }
  }, {
    key: "refreshEditors",
    value: function refreshEditors() {
      var _this = this;
      while (this.control.childrenSlot.firstChild) {
        this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
      }
      var row = this.theme.getRow();
      var cols = this.instance.schema.option('nav').cols || 3;
      var tabListCol = this.theme.getCol(12, cols);
      var tabContentCol = this.theme.getCol(12, 12 - cols);
      var tabContent = this.theme.getTabContent();
      var tabList = this.theme.getTabList({
        stacked: this.instance.schema.option('nav').stacked,
        type: this.instance.schema.option('nav').type
      });
      this.control.childrenSlot.appendChild(row);
      row.appendChild(tabListCol);
      row.appendChild(tabContentCol);
      tabListCol.appendChild(tabList);
      tabContentCol.appendChild(tabContent);
      this.instance.children.forEach(function (child, index) {
        if (child.isActive) {
          var active = index === _this.activeTabIndex;
          var id = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["pathToAttribute"])(child.path);
          var tab = _this.theme.getTab({
            title: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(child.schema.title()) ? child.schema.title() : child.getKey(),
            id: id,
            active: active
          });
          tab.list.addEventListener('click', function () {
            _this.activeTabIndex = index;
          });
          _this.theme.setTabPaneAttributes(child.ui.control.container, active, id);
          tabList.appendChild(tab.list);
          tabContent.appendChild(child.ui.control.container);
          if (_this.disabled) {
            child.ui.disable();
          } else {
            child.ui.enable();
          }
        }
      });
    }
  }]);
  return ObjectTabsEditor;
}(_object__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ObjectTabsEditor);

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
          _this3.control.childrenSlot.appendChild(child.ui.control.container);
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
/* harmony import */ var _editors_object_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editors/object-grid */ "./src/editors/object-grid.js");
/* harmony import */ var _editors_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editors/object */ "./src/editors/object.js");
/* harmony import */ var _editors_object_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../editors/object-tabs */ "./src/editors/object-tabs.js");





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
      this.ui = new _editors_object__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      if (this.schema.typeIs('object') && this.schema.formatIs('grid')) {
        this.ui = new _editors_object_grid__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (this.schema.typeIs('object') && this.schema.formatIs('nav')) {
        this.ui = new _editors_object_tabs__WEBPACK_IMPORTED_MODULE_9__["default"](this);
      } else {
        this.ui = new _editors_object__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      }
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
        this.container.appendChild(this.root.ui.control.container);
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
          var schemaClone = config.schema.clone();
          schemaClone.type = Object(_utils__WEBPACK_IMPORTED_MODULE_17__["getType"])(config.schema["default"]());
          config.schema = schemaClone;
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
    key: "getCard",
    value: function getCard() {
      return document.createElement('div');
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var html = document.createElement('legend');
      html.textContent = config.textContent;
      return html;
    }
  }, {
    key: "getCardHeader",
    value: function getCardHeader(config) {
      var header = document.createElement('div');
      var title = document.createElement('span');
      title.textContent = config.textContent;
      if (config.srOnly) {
        title.classList.add('sr-only');
      }
      header.appendChild(title);
      return header;
    }
  }, {
    key: "getCardBody",
    value: function getCardBody() {
      return document.createElement('div');
    }
  }, {
    key: "getFooter",
    value: function getFooter() {
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
      var container = this.getCard();
      var actions = this.getActionsSlot();
      var header = this.getCardHeader({
        textContent: config.title,
        srOnly: config.srOnly
      });
      var body = this.getCardBody();
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
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.title
      });
      addPropertyBtn.classList.add('jedi-object-add');
      container.appendChild(header);
      container.appendChild(body);
      header.appendChild(actions);
      body.appendChild(description);
      body.appendChild(propertiesContainer);
      body.appendChild(messages);
      body.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(childrenSlot);
      if (config.editableProperties) {
        actions.appendChild(propertiesToggle);
        propertiesContainer.appendChild(propertiesActivators);
        propertiesContainer.appendChild(addPropertyControl.container);
        propertiesContainer.appendChild(addPropertyBtn);
      }
      return {
        container: container,
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
      var container = this.getCard();
      var actions = this.getActionsSlot();
      var header = this.getCardHeader({
        textContent: config.title,
        srOnly: config.srOnly
      });
      var body = this.getCardBody();
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
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.title
      });
      container.appendChild(header);
      container.appendChild(body);
      header.appendChild(actions);
      actions.appendChild(btnGroup);
      btnGroup.appendChild(addBtn);
      btnGroup.appendChild(deleteAllBtn);
      body.appendChild(description);
      body.appendChild(messages);
      body.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(childrenSlot);
      return {
        container: container,
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
      var container = this.getCard();
      var actions = this.getActionsSlot();
      var body = this.getCardBody();
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
      container.appendChild(body);
      body.appendChild(actions);
      body.appendChild(childrenSlot);
      body.appendChild(btnGroup);
      btnGroup.appendChild(deleteBtn);
      btnGroup.appendChild(moveUpBtn);
      btnGroup.appendChild(moveDownBtn);
      return {
        container: container,
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
      var container = this.getCard();
      var actions = this.getActionsSlot();
      var header = this.getCardHeader({
        textContent: config.title,
        srOnly: config.srOnly
      });
      var body = this.getCardBody();
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
      container.appendChild(header);
      container.appendChild(body);
      header.appendChild(actions);
      actions.appendChild(switcher.container);
      body.appendChild(description);
      body.appendChild(messages);
      body.appendChild(childrenSlot);
      return {
        container: container,
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
      var label = document.createElement('label');
      label.textContent = config.label;
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      var messages = this.getMessagesSlot();
      container.appendChild(label);
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
        label: label,
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
      var formGroup = document.createElement('div');
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
      container.appendChild(formGroup);
      formGroup.appendChild(input);
      formGroup.appendChild(label);
      label.appendChild(labelText);
      formGroup.appendChild(description);
      formGroup.appendChild(messages);
      return {
        container: container,
        formGroup: formGroup,
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
  }, {
    key: "getRow",
    value: function getRow() {
      var row = document.createElement('div');
      row.classList.add('jedi-row');
      return row;
    }
  }, {
    key: "getCol",
    value: function getCol(xs, md, offsetMd) {
      var col = document.createElement('div');
      col.classList.add('jedi-col-xs-' + xs);
      col.classList.add('jedi-col-md-' + md);
      if (offsetMd) {
        col.classList.add('jedi-col-md-offset-' + offsetMd);
      }
      return col;
    }
  }, {
    key: "getTabList",
    value: function getTabList(config) {
      var tabList = document.createElement('ul');
      tabList.classList.add('jedi-tab-list');
      return tabList;
    }
  }, {
    key: "getTab",
    value: function getTab(config) {
      var list = document.createElement('li');
      var link = document.createElement('a');
      link.setAttribute('href', '#' + config.id);
      link.textContent = config.title;
      list.appendChild(link);
      return {
        list: list,
        link: link
      };
    }
  }, {
    key: "getTabContent",
    value: function getTabContent() {
      var tabContent = document.createElement('div');
      tabContent.classList.add('tab-content');
      return tabContent;
    }
  }, {
    key: "setTabPaneAttributes",
    value: function setTabPaneAttributes(element, active, id) {
      element.setAttribute('id', id);
      element.classList.add('jedi-tab-pane');
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
    key: "getLegend",
    value: function getLegend(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getLegend", this).call(this, config);
      html.classList.add('sr-only');
      return html;
    }
  }, {
    key: "getCard",
    value: function getCard() {
      var card = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getCard", this).call(this);
      card.classList.add('panel');
      card.classList.add('panel-default');
      return card;
    }
  }, {
    key: "getCardHeader",
    value: function getCardHeader(config) {
      var header = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getCardHeader", this).call(this, config);
      header.classList.add('panel-heading');
      return header;
    }
  }, {
    key: "getCardBody",
    value: function getCardBody() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getCardBody", this).call(this);
      html.classList.add('panel-body');
      return html;
    }
  }, {
    key: "getFooter",
    value: function getFooter() {
      var footer = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getFooter", this).call(this);
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
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getTextareaControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return control;
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getInputControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return control;
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getRadiosControl", this).call(this, config);
      var container = control.container,
        radios = control.radios,
        labels = control.labels,
        labelTexts = control.labelTexts,
        radioControls = control.radioControls,
        description = control.description,
        messages = control.messages;
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
      return control;
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getCheckboxControl", this).call(this, config);
      var container = control.container,
        formGroup = control.formGroup,
        input = control.input,
        label = control.label,
        labelText = control.labelText,
        description = control.description,
        messages = control.messages;
      formGroup.classList.add('checkbox');
      container.appendChild(formGroup);
      formGroup.appendChild(label);
      label.appendChild(input);
      label.appendChild(labelText);
      formGroup.appendChild(description);
      formGroup.appendChild(messages);
      return control;
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getSelectControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return control;
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getSwitcher", this).call(this, config);
      var container = control.container,
        input = control.input;
      container.classList.remove('form-group');
      input.classList.remove('form-control');
      return control;
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
  }, {
    key: "getRow",
    value: function getRow() {
      var row = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getRow", this).call(this);
      row.classList.add('row');
      return row;
    }
  }, {
    key: "getCol",
    value: function getCol(xs, md, offsetMd) {
      var col = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getRow", this).call(this);
      col.classList.add('col-xs-' + xs);
      col.classList.add('col-md-' + md);
      if (offsetMd) {
        col.classList.add('col-md-offset-' + offsetMd);
      }
      return col;
    }
  }, {
    key: "getTabList",
    value: function getTabList(config) {
      var tabList = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getTabList", this).call(this, config);
      tabList.classList.add('nav');
      if (config.type === 'tabs') {
        tabList.classList.add('nav-tabs');
      } else {
        tabList.classList.add('nav-pills');
      }
      if (config.stacked) {
        tabList.classList.add('nav-stacked');
      }
      return tabList;
    }
  }, {
    key: "getTab",
    value: function getTab(config) {
      var tab = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getTab", this).call(this, config);
      if (config.active) {
        tab.list.classList.add('active');
      }
      tab.link.setAttribute('data-toggle', 'tab');
      return tab;
    }
  }, {
    key: "setTabPaneAttributes",
    value: function setTabPaneAttributes(element, active, id) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "setTabPaneAttributes", this).call(this, element, active, id);
      element.classList.add('tab-pane');
      element.classList.add('fade');
      if (active) {
        element.classList.add('in');
        element.classList.add('active');
      }
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
    key: "getLegend",
    value: function getLegend(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getLegend", this).call(this, config);
      html.classList.add('sr-only');
      return html;
    }
  }, {
    key: "getCard",
    value: function getCard() {
      var card = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getCard", this).call(this);
      card.classList.add('card');
      return card;
    }
  }, {
    key: "getCardHeader",
    value: function getCardHeader(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getCardHeader", this).call(this, config);
      html.classList.add('card-header');
      html.classList.add('d-flex');
      html.classList.add('justify-content-between');
      html.classList.add('align-items-center');
      html.classList.add('py-1');
      return html;
    }
  }, {
    key: "getCardBody",
    value: function getCardBody() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getCardBody", this).call(this);
      html.classList.add('card-body');
      return html;
    }
  }, {
    key: "getFooter",
    value: function getFooter() {
      var footer = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getFooter", this).call(this);
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
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getTextareaControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return control;
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getInputControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('sr-only');
      }
      return control;
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getRadiosControl", this).call(this, config);
      var container = control.container,
        radios = control.radios,
        labels = control.labels,
        labelTexts = control.labelTexts,
        radioControls = control.radioControls,
        description = control.description,
        messages = control.messages;
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
      return control;
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getCheckboxControl", this).call(this, config);
      var container = control.container,
        formGroup = control.formGroup,
        input = control.input,
        label = control.label,
        description = control.description,
        messages = control.messages;
      formGroup.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      container.appendChild(formGroup);
      formGroup.appendChild(input);
      formGroup.appendChild(label);
      formGroup.appendChild(description);
      formGroup.appendChild(messages);
      return control;
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getSelectControl", this).call(this, config);
      var container = control.container,
        input = control.input;
      container.classList.add('form-group');
      input.classList.add('form-control');
      return control;
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getSwitcher", this).call(this, config);
      var container = control.container,
        input = control.input;
      container.classList.remove('form-group');
      input.classList.remove('form-control');
      return control;
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
  }, {
    key: "getColumnClass",
    value: function getColumnClass(size, cols) {
      return 'col-' + size + '-' + cols;
    }
  }, {
    key: "getRow",
    value: function getRow() {
      var row = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getRow", this).call(this);
      row.classList.add('row');
      return row;
    }
  }, {
    key: "getCol",
    value: function getCol(xs, md, offsetMd) {
      var col = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getRow", this).call(this, xs, md, offsetMd);
      col.classList.add('col-' + xs);
      col.classList.add('col-md-' + md);
      if (offsetMd) {
        col.classList.add('offset-md-' + offsetMd);
      }
      return col;
    }
  }, {
    key: "getTabList",
    value: function getTabList(config) {
      var tabList = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getTabList", this).call(this);
      tabList.classList.add('nav');
      if (config.type === 'tabs') {
        tabList.classList.add('nav-tabs');
      } else {
        tabList.classList.add('nav-pills');
      }
      if (config.stacked) {
        tabList.classList.add('flex-column');
      }
      return tabList;
    }
  }, {
    key: "getTab",
    value: function getTab(config) {
      var tab = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getTab", this).call(this, config);
      tab.list.classList.add('nav-item');
      tab.link.classList.add('nav-link');
      tab.link.setAttribute('data-toggle', 'tab');
      if (config.active) {
        tab.link.classList.add('active');
      }
      return tab;
    }
  }, {
    key: "setTabPaneAttributes",
    value: function setTabPaneAttributes(element, active, id) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "setTabPaneAttributes", this).call(this, element, active, id);
      element.classList.add('tab-pane');
      element.classList.add('fade');
      if (active) {
        element.classList.add('active');
        element.classList.remove('fade');
      }
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
    key: "getLegend",
    value: function getLegend(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getLegend", this).call(this, config);
      html.classList.add('visually-hidden');
      return html;
    }
  }, {
    key: "getCard",
    value: function getCard() {
      var card = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getCard", this).call(this);
      card.classList.add('card');
      return card;
    }
  }, {
    key: "getCardHeader",
    value: function getCardHeader(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getCardHeader", this).call(this, config);
      html.classList.add('card-header');
      html.classList.add('d-flex');
      html.classList.add('justify-content-between');
      html.classList.add('align-items-center');
      html.classList.add('py-1');
      return html;
    }
  }, {
    key: "getCardBody",
    value: function getCardBody() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getCardBody", this).call(this);
      html.classList.add('card-body');
      return html;
    }
  }, {
    key: "getFooter",
    value: function getFooter() {
      var footer = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getFooter", this).call(this);
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
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getTextareaControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      return control;
    }
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getInputControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('form-group');
      input.classList.add('form-control');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      return control;
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getRadiosControl", this).call(this, config);
      var container = control.container,
        radios = control.radios,
        labels = control.labels,
        labelTexts = control.labelTexts,
        radioControls = control.radioControls,
        description = control.description,
        messages = control.messages;
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
      return control;
    }
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getCheckboxControl", this).call(this, config);
      var container = control.container,
        formGroup = control.formGroup,
        input = control.input,
        label = control.label,
        description = control.description,
        messages = control.messages;
      formGroup.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      container.appendChild(formGroup);
      formGroup.appendChild(input);
      formGroup.appendChild(label);
      formGroup.appendChild(description);
      formGroup.appendChild(messages);
      return control;
    }
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getSelectControl", this).call(this, config);
      var input = control.input;
      input.classList.add('form-select');
      return control;
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getSwitcher", this).call(this, config);
      var input = control.input,
        label = control.label;
      input.classList.remove('form-select');
      label.classList.add('visually-hidden');
      return control;
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
  }, {
    key: "getRow",
    value: function getRow() {
      var row = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getRow", this).call(this);
      row.classList.add('row');
      return row;
    }
  }, {
    key: "getCol",
    value: function getCol(xs, md, offsetMd) {
      var col = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getRow", this).call(this, xs, md, offsetMd);
      col.classList.add('col-' + xs);
      col.classList.add('col-md-' + md);
      if (offsetMd) {
        col.classList.add('offset-md-' + offsetMd);
      }
      return col;
    }
  }, {
    key: "getTabList",
    value: function getTabList(config) {
      var tabList = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getTabList", this).call(this, config);
      tabList.classList.add('nav');
      if (config.type === 'tabs') {
        tabList.classList.add('nav-tabs');
      } else {
        tabList.classList.add('nav-pills');
      }
      if (config.stacked) {
        tabList.classList.add('flex-column');
      }
      return tabList;
    }
  }, {
    key: "getTab",
    value: function getTab(config) {
      var tab = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getTab", this).call(this, config);
      tab.list.classList.add('nav-item');
      tab.link.classList.add('nav-link');
      tab.link.setAttribute('data-bs-toggle', 'tab');
      if (config.active) {
        tab.link.classList.add('active');
      }
      return tab;
    }
  }, {
    key: "setTabPaneAttributes",
    value: function setTabPaneAttributes(element, active, id) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "setTabPaneAttributes", this).call(this, element, active, id);
      element.classList.add('tab-pane');
      element.classList.add('fade');
      if (active) {
        element.classList.add('active');
        element.classList.remove('fade');
      }
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
            messages: ["Property \"".concat(property, "\" has not been defined and the schema does not allow additional properties.")],
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
              messages: error.messages,
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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");



var anyOf = function anyOf(validator, value, schema, key, path) {
  var errors = [];
  var extraMessages = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(schema.anyOf())) {
    var _anyOf = schema.anyOf();
    var valid = false;
    _anyOf.forEach(function (schema) {
      var anyOfEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
        schema: schema,
        startValue: value,
        refParser: false
      });
      var anyOfErrors = anyOfEditor.getErrors();
      anyOfEditor.destroy();
      if (anyOfErrors.length === 0) {
        valid = true;
      }
      extraMessages = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(extraMessages), [JSON.stringify(schema)]);
    });
    if (!valid) {
      errors.push({
        messages: ['Must validate against at least one of the provided schemas'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(extraMessages)),
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
        messages: ['Must be: ' + JSON.stringify(schema["const"]())],
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
          messages: ["Contains match count ".concat(counter, " is less than minimum contains count of ").concat(schema.minContains())],
          path: path
        });
      }
    } else {
      if (containsInvalid) {
        errors.push({
          messages: ['No items match contains'],
          path: path
        });
      }
    }
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schema.maxContains())) {
      var maxContainsInvalid = counter > schema.maxContains();
      if (maxContainsInvalid) {
        errors.push({
          messages: ["Contains match count ".concat(counter, " exceeds maximum contains count of ").concat(schema.maxContains())],
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
        messages: ['Must have the required properties: ' + missingProperties.join(', ')],
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
        messages: ['Must be one of the enumerated values: ' + JSON.stringify(schema["enum"]())],
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
        messages: ['Must be less than ' + schema.exclusiveMaximum()],
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
        messages: ['Must be greater than ' + schema.exclusiveMinimum()],
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
    var messages;
    var regexp;
    if (schema.formatIs('email')) {
      regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
      messages = ['Must be a valid email address'];
    }
    if (schema.formatIs('url')) {
      regexp = new RegExp(/^(?:http[s\u017F]?|ftp):\/\/(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!(?:10|127)(?:\.[0-9]{1,3}){3})(?!(?:169\.254|192\.168)(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])*)?$/i);
      messages = ['Must be a valid email url'];
    }
    if (schema.formatIs('uuid')) {
      regexp = new RegExp(/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i);
      messages = ['Must be a valid email uuid'];
    }
    var invalid = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(regexp) && !regexp.test(value);
    if (invalid) {
      errors.push({
        messages: messages,
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
        messages: ['Schema always fails validation.'],
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
        messages: ['Must have at most ' + schema.maxItems() + ' items'],
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
        messages: ['Must be at most ' + schema.maxLength() + ' characters long'],
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
        messages: ['Must have at most ' + schema.maxProperties() + ' properties'],
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
        messages: ['Must be less than ' + computedMaximum],
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
        messages: ['Must have at least ' + schema.minItems() + ' items'],
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
        messages: ['Must be at least ' + schema.minLength() + ' characters long'],
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
        messages: ['Must have at least ' + schema.minProperties() + ' properties'],
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
        messages: ['Must be at least ' + computedMinimum],
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
        messages: ['Must be multiple of ' + schema.multipleOf()],
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
        messages: ['Must not validate against the provided schema.'],
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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");



var oneOf = function oneOf(validator, value, schema, key, path) {
  var errors = [];
  var extraMessages = [];
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema.oneOf())) {
    var counter = 0;
    schema.oneOf().forEach(function (schema) {
      var oneOfEditor = new _jedi__WEBPACK_IMPORTED_MODULE_2__["default"]({
        schema: schema,
        startValue: value,
        refParser: false
      });
      var oneOfErrors = oneOfEditor.getErrors();
      oneOfEditor.destroy();
      if (oneOfErrors.length === 0) {
        counter++;
      }
      extraMessages = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(extraMessages), [JSON.stringify(schema)]);
    });
    if (counter !== 1) {
      errors.push({
        messages: ['Must validate against exactly one of the provided schemas. It currently validates against ' + counter + ' of the schemas.'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(extraMessages)),
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
        messages: ['Must be the pattern: ' + schema.pattern()],
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
              messages: error.messages,
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
            messages: ["Item ".concat(index, " fails validation.")],
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
        messages: ['Must have the required properties: ' + missingProperties.join(', ')],
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
        messages: ['Must be of type ' + schema.type()],
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
        messages: ['Must have unique items'],
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
          messages: schema.option('messages') ? schema.option('messages') : ['invalid'],
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
      if (schemaErrors.length > 0 && schema.option('messages')) {
        schemaErrors = [{
          messages: schema.option('messages'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtZ3JpZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LXRhYnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9qZWRpLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9iYXJlYm9uZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbGxPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbmltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wcmVmaXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbIkFycmF5RWRpdG9yIiwiX0VkaXRvciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJidWlsZCIsIl90aGlzIiwiY29udHJvbCIsInRoZW1lIiwiZ2V0QXJyYXlDb250cm9sIiwidGl0bGUiLCJpc1NldCIsImluc3RhbmNlIiwic2NoZW1hIiwiZ2V0S2V5Iiwic3JPbmx5Iiwib3B0aW9uIiwiaWQiLCJwYXRoVG9BdHRyaWJ1dGUiLCJwYXRoIiwiZGVzY3JpcHRpb24iLCJhZGRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJzZXRWYWx1ZSIsImdldEludmFsaWRGZWVkYmFjayIsIm1lc3NhZ2UiLCJnZXRBbGVydCIsInNhbml0aXplIiwiaXNBcnJheSIsInJlZnJlc2hVSSIsIl90aGlzMiIsImNoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiY2hpbGRUaXRsZSIsImFycmF5SXRlbSIsImdldEFycmF5SXRlbSIsImxlZ2VuZCIsImFwcGVuZENoaWxkIiwidWkiLCJjb250YWluZXIiLCJkZWxldGVCdG4iLCJzcGxpdCIsImplZGkiLCJwYXRoU2VwYXJhdG9yIiwicG9wIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc2FibGVkIiwiZGlzYWJsZSIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkVkaXRvciIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJfQm9vbGVhbkVkaXRvciIsImdldFJhZGlvc0NvbnRyb2wiLCJ2YWx1ZXMiLCJ0aXRsZXMiLCJsYWJlbCIsInJhZGlvcyIsInJhZGlvIiwicmFkaW9WYWx1ZSIsImNoZWNrZWQiLCJnZXRWYWx1ZSIsIkJvb2xlYW5FZGl0b3IiLCJCb29sZWFuRW51bVNlbGVjdEVkaXRvciIsImdldFNlbGVjdENvbnRyb2wiLCJpbnB1dCIsImdldENoZWNrYm94Q29udHJvbCIsIkJvb2xlYW4iLCJfRXZlbnRFbWl0dGVyIiwiY2FsbCIsImluaXQiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwib3B0aW9ucyIsImFsd2F5c1Nob3dFcnJvcnMiLCJlcnJvcnMiLCJnZXRFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsIm9uIiwiVGhlbWVCb290c3RyYXAzIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiVGhlbWVCYXJlYm9uZXMiLCJ0eXBlIiwibWVzc2FnZXMiLCJlcnJvciIsImludmFsaWRGZWVkYmFjayIsImRlc3Ryb3kiLCJfdGhpczMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJPYmplY3QiLCJrZXlzIiwiRXZlbnRFbWl0dGVyIiwiTXVsdGlwbGVFZGl0b3IiLCJnZXRNdWx0aXBsZUNvbnRyb2wiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsInN3aXRjaGVyIiwiaW5kZXgiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJtdWx0aXBsZUVycm9ycyIsImZpbHRlciIsImFjdGl2ZUluc3RhbmNlRXJyb3JzIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIk51bGxFZGl0b3IiLCJnZXROdWxsQ29udHJvbCIsImZvcm1hdElzIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiX051bWJlckVkaXRvciIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJnZXRJbnB1dENvbnRyb2wiLCJ0eXBlSXMiLCJNYXRoIiwiZmxvb3IiLCJpc051bWJlciIsIk9iamVjdEdyaWRFZGl0b3IiLCJfT2JqZWN0RWRpdG9yIiwicmVmcmVzaEVkaXRvcnMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwicm93IiwiZ2V0Um93IiwiaXNBY3RpdmUiLCJjb2x1bW5zIiwib2Zmc2V0IiwiY29sIiwiZ2V0Q29sIiwiT2JqZWN0RWRpdG9yIiwiT2JqZWN0VGFic0VkaXRvciIsImFjdGl2ZVRhYkluZGV4IiwiY29scyIsInRhYkxpc3RDb2wiLCJ0YWJDb250ZW50Q29sIiwidGFiQ29udGVudCIsImdldFRhYkNvbnRlbnQiLCJ0YWJMaXN0IiwiZ2V0VGFiTGlzdCIsInN0YWNrZWQiLCJhY3RpdmUiLCJ0YWIiLCJnZXRUYWIiLCJsaXN0Iiwic2V0VGFiUGFuZUF0dHJpYnV0ZXMiLCJnZXRPYmplY3RDb250cm9sIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwiZXF1YWwiLCJhZGRQcm9wZXJ0eUJ0biIsImFkZFByb3BlcnR5Q29udHJvbCIsInByb3BlcnR5TmFtZUVtcHR5IiwibGVuZ3RoIiwicHJvcGVydHlFeGlzdCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlQ2hpbGQiLCJhY3RpdmF0ZSIsImlzT2JqZWN0IiwicmVmcmVzaFByb3BlcnRpZXNTbG90IiwicHJvcGVydGllc0FjdGl2YXRvcnMiLCJjaGVjYm94Q29udHJvbCIsImNoZWNrYm94IiwiaGFzT3duIiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJkZWFjdGl2YXRlIiwicHJvcGVydGllc1RvZ2dsZSIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIl9TdHJpbmdFZGl0b3IiLCJTdHJpbmdFZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhQ29udHJvbCIsImluY2x1ZGVzIiwiZm9ybWF0IiwiU3RyaW5nIiwibGlzdGVuZXJzIiwibmFtZSIsImNhbGxiYWNrIiwicHVzaCIsImVtaXQiLCJsaXN0ZW5lciIsIkFycmF5SW5zdGFuY2UiLCJfSW5zdGFuY2UiLCJzZXRVSSIsInByZXBhcmUiLCJjYWNoZSIsInJlZnJlc2hDaGlsZHJlbiIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsIml0ZW1zQ291bnQiLCJpdGVtcyIsImhhc1ByZWZpeEl0ZW1zU2NoZW1hIiwicHJlZml4SXRlbXMiLCJub3RTZXQiLCJnZXRUeXBlIiwiY3JlYXRlSW5zdGFuY2UiLCJwYXJlbnQiLCJmcm9tSW5kZXgiLCJjbG9uZSIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY2FjaGVJbmRleCIsImN1cnJlbnRWYWx1ZSIsIm5ld1ZhbHVlIiwib25DaGlsZENoYW5nZSIsIml0ZW1WYWx1ZSIsIkluc3RhbmNlIiwiQm9vbGVhbkluc3RhbmNlIiwiY29uZmlnIiwidW5kZWZpbmVkIiwicm9vdE5hbWUiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInNldERlZmF1bHRWYWx1ZSIsImlzRWRpdG9yIiwidW5yZWdpc3RlciIsImRlZmF1bHRFcnJvcnMiLCJ2YWxpZGF0b3IiLCJ2YWxpZERlZmF1bHQiLCJ0cmlnZ2Vyc0NoYW5nZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYUNsb25lIiwidGhlblNjaGVtYSIsInRoZW4iLCJtZXJnZURlZXAiLCJlbHNlU2NoZW1hIiwiYW55T2YiLCJvbmVPZiIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwiX3NjaGVtYSRvcHRpb25zIiwiX3NjaGVtYSRvcHRpb25zMiIsIl9vYmplY3RTcHJlYWQiLCJhbGxPZiIsIm1lcmdlQWxsT2YiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJzd2l0Y2hJZiIsIm5ld0luZGV4IiwiaWZJbmRleCIsImdldElmSW5kZXgiLCJwcmVWYWx1ZSIsImZpbmFsVmFsdWUiLCJvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMiLCJpZkVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwicmVmUGFyc2VyIiwiaWZFcnJvcnMiLCJnZXRGaXR0ZXN0SW5kZXgiLCJmaXR0ZXN0SW5kZXgiLCJjaGFtcGlvbkVycm9ycyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJpbnN0YW5jZUVycm9ycyIsImVyciIsImUiLCJmIiwiZGlmZmVyZW50IiwiTnVsbEluc3RhbmNlIiwiTnVtYmVySW5zdGFuY2UiLCJ0eXBlSXNOdW1lcmljIiwiT2JqZWN0SW5zdGFuY2UiLCJwcm9wZXJ0aWVzIiwicmVmcmVzaEluc3RhbmNlcyIsInByb3BlcnR5IiwicmVxdWlyZWQiLCJkZXBlbmRlbnRSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiaXNOb3RSZXF1aXJlZCIsInNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlUHJvcGVydGllcyIsImRlbGV0ZUNoaWxkIiwiaSIsImdldENoaWxkIiwiZmluZCIsIl90aGlzNCIsIm9sZFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiU3RyaW5nSW5zdGFuY2UiLCJhc3NpZ24iLCJzaG93UmVxdWlyZWRPbmx5Iiwicm9vdCIsIlZhbGlkYXRvciIsIlJlZlBhcnNlciIsIlhNTEh0dHBSZXF1ZXN0IiwiZGVyZWZlcmVuY2UiLCJTY2hlbWEiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImNsYXNzTGlzdCIsImFkZCIsImhpZGRlbkNvbnRyb2wiLCJoaWRkZW5JbnB1dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWZpbmUiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJlZGl0b3IiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfdGhpczUiLCJpdGVyYXRpb25zIiwiZGVmaW5pdGlvbnMiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWZPd25lciIsInByZXZWYWx1ZSIsInJlZiIsImlzQ2lyY3VsYXJQYXRoIiwiY29uc29sZSIsImxvZyIsIm91dHB1dCIsInN1YnN0cmluZyIsImhhbGYiLCJjZWlsIiwiZmlyc3RIYWxmIiwic2Vjb25kSGFsZiIsImlzU3RyaW5nIiwic3RhcnRzV2l0aCIsInJlcXVlc3QiLCJvcGVuIiwic2VuZCIsInN0YXR1cyIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaXNCb29sZWFuIiwiX2NvbnN0IiwiY29udGFpbnMiLCJfZGVmYXVsdCIsImRlcGVuZGVudFNjaGVtYXMiLCJfZWxzZSIsIl9lbnVtIiwiZXhjbHVzaXZlTWF4aW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJfaWYiLCJtYXhpbXVtIiwibWF4Q29udGFpbnMiLCJpc0ludGVnZXIiLCJtYXhJdGVtcyIsIm1heExlbmd0aCIsIm1heFByb3BlcnRpZXMiLCJtaW5pbXVtIiwibWluQ29udGFpbnMiLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90IiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJTZXQiLCJ1bmlxdWVJdGVtcyIsImdldEVkaXRvckNvbnRhaW5lciIsImh0bWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRGaWVsZHNldCIsImdldENhcmQiLCJnZXRMZWdlbmQiLCJ0ZXh0Q29udGVudCIsImdldENhcmRIZWFkZXIiLCJoZWFkZXIiLCJnZXRDYXJkQm9keSIsImdldEZvb3RlciIsImdldFByb3BlcnRpZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRBcnJheUFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0Q29udHJvbFNsb3QiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwiZ2V0QnV0dG9uIiwiZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMiLCJnZXRCdG5Hcm91cCIsImdldEFycmF5QnRuQWRkIiwiZ2V0QXJyYXlCdG5EZWxldGVBbGwiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsImdldERlc2NyaXB0aW9uIiwiYWN0aW9ucyIsImJvZHkiLCJwcm9wZXJ0aWVzQ29udGFpbmVyIiwiZmllbGRzZXQiLCJidG5Hcm91cCIsImdldFN3aXRjaGVyIiwibGFiZWxUZXh0IiwiZGVzY3JpcHRpb25JZCIsInJhZGlvQ29udHJvbHMiLCJsYWJlbHMiLCJsYWJlbFRleHRzIiwicmFkaW9Db250cm9sIiwiZm9ybUdyb3VwIiwieHMiLCJtZCIsIm9mZnNldE1kIiwibGluayIsImVsZW1lbnQiLCJfVGhlbWVCYXJlYm9uZXMiLCJjYXJkIiwiZm9vdGVyIiwicmVtb3ZlIiwiZ2V0Q29sdW1uQ2xhc3MiLCJzaXplIiwiY29udHJvbFNsb3QiLCJ0aGluZyIsImZha2VGb3JFYWNoIiwiYXJyYXkiLCJlc2NhcGVSZWdFeHAiLCJzdHJpbmciLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsInN0ciIsIlJlZ0V4cCIsIm9iaiIsImhhc093blByb3BlcnR5IiwicHJldHR5Iiwicm91bmQyZGVjaW1hbHMiLCJudW1iZXIiLCJyb3VuZCIsInNvcnRPYmplY3QiLCJzb3J0IiwicmVkdWNlIiwicmVzdWx0IiwiYSIsImIiLCJpc051bGwiLCJBcnJheSIsIl90eXBlb2YiLCJ0YXJnZXQiLCJfbGVuIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iajEiLCJvYmoyIiwiZGVmaW5lZEluUGF0dGVyblByb3BlcnR5IiwicmVnZXhwIiwidGVzdCIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsImV4dHJhTWVzc2FnZXMiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJjb3VudGVyIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsImpvaW4iLCJkZXBlbmRlbnRTY2hlbWEiLCJ0bXBFZGl0b3IiLCJ0bXBFcnJvcnMiLCJzb21lIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50IiwicHJvcGVydGllc0NvdW50IiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJvYmplY3QiLCJfbnVsbCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJfbG9vcCIsIml0ZW1TdHJpbmdpZmllZCIsIl9yZXQiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsImNvbnN0cmFpbiIsInZhbGlkYXRvckVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QUFPLENBQUM7VUFDTmpKLFFBQVEsRUFBRXRGLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHSCxNQUFNLENBQUNHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztVQUM3RUcsSUFBSSxFQUFFQTtRQUNSLENBQUMsQ0FBQztNQUNKO01BRUF1RixNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM4WixLQUFLLENBQUMsQ0FBQ3BlLE9BQU8sQ0FBQyxVQUFDc2UsU0FBUyxFQUFLO1FBQzdDLElBQUlyVixxREFBTSxDQUFDOEQsV0FBVyxFQUFFdVIsU0FBUyxDQUFDLEVBQUU7VUFDbEMsSUFBTTdSLFNBQVMsR0FBR3hPLEtBQUksQ0FBQ21nQixLQUFLLENBQUNFLFNBQVMsQ0FBQztVQUN2QyxJQUFNQyxlQUFlLEdBQUc5UixTQUFTLENBQUN4TyxLQUFJLEVBQUVGLEtBQUssRUFBRVMsTUFBTSxFQUFFVixHQUFHLEVBQUVnQixJQUFJLENBQUM7VUFFakUsSUFBSXlmLGVBQWUsRUFBRTtZQUNuQkYsWUFBWSxNQUFBOUwsTUFBQSxDQUFBQywrRUFBQSxDQUFPNkwsWUFBWSxHQUFBN0wsK0VBQUEsQ0FBSytMLGVBQWUsRUFBQztVQUN0RDtRQUNGO01BQ0YsQ0FBQyxDQUFDO01BRUYsSUFBSUYsWUFBWSxDQUFDOVYsTUFBTSxHQUFHLENBQUMsSUFBSS9KLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3hEMGYsWUFBWSxHQUFHLENBQ2I7VUFDRXZhLFFBQVEsRUFBRXRGLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLFVBQVUsQ0FBQztVQUNuQ0csSUFBSSxFQUFFQTtRQUNSLENBQUMsQ0FDRjtNQUNIO01BRUEsT0FBT3VmLFlBQVk7SUFDckI7RUFBQztFQUFBLE9BQUE5TSxTQUFBO0FBQUE7QUFHWUEsd0VBQVMsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvamVkaS5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvKiBnbG9iYWwgY29uZmlybSAqL1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldEFycmF5Q29udHJvbCh7XG4gICAgICB0aXRsZTogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuICAgICAgY29uc3QgY2hpbGRUaXRsZSA9IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogJydcblxuICAgICAgY29uc3QgYXJyYXlJdGVtID0gdGhpcy50aGVtZS5nZXRBcnJheUl0ZW0oe1xuICAgICAgICBsZWdlbmQ6IGNoaWxkVGl0bGUgKyAnICcgKyBpdGVtSW5kZXgsXG4gICAgICAgIHNyT25seTogdHJ1ZVxuICAgICAgfSlcblxuICAgICAgYXJyYXlJdGVtLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChhcnJheUl0ZW0uY29udGFpbmVyKVxuXG4gICAgICBhcnJheUl0ZW0uZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBhcnJheUl0ZW0ubW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgYXJyYXlJdGVtLm1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4uL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRyb2wgPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29udGFpbmVyIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXBhdGggYW5kIGRhdGEtdHlwZVxuICAgKi9cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGVkaXRvciBjb250cm9sIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBlZGl0b3IgY29udGFpbmVyXG4gICAqL1xuICBidWlsZCAoKSB7fVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNvbnRyb2wgVUkgd2hlbiBpdHMgc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2sobWVzc2FnZSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250cm9sLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TXVsdGlwbGVDb250cm9sKHtcbiAgICAgIHRpdGxlOiAnT3B0aW9ucycsXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSxcbiAgICAgIHN3aXRjaGVyT3B0aW9uVmFsdWVzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAgIGNvbnN0IG11bHRpcGxlRXJyb3JzID0gZXJyb3JzLmZpbHRlcigoZXJyb3IpID0+IGVycm9yLnBhdGggPT09IHRoaXMucGF0aClcbiAgICBjb25zdCBhY3RpdmVJbnN0YW5jZUVycm9ycyA9IGVycm9ycy5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci5wYXRoICE9PSB0aGlzLnBhdGgpXG4gICAgc3VwZXIuc2hvd1ZhbGlkYXRpb25FcnJvcnMobXVsdGlwbGVFcnJvcnMpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycyhhY3RpdmVJbnN0YW5jZUVycm9ycylcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TnVsbENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4vb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RHcmlkRWRpdG9yIGV4dGVuZHMgT2JqZWN0RWRpdG9yIHtcbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgbGV0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gY2hpbGQuc2NoZW1hLm9wdGlvbignY29sdW1ucycpXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNoaWxkLnNjaGVtYS5vcHRpb24oJ29mZnNldCcpIHx8IDBcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHVtbnMsIG9mZnNldClcblxuICAgICAgICBpZiAoY2hpbGQuc2NoZW1hLm9wdGlvbignbmV3Um93JykpIHtcbiAgICAgICAgICByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgICAgIH1cblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sKVxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RHcmlkRWRpdG9yXG4iLCJpbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4vb2JqZWN0J1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBPYmplY3RUYWJzRWRpdG9yIGV4dGVuZHMgT2JqZWN0RWRpdG9yIHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCduYXYnKS5jb2xzIHx8IDNcbiAgICBjb25zdCB0YWJMaXN0Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHMpXG4gICAgY29uc3QgdGFiQ29udGVudENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCAoMTIgLSBjb2xzKSlcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5nZXRUYWJDb250ZW50KClcbiAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50aGVtZS5nZXRUYWJMaXN0KHtcbiAgICAgIHN0YWNrZWQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignbmF2Jykuc3RhY2tlZCxcbiAgICAgIHR5cGU6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignbmF2JykudHlwZVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuXG4gICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgICB0aXRsZTogaXNTZXQoY2hpbGQuc2NoZW1hLnRpdGxlKCkpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgICAgfSlcblxuICAgICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuXG4gICAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RUYWJzRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE9iamVjdENvbnRyb2woe1xuICAgICAgdGl0bGU6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGxhYmVsOiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmFwcGVuZENoaWxkKGNoZWNib3hDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzVG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNUb2dnbGUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGdldFR5cGUsIGlzU2V0LCBjbG9uZSwgaXNBcnJheSwgbm90U2V0LCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmNhY2hlID0ge31cbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBpdGVtc0NvdW50ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGhcbiAgICBsZXQgc2NoZW1hXG5cbiAgICBzY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5pdGVtcygpKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7fVxuXG4gICAgY29uc3QgaGFzUHJlZml4SXRlbXNTY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcygpKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcygpW2l0ZW1zQ291bnRdKVxuXG4gICAgaWYgKGhhc1ByZWZpeEl0ZW1zU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcygpW2l0ZW1zQ291bnRdXG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHNjaGVtYSkgJiYgbm90U2V0KHNjaGVtYS50eXBlKSkge1xuICAgICAgc2NoZW1hLnR5cGUgPSBpc1NldCh2YWx1ZSkgPyBnZXRUeXBlKHZhbHVlKSA6ICdhbnknXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGl0ZW1zQ291bnQsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgY2hpbGQuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZFxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGNhY2hlSW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLmNhY2hlKS5sZW5ndGhcbiAgICB0aGlzLmNhY2hlW2NhY2hlSW5kZXhdID0gdGVtcEVkaXRvclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGlzU2V0KHRoaXMuY2FjaGVbaW5kZXhdKSA/IHRoaXMuY2FjaGVbaW5kZXhdIDogdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgY2hpbGQuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdzIHR5cGVcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKVswXSkpIHtcbiAgICAvLyAgIHRoaXMudmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZWZhdWx0RXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgbWVyZ2VEZWVwLFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIGlzT2JqZWN0LFxuICBub3RTZXQsIG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllc1xufSBmcm9tICcuLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uL2plZGknXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmlmKCkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIHRoaXMudGhlblNjaGVtYSA9IHRoaXMuc2NoZW1hLnRoZW4oKSA/IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUsIHRoaXMuc2NoZW1hLnRoZW4oKSkgOiBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lKVxuICAgICAgdGhpcy5lbHNlU2NoZW1hID0gdGhpcy5zY2hlbWEuZWxzZSgpID8gbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSwgdGhpcy5zY2hlbWEuZWxzZSgpKSA6IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUpXG4gICAgICB0aGlzLnNjaGVtYXMucHVzaCh0aGlzLnRoZW5TY2hlbWEpXG4gICAgICB0aGlzLnNjaGVtYXMucHVzaCh0aGlzLmVsc2VTY2hlbWEpXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgZGVsZXRlIHNjaGVtYS5pZlxuICAgICAgICBkZWxldGUgc2NoZW1hLnRoZW5cbiAgICAgICAgZGVsZXRlIHNjaGVtYS5lbHNlXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gWzAsIDFdXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFsndGhlbicsICdlbHNlJ11cbiAgICB9IGVsc2UgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KHRoaXMuc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChpc1NldChzY2hlbWEuYWxsT2YpICYmIHNjaGVtYS5vcHRpb25zPy5tZXJnZUFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW5jZXNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgICAgdGhpcy5zd2l0Y2hJZigpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBpc09iamVjdChzY2hlbWFDbG9uZSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoMCwgZmFsc2UsIHNldFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cblxuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaElmICgpIHtcbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuaWYoKSkpIHtcbiAgICAgIGNvbnN0IGlmSW5kZXggPSB0aGlzLmdldElmSW5kZXgodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgcHJlVmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoaWZJbmRleClcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgICAgY29uc3QgZmluYWxWYWx1ZSA9IG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyhjdXJyZW50VmFsdWUsIHByZVZhbHVlKVxuICAgICAgdGhpcy5zZXRWYWx1ZShmaW5hbFZhbHVlLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBnZXRJZkluZGV4ICh2YWx1ZSkge1xuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHRoaXMuc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuICAgIHJldHVybiBpZkVycm9ycy5sZW5ndGggPT09IDAgPyAwIDogMVxuICB9XG5cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnN0YW5jZUVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICBsZXQgZml0dGVzdEluZGV4XG5cbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5pZigpKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldElmSW5kZXgodmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0LCBoYXNPd24gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBPYmplY3RHcmlkRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LWdyaWQnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IE9iamVjdFRhYnNFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QtdGFicydcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ2dyaWQnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBPYmplY3RHcmlkRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCduYXYnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBPYmplY3RUYWJzRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVtrZXldXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gaXNTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQoKSkgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc093bih0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjcmVhdGVDaGlsZCAoc2NoZW1hLCBrZXkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCBpc05vdFJlcXVpcmVkID0gIXRoaXMuaXNSZXF1aXJlZChrZXkpXG4gICAgY29uc3Qgc2hvdWxkU3RhcnREZWFjdGl2YXRlZCA9IHRoaXMuamVkaS5vcHRpb25zLmRlYWN0aXZhdGVQcm9wZXJ0aWVzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignZGVhY3RpdmF0ZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKGlzTm90UmVxdWlyZWQgJiYgc2hvdWxkU3RhcnREZWFjdGl2YXRlZCkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgTXVsdGlwbGVJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgQXJyYXlJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBTdHJpbmdJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IE51bGxJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ2JhcmVib25lcycsXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcbiAgICB0aGlzLnJlZlBhcnNlciA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlcikge1xuICAgICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKHtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHRoaXMub3B0aW9ucy5YTUxIdHRwUmVxdWVzdFxuICAgICAgfSlcblxuICAgICAgdGhpcy5vcHRpb25zLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgY29uc3QgaGlkZGVuQ29udHJvbCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IGhpZGRlbkNvbnRyb2wuaW5wdXRcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZVxuXG4gICAgLy8gY2lyY3VsYXIgJHJlZiBhcmUgbm90IGluaXRpYWxseSBkZXJlZmVyZW5jZWQgYW5kIG11c3QgYmUgZGVmaW5lZCBvbiBjcmVhdGlvblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyICYmIGhhc093bihjb25maWcuc2NoZW1hLCAnJHJlZicpKSB7XG4gICAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVmaW5lKGNvbmZpZy5zY2hlbWFbJyRyZWYnXSlcbiAgICB9XG5cbiAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChjb25maWcuc2NoZW1hLmlmKCkpIHx8IGlzU2V0KGNvbmZpZy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5vbmVPZigpKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgaXNBcnJheShjb25maWcuc2NoZW1hLnR5cGUoKSkgfHwgbm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgaWYgKG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkgJiYgaXNTZXQoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY29uZmlnLnNjaGVtYS5jbG9uZSgpXG4gICAgICAgIHNjaGVtYUNsb25lLnR5cGUgPSBnZXRUeXBlKGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICBjb25maWcuc2NoZW1hID0gc2NoZW1hQ2xvbmVcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IuZ2V0RXJyb3JzKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjb250YWlucyAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmNvbnRhaW5zKSkgPyB0aGlzLnNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXBlbmRlbnRTY2hlbWFzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5lbHNlKSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLmZvcm1hdCgpKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICBpZiAoaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhDb250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhDb250YWlucykgJiYgdGhpcy5zY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Db250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Db250YWlucykgJiYgdGhpcy5zY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJlZml4SXRlbXMgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJjbGFzcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEZvb3RlciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGh0bWwudmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcudmFsdWUpXG4gICAgfVxuXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWRkJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZS1hbGwnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdqZWRpLWFjdGl2ZS1idG4nXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRPYmplY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLmdldFByb3BlcnRpZXNUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQWN0aXZhdG9ycyA9IHRoaXMuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgY29uZmlnLmlkLFxuICAgICAgbGFiZWw6ICdQcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlXG4gICAgfSlcblxuICAgIGFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGNvbmZpZy5lZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydGllc0FjdGl2YXRvcnMpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5Q29udHJvbC5jb250YWluZXIpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5QnRuKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgcHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIsXG4gICAgICBhZGRQcm9wZXJ0eUNvbnRyb2wsXG4gICAgICBhZGRQcm9wZXJ0eUJ0bixcbiAgICAgIHByb3BlcnRpZXNBY3RpdmF0b3JzXG4gICAgfVxuICB9XG5cbiAgZ2V0QXJyYXlDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5nZXRBcnJheUJ0bkFkZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVBbGxCdG4gPSB0aGlzLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVBbGxCdG4pXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgYnRuR3JvdXAsXG4gICAgICBhZGRCdG4sXG4gICAgICBkZWxldGVBbGxCdG5cbiAgICB9XG4gIH1cblxuICBnZXRBcnJheUl0ZW0gKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICB9KVxuXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlJylcblxuICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICB9KVxuXG4gICAgbW92ZVVwQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS11cCcpXG5cbiAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgIH0pXG5cbiAgICBtb3ZlRG93bkJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBib2R5LmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG4gICAgYm9keS5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGJvZHksXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBkZWxldGVCdG4sXG4gICAgICBtb3ZlVXBCdG4sXG4gICAgICBtb3ZlRG93bkJ0blxuICAgIH1cbiAgfVxuXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHN3aXRjaGVyID0gdGhpcy5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHNyT25seTogdHJ1ZVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoc3dpdGNoZXIuY29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgc3dpdGNoZXJcbiAgICB9XG4gIH1cblxuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICBjb25zdCByYWRpb0NvbnRyb2xzID0gW11cbiAgICBjb25zdCByYWRpb3MgPSBbXVxuICAgIGNvbnN0IGxhYmVscyA9IFtdXG4gICAgY29uc3QgbGFiZWxUZXh0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbHMucHVzaChyYWRpb0NvbnRyb2wpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIHJhZGlvcy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG5cbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbGFiZWxUZXh0cy5wdXNoKGxhYmVsVGV4dClcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgbGFiZWxzLnB1c2gobGFiZWwpXG4gICAgfSlcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGFiZWwsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLW9mZnNldC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2plZGktdGFiLWxpc3QnKVxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgY29uZmlnLmlkKVxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmspXG4gICAgcmV0dXJuIHsgbGlzdCwgbGluayB9XG4gIH1cblxuICBnZXRUYWJDb250ZW50ICgpIHtcbiAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50JylcbiAgICByZXR1cm4gdGFiQ29udGVudFxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2plZGktdGFiLXBhbmUnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwYW5lbCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaGVhZGVyID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWhlYWRpbmcnKVxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0Rm9vdGVyKClcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtZm9vdGVyJylcbiAgICByZXR1cm4gZm9vdGVyXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi14cycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdygpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdChjb25maWcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1zdGFja2VkJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbicpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBzdXBlci5nZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZvb3RlcicpXG4gICAgcmV0dXJuIGZvb3RlclxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29sdW1uQ2xhc3MgKHNpemUsIGNvbHMpIHtcbiAgICByZXR1cm4gJ2NvbC0nICsgc2l6ZSArICctJyArIGNvbHNcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc3RhY2tlZCkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBzdXBlci5nZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZvb3RlcicpXG4gICAgcmV0dXJuIGZvb3RlclxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGlucHV0IH0gPSBjb250cm9sXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc3RhY2tlZCkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBmYWtlRm9yRWFjaCA9IChhcnJheSwgY2FsbGJhY2spID0+IHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlc2NhcGVSZWdFeHAgPSAoc3RyaW5nKSA9PiB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHJlcGxhY2VBbGwgPSAoc3RyLCBmaW5kLCByZXBsYWNlKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSlcbn1cblxuZXhwb3J0IGNvbnN0IHBhdGhUb0F0dHJpYnV0ZSA9IChwYXRoKSA9PiB7XG4gIHJldHVybiByZXBsYWNlQWxsKHJlcGxhY2VBbGwocGF0aCwgJyMnLCAncm9vdCcpLCAnLycsICctJylcbn1cblxuZXhwb3J0IGNvbnN0IGhhc093biA9IChvYmosIGtleSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbn1cblxuZXhwb3J0IGNvbnN0IHJvdW5kMmRlY2ltYWxzID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0T2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbmV4cG9ydCBjb25zdCBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMgPSAob2JqMSwgb2JqMikgPT4ge1xuICBPYmplY3Qua2V5cyhvYmoyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5IGluIG9iajEpIHtcbiAgICAgIG9iajFba2V5XSA9IG9iajJba2V5XVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gb2JqMVxufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWEucHJvcGVydGllcygpKSA/IHNjaGVtYS5wcm9wZXJ0aWVzKCkgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci5nZXRFcnJvcnMoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGFsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYWxsT2YoKSkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5LCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBhbnlPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBsZXQgZXh0cmFNZXNzYWdlcyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbnlPZigpKSkge1xuICAgIGNvbnN0IGFueU9mID0gc2NoZW1hLmFueU9mKClcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgZXh0cmFNZXNzYWdlcyA9IFsuLi5leHRyYU1lc3NhZ2VzLCBKU09OLnN0cmluZ2lmeShzY2hlbWEpXVxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICAgIC4uLmV4dHJhTWVzc2FnZXNcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5jb25zdCgpKSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWEuY29uc3QoKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBiZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmNvbnRhaW5zKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluc0VkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuY29udGFpbnMoKSwgc3RhcnRWYWx1ZTogaXRlbSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgY29udGFpbnNFcnJvcnMgPSBjb250YWluc0VkaXRvci5nZXRFcnJvcnMoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLm1pbkNvbnRhaW5zKCkpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IHNjaGVtYS5taW5Db250YWlucygpKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gaXMgbGVzcyB0aGFuIG1pbmltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWluQ29udGFpbnMoKX1gXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAnTm8gaXRlbXMgbWF0Y2ggY29udGFpbnMnXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5tYXhDb250YWlucygpKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBzY2hlbWEubWF4Q29udGFpbnMoKSlcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGBDb250YWlucyBtYXRjaCBjb3VudCAke2NvdW50ZXJ9IGV4Y2VlZHMgbWF4aW11bSBjb250YWlucyBjb3VudCBvZiAke3NjaGVtYS5tYXhDb250YWlucygpfWBcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgZGVwZW5kZW50U2NoZW1hcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKCkpKSB7XG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50U2NoZW1hID0gc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKVtrZXldXG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBkZXBlbmRlbnRTY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnRtcEVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9lbnVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuZW51bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZXhjbHVzaXZlTWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDw9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGJlIGdyZWF0ZXIgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZm9ybWF0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5mb3JtYXQoKSkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IG1lc3NhZ2VzXG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIG1lc3NhZ2VzID0gWydNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyddXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXJsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgICBtZXNzYWdlcyA9IFsnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHVybCddXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXVpZCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgICAgbWVzc2FnZXMgPSBbJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1dWlkJ11cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaXNTZXQocmVnZXhwKSAmJiAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0LCBub3RTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9pZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuaWYoKSkpIHtcbiAgICBpZiAobm90U2V0KHNjaGVtYS50aGVuKCkpICYmIG5vdFNldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLnRoZW4oKSkpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIHRoZW5FcnJvcnMgPSB0aGVuRWRpdG9yLmdldEVycm9ycygpXG4gICAgICB0aGVuRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgZWxzZUVycm9ycyA9IGVsc2VFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgaXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICAvLyB0b2RvIGlmIGFycmF5IGxlbmd0aCBpcyA+IHByZWZpeEl0ZW1zLmxlbmd0aFxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLml0ZW1zKCkpKSB7XG4gICAgY29uc3QgcHJlZml4SXRlbXNTY2hlbWFzQ291bnQgPSBpc1NldChzY2hlbWEucHJlZml4SXRlbXMoKSkgPyBzY2hlbWEucHJlZml4SXRlbXMoKS5sZW5ndGggOiAwXG5cbiAgICBpZiAoc2NoZW1hLml0ZW1zKCkgPT09IGZhbHNlICYmIHZhbHVlLmxlbmd0aCA+IDAgJiYgdmFsdWUubGVuZ3RoID4gcHJlZml4SXRlbXNTY2hlbWFzQ291bnQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnU2NoZW1hIGFsd2F5cyBmYWlscyB2YWxpZGF0aW9uLiddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4SXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4TGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4UHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heGltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW1dLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5JdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluSXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkxlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkxlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtdWx0aXBsZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubXVsdGlwbGVPZigpKSkge1xuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YgfHwgdmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3Qgbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5ub3QoKSkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IuZ2V0RXJyb3JzKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBvbmVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBsZXQgZXh0cmFNZXNzYWdlcyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5vbmVPZigpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgZXh0cmFNZXNzYWdlcyA9IFsuLi5leHRyYU1lc3NhZ2VzLCBKU09OLnN0cmluZ2lmeShzY2hlbWEpXVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgICAuLi5leHRyYU1lc3NhZ2VzXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVybigpKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCldLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy8nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBwcmVmaXhJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucHJlZml4SXRlbXMoKSkpIHtcbiAgICBzY2hlbWEucHJlZml4SXRlbXMoKS5mb3JFYWNoKChpdGVtU2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXRlbVZhbHVlID0gdmFsdWVbaW5kZXhdXG5cbiAgICAgIGlmIChpc1NldChpdGVtVmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBpdGVtU2NoZW1hLCBzdGFydFZhbHVlOiBpdGVtVmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcblxuICAgICAgICBpZiAodG1wRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW2BJdGVtICR7aW5kZXh9IGZhaWxzIHZhbGlkYXRpb24uYF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucmVxdWlyZWQoKSkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyldLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCB0eXBlID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKGlzU2V0KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBpZiAoaXNBcnJheShzY2hlbWEudHlwZSgpKSkge1xuICAgICAgdmFsaWQgPSBzY2hlbWEudHlwZSgpLnNvbWUoKHR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBzb3J0T2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCB1bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEudW5pcXVlSXRlbXMoKSkgJiYgc2NoZW1hLnVuaXF1ZUl0ZW1zKCkgPT09IHRydWUpIHtcbiAgICBjb25zdCBzZWVuID0gW11cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdmFsdWVbaV1cblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGl0ZW0gPSBzb3J0T2JqZWN0KGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1TdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pXG4gICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSBzZWVuLnNvbWUoKHNlZW4pID0+IHNlZW4gPT09IGl0ZW1TdHJpbmdpZmllZClcblxuICAgICAgaWYgKGhhc0R1cGxpY2F0ZWRJdGVtcykge1xuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5wdXNoKGl0ZW1TdHJpbmdpZmllZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgZHJhZnQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMidcbmltcG9ydCB7IGhhc093biwgaXNCb29sZWFuIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnRcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICBnZXRFcnJvcnMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBzY2hlbWEuY2xvbmUoKVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBtZXNzYWdlczogc2NoZW1hLm9wdGlvbignbWVzc2FnZXMnKSA/IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2VzJykgOiBbJ2ludmFsaWQnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRyYWZ0KS5mb3JFYWNoKChjb25zdHJhaW4pID0+IHtcbiAgICAgIGlmIChoYXNPd24oc2NoZW1hQ2xvbmUsIGNvbnN0cmFpbikpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5kcmFmdFtjb25zdHJhaW5dXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hLm9wdGlvbignbWVzc2FnZXMnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZXM6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2VzJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIl0sInNvdXJjZVJvb3QiOiIifQ==