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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJBcnJheUVkaXRvciIsIl9FZGl0b3IiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYnVpbGQiLCJfdGhpcyIsImNvbnRyb2wiLCJ0aGVtZSIsImdldEFycmF5Q29udHJvbCIsInRpdGxlIiwiaXNTZXQiLCJpbnN0YW5jZSIsInNjaGVtYSIsImdldEtleSIsInNyT25seSIsIm9wdGlvbiIsImlkIiwicGF0aFRvQXR0cmlidXRlIiwicGF0aCIsImRlc2NyaXB0aW9uIiwiYWRkQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwic2V0VmFsdWUiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImdldEludmFsaWRGZWVkYmFjayIsIm1lc3NhZ2UiLCJnZXRBbGVydCIsInNhbml0aXplIiwiaXNBcnJheSIsInJlZnJlc2hVSSIsIl90aGlzMiIsImNoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiY2hpbGRUaXRsZSIsImFycmF5SXRlbSIsImdldEFycmF5SXRlbSIsImxlZ2VuZCIsInVpIiwiZGVsZXRlQnRuIiwic3BsaXQiLCJqZWRpIiwicGF0aFNlcGFyYXRvciIsInBvcCIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlZCIsImRpc2FibGUiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJlbmFibGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJFZGl0b3IiLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwiX0Jvb2xlYW5FZGl0b3IiLCJnZXRSYWRpb3NDb250cm9sIiwidmFsdWVzIiwidGl0bGVzIiwibGFiZWwiLCJyYWRpb3MiLCJyYWRpbyIsInJhZGlvVmFsdWUiLCJjaGVja2VkIiwiZ2V0VmFsdWUiLCJCb29sZWFuRWRpdG9yIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3RDb250cm9sIiwiaW5wdXQiLCJnZXRDaGVja2JveENvbnRyb2wiLCJCb29sZWFuIiwiX0V2ZW50RW1pdHRlciIsImNhbGwiLCJpbml0Iiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJhbHdheXNTaG93RXJyb3JzIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJvbiIsIlRoZW1lQm9vdHN0cmFwMyIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsIlRoZW1lQmFyZWJvbmVzIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwidHlwZSIsIm1lc3NhZ2VzIiwiZXJyb3IiLCJpbnZhbGlkRmVlZGJhY2siLCJkZXN0cm95IiwiX3RoaXMzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsIkV2ZW50RW1pdHRlciIsIk11bHRpcGxlRWRpdG9yIiwiZ2V0TXVsdGlwbGVDb250cm9sIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJzd2l0Y2hlciIsImluZGV4Iiwic3dpdGNoSW5zdGFuY2UiLCJvbGRJbnN0YW5jZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsImFjdGl2ZUluc3RhbmNlIiwibXVsdGlwbGVFcnJvcnMiLCJmaWx0ZXIiLCJhY3RpdmVJbnN0YW5jZUVycm9ycyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJOdWxsRWRpdG9yIiwiZ2V0TnVsbENvbnRyb2wiLCJmb3JtYXRJcyIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIl9OdW1iZXJFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiZ2V0SW5wdXRDb250cm9sIiwidHlwZUlzIiwiTWF0aCIsImZsb29yIiwiaXNOdW1iZXIiLCJPYmplY3RFZGl0b3IiLCJnZXRPYmplY3RDb250cm9sIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwiZXF1YWwiLCJhZGRQcm9wZXJ0eUJ0biIsImFkZFByb3BlcnR5Q29udHJvbCIsInByb3BlcnR5TmFtZUVtcHR5IiwibGVuZ3RoIiwicHJvcGVydHlFeGlzdCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlQ2hpbGQiLCJhY3RpdmF0ZSIsImlzT2JqZWN0IiwicmVmcmVzaFByb3BlcnRpZXNTbG90IiwicHJvcGVydGllc0FjdGl2YXRvcnMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiY2hlY2JveENvbnRyb2wiLCJjaGVja2JveCIsImhhc093biIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwiZGVhY3RpdmF0ZSIsInJlZnJlc2hFZGl0b3JzIiwiaXNBY3RpdmUiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiX1N0cmluZ0VkaXRvciIsIlN0cmluZ0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWFDb250cm9sIiwiaW5jbHVkZXMiLCJmb3JtYXQiLCJTdHJpbmciLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZW1pdCIsImxpc3RlbmVyIiwiQXJyYXlJbnN0YW5jZSIsIl9JbnN0YW5jZSIsInNldFVJIiwicHJlcGFyZSIsImNhY2hlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiaXRlbXNDb3VudCIsIml0ZW1zIiwiaGFzUHJlZml4SXRlbXNTY2hlbWEiLCJwcmVmaXhJdGVtcyIsIm5vdFNldCIsImdldFR5cGUiLCJjcmVhdGVJbnN0YW5jZSIsInBhcmVudCIsImZyb21JbmRleCIsImNsb25lIiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjYWNoZUluZGV4IiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJvbkNoaWxkQ2hhbmdlIiwiaXRlbVZhbHVlIiwiSW5zdGFuY2UiLCJCb29sZWFuSW5zdGFuY2UiLCJjb25maWciLCJ1bmRlZmluZWQiLCJyb290TmFtZSIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwic2V0RGVmYXVsdFZhbHVlIiwiaXNFZGl0b3IiLCJ1bnJlZ2lzdGVyIiwiZGVmYXVsdEVycm9ycyIsInZhbGlkYXRvciIsInZhbGlkRGVmYXVsdCIsInRyaWdnZXJzQ2hhbmdlIiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hQ2xvbmUiLCJ0aGVuU2NoZW1hIiwidGhlbiIsIm1lcmdlRGVlcCIsImVsc2VTY2hlbWEiLCJhbnlPZiIsIm9uZU9mIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJfc2NoZW1hJG9wdGlvbnMiLCJfc2NoZW1hJG9wdGlvbnMyIiwiX29iamVjdFNwcmVhZCIsImFsbE9mIiwibWVyZ2VBbGxPZiIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsInN3aXRjaElmIiwibmV3SW5kZXgiLCJpZkluZGV4IiwiZ2V0SWZJbmRleCIsInByZVZhbHVlIiwiZmluYWxWYWx1ZSIsIm92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJyZWZQYXJzZXIiLCJpZkVycm9ycyIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImluc3RhbmNlRXJyb3JzIiwiZXJyIiwiZSIsImYiLCJkaWZmZXJlbnQiLCJOdWxsSW5zdGFuY2UiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJPYmplY3RJbnN0YW5jZSIsInByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJyZXF1aXJlZCIsImRlcGVuZGVudFJlcXVpcmVkIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJpc05vdFJlcXVpcmVkIiwic2hvdWxkU3RhcnREZWFjdGl2YXRlZCIsImRlYWN0aXZhdGVQcm9wZXJ0aWVzIiwiZGVsZXRlQ2hpbGQiLCJpIiwiZ2V0Q2hpbGQiLCJmaW5kIiwiX3RoaXM0Iiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJTdHJpbmdJbnN0YW5jZSIsImFzc2lnbiIsInNob3dSZXF1aXJlZE9ubHkiLCJyb290IiwiVmFsaWRhdG9yIiwiUmVmUGFyc2VyIiwiWE1MSHR0cFJlcXVlc3QiLCJkZXJlZmVyZW5jZSIsIlNjaGVtYSIsImFwcGVuZEhpZGRlbklucHV0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZGVuQ29udHJvbCIsImhpZGRlbklucHV0IiwiSlNPTiIsInN0cmluZ2lmeSIsImRlZmluZSIsIm9yaWdpbmFsU2NoZW1hIiwiX3RoaXMkcm9vdCIsImdldEluc3RhbmNlIiwiZWRpdG9yIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX3RoaXM1IiwiaXRlcmF0aW9ucyIsImRlZmluaXRpb25zIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmT3duZXIiLCJwcmV2VmFsdWUiLCJyZWYiLCJpc0NpcmN1bGFyUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJzdWJzdHJpbmciLCJoYWxmIiwiY2VpbCIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJpc1N0cmluZyIsInN0YXJ0c1dpdGgiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImlzQm9vbGVhbiIsIl9jb25zdCIsImNvbnRhaW5zIiwiX2RlZmF1bHQiLCJkZXBlbmRlbnRTY2hlbWFzIiwiX2Vsc2UiLCJfZW51bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiX2lmIiwibWF4aW11bSIsIm1heENvbnRhaW5zIiwiaXNJbnRlZ2VyIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkNvbnRhaW5zIiwibWluSXRlbXMiLCJtaW5MZW5ndGgiLCJtaW5Qcm9wZXJ0aWVzIiwibXVsdGlwbGVPZiIsIm5vdCIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInJlYWRPbmx5IiwiU2V0IiwidW5pcXVlSXRlbXMiLCJodG1sIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0RmllbGRzZXQiLCJnZXRGaWVsZHNldEJvZHkiLCJnZXRMZWdlbmQiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiZm9udFNpemUiLCJnZXRGaWVsZHNldEZvb3RlciIsImdldFByb3BlcnRpZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRBcnJheUFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0Q29udHJvbFNsb3QiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwiZ2V0QnV0dG9uIiwiZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMiLCJnZXRCdG5Hcm91cCIsImdldEFycmF5QnRuQWRkIiwiZ2V0QXJyYXlCdG5EZWxldGVBbGwiLCJnZXRCdXR0b25BY3RpdmVDbGFzcyIsImdldERlc2NyaXB0aW9uIiwiZmllbGRzZXQiLCJhY3Rpb25zIiwiYm9keSIsInByb3BlcnRpZXNDb250YWluZXIiLCJidG5Hcm91cCIsImdldFN3aXRjaGVyIiwibGFiZWxUZXh0IiwiZGVzY3JpcHRpb25JZCIsInJhZGlvQ29udHJvbHMiLCJsYWJlbHMiLCJsYWJlbFRleHRzIiwicmFkaW9Db250cm9sIiwiX1RoZW1lQmFyZWJvbmVzIiwiZm9vdGVyIiwiX2dldCRjYWxsIiwiX2dldCRjYWxsMiIsIl9nZXQkY2FsbDMiLCJfZ2V0JGNhbGw0IiwiX2dldCRjYWxsNSIsIl9nZXQkY2FsbDYiLCJyZW1vdmUiLCJjb250cm9sU2xvdCIsInRoaW5nIiwiZmFrZUZvckVhY2giLCJhcnJheSIsImVzY2FwZVJlZ0V4cCIsInN0cmluZyIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwic3RyIiwiUmVnRXhwIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJwcmV0dHkiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsInJvdW5kIiwic29ydE9iamVjdCIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJhIiwiYiIsImlzTnVsbCIsIkFycmF5IiwiX3R5cGVvZiIsInRhcmdldCIsIl9sZW4iLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiX2RlZmluZVByb3BlcnR5Iiwib2JqMSIsIm9iajIiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJyZWdleHAiLCJ0ZXN0IiwiYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzIiwibWFwIiwic3ViU2NoZW1hRWRpdG9yIiwic3ViU2NoZW1hRXJyb3JzIiwiZXh0cmFNZXNzYWdlcyIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImNvdW50ZXIiLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwiam9pbiIsImRlcGVuZGVudFNjaGVtYSIsInRtcEVkaXRvciIsInRtcEVycm9ycyIsInNvbWUiLCJ0aGVuRXJyb3JzIiwiZWxzZUVycm9ycyIsInRoZW5FZGl0b3IiLCJlbHNlRWRpdG9yIiwicHJlZml4SXRlbXNTY2hlbWFzQ291bnQiLCJwcm9wZXJ0aWVzQ291bnQiLCJjb21wdXRlZE1heGltdW0iLCJjb21wdXRlZE1pbmltdW0iLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsIm5vdEVycm9ycyIsIm9uZU9mRWRpdG9yIiwib25lT2ZFcnJvcnMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3JFcnJvcnMiLCJpdGVtU2NoZW1hIiwidHlwZXMiLCJpbnRlZ2VyIiwiYm9vbGVhbiIsIm9iamVjdCIsIl9udWxsIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsIl9sb29wIiwiaXRlbVN0cmluZ2lmaWVkIiwiX3JldCIsImRyYWZ0Iiwic2NoZW1hRXJyb3JzIiwiY29uc3RyYWluIiwidmFsaWRhdG9yRXJyb3JzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFD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QUMsQ0FBQztNQUNKO01BRUF3RixNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNtWSxLQUFLLENBQUMsQ0FBQ3hjLE9BQU8sQ0FBQyxVQUFDMGMsU0FBUyxFQUFLO1FBQzdDLElBQUluVixxREFBTSxDQUFDZ0UsV0FBVyxFQUFFbVIsU0FBUyxDQUFDLEVBQUU7VUFDbEMsSUFBTXpSLFNBQVMsR0FBR2xOLEtBQUksQ0FBQ3llLEtBQUssQ0FBQ0UsU0FBUyxDQUFDO1VBQ3ZDLElBQU1DLGVBQWUsR0FBRzFSLFNBQVMsQ0FBQ2xOLEtBQUksRUFBRUYsS0FBSyxFQUFFUyxNQUFNLEVBQUVWLEdBQUcsRUFBRWdCLElBQUksQ0FBQztVQUVqRSxJQUFJK2QsZUFBZSxFQUFFO1lBQ25CRixZQUFZLE1BQUF6TCxNQUFBLENBQUFDLCtFQUFBLENBQU93TCxZQUFZLEdBQUF4TCwrRUFBQSxDQUFLMEwsZUFBZSxFQUFDO1VBQ3REO1FBQ0Y7TUFDRixDQUFDLENBQUM7TUFFRixJQUFJRixZQUFZLENBQUM5VixNQUFNLEdBQUcsQ0FBQyxJQUFJckksTUFBTSxDQUFDRyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDeERnZSxZQUFZLEdBQUcsQ0FDYjtVQUNFNVksUUFBUSxFQUFFdkYsTUFBTSxDQUFDRyxNQUFNLENBQUMsVUFBVSxDQUFDO1VBQ25DRyxJQUFJLEVBQUVBO1FBQ1IsQ0FBQyxDQUNGO01BQ0g7TUFFQSxPQUFPNmQsWUFBWTtJQUNyQjtFQUFDO0VBQUEsT0FBQTFNLFNBQUE7QUFBQTtBQUdZQSx3RUFBUyxFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qZWRpLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlDb250cm9sKHtcbiAgICAgIHRpdGxlOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuICAgICAgY29uc3QgY2hpbGRUaXRsZSA9IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogJydcblxuICAgICAgY29uc3QgYXJyYXlJdGVtID0gdGhpcy50aGVtZS5nZXRBcnJheUl0ZW0oe1xuICAgICAgICBsZWdlbmQ6IGNoaWxkVGl0bGUgKyAnICcgKyBpdGVtSW5kZXgsXG4gICAgICAgIHNyT25seTogdHJ1ZVxuICAgICAgfSlcblxuICAgICAgYXJyYXlJdGVtLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoYXJyYXlJdGVtLmNvbnRhaW5lcilcblxuICAgICAgYXJyYXlJdGVtLmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYXJyYXlJdGVtLm1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGFycmF5SXRlbS5tb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDMgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5jb250cm9sID0gbnVsbFxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdib290c3RyYXAzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDMoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdiYXJlYm9uZXMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy50aGVtZS5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29udGFpbmVyIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXBhdGggYW5kIGRhdGEtdHlwZVxuICAgKi9cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZWRpdG9yIGNvbnRyb2wgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGVkaXRvciBjb250YWluZXJcbiAgICovXG4gIGJ1aWxkICgpIHt9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgY29udHJvbCBVSSB3aGVuIGl0cyBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzIChlcnJvcnMpIHtcbiAgICB0aGlzLmNvbnRyb2wubWVzc2FnZXMuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgZXJyb3IubWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhtZXNzYWdlKVxuICAgICAgICB0aGlzLmNvbnRyb2wubWVzc2FnZXMuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TXVsdGlwbGVDb250cm9sKHtcbiAgICAgIHRpdGxlOiAnT3B0aW9ucycsXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSxcbiAgICAgIHN3aXRjaGVyT3B0aW9uVmFsdWVzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZChvbGRJbnN0YW5jZS51aS5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRhaW5lcilcblxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuaW5kZXhcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzIChlcnJvcnMpIHtcbiAgICBjb25zdCBtdWx0aXBsZUVycm9ycyA9IGVycm9ycy5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci5wYXRoID09PSB0aGlzLnBhdGgpXG4gICAgY29uc3QgYWN0aXZlSW5zdGFuY2VFcnJvcnMgPSBlcnJvcnMuZmlsdGVyKChlcnJvcikgPT4gZXJyb3IucGF0aCAhPT0gdGhpcy5wYXRoKVxuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKG11bHRpcGxlRXJyb3JzKVxuICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuc2hvd1ZhbGlkYXRpb25FcnJvcnMoYWN0aXZlSW5zdGFuY2VFcnJvcnMpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE51bGxDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHJhZGlvLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIHBhdGhUb0F0dHJpYnV0ZVxufSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0T2JqZWN0Q29udHJvbCh7XG4gICAgICB0aXRsZTogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7IHR5cGU6ICdhbnknIH1cblxuICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGxhYmVsOiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmFwcGVuZENoaWxkKGNoZWNib3hDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc1RvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzVG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBnZXRUeXBlLCBpc1NldCwgY2xvbmUsIGlzQXJyYXksIG5vdFNldCwgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuXG5jbGFzcyBBcnJheUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBBcnJheUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbXNDb3VudCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgbGV0IHNjaGVtYVxuXG4gICAgc2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEuaXRlbXMoKSkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKSkgJiYgaXNTZXQodGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKVtpdGVtc0NvdW50XSlcblxuICAgIGlmIChoYXNQcmVmaXhJdGVtc1NjaGVtYSkge1xuICAgICAgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKVtpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdChzY2hlbWEpICYmIG5vdFNldChzY2hlbWEudHlwZSkpIHtcbiAgICAgIHNjaGVtYS50eXBlID0gaXNTZXQodmFsdWUpID8gZ2V0VHlwZSh2YWx1ZSkgOiAnYW55J1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBpdGVtc0NvdW50LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBjYWNoZUluZGV4ID0gT2JqZWN0LmtleXModGhpcy5jYWNoZSkubGVuZ3RoXG4gICAgdGhpcy5jYWNoZVtjYWNoZUluZGV4XSA9IHRlbXBFZGl0b3JcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBpc1NldCh0aGlzLmNhY2hlW2luZGV4XSkgPyB0aGlzLmNhY2hlW2luZGV4XSA6IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIGNoaWxkLnNldFZhbHVlKGl0ZW1WYWx1ZSwgZmFsc2UpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuICAgIHRoaXMudWkgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQncyB0eXBlXG4gICAqL1xuICBzZXRJbml0aWFsVmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgLy8gaWYgKHRoaXMuc2NoZW1hLmVudW0oKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKClbMF0pKSB7XG4gICAgLy8gICB0aGlzLnZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgICAgIGNvbnN0IHZhbGlkRGVmYXVsdCA9IGRlZmF1bHRFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmICh2YWxpZERlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0LCBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXNcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5pZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICB0aGlzLnRoZW5TY2hlbWEgPSB0aGlzLnNjaGVtYS50aGVuKCkgPyBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lLCB0aGlzLnNjaGVtYS50aGVuKCkpIDogbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSlcbiAgICAgIHRoaXMuZWxzZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmVsc2UoKSA/IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUsIHRoaXMuc2NoZW1hLmVsc2UoKSkgOiBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lKVxuICAgICAgdGhpcy5zY2hlbWFzLnB1c2godGhpcy50aGVuU2NoZW1hKVxuICAgICAgdGhpcy5zY2hlbWFzLnB1c2godGhpcy5lbHNlU2NoZW1hKVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBzY2hlbWEuaWZcbiAgICAgICAgZGVsZXRlIHNjaGVtYS50aGVuXG4gICAgICAgIGRlbGV0ZSBzY2hlbWEuZWxzZVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFswLCAxXVxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbJ3RoZW4nLCAnZWxzZSddXG4gICAgfSBlbHNlIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICAgIHRoaXMuc3dpdGNoSWYoKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgIGNvbnN0IHNldFZhbHVlID0gaXNPYmplY3Qoc2NoZW1hQ2xvbmUpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZXNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKDAsIGZhbHNlLCBzZXRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSwgc2V0VmFsdWUgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMuaW5kZXhdXG5cbiAgICBpZiAoc2V0VmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJZiAoKSB7XG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmlmKCkpKSB7XG4gICAgICBjb25zdCBpZkluZGV4ID0gdGhpcy5nZXRJZkluZGV4KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgIGNvbnN0IHByZVZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGlmSW5kZXgpXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMoY3VycmVudFZhbHVlLCBwcmVWYWx1ZSlcbiAgICAgIHRoaXMuc2V0VmFsdWUoZmluYWxWYWx1ZSwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0SWZJbmRleCAodmFsdWUpIHtcbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiB0aGlzLnNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcbiAgICByZXR1cm4gaWZFcnJvcnMubGVuZ3RoID09PSAwID8gMCA6IDFcbiAgfVxuXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZVxuXG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGluc3RhbmNlIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gaW5zdGFuY2UgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIHZhbHVlKSkge1xuICAgICAgbGV0IGZpdHRlc3RJbmRleFxuXG4gICAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuaWYoKSkpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRJZkluZGV4KHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRGaXR0ZXN0SW5kZXgodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4LCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlSW5zdGFuY2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVsbEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIE51bGxJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTnVsbEVkaXRvcih0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEucHJvcGVydGllcygpKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllcygpW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBpc1NldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCgpKSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCgpLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5zY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IGlzTm90UmVxdWlyZWQgPSAhdGhpcy5pc1JlcXVpcmVkKGtleSlcbiAgICBjb25zdCBzaG91bGRTdGFydERlYWN0aXZhdGVkID0gdGhpcy5qZWRpLm9wdGlvbnMuZGVhY3RpdmF0ZVByb3BlcnRpZXMgfHwgdGhpcy5zY2hlbWEub3B0aW9uKCdkZWFjdGl2YXRlUHJvcGVydGllcycpXG5cbiAgICBpZiAoaXNOb3RSZXF1aXJlZCAmJiBzaG91bGRTdGFydERlYWN0aXZhdGVkKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nSW5zdGFuY2VcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3InXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcbmltcG9ydCB7IGdldFR5cGUsIGhhc093biwgaXNBcnJheSwgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHRoZW1lOiAnYmFyZWJvbmVzJyxcbiAgICAgIHJlZlBhcnNlcjogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJvb3ROYW1lID0gJyMnXG4gICAgdGhpcy5wYXRoU2VwYXJhdG9yID0gJy8nXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodGhpcy5vcHRpb25zLnNjaGVtYSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgY29uc3QgaGlkZGVuQ29udHJvbCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IGhpZGRlbkNvbnRyb2wuaW5wdXRcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZVxuXG4gICAgLy8gY2lyY3VsYXIgJHJlZiBhcmUgbm90IGluaXRpYWxseSBkZXJlZmVyZW5jZWQgYW5kIG11c3QgYmUgZGVmaW5lZCBvbiBjcmVhdGlvblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyICYmIGhhc093bihjb25maWcuc2NoZW1hLCAnJHJlZicpKSB7XG4gICAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVmaW5lKGNvbmZpZy5zY2hlbWFbJyRyZWYnXSlcbiAgICB9XG5cbiAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEJvb2xlYW5JbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgT2JqZWN0SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYXJyYXknKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQXJyYXlJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgU3RyaW5nSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVtYmVySW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnbnVsbCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdWxsSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NldChjb25maWcuc2NoZW1hLmlmKCkpIHx8IGlzU2V0KGNvbmZpZy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5vbmVPZigpKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgaXNBcnJheShjb25maWcuc2NoZW1hLnR5cGUoKSkgfHwgbm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgaWYgKG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkgJiYgaXNTZXQoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2NoZW1hID0gY29uZmlnLnNjaGVtYS5jbG9uZSgpXG4gICAgICAgIG9yaWdpbmFsU2NoZW1hLnR5cGUgPSBnZXRUeXBlKGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IuZ2V0RXJyb3JzKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjb250YWlucyAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmNvbnRhaW5zKSkgPyB0aGlzLnNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXBlbmRlbnRTY2hlbWFzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5lbHNlKSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLmZvcm1hdCgpKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICBpZiAoaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhDb250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhDb250YWlucykgJiYgdGhpcy5zY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Db250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Db250YWlucykgJiYgdGhpcy5zY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJlZml4SXRlbXMgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJjbGFzcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBodG1sLnN0eWxlLmZvbnRTaXplID0gJ2luaGVyaXQnXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRGb290ZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG5cbiAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICBodG1sLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLnZhbHVlKVxuICAgIH1cblxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFkZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUtYWxsJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnamVkaS1hY3RpdmUtYnRuJ1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0T2JqZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc1RvZ2dsZSA9IHRoaXMuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQ29udGFpbmVyID0gdGhpcy5nZXRQcm9wZXJ0aWVzU2xvdCh7XG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgY29uZmlnLmlkXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3BlcnRpZXNBY3RpdmF0b3JzID0gdGhpcy5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBjb25maWcuaWQsXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICBhZGRQcm9wZXJ0eUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLW9iamVjdC1hZGQnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGNvbmZpZy5lZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydGllc0FjdGl2YXRvcnMpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5Q29udHJvbC5jb250YWluZXIpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5QnRuKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBmaWVsZHNldCxcbiAgICAgIGxlZ2VuZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBwcm9wZXJ0aWVzVG9nZ2xlLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcixcbiAgICAgIGFkZFByb3BlcnR5Q29udHJvbCxcbiAgICAgIGFkZFByb3BlcnR5QnRuLFxuICAgICAgcHJvcGVydGllc0FjdGl2YXRvcnNcbiAgICB9XG4gIH1cblxuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5nZXRBcnJheUJ0bkFkZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVBbGxCdG4gPSB0aGlzLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVBbGxCdG4pXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgZmllbGRzZXQsXG4gICAgICBsZWdlbmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgYnRuR3JvdXAsXG4gICAgICBhZGRCdG4sXG4gICAgICBkZWxldGVBbGxCdG5cbiAgICB9XG4gIH1cblxuICBnZXRBcnJheUl0ZW0gKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5sZWdlbmQsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5nZXRCdG5Hcm91cCgpXG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJ1xuICAgIH0pXG5cbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUnKVxuXG4gICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJ1xuICAgIH0pXG5cbiAgICBtb3ZlVXBCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS1kb3duJylcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcbiAgICBib2R5LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgZmllbGRzZXQsXG4gICAgICBsZWdlbmQsXG4gICAgICBib2R5LFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgZGVsZXRlQnRuLFxuICAgICAgbW92ZVVwQnRuLFxuICAgICAgbW92ZURvd25CdG5cbiAgICB9XG4gIH1cblxuICBnZXRNdWx0aXBsZUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBzd2l0Y2hlciA9IHRoaXMuZ2V0U3dpdGNoZXIoe1xuICAgICAgdmFsdWVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICB0aXRsZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBsYWJlbDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBzck9ubHk6IHRydWVcbiAgICB9KVxuXG4gICAgc3dpdGNoZXIuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChzd2l0Y2hlci5jb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgZmllbGRzZXQsXG4gICAgICBsZWdlbmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgc3dpdGNoZXJcbiAgICB9XG4gIH1cblxuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgcmFkaW9Db250cm9scyA9IFtdXG4gICAgY29uc3QgcmFkaW9zID0gW11cbiAgICBjb25zdCBsYWJlbHMgPSBbXVxuICAgIGNvbnN0IGxhYmVsVGV4dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2xzLnB1c2gocmFkaW9Db250cm9sKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpb3MucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuXG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGxhYmVsVGV4dHMucHVzaChsYWJlbFRleHQpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGxhYmVscy5wdXNoKGxhYmVsKVxuICAgIH0pXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCYXJlYm9uZXNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0RmllbGRzZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdwYW5lbC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgbGVnZW5kLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0RmllbGRzZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZvb3RlcicpXG4gICAgcmV0dXJuIGZvb3RlclxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRGb290ZXIgKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IHN1cGVyLmdldEZpZWxkc2V0Rm9vdGVyKClcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgbGVnZW5kLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLXNlbGVjdCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZmFrZUZvckVhY2ggPSAoYXJyYXksIGNhbGxiYWNrKSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXNjYXBlUmVnRXhwID0gKHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCByZXBsYWNlQWxsID0gKHN0ciwgZmluZCwgcmVwbGFjZSkgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbmV4cG9ydCBjb25zdCBwYXRoVG9BdHRyaWJ1dGUgPSAocGF0aCkgPT4ge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbmV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuXG5leHBvcnQgY29uc3Qgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzID0gKG9iajEsIG9iajIpID0+IHtcbiAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmoxKSB7XG4gICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9iajFcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gaXNTZXQoc2NoZW1hLnByb3BlcnRpZXMoKSkgPyBzY2hlbWEucHJvcGVydGllcygpIDoge31cbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBsZXQgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICAgIGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICBgUHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIGRvZXMgbm90IGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllcy5gXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByb290TmFtZTogcHJvcGVydHksXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBhbGxPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKCkpKSB7XG4gICAgc2NoZW1hLmFsbE9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgbGV0IGV4dHJhTWVzc2FnZXMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYW55T2YoKSkpIHtcbiAgICBjb25zdCBhbnlPZiA9IHNjaGVtYS5hbnlPZigpXG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGV4dHJhTWVzc2FnZXMgPSBbLi4uZXh0cmFNZXNzYWdlcywgSlNPTi5zdHJpbmdpZnkoc2NoZW1hKV1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgICAuLi5leHRyYU1lc3NhZ2VzXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2NvbnN0ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuY29uc3QoKSkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IGRpZmZlcmVudCh2YWx1ZSwgc2NoZW1hLmNvbnN0KCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5jb250YWlucygpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmNvbnRhaW5zKCksIHN0YXJ0VmFsdWU6IGl0ZW0sIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGNvbnRhaW5zRXJyb3JzID0gY29udGFpbnNFZGl0b3IuZ2V0RXJyb3JzKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5taW5Db250YWlucygpKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBzY2hlbWEubWluQ29udGFpbnMoKSlcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGBDb250YWlucyBtYXRjaCBjb3VudCAke2NvdW50ZXJ9IGlzIGxlc3MgdGhhbiBtaW5pbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1pbkNvbnRhaW5zKCl9YFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgJ05vIGl0ZW1zIG1hdGNoIGNvbnRhaW5zJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWEubWF4Q29udGFpbnMoKSkpIHtcbiAgICAgIGNvbnN0IG1heENvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID4gc2NoZW1hLm1heENvbnRhaW5zKCkpXG5cbiAgICAgIGlmIChtYXhDb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBleGNlZWRzIG1heGltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWF4Q29udGFpbnMoKX1gXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVudFNjaGVtYXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpKSkge1xuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudFNjaGVtYSA9IHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKClba2V5XVxuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogZGVwZW5kZW50U2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi50bXBFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZW51bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmVudW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYS5lbnVtKCkuc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZW51bSgpKVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+PSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKClcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGV4Y2x1c2l2ZU1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8PSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKClcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGZvcm1hdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuZm9ybWF0KCkpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCBtZXNzYWdlc1xuICAgIGxldCByZWdleHBcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBtZXNzYWdlcyA9IFsnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3VybCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgICAgbWVzc2FnZXMgPSBbJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1cmwnXVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3V1aWQnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICAgIG1lc3NhZ2VzID0gWydNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXVpZCddXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfaWYgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmlmKCkpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWEudGhlbigpKSAmJiBub3RTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS50aGVuKCkpKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgLy8gdG9kbyBpZiBhcnJheSBsZW5ndGggaXMgPiBwcmVmaXhJdGVtcy5sZW5ndGhcbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5pdGVtcygpKSkge1xuICAgIGNvbnN0IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50ID0gaXNTZXQoc2NoZW1hLnByZWZpeEl0ZW1zKCkpID8gc2NoZW1hLnByZWZpeEl0ZW1zKCkubGVuZ3RoIDogMFxuXG4gICAgaWYgKHNjaGVtYS5pdGVtcygpID09PSBmYWxzZSAmJiB2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA+IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50KSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ1NjaGVtYSBhbHdheXMgZmFpbHMgdmFsaWRhdGlvbi4nXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heEl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heExlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heExlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5MZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5MZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5pbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW1dLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbXVsdGlwbGVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm11bHRpcGxlT2YoKSkpIHtcbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCldLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG5vdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEubm90KCkpKSB7XG4gICAgY29uc3Qgbm90RXJyb3JzID0gdmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hLiddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3Qgb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgbGV0IGV4dHJhTWVzc2FnZXMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEub25lT2YoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG5cbiAgICAgIGV4dHJhTWVzc2FnZXMgPSBbLi4uZXh0cmFNZXNzYWdlcywgSlNPTi5zdHJpbmdpZnkoc2NoZW1hKV1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgICAgLi4uZXh0cmFNZXNzYWdlc1xuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm4oKSkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcvJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgcHJlZml4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnByZWZpeEl0ZW1zKCkpKSB7XG4gICAgc2NoZW1hLnByZWZpeEl0ZW1zKCkuZm9yRWFjaCgoaXRlbVNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IHZhbHVlW2luZGV4XVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbVZhbHVlKSkge1xuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogaXRlbVNjaGVtYSwgc3RhcnRWYWx1ZTogaXRlbVZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgICAgaWYgKHRtcEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtgSXRlbSAke2luZGV4fSBmYWlscyB2YWxpZGF0aW9uLmBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnJlcXVpcmVkKCkpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWEudHlwZSgpKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHZhbGlkID0gc2NoZW1hLnR5cGUoKS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCldLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgc29ydE9iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgdW5pcXVlSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpICYmIHNjaGVtYS51bmlxdWVJdGVtcygpID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc2VlbiA9IFtdXG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHZhbHVlW2ldXG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICBpdGVtID0gc29ydE9iamVjdChpdGVtKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVtU3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gc2Vlbi5zb21lKChzZWVuKSA9PiBzZWVuID09PSBpdGVtU3RyaW5naWZpZWQpXG5cbiAgICAgIGlmIChoYXNEdXBsaWNhdGVkSXRlbXMpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZW4ucHVzaChpdGVtU3RyaW5naWZpZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgZ2V0RXJyb3JzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gc2NoZW1hLmNsb25lKClcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZXM6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2VzJykgPyBzY2hlbWEub3B0aW9uKCdtZXNzYWdlcycpIDogWydpbnZhbGlkJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2VzJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2VzOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlcycpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=