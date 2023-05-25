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
      this.instance.children.forEach(function (child) {
        _this2.childrenSlot.appendChild(child.ui.container);
        child.ui.controlSlot.appendChild(child.ui.arrayActionsSlot);
        while (child.ui.arrayActionsSlot.firstChild) {
          child.ui.arrayActionsSlot.removeChild(child.ui.arrayActionsSlot.lastChild);
        }
        var btnGroup = _this2.theme.getBtnGroup();
        var itemIndex = Number(child.getKey());

        // delete
        var deleteBtn = _this2.theme.getButton({
          textContent: 'Delete item'
        });
        deleteBtn.classList.add('jedi-array-delete');
        deleteBtn.addEventListener('click', function () {
          var itemIndex = Number(child.path.split(_this2.jedi.pathSeparator).pop());
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
        child.ui.arrayActionsSlot.appendChild(btnGroup);
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
      tempEditor.destroy();
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
      this.children.forEach(function (child) {
        child.destroy();
      });
      this.children = [];
      var value = this.getValue();
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isArray"])(value)) {
        return;
      }
      value.forEach(function (itemValue) {
        var child = _this2.createItemInstance(itemValue);
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
      // if (this.schema.enum()) {
      //   value = this.schema.enum()[0]
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
        this.switchInstance(fittestIndex);
      }
      this.activeInstance.setValue(value, true);
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


var _if = function _if(validator, value, schema) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJBcnJheUVkaXRvciIsIl9FZGl0b3IiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYnVpbGQiLCJfdGhpcyIsImZpZWxkc2V0IiwidGhlbWUiLCJnZXRGaWVsZHNldCIsImZpZWxkc2V0Qm9keSIsImdldEZpZWxkc2V0Qm9keSIsImxlZ2VuZCIsImdldExlZ2VuZCIsInRleHRDb250ZW50IiwiaXNTZXQiLCJpbnN0YW5jZSIsInNjaGVtYSIsInRpdGxlIiwiZ2V0S2V5Iiwic3JPbmx5Iiwib3B0aW9uIiwiY29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJhY3Rpb25zU2xvdCIsImRlc2NyaXB0aW9uIiwiZ2V0RGVzY3JpcHRpb24iLCJtZXNzYWdlc1Nsb3QiLCJjaGlsZHJlblNsb3QiLCJidG5Hcm91cCIsImdldEJ0bkdyb3VwIiwiYWRkQnRuIiwiZ2V0QXJyYXlCdG5BZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImdldEFycmF5QnRuRGVsZXRlQWxsIiwiY29uZmlybSIsInNldFZhbHVlIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwibWVzc2FnZSIsImdldEFsZXJ0Iiwic2FuaXRpemUiLCJpc0FycmF5IiwicmVmcmVzaFVJIiwiX3RoaXMyIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJ1aSIsImNvbnRyb2xTbG90IiwiYXJyYXlBY3Rpb25zU2xvdCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsIml0ZW1JbmRleCIsIk51bWJlciIsImRlbGV0ZUJ0biIsImdldEJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsInBhdGgiLCJzcGxpdCIsImplZGkiLCJwYXRoU2VwYXJhdG9yIiwicG9wIiwiZGVsZXRlSXRlbSIsImxlbmd0aCIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwiZ2V0VmFsdWUiLCJtb3ZlRG93bkJ0biIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzYWJsZWQiLCJkaXNhYmxlIiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiZW5hYmxlIiwicmVtb3ZlQXR0cmlidXRlIiwiRWRpdG9yIiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsIl9Cb29sZWFuRWRpdG9yIiwiY29udHJvbCIsImdldFJhZGlvc0NvbnRyb2wiLCJ2YWx1ZXMiLCJ0aXRsZXMiLCJpZCIsInBhdGhUb0F0dHJpYnV0ZSIsImxhYmVsIiwicmFkaW9zIiwicmFkaW8iLCJyYWRpb1ZhbHVlIiwiY2hlY2tlZCIsIkJvb2xlYW5FZGl0b3IiLCJCb29sZWFuRW51bVNlbGVjdEVkaXRvciIsImdldFNlbGVjdENvbnRyb2wiLCJpbnB1dCIsImdldENoZWNrYm94Q29udHJvbCIsIkJvb2xlYW4iLCJfRXZlbnRFbWl0dGVyIiwiY2FsbCIsInByb3BlcnRpZXNTbG90IiwiaW5pdCIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWx3YXlzU2hvd0Vycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwib24iLCJUaGVtZUJvb3RzdHJhcDMiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJUaGVtZUJhcmVib25lcyIsImdldEVkaXRvckNvbnRhaW5lciIsImdldFByb3BlcnRpZXNTbG90IiwiZ2V0Q29udHJvbFNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldEFycmF5QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJ0eXBlIiwiZXJyb3JzIiwidmFsaWRhdGUiLCJpbm5lckhUTUwiLCJlcnJvciIsImludmFsaWRGZWVkYmFjayIsImRlc3Ryb3kiLCJfdGhpczMiLCJwYXJlbnROb2RlIiwiT2JqZWN0Iiwia2V5cyIsIkV2ZW50RW1pdHRlciIsIk11bHRpcGxlRWRpdG9yIiwic3dpdGNoZXIiLCJnZXRTd2l0Y2hlciIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwiaW5kZXgiLCJzd2l0Y2hJbnN0YW5jZSIsIm9sZEluc3RhbmNlIiwiaW5zdGFuY2VzIiwibGFzdEluZGV4IiwiYWN0aXZlSW5zdGFuY2UiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiTnVsbEVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIl9OdW1iZXJFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiZ2V0SW5wdXRDb250cm9sIiwiZm9ybWF0SXMiLCJ0eXBlSXMiLCJNYXRoIiwiZmxvb3IiLCJpc051bWJlciIsIk9iamVjdEVkaXRvciIsInByb3BlcnRpZXNUb2dnbGUiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwicHJvcGVydGllc0NvbnRhaW5lciIsImdldFByb3BlcnRpZXNBY3RpdmF0b3JzIiwiYWRkUHJvcGVydHlDb250cm9sIiwiYWRkUHJvcGVydHlJbnB1dCIsImFkZFByb3BlcnR5QnRuIiwicHJvcGVydHlOYW1lRW1wdHkiLCJwcm9wZXJ0eUV4aXN0IiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJjcmVhdGVDaGlsZCIsImFjdGl2YXRlIiwiZXF1YWwiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJpc09iamVjdCIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsImNoZWNib3hDb250cm9sIiwiY2hlY2tib3giLCJoYXNPd24iLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImRlYWN0aXZhdGUiLCJyZWZyZXNoRWRpdG9ycyIsImlzQWN0aXZlIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiX1N0cmluZ0VkaXRvciIsIlN0cmluZ0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWFDb250cm9sIiwiaW5jbHVkZXMiLCJmb3JtYXQiLCJTdHJpbmciLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZW1pdCIsImZpbHRlciIsImxpc3RlbmVyIiwiQXJyYXlJbnN0YW5jZSIsIl9JbnN0YW5jZSIsInNldFVJIiwicHJlcGFyZSIsInJlZnJlc2hDaGlsZHJlbiIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsIml0ZW1zQ291bnQiLCJpdGVtcyIsImhhc1ByZWZpeEl0ZW1zU2NoZW1hIiwicHJlZml4SXRlbXMiLCJub3RTZXQiLCJnZXRUeXBlIiwiY3JlYXRlSW5zdGFuY2UiLCJwYXJlbnQiLCJmcm9tSW5kZXgiLCJjbG9uZSIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJvbkNoaWxkQ2hhbmdlIiwiaXRlbVZhbHVlIiwiSW5zdGFuY2UiLCJCb29sZWFuSW5zdGFuY2UiLCJjb25maWciLCJ1bmRlZmluZWQiLCJyb290TmFtZSIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwic2V0RGVmYXVsdFZhbHVlIiwiaXNFZGl0b3IiLCJ1bnJlZ2lzdGVyIiwiZGVmYXVsdEVycm9ycyIsInZhbGlkYXRvciIsInZhbGlkRGVmYXVsdCIsInRyaWdnZXJzQ2hhbmdlIiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwiYW55T2YiLCJvbmVPZiIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwiX3NjaGVtYSRvcHRpb25zIiwiX3NjaGVtYSRvcHRpb25zMiIsIl9vYmplY3RTcHJlYWQiLCJhbGxPZiIsIm1lcmdlQWxsT2YiLCJtZXJnZWQiLCJhbGxPZlNjaGVtYSIsIm1lcmdlRGVlcCIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsIm5ld0luZGV4IiwiZ2V0Rml0dGVzdEluZGV4IiwiZml0dGVzdEluZGV4IiwiY2hhbXBpb25FcnJvcnMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiaW5zdGFuY2VFcnJvcnMiLCJlcnIiLCJlIiwiZiIsImRpZmZlcmVudCIsIk51bGxJbnN0YW5jZSIsIk51bWJlckluc3RhbmNlIiwidHlwZUlzTnVtZXJpYyIsIk9iamVjdEluc3RhbmNlIiwicHJvcGVydGllcyIsInJlZnJlc2hJbnN0YW5jZXMiLCJwcm9wZXJ0eSIsInJlcXVpcmVkIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImlzTm90UmVxdWlyZWQiLCJzaG91bGRTdGFydERlYWN0aXZhdGVkIiwiZGVhY3RpdmF0ZVByb3BlcnRpZXMiLCJkZWxldGVDaGlsZCIsImkiLCJnZXRDaGlsZCIsImZpbmQiLCJfdGhpczQiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIlN0cmluZ0luc3RhbmNlIiwiSmVkaSIsImFzc2lnbiIsInNob3dSZXF1aXJlZE9ubHkiLCJyZWZQYXJzZXIiLCJyb290IiwiVmFsaWRhdG9yIiwiUmVmUGFyc2VyIiwiWE1MSHR0cFJlcXVlc3QiLCJkZXJlZmVyZW5jZSIsIlNjaGVtYSIsInN0YXJ0VmFsdWUiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImhpZGRlbkNvbnRyb2wiLCJoaWRkZW5JbnB1dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWZpbmUiLCJvcmlnaW5hbFNjaGVtYSIsIl90aGlzJHJvb3QiLCJnZXRJbnN0YW5jZSIsImVkaXRvciIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl90aGlzNSIsIml0ZXJhdGlvbnMiLCJkZWZpbml0aW9ucyIsInRyYXZlcnNlIiwiYXJncyIsInJlZk93bmVyIiwicHJldlZhbHVlIiwicmVmIiwiaXNDaXJjdWxhclBhdGgiLCJjb25zb2xlIiwibG9nIiwib3V0cHV0Iiwic3Vic3RyaW5nIiwiaGFsZiIsImNlaWwiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwiaXNTdHJpbmciLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJpc0Jvb2xlYW4iLCJfY29uc3QiLCJjb250YWlucyIsIl9kZWZhdWx0IiwiZGVwZW5kZW50U2NoZW1hcyIsIl9lbHNlIiwiX2VudW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsIl9pZiIsIm1heGltdW0iLCJtYXhDb250YWlucyIsImlzSW50ZWdlciIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5Db250YWlucyIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJwYXR0ZXJuIiwicGF0dGVyblByb3BlcnRpZXMiLCJyZWFkT25seSIsIlNldCIsInRoZW4iLCJ1bmlxdWVJdGVtcyIsImh0bWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImZvbnRTaXplIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJsYWJlbFRleHQiLCJkZXNjcmlwdGlvbklkIiwicmFkaW9Db250cm9scyIsImxhYmVscyIsImxhYmVsVGV4dHMiLCJyYWRpb0NvbnRyb2wiLCJfVGhlbWVCYXJlYm9uZXMiLCJfZ2V0JGNhbGwiLCJfZ2V0JGNhbGwyIiwiX2dldCRjYWxsMyIsIl9nZXQkY2FsbDQiLCJfZ2V0JGNhbGw1IiwiX2dldCRjYWxsNiIsInJlbW92ZSIsInRoaW5nIiwiZmFrZUZvckVhY2giLCJhcnJheSIsImVzY2FwZVJlZ0V4cCIsInN0cmluZyIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwic3RyIiwiUmVnRXhwIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJwcmV0dHkiLCJyb3VuZDJkZWNpbWFscyIsIm51bWJlciIsInJvdW5kIiwic29ydE9iamVjdCIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJhIiwiYiIsImlzTnVsbCIsIkFycmF5IiwiX3R5cGVvZiIsInRhcmdldCIsIl9sZW4iLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiX2RlZmluZVByb3BlcnR5IiwiZGVmaW5lZEluUGF0dGVyblByb3BlcnR5IiwicmVnZXhwIiwidGVzdCIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImNvdW50ZXIiLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwiam9pbiIsImRlcGVuZGVudFNjaGVtYSIsInRtcEVkaXRvciIsInRtcEVycm9ycyIsInNvbWUiLCJpZkVkaXRvciIsImlmRXJyb3JzIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50IiwicHJvcGVydGllc0NvdW50IiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJvYmplY3QiLCJfbnVsbCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJfbG9vcCIsIml0ZW1TdHJpbmdpZmllZCIsIl9yZXQiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsImNvbnN0cmFpbiIsInZhbGlkYXRvckVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBLGlIOzs7Ozs7Ozs7OztBQ0xBLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrSDs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSDs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0c7Ozs7Ozs7Ozs7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SSxDQUFDLElBQUksQ0FBQ3NWLEtBQUssQ0FBQyxDQUFDMWEsT0FBTyxDQUFDLFVBQUM0YSxTQUFTLEVBQUs7UUFDN0MsSUFBSTFTLHFEQUFNLENBQUM0RSxXQUFXLEVBQUU4TixTQUFTLENBQUMsRUFBRTtVQUNsQyxJQUFNbFAsU0FBUyxHQUFHbk8sS0FBSSxDQUFDbWQsS0FBSyxDQUFDRSxTQUFTLENBQUM7VUFDdkMsSUFBTUMsZUFBZSxHQUFHblAsU0FBUyxDQUFDbk8sS0FBSSxFQUFFRixLQUFLLEVBQUVhLE1BQU0sRUFBRWQsR0FBRyxFQUFFMEQsSUFBSSxDQUFDO1VBRWpFLElBQUkrWixlQUFlLEVBQUU7WUFDbkJGLFlBQVksTUFBQS9KLE1BQUEsQ0FBQUMsK0VBQUEsQ0FBTzhKLFlBQVksR0FBQTlKLCtFQUFBLENBQUtnSyxlQUFlLEVBQUM7VUFDdEQ7UUFDRjtNQUNGLENBQUMsQ0FBQztNQUVGLElBQUlGLFlBQVksQ0FBQ3ZaLE1BQU0sR0FBRyxDQUFDLElBQUlsRCxNQUFNLENBQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUN2RHFjLFlBQVksR0FBRyxDQUNiO1VBQ0VsYixPQUFPLEVBQUV2QixNQUFNLENBQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7VUFDakN3QyxJQUFJLEVBQUVBO1FBQ1IsQ0FBQyxDQUNGO01BQ0g7TUFFQSxPQUFPNlosWUFBWTtJQUNyQjtFQUFDO0VBQUEsT0FBQS9LLFNBQUE7QUFBQTtBQUdZQSx3RUFBUyxFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qZWRpLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICAvLyB0aXRsZVxuICAgIHRoaXMubGVnZW5kID0gdGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJylcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMuZmllbGRzZXRCb2R5KVxuICAgIHRoaXMubGVnZW5kLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uc1Nsb3QpXG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSkpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24pXG4gICAgfVxuXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QpXG5cbiAgICAvLyBidG4gZ3JvdXBcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMudGhlbWUuZ2V0QnRuR3JvdXAoKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgdGhpcy5hZGRCdG4gPSB0aGlzLnRoZW1lLmdldEFycmF5QnRuQWRkKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nXG4gICAgfSlcblxuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgLy8gZGVsZXRlQWxsXG4gICAgdGhpcy5kZWxldGVBbGxCdG4gPSB0aGlzLnRoZW1lLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICB0aGlzLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmFjdGlvbnNTbG90LmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQWxsQnRuKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmFycmF5QWN0aW9uc1Nsb3QpXG5cbiAgICAgIHdoaWxlIChjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY2hpbGQudWkuYXJyYXlBY3Rpb25zU2xvdC5yZW1vdmVDaGlsZChjaGlsZC51aS5hcnJheUFjdGlvbnNTbG90Lmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLnRoZW1lLmdldEJ0bkdyb3VwKClcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgLy8gZGVsZXRlXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgICB9KVxuXG4gICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUnKVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICAgICAgLy8gbW92ZSB1cFxuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0QnV0dG9uKHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogJ01vdmUgdXAnXG4gICAgICAgIH0pXG5cbiAgICAgICAgbW92ZVVwQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS11cCcpXG5cbiAgICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICB9XG5cbiAgICAgIC8vIG1vdmUgZG93blxuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldEJ1dHRvbih7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgICAgIH0pXG5cbiAgICAgICAgbW92ZURvd25CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLWRvd24nKVxuXG4gICAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgICAgfSlcblxuICAgICAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIH1cblxuICAgICAgY2hpbGQudWkuYXJyYXlBY3Rpb25zU2xvdC5hcHBlbmRDaGlsZChidG5Hcm91cClcblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDMgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLnByb3BlcnRpZXNTbG90ID0gbnVsbFxuICAgIHRoaXMuY29udHJvbFNsb3QgPSBudWxsXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IG51bGxcbiAgICB0aGlzLmFycmF5QWN0aW9uc1Nsb3QgPSBudWxsXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSBudWxsXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignYWx3YXlzU2hvd0Vycm9ycycpKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgfSlcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCYXJlYm9uZXMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJhcmVib25lcygpXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnRoZW1lLmdldEVkaXRvckNvbnRhaW5lcigpXG4gICAgdGhpcy5wcm9wZXJ0aWVzU2xvdCA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgfSlcbiAgICB0aGlzLmNvbnRyb2xTbG90ID0gdGhpcy50aGVtZS5nZXRDb250cm9sU2xvdCgpXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QgPSB0aGlzLnRoZW1lLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgdGhpcy5hY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIHRoaXMuYXJyYXlBY3Rpb25zU2xvdCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgdGhpcy5jaGlsZHJlblNsb3QgPSB0aGlzLnRoZW1lLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICBidWlsZCAoKSB7fVxuXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UudmFsaWRhdGUoKVxuXG4gICAgdGhpcy5tZXNzYWdlc1Nsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soZXJyb3IubWVzc2FnZSlcbiAgICAgIHRoaXMubWVzc2FnZXNTbG90LmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTXVsdGlwbGVFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5maWVsZHNldCA9IHRoaXMudGhlbWUuZ2V0RmllbGRzZXQoKVxuICAgIHRoaXMubGVnZW5kID0gdGhpcy50aGVtZS5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdPcHRpb25zJ1xuICAgIH0pXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy50aGVtZS5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpICsgJy1zd2l0Y2hlcicsXG4gICAgICBsYWJlbDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCkgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHNyT25seTogdHJ1ZVxuICAgIH0pXG5cbiAgICB0aGlzLnN3aXRjaGVyLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIHRoaXMuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5zd2l0Y2hlci5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoSW5zdGFuY2UoaW5kZXgpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0KVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5sZWdlbmQpXG4gICAgdGhpcy5maWVsZHNldC5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkc2V0Qm9keSlcbiAgICB0aGlzLmxlZ2VuZC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbnNTbG90KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hlci5jb250YWluZXIpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IG9sZEluc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5pbnN0YW5jZXNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkSW5zdGFuY2UudWkuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRCb2R5LnJlbW92ZUNoaWxkKG9sZEluc3RhbmNlLnVpLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRhaW5lcilcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgICB0aGlzLnN3aXRjaGVyLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgdGhpcy5zd2l0Y2hlci5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUocmFkaW8udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGFwcGVuZHNcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmZpZWxkc2V0ID0gdGhpcy50aGVtZS5nZXRGaWVsZHNldCgpXG4gICAgdGhpcy5maWVsZHNldEJvZHkgPSB0aGlzLnRoZW1lLmdldEZpZWxkc2V0Qm9keSgpXG5cbiAgICB0aGlzLmxlZ2VuZCA9IHRoaXMudGhlbWUuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpXG4gICAgfSlcblxuICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZSA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgfSlcblxuICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMudGhlbWUuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgdGhpcy5hZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiAnUHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlJbnB1dCA9IHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmlucHV0XG5cbiAgICB0aGlzLmFkZFByb3BlcnR5QnRuID0gdGhpcy50aGVtZS5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1vYmplY3QtYWRkJylcblxuICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmFkZFByb3BlcnR5SW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7IHR5cGU6ICdhbnknIH1cblxuICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5hZGRQcm9wZXJ0eUlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldClcbiAgICB0aGlzLmZpZWxkc2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKVxuICAgIHRoaXMuZmllbGRzZXQuYXBwZW5kQ2hpbGQodGhpcy5maWVsZHNldEJvZHkpXG4gICAgdGhpcy5sZWdlbmQuYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25zU2xvdClcblxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpKSkge1xuICAgICAgdGhpcy5maWVsZHNldEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbilcbiAgICB9XG5cbiAgICB0aGlzLmZpZWxkc2V0Qm9keS5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICAgIHRoaXMuZmllbGRzZXRCb2R5LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSkpIHtcbiAgICAgIHRoaXMuYWN0aW9uc1Nsb3QuYXBwZW5kQ2hpbGQodGhpcy5wcm9wZXJ0aWVzVG9nZ2xlKVxuICAgICAgdGhpcy5wcm9wZXJ0aWVzU2xvdC5hcHBlbmRDaGlsZCh0aGlzLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICB0aGlzLnByb3BlcnRpZXNTbG90LmFwcGVuZENoaWxkKHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmFkZFByb3BlcnR5QnRuKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aCkgKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBjaGVjYm94Q29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgbGFiZWw6IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgc3JPbmx5OiBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2JveENvbnRyb2wuaW5wdXRcblxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRoaXMucHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVjYm94Q29udHJvbC5jb250YWluZXIpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1RvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmFkZFByb3BlcnR5SW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kc1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbFNsb3QpXG4gICAgdGhpcy5jb250cm9sU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlc1Nsb3QpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2xTbG90KVxuICAgIHRoaXMuY29udHJvbFNsb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZXNTbG90KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhQ29udHJvbCh7XG4gICAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2NvbG9yJykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG5cbiAgICAvLyBhcHBlbmRzXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sU2xvdClcbiAgICB0aGlzLmNvbnRyb2xTbG90LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VzU2xvdClcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBnZXRUeXBlLCBpc1NldCwgY2xvbmUsIGlzQXJyYXksIG5vdFNldCwgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuXG5jbGFzcyBBcnJheUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBBcnJheUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbXNDb3VudCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgbGV0IHNjaGVtYVxuXG4gICAgc2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEuaXRlbXMoKSkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKSkgJiYgaXNTZXQodGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKVtpdGVtc0NvdW50XSlcblxuICAgIGlmIChoYXNQcmVmaXhJdGVtc1NjaGVtYSkge1xuICAgICAgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKVtpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdChzY2hlbWEpICYmIG5vdFNldChzY2hlbWEudHlwZSkpIHtcbiAgICAgIHNjaGVtYS50eXBlID0gaXNTZXQodmFsdWUpID8gZ2V0VHlwZSh2YWx1ZSkgOiAnYW55J1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBpdGVtc0NvdW50LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3NlbGVjdCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JbnN0YW5jZVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gICAgdGhpcy51aSA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdTIHNjaGVtYVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIC8vIGlmICh0aGlzLnNjaGVtYS5lbnVtKCkpIHtcbiAgICAvLyAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuamVkaS52YWxpZGF0b3IudmFsaWRhdGUodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0XG59IGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBNdWx0aXBsZUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBNdWx0aXBsZUVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgY29uc3Qgc2V0VmFsdWUgPSBpc09iamVjdChzY2hlbWFDbG9uZSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoMCwgZmFsc2UsIHNldFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChuZXdJbmRleCwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlLCBzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5pbmRleF1cblxuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCksIHRyaWdnZXJzQ2hhbmdlKVxuICAgIH1cbiAgfVxuXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICAvLyBpZiB2YWx1ZSBtYXRjaGVzIHRoZSBhY3RpdmUgaW5zdGFuY2UgdHlwZSBzZXQgdGhlIHZhbHVlLiBFbHNlIHN3aXRjaCB0byB0aGUgZmlyc3RcbiAgICAvLyBpbnN0YW5jZSB0aGF0IG1hdGNoIHRoZSB2YWx1ZS5cbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdmFsdWUpKSB7XG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSB0aGlzLmdldEZpdHRlc3RJbmRleCh2YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4KVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUluc3RhbmNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG5jbGFzcyBOdWxsSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE51bGxFZGl0b3IodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVySW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgTnVtYmVyRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGRpZmZlcmVudCwgaXNTZXQsIG5vdFNldCwgZ2V0VHlwZSwgaXNPYmplY3QsIGhhc093biB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcblxuY2xhc3MgT2JqZWN0SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVtrZXldXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gaXNTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQoKSkgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc093bih0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjcmVhdGVDaGlsZCAoc2NoZW1hLCBrZXkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCBpc05vdFJlcXVpcmVkID0gIXRoaXMuaXNSZXF1aXJlZChrZXkpXG4gICAgY29uc3Qgc2hvdWxkU3RhcnREZWFjdGl2YXRlZCA9IHRoaXMuamVkaS5vcHRpb25zLmRlYWN0aXZhdGVQcm9wZXJ0aWVzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignZGVhY3RpdmF0ZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKGlzTm90UmVxdWlyZWQgJiYgc2hvdWxkU3RhcnREZWFjdGl2YXRlZCkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0SW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE11bHRpcGxlSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgQm9vbGVhbkluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgT2JqZWN0SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEFycmF5SW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgU3RyaW5nSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IE51bWJlckluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBOdWxsSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ2JhcmVib25lcycsXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy50aGVtZSA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcbiAgICB0aGlzLnJlZlBhcnNlciA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlcikge1xuICAgICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKHtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHRoaXMub3B0aW9ucy5YTUxIdHRwUmVxdWVzdFxuICAgICAgfSlcblxuICAgICAgdGhpcy5vcHRpb25zLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWEgPSBuZXcgU2NoZW1hKHRoaXMub3B0aW9ucy5zY2hlbWEpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIGNvbnN0IGhpZGRlbkNvbnRyb2wgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSBoaWRkZW5Db250cm9sLmlucHV0XG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIC8vIGNpcmN1bGFyICRyZWYgYXJlIG5vdCBpbml0aWFsbHkgZGVyZWZlcmVuY2VkIGFuZCBtdXN0IGJlIGRlZmluZWQgb24gY3JlYXRpb25cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlciAmJiBoYXNPd24oY29uZmlnLnNjaGVtYSwgJyRyZWYnKSkge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlZmluZShjb25maWcuc2NoZW1hWyckcmVmJ10pXG4gICAgfVxuXG4gICAgY29uZmlnLnNjaGVtYSA9IG5ldyBTY2hlbWEoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBCb29sZWFuSW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE9iamVjdEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2FycmF5JykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEFycmF5SW5zdGFuY2UoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IFN0cmluZ0luc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXNOdW1lcmljKCkpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bWJlckluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ251bGwnKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTnVsbEluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoY29uZmlnLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLm9uZU9mKCkpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCBub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICBpZiAobm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSAmJiBpc1NldChjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgb3JpZ2luYWxTY2hlbWEudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKG9yaWdpbmFsU2NoZW1hKVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoaW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgdmFsaWRhdGUgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLnZhbGlkYXRlKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdTIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjb250YWlucyAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmNvbnRhaW5zKSkgPyB0aGlzLnNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXBlbmRlbnRTY2hlbWFzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5lbHNlKSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLmZvcm1hdCgpKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICBpZiAoaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhDb250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhDb250YWlucykgJiYgdGhpcy5zY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Db250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Db250YWlucykgJiYgdGhpcy5zY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJlZml4SXRlbXMgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJjbGFzcyBUaGVtZUJhcmVib25lcyB7XG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICBodG1sLnN0eWxlLmZvbnRTaXplID0gJ2luaGVyaXQnXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG5cbiAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICBodG1sLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLnZhbHVlKVxuICAgIH1cblxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFkZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUtYWxsJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnamVkaS1hY3RpdmUtYnRuJ1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCByYWRpb0NvbnRyb2xzID0gW11cbiAgICBjb25zdCByYWRpb3MgPSBbXVxuICAgIGNvbnN0IGxhYmVscyA9IFtdXG4gICAgY29uc3QgbGFiZWxUZXh0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbHMucHVzaChyYWRpb0NvbnRyb2wpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIHJhZGlvcy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG5cbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbGFiZWxUZXh0cy5wdXNoKGxhYmVsVGV4dClcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgbGFiZWxzLnB1c2gobGFiZWwpXG4gICAgfSlcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQmFyZWJvbmVzXG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZpZWxkc2V0Qm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEZpZWxkc2V0Qm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWhlYWRpbmcnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENoaWxkcmVuU2xvdCgpXG4gIH1cblxuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRNZXNzYWdlc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkFkZChjb25maWcpXG4gIH1cblxuICBnZXRBcnJheUJ0bkRlbGV0ZUFsbCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZUJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcblxuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWVCYXJlYm9uZXMge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRFZGl0b3JDb250YWluZXIoKVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRGaWVsZHNldEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRGaWVsZHNldEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gIH1cblxuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDaGlsZHJlblNsb3QoKVxuICB9XG5cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0TWVzc2FnZXNTbG90KClcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QnRuQWRkKGNvbmZpZylcbiAgfVxuXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5EZWxldGVBbGwoY29uZmlnKVxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9XG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfSA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWVCYXJlYm9uZXMgZnJvbSAnLi9iYXJlYm9uZXMnXG5cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lQmFyZWJvbmVzIHtcbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RWRpdG9yQ29udGFpbmVyKClcbiAgfVxuXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0RmllbGRzZXRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICB9XG5cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2hpbGRyZW5TbG90KClcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldE1lc3NhZ2VzU2xvdCgpXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1zbScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QXJyYXlCdG5BZGQoY29uZmlnKVxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIHJldHVybiBzdXBlci5nZXRBcnJheUJ0bkRlbGV0ZUFsbChjb25maWcpXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdidG4tcHJpbWFyeSdcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxlZ2VuZCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiB9ID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH1cbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uIH0gPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1zZWxlY3QnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24gfVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCJleHBvcnQgY29uc3QgY2xvbmUgPSAodGhpbmcpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxufVxuXG5leHBvcnQgY29uc3QgZmFrZUZvckVhY2ggPSAoYXJyYXksIGNhbGxiYWNrKSA9PiB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXNjYXBlUmVnRXhwID0gKHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCByZXBsYWNlQWxsID0gKHN0ciwgZmluZCwgcmVwbGFjZSkgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbmV4cG9ydCBjb25zdCBwYXRoVG9BdHRyaWJ1dGUgPSAocGF0aCkgPT4ge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbmV4cG9ydCBjb25zdCBoYXNPd24gPSAob2JqLCBrZXkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZXhwb3J0IGNvbnN0IHByZXR0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpXG59XG5cbmV4cG9ydCBjb25zdCByb3VuZDJkZWNpbWFscyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5leHBvcnQgY29uc3Qgc29ydE9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGNvbnN0IGVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVudCA9IChhLCBiKSA9PiB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGlzU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydCBjb25zdCBub3RTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlID0gKHZhbHVlKSA9PiB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWEucHJvcGVydGllcygpKSA/IHNjaGVtYS5wcm9wZXJ0aWVzKCkgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci52YWxpZGF0ZSgpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGFsbE9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYWxsT2YoKSkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5LCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IudmFsaWRhdGUoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGFueU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbnlPZigpKSkge1xuICAgIGNvbnN0IGFueU9mID0gc2NoZW1hLmFueU9mKClcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGFueU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAoYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBfY29uc3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5jb25zdCgpKSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWEuY29uc3QoKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuY29uc3QoKSksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuY29udGFpbnMoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5jb250YWlucygpLCBzdGFydFZhbHVlOiBpdGVtLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBjb250YWluc0Vycm9ycyA9IGNvbnRhaW5zRWRpdG9yLnZhbGlkYXRlKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5taW5Db250YWlucygpKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBzY2hlbWEubWluQ29udGFpbnMoKSlcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gaXMgbGVzcyB0aGFuIG1pbmltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWluQ29udGFpbnMoKX1gLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogJ05vIGl0ZW1zIG1hdGNoIGNvbnRhaW5zJyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5tYXhDb250YWlucygpKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBzY2hlbWEubWF4Q29udGFpbnMoKSlcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gZXhjZWVkcyBtYXhpbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1heENvbnRhaW5zKCl9YCxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgZGVwZW5kZW50U2NoZW1hcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKCkpKSB7XG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50U2NoZW1hID0gc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKVtrZXldXG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBkZXBlbmRlbnRTY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci52YWxpZGF0ZSgpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udG1wRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+PSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgZXhjbHVzaXZlTWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDw9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgbWVzc2FnZVxuICAgIGxldCByZWdleHBcblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ2VtYWlsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBtZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3VybCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgICAgbWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXJsJ1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuZm9ybWF0SXMoJ3V1aWQnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICAgIG1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHV1aWQnXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuaWYoKSkpIHtcbiAgICBpZiAobm90U2V0KHNjaGVtYS50aGVuKCkpICYmIG5vdFNldChzY2hlbWEuZWxzZSgpKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IudmFsaWRhdGUoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWEudGhlbigpKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IudmFsaWRhdGUoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgaXRlbXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICAvLyB0b2RvIGlmIGFycmF5IGxlbmd0aCBpcyA+IHByZWZpeEl0ZW1zLmxlbmd0aFxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLml0ZW1zKCkpKSB7XG4gICAgY29uc3QgcHJlZml4SXRlbXNTY2hlbWFzQ291bnQgPSBpc1NldChzY2hlbWEucHJlZml4SXRlbXMoKSkgPyBzY2hlbWEucHJlZml4SXRlbXMoKS5sZW5ndGggOiAwXG5cbiAgICBpZiAoc2NoZW1hLml0ZW1zKCkgPT09IGZhbHNlICYmIHZhbHVlLmxlbmd0aCA+IDAgJiYgdmFsdWUubGVuZ3RoID4gcHJlZml4SXRlbXNTY2hlbWFzQ291bnQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ1NjaGVtYSBhbHdheXMgZmFpbHMgdmFsaWRhdGlvbi4nLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4SXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMoKSArICcgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4TGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4TGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWEubWF4TGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4UHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWF4aW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heGltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5JdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluSXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkxlbmd0aCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkxlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkxlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5MZW5ndGgoKSArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkgKyAnIHByb3BlcnRpZXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluaW11bSA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbmltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWEubWluaW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtdWx0aXBsZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubXVsdGlwbGVPZigpKSkge1xuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkgPT09IE1hdGguZmxvb3IodmFsdWUgLyBzY2hlbWEubXVsdGlwbGVPZigpKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YgfHwgdmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYS5tdWx0aXBsZU9mKCksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IFNjaGVtYSBmcm9tICcuLi8uLi9zY2hlbWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3Qgbm90ID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5ub3QoKSkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2U6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuJyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IG9uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5vbmVPZigpKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hLm9uZU9mKCkuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJuID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEucGF0dGVybigpKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2NoZW1hLnBhdHRlcm4oKSlcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWEucGF0dGVybigpLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IudmFsaWRhdGUoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy8nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBwcmVmaXhJdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEucHJlZml4SXRlbXMoKSkpIHtcbiAgICBzY2hlbWEucHJlZml4SXRlbXMoKS5mb3JFYWNoKChpdGVtU2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXRlbVZhbHVlID0gdmFsdWVbaW5kZXhdXG5cbiAgICAgIGlmIChpc1NldChpdGVtVmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBpdGVtU2NoZW1hLCBzdGFydFZhbHVlOiBpdGVtVmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgLy8gY29uc3QgdG1wRWRpdG9yID0gdmFsaWRhdG9yLnZhbGlkYXRlKClcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLnZhbGlkYXRlKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBJdGVtICR7aW5kZXh9IGZhaWxzIHZhbGlkYXRpb24uYCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5yZXF1aXJlZCgpKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJyksXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHR5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB2YWxpZCA9IHNjaGVtYS50eXBlKCkuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIHNvcnRPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS51bmlxdWVJdGVtcygpKSAmJiBzY2hlbWEudW5pcXVlSXRlbXMoKSA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNlZW4gPSBbXVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXVxuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgaXRlbSA9IHNvcnRPYmplY3QoaXRlbSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbVN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHNlZW4uc29tZSgoc2VlbikgPT4gc2VlbiA9PT0gaXRlbVN0cmluZ2lmaWVkKVxuXG4gICAgICBpZiAoaGFzRHVwbGljYXRlZEl0ZW1zKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLnB1c2goaXRlbVN0cmluZ2lmaWVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0Jvb2xlYW4gfSBmcm9tICcuLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdFxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gc2NoZW1hLmNsb25lKClcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZTogc2NoZW1hLm9wdGlvbignbWVzc2FnZScpID8gc2NoZW1hLm9wdGlvbignbWVzc2FnZScpIDogJ2ludmFsaWQnLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZHJhZnQpLmZvckVhY2goKGNvbnN0cmFpbikgPT4ge1xuICAgICAgaWYgKGhhc093bihzY2hlbWFDbG9uZSwgY29uc3RyYWluKSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmRyYWZ0W2NvbnN0cmFpbl1cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2UnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9