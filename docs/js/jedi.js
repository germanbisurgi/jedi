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
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(body);
      legend.appendChild(actions);
      body.appendChild(description);
      body.appendChild(messages);
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
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(body);
      legend.appendChild(actions);
      actions.appendChild(btnGroup);
      btnGroup.appendChild(addBtn);
      btnGroup.appendChild(deleteAllBtn);
      body.appendChild(description);
      body.appendChild(messages);
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
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(body);
      legend.appendChild(actions);
      actions.appendChild(switcher.container);
      body.appendChild(description);
      body.appendChild(messages);
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
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getChildrenSlot", this).call(this);
      html.classList.add('row');
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
    key: "getObjectControl",
    value: function getObjectControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getObjectControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-xs-12');
      return control;
    }
  }, {
    key: "getArrayControl",
    value: function getArrayControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getArrayControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-xs-12');
      return control;
    }
  }, {
    key: "getArrayItem",
    value: function getArrayItem(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getArrayItem", this).call(this, config);
      var container = control.container;
      container.classList.add('col-xs-12');
      return control;
    }
  }, {
    key: "getMultipleControl",
    value: function getMultipleControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getMultipleControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-xs-12');
      return control;
    }
  }, {
    key: "getNullControl",
    value: function getNullControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getNullControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-xs-12');
      return control;
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getTextareaControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('col-xs-12');
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
      container.classList.add('col-xs-12');
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
      container.classList.add('col-xs-12');
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
      container.classList.add('col-xs-12');
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
      container.classList.add('col-xs-12');
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
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getChildrenSlot", this).call(this);
      html.classList.add('row');
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
    key: "getObjectControl",
    value: function getObjectControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getObjectControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-12');
      return control;
    }
  }, {
    key: "getArrayControl",
    value: function getArrayControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getArrayControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-12');
      return control;
    }
  }, {
    key: "getArrayItem",
    value: function getArrayItem(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getArrayItem", this).call(this, config);
      var container = control.container;
      container.classList.add('col-12');
      return control;
    }
  }, {
    key: "getMultipleControl",
    value: function getMultipleControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getMultipleControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-12');
      return control;
    }
  }, {
    key: "getNullControl",
    value: function getNullControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getNullControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-12');
      return control;
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getTextareaControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('col-12');
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
      container.classList.add('col-12');
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
      container.classList.add('col-12');
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
      container.classList.add('col-12');
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
      container.classList.add('col-12');
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
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getChildrenSlot", this).call(this);
      html.classList.add('row');
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
    key: "getObjectControl",
    value: function getObjectControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getObjectControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-12');
      return control;
    }
  }, {
    key: "getArrayControl",
    value: function getArrayControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getArrayControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-12');
      return control;
    }
  }, {
    key: "getArrayItem",
    value: function getArrayItem(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getArrayItem", this).call(this, config);
      var container = control.container;
      container.classList.add('col-12');
      return control;
    }
  }, {
    key: "getMultipleControl",
    value: function getMultipleControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getMultipleControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-12');
      return control;
    }
  }, {
    key: "getNullControl",
    value: function getNullControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getNullControl", this).call(this, config);
      var container = control.container;
      container.classList.add('col-12');
      return control;
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getTextareaControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('col-12');
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
      container.classList.add('col-12');
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
      container.classList.add('col-12');
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
      container.classList.add('col-12');
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
      var container = control.container,
        input = control.input;
      container.classList.add('col-12');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJBcnJheUVkaXRvciIsIl9FZGl0b3IiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYnVpbGQiLCJfdGhpcyIsImNvbnRyb2wiLCJ0aGVtZSIsImdldEFycmF5Q29udHJvbCIsInRpdGxlIiwiaXNTZXQiLCJpbnN0YW5jZSIsInNjaGVtYSIsImdldEtleSIsInNyT25seSIsIm9wdGlvbiIsImlkIiwicGF0aFRvQXR0cmlidXRlIiwicGF0aCIsImRlc2NyaXB0aW9uIiwiYWRkQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwic2V0VmFsdWUiLCJnZXRJbnZhbGlkRmVlZGJhY2siLCJtZXNzYWdlIiwiZ2V0QWxlcnQiLCJzYW5pdGl6ZSIsImlzQXJyYXkiLCJyZWZyZXNoVUkiLCJfdGhpczIiLCJjaGlsZHJlblNsb3QiLCJpbm5lckhUTUwiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsIml0ZW1JbmRleCIsIk51bWJlciIsImNoaWxkVGl0bGUiLCJhcnJheUl0ZW0iLCJnZXRBcnJheUl0ZW0iLCJsZWdlbmQiLCJhcHBlbmRDaGlsZCIsInVpIiwiY29udGFpbmVyIiwiZGVsZXRlQnRuIiwic3BsaXQiLCJqZWRpIiwicGF0aFNlcGFyYXRvciIsInBvcCIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlZCIsImRpc2FibGUiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJlbmFibGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJFZGl0b3IiLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwiX0Jvb2xlYW5FZGl0b3IiLCJnZXRSYWRpb3NDb250cm9sIiwidmFsdWVzIiwidGl0bGVzIiwibGFiZWwiLCJyYWRpb3MiLCJyYWRpbyIsInJhZGlvVmFsdWUiLCJjaGVja2VkIiwiZ2V0VmFsdWUiLCJCb29sZWFuRWRpdG9yIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3RDb250cm9sIiwiaW5wdXQiLCJnZXRDaGVja2JveENvbnRyb2wiLCJCb29sZWFuIiwiX0V2ZW50RW1pdHRlciIsImNhbGwiLCJpbml0Iiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJhbHdheXNTaG93RXJyb3JzIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJvbiIsIlRoZW1lQm9vdHN0cmFwMyIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsIlRoZW1lQmFyZWJvbmVzIiwidHlwZSIsIm1lc3NhZ2VzIiwiZXJyb3IiLCJpbnZhbGlkRmVlZGJhY2siLCJkZXN0cm95IiwiX3RoaXMzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsIkV2ZW50RW1pdHRlciIsIk11bHRpcGxlRWRpdG9yIiwiZ2V0TXVsdGlwbGVDb250cm9sIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJzd2l0Y2hlciIsImluZGV4Iiwic3dpdGNoSW5zdGFuY2UiLCJvbGRJbnN0YW5jZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsImFjdGl2ZUluc3RhbmNlIiwibXVsdGlwbGVFcnJvcnMiLCJmaWx0ZXIiLCJhY3RpdmVJbnN0YW5jZUVycm9ycyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJOdWxsRWRpdG9yIiwiZ2V0TnVsbENvbnRyb2wiLCJmb3JtYXRJcyIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIl9OdW1iZXJFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiZ2V0SW5wdXRDb250cm9sIiwidHlwZUlzIiwiTWF0aCIsImZsb29yIiwiaXNOdW1iZXIiLCJPYmplY3RFZGl0b3IiLCJnZXRPYmplY3RDb250cm9sIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwiZXF1YWwiLCJhZGRQcm9wZXJ0eUJ0biIsImFkZFByb3BlcnR5Q29udHJvbCIsInByb3BlcnR5TmFtZUVtcHR5IiwibGVuZ3RoIiwicHJvcGVydHlFeGlzdCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlQ2hpbGQiLCJhY3RpdmF0ZSIsImlzT2JqZWN0IiwicmVmcmVzaFByb3BlcnRpZXNTbG90IiwicHJvcGVydGllc0FjdGl2YXRvcnMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiY2hlY2JveENvbnRyb2wiLCJjaGVja2JveCIsImhhc093biIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwiZGVhY3RpdmF0ZSIsInJlZnJlc2hFZGl0b3JzIiwiaXNBY3RpdmUiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiX1N0cmluZ0VkaXRvciIsIlN0cmluZ0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWFDb250cm9sIiwiaW5jbHVkZXMiLCJmb3JtYXQiLCJTdHJpbmciLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZW1pdCIsImxpc3RlbmVyIiwiQXJyYXlJbnN0YW5jZSIsIl9JbnN0YW5jZSIsInNldFVJIiwicHJlcGFyZSIsImNhY2hlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiaXRlbXNDb3VudCIsIml0ZW1zIiwiaGFzUHJlZml4SXRlbXNTY2hlbWEiLCJwcmVmaXhJdGVtcyIsIm5vdFNldCIsImdldFR5cGUiLCJjcmVhdGVJbnN0YW5jZSIsInBhcmVudCIsImZyb21JbmRleCIsImNsb25lIiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjYWNoZUluZGV4IiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJvbkNoaWxkQ2hhbmdlIiwiaXRlbVZhbHVlIiwiSW5zdGFuY2UiLCJCb29sZWFuSW5zdGFuY2UiLCJjb25maWciLCJ1bmRlZmluZWQiLCJyb290TmFtZSIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwic2V0RGVmYXVsdFZhbHVlIiwiaXNFZGl0b3IiLCJ1bnJlZ2lzdGVyIiwiZGVmYXVsdEVycm9ycyIsInZhbGlkYXRvciIsInZhbGlkRGVmYXVsdCIsInRyaWdnZXJzQ2hhbmdlIiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hQ2xvbmUiLCJ0aGVuU2NoZW1hIiwidGhlbiIsIm1lcmdlRGVlcCIsImVsc2VTY2hlbWEiLCJhbnlPZiIsIm9uZU9mIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJfc2NoZW1hJG9wdGlvbnMiLCJfc2NoZW1hJG9wdGlvbnMyIiwiX29iamVjdFNwcmVhZCIsImFsbE9mIiwibWVyZ2VBbGxPZiIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsInN3aXRjaElmIiwibmV3SW5kZXgiLCJpZkluZGV4IiwiZ2V0SWZJbmRleCIsInByZVZhbHVlIiwiZmluYWxWYWx1ZSIsIm92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJyZWZQYXJzZXIiLCJpZkVycm9ycyIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImluc3RhbmNlRXJyb3JzIiwiZXJyIiwiZSIsImYiLCJkaWZmZXJlbnQiLCJOdWxsSW5zdGFuY2UiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJPYmplY3RJbnN0YW5jZSIsInByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJyZXF1aXJlZCIsImRlcGVuZGVudFJlcXVpcmVkIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJpc05vdFJlcXVpcmVkIiwic2hvdWxkU3RhcnREZWFjdGl2YXRlZCIsImRlYWN0aXZhdGVQcm9wZXJ0aWVzIiwiZGVsZXRlQ2hpbGQiLCJpIiwiZ2V0Q2hpbGQiLCJmaW5kIiwiX3RoaXM0Iiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJTdHJpbmdJbnN0YW5jZSIsImFzc2lnbiIsInNob3dSZXF1aXJlZE9ubHkiLCJyb290IiwiVmFsaWRhdG9yIiwiUmVmUGFyc2VyIiwiWE1MSHR0cFJlcXVlc3QiLCJkZXJlZmVyZW5jZSIsIlNjaGVtYSIsImFwcGVuZEhpZGRlbklucHV0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZGVuQ29udHJvbCIsImhpZGRlbklucHV0IiwiSlNPTiIsInN0cmluZ2lmeSIsImRlZmluZSIsIm9yaWdpbmFsU2NoZW1hIiwiX3RoaXMkcm9vdCIsImdldEluc3RhbmNlIiwiZWRpdG9yIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX3RoaXM1IiwiaXRlcmF0aW9ucyIsImRlZmluaXRpb25zIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmT3duZXIiLCJwcmV2VmFsdWUiLCJyZWYiLCJpc0NpcmN1bGFyUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJzdWJzdHJpbmciLCJoYWxmIiwiY2VpbCIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJpc1N0cmluZyIsInN0YXJ0c1dpdGgiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImlzQm9vbGVhbiIsIl9jb25zdCIsImNvbnRhaW5zIiwiX2RlZmF1bHQiLCJkZXBlbmRlbnRTY2hlbWFzIiwiX2Vsc2UiLCJfZW51bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiX2lmIiwibWF4aW11bSIsIm1heENvbnRhaW5zIiwiaXNJbnRlZ2VyIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkNvbnRhaW5zIiwibWluSXRlbXMiLCJtaW5MZW5ndGgiLCJtaW5Qcm9wZXJ0aWVzIiwibXVsdGlwbGVPZiIsIm5vdCIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInJlYWRPbmx5IiwiU2V0IiwidW5pcXVlSXRlbXMiLCJnZXRFZGl0b3JDb250YWluZXIiLCJodG1sIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0RmllbGRzZXQiLCJnZXRGaWVsZHNldEJvZHkiLCJnZXRMZWdlbmQiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiZm9udFNpemUiLCJnZXRGaWVsZHNldEZvb3RlciIsImdldFByb3BlcnRpZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRBcnJheUFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0Q29udHJvbFNsb3QiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwiZ2V0QnV0dG9uIiwiZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMiLCJnZXRCdG5Hcm91cCIsImdldEFycmF5QnRuQWRkIiwiZ2V0QXJyYXlCdG5EZWxldGVBbGwiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsImdldERlc2NyaXB0aW9uIiwiZmllbGRzZXQiLCJhY3Rpb25zIiwiYm9keSIsInByb3BlcnRpZXNDb250YWluZXIiLCJidG5Hcm91cCIsImdldFN3aXRjaGVyIiwibGFiZWxUZXh0IiwiZGVzY3JpcHRpb25JZCIsInJhZGlvQ29udHJvbHMiLCJsYWJlbHMiLCJsYWJlbFRleHRzIiwicmFkaW9Db250cm9sIiwiZm9ybUdyb3VwIiwiX1RoZW1lQmFyZWJvbmVzIiwiZm9vdGVyIiwicmVtb3ZlIiwiY29udHJvbFNsb3QiLCJ0aGluZyIsImZha2VGb3JFYWNoIiwiYXJyYXkiLCJlc2NhcGVSZWdFeHAiLCJzdHJpbmciLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsInN0ciIsIlJlZ0V4cCIsIm9iaiIsImhhc093blByb3BlcnR5IiwicHJldHR5Iiwicm91bmQyZGVjaW1hbHMiLCJudW1iZXIiLCJyb3VuZCIsInNvcnRPYmplY3QiLCJzb3J0IiwicmVkdWNlIiwicmVzdWx0IiwiYSIsImIiLCJpc051bGwiLCJBcnJheSIsIl90eXBlb2YiLCJ0YXJnZXQiLCJfbGVuIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iajEiLCJvYmoyIiwiZGVmaW5lZEluUGF0dGVyblByb3BlcnR5IiwicmVnZXhwIiwidGVzdCIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsImV4dHJhTWVzc2FnZXMiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJjb3VudGVyIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsImpvaW4iLCJkZXBlbmRlbnRTY2hlbWEiLCJ0bXBFZGl0b3IiLCJ0bXBFcnJvcnMiLCJzb21lIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50IiwicHJvcGVydGllc0NvdW50IiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJvYmplY3QiLCJfbnVsbCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJfbG9vcCIsIml0ZW1TdHJpbmdpZmllZCIsIl9yZXQiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsImNvbnN0cmFpbiIsInZhbGlkYXRvckVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FB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TSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDK1gsS0FBSyxDQUFDLENBQUNyYyxPQUFPLENBQUMsVUFBQ3VjLFNBQVMsRUFBSztRQUM3QyxJQUFJL1UscURBQU0sQ0FBQ2dFLFdBQVcsRUFBRStRLFNBQVMsQ0FBQyxFQUFFO1VBQ2xDLElBQU1yUixTQUFTLEdBQUdqTixLQUFJLENBQUNvZSxLQUFLLENBQUNFLFNBQVMsQ0FBQztVQUN2QyxJQUFNQyxlQUFlLEdBQUd0UixTQUFTLENBQUNqTixLQUFJLEVBQUVGLEtBQUssRUFBRVMsTUFBTSxFQUFFVixHQUFHLEVBQUVnQixJQUFJLENBQUM7VUFFakUsSUFBSTBkLGVBQWUsRUFBRTtZQUNuQkYsWUFBWSxNQUFBckwsTUFBQSxDQUFBQywrRUFBQSxDQUFPb0wsWUFBWSxHQUFBcEwsK0VBQUEsQ0FBS3NMLGVBQWUsRUFBQztVQUN0RDtRQUNGO01BQ0YsQ0FBQyxDQUFDO01BRUYsSUFBSUYsWUFBWSxDQUFDMVYsTUFBTSxHQUFHLENBQUMsSUFBSXBJLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3hEMmQsWUFBWSxHQUFHLENBQ2I7VUFDRXhZLFFBQVEsRUFBRXRGLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLFVBQVUsQ0FBQztVQUNuQ0csSUFBSSxFQUFFQTtRQUNSLENBQUMsQ0FDRjtNQUNIO01BRUEsT0FBT3dkLFlBQVk7SUFDckI7RUFBQztFQUFBLE9BQUF0TSxTQUFBO0FBQUE7QUFHWUEsd0VBQVMsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvamVkaS5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvKiBnbG9iYWwgY29uZmlybSAqL1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldEFycmF5Q29udHJvbCh7XG4gICAgICB0aXRsZTogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuICAgICAgY29uc3QgY2hpbGRUaXRsZSA9IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogJydcblxuICAgICAgY29uc3QgYXJyYXlJdGVtID0gdGhpcy50aGVtZS5nZXRBcnJheUl0ZW0oe1xuICAgICAgICBsZWdlbmQ6IGNoaWxkVGl0bGUgKyAnICcgKyBpdGVtSW5kZXgsXG4gICAgICAgIHNyT25seTogdHJ1ZVxuICAgICAgfSlcblxuICAgICAgYXJyYXlJdGVtLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChhcnJheUl0ZW0uY29udGFpbmVyKVxuXG4gICAgICBhcnJheUl0ZW0uZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBhcnJheUl0ZW0ubW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgYXJyYXlJdGVtLm1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4uL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRyb2wgPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29udGFpbmVyIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXBhdGggYW5kIGRhdGEtdHlwZVxuICAgKi9cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGVkaXRvciBjb250cm9sIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBlZGl0b3IgY29udGFpbmVyXG4gICAqL1xuICBidWlsZCAoKSB7fVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNvbnRyb2wgVUkgd2hlbiBpdHMgc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2sobWVzc2FnZSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250cm9sLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TXVsdGlwbGVDb250cm9sKHtcbiAgICAgIHRpdGxlOiAnT3B0aW9ucycsXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSxcbiAgICAgIHN3aXRjaGVyT3B0aW9uVmFsdWVzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAgIGNvbnN0IG11bHRpcGxlRXJyb3JzID0gZXJyb3JzLmZpbHRlcigoZXJyb3IpID0+IGVycm9yLnBhdGggPT09IHRoaXMucGF0aClcbiAgICBjb25zdCBhY3RpdmVJbnN0YW5jZUVycm9ycyA9IGVycm9ycy5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci5wYXRoICE9PSB0aGlzLnBhdGgpXG4gICAgc3VwZXIuc2hvd1ZhbGlkYXRpb25FcnJvcnMobXVsdGlwbGVFcnJvcnMpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycyhhY3RpdmVJbnN0YW5jZUVycm9ycylcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TnVsbENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE9iamVjdENvbnRyb2woe1xuICAgICAgdGl0bGU6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGxhYmVsOiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmFwcGVuZENoaWxkKGNoZWNib3hDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzVG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNUb2dnbGUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGdldFR5cGUsIGlzU2V0LCBjbG9uZSwgaXNBcnJheSwgbm90U2V0LCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmNhY2hlID0ge31cbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBpdGVtc0NvdW50ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGhcbiAgICBsZXQgc2NoZW1hXG5cbiAgICBzY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5pdGVtcygpKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7fVxuXG4gICAgY29uc3QgaGFzUHJlZml4SXRlbXNTY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcygpKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcygpW2l0ZW1zQ291bnRdKVxuXG4gICAgaWYgKGhhc1ByZWZpeEl0ZW1zU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcygpW2l0ZW1zQ291bnRdXG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHNjaGVtYSkgJiYgbm90U2V0KHNjaGVtYS50eXBlKSkge1xuICAgICAgc2NoZW1hLnR5cGUgPSBpc1NldCh2YWx1ZSkgPyBnZXRUeXBlKHZhbHVlKSA6ICdhbnknXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGl0ZW1zQ291bnQsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgY2hpbGQuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZFxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGNhY2hlSW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLmNhY2hlKS5sZW5ndGhcbiAgICB0aGlzLmNhY2hlW2NhY2hlSW5kZXhdID0gdGVtcEVkaXRvclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGlzU2V0KHRoaXMuY2FjaGVbaW5kZXhdKSA/IHRoaXMuY2FjaGVbaW5kZXhdIDogdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgY2hpbGQuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdzIHR5cGVcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKVswXSkpIHtcbiAgICAvLyAgIHRoaXMudmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZWZhdWx0RXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgbWVyZ2VEZWVwLFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIGlzT2JqZWN0LFxuICBub3RTZXQsIG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllc1xufSBmcm9tICcuLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uL2plZGknXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmlmKCkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIHRoaXMudGhlblNjaGVtYSA9IHRoaXMuc2NoZW1hLnRoZW4oKSA/IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUsIHRoaXMuc2NoZW1hLnRoZW4oKSkgOiBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lKVxuICAgICAgdGhpcy5lbHNlU2NoZW1hID0gdGhpcy5zY2hlbWEuZWxzZSgpID8gbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSwgdGhpcy5zY2hlbWEuZWxzZSgpKSA6IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUpXG4gICAgICB0aGlzLnNjaGVtYXMucHVzaCh0aGlzLnRoZW5TY2hlbWEpXG4gICAgICB0aGlzLnNjaGVtYXMucHVzaCh0aGlzLmVsc2VTY2hlbWEpXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgICAgZGVsZXRlIHNjaGVtYS5pZlxuICAgICAgICBkZWxldGUgc2NoZW1hLnRoZW5cbiAgICAgICAgZGVsZXRlIHNjaGVtYS5lbHNlXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gWzAsIDFdXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFsndGhlbicsICdlbHNlJ11cbiAgICB9IGVsc2UgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KHRoaXMuc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChpc1NldChzY2hlbWEuYWxsT2YpICYmIHNjaGVtYS5vcHRpb25zPy5tZXJnZUFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW5jZXNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgICAgdGhpcy5zd2l0Y2hJZigpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBpc09iamVjdChzY2hlbWFDbG9uZSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoMCwgZmFsc2UsIHNldFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cblxuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaElmICgpIHtcbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuaWYoKSkpIHtcbiAgICAgIGNvbnN0IGlmSW5kZXggPSB0aGlzLmdldElmSW5kZXgodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgcHJlVmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoaWZJbmRleClcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgICAgY29uc3QgZmluYWxWYWx1ZSA9IG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyhjdXJyZW50VmFsdWUsIHByZVZhbHVlKVxuICAgICAgdGhpcy5zZXRWYWx1ZShmaW5hbFZhbHVlLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBnZXRJZkluZGV4ICh2YWx1ZSkge1xuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHRoaXMuc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuICAgIHJldHVybiBpZkVycm9ycy5sZW5ndGggPT09IDAgPyAwIDogMVxuICB9XG5cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnN0YW5jZUVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICBsZXQgZml0dGVzdEluZGV4XG5cbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5pZigpKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldElmSW5kZXgodmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0LCBoYXNPd24gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5cbmNsYXNzIE9iamVjdEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBPYmplY3RFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGlzU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQgPSB0aGlzLmplZGkub3B0aW9ucy5kZWFjdGl2YXRlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2RlYWN0aXZhdGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChpc05vdFJlcXVpcmVkICYmIHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQpIHtcbiAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGQuZ2V0S2V5KCldXG5cbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHZhbHVlIGlmIHRoZSBvbGQgdmFsdWUgYW5kIHRoZSBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoZGlmZmVyZW50KG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGlsZC5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY2hpbGQgaW5zdGFuY2UgZm9yIHRoZSBuZXcgdmFsdWUgZW50cnkgaGF2aW5nIHRoZSB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoaW5pdGlhbFZhbHVlKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRlZmF1bHQ6IGluaXRpYWxWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaGFzT3duLCBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICdiYXJlYm9uZXMnLFxuICAgICAgcmVmUGFyc2VyOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucm9vdE5hbWUgPSAnIydcbiAgICB0aGlzLnBhdGhTZXBhcmF0b3IgPSAnLydcbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG4gICAgdGhpcy5zY2hlbWEgPSBudWxsXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIpIHtcbiAgICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcih7XG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB0aGlzLm9wdGlvbnMuWE1MSHR0cFJlcXVlc3RcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMub3B0aW9ucy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIGNvbnN0IGhpZGRlbkNvbnRyb2wgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSBoaWRkZW5Db250cm9sLmlucHV0XG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIC8vIGNpcmN1bGFyICRyZWYgYXJlIG5vdCBpbml0aWFsbHkgZGVyZWZlcmVuY2VkIGFuZCBtdXN0IGJlIGRlZmluZWQgb24gY3JlYXRpb25cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlciAmJiBoYXNPd24oY29uZmlnLnNjaGVtYSwgJyRyZWYnKSkge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlZmluZShjb25maWcuc2NoZW1hWyckcmVmJ10pXG4gICAgfVxuXG4gICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEFycmF5SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ251bGwnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVsbEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoY29uZmlnLnNjaGVtYS5pZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KGNvbmZpZy5zY2hlbWEub25lT2YoKSkgfHwgY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8IGlzQXJyYXkoY29uZmlnLnNjaGVtYS50eXBlKCkpIHx8IG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIGlmIChub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpICYmIGlzU2V0KGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNjaGVtYSA9IGNvbmZpZy5zY2hlbWEuY2xvbmUoKVxuICAgICAgICBvcmlnaW5hbFNjaGVtYS50eXBlID0gZ2V0VHlwZShjb25maWcuc2NoZW1hLmRlZmF1bHQoKSlcbiAgICAgICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEob3JpZ2luYWxTY2hlbWEpXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IE11bHRpcGxlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLmdldEVycm9ycygpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xuXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nLFxuICBub3RTZXQsXG4gIGNsb25lLCBlcXVhbFxufSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIGlmIChub3RTZXQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCA3XG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLmRlZmluaXRpb25zID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAvLyByZWdpc3RlciBkZWZpbml0aW9ucyBhcyBsb25nIGFzIHRoZXkgYXJlIG5vdCByZWZlcmVuY2VzXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGFyZ3Mua2V5ICE9PSAnJHJlZicpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbnNbYXJncy5wYXRoXSA9IGFyZ3MudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIGRlcmVmZXJlbmNlXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc09iamVjdChhcmdzLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVmT3duZXIgPSBhcmdzLnByZXZWYWx1ZVxuICAgICAgICAgIGNvbnN0IHJlZiA9IGFyZ3MudmFsdWVbJyRyZWYnXVxuXG4gICAgICAgICAgaWYgKGlzU2V0KHJlZk93bmVyKSAmJiBpc1NldChyZWYpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NpcmN1bGFyUGF0aChhcmdzLnBhdGgpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaXJjdWxhcicsIGFyZ3MucGF0aClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZk93bmVyW2FyZ3Mua2V5XSA9IHRoaXMuZGVmaW5lKHJlZilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgaXNDaXJjdWxhclBhdGggKHBhdGgpIHtcbiAgICBsZXQgb3V0cHV0ID0gZmFsc2VcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmaW5pdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy8gcmVtb3ZlICNcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygxKVxuXG4gICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYWxmID0gTWF0aC5jZWlsKHBhdGgubGVuZ3RoIC8gMilcbiAgICAgIGNvbnN0IGZpcnN0SGFsZiA9IHBhdGguc2xpY2UoMCwgaGFsZilcbiAgICAgIGNvbnN0IHNlY29uZEhhbGYgPSBwYXRoLnNsaWNlKGhhbGYpXG5cbiAgICAgIGlmIChlcXVhbChmaXJzdEhhbGYsIHNlY29uZEhhbGYpKSB7XG4gICAgICAgIG91dHB1dCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICAvLyBkZWZpbml0aW9uc1xuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZpbml0aW9uc1tyZWZdKSkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcy5kZWZpbml0aW9uc1tyZWZdKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHJlZi5zdGFydHNXaXRoKCdodHRwcycpKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCByZWYsIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICByZXF1ZXN0LnNlbmQobnVsbClcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjYW4gbm90IGxvYWQnLCByZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHJhdmVyc2UgKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudmFsdWVcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MuY2FsbGJhY2tcbiAgICBjb25zdCBwYXRoID0gaXNTZXQoYXJncy5wYXRoKSA/IGFyZ3MucGF0aCArICcvJyArIGFyZ3Mua2V5IDogJyMnXG4gICAgYXJncy5wYXRoID0gcGF0aFxuXG4gICAgaWYgKGlzU2V0KGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soYXJncylcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhZGRpdGlvbmFsUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB0cnVlXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdFxuICB9XG5cbiAgY29udGFpbnMgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5jb250YWlucykpID8gdGhpcy5zY2hlbWEuY29udGFpbnMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVwZW5kZW50U2NoZW1hcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuZWxzZSkpID8gdGhpcy5zY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy5mb3JtYXQoKSkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4Q29udGFpbnMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4Q29udGFpbnMpICYmIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhDb250YWluc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWluQ29udGFpbnMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluQ29udGFpbnMpICYmIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Db250YWluc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLm5vdCkpID8gdGhpcy5zY2hlbWEubm90IDogdW5kZWZpbmVkXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHByZWZpeEl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcykgPyB0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVhZE9ubHkgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEucmVhZE9ubHkpID8gdGhpcy5zY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS50aGVuKSkgPyB0aGlzLnNjaGVtYS50aGVuIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLnR5cGUoKSkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICdpbmhlcml0J1xuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Rm9vdGVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgaHRtbC52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy52YWx1ZSlcbiAgICB9XG5cbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlLWFsbCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2plZGktYWN0aXZlLWJ0bidcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldE9iamVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLmdldFByb3BlcnRpZXNUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQWN0aXZhdG9ycyA9IHRoaXMuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgY29uZmlnLmlkLFxuICAgICAgbGFiZWw6ICdQcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgYWRkUHJvcGVydHlCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1vYmplY3QtYWRkJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGNvbmZpZy5lZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydGllc0FjdGl2YXRvcnMpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5Q29udHJvbC5jb250YWluZXIpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5QnRuKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBmaWVsZHNldCxcbiAgICAgIGxlZ2VuZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBwcm9wZXJ0aWVzVG9nZ2xlLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcixcbiAgICAgIGFkZFByb3BlcnR5Q29udHJvbCxcbiAgICAgIGFkZFByb3BlcnR5QnRuLFxuICAgICAgcHJvcGVydGllc0FjdGl2YXRvcnNcbiAgICB9XG4gIH1cblxuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5nZXRBcnJheUJ0bkFkZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVBbGxCdG4gPSB0aGlzLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQWxsQnRuKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBmaWVsZHNldCxcbiAgICAgIGxlZ2VuZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBidG5Hcm91cCxcbiAgICAgIGFkZEJ0bixcbiAgICAgIGRlbGV0ZUFsbEJ0blxuICAgIH1cbiAgfVxuXG4gIGdldEFycmF5SXRlbSAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG5cbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmxlZ2VuZCxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmdldEJ0bkdyb3VwKClcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgfSlcblxuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgdXAnXG4gICAgfSlcblxuICAgIG1vdmVVcEJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtdXAnKVxuXG4gICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICB9KVxuXG4gICAgbW92ZURvd25CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLWRvd24nKVxuXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBmaWVsZHNldCxcbiAgICAgIGxlZ2VuZCxcbiAgICAgIGJvZHksXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBkZWxldGVCdG4sXG4gICAgICBtb3ZlVXBCdG4sXG4gICAgICBtb3ZlRG93bkJ0blxuICAgIH1cbiAgfVxuXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG5cbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHN3aXRjaGVyID0gdGhpcy5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHNyT25seTogdHJ1ZVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChzd2l0Y2hlci5jb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGZpZWxkc2V0LFxuICAgICAgbGVnZW5kLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHN3aXRjaGVyXG4gICAgfVxuICB9XG5cbiAgZ2V0TnVsbENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBsYWJlbFRleHRzLnB1c2gobGFiZWxUZXh0KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBsYWJlbHMucHVzaChsYWJlbClcbiAgICB9KVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0RmllbGRzZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdwYW5lbC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi14cycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0T2JqZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldE9iamVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0xMicpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFycmF5Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldEFycmF5Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLXhzLTEyJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QXJyYXlJdGVtIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0QXJyYXlJdGVtKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wteHMtMTInKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRNdWx0aXBsZUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRNdWx0aXBsZUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0xMicpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldE51bGxDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0TnVsbENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0xMicpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wteHMtMTInKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLXhzLTEyJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLXhzLTEyJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLXhzLTEyJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0xMicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRGb290ZXIgKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IHN1cGVyLmdldEZpZWxkc2V0Rm9vdGVyKClcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDaGlsZHJlblNsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0T2JqZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldE9iamVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFycmF5Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldEFycmF5Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLTEyJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QXJyYXlJdGVtIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0QXJyYXlJdGVtKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRNdWx0aXBsZUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRNdWx0aXBsZUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldE51bGxDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0TnVsbENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLTEyJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLTEyJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLTEyJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0RmllbGRzZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZvb3RlcicpXG4gICAgcmV0dXJuIGZvb3RlclxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldE9iamVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRPYmplY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRBcnJheUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFycmF5SXRlbSAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldEFycmF5SXRlbShjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLTEyJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0TXVsdGlwbGVDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0TXVsdGlwbGVDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldE51bGxDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLTEyJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLTEyJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLTEyJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0JylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLXNlbGVjdCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZmFrZUZvckVhY2ggPSAoYXJyYXksIGNhbGxiYWNrKSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXNjYXBlUmVnRXhwID0gKHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCByZXBsYWNlQWxsID0gKHN0ciwgZmluZCwgcmVwbGFjZSkgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbmV4cG9ydCBjb25zdCBwYXRoVG9BdHRyaWJ1dGUgPSAocGF0aCkgPT4ge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbmV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuXG5leHBvcnQgY29uc3Qgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzID0gKG9iajEsIG9iajIpID0+IHtcbiAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmoxKSB7XG4gICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9iajFcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gaXNTZXQoc2NoZW1hLnByb3BlcnRpZXMoKSkgPyBzY2hlbWEucHJvcGVydGllcygpIDoge31cbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBsZXQgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICAgIGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICBgUHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIGRvZXMgbm90IGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllcy5gXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByb290TmFtZTogcHJvcGVydHksXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBhbGxPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKCkpKSB7XG4gICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgbGV0IGV4dHJhTWVzc2FnZXMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYW55T2YoKSkpIHtcbiAgICBjb25zdCBhbnlPZiA9IHNjaGVtYS5hbnlPZigpXG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGV4dHJhTWVzc2FnZXMgPSBbLi4uZXh0cmFNZXNzYWdlcywgSlNPTi5zdHJpbmdpZnkoc2NoZW1hKV1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgICAuLi5leHRyYU1lc3NhZ2VzXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2NvbnN0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuY29uc3QoKSkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IGRpZmZlcmVudCh2YWx1ZSwgc2NoZW1hLmNvbnN0KCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5jb250YWlucygpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmNvbnRhaW5zKCksIHN0YXJ0VmFsdWU6IGl0ZW0sIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGNvbnRhaW5zRXJyb3JzID0gY29udGFpbnNFZGl0b3IuZ2V0RXJyb3JzKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5taW5Db250YWlucygpKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBzY2hlbWEubWluQ29udGFpbnMoKSlcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGBDb250YWlucyBtYXRjaCBjb3VudCAke2NvdW50ZXJ9IGlzIGxlc3MgdGhhbiBtaW5pbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1pbkNvbnRhaW5zKCl9YFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgJ05vIGl0ZW1zIG1hdGNoIGNvbnRhaW5zJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWEubWF4Q29udGFpbnMoKSkpIHtcbiAgICAgIGNvbnN0IG1heENvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID4gc2NoZW1hLm1heENvbnRhaW5zKCkpXG5cbiAgICAgIGlmIChtYXhDb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBleGNlZWRzIG1heGltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWF4Q29udGFpbnMoKX1gXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVudFNjaGVtYXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpKSkge1xuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudFNjaGVtYSA9IHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKClba2V5XVxuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogZGVwZW5kZW50U2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi50bXBFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZW51bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmVudW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYS5lbnVtKCkuc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+PSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKClcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGV4Y2x1c2l2ZU1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8PSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKClcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGZvcm1hdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuZm9ybWF0KCkpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCBtZXNzYWdlc1xuICAgIGxldCByZWdleHBcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBtZXNzYWdlcyA9IFsnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3VybCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgICAgbWVzc2FnZXMgPSBbJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1cmwnXVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3V1aWQnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICAgIG1lc3NhZ2VzID0gWydNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXVpZCddXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfaWYgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmlmKCkpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWEudGhlbigpKSAmJiBub3RTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS50aGVuKCkpKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgLy8gdG9kbyBpZiBhcnJheSBsZW5ndGggaXMgPiBwcmVmaXhJdGVtcy5sZW5ndGhcbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5pdGVtcygpKSkge1xuICAgIGNvbnN0IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50ID0gaXNTZXQoc2NoZW1hLnByZWZpeEl0ZW1zKCkpID8gc2NoZW1hLnByZWZpeEl0ZW1zKCkubGVuZ3RoIDogMFxuXG4gICAgaWYgKHNjaGVtYS5pdGVtcygpID09PSBmYWxzZSAmJiB2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA+IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50KSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ1NjaGVtYSBhbHdheXMgZmFpbHMgdmFsaWRhdGlvbi4nXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heEl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heExlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heExlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5MZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5MZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5pbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW1dLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbXVsdGlwbGVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm11bHRpcGxlT2YoKSkpIHtcbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCldLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG5vdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEubm90KCkpKSB7XG4gICAgY29uc3Qgbm90RXJyb3JzID0gdmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hLiddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3Qgb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgbGV0IGV4dHJhTWVzc2FnZXMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEub25lT2YoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG5cbiAgICAgIGV4dHJhTWVzc2FnZXMgPSBbLi4uZXh0cmFNZXNzYWdlcywgSlNPTi5zdHJpbmdpZnkoc2NoZW1hKV1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgICAgLi4uZXh0cmFNZXNzYWdlc1xuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm4oKSkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcvJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgcHJlZml4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnByZWZpeEl0ZW1zKCkpKSB7XG4gICAgc2NoZW1hLnByZWZpeEl0ZW1zKCkuZm9yRWFjaCgoaXRlbVNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IHZhbHVlW2luZGV4XVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbVZhbHVlKSkge1xuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogaXRlbVNjaGVtYSwgc3RhcnRWYWx1ZTogaXRlbVZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgICAgaWYgKHRtcEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtgSXRlbSAke2luZGV4fSBmYWlscyB2YWxpZGF0aW9uLmBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnJlcXVpcmVkKCkpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWEudHlwZSgpKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHZhbGlkID0gc2NoZW1hLnR5cGUoKS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCldLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgc29ydE9iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgdW5pcXVlSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpICYmIHNjaGVtYS51bmlxdWVJdGVtcygpID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc2VlbiA9IFtdXG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHZhbHVlW2ldXG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICBpdGVtID0gc29ydE9iamVjdChpdGVtKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVtU3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gc2Vlbi5zb21lKChzZWVuKSA9PiBzZWVuID09PSBpdGVtU3RyaW5naWZpZWQpXG5cbiAgICAgIGlmIChoYXNEdXBsaWNhdGVkSXRlbXMpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZW4ucHVzaChpdGVtU3RyaW5naWZpZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgZ2V0RXJyb3JzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gc2NoZW1hLmNsb25lKClcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZXM6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2VzJykgPyBzY2hlbWEub3B0aW9uKCdtZXNzYWdlcycpIDogWydpbnZhbGlkJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2VzJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2VzOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlcycpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=