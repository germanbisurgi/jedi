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
      this.fieldset = this.theme.getFieldset();
      this.fieldsetBody = this.theme.getFieldsetBody();

      // title
      this.legend = this.theme.getLegend({
        textContent: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });

      // appends
      this.container.appendChild(this.fieldset);
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.fieldsetBody);
      this.legend.appendChild(this.actionsSlot);
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.description())) {
        this.fieldsetBody.appendChild(this.description);
      }
      this.fieldsetBody.appendChild(this.messagesSlot);
      this.fieldsetBody.appendChild(this.childrenSlot);

      // btn group
      var btnGroup = this.theme.getBtnGroup();

      // addBtn
      this.addBtn = this.theme.getArrayBtnAdd({
        textContent: 'Add item'
      });
      this.addBtn.addEventListener('click', function () {
        _this.instance.addItem();
      });

      // deleteAll
      this.deleteAllBtn = this.theme.getArrayBtnDeleteAll({
        textContent: 'Delete items'
      });
      this.deleteAllBtn.addEventListener('click', function () {
        if (confirm('Confirm to delete all')) {
          _this.instance.setValue([]);
        }
      });
      this.actionsSlot.appendChild(btnGroup);
      btnGroup.appendChild(this.addBtn);
      btnGroup.appendChild(this.deleteAllBtn);
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
      this.childrenSlot.innerHTML = '';
      this.instance.children.forEach(function (child) {
        var arrayItem = _this2.theme.getFieldset();
        var arrayItemBody = _this2.theme.getFieldsetBody();
        arrayItem.appendChild(arrayItemBody);
        _this2.childrenSlot.appendChild(arrayItem);
        arrayItemBody.appendChild(child.ui.container);
        var btnGroup = _this2.theme.getBtnGroup();
        var itemIndex = Number(child.getKey());

        // delete
        var deleteBtn = _this2.theme.getButton({
          textContent: 'Delete item'
        });
        deleteBtn.classList.add('jedi-array-delete');
        deleteBtn.addEventListener('click', function () {
          var itemIndex = Number(child.path.split(_this2.instance.jedi.pathSeparator).pop());
          _this2.instance.deleteItem(itemIndex);
        });
        btnGroup.appendChild(deleteBtn);

        // move up
        if (_this2.instance.children.length !== 0) {
          var moveUpBtn = _this2.theme.getButton({
            textContent: 'Move up'
          });
          moveUpBtn.classList.add('jedi-array-move-up');
          moveUpBtn.addEventListener('click', function () {
            var toIndex = itemIndex - 1;
            _this2.instance.move(itemIndex, toIndex);
          });
          btnGroup.appendChild(moveUpBtn);
        }

        // move down
        if (_this2.instance.getValue().length - 1 !== itemIndex) {
          var moveDownBtn = _this2.theme.getButton({
            textContent: 'Move down'
          });
          moveDownBtn.classList.add('jedi-array-move-down');
          moveDownBtn.addEventListener('click', function () {
            var toIndex = itemIndex + 1;
            _this2.instance.move(itemIndex, toIndex);
          });
          btnGroup.appendChild(moveDownBtn);
        }
        arrayItemBody.appendChild(btnGroup);
        var buttons = _this2.container.querySelectorAll('button');
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

      // events
      this.control.radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var radioValue = radio.value === 'true';
          _this.instance.setValue(radioValue);
        });
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
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

      // events
      this.control.input.addEventListener('change', function () {
        var value = _this.control.input.value === 'true';
        _this.instance.setValue(value);
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
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

      // events
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.checked);
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
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
    _this.propertiesSlot = null;
    _this.controlSlot = null;
    _this.messagesSlot = null;
    _this.actionsSlot = null;
    _this.arrayActionsSlot = null;
    _this.childrenSlot = null;
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
      this.propertiesSlot = this.theme.getPropertiesSlot({
        id: 'properties-slot-' + Object(_utils__WEBPACK_IMPORTED_MODULE_10__["pathToAttribute"])(this.instance.path)
      });
      this.controlSlot = this.theme.getControlSlot();
      this.messagesSlot = this.theme.getMessagesSlot();
      this.actionsSlot = this.theme.getActionsSlot();
      this.arrayActionsSlot = this.theme.getArrayActionsSlot();
      this.childrenSlot = this.theme.getChildrenSlot();
    }
  }, {
    key: "setContainerAttributes",
    value: function setContainerAttributes() {
      this.container.setAttribute('data-path', this.instance.path);
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_10__["isSet"])(this.instance.schema.type())) {
        this.container.setAttribute('data-type', this.instance.schema.type());
      }
    }
  }, {
    key: "build",
    value: function build() {}
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
      this.messagesSlot.innerHTML = '';
      errors.forEach(function (error) {
        var invalidFeedback = _this2.getInvalidFeedback(error.message);
        _this2.messagesSlot.appendChild(invalidFeedback);
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
      this.fieldset = this.theme.getFieldset();
      this.legend = this.theme.getLegend({
        textContent: 'Options'
      });
      this.fieldsetBody = this.theme.getFieldsetBody();
      this.switcher = this.theme.getSwitcher({
        values: this.instance.switcherOptionValues,
        titles: this.instance.switcherOptionsLabels,
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["pathToAttribute"])(this.instance.path) + '-switcher',
        label: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["pathToAttribute"])(this.instance.path) + '-switcher',
        srOnly: true
      });
      this.switcher.container.classList.add('jedi-switcher');
      this.switcher.input.addEventListener('change', function () {
        var index = Number(_this.switcher.input.value);
        _this.instance.switchInstance(index);
      });

      // appends
      this.container.appendChild(this.fieldset);
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.fieldsetBody);
      this.legend.appendChild(this.actionsSlot);
      this.container.appendChild(this.messagesSlot);
      this.actionsSlot.appendChild(this.switcher.container);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var oldInstance = this.instance.instances[this.instance.lastIndex];
      if (oldInstance.ui.container.parentNode) {
        this.fieldsetBody.removeChild(oldInstance.ui.container);
      }
      this.fieldsetBody.appendChild(this.instance.activeInstance.ui.container);
      this.switcher.input.value = this.instance.index;
      var buttons = this.container.querySelectorAll('button');
      if (this.disabled) {
        this.instance.activeInstance.ui.disable();
        this.switcher.input.setAttribute('disabled', 'disabled');
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      } else {
        this.instance.activeInstance.ui.enable();
        this.switcher.input.removeAttribute('disabled', 'disabled');
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
      // appends
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.description())) {
        this.container.appendChild(this.description);
      }
      this.container.appendChild(this.messagesSlot);
      this.container.appendChild(this.controlSlot);
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

      // events
      this.control.radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var value = _this.sanitize(radio.value);
          _this.instance.setValue(value);
        });
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
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
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);

      // events
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

      // events
      this.control.input.addEventListener('change', function () {
        var value = _this.sanitize(_this.control.input.value);
        _this.instance.setValue(value);
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
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
      this.fieldset = this.theme.getFieldset();
      this.fieldsetBody = this.theme.getFieldsetBody();
      this.legend = this.theme.getLegend({
        textContent: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle')
      });
      this.propertiesToggle = this.theme.getPropertiesToggle({
        textContent: 'Properties',
        id: 'properties-slot-' + Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path)
      });
      this.propertiesContainer = this.theme.getPropertiesActivators();
      this.addPropertyControl = this.theme.getInputControl({
        type: 'text',
        id: 'jedi-add-property-input-' + Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: 'Property'
      });
      this.addPropertyInput = this.addPropertyControl.input;
      this.addPropertyBtn = this.theme.getButton({
        textContent: 'Add property'
      });
      this.addPropertyBtn.classList.add('jedi-object-add');
      this.addPropertyBtn.addEventListener('click', function () {
        var key = _this.addPropertyInput.value;
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
        _this.addPropertyInput.value = '';
      });
      this.container.appendChild(this.fieldset);
      this.fieldset.appendChild(this.legend);
      this.fieldset.appendChild(this.fieldsetBody);
      this.legend.appendChild(this.actionsSlot);
      this.description = this.theme.getDescription({
        textContent: this.instance.schema.description()
      });
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.schema.description())) {
        this.fieldsetBody.appendChild(this.description);
      }
      this.fieldsetBody.appendChild(this.propertiesSlot);
      this.fieldsetBody.appendChild(this.messagesSlot);
      this.fieldsetBody.appendChild(this.childrenSlot);
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.jedi.options.editableProperties, true) || Object(_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.schema.option('editableProperties'), true)) {
        this.actionsSlot.appendChild(this.propertiesToggle);
        this.propertiesSlot.appendChild(this.propertiesContainer);
        this.propertiesSlot.appendChild(this.addPropertyControl.container);
        this.addPropertyControl.container.appendChild(this.addPropertyBtn);
      }
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
        while (this.propertiesContainer.firstChild) {
          this.propertiesContainer.removeChild(this.propertiesContainer.lastChild);
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

          // appends
          _this2.propertiesContainer.appendChild(checboxControl.container);
        });
      }
    }
  }, {
    key: "refreshEditors",
    value: function refreshEditors() {
      var _this3 = this;
      while (this.childrenSlot.firstChild) {
        this.childrenSlot.removeChild(this.childrenSlot.lastChild);
      }
      this.instance.children.forEach(function (child) {
        if (child.isActive) {
          _this3.childrenSlot.appendChild(child.ui.container);
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
        this.propertiesToggle.setAttribute('disabled', 'disabled');
        this.addPropertyBtn.setAttribute('disabled', 'disabled');
        this.addPropertyInput.setAttribute('disabled', 'disabled');
      } else {
        this.propertiesToggle.removeAttribute('disabled');
        this.addPropertyBtn.removeAttribute('disabled');
        this.addPropertyInput.removeAttribute('disabled');
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

      // events
      this.control.radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          _this.instance.setValue(radio.value);
        });
      });

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
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
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
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

      // appends
      this.container.appendChild(this.controlSlot);
      this.controlSlot.appendChild(this.control.container);
      this.control.container.appendChild(this.messagesSlot);
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
     * Sets the default value of the instance based on it'S schema
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
      container.appendChild(label);
      container.appendChild(input);
      container.appendChild(description);
      label.appendChild(labelText);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
      var labelText = document.createElement('label');
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
      container.appendChild(label);
      container.appendChild(input);
      container.appendChild(description);
      label.appendChild(labelText);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description
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
      container.appendChild(input);
      container.appendChild(label);
      label.appendChild(labelText);
      container.appendChild(description);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
      container.appendChild(label);
      container.appendChild(input);
      label.appendChild(labelText);
      container.appendChild(description);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        description = _get$call.description;
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
        description: description
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
        description = _get$call2.description;
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
        description: description
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
        description = _get$call3.description;
      container.classList.add('form-group');
      radioControls.forEach(function (radioControl, index) {
        radioControl.classList.add('radio');
        container.appendChild(radioControls[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(radios[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      container.appendChild(description);
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description
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
        description = _get$call4.description;
      container.classList.add('checkbox');
      container.classList.add('form-group');
      container.appendChild(label);
      label.appendChild(input);
      label.appendChild(labelText);
      container.appendChild(description);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        description = _get$call5.description;
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
        description: description
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
        description = _get$call6.description;
      container.classList.remove('form-group');
      input.classList.remove('form-control');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        description = _get$call.description;
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
        description: description
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
        description = _get$call2.description;
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
        description: description
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
        description = _get$call3.description;
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
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description
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
        description = _get$call4.description;
      container.classList.add('form-group');
      container.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      container.appendChild(input);
      container.appendChild(label);
      container.appendChild(description);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        description = _get$call5.description;
      container.classList.add('form-group');
      input.classList.add('form-control');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        description = _get$call6.description;
      container.classList.remove('form-group');
      input.classList.remove('form-control');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        description = _get$call.description;
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
        description: description
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
        description = _get$call2.description;
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
        description: description
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
        description = _get$call3.description;
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
      return {
        container: container,
        legend: legend,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description
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
        description = _get$call4.description;
      container.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      if (config.srOnly) {
        label.classList.add('visually-hidden');
      }
      container.appendChild(input);
      container.appendChild(label);
      container.appendChild(description);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        description = _get$call5.description;
      input.classList.add('form-select');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
        description = _get$call6.description;
      input.classList.remove('form-select');
      label.classList.add('visually-hidden');
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJBcnJheUVkaXRvciIsIl9FZGl0b3IiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYnVpbGQiLCJfdGhpcyIsImZpZWxkc2V0IiwidGhlbWUiLCJnZXRGaWVsZHNldCIsImZpZWxkc2V0Qm9keSIsImdldEZpZWxkc2V0Qm9keSIsImxlZ2VuZCIsImdldExlZ2VuZCIsInRleHRDb250ZW50IiwiaXNTZXQiLCJpbnN0YW5jZSIsInNjaGVtYSIsInRpdGxlIiwiZ2V0S2V5Iiwic3JPbmx5Iiwib3B0aW9uIiwiY29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJhY3Rpb25zU2xvdCIsImRlc2NyaXB0aW9uIiwiZ2V0RGVzY3JpcHRpb24iLCJtZXNzYWdlc1Nsb3QiLCJjaGlsZHJlblNsb3QiLCJidG5Hcm91cCIsImdldEJ0bkdyb3VwIiwiYWRkQnRuIiwiZ2V0QXJyYXlCdG5BZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImdldEFycmF5QnRuRGVsZXRlQWxsIiwiY29uZmlybSIsInNldFZhbHVlIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwibWVzc2FnZSIsImdldEFsZXJ0Iiwic2FuaXRpemUiLCJpc0FycmF5IiwicmVmcmVzaFVJIiwiX3RoaXMyIiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJhcnJheUl0ZW0iLCJhcnJheUl0ZW1Cb2R5IiwidWkiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJkZWxldGVCdG4iLCJnZXRCdXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXRoIiwic3BsaXQiLCJqZWRpIiwicGF0aFNlcGFyYXRvciIsInBvcCIsImRlbGV0ZUl0ZW0iLCJsZW5ndGgiLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsImdldFZhbHVlIiwibW92ZURvd25CdG4iLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc2FibGVkIiwiZGlzYWJsZSIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkVkaXRvciIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJfQm9vbGVhbkVkaXRvciIsImNvbnRyb2wiLCJnZXRSYWRpb3NDb250cm9sIiwidmFsdWVzIiwidGl0bGVzIiwiaWQiLCJwYXRoVG9BdHRyaWJ1dGUiLCJsYWJlbCIsInJhZGlvcyIsInJhZGlvIiwicmFkaW9WYWx1ZSIsImNvbnRyb2xTbG90IiwiY2hlY2tlZCIsIkJvb2xlYW5FZGl0b3IiLCJCb29sZWFuRW51bVNlbGVjdEVkaXRvciIsImdldFNlbGVjdENvbnRyb2wiLCJpbnB1dCIsImdldENoZWNrYm94Q29udHJvbCIsIkJvb2xlYW4iLCJfRXZlbnRFbWl0dGVyIiwiY2FsbCIsInByb3BlcnRpZXNTbG90IiwiYXJyYXlBY3Rpb25zU2xvdCIsImluaXQiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwib3B0aW9ucyIsImFsd2F5c1Nob3dFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsIm9uIiwiVGhlbWVCb290c3RyYXAzIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiVGhlbWVCYXJlYm9uZXMiLCJnZXRFZGl0b3JDb250YWluZXIiLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldENvbnRyb2xTbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRBcnJheUFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwidHlwZSIsImVycm9ycyIsInZhbGlkYXRlIiwiZXJyb3IiLCJpbnZhbGlkRmVlZGJhY2siLCJkZXN0cm95IiwiX3RoaXMzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsIkV2ZW50RW1pdHRlciIsIk11bHRpcGxlRWRpdG9yIiwic3dpdGNoZXIiLCJnZXRTd2l0Y2hlciIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiaW5kZXgiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiTnVsbEVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIl9OdW1iZXJFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiZ2V0SW5wdXRDb250cm9sIiwiZm9ybWF0SXMiLCJ0eXBlSXMiLCJNYXRoIiwiZmxvb3IiLCJpc051bWJlciIsIk9iamVjdEVkaXRvciIsInByb3BlcnRpZXNUb2dnbGUiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwicHJvcGVydGllc0NvbnRhaW5lciIsImdldFByb3BlcnRpZXNBY3RpdmF0b3JzIiwiYWRkUHJvcGVydHlDb250cm9sIiwiYWRkUHJvcGVydHlJbnB1dCIsImFkZFByb3BlcnR5QnRuIiwicHJvcGVydHlOYW1lRW1wdHkiLCJwcm9wZXJ0eUV4aXN0IiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJjcmVhdGVDaGlsZCIsImFjdGl2YXRlIiwiZXF1YWwiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJpc09iamVjdCIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjaGVjYm94Q29udHJvbCIsImNoZWNrYm94IiwiaGFzT3duIiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJkZWFjdGl2YXRlIiwicmVmcmVzaEVkaXRvcnMiLCJpc0FjdGl2ZSIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIl9TdHJpbmdFZGl0b3IiLCJTdHJpbmdFZGl0b3IiLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiaW5wdXRUeXBlcyIsImdldFRleHRhcmVhQ29udHJvbCIsImluY2x1ZGVzIiwiZm9ybWF0IiwiU3RyaW5nIiwibGlzdGVuZXJzIiwibmFtZSIsImNhbGxiYWNrIiwicHVzaCIsImVtaXQiLCJmaWx0ZXIiLCJsaXN0ZW5lciIsIkFycmF5SW5zdGFuY2UiLCJfSW5zdGFuY2UiLCJzZXRVSSIsInByZXBhcmUiLCJjYWNoZSIsInJlZnJlc2hDaGlsZHJlbiIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsIml0ZW1zQ291bnQiLCJpdGVtcyIsImhhc1ByZWZpeEl0ZW1zU2NoZW1hIiwicHJlZml4SXRlbXMiLCJub3RTZXQiLCJnZXRUeXBlIiwiY3JlYXRlSW5zdGFuY2UiLCJwYXJlbnQiLCJmcm9tSW5kZXgiLCJjbG9uZSIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY2FjaGVJbmRleCIsImN1cnJlbnRWYWx1ZSIsIm5ld1ZhbHVlIiwib25DaGlsZENoYW5nZSIsIml0ZW1WYWx1ZSIsIkluc3RhbmNlIiwiQm9vbGVhbkluc3RhbmNlIiwiY29uZmlnIiwidW5kZWZpbmVkIiwicm9vdE5hbWUiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInNldERlZmF1bHRWYWx1ZSIsImlzRWRpdG9yIiwidW5yZWdpc3RlciIsImRlZmF1bHRFcnJvcnMiLCJ2YWxpZGF0b3IiLCJ2YWxpZERlZmF1bHQiLCJ0cmlnZ2Vyc0NoYW5nZSIsIk11bHRpcGxlSW5zdGFuY2UiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsImFueU9mIiwib25lT2YiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIl9zY2hlbWEkb3B0aW9ucyIsIl9zY2hlbWEkb3B0aW9uczIiLCJfb2JqZWN0U3ByZWFkIiwiYWxsT2YiLCJtZXJnZUFsbE9mIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJtZXJnZURlZXAiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJzY2hlbWFDbG9uZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJuZXdJbmRleCIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImluc3RhbmNlRXJyb3JzIiwiZXJyIiwiZSIsImYiLCJkaWZmZXJlbnQiLCJOdWxsSW5zdGFuY2UiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJPYmplY3RJbnN0YW5jZSIsInByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJyZXF1aXJlZCIsImRlcGVuZGVudFJlcXVpcmVkIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJpc05vdFJlcXVpcmVkIiwic2hvdWxkU3RhcnREZWFjdGl2YXRlZCIsImRlYWN0aXZhdGVQcm9wZXJ0aWVzIiwiZGVsZXRlQ2hpbGQiLCJpIiwiZ2V0Q2hpbGQiLCJmaW5kIiwiX3RoaXM0Iiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJTdHJpbmdJbnN0YW5jZSIsIkplZGkiLCJhc3NpZ24iLCJzaG93UmVxdWlyZWRPbmx5IiwicmVmUGFyc2VyIiwicm9vdCIsIlZhbGlkYXRvciIsIlJlZlBhcnNlciIsIlhNTEh0dHBSZXF1ZXN0IiwiZGVyZWZlcmVuY2UiLCJTY2hlbWEiLCJzdGFydFZhbHVlIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJoaWRkZW5Db250cm9sIiwiaGlkZGVuSW5wdXQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVmaW5lIiwib3JpZ2luYWxTY2hlbWEiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJlZGl0b3IiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfdGhpczUiLCJpdGVyYXRpb25zIiwiZGVmaW5pdGlvbnMiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWZPd25lciIsInByZXZWYWx1ZSIsInJlZiIsImlzQ2lyY3VsYXJQYXRoIiwiY29uc29sZSIsImxvZyIsIm91dHB1dCIsInN1YnN0cmluZyIsImhhbGYiLCJjZWlsIiwiZmlyc3RIYWxmIiwic2Vjb25kSGFsZiIsImlzU3RyaW5nIiwic3RhcnRzV2l0aCIsInJlcXVlc3QiLCJvcGVuIiwic2VuZCIsInN0YXR1cyIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaXNCb29sZWFuIiwiX2NvbnN0IiwiY29udGFpbnMiLCJfZGVmYXVsdCIsImRlcGVuZGVudFNjaGVtYXMiLCJfZWxzZSIsIl9lbnVtIiwiZXhjbHVzaXZlTWF4aW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJfaWYiLCJtYXhpbXVtIiwibWF4Q29udGFpbnMiLCJpc0ludGVnZXIiLCJtYXhJdGVtcyIsIm1heExlbmd0aCIsIm1heFByb3BlcnRpZXMiLCJtaW5pbXVtIiwibWluQ29udGFpbnMiLCJtaW5JdGVtcyIsIm1pbkxlbmd0aCIsIm1pblByb3BlcnRpZXMiLCJtdWx0aXBsZU9mIiwibm90IiwicGF0dGVybiIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwicmVhZE9ubHkiLCJTZXQiLCJ0aGVuIiwidW5pcXVlSXRlbXMiLCJodG1sIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJmb250U2l6ZSIsImdldEZpZWxkc2V0Rm9vdGVyIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJsYWJlbFRleHQiLCJkZXNjcmlwdGlvbklkIiwicmFkaW9Db250cm9scyIsImxhYmVscyIsImxhYmVsVGV4dHMiLCJyYWRpb0NvbnRyb2wiLCJfVGhlbWVCYXJlYm9uZXMiLCJmb290ZXIiLCJfZ2V0JGNhbGwiLCJfZ2V0JGNhbGwyIiwiX2dldCRjYWxsMyIsIl9nZXQkY2FsbDQiLCJfZ2V0JGNhbGw1IiwiX2dldCRjYWxsNiIsInJlbW92ZSIsInRoaW5nIiwiZmFrZUZvckVhY2giLCJhcnJheSIsImVzY2FwZVJlZ0V4cCIsInN0cmluZyIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwic3RyIiwiUmVnRXhwIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJwcmV0dHkiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsInJvdW5kIiwic29ydE9iamVjdCIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJhIiwiYiIsImlzTnVsbCIsIkFycmF5IiwiX3R5cGVvZiIsInRhcmdldCIsIl9sZW4iLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiX2RlZmluZVByb3BlcnR5IiwiZGVmaW5lZEluUGF0dGVyblByb3BlcnR5IiwicmVnZXhwIiwidGVzdCIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImNvdW50ZXIiLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwiam9pbiIsImRlcGVuZGVudFNjaGVtYSIsInRtcEVkaXRvciIsInRtcEVycm9ycyIsInNvbWUiLCJpZkVkaXRvciIsImlmRXJyb3JzIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50IiwicHJvcGVydGllc0NvdW50IiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJvYmplY3QiLCJfbnVsbCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJfbG9vcCIsIml0ZW1TdHJpbmdpZmllZCIsIl9yZXQiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsImNvbnN0cmFpbiIsInZhbGlkYXRvckVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBLGlIOzs7Ozs7Ozs7OztBQ0xBLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrSDs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FB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QUFTLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2plZGkuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuZmllbGRzZXQgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keSA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIC8vIHRpdGxlXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuU2xvdClcblxuICAgIC8vIGJ0biBncm91cFxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy50aGVtZS5nZXRCdG5Hcm91cCgpXG5cbiAgICAvLyBhZGRCdG5cbiAgICB0aGlzLmFkZEJ0biA9IHRoaXMudGhlbWUuZ2V0QXJyYXlCdG5BZGQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgdGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICAvLyBkZWxldGVBbGxcbiAgICB0aGlzLmRlbGV0ZUFsbEJ0biA9IHRoaXMudGhlbWUuZ2V0QXJyYXlCdG5EZWxldGVBbGwoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbXMnXG4gICAgfSlcblxuICAgIHRoaXMuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5hZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVBbGxCdG4pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUl0ZW0gPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0KClcbiAgICAgIGNvbnN0IGFycmF5SXRlbUJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICAgIGFycmF5SXRlbS5hcHBlbmRDaGlsZChhcnJheUl0ZW1Cb2R5KVxuXG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChhcnJheUl0ZW0pXG5cbiAgICAgIGFycmF5SXRlbUJvZHkuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udGFpbmVyKVxuXG4gICAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAvLyBkZWxldGVcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAvLyBtb3ZlIHVwXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlVXBCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBkb3duXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bidcbiAgICAgICAgfSlcblxuICAgICAgICBtb3ZlRG93bkJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgfVxuXG4gICAgICBhcnJheUl0ZW1Cb2R5LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4uL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMucHJvcGVydGllc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jb250cm9sU2xvdCA9IG51bGxcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IG51bGxcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gbnVsbFxuICAgIHRoaXMuYXJyYXlBY3Rpb25zU2xvdCA9IG51bGxcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IG51bGxcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnYm9vdHN0cmFwMyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXAzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFyZWJvbmVzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQmFyZWJvbmVzKClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgICB0aGlzLnByb3BlcnRpZXNTbG90ID0gdGhpcy50aGVtZS5nZXRQcm9wZXJ0aWVzU2xvdCh7XG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aClcbiAgICB9KVxuICAgIHRoaXMuY29udHJvbFNsb3QgPSB0aGlzLnRoZW1lLmdldENvbnRyb2xTbG90KClcbiAgICB0aGlzLm1lc3NhZ2VzU2xvdCA9IHRoaXMudGhlbWUuZ2V0TWVzc2FnZXNTbG90KClcbiAgICB0aGlzLmFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5hcnJheUFjdGlvbnNTbG90ID0gdGhpcy50aGVtZS5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICB0aGlzLmNoaWxkcmVuU2xvdCA9IHRoaXMudGhlbWUuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS52YWxpZGF0ZSgpXG5cbiAgICB0aGlzLm1lc3NhZ2VzU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayhlcnJvci5tZXNzYWdlKVxuICAgICAgdGhpcy5tZXNzYWdlc1Nsb3QuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5sZWdlbmQgPSB0aGlzLnRoZW1lLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ09wdGlvbnMnXG4gICAgfSlcbiAgICB0aGlzLmZpZWxkc2V0Qm9keSA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXRCb2R5KClcblxuICAgIHRoaXMuc3dpdGNoZXIgPSB0aGlzLnRoZW1lLmdldFN3aXRjaGVyKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCkgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSArICctc3dpdGNoZXInLFxuICAgICAgc3JPbmx5OiB0cnVlXG4gICAgfSlcblxuICAgIHRoaXMuc3dpdGNoZXIuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgdGhpcy5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5hY3Rpb25zU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaGVyLmNvbnRhaW5lcilcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5maWVsZHNldEJvZHkucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udGFpbmVyKVxuXG4gICAgdGhpcy5zd2l0Y2hlci5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuaW5kZXhcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlci5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUocmFkaW8udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICB0aGlzLmxlZ2VuZCA9IHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZSA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgfSlcblxuICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiAnUHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmlucHV0XG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1vYmplY3QtYWRkJylcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7IHR5cGU6ICdhbnknIH1cblxuICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSkpIHtcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzVG9nZ2xlKVxuICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICB0aGlzLnByb3BlcnRpZXNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aCkgKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBjaGVjYm94Q29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgbGFiZWw6IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgc3JPbmx5OiBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2JveENvbnRyb2wuaW5wdXRcblxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVjYm94Q29udHJvbC5jb250YWluZXIpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhQ29udHJvbCh7XG4gICAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2NvbG9yJykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBnZXRUeXBlLCBpc1NldCwgY2xvbmUsIGlzQXJyYXksIG5vdFNldCwgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuXG5jbGFzcyBBcnJheUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBBcnJheUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbXNDb3VudCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgbGV0IHNjaGVtYVxuXG4gICAgc2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEuaXRlbXMoKSkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKSkgJiYgaXNTZXQodGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKVtpdGVtc0NvdW50XSlcblxuICAgIGlmIChoYXNQcmVmaXhJdGVtc1NjaGVtYSkge1xuICAgICAgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKVtpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdChzY2hlbWEpICYmIG5vdFNldChzY2hlbWEudHlwZSkpIHtcbiAgICAgIHNjaGVtYS50eXBlID0gaXNTZXQodmFsdWUpID8gZ2V0VHlwZSh2YWx1ZSkgOiAnYW55J1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBpdGVtc0NvdW50LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBjYWNoZUluZGV4ID0gT2JqZWN0LmtleXModGhpcy5jYWNoZSkubGVuZ3RoXG4gICAgdGhpcy5jYWNoZVtjYWNoZUluZGV4XSA9IHRlbXBFZGl0b3JcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBpc1NldCh0aGlzLmNhY2hlW2luZGV4XSkgPyB0aGlzLmNhY2hlW2luZGV4XSA6IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIGNoaWxkLnNldFZhbHVlKGl0ZW1WYWx1ZSwgZmFsc2UpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuICAgIHRoaXMudWkgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQnUyBzY2hlbWFcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKVswXSkpIHtcbiAgICAvLyAgIHRoaXMudmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZWZhdWx0RXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gICAgICBjb25zdCB2YWxpZERlZmF1bHQgPSBkZWZhdWx0RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAodmFsaWREZWZhdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICB2YWxpZGF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE11bHRpcGxlRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgbWVyZ2VEZWVwLFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIGlzT2JqZWN0LFxuICBub3RTZXRcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE11bHRpcGxlSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE11bHRpcGxlRWRpdG9yKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpIHx8IGlzU2V0KHRoaXMuc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSA/IHRoaXMuc2NoZW1hLmFueU9mKCkgOiB0aGlzLnNjaGVtYS5vbmVPZigpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIC8vIG1lcmdlIGFsbE9mXG4gICAgICAgIGlmIChpc1NldChzY2hlbWEuYWxsT2YpICYmIHNjaGVtYS5vcHRpb25zPy5tZXJnZUFsbE9mKSB7XG4gICAgICAgICAgbGV0IG1lcmdlZCA9IHt9XG5cbiAgICAgICAgICBzY2hlbWEuYWxsT2YuZm9yRWFjaCgoYWxsT2ZTY2hlbWEpID0+IHtcbiAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlRGVlcChtZXJnZWQsIGFsbE9mU2NoZW1hKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzY2hlbWEgPSBtZXJnZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChjbG9uZVNjaGVtYS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBjbG9uZVNjaGVtYS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWEub3B0aW9ucz8uc3dpdGNoZXJUaXRsZSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5zY2hlbWEudHlwZSgpLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2FueScpIHx8ICF0aGlzLnNjaGVtYS50eXBlKCkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdBcnJheScsICdPYmplY3QnLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBJbnN0YW5jZXNcbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgICAgfSlcblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGlzT2JqZWN0KHNjaGVtYUNsb25lKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2VzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwLCBmYWxzZSwgc2V0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuXG4gICAgaWYgKHNldFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnN0YW5jZUVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBpbnN0YW5jZSB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGluc3RhbmNlIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHZhbHVlKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuY2xhc3MgTnVsbEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBOdWxsRWRpdG9yKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0LCBoYXNPd24gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5cbmNsYXNzIE9iamVjdEluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBPYmplY3RFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGlzU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQgPSB0aGlzLmplZGkub3B0aW9ucy5kZWFjdGl2YXRlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2RlYWN0aXZhdGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChpc05vdFJlcXVpcmVkICYmIHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQpIHtcbiAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGQuZ2V0S2V5KCldXG5cbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHZhbHVlIGlmIHRoZSBvbGQgdmFsdWUgYW5kIHRoZSBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoZGlmZmVyZW50KG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGlsZC5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY2hpbGQgaW5zdGFuY2UgZm9yIHRoZSBuZXcgdmFsdWUgZW50cnkgaGF2aW5nIHRoZSB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoaW5pdGlhbFZhbHVlKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRlZmF1bHQ6IGluaXRpYWxWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0luc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdJbnN0YW5jZVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaGFzT3duLCBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBNdWx0aXBsZUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEJvb2xlYW5JbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IE9iamVjdEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBBcnJheUluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IFN0cmluZ0luc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBOdW1iZXJJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgTnVsbEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcblxuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIGFsd2F5c1Nob3dFcnJvcnM6IGZhbHNlLFxuICAgICAgc2hvd1JlcXVpcmVkT25seTogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgdGhlbWU6ICdiYXJlYm9uZXMnLFxuICAgICAgcmVmUGFyc2VyOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucm9vdE5hbWUgPSAnIydcbiAgICB0aGlzLnBhdGhTZXBhcmF0b3IgPSAnLydcbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMudGhlbWUgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG4gICAgdGhpcy5zY2hlbWEgPSBudWxsXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIpIHtcbiAgICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcih7XG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB0aGlzLm9wdGlvbnMuWE1MSHR0cFJlcXVlc3RcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMub3B0aW9ucy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICBjb25zdCBoaWRkZW5Db250cm9sID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICAvLyBjaXJjdWxhciAkcmVmIGFyZSBub3QgaW5pdGlhbGx5IGRlcmVmZXJlbmNlZCBhbmQgbXVzdCBiZSBkZWZpbmVkIG9uIGNyZWF0aW9uXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIgJiYgaGFzT3duKGNvbmZpZy5zY2hlbWEsICckcmVmJykpIHtcbiAgICAgIGNvbmZpZy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZWZpbmUoY29uZmlnLnNjaGVtYVsnJHJlZiddKVxuICAgIH1cblxuICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBPYmplY3RJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdW1iZXJJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGNvbmZpZy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5vbmVPZigpKSB8fCBjb25maWcuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgaXNBcnJheShjb25maWcuc2NoZW1hLnR5cGUoKSkgfHwgbm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgaWYgKG5vdFNldChjb25maWcuc2NoZW1hLnR5cGUoKSkgJiYgaXNTZXQoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2NoZW1hID0gY29uZmlnLnNjaGVtYS5jbG9uZSgpXG4gICAgICAgIG9yaWdpbmFsU2NoZW1hLnR5cGUgPSBnZXRUeXBlKGNvbmZpZy5zY2hlbWEuZGVmYXVsdCgpKVxuICAgICAgICBjb25maWcuc2NoZW1hID0gbmV3IFNjaGVtYShvcmlnaW5hbFNjaGVtYSlcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoY29uZmlnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTXVsdGlwbGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGluc3RhbmNlKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci52YWxpZGF0ZSgpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQnUyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xuXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nLFxuICBub3RTZXQsXG4gIGNsb25lLCBlcXVhbFxufSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIGlmIChub3RTZXQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCA3XG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLmRlZmluaXRpb25zID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAvLyByZWdpc3RlciBkZWZpbml0aW9ucyBhcyBsb25nIGFzIHRoZXkgYXJlIG5vdCByZWZlcmVuY2VzXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGFyZ3Mua2V5ICE9PSAnJHJlZicpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbnNbYXJncy5wYXRoXSA9IGFyZ3MudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIGRlcmVmZXJlbmNlXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc09iamVjdChhcmdzLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVmT3duZXIgPSBhcmdzLnByZXZWYWx1ZVxuICAgICAgICAgIGNvbnN0IHJlZiA9IGFyZ3MudmFsdWVbJyRyZWYnXVxuXG4gICAgICAgICAgaWYgKGlzU2V0KHJlZk93bmVyKSAmJiBpc1NldChyZWYpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NpcmN1bGFyUGF0aChhcmdzLnBhdGgpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaXJjdWxhcicsIGFyZ3MucGF0aClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZk93bmVyW2FyZ3Mua2V5XSA9IHRoaXMuZGVmaW5lKHJlZilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgaXNDaXJjdWxhclBhdGggKHBhdGgpIHtcbiAgICBsZXQgb3V0cHV0ID0gZmFsc2VcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmaW5pdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy8gcmVtb3ZlICNcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygxKVxuXG4gICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYWxmID0gTWF0aC5jZWlsKHBhdGgubGVuZ3RoIC8gMilcbiAgICAgIGNvbnN0IGZpcnN0SGFsZiA9IHBhdGguc2xpY2UoMCwgaGFsZilcbiAgICAgIGNvbnN0IHNlY29uZEhhbGYgPSBwYXRoLnNsaWNlKGhhbGYpXG5cbiAgICAgIGlmIChlcXVhbChmaXJzdEhhbGYsIHNlY29uZEhhbGYpKSB7XG4gICAgICAgIG91dHB1dCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICAvLyBkZWZpbml0aW9uc1xuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZpbml0aW9uc1tyZWZdKSkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcy5kZWZpbml0aW9uc1tyZWZdKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHJlZi5zdGFydHNXaXRoKCdodHRwcycpKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCByZWYsIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICByZXF1ZXN0LnNlbmQobnVsbClcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjYW4gbm90IGxvYWQnLCByZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHJhdmVyc2UgKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudmFsdWVcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MuY2FsbGJhY2tcbiAgICBjb25zdCBwYXRoID0gaXNTZXQoYXJncy5wYXRoKSA/IGFyZ3MucGF0aCArICcvJyArIGFyZ3Mua2V5IDogJyMnXG4gICAgYXJncy5wYXRoID0gcGF0aFxuXG4gICAgaWYgKGlzU2V0KGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soYXJncylcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi91dGlscydcblxuY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBhZGRpdGlvbmFsUHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB0cnVlXG4gIH1cblxuICBhbGxPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEuYWxsT2YpID8gdGhpcy5zY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGFueU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbnlPZikgPyB0aGlzLnNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb25zdFxuICB9XG5cbiAgY29udGFpbnMgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5jb250YWlucykpID8gdGhpcy5zY2hlbWEuY29udGFpbnMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGNsb25lICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpXG4gIH1cblxuICBkZWZhdWx0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVmYXVsdFxuICB9XG5cbiAgZGVwZW5kZW50UmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVwZW5kZW50U2NoZW1hcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMpID8gdGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZGVzY3JpcHRpb24gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbikgPyB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZWxzZSAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEuZWxzZSkpID8gdGhpcy5zY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZW51bSAoKSB7XG4gICAgaWYgKGlzQXJyYXkodGhpcy5zY2hlbWEuZW51bSkgJiYgdGhpcy5zY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZW51bVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1heGltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGV4Y2x1c2l2ZU1pbmltdW0gKCkge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGZvcm1hdElzICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNTZXQodGhpcy5mb3JtYXQoKSkgJiYgdGhpcy5mb3JtYXQoKSA9PT0gdmFsdWUpXG4gIH1cblxuICBpZiAoKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pZikpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5pZlxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuaXRlbXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5pdGVtcykgPyB0aGlzLnNjaGVtYS5pdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1heGltdW0pID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4Q29udGFpbnMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4Q29udGFpbnMpICYmIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhDb250YWluc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heEl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4SXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtYXhMZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4TGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heExlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heFByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLm1pbmltdW0pID8gdGhpcy5zY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgbWluQ29udGFpbnMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluQ29udGFpbnMpICYmIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Db250YWluc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkl0ZW1zICgpIHtcbiAgICBpZiAoaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSAmJiB0aGlzLnNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluSXRlbXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5MZW5ndGggKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluTGVuZ3RoKSAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pblByb3BlcnRpZXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluUHJvcGVydGllcykgJiYgdGhpcy5zY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluUHJvcGVydGllc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG11bHRpcGxlT2YgKCkge1xuICAgIGlmIChpc051bWJlcih0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSAmJiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbm90ICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLm5vdCkpID8gdGhpcy5zY2hlbWEubm90IDogdW5kZWZpbmVkXG4gIH1cblxuICBvcHRpb24gKG9wdGlvbikge1xuICAgIHJldHVybiAodGhpcy5zY2hlbWEub3B0aW9ucyAmJiB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gdGhpcy5zY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2VcbiAgfVxuXG4gIHBhdHRlcm4gKCkge1xuICAgIHJldHVybiBpc1N0cmluZyh0aGlzLnNjaGVtYS5wYXR0ZXJuKSA/IHRoaXMuc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHByZWZpeEl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcykgPyB0aGlzLnNjaGVtYS5wcmVmaXhJdGVtcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJvcGVydGllcyAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpID8gdGhpcy5zY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVhZE9ubHkgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEucmVhZE9ubHkpID8gdGhpcy5zY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHJlcXVpcmVkICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldCh0aGlzLnNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aGVuICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS50aGVuKSkgPyB0aGlzLnNjaGVtYS50aGVuIDogdW5kZWZpbmVkXG4gIH1cblxuICB0aXRsZSAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnRpdGxlKSA/IHRoaXMuc2NoZW1hLnRpdGxlIDogdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlICgpIHtcbiAgICBpZiAoaXNTdHJpbmcodGhpcy5zY2hlbWEudHlwZSkgfHwgaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGVcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0eXBlSXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLnR5cGUoKSkgJiYgdGhpcy50eXBlKCkgPT09IHZhbHVlKVxuICB9XG5cbiAgdHlwZUlzTnVtZXJpYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZUlzKCdudW1iZXInKSB8fCB0aGlzLnR5cGVJcygnaW50ZWdlcicpXG4gIH1cblxuICBvbmVPZiAoKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5zY2hlbWEub25lT2YpID8gdGhpcy5zY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHVuaXF1ZUl0ZW1zICgpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYVxuIiwiY2xhc3MgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICdpbmhlcml0J1xuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Rm9vdGVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgaHRtbC52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy52YWx1ZSlcbiAgICB9XG5cbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlLWFsbCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2plZGktYWN0aXZlLWJ0bidcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgcmFkaW9Db250cm9scyA9IFtdXG4gICAgY29uc3QgcmFkaW9zID0gW11cbiAgICBjb25zdCBsYWJlbHMgPSBbXVxuICAgIGNvbnN0IGxhYmVsVGV4dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2xzLnB1c2gocmFkaW9Db250cm9sKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpb3MucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuXG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGxhYmVsVGV4dHMucHVzaChsYWJlbFRleHQpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGxhYmVscy5wdXNoKGxhYmVsKVxuICAgIH0pXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGVnZW5kLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJhcmVib25lc1xuIiwiaW1wb3J0IFRoZW1lQmFyZWJvbmVzIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDMgZXh0ZW5kcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEVkaXRvckNvbnRhaW5lcigpXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0RmllbGRzZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdwYW5lbC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRNZXNzYWdlc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkFkZChjb25maWcpXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBzdXBlci5nZXRGaWVsZHNldEZvb3RlcigpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZm9vdGVyJylcbiAgICByZXR1cm4gZm9vdGVyXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldE1lc3NhZ2VzU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkRlbGV0ZUFsbChjb25maWcpXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgbGVnZW5kLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGVnZW5kLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBzdXBlci5nZXRGaWVsZHNldEZvb3RlcigpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZm9vdGVyJylcbiAgICByZXR1cm4gZm9vdGVyXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldE1lc3NhZ2VzU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkRlbGV0ZUFsbChjb25maWcpXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1zZWxlY3QnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZmFrZUZvckVhY2ggPSAoYXJyYXksIGNhbGxiYWNrKSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXNjYXBlUmVnRXhwID0gKHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCByZXBsYWNlQWxsID0gKHN0ciwgZmluZCwgcmVwbGFjZSkgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbmV4cG9ydCBjb25zdCBwYXRoVG9BdHRyaWJ1dGUgPSAocGF0aCkgPT4ge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbmV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWEucHJvcGVydGllcygpKSA/IHNjaGVtYS5wcm9wZXJ0aWVzKCkgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGFsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYWxsT2YoKSkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5LCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGFueU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbnlPZigpKSkge1xuICAgIGNvbnN0IGFueU9mID0gc2NoZW1hLmFueU9mKClcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGFueU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAoYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5jb25zdCgpKSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWEuY29uc3QoKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuY29udGFpbnMoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5jb250YWlucygpLCBzdGFydFZhbHVlOiBpdGVtLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBjb250YWluc0Vycm9ycyA9IGNvbnRhaW5zRWRpdG9yLnZhbGlkYXRlKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5taW5Db250YWlucygpKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBzY2hlbWEubWluQ29udGFpbnMoKSlcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gaXMgbGVzcyB0aGFuIG1pbmltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWluQ29udGFpbnMoKX1gLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogJ05vIGl0ZW1zIG1hdGNoIGNvbnRhaW5zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5tYXhDb250YWlucygpKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBzY2hlbWEubWF4Q29udGFpbnMoKSlcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gZXhjZWVkcyBtYXhpbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1heENvbnRhaW5zKCl9YCxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgZGVwZW5kZW50U2NoZW1hcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKCkpKSB7XG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50U2NoZW1hID0gc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKVtrZXldXG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBkZXBlbmRlbnRTY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci52YWxpZGF0ZSgpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udG1wRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+PSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZXhjbHVzaXZlTWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDw9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgbWVzc2FnZVxuICAgIGxldCByZWdleHBcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3VybCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXJsJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3V1aWQnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHV1aWQnXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5pZigpKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hLnRoZW4oKSkgJiYgbm90U2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci52YWxpZGF0ZSgpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS50aGVuKCkpKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci52YWxpZGF0ZSgpXG4gICAgICB0aGVuRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuZWxzZSgpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgZWxzZUVycm9ycyA9IGVsc2VFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBpdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIC8vIHRvZG8gaWYgYXJyYXkgbGVuZ3RoIGlzID4gcHJlZml4SXRlbXMubGVuZ3RoXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuaXRlbXMoKSkpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHNjaGVtYS5wcmVmaXhJdGVtcygpKSA/IHNjaGVtYS5wcmVmaXhJdGVtcygpLmxlbmd0aCA6IDBcblxuICAgIGlmIChzY2hlbWEuaXRlbXMoKSA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnU2NoZW1hIGFsd2F5cyBmYWlscyB2YWxpZGF0aW9uLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhMZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhMZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heFByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkxlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG11bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBub3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm5vdCgpKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSwgbmV3IFNjaGVtYShzY2hlbWEubm90KCkpLCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYS4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3Qgb25lT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHBhdHRlcm4gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuKCkpKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHNjaGVtYS5wYXR0ZXJuKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLycgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IHByZWZpeEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wcmVmaXhJdGVtcygpKSkge1xuICAgIHNjaGVtYS5wcmVmaXhJdGVtcygpLmZvckVhY2goKGl0ZW1TY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB2YWx1ZVtpbmRleF1cblxuICAgICAgaWYgKGlzU2V0KGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGl0ZW1TY2hlbWEsIHN0YXJ0VmFsdWU6IGl0ZW1WYWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICAvLyBjb25zdCB0bXBFZGl0b3IgPSB2YWxpZGF0b3IudmFsaWRhdGUoKVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgICAgaWYgKHRtcEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogYEl0ZW0gJHtpbmRleH0gZmFpbHMgdmFsaWRhdGlvbi5gLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnJlcXVpcmVkKCkpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYS5yZXF1aXJlZCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgdHlwZSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChzY2hlbWEudHlwZUlzKCdhbnknKSkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWEudHlwZSgpKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHZhbGlkID0gc2NoZW1hLnR5cGUoKS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGUoKV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgc29ydE9iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgdW5pcXVlSXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpICYmIHNjaGVtYS51bmlxdWVJdGVtcygpID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc2VlbiA9IFtdXG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHZhbHVlW2ldXG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICBpdGVtID0gc29ydE9iamVjdChpdGVtKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVtU3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gc2Vlbi5zb21lKChzZWVuKSA9PiBzZWVuID09PSBpdGVtU3RyaW5naWZpZWQpXG5cbiAgICAgIGlmIChoYXNEdXBsaWNhdGVkSXRlbXMpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZW4ucHVzaChpdGVtU3RyaW5naWZpZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBzY2hlbWEuY2xvbmUoKVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBtZXNzYWdlOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykgPyBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykgOiAnaW52YWxpZCcsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSkge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=