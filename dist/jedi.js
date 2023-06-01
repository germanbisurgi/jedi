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
    key: "showValidationErrors",
    value: function showValidationErrors() {
      var _this2 = this;
      var errors = this.instance.validate();
      this.control.messages.innerHTML = '';
      errors.forEach(function (error) {
        var invalidFeedback = _this2.getInvalidFeedback(error.message);
        _this2.control.messages.appendChild(invalidFeedback);
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this3 = this;
      this.control.childrenSlot.innerHTML = '';
      this.instance.children.forEach(function (child) {
        var arrayItem = _this3.theme.getFieldset();
        var arrayItemBody = _this3.theme.getFieldsetBody();
        arrayItem.appendChild(arrayItemBody);
        _this3.control.childrenSlot.appendChild(arrayItem);
        arrayItemBody.appendChild(child.ui.container);
        var btnGroup = _this3.theme.getBtnGroup();
        var itemIndex = Number(child.getKey());

        // delete
        var deleteBtn = _this3.theme.getButton({
          textContent: 'Delete item'
        });
        deleteBtn.classList.add('jedi-array-delete');
        deleteBtn.addEventListener('click', function () {
          var itemIndex = Number(child.path.split(_this3.instance.jedi.pathSeparator).pop());
          _this3.instance.deleteItem(itemIndex);
        });
        btnGroup.appendChild(deleteBtn);

        // move up
        if (_this3.instance.children.length !== 0) {
          var moveUpBtn = _this3.theme.getButton({
            textContent: 'Move up'
          });
          moveUpBtn.classList.add('jedi-array-move-up');
          moveUpBtn.addEventListener('click', function () {
            var toIndex = itemIndex - 1;
            _this3.instance.move(itemIndex, toIndex);
          });
          btnGroup.appendChild(moveUpBtn);
        }

        // move down
        if (_this3.instance.getValue().length - 1 !== itemIndex) {
          var moveDownBtn = _this3.theme.getButton({
            textContent: 'Move down'
          });
          moveDownBtn.classList.add('jedi-array-move-down');
          moveDownBtn.addEventListener('click', function () {
            var toIndex = itemIndex + 1;
            _this3.instance.move(itemIndex, toIndex);
          });
          btnGroup.appendChild(moveDownBtn);
        }
        arrayItemBody.appendChild(btnGroup);
        var buttons = _this3.control.container.querySelectorAll('button');
        if (_this3.disabled) {
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
     * Builds the editor control
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
      var errors = this.instance.validate();
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


var MultipleEditor = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(MultipleEditor, _Editor);
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
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
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
      var _this2 = this;
      var errors = this.instance.validate();
      this.control.messages.innerHTML = '';
      errors.forEach(function (error) {
        var invalidFeedback = _this2.getInvalidFeedback(error.message);
        _this2.control.messages.appendChild(invalidFeedback);
      });
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
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
    key: "showValidationErrors",
    value: function showValidationErrors() {
      var _this2 = this;
      var errors = this.instance.validate();
      this.control.messages.innerHTML = '';
      errors.forEach(function (error) {
        var invalidFeedback = _this2.getInvalidFeedback(error.message);
        _this2.control.messages.appendChild(invalidFeedback);
      });
    }
  }, {
    key: "refreshPropertiesSlot",
    value: function refreshPropertiesSlot() {
      var _this3 = this;
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.jedi.options.editableProperties, true) || Object(_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.schema.option('editableProperties'), true)) {
        while (this.control.propertiesActivators.firstChild) {
          this.control.propertiesActivators.removeChild(this.control.propertiesActivators.lastChild);
        }
        this.instance.children.forEach(function (child) {
          var id = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(child.path) + '-activator';
          var checboxControl = _this3.theme.getCheckboxControl({
            id: id,
            label: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(child.schema.title()) ? child.schema.title() : child.getKey(),
            srOnly: false
          });
          var checkbox = checboxControl.input;
          checkbox.checked = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(_this3.instance.getValue(), child.getKey());
          var isRequired = _this3.instance.isRequired(child.getKey());
          var isDependentRequired = _this3.instance.isDependentRequired(child.getKey());
          var disabled = _this3.disabled;
          checkbox.disabled = isRequired || isDependentRequired || disabled;
          checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
              child.activate();
            } else {
              child.deactivate();
            }
          });

          // appends
          _this3.control.propertiesActivators.appendChild(checboxControl.container);
        });
      }
    }
  }, {
    key: "refreshEditors",
    value: function refreshEditors() {
      var _this4 = this;
      while (this.control.childrenSlot.firstChild) {
        this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild);
      }
      this.instance.children.forEach(function (child) {
        if (child.isActive) {
          _this4.control.childrenSlot.appendChild(child.ui.container);
          if (_this4.disabled) {
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
        var defaultErrors = this.jedi.validator.validate(this.schema["default"](), this.schema, this.getKey(), this.path);
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
    key: "validate",
    value: function validate() {
      if (!this.isActive) {
        return [];
      }
      return this.jedi.validator.validate(this.getValue(), this.schema, this.getKey(), this.path);
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
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema.anyOf()) || Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema.oneOf())) {
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
        var _schemaClone = this.schema.clone();
        this.schemas = [_objectSpread(_objectSpread({}, _schemaClone), {
          type: 'string'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'number'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'integer'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'boolean'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'array'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'object'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
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
          var instanceErrors = this.jedi.validator.validate(value, instance.schema, instance.getKey(), instance.path);
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
        var fittestIndex = this.getFittestIndex(value);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _instances_multiple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./instances/multiple */ "./src/instances/multiple.js");
/* harmony import */ var _instances_boolean__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./instances/boolean */ "./src/instances/boolean.js");
/* harmony import */ var _instances_object__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./instances/object */ "./src/instances/object.js");
/* harmony import */ var _instances_array__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./instances/array */ "./src/instances/array.js");
/* harmony import */ var _instances_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./instances/string */ "./src/instances/string.js");
/* harmony import */ var _instances_number__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./instances/number */ "./src/instances/number.js");
/* harmony import */ var _instances_null__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./instances/null */ "./src/instances/null.js");
/* harmony import */ var _ref_parser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ref-parser */ "./src/ref-parser.js");






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
        this.refParser = new _ref_parser__WEBPACK_IMPORTED_MODULE_17__["default"]({
          XMLHttpRequest: this.options.XMLHttpRequest
        });
        this.options.schema = this.refParser.dereference(this.options.schema);
      }
      this.schema = new _schema__WEBPACK_IMPORTED_MODULE_6__["default"](this.options.schema);
      this.root = this.createInstance({
        jedi: this,
        schema: this.options.schema
      });
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.options.startValue)) {
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
      if (this.options.refParser && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["hasOwn"])(config.schema, '$ref')) {
        config.schema = this.refParser.define(config.schema['$ref']);
      }
      config.schema = new _schema__WEBPACK_IMPORTED_MODULE_6__["default"](config.schema);
      if (config.schema.typeIs('boolean')) {
        instance = new _instances_boolean__WEBPACK_IMPORTED_MODULE_11__["default"](config);
      }
      if (config.schema.typeIs('object')) {
        instance = new _instances_object__WEBPACK_IMPORTED_MODULE_12__["default"](config);
      }
      if (config.schema.typeIs('array')) {
        instance = new _instances_array__WEBPACK_IMPORTED_MODULE_13__["default"](config);
      }
      if (config.schema.typeIs('string')) {
        instance = new _instances_string__WEBPACK_IMPORTED_MODULE_14__["default"](config);
      }
      if (config.schema.typeIsNumeric()) {
        instance = new _instances_number__WEBPACK_IMPORTED_MODULE_15__["default"](config);
      }
      if (config.schema.typeIs('null')) {
        instance = new _instances_null__WEBPACK_IMPORTED_MODULE_16__["default"](config);
      }
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(config.schema.anyOf()) || Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(config.schema.oneOf()) || config.schema.typeIs('any') || Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isArray"])(config.schema.type()) || Object(_utils__WEBPACK_IMPORTED_MODULE_9__["notSet"])(config.schema.type())) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["notSet"])(config.schema.type()) && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(config.schema["default"]())) {
          var originalSchema = config.schema.clone();
          originalSchema.type = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getType"])(config.schema["default"]());
          config.schema = new _schema__WEBPACK_IMPORTED_MODULE_6__["default"](originalSchema);
          return this.createInstance(config);
        } else {
          instance = new _instances_multiple__WEBPACK_IMPORTED_MODULE_10__["default"](config);
        }
      }
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(instance)) {
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
    key: "validate",
    value: function validate() {
      var _this4 = this;
      var errors = [];
      Object.keys(this.instances).forEach(function (key) {
        var editor = _this4.instances[key];
        errors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(errors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(editor.validate()));
      });
      return errors;
    }

    /**
     * Destroy the root instance and it'S children
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
    key: "getEditorContainer",
    value: function getEditorContainer() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getEditorContainer", this).call(this);
    }
  }, {
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
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getChildrenSlot", this).call(this);
    }
  }, {
    key: "getMessagesSlot",
    value: function getMessagesSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getMessagesSlot", this).call(this);
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getControlSlot", this).call(this);
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
    key: "getPropertiesActivators",
    value: function getPropertiesActivators() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getPropertiesActivators", this).call(this);
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
    key: "getArrayBtnAdd",
    value: function getArrayBtnAdd(config) {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getArrayBtnAdd", this).call(this, config);
    }
  }, {
    key: "getArrayBtnDeleteAll",
    value: function getArrayBtnDeleteAll(config) {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getArrayBtnAdd", this).call(this, config);
    }
  }, {
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-primary';
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getDescription", this).call(this, config);
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
    key: "getEditorContainer",
    value: function getEditorContainer() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getEditorContainer", this).call(this);
    }
  }, {
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
    key: "getActionsSlot",
    value: function getActionsSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getActionsSlot", this).call(this);
    }
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getArrayActionsSlot", this).call(this);
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getChildrenSlot", this).call(this);
    }
  }, {
    key: "getMessagesSlot",
    value: function getMessagesSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getMessagesSlot", this).call(this);
    }
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getControlSlot", this).call(this);
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
    key: "getPropertiesActivators",
    value: function getPropertiesActivators() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getPropertiesActivators", this).call(this);
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
    key: "getArrayBtnAdd",
    value: function getArrayBtnAdd(config) {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getArrayBtnAdd", this).call(this, config);
    }
  }, {
    key: "getArrayBtnDeleteAll",
    value: function getArrayBtnDeleteAll(config) {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getArrayBtnDeleteAll", this).call(this, config);
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
    key: "getEditorContainer",
    value: function getEditorContainer() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getEditorContainer", this).call(this);
    }
  }, {
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
    key: "getActionsSlot",
    value: function getActionsSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getActionsSlot", this).call(this);
    }
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getArrayActionsSlot", this).call(this);
    }
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getChildrenSlot", this).call(this);
    }
  }, {
    key: "getMessagesSlot",
    value: function getMessagesSlot() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getMessagesSlot", this).call(this);
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
    key: "getPropertiesActivators",
    value: function getPropertiesActivators() {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getPropertiesActivators", this).call(this);
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
    key: "getArrayBtnAdd",
    value: function getArrayBtnAdd(config) {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getArrayBtnAdd", this).call(this, config);
    }
  }, {
    key: "getArrayBtnDeleteAll",
    value: function getArrayBtnDeleteAll(config) {
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getArrayBtnDeleteAll", this).call(this, config);
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
/*! exports provided: clone, fakeForEach, escapeRegExp, replaceAll, pathToAttribute, hasOwn, pretty, round2decimals, sortObject, equal, different, isNull, isSet, notSet, isNumber, isInteger, isString, isBoolean, isArray, isObject, getType, mergeDeep */
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
          var additionalPropertyErrors = editor.validate().map(function (error) {
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
      var subSchemaErrors = subSchemaEditor.validate();
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
      var anyOfErrors = anyOfEditor.validate();
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
      var containsErrors = containsEditor.validate();
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
        var tmpErrors = tmpEditor.validate();
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
    var ifErrors = ifEditor.validate();
    ifEditor.destroy();
    var thenErrors = [];
    var elseErrors = [];
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema.then())) {
      var thenEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        schema: schema.then(),
        startValue: value,
        refParser: false
      });
      thenErrors = thenEditor.validate();
      thenEditor.destroy();
    }
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schema["else"]())) {
      var elseEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        schema: schema["else"](),
        startValue: value,
        refParser: false
      });
      elseErrors = elseEditor.validate();
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
    var notErrors = validator.validate(value, new _schema__WEBPACK_IMPORTED_MODULE_0__["default"](schema.not()), key, path);
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
      var oneOfErrors = oneOfEditor.validate();
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
          var editorErrors = editor.validate().map(function (error) {
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
        // const tmpEditor = validator.validate()
        var tmpErrors = tmpEditor.validate();
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
    key: "validate",
    value: function validate(value, schema, key, path) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJBcnJheUVkaXRvciIsIl9FZGl0b3IiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYnVpbGQiLCJfdGhpcyIsImNvbnRyb2wiLCJ0aGVtZSIsImdldEFycmF5Q29udHJvbCIsInRpdGxlIiwiaXNTZXQiLCJpbnN0YW5jZSIsInNjaGVtYSIsImdldEtleSIsInNyT25seSIsIm9wdGlvbiIsImlkIiwicGF0aFRvQXR0cmlidXRlIiwicGF0aCIsImRlc2NyaXB0aW9uIiwiYWRkQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwic2V0VmFsdWUiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImdldEludmFsaWRGZWVkYmFjayIsIm1lc3NhZ2UiLCJnZXRBbGVydCIsInNhbml0aXplIiwiaXNBcnJheSIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwiX3RoaXMyIiwiZXJyb3JzIiwidmFsaWRhdGUiLCJtZXNzYWdlcyIsImlubmVySFRNTCIsImZvckVhY2giLCJlcnJvciIsImludmFsaWRGZWVkYmFjayIsInJlZnJlc2hVSSIsIl90aGlzMyIsImNoaWxkcmVuU2xvdCIsImNoaWxkcmVuIiwiY2hpbGQiLCJhcnJheUl0ZW0iLCJnZXRGaWVsZHNldCIsImFycmF5SXRlbUJvZHkiLCJnZXRGaWVsZHNldEJvZHkiLCJ1aSIsImJ0bkdyb3VwIiwiZ2V0QnRuR3JvdXAiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJkZWxldGVCdG4iLCJnZXRCdXR0b24iLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsInNwbGl0IiwiamVkaSIsInBhdGhTZXBhcmF0b3IiLCJwb3AiLCJkZWxldGVJdGVtIiwibGVuZ3RoIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJnZXRWYWx1ZSIsIm1vdmVEb3duQnRuIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlZCIsImRpc2FibGUiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJlbmFibGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJFZGl0b3IiLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwiX0Jvb2xlYW5FZGl0b3IiLCJnZXRSYWRpb3NDb250cm9sIiwidmFsdWVzIiwidGl0bGVzIiwibGFiZWwiLCJyYWRpb3MiLCJyYWRpbyIsInJhZGlvVmFsdWUiLCJjaGVja2VkIiwiQm9vbGVhbkVkaXRvciIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiZ2V0U2VsZWN0Q29udHJvbCIsImlucHV0IiwiZ2V0Q2hlY2tib3hDb250cm9sIiwiQm9vbGVhbiIsIl9FdmVudEVtaXR0ZXIiLCJjYWxsIiwiaW5pdCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWx3YXlzU2hvd0Vycm9ycyIsIm9uIiwiVGhlbWVCb290c3RyYXAzIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiVGhlbWVCYXJlYm9uZXMiLCJnZXRFZGl0b3JDb250YWluZXIiLCJ0eXBlIiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk9iamVjdCIsImtleXMiLCJFdmVudEVtaXR0ZXIiLCJNdWx0aXBsZUVkaXRvciIsImdldE11bHRpcGxlQ29udHJvbCIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwic3dpdGNoZXIiLCJpbmRleCIsInN3aXRjaEluc3RhbmNlIiwib2xkSW5zdGFuY2UiLCJpbnN0YW5jZXMiLCJsYXN0SW5kZXgiLCJhY3RpdmVJbnN0YW5jZSIsIk51bGxFZGl0b3IiLCJnZXROdWxsQ29udHJvbCIsImZvcm1hdElzIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiX051bWJlckVkaXRvciIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJnZXRJbnB1dENvbnRyb2wiLCJ0eXBlSXMiLCJNYXRoIiwiZmxvb3IiLCJpc051bWJlciIsIk9iamVjdEVkaXRvciIsImdldE9iamVjdENvbnRyb2wiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJlcXVhbCIsImFkZFByb3BlcnR5QnRuIiwiYWRkUHJvcGVydHlDb250cm9sIiwicHJvcGVydHlOYW1lRW1wdHkiLCJwcm9wZXJ0eUV4aXN0IiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJjcmVhdGVDaGlsZCIsImFjdGl2YXRlIiwiaXNPYmplY3QiLCJyZWZyZXNoUHJvcGVydGllc1Nsb3QiLCJwcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjaGVjYm94Q29udHJvbCIsImNoZWNrYm94IiwiaGFzT3duIiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJkZWFjdGl2YXRlIiwicmVmcmVzaEVkaXRvcnMiLCJfdGhpczQiLCJpc0FjdGl2ZSIsInByb3BlcnRpZXNUb2dnbGUiLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJfU3RyaW5nRWRpdG9yIiwiU3RyaW5nRWRpdG9yIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsImlucHV0VHlwZXMiLCJnZXRUZXh0YXJlYUNvbnRyb2wiLCJpbmNsdWRlcyIsImZvcm1hdCIsIlN0cmluZyIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsInB1c2giLCJlbWl0IiwiZmlsdGVyIiwibGlzdGVuZXIiLCJBcnJheUluc3RhbmNlIiwiX0luc3RhbmNlIiwic2V0VUkiLCJwcmVwYXJlIiwiY2FjaGUiLCJyZWZyZXNoQ2hpbGRyZW4iLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJpdGVtc0NvdW50IiwiaXRlbXMiLCJoYXNQcmVmaXhJdGVtc1NjaGVtYSIsInByZWZpeEl0ZW1zIiwibm90U2V0IiwiZ2V0VHlwZSIsImNyZWF0ZUluc3RhbmNlIiwicGFyZW50IiwiZnJvbUluZGV4IiwiY2xvbmUiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNhY2hlSW5kZXgiLCJjdXJyZW50VmFsdWUiLCJuZXdWYWx1ZSIsIm9uQ2hpbGRDaGFuZ2UiLCJpdGVtVmFsdWUiLCJJbnN0YW5jZSIsIkJvb2xlYW5JbnN0YW5jZSIsImNvbmZpZyIsInVuZGVmaW5lZCIsInJvb3ROYW1lIiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInVucmVnaXN0ZXIiLCJkZWZhdWx0RXJyb3JzIiwidmFsaWRhdG9yIiwidmFsaWREZWZhdWx0IiwidHJpZ2dlcnNDaGFuZ2UiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwiYW55T2YiLCJvbmVPZiIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwiX3NjaGVtYSRvcHRpb25zIiwiX3NjaGVtYSRvcHRpb25zMiIsIl9vYmplY3RTcHJlYWQiLCJhbGxPZiIsIm1lcmdlQWxsT2YiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsIm1lcmdlRGVlcCIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsIm5ld0luZGV4IiwiZ2V0Rml0dGVzdEluZGV4IiwiZml0dGVzdEluZGV4IiwiY2hhbXBpb25FcnJvcnMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiaW5zdGFuY2VFcnJvcnMiLCJlcnIiLCJlIiwiZiIsImRpZmZlcmVudCIsIk51bGxJbnN0YW5jZSIsIk51bWJlckluc3RhbmNlIiwidHlwZUlzTnVtZXJpYyIsIk9iamVjdEluc3RhbmNlIiwicHJvcGVydGllcyIsInJlZnJlc2hJbnN0YW5jZXMiLCJwcm9wZXJ0eSIsInJlcXVpcmVkIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImlzTm90UmVxdWlyZWQiLCJzaG91bGRTdGFydERlYWN0aXZhdGVkIiwiZGVhY3RpdmF0ZVByb3BlcnRpZXMiLCJkZWxldGVDaGlsZCIsImkiLCJnZXRDaGlsZCIsImZpbmQiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIlN0cmluZ0luc3RhbmNlIiwiSmVkaSIsImFzc2lnbiIsInNob3dSZXF1aXJlZE9ubHkiLCJyZWZQYXJzZXIiLCJyb290IiwiVmFsaWRhdG9yIiwiUmVmUGFyc2VyIiwiWE1MSHR0cFJlcXVlc3QiLCJkZXJlZmVyZW5jZSIsIlNjaGVtYSIsInN0YXJ0VmFsdWUiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbkNvbnRyb2wiLCJoaWRkZW5JbnB1dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWZpbmUiLCJvcmlnaW5hbFNjaGVtYSIsIl90aGlzJHJvb3QiLCJnZXRJbnN0YW5jZSIsImVkaXRvciIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl90aGlzNSIsIml0ZXJhdGlvbnMiLCJkZWZpbml0aW9ucyIsInRyYXZlcnNlIiwiYXJncyIsInJlZk93bmVyIiwicHJldlZhbHVlIiwicmVmIiwiaXNDaXJjdWxhclBhdGgiLCJjb25zb2xlIiwibG9nIiwib3V0cHV0Iiwic3Vic3RyaW5nIiwiaGFsZiIsImNlaWwiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwiaXNTdHJpbmciLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJpc0Jvb2xlYW4iLCJfY29uc3QiLCJjb250YWlucyIsIl9kZWZhdWx0IiwiZGVwZW5kZW50U2NoZW1hcyIsIl9lbHNlIiwiX2VudW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsIl9pZiIsIm1heGltdW0iLCJtYXhDb250YWlucyIsImlzSW50ZWdlciIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5Db250YWlucyIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJwYXR0ZXJuIiwicGF0dGVyblByb3BlcnRpZXMiLCJyZWFkT25seSIsIlNldCIsInRoZW4iLCJ1bmlxdWVJdGVtcyIsImh0bWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRMZWdlbmQiLCJzdHlsZSIsImZvbnRTaXplIiwiZ2V0RmllbGRzZXRGb290ZXIiLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEFjdGlvbnNTbG90IiwiZ2V0QXJyYXlBY3Rpb25zU2xvdCIsImdldENoaWxkcmVuU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsImdldENvbnRyb2xTbG90IiwiZ2V0UHJvcGVydGllc1RvZ2dsZSIsImdldFByb3BlcnRpZXNBY3RpdmF0b3JzIiwiZ2V0QXJyYXlCdG5BZGQiLCJnZXRBcnJheUJ0bkRlbGV0ZUFsbCIsImdldEJ1dHRvbkFjdGl2ZUNsYXNzIiwiZ2V0RGVzY3JpcHRpb24iLCJmaWVsZHNldCIsImxlZ2VuZCIsImFjdGlvbnMiLCJib2R5IiwicHJvcGVydGllc0NvbnRhaW5lciIsImdldFN3aXRjaGVyIiwibGFiZWxUZXh0IiwiZGVzY3JpcHRpb25JZCIsInJhZGlvQ29udHJvbHMiLCJsYWJlbHMiLCJsYWJlbFRleHRzIiwicmFkaW9Db250cm9sIiwiX1RoZW1lQmFyZWJvbmVzIiwiZm9vdGVyIiwiX2dldCRjYWxsIiwiX2dldCRjYWxsMiIsIl9nZXQkY2FsbDMiLCJfZ2V0JGNhbGw0IiwiX2dldCRjYWxsNSIsIl9nZXQkY2FsbDYiLCJyZW1vdmUiLCJjb250cm9sU2xvdCIsInRoaW5nIiwiZmFrZUZvckVhY2giLCJhcnJheSIsImVzY2FwZVJlZ0V4cCIsInN0cmluZyIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwic3RyIiwiUmVnRXhwIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJwcmV0dHkiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsInJvdW5kIiwic29ydE9iamVjdCIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJhIiwiYiIsImlzTnVsbCIsIkFycmF5IiwiX3R5cGVvZiIsInRhcmdldCIsIl9sZW4iLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiX2RlZmluZVByb3BlcnR5IiwiZGVmaW5lZEluUGF0dGVyblByb3BlcnR5IiwicmVnZXhwIiwidGVzdCIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImNvdW50ZXIiLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwiam9pbiIsImRlcGVuZGVudFNjaGVtYSIsInRtcEVkaXRvciIsInRtcEVycm9ycyIsInNvbWUiLCJpZkVkaXRvciIsImlmRXJyb3JzIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50IiwicHJvcGVydGllc0NvdW50IiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJvYmplY3QiLCJfbnVsbCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJfbG9vcCIsIml0ZW1TdHJpbmdpZmllZCIsIl9yZXQiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsImNvbnN0cmFpbiIsInZhbGlkYXRvckVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBLGlIOzs7Ozs7Ozs7OztBQ0xBLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFD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LFNBQVM7VUFDeEVHLElBQUksRUFBRUE7UUFDUixDQUFDLENBQUM7TUFDSjtNQUVBK0YsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDOFcsS0FBSyxDQUFDLENBQUN6YixPQUFPLENBQUMsVUFBQzJiLFNBQVMsRUFBSztRQUM3QyxJQUFJclUscURBQU0sQ0FBQ21GLFdBQVcsRUFBRWtQLFNBQVMsQ0FBQyxFQUFFO1VBQ2xDLElBQU16USxTQUFTLEdBQUdwTixLQUFJLENBQUMyZCxLQUFLLENBQUNFLFNBQVMsQ0FBQztVQUN2QyxJQUFNQyxlQUFlLEdBQUcxUSxTQUFTLENBQUNwTixLQUFJLEVBQUVGLEtBQUssRUFBRVMsTUFBTSxFQUFFVixHQUFHLEVBQUVnQixJQUFJLENBQUM7VUFFakUsSUFBSWlkLGVBQWUsRUFBRTtZQUNuQkYsWUFBWSxNQUFBcEwsTUFBQSxDQUFBQywrRUFBQSxDQUFPbUwsWUFBWSxHQUFBbkwsK0VBQUEsQ0FBS3FMLGVBQWUsRUFBQztVQUN0RDtRQUNGO01BQ0YsQ0FBQyxDQUFDO01BRUYsSUFBSUYsWUFBWSxDQUFDL1osTUFBTSxHQUFHLENBQUMsSUFBSXRELE1BQU0sQ0FBQ0csTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ3ZEa2QsWUFBWSxHQUFHLENBQ2I7VUFDRXBjLE9BQU8sRUFBRWpCLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLFNBQVMsQ0FBQztVQUNqQ0csSUFBSSxFQUFFQTtRQUNSLENBQUMsQ0FDRjtNQUNIO01BRUEsT0FBTytjLFlBQVk7SUFDckI7RUFBQztFQUFBLE9BQUFwTSxTQUFBO0FBQUE7QUFHWUEsd0VBQVMsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvamVkaS5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvKiBnbG9iYWwgY29uZmlybSAqL1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldEFycmF5Q29udHJvbCh7XG4gICAgICB0aXRsZTogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLmNvbnRyb2wubWVzc2FnZXMuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soZXJyb3IubWVzc2FnZSlcbiAgICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlJdGVtID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgICBjb25zdCBhcnJheUl0ZW1Cb2R5ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldEJvZHkoKVxuXG4gICAgICBhcnJheUl0ZW0uYXBwZW5kQ2hpbGQoYXJyYXlJdGVtQm9keSlcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChhcnJheUl0ZW0pXG5cbiAgICAgIGFycmF5SXRlbUJvZHkuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAvLyBkZWxldGVcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgfVxuXG4gICAgICBhcnJheUl0ZW1Cb2R5LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250cm9sLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgVGhlbWVCb290c3RyYXAzIGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXAzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi4vdGhlbWVzL2JhcmVib25lcydcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuY29udHJvbCA9IG51bGxcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnYm9vdHN0cmFwMyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXAzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbnRhaW5lciBhdHRyaWJ1dGVzIGxpa2UgZGF0YS1wYXRoIGFuZCBkYXRhLXR5cGVcbiAgICovXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGVkaXRvciBjb250cm9sXG4gICAqL1xuICBidWlsZCAoKSB7fVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNvbnRyb2wgVUkgd2hlbiBpdHMgc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLmNvbnRyb2wubWVzc2FnZXMuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soZXJyb3IubWVzc2FnZSlcbiAgICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE11bHRpcGxlQ29udHJvbCh7XG4gICAgICB0aXRsZTogJ09wdGlvbnMnLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCksXG4gICAgICBzd2l0Y2hlck9wdGlvblZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoSW5zdGFuY2UoaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IG9sZEluc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5pbnN0YW5jZXNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkSW5zdGFuY2UudWkuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5jb250YWluZXIpXG5cbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmluZGV4XG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250cm9sLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLmNvbnRyb2wubWVzc2FnZXMuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soZXJyb3IubWVzc2FnZSlcbiAgICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXROdWxsQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE9iamVjdENvbnRyb2woe1xuICAgICAgdGl0bGU6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLnZhbGlkYXRlKClcblxuICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGxhYmVsOiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMuYXBwZW5kQ2hpbGQoY2hlY2JveENvbnRyb2wuY29udGFpbmVyKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzVG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNUb2dnbGUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhQ29udHJvbCh7XG4gICAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2NvbG9yJykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGdldFR5cGUsIGlzU2V0LCBjbG9uZSwgaXNBcnJheSwgbm90U2V0LCBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmNhY2hlID0ge31cbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBjb25zdCBpdGVtc0NvdW50ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGhcbiAgICBsZXQgc2NoZW1hXG5cbiAgICBzY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5pdGVtcygpKSA/IHRoaXMuc2NoZW1hLml0ZW1zKCkgOiB7fVxuXG4gICAgY29uc3QgaGFzUHJlZml4SXRlbXNTY2hlbWEgPSBpc1NldCh0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcygpKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcygpW2l0ZW1zQ291bnRdKVxuXG4gICAgaWYgKGhhc1ByZWZpeEl0ZW1zU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcygpW2l0ZW1zQ291bnRdXG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHNjaGVtYSkgJiYgbm90U2V0KHNjaGVtYS50eXBlKSkge1xuICAgICAgc2NoZW1hLnR5cGUgPSBpc1NldCh2YWx1ZSkgPyBnZXRUeXBlKHZhbHVlKSA6ICdhbnknXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGl0ZW1zQ291bnQsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgY2hpbGQuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZFxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGNhY2hlSW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLmNhY2hlKS5sZW5ndGhcbiAgICB0aGlzLmNhY2hlW2NhY2hlSW5kZXhdID0gdGVtcEVkaXRvclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGlzU2V0KHRoaXMuY2FjaGVbaW5kZXhdKSA/IHRoaXMuY2FjaGVbaW5kZXhdIDogdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgY2hpbGQuc2V0VmFsdWUoaXRlbVZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdzIHR5cGVcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKVswXSkpIHtcbiAgICAvLyAgIHRoaXMudmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZWZhdWx0RXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gICAgICBjb25zdCB2YWxpZERlZmF1bHQgPSBkZWZhdWx0RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAodmFsaWREZWZhdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgbWVyZ2VEZWVwLFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIGlzT2JqZWN0LFxuICBub3RTZXRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KHRoaXMuc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChpc1NldChzY2hlbWEuYWxsT2YpICYmIHNjaGVtYS5vcHRpb25zPy5tZXJnZUFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW5jZXNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGlzT2JqZWN0KHNjaGVtYUNsb25lKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2VzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwLCBmYWxzZSwgc2V0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuXG4gICAgaWYgKHNldFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnN0YW5jZUVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBpbnN0YW5jZSB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGluc3RhbmNlIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHZhbHVlKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0LCBoYXNPd24gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5cbmNsYXNzIE9iamVjdEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBPYmplY3RFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGlzU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQgPSB0aGlzLmplZGkub3B0aW9ucy5kZWFjdGl2YXRlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2RlYWN0aXZhdGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChpc05vdFJlcXVpcmVkICYmIHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQpIHtcbiAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGQuZ2V0S2V5KCldXG5cbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHZhbHVlIGlmIHRoZSBvbGQgdmFsdWUgYW5kIHRoZSBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoZGlmZmVyZW50KG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGlsZC5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY2hpbGQgaW5zdGFuY2UgZm9yIHRoZSBuZXcgdmFsdWUgZW50cnkgaGF2aW5nIHRoZSB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoaW5pdGlhbFZhbHVlKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRlZmF1bHQ6IGluaXRpYWxWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaGFzT3duLCBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcblxuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICdiYXJlYm9uZXMnLFxuICAgICAgcmVmUGFyc2VyOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucm9vdE5hbWUgPSAnIydcbiAgICB0aGlzLnBhdGhTZXBhcmF0b3IgPSAnLydcbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG4gICAgdGhpcy5zY2hlbWEgPSBudWxsXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIpIHtcbiAgICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcih7XG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB0aGlzLm9wdGlvbnMuWE1MSHR0cFJlcXVlc3RcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMub3B0aW9ucy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICBjb25zdCBoaWRkZW5Db250cm9sID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICAvLyBjaXJjdWxhciAkcmVmIGFyZSBub3QgaW5pdGlhbGx5IGRlcmVmZXJlbmNlZCBhbmQgbXVzdCBiZSBkZWZpbmVkIG9uIGNyZWF0aW9uXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIgJiYgaGFzT3duKGNvbmZpZy5zY2hlbWEsICckcmVmJykpIHtcbiAgICAgIGNvbmZpZy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZWZpbmUoY29uZmlnLnNjaGVtYVsnJHJlZiddKVxuICAgIH1cblxuICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBPYmplY3RJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdW1iZXJJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGNvbmZpZy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5vbmVPZigpKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgaXNBcnJheShjb25maWcuc2NoZW1hLnR5cGUoKSkgfHwgbm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgaWYgKG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkgJiYgaXNTZXQoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2NoZW1hID0gY29uZmlnLnNjaGVtYS5jbG9uZSgpXG4gICAgICAgIG9yaWdpbmFsU2NoZW1hLnR5cGUgPSBnZXRUeXBlKGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQnUyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xuXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nLFxuICBub3RTZXQsXG4gIGNsb25lLCBlcXVhbFxufSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIGlmIChub3RTZXQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCA3XG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLmRlZmluaXRpb25zID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAvLyByZWdpc3RlciBkZWZpbml0aW9ucyBhcyBsb25nIGFzIHRoZXkgYXJlIG5vdCByZWZlcmVuY2VzXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGFyZ3Mua2V5ICE9PSAnJHJlZicpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbnNbYXJncy5wYXRoXSA9IGFyZ3MudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIGRlcmVmZXJlbmNlXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc09iamVjdChhcmdzLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVmT3duZXIgPSBhcmdzLnByZXZWYWx1ZVxuICAgICAgICAgIGNvbnN0IHJlZiA9IGFyZ3MudmFsdWVbJyRyZWYnXVxuXG4gICAgICAgICAgaWYgKGlzU2V0KHJlZk93bmVyKSAmJiBpc1NldChyZWYpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NpcmN1bGFyUGF0aChhcmdzLnBhdGgpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaXJjdWxhcicsIGFyZ3MucGF0aClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZk93bmVyW2FyZ3Mua2V5XSA9IHRoaXMuZGVmaW5lKHJlZilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgaXNDaXJjdWxhclBhdGggKHBhdGgpIHtcbiAgICBsZXQgb3V0cHV0ID0gZmFsc2VcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmaW5pdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy8gcmVtb3ZlICNcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygxKVxuXG4gICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYWxmID0gTWF0aC5jZWlsKHBhdGgubGVuZ3RoIC8gMilcbiAgICAgIGNvbnN0IGZpcnN0SGFsZiA9IHBhdGguc2xpY2UoMCwgaGFsZilcbiAgICAgIGNvbnN0IHNlY29uZEhhbGYgPSBwYXRoLnNsaWNlKGhhbGYpXG5cbiAgICAgIGlmIChlcXVhbChmaXJzdEhhbGYsIHNlY29uZEhhbGYpKSB7XG4gICAgICAgIG91dHB1dCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICAvLyBkZWZpbml0aW9uc1xuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZpbml0aW9uc1tyZWZdKSkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcy5kZWZpbml0aW9uc1tyZWZdKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHJlZi5zdGFydHNXaXRoKCdodHRwcycpKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCByZWYsIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICByZXF1ZXN0LnNlbmQobnVsbClcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjYW4gbm90IGxvYWQnLCByZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHJhdmVyc2UgKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudmFsdWVcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MuY2FsbGJhY2tcbiAgICBjb25zdCBwYXRoID0gaXNTZXQoYXJncy5wYXRoKSA/IGFyZ3MucGF0aCArICcvJyArIGFyZ3Mua2V5IDogJyMnXG4gICAgYXJncy5wYXRoID0gcGF0aFxuXG4gICAgaWYgKGlzU2V0KGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soYXJncylcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhZGRpdGlvbmFsUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB0cnVlXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdFxuICB9XG5cbiAgY29udGFpbnMgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5jb250YWlucykpID8gdGhpcy5zY2hlbWEuY29udGFpbnMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVwZW5kZW50U2NoZW1hcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuZWxzZSkpID8gdGhpcy5zY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy5mb3JtYXQoKSkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4Q29udGFpbnMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4Q29udGFpbnMpICYmIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhDb250YWluc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWluQ29udGFpbnMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluQ29udGFpbnMpICYmIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Db250YWluc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLm5vdCkpID8gdGhpcy5zY2hlbWEubm90IDogdW5kZWZpbmVkXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHByZWZpeEl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcykgPyB0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVhZE9ubHkgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEucmVhZE9ubHkpID8gdGhpcy5zY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS50aGVuKSkgPyB0aGlzLnNjaGVtYS50aGVuIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLnR5cGUoKSkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICdpbmhlcml0J1xuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Rm9vdGVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgaHRtbC52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy52YWx1ZSlcbiAgICB9XG5cbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlLWFsbCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2plZGktYWN0aXZlLWJ0bidcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldE9iamVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLmdldFByb3BlcnRpZXNUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQWN0aXZhdG9ycyA9IHRoaXMuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgY29uZmlnLmlkLFxuICAgICAgbGFiZWw6ICdQcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgYWRkUHJvcGVydHlCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1vYmplY3QtYWRkJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvcGVydGllc0NvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIGlmIChjb25maWcuZWRpdGFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHByb3BlcnRpZXNUb2dnbGUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNBY3RpdmF0b3JzKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgZmllbGRzZXQsXG4gICAgICBsZWdlbmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgcHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIsXG4gICAgICBhZGRQcm9wZXJ0eUNvbnRyb2wsXG4gICAgICBhZGRQcm9wZXJ0eUJ0bixcbiAgICAgIHByb3BlcnRpZXNBY3RpdmF0b3JzXG4gICAgfVxuICB9XG5cbiAgZ2V0QXJyYXlDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmdldEJ0bkdyb3VwKClcblxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuZ2V0QXJyYXlCdG5BZGQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgY29uc3QgZGVsZXRlQWxsQnRuID0gdGhpcy5nZXRBcnJheUJ0bkRlbGV0ZUFsbCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtcydcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQWxsQnRuKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGZpZWxkc2V0LFxuICAgICAgbGVnZW5kLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIGJ0bkdyb3VwLFxuICAgICAgYWRkQnRuLFxuICAgICAgZGVsZXRlQWxsQnRuXG4gICAgfVxuICB9XG5cbiAgZ2V0TXVsdGlwbGVDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3Qgc3dpdGNoZXIgPSB0aGlzLmdldFN3aXRjaGVyKHtcbiAgICAgIHZhbHVlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgdGl0bGVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgbGFiZWw6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgc3JPbmx5OiB0cnVlXG4gICAgfSlcblxuICAgIHN3aXRjaGVyLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoc3dpdGNoZXIuY29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGZpZWxkc2V0LFxuICAgICAgbGVnZW5kLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHN3aXRjaGVyXG4gICAgfVxuICB9XG5cbiAgZ2V0TnVsbENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBsYWJlbFRleHRzLnB1c2gobGFiZWxUZXh0KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBsYWJlbHMucHVzaChsYWJlbClcbiAgICB9KVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWhlYWRpbmcnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBzdXBlci5nZXRGaWVsZHNldEZvb3RlcigpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWZvb3RlcicpXG4gICAgcmV0dXJuIGZvb3RlclxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldE1lc3NhZ2VzU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4teHMnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXAzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0RmllbGRzZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZvb3RlcicpXG4gICAgcmV0dXJuIGZvb3RlclxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFjdGlvbnNTbG90KClcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRNZXNzYWdlc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5EZWxldGVBbGwoY29uZmlnKVxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBzdXBlci5nZXRGaWVsZHNldEZvb3RlcigpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZm9vdGVyJylcbiAgICByZXR1cm4gZm9vdGVyXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldE1lc3NhZ2VzU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkRlbGV0ZUFsbChjb25maWcpXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9XG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBmYWtlRm9yRWFjaCA9IChhcnJheSwgY2FsbGJhY2spID0+IHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlc2NhcGVSZWdFeHAgPSAoc3RyaW5nKSA9PiB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHJlcGxhY2VBbGwgPSAoc3RyLCBmaW5kLCByZXBsYWNlKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSlcbn1cblxuZXhwb3J0IGNvbnN0IHBhdGhUb0F0dHJpYnV0ZSA9IChwYXRoKSA9PiB7XG4gIHJldHVybiByZXBsYWNlQWxsKHJlcGxhY2VBbGwocGF0aCwgJyMnLCAncm9vdCcpLCAnLycsICctJylcbn1cblxuZXhwb3J0IGNvbnN0IGhhc093biA9IChvYmosIGtleSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbn1cblxuZXhwb3J0IGNvbnN0IHJvdW5kMmRlY2ltYWxzID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0T2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYS5wcm9wZXJ0aWVzKCkpID8gc2NoZW1hLnByb3BlcnRpZXMoKSA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogYFByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSBkb2VzIG5vdCBhbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXMuYCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcm9vdE5hbWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgYWxsT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZigpKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJvb3ROYW1lOiBrZXksIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVycm9ycyA9IHN1YlNjaGVtYUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgYW55T2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFueU9mKCkpKSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2YoKVxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZTogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5jb25zdCgpKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5jb250YWlucygpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmNvbnRhaW5zKCksIHN0YXJ0VmFsdWU6IGl0ZW0sIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGNvbnRhaW5zRXJyb3JzID0gY29udGFpbnNFZGl0b3IudmFsaWRhdGUoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLm1pbkNvbnRhaW5zKCkpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IHNjaGVtYS5taW5Db250YWlucygpKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBpcyBsZXNzIHRoYW4gbWluaW11bSBjb250YWlucyBjb3VudCBvZiAke3NjaGVtYS5taW5Db250YWlucygpfWAsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiAnTm8gaXRlbXMgbWF0Y2ggY29udGFpbnMnLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLm1heENvbnRhaW5zKCkpKSB7XG4gICAgICBjb25zdCBtYXhDb250YWluc0ludmFsaWQgPSAoY291bnRlciA+IHNjaGVtYS5tYXhDb250YWlucygpKVxuXG4gICAgICBpZiAobWF4Q29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBleGNlZWRzIG1heGltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWF4Q29udGFpbnMoKX1gLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbnRTY2hlbWFzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKSkpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnRTY2hlbWEgPSBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpW2tleV1cbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGRlcGVuZGVudFNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi50bXBFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfZW51bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmVudW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYS5lbnVtKCkuc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmVudW0oKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGdyZWF0ZXIgdGhhbiAnICsgc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGZvcm1hdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuZm9ybWF0KCkpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCBtZXNzYWdlXG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXJsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1cmwnXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXVpZCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXVpZCdcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaXNTZXQocmVnZXhwKSAmJiAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfaWYgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmlmKCkpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWEudGhlbigpKSAmJiBub3RTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLnZhbGlkYXRlKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLnRoZW4oKSkpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLnRoZW4oKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIHRoZW5FcnJvcnMgPSB0aGVuRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgLy8gdG9kbyBpZiBhcnJheSBsZW5ndGggaXMgPiBwcmVmaXhJdGVtcy5sZW5ndGhcbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5pdGVtcygpKSkge1xuICAgIGNvbnN0IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50ID0gaXNTZXQoc2NoZW1hLnByZWZpeEl0ZW1zKCkpID8gc2NoZW1hLnByZWZpeEl0ZW1zKCkubGVuZ3RoIDogMFxuXG4gICAgaWYgKHNjaGVtYS5pdGVtcygpID09PSBmYWxzZSAmJiB2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA+IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50KSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdTY2hlbWEgYWx3YXlzIGZhaWxzIHZhbGlkYXRpb24uJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heEl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4SXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heExlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heExlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4UHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heFByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWEubWF4UHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hLm1heGltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5MZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5MZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5MZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbmltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5pbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbXVsdGlwbGVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm11bHRpcGxlT2YoKSkpIHtcbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSkpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG5vdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEubm90KCkpKSB7XG4gICAgY29uc3Qgbm90RXJyb3JzID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBvbmVPZiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEub25lT2YoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcGF0dGVybiA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm4oKSkpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYS5wYXR0ZXJuKCkpXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLnZhbGlkYXRlKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcvJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgcHJlZml4SXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnByZWZpeEl0ZW1zKCkpKSB7XG4gICAgc2NoZW1hLnByZWZpeEl0ZW1zKCkuZm9yRWFjaCgoaXRlbVNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IHZhbHVlW2luZGV4XVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbVZhbHVlKSkge1xuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogaXRlbVNjaGVtYSwgc3RhcnRWYWx1ZTogaXRlbVZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIC8vIGNvbnN0IHRtcEVkaXRvciA9IHZhbGlkYXRvci52YWxpZGF0ZSgpXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci52YWxpZGF0ZSgpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcblxuICAgICAgICBpZiAodG1wRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgSXRlbSAke2luZGV4fSBmYWlscyB2YWxpZGF0aW9uLmAsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucmVxdWlyZWQoKSkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgc2NoZW1hLnJlcXVpcmVkKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzQm9vbGVhbiwgaXNJbnRlZ2VyLCBpc051bGwsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCB0eXBlID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKGlzU2V0KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBpZiAoaXNBcnJheShzY2hlbWEudHlwZSgpKSkge1xuICAgICAgdmFsaWQgPSBzY2hlbWEudHlwZSgpLnNvbWUoKHR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBzb3J0T2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCB1bmlxdWVJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEudW5pcXVlSXRlbXMoKSkgJiYgc2NoZW1hLnVuaXF1ZUl0ZW1zKCkgPT09IHRydWUpIHtcbiAgICBjb25zdCBzZWVuID0gW11cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdmFsdWVbaV1cblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGl0ZW0gPSBzb3J0T2JqZWN0KGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1TdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pXG4gICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSBzZWVuLnNvbWUoKHNlZW4pID0+IHNlZW4gPT09IGl0ZW1TdHJpbmdpZmllZClcblxuICAgICAgaWYgKGhhc0R1cGxpY2F0ZWRJdGVtcykge1xuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5wdXNoKGl0ZW1TdHJpbmdpZmllZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgZHJhZnQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMidcbmltcG9ydCB7IGhhc093biwgaXNCb29sZWFuIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnRcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHNjaGVtYS5jbG9uZSgpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA/IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSA6ICdpbnZhbGlkJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRyYWZ0KS5mb3JFYWNoKChjb25zdHJhaW4pID0+IHtcbiAgICAgIGlmIChoYXNPd24oc2NoZW1hQ2xvbmUsIGNvbnN0cmFpbikpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5kcmFmdFtjb25zdHJhaW5dXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hLm9wdGlvbignbWVzc2FnZScpKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJyksXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIl0sInNvdXJjZVJvb3QiOiIifQ==